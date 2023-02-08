<template>
<!-- Add Contact Modal -->
        <div class="modal custom-modal fade" id="add_contact" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Contact</h5>
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
                    <label>Email Address</label>
                    <input class="form-control" type="email">
                  </div>
                  <div class="form-group">
                    <label>Contact Number <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label class="d-block">Status</label>
                    <div class="status-toggle">
                      <input type="checkbox" id="contact_status" class="check">
                      <label for="contact_status" class="checktoggle">checkbox</label>
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
        <!-- /Add Contact Modal -->
        
        <!-- Edit Contact Modal -->
        <div class="modal custom-modal fade" id="edit_contact" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Contact</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Name <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" value="John Doe">
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input class="form-control" type="email" value="johndoe@example.com">
                  </div>
                  <div class="form-group">
                    <label>Contact Number <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" value="9876543210">
                  </div>
                  <div class="form-group">
                    <label class="d-block">Status</label>
                    <div class="status-toggle">
                      <input type="checkbox" id="edit_contact_status" class="check">
                      <label for="edit_contact_status" class="checktoggle">checkbox</label>
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
        <!-- /Edit Contact Modal -->

        <!-- Delete Contact Modal -->
        <div class="modal custom-modal fade" id="delete_contact" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Contact</h3>
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
        <!-- /Delete Contact Modal -->
</template>