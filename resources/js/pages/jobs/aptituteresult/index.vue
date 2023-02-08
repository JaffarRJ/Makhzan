<template>
  <div class="apptituderesult">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
       
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <aptituteresultheader /> 
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="aptituteresult">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th>Category Wise Mark</th>
                      <th>Total Mark</th>
                      <th class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in apptituderesult" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} <span>{{item.name1}}</span></router-link>
                        </h2>
                      </td>
                      <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                      <td>{{item.department}}</td>
                      <td>{{item.category1}} <b>{{item.category1no}}</b><br>{{item.category2}} <b>{{item.category2no}}</b><br></td>
                      <td class="text-center">{{item.totalmark}}</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}} </a>  
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-info"></i> Resume selected</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i>  Resume Rejected</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i>  Aptitude Selected</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i>  Aptitude rejected</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i>  video call selected</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-danger"></i>  Video call rejected</a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-dot-circle-o text-success"></i>  Offered</a>
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
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import apptituderesult from '../../../../assets/json/apptituderesult.json';
  const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      apptituderesult: apptituderesult
    }
  },
    components: {
   
    },
    mounted() {
    util.datatable('#aptituteresult')
    },
     methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'apptituderesult'
  }
</Script>