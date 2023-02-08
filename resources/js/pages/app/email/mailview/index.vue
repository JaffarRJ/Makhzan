<template>
  <div class="mailview">
    <div class="main-wrapper">
      <main-header></main-header>
      <mailviewsidebar></mailviewsidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper"> 
        <!-- Page Content -->
        <div class="content container-fluid">
        
          <headermailview />
      
          <mailviewcontent />
                
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
    name: 'mailview'
  }
</Script>