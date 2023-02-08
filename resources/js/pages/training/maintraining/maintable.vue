<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="maintable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Training Type</th>
                      <th>Trainer</th>
                      <th>Employee</th>
                      <th>Time Duration</th>
                      <th>Description </th>
                      <th>Cost </th>
                      <th>Status </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Git Training</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></router-link>
                          <router-link to="/profile">John Doe </router-link>
                        </h2>
                      </td>
                      <td>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" title="Bernardo Galaviz" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="Richard Miles" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li class="dropdown avatar-dropdown">
                            <a href="javascript:void(0)" class="all-users dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">+15</a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <div class="avatar-group">
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-02.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-09.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-10.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-11.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-12.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-13.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-01.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
                                </a>
                              </div>
                              <div class="avatar-pagination">
                                <ul class="pagination">
                                  <li class="page-item">
                                    <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                      <span aria-hidden="true">«</span>
                                      <span class="visually-hidden">Previous</span>
                                    </a>
                                  </li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                  <li class="page-item">
                                    <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                      <span aria-hidden="true">»</span>
                                      <span class="visually-hidden">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li> 
                        </ul>
                      </td>
                      <td>7 May 2019 - 10 May 2019</td>
                      <td>Lorem ipsum dollar</td>
                      <td>$400</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_training"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_training"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Swift Training</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></router-link>
                          <router-link to="/profile">Richard Miles</router-link>
                        </h2>
                      </td>
                      <td>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" title="John Doe" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="Richard Miles" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li class="dropdown avatar-dropdown">
                            <a href="javascript:void(0)" class="all-users dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">+15</a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <div class="avatar-group">
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-02.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-09.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-10.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-11.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-12.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-13.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-01.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
                                </a>
                              </div>
                              <div class="avatar-pagination">
                                <ul class="pagination">
                                  <li class="page-item">
                                    <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                      <span aria-hidden="true">«</span>
                                      <span class="visually-hidden">Previous</span>
                                    </a>
                                  </li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                  <li class="page-item">
                                    <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                      <span aria-hidden="true">»</span>
                                      <span class="visually-hidden">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li> 
                        </ul>
                      </td>
                      <td>7 May 2019 - 10 May 2019</td>
                      <td>Lorem ipsum dollar</td>
                      <td>$800</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Inactive
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_training"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_training"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td> 
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
    
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#maintable')
    },
    name: 'activities'
  }
</Script>