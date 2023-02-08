<template>
  <div class="forminputgroups">
    <div class="main-wrapper">
     <main-header></main-header>
     <sidebar></sidebar>
     <!-- Page Wrapper -->
     <div class="page-wrapper">
     <div class="content container-fluid">
          
     <headerinputgroups />
          
          <div class="row">
            <div class="col-lg-12">
              <basicexample />
              <sizing />
              <checkbox />
              <multipleaddons />
            </div>
          </div>
        
        </div>      
      </div>
      <!-- /Main Wrapper -->
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
    name: 'forminputgroups'
  }
</Script>