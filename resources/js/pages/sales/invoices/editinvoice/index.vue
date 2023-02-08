<template>
  <div class="editinvoice">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <editinvoiceheader />
          
          <div class="row">
            <div class="col-md-12">
              <form>
                <editinvoicefilter />
                <editinvoicetable />
                <div class="submit-section">
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
    name: 'editinvoice'
  }
</Script>