<template>
    <div class="wrapper" style="background-color: #f7f7f7;">
            <div class="container-lead-master">
                <div>
                    <main-tab  :tabs="tabs">{{getMainStatus}}</main-tab>
                    <side-tab :sTabs="sTabs">{{getActiveStatus}}</side-tab>
                </div>
                <div style="flex:1">
                    <!-- <scroller > -->
                        <router-view></router-view>
                    <!-- </scroller> -->
                </div>

            
        
        
        </div>        
    </div>
</template>

<script>
    import sideTab from '../../components/Tabs/SideTab.vue'
    import mainTab from '../../components/Tabs/MainTab.vue'
    import applicationTab from '../Application/ApplicationTab.vue'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            mainTab,
            applicationTab,
            sideTab
        },

        // Change 
        computed: {
            getActiveStatus() {
                var me = this
                this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i = (this.$store.getters.getIndex)

                // console.log(this.status)
                // console.log(this.i)
                if (this.currentRoute == '/leadmasterpage/leaddetails/personallead') {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if (ind == 0) {
                            this.sTabs[ind].actndve = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth = '5px';
                            this.sTabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].fontWeight = 'bold';
                        } else {
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth = '';
                            this.sTabs[ind].borderBottomColor = '';
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }


                if (this.currentRoute == '/leadmasterpage/leaddetails/contactlead') {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if (ind == 1) {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth = '5px';
                            this.sTabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].fontWeight = 'bold';
                        } else {
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth = '';
                            this.sTabs[ind].borderBottomColor = ''
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }
                if (this.currentRoute == '/leadmasterpage/leaddetails/professionallead') {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if (ind == 2) {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth = '5px';
                            this.sTabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.sTabs[ind].link)
                            this.sTabs[ind].fontWeight = 'bold';
                        } else {
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth = '';
                            this.sTabs[ind].borderBottomColor = ''
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }
                if (this.currentRoute == '/leadmasterpage/leaddetails/existingLead') {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if (ind == 3) {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth = '5px';
                            this.sTabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.sTabs[ind].link)
                            this.sTabs[ind].fontWeight = 'bold';
                        } else {
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth = '';
                            this.sTabs[ind].borderBottomColor = ''
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }
                if (this.currentRoute == '/leadmasterpage/leaddetails/productlead') {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if (ind == 4) {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth = '5px';
                            this.sTabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.sTabs[ind].link)
                            this.sTabs[ind].fontWeight = 'bold';
                        } else {
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth = '';
                            this.sTabs[ind].borderBottomColor = ''
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }
                if (this.currentRoute == '/leadmasterpage/leaddetails/leadhistory') {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if (ind == 5) {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth = '5px';
                            this.sTabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.sTabs[ind].link)
                            this.sTabs[ind].fontWeight = 'bold';
                        } else {
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth = '';
                            this.sTabs[ind].borderBottomColor = '';
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }
            },
            getMainStatus() {
                var me = this
                this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i = (this.$store.getters.getIndex)

                // console.log(this.status)
                // console.log(this.i)
                if (this.currentRoute == '/leadmasterpage/leaddetails/personallead') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 0) {
                            this.tabs[ind].actndve = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth = '5px';
                            this.tabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.tabs[ind].link);
                        } else {
                            this.tabs[ind].active = false;
                            this.tabs[ind].backgroundColor = '';
                            this.tabs[ind].borderBottomWidth = '';
                            this.tabs[ind].borderBottomColor = '';
                        }
                    }
                }


                if (this.currentRoute == '/leadmasterpage/leaddetails/contactlead') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 1) {
                            this.tabs[ind].active = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth = '5px';
                            this.tabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.tabs[ind].link);
                        } else {
                            this.tabs[ind].active = false;
                            this.tabs[ind].backgroundColor = '';
                            this.tabs[ind].borderBottomWidth = '';
                            this.tabs[ind].borderBottomColor = ''
                        }
                    }
                }
                if (this.currentRoute == '/leadmasterpage/leaddetails/professionallead') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 2) {
                            this.tabs[ind].active = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth = '5px';
                            this.tabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].active = false;
                            this.tabs[ind].backgroundColor = '';
                            this.tabs[ind].borderBottomWidth = '';
                            this.tabs[ind].borderBottomColor = ''
                        }
                    }
                }
                if (this.currentRoute == '/leadmasterpage/leaddetails/existingLead') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 3) {
                            this.tabs[ind].active = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth = '5px';
                            this.tabs[ind].borderBottomColor = '#3b371e';
                            me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].active = false;
                            this.tabs[ind].backgroundColor = '';
                            this.tabs[ind].borderBottomWidth = '';
                            this.tabs[ind].borderBottomColor = ''
                        }
                    }
                }
            }
        },
        data() {
            return {
                status: '',
                i: 0,

                sTabs: [{
                        Title: 'Personal Details',
                        backgroundColor: '',
                        link: '/leadmasterpage/leaddetails/personallead'


                    }, {
                        Title: 'Contact Details',
                        backgroundColor: '',
                        link: '/leadmasterpage/leaddetails/contactlead'

                    }, {
                        Title: 'Professional Details',
                        backgroundColor: '',
                        link: '/leadmasterpage/leaddetails/professionallead'
                    }, {
                        Title: 'Existing Insurance',
                        backgroundColor: '',
                        link: '/leadmasterpage/leaddetails/existingLead'
                    }, {
                        Title: 'Product Details',
                        backgroundColor: '',
                        link: '/leadmasterpage/leaddetails/productlead'
                    },


                ],
                tabs: [{
                        Title: 'Personal Details',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/leadmasterpage/leaddetails/personallead'


                    }, {
                        Title: 'Contact Details',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/leadmasterpage/leaddetails/contactlead'

                    }, {
                        Title: 'Professional Details',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/leadmasterpage/leaddetails/professionallead'
                    }, {
                        Title: 'Existing Insurance',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/leadmasterpage/leaddetails/existingLead'
                    }, {
                        Title: 'Product Details',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/leadmasterpage/leaddetails/productlead'
                    },

                ]

            }
        }


    }
</script>

<style>
    .container-lead-master {
        flex-direction: column;
    }
    
    @media only screen and (min-width: 320px) {
        .container-lead-master {
            flex-direction: column;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .container-lead-master {
            flex-direction: row;
        }
    }
</style>