<template>
  <div class="clientprofile">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <clientprofileheader />
         
        <clientheadercontent /> 
          
        <clientprofiletab />
 
        <clientprofiletabcontent />
        
        </div>
        <!-- /Page Content -->
        </div>
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
    name: 'clientprofile'
  }
</Script>