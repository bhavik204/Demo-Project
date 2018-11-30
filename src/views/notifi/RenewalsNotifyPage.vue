<template>
    <div>
        <div class="top-flexdirection-row master-page-margin-btm ren-master-pge-cntnt-margin">
            <div class="content-padding-box ">
                <text class="master-page-heder-font">Upcoming Renewals (4)</text>
            </div>
            <div v-if="platform === 'Web'" class="content-padding-box">
                <text class="master-page-heder-font clicable-link btn-cursor" @click="jump('/RenewalMaster/renewalall')">View All Renewals</text>
            </div>
            <div  v-if="platform !== 'Web'" class="content-padding-box">
                <text class="master-page-heder-font clicable-link btn-cursor" @click="jump('/RenewalMaster/renewalall')">View All Renewals</text>
            </div>
        </div>

        <div class="ren-st-clr-cont-pding">
            <!-- renwls-font-weighted-bold come fromanother file -->
            <text class="master-page-heder-font renwls-font-weighted-bold" style="color: #77a543">Renewal - Due Tomorrow</text>
        </div>

        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform !== 'Web'" class="r-container-box-width master-data-bx-margin" v-for="(dataList, liIndex) in renwlsDataApk" :key="liIndex">
                <app-apk-compo :data-source="dataList"></app-apk-compo>
            </div>
        </div>

        <div class="ren-st-clr-cont-pding">
            <!-- renwls-font-weighted-bold come fromanother file -->
            <text class="master-page-heder-font renwls-font-weighted-bold" style="color: #e8bd55">Renewal - Due this Week</text>
        </div>

        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform !== 'Web'" class="r-container-box-width master-data-bx-margin" v-for="(dataList, liIndex) in renwlsDataApk" :key="liIndex">
                <app-apk-compo :data-source="dataList"></app-apk-compo>
            </div>
        </div>

        <div class="top-flexdirection-row master-page-margin-btm ren-master-pge-cntnt-margin">
            <div class="content-padding-box">
                <text class="master-page-heder-font">Renewals Overdue (4)</text>
            </div>
            <div class="content-padding-box">
                <text class="master-page-heder-font clicable-link btn-cursor">View All Renewals</text>
            </div>
        </div>

        <div class="ren-st-clr-cont-pding">
            <!-- renwls-font-weighted-bold come fromanother file -->
            <text class="master-page-heder-font renwls-font-weighted-bold" style="color:#77a543">In grance</text>
        </div>
        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform !== 'Web'" class="r-container-box-width master-data-bx-margin" v-for="(dataList, liIndex) in renwlsDataApk" :key="liIndex">
                <app-apk-compo :data-source="dataList"></app-apk-compo>
            </div>
        </div>

        <div class="ren-st-clr-cont-pding">
            <!-- renwls-font-weighted-bold come fromanother file -->
            <text class="master-page-heder-font renwls-font-weighted-bold" style="color: #70a1de">Lapsed</text>
        </div>

        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform === 'Web'" class="r-container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="renwalsList"></app-renewals-notify>
            </div>
            <div v-if="platform !== 'Web'" class="r-container-box-width master-data-bx-margin" v-for="(dataList, liIndex) in renwlsDataApk" :key="liIndex">
                <app-apk-compo :data-source="dataList"></app-apk-compo>
            </div>
        </div>
    </div>
</template>

<script>
    import appRenewalsNotify from '../../components/notifi-compo/Renewal-notif'
    import appApkCompo from '../../components/notifi-compo/notify-apk.vue'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
        created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Serveic Corner');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        data: () => {
            return {
                platform: invalid,
                renwalsList: [{
                    label: 'Client Name',
                    data: 'Soham Meshram'
                }, {
                    label: 'Client ID',
                    data: 'BRSMCU023'
                }, {
                    label: 'Plan Name',
                    data: 'Increasing Income'
                }, {
                    label: 'Installment Premium',
                    data: '₹ 18,004'
                }, {
                    label: 'Due Date',
                    data: '10/06/2018'

                }],

                renwlsDataApk: [
                    {
                        name: 'Paresh Soni',
                        id: 'BRSMCU013',
                        value: '₹ 18,004',
                        date: '10/06/2018'
                    }, {
                        name: 'Paresh Soni',
                        id: 'BRSMCU015',
                        value: '₹ 18,004',
                        date: '10/06/2018'
                    }
                ]
            }
        },
        components: { appRenewalsNotify, appApkCompo },
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

    .r-container-box-width {
        /* margin-bottom: 20px; */
        width: 750px;
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
    .ren-master-pge-cntnt-margin {
        margin: 15px;
    }

    .ren-st-clr-cont-pding {
        padding: 20px;
    }

    .renwls-font-weighted-bold {
        font-weight: 700;
    }

    @media screen and (min-width: 320px) {
        .master-page-heder-font {
            font-size: 14px;
            font-family:robotoregular;
        }
         .ren-master-pge-cntnt-margin {
            margin: 0px;
        }
        
        .content-padding-box {
            padding: 5px;
        }
        .master-page-margin-btm {
            margin-bottom: 10px;
            margin-top: 20px;
        }

        .r-container-box-width {
            width: 100%;
            margin-bottom: 20px;
        }
        
        /* Status color and paddings */

        .ren-st-clr-cont-pding {
            padding: 10px;;
        }
    }
    @media screen and (min-width: 768px) {
        /* .master-page-flex-row-width {
            width: 95%;
        } */
        .master-data-bx-margin {
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 20px;
        }
        .r-container-box-width {
            width: 100%;
            margin-bottom: 20px;
        }
        
    }
    @media screen and (min-width: 992px) {
        /* .master-page-flex-row-width {
            width: 95%;
        } */
        .master-data-bx-margin {
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
        }
        .r-container-box-width {
            width: 48%;
        }
        .btn-cursor {
            cursor: pointer;
        }
    }

</style>
