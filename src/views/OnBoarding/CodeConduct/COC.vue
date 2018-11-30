<template>
    <div style="background-color: #f7f7f7;">
    <!-- 
          <on-tab></on-tab> -->
        <scroller class="scroller">
            <div class="container">
                <!-- <app-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></app-header> -->

                <div class="side-container page-animation" ref="pagewrap">
                   <div class="card-coc row card-row">
                        <div class="table-row-heading" style="flex-direction: column;"> 
                       <text class="heading card-title-border codeconduct-width">Code of Conduct</text>
                      </div>
                        <div class="table-row-data" style="flex-direction: column;">
                            <!-- Updated -->
                           
                
                               
                                    <text class="heading">1) Every insurance agent shall</text>
        
                          
                        </div>
                        <div class="table-row-data" style="flex-direction: column;">
                            <div class="" style="flex-direction: row" v-for="(content, list) in instPoints" :key="list">
                                <div class="code-condect-container">
                                    <text class="form-title">{{String.fromCharCode(97 + list)}}.</text>
                                </div>
                                <div class="code-condect-container code-condect-container-width">
                                    <text class="form-title">{{content}}</text>
                                </div>

                            </div>
                        </div>

                        <div class="table-row" style="flex-direction: column;">
                            <div style="flex-direction:row">
                                <div class="code-condect-container">
                                    <text class="heading">2)</text>
                                </div>
                                <div class="code-condect-container">
                                    <text class="heading">No insurance agent shall</text>
                                </div>
                            </div>
                        </div>
                        <div class="table-row-data" style="flex-direction: column;">
                            <div class="" style="flex-direction: row" v-for="(content, list) in instructTwo" :key="list">
                                <div class="code-condect-container">
                                    <text class="form-title">{{String.fromCharCode(97 + list)}}.</text>
                                </div>
                                <div class="code-condect-container code-condect-container-width">
                                    <text class="form-title">{{content}}</text>
                                </div>

                            </div>
                        </div>
                        <div class="table-row" style="flex-direction: column;padding-bottom:15px">
                            <div style="flex-direction:row">
                                <div class="code-condect-container">
                                    <text class="heading">3)</text>
                                </div>
                                <div class="code-condect-container code-condect-container-width">
                                    <text class="heading">Every insurance agent shall, with a view to conserve the insurance business already procured through him, make every attempt to ensure remittance of the premiums by the policyholders within the stipulated time, by giving notice to the policyholder orally and in writing</text>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div v-if="platform ==='Web'" class="card-coc btn-space code-condect-margin-btm" style=" flex-direction:row;padding:12px; ">
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color" @click.native="jump('/masteronboard/onbdocument')">
                                <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"/>
                                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                            </div> -->
                              <div class="btn-space">
									<s-button @click.native="jump('/masteronboard/onbmasterdoc/onprofiledocument')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>
                        </div>
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color" @click.native="jump('/masteronboard/codedetails/codeagreement')">
                                <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                                <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"/>
                            </div> -->
                             <div 
                                @click.native="jump('/masteronboard/codedetails/codeagreement')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>

                    <div v-if="platform !=='Web'" class="card-coc btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/masteronboard/onbdocument')">
                                <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"/>
                                <text class="md-sec-btn-label ">Previous</text>
                            </div> -->
                              <div class="btn-space">
									<s-button @click="jump('/masteronboard/onbmasterdoc/onprofiledocument')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>
                        </div>
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color" @click="jump('/masteronboard/codedetails/codeagreement')">
                                <text class="md-btn-label text-color-white">Proceed</text>
                                <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"/>
                            </div> -->
                             <div 
                                @click="jump('/masteronboard/codedetails/codeagreement')">
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
    const instruction = [
        'Identify himself and the insurance company of whom he is an insurance agent.',
        'Show the agency identity card to the prospect, and also disclose his agency appointment letter to the prospect on demand.',
        'Disseminate the requisite information in respect of insurance products offered for sale by his insurer and take into account the needs of the prospect while recommending a specific insurance plan',
        'where the Insurance agent represents more than one insurance company offering same line of products, he should dispassionately advice the policyholder on the products of all Insurers whom he is representing and the product best suited to the specific needs of the prospect',
        'Disclose the scales of commission in respect of the insurance product offered for sale, if asked by the prospect',
        'Indicate the premium to be charged by the insurer for the insurance product offered for sale',
        'Explain to the prospect the nature of information required in the proposal form by the insurer, and also the importance of disclosure of material information in the purchase of an insurance contract',
        'bring to the notice of the insurer any adverse habits or income inconsistency of the prospect, in the form of a report called “Insurance Agent’s Confidential Report” along with every proposal submitted to the insurer, and any material fact that may adversely affect the underwriting decision of the insurer as regards acceptance of the proposal, by making all reasonable enquiries about the prospect',
        'Obtain the requisite documents at the time of filing the proposal form with the insurer; and other documents subsequently asked for by the insurer for completion of the proposal',
        'Advise every prospect to effect nomination under the policy',
        'Inform promptly the prospect about the acceptance or rejection of the proposal by the insurer',
        'Render necessary assistance and advice to every policyholder on all policy servicing matters including assignment of policy, change of address or exercise of options under the policy or any other policy service, wherever necessary',
        'Render necessary assistance to the policyholders or claimants or beneficiaries in complying with the requirements for settlement of claims by the insurer'
    ];

    const instructTwo = [
        'Solicit or procure insurance business without being appointed to act as such by the insurer',
        'Induce the prospect to omit any material information in the proposal form',
        'Induce the prospect to submit wrong information in the proposal form or documents submitted to the insurer for acceptance of the   proposal',
        'Resort to multilevel marketing for soliciting and procuring insurance policies and/or induct any prospect/policyholder to join a multilevel level marketing scheme',
        'Behave in a discourteous manner with the prospect',
        'Interfere with any proposal introduced by any other insurance agent',
        'Offer different rates, advantages, terms and conditions other than those offered by his insurer',
        'Demand or receive a share of proceeds from the beneficiary under an insurance contract',
        'Force a policyholder to terminate the existing policy and to effect a new policy from him within three years from the date of such termination of the earlier policy',
        'Apply for fresh agency appointment to act as an insurance agent, if his agency appointment was earlier cancelled by the designated official, and a period of five years has not elapsed from the date of such cancellation',
        'Become or remain a director of any insurance company'
    ];
    const items = ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"];

    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    import {
        WxcRadio
    } from 'weex-ui'
    import appHeader from '../../../components/OnBoarding/CodeHeader.vue'
    import onTab from '../OnBoardTab.vue'
     import PButton from '../../../components/vx-primary-button/vx-primary-button.vue'
    import SButton from '../../../components/vx-primary-button/vx-scondary-button'   
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
            appHeader,
            onTab,PButton,SButton
        },
        data() {
            return {
                headerName: 'Code Of Conduct',
                instPoints: instruction,
                instructTwo,
                deviceWidth: invalid,
                platform: invalid,
                index: -1,
                show1: false,
                show2: false,
                show3: false,

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
    .row {
        flex-direction: column
    }
    .card-coc {
             margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;

    }

    .code-condect-container-width {
        width: 600px;
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
    
    .heading {
        font-size: 25px;
        padding-top: 20px;
        font-family: robotobold;
        ;
        font-family: robotoregular;
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
        padding: 3px;
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
    
    .switch {
        margin-top: 16px;
    }
    
    .btn-space {
        justify-content: space-between
    }
    
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
    
    .md-btn-width {
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
    .codeconduct-width{
width: 200px;
    }
    .card-row{
        
             margin-bottom:20px;
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
    
    .table-row {
               padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

    }
      .table-row-heading {
         padding-left: 10px;
        padding-right: 10px;
        /* padding-top: 10px; */

        
    }
           .table-row-data {
                    padding-left: 10px;
       
  
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
        padding: 5px;
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
    
    .table-row-col-details {
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

    .code-condect-container {
        padding: 10px;
    }
    .code-condect-margin-btm {
        margin-bottom: 20px;
    }
    
    @media only screen and (min-width: 320px) {
          .card-coc {
              border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


    }
      .table-row {
              padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;

    }
              .table-row-data {
     padding-left: 10px;
        padding-top: 0px;
        flex-direction:column;

  
         }
          .codeconduct-width{
width: 120px;
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
        .table-row-col-details {
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
            padding-bottom:05px;
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
        .table-row {
            flex-direction: column;
        }
        .table-row-col-details {
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
        .md-btn-width {
            width: 50%;
        }
        .code-condect-container {
            padding: 5px;
        }

        .code-condect-container-width {
            width: 95%;
        }
    }
    
    @media only screen and (min-width: 768px) {
                .card-coc {
        margin:10px;


    }
     .table-row {
               margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;


    }
                           .table-row-data {
        
        padding-left: 10px;
       
     
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
        .table-row {
            flex-direction: row;
        }
        .table-row-col-details {
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
        .md-btn-width {
            width: 20%;
        }
    }
    @media screen and (min-width:992px) {
           .md-btn-width {
            width: 15%;
        }
       }
</style>