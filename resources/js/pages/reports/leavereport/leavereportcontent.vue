<template>

<table class="table table-striped custom-table mb-0 datatable" id="leavereportcontent">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Department</th>
                      <th>Leave Type</th>
                      <th>No.of Days</th>
                      <th>Remaining Leave</th>
                      <th>Total Leaves</th>
                      <th>Total Leave Taken</th>
                      <th>Leave Carry Forward</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in leavereport" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} <span>{{item.no}}</span></router-link>
                        </h2>
                      </td>
                      <td>{{item.date}}</td>
                      <td>{{item.department}}</td>
                      <td class="text-center">
                        <button class="btn btn-outline-info btn-sm">{{item.leavetype1}}</button>
                      </td>
                      <td class="text-center"><span class="btn btn-danger btn-sm">{{item.noofday}}</span></td>
                      <td class="text-center"><span class="btn btn-warning btn-sm"><b>{{item.remaining}}</b></span></td>
                      <td class="text-center"><span class="btn btn-success btn-sm"><b>{{item.totalleave}}</b></span></td>
                      <td class="text-center">{{item.leavetype}}</td>
                      <td class="text-center">{{item.leavecarry}}</td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import leavereport from '../../../../assets/json/leavereport.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      leavereport: leavereport
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#leavereportcontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>