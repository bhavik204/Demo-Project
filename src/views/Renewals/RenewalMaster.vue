<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        
        <application-tab :tabs="tabs">{{getActiveStatus}}</application-tab>
            <filter-view class="hide-filter-renewals" ></filter-view>
       <router-view></router-view>
          <app-filter :rlink="rlink"  v-if="platform !== 'Web'"></app-filter>
        <app-filter :rlink="rlink" class="hide-filter-renewals-mobile" v-if="platform === 'Web'"></app-filter>
            <!-- Dont Delete this line -->
            <div class="card-width-renwls">
            </div> 
           
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
          .hide-filter-renewals{
            display:none;
        }
        .hide-filter-renewals-mobile{
            display: inline-block;
        }

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
            .hide-filter-renewals{
            display:inline-block
        }
        .hide-filter-renewals-mobile{
            display: none;
        }
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

import filterView from '../../components/SortFilter/FilterView.vue'
import appFilter from '../../components/SortFilter/SF_Footer.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';
export default {
    created() {
        this.$store.commit('SET_PAGE_TITLE' , 'Renewals');

        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },


    computed: {
            getActiveStatus() {
                var me = this
                // this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                // this.i = (this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if (this.currentRoute == '/RenewalMaster/renewalall') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 0) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }


                if (this.currentRoute == '/RenewalMaster/renewalinforce') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 1) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }

                if (this.currentRoute == '/RenewalMaster/renewallapsed') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 2) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }

                if (this.currentRoute == '/RenewalMaster/renewalsurrender') {
                for (let ind = 0; ind < this.tabs.length; ind++) {
                    if (ind == 3) {
                        this.tabs[ind].bgColor = '#3d3bee',
                            this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                            this.tabs[ind].color = '#fff',
                            me.$router.push(this.tabs[ind].link)
                    } else {
                        this.tabs[ind].bgColor = '#fff',
                            this.tabs[ind].icon = this.tabs[ind].blackIcon,
                            this.tabs[ind].color = '#000000'
                    }
                }
            }
            }
            },
    data() {
        return {
            // headerName: 'Renewals',
            platform:invalid,
            tabs:[
                
                    {
                    
              
                    bgColor: '#3d3bee',
                    color: '#FFF',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                    Title: 'All',
                    counter: 6,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/navigation/apps_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                    link:'/RenewalMaster/renewalall'
                      
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
                        link:'/RenewalMaster/renewalinforce'
                        
                  
                    },
                    {
                      
                        bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/action/hourglass_full_black_192x192.png',
                    Title: 'Lapsed',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/action/hourglass_full_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/action/hourglass_full_white_192x192.png',
                    link:'/RenewalMaster/renewallapsed'
                        
                    },
                    {
                   
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/image/assistant_photo_black_192x192.png',
                        Title: 'Surrendered',
                        counter: 2,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/image/assistant_photo_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/image/assistant_photo_white_192x192.png',
                        link:'/RenewalMaster/renewalsurrender'
                    },
                   
                
                

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
        }
    },

    components: {
        appRenewalsList,
        appHeader,
        applicationTab,
        appFilter,
        filterView
    }
}
</script>


