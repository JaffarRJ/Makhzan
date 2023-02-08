<template>
  <div class="chat">
    <div class="main-wrapper">
       <main-header></main-header>
      <callsidebar></callsidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper" style="min-height: 750px;">
      
        <!-- Chat Main Row -->
        <div class="chat-main-row">
        
          <!-- Chat Main Wrapper -->
          <div class="chat-main-wrapper">
          
          <chatmiddle />
            
          <chatend />
            
          </div>
          
        </div>
        
        <chatmodal />
        
            </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
     data() {
    return {
      
    }
  },
    mounted() {

    },
    name: 'chat'
  }
</Script>