<template>
<!-- Add Modal -->
                <div class="modal custom-modal fade" id="add_categories" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Budget</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                            <div class="form-group">
                                <label>Budget Title</label>
                                <input class="form-control" type="text" name="budget_title" placeholder="Budgets Title">
                            </div>

                                <label>Choose Budget Respect Type</label>
                            <div class="form-group">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input BudgetType" type="radio" name="budget_type" id="project2" value="project">
                                  <label class="form-check-label" for="project2">Project</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input BudgetType" type="radio" name="budget_type" id="category1" value="category">
                                  <label class="form-check-label" for="category1">Category</label>
                                </div>
                        
                            </div>

                            <div class="form-group">
                                <label>Start Date</label>
                                <div class="cal-icon custompicker">
                                                        <datepicker v-model="startdate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                                    </div>
                            </div>
                            <div class="form-group">
                                <label>End Date</label>
                                <div class="cal-icon custompicker">
                                                        <datepicker v-model="enddate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                                    </div>
                            </div>

                            <div class="form-group">
                                <label>Expected Revenues</label>
                            </div>
                            <div class="AllRevenuesClass">
                                <div class="row AlLRevenues">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Revenue Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control RevenuETitle" value="" placeholder="Revenue Title" name="revenue_title[]" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="form-group">
                                            <label>Revenue Amount <span class="text-danger">*</span></label>
                                            <input type="text" name="revenue_amount[]" placeholder="Amount" value="" class="form-control RevenuEAmount" autocomplete="off" >
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <div class="add-more">
                                            <a class="add_more_revenue" title="Add Revenue" style="cursor: pointer;" ><i class="fa fa-plus-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Overall Revenues <span class="text-danger">(A)</span></label>
                                <input class="form-control" type="text" name="overall_revenues" id="overall_revenues1" placeholder="Overall Revenues" readonly style="cursor: not-allowed;">
                            </div>

                            <div class="form-group">
                                <label>Expected Expenses</label>
                            </div>
                            <div class="AllExpensesClass">
                                <div class="row AlLExpenses">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Expenses Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control EXpensesTItle" value="" placeholder="Expenses Title" name="expenses_title[]" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="form-group">
                                            <label>Expenses Amount <span class="text-danger">*</span></label>
                                            <input type="text" name="expenses_amount[]" placeholder="Amount" value="" class="form-control EXpensesAmount" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <div class="add-more">
                                            <a class="add_more_expenses" title="Add Expenses" style="cursor: pointer;"><i class="fa fa-plus-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Overall Expense <span class="text-danger">(B)</span></label>
                                <input class="form-control" type="text" name="overall_expenses" id="overall_expenses1" placeholder="Overall Expenses" readonly style="cursor: not-allowed;">
                            </div>


                            <div class="form-group">
                                <label>Expected Profit <span class="text-danger">( C = A - B )</span> </label>
                                <input class="form-control" type="text" name="expected_profit" id="expected_profit1" placeholder="Expected Profit" readonly style="cursor: not-allowed;">
                            </div>

                            <div class="form-group">
                                <label>Tax <span class="text-danger">(D)</span></label>
                                <input class="form-control" type="text" name="tax_amount" id="tax_amount1" placeholder="Tax Amount">
                            </div>

                            <div class="form-group">
                                <label>Budget Amount <span class="text-danger">( E = C - D )</span> </label>
                                <input class="form-control" type="text" name="budget_amount" id="budget_amount1" placeholder="Budget Amount" readonly style="cursor: not-allowed;">
                            </div>
                            <div class=" submit-section">
                                <button class="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Modal -->

                <!-- Edit Modal -->
                <div class="modal custom-modal fade" id="edit_categories" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Budget</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <form>
                            <div class="form-group">
                                <label>Budget Title</label>
                                <input class="form-control" type="text" name="budget_title" placeholder="Budgets Title">
                            </div>

                                <label>Choose Budget Respect Type</label>
                            <div class="form-group">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input BudgetType" type="radio" name="budget_type" id="project1" value="project">
                                  <label class="form-check-label" for="project1">Project</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input BudgetType" type="radio" name="budget_type" id="category" value="category">
                                  <label class="form-check-label" for="category">Category</label>
                                </div>
                        
                            </div>

                            <div class="form-group">
                                <label>Start Date</label>
                                <div class="cal-icon custompicker">
                                                        <datepicker v-model="startdate1"  class="picker" 
                                                        :editable="false"
                                                        :clearable="false" />
                                                    </div>
                            </div>
                            <div class="form-group">
                              <label>End Date</label>
                                <div class="cal-icon custompicker">
                                                        <datepicker v-model="enddate1"  class="picker" 
                                                        :editable="false"
                                                        :clearable="false" />
                                                    </div>
                            </div>

                            <div class="form-group">
                                <label>Expected Revenues</label>
                            </div>
                            <div class="AllRevenuesClass">
                                <div class="row AlLRevenues">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Revenue Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control RevenuETitle" value="" placeholder="Revenue Title" name="revenue_title[]" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="form-group">
                                            <label>Revenue Amount <span class="text-danger">*</span></label>
                                            <input type="text" name="revenue_amount[]" placeholder="Amount" value="" class="form-control RevenuEAmount" autocomplete="off" >
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <div class="add-more">
                                            <a class="add_more_revenue" title="Add Revenue" style="cursor: pointer;" ><i class="fa fa-plus-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Overall Revenues <span class="text-danger">(A)</span></label>
                                <input class="form-control" type="text" name="overall_revenues" id="overall_revenues" placeholder="Overall Revenues" readonly style="cursor: not-allowed;">
                            </div>

                            <div class="form-group">
                                <label>Expected Expenses</label>
                            </div>
                            <div class="AllExpensesClass">
                                <div class="row AlLExpenses">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Expenses Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control EXpensesTItle" value="" placeholder="Expenses Title" name="expenses_title[]" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="form-group">
                                            <label>Expenses Amount <span class="text-danger">*</span></label>
                                            <input type="text" name="expenses_amount[]" placeholder="Amount" value="" class="form-control EXpensesAmount" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <div class="add-more">
                                            <a class="add_more_expenses" title="Add Expenses" style="cursor: pointer;"><i class="fa fa-plus-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Overall Expense <span class="text-danger">(B)</span></label>
                                <input class="form-control" type="text" name="overall_expenses" id="overall_expenses" placeholder="Overall Expenses" readonly style="cursor: not-allowed;">
                            </div>


                            <div class="form-group">
                                <label>Expected Profit <span class="text-danger">( C = A - B )</span> </label>
                                <input class="form-control" type="text" name="expected_profit" id="expected_profit" placeholder="Expected Profit" readonly style="cursor: not-allowed;">
                            </div>

                            <div class="form-group">
                                <label>Tax <span class="text-danger">(D)</span></label>
                                <input class="form-control" type="text" name="tax_amount" id="tax_amount" placeholder="Tax Amount">
                            </div>

                            <div class="form-group">
                                <label>Budget Amount <span class="text-danger">( E = C - D )</span> </label>
                                <input class="form-control" type="text" name="budget_amount" id="budget_amount" placeholder="Budget Amount" readonly style="cursor: not-allowed;">
                            </div>
                            <div class="submit-section">
                                <button class="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Edit Modal -->

                <!-- Delete Holiday Modal -->
                <div class="modal custom-modal fade" id="delete" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-header">
                                    <h3>Delete </h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div class="modal-btn delete-action">
                                    <div class="row">
                                        <div class="col-6">
                                            <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Delete Holiday Modal -->
</template>
<script>
import { ref } from 'vue'
const currentDate = ref(new Date())
const currentDate1 = ref(new Date())
const currentDate2 = ref(new Date())
const currentDate3 = ref(new Date())
export default {
    data() {
        return {
            startdate: currentDate,
            enddate: currentDate1,
            startdate1: currentDate2,
            enddate1: currentDate3
        }
    }
}
</script>