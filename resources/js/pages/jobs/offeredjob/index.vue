<template>
  <div class="offeredjobs">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
          <headerofferedjob />
          
          <!-- Content Starts -->
          
          <jobheader /> 
          
          <searchfilter />

          <contentofferedjob />
        
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
    name: 'offeredjobs'
  }
</Script>