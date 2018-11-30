import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Dashboard from '@/views/Dashboard/DashboardView'
import DashboardTest from '@/views/DashboardView'
import HomeTest from '@/views/Dashboard/HomeView'
import Home from '@/views/Dashboard/TestingHome.vue'


// Temporary Import New Home Page
import NewHome from '@/views/Dashboard/NewHomePage.vue'

import HomeInside from '@/views/Dashboard/SalesDashboard'
import test from '@/views/test_viewport'
import ApplicationView from '@/views/Application/Application.vue'

import PrePay from '@/views/Application/PrepaymReview.vue'
import Payment from '@/views/Application/Payment.vue'
import Document from '@/views/Application/DocumentUpload.vue'
import RenewalsCard from '@/views/Dashboard/RenewalsProfileCard'
import RenewalsPageView from '@/views/Renewals/RenewalsPageView'
import Renewal from '@/views/Dashboard/Renewal'
import BrowserVersion from '@/views/Dashboard/Browser'

//BI Documents Page
import MasterDoc from '@/views/Application/Documents/MasterDoc.vue'
import AddressDoc from '@/views/Application/Documents/AddressDoc.vue'
import AgeDoc from '@/views/Application/Documents/AgeDoc.vue'
import CDCDoc from '@/views/Application/Documents/CDCDoc.vue'
import IDDoc from '@/views/Application/Documents/IdProofDoc.vue'
import IncomeDoc from '@/views/Application/Documents/IncomeDoc.vue'
import PhotoDoc from '@/views/Application/Documents/PhotoIdDoc.vue'

//BI Payments Page
import MasterPay from '@/views/Application/Payment/MasterPayment.vue'
import OnlinePay from '@/views/Application/Payment/OnlinePay.vue'
import ChequePay from '@/views/Application/Payment/ChequePay.vue'
import LinkPay from '@/views/Application/Payment/LinkPay.vue'

// import test from '@/views/test_viewport'
import CFRListPage from '@/views/Dashboard/CFRListPage'

//Master Bi Page
import Master from '@/views/Application/MasterBi_Page.vue'

import TestApp from '@/views/Application/TestApplication.vue'
import TestAppEmailPop from '@/views/Application/TestAppEmailPop.vue'

import Notifications from '@/views/Notifications/Notification.vue'
import MainDash from '@/views/Dashboard/MainDash.vue'
import News from '@/views/News/news.vue'
import LinkNews from '@/views/News/linknews.vue'
import lead from '@/views/Lead/lead.vue'

import NotificationList from '@/views/notifi/NotificationList.vue'

// lead page
import leadbeni from '@/views/Lead/AddLead_Beneficiary.vue'
import leadcontat from '@/views/Lead/AddLead_Contact.vue'
import leadpersonal from '@/views/Lead/AddLead_Personal.vue'
import leadproduct from '@/views/Lead/AddLead_Product.vue'
import leadpro from '@/views/Lead/AddLead_Professional.vue'
import leadstatus from '@/views/Lead/AddLead_Status.vue'


//CFR PAGE
import CFR from '@/views/CFR/CFR_View.vue'
//Upload CFR
import MasterUploadCFR from '@/views/CFR//UploadCFR/MasterUploadCFR.vue'
import AddressCFR from '@/views/CFR//UploadCFR/AddressProofCFR.vue'
import AgeCFR from '@/views/CFR//UploadCFR/AgeProofCFR.vue'
import IDCFR from '@/views/CFR//UploadCFR/IDProofCFR.vue'
import IncomeCFR from '@/views/CFR//UploadCFR/IncomeProofCFR.vue'
import PhotoCFR from '@/views/CFR//UploadCFR/PhotoCFR.vue'


//Proposal Page
import ProposalNominee from '@/views/Application/Proposal_Nominee.vue'
import ProposalPersonal from '@/views/Application/Proposal_Personal.vue'
import ProposalFamily from '@/views/Application/Proposal_family.vue'
import ProposalInsurance from '@/views/Application/Proposal_Insurance.vue'
import ProposalMedical from '@/views/Application/Proposal_Medical.vue'
import ProposalVernacular from '@/views/Application/Proposal_Vernacular.vue'
import ProposalDeclaration from '@/views/Application/Proposal_Declaration.vue'
import ProposalReport from '@/views/Application/Proposal_Report.vue'
import Proposal_Fmly_popup from '@/views/Application/Proposal_fmly_popup.vue'
import Proposal_insurance_popup from '@/views/Application/Proposal_insurance_popup.vue'


import PropTest from '@/views/Application/TestProp.vue'


//Filters
import Filters from '@/views/Filters/Filter.vue'

// Component
//import MobileFilters from '@/components/SortFilter/FilterMobile'
import MobileFilters from '@/components/SortFilter/NewFilterMobile'

//Sync Page
import Sync from '@/views/Sync/Sync.vue'

//Onbarding Page

import MasterOnBoard from '@/views/OnBoarding/MasterOnBoard_Page.vue'
import Advisor from '@/views/OnBoarding/AdvisorFulfiment/AdvisorData.vue'
import CocDetail from '@/views/OnBoarding/CodeConduct/CodeDetails.vue'

import Official from '@/views/OnBoarding/AdvisorFulfiment/OfficialDetails.vue'
import OnBoardPersonal from '@/views/OnBoarding/AdvisorFulfiment/PersonalDetails.vue'
import EducationBack from '@/views/OnBoarding/AdvisorFulfiment/EducationBckg.vue'
import EmploymentBack from '@/views/OnBoarding/AdvisorFulfiment/EmploymentBckg.vue'
import Ref from '@/views/OnBoarding/AdvisorFulfiment/References.vue'
import Score from '@/views/OnBoarding/AdvisorFulfiment/QScore.vue'
import PreRecruitment from '@/views/OnBoarding/AdvisorFulfiment/Prerecruit.vue'
import Onreview from '@/views/OnBoarding/ReviewData/Review.vue'
import OnDocument from '@/views/OnBoarding/Document.vue'
import CFRL from '@/views/OnBoarding/CFRLog.vue'
import Code from '@/views/OnBoarding/CodeConduct/COC.vue'
import OnAgreement from '@/views/OnBoarding/CodeConduct/Agreement.vue'

