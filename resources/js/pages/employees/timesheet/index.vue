<template>
  <div class="timesheet">
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
                <h3 class="page-title">Timesheet</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Timesheet</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_todaywork"><i class="fa fa-plus"></i> Add Today Work</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <timesheettable />

        </div>
        <!-- /Page Content -->
        
        <!-- Add Today Work Modal -->
        <div id="add_todaywork" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Today Work details</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Project <span class="text-danger">*</span></label>
                      <select class="select">
												<option>Office Management</option>
												<option>Project Management</option>
												<option>Video Calling App</option>
												<option>Hospital Administration</option>
											</select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-4">
                      <label>Deadline <span class="text-danger">*</span></label>
                      <div class="cal-icon custompicker">
                        <input class="form-control" type="text" value="5 May 2019" readonly>
                      </div>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Total Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="100" readonly>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Remaining Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="60" readonly>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon custompicker">
                      <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                    </div>
                    <div class="form-group col-sm-6">
                      <label>Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Description <span class="text-danger">*</span></label>
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
        <!-- /Add Today Work Modal -->
        
        <!-- Edit Today Work Modal -->
        <div id="edit_todaywork" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Work Details</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Project <span class="text-danger">*</span></label>
                       <select class="select">
												<option>Office Management</option>
												<option>Project Management</option>
												<option>Video Calling App</option>
												<option>Hospital Administration</option>
											</select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-4">
                      <label>Deadline <span class="text-danger">*</span></label>
                      <div class="cal-icon custompicker">
                        <input class="form-control" type="text" value="5 May 2019" readonly>
                      </div>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Total Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="100" readonly>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Remaining Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="60" readonly>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon custompicker">
                      <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                    </div>
                    <div class="form-group col-sm-6">
                      <label>Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="9">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Description <span class="text-danger">*</span></label>
                    <textarea rows="4" class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Today Work Modal -->
        
        <!-- Delete Today Work Modal -->
        <div class="modal custom-modal fade" id="delete_workdetail" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Work Details</h3>
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
        <!-- Delete Today Work Modal -->
        
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
       data() {
    return {
      startdate: currentDate,
      enddate: currentDate1
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
    name: 'timesheet'
  }
</Script>