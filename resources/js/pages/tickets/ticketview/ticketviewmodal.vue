<template>
<!-- Edit Ticket Modal -->
        <div id="edit_ticket" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Ticket</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ticket Subject</label>
                        <input class="form-control" type="text" value="Laptop Issue">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ticket Id</label>
                        <input class="form-control" type="text" readonly value="TKT-0001">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Assign Staff</label>
                        <select class="select">
                          <option>-</option>
                          <option selected>Mike Litorus</option>
                          <option>John Smith</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Client</label>
                        <select class="select">
                          <option>-</option>
                          <option >Delta Infotech</option>
                          <option selected>International Software Inc</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Priority</label>
                        <select class="select">
                          <option>High</option>
                          <option selected>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>CC</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Assign</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ticket Assignee</label>
                        <div class="project-members">
                          <a title="John Smith" data-bs-toggle="tooltip" href="javascript:void(0)" >
                            <img src="../../../../assets/img/profiles/avatar-10.jpg" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Add Followers</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ticket Followers</label>
                        <div class="project-members">
                          <a title="Richard Miles" data-bs-toggle="tooltip" href="javascript:void(0)" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-09.jpg" alt="">
                          </a>
                          <a title="John Smith" data-bs-toggle="tooltip" href="javascript:void(0)" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-10.jpg" alt="">
                          </a>
                          <a title="Mike Litorus" data-bs-toggle="tooltip" href="javascript:void(0)" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-05.jpg" alt="">
                          </a>
                          <a title="Wilmer Deluna" data-bs-toggle="tooltip" href="javascript:void(0)" class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-11.jpg" alt="">
                          </a>
                          <span class="all-team">+2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" rows="4"></textarea>
                      </div>
                      <div class="form-group">
                        <label>Upload Files</label>
                        <input class="form-control" type="file">
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
        <!-- /Edit Ticket Modal -->
        
        <!-- Delete Ticket Modal -->
        <div class="modal custom-modal fade" id="delete_ticket" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Ticket</h3>
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
        <!-- /Delete Ticket Modal -->
        
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
                          <span class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-09.jpg" alt="">
                          </span>
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
                          <span class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-10.jpg" alt="">
                          </span>
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
                            <img src="../../../../assets/img/profiles/avatar-10.jpg" alt="">
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
                          <span class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-10.jpg" alt="">
                          </span>
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
                          <span class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-08.jpg" alt="">
                          </span>
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
                          <span class="avatar">
                            <img src="../../../../assets/img/profiles/avatar-11.jpg" alt="">
                          </span>
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