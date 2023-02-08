<template>
  <div class="employeeslist">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
         <employeeheader />
          
         <employeefilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <employeelistcontent />
              </div>
            </div>
          </div>
                </div>
        <!-- /Page Content -->
        
        <employeemodal />
        
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
    name: 'employeeslist'
  }
</Script>