<template>
  <div class="index">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <pageheader />
        
        <widget />
          
        <chart />
          
        <employee />
          
        <statistics />
          
        <invoices />
          
        <clients />
        
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
    methods: {
    },
    name: 'index'
  }
</Script>