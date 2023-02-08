<template>
  <div class="leavereports">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerleavereport />
          
        <leavereportfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <leavereportcontent />
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
    name: 'leavereports'
  }
</Script>