<template>
<!-- Add Addition Modal -->
        <div id="add_addition" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Addition</h5>
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
                    <label>Category <span class="text-danger">*</span></label>
                    <select class="select">
											<option>Select a category</option>
											<option>Monthly remuneration</option>
											<option>Additional remuneration</option>
										</select>
                  </div>
                  <div class="form-group">
                    <label class="d-block">Unit calculation</label>
                    <div class="status-toggle">
                      <input type="checkbox" id="unit_calculation" class="check">
                      <label for="unit_calculation" class="checktoggle">checkbox</label>
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
                      <input class="form-check-input" type="radio" name="addition_assignee" id="addition_no_emp" value="option1" checked>
                      <label class="form-check-label" for="addition_no_emp">
                      No assignee
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="addition_assignee" id="addition_all_emp" value="option2">
                      <label class="form-check-label" for="addition_all_emp">
                      All employees
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="addition_assignee" id="addition_single_emp" value="option3">
                      <label class="form-check-label" for="addition_single_emp">
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
        <!-- /Add Addition Modal -->
        
        <!-- Edit Addition Modal -->
        <div id="edit_addition" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Addition</h5>
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
                    <label>Category <span class="text-danger">*</span></label>
                    <select class="select">
											<option>Select a category</option>
											<option>Monthly remuneration</option>
											<option>Additional remuneration</option>
										</select>
                  </div>
                  <div class="form-group">
                    <label class="d-block">Unit calculation</label>
                    <div class="status-toggle">
                      <input type="checkbox" id="edit_unit_calculation" class="check">
                      <label for="edit_unit_calculation" class="checktoggle">checkbox</label>
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
                      <input class="form-check-input" type="radio" name="edit_addition_assignee" id="edit_addition_no_emp" value="option1" checked>
                      <label class="form-check-label" for="edit_addition_no_emp">
                      No assignee
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="edit_addition_assignee" id="edit_addition_all_emp" value="option2">
                      <label class="form-check-label" for="edit_addition_all_emp">
                      All employees
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="edit_addition_assignee" id="edit_addition_single_emp" value="option3">
                      <label class="form-check-label" for="edit_addition_single_emp">
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
        
        <!-- Delete Addition Modal -->
        <div class="modal custom-modal fade" id="delete_addition" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Addition</h3>
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
        <!-- /Delete Addition Modal -->
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