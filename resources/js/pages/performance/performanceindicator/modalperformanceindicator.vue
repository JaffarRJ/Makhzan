<template>

<!-- Add Performance Indicator Modal -->
				<div id="add_indicator" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Set New Indicator</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Designation</label>
												<select class="select">
													<option>Select Designation</option>
													<option>Web Designer</option>
													<option>IOS Developer</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6">
											<h4 class="modal-sub-title">Technical</h4>
											<div class="form-group">
												<label class="col-form-label">Customer Experience</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Marketing</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Management</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Administration</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Presentation Skill</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Quality Of Work</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Efficiency</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6">
											<h4 class="modal-sub-title">Organizational</h4>
											<div class="form-group">
												<label class="col-form-label">Integrity</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Professionalism</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Team Work</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Critical Thinking</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Conflict Management</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Attendance</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Ability To Meet Deadline</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Status</label>
												<select class="select">
													<option>Active</option>
													<option>Inactive</option>
												</select>
											</div>
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Performance Indicator Modal -->
				
				<!-- Edit Performance Indicator Modal -->
				<div id="edit_indicator" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit Performance Indicator</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Designation</label>
												<select class="select">
													<option>Select Designation</option>
													<option selected>Web Designer</option>
													<option>IOS Developer</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6">
											<h4 class="modal-sub-title">Technical</h4>
											<div class="form-group">
												<label class="col-form-label">Customer Experience</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option selected>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Marketing</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option selected>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Management</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option selected>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Administration</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option selected>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Presentation Skill</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Quality Of Work</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Efficiency</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
										</div>
												<div class="col-sm-6">
											<h4 class="modal-sub-title">Organizational</h4>
											<div class="form-group">
												<label class="col-form-label">Integrity</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Professionalism</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option selected>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Team Work</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Critical Thinking</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option selected>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Conflict Management</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option selected>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Attendance</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option selected>Intermediate</option>
													<option>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
											<div class="form-group">
												<label class="col-form-label">Ability To Meet Deadline</label>
												<select class="select">
													<option>None</option>
													<option>Beginner</option>
													<option>Intermediate</option>
													<option selected>Advanced</option>
													<option>Expert / Leader</option>
												</select>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Status</label>
												<select class="select">
													<option>Active</option>
													<option>Inactive</option>
												</select>
											</div>
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Save</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Edit Performance Indicator Modal -->
        
        <!-- Delete Performance Indicator Modal -->
        <div class="modal custom-modal fade" id="delete_indicator" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Performance Indicator List</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Delete Performance Indicator Modal -->
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