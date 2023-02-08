<template>
  <div class="interviewquestions">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerinterviewquestions />
          
        <interviewquestioncontent />

        </div>
        <!-- /Page Content -->
        
        <modalinterviewquestions />
        
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
    name: 'interviewquestions'
  }
</Script>