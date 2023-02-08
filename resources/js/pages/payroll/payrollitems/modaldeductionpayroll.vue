<template>
<!-- Add Deduction Modal -->
        <div id="add_deduction" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Deduction</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Name <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label class="d-block">Unit calculation</label>
                    <div class="status-toggle">
                      <input type="checkbox" id="unit_calculation_deduction" class="check">
                      <label for="unit_calculation_deduction" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Unit Amount</label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input type="text" class="form-control">
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="d-block">Assignee</label>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="deduction_assignee" id="deduction_no_emp" value="option1" checked>
                      <label class="form-check-label" for="deduction_no_emp">
                      No assignee
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="deduction_assignee" id="deduction_all_emp" value="option2">
                      <label class="form-check-label" for="deduction_all_emp">
                      All employees
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="deduction_assignee" id="deduction_single_emp" value="option3">
                      <label class="form-check-label" for="deduction_single_emp">
                      Select Employee
                      </label>
                    </div>
                    <div class="form-group">
                      <select class="select">
												<option>-</option>
												<option>Select All</option>
												<option>John Doe</option>
												<option>Richard Miles</option>
											</select>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Deduction Modal -->
        
        <!-- Edit Deduction Modal -->
        <div id="edit_deduction" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Deduction</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Name <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label class="d-block">Unit calculation</label>
                    <div class="status-toggle">
                      <input type="checkbox" id="edit_unit_calculation_deduction" class="check">
                      <label for="edit_unit_calculation_deduction" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Unit Amount</label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input type="text" class="form-control">
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="d-block">Assignee</label>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="edit_deduction_assignee" id="edit_deduction_no_emp" value="option1" checked>
                      <label class="form-check-label" for="edit_deduction_no_emp">
                      No assignee
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="edit_deduction_assignee" id="edit_deduction_all_emp" value="option2">
                      <label class="form-check-label" for="edit_deduction_all_emp">
                      All employees
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="edit_deduction_assignee" id="edit_deduction_single_emp" value="option3">
                      <label class="form-check-label" for="edit_deduction_single_emp">
                      Select Employee
                      </label>
                    </div>
                    <div class="form-group">
                       <select class="select">
												<option>-</option>
												<option>Select All</option>
												<option>John Doe</option>
												<option>Richard Miles</option>
											</select>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Addition Modal -->
        
        <!-- Delete Deduction Modal -->
        <div class="modal custom-modal fade" id="delete_deduction" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Deduction</h3>
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
        <!-- /Delete Deduction Modal -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {

    }
    },
    components: {
   
    },
   mounted() {
        // Select 2
        if ($('.select').length > 0) {
                $('.select').select2({
                    minimumResultsForSearch: -1,
                    width: '100%'
                });
            }
    }
  }
</Script>