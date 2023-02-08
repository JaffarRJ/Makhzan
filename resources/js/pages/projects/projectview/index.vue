<template>
  <div class="projectview">
    <div class="main-wrapper">
      <main-header></main-header>

      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
        
        <!-- Page Content -->
        <div class="content container-fluid">
        
          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Hospital Admin</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Project</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#edit_project"><i class="fa fa-plus"></i> Edit Project</a>
                <router-link to="/task-board" class="btn btn-white float-end m-r-10" data-bs-toggle="tooltip" title="Task Board"><i class="fa fa-bars"></i></router-link>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <div class="row">

            <projectadmin />

            <projectdetails />

          </div>
                </div>
        <!-- /Page Content -->
        
        <!-- Assign Leader Modal -->
        <div id="assign_leader" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Assign Leader to this project</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group m-b-30">
                  <input placeholder="Search to add a leader" class="form-control search-input" type="text">
                  <button class="btn btn-primary">Search</button>
                </div>
                <div>
                  <ul class="chat-user-list">
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">Richard Miles</div>
                            <span class="designation">Web Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">John Smith</div>
                            <span class="designation">Android Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar">
                            <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
                          </span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">Jeffery Lalor</div>
                            <span class="designation">Team Leader</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Assign Leader Modal -->
        
        <!-- Assign User Modal -->
        <div id="assign_user" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Assign the user to this project</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group m-b-30">
                  <input placeholder="Search a user to assign" class="form-control search-input" type="text">
                  <button class="btn btn-primary">Search</button>
                </div>
                <div>
                  <ul class="chat-user-list">
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">Richard Miles</div>
                            <span class="designation">Web Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">John Smith</div>
                            <span class="designation">Android Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar">
                            <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
                          </span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">Jeffery Lalor</div>
                            <span class="designation">Team Leader</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Assign User Modal -->
        
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
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor">
                            <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
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
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe">
                            <img alt="" src="../../../../assets/img/profiles/avatar-02.jpg">
                          </a>
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles">
                            <img alt="" src="../../../../assets/img/profiles/avatar-09.jpg">
                          </a>
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith">
                            <img alt="" src="../../../../assets/img/profiles/avatar-10.jpg">
                          </a>
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus">
                            <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
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
        
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    components: {
   
    },
    data() {
    return {
      startdate: currentDate,
      enddate: currentDate1,
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
    },
    name: 'projectview'
  }
</Script>