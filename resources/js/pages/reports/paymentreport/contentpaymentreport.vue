<template>

  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="contentpaymentreport">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Transaction ID</th>
                      <th>Date</th>
                      <th>Client Name</th>
                      <th>Payment Method</th>
                      <th>Invoice</th>
                      <th class="text-center">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in paymentreport" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><a href="javascript:void(0)">{{item.transactionid}}</a></td>
                      <td>{{item.date}}</td>
                      <td>{{item.clientname}}</td>
                      <td>{{item.paymentmethod}}</td>
                      <td><a href="javascript:void(0)">{{item.invoice}}</a></td>
                      <td class="text-center">{{item.amount}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import paymentreport from '../../../../assets/json/paymentreport.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      paymentreport: paymentreport
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#contentpaymentreport')
    },
    }
</Script>