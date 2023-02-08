<template>
  <div class="toxboxsetting">
    <div class="main-wrapper">
      <main-header></main-header>
      <settingsidebar></settingsidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                        
                            <!-- Page Header -->
                            <div class="page-header">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h3 class="page-title">ToxBox Setting</h3>
                                    </div>
                                </div>
                            </div>
                            <!-- /Page Header -->
                            
                           <formtoxboxsetting />

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
    name: 'toxboxsetting'
  }
</Script>