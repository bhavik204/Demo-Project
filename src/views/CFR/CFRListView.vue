<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        
        <!-- <app-header v-if="platform === 'Web'"  :header-name="headerName"></app-header> -->
        
        <!-- <app-filter-view  v-if="platform === 'Web'"></app-filter-view> -->

        <!-- <app-sales-tabs></app-sales-tabs> -->
        <application-tab :tabs="tabs"></application-tab>
        
        <filter-view class="hide-filter" ></filter-view>
        
        <scroller>
            <div class="nx-flex-direction nx-flex-flow-wrap" style="">
                <div class="card-width-cfr">
                    <app-cfr-list statusTitle="Open"></app-cfr-list>
                </div> 
                <div class="card-width-cfr">
                    <app-cfr-list statusTitle="Re-Open"></app-cfr-list>
                </div> 
                <div class="card-width-cfr">
                    <app-cfr-list statusTitle="Re-Open"></app-cfr-list>
                </div> 
                <div class="card-width-cfr">
                    <app-cfr-list statusTitle="Submitted"></app-cfr-list>
                </div>  
            

                <!-- Dont Delete this line -->
                <div class="card-width-cfr">
                </div> 
            
            </div>
        </scroller>
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
.master-page-wrapper {
    padding-left: 10px;
    padding-right: 10px;
}    
/*    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }
*/
    .nx-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }
    .card-width-cfr {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */

        .card-width-cfr {
            width: 95%;
            margin-bottom: 0;
        }
        .hide-filter{
            display:none;
        }
        .hide-filter-mobile{
            display: inline-block;
        }

    }
    @media (min-width: 768px) {
        .nx-flex-direction {
            flex-direction: column;
        }

        .card-width-cfr {
            width: 100%;
        }
    }
    @media (min-width: 992px) {
        .header-font-size {
            font-size: 14px;
            font-weight: bold;
            color:#fff;
            font-family:robotoregular;
        }

/*        .sales-drive-header {
            background-color: #3b371e;             
            color:#fff;
            height:50px;
        }

*/        .nx-flex-direction {
            flex-direction: row;

        }
        .card-width-cfr {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        .hide-filter{
            display:inline-block
        }
        .hide-filter-mobile{
            display: none;
        }
    }
</style>

<script>
import appHeader from '../../components/SalesDrive-Header.vue'
import appCfrList from '../../components/CFRListUpdated.vue'
// import appSalesTabs from '../../components/SalesDriveTabs.vue'
import applicationTab from '../../components/Tabs/HeaderTab.vue'
import filterView from '../../components/SortFilter/FilterView.vue'
import appFilter from '../../components/SortFilter/SF_Footer.vue'
// import appSortMobileFilter from '../../components/SortFilter/SortMobile.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';
export default {
    created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'CFR');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data() {
        return {
            headerName: 'CFR List',
            show: false,
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
                        icon:iconSrc+ 'done_all_black_192x192.png',
                        Title: 'FTNR',
                        counter: 2,
                        active: false,
                        blackIcon:iconSrc+ 'done_all_black_192x192.png',
                        whiteIcon: iconSrc+'done_all_white_192x192.png',
                        link:''
                        
                  
                    },
                    {
                      
                        bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                    Title: 'Underwriting',
                    counter: 34,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/image/edit_white_192x192.png',
                    link:''
                        
                    },
                
                ]
        }
    },

    methods: {
        openFilter() {
            this.show = !this.show
        }
    },


    components: {
        appCfrList,
        applicationTab,
        appHeader,
       
        filterView,
        appFilter
    }
}
</script>


