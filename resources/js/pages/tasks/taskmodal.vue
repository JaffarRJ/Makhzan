<template>
<!-- Create Project Modal -->
        <div id="create_project" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Create Project</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Project Name</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Client</label>
                        <select class="select">
                          <option>Global Technologies</option>
                          <option>Delta Infotech</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <div class="cal-icon">
                          <input class="form-control datetimepicker" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>End Date</label>
                        <div class="cal-icon">
                          <input class="form-control datetimepicker" type="text">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>Rate</label>
                        <input placeholder="$50" class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>&nbsp;</label>
                        <select class="select">
                          <option>Hourly</option>
                          <option>Fixed</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Priority</label>
                        <select class="select">
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Add Project Leader</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Team Leader</label>
                        <div class="project-members">
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor">
                            <img alt="" src="../../../assets/img/profiles/avatar-16.jpg">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Add Team</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Team Members</label>
                        <div class="project-members">
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe">
                            <img alt="" src="../../../assets/img/profiles/avatar-02.jpg">
                          </a>
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles">
                            <img alt="" src="../../../assets/img/profiles/avatar-09.jpg">
                          </a>
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith">
                            <img alt="" src="../../../assets/img/profiles/avatar-10.jpg">
                          </a>
                          <a class="avatar" href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus">
                            <img alt="" src="../../../assets/img/profiles/avatar-05.jpg">
                          </a>
                          <span class="all-team">+2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea rows="4" class="form-control summernote" placeholder="Enter your message here"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Upload Files</label>
                    <input class="form-control" type="file">
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Create Project Modal -->
        
        <!-- Assignee Modal -->
        <div id="assignee" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Assign to this task</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group m-b-30">
                  <input placeholder="Search to add" class="form-control search-input" type="text">
                  <button class="btn btn-primary">Search</button>
                </div>
                <div>
                  <ul class="chat-user-list">
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../assets/img/profiles/avatar-09.jpg"></span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">Richard Miles</div>
                            <span class="designation">Web Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../assets/img/profiles/avatar-10.jpg"></span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">John Smith</div>
                            <span class="designation">Android Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar">
                            <img alt="" src="../../../assets/img/profiles/avatar-16.jpg">
                          </span>
                          <div class="media-body align-self-center text-nowrap">
                            <div class="user-name">Jeffery Lalor</div>
                            <span class="designation">Team Leader</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Assign</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Assignee Modal -->
        
        <!-- Task Followers Modal -->
        <div id="task_followers" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add followers to this task</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group m-b-30">
                  <input placeholder="Search to add" class="form-control search-input" type="text">
                  <button class="btn btn-primary">Search</button>
                </div>
                <div>
                  <ul class="chat-user-list">
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../assets/img/profiles/avatar-16.jpg"></span>
                          <div class="media-body media-middle text-nowrap">
                            <div class="user-name">Jeffery Lalor</div>
                            <span class="designation">Team Leader</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../assets/img/profiles/avatar-08.jpg"></span>
                          <div class="media-body media-middle text-nowrap">
                            <div class="user-name">Catherine Manseau</div>
                            <span class="designation">Android Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <span class="avatar"><img alt="" src="../../../assets/img/profiles/avatar-26.jpg"></span>
                          <div class="media-body media-middle text-nowrap">
                            <div class="user-name">Wilmer Deluna</div>
                            <span class="designation">Team Leader</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Add to Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Task Followers Modal -->
</template>