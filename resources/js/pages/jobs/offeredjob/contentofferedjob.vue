<template>

<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="contentofferedjob">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th class="text-center">Job Type</th>
                      <th class="text-center">Actions</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in offredjob" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                      <td>{{item.department}}</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.jobtype}}
                          </a>
                        </div>
                      </td>
                      <td class="text-center">
                        <a href="javascript:void(0)" class="btn btn-sm btn-info download-offer"><span><i class="fa fa-download me-1"></i> {{item.actions}}</span></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import offredjob from '../../../../assets/json/offredjob.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      offredjob: offredjob
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#contentofferedjob')
    },
  }
</Script>