<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Designation</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img src="../../../../assets/img/profiles/avatar-19.jpg" alt=""></router-link>
                          <router-link to="/profile">Barry Cuda <span>Global Technologies</span></router-link>
                        </h2>
                      </td>
                      <td>Global Technologies</td>
                      <td>barrycuda@example.com</td>
                      <td>
                        <span class="badge bg-inverse-info">Client</span>
                      </td>
                      <td>CEO</td>
                      <td>
                        <div class="dropdown action-label">
                          <a href="javascript:void(0)" class="btn btn-white btn-sm btn-rounded"><i class="fa fa-dot-circle-o text-success"></i> Active </a>
                          
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img src="../../../../assets/img/profiles/avatar-21.jpg" alt=""></router-link>
                          <router-link to="/profile">Daniel Porter <span>Admin</span></router-link>
                        </h2>
                      </td>
                      <td>Focus Technologies</td>
                      <td>danielporter@example.com</td>
                      <td>
                        <span class="badge bg-inverse-danger">Admin</span>
                      </td>
                      <td>Admin Manager</td>
                      <td>
                        <div class="dropdown action-label">
                          <a href="javascript:void(0)" class="btn btn-white btn-sm btn-rounded"><i class="fa fa-dot-circle-o text-success"></i> Active </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
