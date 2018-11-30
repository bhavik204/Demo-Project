<template>
        <div>
            <div class="master-page-wrapper">
                <div class="master-page-flex-row-width">
                    <div class="top-flexdirection-row master-page-margin-btm">
                        <div class="content-padding-box">
                            <text class="master-page-heder-font">CFR (3)</text>
                        </div>
                        <div class="content-padding-box">
                            <text class="master-page-heder-font clicable-link btn-cursor">View All CFR's</text>
                        </div>
                    </div>
                    <div class="master-page-flex-row" v-if="platform === 'Web'">
                        <div class="container-box-width master-data-bx-margin">
                            <app-cfr-notify :cfr-data-source="cfrNotificationList"></app-cfr-notify>
                        </div>
                        <div class="container-box-width master-data-bx-margin">
                            <app-cfr-notify :cfr-data-source="cfrNotificationList"></app-cfr-notify>
                        </div>
                    </div>

                    <div class="top-flexdirection-row master-page-margin-btm">
                        <div class="content-padding-box">
                            <text class="master-page-heder-font">Status Update (3)</text>
                        </div>
                        <div class="content-padding-box">
                            <text class="master-page-heder-font clicable-link btn-cursor">View All Applications</text>
                        </div>
                    </div>
                    <div class="master-page-flex-row">
                        <div class="container-box-width master-data-bx-margin">
                            <app-app-notify :app-data-source="appNotificationList"></app-app-notify>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script>
    
    import appCfrNotify from '../../components/notifi-compo/CFR-notif'
    import appAppNotify from '../../components/notifi-compo/app-notif'
    
    // apk
    import appNotifyApk from '../../components/notifi-compo/notify-apk.vue'
    
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        data: function() {
            return {
                platform: invalid,
                cfrNotificationList: [
                    {
                        label: 'Client Name',
                        data: 'Soham Meshram'
                    }, {
                        label: 'Client ID',
                        data: 'BRSMCU023'
                    }, {
                        label: 'Plan Name',
                        data: 'Increasing Income'
                    }, {
                        label: 'Login Date',
                        data: '01/02/2016'
                    }, {
                        label: 'Deadline',
                        data: '12/03/2016'
                    }
                ],
    
                appNotificationList: [
                    {
                        label: 'Client Name',
                        data: 'Soham Meshram'
                    }, {
                        label: 'Client ID',
                        data: 'BRSMCU023'
                    }, {
                        label: 'Plan Name',
                        data: 'Increasing Income'
                    }, {
                        label: 'Premium Amount',
                        data: '₹ 18,004'
                    }
                ]
            }
        },
        components: {
            appCfrNotify,
            appAppNotify,
            appNotifyApk
        },
      
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
    
        .container-box-width {
            margin-bottom: 20px;
        }
    
        @media (min-width: 320px) {
            .master-page-heder-font {
                font-size: 14px;
                font-family:robotoregular;
            }
            .clicable-link {
                color: rgb(52, 16, 248);
            }
            .content-padding-box {
                padding: 5px;
            }
            .master-page-margin-btm {
                margin-bottom: 10px;
                margin-top: 20px;
            }
            .container-box-width {
                width: 94%;
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
            .container-box-width {
                width: 100%;
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
            .container-box-width {
                width: 48%;
            }
            .btn-cursor {
                cursor: pointer;
            }
        }
    
    </style>
    