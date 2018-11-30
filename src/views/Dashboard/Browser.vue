<template>
    <div style="background-color: rgb(219, 219, 219);">
        <!-- outer-flex-col : it is a contant class not change -->
        <div class="outer-flex-col">
            <!-- Header -->
            <div class="box sales-drive-header">
                <div class="tab-flex-row">
                    <text class="text">Header</text>
                </div>
            </div>

            <!-- Tab -->
            <div class="box" style="background-color: white; padding-top:5px;">
                <div class="tab-flex-row">
                    <div class="box tab-box-padding">
                        <div class="outer-flex-col justi" style="align-items:center;">
                            <div><text class="tab-font-size">55</text></div>
                            <div><text class="tab-text-font-size">ALL</text></div>
                        </div>
                    </div>

                     

                    <div class="box tab-box-padding">
                        <div class="outer-flex-col justi" style="align-items:center;">
                            <div><text class="tab-font-size">25</text></div>
                            <div><text class="tab-text-font-size">In Force</text></div>
                        </div>
                    </div>

                    <div class="box tab-box-padding">
                        <div class="outer-flex-col justi" style="align-items:center;">
                            <div><text class="tab-font-size">40</text></div>
                            <div><text class="tab-text-font-size">Lapsed</text></div>
                        </div>
                    </div>
                    <div class="box tab-box-padding">
                        <div class="outer-flex-col justi" style="align-items:center;">
                            <div><text class="tab-font-size">03</text></div>
                            <div><text class="tab-text-font-size ">Surrendered</text></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- content body  -->
            <div class="box percent-margin" style="margin-top: 30px;">
                <!-- inside two sections, there for converted to row in browser-->
                <div class="tab-flex-row flex-row-to-column-360">
                    <div class="F">
                        <!-- Renewals Card -->

                        <div>
                            <scroller>
                                <div class="">
                                    <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
                                        <div class="">
                                            <div class="card">
                                                <div class="flex-column">
                                                    <div class="nx-flex-column add-border nx-flex-bt-padd">

                                                        <div class="box" @click="gotoJump">
                                                            <text class="text bold-text">Shahu Patil</text>
                                                        </div>


                                                        <div class="box"><text class="text">BRSMCU155</text></div>
                                                        <div class="box C"><text class="text">Increasing Income (MGB)</text></div>
                                                        <div class="">
                                                            <div class="flex-row flex-direction-change">
                                                                <div class="box">
                                                                    <text class="text bold-text">In Force</text>
                                                                </div>
                                                                <div class="box" style="align-self:center">
                                                                    <image class="icon" src="https://www.materialui.co/materialIcons/action/check_circle_black_24x24.png"></image>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!--<div class="box"><text class="text bold-text">In Force</text></div>-->
                                                        <!--<div class="box">-->
                                                        <!--    <image class="icon" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>-->
                                                        <!--</div>-->
                                                    </div>
                                                    <div class="flex-row flex-direction-change u3-top-margin-col">
                                                        <!-- Class Z is used in small device -->
                                                        <div class="C Z">
                                                            <div class="flex-column C">
                                                                <div class="box ">
                                                                    <text class="text label-text-color">Due Amount</text>
                                                                </div>
                                                                <div class="flex-row flex-direction-change">
                                                                    <div class="box G">
                                                                        <text class="text">₹ 18,004</text>
                                                                    </div>
                                                                    <div class="box C F" @click="toggle()">
                                                                        <text class="text link-color">{{text}}</text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="C X ">
                                                            <div class="flex-column C">
                                                                <div class="box">
                                                                    <text class="text label-text-color">Due Date</text>
                                                                </div>
                                                                <div class="box">
                                                                    <text class="text">₹ 18,004</text>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!-- Collaspeble List -->
                                                    <scroller class="" scroll-direction="horizontal">
                                                        <div v-if="hideShow == true " class="flex-row flex-direction-change flex-nowraping u3-top-margin-col item-alignment flex-row-content-hidden">
                                                            <div class="box">
                                                                <div class="flex-column">
                                                                    <div class="box">
                                                                        <text class="text label-text-color">Installment Premium</text>
                                                                    </div>
                                                                    <div class="box">
                                                                        <text class="text">₹ 6,400</text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Operators -->
                                                            <div class="box">
                                                                <div class="flex-row flex-direction-change">
                                                                    <text class="text">x</text>
                                                                </div>
                                                            </div>

                                                            <div class="box">
                                                                <div class="flex-column">
                                                                    <div class="box">
                                                                        <text class="text label-text-color">No. of Installments</text>
                                                                    </div>
                                                                    <div class="box">
                                                                        <text class="text">3</text>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="box">
                                                                <div class="flex-row flex-direction-change">
                                                                    <text class="text">+</text>
                                                                </div>
                                                            </div>

                                                            <div class="box">
                                                                <div class="flex-column">
                                                                    <div class="box">
                                                                        <text class="text label-text-color">Interest</text>
                                                                    </div>
                                                                    <div class="box">
                                                                        <text class="text">₹ 320</text>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div class="box">
                                                                <div class="flex-row flex-direction-change">
                                                                    <text class="text">-</text>
                                                                </div>
                                                            </div>

                                                            <div class="box">
                                                                <div class="flex-column">
                                                                    <div class="box">
                                                                        <text class="text label-text-color">Suspense Amount</text>
                                                                    </div>
                                                                    <div class="box">
                                                                        <text class="text">₹ 22</text>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div class="box">
                                                                <div class="flex-row flex-direction-change">
                                                                    <text class="text">=</text>
                                                                </div>
                                                            </div>


                                                            <div class="box">
                                                                <div class="flex-column">
                                                                    <div class="box">
                                                                        <text class="text label-text-color">Net Premium Payable</text>
                                                                    </div>
                                                                    <div class="box">
                                                                        <text class="text">₹ 6,400</text>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </scroller>
                                                </div>
                                            </div>
                                            <!--Card ends here-->
                                        </div>
                                        <!--Shadow ends here-->
                                    </div>
                                </div>
                            </scroller>
                        </div>

                        <!-- End Renewals Card -->
                    </div>
                    <div class="box G small-left-margin-row" style="background-color:#fff">
                        <!-- Side Card -->

                        <div class="box">
                            <div class="nx-flex-row item-alignment">
                                <div class="box flex-2">
                                    <div class="circle">
                                        <text class="circle-text">VT</text>
                                    </div>
                                </div>
                                <div class="box flex-7">
                                    <div class="flex-column">
                                        <div class="box">
                                            <text class="name-text-size bold-text">Vivek Taunk</text>
                                        </div>
                                        <div class="box box-update">
                                            <text class="text font-10px">PROPENSITY TO PAY</text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-column x-panel" style="background-color:#fff;">
                                <div class="box btm-profile-padding">
                                    <div class="nx-flex-row">
                                        <div class="box flex-2">
                                            <text class="text label-text-color">ID:</text>
                                        </div>
                                        <div class="box flex-4">
                                            <text class="text">BRDMC0024</text>
                                        </div>
                                        <div class="box flex-2">
                                            <text class="text label-text-color">DOB:</text>
                                        </div>
                                        <div class="box flex-4">
                                            <text class="text">15/09/1989</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="box btm-profile-padding">
                                    <div class="nx-flex-row">
                                        <div class="box flex-2">
                                            <text class="text label-text-color">City:</text>
                                        </div>
                                        <div class="box flex-4">
                                            <text class="text">Mumbai</text>
                                        </div>
                                        <div class="box flex-2">
                                            <text class="text label-text-color">State:</text>
                                        </div>
                                        <div class="box flex-4">
                                            <text class="text">Maharashtra</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="box btm-profile-padding">
                                    <div class="nx-flex-row">
                                        <div class="box C">
                                            <text class="text label-text-color">Mobile:</text>
                                        </div>
                                        <div class="box flex-5">
                                            <text class="text">+91 8106312874</text>
                                        </div>
                                        <!--<div class="box flex-2">-->
                                        <!--    <text class="text"></text>-->
                                        <!--</div>-->
                                        <!--<div class="box flex-4">-->
                                        <!--    <text class="text"></text>-->
                                        <!--</div>-->
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="nx-flex-row">
                                        <div class="box C">
                                            <text class="text label-text-color">Email:</text>
                                        </div>
                                        <div class="box flex-5">
                                            <text class="text">vivek@gmail.com</text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--gg-->
                            <div class="box flex-list-btn-pad add-border" @click="policyDetails =! policyDetails">
                                <div class="tab-flex-row item-alignment flex-space-between">
                                    <div class="box">
                                        <text class="text">Policy Details</text>
                                    </div>
                                    <div class="box">
                                        <image class="icon-list" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_down_black_24x24.png"></image>
                                    </div>
                                </div>
                            </div>

                            <div class="box x-panel add-border" v-if="policyDetails == true">

                                <!-- Browser device level flex size work on 320 viewport -->
                                <div class="nx-flex-row item-alignment btm-profile-padding">
                                    <div class="box flex-3">
                                        <text class="text label-text-color">Policy No.:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">0012TRA871</text>
                                    </div>
                                    <div class="box flex-3">
                                        <text class="text label-text-color">Issued on:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">12/12/2015</text>
                                    </div>
                                </div>
                                <div class="nx-flex-row item-alignment btm-profile-padding">
                                    <div class="box flex-3">
                                        <text class="text label-text-color">Policy Term:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">10 Year</text>
                                    </div>
                                    <div class="box flex-3">
                                        <text class="text label-text-color">ECS Active:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">Yes</text>
                                    </div>
                                </div>
                                <div class="nx-flex-row item-alignment btm-profile-padding">
                                    <div class="box flex-3">
                                        <text class="text label-text-color">Add Frequency:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">Annual</text>
                                    </div>
                                    <div class="box flex-3">
                                        <text class="text label-text-color">Premium Type:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">Regular</text>
                                    </div>
                                </div>

                                <div class="nx-flex-row item-alignment">
                                    <div class="box flex-3">
                                        <text class="text label-text-color">Last Premium Paid On:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">16/02/2016</text>
                                    </div>
                                    <div class="box flex-3">
                                        <text class="text label-text-color">Mode of Payment:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">Cheque</text>
                                    </div>
                                </div>
                            </div>

                            <div class="box flex-list-btn-pad add-border" @click="advisorDetails =! advisorDetails">
                                <div class="tab-flex-row item-alignment flex-space-between">
                                    <div class="box">
                                        <text class="text">Advisor Details</text>
                                    </div>
                                    <div class="box">
                                        <image class="icon-list" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_down_black_24x24.png"></image>
                                    </div>
                                </div>
                            </div>

                            <div class="box x-panel" v-if="advisorDetails == true">
                                <div class="nx-flex-row item-alignment btm-profile-padding">
                                    <div class="box C">
                                        <text class="text label-text-color">Name:</text>
                                    </div>
                                    <div class="box flex-5">
                                        <text class="text">Amrita Sariya</text>
                                    </div>
                                </div>
                                <div class="nx-flex-row item-alignment btm-profile-padding">
                                    <div class="box flex-2">
                                        <text class="text label-text-color">Mobile:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">+91 9876673443</text>
                                    </div>
                                    <div class="box flex-2">
                                        <text class="text label-text-color">Advisor Code:</text>
                                    </div>
                                    <div class="box flex-4">
                                        <text class="text">HYD8215</text>
                                    </div>
                                </div>
                                <div class="nx-flex-row item-alignment">
                                    <div class="box C">
                                        <text class="text label-text-color">Email:</text>
                                    </div>
                                    <div class="box flex-5">
                                        <text class="text">vivek@gmail.com</text>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <!-- Side Card End -->
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    export default {
        data: function() {
            return {
                hideShow: true,
                text: 'View Break-up',
                numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                policyDetails: true,
                advisorDetails: true
            }
        },
        methods: {

            toggle() {
                if (this.hideShow == this.hideShow) {
                    this.hideShow = !this.hideShow;
                    if (this.text == 'View Break-up') {
                        this.text = 'Hide Break-up';
                    } else {
                        this.text = 'View Break-up';
                    }
                }
            },
            gotoJump () {
                navigator.push({
                url: createURL('/pcard'),
                animated: 'true'
            })
      }
        }
    }
