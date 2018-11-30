<template>
    <div class="lead-card-wrapper shadow">
        <!-- Web and Tab -->
        <div v-if="platform == 'Web'" class="nx-flex-row nx-flex-direction-change show-hide">
            <div class="nx-flex-column ">
                <div class="nx-flex-row items-align-center" style="background-color: #f9f9f96b;">
                    <div class="circle-wraper nx-flex-column items-align-center">
                        <div class="profile-circle">
                            <text class="prfle-crcle-title-mser">SH</text>
                        </div>
                        <text class="status-text" :style="{ color: statusColors.statusStyle}">{{ serviceData.status }}</text>
                    </div>
                    <div class="box flex-box-size-01">
                        <div class="nx-flex-column">
                            <div>
                                <div class="nx-flex-row nx-flex-direction-change">
                                    <div class="box box-margin-btm ">
                                        <text class="my-ser-text bold-text">Advisor ID:{{ serviceData.Advisor }}</text>
                                    </div>
                                    <div class="box box-margin-btm ">
                                        <!-- Request number -->
                                        <text class="my-ser-text">{{ serviceData.id }}</text>
                                    </div>
                                    <div class="box flex-box-size-01 box-margin-btm ">
                                        <text class="my-ser-text">Policy No.:{{ serviceData.policyno}}</text>
                                    </div>
                                </div>
                            </div>
                            <div class="center-bottom-border ">
                                
                            </div>
                        
                            <div class="box nx-flex-row nx-flex-flow-wrap nx-flex-wrap">
                                <!-- <div class="box col-1">
                                    <text class="label-font-size">Request No.</text>
                                    <text class="my-ser-text ">13244</text>
                                </div> --> 
                                <!-- Ommitted order by himanshu sir -->
                                <div class="box col-1">
                                     <text class="my-ser-text ">Profile</text>
                                    <text class="label-font-size">{{ serviceData.type}}</text>
                                   
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size">Sub Type</text>
                                    <text class="my-ser-text ">{{ serviceData.subtype}}</text>
                                </div>
                                 <div class="box col-1">
                                    <text class="label-font-size">Created On</text>
                                    <text class="my-ser-text ">{{ serviceData.CreatedOn}}</text>
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size">Last Updated On</text>
                                    <text class="my-ser-text">{{ serviceData.LastUpdatedOn}}</text>
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size">Remarks</text>
                                    <text class="my-ser-text large-text">{{ serviceData.Remarks}}</text>
                                </div>
                                
                                <!-- ommited -order by himanshu sir -->
                                <!-- <div class="box col-1">
                                    <text class="label-font-size">Description</text>
                                    <text class="my-ser-text large-text">Billing address change to 22nd st Billing address change to 22nd stBilling address change to 22nd st</text>
                                </div> -->

                                <!-- <div class="box col-1">
                                </div>
                             -->
                                <div class="box service-md-btn-width">
                                    <div class="service-buttons" @click.native="openOverlayWindow">
                                        <text class="serv-btn-width global-black-text">{{ serviceData.btnLabe}}</text>
                                    </div>
                                </div>

                                <!-- overlay -->
                                <div v-show="platform === 'Web'" class="overlay-wraper" v-if="show === true">
                                    <div class="mservice-overlay-container">
                                        <div class="nx-flex-row page-header items-align-center ov-title-lft-pad">
                                            <text class="mservices-overlay-header-font-size  bold-font white-color ">Verification</text>
                                        </div>
                                        <div class="mservice-overlay-body">
                                            <vx-input-box
                                                vx-type="text"
                                                vx-label="Enter OTP"
                                                vx-placeholder="Please Enter"
                                                :vx-model="readOTP">
                                            </vx-input-box>
                                                
                                        </div>
                                        <!-- Action Bar -->
                                        <div class="footer-action-bar">
                                    
                                            <div class="services-popup-bwidth cursor-pointer-globle">
                                                <vx-secondary-btn
                                                btn-name="Cancel"
                                                btn-icon="https://www.materialui.co/materialIcons/content/clear_black_192x192.png"
                                                @click.native="closeOverlayWindow"></vx-secondary-btn>
                                            </div>
                                            <div class="services-popup-bwidth cursor-pointer-globle">
                                                <vx-primry-btn btn-name="Verify"
                                                btn-icon="https://www.materialui.co/materialIcons/action/verified_user_white_192x192.png"
                                                @click.native="closeOverlayWindow"></vx-primry-btn>
                                            </div>

                                            <!-- <div class="service-buttons" @click.native="closeOverlayWindow">
                                                <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"></image>                                    
                                                <text class="serv-btn-width global-black-text">Cancel</text>
                                            </div>
                                            <div class="service-buttons" style="margin-left:10px;" @click.native="closeOverlayWindow">
                                                <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"></image>                                    
                                                <text class="serv-btn-width global-black-text">Verify</text>
                                            </div> -->
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                      <!-- Action -->
                    <!-- <div class="action-bar-padding ">
                        <div class="nx-flex-column">
                            <div class="box action-round-button">
                                <image class="action-button" src="https://www.materialui.co/materialIcons/communication/email_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button">
                                <image class="action-button" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button">
                                <image class="action-button" src="https://www.materialui.co/materialIcons/notification/sms_black_48x48.png"></image>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            
        </div>

        <!-- Mbile Web -->

        <div v-if="platform == 'Web'" style="padding:20px" class="mobile-show">
            <div class="nx-flex-row items-align-center">
                <div class="box">
                    <!-- Avtar -->
                    <div class="profile-circle">
                        <text class="prfle-crcle-title-mser">SS</text>
                    </div>
                </div>
                <div class="box flex-box-size-01" @click.native="openOverlayWindow">
                    <!-- <text class="user-name-text">Shruti Shrivastava</text> -->
                    <text class="user-name-text"> {{ serviceData.Advisor }}</text>
                    <text class="status-text " :style="{ color: statusColors.statusStyle}">{{ serviceData.status }}</text>
                </div>
                <div class="box call-active" @click="call()">
                    <image class="action-button" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                </div>
            </div>
            
        </div>

        <!-- APK -->
        <div v-if="platform !== 'Web'" class="nx-flex-row items-align-center card-padding onActive" @click="openMask()">
            <div class="box">
                <!-- Avtar -->
                <div class="profile-circle">
                     <text class="prfle-crcle-title-mser">SS</text>
                </div>
            </div>
            <div class="box flex-box-size-01">
                <text class="user-name-text">{{ serviceData.Advisor }}</text>
                <text class="status-text" :style="{ color: statusColors.statusStyle}">{{ serviceData.status }}</text>
            </div>
             <!-- Apk Overlay -->
            <div v-if="platform !== 'Web'" class="">
                <wxc-mask  
                        height="470"
                        width="550"
                        border-radius="0"
                        duration="200"
                        mask-bg-color="#FFFFFF"
                        :has-animation="hasAnimation"
                        :has-overlay="true"
                        :show-close="true"
                        :show="weexOverlay"
                        @wxcMaskSetHidden="wxcMaskSetHidden">
                        <div class="content" style="padding: 25px;">
                               <div class="page-header items-justify-center " style="background-color: #FFF;">
                                    <text class="serv-btn-width page-heder-title " style="color:#000;">Verification</text>
                               </div>

                               <div class="mservice-overlay-body" style="margin-top: 10px">
                                    <vx-input-box
                                        vx-type="text"
                                        vx-label="Enter OTP"
                                        vx-placeholder=""
                                        :vx-model="readOTP">
                                    </vx-input-box>

                                    <div class="cursor-pointer-globle">
                                        <text class="text cursor-pointer-globle" style="color: #3b371e">Resend OTP</text>
                                    </div>

                                    <div class="nx-flex-row" style="margin-top: 50px;margin-left: 80px;">
                                        <div class="service-buttons" style="width: 200px;" @click="wxcMaskSetHidden">
                                            <!-- <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"></image>                                     -->
                                            <text class="serv-btn-width cursor-pointer-globle" style="color: #3b371e">CANCEL</text>
                                        </div>
                                        <div class="service-buttons" style="margin-left:5px;width: 200px;" @click="wxcMaskSetHidden">
                                            <!-- <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"></image>                                     -->
                                            <text class="serv-btn-width cursor-pointer-globle" style="color: #3b371e">VERIFY</text>
                                        </div>

                                        <div class="services-popup-bwidth cursor-pointer-globle">
                                                <vx-secondary-btn
                                                btn-name="Cancel"
                                                btn-icon="https://www.materialui.co/materialIcons/content/clear_black_192x192.png"
                                                @click.native="closeOverlayWindow"></vx-secondary-btn>
                                            </div>
                                            <div class="services-popup-bwidth cursor-pointer-globle">
                                                <vx-primry-btn btn-name="Verify"
                                                btn-icon="https://www.materialui.co/materialIcons/action/verified_user_white_192x192.png"
                                                @click.native="closeOverlayWindow"></vx-primry-btn>
                                            </div>


                                    </div>
                                </div>
                              </div>
                </wxc-mask>
            </div>
            <div class="box call-active" @click="call()">
                <image class="action-button" src="https://www.materialui.co/materialIcons/communication/phone_grey_192x192.png"></image>
            </div>
        </div>
    </div>
