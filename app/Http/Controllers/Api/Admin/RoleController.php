<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\User\DeleteRequest;
use App\Http\Requests\Api\User\StoreRequest;
use App\Http\Requests\Api\User\UpdateRequest;
use App\Models\Role;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RoleController extends Controller
{
    private $role;
    public function __construct()
    {
        $this->role = new Role();
    }
    /**
     * @OA\Post(
     *      path="/api/admin/role/listing",
     *      operationId="roles-listing",
     *      tags={"admin,role,listing"},
     *      summary="role",
     *       security={
     *           {"bearerAuth": {}}
     *       },
     *      description="",
     *      @OA\Parameter(
     *          name="search",
     *          description="Search",
     *          required=false,
     *           in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *     )
     */
    public function listing(Request $request)
    {
        $inputs = $request->all();
        $query = $this->role->newQuery();
        if (!empty($inputs['search'])) {
            $query->where(function ($q) use ($inputs) {
                searchTable($q, $inputs['search'], ['name']);
            });
        }
        $roles = $query->paginate(PAGINATE);;
        return successWithData(GENERAL_FETCHED_MESSAGE, $roles);
    }


}
