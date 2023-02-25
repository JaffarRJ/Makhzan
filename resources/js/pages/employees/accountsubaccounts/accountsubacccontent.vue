<template>
    <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Account Name </th>
                      <th>Sub Account Name</th>
                      <th>Status </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="holiday-completed" v-for="item in getlist" :key="item.id">
                      <td>{{item.id}}</td>
                      <td>{{item.account_id}}</td>
                      <td>{{item.sub_account_id}}</td>
                        <td>
                            <div class="dropdown action-label">
                                <a href="javascript:void(0)" v-on:change="changeStatus(item.is_active)"
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
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_acc" @click="editList(item.id)"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" @click="deleteList(item.id)"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
import holiday from '../../../../assets/json/holiday.json';
  import Vue from 'vue'
export default {
    data: function () {
        return {
            getlist: {},
            list: {
                id: "",
                name: "",
                email: "",
            },
        }
    },
    mounted() {
            this.setList()
    },
    methods: {
        setList() {
            this.axios.get(`api/admin/account_sub_account/listing`).then((res) => {
                this.getlist = res.data.data.data;
            });
        },
        addList() {
            this.axios.post('api/admin/account_sub_account/store', this.list).then(response => (this.setUsers()))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
        deleteList(id) {
            if (confirm("Are you sure to delete ?")) {
                this.axios.post(`api/admin/account_sub_account/delete/`, {'id': id}).then(response => {
                    window.location.reload();
                });
            }
        }, editList(id) {
            this.axios.post(`api/admin/account_sub_account/detail/`, {'id': id}).then(response => {
                const getData = response.data.data;
                this.list.id = getData.id;
                this.list.name = getData.name;
                this.list.email = getData.detail;
            });
        },updateList() {
            this.axios.post(`api/admin/account_sub_account/update`, this.user).then((response) => {
                window.location.reload();
            });
        },changeStatus(id) {
            this.axios.post(`api/admin/account_sub_account/updateIsActive`, {'id': id}).then((response) => {
                window.location.reload();
            });
        },
    },
    components: {},
    name: 'accountsubaccounts'
}
</Script>
