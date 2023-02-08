<template>
  <div class="offerapprovals">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
          <headerofferapprove />
          
          <offerapprovecontent />

        </div>
        <!-- /Page Content -->
        
        
        <modalofferapprove />
        
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
    name: 'offerapprovals'
  }
</Script>