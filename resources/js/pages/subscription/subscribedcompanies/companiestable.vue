<template>
<!-- Company List -->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">  
                <table class="table table-hover custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Client</th>
                      <th>Plan</th>
                      <th>Users</th>
                      <th>Plan Duration</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Amount</th>
                      <th>Plan Status</th>
                      <th>Update Plan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/client-profile" class="avatar"><img src="../../../../assets/img/profiles/avatar-19.jpg" alt=""></router-link>
                          <router-link to="/client-profile">Global Technologies</router-link>
                        </h2>
                      </td>
                      <td>Free Trial</td>
                      <td>30</td>
                      <td>6 Months</td>
                      <td>15 Feb 2019</td>
                      <td>14 Jul 2019</td>
                      <td>$200</td>
                      <td><span class="badge bg-inverse-success">Active</span></td>
                      <td><a class="btn btn-primary btn-sm" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#upgrade_plan">Change Plan</a></td>
                      <td>
                        <div class="status-toggle">
                          <input type="checkbox" id="company_status_1" class="check">
                          <label for="company_status_1" class="checktoggle">checkbox</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/client-profile" class="avatar"><img src="../../../../assets/img/profiles/avatar-29.jpg" alt=""></router-link>
                          <router-link to="/client-profile">Delta Infotech</router-link>
                        </h2>
                      </td>
                      <td>Premium</td>
                      <td>50</td>
                      <td>1 Year</td>
                      <td>15 Feb 2019</td>
                      <td>14 Feb 2020</td>
                      <td>$200</td>
                      <td><span class="badge bg-inverse-danger">Expired</span></td>
                      <td><a class="btn btn-primary btn-sm" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#upgrade_plan">Change Plan</a></td>
                      <td>
                        <div class="status-toggle">
                          <input type="checkbox" id="company_status_2" class="check" checked>
                          <label for="company_status_2" class="checktoggle">checkbox</label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- /Company List -->
</template>