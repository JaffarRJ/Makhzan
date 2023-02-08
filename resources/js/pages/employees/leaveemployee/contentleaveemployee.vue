<template>

<table class="table table-striped custom-table mb-0 datatable" id="contentemployee">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th class="text-center">Status</th>
                      <th>Approved by</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in leaveemployee" :key="item.id">
                      <td>{{item.leavetype}}</td>
                      <td>{{item.from}}</td>
                      <td>{{item.to}}</td>
                      <td>{{item.noofday}}</td>
                      <td>{{item.reason}}</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-purple"></i> {{item.status}}
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img :src="loadImg(item.image)" alt=""></router-link>
                          <a href="javascript:void(0)">{{item.approvedby}}</a>
                        </h2>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_approve"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import leaveemployee from '../../../../assets/json/leaveemployee.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      leaveemployee: leaveemployee
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#contentemployee')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>