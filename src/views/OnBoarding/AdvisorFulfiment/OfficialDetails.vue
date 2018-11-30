<template>
    <div style="background-color: #f7f7f7;">

        <!-- <app-header></app-header> -->
        <!-- <inner-header  :headeTitle="headerName"  ></inner-header>
            <on-tab></on-tab> -->
        <scroller class="scroller">
            <div class="container">
                <!-- <prop-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></prop-header> -->

                <div class="side-container page-animation" ref="pagewrap" >
                    <div class="card-onbofficial row box-padding" >
                        <div class="table-row-onbpersonal-heading mt-20" style="flex-direction: column;"> 
                       <text class="heading card-title-border onbofficial-width">Official Details</text>
                      </div>
                        <div class="table-row-onbpersonal  mt-20" style="flex-direction: column;">
                            <text class="heading">Notes and Instructions</text>
                        </div>
                        <div class="table-row-onbpersonal mt-20" style="flex-direction: column;">
                            <!-- Main Points -->
                            <div style="flex-direction: row" v-for="(content ,insIndex) in instruction" :key="insIndex">
                                <div class="official-container">
                                    <text class="form-title">{{insIndex + 1}}.</text>
                                </div>
                                <div class="official-container official-container-width">
                                    <text class="form-title">{{content}}</text>
                                </div>
                            </div>

                            <!-- Sub points -->
                            <div class="table-row-onbpersonal" style="flex-direction: column;">
                                <div style="flex-direction: row" v-for="(content ,insIndex) in subPoints" :key="insIndex">
                                    <div class="official-container">
                                        <text class="form-title">{{String.fromCharCode(97 + insIndex)}}.</text>
                                    </div>
                                    <div class="official-container official-container-width">
                                        <text class="form-title">{{content}}</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-row-onbpersonal mt-20 " style="flex-direction: column;">
                            <text class="heading">For your Careful Consideration</text>
                        </div>
                        <div class="table-row-onbpersonal mt-20" style="flex-direction: column;">
                            <div style="flex-direction: row">
                                <div class="official-container">
                                    <text class="form-title">a</text>
                                </div>
                                <div class="official-container official-container-width">
                                    <text class="form-title">All the questions are to be answered in detail</text>
                                </div>
                            </div>
                            <div style="flex-direction: row">
                                <div class="official-container">
                                    <text class="form-title">b</text>
                                </div>
                                <div class="official-container official-container-width">
                                    <text class="form-title">Your appointment is subject to the provisions of Guidelines on Appointment of Insurance Agent</text>
                                </div>
                            </div>

                        </div>
                        <div class="table-row-onbpersonal mt-20" style="flex-direction: column;">
                            <text class="heading">Advisor Details</text>
                        </div>
                        <div class="table-row-onbpersonal" >
                            <div style="flex-direction: column;flex:1" class="mb-20 mobile-top-20">
                                <!-- <text class="form-title">Client Number</text>
                                <input class="input" type="text" style="flex:1" /> -->

                                <vx-input-box
                                    vx-label="Client Number"
                                    vx-placeholder="Enter Client Number"
                                    :vx-model="formData.clientNumber">
                                </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1" class="table-row-onbpersonal-col-details mobile-top-20 mb-20">
                                <!-- <text class="form-title">Advisor Code Number</text>
                                <input class="input" type="tel" style="flex:1" /> -->

                                <vx-input-box
                                    vx-label="Advisor Code Number"
                                    vx-placeholder="Enter Advisor Code Number"
                                    :vx-model="formData.advisorCodeNumber">
                                </vx-input-box>
                            </div>

                        </div>
                        <div class="table-row-onbpersonal">
                            <div style="flex-direction: column;flex:1" class="mb-20 mobile-top-20">
                                <!-- <text class="form-title">SM/CDA Code</text>
                                <input class="input" type="text" style="flex:1" /> -->
                                 <vx-input-box
                                    vx-label="SM/CDA Code"
                                    vx-placeholder="Enter SM/CDA Code"
                                    :vx-model="formData.MCDACode">
                                </vx-input-box>

                            </div>
                            <div style="flex-direction: column;flex:1" class="table-row-onbpersonal-col-details mb-20 mobile-top-20">
                                <!-- <text class="form-title">Sales Unit Code</text>
                                <input class="input" type="tel" style="flex:1" /> -->
                                 <vx-input-box
                                    vx-label="Sales Unit Code"
                                    vx-placeholder="Enter Sales Unit Code"
                                    :vx-model="formData.SalesUnitCode">
                                </vx-input-box>

                                
                            </div>
                        </div>

                        <div class="table-row-onbpersonal"> 
                            <div style="flex-direction: column;flex:1" class="table-row-onbpersonal-details mobile-top-20 mobile-mt-10">
                                <text  class="form-title">CSC Branch Location</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="branch">{{value}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select class="cursor-pointer-globle" style="flex:1">
                                             <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="(calc, li) in branchListWeb" :key="li">{{calc}}</option>
                                    </select>
                                </div>
                            </div>
                            <div style="flex-direction: column;flex:1" class="table-row-onbpersonal-col-details mobile-top-20 mb-20">
                                <!-- <text class="form-title">Sales Unit Code</text>
                                <input class="input" type="tel" style="flex:1" /> -->
                                 <!-- <vx-input-box
                                    vx-label="Sales Unit Code"
                                    vx-placeholder="Enter Sales Unit Code"
                                    :vx-model="formData.SalesUnitCode">
                                </vx-input-box> -->

                                
                            </div>
                        </div>
                    </div>

                    <div v-if="platform ==='Web'" class="card-onbofficial btn-space official-margin-btm" style=" flex-direction:row;padding:12px;margin-bottom:20px;">
                        <div class="box onboard-officiadetails-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/home')">
                                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                            </div> -->
                             <div class="btn-space">
									<s-button @click.native="jump('/masteronboard/advisordetails/official')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>

                        </div>
                        <div class="box onboard-officiadetails-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="jump('/masteronboard/advisordetails/onbpersonal')">
                                <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                                <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                            <div 
                                @click.native="jump('/masteronboard/advisordetails/onbpersonal')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>

                    <div v-if="platform !=='Web'" class="card-onbofficial btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                        <div class="box onboard-officiadetails-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/home')">
                                <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label ">Previous</text>
                            </div> -->
                             <div class="btn-space">
									<s-button @click="jump('/masteronboard/advisordetails/official')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                                    </div>
                        </div>
                        <div class="box onboard-officiadetails-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color" @click="jump('/masteronboard/advisordetails/onbpersonal')">
                                <text class="md-btn-label text-color-white">Proceed</text>
                                <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                             <div  
                                @click="jump('/masteronboard/advisordetails/onbpersonal')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>
    
<script>
    const items = ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"];

    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    import {
        WxcRadio
    } from 'weex-ui'
    import propHeader from '../../../components/OnBoarding/OnboardHeader.vue'
    import onTab from '../OnBoardTab.vue'
    import vxInputBox from '../../../components/vx-input-box/vx-input-box.vue'
    import PButton from "../../../components/vx-primary-button/vx-primary-button.vue";
    import SButton from "../../../components/vx-primary-button/vx-scondary-button";   
    //   import appHeader from '../../../components/Onboarding/Header.vue'


    var animation = weex.requireModule('animation');
    export default {
        mounted() {

            var pagewrap = this.$refs.pagewrap;
            animation.transition(pagewrap, {
                styles: {
                    opacity: '1'
                },
                duration: 200, //ms
                timingFunction: 'ease-in',
                // transform: 'translate(1100px,100px)',
                delay: 100 //ms
            }, function() {

                // modal.toast({ message: 'animation finished.' })
                console.log(pagewrap, 'logggmix in ')
                    // var btn01 = this.$refs.btn1;


            })
        },
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            WxcRadio,
            propHeader,
            onTab,
            vxInputBox,PButton,SButton
        },
        data() {
            return {
                headerName: 'Advisor Fulfilmemt',
                deviceWidth: invalid,
                platform: invalid,
                index: -1,
                show1: false,
                show2: false,
                show3: false,
                formData: {
                    clientNumber: '',
                    advisorCodeNumber: '',
                    MCDACode:'',
                    SalesUnitCode:'',
                    SMCDACode:'',
                },

                branchListWeb: ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"],

                checkedInfo: {
                    title: 'option2',
                    value: 2
                },
                list: [{
                    title: 'option1',
                    value: 1
                }, {
                    title: 'option2',
                    value: 2,
                }, {
                    title: 'option3',
                    value: 3
                }, {
                    title: 'option4',
                    value: 4
                }, ],

                instruction: [
                    'The application should be filled in English language.',
                    'Any correction or alteration made in any answer to the questions in the application should be initialed by the applicant.',
                    'An applicant must be at least 18 years of age on the date of the application. The applicant shall furnish proof of age.',
                    'An applicant shall furnish the proof of pass in the pre-recruitment exam conducted by an examination body duly recognized by the Insurance Regulatory and Development Authority of India.',
                    'The following documents should be attached with the application.'
                ],
                subPoints: [
                    'Age Proof (Self-attested)',
                    'Educational Qualification (Self-attested)',
                    'Proof of Pass in the agency examination as mentioned above',
                    'Copy of PAN Card (Self-attested)',
                    'Address Proof (Self-attested)'
                ]
            }
        },
        computed: {
            value() {
                if (this.index == -1) {
                    return "Select ";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            },
        },
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            wxcRadioListChecked(e) {
                this.checkedInfo = e;
            },
            branch() {
                picker.pick({
                        index: this.index,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.value = items[event.data];
                            this.index = event.data;
                        }
                    }
                );
            },

        }
    }
