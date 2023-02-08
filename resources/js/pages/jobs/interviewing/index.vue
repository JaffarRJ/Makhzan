<template>
  <div class="interviewing">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
        <interviewingheader />
          
        <!-- Content Starts -->

        <jobheader />

        <div class="row">

        <interviewingsidebar />

        <interviewingcontent />

        </div>

        <!-- /Content End -->
          
        </div>
        <!-- /Page Content -->
        
        </div>
      <!-- /Page Wrapper -->
    </div>
    <modalinterviewing />
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'interviewing'
  }
</Script>