<template>
  <div class="expenses">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <expenseheader />
          
        <expensefilter />
          
        <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <expensetable />
              </div>
            </div>
        </div>
        </div>
        <!-- /Page Content -->
        
        <expensemodal />
        
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
    name: 'expenses'
  }
</Script>