<template>
  <div class="payrollitems">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerpayrollitem />
          
        <payrollitemtab />
          
        <payrollitemcontent />
          
        </div>
        <!-- /Page Content -->
        
        <modaladdpayrollitem />
        
        <modalovertimepayrollitem />
        
        <modaldeductionpayroll />
        
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
    name: 'payrollitems'
  }
</Script>