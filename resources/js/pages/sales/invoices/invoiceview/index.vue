<template>
  <div class="invoiceview">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
        <!-- Page Wrapper -->
        <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerinvoiceview />
          
        <invoiceviewcontent />
                
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
    name: 'invoiceview'
  }
</Script>