<template>
  <div class="assets1">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
        <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerassets />
        <assetsfilter />
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="assettable">
                  <thead>
                    <tr>
                      <th>Asset User</th>
                      <th>Asset Name</th>
                      <th>Asset Id</th>
                      <th>Purchase Date</th>
                      <th>Warrenty</th>
                      <th>Warrenty End</th>
                      <th>Amount</th>
                      <th class="text-center">Status</th>
                      <th class="text-end"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in assets" :key="item.id">
                      <td>{{item.assetuser}}</td>
                      <td>
                        <strong>{{item.assetname}}</strong>
                      </td>
                      <td>{{item.assetid}}</td>
                      <td>{{item.purchasedate}}</td>
                      <td>{{item.warrenty}}</td>
                      <td>{{item.warrentyend}}</td>
                      <td>{{item.amount}}</td>
                      <td class="text-center">  
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Pending</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-info"></i> Returned</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_asset"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_asset"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
        <!-- /Page Content -->
        <modalpopup />
        </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import assets from '../../../assets/json/assets.json';
  import util from '../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
    assets: assets
    }
    },
    components: {
   
    },
    mounted() {
    util.datatable('#assettable')
    },
    name: 'assets1'
  }
</Script>