//OnBoarding Documents
import OnMasterDoc from '@/views/OnBoarding/Documents/OnbMasterDoc.vue'
import OnAddressDoc from '@/views/OnBoarding/Documents/OnbAddressProof.vue'
import OnAgeDoc from '@/views/OnBoarding/Documents/OnbAgeProof.vue'
import OnEduDoc from '@/views/OnBoarding/Documents/OnbEducation.vue'
import OnPanDoc from '@/views/OnBoarding/Documents/OnbPanCard.vue'
// import OnPassDoc from '@/views/OnBoarding/Documents/OnbPassProof.vue'
import OnPhotoDoc from '@/views/OnBoarding/Documents/OnbPersonalPhoto.vue'
import OnProfileDoc from '@/views/OnBoarding/Documents/OnbProfileProof.vue'

//Raise Request
import CustomerRequest from '@/views/RequestDetails/CustomerReq.vue'
// import MasterRaisedRequest from '@/views/RequestDetails/SelfReq.vue'
import MasterRaisedRequest from '@/views/RequestDetails/RaiseRequestMaster.vue'

//Calendar Page
import Calendar from '@/views/Calendar/Calendar.vue'
import CalendarDay from '@/views/Calendar/Calendar_Day.vue'
import ReviewEvents from '@/views/Calendar/ReviewEvents.vue'
import Reschedule from '@/views/Calendar/Reschedule.vue'
import CreateEvent from '@/views/Calendar/CreateEvent.vue'

//Modal
// import Mod from '@/views/Vmodal'

//Calculator Page
import Mastercalculator from '@/views/Calculator/CalculatorMaster.vue'

import NeedCalculator from '@/views/Calculator/Calculator_Human.vue'
import CalculatorChild from '@/views/Calculator/Calculator_Child.vue'
import CalculatorRetire from '@/views/Calculator/Calculator_Retirement.vue'
import GetQuotePopup from '@/views/Calculator/GetQuotePopup.vue'
//contests page
//Contests Master Page
import ContestsMaster from '@/views/Contests/MasterContest_Page.vue'
import ContetstAll from '@/views/Contests/contestAllTab.vue'

import NewDetails from '@/views/Contests/NewDetails.vue'
import NewOne from '@/views/Contests/new1'
import NewTwo from '@/views/Contests/new2'
import NewThree from '@/views/Contests/new3'
import NewFour from '@/views/Contests/new4'
import NewFive from '@/views/Contests/new5'

import NewContests2 from '@/views/Contests/NewContests2.vue'
import Contests2_Details from '@/views/Contests/Contests2_Details'
import Contests2_Elig from '@/views/Contests/Contests2_Elig'
import Contests2_Extras from '@/views/Contests/Contests2_Extras'
import Contests2_Rewards from '@/views/Contests/Contests2_Rewards'
import Contests2_Rules from '@/views/Contests/Contests2_Rules'

import NewContests3 from '@/views/Contests/NewContests3.vue'
import Contests3_Details from '@/views/Contests/Contests3_Details'
import Contests3_Elig from '@/views/Contests/Contests3_Elig'
import Contests3_Extras from '@/views/Contests/Contests3_Extras'
import Contests3_Rewards from '@/views/Contests/Contests3_Rewards'
import Contests3_Rules from '@/views/Contests/Contests3_Rules'

import NewContests4 from '@/views/Contests/NewContests4.vue'
import Contests4_Details from '@/views/Contests/Contests4_Details'
import Contests4_Elig from '@/views/Contests/Contests4_Elig'
import Contests4_Extras from '@/views/Contests/Contests4_Extras'
import Contests4_Rewards from '@/views/Contests/Contests4_Rewards'
import Contests4_Rules from '@/views/Contests/Contests4_Rules'

import NewContests5 from '@/views/Contests/NewContests5.vue'
import Contests5_Details from '@/views/Contests/Contests5_Details'
import Contests5_Elig from '@/views/Contests/Contests5_Elig'
import Contests5_Extras from '@/views/Contests/Contests5_Extras'
import Contests5_Rewards from '@/views/Contests/Contests5_Rewards'
import Contests5_Rules from '@/views/Contests/Contests5_Rules'


import Active from '@/views/Contests/active'
import Completed from '@/views/Contests/completed'
import Overall from '@/views/Contests/overallranking'

//Contests Rewards
import ActiveRewards from '@/views/Contests/rewards'
import CompletedJoinClub from '@/views/Contests/joinclub.vue'

// clubs page
import ClubsMaster from '@/views/Clubs/ClubsMaster.vue'
import Allclubs from '@/views/Clubs/allclubs'
import MyClubs from '@/views/Clubs/myclubs'

import AllClubsMaster from '@/views/Clubs/allclubsMaster'
import AllClubsVideo from '@/views/Clubs/allclubsvideo'
import AllClubsBenefits from '@/views/Clubs/allclubsbenefits'
import AllClubsTest from '@/views/Clubs/allclubstest'
import AllClubsStory from '@/views/Clubs/allclubsstory'
//Pre sales
import PresalesMaster from '@/views/Presales/PresalesMaster.vue'

import AdvisorDetails from '@/views/Presales/AdvisorPitch/AdvisorDetails.vue'
import CustomerDetails from '@/views/Presales/CustomerPitch/CustomerDetails.vue'
import ResourceDetails from '@/views/Presales/ResourceCenter/ResourceDetails.vue'

import PresalesCustomerMaster from '@/views/Presales/CustomerPitch/MasterCustomer.vue'
// import NewTestimonials from '@/views/Presales/CustomerPitch/NewTestimonials.vue'

