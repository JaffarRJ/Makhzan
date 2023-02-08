<template>
<!-- Annual Leave -->
              <div class="card leave-box" id="leave_annual">
                <div class="card-body">
                  <div class="h3 card-title with-switch">
                    Annual                      
                    <div class="onoffswitch">
                      <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_annual" checked>
                      <label class="onoffswitch-label" for="switch_annual">
                        <span class="onoffswitch-inner"></span>
                        <span class="onoffswitch-switch"></span>
                      </label>
                    </div>
                  </div>
                  <div class="leave-item">
                  
                    <!-- Annual Days Leave -->
                    <div class="leave-row">
                      <div class="leave-left">
                        <div class="input-box">
                          <div class="form-group">
                            <label>Days</label>
                            <input type="text" class="form-control" disabled>
                          </div>
                        </div>
                      </div>
                      <div class="leave-right">
                        <button class="leave-edit-btn">Edit</button>
                      </div>
                    </div>
                    <!-- /Annual Days Leave -->
                    
                    <!-- Carry Forward -->
                    <div class="leave-row">
                      <div class="leave-left">
                        <div class="input-box">
                          <label class="d-block">Carry forward</label>
                          <div class="leave-inline-form">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="carry_no" value="option1" disabled>
                              <label class="form-check-label" for="carry_no">No</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="carry_yes" value="option2" disabled>
                              <label class="form-check-label" for="carry_yes">Yes</label>
                            </div>
                            <div class="input-group">
                              <span class="input-group-text">Max</span>
                              <input type="text" class="form-control" disabled>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="leave-right">
                        <button class="leave-edit-btn">
                          Edit
                        </button>
                      </div>
                    </div>
                    <!-- /Carry Forward -->
                    
                    <!-- Earned Leave -->
                    <div class="leave-row">
                      <div class="leave-left">
                        <div class="input-box">
                          <label class="d-block">Earned leave</label>
                          <div class="leave-inline-form">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="earned_no" value="option1" disabled>
                              <label class="form-check-label" for="earned_no">No</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="earned_yes" value="option2" disabled>
                              <label class="form-check-label" for="earned_yes">Yes</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="leave-right">
                        <button class="leave-edit-btn">
                          Edit
                        </button>
                      </div>
                    </div>
                    <!-- /Earned Leave -->
                    
                  </div>
                  
                  <!-- Custom Policy -->
                  <div class="custom-policy">
                    <div class="leave-header">
                      <div class="title">Custom policy</div>
                      <div class="leave-action">
                        <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#add_custom_policy"><i class="fa fa-plus"></i> Add custom policy</button>
                      </div>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-hover table-nowrap leave-table mb-0">
                        <thead>
                          <tr>
                            <th class="l-name">Name</th>
                            <th class="l-days">Days</th>
                            <th class="l-assignee">Assignee</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>5 Year Service </td>
                            <td>5</td>
                            <td>
                              <a href="javascript:void(0)" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></a>
                              <a href="javascript:void(0)">John Doe</a>
                            </td>
                            <td class="text-end">
                              <div class="dropdown dropdown-action">
                                <a aria-expanded="false" data-bs-toggle="dropdown" class="action-icon dropdown-toggle" href="javascript:void(0)"><i class="material-icons">more_vert</i></a>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <a href="javascript:void(0)" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_custom_policy"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                  <a href="javascript:void(0)" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_custom_policy"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- /Custom Policy -->
                  
                </div>
              </div>
              <!-- /Annual Leave -->
</template>