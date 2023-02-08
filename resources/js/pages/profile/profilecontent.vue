<template>
<div class="tab-content">
            <!-- Profile Info Tab -->
            <div id="emp_profile" class="pro-overview tab-pane fade show active">
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">Personal Informations <a href="javascript:void(0)" class="edit-icon" data-bs-toggle="modal" data-bs-target="#personal_info_modal"><i class="fa fa-pencil"></i></a></h3>
                      <ul class="personal-info" v-for="item in personalprofile" :key="item.id">
                        <li>
                          <div class="title">{{item.passport}}</div>
                          <div class="text">{{item.passportno}}</div>
                        </li>
                        <li>
                          <div class="title">{{item.passportexp}}</div>
                          <div class="text">{{item.passportexpno}}</div>
                        </li>
                        <li>
                          <div class="title">{{item.tel}}</div>
                          <div class="text"><a href="">{{item.telno}}</a></div>
                        </li>
                        <li>
                          <div class="title">{{item.nation}}</div>
                          <div class="text">{{item.nationdetail}}</div>
                        </li>
                        <li>
                          <div class="title">{{item.religion}}</div>
                          <div class="text">{{item.religiondetail}}</div>
                        </li>
                        <li>
                          <div class="title">{{item.married}}</div>
                          <div class="text">{{item.marrieddetail}}</div>
                        </li>
                        <li>
                          <div class="title">{{item.employment}}</div>
                          <div class="text">{{item.employmentno}}</div>
                        </li>
                        <li>
                          <div class="title">{{item.children}}</div>
                          <div class="text">{{item.childrenno}}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">Emergency Contact <a href="javascript:void(0)" class="edit-icon" data-bs-toggle="modal" data-bs-target="#emergency_contact_modal"><i class="fa fa-pencil"></i></a></h3>
                      <h5 class="section-title">Primary</h5>
                      <ul class="personal-info">
                        <li>
                          <div class="title">Name</div>
                          <div class="text">John Doe</div>
                        </li>
                        <li>
                          <div class="title">Relationship</div>
                          <div class="text">Father</div>
                        </li>
                        <li>
                          <div class="title">Phone </div>
                          <div class="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                      <hr>
                      <h5 class="section-title">Secondary</h5>
                      <ul class="personal-info">
                        <li>
                          <div class="title">Name</div>
                          <div class="text">Karen Wills</div>
                        </li>
                        <li>
                          <div class="title">Relationship</div>
                          <div class="text">Brother</div>
                        </li>
                        <li>
                          <div class="title">Phone </div>
                          <div class="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">Bank information</h3>
                      <ul class="personal-info">
                        <li>
                          <div class="title">Bank name</div>
                          <div class="text">ICICI Bank</div>
                        </li>
                        <li>
                          <div class="title">Bank account No.</div>
                          <div class="text">159843014641</div>
                        </li>
                        <li>
                          <div class="title">IFSC Code</div>
                          <div class="text">ICI24504</div>
                        </li>
                        <li>
                          <div class="title">PAN No</div>
                          <div class="text">TC000Y56</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">Family Informations <a href="javascript:void(0)" class="edit-icon" data-bs-toggle="modal" data-bs-target="#family_info_modal"><i class="fa fa-pencil"></i></a></h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Relationship</th>
                              <th>Date of Birth</th>
                              <th>Phone</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Leo</td>
                              <td>Brother</td>
                              <td>Feb 16th, 2019</td>
                              <td>9876543210</td>
                              <td class="text-end">
                                <div class="dropdown dropdown-action">
                                  <a aria-expanded="false" data-bs-toggle="dropdown" class="action-icon dropdown-toggle" href="javascript:void(0)"><i class="material-icons">more_vert</i></a>
                                  <div class="dropdown-menu dropdown-menu-right">
                                    <a href="javascript:void(0)" class="dropdown-item"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a href="javascript:void(0)" class="dropdown-item"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">Education Informations <a href="javascript:void(0)" class="edit-icon" data-bs-toggle="modal" data-bs-target="#education_info"><i class="fa fa-pencil"></i></a></h3>
                      <div class="experience-box">
                        <ul class="experience-list">
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">International College of Arts and Science (UG)</a>
                                <div>Bsc Computer Science</div>
                                <span class="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">International College of Arts and Science (PG)</a>
                                <div>Msc Computer Science</div>
                                <span class="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">Experience <a href="javascript:void(0)" class="edit-icon" data-bs-toggle="modal" data-bs-target="#experience_info"><i class="fa fa-pencil"></i></a></h3>
                      <div class="experience-box">
                        <ul class="experience-list">
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">Web Designer at Zen Corporation</a>
                                <span class="time">Jan 2013 - Present (5 years 2 months)</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">Web Designer at Ron-tech</a>
                                <span class="time">Jan 2013 - Present (5 years 2 months)</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">Web Designer at Dalt Technology</a>
                                <span class="time">Jan 2013 - Present (5 years 2 months)</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Profile Info Tab -->
            
            <!-- Projects Tab -->
            <div class="tab-pane fade" id="emp_projects">
              <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="dropdown profile-action">
                        <a aria-expanded="false" data-bs-toggle="dropdown" class="action-icon dropdown-toggle" href="javascript:void(0)"><i class="material-icons">more_vert</i></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a data-bs-target="#edit_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                          <a data-bs-target="#delete_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                        </div>
                      </div>
                      <h4 class="project-title"><router-link to="/project-view">Office Management</router-link></h4>
                      <small class="block text-ellipsis m-b-15">
                        <span class="text-xs">1</span> <span class="text-muted">open tasks, </span>
                        <span class="text-xs">9</span> <span class="text-muted">tasks completed</span>
                      </small>
                      <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a galley of type and
                        scrambled it...
                      </p>
                      <div class="pro-deadline m-b-15">
                        <div class="sub-title">
                          Deadline:
                        </div>
                        <div class="text-muted">
                          17 Apr 2019
                        </div>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="../../../assets/img/profiles/avatar-16.jpg"></a>
                          </li>
                        </ul>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Team :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles"><img alt="" src="../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith"><img alt="" src="../../../assets/img/profiles/avatar-10.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus"><img alt="" src="../../../assets/img/profiles/avatar-05.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="all-users">+15</a>
                          </li>
                        </ul>
                      </div>
                      <p class="m-b-5">Progress <span class="text-success float-end">40%</span></p>
                      <div class="progress progress-xs mb-0">
                        <div style="width: 40%" title="" data-bs-toggle="tooltip" role="progressbar" class="progress-bar bg-success" data-original-title="40%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="dropdown profile-action">
                        <a aria-expanded="false" data-bs-toggle="dropdown" class="action-icon dropdown-toggle" href="javascript:void(0)"><i class="material-icons">more_vert</i></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a data-bs-target="#edit_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                          <a data-bs-target="#delete_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                        </div>
                      </div>
                      <h4 class="project-title"><router-link to="/project-view">Project Management</router-link></h4>
                      <small class="block text-ellipsis m-b-15">
                        <span class="text-xs">2</span> <span class="text-muted">open tasks, </span>
                        <span class="text-xs">5</span> <span class="text-muted">tasks completed</span>
                      </small>
                      <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a galley of type and
                        scrambled it...
                      </p>
                      <div class="pro-deadline m-b-15">
                        <div class="sub-title">
                          Deadline:
                        </div>
                        <div class="text-muted">
                          17 Apr 2019
                        </div>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="../../../assets/img/profiles/avatar-16.jpg"></a>
                          </li>
                        </ul>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Team :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles"><img alt="" src="../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith"><img alt="" src="../../../assets/img/profiles/avatar-10.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus"><img alt="" src="../../../assets/img/profiles/avatar-05.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="all-users">+15</a>
                          </li>
                        </ul>
                      </div>
                      <p class="m-b-5">Progress <span class="text-success float-end">40%</span></p>
                      <div class="progress progress-xs mb-0">
                        <div style="width: 40%" title="" data-bs-toggle="tooltip" role="progressbar" class="progress-bar bg-success" data-original-title="40%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="dropdown profile-action">
                        <a aria-expanded="false" data-bs-toggle="dropdown" class="action-icon dropdown-toggle" href="javascript:void(0)"><i class="material-icons">more_vert</i></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a data-bs-target="#edit_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                          <a data-bs-target="#delete_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                        </div>
                      </div>
                      <h4 class="project-title"><router-link to="/project-view">Video Calling App</router-link></h4>
                      <small class="block text-ellipsis m-b-15">
                        <span class="text-xs">3</span> <span class="text-muted">open tasks, </span>
                        <span class="text-xs">3</span> <span class="text-muted">tasks completed</span>
                      </small>
                      <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a galley of type and
                        scrambled it...
                      </p>
                      <div class="pro-deadline m-b-15">
                        <div class="sub-title">
                          Deadline:
                        </div>
                        <div class="text-muted">
                          17 Apr 2019
                        </div>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="../../../assets/img/profiles/avatar-16.jpg"></a>
                          </li>
                        </ul>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Team :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles"><img alt="" src="../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith"><img alt="" src="../../../assets/img/profiles/avatar-10.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus"><img alt="" src="../../../assets/img/profiles/avatar-05.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="all-users">+15</a>
                          </li>
                        </ul>
                      </div>
                      <p class="m-b-5">Progress <span class="text-success float-end">40%</span></p>
                      <div class="progress progress-xs mb-0">
                        <div style="width: 40%" title="" data-bs-toggle="tooltip" role="progressbar" class="progress-bar bg-success" data-original-title="40%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="dropdown profile-action">
                        <a aria-expanded="false" data-bs-toggle="dropdown" class="action-icon dropdown-toggle" href="javascript:void(0)"><i class="material-icons">more_vert</i></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a data-bs-target="#edit_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                          <a data-bs-target="#delete_project" data-bs-toggle="modal" href="javascript:void(0)" class="dropdown-item"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                        </div>
                      </div>
                      <h4 class="project-title"><router-link to="/project-view">Hospital Administration</router-link></h4>
                      <small class="block text-ellipsis m-b-15">
                        <span class="text-xs">12</span> <span class="text-muted">open tasks, </span>
                        <span class="text-xs">4</span> <span class="text-muted">tasks completed</span>
                      </small>
                      <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a galley of type and
                        scrambled it...
                      </p>
                      <div class="pro-deadline m-b-15">
                        <div class="sub-title">
                          Deadline:
                        </div>
                        <div class="text-muted">
                          17 Apr 2019
                        </div>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="../../../assets/img/profiles/avatar-16.jpg"></a>
                          </li>
                        </ul>
                      </div>
                      <div class="project-members m-b-15">
                        <div>Team :</div>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles"><img alt="" src="../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith"><img alt="" src="../../../assets/img/profiles/avatar-10.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus"><img alt="" src="../../../assets/img/profiles/avatar-05.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="all-users">+15</a>
                          </li>
                        </ul>
                      </div>
                      <p class="m-b-5">Progress <span class="text-success float-end">40%</span></p>
                      <div class="progress progress-xs mb-0">
                        <div style="width: 40%" title="" data-bs-toggle="tooltip" role="progressbar" class="progress-bar bg-success" data-original-title="40%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Projects Tab -->
            
            <!-- Bank Statutory Tab -->
            <div class="tab-pane fade" id="bank_statutory">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title"> Basic Salary Information</h3>
                  <form>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Salary basis <span class="text-danger">*</span></label>
                          <select class="select">
														<option>Select salary basis type</option>
														<option>Hourly</option>
														<option>Daily</option>
														<option>Weekly</option>
														<option>Monthly</option>
													</select>
                         </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Salary amount <small class="text-muted">per month</small></label>
                          <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" placeholder="Type your salary amount" value="0.00">
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Payment type</label>
                          <select class="select">
														<option>Select payment type</option>
														<option>Bank transfer</option>
														<option>Check</option>
														<option>Cash</option>
													</select>
                         </div>
                      </div>
                    </div>
                    <hr>
                    <h3 class="card-title"> PF Information</h3>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">PF contribution</label>
                          <select class="select">
														<option>Select PF contribution</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">PF No. <span class="text-danger">*</span></label>
                          <select class="select">
														<option>Select PF contribution</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Employee PF rate</label>
                         <select class="select">
														<option>Select PF contribution</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Additional rate <span class="text-danger">*</span></label>
                         <select class="select">
														<option>Select additional rate</option>
														<option>0%</option>
														<option>1%</option>
														<option>2%</option>
														<option>3%</option>
														<option>4%</option>
														<option>5%</option>
														<option>6%</option>
														<option>7%</option>
														<option>8%</option>
														<option>9%</option>
														<option>10%</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Total rate</label>
                          <input type="text" class="form-control" placeholder="N/A" value="11%">
                        </div>
                      </div>
                     </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Employee PF rate</label>
                          <select class="select">
														<option>Select PF contribution</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Additional rate <span class="text-danger">*</span></label>
                          <select class="select">
														<option>Select additional rate</option>
														<option>0%</option>
														<option>1%</option>
														<option>2%</option>
														<option>3%</option>
														<option>4%</option>
														<option>5%</option>
														<option>6%</option>
														<option>7%</option>
														<option>8%</option>
														<option>9%</option>
														<option>10%</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Total rate</label>
                          <input type="text" class="form-control" placeholder="N/A" value="11%">
                        </div>
                      </div>
                    </div>
                    
                    <hr>
                    <h3 class="card-title"> ESI Information</h3>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">ESI contribution</label>
                          <select class="select">
														<option>Select ESI contribution</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">ESI No. <span class="text-danger">*</span></label>
                          <select class="select">
														<option>Select ESI contribution</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Employee ESI rate</label>
                          <select class="select">
														<option>Select ESI contribution</option>
														<option>Yes</option>
														<option>No</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Additional rate <span class="text-danger">*</span></label>
                          <select class="select">
														<option>Select additional rate</option>
														<option>0%</option>
														<option>1%</option>
														<option>2%</option>
														<option>3%</option>
														<option>4%</option>
														<option>5%</option>
														<option>6%</option>
														<option>7%</option>
														<option>8%</option>
														<option>9%</option>
														<option>10%</option>
													</select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">Total rate</label>
                          <input type="text" class="form-control" placeholder="N/A" value="11%">
                        </div>
                      </div>
                     </div>
                    
                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn" type="submit">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /Bank Statutory Tab -->
            
        </div>
</template>
<script>
import personalprofile from '../../../assets/json/personalprofile.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      personalprofile: personalprofile,
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