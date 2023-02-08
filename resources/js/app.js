 import { createApp } from 'vue';
import App from './components/App.vue'
import { router } from './router';
/*********Header component**********/
import MainHeader from './pages/layouts/mainheader.vue'
import Sidebar from './pages/sidebar.vue'
import HeaderLogo from './components/header-logo.vue'
import Toggle from './components/toggle.vue'
import Search from './components/search.vue'
import Flag from './components/flag.vue'
import Notifications from './components/notifications.vue'
import MessageNotifications from './components/message-notifications.vue'
import HeaderEnd from './components/header-end.vue'
/*********dashboard component******/
import PageHeader from './pages/dashboard/admin/pageheader.vue'
import Widget from './pages/dashboard/admin/widget.vue'
import Chart from './pages/dashboard/admin/chart.vue'
import Employee from './pages/dashboard/admin/employee.vue'
import Statistics from './pages/dashboard/admin/statistics.vue'
import Invoices from './pages/dashboard/admin/invoices.vue'
import Clients from './pages/dashboard/admin/clients.vue'
import Welcomeheader from './pages/dashboard/employee/welcomeheader.vue'
import Projects from './pages/dashboard/employee/projects.vue'
import Today from './pages/dashboard/employee/today.vue'
/*********Activities component******/
import HeaderActivities from './pages/activities/headeractivities.vue'
/*********Policies component******/
import HeaderPolicies from './pages/policies/headerpolicies.vue'
import PoliciesTable from './pages/policies/policiestable.vue'
import ModalPolicies from './pages/policies/modalpolicies.vue'
/*********knowledgebase component******/
import HeaderKnowledgebase from './pages/knowledgebase/headerknowledgebase.vue'
import KnowledgebaseContent from './pages/knowledgebase/knowledgebasecontent.vue'
import HeaderView from './pages/knowledgebase/view/headerview.vue'
import CategoriesView from './pages/knowledgebase/view/categoriesview.vue'
import ContentView from './pages/knowledgebase/view/contentview.vue'
/*********leads component******/
import HeaderLeads from './pages/leads/headerleads.vue'
import ContentLeads from './pages/leads/contentleads.vue'
/*********jobs component******/
import JobHeader from './pages/jobs/jobheader.vue'
import SearchFilter from './pages/jobs/searchfilter.vue'
import AppliedjobHeader from './pages/jobs/appliedjobs/appliedjobheader.vue'
import ModalAppliedJobs from './pages/jobs/appliedjobs/modalappliedjobs.vue'
import AptituteresultHeader from './pages/jobs/aptituteresult/aptituteresult-header.vue'
import ArchivedjobsHeader from './pages/jobs/archivedjobs/archivedjobs-header.vue'
import CandidateListHeader from './pages/jobs/candidatelist/candidatelistheader.vue'
import CandidateListModal from './pages/jobs/candidatelist/candidatelistmodal.vue'
import ExperHeader from './pages/jobs/experiancelevel/experheader.vue'
import ExperTable from './pages/jobs/experiancelevel/expertable.vue'
import ExperModal from './pages/jobs/experiancelevel/expermodal.vue'
import InterviewingHeader from './pages/jobs/interviewing/interviewingheader.vue'
import InterviewingSidebar from './pages/jobs/interviewing/interviewingsidebar.vue'
import InterviewingContent from './pages/jobs/interviewing/interviewingcontent.vue'
import ModalInterviewing from './pages/jobs/interviewing/modalinterviewing.vue'
import HeaderInterviewQuestions from './pages/jobs/interviewquestions/headerinterviewquestions.vue'
import InterviewQuestionsContent from './pages/jobs/interviewquestions/interviewquestioncontent.vue'
import ModalInterviewQuestions from './pages/jobs/interviewquestions/modalinterviewquestions.vue'
import HeaderJobapplicants from './pages/jobs/jobapplicants/headerjobapplicants.vue'
import JobApplicantsContent from './pages/jobs/jobapplicants/jobapplicantscontent.vue'
import JobAptituteHeader from './pages/jobs/jobaptitute/jobaptituteheader.vue'
import JobAptituteDetails from './pages/jobs/jobaptitute/jobaptitutedetails.vue'
import JobAptituteQuestions from './pages/jobs/jobaptitute/jobaptitutequestions.vue'
import HeaderJobDetails from './pages/jobs/jobdetails/headerjobdetails.vue'
import JobDetailsInfo from './pages/jobs/jobdetails/jobdetailsinfo.vue'
import JobDetailsContent from './pages/jobs/jobdetails/jobdetailscontent.vue'
import JobDetailsDetinfo from './pages/jobs/jobdetails/jobdetailsdetinfo.vue'
import ModalJobDetails from './pages/jobs/jobdetails/modaljobdetails.vue'
import JobListHeader from './pages/jobs/joblist/joblistheader.vue'
import JobListContent from './pages/jobs/joblist/joblistcontent.vue'
import JobListMainHeader from './pages/jobs/joblist/joblistmainheader.vue'
import HeaderMainJob from './pages/jobs/mainjobs/headermainjob.vue'
import MainJobContent from './pages/jobs/mainjobs/mainjobcontent.vue'
import ModalMainJob from './pages/jobs/mainjobs/modalmainjob.vue'
import HeaderJobDashboard from './pages/jobs/jobsdashboard/headerjobdashboard.vue'
import OverviewJobDashboard from './pages/jobs/jobsdashboard/overviewjobdashboard.vue'
import LatestJobDashboard from './pages/jobs/jobsdashboard/latestjobdashboard.vue'
import JobApplicantList from './pages/jobs/jobsdashboard/jobapplicantlist.vue'
import JobShortlistCandidate from './pages/jobs/jobsdashboard/jobshortlistcandidate.vue'
import WidgetJob from './pages/jobs/jobsdashboard/widgetjob.vue'
import HeaderJobView from './pages/jobs/jobview/headerjobview.vue'
import ModalJobView from './pages/jobs/jobview/modaljobview.vue'
import JobViewContent from './pages/jobs/jobview/jobviewcontent.vue'
import ContentJobView from './pages/jobs/jobview/contentjobview.vue'
import InfoJobView from './pages/jobs/jobview/infojobview.vue'
import HeaderResume from './pages/jobs/manageresume/headerresume.vue'
import ResumeContent from './pages/jobs/manageresume/resumecontent.vue'
import ModalResume from './pages/jobs/manageresume/modalresume.vue'
import HeaderOfferApprove from './pages/jobs/offerapprove/headerofferapprove.vue'
import OfferApproveContent from './pages/jobs/offerapprove/offerapprovecontent.vue'
import ModalOfferApprove from './pages/jobs/offerapprove/modalofferapprove.vue'
import HeaderOfferedJob from './pages/jobs/offeredjob/headerofferedjob.vue'
import ContentOfferedJob from './pages/jobs/offeredjob/contentofferedjob.vue'
import UserAppliedjobTable from './pages/jobs/userdashboard/userappliedjobtable.vue'
import UserLatestjobTable from './pages/jobs/userdashboard/userlatestjobtable.vue'
import UserLatestjob from './pages/jobs/userdashboard/userlatestjob.vue'
import UserGraph from './pages/jobs/userdashboard/usergraph.vue'
import UserDashboardWidget from './pages/jobs/userdashboard/userdashboardwidget.vue'
import UserAllJobsTable from './pages/jobs/useralljobs/useralljobtable.vue'
import ShortTable from './pages/jobs/shortlistcandidate/shorttable.vue'
import QuestionWizard from './pages/jobs/question/questionwizard.vue'
import ModalQuestion from './pages/jobs/question/modalquestion.vue'
import ScheduleTable from './pages/jobs/scheduletiming/scheduletable.vue'


