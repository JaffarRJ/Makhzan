<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\User\ChangeStatusRequest;
use App\Http\Requests\Api\User\StoreRequest;
use App\Http\Requests\Api\User\UpdateRequest;
use App\Http\Requests\Api\User\VerifyUserRequest;
use App\Http\Requests\Api\User\VerifyUserTokenRequest;
use App\Jobs\SendMailJob;
use App\Models\User;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    private $user, $pagination;

    public function __construct()
    {
        $this->user = new User();
        $this->pagination = request('page_size') ? request('page_size') : PAGINATE;
    }

    public function store(StoreRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $user = $this->user->newInstance();
            $user->fill($inputs);
            $password = Str::random(20);
            $user->password = Hash::make($password);
            $user->verification_token = generateVerificationToken();
            if (!$user->save()) {
                DB::rollback();
                return errorResponse(GENERAL_ERROR_MESSAGE, ERROR_400);
            }
            // Send Real Time Notification Update
            systemRealTimeNotify(NOTIFICATION_DATA_CREATED, ADMINISTRATION_COMPONENT_USERS, $user->fresh());
            // Send Email
            dispatch(new SendMailJob($user->email, 'Account Setup', ['user' => $user, 'password' => $password], 'new-user'));

            DB::commit();
            return successDataResponse(GENERAL_SUCCESS_MESSAGE, $user);
        } catch (QueryException $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        }
    }

    public function update(UpdateRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $user = $this->user->newQuery()->where('id', $inputs['id'])->with('role')->first();
            $user->fill($inputs);
            if (!$user->save()) {
                DB::rollback();
                return errorResponse(GENERAL_ERROR_MESSAGE, ERROR_400);
            }
            // Send Real Time Notification Update
            systemRealTimeNotify(NOTIFICATION_DATA_UPDATED, ADMINISTRATION_COMPONENT_USERS, $user->fresh());

            DB::commit();
            return successDataResponse(GENERAL_UPDATED_MESSAGE, $user->fresh());
        } catch (QueryException $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        }
    }

    public function verifyUserToken(VerifyUserTokenRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $user = $this->user->newQuery()->where('verification_token', $inputs['token'])->first();
            $user->status = ACTIVE;
            $user->verification_token = NULL;
            if ($user->save()) {
                DB::commit();
                return successResponse(GENERAL_SUCCESS_MESSAGE);
            }
            return errorResponse(GENERAL_ERROR_MESSAGE, ERROR_400);
        } catch (QueryException $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        }
    }

    public function listing(Request $request)
    {
        $inputs = $request->all();
        $query = $this->user->newQuery();
        if (!empty($inputs['search'])) {
            $query->where(function ($q) use ($inputs) {
                searchTable($q, $inputs['search'], ['name', 'email']);
                searchTable($q, $inputs['search'], ['title', 'slug'], 'role');
            });
        }
        $users = $query->with('role')->orderBy('name', 'ASC')->paginate($this->pagination);
        return successDataResponse(GENERAL_SUCCESS_MESSAGE, $users);
    }

    public function changeStatus(ChangeStatusRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $user = $this->user->newQuery()->where('id', $inputs['id'])->first();
            if ($user->status == ACTIVE) {
                $user->status = DEACTIVE;
            } else $user->status = ACTIVE;
            if ($user->save()) {
                // Send Real Time Notification Update
                systemRealTimeNotify(NOTIFICATION_DATA_UPDATED, ADMINISTRATION_COMPONENT_USERS, $user->fresh());
                DB::commit();
                return successDataResponse(GENERAL_UPDATED_MESSAGE, $user);
            }
            DB::rollback();
            return errorResponse(GENERAL_ERROR_MESSAGE, ERROR_400);
        } catch (QueryException $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        }
    }
    public function delete(Request $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            if ($user = $this->user->newQuery()->where('id', $inputs['id'])->first()) {
                if (count($user->orders)) {
                    DB::rollback();
                    return errorResponse("Cannot delete user that has orders", ERROR_400);
                }
                if (!$user->delete()) {
                    DB::rollback();
                    return errorResponse(GENERAL_ERROR_MESSAGE, ERROR_400);
                }
                // Send Real Time Notification Update
                systemRealTimeNotify(NOTIFICATION_DATA_DELETED, ADMINISTRATION_COMPONENT_USERS,  collect(['id' => (integer) $inputs['id']]) );
                DB::commit();
                return successResponse(GENERAL_DELETED_MESSAGE);
            }
            DB::rollback();
            return errorResponse('Invalid user', ERROR_400);
        } catch (QueryException $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        }
    }
}
