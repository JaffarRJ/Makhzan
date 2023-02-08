<template>
  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="trackingcontent">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Goal Type</th>
                      <th>Subject</th>
                      <th>Target Achievement</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Description </th>
                      <th>Status </th>
                      <th>Progress </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in goaltracking" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.goaltype}}</td>
                      <td>{{item.subject}}</td>
                      <td>{{item.target}}</td>
                      <td>
                        {{item.startdate}}
                      </td>
                      <td>{{item.enddate}}</td>
                      <td>{{item.description}}</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> {{item.status}}
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td><p class="mb-1">{{item.progress}}</p><div class="progress" style="height:5px"><div class="progress-bar bg-primary progress-sm" style="width: 73%;height:10px;"></div></div></td>
                      
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_goal"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_goal"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
import goaltracking from '../../../../assets/json/goaltracking.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      goaltracking: goaltracking
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#trackingcontent')
    },
  }
</Script>