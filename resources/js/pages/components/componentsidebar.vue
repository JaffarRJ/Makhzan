<template>
    <div>
        <!-- Sidebar -->
        <div class="sidebar stickyside" id="sidebar">
            <div class="sidebar-inner">
            <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle"> 
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title"> 
                            Components
                        </li>
                        <li> 
                            <a href="#comp_alerts" class="active">Alerts</a>
                        </li>
                        <li> 
                            <a href="#comp_breadcrumbs">Breadcrumbs</a>
                        </li>
                        <li> 
                            <a href="#comp_buttons">Buttons</a>
                        </li>
                        <li> 
                            <a href="#comp_cards">Cards</a>
                        </li>
                        <li> 
                            <a href="#comp_dropdowns">Dropdowns</a>
                        </li>
                        <li> 
                            <a href="#comp_pagination">Pagination</a>
                        </li>
                        <li> 
                            <a href="#comp_progress">Progress</a>
                        </li>
                        <li> 
                            <a href="#comp_tabs">Tabs</a>
                        </li>
                        <li> 
                            <a href="#comp_typography">Typography</a>
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