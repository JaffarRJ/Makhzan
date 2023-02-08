<template>
<!-- Upgrade Plan Modal -->
          <div class="modal custom-modal fade" id="upgrade_plan" role="dialog">
            <div class="modal-dialog modal-md modal-dialog-centered">
              <div class="modal-content">
                <button type="button" class="close" data-bs-dismiss="modal"><i class="fa fa-close"></i></button>
                <div class="modal-body">
                  <h5 class="modal-title text-center mb-3">Upgrade Plan</h5>
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Plan Name</label>
                          <input type="text" placeholder="Free Trial" class="form-control" value="Free Trial">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Amount</label>
                          <input type="text" class="form-control" value="$500">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Plan Type</label>
                          <select class="select"> 
														<option> Monthly </option>
														<option> Yearly </option>
													</select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>No of Users</label>
                           <select class="select"> 
														<option> 5 Users </option>
														<option> 50 Users </option>
														<option> Unlimited </option>
													</select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>No of Projects</label>
                         <select class="select"> 
														<option> 5 Projects </option>
														<option> 50 Projects </option>
														<option> Unlimited </option>
													</select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>No of Storage Space</label>
                          <select class="select"> 
														<option> 5 GB </option>
														<option> 100 GB </option>
														<option> 500 GB </option>
													</select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Plan Description</label>
                      <textarea class="form-control" rows="4" cols="30"></textarea>
                    </div>
                    <div class="form-group">
                      <label class="d-block">Status</label>
                      <div class="status-toggle">
                        <input type="checkbox" id="upgrade_plan_status" class="check">
                        <label for="upgrade_plan_status" class="checktoggle">checkbox</label>
                      </div>
                    </div>
                    <div class="m-t-20 text-center">
                      <button class="btn btn-primary submit-btn">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Upgrade Plan Modal -->
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
    },
  }
</Script>