<template>
    <div class="wrapper" style="background-color: #f7f7f7;">
            <div class="container-proposal">
                <div>
                    <main-tab  :tabs="tabs"></main-tab>
                    <side-tab :sTabs="sTabs"></side-tab>
                </div>
                <div style="flex:1">
                    <scroller>
                        <router-view></router-view>
                    </scroller>
                </div>
        </div>        
    </div>
</template>


<script>
    import mainTab from '../../../components/Tabs/MainTab.vue'
    import sideTab from '../../../components/Tabs/SideTab.vue'

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
            sideTab
        },
        data() {
            return {
                sTabs: [{
                        Title: 'Address Proof',
                        backgroundColor: '#fff',
                        fontWeight: 'bold',
                        link: '/masteruploadcfr/addcfr',
                          tick:'http://salesdrive.iorta.in/img/GrrenTick.png'
                    }, {
                        Title: 'Photo ID',
                        backgroundColor: '',
                        link: '/masteruploadcfr/photocfr',
                          tick:'http://salesdrive.iorta.in/img/GrrenTick.png'
                    }, {
                        Title: 'ID Proof',
                        backgroundColor: '',



                        link: '/masteruploadcfr/idcfr',
                          tick:'http://salesdrive.iorta.in/img/Alert.png'

                    }, {
                        Title: 'Income Proof',
                        backgroundColor: '',


                        link: '/masteruploadcfr/incomecfr',
                          tick:'http://salesdrive.iorta.in/img/Alert.png'
                    }, {
                        Title: 'Age Proof',
                        backgroundColor: '',


                        link: '/masteruploadcfr/agecfr',
                          tick:'http://salesdrive.iorta.in/img/Alert.png'
                    },


                ],
                tabs: [{
                        Title: 'Address Proof',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '#fff',

                        borderBottomWidth: '5px',
                        borderBottomColor: '#3b371e',
                        link: '/masteruploadcfr/addcfr'

                    }, {
                        Title: 'Photo ID',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteruploadcfr/photocfr'


                    }, {
                        Title: 'ID Proof',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteruploadcfr/idcfr'

                    }, {
                        Title: 'IncomeProof',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteruploadcfr/incomecfr'
                    }, {
                        Title: 'Age Proof',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteruploadcfr/agecfr'
                    },




                ]
            }
        }


    }
</script>

<style>
    .container-proposal {
        flex-direction: column;
    }
    
    @media only screen and (min-width: 320px) {
        .container-proposal {
            flex-direction: column;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .container-proposal {
            flex-direction: row;
        }
    }
</style>