<template>
  <div class="manageresumes">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
         <headerresume />
          
         <resumecontent />
                
        </div>
        <!-- /Page Content -->
        
        
        <modalresume />
        
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
    name: 'manageresumes'
  }
</Script>