<template>
  <div class="joblist">
    <div class="main-wrapper">
      <joblistmainheader></joblistmainheader>
      <!-- Page Wrapper -->
      <div class="page-wrapper job-wrapper">
      
        <!-- Page Content -->
        <div class="content container">
        
        <joblistheader />
          
        <jobcontent />

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
    name: 'joblist'
  }
</Script>