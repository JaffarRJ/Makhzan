<template>
  <div class="overtime">
    <div class="main-wrapper">
      <main-header></main-header>
       <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerovertime />
          
        <overtimewidget />
          
        <overtimecontent />
                
        </div>
        <!-- /Page Content -->
        
        <modalovertime />
        
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
    name: 'overtime'
  }
</Script>