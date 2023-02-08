<template>

<table class="table table-striped custom-table mb-0 datatable" id="expertable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Experiance</th>
                      <th>Status</th>                 
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in experiancelevel" :key="item.id">
                      <td>{{item.no}}</td>                    
                      <td>{{item.experience}}</td>
                      <td>
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                          <i class="fa fa-dot-circle-o text-success"></i> {{item.status}}                </a>
                        </div>  
                      </td>
                      <td class="text-center">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import experiancelevel from '../../../../assets/json/experiancelevel.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      experiancelevel: experiancelevel
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#expertable')
    },
  }
</Script>