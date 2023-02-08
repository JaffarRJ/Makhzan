<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Role\DeleteRequest;
use App\Http\Requests\Api\Role\StoreRequest;
use App\Http\Requests\Api\Role\UpdateRequest;
use App\Jobs\SendNotificationJob;
use App\Models\Permission;
use App\Models\Role;
use App\Models\RolePermission;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
    private $role, $permission, $rolePermission;

    public function __construct()
    {
        $this->role = new Role();
        $this->permission = new Permission();
        $this->rolePermission = new RolePermission();
    }

    public function listing(Request $request)
    {
        $inputs = $request->all();
        $query = $this->role->newQuery();
        if (!empty($inputs['search'])) {
            $query->where(function ($q) use ($inputs) {
                searchTable($q, $inputs['search'], ['slug', 'title']);
            });
        }
        $roles  = $query->get();
        foreach ($roles as $key => $role) {
            $role->permissions = $this->getFormattedPermissions($role);
        }
        return successDataResponse(GENERAL_FETCHED_MESSAGE, $roles);
    }

    public function store(StoreRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $role = $this->role->newInstance();
            $role->slug = str_replace(' ', '-', strtolower($inputs['title']));
            $role->title = $inputs['title'];
            if ($role->save()) {
                if ($this->updateRolePermissions($inputs, $role->id)) {
                    $role = $role->fresh();
                    $role->permissions = $this->getFormattedPermissions($role);
                    // Send Real Time Notification Update
                    systemRealTimeNotify(NOTIFICATION_DATA_CREATED, ADMINISTRATION_COMPONENT_ROLES, $role);
                    DB::commit();
                    return successResponse(GENERAL_SUCCESS_MESSAGE, SUCCESS_200);
                }
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
            $role = $this->role->newQuery()->where('id', $inputs['id'])->first();
            $role->slug = str_replace(' ', '-', strtolower($inputs['title']));
            $role->title = $inputs['title'];
            if ($role->save()) {
                if ($this->updateRolePermissions($inputs, $role->id)) {
                    $this->sendNotification($role->id);
                    $role = $role->fresh();
                    $role->permissions = $this->getFormattedPermissions($role);
                    // Send Real Time Notification Update
                    systemRealTimeNotify(NOTIFICATION_DATA_UPDATED, ADMINISTRATION_COMPONENT_ROLES, $role);
                    DB::commit();
                    return successResponse(GENERAL_SUCCESS_MESSAGE, SUCCESS_200);
                }
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



    private function updateRolePermissions($inputs, $roleId)
    {
        $this->rolePermission->newQuery()->where('role_id', $roleId)->delete();
        foreach ($inputs['permissions'] as $id => $permission) {
            foreach ($permission['action'] as $action => $value) {
                if ($value) {
                    $rolePermission = $this->rolePermission->newInstance();
                    $rolePermission->permission_id = $permission['id'];
                    $rolePermission->role_id = $roleId;
                    $rolePermission->action = $action;
                    if (!$rolePermission->save()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    public function delete(DeleteRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $role = $this->role->newQuery()->where('id', $inputs['id'])->first();
            if (count($role->users)) {
                DB::rollback();
                return errorResponse('Please remove all users from this role to delete!', ERROR_400);
            }
            if ($role->delete()) {
                // Send Real Time Notification Update
                systemRealTimeNotify(NOTIFICATION_DATA_DELETED, ADMINISTRATION_COMPONENT_ROLES, collect(['id' => (integer) $inputs['id']]) );
                DB::commit();
                return successResponse(GENERAL_SUCCESS_MESSAGE, SUCCESS_200);
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

    private function getFormattedPermissions($role)
    {
        $permissions = [];
        $per = $this->permission->newQuery()->get();
        foreach ($per as $key => $permission) {
            $permissions[$key]['id'] = $permission->id;
            $permissions[$key]['title'] = $permission->name;
            $permissions[$key]['action'][ROLE_ACTION_READ] = $this->rolePermission->newQuery()->where('role_id', $role->id)->where('permission_id', $permission->id)->where('action', ROLE_ACTION_READ)->exists();
            $permissions[$key]['action'][ROLE_ACTION_WRITE] = $this->rolePermission->newQuery()->where('role_id', $role->id)->where('permission_id', $permission->id)->where('action', ROLE_ACTION_WRITE)->exists();
        }
        return $permissions;
    }

    public function permissionsList()
    {
        $permissions = [];
        $per = $this->permission->newQuery()->get();
        foreach ($per as $key => $permission) {
            $permissions[$key]['id'] = $permission->id;
            $permissions[$key]['title'] = $permission->name;
            $permissions[$key]['action'][ROLE_ACTION_READ] = true;
            $permissions[$key]['action'][ROLE_ACTION_WRITE] = true;
        }
        return successDataResponse(GENERAL_FETCHED_MESSAGE, $permissions);
    }

    private function sendNotification($roleId)
    {
        $data = [];
        $data['body'] = '';
        $data['title'] = 'Permissions Updated';
        $data['data'] = json_encode(getUserPermissions($roleId));
        dispatch(new SendNotificationJob([$roleId], $data, false));
    }
}
