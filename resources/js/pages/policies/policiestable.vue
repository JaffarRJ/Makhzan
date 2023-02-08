<template>

<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" 
id="policiestable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Policy Name </th>
                      <th>Department </th>
                      <th>Description </th>
                      <th>Created </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in policies" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.policyname}}</td>
                      <td>{{item.department}}</td>
                      <td>{{item.description}}</td>
                      <td>{{item.created}}</td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-download m-r-5"></i> Download</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_policy"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_policy"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        
        </div>
</template>
<script>
import policies from '../../../assets/json/policies.json';
import util from '../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      policies: policies
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#policiestable')
    },
  }
</Script>