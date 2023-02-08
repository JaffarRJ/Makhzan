<template>
  <div class="leaves">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerleave />
          
        <leavewidget />
          
        <leavefilter />
          
        <leavecontent />
        
        </div>
        <!-- /Page Content -->
        
        <modalleave />
        
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
    name: 'leaves'
  }
</Script>