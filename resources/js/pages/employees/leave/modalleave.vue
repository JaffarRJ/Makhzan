<template>
<!-- Add Leave Modal -->
        <div id="add_leave" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Leave</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <select class="select">
											<option>Select Leave Type</option>
											<option>Casual Leave 12 Days</option>
											<option>Medical Leave</option>
											<option>Loss of Pay</option>
										</select>
                  </div>
                  <div class="form-group">
                    <label>From <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>To <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Number of days <span class="text-danger">*</span></label>
                    <input class="form-control" readonly type="text">
                  </div>
                  <div class="form-group">
                    <label>Remaining Leaves <span class="text-danger">*</span></label>
                    <input class="form-control" readonly value="12" type="text">
                  </div>
                  <div class="form-group">
                    <label>Leave Reason <span class="text-danger">*</span></label>
                    <textarea rows="4" class="form-control"></textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Leave Modal -->
        
        <!-- Edit Leave Modal -->
        <div id="edit_leave" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Leave</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <select class="select">
											<option>Select Leave Type</option>
											<option>Casual Leave 12 Days</option>
										</select>
                  </div>
                  <div class="form-group">
                    <label>From <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="startdate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>To <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="enddate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Number of days <span class="text-danger">*</span></label>
                    <input class="form-control" readonly type="text" value="2">
                  </div>
                  <div class="form-group">
                    <label>Remaining Leaves <span class="text-danger">*</span></label>
                    <input class="form-control" readonly value="12" type="text">
                  </div>
                  <div class="form-group">
                    <label>Leave Reason <span class="text-danger">*</span></label>
                    <textarea rows="4" class="form-control">Going to hospital</textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Leave Modal -->

        <!-- Approve Leave Modal -->
        <div class="modal custom-modal fade" id="approve_leave" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Leave Approve</h3>
                  <p>Are you sure want to approve for this leave?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Approve</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Decline</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Approve Leave Modal -->
        
        <!-- Delete Leave Modal -->
        <div class="modal custom-modal fade" id="delete_approve" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Leave</h3>
                  <p>Are you sure want to delete this leave?</p>
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
        <!-- /Delete Leave Modal -->
</template>
<script>
  import Vue from 'vue'
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
      enddate1: currentDate3,
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