<template>

<div class="row">
            <div class="col-md-6 d-flex">
              <div class="card card-table flex-fill">
                <div class="card-header">
                  <h3 class="card-title mb-0">Invoices</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-nowrap custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Invoice ID</th>
                          <th>Client</th>
                          <th>Due Date</th>
                          <th>Total</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in admininvoice" :key="item.id">
                          <td><router-link to="/invoice-view">{{item.invoiceid}}</router-link></td>
                          <td>
                            <h2><a href="javascript:void(0)">{{item.client}}</a></h2>
                          </td>
                          <td>{{item.duedate}}</td>
                          <td>{{item.total}}</td>
                          <td>
                            <span class="badge bg-inverse-warning">{{item.status}}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer">
                  <router-link to="/invoices">View all invoices</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex">
              <div class="card card-table flex-fill">
                <div class="card-header">
                  <h3 class="card-title mb-0">Payments</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">  
                    <table class="table custom-table table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th>Invoice ID</th>
                          <th>Client</th>
                          <th>Payment Type</th>
                          <th>Paid Date</th>
                          <th>Paid Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in admininvoice" :key="item.id">
                          <td><router-link to="/invoice-view">{{item.invoiceid}}</router-link></td>
                          <td>
                            <h2><a href="javascript:void(0)">{{item.client}}</a></h2>
                          </td>
                          <td>{{item.paymenttype}}</td>
                          <td>{{item.duedate}}</td>
                          <td>{{item.total}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer">
                  <router-link to="/payments">View all payments</router-link>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
import admininvoice from '../../../../assets/json/admininvoice.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      admininvoice: admininvoice
    }
    },
    components: {
    },
    name: 'activities'
  }
</Script>