<template>
<!-- Add User Modal -->
        <div id="add_user" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add User</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Username <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email <span class="text-danger">*</span></label>
                        <input class="form-control" type="email">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone </label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Role</label>
                        <select class="select">
													<option>Admin</option>
													<option>Client</option>
													<option>Employee</option>
												</select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Company</label>
                        <select class="select">
													<option>Global Technologies</option>
													<option>Delta Infotech</option>
												</select>
                      </div>
                    </div>
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label>Employee ID <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                      </div>
                     </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Employee</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Events</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add User Modal -->
        
        <!-- Edit User Modal -->
        <div id="edit_user" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit User</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First Name <span class="text-danger">*</span></label>
                        <input class="form-control" value="John" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input class="form-control" value="Doe" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Username <span class="text-danger">*</span></label>
                        <input class="form-control" value="johndoe" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email <span class="text-danger">*</span></label>
                        <input class="form-control" value="johndoe@example.com" type="email">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone </label>
                        <input class="form-control" value="9876543210" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Role</label>
                        <select class="select">
													<option>Admin</option>
													<option>Client</option>
													<option selected>Employee</option>
												</select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Company</label>
                       <select class="select">
													<option>Global Technologies</option>
													<option>Delta Infotech</option>
												</select>
                      </div>
                    </div>
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label>Employee ID <span class="text-danger">*</span></label>
                        <input type="text" value="FT-0001" class="form-control floating">
                      </div>
                     </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Employee</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Events</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit User Modal -->
        
        <!-- Delete User Modal -->
        <div class="modal custom-modal fade" id="delete_user" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete User</h3>
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
        <!-- /Delete User Modal -->
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {  
    },
    data() {
    return {
    }
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
    name: 'users'
  }
</Script>