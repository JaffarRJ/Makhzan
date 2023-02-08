<template>
  <div class="datatables">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
       <div class="content container-fluid">

          <datatableheader />
          
          <div class="row">
            <div class="col-sm-12">
              <div class="card mb-0">
                <div class="card-header">
                  <h4 class="card-title mb-0">Default Datatable</h4>
                  <p class="card-text">
                    This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
                  </p>
                </div>
                <div class="card-body">
                <table-content />
                </div>
              </div>
            </div>
          </div>
        
        </div>      
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
    name: 'datatables'
  }
</Script>