<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        <!-- <app-header v-if="platform === 'Web'"  :header-name="headerName"></app-header> -->
        <!-- <app-sales-tabs></app-sales-tabs> -->
        <application-tab :tabs="tabs"></application-tab>
        <filter-view class="hide-filter" ></filter-view>
<scroller>
        <div class="nx-flex-direction nx-flex-flow-wrap tab-wrap-width" style="padding-top:10px;">
            <div class="card-width-app">
                <app-application-compo></app-application-compo>
            </div> 
            <div class="card-width-app">
                <app-application-compo></app-application-compo>
            </div>
            <div class="card-width-app">
                <app-application-compo></app-application-compo>
            </div>
            <div class="card-width-app">
                <app-application-compo></app-application-compo>
            </div>
            <div class="card-width-app">
                <app-application-compo></app-application-compo>
            </div>
            <div class="card-width-app">
                <app-application-compo></app-application-compo>
            </div>
            <div class="card-width-app">
                <app-application-compo></app-application-compo>
            </div>
            
            <!-- Dont Delete this line -->
            <div class="card-width-app">
            </div> 
           
        </div>
</scroller>
        <app-filter :rlink="rlink" v-if="platform !== 'Web'"></app-filter>
        <app-filter :rlink="rlink" class="hide-filter-mobile" v-if="platform === 'Web'"></app-filter>
    </div>

</template>


<style>
    .list-fiter{
        align-items: flex-end;
    }
    .cal-icn {
  height: 40px;
  width: 40px;
  margin-top: 5px;
}
    .lead-wrapper  {
        /*background-color: #d1cfcf;*/
    }


    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }


    .nx-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }

    .card-width-app {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */
        .tab-wrap-width {
            width: 100%
        }

        .card-width-app {
            width: 95%;
            margin-bottom: 0;
        }
        /* .hide-filter{
            display:none;
        }
        .hide-filter-mobile{
            display: inline-block;
        } */

    }
    @media (min-width: 768px) {
        .nx-flex-direction {
            flex-direction: column;
        }

        .card-width-app {
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

        .nx-flex-direction {
            flex-direction: row;

        }
        .card-width-app {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        /* .hide-filter{
            display:inline-block
        }
        .hide-filter-mobile{
            display: none;
        } */
    }
</style>

<script>
import appHeader from '../../components/SalesDrive-Header.vue'
import appApplicationCompo from '../../components/ApplictionComponent.vue'
// import appSalesTabs from './Tabs'
import applicationTab from '../../components/Tabs/HeaderTab.vue'
import appFilter from '../../components/SortFilter/SF_Footer.vue'
import filterView from '../../components/SortFilter/FilterView.vue'
// const animation = weex.requireModule('animation')

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
    data() {
        return {
            headerName: 'Applications',
            filter :false,
            rlink:'/appview',
            tabs:[
                    {
                    
              
                    bgColor: '#3d3bee',
                    color: '#fff',
                    shade: '',
                    icon: iconSrc+'supervisor_account_white_192x192.png',
                    Title: 'All',
                    counter: 9,
                    active: false,
                    blackIcon:iconSrc+ 'supervisor_account_black_192x192.png',
                    whiteIcon:iconSrc+ 'supervisor_account_white_192x192.png',
                    link:'/applicationmaster/applicationall'
                      
                    },
                    {
                      
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon:iconSrc+ 'description_black_192x192.png',
                        Title: 'Draft Proposal',
                        counter: 3,
                        active: false,
                        blackIcon:iconSrc+ 'description_black_192x192.png',
                        whiteIcon: iconSrc+'description_white_192x192.png',
                        link:'/applicationmaster/applicationdraftproposal'
                        
                  
                    },
                    {
                      
                        bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc+'input_black_192x192.png',
                    Title: 'Logins',
                    counter: 2,
                    active: false,
                    blackIcon: iconSrc+'input_black_192x192.png',
                    whiteIcon: iconSrc+'input_white_192x192.png',
                    link:'/applicationmaster/applicationlogins'
                        
                    },
                    {
                   
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc+'class_black_192x192.png',
                        Title: 'Issued',
                        counter: 2,
                        active: false,
                        blackIcon: iconSrc+'class_black_192x192.png',
                        whiteIcon: iconSrc+'class_white_192x192.png',
                        link:'/applicationmaster/applicationissued'
                    },
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
                    link:'/applicationmaster/applicationrejected'
                    },
                
                

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
        }
    },
    methods:{
        filterMethod(){
            console.log("Filter Toggle")
            this.filter = !this.filter
        }
    },
    created() {
     


            

        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },

    components: {
        appApplicationCompo,
        applicationTab,
        appHeader,
        filterView,
        appFilter

    }
}
</script>


