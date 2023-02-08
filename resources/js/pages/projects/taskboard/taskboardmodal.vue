<template>
<div id="add_task_board" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Task Board</h4>
              <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Task Board Name</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group task-board-color">
                  <label>Task Board Color</label>
                  <div class="board-color-list">
                    <label class="board-control board-primary">
                      <input name="radio" type="radio" class="board-control-input" value="primary" checked="">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-success">
                      <input name="radio" type="radio" class="board-control-input" value="success">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-info">
                      <input name="radio" type="radio" class="board-control-input" value="info">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-purple">
                      <input name="radio" type="radio" class="board-control-input" value="purple">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-warning">
                      <input name="radio" type="radio" class="board-control-input" value="warning">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-danger">
                      <input name="radio" type="radio" class="board-control-input" value="danger">
                      <span class="board-indicator"></span>
                    </label>
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-primary btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div id="edit_task_board" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Task Board</h4>
              <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Task Board Name</label>
                  <input type="text" class="form-control" value="Pending">
                </div>
                <div class="form-group task-board-color">
                  <label>Task Board Color</label>
                  <div class="board-color-list">
                    <label class="board-control board-primary">
                      <input name="radio" type="radio" class="board-control-input" value="primary" checked="">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-success">
                      <input name="radio" type="radio" class="board-control-input" value="success">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-info">
                      <input name="radio" type="radio" class="board-control-input" value="info">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-purple">
                      <input name="radio" type="radio" class="board-control-input" value="purple">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-warning">
                      <input name="radio" type="radio" class="board-control-input" value="warning">
                      <span class="board-indicator"></span>
                    </label>
                    <label class="board-control board-danger">
                      <input name="radio" type="radio" class="board-control-input" value="danger">
                      <span class="board-indicator"></span>
                    </label>
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-primary btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div id="new_project" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Create New Project</h4>
              <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Project Name</label>
                  <input class="form-control" type="text">
                </div>
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Create Project</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Assign Leader Modal -->
      <div id="assign_leader" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Assign Leader to this project</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="input-group m-b-30">
                <input placeholder="Search to add a leader" class="form-control search-input" type="text">
                <button class="btn btn-primary">Search</button>
              </div>
              <div>
                <ul class="chat-user-list">
                  <li>
                    <a href="javascript:void(0)">
                      <div class="media d-flex">
                        <span class="avatar flex-shrink-0"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></span>
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
                        <span class="avatar flex-shrink-0"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></span>
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
                        <span class="avatar flex-shrink-0">
                          <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
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
                <button class="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Assign Leader Modal -->
        
      <!-- Assign User Modal -->
      <div id="assign_user" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Assign the user to this project</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="input-group m-b-30">
                <input placeholder="Search a user to assign" class="form-control search-input" type="text">
                <button class="btn btn-primary">Search</button>
              </div>
              <div>
                <ul class="chat-user-list">
                  <li>
                    <a href="javascript:void(0)">
                      <div class="media d-flex">
                        <span class="avatar flex-shrink-0"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></span>
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
                        <span class="avatar flex-shrink-0"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></span>
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
                        <span class="avatar flex-shrink-0">
                          <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
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
                <button class="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Assign User Modal -->
      
      <!-- Add Task Modal -->
      <div id="add_task_modal" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Task</h4>
              <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Task Name</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label>Task Priority</label>
                  <select class="form-control select">
                    <option>Select</option>
                    <option>High</option>
                    <option>Normal</option>
                    <option>Low</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Due Date</label>
                  <div class="cal-icon"><input class="form-control datetimepicker" type="text"></div>
                </div>
                <div class="form-group">
                  <label>Task Followers</label>
                  <input type="text" class="form-control" placeholder="Search to add">
                  <div class="task-follower-list">
                    <span data-bs-toggle="tooltip" title="John Doe">
                      <img src="../../../../assets/img/profiles/avatar-02.jpg" class="avatar" alt="John Doe" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                    <span data-bs-toggle="tooltip" title="Richard Miles">
                      <img src="../../../../assets/img/profiles/avatar-09.jpg" class="avatar" alt="Richard Miles" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                    <span data-bs-toggle="tooltip" title="John Smith">
                      <img src="../../../../assets/img/profiles/avatar-10.jpg" class="avatar" alt="John Smith" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                    <span data-bs-toggle="tooltip" title="Mike Litorus">
                      <img src="../../../../assets/img/profiles/avatar-05.jpg" class="avatar" alt="Mike Litorus" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                  </div>
                </div>
                <div class="submit-section text-center">
                  <button class="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- /Add Task Modal -->
      
      <!-- Edit Task Modal -->
      <div id="edit_task_modal" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Task</h4>
              <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Task Name</label>
                  <input type="text" class="form-control" value="Website Redesign">
                </div>
                <div class="form-group">
                  <label>Task Priority</label>
                  <select class="form-control select">
                    <option>Select</option>
                    <option selected>High</option>
                    <option>Normal</option>
                    <option>Low</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Due Date</label>
                  <div class="cal-icon">
                    <input class="form-control datetimepicker" type="text" value="20/08/2019">
                  </div>
                </div>
                <div class="form-group">
                  <label>Task Followers</label>
                  <input type="text" class="form-control" placeholder="Search to add">
                  <div class="task-follower-list">
                    <span data-bs-toggle="tooltip" title="John Doe">
                      <img src="../../../../assets/img/profiles/avatar-02.jpg" class="avatar" alt="John Doe" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                    <span data-bs-toggle="tooltip" title="Richard Miles">
                      <img src="../../../../assets/img/profiles/avatar-09.jpg" class="avatar" alt="Richard Miles" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                    <span data-bs-toggle="tooltip" title="John Smith">
                      <img src="../../../../assets/img/profiles/avatar-10.jpg" class="avatar" alt="John Smith" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                    <span data-bs-toggle="tooltip" title="Mike Litorus">
                      <img src="../../../../assets/img/profiles/avatar-05.jpg" class="avatar" alt="Mike Litorus" width="20" height="20">
                      <i class="fa fa-times"></i>
                    </span>
                  </div>
                </div>
                <div class="submit-section text-center">
                  <button class="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- /Edit Task Modal -->
</template>