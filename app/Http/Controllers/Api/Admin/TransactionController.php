<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Transaction\DeleteRequest;
use App\Http\Requests\Api\Transaction\ListingRequest;
use App\Http\Requests\Api\Transaction\StoreRequest;
use App\Http\Requests\Api\Transaction\UpdateRequest;
use App\Models\Transaction;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    private $pagination, $transaction;

    public function __construct()
    {
        $this->transaction = new Transaction();
        $this->pagination = request('page_size') ? request('page_size') : PAGINATE;
    }

    public function listing(ListingRequest $request)
    {
        $inputs = $request->all();
        $query = $this->transaction->newQuery();
        if (!empty($inputs['search'])) {
            $query->where(function ($q) use ($inputs) {
                searchTable($q, $inputs['search'], ['name']);
            });
        }
        $transactions = $query->paginate($this->pagination);
        return successWithData(GENERAL_FETCHED_MESSAGE, $transactions);
    }

    public function store(StoreRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $transaction = $this->transaction->newInstance();
            $transaction->fill($inputs);
            if (!$transaction->save()) {
                DB::rollback();
                return error(GENERAL_ERROR_MESSAGE, ERROR_400);
            }
            DB::commit();
            return successWithData(GENERAL_SUCCESS_MESSAGE, $transaction->fresh());
        } catch (QueryException $e) {
            DB::rollBack();
            return error($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return error($e->getMessage(), ERROR_500);
        }
    }

    public function update(UpdateRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $transaction = $this->transaction->newQuery()->where('id', $inputs['id'])->first();
            $transaction->fill($inputs);
            if (!$transaction->save()) {
                DB::rollback();
                return error(GENERAL_ERROR_MESSAGE, ERROR_400);
            }
            DB::commit();
            return successWithData(GENERAL_SUCCESS_MESSAGE, $transaction->fresh());
        } catch (QueryException $e) {
            DB::rollBack();
            return error($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return error($e->getMessage(), ERROR_500);
        }
    }

    public function delete(DeleteRequest $request)
    {
        try {
            DB::beginTransaction();
            $inputs = $request->all();
            $transaction = $this->transaction->newQuery()->where('id', $inputs['id'])->first();
            if (!$transaction->delete()) {
                DB::rollback();
                return error(GENERAL_ERROR_MESSAGE, ERROR_400);
            }
            DB::commit();
            return success(GENERAL_DELETED_MESSAGE);
        } catch (QueryException $e) {
            DB::rollBack();
            return error($e->getMessage(), ERROR_500);
        } catch (Exception $e) {
            DB::rollBack();
            return error($e->getMessage(), ERROR_500);
        }
    }
}
