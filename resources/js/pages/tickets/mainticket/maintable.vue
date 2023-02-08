<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="maintickettable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Ticket Id</th>
                      <th>Ticket Subject</th>
                      <th>Assigned Staff</th>
                      <th>Created Date</th>
                      <th>Last Reply</th>
                      <th>Priority</th>
                      <th class="text-center">Status</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><router-link to="/ticket-view">#TKT-0001</router-link></td>
                      <td>Laptop Issue</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link class="avatar avatar-xs" to="/profile"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></router-link>
                          <a href="javascript:void(0)">John Smith</a>
                        </h2>
                      </td>
                      <td>5 Jan 2019 07:21 AM</td>
                      <td>5 Jan 2019 11.12 AM</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o text-danger"></i> High </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> High</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-warning"></i> Medium</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Low</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> New 
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-info"></i> Open</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-info"></i> Reopened</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> On Hold</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Closed</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> In Progress</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Cancelled</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_ticket"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><router-link to="/ticket-view">#TKT-0001</router-link></td>
                      <td>Internet Issue</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link class="avatar avatar-xs" to="/profile"><img alt="" src="../../../../assets/img/profiles/avatar-08.jpg"></router-link>
                          <a href="javascript:void(0)">Catherine Manseau</a>
                        </h2>
                      </td>
                      <td>5 Jan 2019 07:21 AM</td>
                      <td>5 Jan 2019 11.12 AM</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-dot-circle-o text-warning"></i> Medium </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> High</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-warning"></i> Medium</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Low</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Reopened 
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-info"></i> Open</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-info"></i> Reopened</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> On Hold</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> Closed</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i> In Progress</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i> Cancelled</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_ticket"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
     
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#maintickettable')
    },
  }
</Script>