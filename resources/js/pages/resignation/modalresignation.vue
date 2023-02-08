<template>
<!-- Add Resignation Modal -->
        <div id="add_resignation" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Resignation</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Resigning Employee <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Notice Date <span class="text-danger">*</span></label>
                   <div class="cal-icon">
                          <datepicker v-model="addstartdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Resignation Date <span class="text-danger">*</span></label>
                   <div class="cal-icon">
                          <datepicker v-model="addenddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Reason <span class="text-danger">*</span></label>
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Resignation Modal -->
        
        <!-- Edit Resignation Modal -->
        <div id="edit_resignation" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Resignation</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Resigning Employee <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" value="John Doe">
                  </div>
                  <div class="form-group">
                    <label>Notice Date <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                          <datepicker v-model="editstartdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Resignation Date <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                          <datepicker v-model="editenddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Reason <span class="text-danger">*</span></label>
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Resignation Modal -->
        
        <!-- Delete Resignation Modal -->
        <div class="modal custom-modal fade" id="delete_resignation" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Resignation</h3>
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
        <!-- /Delete Resignation Modal -->
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
      addstartdate: currentDate,
      addenddate: currentDate1,
      editstartdate: currentDate2,
      editenddate: currentDate3,
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>