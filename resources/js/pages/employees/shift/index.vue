<template>
  <div class="shiftlist">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 class="page-title">Shift List</h3>
                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">Employees</a></li>
                  <li class="breadcrumb-item active">Shift List</li>
                </ul>
                            </div>
                           
            </div>
          </div>
          <!-- /Page Header -->
          
          <shifttable />

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
    name: 'shiftlist'
  }
</Script>