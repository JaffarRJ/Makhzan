<template>
  <div class="row">
            <div class="col-md-12">
              <div class="card mb-0">
                <div class="card-header">
                  <h4 class="card-title mb-0">Two Column Vertical Form</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="row">
                      <div class="col-md-6">
                        <h4 class="card-title">Personal details</h4>
                        <div class="form-group">
                          <label>Name:</label>
                          <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                          <label>Password:</label>
                          <input type="password" class="form-control">
                        </div>
                        <div class="form-group">
                          <label>State:</label>
                         <select class="select">
															<option>Select State</option>
															<option value="1">California</option>
															<option value="2">Texas</option>
															<option value="3">Florida</option>
														</select>
                        </div>
                        <div class="form-group">
                          <label>Your Message:</label>
                          <textarea rows="5" cols="5" class="form-control" placeholder="Enter message"></textarea>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <h4 class="card-title">Personal details</h4>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>First Name:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Last Name:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Email:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Phone:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>Address line:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Country:</label>
                             <select class="select">
																		<option>Select Country</option>
																		<option value="1">USA</option>
																		<option value="2">France</option>
																		<option value="3">India</option>
																		<option value="4">Spain</option>
																	</select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>State/Province:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>ZIP code:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>City:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
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
    }
  }
</Script>