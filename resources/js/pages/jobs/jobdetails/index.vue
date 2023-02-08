<template>
  <div class="jobdetails">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
         <headerjobdetails />
          
          <div class="row">
            <div class="col-md-8">
              <jobdetailsinfo />
              <jobdetailscontent />
            </div>
            <div class="col-md-4">
              <jobdetailsdetinfo />
            </div>
          </div>
        </div>
        <!-- /Page Content -->
        
       <modaljobdetails /> 
        
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
    name: 'jobdetails'
  }
</Script>