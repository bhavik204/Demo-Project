<template>
    <div>
        <scroller>
        <div class="top-flexdirection-row master-page-margin-btm master-page-content-margin">
            <div class="content-padding-box">
                <text class="master-page-heder-font">CFR (4)</text>
            </div>
            <div class="content-padding-box" v-if="platform === 'Web'">
                <text class="master-page-heder-font clicable-link btn-cursor" @click.native="jump('/cfrmaster/cfrall')">View All CFR's</text>
            </div>
            <div class="content-padding-box" v-if="platform !== 'Web'">
                <text class="master-page-heder-font clicable-link btn-cursor" @click="jump('/cfrmaster/cfrall')">View All CFR's</text>
            </div>
        </div>

        <div class="ap-ntf-status-pad">
            <text class="master-page-heder-font ap-n-f-wi" style="color: #77a543">Open</text>
        </div>
        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(dataList, dataIndex) in cfrNotificationList" :key="dataIndex">
                <app-cfr-notify :cfr-data-source="dataList"></app-cfr-notify>
            </div>

            <div v-if="platform !== 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(dataList, dataIndex) in cfrDataForOpen" :key="dataIndex">
                <app-apk-compo :data-source="dataList"></app-apk-compo>
            </div>
          
        </div>

        <div class="ap-ntf-status-pad">
            <text class="master-page-heder-font ap-n-f-wi" style="color: #2c93de">Submitted</text>
        </div>
        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(dataList, dataIndex) in cfrDataSubmitted" :key="dataIndex">
                <app-cfr-notify :cfr-data-source="dataList"></app-cfr-notify>
            </div>
            

            <div v-if="platform !== 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(dataList, dataIndex) in cfrDataForSubm" :key="dataIndex">
                <app-apk-compo :data-source="dataList"></app-apk-compo>
            </div>
            
        </div>

        <div class="top-flexdirection-row master-page-margin-btm master-page-content-margin">
            <div class="content-padding-box">
                <text class="master-page-heder-font">Applications (6)</text>
            </div>
            <div class="content-padding-box" v-if="platform === 'Web'">
                <text class="master-page-heder-font clicable-link btn-cursor" @click.native="jump('/app_list_master/app_all')">View All Applications</text>
            </div>
            <div class="content-padding-box" v-if="platform !== 'Web'">
                <text class="master-page-heder-font clicable-link btn-cursor" @click="jump('/app_list_master/app_all')">View All Applications</text>
            </div>
        </div>
        <div class="ap-ntf-status-pad">
            <text class="master-page-heder-font ap-n-f-wi" style="color: #2c93de">Logins</text>
        </div>
        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(data, index) in appNotificationList" :key="index">
                <app-app-notify :app-data-source="data"></app-app-notify>
            </div>
            <!-- <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin">
                <app-app-notify :app-data-source="appNotificationList"></app-app-notify>
            </div> -->
            <div v-if="platform !== 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(listData, index) in appData" :key="index">
                <app-apk-compo :data-source="listData"></app-apk-compo>
            </div>
        </div>

        <div class="ap-ntf-status-pad">
            <text class="master-page-heder-font ap-n-f-wi" style="color:#77a543">Issued</text>
        </div>
        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(data, index) in appNotificationList" :key="index">
                <app-app-notify :app-data-source="data"></app-app-notify>
            </div>
            <!-- <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin">
                <app-app-notify :app-data-source="appNotificationList"></app-app-notify>
            </div> -->
            <div v-if="platform !== 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(listData, index) in appData" :key="index">
                <app-apk-compo :data-source="listData"></app-apk-compo>
            </div>
            
        </div>

        <div class="ap-ntf-status-pad">
            <text class="master-page-heder-font ap-n-f-wi" style="color:#d04949">Rejected</text>
        </div>
        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(data, index) in appNotificationList" :key="index">
                <app-app-notify :app-data-source="data"></app-app-notify>
            </div>
            <!-- <div v-if="platform === 'Web'" class="ap-nt-cont-box-width master-data-bx-margin">
                <app-app-notify :app-data-source="appNotificationList"></app-app-notify>
            </div> -->
            <div v-if="platform !== 'Web'" class="ap-nt-cont-box-width master-data-bx-margin" v-for="(listData, index) in appData" :key="index">
                <app-apk-compo :data-source="listData"></app-apk-compo>
            </div>
        </div>
        </scroller>
    </div>
