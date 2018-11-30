<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        <!-- <app-header v-if="platform === 'Web'" :header-name="headerName"></app-header> -->
        <!-- <app-sales-tabs></app-sales-tabs> -->
        <application-tab :tabs="tabs"></application-tab>
       
        <div class="nx-flex-direction-advisor nx-flex-flow-wrap-advisor" style="">
            <div class="card-width-advisor">
                <app-advisor-compo></app-advisor-compo>
            </div> 
            <div class="card-width-advisor">
                <app-advisor-compo></app-advisor-compo>
            </div> 
            <div class="card-width-advisor">
                <app-advisor-compo></app-advisor-compo>
            </div> 
           
            
            <!-- Dont Delete this line -->
            <div class="card-width-advisor">
            </div> 
           
        </div>

        <app-filter v-if="platform !== 'Web'"></app-filter>
         
    </div>

</template>


<style>
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
    .lead-wrapper  {
        /*background-color: #d1cfcf;*/
    }


    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }

    .nx-flex-direction-advisor {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap-advisor {
        flex-flow: wrap;
    }

    .card-width-advisor {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */

        .card-width-advisor {
            width: 95%;
        }

    }
    @media (min-width: 768px) {
        .nx-flex-direction-advisor {
            flex-direction: column;
        }

        .card-width-advisor {
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

        .nx-flex-direction-advisor {
            flex-direction: row;

        }
        .card-width-advisor {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

<script>


import appHeader from '../../components/SalesDrive-Header.vue'
import appAdvisorCompo from '../../components/AdvisorListComponent'
// import appSalesTabs from './AdvisorTabs.vue'
import appFilter from '../../components/SortFilter/SF_Footer.vue'
import applicationTab from '../../components/Tabs/HeaderTab.vue'
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';
export default {
    data() {
        return {
            headerName: 'Applications',
            tabs:[
                    {
                    
              
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc+'supervisor_account_black_192x192.png',
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
                        icon:iconSrc+ 'description_black_192x192.png',
                        Title: 'Active',
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
                    Title: 'Inactive',
                    counter: 34,
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
                        Title: 'Issued',
                        counter: 23,
                        active: false,
                        blackIcon: iconSrc+'class_black_192x192.png',
                        whiteIcon: iconSrc+'class_white_192x192.png',
                        link:''
                    },
                    {
                  
                        bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    Title: 'Rejected',
                    counter: 60,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png',
                    link:''
                    },
                
                

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
        }
    },

    components: {
        appAdvisorCompo,
        applicationTab,
        appHeader,
       
        appFilter
    },

    created() {
        this.$store.commit('SET_PAGE_TITLE' , 'Advisors');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
}
</script>


