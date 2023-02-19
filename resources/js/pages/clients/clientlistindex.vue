<template>
    <div class="clientslist">
        <div class="main-wrapper">
            <main-header></main-header>
            <sidebar></sidebar>
            <!-- Page Wrapper -->

            <div class="page-wrapper">

                <!-- Page Content -->

                <div class="content container-fluid">

                    <clientsheader/>

                    <clientsfilter/>


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
                                                <a href="javascript:void(0)"
                                                   class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                                   data-bs-toggle="dropdown" aria-expanded="false"><i
                                                    class="fa fa-dot-circle-o text-success"></i> {{item.is_active == 1?
                                                    "Active":"Inactive"}} </a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="javascript:void(0)"><i
                                                        class="fa fa-dot-circle-o text-success"></i> Active</a>
                                                    <a class="dropdown-item" href="javascript:void(0)"><i
                                                        class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="dropdown dropdown-action">
                                                <a href="javascript:void(0)" class="action-icon dropdown-toggle"
                                                   data-bs-toggle="dropdown" aria-expanded="false"><i
                                                    class="material-icons">more_vert</i></a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="javascript:void(0)"
                                                       data-bs-toggle="modal" data-bs-target="#edit_client"
                                                       @click="editClient(item.id)"><i class="fa fa-pencil m-r-5"></i>
                                                        Edit</a>
                                                    <a class="dropdown-item" href="javascript:void(0)"
                                                       @click="deleteClient(item.id)"><i
                                                        class="fa fa-trash-o m-r-5"></i> Delete</a>
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

                <clientsmodal/>

            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
    <!-- Edit Client Modal -->
    <div id="edit_client" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Client</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form  @submit.prevent="updateUser">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Username <span class="text-danger">*</span></label>
                                    <input class="form-control" type="text" v-model="user.name">
                                    <input class="form-control" type="hidden" v-model="user.id">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                    <input class="form-control floating" type="email" v-model="user.email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label">Role <span class="text-danger">*</span></label>
                                <select class="form-control" type="role" v-model="user.role_id">
                                    <option selected="selected" :value="0">Select Roles</option>
                                    <option v-for="role in getRoles" :value="role.id" :key="role.id">{{role.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
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
        data: function () {
            return {
                clientlist: {},
                user: {
                    id: "",
                    name: "",
                    email: "",
                    role_id: "",
                },
            }
        },
        mounted() {
            util.datatable('#clientlist'),
                this.setroles(),
                this.setUsers()
        },
        methods: {
            setUsers() {
                this.axios.get(`api/admin/user/listing`).then((res) => {
                    this.clientlist = res.data.data.data;
                });
            },
            addClient() {
                this.axios.post('api/admin/user/store', this.product).then(response => (this.setUsers()))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            },
            deleteClient(id) {
                if (confirm("Are you sure to delete this User ?")) {
                    this.axios.post(`api/admin/user/delete/`, {'id': id}).then(response => {
                        // let i = this.clientlist.map(data => data.id).indexOf(id);
                        // this.clientlist.splice(i, 1)
                    });
                }
            }, editClient(id) {
                this.axios.post(`api/admin/user/detail/`, {'id': id}).then(response => {
                    const userData = response.data.data;
                    console.log(userData);
                    this.user.id = userData.id;
                    this.user.name = userData.name;
                    this.user.email = userData.email;
                    this.user.role_id = userData.roles[0].id;

                    // let i = this.clientlist.map(data => data.id).indexOf(id);
                    // this.clientlist.splice(i, 1)
                });
                console.log(this.user)
            }, setroles() {
                this.axios.get(`http://127.0.0.1:8000/api/admin/user/role/listing`)
                    .then((response) => {
                        this.getRoles = response.data.data;
                        console.log(this.getRoles)
                    })

                    // this.$router.push({ name: 'home' })
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }, updateUser() {
                this.axios.post(`api/admin/user/update`, this.user).then((response) => {
                    window.location.reload();
                });
            },
        },
        components: {},
        name: 'clientslist'
    }
</Script>
