<template>
  <div class="taskreports">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
        <!-- Page Wrapper -->
        <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Task Reports</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Task Reports</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <taskreportfilter />
          
          <taskreporttable />
          
          </div>
        
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
  components: {
   
    },
    mounted() {
    },
    name: 'taskreports'
  }
</Script>