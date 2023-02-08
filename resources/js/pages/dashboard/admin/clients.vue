<template>

<div class="row">
            <div class="col-md-6 d-flex">
              <div class="card card-table flex-fill">
                <div class="card-header">
                  <h3 class="card-title mb-0">Clients</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Status</th>
                          <th class="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in adminclient" :key="item.id">
                          <td>
                            <h2 class="table-avatar">
                              <a href="javascript:void(0)" class="avatar"><img alt="" :src="loadImg(item.image)"></a>
                              <router-link to="/client-profile">{{item.name}} <span>{{item.name1}}</span></router-link>
                            </h2>
                          </td>
                          <td>{{item.email}}</td>
                          <td>
                            <div class="dropdown action-label">
                              <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-success"></i> {{item.status}}
                              </a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                              </div>
                            </div>
                          </td>
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
                <div class="card-footer">
                  <router-link to="/clients">View all clients</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex">
              <div class="card card-table flex-fill">
                <div class="card-header">
                  <h3 class="card-title mb-0">Recent Projects</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Project Name </th>
                          <th>Progress</th>
                          <th class="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in adminproject" :key="item.id">
                          <td>
                            <h2><router-link to="/project-view">{{item.name}}</router-link></h2>
                            <small class="block text-ellipsis">
                              <span>{{item.no}}</span> <span class="text-muted">{{item.nodescribe}}, </span>
                              <span>{{item.no1}}</span> <span class="text-muted">{{item.no1describe}}</span>
                            </small>
                          </td>
                          <td>
                            <div class="progress progress-xs progress-striped">
                              <div class="progress-bar" role="progressbar" data-bs-toggle="tooltip" title="65%" style="width: 65%"></div>
                            </div>
                          </td>
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
                <div class="card-footer">
                  <router-link to="/projects">View all projects</router-link>
                </div>
              </div>
            </div>
          </div>
          </template>
    <script>
import adminclient from '../../../../assets/json/adminclient.json';
import adminproject from '../../../../assets/json/adminproject.json'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      adminclient: adminclient,
      adminproject: adminproject
    }
    },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>