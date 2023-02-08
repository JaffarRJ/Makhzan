<template>
  <div class="filemanager">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
          <div class="row">
            <div class="col-sm-12">
              <div class="file-wrap">
                <filemanagersidebar />
                <filemanagercontent />
              </div>
            </div>
          </div>
          
                </div>
        <!-- /Page Content -->
        
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
    name: 'filemanager'
  }
</Script>