<template>
  <div class="jobs">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headermainjob />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <mainjobcontent />
              </div>
            </div>
          </div>
                </div>
        <!-- /Page Content -->
        
        <modalmainjob />
        
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
    name: 'jobs'
  }
</Script>