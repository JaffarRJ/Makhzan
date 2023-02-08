<template>
<div class="col-lg-4 col-xl-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title m-b-15">Project details</h6>
                  <table class="table table-striped table-border">
                    <tbody>
                      <tr>
                        <td>Cost:</td>
                        <td class="text-end">$1200</td>
                      </tr>
                      <tr>
                        <td>Total Hours:</td>
                        <td class="text-end">100 Hours</td>
                      </tr>
                      <tr>
                        <td>Created:</td>
                        <td class="text-end">25 Feb, 2019</td>
                      </tr>
                      <tr>
                        <td>Deadline:</td>
                        <td class="text-end">12 Jun, 2019</td>
                      </tr>
                      <tr>
                        <td>Priority:</td>
                        <td class="text-end">
                          <div class="btn-group">
                            <a href="javascript:void(0)" class="badge badge-danger dropdown-toggle" data-bs-toggle="dropdown">Highest </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Highest priority</a>
                              <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-info"></i> High priority</a>
                              <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-primary"></i> Normal priority</a>
                              <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Low priority</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Created by:</td>
                        <td class="text-end"><router-link to="/profile">Barry Cuda</router-link></td>
                      </tr>
                      <tr>
                        <td>Status:</td>
                        <td class="text-end">Working</td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="m-b-5">Progress <span class="text-success float-end">40%</span></p>
                  <div class="progress progress-xs mb-0">
                    <div class="progress-bar bg-success" role="progressbar" data-bs-toggle="tooltip" title="40%" style="width: 40%"></div>
                  </div>
                </div>
              </div>
              <div class="card project-user">
                <div class="card-body">
                  <h6 class="card-title m-b-20">Assigned Leader <button type="button" class="float-end btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i> Add</button></h6>
                  <ul class="list-box">
                    <li>
                      <router-link to="/profile">
                        <div class="list-item">
                          <div class="list-left">
                            <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-11.jpg"></span>
                          </div>
                          <div class="list-body">
                            <span class="message-author">Wilmer Deluna</span>
                            <div class="clearfix"></div>
                            <span class="message-content">Team Leader</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/profile">
                        <div class="list-item">
                          <div class="list-left">
                            <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-01.jpg"></span>
                          </div>
                          <div class="list-body">
                            <span class="message-author">Lesley Grauer</span>
                            <div class="clearfix"></div>
                            <span class="message-content">Team Leader</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card project-user">
                <div class="card-body">
                  <h6 class="card-title m-b-20">
                    Assigned users 
                    <button type="button" class="float-end btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#assign_user"><i class="fa fa-plus"></i> Add</button>
                  </h6>
                  <ul class="list-box">
                    <li>
                      <router-link to="/index">
                        <div class="list-item">
                          <div class="list-left">
                            <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></span>
                          </div>
                          <div class="list-body">
                            <span class="message-author">John Doe</span>
                            <div class="clearfix"></div>
                            <span class="message-content">Web Designer</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/profile">
                        <div class="list-item">
                          <div class="list-left">
                            <span class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></span>
                          </div>
                          <div class="list-body">
                            <span class="message-author">Richard Miles</span>
                            <div class="clearfix"></div>
                            <span class="message-content">Web Developer</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
</template>