</script>

<style scoped>
    /*Horizontal Scroller*/
    
    .scroller {
        width: 1200px;
    }

    .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:120px;
    }
    
    .percent-margin {
        margin-left:10px;
        margin-right: 10px;
    }
    
    .flex-row-to-column-360 {
        flex-direction: column;
    }
    
    .tab-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .tab-font-size {
        font-size: 50px;
    }
    .tab-text-font-size {
        font-size: 32px;
      }
    
    .tab-box-padding {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px; 
        margin-right: 40px;
    }
    
    .list {
        background-color: #e7e7e7;
        padding-top: 20px;
        padding-right: 20px;
        padding-left: 20px;
    }
    
    .u3-x-margin-btm {
        margin-bottom: 10px;
    }
    
    .card {
        background-color: #ffffff;
        border-radius: 5px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
    }
    
    .x-top-margin {
        margin-top: 10px;
    }
    
    .link-color {
        color: blue;
    }
    
    .flex-row {
        flex-direction: column;
        flex-wrap: wrap;
    }
    /* For APK */
    
    .nx-flex-column {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .nx-flex-bt-marg {
        margin-bottom: 20px;
    }
    
    .justi {
        justify-content: center;
    }
    
    .item-alignment {
        align-items: center;
    }
    
    .flex-direction-change {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .flex-column {
        flex-direction: column;
    }
    
    .flex-nowraping {
        flex-wrap: nowrap;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .shadow {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
    }
    
    .box {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }
    
    .u3-top-margin-col {
        margin-top: 10px;
    }
    
    .C {
        flex: 1
    }
    /*.flex-2 {*/
    /*  flex:2;*/
    /*}*/
    
    .text {
        font-size: 25px;
    }
    
    .label-text-color {
        color: #9b9999;
    }
    
    .bold-text {
        font-weight: bold;
    }
    
    .g-back-color {
        background-color: rgb(82, 160, 47);
    }
    
    .b-back-color {
        background-color: rgb(38, 96, 172);
    }
    
    .r-back-color {
        background-color: rgb(252, 145, 198);
    }
    
    .icon {
        width: 25px;
        height: 25px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }
    /*This class is used to positioning the element "in force and icon"*/
    
    .positioning {
        position: absolute;
        left: 550px;
        top: 0;
    }

    /* Side Card APK Classes */
    .nx-flex-row {
        flex-direction: row;
    }
    
     .circle {
        width: 120px;
        height: 120px;
        background-color: #ed6015;
        /*background-color: #000;*/
        border-radius: 70px;
    }
    
    .name-text-size {
        font-size: 35px;
    }
    
    .x-panel {
        background-color: #f9f9f9;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .flex-2 {
        flex: 2;
    }
    
    .flex-3 {
        flex: 3;
    }
    
    .flex-4 {
        flex: 4;
    }
    
    .flex-5 {
        flex: 5;
    }
    
    .flex-6 {
        flex: 6;
    }
    
    .flex-7 {
        flex: 7;
    }
    
    .icon-list {
        width: 30px;
        height: 30px;
    }
    
    .flex-space-between {
        justify-content: space-between;
    }
    
    .flex-list-btn-pad {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        /*height:80px;*/
    }
    
    .circle-text {
        position: absolute;
        top: 33px;
        left: 28px;
        font-size: 50px;
        font-weight: bold;
        color: #fff;
    }

    /* High Resolution Laptops and Desktops */
    @media (min-width: 1281px) {
        .outer-flex-col {
            flex-direction: column;
        }

        .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:50px;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .percent-margin {
            margin-left:10%;
            margin-right: 10%;
        }
        
        .tab-font-size {
            font-size: 50px;
        }
        .tab-text-font-size {
            font-size: 16px;
        }
        .tab-box-padding {
            /* padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px; */
            margin-right: 40px;
        }
        .justi {
            justify-content: center;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: center;
        }
        .list {
            
            padding-top: 0px;
            padding-right: 0px;
            padding-left: 0px;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
            /* background-color: #dd1818; */
        }
        .scroller {
            display: none;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
      
        .G {
            flex: 2;
        }
        .F {
            flex: 4;
        }
        
        /* This margin is used in browser only */
        .percent-margin {
            margin-left:10%;
            margin-right:10%;
        }
        .u3-top-margin-col {
            margin-top: 10px;
        }

        .small-left-margin-row {
            margin-left: 20px;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        /* Side Profile Card */
        .circle {
            width: 50px;
            height: 50px;
            background-color: #ed6015;
            /*background-color: #000;*/
            border-radius: 50px;
        }
        .name-text-size {
            font-size: 18px;
        }
        .circle-text {
            position: absolute;
            top: 25%;
            left: 18%;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            /* background: blue; */
        }
        .font-10px {
            font-size: 10px;
        }
        
    }

    @media (max-width: 1024px) {
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }
        /* This flex column is root and dose not change at diffrent view port */
        .outer-flex-col {
            flex-direction: column;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .tab-font-size {
            font-size: 50px;
        }
        .tab-text-font-size {
            font-size: 16px;
        }
        .tab-box-padding {
            /* padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px; */
            margin-right: 40px;
        }
        .justi {
            justify-content: center;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-row {
            flex-direction: column;
        }
        .list {
            
            padding-top: 0px;
            padding-right: 0px;
            padding-left: 0px;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .scroller {
            display: none;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
      
        .G {
            flex: 2;
        }
        .F {
            flex: 4;
        }
        
        /* This margin is used in browser only */
        .percent-margin {
            margin-left:15px;
            margin-right:15px;
        }
        .u3-top-margin-col {
            margin-top: 10px;
        }
        .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:50px;
        }

        .small-left-margin-row {
            margin-left: 15px;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        /* Side Profile Card */
        .circle {
            width: 50px;
            height: 50px;
            background-color: #ed6015;
            /*background-color: #000;*/
            border-radius: 50px;
        }
        .name-text-size {
            font-size: 18px;
        }
        .circle-text {
            position: absolute;
            top: 25%;
            left: 18%;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            /* background: blue; */
        }
        .font-10px {
            font-size: 10px;
        }

        .x-panel {
            /* background-color: #f9f9f9; */
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    
    @media (max-width: 768px) {
        .scroller {
            display: none;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .list {
            background-color: #e7e7e7;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        .G {
            flex: 2;
        }
        .F {
            flex: 4;
        }

        .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:50px;
        }
        
    }
    
    @media (max-width: 480px) {
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .scroller {
            display: none;
        }
        .text {
            font-size: 14px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
    }
    
    @media (max-width: 640px) {
        .item-alignment {
            align-items: center;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .G {
            flex: 1;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .scroller {
            display: none;
        }
    }
    
    @media (max-width: 360px) {
        .scroller {
            overflow: auto;
        }
        .flex-row {
            flex-direction: column;
        }
        .item-alignment {
            align-items: left;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: nowrap;
            /* flex-wrap: wrap; */
        }
        .flex-row-content-hidden {
            overflow: scroll;
            /* background-color: green; */
        }
        .list {
            background-color: #e7e7e7;
            padding-top: 0px;
            padding-right: 0px;
            padding-left: 0px;
        }
        .card {
            background-color: #FFF;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .text {
            font-size: 14px;
        }
        .E {
            flex: 2;
        }
        .F {
            flex: 2;
        }
        .Z {
            flex: 3;
        }
        .X {
            flex: 2;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        /* Side Card */
         .circle {
            width: 50px;
            height: 50px;
            background-color: #ed6015;
            /*background-color: #000;*/
            border-radius: 50px;
        }
        .name-text-size {
            font-size: 18px;
        }
        .circle-text {
            position: absolute;
            top: 13px;
            left: 10px;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            /* background: blue; */
        }
        .btm-profile-padding {
            padding-bottom: 0px;
        }
        .box-update {
            padding-top: 0px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        .flex-list-btn-pad {
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 10px;
            padding-right: 3px;
            /*height:80px;*/
        }

        .flex-row-to-column-360 {
            flex-direction: column;
        }

        .nx-flex-column {
            flex-direction: column;
            flex-wrap: wrap;
        }

        .small-left-margin-row {
            margin-left: 0;
        }

        .percent-margin {
            margin-left:5px;
            margin-right:5px;
        }

        .nx-flex-row {
            flex-direction: row;
        }

        .text {
            font-size: 13px;
        }
        
    }
</style>