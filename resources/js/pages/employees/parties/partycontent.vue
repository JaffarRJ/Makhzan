<template>
    <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name </th>
                      <th>CNIC </th>
                      <th>Address </th>
                      <th>Status </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="holiday-completed" v-for="item in getlist" :key="item.id">
                      <td>{{item.id}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.cnic}}</td>
                      <td>{{item.address}}</td>
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

    <!-- Edit Modal -->
    <div class="modal custom-modal fade" id="edit_acc" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Party</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form   @submit.prevent="updateList">
                        <div class="form-group">
                            <label>Party Name<span class="text-danger">*</span></label>
                            <input class="form-control" type="hidden" v-model="list.id">
                            <input class="form-control" type="text" v-model="list.name">
                        </div>
                        <div class="form-group">
                            <label>Party CNIC<span class="text-danger">*</span></label>
                            <input class="form-control" type="number" v-model="list.cnic">
                        </div>
                        <div class="form-group">
                            <label>Party Address<span class="text-danger">*</span></label>
                            <input class="form-control" type="text" v-model="list.address">
                        </div>
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /Edit Modal -->
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
                cnic: "",
                address: "",
            },
        }
    },
    mounted() {
            this.setList()
    },
    methods: {
        setList() {
            this.axios.get(`api/admin/party/listing`).then((res) => {
                this.getlist = res.data.data.data;
            });
        },
        addList() {
            this.axios.post('api/admin/party/store', this.list).then(response => (this.setUsers()))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
        deleteList(id) {
            if (confirm("Are you sure to delete ?")) {
                this.axios.post(`api/admin/party/delete/`, {'id': id}).then(response => {
                    window.location.reload();
                });
            }
        }, editList(id) {
            this.axios.post(`api/admin/party/detail/`, {'id': id}).then(response => {
                const getData = response.data.data;
                this.list.id = getData.id;
                this.list.name = getData.name;
                this.list.cnic = getData.cnic;
                this.list.address = getData.address;
            });
        },updateList() {
            this.axios.post(`api/admin/party/update`, this.list).then((response) => {
                window.location.reload();
            });
        },changeStatus(id) {
            this.axios.post(`api/admin/party/updateIsActive`, {'id': id}).then((response) => {
                window.location.reload();
            });
        },
    },
    components: {},
    name: 'parties'
}
</Script>
