<template>
<!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group custom-select">
                <select class="select floating"> 
									<option>Department</option>
									<option>Development</option>
									<option>Designing</option>
									<option>Android</option>
								</select>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group custom-select">
                 <select class="select floating"> 
									<option>Job Type</option>
									<option>Full Time</option>
									<option>Part Time</option>
									<option>Internship</option>
								</select>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group custom-select">
                <select class="select floating"> 
									<option>Select Designation</option>
									<option>Web Developer</option>
									<option>Web Designer</option>
									<option>Android Developer</option>
									<option>Ios Developer</option>
								</select>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="d-grid">
                <a href="javascript:void(0)" class="btn btn-success"> Search </a>  
              </div>
            </div>
            </div>
          <!-- Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
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