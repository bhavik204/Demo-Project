<template>
    <div class="lead-card-wrapper shadow">
        <!-- Web and Tab -->
        <div v-if="platform == 'Web'" class="candi-app-flex-row candi-app-flex-direction-change candi-app-show-hide">
            <div class="candi-app-flex-column">
                <div class="candi-app-flex-row candi-app-items-align-center" style="background-color: #f9f9f96b;">
                    <div class="candi-app-circle-wraper candi-app-flex-column candi-app-items-align-center">
                        <div class="candi-app-profile-circle">
                            <text class="candi-app-profile-circle-text">SH</text>
                        </div>
                        <text class="candi-app-status-text" :style="{color: statusColors.statusStyle}">{{candidateList.status}}</text>
                    </div>
                    <div class="candi-app-box candi-app-flex-box-size-01">
                        <div class="candi-app-flex-column">
                            <div>
                                <div class="candi-app-flex-row candi-app-flex-direction-change">
                                    <div class="candi-app-box candi-app-box-margin-btm ">
                                        <text class="candi-app-cfr-text candi-app-bold-text candi-app-large-text">{{candidateList.name}}</text>
                                    </div>
                                    <div class="candi-app-box candi-app-box-margin-btm ">
                                        <text class="candi-app-cfr-text">{{candidateList.id}}</text>
                                    </div>
                                    <div class="candi-app-box candi-app-flex-box-size-01 candi-app-box-margin-btm ">
                                        <text class="candi-app-cfr-text candi-app-large-text">{{candidateList.planType}}</text>
                                    </div>
                                </div>
                            </div>
                            <div class="candi-app-center-bottom-border ">
                                
                            </div>
                        
                            <div class="candi-app-box candi-app-flex-row candi-app-flex-flow-wrap candi-app-flex-wrap">
                                <div class="candi-app-box candi-app-col-1">
                                    <text class="candi-app-label-font-size candi-app-large-text">Name</text>
                                    <text class="candi-app-cfr-text">{{candidateList.Name}}</text>
                                </div>
                                <div class="candi-app-box candi-app-col-1">
                                    <text class="candi-app-label-font-size">CID</text>
                                    <text class="candi-app-cfr-text">{{candidateList.CID}}</text>
                                </div>
                                <div class="candi-app-box candi-app-col-1">
                                    <text class="candi-app-label-font-size candi-app-large-text">App ID </text>
                                    <text class="candi-app-cfr-text">{{candidateList.AppID}}</text>
                                </div>
                                <div class="candi-app-box candi-app-col-1">
                                    <text class="candi-app-label-font-size">App Date</text>
                                    <text class="candi-app-cfr-text">{{candidateList.AppDate}}</text>
                                </div>
                                <div class="candi-app-box candi-app-col-1">
                                    <text class="candi-app-label-font-size">Updated on </text>
                                    <text class="candi-app-cfr-text">{{candidateList.UpdatedOn}}</text>
                                </div>

                                <div class="candi-app-box candi-app-">
                                    <div class="candi-app-md-custom-btn" @click.native="jump('/medicalcfr')">
                                        <text class="candi-app-md-btn-label candi-app-global-black-text candi-app-large-text cursor-pointer-globle">View Details</text>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                      <!-- Action -->
                    <div class="candi-app-action-bar-padding ">
                        <div class="candi-app-flex-column">
                            <div class="candi-app-box candi-app-action-round-button cursor-pointer-globle">
                                <image class="candi-app-action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_48x48.png"></image>
                            </div>
                            <div class="candi-app-box candi-app-action-round-button cursor-pointer-globle">
                                <image class="candi-app-action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>
                            </div>
                            <div class="candi-app-box candi-app-action-round-button cursor-pointer-globle">
                                <image class="candi-app-action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/notification/sms_black_48x48.png"></image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- Mbile Web -->

        <div v-if="platform == 'Web'" style="padding:20px" class="candi-app-mobile-show">
            <div class="candi-app-flex-row candi-app-items-align-center">
                <div class="candi-app-box">
                    <!-- Avtar -->
                    <div class="candi-app-profile-circle">
                        <text class="candi-app-profile-circle-text">SS</text>
                    </div>
                </div>
                <div class="candi-app-box candi-app-flex-box-size-01" @click.native="checkJump()">
                    <text class="candi-app-user-name-text">{{candidateList.name}}</text>
                    <text class="candi-app-status-text" :style="{color: statusColors.statusStyle}">{{candidateList.status}}</text>
                </div>
                <div class="candi-app-box candi-app-" @click="call()">
                    <image class="candi-app-action-button" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                </div>
            </div>
            
        </div>

        <!-- APK -->
        <div v-if="platform !== 'Web'" class="candi-app-flex-row candi-app-items-align-center candi-app-card-padding candi-app-center-bottom-border candi-app-onActive" @click="jump('/medicalcfr')">
            <div class="candi-app-box" >
                <!-- Avtar -->
                <div class="candi-app-profile-circle">
                     <text class="candi-app-profile-circle-text">SS</text>
                </div>
            </div>
            <div class="candi-app-box candi-app-flex-box-size-01" @click="checkJump()">
                <text class="candi-app-user-name-text">{{candidateList.name}}</text>
                <text class="candi-app-status-text" :style="{color: statusColors.statusStyle}">{{candidateList.status}}</text>
            </div>
            <div class="candi-app-box " @click="call()">
                <image class="candi-app-action-button" src="https://www.materialui.co/materialIcons/communication/phone_grey_192x192.png"></image>
            </div>
        </div>
        <!-- end -->
    </div>
