<template>
  <div class="clients">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <clientsheader />  
          
        <clientsfilter />  
          
          <div class="row staff-grid-row">
            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3" v-for="item in client" :key="item.id">
              <div class="profile-widget">
                <div class="profile-img">
                  <router-link to="/client-profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                </div>
                <div class="dropdown profile-action">
                  <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                   <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                </div>
                <h4 class="user-name m-t-10 mb-0 text-ellipsis"><router-link to="/client-profile">{{item.name}}</router-link></h4>
                <h5 class="user-name m-t-10 mb-0 text-ellipsis"><router-link to="/client-profile">{{item.name1}}</router-link></h5>
                <div class="small text-muted">{{item.owner}}</div>
                <router-link to="/chat" class="btn btn-white btn-sm m-t-10">Message</router-link>
                <router-link to="/client-profile" class="btn btn-white btn-sm m-t-10 ms-1">View Profile</router-link>
              </div>
            </div>
          </div>
          </div>
        <!-- /Page Content -->
      
        <clientsmodal />
        
        </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import client from '../../../assets/json/client.json';
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
     data() {
    return {
      client: client
    }
    },
    components: {
   
    },
    mounted() {
    },
     methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'clients'
  }
</Script>