<template>
<!-- Content Starts -->
                    <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable" id="shifttable">
                  <thead>
                    <tr>
                                            <th>#</th>
                      <th>Shift Name</th>
                      <th>Min Start Time</th>
                      <th>Start Time</th>
                                            <th>Max Start Time</th>
                                            <th>Min End Time</th>
                                            <th>End Time</th>
                                            <th>Max End Time</th>
                                            <th>Break Time</th>
                      <th class="text-center">Status</th>
                      <th class="text-end no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                                            <td>1</td>
                                            <td>10'o clock Shift</td>
                                            <td>09:00:00 am</td>
                                            <td>10:00:00 am</td>
                                            <td>10:30:00 am</td>
                                            <td>06:00:00 pm</td>
                                            <td>06:30:00 pm</td>
                                            <td>07:00:00 pm</td>
                                            <td>30 mins</td>
                                            <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_shift"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>10:30 shift</td>
                                            <td>10:00:00 am</td>
                                            <td>10:30:00 am </td>
                                            <td>11:00:00 am</td>
                                            <td>06:30:00 pm</td>
                                            <td>07:00:00 pm</td>
                                            <td>07:30:00 pm </td>
                                            <td>45 mins</td>
                                            <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_shift"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
          <!-- /Content End -->

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
    util.datatable('#shifttable')
    },
  }
</Script>