import Customer from '@/views/Presales/ResourceCenter/Customer'
import Sales from '@/views/Presales/ResourceCenter/Sales'

import Testimonials from '@/views/Presales/CustomerPitch/Testimonials'
import Presentation from '@/views/Presales/CustomerPitch/Presentation'
import Products from '@/views/Presales/CustomerPitch/Products'
import Calculator from '@/views/Presales/CustomerPitch/Calculator'
// import Advisors from '@/views/Presales/CustomerPitch/Adv'

import PresalesAdvisorMaster from '@/views/Presales/AdvisorPitch/MasterAdvisor.vue'
import NewTestAdvisor from '@/views/Presales/AdvisorPitch/NewTestAdvisor.vue'

import APTestimonials from '@/views/Presales/AdvisorPitch/Testimonials'
import About from '@/views/Presales/AdvisorPitch/About'
import Benifits from '@/views/Presales/AdvisorPitch/Benifits'
import Story from '@/views/Presales/AdvisorPitch/SuccessStory'
import Process from '@/views/Presales/AdvisorPitch/LicieningProcess'
import SalesManger from '@/views/Presales/AdvisorPitch/SalesManger'
import PresalesAdvisorView from '@/views/Advisers/presaleAdviserview.vue'



//Products
import ProductMaster from '@/views/Product/ProductMaster'
import Protection from '@/views/Product/Protection'
import Saving from '@/views/Product/Saving'
import Investment from '@/views/Product/Investment'
import Health from '@/views/Product/Health'
import Retirement from '@/views/Product/Retirement'
import Child from '@/views/Product/Child'
import Solution from '@/views/Product/SolutionForGroup'
import LeadTablepopup from '@/views/Product/BI_Tablepopup.vue'
// LEAD Forms
import NewLeadPageView from '@/views/Dashboard/NewLeadPageView'

import PersonalDetails from '@/views/Lead/PersonalDetails'
import ContactDetails from '@/views/Lead/ContactDetails'
import ProfessionalDetails from '@/views/Lead/ProfessionalDetails'
import Status from '@/views/Lead/Status'
import ProductDetails from '@/views/Lead/ProductDetails'
import ExistingDetails from '@/views/Lead/ExistingDetails'

import MenumobileVue from '@/views/MenumobileVue'
// LeadManagement

// not used
// import LeadManagementView from '@/views/LeadMangement/LeadManagementView'

import ApplicationViewPage from '@/views/Application/ApplicationViewPage'

import CFRListView from '@/views/CFR/CFRListView'
import MedicalCFR from '@/views/CFR/Medical-CFR'
import UploadCFR from '@/views/CFR/Upload-CFR'
import ExtraPremium from '@/views/CFR/ExtraPremium'
import ListofTPA from '@/views/CFR/List-of-TPA'
import UMSStatus from '@/views/CFR/UMS-Status'


import Advisers from '@/views/Advisers/AdvisorListView'

// APK For
import AdvisersDetails from '@/views/Advisers/AdvisorDetailsAPK'

import MyServicesViewPage from '@/views/MyServices/MyServicesViewPage'

import RenewalsProfileCardAPK from '@/views/Renewals/RenewalsProfileCardAPK'

// Footer Page
import HelpDesk from '@/views/Footer/HelpDesk'
import Disclaimer from '@/views/Footer/Disclaimer'
import PrivacyPolicy from '@/views/Footer/PrivacyPolicy'
import TermCondition from '@/views/Footer/TermCondition'
import FooterSection from '@/views/Footer/FooterSection'

// newlead

import LeadDetails from '@/views/TestLeadNew/TestLeadNewDetails.vue'
import ContactDeatailsLead from '@/views/TestLeadNew/ContactDetailsLead'
import PersonalDetailsLead from '@/views/TestLeadNew/PersonalDetailsLead'
import ProductDetailsLead from '@/views/TestLeadNew/ProductDetailsLead'
import ProfessionalDetailsLead from '@/views/TestLeadNew/ProfessionalDetailsLead'
import StatusLead from '@/views/TestLeadNew/StatusLead'
import ExistingInsuranceLead from '@/views/TestLeadNew/ExistingInsuranceLead'
import HistoryLead from '@/views/TestLeadNew/HistoryLead'
import leadmasterpage from '@/views/TestLeadNew/lead_master_View'
import LeadHistory from '@/views/TestLeadNew/LeadHistory'
import LeadHistoryMaster from '@/views/TestLeadNew/LeadHistoryMaster'



// Notification Pages routes

import AppNotifPage from '@/views/notifi/AppNotifPage'
import RenewalsNotifyPage from '@/views/notifi/RenewalsNotifyPage'
import AlertNotifyPage from '@/views/notifi/AlertNotifyPage'

import SearchPage from '@/views/Search-page/SearchListPage.vue'


import ExistInsurDialog from '@/views/TestLeadNew/ExistInsurDialog.vue'
import StatusDaialog from '@/views/TestLeadNew/StatusDialog.vue'


// Usama

import ProductDetailsPop from '@/components/Sales-Guid/pop-window.vue'
import ProductBrochers from '@/components/Sales-Guid/Brochers.vue'

//Abhi Popup
import EmployRecords from '@/views/OnBoarding/AdvisorFulfiment/EmploymentPopup/EmployRecords.vue'
import AgencyDetails from '@/views/OnBoarding/AdvisorFulfiment/EmploymentPopup/AgencyDetails.vue'

//shoaib CFR Master Child

import CfrMaster from '@/views/CFR/CFRListing/CFR-Master.vue'
import CfrAll from '@/views/CFR/CFRListing/CFR-All.vue'
import CfrFtnr from '@/views/CFR/CFRListing/CFR-Ftnr.vue'
import CfrUnderWriting from '@/views/CFR/CFRListing/CFR-UnderWriting.vue'

// shoaib Services Master child

