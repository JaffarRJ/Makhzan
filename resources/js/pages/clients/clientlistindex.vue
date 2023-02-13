<template>
  <div class="clientslist">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->

      <div class="page-wrapper">

        <!-- Page Content -->

        <div class="content container-fluid">

        <clientsheader />

        <clientsfilter />


          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable" id="clientlist">
                  <thead>
                    <tr>
                      <th>Name</th>
<!--                      <th>Client ID</th>-->
                      <th>Email</th>
                      <th>Role</th>
<!--                      <th>Mobile</th>-->
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in clientlist" :key="item.id">
                      <td>
                          <router-link to="/client-profile">{{item.name}}</router-link>
                      </td>
                      <td>{{item.email}}</td>
                      <td>{{item.roles[0].name}}</td>
                      <td>
                        <div class="dropdown action-label">
                          <a href="javascript:void(0)" class="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o text-success"></i> {{item.is_active == 1? "Active":"Inactive"}} </a>
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
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_client" @click="editClient(item.id)"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" @click="deleteClient(item.id)"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <!-- /Page Content -->

        <clientsmodal />

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
// import clientlist from '../../../assets/json/clientlist.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
import axios from "axios";
axios.defaults.withCredentials = true;

  export default {
      data: function() {
          return {
              clientlist: {}
          }
      },created(){
          this.axios.get(`api/admin/user/listing`).then((res)=>
          {this.clientlist = res.data.data.data;});
      },
      mounted() {
          util.datatable('#clientlist')
      },
      methods: {
          addClient() {
              this.axios.post('api/admin/user/store', this.product).then(response => (this.$router.push({name: 'home'})))
                  .catch(err => console.log(err))
                  .finally(() => this.loading = false)
          },
          deleteClient(id) {
              if(confirm("Are you sure to delete this User ?")) {
                  this.axios.post(   `api/admin/user/delete/`,{'id': id}).then(response => {
                      // let i = this.clientlist.map(data => data.id).indexOf(id);
                      // this.clientlist.splice(i, 1)
                  });
              }
          },
          editClient(id) {
                  this.axios.post(   `api/admin/user/edit/`,{'id': id}).then(response => {
                      // let i = this.clientlist.map(data => data.id).indexOf(id);
                      // this.clientlist.splice(i, 1)
                  });
          }, loadImg(imgPath) {
              return images('./' + imgPath).default
          }
      },
    components: {

    },
    name: 'clientslist'
  }
</Script>
