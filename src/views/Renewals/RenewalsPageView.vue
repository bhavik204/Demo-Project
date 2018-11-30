<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        <!-- <app-header v-if="platform === 'Web'" :header-name="headerName"></app-header> -->
        
        <!-- <app-tab></app-tab> -->
        <application-tab :tabs="tabs"></application-tab>
       
        <div class="nx-flex-direction-renwals nx-flex-flow-wrap-renw" style="padding-top:10px">
            <div class="card-width-renwls">
               <app-renewals-list></app-renewals-list>
            </div> 
            <div class="card-width-renwls">
               <app-renewals-list></app-renewals-list>
            </div> 
            
            <!-- Dont Delete this line -->
            <div class="card-width-renwls">
            </div> 
           
        </div>
        <app-filter v-if="platform !== 'Web'"></app-filter>
    </div>

</template>


<style>
    .lead-wrapper  {
        /*background-color: #d1cfcf;*/
    }


    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }

    .nx-flex-direction-renwals {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap-renw {
        flex-flow: wrap;
    }

    .card-width-renwls {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */

        .card-width-renwls {
            width: 95%;
            margin-bottom: 0;
        }

    }
    @media (min-width: 768px) {
        .nx-flex-direction-renwals {
            flex-direction: column;
        }

        .card-width-renwls {
            width: 95%;
            margin-bottom: 10px;
           
        }
    }
    @media (min-width: 992px) {
        .header-font-size {
            font-size: 16px;
            font-weight: bold;
            color:#fff;
        }

        .sales-drive-header {
            background-color: #3b371e;             
            color:#fff;
            height:50px;
        }

        .nx-flex-direction-renwals {
            flex-direction: row;

        }
        .card-width-renwls {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

<script>
import appHeader from '../../components/SalesDrive-Header.vue'
import appRenewalsList from '../../components/Renewals-List-compo'
// import appTab from './Tabs.vue'
import applicationTab from '../../components/Tabs/HeaderTab.vue'


import appFilter from '../../components/SortFilter/SF_Footer.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';
export default {
    created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Renewals');

        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data() {
        return {
            headerName: 'Renewals',
            tabs:[
                 {
                  
                        bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    Title: 'Rejected',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png',
                    link:''
                    },
                    {
                    
              
                    bgColor: '#3d3bee',
                    color: '#FFF',
                    shade: '',
                    icon: iconSrc+'supervisor_account_white_192x192.png',
                    Title: 'All',
                    counter: 2,
                    active: false,
                    blackIcon:iconSrc+ 'supervisor_account_black_192x192.png',
                    whiteIcon:iconSrc+ 'supervisor_account_white_192x192.png',
                    link:''
                      
                    },
                    {
                      
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon:iconSrc+ 'description_black_192x192.png',
                        Title: 'In Force',
                        counter: 2,
                        active: false,
                        blackIcon:iconSrc+ 'description_black_192x192.png',
                        whiteIcon: iconSrc+'description_white_192x192.png',
                        link:''
                        
                  
                    },
                    {
                      
                        bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc+'input_black_192x192.png',
                    Title: 'Lapsed',
                    counter: 2,
                    active: false,
                    blackIcon: iconSrc+'input_black_192x192.png',
                    whiteIcon: iconSrc+'input_white_192x192.png',
                    link:''
                        
                    },
                    {
                   
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc+'class_black_192x192.png',
                        Title: 'Surrendered',
                        counter: 2,
                        active: false,
                        blackIcon: iconSrc+'class_black_192x192.png',
                        whiteIcon: iconSrc+'class_white_192x192.png',
                        link:''
                    },
                   
                
                

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
        }
    },

    components: {
        appRenewalsList,
        appHeader,
        applicationTab,
        appFilter
    }
}
</script>


