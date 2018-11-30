<template>
    <div class="lead-card-wrapper shadow-advisor">
        <!-- Web and Tab -->
        <div v-if="platform == 'Web'" class="advisor-compo-flx-row advisor-compo-flx-direction-change show-hide">
            <div class="nx-flex-column-advisor ">
                <div class="advisor-compo-flx-row items-align-center" style="background-color: #f9f9f96b;">
                    <div class="circle-wraper nx-flex-column-advisor items-align-center" >

                        <!-- In advisor page we display image -->
                        <div class="adprof-circle" v-if="noPic === true">
                            <image src="https://www.materialui.co/materialIcons/action/account_circle_white_192x192.png" class="adprof-circle-text-advisor prf-action-advisor" />
                        </div>

                        <image v-if="isPic === true" :src="profileIcon" class="adprof-circle" />
                        <text class="status-text large-text" :style="{color: statusColors.statusStyle}">{{advisorList.status}}</text>
                    </div>
                    <div class="box-advisor flex-box-advisor-size-01">
                        <div class="nx-flex-column-advisor">
                            <div>
                                <div class="advisor-compo-flx-row advisor-compo-flx-direction-change">
                                    <div class="box-advisor box-advisor-margin-btm ">
                                        <text class="data-value-text-advisor bold-text large-text">{{advisorList.name}}</text>
                                    </div>
                                    <div class="box-advisor box-advisor-margin-btm ">
                                        <text class="data-value-text-advisor">{{advisorList.id}}</text>
                                    </div>
                                    <div class="box-advisor flex-box-advisor-size-01 box-advisor-margin-btm ">
                                        <text class="data-value-text-advisor large-text">{{advisorList.planType}}</text>
                                    </div>
                                </div>
                            </div>
                            <div class="center-bottom-border ">
                                
                            </div>
                        
                            <div class="box-advisor advisor-compo-flx-row advisor-compo-flx-flw-wrp advisor-compo-flex-wrap">
                                <div class="box-advisor col-1-advisor">
                                    <text class="label-font-size">Email</text>
                                    <text class="data-value-text-advisor large-text">{{advisorList.email}}</text>
                                </div>
                                <div class="box-advisor col-1-advisor">
                                    <text class="label-font-size">Mobile No.</text>
                                    <text class="data-value-text-advisor large-text">{{advisorList.mobileNo}}</text>
                                </div>
                                <div class="box-advisor col-1-advisor">
                                    <text class="label-font-size">Target Achieved</text>
                                    <text class="data-value-text-advisor ">{{advisorList.targetAchived}}</text>
                                </div>
                                <div class="box-advisor md-btn-width-advisor">
                                    <div class="advisor-cutome-btn cursor-pointer-globle" @click.native="jump('/advisory_details')">
                                        <text class="advisor-btn-label large-text cursor-pointer-globle">View Details</text>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                      <!-- Action -->
                    <div class="action-bar-padding-advi">
                        <div class="nx-flex-column-advisor">
                            <div class="box-advisor action-round-button-advisor">
                                <image class="action-button-advisor cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_48x48.png"></image>
                            </div>
                            <div class="box-advisor action-round-button-advisor">
                                <image class="action-button-advisor cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>
                            </div>
                            <div class="box-advisor action-round-button-advisor">
                                <image class="action-button-advisor cursor-pointer-globle" src="https://www.materialui.co/materialIcons/notification/sms_black_48x48.png"></image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- Mbile Web -->

        <div v-if="platform == 'Web'" style="padding:20px" class="mobile-show">
            <div class="advisor-compo-flx-row items-align-center">
                <div class="box-advisor">
                    <!-- Avtar -->
                    <!-- <div class="adprof-circle">
                        <text class="adprof-circle-text-advisor">SH</text>
                    </div> -->
                    <div class="adprof-circle" v-if="noPic === true">
                        <image src="https://www.materialui.co/materialIcons/action/account_circle_white_192x192.png" class="adprof-circle-text-advisor prf-action-advisor" />
                    </div>
                    <image v-if="isPic === true" :src="profileIcon" class="adprof-circle" />
                </div>
                <div class="box-advisor flex-box-advisor-size-01" @click.native="jump('/advisory_details')">
                    <text class="user-name-text-advisor">{{advisorList.name}}</text>
                    <text class="status-text" :style="{color: statusColors.statusStyle}">{{advisorList.status}}</text>
                </div>
                <div class="box-advisor call-active cursor-pointer-globle" @click="call()">
                    <image class="action-button-advisor cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                </div>
            </div>
            
        </div>

        <!-- APK -->
        <div v-if="platform !== 'Web'" class="advisor-compo-flx-row items-align-center card-padding onActive center-bottom-border">
            <div class="box-advisor">
                <!-- Avtar -->
                <!-- <div class="adprof-circle">
                     <text class="adprof-circle-text-advisor">SH</text>
                </div> -->
                <div class="adprof-circle" v-if="noPic === true">
                    <image src="https://www.materialui.co/materialIcons/action/account_circle_white_192x192.png" class="adprof-circle-text-advisor prf-action-advisor" />
                </div>
                <image v-if="isPic === true" :src="profileIcon" class="adprof-circle" />
            </div>
            <div class="box-advisor flex-box-advisor-size-01" @click="jump('/advisory_details')">
                <text class="user-name-text-advisor">{{advisorList.name}}</text>
                <text class="status-text" :style="{color: statusColors.statusStyle}">{{advisorList.status}}</text>
            </div>
            <div class="box-advisor call-active cursor-pointer-globle" @click="call()">
                <image class="action-button-advisor cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_grey_192x192.png"></image>
            </div>
        </div>
    </div>
