import {createRouter, createWebHistory} from 'vue-router';

/********dashboard routes******/
import main from '../pages/dashboard/admin/main'
import employee from '../pages/dashboard/employee'

/********activities route******/
import activities from '../pages/activities'

/********policies route******/
import policies from '../pages/policies'

/********knowledgebase route******/
import knowledgebase from '../pages/knowledgebase'
import view from '../pages/knowledgebase'

/********jobs component route******/
import appliedjobs from '../pages/jobs/appliedjobs'
import aptituteresult from '../pages/jobs/aptituteresult'
import archivedjobs from '../pages/jobs/archivedjobs'
import candidatelist from '../pages/jobs/candidatelist'
import experiancelevel from '../pages/jobs/experiancelevel'
import interviewing from '../pages/jobs/interviewing'
import interviewquestions from '../pages/jobs/interviewquestions'
import headerjobapplicants from '../pages/jobs/jobapplicants/headerjobapplicants'
import jobapplicantscontent from '../pages/jobs/jobapplicants/jobapplicantscontent'
import jobaptitute from '../pages/jobs/jobaptitute'
import jobdetails from '../pages/jobs/jobdetails'
import joblist from '../pages/jobs/joblist'
import mainjobs from '../pages/jobs/mainjobs'
import jobsdashboard from '../pages/jobs/jobsdashboard'
import jobview from '../pages/jobs/jobview'
import manageresume from '../pages/jobs/manageresume'
import offerapprove from '../pages/jobs/offerapprove'
import offeredjob from '../pages/jobs/offeredjob'
import visitedjob from '../pages/jobs/visitedjobs'
import userdashboard from '../pages/jobs/userdashboard'
import useralljobs from '../pages/jobs/useralljobs'
import shortlistcandidate from '../pages/jobs/shortlistcandidate'
import question from '../pages/jobs/question'
import savedjob from '../pages/jobs/savedjob'
import scheduletiming from '../pages/jobs/scheduletiming'

/********settings component route******/
import approvalsetting from '../pages/settings/approvalsetting'
import changepassword from '../pages/settings/changepassword'
import cronsetting from '../pages/settings/cronsetting'
import emailsettings from '../pages/settings/emailsettings'
import invoicesettings from '../pages/settings/invoicesettings'
import leavetype from '../pages/settings/leavetype'
import localization from '../pages/settings/localization'
import notification from '../pages/settings/notification'
import performancesetting from '../pages/settings/performancesetting'
import toxboxsetting from '../pages/settings/toxboxsetting'
import themesetting from '../pages/settings/themesetting'
import rolepermission from '../pages/settings/rolepermission'
import salarysetting from '../pages/settings/salarysetting'
import mainsetting from '../pages/settings/mainsetting'

/********assets component route******/
import assets from '../pages/assets'

/********leads component route******/
import leads from '../pages/leads'

/********Application component route******/
import lockscreen from '../pages/application/lockscreen'
import login from '../pages/application/login'
import register from '../pages/application/register'
import otp from '../pages/application/otp'

/********employee component route******/
import attendance from '../pages/employees/attendance'
import attendanceemployee from '../pages/employees/attendanceemployee'
import departments from '../pages/employees/departments'
import designations from '../pages/employees/designations'
import mainemployee from '../pages/employees/mainemployee'
import employeeslistindex from '../pages/employees/mainemployee/employeeslistindex'
import holidays from '../pages/employees/holidays'
import leave from '../pages/employees/leave'
import leaveemployee from '../pages/employees/leaveemployee'
import leavesettings from '../pages/employees/leavesettings'
import overtime from '../pages/employees/overtime'
import timesheet from '../pages/employees/timesheet'
import shift from '../pages/employees/shift'
import scheduling from '../pages/employees/scheduling'

/********report component route******/
import attendancereport from '../pages/reports/attendancereport'
import dailyreports from '../pages/reports/dailyreports'
import employeereports from '../pages/reports/employeereports'
import expensereports from '../pages/reports/expensereports'
import invoicereport from '../pages/reports/invoicereport'
import leavereport from '../pages/reports/leavereport'
import paymentreport from '../pages/reports/paymentreport'
import payslipreport from '../pages/reports/payslipreport'
import projectreport from '../pages/reports/projectreport'
import userreports from '../pages/reports/userreport'
import taskreport from '../pages/reports/taskreport'


/********account component route******/
import blankpage from '../pages/account/blankpage'

