<template>
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
							<div class="form-group custom-select">
									<select class="form-control floating select">
										<option>
											All
										</option>
										<option>
											Pending
										</option>
										<option>
											Completed
										</option>
									</select>
							</div>
						</div>
            <div class="col-sm-6 col-md-3">  
              <a href="javascript:void(0)" class="btn btn-success w-100"> Search </a>  
            </div>     
          </div>
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
    },
  }
</Script>