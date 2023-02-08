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
                        <li class="menu-title">Projects <a href="javascript:void(0)" data-toggle="modal" data-target="#create_project"><i class="fa fa-plus"></i></a></li>
                        <li> 
                            <router-link to="/#">Project Management</router-link>
                        </li>
                        <li class="tasks"> 
                            <router-link to="/tasks">Hospital Administration</router-link>
                        </li>
                        <li> 
                            <router-link to="/#">Video Calling App</router-link>
                        </li>
                        <li>
                            <router-link to="/#">Office Management</router-link> 
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