<template>
<table class="table table-striped custom-table mb-0">

                  <thead>
                    <tr>
                      <th>Estimate Number</th>
                      <th>Client</th>
                      <th>Estimate Date</th>
                      <th>Expiry Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in estimate" :key="item.id">
                      <td><router-link to="/estimate-view">{{item.estimateno}}</router-link></td>
                      <td>{{item.client}}</td>
                      <td>{{item.estimatedate}}</td>
                      <td>{{item.expirydate}}</td>
                      <td>{{item.amount}}</td>
                      <td><span class="badge bg-inverse-success">{{item.status}}</span></td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <router-link class="dropdown-item" to="/edit-estimate"><i class="fa fa-pencil m-r-5"></i> Edit</router-link>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_estimate"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import estimate from '../../../../../assets/json/estimate.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      estimate: estimate
    }
    },
    components: {
    },
  }
</Script>