</template>


<script>

const navigator = weex.requireModule('navigator');

const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {

    // This props is used for tempory for open files only : should be changed 
    props: {
        statusTitle: String,
        candidateList: Object
},

    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
     mounted() {
        // Status Color changing
        if(this.candidateList.status === 'Incomplete') {
            this.statusColors.statusStyle = this.statusColors.Incomplete;
            
        } else if(this.candidateList.status === 'Submit') {
            this.statusColors.statusStyle = this.statusColors.Submit;
        } else if(this.candidateList.status === 'Training'){
             this.statusColors.statusStyle = this.statusColors.Training;
        }else if(this.candidateList.status === 'Passed'){
             this.statusColors.statusStyle = this.statusColors.Passed;
        }else if(this.candidateList.status === 'Fail'){
             this.statusColors.statusStyle = this.statusColors.Fail;
        }else if(this.candidateList.status === 'Reexam'){
             this.statusColors.statusStyle = this.statusColors.Reexam;
        }else {
             this.statusColors.statusStyle = this.statusColors.Licensed;
        }
    },


    data() {
        return {
           statusColors: {
                Incomplete: '#e8af12',
                Submit: '#16828e',
                Training: '#484e87',
                Passed: '#54ad40',
                Fail : '#b71616',
                Reexam: '#e87b06',
                Licensed: '#1a90cc',
                statusStyle: ''
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

        checkJump() {
           

            if(this.statusTitle === 'Open') {
                this.jump('/medicalcfr');
            } else if(this.statusTitle === "Re-Open") {
                this.jump('/upload-cfr');
            } else {
                 this.jump('/extra-premium');
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

    .candi-app-card-padding {
        padding: 20px;
    }
         
    .candi-app-box {
        padding-top: 10px;
        padding-bottom:10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .candi-app-cfr-text {
        font-size: 24px;
        font-family:robotoregular;
    }

    .candi-app-user-name-text {
        font-size: 32px;
        font-weight: 700px;
        margin-left: 20px;
        font-family:robotoregular;
    }

    .candi-app-label-font-size {
        font-size: 22px;
        font-weight: 400;
        color: #9d9d9d;
        font-family:robotoregular;
    }

    .candi-app-bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }

    .lead-card-wrapper {
        margin-left:0px;
        margin-right: 0px;
    }

   
    .candi-app-flex-flow-wrap {
        flex-flow: wrap;
    }

    .candi-app-items-align-center {
        align-items: center;
    }

  
   

    .candi-app-flex-wrap {
        flex-wrap: wrap;
    }

    .candi-app-flex-row {
        flex-direction: row;
    }

    .candi-app-flex-column {
        flex-direction: column;
    }

    .candi-app-flex-row-revers {
        flex-direction: row-reverse;
    }

    .candi-app-flex-direction-change {
        flex-direction: column;
    }

   
    
    .candi-app-flex-box-size-01 {
        flex: 1;
    }
   

    .candi-app-profile-circle {
        height: 100px;
        width: 100px;
        background-color: #ff581c;
        border-radius: 50px;
    }

    .candi-app-onActive:active {
        background-color: #e2e2e2;
    }

    .candi-app-call-active:active{
         background-color: #dfdfdf;
         border-radius: 60px;
    }

    .candi-app-profile-circle-text {
        position: absolute;
        top: 26%;
        left: 24%;
        color: white;
        font-size: 40px;
        font-weight: 700;
        font-family:robotoregular;
    }

    .candi-app-status-text {
        font-size: 25px;
        font-weight: bold;
        color: #54ad40;
        position: relative;
        top: 0px;
        left: 0px;
        margin-left: 20px;
        font-family:robotoregular;
    }


    .candi-app-action-button {
        height: 80px;
        width: 80px;
        padding: 10px;
    }


    .candi-app-center-bottom-border {
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

    .candi-app-col-1 {
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
        .candi-app-box {
            padding-top: 5px;
            padding-bottom:5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .candi-app-user-name-text {
            font-size: 16px;
            font-weight: 400;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .candi-app-show-hide {
            display: none;
        }
        .candi-app-mobile-show {
            display: block;
        }

        .candi-app-card-padding {
            padding: 0px;
        }

        .candi-app-cfr-text {
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

        .candi-app-col-1 {
            width: 50%;
        }

        .col-2 {
            width: 100%;
        }

        .candi-app-label-font-size {
            font-size: 11px;
            font-weight: 400;
            color: #9d9d9d;
            font-family:robotoregular;
        }

        .candi-app-profile-circle {
            height: 36px;
            width: 36px;
            background-color: blueviolet;
            border-radius: 50%;
        }
        .candi-app-profile-circle-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 16px;
            font-weight: 500;
            font-family:robotoregular;
        }

        .candi-app-status-text {
            font-size: 12px;
            font-weight: bold;
            color: #54ad40;
            position: relative;
            top: 0px;
            left: 0px;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .candi-app-action-bar-padding {
            padding-right: 10px;
            padding-left: 15px;
        }

        .candi-app-action-button {
            height: 25px;
            width: 25px;
            padding: 10px;
        }

        .candi-app-action-round-button {
            border-radius: 50%;
        }

        /* .btn-color {
            background-color: rgb(33, 34, 35);
             background-color: #FFFFFF; 
        } */

        .candi-app-md-custom-btn {
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

        .candi-app-md-btn-label {
            font-size : 11px;
            font-weight: 500;
            cursor: pointer;
            color: #000000;
            font-family:robotoregular;
        }

        /* .candi-app-md-custom-btn:active,.candi-app-md-btn-label:active {
            background-color:rgb(5, 4, 4);
            color: #FFFFFF;
        } */

        .candi-app-box-margin-btm {
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
        .candi-app-flex-direction-change {
            flex-direction: row;
        }

        .candi-app-profile-circle {
            height: 50px;
            width: 50px;
            background-color: blueviolet;
            border-radius: 50%;
        }

        .candi-app-circle-wraper {
            padding: 15px;
        }

        .candi-app-profile-circle-text {
            /* position: absolute;
            top: 25%;
            left: 18%;
            color: white; */
            font-size: 23px;
            /* font-weight: 500;
            font-family:robotoregular; */
        }

        .candi-app-status-text {
            font-size: 12px;
            font-weight: bold;
            color: #54ad40;
            position: relative;
            top: 5px;
            /* left: 7px; */
            margin-left: 0px;
            font-family:robotoregular;
        }

        .candi-app-col-1 {
            width: 30%;
        }

        .col-2 {
            width: 25%;
        }  

        .flex-size-0-5 {
            flex: 0.2;
        }

        .candi-app-mobile-show {
            display: none;
        }

        .candi-app-show-hide {
            display: block;
        }
    }

    @media (min-width: 992px) {
        
        .candi-app-flex-direction-change {
            flex-direction: row;
        }

        .candi-app-md-btn-width {
            width: 23%;
        }
    }
    
</style>