</template>


<script>

import { WxcMask } from 'weex-ui'

import vxInputBox from './vx-input-box/vx-input-box'
import vxPrimryBtn from './vx-primary-button/vx-primary-button'
import vxSecondaryBtn from './vx-primary-button/vx-scondary-button'

const navigator = weex.requireModule('navigator');

const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {

     // This props is used for tempory for open files only : should be changed 
    props: {
        statusTitle: String,
        serviceData: Object
    },
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }        
    },
         mounted() {
        // Status Color changing
        if(this.serviceData.status === 'Close') {
            this.statusColors.statusStyle = this.statusColors.Close;
        } else {
            this.statusColors.statusStyle = this.statusColors.WIP;
        }
    },

    data() {
        return {
// for dynamic color
            statusColors: {
            Close: '#D04949',
            WIP: '#2C93DE',
            statusStyle: ''
                 },
                 //here
            platform: invalid,
            show: false,
            weexOverlay: false,
            hasAnimation : false,
            readOTP: '',

            retriveData: {
                status: '',
                type: '',
                subType: '',
                createdOn: '',
                lastUpdatedOn: '',
                remarks: '',
                btnLabe: ''
            }
        }
    },
    
    methods: {
        openOverlayWindow () {
            this.show = true;
        },
        closeOverlayWindow () {
            this.show = false;
        },

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
        openMask (event) {
            this.weexOverlay = true;
            this.hasAnimation = true;
        },

        wxcMaskSetHidden () {
            this.weexOverlay = false;
        }

    },
    components: {
        WxcMask, vxInputBox,
        vxPrimryBtn,
        vxSecondaryBtn
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
         
    .box {
        padding-top: 10px;
        padding-bottom:10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .page-header {
        height: 100px;
        background-color: #3b371e;
        top: 0px;
    }

    .page-heder-title {
        font-size: 35px;
        color:white;
        font-family:robotoregular;
    }

    .my-ser-text {
        font-size: 24px;
        font-family:robotoregular;
    }

     .large-text {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
    }

    .user-name-text {
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
    .nx-flex-flow-wrap {
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

    .nx-flex-wrap {
        flex-wrap: wrap;
    }

    .nx-flex-row {
        flex-direction: row;
    }

    .nx-flex-column {
        flex-direction: column;
    }

    .nx-flex-row-revers {
        flex-direction: row-reverse;
    }

    .nx-flex-direction-change {
        flex-direction: column;
    }

    .flex-size-0-5 {
        flex: 0.1;
    }
    .flex-box-size-01 {
        flex: 1;
    }
    .flex-box-size-02 {
        flex: 2;
    }
    .flex-box-size-03 {
        flex: 3;
    }
    .flex-box-size-04 {
        flex: 4;
    }
    .flex-box-size-05 {
        flex: 5;
    }
    .flex-box-size-06 {
        flex: 6;
    }

    .profile-circle {
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

    .prfle-crcle-title-mser {
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

    .action-button {
        height: 80px;
        width:  80px;
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

    .col-1 {
        width: 320px;
    }

    /* .col-2 {
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

    .bold-font {
        font-weight: bold;
        font-family:robotoregular;
    }

    .white-color {
        color: #FFFFFF;
    }

    /* .input {
        background-color: #fff;
        padding: 15px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        margin-bottom: 30px;
    } */

     .form-labels {
        font-size: 30;
        color: #a5a5a5;
        font-family:robotoregular;
    }

    .input:focus {
        border-bottom-color: #e90a85;
        border-width: 4px;
    }

    .mservice-overlay-body {
        
        /* background: red; */
        /* overflow: auto; */
        padding: 25px;
    }

     .btn-color {
        background-color: rgb(33, 34, 35);
    }

    .service-buttons {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 88px;
        
    }

    .serv-btn-width {
        font-size : 30px;
        font-weight: 700;
        
        font-family:robotoregular;
        /* color:#fff; */
    }

    .service-buttons:active {
        background-color:rgb(231, 231, 231);
    }
    .service-md-btn-width {
        width: 300px;
    }
    
    @media (min-width: 320px) {
        .box {
            padding-top: 5px;
            padding-bottom:5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .user-name-text {
            font-size: 14px;
            font-weight: 400;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .ov-title-lft-pad {
            padding-left: 10px;
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

        .my-ser-text {
            font-size: 12px;
            font-family:robotoregular;
        }

        .icon-size {
            height: 30px;
            width: 30px;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

        .col-1 {
            width: 50%;
        }

        .col-2 {
            width: 100%;
        }

        .label-font-size {
            font-size: 11px;
            font-weight: 400;
            color: #9d9d9d;
            font-family:robotoregular;
        }

        .profile-circle {
            height: 36px;
            width: 36px;
            background-color: blueviolet;
            border-radius: 50%;
        }
        .prfle-crcle-title-mser {
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

        .action-bar-padding {
            padding-right: 10px;
            padding-left: 15px;
        }

        .action-button {
            height: 25px;
            width: 25px;
            padding: 10px;
        }

        .action-round-button {
            border-radius: 50%;
        }

        /* .btn-color {
            background-color: rgb(33, 34, 35);
             background-color: #FFFFFF; 
        } */

        .service-buttons {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
            
            border: 1.2px solid #000;
        }

        .serv-btn-width {
            font-size : 11px;
            font-weight: 500;
            
            color: #000000;
            font-family:robotoregular;
        }

        /* .service-buttons:active,.serv-btn-width:active {
            background-color:rgb(5, 4, 4);
            color: #FFFFFF;
        } */
        .mservices-overlay-header-font-size {
            font-size: 12px;
              font-family:robotoregular;
        }
        .box-margin-btm {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .lead-card-wrapper {
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 3px;
        }

        .input {
            background-color: #fff;
            padding: 5px;
            color: #666666;
            border-width: 1px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            margin-bottom: 20px;
        }

         /* ----overlay */
        .page-header {
            height: 50px;
            background-color: #3b371e;
            top: -1px;
        }

        .overlay-wraper {
            position: fixed;
            /* display: none; */
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 10;
            
        }

        .mservice-overlay-container {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 220px;
            width: 300px;
            border-radius: 3px;
            background-color:white;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            box-shadow: 0 5px 45px rgba(0, 0, 0, .5);
        }

        .mservice-overlay-body {
            height:190px;
            /* background: red; */
            overflow: auto;
            padding: 20px;
        }

        .footer-action-bar {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: rgb(236, 236, 236);
            padding: 10px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
        }

         .services-popup-bwidth {
            width: 35%;
            margin-left: 5px;
            margin-right: 5px;
        }
    }

    @media (min-width: 768px) {
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .profile-circle {
            height: 50px;
            width: 50px;
            background-color: blueviolet;
            border-radius: 50%;
        }

        .circle-wraper {
            padding: 10px;
        }

        .prfle-crcle-title-mser {
            position: absolute;
            /* top: 25%;
            left: 18%; */
            color: white;
            font-size: 23px;
            /* font-weight: 500;
            font-family:robotoregular; */
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

        .col-1 {
            width: 30%;
        }

        .col-2 {
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

        .service-md-btn-width {
            width: 15%;
        }
    }

    @media (min-width: 992px) {
        
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .service-md-btn-width {
            width: 23%;
        }
        
    }
    
</style>