/*********settings component******/
import SettingSidebar from './pages/settings/settingsidebar.vue'
import SettingApproval from './pages/settings/approvalsetting/settingapproval.vue'
import MessageApproval from './pages/settings/approvalsetting/messageapproval.vue'
import ProfileApproval from './pages/settings/approvalsetting/profileapproval.vue'
import HomeApproval from './pages/settings/approvalsetting/homeapproval.vue'
import ApprovalHeader from './pages/settings/approvalsetting/approvalheader.vue'
import ApprovalTabs from './pages/settings/approvalsetting/approvaltabs.vue'
import ChangepasswordHeader from './pages/settings/changepassword/changepasswordheader.vue'
import FormChangepassword from './pages/settings/changepassword/formchangepassword.vue'
import CronSettingForm from './pages/settings/cronsetting/cronsettingform.vue'
import CronSettingHeader from './pages/settings/cronsetting/cronsettingheader.vue'
import EmailForm from './pages/settings/emailsettings/emailform.vue'
import FormInvoiceSettings from './pages/settings/invoicesettings/forminvoicesettings.vue'
import HeaderInvoiceSettings from './pages/settings/invoicesettings/headerinvoicesettings.vue'
import HeaderLeaveType from './pages/settings/leavetype/headerleavetype.vue'
import LeaveTypeContent from './pages/settings/leavetype/leavetypecontent.vue'
import ModalLeaveType from './pages/settings/leavetype/modalleavetype.vue'
import HeaderLocalization from './pages/settings/localization/headerlocalization.vue'
import ContentLocalization from './pages/settings/localization/contentlocalization.vue'
import HeaderNotification from './pages/settings/notification/headernotification.vue'
import NotifiationContent from './pages/settings/notification/notificationcontent.vue'
import HeaderPerformanceSetting from './pages/settings/performancesetting/headerperformancesetting.vue'
import PerformanceSettingGoal from './pages/settings/performancesetting/performancesettinggoal.vue'
import CompetencyPerformanceSetting from './pages/settings/performancesetting/competencyperformancesetting.vue'
import OkrPerformanceSetting from './pages/settings/performancesetting/okrperformancesetting.vue'
import TabPerformanceSetting from './pages/settings/performancesetting/tabperformancesetting.vue'
import FormToxboxSetting from './pages/settings/toxboxsetting/formtoxboxsetting.vue'

/*********assets component******/
import Headerassets from './pages/assets/headerassets.vue'
import Assetsfilter from './pages/assets/assetsfilter.vue'
import ModalPopup from './pages/assets/modalpopup.vue'
/*********employee component******/
import AttendanceHeader from './pages/employees/attendance/attendanceheader.vue'
import AttendanceFilter from './pages/employees/attendance/attendancefilter.vue'
import AttendanceModal from './pages/employees/attendance/attendancemodal.vue'
import AttendEmployeeHeader from  './pages/employees/attendanceemployee/attendemployeeheader.vue'
import Timesheet from './pages/employees/attendanceemployee/timesheet.vue'
import Statis from './pages/employees/attendanceemployee/statistics.vue'
import TodayActivity from './pages/employees/attendanceemployee/todayactivity.vue'
import AttendEmpFilter from './pages/employees/attendanceemployee/attendempfilter.vue'
import DepartmentHeader from './pages/employees/departments/departmentheader.vue'
import DepartmentTable from './pages/employees/departments/departmenttable.vue'
import DepartmentModal from './pages/employees/departments/departmentmodal.vue'
import DesignationHeader from './pages/employees/designations/designationheader.vue'
import DesignationTable from './pages/employees/designations/designationtable.vue'
import DesignationModal from './pages/employees/designations/designationmodal.vue'
import EmployeeHeader from './pages/employees/mainemployee/employeeheader.vue'
import EmployeeFilter from './pages/employees/mainemployee/employeefilter.vue'
import EmployeeContent from './pages/employees/mainemployee/employeecontent.vue'
import EmployeeModal from './pages/employees/mainemployee/employeemodal.vue'
import EmployeeListContent from './pages/employees/mainemployee/employeeslistcontent.vue'
import HeaderHoliday from './pages/employees/holidays/headerholidays.vue'
import HolidayContent from './pages/employees/holidays/holidaycontent.vue'
import ModalHoliday from './pages/employees/holidays/modalholiday.vue'
import HeaderLeave from './pages/employees/leave/headerleave.vue'
import LeaveWidget from './pages/employees/leave/leavewidget.vue'
import LeaveFilter from './pages/employees/leave/leavefilter.vue'
import LeaveContent from './pages/employees/leave/leavecontent.vue'
import ModalLeave from './pages/employees/leave/modalleave.vue'
import HeaderLeaveEmployee from './pages/employees/leaveemployee/headerleaveemployee.vue'
import WidgetLeaveEmployee from './pages/employees/leaveemployee/widgetleaveemployee.vue'
import ContentLeaveEmployee from './pages/employees/leaveemployee/contentleaveemployee.vue'
import ModalLeaveEmployee from './pages/employees/leaveemployee/modalleaveemployee.vue'
import HeaderLeaveSetting from './pages/employees/leavesettings/headerleavesetting.vue'
import AnnualLeaveSetting from './pages/employees/leavesettings/annualleavesetting.vue'
import ModalLeaveSetting from './pages/employees/leavesettings/modalleavesetting.vue'
import CreateLeaveSetting from './pages/employees/leavesettings/createleavesetting.vue'
import PaternityLeaveSetting from './pages/employees/leavesettings/paternityleavesetting.vue'
import MaternityLeaveSetting from './pages/employees/leavesettings/maternityleavesetting.vue'
import HospitalLeaveSetting from './pages/employees/leavesettings/hospitalleavesetting.vue'
import SickLeaveSetting from './pages/employees/leavesettings/sickleavesetting.vue'
import HeaderOvertime from './pages/employees/overtime/headerovertime.vue'
import ModalOvertime from './pages/employees/overtime/modalovertime.vue'
import OvertimeContent from './pages/employees/overtime/overtimecontent.vue'
import OvertimeWidget from './pages/employees/overtime/overtimewidget.vue'
import TimesheetTable from './pages/employees/timesheet/timesheettable.vue'
import ShiftTable from './pages/employees/shift/shifttable.vue'
import SchedulingTable from './pages/employees/scheduling/schedulingtable'

