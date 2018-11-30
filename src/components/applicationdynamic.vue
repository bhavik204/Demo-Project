<template>
    <div class="lead-card-wrapper shadow">
        <div v-if="platform == 'Web'" class="nx-flex-row nx-flex-direction-change show-hide">
            <div class="nx-flex-column ">
                <div class="nx-flex-row items-align-center" style="background-color: #f9f9f96b;">
                    <div class="circle-wraper nx-flex-column items-align-center" >
                        <div class="profile-circle">
                            <text class="app-p-c-title">SH</text>
                        </div>
                        <text class="status-text large-text" :style="{ color: statusColors.statusStyle}">{{applicationData.status}}</text>
                    </div>
                    <div class="box flex-box-size-01">
                        <div class="nx-flex-column">
                            <div>
                                <div class="nx-flex-row nx-flex-direction-change">
                                    <div class="box box-margin-btm ">
                                        <text class="app-val-text bold-text large-text">{{applicationData.name}}</text>
                                    </div>
                                    <div class="box box-margin-btm ">
                                        <text class="app-val-text">{{applicationData.appno }}</text>
                                    </div>
                                    <div class="box flex-box-size-01 box-margin-btm ">
                                        <text class="app-val-text large-text">{{applicationData.plantype}}</text>
                                    </div>
                                </div>
                            </div>
                            <div class="center-bottom-border ">
                                
                            </div>
                        
                            <div class="box nx-flex-row nx-flex-flow-wrap nx-flex-wrap">
                                <div class="box col-1" v-if="applicationData.lbl_01 != null">
                                             <text class="label-font-size large-text">{{ lbl_01 }}</text>
                                    <text class="app-val-text large-text">{{applicationData.lbl_01}}</text>
                                </div>
                                <div class="box col-1" v-if="applicationData.lbl_02 != null">
                                    <text class="label-font-size large-text">{{ lbl_02 }}</text>
                                    <text class="app-val-text large-text">{{applicationData.lbl_02}}</text>
                                </div>
                                <div class="box col-1" v-if="applicationData.lbl_03 != null">
                                    <text class="label-font-size large-text">{{lbl_03}}</text>
                                    <text class="app-val-text large-text">{{applicationData.lbl_03}}</text>
                                </div>
                
                                <div class="box col-1" v-if="applicationData.lbl_04 != null">
                                    <text class="label-font-size">{{lbl_04}}</text>
                                    <text class="app-val-text ">{{applicationData.lbl_04 }}</text>
                                </div>
                                <div class="box col-1"  v-if="applicationData.lbl_05 != null">
                                    <text class="label-font-size">{{lbl_05}}</text>
                                    <text class="app-val-text ">{{applicationData.lbl_05 }}</text>
                                </div>

                                 <div v-if="platform ==='Web'" class="box md-btn-width"> 
                                    <div class="md-custom-btn cursor-pointer-globle" @click.native="jump(applicationData.jumpAddress)">
                                        <text class="app-md-btn-label app-btn-label-color-blck cursor-pointer-globle">{{applicationData.lbl_06}}</text>
                                    </div>
                                </div>
                                <div v-if="platform !=='Web'" class="box md-custom-btnbtn-width">
                                        <div class="md-custom-btn" @click="jump(applicationData.jumpAddress)">
                                            <text class="app-md-btn-label app-val-textbtn-label-color-blck">{{applicationData.lbl_06}}</text>
                                        </div>
                                    </div>
                                 </div>               
                         </div>
                    </div>
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


        <div v-if="platform === 'Web'" style="padding:20px" class="mobile-show">
            <div class="nx-flex-row items-align-center">
                <div class="box">
                    <div class="profile-circle">
                        <text class="app-p-c-title">SS</text>
                    </div>
                </div>
                <div v-if="platform ==='Web'" class="box flex-box-size-01" @click.native="jump('/master/testapp')">
                    <text class="user-name-text">{{applicationData.name}}</text>
                    <text class="status-text" :style="{ color: statusColors.statusStyle}">{{applicationData.status}}</text>
                </div>
                <div class="box call-active" @click="call()">
                    <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                </div>
            </div>
            
        </div>

        <!-- For Testing purpos not important -->

        <!-- <div v-if="platform !== 'Web'">
            <text>Hello World</text>
        </div> -->

        <!-- APK -->
        <div v-if="platform !== 'Web'" class="nx-flex-row items-align-center card-padding onActive center-bottom-border"  @click="jump('/master/testapp')">
            
            <div class="box">
                <!-- Avtar -->
                <div class="profile-circle">
                     <text class="app-p-c-title">SH</text>
                </div>
            </div>
            <div class="box flex-box-size-01" >
                <text class="user-name-text">{{applicationData.name}}</text>
                <text class="status-text" :style="{ color: statusColors.statusStyle}">{{applicationData.status}}</text>
            </div>
            <div class="box call-active" @click="call()">
                <image class="action-button" src="https://www.materialui.co/materialIcons/communication/phone_grey_192x192.png"></image>
            </div>
        </div>
    </div>