import MasterService from '@/views/MyServices/MasterService.vue'
import ServiceAll from '@/views/MyServices/ServiceAll.vue'
import ServicesSelf from '@/views/MyServices/ServicesSelf.vue'
import ServicesCustomer from '@/views/MyServices/ServicesCustomer.vue'

// shoaib application customer

import ApplicationMaster from '@/views/Application/AppListing/ApplicationMaster.vue'
import ApplicationDraftProposal from '@/views/Application/AppListing/ApplicationDraftProposal.vue'
import ApplicationLogins from '@/views/Application/AppListing/ApplicationLogins.vue'
import ApplicationAll from '@/views/Application/AppListing/ApplicationAll.vue'
import ApplicationIssued from '@/views/Application/AppListing/ApplicationIssued.vue'
import ApplicationRejected from '@/views/Application/AppListing/ApplicationRejected.vue'




//salman AdvisorView
import AdvisorMaster from '@/views/Advisers/AdvisorMaster.vue'
import AdvisorAll from '@/views/Advisers/AdvisorAll.vue'
import AdvisorActive from '@/views/Advisers/AdvisorActive.vue'
import AdvisorInactive from '@/views/Advisers/AdvisorInactive.vue'

import AdvisorDetailsEdit from '@/views/Advisers/AdvisorDetailsEdit.vue'


import AdvisorDetailsPage from '@/views/Advisers/AdvisorDetailsPage.vue'

// salman RenewalList
import RenewalMaster from '@/views/Renewals/RenewalMaster.vue'
import RenewalAll from '@/views/Renewals/RenewalAll.vue'
import RenewalInforce from '@/views/Renewals/RenewalInForce.vue'
import RenewalLapsed from '@/views/Renewals/RenewalLapsed.vue'
import RenewalSurrender from '@/views/Renewals/renewalSurrender.vue'

//salman candidateList
import CandidateList from '@/views/Candidate/CandidateList.vue'
import candiAll from '@/views/Candidate/candiAll.vue'
import candiIncomplete from '@/views/Candidate/candiIncomplete.vue'
import candiSubmit from '@/views/Candidate/candiSubmit.vue'
import candiTraining from '@/views/Candidate/candiTraining.vue'
import candiPassed from '@/views/Candidate/candiPassed.vue'
import candiFail from '@/views/Candidate/candiFail.vue'
import candiReexam from '@/views/Candidate/candiReexam.vue'
import candiLicense from '@/views/Candidate/candiLicense.vue'

//Sub Presales PAge 
import subPresentation from '@/views/Sub_Presales/CustomerPitch/subPresentation'
import subCalculator from '@/views/Sub_Presales/CustomerPitch/subCalculator'
import subProducts from '@/views/Sub_Presales/CustomerPitch/SubProducts'
import subTestimonials from '@/views/Sub_Presales/CustomerPitch/subTestimonials'

import subAboutus from '@/views/Sub_Presales/AdvisorPitch/subAboutus'
import subBenifits from '@/views/Sub_Presales/AdvisorPitch/subBenifits'
import subLicensingProcess from '@/views/Sub_Presales/AdvisorPitch/subLicensingProcess'
import subSuccessStory from '@/views/Sub_Presales/AdvisorPitch/subSuccessStory'


// import Leads MsterPage

import LeadMasterPage from '@/views/LeadMangement/LeadMasterPage.vue'
import ConvertedLeads from '@/views/LeadMangement/ConvertedLeads.vue'

import AllLeads from '@/views/LeadMangement/AllLeads.vue'
import OpenLeads from '@/views/LeadMangement/OpenLeads.vue'
import ForToday from '@/views/LeadMangement/ForToday.vue'
import PendingProposal from '@/views/LeadMangement/PendingProposal.vue'

//Birthday
import BirthdayMaster from '@/views/Birthday/BirthdayMaster.vue'
import TodayBirthday from '@/views/Birthday/Today.vue'
import MonthBirthday from '@/views/Birthday/Month.vue'
import UpcommingBirthday from '@/views/Birthday/Upcomming.vue'

// Gender Tab
import GenderView from '@/views/genderView.vue'

//UAM(Admin) 
import OTPview from '@/views/UAM/OTPview.vue'
import LoginView from '@/views/UAM/LoginView.vue'
import ForgotPassword from '@/views/UAM/ForgotPassword.vue'
import ChangePassword from '@/views/UAM/ChangePassword.vue'

// notfound notification

import notificationNotfound from '@/components/notification-notfound.vue'




Vue.use(Router)

