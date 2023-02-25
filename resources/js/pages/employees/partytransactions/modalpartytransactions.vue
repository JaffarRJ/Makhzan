<template>
  <!-- Add Holiday Modal -->
        <div class="modal custom-modal fade" id="add_acc" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Party Transaction</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form   @submit.prevent="addList">
                  <div class="form-group">
                      <label class="col-form-label">Account<span class="text-danger">*</span></label>
                      <select class="form-control" type="account" v-model="list.party_id" >
                          <option>Select Party</option>
                          <option v-for="party in getPartys" :value="party.id" :key="party.id">{{party.name}}</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label class="col-form-label">Sub Account<span class="text-danger">*</span></label>
                      <select class="form-control" type="sub-account" v-model="list.transaction_id">
                          <option>Select Transaction</option>
                          <option v-for="transaction in getTransactions" :value="transaction.id" :key="transaction.id">{{transaction.name}}</option>
                      </select>
                  </div>
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
                          <datepicker v-model="enddate"  class="picker"
                          :editable="true"
                          :clearable="false" />
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
                      <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
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
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {

      data:function() {
          return {
              list: {
                  party_id:"",
                  transaction_id:"",
              },
          }
      },
    components: {

    },
    mounted() {
        this.setParty(),
            this.setTransaction()
    },
      methods: {
          addList() {
              this.axios.post('api/admin/party_transaction/store', this.list)
                  .then((response) => {
                      window.location.reload();
                  });
          }, setParty() {
              this.axios.get(`api/admin/party/listing`)
                  .then((response) => {
                      this.getPartys = response.data.data.data;
                      console.log(this.getAccounts)})

                  // this.$router.push({ name: 'home' })
                  .catch(err => console.log(err))
                  .finally(() => this.loading = false)
          }, setTransaction() {
              this.axios.get(`api/admin/transaction/listing`)
                  .then((response) => {
                      this.getTransactions = response.data.data.data;
                      console.log(this.getSubAccounts)})

                  // this.$router.push({ name: 'home' })
                  .catch(err => console.log(err))
                  .finally(() => this.loading = false)
          }
      }
  }
</Script>