</template>


<script>
import WhiteButton from './Button/WhiteButton.vue'
const navigator = weex.requireModule('navigator');

const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {

    //props

     props: {
        statusTitle: String,
        applicationData: Object,
        pageName: String
    },
    components : {
        WhiteButton
    },
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    mounted() {
        if(this.pageName === 'Rejected' || this.applicationData.status ==='Rejected') {
            this.lbl_01 = 'Premium Amount Paid'
            this.lbl_02 = 'Premium Amount Refunded'
            this.lbl_03 = 'Login Date'
            this.lbl_04 = 'Refund Date'
            this.lbl_05 = 'Reason'
            this.lbl_06 = 'Track Proposal'
        } else if (this.pageName === 'Logins' || this.applicationData.status === 'Pending Issuance') {
            this.lbl_01 = 'Premium Type'
            this.lbl_02 = 'Premium Amount'
            this.lbl_03 = 'Policy Term'
            this.lbl_04 = 'Login Date'
            this.lbl_05 = ''
            this.lbl_06 = 'Track Proposal'
        } else if (this.pageName === 'Issued' || this.applicationData.status === 'Issued') {
            this.lbl_01 = 'Client Id'
            this.lbl_02 = 'Premium Amount' 
            this.lbl_03 = 'Premium Type'
            this.lbl_04 = 'Policy Term'
            this.lbl_05 = 'Issuence Date' 
            this.lbl_06 = 'Track Proposal'
        } else if (this.pageName === 'Draft Proposals'  || this.applicationData.status === 'Payment Pending'|| this.applicationData.status === 'Proposal Incomplete'|| this.applicationData.status === 'Documents Pending') {
            this.lbl_01 = 'Premium Type'
            this.lbl_02 = 'Policy Term'
            this.lbl_03 = 'Draft date'
            this.lbl_04 = 'Premium Amount'
            this.lbl_05 = ''
            this.lbl_06 = 'Track Proposal'
        }

        // --------------------------

        if(this.applicationData.status === 'Payment Pending') {
            this.statusColors.statusStyle = this.statusColors.PaymentPending;
        } else if (this.applicationData.status === 'Proposal Incomplete') {
            this.statusColors.statusStyle = this.statusColors.ProposalIncomplete;
        }

        else if(this.applicationData.status === 'Documents Pending')
        {
            this.statusColors.statusStyle = this.statusColors.DocumentsPending;
        }

        else if(this.applicationData.status === 'Pending Issuance')
        {
            this.statusColors.statusStyle = this.statusColors.PendingIssuance;
        }
         else if(this.applicationData.status === 'Issued')
        {
            this.statusColors.statusStyle = this.statusColors.Issued;
        }
        //  else if(this.applicationData.status === 'Issuede')
        // {
        //     this.statusColors.statusStyle = this.statusColors.Issued;
        // }
         else if(this.applicationData.status === 'Rejected')
        {
            this.statusColors.statusStyle = this.statusColors.Rejected;
        }
        
    },
    
    data() {
        return {
                //dynamic color
            platform: invalid,
            statusColors: {
                PaymentPending: '#E8BD55',  
                DocumentsPending:'#8F68B9',
                ProposalIncomplete: '#70A1DE',
                PendingIssuance:'#2C93DE',
                Issued:'#77A543',
                Rejected:'#D04949',        

                statusStyle: ''
            },
            lbl_01: '',
            lbl_02: '',
            lbl_03: '',
            lbl_04: '',
            lbl_05: '',
            lbl_06: ''
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

    .app-val-text {
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

    .app-btn-label-color-blck {
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

    .app-p-c-title {
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
            font-size: 14px;
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

        .app-val-text {
            font-size: 12px;
        }

        .icon-size {
            height: 30px;
            width: 30px;
            font-family:robotoregular;
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
        .app-p-c-title {
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

        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
           
            border: 1.2px solid #000;
        }

        .app-md-btn-label {
            font-size : 11px;
            font-weight: 500;
           
            color: #000000;
            font-family:robotoregular;
        }

        /* .md-custom-btn:active,.md-btn-label:active {
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
            padding: 15px;
        }

        .app-p-c-title {
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

        .md-btn-width {
            width: 23%;
        }
    }
    
</style>


