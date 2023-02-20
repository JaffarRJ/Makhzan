<template>
  <div class="holidays">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">

      <!-- Page Content -->
      <div class="content container-fluid">

      <headeraccount />

      <accountcontent />

      </div>
      <!-- /Page Content -->

      <modalaccount />

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
    name: 'accounts'
  }
</Script>
