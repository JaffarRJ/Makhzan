<template>
  <div class="formhorizontal">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>

      <!-- Page Wrapper -->
      <div class="page-wrapper">
       <div class="content container-fluid">
        
       <headerhorizontal />
          
          <div class="row">
            <basicform />
            <addressform />
          </div>
          
          <horizontalcolumnform />
          
          <horizontalcolumnform1 />
        
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
    name: 'formhorizontal'
  }
</Script>