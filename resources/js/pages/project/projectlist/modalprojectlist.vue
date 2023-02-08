<template>
<!-- Create Project Modal -->
        <div id="create_project" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Create Project</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Project Name</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Client</label>
                        <select class="select">
													<option>Global Technologies</option>
													<option>Delta Infotech</option>
												</select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <div class="cal-icon custompicker">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>End Date</label>
                        <div class="cal-icon custompicker">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>Rate</label>
                        <input placeholder="$50" class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>&nbsp;</label>
                        <select class="select">
													<option>Hourly</option>
													<option>Fixed</option>
												</select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Priority</label>
                        <select class="select">
													<option>High</option>
													<option>Medium</option>
													<option>Low</option>
												</select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Add Project Leader</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Team Leader</label>
                        <div class="project-members">
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-16.jpg" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Add Team</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Team Members</label>
                        <div class="project-members">
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-16.jpg" alt="">
                          </a>
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-09.jpg" alt="">
                          </a>
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-10.jpg" alt="">
                          </a>
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-05.jpg" alt="">
                          </a>
                          <span class="all-team">+2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea rows="4" class="form-control summernote" placeholder="Enter your message here"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Upload Files</label>
                    <input class="form-control" type="file">
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Create Project Modal -->
        
        <!-- Edit Project Modal -->
        <div id="edit_project" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Project</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Project Name</label>
                        <input class="form-control" value="Project Management" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Client</label>
                        <select class="select">
													<option>Global Technologies</option>
													<option>Delta Infotech</option>
												</select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <div class="cal-icon custompicker">
                          <datepicker v-model="startdate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>End Date</label>
                        <div class="cal-icon custompicker">
                          <datepicker v-model="enddate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                     </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>Rate</label>
                        <input placeholder="$50" class="form-control" value="$5000" type="text">
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>&nbsp;</label>
                        <select class="select">
													<option>Hourly</option>
													<option selected>Fixed</option>
												</select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Priority</label>
                        <select class="select">
													<option selected>High</option>
													<option>Medium</option>
													<option>Low</option>
												</select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Add Project Leader</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Team Leader</label>
                        <div class="project-members">
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-16.jpg" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Add Team</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Team Members</label>
                        <div class="project-members">
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-16.jpg" alt="">
                          </a>
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-09.jpg" alt="">
                          </a>
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-10.jpg" alt="">
                          </a>
                          <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-05.jpg" alt="">
                          </a>
                          <span class="all-team">+2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea rows="4" class="form-control" placeholder="Enter your message here"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Upload Files</label>
                    <input class="form-control" type="file">
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Project Modal -->
        
        <!-- Delete Project Modal -->
        <div class="modal custom-modal fade" id="delete_project" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Project</h3>
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
        <!-- /Delete Project Modal -->
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