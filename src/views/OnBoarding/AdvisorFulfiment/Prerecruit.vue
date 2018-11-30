<template>
    <div style="flex:1;background-color: #f7f7f7;">

      <scroller class="scroller">
        <div class="container">
            <!-- <prop-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></prop-header> -->

            <div class="side-container page-animation" ref="pagewrap">
                <div class="card-onbrecruit row" style="padding-bottom:20px">
                    <div class="table-row-header" style="flex-direction: column;">
                        <div >
                        <text class="heading card-title-border onbprerecruit-width">Pre- Recruitment Test Details</text>
                        </div>
                    </div>
                    <div class="table-row" style="flex-direction: column;">
                        <text class="form-title">Particulars of pass in pre-recruitment test conducted by the Insurance Institute of India or any</text>
                         <text class="form-title">Examination Body</text>
                    </div>



                    <div class="table-row">
                        <div style="flex-direction: column;flex:1" class="mt-20 mobile-top-20">
                            <!-- <text class="form-title">Name of Examination Body</text>
                            <input class="input" type="text" style="flex:1" /> -->
                             <vx-input-box
                                    vx-label="Name of Examination Body"
                                    vx-placeholder="Enter Name of Examination Body"
                                    :vx-model="formData.Examinationbody">
                            </vx-input-box>
                        </div>
                        <div style="flex-direction: column;flex:1" class="table-row-col-details mobile-top-20 mt-20">
                            <!-- <text  class="form-title">Candidate’s Name</text>
                            <input class="input" type="text" style="flex:1" /> -->
                             <vx-input-box
                                    vx-label="Candidate’s Name"
                                    vx-placeholder="Enter Candidate’s Name"
                                    :vx-model="formData.candidatesName">
                                </vx-input-box>
                        </div>
                    </div>
                    <div class="table-row">
                        <div style="flex-direction: column;flex:1" class="mobile-top-20 mt-20">
                            <!-- <text  class="form-title">Candidate’s Number</text>
                            <input class="input" type="tel" style="flex:1" /> -->
                             <vx-input-box
                                    vx-label="Candidate’s Number"
                                    vx-placeholder="Enter Candidate’s Number"
                                    :vx-model="formData.candidatesNumber">
                                </vx-input-box>
                        </div>
                        <div style="flex-direction: column;flex:1" class="table-row-col-details mobile-top-20 mt-20">
                            <!-- <text  class="form-title">Centre of Examination</text>
                            <input class="input" type="text" style="flex:1" /> -->
                            <!-- Apply new code -->
                            <vx-input-box
                                    vx-label="Centre of Examination"
                                    vx-placeholder="Enter Centre of Examination"
                                    :vx-model="formData.CentreofExamination">
                            </vx-input-box>
                        </div>
                    </div>

                    <div class="table-row">
                        <div style="flex-direction: column;flex:1" class="mobile-top-20 mt-20">
                            <!-- <text  class="form-title">Exam Language</text>
                            <input class="input" type="text" style="flex:1" /> -->
                            <vx-input-box
                                    vx-label="Exam Language"
                                    vx-placeholder="Enter Language"
                                    :vx-model="formData.ExamLanguage">
                             </vx-input-box>
                        </div>
                        <div style="flex-direction: column;flex:1" class="table-row-col-details mobile-top-20 mt-20">
                            <!-- <text  class="form-title">Name of the Exam passed</text>
                            <input class="input" type="text" style="flex:1" /> -->
                            <vx-input-box
                                    vx-label="Name of the Exam passed"
                                    vx-placeholder="Enter Name of the Exam passed"
                                    :vx-model="formData.ExamPassedName">
                            </vx-input-box>
                        </div>

                    </div>

                    <div class="table-row">
                        <div style="flex-direction:column;flex:0.5;" class="table-row-details mobile-top-20 mt-20">
                            <!-- <text class="form-title">Date of Passing</text>
                            <input type="date" placeholder="Input Date" class="input" max="2070-12-12" /> -->
                                <vx-input-box
                                vx-type="date"
                                    vx-label="Date of Passing"
                                    vx-placeholder="Enter Date of Passing"
                                    :vx-model="formData.date">
                            </vx-input-box>
                        </div>
                    </div>

                    <div class="table-row" style="padding-top:0px">
                            <div style="flex-direction:column;flex:1;" class="table-row-details mobile-top-20 mt-20">
                                <!-- <text class="form-title">Details of other Insurance related activities undertaken, if any</text>
                                <input class="input" type="text" style="flex:1" /> -->
                                <vx-input-box
                                    class="details-width"
                                    vx-label="Details of other Insurance related activities"
                                    vx-placeholder="Enter Details of other Insurance related activities"
                                    :vx-model="formData.DetailsofAuthor">
                            </vx-input-box>
                            </div>
                        </div>



                </div>

                <div  v-if="platform==='Web'" class="card-onbrecruit btn-space" style=" flex-direction:row;;padding:12px;margin-bottom:20px;">
                        <div class=" onboard-Pre-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/masteronboard/advisordetails/qscore')">
                                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                            </div> -->
                             <div class="btn-space">
									<s-button @click.native="jump('/masteronboard/advisordetails/qscore')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>
                        </div>
                        <div class=" onboard-Pre-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="jump('/masteronboard/onbreview')">
                                <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                                <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                            <div 
                                @click.native="jump('/masteronboard/onbreview')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>

                    <div v-if="platform !=='Web'" class="card-onbrecruit btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                            <div class=" onboard-Pre-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/masteronboard/advisordetails/qscore')">
                                    <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                    <text class="md-sec-btn-label ">Previous</text>
                                </div> -->
                                 <div class="btn-space">
									<s-button @click="jump('/masteronboard/advisordetails/qscore')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                                    </div>
                            </div>
                            <div class=" onboard-Pre-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn btn-color" @click="jump('/masteronboard/onbreview')">
                                    <text class="md-btn-label text-color-white">Proceed</text>
                                    <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                </div> -->
                                 <div  
                                @click="jump('/masteronboard/onbreview')">
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
    import { WxcRadio } from 'weex-ui'
    import propHeader from '../../../components/OnBoarding/OnboardHeader.vue'
    import onTab from '../OnBoardTab.vue'
    // import appHeader from '../../../components/Onboarding/Header.vue'  
    import vxInputBox from '../../../components/vx-input-box/vx-input-box.vue'
    import PButton from '../../../components/vx-primary-button/vx-primary-button.vue'
    import SButton from '../../../components/vx-primary-button/vx-scondary-button'   
    
    
    export default {
        mounted(){
          var animation = weex.requireModule('animation');

          var pagewrap = this.$refs.pagewrap;
          animation.transition(pagewrap, {
                styles: {
                  opacity:'1'
                },
                duration: 200, //ms
                timingFunction: 'ease-in',
                // transform: 'translate(1100px,100px)',
                delay: 100 //ms
              }, function () {

                // modal.toast({ message: 'animation finished.' })
                console.log(pagewrap , 'logggmix in ')
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
            WxcRadio, propHeader,onTab,vxInputBox,PButton,SButton
        },
        data() {
            return {
                headerName:'Advisor Fulfilmemt',
                deviceWidth: invalid,
                platform: invalid,
                index: -1,
                show1: false,
                show2: false,
                show3: false,
                formData:{
                    Examinationbody:'',
                    candidatesName:'',
                    candidatesNumber:'',
                    CentreofExamination:'',
                    ExamLanguage:'',
                    ExamPassedName:'',
                    DetailsofAuthor:'',

                },

                branchListWeb: ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"],

                checkedInfo: { title: 'option2', value: 2 },
                list: [
                    { title: 'option1', value: 1 },
                    { title: 'option2', value: 2, },
                    { title: 'option3', value: 3 },
                    { title: 'option4', value: 4 },
                ],
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
                picker.pick(
                    {
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
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
       .mt-20{
           margin-top: 20px;
       }
       .ml-20{
           margin-left: 20px
       }
       /*Button Arrow CSS*/
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

    .card-onbrecruit {
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
        font-family:robotoregular;
    }

    .main-heading {
        font-size: 15px;
        padding-top: 20px;
        font-weight: bold;
        font-family:robotoregular;


    }

    .heading {
        font-size: 25px;
        padding-top: 20px;
        padding-bottom:05px;
        font-weight: bold;
        font-family:robotoregular;

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
        font-family:robotoregular;



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
    .onbprerecruit-width{
      width: 350px;
    }




    .input:focus {
        border-width: 1px;
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
        font-family:robotoregular;
    }

    .md-sec-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        
        color: #000;
        font-family:robotoregular;
    }

    .md-custom-btn:active {
       opacity:0.8;
    }

    .onboard-Pre-btn-width {
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
        font-family:robotoregular;
    }

    .row-btn {
        flex-direction: row;
    }

    .card-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
        font-family:robotoregular;
    }

    .card-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family:robotoregular;
    }

    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family:robotoregular;
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
        font-family:robotoregular;
    }

    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family:robotoregular;
    }

    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
        font-family:robotoregular;
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
        font-family:robotoregular;
    }

      .table-row {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

    }
       .table-row-header {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

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
        font-family:robotoregular;
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
        font-weight: bold;
        margin-left: 20px;
        font-size: 13px;
        color: #565656;
        font-family:robotoregular;
    }

    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-weight: bold;
        font-family:robotoregular;
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

    @media only screen and (min-width: 320px) {
              /*Button Arrow CSS*/
       .mt-20{
           margin-top: 0px;
       }
       .mobile-top-20{
           margin-top:20px;
       }
       .details-width{
           width:100%
       }
                 .table-row {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;
    }

    .card-onbrecruit {
                  border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;

    }
               .onbprerecruit-width{
      width: 200px;
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
            
            font-family:robotoregular;
        }
        .btn-color {
            background-color: rgb(80, 80, 80);

        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            
            font-family:robotoregular;
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
            font-family:robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-weight: bold;
            font-family:robotoregular;

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
            font-family:robotoregular;



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
            font-family:robotoregular;
        }
        .radio-data {
            flex-direction: column;
            flex: 1
        }
        .onboard-Pre-btn-width {
            width: 50%;
        }
    }

    @media only screen and (min-width: 768px) {
        
    .card-onbrecruit {
             margin:10px;
    }
     .mobile-top-20{
           margin-top:0px;
       }
       
          .table-row {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }

     .details-width{
           width:50%
       }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family:robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-weight: bold;
            font-family:robotoregular;

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
            font-family:robotoregular;



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
            font-family:robotoregular;
        }
        .radio-data {
            flex-direction: row;

        }
        .onboard-Pre-btn-width {
            width: 20%;
        }

    }
    @media screen and (min-width:992px) {
        .onboard-Pre-btn-width {
            width: 15%;
        }

    }
</style>