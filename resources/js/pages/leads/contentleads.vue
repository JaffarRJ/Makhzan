<template>

  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped table-nowrap custom-table mb-0 datatable" id="contentleads">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Lead Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Project</th>
                      <th>Assigned Staff</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in lead" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>
                        <h2 class="table-avatar">
                          <a href="javascript:void(0)" class="avatar"><img alt="" :src="loadImg(item.image)"></a>
                          <a href="javascript:void(0)">{{item.name}}</a>
                        </h2>
                      </td>
                      <td>{{item.email}}</td>
                      <td>{{item.phone}}</td>
                      <td><router-link to="/project-view">{{item.project}}</router-link></td>
                      <td>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" title="John Doe" data-bs-toggle="tooltip"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="Richard Miles" data-bs-toggle="tooltip"><img alt="" src="../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li class="dropdown avatar-dropdown">
                            <a href="javascript:void(0)" class="all-users dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">+15</a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <div class="avatar-group">
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-02.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-09.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-10.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-05.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-11.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-12.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-13.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-01.jpg">
                                </a>
                                <a class="avatar avatar-xs" href="javascript:void(0)">
                                  <img alt="" src="../../../assets/img/profiles/avatar-16.jpg">
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
                      <td><span class="badge bg-inverse-success">{{item.status}}</span></td>
                      <td>{{item.created}}</td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
import lead from '../../../assets/json/lead.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      lead: lead
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#contentleads')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>