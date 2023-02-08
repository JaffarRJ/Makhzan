<template>
<table class="table table-striped custom-table mb-0 datatable" id="employeereports">

                  <thead>
                    <tr>
                      <th>Employee Name</th>
                      <th>Employee Type</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>Joining Date</th>
                      <th>DOB</th>
                      <th>Martial Status</th>
                      <th>Gender</th>
                      <th>Terminated Date</th>
                      <th>Relieving Date</th>
                      <th>Salary</th>
                      <th>Address</th>
                      <th>Contact Number</th>
                      <th>Emercency Contact Details</th>
                      <th>Experience</th>
                      <th class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in employeereport" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile" class="text-primary">{{item.name}} <span>{{item.number}}</span></router-link>
                        </h2>
                      </td>
                      <td>{{item.employeetype}}</td>
                      <td class="text-info">{{item.email}}</td>
                      <td>{{item.department}}</td>
                      <td>{{item.designation}}</td>
                      <td>{{item.joiningdate}}</td>
                      <td>{{item.dob}}</td>
                      <td>{{item.marriedstatus}}</td>
                      <td>{{item.gender}}</td>
                      <td>{{item.terminateddate}}</td>
                      <td>{{item.releivingdate}}</td>
                      <td>{{item.salary}}</td>
                      <td>
                        {{item.address}}
                      </td>
                      <td>{{item.contactnumber}}</td>
                      <td>{{item.emergency}}</td>
                      <td>{{item.experience}}</td>
                      <td><button class="btn btn-outline-success btn-sm">{{item.active}}</button></td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import employeereport from '../../../../assets/json/employeereport.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      employeereport: employeereport
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#employeereports')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>