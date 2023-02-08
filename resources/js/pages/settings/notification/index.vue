<template>
  <div class="notificationssettings">
    <div class="main-wrapper">
      <main-header></main-header>
      <settingsidebar></settingsidebar>
      <!-- Page Wrapper -->
            <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            
                            <headernotification />
                            
                            <div>
                            
                            <notificationcontent />

                            </div>  
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
    name: 'notificationssettings'
  }
</Script>