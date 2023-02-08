<template>

  <div class="performancesetting">

    <div class="main-wrapper">

      <main-header></main-header>

      <settingsidebar></settingsidebar>

      <!-- Page Wrapper -->

      <div class="page-wrapper">

      <div class="content container-fluid">

      <headerperformancesetting />

      <div class="row">

      <div class="col-md-12">

      <div class="card-box">

      <p><b>Click the tabs below for more information on each Performance Management module. Only one Performance module can be activated at a time.</b></p>

      <tabperformancesetting />

      <div class="tab-content">

      <okrperformancesetting />

      <competencyperformancesetting />

      <performancesettinggoal />

      </div>

      </div>

      </div>

      </div>

      </div>

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
    name: 'performancesetting'
  }
</Script>