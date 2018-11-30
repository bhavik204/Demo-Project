<template>
    <div>
        <div class="top-flexdirection-row master-page-margin-btm alert-page-content-margin">
            <div class="content-padding-box">
                <text class="master-page-heder-font">Birthday Today (2)</text>
            </div>
            <div class="content-padding-box">
                <text class="master-page-heder-font clicable-link btn-cursor">Birthdays Today</text>
            </div>
        </div>
        <div class="master-page-flex-row">
            <div v-if="platform === 'Web'" class="container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="birthdayList"></app-renewals-notify>
            </div>
            <div v-if="platform === 'Web'" class="container-box-width master-data-bx-margin">
                <app-renewals-notify :renwals-data-source="advisorBirthday"></app-renewals-notify>
            </div>
            <div v-if="platform !== 'Web'" class="container-box-width master-data-bx-margin" v-for="(dataList, ind) in apkBirthData" :key="ind">
                <app-apk-compo :data-source="dataList"></app-apk-compo>
            </div>

        </div>

        <div class="top-flexdirection-row master-page-margin-btm alert-page-content-margin">
            <div class="content-padding-box">
                <text class="master-page-heder-font">Important (2)</text>
            </div>
            <div class="content-padding-box" v-if="platform === 'Web'">
                <text class="master-page-heder-font clicable-link btn-cursor" @click.native="jump('/news')">View News and Updates</text>
            </div>
            <div class="content-padding-box" v-if="platform !== 'Web'">
                <text class="master-page-heder-font clicable-link btn-cursor" @click="jump('/news')">View News and Updates</text>
            </div>
        </div>
        <div class="master-page-flex-row">
            <div class="container-box-width master-data-bx-margin">
                <app-important :news="news"></app-important>
            </div>
            <div class="container-box-width master-data-bx-margin">
                <app-important :news="news"></app-important>
            </div>
            <!-- <div v-if="platform !== 'Web'" class="container-box-width master-data-bx-margin">
                <app-apk-compo :data-source="birthdayList"></app-apk-compo>
            </div> -->
        </div>
    </div>
</template>

<script>
    import appImportant from  '../../components/notifi-compo/Important'
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
                birthdayList: [
                {
                    label: 'Client Name',
                    data: 'Soham Meshram'
                }, {
                    label: 'Client ID',
                    data: 'BRSMCU023'
                }, {
                    label: 'Mobile No.',
                    data: '9920202240'
                }, {
                    label: 'Date of Birth',
                    data: '12/03/1995'
                }],
                advisorBirthday: [
                {
                    label: 'Adviser Name',
                    data: 'Soham Meshram'
                }, {
                    label: 'Adviser ID',
                    data: 'BRSMCU023'
                }, {
                    label: 'Mobile No.',
                    data: '9920202240'
                }, {
                    label: 'Date of Birth',
                    data: '12/03/1995'
                }],

                apkBirthData: [
                    {
                        name: 'Afauqe Khan',
                        id: 'BRSMCU023',
                        value: '9920202240',
                        date: '12/03/1995'
                    }, {
                        name: 'Raees Shaikh',
                        id: 'BRSMCU023',
                        value: '9920202240',
                        date: '12/03/1995'
                    }
                ],

                news: 'New CFR Policy is now applicable on all cases logged-in after March 3, 2016'
            }
        },
        components: { appImportant, appRenewalsNotify, appApkCompo },
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

    .container-box-width {
        margin-bottom: 20px;
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
    .alert-page-content-margin {
        margin: 15px;
    }

    @media (min-width: 320px) {
        .alert-page-content-margin {
            margin: 0;
        }
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
            margin-bottom: 20px;
            width: 100%;
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
