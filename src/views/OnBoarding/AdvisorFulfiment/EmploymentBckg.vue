<template>
    <div style="background-color: #f7f7f7;">
        
            <!-- <app-header></app-header> -->
            <!-- <inner-header   :headeTitle="headerName" ></inner-header>
            <on-tab></on-tab> -->
        <scroller class="scroller">
            <div class="container">
                    <!-- <prop-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></prop-header>   -->
    
    
    
                <div class="side-container page-animation" ref="pagewrap">
                   <div class="card-onbemploy row" style="padding-bottom:20px">
                    
                        <div class="table-row-onbemployment-header ml-20" style="flex-direction: column;"> 
                       <text class="heading card-title-border onbemployment-width">Employment Background</text>
                       </div>
                        <div style="flex-direction:row" class="table-row-onbemployment ">
                                <div style="flex-direction: column;flex:0.5" class="mb-20">
                                    <!-- <text style="flex:1" class="form-title">Income of the Proposer</text>
                                    <input class="input" placeholder="Enter Income of the Proposer" type="tel" style="flex:0.5" v-model="income" /> 
                                    -->
                                     <vx-input-box
                                    vx-label="Income of the Proposer"
                                    vx-placeholder="Enter Income of the Proposer"
                                    :vx-model="formData.IncomeoftheProposer">
                            </vx-input-box>
                                </div>

                                 
                            </div>
                            <div class="table-row-onbemployment ml-20" style="flex-direction: column;">
                                    <text class="heading">Employment Background</text>
                                    <text class="form-title">(Beginning with your present employment, list all positions held over last 3 employments)</text>
                                </div>
                                <div v-if="platform==='Web'"  class="table-row-onbemployment ml-20" @click.native="openMask">
                                        <text class="form-title cursor-pointer-globle" style="color:#0B4DAA">(+) Add Employment Record</text>
                                      </div>

                                      <div v-if="platform !=='Web'"    class="table-row-onbemployment mt-20" @click="jump('/emprecd')">
                                        <text class="form-title" style="color:#0B4DAA">(+) Add Employment Record</text>
                                      </div>
             <!--Popup-->
                           <popup v-if ="show == true">
                                        <div class="to-do-flx-row to-do-task-title">
                                            <div>
                                                <text class="to-do-title-font">Employement Record</text>
                                            </div>
                                            <div  @click.native="closeEmploymentPopup()">
                                                <image src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" class="close-icn" />
                                            </div>
                                        </div>
                                        <!-- any height you want but auto scroller -->
                                        <scroller>
                                        <div class="popup-emprecd-height">
                                            <div>
                                                <employ-details ></employ-details>
                                                <!-- <overlay-window :call-back="openChildOverlay"></overlay-window> -->
                                            </div>  
                                        </div>
                                        </scroller>
                                        <div class="todo-footer to-do-flx-row-rvrs">
                                            <div class="emp-fot-btn-width">
                                                <vx-primary-btn
                                                    btn-name="Save"
                                                    btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"
                                                    @click.native="closeEmploymentPopup()">
                                                </vx-primary-btn>
                                
                                            </div>
                                            <div class="emp-fot-btn-width" >
                                                <vx-secondary-btn
                                                    btn-name="Cancel"
                                                    btn-icon="https://www.materialui.co/materialIcons/content/clear_black_192x192.png"
                                                    @click.native="closeEmploymentPopup()">
                                                </vx-secondary-btn>
                                            </div>
                                        </div>
                                    </popup>
                                      
                                <div class="table-row-onbemployment mobile-row" style="flex-direction:column;">
                                       <scroller class="scroller-employ-backg" scroll-direction="horizontal">
                                          <div class="employbackg-table-width">
                                    <div class="thead-row" style="flex-direction:row;padding-left: 20px;background-color:#f7f7f7">
                                      <div style="flex:1"  >  <text class="tbl-heading">Name And Address</text></div>
                                             <div style="flex:1" >  <text class="tbl-heading">Last Position</text></div>
                                      <div style="flex:1" >  <text class="tbl-heading">Income P.A</text></div>
                                      <div style="flex:1"> <text class="tbl-heading">Reason</text></div>
                                 
                           
                                    </div>
                          
                                    <div class="tbody-row" v-for="tbl in table" style="flex-direction:row;padding-left: 30px;padding-top: 10px;">
                                           <div  style="flex:1">  <text class="form-title">{{tbl.Name}}</text></div>
                                          <div style="flex:1">  <text class="form-title">{{tbl.Position}}</text></div>
                                          <div style="flex:1"> <text class="form-title">{{tbl.Income}}</text></div>
                                          <div style="flex:1"> <text class="form-title">{{tbl.Reason}}</text></div>
                  
                                      </div>
                                          </div>
                                      </scroller>
                                      <!-- <scroller class="scroller-employ" scroll-direction="horizontal">
                                           <div class="employ-table-width"> 
                                      <div class="thead-row" style="flex-direction:row; flex-wrap: nowrap;background-color:#ebebeb">
                                        <div style="flex:1"  >  <text class="tbl-heading">Name And Address</text></div>
                                        <div style="flex:1" >  <text class="tbl-heading">Last Position</text></div>
                                        <div style="flex:1"> <text class="tbl-heading">Income P.A</text></div>
                                        <div style="flex:1" > <text class="tbl-heading">Reason</text></div>
                             
                                      </div>
                            
                                      <div class="tbody-row" v-for="tbl in table" style="flex-direction:row;padding-left: 30px;padding-top: 10px;">
                                          <div  style="flex:1">  <text class="form-title">{{tbl.Name}}</text></div>
                                          <div style="flex:1">  <text class="form-title">{{tbl.Position}}</text></div>
                                          <div style="flex:1"> <text class="form-title">{{tbl.Income}}</text></div>
                                          <div style="flex:1"> <text class="form-title">{{tbl.Reason}}</text></div>
                    
                                        </div>
                                           </div>
                                      </scroller> -->
                                      </div>
                                      <div class="table-row-onbemployment mt-20" style="flex-direction: column;">
                                           
                                            <text class="form-title">Are you related to any employee/channel associate/medical examiner of Life Insurance Company Limited?</text>
                                        </div>
                       
                        <div style="flex-direction:row" class="table-row-onbemployment">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">
    
                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">
         <div>
                                            <switch @change="onchange"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check}}</text>
                                        </div>
                                   
    
                                    </div>
                                </div>
    
    
                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">
    
                                        <input type="radio" class="cursor-pointer-globle" name="empChannel" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>
    
                                        <input type="radio"  class="cursor-pointer-globle" name="empChannel" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>
    
                                    </div>
                                </div>
    
                            </div>
    
    
    
    
                        </div>
                        <div style="flex-direction:row" class="table-row-onbemployment">
                                <div style="flex-direction: column;flex:0.5" class="mt-20 mobile-top-20">
                                    <!-- <text style="flex:1" class="form-title">Provide Details</text>
                                    <input class="input" type="text" style="flex:0.5" v-model="ProvideDetail" /> -->
                                    <vx-input-box
                                    vx-label="Provide Details"
                                    vx-placeholder="Enter Details"
                                    :vx-model="formData.ProvideDetails">
                            </vx-input-box>
                                </div>
                            </div>

                            <div class="table-row-onbemployment mt-20" style="flex-direction: column;">
                                           
                                    <text class="form-title">Have you worked as an insurance agent for any other agency before?</text>
                                </div>
                        <div style="flex-direction:row" class="table-row-onbemployment">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">
    
                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">
     <div>
                                            <switch @change="onchange1" ></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check1}}</text>
                                        </div>
                                       
    
                                    </div>
                                </div>
    
    
                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">
    
                                        <input type="radio" class="cursor-pointer-globle" name="insuranceagent" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>
    
                                        <input type="radio" class="cursor-pointer-globle" name="insuranceagent" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>
    
                                    </div>
                                </div>
    
                            </div>
    
    
    
    
                        </div>

                        <div class="table-row-onbemployment mt-20" style="flex-direction: column;">
                                <text class="heading">Insurance Agency Details</text>
                                <text class="form-title">(Beginning with your present employment, list all positions held over last 3 employments)</text>
                            </div>
                            <div v-if="platform==='Web'" class="table-row-onbemployment" @click.native="openMask1">
                                    <text class="form-title cursor-pointer-globle" style="color:#0B4DAA">(+) Add Insurance Agency Details</text>
                                  </div>


                                  <div  v-if="platform !=='Web'" class="table-row-onbemployment mt-20" @click="jump('/agencydet')">
                                    <text class="form-title " style="color:#0B4DAA">(+) Add Insurance Agency Details</text>
                                  </div>

                                 <!-- pop-up -->
                                    <popup v-if ="show1 == true">
                                      
                                        <div class="to-do-flx-row to-do-task-title">
                                            <div>
                                                <text class="to-do-title-font">Insurance Agency Details</text>
                                            </div>
                                            <div @click.native="closeAgencyPopup()">
                                                <image src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" class="close-icn" />
                                            </div>
                                        </div>
                                        <!-- any height you want but auto scroller -->
                                          <scroller>
                                        <div class="popup-agency-height">
                                            <div>
                                                <agency-details ></agency-details>
                                                <!-- <overlay-window :call-back="openChildOverlay"></overlay-window> -->
                                            </div>  
                                        </div>
                                          </scroller>
                                        <div class="todo-footer to-do-flx-row-rvrs">
                                            <div class="emp-fot-btn-width">
                                                <vx-primary-btn
                                                    btn-name="Save"
                                                    btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"
                                                    @click.native="closeAgencyPopup()">
                                                </vx-primary-btn>
                                
                                            </div>
                                            <div class="emp-fot-btn-width" >
                                                <vx-secondary-btn
                                                    btn-name="Cancel"
                                                    btn-icon="https://www.materialui.co/materialIcons/content/clear_black_192x192.png"
                                                    @click.native="closeAgencyPopup()">
                                                </vx-secondary-btn>
                                            </div>
                                        </div>
                                      
                                    </popup>

                                 <!--  -->
                            <div class="table-row-onbemployment mobile-row" style="flex-direction:column;">
                                      <scroller class="scroller-employ" scroll-direction="horizontal">
                                          <div class="employ-table-width">
                                    <div class="thead-row" style="flex-direction:row;padding-left: 20px;background-color:#f7f7f7">
                                      <div style="flex:1"  >  <text class="tbl-heading">Name of the Insurer</text></div>
                                      <div style="flex:1" >  <text class="tbl-heading">Agency Code Number</text></div>
                                      <div style="flex:1"> <text class="tbl-heading">Reason for Cessation of Agency</text></div>
                                 
                           
                                    </div>
                          
                                    <div class="tbody-row" v-for="tbl in tableIns" style="flex-direction:row;padding-left: 30px;padding-top: 10px;">
                                        <div  style="flex:1">  <text class="form-title">{{tbl.Name}}</text></div>
                                        <div style="flex:1">  <text class="form-title">{{tbl.Code}}</text></div>
                                        <div style="flex:1"> <text class="form-title">{{tbl.Reason}}</text></div>
                  
                                      </div>
                                          </div>
                                      </scroller>
                                    </div>


    
                    </div>
    
    
                    <div v-if="platform==='Web'" class="card-onbemploy btn-space" style=" flex-direction:row;;padding:12px; margin-bottom:20px;">
                            <div class="box onboard-empback-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle"  @click.native="jump('/masteronboard/advisordetails/edubckg')">
                                    <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                    <text class="md-sec-btn-label  cursor-pointer-globle">Previous</text>
                                </div> -->
                                 <div class="btn-space">
									<vxSecondaryBtn @click.native="jump('/masteronboard/advisordetails/edubckg')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></vxSecondaryBtn>
                            </div>
                            </div>
                            <div class="box onboard-empback-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn btn-color cursor-pointer-globle"  @click.native="jump('/masteronboard/advisordetails/references')">
                                    <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                                    <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                </div> -->
                                <div 
                                @click.native="jump('/masteronboard/advisordetails/references')">
									<vxPrimaryBtn btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></vxPrimaryBtn>
								</div>
                            </div>
                        </div>
 
                        <div v-if="platform !=='Web'" class="card-onbemploy btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                                <div class="box onboard-empback-btn-width" style="padding:10px;">
                                    <!-- <div class="md-custom-btn sec-btn-color"  @click="jump('/masteronboard/advisordetails/edubckg')">
                                        <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                        <text class="md-sec-btn-label ">Previous</text>
                                    </div> -->
                                     <div class="btn-space">
									<vxSecondaryBtn @click="jump('/masteronboard/advisordetails/edubckg')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></vxSecondaryBtn>
                                    </div>
                                </div>
                                <div class="box onboard-empback-btn-width" style="padding:10px;">
                                    <!-- <div class="md-custom-btn btn-color"  @click="jump('/masteronboard/advisordetails/references')">
                                        <text class="md-btn-label text-color-white">Proceed</text>
                                        <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                    </div> -->
                                     <div  
                                @click="jump('/masteronboard/advisordetails/references')">
									<vxPrimaryBtn btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></vxPrimaryBtn>
								</div>
                                </div>
                            </div>
                </div>
    
    
    
    
    
    
    
    
            </div>
        </scroller>
        </div>
    </template>
    
    <script>
        const items = [
            "ITR for last 2 AY",
            "Audited Balance Sheet with CA certification",
            "SARAL for last 2 AY or Form 16",
            "Salary Slips for last 3 months",
            "Latest Appointment Letter with one month Salary Slip",
            "Audited Income Computation Letter with CA certification",
            "Audited Profit and Loss a/c and Balance Sheet for the last 2 years",
            "Salary Slips for last 3 months/ Salary Certificate/ Appointment Letter",
            "Audited Income Computation Letter with CA certified Cash Flow statement"
    
        ];
        const picker = weex.requireModule("picker");
        const env = weex.config.env || WXEnvironment
        const invalid = '- invalid -'
        import { WxcRadio,WxcMask } from 'weex-ui'
        import propHeader from '../../../components/OnBoarding/OnboardHeader.vue'
        import onTab from '../OnBoardTab.vue'
        import vxInputBox from '../../../components/vx-input-box/vx-input-box.vue'
        // import appHeader from '../../../components/Onboarding/Header.vue'  
 import agencyDetails from './EmploymentPopup/AgencyDetails.vue'
  import employDetails from './EmploymentPopup/EmployRecords.vue'
        import popup from '../../Calendar/Todo-pop-up.vue'
         import vxPrimaryBtn from '../../../components/vx-primary-button/vx-primary-button.vue'
         import vxSecondaryBtn from '../../../components/vx-primary-button/vx-scondary-button.vue'
      
    
      
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
            vxInputBox, WxcRadio, propHeader,WxcMask,onTab,popup,
            vxPrimaryBtn,vxSecondaryBtn,agencyDetails,employDetails,
            },
            data() {
                return {
                      check: 'No',
                check1: 'No',
                    headerName:'Advisor Fulfilmemt',
                    show: false,
      overlayCanClose: true,
      isFalse: false,
      hasAnimation: true,
      show1:false,
      hasAnimation1:false,
                    platform: invalid,
                    deviceWidth: invalid,
                    income: '',
                    ProvideDetail:'',
                    years: '',
                    months: '',
                    mobile: '',
                    activeemail: true,
                    animateEmail: false,
                    activepass: true,
                    animatePass: false,
                    index: -1,
                    empName:'',
                    position:'',
                    empIncome:'',
                    empReason:'',
                    agName:'',
                    agCode:'',
                    agReason:'',
                    formData:{
                            IncomeoftheProposer:'',
                            ProvideDetails:'',
                    },
                    table:[{
                        Name:'Neha Bajaj',
                        Position:'Developer',
                        Income:'700000',
                        Reason:'Nothing'
                    }
                    ],
                    tableIns:[{
                        Name:'Rahul Singhania',
                        Code:'RS345',
                        Reason:'Nothing'
                    }
                    ],
    
                    incomeProofWeb: [
                        "ITR for last 2 AY",
                        "Audited Balance Sheet with CA certification",
                        "SARAL for last 2 AY or Form 16",
                        "Salary Slips for last 3 months",
                        "Latest Appointment Letter with one month Salary Slip",
                        "Audited Income Computation Letter with CA certification",
                        "Audited Profit and Loss a/c and Balance Sheet for the last 2 years",
                        "Salary Slips for last 3 months/ Salary Certificate/ Appointment Letter",
                        "Audited Income Computation Letter with CA certified Cash Flow statement"
    
                    ],
    
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
                  onchange(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check = 'Yes'
                }
                else {
                    this.check = 'No'
                }
            },
            onchange1(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check1 = 'Yes'
                }
                else {
                    this.check1 = 'No'
                }
            },
                openMask (e) {
        this.show = true;
        this.hasAnimation = true;
      },
      openMask1 (e) {
        this.show1 = true;
        this.hasAnimation1 = true;
      },
      closeAgencyPopup(){
             this.show1 = false;
      },
      closeEmploymentPopup(){
             this.show = false;
      },
      wxcMaskSetHidden () {
        this.show = false;
      },
      wxcMaskSetHidden1 () {
        this.show1 = false;
      },
                wxcRadioListChecked(e) {
                    this.checkedInfo = e;
                },
                submitEmploymentData(){
                         this.table.push({
                            Name:this.empName,
                        Position:this.position,
                        Income:this.empIncome,
                        Reason:this.empReason
                         })
                },
                submitAgencyData(){
                    this.tableIns.push({
                        Name:this.agName,
                        Code:this.agCode,
                        Reason:this.agReason
                    })
                    console.log(tableIns)
                },
                income() {
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
       padding-top: 20px;
   }
   .scroller-employ{
        flex-direction: row;
   }
    .scroller-employbackg{
        flex-direction: row;
   }
     .employ-table-width{
        width:1500px;
    }
     .employbackg-table-width{
        width:1500px;
    }
             /*Button Arrow CSS*/
       .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    .mb-20{
        padding-top: 10px;

    }
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
        .row {
            flex-direction: column
        }
    
        .card-onbemploy {
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
        .table{
            border-width: 1px;
            border-style: solid;
            border-top-color: #c7c7c7;
            border-right-color: #c7c7c7;
            border-left-color: #c7c7c7;
            border-bottom-color: #c7c7c7;
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
             .onbemployment-width{
                   width: 315px;
             }
        .heading {
            font-size: 25px;
            padding-top: 20px;
            padding-bottom: 05px;
            font-weight: bold;
            font-family:robotoregular;
    
        }
        .tbl-heading {
            font-size: 25px;
            padding-top: 10px;
            padding-bottom: 10px;
            font-weight: bold;
            font-family:robotoregular;
    
        }
    
        .col1 {
            flex-direction: row;
            margin-top: 25px;
            font-family:robotoregular;
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
           
            color: #0000;
            font-family:robotoregular;
        }
    
    .md-custom-btn:active {
       opacity:0.8;
    }

    
        .onboard-empback-btn-width {
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
    
        .table-row-onbemployment {
                padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        }
            .table-row-onbemployment-header {
                padding-left: 10px;
        padding-right: 10px;
        /* padding-top: 10px; */
        }

        .mobile-row{
            padding-top: 50px;
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
    
        .table-row-onbemployment-col-details {
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
              .employ-table-width{
        width:150%;
    }
              .employbackg-table-width{
        width:150%;
    }
   .mt-20{
padding-top: 0px;
}
 .mobile-top-20{
     margin-top: 20px;
 }
 .mobile-top-10{
     margin-top:10px;
 }
                  /*Button Arrow CSS*/
                     .card-onbemploy {
                       border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;

        }
           .table-row-onbemployment {
                  padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;

        }
                   .onbemployment-width{
                   width: 175px;
             }
                  .popup-emprecd-height{
                      height:400px;
                  }
                   .popup-agency-height{
                      height:250px;
                  }
                  .to-do-task-title{
                      justify-content: space-between;
                  }
                  .close-icn{
                      width: 22px;
                      height:20px;
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
        .mobile-row{
            padding-top: 20px;
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
                border:1px solid black;
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
            .table-row-onbemployment-col-details {
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
            .table{
            border-width: 1px;
            border-style: solid;
            border-top-color: #c7c7c7;
            border-right-color: #c7c7c7;
            border-left-color: #c7c7c7;
            border-bottom-color: #c7c7c7;
        }
            .heading {
                font-size: 15px;
                padding-top: 20px;
                font-weight: bold;
                font-family:robotoregular;
    
            }
            .tbl-heading {
                font-size: 15px;
                padding-top: 10px;
                padding-bottom: 10px;
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
            .table-row-onbemployment {
                flex-direction: column;
            }
            .table-row-onbemployment-col-details {
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
            .onboard-empback-btn-width {
                width: 50%;
            }

            /* overlay btn width --switching size */

            .emp-fot-btn-width {
                width: 40%;
            }
        }
    
        @media only screen and (min-width: 768px) {
                      .employ-table-width{
    }
              .employbackg-table-width{
        width:100%;
    }
               .card-onbemploy {
                  margin:10px;
        }
         .mobile-top-20{
     margin-top: 0px;
 }
 .mobile-top-10{
     margin-top:0px;
 }
          .table-row-onbemployment {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }

             .emp-fot-btn-width {
                width: 30%;
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
            .table-row-onbemployment {
                flex-direction: row;
            }
            .table-row-onbemployment-col-details {
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
            .onboard-empback-btn-width {
                width: 30%;
            }
    
        }
         @media screen and (min-width:992px){
              .emp-fot-btn-width {
                width: 20%;
            }
          .onboard-empback-btn-width {
          width: 15%;
      }
      }
    </style>