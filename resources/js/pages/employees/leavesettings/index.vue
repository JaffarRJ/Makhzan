<template>
  <div class="leavesettings">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerleavesetting />
          
          <div class="row">
            <div class="col-md-12">
            
              <annualleavesetting />
              
              <sickleavesetting/>
              
              <hospitalleavesetting />
              
              <maternityleavesetting />
              
              <paternityleavesetting />
              
              <createleavesetting />
              
            </div>
          </div>
            
        </div>
        <!-- /Page Content -->
        
        <modalleavesetting />
        
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
    name: 'leavesettings'
  }
</Script>