/*********report component******/
import AttendReportHeader from './pages/reports/attendancereport/attendreportheader.vue'
import AttendReportFilter from './pages/reports/attendancereport/attendreportfilter.vue'
import DailyReportsHeader from './pages/reports/dailyreports/dailyreportsheader.vue'
import DailyReportHeaderContent from './pages/reports/dailyreports/dailyreportheadercontent.vue'
import DailyReportsFilter from './pages/reports/dailyreports/dailyreportsfilter.vue'
import DailyReporttable from './pages/reports/dailyreports/dailyreporttable.vue'
import EmployeeReportFilter from './pages/reports/employeereports/employeereportfilter.vue'
import EmployeeReportHeader from './pages/reports/employeereports/employeereportheader.vue'
import EmployeeReportTable from './pages/reports/employeereports/employeereporttable.vue'
import ExpenseReportHeader from './pages/reports/expensereports/expensereportheader.vue'
import ExpenseReportFilter from './pages/reports/expensereports/expensereportfilter.vue'
import ExpenseReportContent from './pages/reports/expensereports/expensereportcontent.vue'
import HeaderInvoiceReport from './pages/reports/invoicereport/headerinvoicereport.vue'
import InvoiceReportFilter from './pages/reports/invoicereport/invoicereportfilter.vue'
import InvoiceReportTable from './pages/reports/invoicereport/invoicereporttable.vue'
import HeaderLeaveReport from './pages/reports/leavereport/headerleavereport.vue'
import LeaveReportFilter from './pages/reports/leavereport/leavereportfilter.vue'
import LeaveReportContent from './pages/reports/leavereport/leavereportcontent.vue'
import HeaderPaymentReport from './pages/reports/paymentreport/headerpaymentreport.vue'
import ContentPaymentReport from './pages/reports/paymentreport/contentpaymentreport.vue'
import FilterPaymentReport from './pages/reports/paymentreport/filterpaymentreport.vue'
import HeaderPayslipReport from './pages/reports/payslipreport/headerpayslipreport.vue'
import PayslipFilter from './pages/reports/payslipreport/payslipfilter.vue'
import PayslipContent from './pages/reports/payslipreport/payslipcontent.vue'
import HeaderProjectReport from './pages/reports/projectreport/headerprojectreport.vue'
import FilterProjectReport from './pages/reports/projectreport/filterprojectreport.vue'
import ProjectReportContent from './pages/reports/projectreport/projectreportcontent.vue'
import TableUserReport from './pages/reports/userreport/tableuserreport.vue'
import TaskReportTable from './pages/reports/taskreport/taskreporttable.vue'
import TaskReportFilter from './pages/reports/taskreport/taskreportfilter.vue'


/*********accounting component******/
import BudgetExpenseHeader from './pages/accounting/budgetexpenses/budgetexpenseheader.vue'
import BudgetExpenseModal from './pages/accounting/budgetexpenses/budgetexpensemodal.vue'
import BudgetRevenueHeader from './pages/accounting/budgetrevenues/budgetrevenueheader.vue'
import BudgetRevenueModal from './pages/accounting/budgetrevenues/budgetrevenuemodal.vue'
import BudgetHeader from './pages/accounting/budgets/budgetheader.vue'
import BudgetModal from './pages/accounting/budgets/budgetmodal.vue'
import CategoriesHeader from './pages/accounting/categories/categoriesheader.vue'
import CategoriesModal from './pages/accounting/categories/categoriesmodal.vue'
import SubCategoriesModal from './pages/accounting/subcategory/subcategoriesmodal.vue'
import SubCategoriesHeader from './pages/accounting/subcategory/subcategoriesheader.vue'

/*********app component******/
import CallSidebar from './pages/app/callsidebar.vue'
import ChatMiddle from './pages/app/chat/chatmiddle.vue'
import ChatEnd from './pages/app/chat/chatend.vue'
import ChatModal from './pages/app/chat/chatmodal.vue'
import EventHeader from './pages/app/events/eventheader.vue'
import EventModal from './pages/app/events/eventmodal.vue'
import FilemanagerSidebar from './pages/app/filemanager/filemanagersidebar.vue'
import FilemanagerContent from './pages/app/filemanager/filemanagercontent.vue'
import InboxSidebar from './pages/app/inboxsidebar.vue'
import HeaderInbox from './pages/app/inbox/headerinbox.vue'
import InboxContent from './pages/app/inbox/inboxcontent.vue'
import MailViewSidebar from './pages/app/mailviewsidebar.vue'
import HeaderMailView from './pages/app/email/mailview/headermailview.vue'
import MailViewContent from './pages/app/email/mailview/mailviewcontent.vue'

/*********profile component******/
import ClientProfileHeader from './pages/profile/clientprofile/clientprofileheader.vue'
import ClientHeaderContent from './pages/profile/clientprofile/clientheadercontent.vue'
import ClientProfileTab from './pages/profile/clientprofile/clientprofiletab.vue'
import ClientProfileTabContent from './pages/profile/clientprofile/clientprofiletabcontent.vue'
import HeaderProfile from './pages/profile/headerprofile.vue'
import ProfileCardFirst from './pages/profile/profilecardfirst.vue'
import ProfileCardSecond from './pages/profile/profilecardsecond.vue'
import ModalProfile from './pages/profile/modalprofile.vue'
import ProfileContent from './pages/profile/profilecontent.vue'

