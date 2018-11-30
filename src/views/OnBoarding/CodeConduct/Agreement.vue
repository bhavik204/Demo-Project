<template>
      <div style="background-color: #f7f7f7;">
            <!-- <inner-header  :headeTitle="headerName"  ></inner-header>
            <on-tab></on-tab> -->
        <scroller class="scroller">
          <div class="container">
            
            
              <div class="side-container page-animation" ref="pagewrap">
                     <div class="card-cocagreement row card-row">
                        <div class="table-row-heading" style="flex-direction: column;"> 
                       <text class="heading card-title-border coc-agreement-width">Agreement</text>
                      </div>

          <div class="table-row-data" style="flex-direction:column">
              <text class="form-title">I do hereby declare that the foregoing statements and answers are to the best of my knowledge and belief, true and complete and that they shall be the basis of Contract of the Agency between me and the Life Insurance Company Limited and that if any of the foregoing statements or answers are untrue or incomplete the said Contract shall automatically terminated from the date on which such knowledge comes to the Company.
              </text>
          </div>

          <div class="table-row-data" style="flex-direction:column">
                <text class="form-title-data"> I agree to abide by the terms and conditions as laid down in various Regulations and Acts applicable to working as an Advisor of Life Insurance Company Limited.
                </text>
            </div>


          <div class="table-row-data">
              <text class="form-title-data">I hereby confirm that this Agency Application Form has been completed by me in my own handwriting.</text>
          </div>
          
          <div class="table-row" style="flex-direction: column;"> 
                <text class="heading">Notes and Instructions</text>
                </div>

                <div class="table-row-data" style="flex-direction:column">
                        <text class="form-title">1.The application should be filled in English language</text>
                        <text class="form-title">2.Any correction or alteration made in any answer to the questions in the application should be initialed by the applicant.</text>
                        <text class="form-title">3.An applicant must be at least 18 years of age on the date of the application. The applicant shall furnish proof of age.</text>
                        <text class="form-title">4.An applicant shall furnish the proof of pass in the pre-recruitment exam conducted by an examination body duly recognized by the Insurance Regulatory and Development Authority of India.</text>
                        <text class="form-title">5.The following documents should be attached with the application.</text>
               <div class="table-row"  style="flex-direction:column">
                   <text class="form-title">a.Age Proof (Self-attested)</text>
                   <text class="form-title">b.Educational Qualification (Self-attested)</text>
                   <text class="form-title">c.Proof of Pass in the agency examination as mentioned above</text>
                   <text class="form-title">d.Copy of PAN Card (Self-attested)</text>
                   <text class="form-title">e.Address Proof (Self-attested)</text>
               </div>
                    </div>   
                 
                    <div class="table-row" style="flex-direction: column;"> 
                            <text class="heading">For your Careful Consideration</text>
                            </div>

                            <div class="table-row-data"  style="flex-direction:column">
                                    <text class="form-title">a.All the questions are to be answered in detail</text>
                                    <text class="form-title">b.Your appointment is subject to the provisions of Guidelines on Appointment of Insurance Agent</text>
                                    
                                </div>
                    



         
              
                    
                     
                            <div class="table-row-data" style="flex-direction: column;"> 
                                    <text class="heading">Advisor Details</text>
                                </div>
                                <div  class="table-row">
                                        <div style="flex-direction: column;flex:1">
                                          <!-- <text  class="form-title">Client Number</text>
                                          <input class="input" type="text" style="flex:1" /> -->
                                           <vx-input-box class="form-title"
                                              vx-label="Client Numberr"
                                             vx-placeholder="Enter Client No"
                                             vx-type="input"
                                             :vx-model="formData.Clientno">
                                            </vx-input-box> 
                                        </div>
                                        <div style="flex-direction: column;flex:1" class="table-row-col-details">
                                                <!-- <text  class="form-title">Advisor Code Number</text>
                                                <input class="input" type="tel" style="flex:1" /> -->
                                                <vx-input-box class="form-title"
                                              vx-label="Advisor Code Number"
                                             vx-placeholder="Enter Advisor Code number"
                                             vx-type="input"
                                             :vx-model="formData.AdvisorNo">
                                            </vx-input-box> 
                                              </div>
                                      </div>
                                      <div  class="table-row">
                                            <div style="flex-direction: column;flex:1">
                                              <!-- <text class="form-title">SM/CDA Code</text>
                                              <input class="input" type="text" style="flex:1" /> -->
                                              <vx-input-box class="form-title"
                                              vx-label="SM/CDA Code"
                                             vx-placeholder="Enter SM/CDA Code"
                                             vx-type="input"
                                             :vx-model="formData.CM_CDA_code">
                                            </vx-input-box> 
                                            </div>
                                            <div style="flex-direction: column;flex:1" class="table-row-col-details">
                                                    <!-- <text  class="form-title">Sales Unit Code</text>
                                                    <input class="input" type="tel" style="flex:1" /> -->
                                                    <vx-input-box class="form-title"
                                              vx-label="Sales Unit Code"
                                             vx-placeholder="Enter Sales Unit Code"
                                             vx-type="input"
                                             :vx-model="formData.SalesUnitCode">
                                            </vx-input-box> 
                                                  </div>
                                          </div>

                                          <div  class="table-row">
                                               
                                  
                                                <div style="flex-direction: column;flex:1" class="mb-20">
                                                  <text style="flex: 0.6" class="form-title">CSC Branch Location</text>
                                                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="branch">{{value}}</text>
                                                  <div class="drop-down" v-if="platform == 'Web'">
                                                    <select class="cursor-pointer-globle" style="flex:1 margin-top:05px">
                                                        <option value="">Select</option>
                                                      <option v-for= "calc in branchListWeb">{{calc}}</option>
                                                    </select>
                                                  </div>
                                  
                                                </div>
                                                <div style="flex-direction: column;flex:1" class="table-row-col-details class">
                                                    <!-- <text  class="form-title">Sales Unit Code</text>
                                                    <input class="input" type="tel" style="flex:1" /> -->
                                                    
                                                  </div>
                                              </div>



    </div>
        
               
        <div  v-if="platform==='Web'" class="card-cocagreement btn-space" style=" flex-direction:row;;padding:12px;">
                <div class="box agreement-btn-width" style="padding:10px;">
                    <!-- <div class="md-custom-btn sec-btn-color" @click.native="jump('/masteronboard/codedetails/codeofconduct')">
                        <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                        <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                    </div> -->
                      <div class="btn-space">
									<s-button @click.native="jump('/masteronboard/codedetails/codeofconduct')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>
                </div>
                <div class="box agreement-btn-width" style="padding:10px;">
                    <!-- <div class="md-custom-btn btn-color" @click.native="jump('/masteronboard/advisordetails/onbpersonal')">
                        <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                        <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                    </div> -->
                     <div 
                                @click.native="success(1)">
									<p-button btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" btn-name="Submit"></p-button>
								</div>
                    
                </div>
            </div>


            <div  v-if="platform !=='Web'" class="card-cocagreement btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                    <div class="box agreement-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/masteronboard/codedetails/codeofconduct')">
                            <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                            <text class="md-sec-btn-label ">Previous</text>
                        </div> -->
                          <div class="btn-space">
									<s-button @click="jump('/masteronboard/codedetails/codeofconduct')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>
                    </div>
                    <div class="box agreement-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn btn-color" @click="jump('/masteronboard/advisordetails/onbpersonal')">
                            <text class="md-btn-label text-color-white">Proceed</text>
                            <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                        </div> -->
                         <div 
                                @click="openNoAnimationMask()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" btn-name="submit" ></p-button>
								</div>
                    </div>
                </div>
                        </div>
    
                        </div>
    
        </scroller>
      
