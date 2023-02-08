<template>
  <section class="review-section">
            <div class="review-header text-center">
              <h3 class="review-title">Training Requirements</h3>
              <p class="text-muted">if any to achieve the Performance Standard Targets completely</p>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-review review-table mb-0" id="table_targets">
                    <thead>
                      <tr>
                      <th style="width:40px;">#</th>
                      <th>By Self</th>
                      <th>RO's Comment</th>
                      <th>HOD's Comment</th>
                      <th style="width: 64px;"><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                      </tr>
                    </thead>
                    <tbody id="table_targets_tbody">
                      <tr>
                        <td>1</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section class="review-section">
            <div class="review-header text-center">
              <h3 class="review-title">Any other general comments, observations, suggestions etc.</h3>
              <p class="text-muted">Lorem ipsum dollar</p>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-review review-table mb-0" id="general_comments">
                    <thead>
                      <tr>
                      <th style="width:40px;">#</th>
                      <th>Self</th>
                      <th>RO</th>
                      <th>HOD</th>
                      <th style="width: 64px;"><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                      </tr>
                    </thead>
                    <tbody id="general_comments_tbody" >
                      <tr>
                        <td>1</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section class="review-section">
            <div class="review-header text-center">
              <h3 class="review-title">For RO's Use Only</h3>
              <p class="text-muted">Lorem ipsum dollar</p>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Yes/No</th>
                        <th>If Yes - Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>The Team member has Work related Issues</td>
                        <td>
                          <select class="form-control select">
														<option>Select</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                        <td>The Team member has Leave Issues</td>
                        <td>
                        <select class="form-control select">
													<option>Select</option>
													<option>Yes</option>
													<option>No</option>
												</select>
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                        <td>The team member has Stability Issues</td>
                        <td>
                         <select class="form-control select">
														<option>Select</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                        <td>The Team member exhibits non-supportive attitude</td>
                        <td>
                          <select class="form-control select">
														<option>Select</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                        <td>Any other points in specific to note about the team member</td>
                        <td>
                         <select class="form-control select">
														<option>Select</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                      <td>Overall Comment /Performance of the team member</td>
                        <td>
                         <select class="form-control select">
														<option>Select</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
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