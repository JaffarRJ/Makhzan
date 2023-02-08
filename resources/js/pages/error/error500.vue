<template>
  <div class="error500 error-page" style="height: 100vh;">
    <!-- Main Wrapper -->
        <div class="main-wrapper">
      
      <div class="error-box">
        <h1>500</h1>
        <h3><i class="fa fa-warning"></i> Oops! Something went wrong</h3>
        <p>The page you requested was not found.</p>
        <router-link to="/index" class="btn btn-custom">Back to Home</router-link>
      </div>
    
        </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
    },
    name: 'error500'
  }
</Script>