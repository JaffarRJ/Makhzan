<template>
<table class="table table-striped custom-table mb-0 datatable" id="expensereportcontent">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Purchase From</th>
                      <th>Purchase Date</th>
                      <th>Purchased By</th>
                      <th>Amount</th>
                      <th>Paid By</th>
                      <th class="text-center">Status</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in expensereport" :key="item.id">
                      <td>
                        <strong>{{item.item}}</strong>
                      </td>
                      <td>{{item.purchasefrom}}</td>
                      <td>{{item.purchasedate}}</td>
                      <td>
                        <router-link to="/profile" class="avatar avatar-xs">
                          <img :src="loadImg(item.image)" alt="">
                        </router-link>
                        <h2><router-link to="/profile">{{item.purchaseby}}</router-link></h2>
                      </td>
                      <td>{{item.amount}}</td>
                      <td>{{item.paidby}}</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Pending</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Approved</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_approve"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import expensereport from '../../../../assets/json/expensereport.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      expensereport: expensereport
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#expensereportcontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>