/*********clients component******/
import ClientsHeader from './pages/clients/clientsheader.vue'
import ClientsFilter from './pages/clients/clientsfilter.vue'
import ClientsModal from './pages/clients/clientsmodal.vue'
/*********components component******/
import ComponentSidebar from './pages/components/componentsidebar.vue'
import ComponentHeaderContent from './pages/components/componentheadercontent.vue'
import ComponentHeader from './pages/components/componentheader.vue'
/*********app component******/
import MailSidebar from './pages/app/mailsidebar.vue'
import ComposeHeader from './pages/app/email/compose/composeheader.vue'
import ContactHeader from './pages/app/contacts/contactheader.vue'
import ContactModal from './pages/app/contacts/contactmodal.vue'
import ContactContent from './pages/app/contacts/contactcontent.vue'
import ContactSidebar from './pages/app/contacts/contactsidebar.vue'
/*********sales component******/
import CreateEstimateHeader from './pages/sales/estimates/createestimateheader.vue'
import CreateEstimateTable from './pages/sales/estimates/createestimate/createestimatetable.vue'
import CreateEstimateFilter from './pages/sales/estimates/createestimatefilter.vue'
import CreateInvoiceFilter from './pages/sales/invoices/createinvoicefilter.vue'
import CreateInvoiceHeader from './pages/sales/invoices/createinvoiceheader.vue'
import CreateInvoiceTable from './pages/sales/invoices/createinvoice/createinvoicetable.vue'
import EditEstimateFilter from './pages/sales/estimates/editestimatefilter.vue'
import EditEstimateHeader from './pages/sales/estimates/editestimateheader.vue'
import EditEstimateTable from './pages/sales/estimates/editestimate/editestimatetable.vue'
import EditInvoiceFilter from './pages/sales/invoices/editinvoicefilter.vue'
import EditInvoiceHeader from './pages/sales/invoices/editinvoiceheader.vue'
import EditInvoiceTable from './pages/sales/invoices/editinvoice/editinvoicetable.vue'
import MainEstimateHeader from './pages/sales/estimates/mainestimateheader.vue'
import MainEstimateFilter from './pages/sales/estimates/mainestimatefilter.vue'
import MainEstimateContent from './pages/sales/estimates/mainestimate/mainestimatecontent.vue'
import MainEstimateModal from './pages/sales/estimates/mainestimate/mainestimatemodal.vue'
import EstimateViewHeader from './pages/sales/estimates/estimateview/estimateviewheader.vue'
import EstimateViewContent from './pages/sales/estimates/estimateview/estimateviewcontent.vue'
import ExpenseHeader from './pages/sales/expenses/exepenseheader.vue'
import ExpenseFilter from './pages/sales/expenses/expensefilter.vue'
import ExpenseModal from './pages/sales/expenses/expensemodal.vue'
import ExpenseTable from './pages/sales/expenses/expensetable.vue'
import MainInvoiceFilter from './pages/sales/invoices/maininvoicefilter.vue'
import MainInvoiceTable from './pages/sales/invoices/maininvoice/maininvoicetable.vue'
import MainInvoiceHeader from './pages/sales/invoices/maininvoice/maininvoiceheader.vue'
import HeaderInvoiceView from './pages/sales/invoices/invoiceview/headerinvoiceview.vue'
import InvoiceViewContent from './pages/sales/invoices/invoiceview/invoiceviewcontent.vue'
import HeaderPayment from './pages/sales/payments/headerpayment.vue'
import PaymentContent from './pages/sales/payments/paymentcontent.vue'
import FundTable from './pages/sales/providentfund/fundtable.vue'
import TaxModal from './pages/sales/taxes/taxmodal.vue'
import TaxTable from './pages/sales/taxes/taxtable.vue'

/*********table component******/
import DatatableHeader from './pages/table/datatable/datatableheader.vue'
import TableContent from './pages/table/datatable/tablecontent.vue'
import TableBasic1 from './pages/table/tablebasic/tablebasic1.vue'
import TableBasic2 from './pages/table/tablebasic/tablebasic2.vue'
import TableBasic3 from './pages/table/tablebasic/tablebasic3.vue'

/*********mainpage component******/
import FaqHeader from './pages/mainpage/faq/faqheader.vue'
import FaqContent from './pages/mainpage/faq/faqcontent.vue'
import HeaderPrivacy from './pages/mainpage/privacypolicy/headerprivacy.vue'
import PrivacyContent from './pages/mainpage/privacypolicy/privacycontent.vue'
import ModalTermination from './pages/mainpage/termination/modaltermination.vue'
import TerminationTable from './pages/mainpage/termination/terminationtable.vue'

/*********form component******/
import HeaderBasicInputs from './pages/form/headerbasicinputs.vue'
import BasicInputForm from './pages/form/basicinputs/basicinputform.vue'
import HeaderHorizontal from './pages/form/headerhorizontal.vue'
import BasicForm from './pages/form/horizontal/basicform.vue'
import AddressForm from './pages/form/horizontal/addressform.vue'
import HorizontalColumnForm from './pages/form/horizontal/horizontalcolumnform.vue'
import HorizontalColumnForm1 from './pages/form/horizontal/horizontalcolumnform1.vue'
import HeaderInputgroups from './pages/form/headerinputgroups.vue'
import BasicExample from './pages/form/inputgroups/basicexample.vue'
import Sizing from './pages/form/inputgroups/sizing.vue'
import Checkbox from './pages/form/inputgroups/checkbox.vue'
import Multipleaddons from './pages/form/inputgroups/multipleaddons.vue'
import HeaderFormMask from './pages/form/headerformmask.vue'
import FormMaskContent from './pages/form/formmask/formmaskcontent.vue'
import HeaderFormValidation from './pages/form/headerformvalidation.vue'
import FormValdiationContent from './pages/form/formvalidation/formvaldiationcontent.vue'
import HeaderFormVertical from './pages/form/headerformvertical.vue'
import BasicVerticalForm from './pages/form/formvertical/basicverticalform.vue'
import BasicAddressForm from './pages/form/formvertical/basicaddressform.vue'
import BasicTwoColumnForm from './pages/form/formvertical/basictwocolumnform.vue'

