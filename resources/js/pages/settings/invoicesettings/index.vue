<template>
  <div class="invoicesettings">
    <div class="main-wrapper">
      <main-header></main-header>
      <settingsidebar></settingsidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                        
                           <headerinvoicesettings />
                            
                           <forminvoicesettings />

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
    name: 'invoicesettings'
  }
</Script>