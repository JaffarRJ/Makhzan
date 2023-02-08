<template>
  <!-- Search Filter -->
          <div class="row filter-row">
             <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
             </div>
             <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group custom-select">
              <select class="select floating"> 
									<option> Leave Type </option>
									<option>Casual Leave</option>
									<option>Medical Leave</option>
									<option>Loss of Pay</option>
								</select>
              </div>
             </div>
             <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
              <div class="form-group custom-select">
                <select class="select floating"> 
									<option> Leave Status </option>
									<option> Pending </option>
									<option> Approved </option>
									<option> Rejected </option>
								</select>
              </div>
             </div>
             <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group custom-select">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                </div>
                
              </div>
            </div>
             <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group custom-select">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
             <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <a href="javascript:void(0)" class="btn btn-success w-100"> Search </a>  
             </div>     
                    </div>
          <!-- /Search Filter -->
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
    }
  }
</Script>