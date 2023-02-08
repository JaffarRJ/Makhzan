<template>
  <div class="createinvoice">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <createinvoiceheader />
          
          <div class="row">
            <div class="col-sm-12">
              <form>
              
              <createinvoicefilter />
              <createinvoicetable />  
                
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn m-r-10">Save & Send</button>
                  <button class="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
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
    name: 'createinvoice'
  }
</Script>