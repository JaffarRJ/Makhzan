<template>

  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable" id="tableprojectlist">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Project Id</th>
                      <th>Leader</th>
                      <th>Team</th>
                      <th>Deadline</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in projectlist" :key="item.id">
                      <td>
                        <router-link to="/project-view">{{item.project}}</router-link>
                      </td>
                      <td>{{item.projectid}}</td>
                      <td>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" :src="loadImg(item.image)"></a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul class="team-members text-nowrap">
                          <li>
                            <a href="javascript:void(0)" title="John Doe" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="Richard Miles" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="John Smith" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="Mike Litorus" data-bs-toggle="tooltip"><img alt="" src="../../../../assets/img/profiles/avatar-05.jpg"></a>
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
                      <td>{{item.deadline}} </td>
                      <td>
                        <div class="dropdown action-label">
                          <a href="" class="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o text-danger"></i> {{item.priority}} </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> High</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-warning"></i> Medium</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Low</a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="dropdown action-label">
                          <a href="" class="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o text-success"></i> {{item.status}} </a>
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
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_project"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_project"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
import projectlist from '../../../../assets/json/projectlist.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      projectlist: projectlist
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#tableprojectlist')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>