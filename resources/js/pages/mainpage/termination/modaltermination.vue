<template>
<!-- Add Termination Modal -->
        <div id="add_termination" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Termination</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Terminated Employee <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Termination Type <span class="text-danger">*</span></label>
                    <div class="add-group-btn">
                      <select class="select">
												<option>Misconduct</option>
												<option>Others</option>
											</select>
                      <a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-plus"></i> Add</a>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Termination Date <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Reason <span class="text-danger">*</span></label>
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Notice Date <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
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
        <!-- /Add Termination Modal -->
        
        <!-- Edit Termination Modal -->
        <div id="edit_termination" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Termination</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Terminated Employee <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" value="John Doe">
                  </div>
                  <div class="form-group">
                    <label>Termination Type <span class="text-danger">*</span></label>
                    <div class="add-group-btn">
                     <select class="select">
												<option>Misconduct</option>
												<option>Others</option>
											</select>
                      <a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-plus"></i> Add</a>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Termination Date <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="startdate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Reason <span class="text-danger">*</span></label>
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Notice Date <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="enddate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
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
        <!-- /Edit Termination Modal -->
        
        <!-- Delete Termination Modal -->
        <div class="modal custom-modal fade" id="delete_termination" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Termination</h3>
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
        <!-- /Delete Termination Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  const currentDate2 = ref(new Date())
  const currentDate3 = ref(new Date())
  export default {
    components: {   
    },
    data() {
    return {
      addmodaltermination: ["Misconduct", "Others"],
      editmodaltermination: ['Misconduct', 'Others'],
      startdate: currentDate,
      enddate: currentDate1,
      startdate1: currentDate2,
      enddate1: currentDate3
    }
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