<template>

  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="overtimecontent">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>OT Date</th>
                      <th class="text-center">OT Hours</th>
                      <th>OT Type</th>
                      <th>Description</th>
                      <th class="text-center">Status</th>
                      <th>Approved by</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in overtime" :key="item.id">
                      <td>1</td>
                      <td>
                        <h2 class="table-avatar blue-link">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}}</router-link>
                        </h2>
                      </td>
                      <td>{{item.otdate}}</td>
                      <td class="text-center">{{item.othours}}</td>
                      <td>{{item.ottype}}</td>
                      <td>{{item.description}}</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-purple"></i> {{item.status}}
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img src="../../../../assets/img/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="javascript:void(0)">{{item.approvedby}}</a>
                        </h2>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_overtime"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_overtime"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
import overtime from '../../../../assets/json/overtime.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      overtime: overtime
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#overtimecontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>