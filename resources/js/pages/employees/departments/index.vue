<template>
  <div class="departments">
    <div class="main-wrapper">
      <main-header></main-header>
       <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <departmentheader />
          
          <div class="row">
            <div class="col-md-12">
              <div>
                <departmenttable />
              </div>
            </div>
          </div>
                </div>
        <!-- /Page Content -->
        
          <departmentmodal />
        
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
    name: 'departments'
  }
</Script>