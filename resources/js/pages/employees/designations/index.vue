<template>
  <div class="designations">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
          <designationheader />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <designationtable />
              </div>
            </div>
          </div>
         </div>
        <!-- /Page Content -->

        <designationmodal />
      
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
    name: 'designations'
  }
</Script>