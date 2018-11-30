<template>
    <div class="user master-page-wrapper">
        <application-tab :tabs="tabs" :counter="counter" >{{getActiveStatus}}</application-tab>
        <!-- <main-tab  :tabs="tabs"></main-tab> -->
        <scroller class="">
            <router-view   ></router-view>
            <!-- <router-view name="PropTest"></router-view>
            <router-view name="PrePay" ></router-view>
            <router-view name="Payment"></router-view>
            <router-view name="Document"></router-view> -->
        </scroller>
    </div>
</template>

<script>
    import mainTab from '../../components/Tabs/MainTab.vue'
    import applicationTab from '../../components/Tabs/HeaderTab.vue'
    var storage = weex.requireModule('storage');
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    export default {

        created() {
            console.log(this.$store.state.route.fullPath, 'Route')

            this.$store.commit('SET_PAGE_TITLE', 'Proposal');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            mainTab,
            applicationTab
        },
        computed: {
            getActiveStatus() {
                var me = this
                this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i = (this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if (this.currentRoute == '/master/testapp') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 0) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon;
                            this.tabs[ind].color = '#fff';
                            me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff';
                            this.tabs[ind].icon = this.tabs[ind].blackIcon;
                            this.tabs[ind].color = '#000000'
                        }
                    }
                }


                if (this.currentRoute == ('/master/testpro/proposalpersonal' || '/master/testpro/proposalreport')) {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 1) {
                            this.tabs[ind].bgColor = '#3d3bee';
                            this.tabs[ind].icon = this.tabs[ind].whiteIcon;
                            this.tabs[ind].color = '#fff';
                            me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff';
                            this.tabs[ind].icon = this.tabs[ind].blackIcon;
                            this.tabs[ind].color = '#000000'
                        }
                    }
                }
                if (this.currentRoute == '/master/prepayview') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 2) {
                            this.tabs[ind].bgColor = '#3d3bee';
                            this.tabs[ind].icon = this.tabs[ind].whiteIcon;
                            this.tabs[ind].color = '#fff';
                            me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff';
                            this.tabs[ind].icon = this.tabs[ind].blackIcon;
                            this.tabs[ind].color = '#000000'
                        }
                    }
                }
                if (this.currentRoute == '/master/masterpay/onlinepayment') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 3) {
                            this.tabs[ind].bgColor = '#3d3bee';
                            this.tabs[ind].icon = this.tabs[ind].whiteIcon;
                            this.tabs[ind].color = '#fff';
                            me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff';
                            this.tabs[ind].icon = this.tabs[ind].blackIcon;
                            this.tabs[ind].color = '#000000'
                        }
                    }
                }
                if (this.currentRoute == '/master/masterdoc/addressdocument') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 4) {
                            this.tabs[ind].bgColor = '#3d3bee';
                            this.tabs[ind].icon = this.tabs[ind].whiteIcon;
                            this.tabs[ind].color = '#fff';
                            me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff';
                            this.tabs[ind].icon = this.tabs[ind].blackIcon;
                            this.tabs[ind].color = '#000000'
                        }
                    }
                }



            }

        },
        data() {
            return {
                backgroundColor: '',
                status: false,
                i: '',
                notact: true,
                active: false,
                counter: false,

                tabs: [{


                    bgColor: '#fff',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'supervisor_account_black_192x192.png',
                    Title: 'Benefit Illustrator',
                    counter: 55,
                    active: false,
                    blackIcon: iconSrc + 'supervisor_account_black_192x192.png',
                    whiteIcon: iconSrc + 'supervisor_account_white_192x192.png',
                    link: '/master/testapp'

                }, {

                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'description_black_192x192.png',
                    Title: 'Proposal Fulfilment',
                    counter: 2,
                    active: false,
                    blackIcon: iconSrc + 'description_black_192x192.png',
                    whiteIcon: iconSrc + 'description_white_192x192.png',
                    link: '/master/testpro/proposalpersonal'


                }, {

                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'input_black_192x192.png',
                    Title: 'Pre-payment Review',
                    counter: 34,
                    active: false,
                    blackIcon: iconSrc + 'input_black_192x192.png',
                    whiteIcon: iconSrc + 'input_white_192x192.png',
                    link: '/master/prepayview'

                }, {

                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'class_black_192x192.png',
                    Title: 'Payment Options',
                    counter: 23,
                    active: false,
                    blackIcon: iconSrc + 'class_black_192x192.png',
                    whiteIcon: iconSrc + 'class_white_192x192.png',
                    link: '/master/masterpay/onlinepayment'
                }, {

                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/file/cloud_upload_black_192x192.png',
                    Title: 'Documents Upload',
                    counter: 60,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/file/cloud_upload_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/file/cloud_upload_white_192x192.png',
                    link: '/master/masterdoc/addressdocument'
                }]
            }
        }


    }
</script>

<style>
    .scroller-test-master {
        flex-direction: row;
    }
    
    .master-page-wrapper {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>