/*********goals component******/
import HeaderTracking from './pages/goals/goaltracking/headertracking.vue'
import TrackingContent from './pages/goals/goaltracking/trackingcontent.vue'
import ModalTracking from './pages/goals/goaltracking/modaltracking.vue'
import HeaderGoalType from './pages/goals/goaltype/headergoaltype.vue'
import GoalTypeContent from './pages/goals/goaltype/goaltypecontent.vue'
import ModalGoalType from './pages/goals/goaltype/modalgoaltype.vue'

/*********payroll component******/
import HeaderPayrollItem from './pages/payroll/payrollitems/headerpayrollitem.vue'
import PayrollItemTab from './pages/payroll/payrollitems/payrollitemtab.vue'
import PayrollItemContent from './pages/payroll/payrollitems/payrollitemcontent.vue'
import ModalDeductionPayroll from './pages/payroll/payrollitems/modaldeductionpayroll.vue'
import ModalOvertimePayrollItem from './pages/payroll/payrollitems/modalovertimepayrollitem.vue'
import ModalAddPayrollItem from './pages/payroll/payrollitems/modaladdpayrollitem.vue'
import SalaryModal from './pages/payroll/salary/salarymodal.vue'
import SalaryTable from './pages/payroll/salary/salarytable.vue'
import SalaryViewTable from './pages/payroll/salaryview/salaryviewtable.vue'

/*********performance component******/
import PerformanceHeader from './pages/performance/performanceheader.vue'
import BasicInformation from './pages/performance/basicinformation.vue'
import Achievements from './pages/performance/achievements.vue'
import Improvement from './pages/performance/improvement.vue'
import PersonalUpdate from './pages/performance/personalupdate.vue'
import Training from './pages/performance/training.vue'
import Hrd from './pages/performance/hrd.vue'
import PerformanceAppraisalHeader from './pages/performance/performanceappraisal/performanceappraisalheader.vue'
import PerformanceAppraisalTable from './pages/performance/performanceappraisal/performanceappraisaltable.vue'
import ModalPerformanceAppraisal from './pages/performance/performanceappraisal/modalperformanceappraisal.vue'
import PerformanceIndicatorHeader from './pages/performance/performanceindicator/performanceindicatorheader.vue'
import PerformanceIndicatorTable from './pages/performance/performanceindicator/performanceindicatortable.vue'
import ModalPerformanceIndicator from './pages/performance/performanceindicator/modalperformanceindicator.vue'

/*********project component******/
import HeaderProjectList from './pages/project/projectlist/headerprojectlist.vue'
import ModalProjectList from './pages/project/projectlist/modalprojectlist.vue'
import TableProjectList from './pages/project/projectlist/tableprojectlist.vue'
import FilterProjectList from './pages/project/projectlist/filterprojectlist.vue'


/*********projects component******/
import MainProjectTable from './pages/projects/mainproject/mainprojecttable.vue'
import ProjectDetails from './pages/projects/projectview/projectdetails.vue'
import ProjectAdmin from './pages/projects/projectview/projectadmin.vue'
import TaskBoard from './pages/projects/taskboard/taskboardmodal.vue'
import TaskBoardDetail from './pages/projects/taskboard/taskboarddetail.vue'

/*********promotion component******/
import PromotionTable from './pages/promotion/promotiontable.vue'

/*********users component******/
import UserModal from './pages/users/usermodal.vue'
import UserTable from './pages/users/usertable.vue'

/*********training component******/
import TrainingTable from './pages/training/trainingtype/trainingtable.vue'
import ModalMainTraining from './pages/training/maintraining/modalmaintraining.vue'
import MainTable from './pages/training/maintraining/maintable.vue'
import TrainerModal from './pages/training/trainers/trainermodal.vue'
import TrainersTable from './pages/training/trainers/trainerstable.vue'

/*********tickets component******/
import TicketViewModal from './pages/tickets/ticketview/ticketviewmodal.vue'
import MainTicketModal from './pages/tickets/mainticket/mainticketmodal.vue'
import MainComponentTable from './pages/tickets/mainticket/maintable.vue'
import MainFilter from './pages/tickets/mainticket/mainfilter.vue'
import MainWidget from './pages/tickets/mainticket/mainwidget.vue'

/*********tasks component******/
import TaskModal from './pages/tasks/taskmodal.vue'
import TaskSidebar from './pages/tasks/tasksidebar.vue'

/*********subscriptions component******/
import CompanyTable1 from './pages/subscription/subscriptioncompany/companytable.vue'
import CompanyTable2 from './pages/subscription/subscriptioncompany/companytable1.vue'
import CompanyTable3 from './pages/subscription/subscriptions/companytable2.vue'
import CompanyTable4 from './pages/subscription/subscriptions/companytable3.vue'
import CompanyTable5 from './pages/subscription/subscriptions/companytable4.vue'
import CompaniesModal from './pages/subscription/subscribedcompanies/companiesmodal.vue'
import CompaniesTable from './pages/subscription/subscribedcompanies/companiestable.vue'
import CompaniesFilter from './pages/subscription/subscribedcompanies/companiesfilter.vue'

/*********resignation component******/
import modalresignation from './pages/resignation/modalresignation.vue'
import resignationtable from './pages/resignation/resignationtable.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

 /*******Plugin import***********/
import DatePicker from 'vue3-datepicker'
import 'moment'
import "datatables.net-bs4"
import "datatables.net-dt/js/dataTables.dataTables"
import jquery from 'jquery';
import Select2 from 'v-select2-component'
window.$ = jquery
require('./bootstrap')

const app = createApp(App)
app.component('sidebar', Sidebar);

/*********Header component**********/
app.component('main-header', MainHeader);
app.component('header-logo', HeaderLogo);
app.component('toggle', Toggle);
app.component('search', Search);
app.component('flag', Flag);
app.component('notifications', Notifications);
app.component('messagenotifications', MessageNotifications);
app.component('headerend', HeaderEnd);

/*********admin dashboard component******/
app.component('pageheader', PageHeader);
app.component('widget', Widget);
app.component('chart', Chart);
app.component('employee', Employee);
app.component('statistics', Statistics);
app.component('invoices', Invoices);
app.component('clients', Clients);

/*********employee dashboard component******/
app.component('welcomeheader', Welcomeheader);
app.component('today', Today);
app.component('projects', Projects);

/*********activities component******/
app.component('headeractivities', HeaderActivities);

