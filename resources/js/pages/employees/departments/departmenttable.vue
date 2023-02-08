<template>
<table class="table table-striped custom-table mb-0 datatable" id="departmenttable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Department Name</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in department" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.departmentname}}</td>
                      <td class="text-end">
                                            <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_department"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_department"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import department from '../../../../assets/json/department.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      department: department
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#departmenttable')
    },
  }
</Script>