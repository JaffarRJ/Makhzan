<template>
  <div class="leavetype">
    <div class="main-wrapper">
      <main-header></main-header>
      <settingsidebar></settingsidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid">
                
                    <headerleavetype />
                    
                    <leavetypecontent />

                </div>
                <!-- /Page Content -->
                
                <modalleavetype />
                
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
    name: 'leavetype'
  }
</Script>