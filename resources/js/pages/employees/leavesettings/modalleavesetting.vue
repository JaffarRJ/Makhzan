<template>
<!-- Add Custom Policy Modal -->
        <div id="add_custom_policy" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Custom Policy</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Policy Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Days <span class="text-danger">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group leave-duallist">
                    <label>Add employee</label>
                    <div class="row">
                      <div class="col-lg-5 col-sm-5">
                        <select name="customleave_from" id="customleave_select" class="form-control" size="5" multiple="multiple">
                          <option value="1">Bernardo Galaviz </option>
                          <option value="2">Jeffrey Warden</option>
                          <option value="2">John Doe</option>
                          <option value="2">John Smith</option>
                          <option value="3">Mike Litorus</option>
                        </select>
                      </div>
                      <div class="multiselect-controls col-lg-2 col-sm-2 d-grid gap-2">
                        <button type="button" id="customleave_select_rightAll" class="btn w-100 btn-white"><i class="fa fa-forward"></i></button>
                        <button type="button" id="customleave_select_rightSelected" class="btn w-100 btn-white"><i class="fa fa-chevron-right"></i></button>
                        <button type="button" id="customleave_select_leftSelected" class="btn w-100 btn-white"><i class="fa fa-chevron-left"></i></button>
                        <button type="button" id="customleave_select_leftAll" class="btn w-100 btn-white"><i class="fa fa-backward"></i></button>
                      </div>
                      <div class="col-lg-5 col-sm-5">
                        <select name="customleave_to" id="customleave_select_to" class="form-control" size="8" multiple="multiple"></select>
                      </div>
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
        <!-- /Add Custom Policy Modal -->
        
        <!-- Edit Custom Policy Modal -->
        <div id="edit_custom_policy" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Custom Policy</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Policy Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" value="LOP">
                  </div>
                  <div class="form-group">
                    <label>Days <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" value="4">
                  </div>
                  <div class="form-group leave-duallist">
                    <label>Add employee</label>
                    <div class="row">
                      <div class="col-lg-5 col-sm-5">
                        <select name="edit_customleave_from" id="edit_customleave_select" class="form-control" size="5" multiple="multiple">
                          <option value="1">Bernardo Galaviz </option>
                          <option value="2">Jeffrey Warden</option>
                          <option value="2">John Doe</option>
                          <option value="2">John Smith</option>
                          <option value="3">Mike Litorus</option>
                        </select>
                      </div>
                      <div class="multiselect-controls col-lg-2 col-sm-2 d-grid gap-2">
                        <button type="button" id="edit_customleave_select_rightAll" class="btn w-100 btn-white"><i class="fa fa-forward"></i></button>
                        <button type="button" id="edit_customleave_select_rightSelected" class="btn w-100 btn-white"><i class="fa fa-chevron-right"></i></button>
                        <button type="button" id="edit_customleave_select_leftSelected" class="btn w-100 btn-white"><i class="fa fa-chevron-left"></i></button>
                        <button type="button" id="edit_customleave_select_leftAll" class="btn w-100 btn-white"><i class="fa fa-backward"></i></button>
                      </div>
                      <div class="col-lg-5 col-sm-5">
                        <select name="customleave_to" id="edit_customleave_select_to" class="form-control" size="8" multiple="multiple"></select>
                      </div>
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
        <!-- /Edit Custom Policy Modal -->
        
        <!-- Delete Custom Policy Modal -->
        <div class="modal custom-modal fade" id="delete_custom_policy" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Custom Policy</h3>
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
        <!-- /Delete Custom Policy Modal -->
</template>