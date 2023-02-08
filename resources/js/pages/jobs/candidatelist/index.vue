<template>
  <div class="candidates">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
         <candidatelistheader />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="candidatelist">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Mobile Number</th>
                      <th>Email</th>
                      <th>Created Date</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="item in candidates" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} </router-link>
                        </h2>
                      </td>
                      <td>{{item.mobileno}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.createddate}}</td>
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
              </div>
            </div>
          </div>
          </div>
          <!-- /Page Content -->
        
          <candidatelistmodal />
        
      </div>
      <!-- /Page Wrapper -->

    </div>

  </div>
</template>
<script>
  import candidates from '../../../../assets/json/candidates.json';
  import util from '../../../../assets/utils/util'
  const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      candidates: candidates
    }
    },
    components: {
   
    },
    mounted() {
    util.datatable('#candidatelist')
    },
     methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'candidates'
  }
</Script>