<div v-if="showSuccess === true">
<popup>
        <div class="to-do-flx-row to-do-task-title">
            <div class="email-head">
                <text class="to-do-title-font">Success</text>
            </div>    
        </div>
        <div class="popup-image-row" >
            <div>
            <image src="https://png.icons8.com/color/50/000000/ok.png" class="icon"/>
            </div>
            <div class="msg-color-font">
            <text class="font-size" >Details Successfully Submitted.</text>
            </div>
        </div>
       
        <div class="todo-footer to-do-flx-row-rvrs">
           
        <div v-if="platform === 'Web'" class="agreement-btn-width cursor-pointer-globle">
            
       <p-button 
            
            btn-name="OK" 
            btn-icon="https://www.materialui.co/materialIcons/action/done_white_192x192.png"
            @click.native="success(2)"></p-button>
        </div>
        </div>
    </popup>
 </div>
 <div v-if="platform !== 'Web'">
  <wxc-mask height="330"
              width="600"
              border-radius="0"
              duration="200"
              mask-bg-color="#FFFFFF"
              :has-animation="hasAnimation"
              :has-overlay="true"
              
              :show="show"
              @wxcMaskSetHidden="wxcMaskSetHidden">
      <div class="content">
        <div class="title-bar">
          <text class="popup-title-text">Success</text>
        </div>
        <div class="popup-image-row" style="align-items:center">
         <div style="padding-left:20px;" >
            <image src="https://raw.githubusercontent.com/google/material-design-icons/master/action/drawable-xhdpi/ic_check_circle_black_48dp.png" class="icon" />
            </div>
            <div class="msg-color-font">
        <text class="cd-font-size">
            Details Successfully Submitted.
        </text>
        </div>
        </div>
        <div class="popup-btn ">
            <div class="popup-cd-btn-width">
            <p-button btn-icon="https://www.materialui.co/materialIcons/action/done_white_192x192.png" 
            btn-name="OK" ></p-button>
            </div>
      </div>
        
      </div>
    </wxc-mask>
 </div>
     </div>
    </template>
    
    <script>
      const items = ["Mumbai","Delhi","Kolkata","Benglaru","Chennai","Ahmedabad","Pune","Hyderabad"];

      const picker = weex.requireModule("picker");
      const env = weex.config.env || WXEnvironment
      const invalid = '- invalid -'
      import { WxcRadio } from 'weex-ui'
      import appHeader from '../../../components/OnBoarding/CodeHeader.vue'
      var animation = weex.requireModule('animation');
      import vxInputBox from '../../../components/vx-input-box/vx-input-box.vue'
      import onTab from '../OnBoardTab.vue'
       import PButton from '../../../components/vx-primary-button/vx-primary-button.vue'
    import SButton from '../../../components/vx-primary-button/vx-scondary-button'
     import { WxcMask } from 'weex-ui';
     import popup from '../../Calendar/Todo-pop-up.vue' 
      
      export default {
        mounted(){

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
          WxcRadio,appHeader,onTab,vxInputBox,PButton,SButton,popup,WxcMask,
        },
        data() {
          return {
            headerName:'Code Of Conduct',
            deviceWidth:invalid,
            platform: invalid,
            index: -1,
            show1: false,
            show2: false,
            show3: false,
            showSuccess:false,
            show: false,
                 overlayCanClose: true,
                isFalse: false,
                 hasAnimation: false,
            formData:{
                Clientno:'',
                AdvisorNo:'',
                CM_CDA_code:'',
                SalesUnitCode:'',
               
                     },

branchListWeb : ["Mumbai","Delhi","Kolkata","Benglaru","Chennai","Ahmedabad","Pune","Hyderabad"],
    
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

          success(caseid)
            {
                
                switch(caseid)
                {
                    case 1: 
                        this.showSuccess=true;
                        break;
                        case 2:
                        this.showSuccess=false;
                        break;
                }
            },
            openMask (e) {
        this.show = true;
        this.hasAnimation = true;
      },
      wxcMaskSetHidden () {
        this.show = false;
      },
      openNoAnimationMask (e) {
        this.show = true;
        // this.hasAnimation = false;
      }

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
       /*Button Arrow CSS*/
       .ml-20{
           margin-left: 20px;
       }
       .mb-20{
           padding-bottom: 20px;
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
     
         .card-cocagreement {
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
             font-family:robotobold;
;
             font-family:robotoregular;
     
     
         }
         .heading{
             font-size: 25px;
             padding-top: 20px;
             font-family:robotobold;
            padding-bottom:05px;
             font-family:robotoregular;
     
         }
         .card-row{
             padding-bottom:20px;
             margin-bottom:20px;
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
         .side-container{
             flex-direction: column;
             flex:2;
         }
     
         .input {
             display: block;
             background-color: #fff;
             font-size: 24px;
             padding: 15px;
             margin-bottom:20px;
             color: #666666;
             border-width: 2px;
             border-top: none;
             border-style: solid;
             border-top-color: #fff;
             border-right-color: #fff;
             border-left-color: #fff;
             border-bottom-color: #c7c7c7;
             placeholder-color:#9d9d9d;
             font-family:robotoregular;
     
     
             
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
        border-bottom-color: #c7c7c7;
        placeholder-color: #999999;
        font-family: robotoregular;
    }
    .input-drop:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
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
    .coc-agreement-width{
  width: 130px;
    }
     
       
     
     
         .input:focus {
             border-width: 4px;
             border-bottom-color: #2e4053;
         }
     
     .switch{
       margin-top:16px;
     }
     .btn-space{
      justify-content:space-between
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
      font-size : 31px;
      text-transform: uppercase;
      font-weight: 500;
    
      color:#fff;
      font-family:robotoregular;
  }
  .md-sec-btn-label {
      font-size : 31px;
      text-transform: uppercase;
      font-weight: 500;
    
      color:#000;
      font-family:robotoregular;
  }

  .md-custom-btn:active {
      background-color:rgb(5, 4, 4);
  }

  .agreement-btn-width {
      width: 300px;
  }
         .card-btn1 {
         background-color: rgb(80, 80, 80);
        
         width: 340px;
         border-radius: 7px;
         margin-left: 10.6797px;
         margin-right: 20px;
         margin-right:20px;
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
       .consent{
           white-space: normal;
       }
         .form-title {
             font-size: 24px;
             padding-top: 10px;
             padding-bottom:10px;
             color: #9d9d9d;
             font-family:robotoregular;
         }
             .form-title-data {
              
             font-size: 24px;
             color: #9d9d9d;
             font-family:robotoregular;
         }
         .chkbox-title{
             flex:1;
             font-size: 13px;
            margin-left:10px;
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
             padding:5px;
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
     
         .head-row{
     
             padding:10px;
             border-width: 1px;
                 border-top: none;
                 border-style: solid;
                 border-top-color: #fff;
                 border-right-color: #fff;
                 border-left-color: #fff;
                 border-bottom-color: #ebebeb;
         }
         .head-row1{
         
         padding:10px;
         }
             .sub-heading {
                 font-family:robotobold;
;
                 margin-left:20px;
                 font-size: 13px;
                 color: #565656;
                 font-family:robotoregular;
             }
             .card-heading{
                 padding: 10px;
                 font-size: 14px;
                 color: #3b371e;
                 font-family:robotobold;
;
                 font-family:robotoregular;
             }
             
         .cal-icn {
       height: 20px;
       width: 20px;
       margin-top: 5px;
     }
     .mail-row{
         flex-direction:column ;
         }
     .radio-data{
         flex-direction: column;
         flex:0;
     
     }
     .msg-color-font{
          font-family: robotoregular;
           color: #0000;
                 
      }
      .icon{
          height:40px;
          width:40px;
          
      }
      .popup-image-row{
          flex-direction:row;
          padding:37px;
          justify-content: center;
      }
      .cd-font-size{
          font-size:26px;
           margin-left:-60px;
      }
      .title-bar{
          width:600px;
          height:70px;
          background-color:#3b371e; 

      }
      .popup-title-text{
          padding-top:20px;
          padding-left:20px;
          font-size: 30px;
          font-family: robotoregular;
          color:#fff;
      }
      .popup-btn{
          height:100px;
          width:600px;
          background-color: #ebebeb;

      }
      .popup-cd-btn-width{
          width:150px;
          position:absolute;
          right:15px;
          bottom:15px;
      }
     @media only screen and (min-width: 320px) {
                /*Button Arrow CSS*/
                  .ml-20{
           margin-left: 0px;
       }
     
       .mb-20{
           padding-bottom: 0px;
       }
           .table-row {
     padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;
        flex-direction:column;

  
         }
               .table-row-data {
     padding-left: 10px;
        padding-top: 0px;
        flex-direction:column;

  
         }
         
             .card-cocagreement {
                        border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


         }
                  .coc-agreement-width{
  width: 80px;
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
          color:#fff;
          font-size : 11px;
          text-transform: uppercase;
          font-weight: 500;
        
          font-family:robotoregular;
      }
      .btn-color {
          background-color:rgb(80, 80, 80);

      }
      .md-sec-btn-label {
          color:#000;
          font-size : 11px;
          text-transform: uppercase;
          font-weight: 500;
        
          font-family:robotoregular;
      }
      .sec-btn-color {
          background-color:#fff;
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
         .table-head-row{
             flex:0.9;
         }
         .form-title {
             font-size: 14px;
             padding-top: 10px;
             color: #9d9d9d;
             font-family:robotoregular;
         }
            .form-title-data {
             font-size: 14px;
             color: #9d9d9d;
             font-family:robotoregular;
         }
                    .heading{
             font-size: 15px;
             padding-top: 20px;
             font-family:robotobold;
;
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
             placeholder-color:#9d9d9d;
             font-family:robotoregular;
     
     
             
         }
                .table-row{
                    flex-direction: column;
                }
                .table-row-col-details {
              margin-left: 0px;
         }
         .mail-row{
          flex-direction:column ;
          }
         /* .btn-space{
      justify-content:space-evenly;
     } */
                .card-btn1 {
         background-color: rgb(80, 80, 80);
     
         width: 140px;
         border-radius: 4px;
         margin-left: 10.6797px;
         margin-right: 20px;
         margin-right:20px;
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
         .radio-data{
         flex-direction: column;
         flex:1
         
     }
     .agreement-btn-width {
          width: 50%;
      }
      .msg-color-font{
          font-family: robotoregular;
           color: #0000;
                 
      }
      .icon{
          height:20px;
          width:20px;
          
      }
      .popup-image-row{
          flex-direction:row;
          padding:37px;
          justify-content: center;
      }
       .font-size{
          font-size:19px;
          margin-left:06px;
      }
            
      /* .table-row{
                    flex-direction: column;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top:10px;
               
     } */
     }
            @media only screen and (min-width: 768px) {
                        .table-row {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }
                          .table-row-data {
        
        padding-left: 10px;
       
     
    }

                     .card-cocagreement {
   margin:10px;


         }
         
                    .heading{
             font-size: 15px;
             padding-top: 20px;
             font-family:robotobold;
;
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
             placeholder-color:#9d9d9d;
             font-family:robotoregular;
     
     
             
         }
                .table-row{
                    flex-direction: row;
                }
                .table-txt-row{
                    flex-direction: row;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top:10px;
                }
                .table-row-col-details {
              margin-left: 30px;
         }
         .mail-row{
         flex-direction:row ;
         flex:3;
         }
         /* .btn-space{
      justify-content:space-between;
     } */
                .card-btn1 {
         background-color: rgb(80, 80, 80);
     
         width: 140px;
         border-radius: 4px;
         margin-left: 10.6797px;
         margin-right: 20px;
         margin-right:20px;
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
         .radio-data{
         flex-direction: row;
         
     }
     .agreement-btn-width {
          width: 20%;
      }
      .msg-color-font{
          font-family: robotoregular;
           color: #0000;
                 
      }
      .icon{
          height:20px;
          width:20px;
          
      }
      .popup-image-row{
          flex-direction:row;
          padding:37px;
          justify-content: center;
      }
       .font-size{
          font-size:17px;
          margin-left:06px;
      }
            }
      @media screen and (min-width:992px){
          .agreement-btn-width {
          width: 15%;
      }
      .msg-color-font{
          font-family: robotoregular;
           color: #0000;
                 
      }
      .icon{
          height:20px;
          width:20px;
          
      }
      .popup-image-row{
          flex-direction:row;
          padding:37px;
          justify-content: center;
      }
      .font-size{
          font-size:16px;
          margin-left:06px;
      }
      }

            
    </style>