/********accounting component route******/
import budgetexpenses from '../pages/accounting/budgetexpenses'
import budgetrevenues from '../pages/accounting/budgetrevenues'
import budgets from '../pages/accounting/budgets'
import categories from '../pages/accounting/categories'
import subcategory from '../pages/accounting/subcategory'

/********app component route******/
import chat from '../pages/app/chat'
import events from '../pages/app/events'
import inbox from '../pages/app/inbox'
import compose from '../pages/app/email/compose'
import contacts from '../pages/app/contacts'
import filemanager from '../pages/app/filemanager'
import incomingcall from '../pages/app/call/incomingcall'
import outgoingcall from '../pages/app/call/outgoingcall'
import mailview from '../pages/app/email/mailview'
import voicecall from '../pages/app/call/voicecall'
import videocall from '../pages/app/call/videocall'

/********profile component route******/
import clientprofile from '../pages/profile/clientprofile'
import profile from '../pages/profile'

/********client component route******/
import index from '../pages/clients'
import clientlistindex from '../pages/clients/clientlistindex'

/********components component route******/
import components from '../pages/components'

/********sales component route******/
import createestimate from '../pages/sales/estimates/createestimate'
import createinvoice from '../pages/sales/invoices/createinvoice'
import editestimate from '../pages/sales/estimates/editestimate'
import editinvoice from '../pages/sales/invoices/editinvoice'
import mainestimate from '../pages/sales/estimates/mainestimate'
import estimateview from '../pages/sales/estimates/estimateview'
import espenses from '../pages/sales/expenses'
import maininvoice from '../pages/sales/invoices/maininvoice'
import invoiceview from '../pages/sales/invoices/invoiceview'
import payments from '../pages/sales/payments'
import providentfund from '../pages/sales/providentfund'
import taxes from '../pages/sales/taxes'

/********table component route******/
import datatable from '../pages/table/datatable'
import tablebasic from '../pages/table/tablebasic'

/********dashboard routes******/
import error404 from '../pages/error/error404'
import error500 from '../pages/error/error500'

/********mainpage route******/
import faq from '../pages/mainpage/faq'
import forgotpassword from '../pages/mainpage/forgotpassword'
import privacypolicy from '../pages/mainpage/privacypolicy'
import term from '../pages/mainpage/term'
import termination from '../pages/mainpage/termination'
import search from '../pages/mainpage/search'

/********form route******/
import basicinputs from '../pages/form/basicinputs'
import horizontal from '../pages/form/horizontal'
import inputgroups from '../pages/form/inputgroups'
import formmask from '../pages/form/formmask'
import formvalidation from '../pages/form/formvalidation'
import formvertical from '../pages/form/formvertical'

/********goals route******/
import goaltracking from '../pages/goals/goaltracking'
import goaltype from '../pages/goals/goaltype'

/********payroll route******/
import payrollitems from '../pages/payroll/payrollitems'
import salary from '../pages/payroll/salary'
import salaryview from '../pages/payroll/salaryview'

/********performance route******/
import performance from '../pages/performance'
import performanceappraisal from '../pages/performance/performanceappraisal'
import performanceindicator from '../pages/performance/performanceindicator'

/********project route******/
import projectlist from '../pages/project/projectlist'

/********projects route******/
import mainproject from '../pages/projects/mainproject'
import projectview from '../pages/projects/projectview'
import promotion from '../pages/promotion'
import taskboard from '../pages/projects/taskboard'

/********user route******/
import users from '../pages/users'

/********training route******/
import maintraining from '../pages/training/maintraining'
import training from '../pages/training/maintraining'
import trainers from '../pages/training/trainers'

/********tickets route******/
import ticketview from '../pages/tickets/ticketview'
import mainticket from '../pages/tickets/mainticket'

/********task route******/
import tasks from '../pages/tasks'

/********resignation route******/
import resignation from '../pages/resignation'

/********subscriptions route******/
import subscriptioncompany from '../pages/subscription/subscriptioncompany'
import subscriptions from '../pages/subscription/subscriptions'
import subscribedcompanies from '../pages/subscription/subscribedcompanies'

