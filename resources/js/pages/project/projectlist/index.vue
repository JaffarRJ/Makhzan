<template>

  <div class="projectlist">

    <div class="main-wrapper">

      <main-header></main-header>

      <sidebar></sidebar>

       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerprojectlist />
          
        <filterprojectlist />
          
        <tableprojectlist />

        </div>
        <!-- /Page Content -->
        
        <modalprojectlist />
        
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
    name: 'projectlist'
  }
</Script>