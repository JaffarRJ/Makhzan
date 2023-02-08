<template>
    <div>
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
           <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle"> 
                <div class="sidebar-menu">
                    <ul>
                        <li class="index"> 
                          <router-link to="/index"><i class="la la-home"></i> <span>Back to Home</span></router-link>
                        </li>
                        <li class="menu-title">Settings</li>
                        <li class="settings" :class="{'active': currentpage === 'settings'}"> 
                          <router-link to="/settings"><i class="la la-building"></i> <span>Company Settings</span></router-link>
                        </li>
                        <li class="localization" :class="{'active': currentpage === 'localization'}"> 
                          <router-link to="/localization"><i class="la la-clock-o"></i> <span>Localization</span></router-link>
                        </li>
                        <li class="themesettings" :class="{'active': currentpage === 'theme-settings'}"> 
                          <router-link to="/theme-settings"><i class="la la-photo"></i><span>Theme Settings</span></router-link>
                        </li>
                        <li class="rolespermissions" :class="{'active': currentpage === 'roles-permissions'}"> 
                          <router-link to="/roles-permissions"><i class="la la-key"></i> <span>Roles & Permissions</span></router-link>
                        </li>
                        <li class="emailsettings" :class="{'active': currentpage === 'email-settings'}"> 
                          <router-link to="/email-settings"><i class="la la-at"></i> <span>Email Settings</span></router-link>
                        </li>
                        <li class="invoicesettings" :class="{'active': currentpage === 'invoice-settings'}"> 
                          <router-link to="/invoice-settings"><i class="la la-pencil-square"></i> <span>Invoice Settings</span></router-link>
                        </li>
                        <li class="performancesettings" :class="{'active': currentpage === 'performance-setting'}"> 
                          <router-link to="/performance-setting"><i class="la la-chart-bar"></i> <span>Performance Settings</span></router-link>
                        </li>
                        <li class="approvalsettings" :class="{'active': currentpage === 'approval-setting'}"> 
                          <router-link to="/approval-setting"><i class="la la-thumbs-up"></i> <span>Approval Settings</span></router-link>
                        </li>
                        <li class="salarysettings" :class="{'active': currentpage === 'salary-settings'}"> 
                          <router-link to="/salary-settings"><i class="la la-money"></i><span>Salary Settings</span></router-link>
                        </li>
                        <li class="notificationssettings" :class="{'active': currentpage === 'notifications-settings'}"> 
                          <router-link to="/notifications-settings"><i class="la la-globe"></i> <span>Notifications</span></router-link>
                        </li>
                        <li class="change-password" :class="{'active': currentpage === 'change-password'}"> 
                          <router-link to="/change-password"><i class="la la-lock"></i> <span>Change Password</span></router-link>
                        </li>
                        <li class="leavetype" :class="{'active': currentpage === 'leave-type'}"> 
                          <router-link to="/leave-type"><i class="la la-cogs"></i> <span>Leave Type</span></router-link>
                        </li>
                        <li class="leavetype" :class="{'active': currentpage === 'toxbox-setting'}"> 
                          <router-link to="/toxbox-setting"><i class="la la-comment"></i> <span>ToxBox Settings</span></router-link>
                        </li>
                         <li class="leavetype" :class="{'active': currentpage === 'cron-setting'}"> 
                          <router-link to="/cron-setting"><i class="la la-rocket"></i> <span>Cron Settings</span></router-link>
                        </li>
                    </ul>
                </div>
           </perfect-scrollbar> 
        </div>
        <!-- Sidebar -->
    </div>
</template>
<script>  
import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
  export default {
    components: {
    PerfectScrollbar ,
    },
     mounted() {
      $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

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
           .sidebar-menu li a.active {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
}
  </style> 
  