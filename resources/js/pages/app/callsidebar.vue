<template>
    <div>
         <!-- Sidebar -->
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner">
        <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle"> 
            <div class="sidebar-menu">
                <ul>
                    <li> 
                        <router-link to="/index"><i class="la la-home"></i> <span>Back to Home</span></router-link>
                    </li>
                    <li class="menu-title"><span>Chat Groups</span> <a href="javascript:void(0)" data-toggle="modal" data-target="#add_group"><i class="fa fa-plus"></i></a></li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/user.jpg">
                            </span> 
                            <span class="chat-user">#General</span>
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/user.jpg">
                            </span> 
                            <span class="chat-user">#Video Responsive Survey</span>
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/user.jpg">
                            </span> 
                            <span class="chat-user">#500rs</span>
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/user.jpg">
                            </span> 
                            <span class="chat-user">#warehouse</span>
                        </router-link>
                    </li>
                    <li class="menu-title">Direct Chats <a href="javascript:void(0)" data-toggle="modal" data-target="#add_chat_user"><i class="fa fa-plus"></i></a></li>
                    <li>
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/profiles/avatar-02.jpg"><span class="status online"></span>
                            </span> 
                            <span class="chat-user">John Doe</span> <span class="badge badge-pill bg-danger">1</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/profiles/avatar-09.jpg"><span class="status offline"></span>
                            </span> 
                            <span class="chat-user">Richard Miles</span> <span class="badge badge-pill bg-danger">7</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/profiles/avatar-10.jpg"><span class="status away"></span>
                            </span> 
                            <span class="chat-user">John Smith</span>
                        </router-link>
                    </li>
                    <li class="active">
                        <router-link to="/chat">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../../assets/img/profiles/avatar-05.jpg"><span class="status online"></span>
                            </span> 
                            <span class="chat-user">Mike Litorus</span> <span class="badge badge-pill bg-danger">2</span>
                        </router-link>
                    </li>
                </ul>
            </div>
         </perfect-scrollbar>
        </div>
    </div>
    <!-- /Sidebar -->
    </div>
</template>
<script>  
 import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    export default {
     components: {
    PerfectScrollbar ,
    },
      computed: {
        currentPath() {
          return this.$route.path;
        },
      },
        data() {
       return {
                settings: {
                    suppressScrollX: true,
                },
                activeClass: 'active',
            };
              //  isactive : true
    },
     methods: {
    scrollHanle(evt) {
      
    }
  },
          }
         
          </script>
           <style> 
 .scroll-area {
            position: relative;
            margin: auto;
            height: calc(100vh - 60px);
            background-color: transparent !important;
        }
            </style> 