/*********policies component******/
app.component('headerpolicies', HeaderPolicies );
app.component('policiestable', PoliciesTable );
app.component('modalpolicies', ModalPolicies );

/*********knowledgebase component******/
app.component('headerknowledgebase', HeaderKnowledgebase);
app.component('knowledgebasecontent', KnowledgebaseContent);
app.component('headerview', HeaderView);
app.component('contentview', ContentView);
app.component('categoriesview', CategoriesView);

/*********leads component******/
app.component('headerleads', HeaderLeads);
app.component('contentleads', ContentLeads);

/*********jobs component******/
app.component('jobheader', JobHeader);
app.component('appliedjobheader', AppliedjobHeader);
app.component('modalappliedjobs', ModalAppliedJobs)
app.component('searchfilter', SearchFilter);
app.component('aptituteresultheader', AptituteresultHeader);
app.component('archivedjobsheader', ArchivedjobsHeader);
app.component('candidatelistheader', CandidateListHeader);
app.component('candidatelistmodal', CandidateListModal);
app.component('experheader', ExperHeader);
app.component('expertable', ExperTable);
app.component('expermodal', ExperModal);
app.component('interviewingheader', InterviewingHeader);
app.component('interviewingsidebar', InterviewingSidebar);
app.component('interviewingcontent', InterviewingContent);
app.component('modalinterviewing', ModalInterviewing);
app.component('headerinterviewquestions', HeaderInterviewQuestions);
app.component('interviewquestioncontent', InterviewQuestionsContent);
app.component('modalinterviewquestions', ModalInterviewQuestions);
app.component('headerjobapplicants', HeaderJobapplicants);
app.component('jobapplicantscontent', JobApplicantsContent);
app.component('jobaptituteheader', JobAptituteHeader);
app.component('jobaptitutedetails', JobAptituteDetails);
app.component('jobaptitutequestions', JobAptituteQuestions);
app.component('headerjobdetails', HeaderJobDetails);
app.component('jobdetailsinfo', JobDetailsInfo);
app.component('jobdetailscontent', JobDetailsContent);
app.component('jobdetailsdetinfo', JobDetailsDetinfo);
app.component('modaljobdetails', ModalJobDetails);
app.component('joblistheader', JobListHeader);
app.component('jobcontent', JobListContent);
app.component('joblistmainheader', JobListMainHeader);
app.component('headermainjob', HeaderMainJob);
app.component('mainjobcontent', MainJobContent);
app.component('modalmainjob', ModalMainJob);
app.component('headerjobdashboard', HeaderJobDashboard);
app.component('widgetjob', WidgetJob);
app.component('overviewjobdashboard', OverviewJobDashboard);
app.component('latestjobdashboard', LatestJobDashboard);
app.component('jobapplicantlist', JobApplicantList);
app.component('jobshortlistcandidate', JobShortlistCandidate);
app.component('headerjobview', HeaderJobView);
app.component('infojobview', InfoJobView);
app.component('contentjobview', ContentJobView);
app.component('jobviewcontent', JobViewContent);
app.component('modaljobview', ModalJobView);
app.component('headerresume', HeaderResume);
app.component('resumecontent', ResumeContent);
app.component('modalresume', ModalResume);
app.component('headerofferapprove', HeaderOfferApprove );
app.component('offerapprovecontent', OfferApproveContent );
app.component('modalofferapprove', ModalOfferApprove );
app.component('headerofferedjob', HeaderOfferedJob );
app.component('contentofferedjob', ContentOfferedJob );
app.component('userappliedjobtable', UserAppliedjobTable );
app.component('userlatestjobtable', UserLatestjobTable );
app.component('userlatestjob', UserLatestjob );
app.component('usergraph', UserGraph );
app.component('userdashboardwidget', UserDashboardWidget );
app.component('useralljobtable', UserAllJobsTable );
app.component('shorttable', ShortTable );
app.component('questionwizard', QuestionWizard );
app.component('modalquestion', ModalQuestion );
app.component('scheduletable', ScheduleTable );


/*********settings component******/
app.component('settingsidebar', SettingSidebar);
app.component('approvalheader', ApprovalHeader);
app.component('homeapproval', HomeApproval);
app.component('profileapproval', ProfileApproval);
app.component('messageapproval', MessageApproval);
app.component('settingapproval', SettingApproval);
app.component('approvaltabs', ApprovalTabs);
app.component('changepasswordheader', ChangepasswordHeader);
app.component('formchangepassword', FormChangepassword);
app.component('cronsettingheader', CronSettingHeader);
app.component('cronsettingform', CronSettingForm);
app.component('emailform', EmailForm);
app.component('headerinvoicesettings', HeaderInvoiceSettings);
app.component('forminvoicesettings', FormInvoiceSettings);
app.component('headerleavetype', HeaderLeaveType );
app.component('leavetypecontent', LeaveTypeContent );
app.component('modalleavetype', ModalLeaveType );
app.component('headerlocalization', HeaderLocalization );
app.component('contentlocalization', ContentLocalization );
app.component('headernotification', HeaderNotification  );
app.component('notificationcontent', NotifiationContent );
app.component('formtoxboxsetting', FormToxboxSetting );


/*********assets component******/
app.component('headerassets', Headerassets);
app.component('assetsfilter', Assetsfilter);
app.component('modalpopup', ModalPopup);

