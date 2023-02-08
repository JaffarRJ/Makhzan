<template>
  <div class="userreports">
    <div class="main-wrapper">
      <main-header></main-header>

       <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">User Report</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">User Reports</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->

          <!-- Search Filter -->

          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-3">  
              <div class="form-group custom-select">
                
									<select class="form-control floating select">
										<option>
											Name1
										</option>
										<option>
											Name2
										</option>
									</select>
                
              </div>
            </div>
          
            <div class="col-sm-6 col-md-3">  
              <a href="javascript:void(0)" class="btn btn-success w-100"> Search </a>  
            </div>

          </div>
          <!-- /Search Filter -->
          
          <tableuserreport />
                
          <!-- /Content End -->
          
        </div>
        <!-- /Page Content -->
        
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
    name: 'userreports'
  }
</Script>