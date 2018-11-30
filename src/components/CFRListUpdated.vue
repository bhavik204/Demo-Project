<template>
    <div class="lead-card-wrapper shadow" >
        <!-- Web and Tab -->
        <div v-if="platform == 'Web'" class="nx-flex-row nx-flex-direction-change show-hide">
            <div class="nx-flex-column ">
                <div class="nx-flex-row items-align-center" style="background-color: #f9f9f96b;">
                    <div class="circle-wraper nx-flex-column items-align-center">
                        <div class="profile-circle">
                            <text class="cfr-p-c-title">SH</text>
                        </div>
                        <text class="status-text" :style="{color:colorBinding}">{{ cfrData.status }}</text>
                    </div>
                    <div class="box flex-box-size-01">
                        <div class="nx-flex-column">
                            <div>
                                <div class="nx-flex-row nx-flex-direction-change">
                                    <div class="box box-margin-btm ">
                                        <text class="cfr-text bold-text large-text">{{cfrData.name}}</text>
                                    </div>
                                    <div class="box box-margin-btm ">
                                        <text class="cfr-text">{{cfrData.id}}</text>
                                    </div>
                                    <div class="box flex-box-size-01 box-margin-btm ">
                                        <text class="cfr-text large-text">{{cfrData.planType}}</text>
                                    </div>
                                </div>
                            </div>
                            <div class="center-bottom-border ">
                                
                            </div>
                        
                            <div class="box nx-flex-row nx-flex-flow-wrap nx-flex-wrap">
                                <div class="box col-1">
                                    <text class="label-font-size large-text">Application No.</text>
                                    <text class="cfr-text">{{cfrData.applicationNo}}</text>
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size">CFR Type</text>
                                    <text class="cfr-text">{{cfrData.cfrType}}</text>
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size large-text">Recieved Premium</text>
                                    <text class="cfr-text">{{cfrData.recievedPremium}}</text>
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size">Date</text>
                                    <text class="cfr-text">{{cfrData.date}}</text>
                                </div>
                                <div class="box col-1">
                                    <text class="label-font-size">Deadline</text>
                                    <text class="cfr-text">{{cfrData.deadLine}}</text>
                                </div>

                                <div class="box cfrmd-btn-width">
                                    <div class="cfrmd-custom-btn" @click.native="checkJump">
                                        <text class="cfrmd-btn-label global-black-text large-text cursor-pointer-globle">View Details</text>
                                    </div>
                                </div>
                            </div>

                            <!-- Browser Alert open when status is submitted or closed -->
                            <div class="" v-if="popshow === true" @click.native="popshow = !popshow">
                                <popup>
                                    <div class="to-do-flx-row to-do-task-title" style="align-items:center;">
                                        <div>
                                            <text class="to-do-title-font">CFR Log</text>
                                        </div>
                                        <div class="">

                                        </div>
                                    </div>
                                    <div class="todo-body">
                                        <div>
                                            <text class="cfr-alert-fnt-size ">Documents have been uploaded on 11/05/2016. To know more please view CFR log below</text>
                                        </div>
                                    </div>
                                </popup>
                            </div>
                        </div>
                    </div>
                      <!-- Action -->
                    <div class="action-bar-padding ">
                        <div class="nx-flex-column">
                            <div class="box action-round-button">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/notification/sms_black_48x48.png"></image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- Mbile Web -->

        <div v-if="platform == 'Web'" style="padding:20px" class="mobile-show">
            <div class="nx-flex-row items-align-center">
                <div class="box">
                    <!-- Avtar -->
                    <div class="profile-circle">
                        <text class="cfr-p-c-title">SS</text>
                    </div>
                </div>
                <div class="box flex-box-size-01" @click.native="checkJump()">
                    <text class="user-name-text">{{cfrData.name}}</text>
                    <text class="status-text" :style="{color:colorBinding}">{{ cfrData.status }}</text>
                </div>
                <div class="box call-active" @click="call()">
                    <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                </div>
            </div>
            
        </div>

        <!-- APK -->
        <div v-if="platform !== 'Web'" class="nx-flex-row items-align-center card-padding center-bottom-border onActive" @click="jump('/medicalcfr')">
            <div class="box" >
                <!-- Avtar -->
                <div class="profile-circle">
                     <text class="cfr-p-c-title">SS</text>
                </div>
            </div>
            <div class="box flex-box-size-01" @click="checkJump()">
                <text class="user-name-text">{{cfrData.name}}</text>
                <text class="status-text" :style="{color:colorBinding}">{{ cfrData.status }}</text>
            </div>
            <div class="box call-active" @click="call()">
                <image class="action-button" src="https://www.materialui.co/materialIcons/communication/phone_grey_192x192.png"></image>
            </div>
        </div>
    </div>
</template>


<script>

import popup from '../views/Calendar/Todo-pop-up.vue'

const navigator = weex.requireModule('navigator');

const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {

    // This props is used for tempory for open files only : should be changed 
    props: {
        statusTitle: String,
        cfrData: Object
    },
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    mounted() {
        if(this.cfrData.status === 'Open') {
            this.colorBinding = this.statusColors.open;
        } else if(this.cfrData.status === 'Re-Open') {
            this.colorBinding = this.statusColors.reOpen;
        } else if (this.cfrData.status === 'Submitted') {
            this.colorBinding = this.statusColors.submitted;
        } else {
            this.colorBinding = this.statusColors.closed;
        }
    },
    data() {
        return {
           platform: invalid,
           statusColors: {
               open: '#77A543',
               reOpen: '#179e7e',
               submitted: '#2C93DE',
               closed: '#D04949'
           },
           colorBinding: '',
           popshow: false,
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

        checkJump() {
           

            if(this.cfrData.status === 'Open') {
                this.jump('/medicalcfr');
            } else if(this.cfrData.status === 'Re-Open') {
                this.jump('/masteruploadcfr/addcfr');
            } else if (this.cfrData.status === 'Submitted') 
            {
                this.popshow = true;
            }

            else if (this.cfrData.status === 'Close') 
            {
                this.popshow = true;
            }
            
            
           
             else {
                this.jump('/extrapremium');
            }
        }
    },
    components: {
        popup
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
        border-radius: 10px;
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

    .cfr-text {
        font-size: 24px;
        font-family:robotoregular;
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

    .cfr-p-c-title {
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
        position: relative;
        top: 0px;
        left: 0px;
        margin-left: 20px;
        font-family:robotoregular;
    }


    .action-button {
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

        .cfr-text {
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
        .cfr-p-c-title {
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

        .cfrmd-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
           
            border: 1.2px solid #000;
        }

        .cfrmd-btn-label {
            font-size : 11px;
            font-weight: 500;
           
            color: #000000;
            font-family:robotoregular;
        }

        /* .cfrmd-custom-btn:active,.cfrmd-btn-label:active {
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
        .cfr-alert-fnt-size {
            font-size: 14px;
            font-family:robotoregular;
        }
        .cfr-alert-pop-height {
            height: 40px;
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
            padding: 15px;
        }

        .cfr-p-c-title {
            /* position: absolute;
            top: 25%;
            left: 18%;
            color: white; */
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
    }

    @media (min-width: 992px) {
        
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .cfrmd-btn-width {
            width: 23%;
        }
    }
    
</style>