module.exports = new Router({
    // mode: 'history',

    routes: [

        {
            path: '/emprecd',
            name: 'EmployRecords',
            component: EmployRecords
        },
        {
            path: '/agencydet',
            name: 'AgencyDetails',
            component: AgencyDetails
        },
        {
            path: '/adv_edit',
            name: 'AdvisorDetailsEdit',
            component: AdvisorDetailsEdit
        },

        {
            path: '/send_email',
            name: 'TestAppEmailPop',
            component: TestAppEmailPop
        },


        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },

        {
            path: '/search_page',
            name: 'SearchPage',
            component: SearchPage
        },

        // Temporray
        {
            path: '/nHome',
            name: 'NewHome',
            component: NewHome
        },

        // Please Refer this
        {
            path: '/notifypage',
            name: 'NotificationList',
            component: NotificationList,
            children: [{
                path: 'appnotifypage',
                name: 'AppNotifPage',
                component: AppNotifPage
            }, {
                path: 'renenotifypage',
                name: 'RenewalsNotifyPage',
                component: RenewalsNotifyPage
            }, {
                path: 'alertnotipage',
                name: 'AlertNotifyPage',
                component: AlertNotifyPage
            }]
        }, {

            path: '/leadMaster',
            name: 'LeadMasterPage',
            component: LeadMasterPage,
            children: [{
                path: 'all_leads',
                name: 'AllLeads',
                component: AllLeads
            }, {
                path: 'openleads',
                name: 'OpenLeads',
                component: OpenLeads
            }, {
                path: 'fortoday',
                name: 'ForToday',
                component: ForToday
            }, {
                path: 'convertedleads',
                name: 'ConvertedLeads',
                component: ConvertedLeads
            }, {
                path: 'pendingproposal',
                name: 'PendingProposal',
                component: PendingProposal
            }]
        },

        //CFR Master Child
        {
            path: '/cfrmaster',
            name: 'CfrMaster',
            component: CfrMaster,
            children: [{
                path: 'cfrall',
                name: 'CfrAll',
                component: CfrAll
            }, {
                path: 'cfrFtnr',
                name: 'CfrFtnr',
                component: CfrFtnr
            }, {
                path: 'cfrUnderWriting',
                name: 'CfrUnderWriting',
                component: CfrUnderWriting
            }]
        },
        //Salman Advisorview

        // new routes added by usama
        {
            path: '/advisory_details',
            name: 'AdvisorDetailsPage',
            component: AdvisorDetailsPage
        },
        {
            path: '/advisorMaster',
            name: 'advisorMaster',
            component: AdvisorMaster,

            children: [{
                    path: 'advisorall',
                    name: 'advisorall',
                    component: AdvisorAll
                }, {
                    path: 'advisoractive',
                    name: 'advisorActive',
                    component: AdvisorActive
                }, {
                    path: 'advisorinactive',
                    name: 'advisorinactive',
                    component: AdvisorInactive
                },

            ]
        },

        // Salman RenewalList
        {
            path: '/RenewalMaster',
            name: 'renewalMaster',
            component: RenewalMaster,
            children: [{
                    path: 'renewalall',
                    name: 'renewalall',
                    component: RenewalAll
                }, {
                    path: 'renewalinforce',
                    name: 'renewalinforce',
                    component: RenewalInforce
                }, {
                    path: 'renewallapsed',
                    name: 'renewallapsed',
                    component: RenewalLapsed
                },
                {
                    path: 'renewalsurrender',
                    name: 'renewalsurrender',
                    component: RenewalSurrender
                },

            ]
        },
        // Salman CandidateList
        {
            path: '/candidatelist',
            name: 'CandidateList',
            component: CandidateList,
            children: [{
                    path: 'candiall',
                    name: 'candiAll',
                    component: candiAll,
                },
                {
                    path: 'candiincomplete',
                    name: 'candiIncomplete',
                    component: candiIncomplete,
                },
                {
                    path: 'candisubmit',
                    name: 'candiSubmit',
                    component: candiSubmit,
                },
                {
                    path: 'canditraining',
                    name: 'candiTraining',
                    component: candiTraining,
                },
                {
                    path: 'candipassed',
                    name: 'candiPassed',
                    component: candiPassed,
                },
                {
                    path: 'candifail',
                    name: 'candiFail',
                    component: candiFail,
                },
                {
                    path: 'candireexam',
                    name: 'candiReexam',
                    component: candiReexam,
                },
                {
                    path: 'candilicense',
                    name: 'candiLicense',
                    component: candiLicense,
                },
            ]
        },




        // shoaib service page

        {
            path: '/masterservice',
            name: 'MasterService',
            component: MasterService,
            children: [{
                    path: 'serviceall',
                    name: 'ServiceAll',
                    component: ServiceAll
                }, {
                    path: 'servicesself',
                    name: 'ServicesSelf',
                    component: ServicesSelf
                },
                {
                    path: 'servicescustomer',
                    name: 'ServicesCustomer',
                    component: ServicesCustomer
                },
            ]
        },

        // shoaib application customer
        {
            path: '/app_list_master',
            name: 'ApplicationMaster',
            component: ApplicationMaster,
            children: [{
                    path: 'app_all',
                    name: 'ApplicationAll',
                    component: ApplicationAll
                }, {
                    path: 'app_draft',
                    name: 'ApplicationDraftProposal',
                    component: ApplicationDraftProposal
                },
                {
                    path: 'app_login',
                    name: 'ApplicationLogins',
                    component: ApplicationLogins
                },
                {
                    path: 'app_issue',
                    name: 'ApplicationIssued',
                    component: ApplicationIssued
                },
                {
                    path: 'app_reject',
                    name: 'ApplicationRejected',
                    component: ApplicationRejected
                },
            ]
        },

        {

            path: '/dashboardTest',
            name: 'DashboardTest',
            component: DashboardTest
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/hometest',
            name: 'HomeTest',
            component: HomeTest
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/application',
            name: 'ApplicationView',
            component: ApplicationView
        },



        {
            path: '/master',
            name: 'Master',
            component: Master,
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched
                {
                    path: 'testapp',
                    default: TestApp,
                    component: TestApp
                },

                {
                    path: 'masterpay',
                    name: 'MasterPay',
                    component: MasterPay,
                    children: [
                        { path: 'onlinepayment', component: OnlinePay },
                        { path: 'chequepayment', component: ChequePay },
                        { path: 'linkpayment', component: LinkPay }, ,
                    ]
                },


                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                {
                    path: 'testpro',
                    name: 'PropTest',
                    component: PropTest,
                    children: [
                        { path: 'proposalpersonal', component: ProposalPersonal },
                        { path: 'proposalnominee', component: ProposalNominee },
                        { path: 'proposalfamily', component: ProposalFamily },
                        { path: 'proposalinsurance', component: ProposalInsurance },
                        { path: 'proposalmedical', component: ProposalMedical },
                        { path: 'proposalvernacular', component: ProposalVernacular },
                        { path: 'proposaldeclaration', component: ProposalDeclaration },
                        { path: 'proposalreport', component: ProposalReport },

                    ]
                },

                {
                    path: 'prepayview',
                    name: 'PrePay',
                    component: PrePay
                },



                {
                    path: 'masterdoc',
                    name: 'MasterDoc',
                    component: MasterDoc,
                    children: [
                        { path: 'addressdocument', component: AddressDoc },
                        { path: 'agedocument', component: AgeDoc },
                        { path: 'cdcdocument', component: CDCDoc },
                        { path: 'iddocument', component: IDDoc },
                        { path: 'incomedocument', component: IncomeDoc },
                        { path: 'photodocument', component: PhotoDoc },
                    ]
                },
            ]
        },
        {
            path: '/notifications',
            name: 'Notifications',
            component: Notifications
        },
        {
            path: '/maindash',
            name: 'MainDash',
            component: MainDash
        },
        // {
        //     path: '/home',
        //     name: 'Home',
        //     component: Home
        // },
        {
            path: '/news',
            name: 'News',
            component: News
        },
        {
            path: '/lnews',
            name: 'LinkNews',
            component: LinkNews
        },
        {
            path: '/lead',
            name: 'lead',
            component: lead
        },
        {
            path: '/benifi',
            name: 'leadbeni',
            component: leadbeni
        },
        {
            path: '/contact',
            name: 'leadcontat',
            component: leadcontat
        },
        {
            path: '/personal',
            name: 'leadpersonal',
            component: leadpersonal
        },
        {
            path: '/leadproduct',
            name: 'leadproduct',
            component: leadproduct
        },
        {
            path: '/professional',
            name: 'leadpro',
            component: leadpro
        },
        {
            path: '/status',
            name: 'leadstatus',
            component: leadstatus
        },
        {
            path: '/cfr',
            name: 'CFR',
            component: CFR
        },
        {
            path: '/sync',
            name: 'Sync',
            component: Sync
        },
        //Filters
        {
            path: '/filter',
            name: 'Filters',
            component: Filters
        },
        //Onborading

        //MAster Onboarding Pages
        {
            path: '/masteronboard',
            name: 'MasterOnBoard',
            component: MasterOnBoard,
            children: [


                // {
                //     path: '/codeofconduct',
                //     name: 'Code',
                //     component: Code
                // },

                {
                    path: 'onbreview',
                    default: Onreview,
                    component: Onreview
                },
                {
                    path: 'cfrlog',
                    name: 'CFRL',
                    component: CFRL
                },
                {
                    path: 'onbmasterdoc',
                    name: 'OnMasterDoc ',
                    component: OnMasterDoc,
                    children: [
                        { path: 'onbaddressdocument', component: OnAddressDoc },
                        { path: 'onbagedocument', component: OnAgeDoc },
                        { path: 'onedudocument', component: OnEduDoc },
                        { path: 'onpandocument', component: OnPanDoc },
                        { path: 'onphotodocument', component: OnPhotoDoc },
                        { path: 'onprofiledocument', component: OnProfileDoc }
                        // { path: 'onpassdocument', component: OnPassDoc },

                    ]
                },

                {

                    path: 'onbdocument',
                    name: 'OnDocument',
                    component: OnDocument
                },


                {
                    path: 'advisordetails',
                    name: 'Advisor',
                    component: Advisor,
                    children: [
                        { path: 'official', component: Official },
                        { path: 'onbpersonal', component: OnBoardPersonal },
                        { path: 'edubckg', component: EducationBack },
                        { path: 'empbckg', component: EmploymentBack },
                        { path: 'references', component: Ref },
                        { path: 'qscore', component: Score },
                        { path: 'prerecruit', component: PreRecruitment },

                    ]
                },
                {
                    path: 'advisordetails',
                    name: 'Advisor',
                    component: Advisor,
                    children: [
                        { path: 'official', component: Official },
                        { path: 'onbpersonal', component: OnBoardPersonal },
                        { path: 'edubckg', component: EducationBack },
                        { path: 'empbckg', component: EmploymentBack },
                        { path: 'references', component: Ref },
                        { path: 'qscore', component: Score },
                        { path: 'prerecruit', component: PreRecruitment },

                    ]
                },
                {
                    path: 'codedetails',
                    name: 'CocDetail',
                    component: CocDetail,
                    children: [
                        { path: 'codeofconduct', component: Code },
                        { path: 'codeagreement', component: OnAgreement },
                    ]
                },
            ]
        },

        //Raise Request
        {
            path: '/custreq',
            name: 'CustomerRequest',
            component: CustomerRequest
        },
        {
            path: '/masterRaiseReq',
            name: 'MasterRaisedRequest',
            component: MasterRaisedRequest
        },
        //status dailog popup
        {
            path: '/StatusDialog',
            name: 'StatusDialog',
            component: StatusDaialog
        },
        // Calendar
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: '/calendarday',
            name: 'CalendarDay',
            component: CalendarDay
        },


        {
            path: '/reviewevent',
            name: 'ReviewEvents',
            component: ReviewEvents
        },
        {
            path: '/reschedule',
            name: 'Reschedule',
            component: Reschedule
        },
        {
            path: '/createvent',
            name: 'CreateEvent',
            component: CreateEvent
        },
        //sub-presales

        {
            path: '/subpresentation',
            name: 'subPresentation ',
            component: subPresentation
        },
        {
            path: '/subcalculator',
            name: 'subCalculator ',
            component: subCalculator
        },
        {
            path: '/subproducts',
            name: 'subProducts ',
            component: subProducts
        },
        {
            path: '/subtestimonials',
            name: 'subTestimonials ',
            component: subTestimonials
        },
        {
            path: '/subaboutus',
            name: 'subAboutus ',
            component: subAboutus
        },
        {
            path: '/subbenifits',
            name: 'subBenifits ',
            component: subBenifits
        },
        {
            path: '/sublicensingprocess',
            name: 'subLicensingProcess ',
            component: subLicensingProcess
        },
        {
            path: '/subsuccesstory',
            name: 'subSuccessStory ',
            component: subSuccessStory
        },
        //Calculator

        {
            path: '/mastercalculator',
            name: 'Mastercalculator',
            component: Mastercalculator,
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched

                //                 
                {
                    path: 'calculatorhuman',
                    default: NeedCalculator,
                    component: NeedCalculator,
                },
                {
                    path: 'calculatorchild',
                    name: 'CalculatorChild',
                    component: CalculatorChild
                },

                {
                    path: 'calculatorretire',
                    name: 'CalculatorRetire',
                    component: CalculatorRetire
                },

                // { path: 'newthree', component: NewThree },
            ]
        },
        // salman
        {
            path: '/getquotePopup',
            name: 'GetQuotePopup',
            component: GetQuotePopup
        },

        //Contests Parent Child routes
        {
            path: '/mastercontests',
            name: 'ContestsMaster',
            component: ContestsMaster,
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched

                {
                    path: 'active',
                    name: 'Active',
                    component: Active
                },
                {
                    path: 'rewards',
                    name: 'ActiveRewards',
                    component: ActiveRewards
                },
                {
                    path: 'joinclub',
                    name: 'CompletedJoinClub',
                    component: CompletedJoinClub
                },

                {
                    path: 'completed',
                    name: 'Completed',
                    component: Completed
                },
                {
                    path: 'overall',
                    name: 'Overall',
                    component: Overall
                },
                {
                    path: 'contestmas',
                    name: 'ContetstAll',
                    component: ContetstAll
                },
                {
                    path: 'newdetails',
                    component: NewDetails,
                    children: [
                        { path: 'newone', component: NewOne },
                        { path: 'newtwo', component: NewTwo },
                        { path: 'newthree', component: NewThree },
                        { path: 'newfour', component: NewFour },
                        { path: 'newfive', component: NewFive },
                    ]
                },
                {
                    path: 'newcontests2',
                    component: NewContests2,
                    children: [
                        { path: 'contests2_details', component: Contests2_Details },
                        { path: 'contests2_elig', component: Contests2_Elig },
                        { path: 'contests2_extras', component: Contests2_Extras },
                        { path: 'contests2_rewards', component: Contests2_Rewards },
                        { path: 'contests2_rules', component: Contests2_Rules },
                    ]
                },
                {
                    path: 'newcontests3',
                    component: NewContests3,
                    children: [
                        { path: 'contests3_details', component: Contests3_Details },
                        { path: 'contests3_elig', component: Contests3_Elig },
                        { path: 'contests3_extras', component: Contests3_Extras },
                        { path: 'contests3_rewards', component: Contests3_Rewards },
                        { path: 'contests3_rules', component: Contests3_Rules },
                    ]
                },
                {
                    path: 'newcontests4',
                    component: NewContests4,
                    children: [
                        { path: 'contests4_details', component: Contests4_Details },
                        { path: 'contests4_elig', component: Contests4_Elig },
                        { path: 'contests4_extras', component: Contests4_Extras },
                        { path: 'contests4_rewards', component: Contests4_Rewards },
                        { path: 'contests4_rules', component: Contests4_Rules },
                    ]
                },
                {
                    path: 'newcontests5',
                    component: NewContests5,
                    children: [
                        { path: 'contests5_details', component: Contests5_Details },
                        { path: 'contests5_elig', component: Contests5_Elig },
                        { path: 'contests5_extras', component: Contests5_Extras },
                        { path: 'contests5_rewards', component: Contests5_Rewards },
                        { path: 'contests5_rules', component: Contests5_Rules },
                    ]
                },


            ]
        },
        //  Presales -Customer Pitch Parent Child Routes

        {
            path: '/masterpresales',
            name: 'PresalesMaster',
            component: PresalesMaster,
            children: [

                {
                    path: 'customerdetails',
                    default: CustomerDetails,
                    component: CustomerDetails,
                    children: [
                        { path: 'testimonials', component: Testimonials },
                        { path: 'presentation', component: Presentation },
                        { path: 'products', component: Products },
                        { path: 'calculator', component: Calculator },
                        { path: 'advisorview', name: 'Advisersviews', component: PresalesAdvisorView },
                    ]
                },
                {
                    path: 'advisordetail',
                    // default: AdvisorDetails,
                    component: AdvisorDetails,
                    children: [
                        { path: 'aptest', component: APTestimonials },
                        { path: 'about', component: About },
                        { path: 'benifits', component: Benifits },
                        { path: 'story', component: Story },
                        { path: 'process', component: Process },
                        { path: 'salesmanger', component: SalesManger },
                    ]
                },
                {
                    path: 'resourcedetails',
                    // default: ResourceDetails,
                    component: ResourceDetails,
                    children: [{
                            path: 'customer',
                            component: Customer
                        },
                        {
                            path: 'sales',
                            component: Sales
                        },
                    ]
                },


            ]
        },
        // Clubs Tab
        {
            path: '/clubsmaster',
            name: 'ClubsMaster',
            component: ClubsMaster,
            children: [{
                    path: 'allclubsmaster',
                    component: AllClubsMaster,
                    children: [{
                            path: 'allclubsvideo',
                            component: AllClubsVideo,
                        },
                        {
                            path: 'allclubsbenefits',
                            component: AllClubsBenefits,
                        },
                        {
                            path: 'allclubstest',
                            component: AllClubsTest,
                        },
                        {
                            path: 'allclubsstory',
                            component: AllClubsStory,
                        },
                    ]
                },
                {
                    path: 'allclubs',
                    component: Allclubs
                },
                {
                    path: 'myclubs',
                    component: MyClubs
                },
            ]
        },
        //Products
        {
            path: '/productmaster',
            name: 'ProductMaster',
            component: ProductMaster,
            children: [{
                    path: 'protection',
                    component: Protection
                },
                {
                    path: 'saving',
                    component: Saving
                },
                {
                    path: 'investment',
                    component: Investment
                },
                {
                    path: 'health',
                    component: Health
                },
                {
                    path: 'retirement',
                    component: Retirement
                },
                {
                    path: 'child',
                    component: Child
                },
                {
                    path: 'solution',
                    component: Solution
                }
            ]
        },

        // {
        //     path: '/newLeadPage',
        //     name: 'NewLeadPageView',
        //     component: NewLeadPageView
        // },
        {
            path: '/existing',
            name: 'ExistingDetails',
            component: ExistingDetails
        },

        // not used now

        // {
        //     path: '/leadmgmt',
        //     name: 'LeadManagementView',
        //     component: LeadManagementView
        // },

        {
            path: '/appview',
            // name: 'ApplicationViewPage',
            component: ApplicationViewPage
        },
        {
            path: '/cfrview',
            name: 'CFRListView',
            component: CFRListView
        },
        {
            path: '/medicalcfr',
            name: 'MedicalCFR',
            component: MedicalCFR
        },
        {
            path: '/extrapremium',
            name: 'ExtraPremium',
            component: ExtraPremium
        },
        //Upload CFR
        {
            path: '/masteruploadcfr',
            name: 'MasterUploadCFR ',
            component: MasterUploadCFR,
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched

                //                 
                {
                    path: 'addcfr',
                    component: AddressCFR,
                },
                {
                    path: 'agecfr',
                    component: AgeCFR
                },

                {
                    path: 'idcfr',
                    component: IDCFR
                },
                {
                    path: 'incomecfr',
                    component: IncomeCFR
                },
                {
                    path: 'photocfr',
                    component: PhotoCFR
                },



            ]
        },
        {
            path: '/uploadcfr',
            name: 'UploadCFR',
            component: UploadCFR
        },
        {
            path: '/listoftpa',
            name: 'ListofTPA',
            component: ListofTPA
        },
        {
            path: '/checkstatus',
            name: 'UMSStatus',
            component: UMSStatus
        },
        {
            path: '/advisorview',
            name: 'Advisers',
            component: Advisers
        },
        {
            path: '/advisorapk',
            name: 'AdvisersDetails',
            component: AdvisersDetails
        },
        {
            path: '/myservices',
            name: 'MyServicesViewPage',
            component: MyServicesViewPage
        },

        {
            path: '/renewals',
            name: 'RenewalsPageView',
            component: RenewalsPageView
        },
        {
            path: '/renedetilscard',
            name: 'RenewalsProfileCardAPK',
            component: RenewalsProfileCardAPK
        },

        {
            path: '/menumobile',
            name: 'MenumobileVue',
            component: MenumobileVue
        },
        {
            path: '/homeinside',
            // name: 'HomeInside',
            component: HomeInside
        },
        // Filter
        {
            path: '/mobilefilter',
            name: 'MobileFilters',
            component: MobileFilters
        },
        // Footer Page
        {
            path: '/helpdesk',
            name: 'HelpDesk',
            component: HelpDesk
        },
        {
            path: '/disclaimer',
            name: 'Disclaimer',
            component: Disclaimer
        },
        {
            path: '/privcy',
            name: 'PrivacyPolicy',
            component: PrivacyPolicy
        },
        {
            path: '/termcond',
            name: 'TermCondition',
            component: TermCondition
        },
        {
            path: '/fotersction',
            name: 'FooterSection',
            component: FooterSection
        },

        // New Lead
        {
            path: '/leadmasterpage',
            name: 'leadmasterpage',
            component: leadmasterpage,
            children: [{
                    path: 'leaddetails',
                    component: LeadDetails,
                    children: [
                        { path: 'personallead', component: PersonalDetailsLead },
                        { path: 'productlead', component: ProductDetailsLead },
                        { path: 'contactlead', component: ContactDeatailsLead },
                        { path: 'professionallead', component: ProfessionalDetailsLead },
                        { path: 'existingLead', component: ExistingInsuranceLead },

                    ],
                },
                { path: 'statuslead', component: StatusLead },
                {
                    path: 'leadhistorymaster',
                    component: LeadHistoryMaster,
                    children: [{ path: 'leadhistory', component: LeadHistory }]
                }
            ],


        },





        {
            path: '/existInsurDialog',
            name: 'ExistInsurDialog',
            component: ExistInsurDialog
        },

        // Added by @usama
        // This routing path is only used for 
        // apk not other type of aplications and in web it open on overlay

        {
            path: '/product_details',
            name: 'ProductDetailsPop',
            component: ProductDetailsPop
        },
        {
            path: '/product_brochers',
            name: 'ProductBrochers',
            component: ProductBrochers
        },
        {
            path: '/genderview',
            name: 'GenderView',
            component: GenderView,
        },
        //Birthday
        {
            path: '/birthdaymaster',
            name: 'BirthdayMaster',
            component: BirthdayMaster,
            children: [{
                    path: 'birthtoday',
                    component: TodayBirthday
                },
                {
                    path: 'birthmonth',
                    component: MonthBirthday
                }, {
                    path: 'birthupcome',
                    component: UpcommingBirthday
                }
            ]
        },

        {
            path: '/changepassword',
            name: 'chnagepassword',
            component: ChangePassword
        },

        {
            path: '/otpview',
            name: 'OTPview',
            component: OTPview
        },

        {
            path: '/loginview',
            name: 'LoginView',
            component: LoginView
        },
        {
            path: '/forgotpassword',
            name: 'ForgotPassword',
            component: ForgotPassword

        },
        {
            path: '/leadtablepopup',
            name: 'LeadTablepopup',
            component: LeadTablepopup

        },
        {
            path: '/proposal_Fmly_popup',
            name: 'Proposal_Fmly_popup',
            component: Proposal_Fmly_popup

        },
        {
            path: '/proposal_insurance_popup',
            name: 'Proposal_insurance_popup',
            component: Proposal_insurance_popup

        },

        {
            path: '/notificationnotfound',
            name: 'notificationNotfound',
            component: notificationNotfound
        },

        { path: '/', redirect: '/loginview' }

    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})