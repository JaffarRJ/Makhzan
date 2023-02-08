<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Employee;
use App\Http\Requests\Api\Employee\DeleteRequest;
use App\Http\Requests\Api\Employee\StoreRequest;
use App\Http\Requests\Api\Employee\UpdateRequest;
use Exception;
use Illuminate\Database\QueryException;

class EmployeeController extends Controller
{
    private $user, $pagination;

    public function __construct()
    {
        $this->employee = new Employee();
        $this->pagination = request('page_size') ? request('page_size') : PAGINATE;
    }

    public function listing(Request $request)
    {
        $inputs = $request->all();
        $query = $this->employee->newQuery();
        if (!empty($inputs['search'])) {
            $query->where(function ($q) use ($inputs) {
                searchTable($q, $inputs['search'], ['name', 'email']);
                searchTable($q, $inputs['search'], ['title', 'slug'], 'role');
            });
        }
        if (!empty($inputs['sort_column']) && $inputs['sort_column'] == 'roles.title') {
            $query->join('roles', 'roles.id', '=', 'employees.role_id')
                ->select('roles.name', 'employees.*');
        }
        if (!empty($inputs['sort_column'])) {
            $query->orderBy($inputs['sort_column'], $inputs['sort_value']);
        }
        $users = $query->with('role')->paginate($this->pagination);
        return successDataResponse(GENERAL_FETCHED_MESSAGE, $users);
    }

    public function store(StoreRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $employee = $this->employee->newInstance();
            $employee->fill($inputs);
            if ($employee->save()) {
                DB::commit();
                // Send Real Time Notification Update
                systemRealTimeNotify(NOTIFICATION_DATA_CREATED, PHONEBOOK_COMPONENT_EMPLOYEES, $employee->fresh());
                return successDataResponse(GENERAL_SUCCESS_MESSAGE, $employee);
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

    public function update(UpdateRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $user = $this->employee->newQuery()->where('id', $inputs['id'])->with('role')->first();
            $user->fill($inputs);
            if ($user->save()) {
                DB::commit();
                // Send Real Time Notification Update
                systemRealTimeNotify(NOTIFICATION_DATA_UPDATED, PHONEBOOK_COMPONENT_EMPLOYEES, $user->fresh());
                // Send Real Time Notification For Other Components
                if(count($user->orders) > 0)
                {
                    foreach($user->orders as $order)
                    {
                        $woController = new WorkOrderController();
                        $woController->sendNotificationFromRod($order, $order, $inputs, NOTIFICATION_DATA_UPDATED);
                    }
                }
                return successDataResponse(GENERAL_UPDATED_MESSAGE, $user->fresh('role'));
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

    public function delete(DeleteRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $employee = $this->employee->newQuery()->where('id', $inputs['id'])->first();
            if ($employee->orders()->exists()) {
                return errorResponse('Cannot delete employee that has orders', ERROR_400);
            }
            if (!$employee->delete()) {
                DB::rollback();
                return errorResponse(GENERAL_ERROR_MESSAGE, ERROR_400);
            }
            DB::commit();
            // Send Real Time Notification Update
            systemRealTimeNotify(NOTIFICATION_DATA_DELETED, PHONEBOOK_COMPONENT_EMPLOYEES, collect(['id' => (integer) $inputs['id']]) );
            return successResponse(GENERAL_DELETED_MESSAGE);
        } catch (QueryException $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return errorResponse($e->getMessage(), ERROR_500);
        }
    }
}
