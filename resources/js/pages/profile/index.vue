<template>

  <div class="profile">

    <div class="main-wrapper">

      <main-header></main-header>

      <sidebar></sidebar>

       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerprofile />

        <profilecardfirst />
          
        <profilecardsecond />
          
        <profilecontent />

        </div>
        <!-- /Page Content -->
        
        <modalprofile />
        
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
    name: 'profile'
  }
</Script>