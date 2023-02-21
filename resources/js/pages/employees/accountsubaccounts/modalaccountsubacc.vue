<template>
    <!-- Add Holiday Modal -->
    <div class="modal custom-modal fade" id="add_acc" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Account</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="addList">
                                    <label class="col-form-label">Account<span class="text-danger">*</span></label>
                                    <select class="form-control" type="account" v-model="list.account_id" >
                                        <option>Select Account</option>
                                        <option v-for="account in getAccounts" :value="account.id" :key="account.id">{{account.name}}</option>
                                    </select>
                                <label class="col-form-label">Sub Account<span class="text-danger">*</span></label>
                                <select class="form-control" type="sub-account" v-model="list.sub_account_id">
                                    <option>Select Sub Account</option>
                                    <option v-for="subAccount in getSubAccounts" :value="subAccount.id" :key="subAccount.id">{{subAccount.name}}</option>
                                </select>
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /Add Holiday Modal -->

    <!-- Edit Holiday Modal -->
    <div class="modal custom-modal fade" id="edit_acc" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Account</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label>Holiday Name <span class="text-danger">*</span></label>
                            <input class="form-control" value="New Year" type="text">
                        </div>
                        <div class="form-group">
                            <label>Holiday Date <span class="text-danger">*</span></label>
                            <div class="cal-icon custompicker">
                                <datepicker v-model="enddate" class="picker"
                                            :editable="true"
                                            :clearable="false"/>
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
    <!-- /Edit Holiday Modal -->

    <!-- Delete Holiday Modal -->
    <div class="modal custom-modal fade" id="delete_holiday" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="form-header">
                        <h3>Delete Holiday</h3>
                        <p>Are you sure want to delete?</p>
                    </div>
                    <div class="modal-btn delete-action">
                        <div class="row">
                            <div class="col-6">
                                <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                            </div>
                            <div class="col-6">
                                <a href="javascript:void(0);" data-bs-dismiss="modal"
                                   class="btn btn-primary cancel-btn">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Holiday Modal -->
</template>
<script>
    import Vue from 'vue'
    import {ref} from 'vue'

    const currentDate = ref(new Date())
    const currentDate1 = ref(new Date())
    export default {

        data: function () {
            return {
                list: {
                    name: "",
                    detail: "",
                },
            }
        },
        components: {},
        mounted() {
        },
        methods: {
            addList() {
                this.axios.post('api/admin/account_sub_account/store', this.list)
                    .then((response) => {
                        window.location.reload();
                    });
            }
        }
    }
</Script>