const routes = [
  {
        path: '/',
        name: 'login',
        component: () => import('../pages/application/login'),
        meta: {
        requiresAuth: true
    }
    },
  {
      path: '/index',
      name: 'indexs',
      component: () => import('../pages/dashboard/admin/main'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/employee-dashboard',
      name: 'employee-dashboard',
      component: () => import('../pages/dashboard/employee'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/activities',
      name: 'activities',
      component: () => import('../pages/activities'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/applied-jobs',
      name: 'applied-jobs',
      component: () => import('../pages/jobs/appliedjobs'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/approval-setting',
      name: 'approval-setting',
      component: () => import('../pages/settings/approvalsetting'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/apptitude-result',
      name: 'apptitute-result',
      component: () => import('../pages/jobs/aptituteresult'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/archived-jobs',
      name: 'archived-jobs',
      component: () => import('../pages/jobs/archivedjobs'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/assets',
      name: 'assets',
      component: () => import('../pages/assets'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/attendance',
      name: 'attendance',
      component: () => import('../pages/employees/attendance'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/attendance-employee',
      name: 'attendance-employee',
      component: () => import('../pages/employees/attendanceemployee'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/attendance-reports',
      name: 'attendance-reports',
      component: () => import('../pages/reports/attendancereport'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/blank-page',
      name: 'blank-page',
      component: () => import('../pages/account/blankpage'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/budget-expenses',
      name: 'budget-expenses',
      component: () => import('../pages/accounting/budgetexpenses'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/budget-revenues',
      name: 'budget-revenues',
      component: () => import('../pages/accounting/budgetrevenues'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/budgets',
      name: 'budgets',
      component: () => import('../pages/accounting/budgets'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/candidates',
      name: 'candidates',
      component: () => import('../pages/jobs/candidatelist'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/categories',
      name: 'categories',
      component: () => import('../pages/accounting/categories'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/change-password',
      name: 'change-password',
      component: () => import('../pages/settings/changepassword'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/chat',
      name: 'chat',
      component: () => import('../pages/app/chat'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/client-profile',
      name: 'client-profile',
      component: () => import('../pages/profile/clientprofile'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/clients',
      name: 'clients',
      component: () => import('../pages/clients/index'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/clients-list',
      name: 'clients-list',
      component: () => import('../pages/clients/clientlistindex'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/components',
      name: 'components',
      component: () => import('../pages/components'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/compose',
      name: 'compose',
      component: () => import('../pages/app/email/compose'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/app/contacts'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/create-estimate',
      name: 'create-estimate',
      component: () => import('../pages/sales/estimates/createestimate'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/create-invoice',
      name: 'create-invoice',
      component: () => import('../pages/sales/invoices/createinvoice'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/cron-setting',
      name: 'cron-setting',
      component: () => import('../pages/settings/cronsetting'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/daily-reports',
      name: 'daily-reports',
      component: () => import('../pages/reports/dailyreports'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/data-tables',
      name: 'data-tables',
      component: () => import('../pages/table/datatable'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/departments',
      name: 'departments',
      component: () => import('../pages/employees/departments'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/designations',
      name: 'designations',
      component: () => import('../pages/employees/designations'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/edit-estimate',
      name: 'edit-estimate',
      component: () => import('../pages/sales/estimates/editestimate'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/edit-invoice',
      name: 'edit-invoice',
      component: () => import('../pages/sales/invoices/editinvoice'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/email-settings',
      name: 'email-settings',
      component: () => import('../pages/settings/emailsettings'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/employee-reports',
      name: 'employee-reports',
      component: () => import('../pages/reports/employeereports'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/employees',
      name: 'employees',
      component: () => import('../pages/employees/mainemployee'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/employees-list',
      name: 'employees-list',
      component: () => import('../pages/employees/mainemployee/employeeslistindex'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/error-404',
      name: 'error-404',
      component: () => import('../pages/error/error404'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/error-500',
      name: 'error-500',
      component: () => import('../pages/error/error500'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/estimates',
      name: 'estimates',
      component: () => import('../pages/sales/estimates/mainestimate'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/estimate-view',
      name: 'estimate-view',
      component: () => import('../pages/sales/estimates/estimateview'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/events',
      name: 'events',
      component: () => import('../pages/app/events'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/expense-reports',
      name: 'expense-reports',
      component: () => import('../pages/reports/expensereports'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/expenses',
      name: 'expenses',
      component: () => import('../pages/sales/expenses'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/experiance-level',
      name: 'experiance-level',
      component: () => import('../pages/jobs/experiancelevel'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/mainpage/faq'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/file-manager',
      name: 'file-manager',
      component: () => import('../pages/app/filemanager'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../pages/mainpage/forgotpassword'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/form-basic-inputs',
      name: 'form-basic-inputs',
      component: () => import('../pages/form/basicinputs'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/form-horizontal',
      name: 'form-horizontal',
      component: () => import('../pages/form/horizontal'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/form-input-groups',
      name: 'form-input-groups',
      component: () => import('../pages/form/inputgroups'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/form-mask',
      name: 'form-mask',
      component: () => import('../pages/form/formmask'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/form-validation',
      name: 'form-validation',
      component: () => import('../pages/form/formvalidation'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/form-vertical',
      name: 'form-vertical',
      component: () => import('../pages/form/formvertical'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/goal-tracking',
      name: 'goal-tracking',
      component: () => import('../pages/goals/goaltracking'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/goal-type',
      name: 'goal-type',
      component: () => import('../pages/goals/goaltype'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/holidays',
      name: 'holidays',
      component: () => import('../pages/employees/holidays'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/inbox',
      name: 'inbox',
      component: () => import('../pages/app/inbox'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/incoming-call',
      name: 'incoming-call',
      component: () => import('../pages/app/call/incomingcall'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/interviewing',
      name: 'interviewing',
      component: () => import('../pages/jobs/interviewing'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/interview-questions',
      name: 'interview-questions',
      component: () => import('../pages/jobs/interviewquestions'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/invoice-reports',
      name: 'invoice-reports',
      component: () => import('../pages/reports/invoicereport'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../pages/sales/invoices/maininvoice'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/invoice-settings',
      name: 'invoice-settings',
      component: () => import('../pages/settings/invoicesettings'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/invoice-view',
      name: 'invoice-view',
      component: () => import('../pages/sales/invoices/invoiceview'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/job-applicants',
      name: 'job-applicants',
      component: () => import('../pages/jobs/jobapplicants'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/job-aptitude',
      name: 'job-aptitude',
      component: () => import('../pages/jobs/jobaptitute'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/job-details',
      name: 'job-details',
      component: () => import('../pages/jobs/jobdetails'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/job-list',
      name: 'job-list',
      component: () => import('../pages/jobs/joblist'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../pages/jobs/mainjobs'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/jobs-dashboard',
      name: 'jobs-dashboard',
      component: () => import('../pages/jobs/jobsdashboard'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/job-view',
      name: 'job-view',
      component: () => import('../pages/jobs/jobview'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/knowledgebase',
      name: 'knowledgebase',
      component: () => import('../pages/knowledgebase'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/knowledgebase-view',
      name: 'knowledgebase-view',
      component: () => import('../pages/knowledgebase/view'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/leads',
      name: 'leads',
      component: () => import('../pages/leads'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/leave-reports',
      name: 'leave-reports',
      component: () => import('../pages/reports/leavereport'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/leaves',
      name: 'leaves',
      component: () => import('../pages/employees/leave'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/leaves-employee',
      name: 'leaves-employee',
      component: () => import('../pages/employees/leaveemployee'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/leave-settings',
      name: 'leave-settings',
      component: () => import('../pages/employees/leavesettings'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/leave-type',
      name: 'leave-type',
      component: () => import('../pages/settings/leavetype'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/localization',
      name: 'localization',
      component: () => import('../pages/settings/localization'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/lock-screen',
      name: 'lock-screen',
      component: () => import('../pages/application/lockscreen'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/mail-view',
      name: 'mail-view',
      component: () => import('../pages/app/email/mailview'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/manage-resumes',
      name: 'manage-resumes',
      component: () => import('../pages/jobs/manageresume'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/notifications-settings',
      name: 'notifications-settings',
      component: () => import('../pages/settings/notification'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/offer_approvals',
      name: 'offer_approvals',
      component: () => import('../pages/jobs/offerapprove'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/offered-jobs',
      name: 'offered-jobs',
      component: () => import('../pages/jobs/offeredjob'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/otp',
      name: 'otp',
      component: () => import('../pages/application/otp'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/outgoing-call',
      name: 'outgoing-call',
      component: () => import('../pages/app/call/outgoingcall'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/overtime',
      name: 'overtime',
      component: () => import('../pages/employees/overtime'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/payments',
      name: 'payments',
      component: () => import('../pages/sales/payments'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/payments-reports',
      name: 'payments-reports',
      component: () => import('../pages/reports/paymentreport'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/payroll-items',
      name: 'payroll-items',
      component: () => import('../pages/payroll/payrollitems'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/payslip-reports',
      name: 'payslip-reports',
      component: () => import('../pages/reports/payslipreport'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/performance',
      name: 'performance',
      component: () => import('../pages/performance'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/performance-appraisal',
      name: 'performance-appraisal',
      component: () => import('../pages/performance/performanceappraisal'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/performance-indicator',
      name: 'performance-indicator',
      component: () => import('../pages/performance/performanceindicator'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/performance-setting',
      name: 'performance-setting',
      component: () => import('../pages/settings/performancesetting'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/policies',
      name: 'policies',
      component: () => import('../pages/policies'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../pages/mainpage/privacypolicy'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/profile'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/project-list',
      name: 'project-list',
      component: () => import('../pages/project/projectlist'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/project-reports',
      name: 'project-reports',
      component: () => import('../pages/reports/projectreport'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/projects/mainproject'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/project-view',
      name: 'project-view',
      component: () => import('../pages/projects/projectview'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/promotion',
      name: 'promotion',
      component: () => import('../pages/promotion'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/provident-fund',
      name: 'provident-fund',
      component: () => import('../pages/sales/providentfund'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/voice-call',
      name: 'voice-call',
      component: () => import('../pages/app/call/voicecall'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/visited-jobs',
      name: 'visited-jobs',
      component: () => import('../pages/jobs/visitedjobs'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/video-call',
      name: 'video-call',
      component: () => import('../pages/app/call/videocall'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/users',
      name: 'users',
      component: () => import('../pages/users'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/user-reports',
      name: 'user-reports',
      component: () => import('../pages/reports/userreport'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/user-dashboard',
      name: 'user-dashboard',
      component: () => import('../pages/jobs/userdashboard'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/user-all-jobs',
      name: 'user-all-jobs',
      component: () => import('../pages/jobs/useralljobs'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/training-type',
      name: 'training-type',
      component: () => import('../pages/training/trainingtype'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/training',
      name: 'training',
      component: () => import('../pages/training/maintraining'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/trainers',
      name: 'trainers',
      component: () => import('../pages/training/trainers'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/toxbox-setting',
      name: 'toxbox-setting',
      component: () => import('../pages/settings/toxboxsetting'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/timesheet',
      name: 'timesheet',
      component: () => import('../pages/employees/timesheet'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/ticket-view',
      name: 'ticket-view',
      component: () => import('../pages/tickets/ticketview'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../pages/tickets/mainticket'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/theme-settings',
      name: 'theme-settings',
      component: () => import('../pages/settings/themesetting'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/terms',
      name: 'terms',
      component: () => import('../pages/mainpage/term'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/termination',
      name: 'termination',
      component: () => import('../pages/mainpage/termination'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/taxes',
      name: 'taxes',
      component: () => import('../pages/sales/taxes'),
      meta: {
      requiresAuth: true
  }
  },
   {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../pages/tasks'),
      meta: {
      requiresAuth: true
  }
  },
    {
      path: '/task-reports',
      name: 'task-reports',
      component: () => import('../pages/reports/taskreport'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/task-board',
      name: 'task-board',
      component: () => import('../pages/projects/taskboard'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/tables-basic',
      name: 'tables-basic',
      component: () => import('../pages/table/tablebasic'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/subscriptions-company',
      name: 'subscriptions-company',
      component: () => import('../pages/subscription/subscriptioncompany'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/subscriptions',
      name: 'subscriptions',
      component: () => import('../pages/subscription/subscriptions'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/subscribed-companies',
      name: 'subscribed-companies',
      component: () => import('../pages/subscription/subscribedcompanies'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/sub-category',
      name: 'sub-category',
      component: () => import('../pages/accounting/subcategory'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/shortlist-candidates',
      name: 'shortlist-candidates',
      component: () => import('../pages/jobs/shortlistcandidate'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/questions',
      name: 'questions',
      component: () => import('../pages/jobs/question'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/register',
      name: 'register',
      component: () => import('../pages/application/register'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/resignation',
      name: 'resignation',
      component: () => import('../pages/resignation'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/roles-permissions',
      name: 'roles-permissions',
      component: () => import('../pages/settings/rolepermission'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/salary',
      name: 'salary',
      component: () => import('../pages/payroll/salary'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/salary-settings',
      name: 'salary-settings',
      component: () => import('../pages/settings/salarysetting'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/salary-view',
      name: 'salary-view',
      component: () => import('../pages/payroll/salaryview'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/saved-jobs',
      name: 'saved-jobs',
      component: () => import('../pages/jobs/savedjob'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/schedule-timing',
      name: 'schedule-timing',
      component: () => import('../pages/jobs/scheduletiming'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/settings/mainsetting'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/shift-list',
      name: 'shift-list',
      component: () => import('../pages/employees/shift'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/shift-scheduling',
      name: 'shift-scheduling',
      component: () => import('../pages/employees/scheduling'),
      meta: {
      requiresAuth: true
  }
  },
  {
      path: '/search',
      name: 'search',
      component: () => import('../pages/mainpage/search'),
      meta: {
      requiresAuth: true
  }
  },
];

export const router = createRouter({
    history: createWebHistory('/'),
    linkActiveClass: 'active',
    routes
});
