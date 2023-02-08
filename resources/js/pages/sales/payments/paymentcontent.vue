<template>

 <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">  
                <table class="table table-striped custom-table datatable mb-0" id="paymentcontent">
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
                    <tr v-for="item in payments" :key="item.id">
                      <td><router-link to="/invoice-view">{{item.invoiceid}}</router-link></td>
                      <td>
                        <h2><a href="javascript:void(0)">{{item.client}}</a></h2>
                      </td>
                      <td>{{item.paymenttype}}</td>
                      <td>{{item.paiddate}}</td>
                      <td>{{item.paidamount}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import payments from '../../../../assets/json/payments.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      payments: payments
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#paymentcontent')
    },
  }
</Script>