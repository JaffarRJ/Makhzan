<template>
  <div class="estimates">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <mainestimateheader />
          
        <mainestimatefilter />
          
        <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <mainestimatecontent />
              </div>
            </div>
          </div>
        </div>
        <!-- /Page Content -->
        
        <mainestimatemodal />
      
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
    name: 'estimates'
  }
</Script>