<template>
  <!-- Search Filter -->
          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
            </div>
           <div class="col-sm-6 col-md-3">  
							<div class="form-group custom-select">
									<select class="form-control floating select">
										<option>
											Jan
										</option>
										<option>
											Feb
										</option>
										<option>
											Mar
										</option>
									</select>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">  
							<div class="form-group custom-select">
									<select class="form-control floating select">
										<option>
											2020
										</option>
										<option>
											2019
										</option>
										<option>
											2018
										</option>
									</select>
							</div>
						</div>
            <div class="col-sm-6 col-md-3">  
              <div class="d-grid">
                <a href="javascript:void(0)" class="btn btn-success"> Search </a>  
              </div>
            </div>     
                    </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      monthattendancereport: ["Jan", "Feb", "Mar"],
      yearattendancereport: ["2020", "2019", "2018"]
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