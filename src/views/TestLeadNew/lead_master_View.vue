<template>
    <div class="user master-page-wrapper">

    <header-tab :tabs="tabs" :counter="counter">{{getActiveStatus}}</header-tab>  

        <scroller class="scroller-test-master">
            <router-view ></router-view>

            <!-- <router-view name="PropTest"></router-view>
            <router-view name="PrePay" ></router-view>
            <router-view name="Payment"></router-view>
            <router-view name="Document"></router-view> -->
        </scroller>
    </div>
</template>

<script>
    import headerTab from '../../components/Tabs/HeaderTab.vue'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';

    var bundleUrl = weex.config.bundleUrl;
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
        created() {
            // console.log(this.$store.state.route.fullPath)
            this.$store.commit('SET_PAGE_TITLE', 'Activity Management');

            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            headerTab
        },
        data() {
            return {
                active: false,
                counter: false,
                status: '',
                i:0,
                currentRoute: '',

                tabs: [{
                    bgColor: '#fff',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'supervisor_account_black_192x192.png',
                    Title: 'Status',
                    counter: 0,
                    active: false,
                    blackIcon: iconSrc + 'supervisor_account_black_192x192.png',
                    whiteIcon: iconSrc + 'supervisor_account_white_192x192.png',
                    link: '/leadmasterpage/statuslead'

                }, {

                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'description_black_192x192.png',
                    Title: 'Details',
                    counter: 2,
                    active: false,
                    blackIcon: iconSrc + 'description_black_192x192.png',
                    whiteIcon: iconSrc + 'description_white_192x192.png',
                    link: '/leadmasterpage/leaddetails/personallead'


                }, {

                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'history_black_192x192.png',
                    Title: 'Lead History',
                    counter: 2,
                    active: false,
                    blackIcon: iconSrc + 'history_black_192x192.png',
                    whiteIcon: iconSrc + 'history_white_192x192.png',
                    link: '/leadmasterpage/leadhistorymaster/leadhistory'


                }]
            }
        },
        computed: {
            getActiveStatus() {
                var me = this
                this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i = (this.$store.getters.getIndex)

                // console.log(this.status)
                // console.log(this.i)
                if (this.currentRoute == '/leadmasterpage/statuslead') {
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


                if (this.currentRoute == '/leadmasterpage/leaddetails/personallead') {
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
                if (this.currentRoute == '/leadmasterpage/leaddetails/leadhistory') {
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
        }
    }
</script>

<style>
    
    /* .scroller-test-master {
        flex-direction: row;
    }
     */

     
.master-page-wrapper {
/*    padding-left: 10px;
    padding-right: 10px;
*/}
</style>