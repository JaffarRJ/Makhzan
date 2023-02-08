<template>
<table class="table table-striped custom-table datatable" id="employeelistcontent">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th class="text-nowrap">Join Date</th>
                      <th>Role</th>
                      <th class="text-end no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in employeeslist" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} <span>{{item.name1}}</span></router-link>
                        </h2>
                      </td>
                      <td>{{item.employeeid}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.mobile}}</td>
                      <td>{{item.joindate}}</td>
                      <td>
                        <div class="dropdown">
                          <a href="" class="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{{item.role}} </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)">Software Engineer</a>
                            <a class="dropdown-item" href="javascript:void(0)">Software Tester</a>
                            <a class="dropdown-item" href="javascript:void(0)">Frontend Developer</a>
                            <a class="dropdown-item" href="javascript:void(0)">UI/UX Developer</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_employee"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import employeeslist from '../../../../assets/json/employeeslist.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      employeeslist: employeeslist
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#employeelistcontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>