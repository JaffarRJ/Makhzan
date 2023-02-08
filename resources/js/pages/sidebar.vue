<template>
  <div>
      <!-- <sidebar> -->
        <div class="sidebar" id="sidebar"> 
        <div class="sidebar-inner" id="style-15">
         <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle"> 
         <div id="sidebar-menu" class="sidebar-menu">
          <ul>
              <li class="menu-title"> 
                <span>Main</span>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-dashboard"></i> <span> Dashboard</span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/index">Admin Dashboard</router-link></li>
                  <li><router-link to="/employee-dashboard">Employee Dashboard</router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-cube"></i> <span> Apps</span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/chat">Chat</router-link></li>
                  <li class="submenu">
                    <a href="javascript:void(0)"><span> Calls</span> <span class="menu-arrow"></span></a>
                    <ul style="display: none;">
                      <li><router-link to="/voice-call">Voice Call</router-link></li>
                      <li><router-link to="/video-call">Video Call</router-link></li>
                      <li><router-link to="/outgoing-call">Outgoing Call</router-link></li>
                      <li><router-link to="/incoming-call">Incoming Call</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/events">Calendar</router-link></li>
                  <li><router-link to="/contacts">Contacts</router-link></li>
                  <li><router-link to="/inbox">Email</router-link></li>
                  <li><router-link to="/file-manager">File Manager</router-link></li>
                </ul>
              </li>
              <li class="menu-title"> 
                <span>Employees</span>
              </li>
              <li class="submenu">
              <a href="javascript:void(0)" v-bind:class="{'active': currentPath == 'employees-list' || currentPath == 'shift-list'}" class="noti-dot"><i class="la la-user"></i> <span> Employees</span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link v-bind:class="{'active': currentPath == 'employees-list'}" to="/employees">All Employees</router-link></li>
                  <li><router-link to="/holidays">Holidays</router-link></li>
                  <li><router-link to="/leaves">Leaves (Admin) <span class="badge rounded-pill bg-primary float-end">1</span></router-link></li>
                  <li><router-link to="/leaves-employee">Leaves (Employee)</router-link></li>
                  <li><router-link to="/leave-settings">Leave Settings</router-link></li>
                  <li><router-link to="/attendance">Attendance (Admin)</router-link></li>
                  <li><router-link to="/attendance-employee">Attendance (Employee)</router-link></li>
                  <li><router-link to="/departments">Departments</router-link></li>
                  <li><router-link to="/designations">Designations</router-link></li>
                  <li><router-link to="/timesheet">Timesheet</router-link></li>
                  <li><router-link v-bind:class="{'active': currentPath == 'shift-list'}" to="/shift-scheduling">Shift & Schedule</router-link></li>
                  <li><router-link to="/overtime">Overtime</router-link></li>
                </ul>
              </li>
              <li> 
                <router-link to="/clients" v-bind:class="{'active': currentPath == 'clients-list'}"><i class="la la-users"></i> <span>Clients</span></router-link>
              </li>
              <li class="submenu">
                <a v-bind:class="{'active': currentPath == 'project-list' || currentPath == 'project-view'}" href="javascript:void(0)"><i class="la la-rocket"></i> <span> Projects</span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link v-bind:class="{'active': currentPath == 'project-list'  || currentPath == 'project-view'}" to="/projects">Projects</router-link></li>
                  <li><router-link to="/tasks">Tasks</router-link></li>
                  <li><router-link to="/task-board">Task Board</router-link></li>
                </ul>
              </li>
              <li> 
                <router-link to="/leads"><i class="la la-user-secret"></i> <span>Leads</span></router-link>
              </li>
              <li v-bind:class="{'active': currentPath == 'ticket-view'}"> 
                <router-link v-bind:class="{'active': currentPath == 'ticket-view'}" to="/tickets"><i class="la la-ticket"></i> <span>Tickets</span></router-link>
              </li>
              <li class="menu-title"> 
                <span>HR</span>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)" v-bind:class="{'active': currentPath == 'create-estimate'   || currentPath == 'estimate-view' || currentPath == 'edit-invoice' || currentPath == 'create-invoice'  || currentPath == 'edit-stimate'   || currentPath == 'invoice-view'}"><i class="la la-files-o"></i> <span> Sales </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link v-bind:class="{'active': currentPath == 'create-estimate' || currentPath == 'edit-estimate'  || currentPath == 'estimate-view'}" to="/estimates">Estimates</router-link></li>
                  <li><router-link v-bind:class="{'active': currentPath == 'create-invoice' || currentPath == 'edit-invoice'   || currentPath == 'invoice-view'}" to="/invoices">Invoices</router-link></li>
                  <li><router-link to="/payments">Payments</router-link></li>
                  <li><router-link to="/expenses">Expenses</router-link></li>
                  <li><router-link to="/provident-fund">Provident Fund</router-link></li>
                  <li><router-link to="/taxes">Taxes</router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)" v-bind:class="{'active': currentPath == 'sub-category'}"><i class="la la-files-o"></i> <span> Accounting </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link v-bind:class="{'active': currentPath == 'sub-category'}" to="/categories">Categories</router-link></li>
                  <li><router-link to="/budgets">Budgets</router-link></li>
                  <li><router-link to="/budget-expenses">Budget Expenses</router-link></li>
                  <li><router-link to="/budget-revenues">Budget Revenues</router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-money"></i> <span> Payroll </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/salary"> Employee Salary </router-link></li>
                  <li><router-link to="/salary-view"> Payslip </router-link></li>
                  <li><router-link to="/payroll-items"> Payroll Items </router-link></li>
                </ul>
              </li>
              <li> 
                <router-link to="/policies"><i class="la la-file-pdf-o"></i> <span>Policies</span></router-link>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-pie-chart"></i> <span> Reports </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/expense-reports"> Expense Report </router-link></li>
                  <li><router-link to="/invoice-reports"> Invoice Report </router-link></li>
                  <li><router-link to="/payments-reports"> Payments Report </router-link></li>
                  <li><router-link to="/project-reports"> Project Report </router-link></li>
                  <li><router-link to="/task-reports"> Task Report </router-link></li>
                  <li><router-link to="/user-reports"> User Report </router-link></li>
                  <li><router-link to="/employee-reports"> Employee Report </router-link></li>
                  <li><router-link to="/payslip-reports"> Payslip Report </router-link></li>
                  <li><router-link to="/attendance-reports"> Attendance Report </router-link></li>
                  <li><router-link to="/leave-reports"> Leave Report </router-link></li>
                  <li><router-link to="/daily-reports"> Daily Report </router-link></li>
                </ul>
              </li>
              <li class="menu-title"> 
                <span>Performance</span>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-graduation-cap"></i> <span> Performance </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/performance-indicator"> Performance Indicator </router-link></li>
                  <li><router-link to="/performance"> Performance Review </router-link></li>
                  <li><router-link to="/performance-appraisal"> Performance Appraisal </router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-crosshairs"></i> <span> Goals </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/goal-tracking"> Goal List </router-link></li>
                  <li><router-link to="/goal-type"> Goal Type </router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-edit"></i> <span> Training </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/training"> Training List </router-link></li>
                  <li><router-link to="/trainers"> Trainers</router-link></li>
                  <li><router-link to="/training-type"> Training Type </router-link></li>
                </ul>
              </li>
              <li><router-link to="/promotion"><i class="la la-bullhorn"></i> <span>Promotion</span></router-link></li>
              <li><router-link to="/resignation"><i class="la la-external-link-square"></i> <span>Resignation</span></router-link></li>
              <li><router-link to="/termination"><i class="la la-times-circle"></i> <span>Termination</span></router-link></li>
              <li class="menu-title"> 
                <span>Administration</span>
              </li>
              <li> 
                <router-link to="/assets"><i class="la la-object-ungroup"></i> <span>Assets</span></router-link>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)" v-bind:class="{'active': currentPath == 'applied-jobs'   || currentPath == 'job-aptitude'   || currentPath == 'archived-jobs'   || currentPath == 'interviewing'  || currentPath == 'offered-jobs'  || currentPath == 'questions'   || currentPath == 'saved-jobs'   || currentPath == 'user-all-jobs'   || currentPath == 'visited-jobs'}"><i class="la la-briefcase"></i> <span> Jobs </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link v-bind:class="{'active': currentPath == 'applied-jobs'   || currentPath == 'job-aptitude' || currentPath == 'archived-jobs'   || currentPath == 'interviewing'  || currentPath == 'questions'  || currentPath == 'offered-jobs'   || currentPath == 'saved-jobs'  || currentPath == 'user-all-jobs'    || currentPath == 'visited-jobs'}" to="/user-dashboard"> User Dasboard </router-link></li>
                  <li><router-link to="/jobs-dashboard"> Jobs Dasboard </router-link></li>
                  <li><router-link to="/jobs"> Manage Jobs </router-link></li>
                  <li><router-link to="/manage-resumes"> Manage Resumes </router-link></li>
                  <li><router-link to="/shortlist-candidates"> Shortlist Candidates </router-link></li>
                  <li><router-link to="/interview-questions"> Interview Questions </router-link></li>
                  <li><router-link to="/offer_approvals"> Offer Approvals </router-link></li>
                  <li><router-link to="/experiance-level"> Experience Level </router-link></li>
                  <li><router-link to="/candidates"> Candidates List </router-link></li>
                  <li><router-link to="/schedule-timing"> Schedule timing </router-link></li>
                  <li><router-link to="/apptitude-result"> Aptitude Results </router-link></li>
                </ul>
              </li>
              <li> 
                <router-link v-bind:class="{'active': currentPath == 'knowledgebase-view'}" to="/knowledgebase"><i class="la la-question"></i> <span>Knowledgebase</span></router-link>
              </li>
              <li> 
                <router-link to="/activities"><i class="la la-bell"></i> <span>Activities</span></router-link>
              </li>
              <li> 
                <router-link to="/users"><i class="la la-user-plus"></i> <span>Users</span></router-link>
              </li>
              <li> 
                <router-link to="/settings"><i class="la la-cog"></i> <span>Settings</span></router-link>
              </li>
              <li class="menu-title"> 
                <span>Pages</span>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-user"></i> <span> Profile </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/profile"> Employee Profile </router-link></li>
                  <li><router-link to="/client-profile"> Client Profile </router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-key"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/"> Login </router-link></li>
                  <li><router-link to="/register"> Register </router-link></li>
                  <li><router-link to="/forgot-password"> Forgot Password </router-link></li>
                  <li><router-link to="/otp"> OTP </router-link></li>
                  <li><router-link to="/lock-screen"> Lock Screen </router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-exclamation-triangle"></i> <span> Error Pages </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/error-404">404 Error </router-link></li>
                  <li><router-link to="/error-500">500 Error </router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-hand-o-up"></i> <span> Subscriptions </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/subscriptions"> Subscriptions (Admin) </router-link></li>
                  <li><router-link to="/subscriptions-company"> Subscriptions (Company) </router-link></li>
                  <li><router-link to="/subscribed-companies"> Subscribed Companies</router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-columns"></i> <span> Pages </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/search"> Search </router-link></li>
                  <li><router-link to="/faq"> FAQ </router-link></li>
                  <li><router-link to="/terms"> Terms </router-link></li>
                  <li><router-link to="/privacy-policy"> Privacy Policy </router-link></li>
                  <li><router-link to="/blank-page"> Blank Page </router-link></li>
                </ul>
              </li>
              <li class="menu-title"> 
                <span>UI Interface</span>
              </li>
              <li> 
                <router-link to="/components"><i class="la la-puzzle-piece"></i> <span>Components</span></router-link>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-object-group"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/form-basic-inputs">Basic Inputs </router-link></li>
                  <li><router-link to="/form-input-groups">Input Groups </router-link></li>
                  <li><router-link to="/form-horizontal">Horizontal Form </router-link></li>
                  <li><router-link to="/form-vertical"> Vertical Form </router-link></li>
                  <li><router-link to="/form-mask"> Form Mask </router-link></li>
                  <li><router-link to="/form-validation"> Form Validation </router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0)"><i class="la la-table"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><router-link to="/tables-basic">Basic Tables </router-link></li>
                  <li><router-link to="/data-tables">Data Table </router-link></li>
                </ul>
              </li>
              <li class="menu-title"> 
                <span>Extras</span>
              </li>
              <li> 
                <a href="javascript:void(0)"><i class="la la-file-text"></i> <span>Documentation</span></a>
              </li>
              <li> 
                <a href="javascript:void(0);"><i class="la la-info"></i> <span>Change Log</span> <span class="badge badge-primary ms-auto">v3.4</span></a>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);"><i class="la la-share-alt"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li class="submenu">
                    <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
                    <ul style="display: none;">
                      <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                      <li class="submenu">
                        <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                        <ul style="display: none;">
                          <li><a href="javascript:void(0);">Level 3</a></li>
                          <li><a href="javascript:void(0);">Level 3</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);"> <span>Level 1</span></a>
                  </li>
                </ul>
              </li>
            </ul>
  </div>
  </perfect-scrollbar>
        </div>
    </div>
      <!-- </sidebar> -->
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
            return this.$route.name;
        }
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
