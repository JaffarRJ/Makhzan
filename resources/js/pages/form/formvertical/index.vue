<template>
  <div class="formvertical">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <div class="content container-fluid">

        <headerformvertical />

        <basicverticalform />
          
        <basicaddressform />
          
        <basictwocolumnform />
          
        </div>
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
    name: 'formvertical'
  }
</Script>