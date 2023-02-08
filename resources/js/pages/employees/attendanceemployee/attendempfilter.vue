<template>

          <div class="row filter-row">
            <div class="col-sm-3">  
              <div class="form-group custom-select">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                </div>
                
              </div>
            </div>
            <div class="col-sm-3"> 
              <div class="form-group custom-select">
                <select class="select floating"> 
									<option>Select Month</option>
									<option>Jan</option>
									<option>Feb</option>
									<option>Mar</option>
									<option>Apr</option>
									<option>May</option>
									<option>Jun</option>
									<option>Jul</option>
									<option>Aug</option>
									<option>Sep</option>
									<option>Oct</option>
									<option>Nov</option>
									<option>Dec</option>
								</select>
              </div>
            </div>
            <div class="col-sm-3"> 
              <div class="form-group custom-select">
                <select class="select floating"> 
									<option>Select Year</option>
									<option>2019</option>
									<option>2018</option>
									<option>2017</option>
									<option>2016</option>
									<option>2015</option>
								</select>
              </div>
            </div>
            <div class="col-sm-3">  
              <div class="d-grid">
                <a href="javascript:void(0)" class="btn btn-success"> Search </a>  
              </div>
            </div>     
          </div>
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