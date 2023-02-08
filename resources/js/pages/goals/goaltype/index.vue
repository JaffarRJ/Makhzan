<template>
  <div class="goaltype">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headergoaltype />
          
        <goaltypecontent />

        </div>
        <!-- /Page Content -->

        <modalgoaltype />
      
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
    name: 'goaltype'
  }
</Script>