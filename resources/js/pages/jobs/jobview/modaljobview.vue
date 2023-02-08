<template>
<!-- Apply Job Modal -->
        <div class="modal custom-modal fade" id="apply_job" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Your Details</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Upload your CV</label>
                    <input type="file" class="form-control" id="cv_upload">
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Apply Job Modal -->
</template>