/*********employee component******/
app.component('attendanceheader', AttendanceHeader);
app.component('attendancefilter', AttendanceFilter);
app.component('attendancemodal', AttendanceModal);
app.component('attendemployeeheader', AttendEmployeeHeader);
app.component('timesheet', Timesheet);
app.component('statistics1', Statis);
app.component('todayactivity', TodayActivity);
app.component('attendempfilter', AttendEmpFilter);
app.component('departmentheader', DepartmentHeader);
app.component('departmenttable', DepartmentTable);
app.component('departmentmodal', DepartmentModal);
app.component('designationheader', DesignationHeader);
app.component('designationtable', DesignationTable);
app.component('designationmodal', DesignationModal);
app.component('employeeheader', EmployeeHeader);
app.component('employeefilter', EmployeeFilter);
app.component('employeecontent', EmployeeContent);
app.component('employeemodal', EmployeeModal);
app.component('employeelistcontent', EmployeeListContent);
app.component('headerholidays', HeaderHoliday);
app.component('holidaycontent', HolidayContent);
app.component('modalholiday', ModalHoliday);
app.component('headerleave', HeaderLeave);
app.component('leavewidget', LeaveWidget);
app.component('leavefilter', LeaveFilter);
app.component('leavecontent', LeaveContent);
app.component('modalleave', ModalLeave);
app.component('headerleaveemployee', HeaderLeaveEmployee);
app.component('widgetleaveemployee', WidgetLeaveEmployee);
app.component('contentleaveemployee', ContentLeaveEmployee);
app.component('modalleaveemployee', ModalLeaveEmployee);
app.component('headerleavesetting', HeaderLeaveSetting );
app.component('annualleavesetting', AnnualLeaveSetting );
app.component('sickleavesetting', SickLeaveSetting );
app.component('hospitalleavesetting', HospitalLeaveSetting );
app.component('maternityleavesetting', MaternityLeaveSetting );
app.component('paternityleavesetting', PaternityLeaveSetting );
app.component('createleavesetting', CreateLeaveSetting );
app.component('modalleavesetting', ModalLeaveSetting );
app.component('headerovertime', HeaderOvertime );
app.component('overtimewidget', OvertimeWidget );
app.component('overtimecontent', OvertimeContent );
app.component('modalovertime', ModalOvertime );
app.component('timesheettable', TimesheetTable);
app.component('shifttable', ShiftTable);
app.component('schedulingtable', SchedulingTable);


/*********report component******/
app.component('attendreportheader', AttendReportHeader);
app.component('attendreportfilter', AttendReportFilter);
app.component('dailyreportsheader', DailyReportsHeader);
app.component('dailyreportheadercontent', DailyReportHeaderContent);
app.component('dailyreportsfilter', DailyReportsFilter);
app.component('dailyreporttable', DailyReporttable);
app.component('employeereportheader', EmployeeReportHeader);
app.component('employeereportfilter', EmployeeReportFilter);
app.component('employeereporttable', EmployeeReportTable);
app.component('expensereportheader', ExpenseReportHeader);
app.component('expensereportfilter', ExpenseReportFilter);
app.component('expensereportcontent', ExpenseReportContent);
app.component('headerinvoicereport', HeaderInvoiceReport);
app.component('invoicereportfilter', InvoiceReportFilter);
app.component('invoicereporttable', InvoiceReportTable);
app.component('headerleavereport', HeaderLeaveReport);
app.component('leavereportfilter', LeaveReportFilter);
app.component('leavereportcontent', LeaveReportContent);
app.component('headerpaymentreport', HeaderPaymentReport );
app.component('filterpaymentreport', FilterPaymentReport );
app.component('contentpaymentreport', ContentPaymentReport );
app.component('headerpayslipreport', HeaderPayslipReport );
app.component('payslipfilter', PayslipFilter );
app.component('payslipcontent', PayslipContent );
app.component('headerprojectreport', HeaderProjectReport );
app.component('filterprojectreport', FilterProjectReport );
app.component('projectreportcontent', ProjectReportContent );
app.component('tableuserreport', TableUserReport );

app.component('taskreporttable', TaskReportTable );
app.component('taskreportfilter', TaskReportFilter );


/*********accounting component******/
app.component('budgetexpenseheader', BudgetExpenseHeader);
app.component('budgetexpensemodal', BudgetExpenseModal);
app.component('budgetrevenueheader', BudgetRevenueHeader);
app.component('budgetrevenuemodal', BudgetRevenueModal);
app.component('budgetheader', BudgetHeader);
app.component('budgetmodal', BudgetModal);
app.component('categoriesheader', CategoriesHeader);
app.component('categoriesmodal', CategoriesModal);

app.component('subcategoriesmodal', SubCategoriesModal);
app.component('subcategoriesheader', SubCategoriesHeader);


/*********call component******/
app.component('callsidebar', CallSidebar);
app.component('chatmiddle', ChatMiddle);
app.component('chatend', ChatEnd);
app.component('chatmodal', ChatModal);

/*********profile component******/
app.component('clientprofileheader', ClientProfileHeader);
app.component('clientheadercontent', ClientHeaderContent);
app.component('clientprofiletab', ClientProfileTab);
app.component('clientprofiletabcontent', ClientProfileTabContent);
app.component('headerprofile', HeaderProfile );
app.component('profilecardfirst', ProfileCardFirst );
app.component('profilecardsecond', ProfileCardSecond );
app.component('profilecontent', ProfileContent );
app.component('modalprofile', ModalProfile );

/*********clients component******/
app.component('clientsheader', ClientsHeader);
app.component('clientsfilter', ClientsFilter);
app.component('clientsmodal', ClientsModal);

/*********components component******/
app.component('componentheader', ComponentHeader);
app.component('componentsidebar', ComponentSidebar);
app.component('componentheadercontent', ComponentHeaderContent);

/*********app component******/
app.component('mailsidebar', MailSidebar);
app.component('composeheader', ComposeHeader);
app.component('contactheader', ContactHeader);
app.component('contactsidebar', ContactSidebar);
app.component('contactcontent', ContactContent);
app.component('contactmodal', ContactModal);
app.component('eventheader', EventHeader);
app.component('eventmodal', EventModal);
app.component('filemanagersidebar', FilemanagerSidebar);
app.component('filemanagercontent', FilemanagerContent);
app.component('inboxsidebar', InboxSidebar);
app.component('headerinbox', HeaderInbox);
app.component('inboxcontent', InboxContent);
app.component('mailviewsidebar', MailViewSidebar );
app.component('headermailview', HeaderMailView );
app.component('mailviewcontent', MailViewContent );

/*********sales component******/
app.component('estimateheader', CreateEstimateHeader);
app.component('estimatefilter', CreateEstimateFilter);
app.component('createestimatetable', CreateEstimateTable);
app.component('createinvoiceheader', CreateInvoiceHeader);
app.component('createinvoicefilter', CreateInvoiceFilter);
app.component('createinvoicetable', CreateInvoiceTable);
app.component('editestimateheader', EditEstimateHeader);
app.component('editestimatefilter', EditEstimateFilter);
app.component('editestimatetable', EditEstimateTable);
app.component('editinvoiceheader', EditInvoiceHeader);
app.component('editinvoicefilter', EditInvoiceFilter);
app.component('editinvoicetable', EditInvoiceTable);
app.component('mainestimateheader', MainEstimateHeader);
app.component('mainestimatefilter', MainEstimateFilter);
app.component('mainestimatecontent', MainEstimateContent);
app.component('mainestimatemodal', MainEstimateModal);
app.component('estimateviewheader', EstimateViewHeader);
app.component('estimateviewcontent', EstimateViewContent);
app.component('expenseheader', ExpenseHeader);
app.component('expensefilter', ExpenseFilter);
app.component('expensetable', ExpenseTable);
app.component('expensemodal', ExpenseModal);
app.component('maininvoiceheader', MainInvoiceHeader);
app.component('maininvoicefilter', MainInvoiceFilter);
app.component('maininvoicetable', MainInvoiceTable);
app.component('headerinvoiceview', HeaderInvoiceView);
app.component('invoiceviewcontent', InvoiceViewContent);
app.component('headerpayment', HeaderPayment );
app.component('paymentcontent', PaymentContent );
app.component('fundtable', FundTable );
app.component('taxmodal', TaxModal );
app.component('taxtable', TaxTable );


