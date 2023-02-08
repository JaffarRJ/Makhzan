<template>
  <div class="holidays">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
      <!-- Page Content -->
      <div class="content container-fluid">
        
      <headerholidays />
      
      <holidaycontent />    
      
      </div>
      <!-- /Page Content -->
        
      <modalholiday />
        
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
    name: 'holidays'
  }
</Script>