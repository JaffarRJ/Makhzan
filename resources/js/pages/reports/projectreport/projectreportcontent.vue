<template>

  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="projectreportcontent">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project Title</th>
                      <th>Client Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in projectreport" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>
                        <router-link to="/project-view">{{item.projecttile}}</router-link>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/client-profile" class="avatar"><img src="../../../../assets/img/profiles/avatar-19.jpg" alt=""></router-link>
                          <router-link to="/client-profile">{{item.clientname}}</router-link>
                        </h2>
                      </td>
                      <td>{{item.startdate}}</td>
                      <td>{{item.enddate}}</td>
                      <td>
                        <div class="dropdown action-label">
                          <a href="javascript:void(0)" class="btn btn-white btn-sm btn-rounded"><i class="fa fa-dot-circle-o text-success"></i> {{item.status}} </a>
                          
                        </div>
                      </td>
                      <td>
                        <ul class="team-members">
                          <li>
                            <a href="javascript:void(0)" title="" data-bs-toggle="tooltip" data-original-title="John Doe"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="" data-bs-toggle="tooltip" data-original-title="Richard Miles"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="" data-bs-toggle="tooltip" data-original-title="John Smith"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" title="" data-bs-toggle="tooltip" data-original-title="Mike Litorus"><img alt="" src="../../../../assets/img/profiles/avatar-05.jpg"></a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="all-users">+15</a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import projectreport from '../../../../assets/json/projectreport.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      projectreport: projectreport
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#projectreportcontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>