</script>

<style scoped>
    .robotoregular {
        font-family: robotoregular;
    }
    
    .robotobold {
        font-family: robotobold;
    }
    /*Button Arrow CSS*/
    /* .ml-20{
        margin-left: 20px
    } */
    .mobile-bottom-20{
  margin-bottom: 20px;
    }
    .mt-20{
        margin-top:20px
    }
    .mb-20{
margin-top: 10px
    }
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
    
    .row {
        flex-direction: column
    }
    
    .card-onbofficial {
              margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;

    }
    
    .card-subtitle {
        font-size: 22px;
        color: #9D9D9D;
        font-family: robotoregular;
    }
    
    .main-heading {
        font-size: 15px;
        padding-top: 20px;
        font-family: robotobold;
        ;
        font-family: robotoregular;
    }
     .card-title-border {
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 4px;
        border-bottom-color: #3b371e;
     
        font-weight: bold;
    }
    .onbofficial-width{
        width: 180px;
    }
    /* .official-heading-border-width {
        width: 110px;
    } */
    .font-weight-oficial-heading{
        font-weight: bold;
    }
    .btn-space {
            justify-content: space-between
            }
    .heading {
        font-size: 25px;
        padding-top: 20px;
        padding-bottom:05px;
        font-family: robotobold;
        font-family: robotoregular;
    }
    .box-padding{
        padding-left:20px;
        padding-right:20px;
        padding-bottom:20px;
        padding-top:05px
    }
    
    .col1 {
        flex-direction: row;
        margin-top: 25px;
    }
    
    .group {
        position: relative;
        margin-top: 25px;
    }
    
    .container {
        flex-direction: row;
    }
    
    .side-container {
        flex-direction: column;
        flex: 2;
    }
    
    .input {
        display: block;
        background-color: #fff;
        font-size: 24px;
        padding: 15px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .input:focus {
        border-width: 4px;
        border-bottom-color: #2e4053;
    }
       .input-drop {
        display: block;
        background-color: #fff;
        font-size: 28px;
        padding: 20px;
        padding-left:0px;
        /* margin-bottom: 20px; */
        color: #999999;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #999999;
        font-family: robotoregular;
    }
      .input-drop:focus {
        border-width: 2px;
        border-bottom-color: #2e4053;
    }
    
    .switch {
        margin-top: 16px;
    }
    
    /* .btn-space {
        justify-content: space-between
    } */
    
    .btn-color {
        background-color: rgb(80, 80, 80);
    }
    
    .sec-btn-color {
        background-color: #fff;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #000;
        border-right-color: #000;
        border-left-color: #000;
        border-bottom-color: #000;
    }
    
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 80px;
        min-width: 88px;
        position: relative;
       
    }
    
    .md-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
       
        color: #fff;
        font-family: robotoregular;
    }
    
    .md-sec-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
       
        color: #000;
        font-family: robotoregular;
    }
    
    .md-custom-btn:active {
       opacity:0.8;
    }
    
    .onboard-officiadetails-btn-width {
        width: 300px;
    }
    
    .card-btn1 {
        background-color: rgb(80, 80, 80);
        width: 340px;
        border-radius: 7px;
        margin-left: 10.6797px;
        margin-right: 20px;
        margin-right: 20px;
        padding: 25px;
        justify-content: center;
        -webkit-box-pack: center;
    }
    
    .card-btn2 {
        background-color: #505050;
        border-radius: 7px;
        margin-top: 15px;
        /* width: 340px; */
        padding: 25px;
        justify-content: center;
    }
    
    .card-btn-text {
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
        font-family: robotoregular;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
        font-family: robotoregular;
    }
    
    .card-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: robotoregular;
    }
    
    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family: robotoregular;
    }
    
    .image {
        width: 500px;
        height: 500px;
    }
    
    .consent {
        white-space: normal;
    }
    
    .form-title {
        font-size: 24px;
        padding-top: 10px;
        color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
        font-family: robotoregular;
    }
    
    .example {
        flex-direction: row;
        justify-content: flex-start;
    }
    
    .label {
        font-size: 22px;
        line-height: 60px;
        width: 350px;
        color: #9d9d9d;
        text-align: right;
        margin-right: 20px;
        font-family: robotoregular;
    }
    
    .table-row-onbpersonal {
         padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

        
    }
      .table-row-onbpersonal-heading {
         padding-left: 10px;
        padding-right: 10px;
        /* padding-top: 10px; */

        
    }
    
    .graph {
        flex-direction: column;
    }
    
    .drop-down {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 8px 0px;
        font-family: robotoregular;
    }
    
    .card-summary {
        margin-top: 10px;
        padding: 20px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .table-row-onbpersonal-col-details {
        margin-left: 0px;
    }
    
    .card-line1 {
        padding: 20px;
    }
    
    .head-row {
        padding: 10px;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #ebebeb;
    }
    
    .head-row1 {
        padding: 10px;
    }
    
    .sub-heading {
        font-family: robotobold;
        ;
        margin-left: 20px;
        font-size: 13px;
        color: #565656;
        font-family: robotoregular;
    }
    
    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-family: robotobold;
        ;
        font-family: robotoregular;
    }
    
    .cal-icn {
        height: 20px;
        width: 20px;
        margin-top: 5px;
    }
    
    .mail-row {
        flex-direction: column;
    }
    
    .radio-data {
        flex-direction: column;
        flex: 0;
    }

    .official-container {
        padding: 10px;
    }
    .official-margin-btm {
        margin-bottom: 20px;
        
    }
        .official-container-width {
        flex:1
        }
    
    
    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
      .card-onbofficial {
            border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;
    }
              .table-row-onbpersonal {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;
    }

          .ml-20{
        margin-left: 0px
    }
    .mt-20{
        margin-top:0px
    }
      .mobile-mt-10{
    margin-top: 10px
      }
      .mobile-top-20{
          margin-top: 20px;
      }
          .onbofficial-width{
        width: 105px;
    }
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }
        .btn-icon-size-right {
            height: 18px;
            width: 18px;
            margin-left: 10px;
        }
        .md-btn-label {
            color: #fff;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
           
            font-family: robotoregular;
        }
        .btn-color {
            background-color: rgb(80, 80, 80);
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
           
            font-family: robotoregular;
        }
        .sec-btn-color {
            background-color: #fff;
            border: 1px solid black
        }
        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 36px;
            min-width: 88px;
            position: relative;
           
        }
        .table-row-onbpersonal-col-details {
            margin-left: 0px;
        }
        .table-head-row {
            flex: 0.9;
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-family: robotobold;
            font-family: robotoregular;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family: robotoregular;
        }
   
   
        .table-row-onbpersonal {
            flex-direction: column;
        }
        .table-row-onbpersonal-col-details {
            margin-left: 0px;
        }
        .mail-row {
            flex-direction: column;
        }
        /* .btn-space {
            justify-content: space-evenly;
        } */
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
            font-family: robotoregular;
        }
        .radio-data {
            flex-direction: column;
            flex: 1
        }
        .onboard-officiadetails-btn-width {
            width: 50%;
        }

        .official-container {
            padding: 5px;
        }
        .official-container-width {
        flex:1
        }
        
    }
    
    @media only screen and (min-width: 768px) {
         .card-onbofficial {
             margin:10px;
    }
    
          .table-row-onbpersonal {
         /* margin-top: 10px; */
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }
      .mobile-top-20{
          margin-top: 20px;
      }

        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-family: robotobold;
            ;
            font-family: robotoregular;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family: robotoregular;
        }
        .table-row-onbpersonal {
            flex-direction: row;
            padding-right: 10px;
        }
        .table-row-onbpersonal-col-details {
            margin-left: 30px;
        }
        .mail-row {
            flex-direction: row;
            flex: 3;
        }
        /* .btn-space {
            justify-content: space-between;
        } */
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
            font-family: robotoregular;
        }
        .radio-data {
            flex-direction: row;
        }
        .onboard-officiadetails-btn-width {
            width: 20%;
        }
    }
    @media screen and (min-width:992px) {
        .onboard-officiadetails-btn-width {
            width: 15%;
        }
    }

</style>