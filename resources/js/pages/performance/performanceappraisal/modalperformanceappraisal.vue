<template>
 <!-- Add Performance Appraisal Modal -->
        <div id="add_appraisal" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Give Performance Appraisal</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group custom-select">
												<label class="col-form-label">Employee</label>
												<select class="select">
													<option>Select Employee</option>
													<option>John Doe</option>
													<option>Mike Litorus</option>
												</select>
											</div>
                      <div class="form-group custom-select">
                        <label>Select Date <span class="text-danger">*</span></label>
                        <div class="cal-icon custompicker">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="tab-box">
                            <div class="row user-tabs">
                              <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                <ul class="nav nav-tabs nav-tabs-solid">
                                  <li class="nav-item"><a href="#appr_technical" data-bs-toggle="tab" class="nav-link active">Technical</a></li>
                                  <li class="nav-item"><a href="#appr_organizational" data-bs-toggle="tab" class="nav-link">Organizational</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="tab-content">
                            <div id="appr_technical" class="pro-overview tab-pane fade show active">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="bg-white">
                                    <table class="table">
                                      <thead>
                                        <tr>
                                        <th>Technical Competencies</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                        <th colspan="2">Indicator</th>
                                        <th colspan="2">Expected Value</th>
                                        <th>Set Value</th>
                                        </tr>
                                        <tr>
                                        <td colspan="2">Customer Experience</td>
                                        <td colspan="2">Intermediate</td>
                                        <td><select name="customer_experience" class="form-control">
                                          <option value="">None</option>
                                          <option value="1"> Beginner</option>
                                          <option value="2"> Intermediate</option>
                                          <option value="3"> Advanced</option>
                                          <option value="4"> Expert / Leader</option>
                                          </select></td>
                                        </tr>
                                        <tr>
                                        <td colspan="2">Marketing</td>
                                        <td colspan="2">Advanced</td>
                                        <td><select name="marketing" class="form-control">
                                          <option value="">None</option>
                                          <option value="1"> Beginner</option>
                                          <option value="2"> Intermediate</option>
                                          <option value="3"> Advanced</option>
                                          <option value="4"> Expert / Leader</option>
                                          </select></td>
                                        </tr>
                                        <tr>
                                        <td colspan="2">Management</td>
                                        <td colspan="2">Advanced</td>
                                        <td><select name="management" class="form-control">
                                          <option value="">None</option>
                                          <option value="1"> Beginner</option>
                                          <option value="2"> Intermediate</option>
                                          <option value="3"> Advanced</option>
                                          <option value="4"> Expert / Leader</option>
                                          </select></td>
                                        </tr>
                                        <tr>
                                        <td colspan="2">Administration</td>
                                        <td colspan="2">Advanced</td>
                                        <td><select name="administration" class="form-control">
                                          <option value="">None</option>
                                          <option value="1"> Beginner</option>
                                          <option value="2"> Intermediate</option>
                                          <option value="3"> Advanced</option>
                                          <option value="4"> Expert / Leader</option>
                                          </select></td>
                                        </tr>
                                        <tr>
                                        <td colspan="2">Presentation Skill</td>
                                        <td colspan="2">Expert / Leader</td>
                                        <td><select name="presentation_skill" class="form-control">
                                          <option value="">None</option>
                                          <option value="1"> Beginner</option>
                                          <option value="2"> Intermediate</option>
                                          <option value="3"> Advanced</option>
                                          <option value="4"> Expert / Leader</option>
                                          </select></td>
                                        </tr>
                                        <tr>
                                        <td colspan="2">Quality Of Work</td>
                                        <td colspan="2">Expert / Leader</td>
                                        <td><select name="quality_of_work" class="form-control">
                                          <option value="">None</option>
                                          <option value="1"> Beginner</option>
                                          <option value="2"> Intermediate</option>
                                          <option value="3"> Advanced</option>
                                          <option value="4"> Expert / Leader</option>
                                          </select></td>
                                        </tr>
                                        <tr>
                                        <td colspan="2">Efficiency</td>
                                        <td colspan="2">Expert / Leader</td>
                                        <td><select name="efficiency" class="form-control">
                                          <option value="">None</option>
                                          <option value="1"> Beginner</option>
                                          <option value="2"> Intermediate</option>
                                          <option value="3"> Advanced</option>
                                          <option value="4"> Expert / Leader</option>
                                          </select></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tab-pane fade" id="appr_organizational">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="bg-white">
                                    <table class="table">
                                      <thead>
                                        <tr>
                                          <th>Organizational Competencies</th>
                                          <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                          <th colspan="2">Indicator</th>
                                          <th colspan="2">Expected Value</th>
                                          <th>Set Value</th>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Integrity</td>
                                          <td colspan="2">Beginner</td>
                                          <td>
                                            <select name="integrity" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Professionalism</td>
                                          <td colspan="2">Beginner</td>
                                          <td>
                                            <select name="professionalism" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Team Work</td>
                                          <td colspan="2">Intermediate</td>
                                          <td>
                                            <select name="team_work" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Critical Thinking</td>
                                          <td colspan="2">Advanced</td>
                                          <td>
                                            <select name="critical_thinking" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Conflict Management</td>
                                          <td colspan="2">Intermediate</td>
                                          <td>
                                            <select name="conflict_management" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Attendance</td>
                                          <td colspan="2">Intermediate</td>
                                          <td>
                                            <select name="attendance" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Ability To Meet Deadline</td>
                                          <td colspan="2">Advanced</td>
                                          <td>
                                            <select name="ability_to_meet_deadline" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group custom-select">
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
        <!-- /Add Performance Appraisal Modal -->
        
        <!-- Edit Performance Appraisal Modal -->
        <div id="edit_appraisal" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Performance Appraisal</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group custom-select">
                        <label class="col-form-label">Employee</label>
                        <select class="select">
													<option>Select Employee</option>
													<option>John Doe</option>
													<option selected>Mike Litorus</option>
												</select>
                      </div>
                      <div class="form-group custom-select">
                        <label>Select Date <span class="text-danger">*</span></label>
                        <div class="cal-icon custompicker">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="tab-box">
                            <div class="row user-tabs">
                              <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                <ul class="nav nav-tabs nav-tabs-solid">
                                  <li class="nav-item"><a href="#appr_technical1" data-bs-toggle="tab" class="nav-link active">Technical</a></li>
                                  <li class="nav-item"><a href="#appr_organizational1" data-bs-toggle="tab" class="nav-link">Organizational</a></li>
                                  
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="tab-content">
                            <div id="appr_technical1" class="pro-overview tab-pane fade show active">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="bg-white">
                                    <table class="table">
                                      <thead>
                                        <tr>
                                          <th>Technical Competencies</th>
                                          <th></th>
                                          <th></th>
                                          <th></th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th colspan="2">Indicator</th>
                                          <th colspan="2">Expected Value</th>
                                          <th>Set Value</th>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Customer Experience</td>
                                          <td colspan="2">Intermediate</td>
                                          <td>
                                            <select name="customer_experience" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                              <option value="4"> Expert / Leader</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Marketing</td>
                                          <td colspan="2">Advanced</td>
                                          <td>
                                            <select name="marketing" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                              <option value="4"> Expert / Leader</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Management</td>
                                          <td colspan="2">Advanced</td>
                                          <td>
                                            <select name="management" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                              <option value="4"> Expert / Leader</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Administration</td>
                                          <td colspan="2">Advanced</td>
                                          <td>
                                            <select name="administration" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                              <option value="4"> Expert / Leader</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Presentation Skill</td>
                                          <td colspan="2">Expert / Leader</td>
                                          <td>
                                            <select name="presentation_skill" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                              <option value="4"> Expert / Leader</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Quality Of Work</td>
                                          <td colspan="2">Expert / Leader</td>
                                          <td>
                                            <select name="quality_of_work" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                              <option value="4"> Expert / Leader</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Efficiency</td>
                                          <td colspan="2">Expert / Leader</td>
                                          <td>
                                            <select name="efficiency" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                              <option value="4"> Expert / Leader</option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tab-pane fade" id="appr_organizational1">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="bg-white">
                                    <table class="table">
                                      <thead>
                                        <tr>
                                          <th>Organizational Competencies</th>
                                          <th></th>
                                          <th></th>
                                          <th></th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th colspan="2">Indicator</th>
                                          <th colspan="2">Expected Value</th>
                                          <th>Set Value</th>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Integrity</td>
                                          <td colspan="2">Beginner</td>
                                          <td>
                                            <select name="integrity" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Professionalism</td>
                                          <td colspan="2">Beginner</td>
                                          <td>
                                            <select name="professionalism" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Team Work</td>
                                          <td colspan="2">Intermediate</td>
                                          <td>
                                            <select name="team_work" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Critical Thinking</td>
                                          <td colspan="2">Advanced</td>
                                          <td>
                                            <select name="critical_thinking" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Conflict Management</td>
                                          <td colspan="2">Intermediate</td>
                                          <td>
                                            <select name="conflict_management" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Attendance</td>
                                          <td colspan="2">Intermediate</td>
                                          <td>
                                            <select name="attendance" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">Ability To Meet Deadline</td>
                                          <td colspan="2">Advanced</td>
                                          <td>
                                            <select name="ability_to_meet_deadline" class="form-control">
                                              <option value="">None</option>
                                              <option value="1"> Beginner</option>
                                              <option value="2"> Intermediate</option>
                                              <option value="3"> Advanced</option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group custom-select">
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
        <!-- /Edit Performance Appraisal Modal -->
        
        <!-- Delete Performance Appraisal Modal -->
        <div class="modal custom-modal fade" id="delete_appraisal" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Performance Appraisal List</h3>
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
        <!-- /Delete Performance Appraisal Modal -->
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