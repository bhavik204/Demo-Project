<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        <!-- <app-header v-if="platform === 'Web'" :header-name="headerName"></app-header> -->
        
        <!-- <app-tab></app-tab> -->
        <application-tab :tabs="tabs" :call-back-function="passDataToComponent"></application-tab>
        <filter-view  class="hide-filter"></filter-view>
        <div class="my-serveces-compo-flex-direction my-serveces-compo-flex-flow-wrap" style="padding-top:10px">
            <div class="card-width-mservice">
                <!-- <text>{{data}}</text> -->
               <app-my-services-compo></app-my-services-compo>
            </div>  
            <div class="card-width-mservice">
                <!-- <text>{{data}}</text> -->
               <app-my-services-compo></app-my-services-compo>
            </div>     
            <!-- Dont Delete this line -->
            <div class="card-width-mservice">
            </div> 
           
        </div>
        <app-filter v-if="platform !== 'Web'"></app-filter>
        <app-filter class="hide-filter-mobile" v-if="platform === 'Web'"></app-filter>
    </div>

</template>


<style>
    .robotoregular {
        font-family:robotoregular;
        }
        .robotobold{
        font-family:robotobold;
        }
    /* .lead-wrapper  {
        background-color: #d1cfcf;
    } */
    
    /* .sales-drive-header {
        background-color: #3b371e;
        color: #fff;
        height: 80px;
    }
     */
    .my-serveces-compo-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .my-serveces-compo-flex-flow-wrap {
        flex-flow: wrap;
    }
    
    .card-width-mservice {
        width: 720px;
        margin-bottom: 10px;
    }
    
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */
        .card-width-mservice {
            width: 95%;
            margin-bottom: 0;
        }
        .hide-filter {
            display: none;
        }
        .hide-filter-mobile {
            display: inline-block;
        }
    }
    
    @media (min-width: 768px) {
        .my-serveces-compo-flex-direction {
            flex-direction: column;
        }
        .card-width-mservice {
            width: 95%;
            margin-bottom: 10px;
        }
    }
    
    @media (min-width: 992px) {
        .hide-filter {
            display: inline-block
        }
        .hide-filter-mobile {
            display: none;
        }

        /* Not used now */
        /* .header-font-size {
            font-size: 16px;
            font-weight: bold;
            color:#fff;
            font-family:robotoregular;
        } */
        /* .sales-drive-header {
            background-color: #3b371e;
            color: #fff;
            height: 50px;
        } */
        .my-serveces-compo-flex-direction {
            flex-direction: row;
        }
        .card-width-mservice {
            width: 48%;
            /* flex: 1; */
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

<script>
import appMyServicesCompo from '../../components/My-Services-List-Compo.vue'
import applicationTab from '../../components/Tabs/HeaderTab.vue'

import appFilter from '../../components/SortFilter/SF_Footer.vue'
import filterView from '../../components/SortFilter/FilterView.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

const iconSrc = 'https://www.materialui.co/materialIcons/action/';

const servicesdb = [
    {
        status: 'Closed',
        type: 'Profile',
        subType: 'DOB Change',
        createdOn: '22/04/2015',
        lastUpdatedOn: '14/05/2015',
        remarks: 'Address changed in the CRM',
        btnLabe: 'Track Request'
    }, {
        status: 'Closed',
        type: 'Profile',
        subType: 'DOB Change',
        createdOn: '22/04/2015',
        lastUpdatedOn: '14/05/2015',
        remarks: 'Address changed in the CRM',
        btnLabe: 'Track Request'
    }, {
        status: 'Closed',
        type: 'Profile',
        subType: 'DOB Change',
        createdOn: '22/04/2015',
        lastUpdatedOn: '14/05/2015',
        remarks: 'Address changed in the CRM',
        btnLabe: 'Track Request'
    }, {
        status: 'Closed',
        type: 'Profile',
        subType: 'DOB Change',
        createdOn: '22/04/2015',
        lastUpdatedOn: '14/05/2015',
        remarks: 'Address changed in the CRM',
        btnLabe: 'Track Request'
    }];
export default {
    created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Serveic Corner');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data() {
        return {
            platform: invalid,
            headerName: 'Services: My Requests',
            tabs:[
                {
                    bgColor: '#3d3bee',
                    color: '#fff',
                    shade: '',
                    icon: iconSrc+'supervisor_account_white_192x192.png',
                    Title: 'All',
                    counter: 55,
                    active: false,
                    blackIcon:iconSrc+ 'supervisor_account_black_192x192.png',
                    whiteIcon:iconSrc+ 'supervisor_account_white_192x192.png',
                    link:''
                        
                },
                {
                    
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon:'https://www.materialui.co/materialIcons/social/person_black_216x216.png',
                    Title: 'For Self',
                    counter: 2,
                    active: false,
                    blackIcon:'https://www.materialui.co/materialIcons/social/person_black_216x216.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/person_white_216x216.png',
                    link:''
                },
                {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: 'For Customer',
                    counter: 34,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:''
                        
                }],

                servicesData: []
        }
    },

    components: {
        appMyServicesCompo,
        applicationTab,
        appFilter,
        filterView
    },
    methods: {
        passDataToComponent() {
            this.servicesData = servicesdb;
            console.log(this.servicesData);
        }
    }
}
</script>