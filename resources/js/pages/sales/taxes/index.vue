<template>
  <div class="taxes">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Taxes</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Taxes</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_tax"><i class="fa fa-plus"></i> Add Tax</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <taxtable />

        </div>
        <!-- /Page Content -->
        
        <taxmodal />
        
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
    name: 'taxes'
  }
</Script>