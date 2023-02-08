<template>
  <div class="inbox">
    <div class="main-wrapper">
      <componentheader></componentheader>
      <inboxsidebar></inboxsidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerinbox />
          
        <inboxcontent />
        
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
    name: 'inbox'
  }
</Script>