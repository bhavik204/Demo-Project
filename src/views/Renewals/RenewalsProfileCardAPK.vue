<template>
    <div class="" style="background-color: #f7f7f7">
        <scroller>
            <div class="lead-card-wrapper">
                <div class="my-card center-bottom-border">               
                    <div class="circle-wraper nx-flex-row items-justify-center ">
                        <div class="profile-circle">
                            <text class="profile-circle-text">VT</text>
                        </div>
                    </div>

                    <div class="nx-flex-row box items-justify-center">
                        <text class="user-name-text bold-text">Vivek Taunk</text>
                    </div>
                    <div class="nx-flex-row items-justify-center">
                        <div>
                            <text class="label-font-size">PROPENSITY TO PAY</text>
                            <div class="pop-status-box nx-flex-row items-justify-center" style="margin-left:20px;margin-bottom: 20px;">
                                <text class="text  pop-status-text">HIGH</text>
                            </div>
                        </div>
                    </div>

                    <div class="nx-flex-row box nx-flex-flow-wrap nx-flex-wrap">
                        <div v-for="(details, pi) in renewalsProfileCard" :key="pi" class="pop-up-col-width">
                            <text class="label-font-size">{{details.labelName}}</text>
                            <text class="text">{{details.value}}</text>
                        </div>

                    </div>
                </div>
                <div class="my-card center-bottom-border">

                    <div class="box">
                        <text class="sub-header-font">Policy Details</text>
                    </div>

                    <div class="nx-flex-row box nx-flex-flow-wrap nx-flex-wrap">
                        <div v-for="(details, pi) in policyDetails" :key="pi" class="pop-up-col-width">
                            <text class="label-font-size">{{details.labelName}}</text>
                            <text class="text">{{details.value}}</text>
                        </div>
                    </div>
                

                <div class=" nx-flex-row">
                    <div class="box">
                        <text class="label-font-size">{{breakUps[0].labelName}}</text>
                        <text class="text">{{breakUps[0].value}}</text>
                    </div>
                    <div class="box" style="margin-left:35px" @click="breakupShow = !breakupShow">
                        <text class="text" style="color: blue;">View break up</text>
                    </div>
                    
                </div>

                <scroller v-if="platform !== 'Web'" class="scroller" scroll-direction="horizontal">
                    <div v-if="breakupShow === true" class="nx-flex-row box" style="overflow:auto">
                        <div v-for="(details, pi) in breakUps" :key="pi" class="">
                            <div v-if="details.labelName !== 'Net Premium Payable'" class="nx-flex-row items-align-center">
                                <div>
                                    <text class="label-font-size">{{details.labelName}}</text>
                                    <text class="text">{{details.value}}</text>
                                </div>
                                <div style="margin-left: 5px;margin-right:5px">
                                    <text class="text">{{details.operator}} </text>
                                </div>

                            </div>

                        </div>

                    </div>
                </scroller>
                </div>

                <!-- advisorDetails -->
                <div class="my-card center-bottom-border">
                    <div class="box">
                        <text class="sub-header-font">Advisor Details</text>
                    </div>
                    <div class="nx-flex-row box nx-flex-flow-wrap nx-flex-wrap">
                        <div v-for="(details, pi) in advisorDetails" :key="pi" class="pop-up-col-width">
                            <text class="label-font-size">{{details.labelName}}</text>
                            <text class="text">{{details.value}}</text>
                        </div>
                    </div>
                </div>


                <!-- button -->

                <!-- <div class="nx-flex-row">
                    <div class="box x-small-btn">
                        <div class="md-custom-btn btn-color" @click="jump('/renewals')">
                            <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/communication/call_white_192x192.png"></image>
                            <text class="md-btn-label ">Back</text>
                        </div>
                    </div>
                </div> -->
                <!-- end -->
            </div>


        </scroller>
    </div>
</template>

<script>



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
                policyDetails: false,
                advisorDetails: false,

                renewalsProfileCard: [{
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
                }],

                policyDetails: [{
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
                }],

                advisorDetails: [{
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
                }],

                breakUps: [{
                    labelName: 'Net Premium Payable',
                    value: '₹ 6,400',
                    operator: '='
                }, {
                    labelName: 'Installment Premium',
                    value: '₹ 6,400',
                    operator: '*'
                }, {
                    labelName: 'No. of Installments',
                    value: '3',
                    operator: '+'
                }, {
                    labelName: 'Interest',
                    value: '₹ 320',
                    operator: '-'
                }, {
                    labelName: 'Suspense Amount',
                    value: '₹ 22',
                    operator: ''
                }],

                breakupShow: false
            }
        },
        methods: {
            jump(navigationLink) {
                if (this.$router) {
                    this.$router.push(navigationLink)
                }
            }

        },
        components: {
            
        }
    }
</script>

<style scoped>
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
    .lead-card-wrapper {
        margin-bottom: 0px;
        background-color: #f7f7f7;
        flex-direction: column;
        align-items: center;
        padding-top:20px;
    }
    
    .scroller {
        flex-direction: row;
        /* height: 120px; */
    }

    .my-card {
        border-radius: 10px;
        background-color: #fff;
        margin-bottom: 20px;
        padding: 20px;
        width: 720px;
    }
    
    .card-padding {
        padding: 20px;
    }
    
    .box {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .text {
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
        font-size: 27px;
        font-weight: 400;
        color: #9d9d9d;
        font-family:robotoregular;
    }
    
    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .lead-card-wrapper {
        margin-left: 0px;
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
    
    .call-active:active {
        background-color: #dfdfdf;
        border-radius: 60px;
    }
    
    .profile-circle-text {
        position: absolute;
        top:30px;
        left: 25px;
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
        height: 100px;
        width: 100px;
        padding: 10px;
    }
    
    .center-bottom-border {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        margin-left:20px;
        margin-right: 20px
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
        background-color: #3b371e;
        border-radius: 7px;
        /* width: 140px; */
    }
    
    .btn-width {
        width: 200px;
    }
    
    .pop-up-col-width {
        width: 320px;
        margin-bottom: 20px;
    }
    
    .pop-status-box {
        padding: 10px;
        background-color: #098c09;
        border-radius: 15px;
        margin-top: 5px;
        margin-bottom: 10px;
        width: 200px
    }
    
    .pop-status-text {
        font-weight: bold;
        color: #fff;
        font-family:robotoregular;
    }
    
    .sub-header-font {
        font-size: 30px;
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .btn-color {
        background-color: rgb(33, 34, 35);
    }
    
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 88px;
        cursor: pointer;
    }
    
    .md-btn-label {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family:robotoregular;
    }
    
    .md-custom-btn:active {
       opacity:0.8;
    }
    
    .md-btn-width {
        width: 300px;
    }
    
    .x-small-btn {
        width: 210px;
    }
    
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
</style>