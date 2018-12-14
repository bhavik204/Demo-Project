// Comment below line to configure Vuex on APK / IOS device
import Vue from 'vue'

import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}




if (WXEnvironment.platform == 'Web') {
    Vue.use(Vuex)
}


const VueInputMask = require('vue-inputmask').default

Vue.use(VueInputMask)
    // shownotificationtoast : true,  If dy default on page load you wants to see Notification toast , else it should be false
    // localStorage Stuff
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('vue_state');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('vue_state', serializedState);
    } catch (err) {
        console.error(`Something went wrong: ${err}`);
    }
}

//Add this in state after { loadState() ||

const store = new Vuex.Store({
    actions,
    mutations,
    state: loadState() || {
        // Messenger
        msg:'',
        messageList:[],
        agentDetails: [],
        proposalFmlyDetails: [],
        imagelink: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png',
        notificationTextColor: '#98874b',
        notificationTitle: 'New notification',
        notificationBody: 'Your first notification from salesdrive app',
        shownotificationtoast: true,
        headerName: 'Default Title',
        showArrow: true,

        editstat: false,
        postFlow: '',
        editStatus: true,
        proposalIdentityCollection: [],
        editStatus: true,
        proposalBindFlow: '',
        editstat: false,
        userId: '5b0911e1677c4bbf818eef18',
        proposal_id: '',
        applicationFormData: [],
        formData: [{
            childName: ''
        }],
        productLeadData: [],
        calendarData: [],
        calendarMainData: [],
        resndOtpData: {
            // mobileNo: '',
            // userId: '',
        },
        // Maked by usama
        leadFormData: [],
        leadsFormHandler: {
            dateTimeVisible: false,
            apntVisible: false,
            divshow: true,
            showChildFields: false,
            childTable: false,
            freshLead: true,
            /** Existing Lead Handler*/
            showLead: false,
            /** Existing Lead Hanler*/
            showfield: false,
            // POST and Put Method Identifire
            httpMethod: '',
            _leadId: ''
        },

        /**
         * This is used to display error code on diffrent places. it shown when response have errors 
         */
        errInResponse: {},

        // for testing purpos

        aadharNumber: '',
    },

    getters: {
        // ids of the items that should be currently displayed based on
        // current list type and current pagination
        getheaderTitle(state) {
            return state.headerName
        },
        getArrowStatus(state) {
            return state.showArrow
        },
        getEditStatus(state) {
            return state.editStatus
        },
        getAppFormData(state) {
            return state.applicationFormData
        },
        getCalendarFormData(state) {
            return state.calendarData
        },
        getCalendarMainFormData(state) {
            return state.calendarMainData
        },
        getFormData(state) {
            return state.formData
        },
        getUserId(state) {
            return state.userId
        },
        getLeadFormData(state) {
            return state.leadFormData
        },
        getLeadFormHandler(state) {
            return state.leadsFormHandler;
        },
        getProductLeaddata(state) {
            return state.productLeadData
        },
        getProposalFlowStatus(state) {
            return state.proposalBindFlow
        },
        getEditStatus(state) {
            return state.editstat;
        },
        getresendOtp(state) {
            return state.agentDetails;
        },
        getProposalFmly(state) {
            return state.proposalFmlyDetails;
        },
        getPostFlowStatus(state) {
            return state.postFlow;
        },
        getProposalIDCollection(state) {
            return state.proposalIdentityCollection
        },
        getResponseFromStore(state) {
            return state.errInResponse;
        },
        // Messenger
        getMessageList(state){
            return state.messageList;
        }
    }
})

store.watch(
    (state) => {
        console.log(state);
        saveState(state);
    }
)

export default store