</template>

<script>
    import appCfrNotify from '../../components/notifi-compo/CFR-notif'
    import appAppNotify from '../../components/notifi-compo/app-notif'
    import appApkCompo from '../../components/notifi-compo/notify-apk.vue'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
        components: {
            appCfrNotify,
            appAppNotify,
            appApkCompo
        },
        created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Serveic Corner');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        //     this.GET('getnotification/5a8c1e7d07151804a888eafc?notification_type=applications', res => {
        //    if( !res.ok ){
        //        self.getJsonpResult = "request failed";
        //        } else{
        //            console.log('get: ' + res);
        //            let data =  res.data.errMsg;
        //            console.log('Data from notification page', data);
                 
        //        }
        //    });
        },

        mounted() {

        var self = this;
        var identity = self.$store.state.agentDetails._id
           this.GET('getnotification/'+identity+'?notification_type=applications', res => {
               
           if( !res.ok ){
               self.getJsonpResult = "request failed";
               } else{
                   console.log('get: ' + res);
                   let data =  res.data.errMsg[0];
                   console.log('Data from notification page', data);

                   let db_struct = {};
                    
                   for(let i = 0; i < data.length; i++) {
                       if(data[i].notification_type === "applications"){
                            console.log('notification data',data[i].notification_type)
                            db_struct.clientName = data[i].ClientName;
                            console.log(db_struct.clientName)
                            db_struct.clientID = data[i].user_id;
                            db_struct.planName = data[i].PlanName;
                            db_struct.premiumAmount = data[i].PremiumAmount

                            self.appNotificationList.push(db_struct);
                            console.log('Data Pushed ', self.appNotificationList);
                        }
                db_struct = {};
                    //    if('CFRType' in  data[i]) {
                    //     //    please, dont tuoch it
                    //    } else {
                    //
                     //       
                     //  }
                    }  
                 
               }
           });

       },
        data: () => {
            return {
                platform: invalid,
                cfrNotificationList: [
                    {
                        data: [{
                                label: 'Client Name',
                                data: 'Soham Meshram'
                            }, {
                                label: 'Client ID',
                                data: 'BRSMCU020'
                            }, {
                                label: 'Plan Name',
                                data: 'Increasing Income'
                            }, {
                                label: 'CFR Type',
                                data: 'Medical'
                            }, {
                                label: 'Login Date',
                                data: '01/02/2016'
                            }, {
                                label: 'Deadline',
                                data: '12/03/2016'
                            }
                        ]
                    }, {
                        data: [{
                                label: 'Client Name',
                                data: 'Soham Datta'
                            }, {
                                label: 'Client ID',
                                data: 'BRSMCU021'
                            }, {
                                label: 'Plan Name',
                                data: 'Increasing Income'
                            }, {
                                label: 'CFR Type',
                                data: 'BOP'
                            }, {
                                label: 'Login Date',
                                data: '01/02/2016'
                            }, {
                                label: 'Deadline',
                                data: '12/03/2016'
                            }
                        ]
                    },
                ],

                cfrDataSubmitted: [
                    {
                        data: [{
                                label: 'Client Name',
                                data: 'Soham Meshram'
                            }, {
                                label: 'Client ID',
                                data: 'BRSMCU022'
                            }, {
                                label: 'Plan Name',
                                data: 'Increasing Income'
                            }, {
                                label: 'CFR Type',
                                data: 'Medical'
                            }, {
                                label: 'Login Date',
                                data: '01/02/2016'
                            }, {
                                label: 'Deadline',
                                data: '12/03/2016'
                            }
                        ]
                    }, {
                        data: [{
                                label: 'Client Name',
                                data: 'Rahul Soni'
                            }, {
                                label: 'Client ID',
                                data: 'BRSMCU023'
                            }, {
                                label: 'Plan Name',
                                data: 'Increasing Income'
                            }, {
                                label: 'CFR Type',
                                data: 'Medical'
                            }, {
                                label: 'Login Date',
                                data: '01/02/2016'
                            }, {
                                label: 'Deadline',
                                data: '12/03/2016'
                            }
                        ]
                    },
                ],

                // CFR APK DATA for OPEN temporary
                cfrDataForOpen: [
                    {
                        name: 'Soham Meshram',
                        id: 'BRSMCU020',
                        date: '01/02/2016',
                        value: 'Medical'
                    }, {
                        name: 'Soham Datta',
                        id: 'BRSMCU021',
                        date: '01/02/2016',
                        value: 'BOP'
                    }
                ],
                 cfrDataForSubm: [
                    {
                        name: 'Soham Meshram',
                        id: 'BRSMCU022',
                        date: '01/02/2016',
                        value: 'Medical'
                    }, {
                        name: 'Soham Datta',
                        id: 'BRSMCU023',
                        date: '01/02/2016',
                        value: 'Medical'
                    }
                ],

                // 
                appNotificationList: [],

                // appNotify APK value

                appData: [
                    {
                        name: 'Shabnam Pathan',
                        id: 'BRSMCU025',
                        date: '01/02/2016',
                        value: '₹ 18,004'
                    }, {
                        name: 'Shabnam Khan',
                        id: 'BRSMCU025',
                        date: '01/02/2016',
                        value: '₹ 18,014'
                    }
                ]

            }
        },
        methods: {
            jump(navigationLink) {
                if (this.$router) {
                    this.$router.push(navigationLink)
                }
            },
        }


    }
