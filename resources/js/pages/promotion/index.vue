<template>
  <div class="promotion">
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
                <h3 class="page-title">Promotion</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Promotion</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_promotion"><i class="fa fa-plus"></i> Add Promotion</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
              
                <promotiontable />
                
              </div>
            </div>
          </div>
        </div>
        <!-- /Page Content -->
        
        <!-- Add Promotion Modal -->
        <div id="add_promotion" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Promotion</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Promotion For <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Promotion From <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" value="Web Developer" readonly>
                  </div>

                  <div class="form-group">
                    <label>Promotion To <span class="text-danger">*</span></label>
                    <select class="select">
											<option>Web Developer</option>
											<option>Web Designer</option>
											<option>SEO Analyst</option>
										</select>
                  </div>
                  <div class="form-group">
                    <label>Promotion Date <span class="text-danger">*</span></label>
                     <div class="cal-icon custompicker">
                          <datepicker v-model="startdate"  class="picker" 
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
        <!-- /Add Promotion Modal -->
        
        <!-- Edit Promotion Modal -->
        <div id="edit_promotion" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Promotion</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Promotion For <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" value="John Doe">
                  </div>
                  <div class="form-group">
                    <label>Promotion From <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" value="Web Developer" readonly>
                  </div>
                  <div class="form-group">
                    <label>Promotion To <span class="text-danger">*</span></label>
                    <select class="select">
											<option>Web Developer</option>
											<option>Web Designer</option>
											<option>SEO Analyst</option>
										</select>
                  </div>
                  <div class="form-group">
                    <label>Promotion Date <span class="text-danger">*</span></label>
                    <div class="cal-icon custompicker">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
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
        <!-- /Edit Promotion Modal -->
        
        <!-- Delete Promotion Modal -->
        <div class="modal custom-modal fade" id="delete_promotion" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Promotion</h3>
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
        <!-- /Delete Promotion Modal -->
      
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
      enddate: currentDate1,
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
    name: 'promotion'
  }
</Script>