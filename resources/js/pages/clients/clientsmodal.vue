<template>
<!-- Add Client Modal -->
        <div id="add_client" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Client</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body" >
                <form  @submit.prevent="addUser">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Username <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="user.name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                        <input class="form-control floating" type="email" v-model="user.email">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" type="password" v-model="user.password">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input class="form-control" type="confirm_password" v-model="user.password_confirmation">
                      </div>
                    </div>
                      <div class="col-md-6">
                          <label class="col-form-label">Role <span class="text-danger">*</span></label>
                          <select class="form-control" type="role" v-model="user.role_id" >
                              <option selected="selected" :value="0">Select Roles</option>
                              <option v-for="role in getRoles" :value="role.id" :key="role.id">{{role.name}}</option>
                          </select>
                      </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Client Modal -->

        <!-- Edit Client Modal -->
        <!--<div id="edit_client" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Client</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Username <span class="text-danger">*</span></label>
                        <input class="form-control" type="text"  v-model="user.name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                        <input class="form-control floating" type="email"  v-model="user.email">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" type="password"  v-model="user.password">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input class="form-control" type="password" v-model="user.confirm_password">
                      </div>
                    </div>
                      <div class="col-md-6">
                          <label class="col-form-label">Role <span class="text-danger">*</span></label>
                          <select class="form-control" type="role" v-model="user.role_id" >
                              <option selected="selected" :value="0">Select Roles</option>
                              <option v-for="role in getRoles" :value="role.id" :key="role.id">{{role.name}}</option>
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
        </div>-->
        <!-- /Edit Client Modal -->

        <!-- Delete Client Modal -->
        <div class="modal custom-modal fade" id="delete_client" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Client</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Delete Client Modal -->
</template>



<script>
    export default {
        data:function() {
            return {
                user: {
                    name:"",
                    email:"",
                    role_id:"",
                    password:"",
                    password_confirmation:"",
                },
                // getRoles:{}
            }
        },mounted() {
            this.setroles()

        },
        methods: {
            addUser() {
                console.log(this.user);
                this.axios.post('api/admin/user/store', this.user)
                    .then(response => (
                        console.log(response)
                        // this.$router.push({ name: 'home' })
                    ))
                $("#add_client").modal('hide')
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }, setroles() {
                this.axios.get(`http://127.0.0.1:8000/api/admin/user/role/listing`)
                    .then((response) => {
                        this.getRoles = response.data.data;
                        console.log(this.getRoles)})

                    // this.$router.push({ name: 'home' })
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
