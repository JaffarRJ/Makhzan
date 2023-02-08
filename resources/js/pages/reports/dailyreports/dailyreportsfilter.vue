<template>
<div class="row filter-row mb-4">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input class="form-control floating" type="text">
                <label class="focus-label">Employee</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
							<div class="form-group custom-select">
								<select class="select floating"> 
									<option>Select Department</option>
									<option>Designing</option>
									<option>Development</option>
									<option>Finance</option>
									<option>Hr & Finance</option>
								</select>
							</div>
						</div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group custom-select">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group custom-select">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
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