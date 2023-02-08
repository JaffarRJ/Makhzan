<template>
  <div class="users">
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
                <h3 class="page-title">Users</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Users</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_user"><i class="fa fa-plus"></i> Add User</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group custom-select">
               <select class="select floating"> 
									<option>Select Company</option>
									<option>Global Technologies</option>
									<option>Delta Infotech</option>
								</select>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group custom-select">
                <select class="select floating"> 
									<option>Select Role</option>
									<option>Web Developer</option>
									<option>Web Designer</option>
									<option>Android Developer</option>
									<option>Ios Developer</option>
								</select>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <a href="javascript:void(0)" class="btn btn-success w-100"> Search </a>  
            </div> 
                
          </div>
          <!-- /Search Filter -->
          
          <usertable />

        </div>
        <!-- /Page Content -->
        
        <usermodal />
        
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {  
    },
    data() {
    return {
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
    name: 'users'
  }
</Script>