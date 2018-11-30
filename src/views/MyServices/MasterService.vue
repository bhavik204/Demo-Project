<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <scroller style="flex-direction:row" scroll-direction="horizontal">
            <div style="flex-direction:row;justify-content:space-between;align-items:center">
                <div>
                    <application-tab :tabs="tabs" :call-back-function="passDataToComponent">{{getActiveStatus}}</application-tab>
                </div>
                <div class="raise-req-btn-w visible-rais-btn" v-if="platform === 'Web'">
                    <p-button btn-name="Raise Request" icon-side="right" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></p-button>
                </div>
                <!-- <div v-if="platform !== 'Web'" style="margin-left:20px">
                    <p-button btn-width="300px" btn-name="Raise Request" icon-side="right" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></p-button>
                </div> -->
            </div>
        </scroller>
       
        <filter-view  class="hide-filter"></filter-view>
        <router-view></router-view>
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

        .raise-req-btn-w {
            width: 15%;
        }

        .visible-rais-btn {
            display: none;
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
import applicationTab from '../../components/Tabs/HeaderTab.vue'

import appFilter from '../../components/SortFilter/SF_Footer.vue'
import filterView from '../../components/SortFilter/FilterView.vue'
import PButton from '../../components/vx-primary-button/vx-primary-button'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
    created() {
        this.$store.commit('SET_PAGE_TITLE' , 'Service Corner');
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
                if (this.currentRoute == '/masterservice/serviceall') {
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


                if (this.currentRoute == '/masterservice/servicesself') {
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

                if (this.currentRoute == '/masterservice/servicescustomer') {
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
                    icon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                    Title: 'All',
                    counter: 4,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/navigation/apps_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                    link:'/masterservice/serviceall'
                        
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
                    link:'/masterservice/servicesself'
                },
                {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: 'For Customer',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:'/masterservice/servicescustomer'
                        
                }],

        
        }
    },

    components: {
        applicationTab,
        appFilter,
        filterView,
        PButton
    }
}
</script>