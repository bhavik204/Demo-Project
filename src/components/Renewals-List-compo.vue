<template>
    <div class="lead-card-wrapper shadow">
        <!-- Web and Tab -->
        <div v-if="platform == 'Web'" class="nx-flex-row nx-flex-direction-change show-hide">
            <div class="nx-flex-column ">
                <div class="nx-flex-row items-align-center" style="background-color: #f9f9f96b;">
                    <div class="circle-wraper nx-flex-column items-align-center" >
                        <div class="profile-circle">
                            <text class="ren-profile-circle-text">SS</text>
                        </div>
                        <text class="status-text large-text" :style="{color: statusColors.statusStyle}">{{renewalList.status}}</text>
                    </div>
                    <div class="box flex-box-size-01">
                        <div class="nx-flex-column">
                            <div>
                                <div class="nx-flex-row nx-flex-direction-change">
                                    <div class="box box-margin-btm ">
                                        <text class="ren-text bold-text large-text">{{renewalList.name}}</text>
                                    </div>
                                    <div class="box box-margin-btm ">
                                        <text class="ren-text">{{renewalList.id}}</text>
                                    </div>
                                    <div class="box flex-box-size-01 box-margin-btm ">
                                        <text class="ren-text large-text">{{renewalList.planType}}</text>
                                    </div>
                                </div>
                            </div>
                            <div class="center-bottom-border ">
                                
                            </div>
                        
                            <div class="box nx-flex-row nx-flex-flow-wrap nx-flex-wrap">
                                <div class="box col-1">
                                    <text class="label-font-size">Due Amount</text>
                                    <text class="ren-text ">{{renewalList.DueAmount}}</text>
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size">Due Date</text>
                                    <text class="ren-text ">{{renewalList.DueDate}}</text>
                                </div>            
                                <div class="box renwals-btn-width">
                                    <div class="renwals-custom-btn cursor-pointer-globle" @click.native="openMask">
                                        <text class="rene-btn-lbl btn-label-color-black cursor-pointer-globle">View Details</text>
                                    </div>
                                </div>

                                <!-- Pop up Code -->
                                <vx-overlay-pop-up
                                v-if="hasShow"
                                :props-data="renewalsCard"
                                @popHide="hasShow = $event">
                                </vx-overlay-pop-up>
                            </div>
                        </div>
                    </div>


                      <!-- Action -->
                    <div class="action-bar-padding ">
                        <div class="nx-flex-column">
                            <div class="box action-round-button cursor-pointer-globle">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button cursor-pointer-globle">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button cursor-pointer-globle">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/notification/sms_black_48x48.png"></image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- Mbile Web -->

        <div v-if="platform === 'Web'" style="padding:20px" class="mobile-show">
            <div class="nx-flex-row items-align-center">
                <div class="box">
                    <!-- Avtar -->
                    <div class="profile-circle">
                        <text class="ren-profile-circle-text">SS</text>
                    </div>
                </div>
                <div class="box flex-box-size-01" @click="jump('/renedetilscard')">
                    <text class="user-name-text">{{renewalList.name}}</text>
                    <text class="status-text" :style="{color: statusColors.statusStyle}">{{renewalList.status}}</text>
                </div>
                <div class="box call-active cursor-pointer-globle" @click="call()">
                    <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                </div>
            </div>
            
        </div>

        <!-- APK -->
        <div v-if="platform !== 'Web'" class="nx-flex-row items-align-center card-padding onActive center-bottom-border" @click="jump('/renedetilscard')">
            <div class="box">
                <!-- Avtar -->
                <div class="profile-circle">
                     <text class="ren-profile-circle-text">SS</text>
                </div>
            </div>
            <div class="box flex-box-size-01" >
                <text class="user-name-text">{{renewalList.name}}</text>
                <text class="status-text" :style="{color: statusColors.statusStyle}">{{renewalList.status}}</text>
            </div>
            <div class="box call-active cursor-pointer-globle" @click="call()">
                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_grey_192x192.png"></image>
            </div>
        </div>
    </div>
</template>


<script>

const navigator = weex.requireModule('navigator');

import { WxcMask } from 'weex-ui'
import vxOverlayPopUp from '../components/vx-overlay/vx-overlay-pop-up'

