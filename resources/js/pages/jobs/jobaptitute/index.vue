<template>
  <div class="jobaptitude">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
         <jobaptituteheader />
          
         <jobheader />
          
          <div class="row">
              <div class="col-md-6 offset-md-3">
                <jobaptitutedetails />
                <jobaptitutequestions />
              </div>
          </div>
          <!-- /Content End -->
          
                </div>
        <!-- /Page Content -->
        
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
    name: 'jobaptitude'
  }
</Script>