<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        
        <!-- <app-header v-if="platform === 'Web'"  :header-name="headerName"></app-header> -->
        
        <!-- <app-filter-view  v-if="platform === 'Web'"></app-filter-view> -->

        <!-- <app-sales-tabs></app-sales-tabs> -->
        <application-tab :tabs="tabs">{{getActiveStatus}}</application-tab>
        
        <filter-view class="hide-filter" ></filter-view>
        <scroller>
            <router-view></router-view>
        </scroller>
        <app-filter v-if="platform !== 'Web'"></app-filter>
        <app-filter class="hide-filter-mobile" v-if="platform === 'Web'"></app-filter>
        
       
    </div>

</template>


<style>
    .robotoregular {
        font-family: robotoregular;
    }
    
    .robotobold {
        font-family: robotobold;
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
        .hide-filter {
            display: none;
        }
        .hide-filter-mobile {
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
            color: #fff;
            font-family: robotoregular;
        }
        /*        .sales-drive-header {
            background-color: #3b371e;             
            color:#fff;
            height:50px;
        }

*/
        .nx-flex-direction {
            flex-direction: row;
        }
        .card-width-cfr {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        .hide-filter {
            display: inline-block
        }
        .hide-filter-mobile {
            display: none;
        }
    }
</style>

<script>
    import applicationTab from '../../../components/Tabs/HeaderTab.vue'
    import filterView from '../../../components/SortFilter/FilterView.vue'
    import appFilter from '../../../components/SortFilter/SF_Footer.vue'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'CFR');
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
                if (this.currentRoute == '/cfrmaster/cfrall') {
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


                if (this.currentRoute == '/cfrmaster/cfrFtnr') {
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

                if (this.currentRoute == '/cfrmaster/cfrUnderWriting') {
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
                    headerName: 'CFR List',
                    show: false,
                    tabs: [{


                            bgColor: '#3d3bee',
                            color: '#fff',
                            shade: '',
                            icon:  'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                            Title: 'All',
                            counter: 10,
                            active: false,
                            blackIcon:  'https://www.materialui.co/materialIcons/navigation/apps_black_192x192.png',
                            whiteIcon:  'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                            link: '/cfrmaster/cfrall'

                        }, {

                            bgColor: '#FFF',
                            color: '#000000',
                            shade: '',
                            icon:  'https://www.materialui.co/materialIcons/action/info_black_192x192.png',
                            Title: 'FTNR',
                            counter: 5,
                            active: false,
                            blackIcon:  'https://www.materialui.co/materialIcons/action/info_black_192x192.png',
                            whiteIcon:  'https://www.materialui.co/materialIcons/action/info_white_192x192.png',
                            link: '/cfrmaster/cfrFtnr'


                        }, {

                            bgColor: '#FFF',
                            color: '#000000',
                            shade: '',
                            icon: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                            Title: 'Underwriting',
                            counter: 5,
                            active: false,
                            blackIcon: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                            whiteIcon: 'https://www.materialui.co/materialIcons/image/edit_white_192x192.png',
                            link: '/cfrmaster/cfrUnderWriting'

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
                applicationTab,
                filterView,
                appFilter
            }
        
    }
</script>