<template>
  <div class="holidays">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">

      <!-- Page Content -->
      <div class="content container-fluid">

      <headerparty />

      <partycontent />

      </div>
      <!-- /Page Content -->

      <modalparty />

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
    name: 'parties'
  }
</Script>
