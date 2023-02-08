<template>
  <div class="approvalsetting">
    <div class="main-wrapper">
       <main-header></main-header>
      <settingsidebar></settingsidebar>
       <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                           
                           <approvalheader />

                            <approvaltabs />


                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <homeapproval />
                                </div>
                                <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <profileapproval />
                                </div>
                                <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                                <messageapproval />
                                </div>
                                <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <settingapproval />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    name: 'approvalsetting'
  }
</Script>