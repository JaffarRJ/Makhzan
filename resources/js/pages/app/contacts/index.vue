<template>
  <div class="contacts">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper" style="min-height: 755px;">
      
        <!-- Contact Main Row -->
        <div class="chat-main-row">
        
          <!-- Contact Wrapper -->
          <div class="chat-main-wrapper">
            <div class="col-lg-12 message-view">
              <div class="chat-window">
                <contactheader />
                <div class="chat-contents">
                  <div class="chat-content-wrap">
                    <div class="chat-wrap-inner">
                      <div class="contact-box">
                      <div class="row">
                        <contactsidebar />
                        <contactcontent />
                        <div class="contact-alphapets">
                          <div class="alphapets-inner">
                            <a href="javascript:void(0)">A</a>
                            <a href="javascript:void(0)">B</a>
                            <a href="javascript:void(0)">C</a>
                            <a href="javascript:void(0)">D</a>
                            <a href="javascript:void(0)">E</a>
                            <a href="javascript:void(0)">F</a>
                            <a href="javascript:void(0)">G</a>
                            <a href="javascript:void(0)">H</a>
                            <a href="javascript:void(0)">I</a>
                            <a href="javascript:void(0)">J</a>
                            <a href="javascript:void(0)">K</a>
                            <a href="javascript:void(0)">L</a>
                            <a href="javascript:void(0)">M</a>
                            <a href="javascript:void(0)">N</a>
                            <a href="javascript:void(0)">O</a>
                            <a href="javascript:void(0)">P</a>
                            <a href="javascript:void(0)">Q</a>
                            <a href="javascript:void(0)">R</a>
                            <a href="javascript:void(0)">S</a>
                            <a href="javascript:void(0)">T</a>
                            <a href="javascript:void(0)">U</a>
                            <a href="javascript:void(0)">V</a>
                            <a href="javascript:void(0)">W</a>
                            <a href="javascript:void(0)">X</a>
                            <a href="javascript:void(0)">Y</a>
                            <a href="javascript:void(0)">Z</a>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Contact Wrapper -->
          
        </div>
        <!-- /Contact Main Row -->
        
        <contactmodal />
        
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
    name: 'contacts'
  }
</Script>