<template>
  <div class="tablesbasic">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
       <div class="content container-fluid">
        
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 class="page-title">Basic Tables</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Basic Tables</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <tablebasic1 />

          <tablebasic2 />

          <tablebasic3 />
        
        </div>      
      </div>
      <!-- /Main Wrapper -->
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
    name: 'tablesbasic'
  }
</Script>