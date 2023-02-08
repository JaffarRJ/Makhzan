<template>
  <div class="shiftscheduling">
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
              <div class="col">
                <h3 class="page-title">Daily Scheduling</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item"><router-link to="/employees">Employees</router-link></li>
                                    <li class="breadcrumb-item active">Shift Scheduling</li>
                </ul>
                            </div>
                            
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
          <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee</label>
              </div>
            </div>
            
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group custom-select">
              <select class="select floating"> 
									<option>All Department</option>
									<option value="1">Finance</option>
                                    <option value="2">Finance and Management</option>
                                    <option value="3">Hr & Finance</option>
                                    <option value="4">ITech</option>
								</select>
              </div>
                        </div>
                        <div class="col-sm-6 col-md-2">  
              <div class="form-group custom-select">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
                        </div>
                        <div class="col-sm-6 col-md-2">  
              <div class="form-group custom-select">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-2">  
              <a href="javascript:void(0)" class="btn btn-success w-100"> Search </a>  
            </div>     
                    </div>
          <!-- Search Filter -->

          <schedulingtable />

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
    name: 'shiftscheduling'
  }
</Script>