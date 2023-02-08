<template>
<!-- Add Event Modal -->
        <div id="add_event" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Event</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Event Name <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Event Date <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                                                        <datepicker v-model="startdate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Category</label>
                    <select class="select form-control">
											<option>Danger</option>
											<option>Success</option>
											<option>Purple</option>
											<option>Primary</option>
											<option>Pink</option>
											<option>Info</option>
											<option>Inverse</option>
											<option>Orange</option>
											<option>Brown</option>
											<option>Teal</option>
											<option>Warning</option>
										</select>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Event Modal -->
        
        <!-- Event Modal -->
        <div class="modal custom-modal fade" id="event-modal">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Event</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer text-center">
                <button type="button" class="btn btn-success submit-btn save-event">Create event</button>
                <button type="button" class="btn btn-danger submit-btn delete-event" data-bs-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Event Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  export default {
     data() {
    return {
      startdate: currentDate,
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