/*********table component******/
app.component('datatableheader', DatatableHeader);
app.component('table-content', TableContent);
app.component('tablebasic1', TableBasic1);
app.component('tablebasic2', TableBasic2);
app.component('tablebasic3', TableBasic3);

/*********mainpage component******/
app.component('faqheader', FaqHeader);
app.component('faqcontent', FaqContent);
app.component('headerprivacy', HeaderPrivacy );
app.component('privacycontent', PrivacyContent );
app.component('modaltermination', ModalTermination );
app.component('terminationtable', TerminationTable );

/*********form component******/
app.component('headerbasicinputs', HeaderBasicInputs);
app.component('basicinputform', BasicInputForm);
app.component('headerhorizontal', HeaderHorizontal);
app.component('basicform', BasicForm);
app.component('addressform', AddressForm);
app.component('horizontalcolumnform', HorizontalColumnForm);
app.component('horizontalcolumnform1', HorizontalColumnForm1);
app.component('headerinputgroups', HeaderInputgroups);
app.component('basicexample', BasicExample);
app.component('sizing', Sizing);
app.component('checkbox', Checkbox);
app.component('multipleaddons', Multipleaddons);
app.component('headerformmask', HeaderFormMask);
app.component('formmaskcontent', FormMaskContent);
app.component('headerformvalidation', HeaderFormValidation);
app.component('formvalidationcontent', FormValdiationContent);
app.component('headerformvertical', HeaderFormVertical);
app.component('basicverticalform', BasicVerticalForm);
app.component('basicaddressform', BasicAddressForm);
app.component('basictwocolumnform', BasicTwoColumnForm);

/*********goals component******/
app.component('headertracking', HeaderTracking);
app.component('trackingcontent', TrackingContent);
app.component('modaltracking', ModalTracking);
app.component('headergoaltype', HeaderGoalType);
app.component('goaltypecontent', GoalTypeContent);
app.component('modalgoaltype', ModalGoalType);

/*********payroll component******/
app.component('headerpayrollitem', HeaderPayrollItem );
app.component('payrollitemtab', PayrollItemTab );
app.component('payrollitemcontent', PayrollItemContent );
app.component('modaladdpayrollitem', ModalAddPayrollItem );
app.component('modalovertimepayrollitem', ModalOvertimePayrollItem );
app.component('modaldeductionpayroll', ModalDeductionPayroll );
app.component('salarytable', SalaryModal );
app.component('salarymodal', SalaryTable );
app.component('salaryviewtable', SalaryViewTable );


/*********performance component******/
app.component('performanceheader', PerformanceHeader );
app.component('basicinformation', BasicInformation );
app.component('achievements', Achievements );
app.component('improvement', Improvement );
app.component('personalupdate', PersonalUpdate );
app.component('training', Training );
app.component('hrd', Hrd );
app.component('performanceappraisalheader', PerformanceAppraisalHeader  );
app.component('performanceappraisaltable', PerformanceAppraisalTable  );
app.component('modalperformanceappraisal', ModalPerformanceAppraisal  );
app.component('performanceindicatorheader', PerformanceIndicatorHeader  );
app.component('performanceindicatortable', PerformanceIndicatorTable  );
app.component('modalperformanceindicator', ModalPerformanceIndicator  );
app.component('headerperformancesetting', HeaderPerformanceSetting  );
app.component('tabperformancesetting', TabPerformanceSetting  );
app.component('okrperformancesetting', OkrPerformanceSetting  );
app.component('competencyperformancesetting', CompetencyPerformanceSetting  );
app.component('performancesettinggoal', PerformanceSettingGoal  );

/*********project component******/
app.component('headerprojectlist', HeaderProjectList  );
app.component('filterprojectlist', FilterProjectList   );
app.component('tableprojectlist', TableProjectList  );
app.component('modalprojectlist', ModalProjectList  );

/*********projects component******/
app.component('mainprojecttable', MainProjectTable );
app.component('projectdetails', ProjectDetails );
app.component('projectadmin', ProjectAdmin );
app.component('taskboardmodal', TaskBoard);
app.component('taskboardetail', TaskBoardDetail);

/*********projects component******/
app.component('promotiontable', PromotionTable );

/*********users component******/
app.component('usermodal', UserModal  );
app.component('usertable', UserTable   );

/*********training component******/
app.component('trainingtable', TrainingTable  );
app.component('modalmaintraining', ModalMainTraining   );
app.component('maintable', MainTable   );
app.component('trainermodal', TrainerModal   );
app.component('trainerstable', TrainersTable   );

/*********tickets component******/
app.component('ticketviewmodal', TicketViewModal  );
app.component('mainticketmodal', MainTicketModal );
app.component('maintable', MainComponentTable );
app.component('mainfilter', MainFilter );
app.component('mainwidget', MainWidget );

/*********tasks component******/
app.component('tasksidebar', TaskSidebar );
app.component('taskmodal', TaskModal );

/*********subscriptions component******/
app.component('companytable1', CompanyTable1 );
app.component('companytable2', CompanyTable2 );
app.component('companytable3', CompanyTable3 );
app.component('companytable4', CompanyTable4 );
app.component('companytable5', CompanyTable5 );
app.component('companiesmodal', CompaniesModal );
app.component('companiestable', CompaniesTable );
app.component('companiesfilter', CompaniesFilter );
/*********resignation component******/
app.component('modresignation', modalresignation );
app.component('resinationtab', resignationtable );



app.component('select2', Select2)
app.component('datepicker', DatePicker);

app.use(router)
.mount('#app');
app.use(VueAxios, axios)
 let access_token = localStorage.getItem('token');
 if(access_token) {
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
 }
