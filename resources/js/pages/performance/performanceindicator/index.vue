<template>
  <div class="performanceindicator">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <performanceindicatorheader />
          
        <performanceindicatortable />
                
        </div>
        <!-- /Page Content -->

        <modalperformanceindicator />
      
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
    name: 'performanceindicator'
  }
</Script>