const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {
 props:{
            statusTitle: String,
            renewalList: Object
        },

    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },

    mounted() {
        // Status Color changing
        if(this.renewalList.status === 'InForce') {
            this.statusColors.statusStyle = this.statusColors.inForce;
            
        } else if(this.renewalList.status === 'Lapsed') {
            this.statusColors.statusStyle = this.statusColors.lapsed;
        } else {
             this.statusColors.statusStyle = this.statusColors.surrender;
        }
    },

    data: function() {
        return {
            statusColors: {
                inForce: '#77a543',
                lapsed: '#70a1de',
                surrender:'#D04949',
                statusStyle: ''
            },

            show: false,
            hasAnimation: true,
            hasShow: false,
            
            // i is used for binding css style
            i:0,
            styleBind: {
                // By deafult width is 50%. 
                width: '100%'
            },
            renewalsCard: {
                renewalsProfileCard: [
                    {
                        labelName: 'ID',
                        value: 'BRDMC0024'
                    }, {
                        labelName: 'Date of Birth',
                        value: '15/09/1989'
                    }, {
                        labelName: 'City',
                        value: 'Mumbai'
                    }, {
                        labelName: 'State',
                        value: 'Maharashtra'
                    }, {
                        labelName: 'Mobile no.',
                        value: '+91 8106312874'
                    }, {
                        labelName: 'Email',
                        value: 'vivektank234@gmail.com'
                    }
                ],
            
                policyDetails: [
                    {
                        labelName: 'Policy No.',
                        value: '0012TRA871'
                    }, {
                        labelName: 'Issued on',
                        value: '12/12/2015'
                    }, {
                        labelName: 'Policy Term',
                        value: '10 Years'
                    }, {
                        labelName: 'ECS Active',
                        value: 'Yes'
                    }, {
                        labelName: 'Add Frequency',
                        value: 'Annual'
                    }, {
                        labelName: 'Premium Type:',
                        value: 'Regular'
                    }, {
                        labelName: 'Last Premium Paid On',
                        value: '16/02/2016',
                    }, {
                        labelName: 'Mode of Payment',
                        value: 'Cheque'
                    }
                ],

                advisorDetails: [
                    {
                        labelName: 'Name',
                        value: 'Amrita Sariya'
                    }, {
                        labelName: 'Mobile',
                        value: '+91 9876673443'
                    }, {
                        labelName: 'Advisor Code',
                        value: 'HYD8215'
                    }, {
                        labelName: 'Email',
                        value: 'vivek@gmail.com'
                    }
                ],

                breakUps: [
                    {
                        labelName: 'Net Premium Payable',
                        value: '₹ 6,400',
                        operator: '='
                    },
                    {
                        labelName: 'Installment Premium',
                        value: '₹ 6,400',
                        operator: '*'
                    }, {
                        labelName: 'No. of Installments',
                        value: '3',
                        operator: '+'
                    },  {
                        labelName: 'Interest',
                        value: '₹ 320',
                        operator: '-'
                    },  {
                        labelName: 'Suspense Amount',
                        value: '₹ 22',
                        operator: ''
                    }
                ]
            }
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
        },
        openMask (event) {
            this.hasShow = true;
        },
        wxcMaskSetHidden () {
            this.hasShow = false;
        }
    },
    components: {
        WxcMask,
        vxOverlayPopUp
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

    .ren-text {
        /* lines: 1; */
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

    .btn-label-color-black {
        color: #000;
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

    .ren-profile-circle-text {
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

        .margin-left-btwn-text {
            margin-left: 15px;
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

        .ren-text {
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
        .ren-profile-circle-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
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
            transition: .3s cubic-bezier(.25,.8,.5,1);
        }

        .action-round-button {
            border-radius: 50%;
        }

        /* .btn-color {
            background-color: rgb(33, 34, 35);
             background-color: #FFFFFF; 
        } */

        .renwals-custom-btn {
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

        .rene-btn-lbl {
            font-size : 11px;
            /* text-transform: uppercase; */
            font-weight: 500;
            cursor: pointer;
            color: #000000;
            font-family:robotoregular;
        }

        /* .renwals-custom-btn:active,.rene-btn-lbl:active {
            background-color:rgb(5, 4, 4);
            color: #FFFFFF;
        } */

        .box-margin-btm {
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

        .ren-profile-circle-text {
            /* position: absolute;
            top: 25%;
            left: 18%;
            color: white; */
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

        .col-1 {
            width: 40%;
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

        .pop-up-col-width {
            width: 50%;
            margin-bottom: 10px;
        }

        .content {
            padding: 20px;
            height: 485px;
            /* background-color: red; */
            overflow: auto;
        }

        .pop-status-box {
            padding: 5px;
            background-color: #098c09;
            border-radius: 15px;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        .pop-status-text {
            font-weight: bold;
            color:#fff;
            font-family:robotoregular;
        }

        
    }

    @media (min-width: 992px) {
        
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .renwals-btn-width {
            width: 23%;
        }

        .col-1 {
            width: 35%;
        }

        /* New CSS */

        

       

        
    }
    
</style>