</script>

<style>
    .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
    .master-page-wraper {
        flex-direction: row;
        justify-content: center;
    } 

    .master-page-flex-row {
        flex-direction: row;
        flex-flow: wrap;
        flex-wrap: wrap;
    }

    .top-flexdirection-row {
        flex-direction: row;
    }

    .ap-nt-cont-box-width {
        width: 750px;
        /* margin-bottom: 20px; */
    }
    .master-page-heder-font {
        font-size: 34px;
        font-family:robotoregular;
    }
    .clicable-link {
        color: rgb(52, 16, 248);
    }
    .content-padding-box {
        padding: 10px;
    }

    .master-page-content-margin {
        margin: 15px;
    }

    /* For bold font */
    .ap-n-f-wi{
        font-weight: 700;
    }

    .ap-ntf-status-pad {
        padding: 20px;
    }
    @media (min-width: 320px) {
        .master-page-heder-font {
            font-size: 14px;
            font-family:robotoregular;
        }
        .master-page-content-margin {
            margin: 0;
        }

        .content-padding-box {
            padding: 5px;
        }
        .master-page-margin-btm {
            margin-bottom: 10px;
            margin-top: 20px;
        }

        /* Container width */
        .ap-nt-cont-box-width {
            width: 100%;
            margin-bottom: 20px;
        }

        /* These class is uesd to provide color and other property status */
        .ap-ntf-status-pad {
            padding: 10px;
        }
        .ap-ntf-status-wie-font {
            font-weight: 700;
        }
        
    }
    @media (min-width: 768px) {
        /* .master-page-flex-row-width {
            width: 95%;
        } */
        .master-data-bx-margin {
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 20px;
        }
        .ap-nt-cont-box-width {
            width: 100%;
            margin-bottom: 20px;
        }
        
    }
    @media (min-width: 992px) {
        /* .master-page-flex-row-width {
            width: 95%;
        } */
        .master-data-bx-margin {
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
        }
        .ap-nt-cont-box-width {
            width: 48%;
        }
        .btn-cursor {
            cursor: pointer;
        }
    }

</style>
