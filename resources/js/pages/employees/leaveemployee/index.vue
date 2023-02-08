<template>
  <div class="leavesemployee">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerleaveemployee />
          
        <widgetleaveemployee />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <contentleaveemployee />
              </div>
            </div>
          </div>
                </div>
        <!-- /Page Content -->
        
        <modalleaveemployee />
        
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
    name: 'leavesemployee'
  }
</Script>