</template>


<script>

const navigator = weex.requireModule('navigator');

const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {
    props:{
            statusTitle: String,
            advisorList: Object
        },
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },

    mounted() {
        // Status Color changing
        if(this.advisorList.status === 'Active') {
            this.statusColors.statusStyle = this.statusColors.Inactive;
        } else {
            this.statusColors.statusStyle = this.statusColors.Active;
        }

        if(this.advisorList.pic !== '') {
            this.noPic = false;
            this.isPic = true;
            this.profileIcon = this.advisorList.pic;
        }
    },
    data(){
        return {
            statusColors: {
                Active: '#D04949',
                Inactive: '#54ad40',
                statusStyle: ''
            },
            profileIcon: '',
            noPic : true,
            isPic : false

        }
    },

    methods: {
        call() {
            modal.alert({
                message: 'Call Not Active'
            });
        },

        detailsWindow() {
            modal.alert({
                message: 'Comming Soon'
            });
        },

        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        }
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

    .lead-card-wrapper {
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 3px;
    }

    .card-padding {
        padding: 20px;
    }
         
    .box-advisor {
        padding-top: 10px;
        padding-bottom:10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .user-name-text-advisor {
        font-size: 32px;
        font-weight: 700px;
        margin-left: 20px;
        font-family:robotoregular;
    }

    .label-font-size {
        font-size: 22px;
        font-weight: 400;
        color: #9d9d9d;
        font-family:robotoregular;
    }

    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }

    .lead-card-wrapper {
        margin-left:0px;
        margin-right: 0px;
    }

    .text-color-white {
        color: #ffffff;
    }
    
    .text-keep-center {
        text-align: center;
    }
    .text-right {
         text-align: right;
    }
    .advisor-compo-flx-flw-wrp {
        flex-flow: wrap;
    }

    .items-align-center {
        align-items: center;
    }

    .items-justify-center {
        justify-content: center;
    }

    .self-align {
        align-self: flex-end;
    }

    .advisor-compo-flex-wrap {
        flex-wrap: wrap;
    }

    .advisor-compo-flx-row {
        flex-direction: row;
    }

    .nx-flex-column-advisor {
        flex-direction: column;
    }

    .advisor-compo-flx-row-revers {
        flex-direction: row-reverse;
    }

    .advisor-compo-flx-direction-change {
        flex-direction: column;
    }

    .flex-size-0-5 {
        flex: 0.1;
    }
    .flex-box-advisor-size-01 {
        flex: 1;
    }
    .flex-box-advisor-size-02 {
        flex: 2;
    }
    .flex-box-advisor-size-03 {
        flex: 3;
    }
    .flex-box-advisor-size-04 {
        flex: 4;
    }
    .flex-box-advisor-size-05 {
        flex: 5;
    }
    .flex-box-advisor-size-06 {
        flex: 6;
    }

    .adprof-circle {
        height: 100px;
        width: 100px;
        background-color: #ff581c;
        border-radius: 50px;
    }

    .onActive:active {
        background-color: #e2e2e2;
    }

    .call-active:active{
         background-color: #dfdfdf;
         border-radius: 60px;
    }

    .adprof-circle-text-advisor {
        position: absolute;
        top: 26%;
        left: 24%;
        color: white;
        font-size: 40px;
        font-weight: 700;
        font-family:robotoregular;
    }

    .status-text {
        font-size: 25px;
        font-weight: bold;
        color: #54ad40;
        /* position: relative;
        top: 0px;
        left: 0px; */
        margin-left: 20px;
        font-family:robotoregular;
    }


    .action-button-advisor {
        height: 80px;
        width: 80px;
        padding: 10px;
    }

    .center-bottom-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #ffffff;
        border-bottom-color: #e8e8e8;
    }

    .color-green {
        color: #77A543;
    }

    .col-1-advisor {
        width: 320px;
    }

    /* .col-2-advisor {
            width: 100%;
    } */

    .custom-btn {
        padding: 15px;
        background-color:#3b371e;
        border-radius: 7px;
        /* width: 140px; */
    }

    .btn-width {
        width: 200px;
    }

    /* profile icons width */
    .ad-vi-prf-icn-sze {
        width: 
    }
    
    @media (min-width: 320px) {
        .box-advisor {
            padding-top: 5px;
            padding-bottom:5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .user-name-text-advisor {
            font-size: 16px;
            font-weight: 400;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .show-hide {
            display: none;
        }
        .mobile-show {
            display: block;
        }

        .card-padding {
            padding: 0px;
        }

        .data-value-text-advisor {
            font-size: 12px;
            font-family:robotoregular;
        }

        .icon-size {
            height: 30px;
            width: 30px;
        }

        .shadow-advisor {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

        .col-1-advisor {
            width: 50%;
        }

        .col-2-advisor {
            width: 100%;
        }

        .label-font-size {
            font-size: 11px;
            font-weight: 400;
            color: #9d9d9d;
            font-family:robotoregular;
        }

        .adprof-circle {
            height: 36px;
            width: 36px;
            background-color: rgb(41, 113, 155);
            border-radius: 50%;
        }
        .adprof-circle-text-advisor {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 16px;
            font-weight: 500;
            font-family:robotoregular;
        }

        .status-text {
            font-size: 12px;
            font-weight: bold;
            color: #54ad40;
            position: relative;
            top: 0px;
            left: 0px;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .action-bar-padding-advi {
            padding-right: 10px;
            padding-left: 15px;
        }

        .action-button-advisor {
            height: 25px;
            width: 25px;
            padding: 10px;
        }

        .action-round-button-advisor {
            border-radius: 50%;
        }

        /* .btn-color {
            background-color: rgb(33, 34, 35);
             background-color: #FFFFFF; 
        } */

        .advisor-cutome-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
            cursor: pointer;
            border: 1.2px solid #000;
        }

        .advisor-btn-label {
            font-size : 11px;
            font-weight: 500;
            cursor: pointer;
            color: #000000;
            font-family:robotoregular;
        }

        /* .advisor-cutome-btn:active,.advisor-btn-label:active {
            background-color:rgb(5, 4, 4);
            color: #FFFFFF;
        } */

        .box-advisor-margin-btm {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .lead-card-wrapper {
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 3px;
        }
    }

    @media (min-width: 768px) {
        .advisor-compo-flx-direction-change {
            flex-direction: row;
        }

        .adprof-circle {
            height: 50px;
            width: 50px;
            background-color: rgb(105, 55, 151);
            border-radius: 50%;
        }

        .circle-wraper {
            padding: 15px;
        }

        .adprof-circle-text-advisor {
            font-size: 23px;
            font-weight: 500;
            font-family:robotoregular;
        }

        .status-text {
            font-size: 12px;
            font-weight: bold;
            color: #54ad40;
            position: relative; 
            top: 5px;
            /* left: 7px; */
            margin-left: 0px;
            font-family:robotoregular;
        }

        .col-1-advisor {
            width: 50%;
        }

        .col-2-advisor {
            width: 25%;
        }  

        .flex-size-0-5 {
            flex: 0.2;
        }

        .mobile-show {
            display: none;
        }

        .show-hide {
            display: block;
        }

        .prf-action-advisor {
            height: 50px;
            width: 50px;
        }

    }

    @media (min-width: 992px) {
        
        .advisor-compo-flx-direction-change {
            flex-direction: row;
        }

        .md-btn-width-advisor {
            width: 23%;
        }
    }
    
</style>


