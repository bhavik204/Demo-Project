<template>
  <div style="background-color: #f7f7f7;">
      <!-- <inner-header :headeTitle="headerName"  ></inner-header>
      <application-tab></application-tab> -->
  

        <div class="side-container  page-animation" ref="pagewrap" style="flex-direction:column;">

            <div class="card-proposal-insurance" >
                <div class="table-row-heading" style="flex-direction: column;"> 
                <text class="heading prop-ins-card-title-border life-head-padding">Life Insurance Details</text>
                </div>
                <div class="table-row-check" style="flex-direction: column;"> 
                <text class="form-title insurance-para-line-height ">Are you currently insured or applying for Life insurance cover, Critical illness cover, Accident benefit cover, not covered above?
                               </text>
                               </div>
                               <div style="flex-direction:row;" class="table-row-check">
                                    <div style="flex-direction: column;">
                                        <div style="flex-direction:row ;flex:1" >
                                 
                                            <div class="example" v-if="platform !== 'Web'" style="flex:1">
                                            
                                            
                                             <div> <switch @change="onchange"></switch>
                                            </div>
                                            <div><text class="form-title">{{check}}</text></div>
                                            </div>
                                          </div>
                      
                      
                                      <div v-if="platform === 'Web'" class="radio-margin-top">
                                        <div style="flex-direction:row;">
                      
                                          <input type="radio" class="cursor-pointer-globle" v-model="cover" name="riders" value="Yes" />
                                          <label class="radio-title" style="margin-left:10px;">Yes</label>
                      
                                          <input type="radio" class="cursor-pointer-globle" v-model="cover" name="riders" value="No" style="margin-left:30px;" />
                                          <label class="radio-title" style="margin-left:10px;">No</label>
                      
                                        </div>
                                      </div>
                      
                                    </div>
                      
                                  </div>



              <div v-if="cover == 'Yes'" class="table-row" >
                    <div v-if="platform === 'Web'" class="prd-BI-button-width box" >
                        <SButton v-model="addreltion"
                            btn-name="Add Policy" 
                             
                            btn-icon="https://www.materialui.co/materialIcons/social/group_add_black_192x192.png" 
                            @click.native="openTodoPopUp(2)">
                        </SButton>
                    </div>
                    <div v-if="platform !== 'Web'"  class="prd-BI-button-width box">
                        <SButton v-model="addreltion"
                            btn-name="Add Policy"  
                            btn-icon="https://www.materialui.co/materialIcons/social/group_add_black_192x192.png" @click="openTodoPopUp(2)">
                        </SButton>
                    </div>
                </div>

                
                <div v-if="cover == 'Yes'" class="mbt-i-ld-20 pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 tbl-set-mrg-tp-20">
                    <scroller  scroll-direction="horizontal" class="e-tb-dt-rw">
                        <div class="e-tb-dt-col e-tb-dt-flx-wrp s-tb-dt-container s-tb-whole-bdr">
                            <!-- Header -->
                            <div class="e-tb-dt-rw my-compo-tb-hdr-color m-c-tb-bdr m-c-tb-btm-bdr" style="flex:4">
                                <div class="e-tb-dt-bx-padding s-tb-dt-col-1" style="flex:1">
                                    <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Account With</text>
                                </div>
                                <div class="e-tb-dt-bx-padding e-tb-dt-col-2 " style="flex:1">
                                    <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Sum Assured</text>
                                </div>
                                <div style="flex:1; padding-left:10px;" class="e-tb-dt-bx-padding e-tb-col-3" >
                                    <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt" >Policy Status</text>
                                </div>
                                <!-- <div style="flex:1; padding-left:10px;" class="e-tb-dt-bx-padding e-tb-col-3" >
                                    <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt" >Disease</text>
                                </div>
                                <div style="flex:1; padding-left:10px;" class="e-tb-dt-bx-padding e-tb-col-3" >
                                    <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt" >Diagnosis Age</text>
                                </div> -->
                                 <div style="flex:1; padding-left:10px;" class="e-tb-dt-bx-padding e-tb-col-3" >
                                    <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt" >Action</text>
                                </div>
                            </div>

                            <!-- Row -->

                            <div class="e-tb-dt-rw m-c-tb-bdr m-c-tb-btm-bdr e-tb-rw-align-cntr" v-for="(tbData, index) in tabledata" :key="index">
                                <div class="e-tb-dt-bx-padding s-tb-dt-col-1" style="flex:1">
                                    <text class="e-tb-dt-title-fnt">{{tbData.account_With}}</text>
                                </div>
                                <div class="e-tb-dt-bx-padding e-tb-dt-col-2" style="flex:1">
                                    <text class="e-tb-dt-title-fnt">{{tbData.sum_Assured}}</text>
                                </div>
                                <div class="e-tb-dt-bx-padding s-tb-dt-col-1" style="flex:1">
                                    <text class="e-tb-dt-title-fnt">{{tbData.policy_Status}}</text>
                                </div>
                                <!-- <div class="e-tb-dt-bx-padding e-tb-dt-col-2" style="flex:1">
                                    <text class="e-tb-dt-title-fnt">{{tbData.disease}}</text>
                                </div>
                                 <div class="e-tb-dt-bx-padding e-tb-dt-col-2" style="flex:1">
                                    <text class="e-tb-dt-title-fnt">{{tbData.diagnosis}}</text>
                                </div> -->
                                <div class="e-tb-dt-bx-padding e-tb-col-3 e-tb-dt-rw" style="flex:1">
                                    <!-- WEB -->
                                    <div @click.native="display(6)" v-if="platform === 'Web'" class="e-tb-dt-bx-padding">
                                        <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                    </div>
                                    <div  @click.native="deletedata(li)" v-if="platform === 'Web'" class="e-tb-dt-bx-padding">
                                        <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                    </div>

                                    <!-- APK -->
                                    <div @click="jump('/existInsurDialog')" v-if="platform !== 'Web'" class="e-tb-dt-bx-padding">
                                        <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                    </div>
                                    <div  @click="deletedata(li)" v-if="platform !== 'Web'" class="e-tb-dt-bx-padding">
                                        <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </scroller>
                </div>
                <!-- Table End -->
                
                <!-- popup start -->
                <div  v-if="platform == 'Web'">
                    <pop-up v-if="insurancepopup === true" >
                        <child-form  >
                            <div class="to-do-flx-row to-do-task-title">
                                <div>
                                    <text class=" e-tb-dt-title-fnt-color cursor-pointer-globle ">Add Policy</text>
                                </div>
                                <div>
                                    <image src="" class="" />
                                </div>
                            </div>
                            <div class="todo-body">
                                <add-team-member></add-team-member>
                            </div>
                            <div class="todo-footer to-do-flx-row-rvrs">
                                <div class="appoint-sub-margin-left sp-btn-w ">
                                    <p-button 
                                        btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" 
                                        btn-name="Save">
                                    </p-button>
                                </div>

                                <div class="sp-btn-w">
                                    <s-button 
                                        btn-name="Cancel" 
                                        btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png" 
                                        @click.native="openTodoPopUp('back')">
                                    </s-button>
                                </div>
                            </div>
                        </child-form>
                    </pop-up>
                </div>



                                  <!-- <div class="table-row">
                                    <div v-if="cover == 'Yes'" style="flex-direction: column;flex:1;" class="table-row-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Account With</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in insuranceCoList">{{calc}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div v-if="cover == 'Yes'" style="flex-direction: column;flex:1;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                     <vx-input-box
                                             vx-label="Sum Assured"
                                             vx-placeholder="Enter Sum Assured"
                                             :vx-model="sumassured">
                                            </vx-input-box>

                                    </div>
                          

                                </div> -->
                                <!-- <div class="table-row">

                                      <div v-if="cover == 'Yes'" style="flex-direction: column;flex:1;" class="table-row-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Policy Status</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="state">{{value7}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in policystatusWeb">{{calc}}</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="table-row-details mt-20 mobile-top-20 ml-20" style="flex:1"></div>
                                </div> -->
                     
                               
       
                      </div>

          <div class="card-proposal-insurance"  >
            <div class="table-row-heading" style="flex-direction: column;padding-bottom:30px"> 
                <text class="heading prop-ins-card-title-border ins-head-padding">Parent / Husband Insurance Details</text>
            </div>
            <div class="table-row" style="margin-bottom: 20px">
              <div style="flex-direction: column;flex:1">
                <!-- <text style="flex:1" class="form-title">Name of parent / spousee</text>
                <input class="input"   type="text"v-model="name"  /> -->
                 <vx-input-box
                                             vx-label="Name of parent"
                                             vx-placeholder="Enter Name of parent"
                                             :vx-model="nameofparents"
                                              @valueReading="nameofparents=$event.value">
                                            </vx-input-box>
              </div>
              <div class="table-row-col-details mobile-top-20" style="flex-direction: column;flex:1">
                <!-- <text  class="form-title">Total sum assured on life of parent / spouse</text>
                <input class="input"   type="tel" v-model="sum"  /> -->
                 <vx-input-box
                 
                                             vx-label="Total sum assured on life of parent"
                                             vx-placeholder="Enter Total sum assured"
                                             :vx-model="totalsumassured"
                                              @valueReading="totalsumassured=$event.value">
                                            </vx-input-box>
              </div>
            </div>

         
        </div>

        <div v-if="platform ==='Web'" class="card-proposal-insurance insuran-btn-space inusr-prop-btn-row">
            <div class="box insurance-md-btn-width" style="padding:10px;">
                    <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle"  @click.native="jump('/master/testpro/proposalfamily')">
                      <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                      <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                    </div> -->
                     <div class=" btn-space">
                                <div  class=""
                                @click.native="jump('/master/testpro/proposalfamily')">
                  <s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                </div>
                            </div>
                </div>
                <div   class="box insurance-md-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="submitData()">
                            <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                            <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                        </div> -->
                        <div  class=""
                                @click.native="submitData()">
                  <p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
                </div>
                    </div>
           </div>

           <div  v-if="platform !=='Web'" class="card-proposal-insurance insuran-btn-space inusr-prop-btn-row">
              <div class="box insurance-md-btn-width" style="padding:10px;">
                      <!-- <div class="md-custom-btn sec-btn-color"  @click="jump('/master/testpro/proposalfamily')">
                        <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                        <text class="md-sec-btn-label ">Previous</text>
                      </div> -->
                       <div class=" btn-space">
                                <div  class=""
                                @click="jump('/master/testpro/proposalfamily')">
                  <s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                </div>
                            </div>
                  </div>
                  <div   class="box insurance-md-btn-width" style="padding:10px;">
                          <!-- <div class="md-custom-btn btn-color" @click="submitData()">
                              <text class="md-btn-label text-color-white">Proceed</text>
                              <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                          </div> -->
                          <div  class=""
                                @click="submitData()">
                  <p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
                </div>
                      </div>
             </div>

        </div>
    

  </div>
</template>

<script>
  const items = ["Mr", "Mrs", "Dr", "Prof"];
  const gender = ["Male", "Female"];
  const relationshipList = [
    "Aunty",
    "Banker / Financier",
    "Business",
    "Brother-in-law",
    "Cousin Brother",
    "Cousin Sister",
    "Daughter",
    "Daughter-in-law",
    "Executor",
    "Fiancee",
    "Friend",
    "Father",
    "Father-in-law",
    "Grand Daughter",
    "Grand Father",
    "Grand Mother",
    "Grand Son",
    "Husband",
    "Mother",
    "Mother-in-law",
    "Not Mentioned",
    "Nephew",
    "Niece",
    "Others",
    "Son",
    "Spouse",
    "Sister",
    "Sister-in-law",
    "Step Mother",
    "Step Son",
    "Trustee",
    "Uncle",
    "Wife"
  ];
  const appointeegenderList = [
    "Male",
    "Female"
  ];
  const appointeetitleList = [
    "Mr", "Mrs", "Dr", "Prof"
  ];
  const appointeeRelationshipList = [
    "Aunty",
    "Banker / Financier",
    "Business",
    "Brother-in-law",
    "Cousin Brother",
    "Cousin Sister",
    "Daughter",
    "Daughter-in-law",
    "Executor",
    "Fiancee",
    "Friend",
    "Father",
    "Father-in-law",
    "Grand Daughter",
    "Grand Father",
    "Grand Mother",
    "Grand Son",
    "Husband",
    "Mother",
    "Mother-in-law",
    "Not Mentioned",
    "Nephew",
    "Niece",
    "Others",
    "Son",
    "Spouse",
    "Sister",
    "Sister-in-law",
    "Step Mother",
    "Step Son",
    "Trustee",
    "Uncle",
    "Wife"
  ];
  const picker = weex.requireModule("picker");
  const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
  var stream = weex.requireModule('stream');
  const modal = weex.requireModule('modal')
  import { WxcRadio } from 'weex-ui'
  import appHeader from '../../components/Proposal/ProposalHeader.vue'
  import applicationTab from './ApplicationTab.vue'
  import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
  import SButton from "../.././components/vx-primary-button/vx-scondary-button";         
  import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
  import addTeamMember from './Proposal_insurance_popup.vue'
  import popUp from '../Calendar/Todo-pop-up.vue'
  import { WxcMask } from 'weex-ui'
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
         var me = this
            me.form = (me.$store.getters.getAppFormData)
            console.log(me.form)
              for(var i=0;i <me.form.length;i++)
                {
                  console.log(me.form[i].lifeinsuranceDetails)
                  me.formDat = me.form[i].lifeinsuranceDetails
                  console.log(me.formDat)
                  this.cover = me.formDat.lifeinsuranceDetails
                  this.nameofparents = me.formDat.Nameofparentspouse
                  this.totalsumassured =  me.formDat.Totalsumassuredonlifeofparentspouse
 
                }
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown


      }
    },
    components: {
      WxcRadio, appHeader,applicationTab,PButton,SButton,vxInputBox,addTeamMember,popUp,WxcMask    },
    data() {
      return {
         tabledata: [{
                        account_With: 'Bajaj Allianz',
                        sum_Assured: 'ABC',
                        policy_Status: 'Inforce'
                        
                    },
                     {
                        account_With: 'Kotak Life',
                        sum_Assured: 'PQR',
                        policy_Status: 'Applied'
                    },
                     {
                        account_With: 'Aviva Life',
                        sum_Assured: 'LMN',
                        policy_Status: 'Declined'
                    }
                ],
        check:'No',
        insurancepopup:false,
        headerName:'Proposal Fulfilment',
        deviceWidth: invalid,
        platform: invalid,
        activeName : true,
        animateName : false,
        activeSum : true,
        animateSum : false,
        cover:'',
        name: '',
        nameofparents:'',
        totalsumassured:'',
        index: -1,
        index1: -1,
        index2: -1,
        index3: -1,
        index4: -1,
        index5: -1,
        index6: -1,
        index7: -1,
        index8: -1,
        index9: -1,
        index10: -1,
        index11: -1,
        index12: -1,
        index13: -1,
        show1: false,
        show2: false,
        show3: false,
        table: [
          {
            status: "Date Of Quotation",
            date: '12/02/2016',
            premium: "Policy Term",
            year: 12
          },
          {
            status: "Name of the life insured",
            date: 'ConsultIT',
            premium: "Premium Payment Term",
            year: 12
          },
          {
            status: "Name of the insurance advisor",
            date: ' Hello Test',
            premium: "Mode of Premium Payment",
            year: 'Yearly'
          },
          {
            status: "Date Of Birth",
            date: '12/02/2016',
            premium: "  Sum Assured for Basic Plan",
            year: 10000000
          },
          {
            status: "Total Installment premium including service tax) for Year 1:",
            date: 5000000,
            premium: "Total Installment premium (including service tax )for Year 2 onwards:",
            year: 5000000
          },
          {
            status: "Unique Identification No.",
            date: '121N018V02',
            premium: "Age",
            year: 50
          },
          {
            status: "Advisor Code",
            date: 12345,
            premium: "Frequency",
            year: 2
          },
          {
            status: "Age Proof",
            date: ' Standard',
            premium: " ",
            year: " "
          }
        ],
        insuranceCoList: ['Aviva Life', 'Bajaj Allianz ','Bharti AXA','Birla Sun','Kotak Life','Reliance Life'],
        titleWeb: ["Mr", "Mrs", "Dr", "Prof"],
        policystatusWeb:['Applied','No Cash','Declined','Inforce','Lapsed','Postpone','Rated up','Rejected'],
        genderWeb: ["Male", "Female"],
        relationshipListWeb: [
          "Aunty",
          "Banker / Financier",
          "Business",
          "Brother-in-law",
          "Cousin Brother",
          "Cousin Sister",
          "Daughter",
          "Daughter-in-law",
          "Executor",
          "Fiancee",
          "Friend",
          "Father",
          "Father-in-law",
          "Grand Daughter",
          "Grand Father",
          "Grand Mother",
          "Grand Son",
          "Husband",
          "Mother",
          "Mother-in-law",
          "Not Mentioned",
          "Nephew",
          "Niece",
          "Others",
          "Son",
          "Spouse",
          "Sister",
          "Sister-in-law",
          "Step Mother",
          "Step Son",
          "Trustee",
          "Uncle",
          "Wife"
        ],
        appointeetitleListWeb: [
          "Mr", "Mrs", "Dr", "Prof"
        ],
        appointeeRelationshipListWeb: [
          "Aunty",
          "Banker / Financier",
          "Business",
          "Brother-in-law",
          "Cousin Brother",
          "Cousin Sister",
          "Daughter",
          "Daughter-in-law",
          "Executor",
          "Fiancee",
          "Friend",
          "Father",
          "Father-in-law",
          "Grand Daughter",
          "Grand Father",
          "Grand Mother",
          "Grand Son",
          "Husband",
          "Mother",
          "Mother-in-law",
          "Not Mentioned",
          "Nephew",
          "Niece",
          "Others",
          "Son",
          "Spouse",
          "Sister",
          "Sister-in-law",
          "Step Mother",
          "Step Son",
          "Trustee",
          "Uncle",
          "Wife"
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
      value1() {
        if (this.index1 == -1) {
          return "Select ";
        } else if (this.index1 < gender.length) {
          return gender[this.index1];
        }
        return "";
      },
      value2() {
        if (this.index2 == -1) {
          return "Select Relationship";
        } else if (this.index2 < relationshipList.length) {
          return relationshipList[this.index2];
        }
        return "";
      },
      value3() {
        if (this.index3 == -1) {
          return "Select Gender";
        } else if (this.index3 < appointeegenderList.length) {
          return appointeegenderList[this.index3];
        }
        return "";
      },
      value4() {
        if (this.index4 == -1) {
          return "Select Title";
        } else if (this.index4 < appointeetitleList.length) {
          return appointeetitleList[this.index4];
        }
        return "";
      },
      value5() {
        if (this.index5 == -1) {
          return "Select Relationship";
        } else if (this.index5 < appointeeRelationshipList.length) {
          return appointeeRelationshipList[this.index5];
        }
        return "";
      },
      value6() {
        if (this.index6 == -1) {
          return "Select Account Proof";
        } else if (this.index6 < accountProof.length) {
          return accountProof[this.index6];
        }
        return "";
      },
      value7() {
        if (this.index7 == -1) {
          return "Select ";
        } else if (this.index7 < stateList.length) {
          return stateList[this.index7];
        }
        return "";
      },
      value8() {
        if (this.index8 == -1) {
          return "Select";
        } else if (this.index7 < cityList.length) {
          return cityList[this.index8];
        }
        return "";
      },
    },
    methods: {
         openTodoPopUp(id) {
                switch(id) {
                    case 1: 
                        if(this.platform === 'Web') {
                            this.todoActive = true;
                        } else {
                            if(this.platform !== 'Web') {
                                this.weexShow = true;
                                this.hasAnimation = true
                            }
                        }
                        
                    break;
                    case 2: 
                        if(this.platform === 'Web') {
                            this.insurancepopup = true;
                        } else {
                            if(this.platform !== 'Web') {
                                this.hasAnimation = true;
                                this.weexReminder = true;
                            }
                        }
                    break;
                     case 'back':
                        this.insurancepopup = false;
                        break;
                }
            },
      jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        onchange (event) {
        this.checked = event.value
        if(event.value === true){
          this.check = 'Yes'
          this.cover = 'Yes'
        }
        else{
          this.check = 'No'
          this.cover = 'No'
        }
      },
      submitData()
{
  console.log(this.nameofparents)
  const lifeinsuranceDetails =''
  var me =this;



                const formData = {
                   userId:me.$store.state.agentDetails._id,
            leadId:'5abf315ab3b7e76f81a999c3',
            productId:'5ac71c50389e780bccd2ad72',
            lifeinsuranceDetails  : this.cover,
            Nameofparentspouse   : this.nameofparents,
            Totalsumassuredonlifeofparentspouse   : parseInt(this.totalsumassured),
                }

                console.log(formData)
                        //  me.$store.commit('ADD_APPFORMDATA',[{formData}],'lifeinsuranceDetails') 
                          me.$store.commit('ADD_APPFORMDATA',{lifeinsuranceDetails: formData})
                    me.$router.push('/master/testpro/proposalmedical')
      //           stream.fetch({
      //   method: 'POST',
      //   url: 'http://172.16.58.195:5010/secure/user/addProposal',
      //    headers: {
      //      'Accepts':'application/json',
      //      'Content-Type': 'application/json'},

      //    body:JSON.stringify(formData),
 
      //   type:'json'
      // }, 
      
      // function(response){
      //   var errcodeAPI= -1
      //     if(response.data.errCode == errcodeAPI){
      //         console.log('get in progress:'+JSON.stringify(response));
      //                   modal.toast({
      //                       message: 'Successfully Added Proposal Family Details',
      //                       duration: 1
      //                   })
      //                    me.$router.push('/master/testpro/proposalmedical')
      //     }
      //     else{
      //           modal.toast({
      //               message: 'Please enter Unique Mobile No'
      //                        ,
      //               duration: 2
      //           })

      //     }
       
      // })
}  ,
        onfocus (e) {
                console.log(e)
                e.style.background ="red"
              //   this.id = event.target.id

              // switch(event.target.id){
              //     case 'wipt_13':
              //      this.animateName = true;
               
              //      break;

              //      case 'wipt_14':
              //      this.animateSum=true;
              //      break;
                  
              // }

        
              //         console.log('focus:', event)

                   
                    
                      
              },
              onblur (event) { 
                  
                switch(event.target.id){
                  case 'wipt_13':
                   
                   if(this.name === '') {
                    this.animateName = false;
                   }
                   break;

                   case 'wipt_14':
                   if(this.sum === '') {
                    this.animateSum = false;
                   }
                   break;
                  
              }
            },
      wxcRadioListChecked(e) {
        this.checkedInfo = e;
      },
      titleType() {
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
      genderType() {
        picker.pick(
          {
            index: this.index1,
            items: gender
          },
          event => {
            if (event.result === "success") {
              this.value1 = items[event.data];
              this.index1 = event.data;
            }
          }
        );
      },
      relationship() {
        picker.pick(
          {
            index: this.index2,
            items: relationshipList
          },
          event => {
            if (event.result === "success") {
              this.value2 = items[event.data];
              this.index2 = event.data;
            }
          }
        );
      },
      appointeegenderType() {
        picker.pick(
          {
            index: this.index3,
            items: appointeegenderList
          },
          event => {
            if (event.result === "success") {
              this.value3 = items[event.data];
              this.index3 = event.data;
            }
          }
        );
      },
      appointeetitleType() {
        picker.pick(
          {
            index: this.index4,
            items: appointeetitleList
          },
          event => {
            if (event.result === "success") {
              this.value4 = items[event.data];
              this.index4 = event.data;
            }
          }
        );
      },
      appointeeRelationship() {
        picker.pick(
          {
            index: this.index5,
            items: appointeeRelationshipList
          },
          event => {
            if (event.result === "success") {
              this.value5 = items[event.data];
              this.index5 = event.data;
            }
          }
        );
      },
      accountProof() {
        picker.pick(
          {
            index: this.index6,
            items: accountProof
          },
          event => {
            if (event.result === "success") {
              this.value6 = items[event.data];
              this.index6 = event.data;
            }
          }
        );
      },
      state() {
        picker.pick(
          {
            index: this.index7,
            items: stateList
          },
          event => {
            if (event.result === "success") {
              this.value7 = items[event.data];
              this.index7 = event.data;
            }
          }
        );
      },
      city() {
        picker.pick(
          {
            index: this.index8,
            items: cityList
          },
          event => {
            if (event.result === "success") {
              this.value8 = items[event.data];
              this.index8 = event.data;
            }
          }
        );
      },
      investmentOption() {
        picker.pick(
          {
            index: this.index9,
            items: investmentList
          },
          event => {
            if (event.result === "success") {
              this.value9 = items[event.data];
              this.index9 = event.data;
            }
          }
        );
      },
      deathBenefitOption() {
        picker.pick(
          {
            index: this.index10,
            items: deathOptionList
          },
          event => {
            if (event.result === "success") {
              this.value10 = items[event.data];
              this.index10 = event.data;
            }
          }
        );
      },
      ageProof() {
        picker.pick(
          {
            index: this.index11,
            items: ageList
          },
          event => {
            if (event.result === "success") {
              this.value11 = items[event.data];
              this.index11 = event.data;
            }
          }
        );
      },
      annuityFrequency() {
        picker.pick(
          {
            index: this.index12,
            items: annunityFreqList
          },
          event => {
            if (event.result === "success") {
              this.value12 = items[event.data];
              this.index12 = event.data;
            }
          }
        );
      },
      annuityOption() {
        picker.pick(
          {
            index: this.index13,
            items: annunityOptionList
          },
          event => {
            if (event.result === "success") {
              this.value13 = items[event.data];
              this.index13 = event.data;
            }
          }
        );
      },
      regular() {
        console.log("Regular")
        this.show1 = true
        this.show2 = false
        this.show3 = false
      },
      unfortunate() {
        console.log("unfo")
        this.show2 = true
        this.show1 = false
        this.show3 = false
      },
      bi() {
        this.show3 = true
        this.show2 = false
        this.show1 = false
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

  .insurance-para-line-height {
    line-height: 1.5;
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

.scroller{
               /* background-color: #f7f7f7; */
           }
       
           .row {
               flex-direction: column
           }
       
           .card-proposal-insurance{
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
       
       
           }
           .prop-ins-card-title-border {
        border-style: solid;
       
        border-bottom-width: 4px;
        border-bottom-color: #3b371e;
        font-weight: bold;
    }
        .ins-head-padding{
          width:200px;
            }
            .life-head-padding{
          width:270px;
            }
           .heading{
               font-size: 25px;
               padding-top: 20px;
               padding-bottom:05px;
               /* font-family:robotobold;
; */
               font-family:robotobold;
       
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
           .side-container{
               flex-direction: column;
               
           }
       
           .input {
               display: block;
               background-color: #fff;
               font-size: 24px;
               padding: 15px;
               margin-bottom:20px;
               color: #666666;
               border-width: 1px;
               border-top: none;
               border-style: solid;
               border-top-color: #fff;
               border-right-color: #fff;
               border-left-color: #fff;
               border-bottom-color: #c7c7c7;
               placeholder-color:#9d9d9d;
               font-family:robotoregular;
       
       
               
           }
       
         
       
       
           .input:focus {
               border-width: 2px;
               border-bottom-color: #2e4053;
           }
       
       .switch{
         margin-top:16px;
       }
       .insuran-btn-space{
        justify-content:space-between
       }
       .btn-color {
        background-color: #3b371e;
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
       opacity:0.8;
    }


    .insurance-md-btn-width {
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
               padding-left: 20px;
               padding-right: 20px;
               padding-top:10px;
             
             
           }
                      .table-row-check {
                padding-left: 20px;
        padding-right: 10px;
        padding-top: 10px;
             
             
           }
             .table-row-heading {
         padding-left: 20px;
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

     .inusr-prop-btn-row {
       flex-direction: row;
       padding: 20px;
       margin-bottom: 20px;
     }
     .prd-BI-button-width {
      width: 280px;
    }
     /* Table CSS */
.m-c-tb-btm-bdr {
        border-bottom-color: rgb(232, 232, 232);;
    }

     .my-compo-tb-hdr-color {
        background-color: rgb(223, 223, 223);
    }
    .e-tb-dt-rw {
        flex-direction: row;
    }
    .e-tb-dt-col {
        flex-direction: column;
    }
    .e-tb-dt-flx-wrp {
        flex-wrap: wrap;
    }
    .s-tb-dt-container {
        width: 750px;
    }
    .e-tb-dt-bx-padding {
        padding: 10px;
    }
    .e-tb-dt-title-fnt {
        font-size: 25px;
        font-family:robotoregular;
    }
    .e-tb-dt-title-fnt-color {
        font-size: 25px;
        font-family:robotoregular;
        color: #ffffff;
    }
    .e-tb-dt-bld-fnt {
        font-weight: 700;
    }
     /* whole table border only in web */
    .s-tb-whole-bdr {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(202, 202, 202);
    }

    .card-wrap-status{
        margin: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
    }
 .mbt-i-ld-20 {
        margin-bottom: 30px;
    }

    .mrgn-rw-fld-lft-rgt-10 {
        margin-left: 20px;
        margin-right: 20px;
    }

     .ld-dtls-crd-pd-tp-20 {
        padding-top: 25px; 
    }

    .frm-hedng-bold-16 {
        font-size: 28px;
        font-weight: 700;
        font-family:robotoregular;
    }
     .e-tb-action-icon {
        width: 35px;
        height: 35px;
        /* margin-right: 12px; */
    }
      .e-tb-col-3 {
        width: 180px;
    }
    .tbl-set-mrg-tp-20 {
        margin-top: 20px;
    }
       @media only screen and (min-width: 320px) {
         /* Table CSS */
      .s-tb-dt-container {
            width: 750px;
        }
        .sp-btn-w {
          width: 50%;
        }
        .e-tb-dt-bx-padding {
            padding: 5px;
        }
        .e-tb-dt-title-fnt {
            font-size: 14px;
        }
         .e-tb-dt-title-fnt-color {
            font-size: 14px;
        }

        /* Table column width */
        /* for relation */
        .s-tb-dt-col-1 {
            width: 110px;
        }
          .mbt-i-ld-20 {
            margin-bottom: 20px;
        }

        .mrgn-rw-fld-lft-rgt-10 {
            margin-left: 15px;
            margin-right: 15px;
        }

        .frm-hedng-bold-16 {
            font-size: 16px;
            font-weight: 700;
            font-family:robotoregular;
        }
          .e-tb-action-icon {
            width: 20px;
            height: 20px;
        }
          .e-tb-col-3 {
            width: 100px;
        }
        /*  */
        .prd-BI-button-width {
      width: 120px;
    }
            .table-row-check{
                  padding-left: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }
              .card-proposal-insurance{
               border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


           }
.mobile-top-20{
  margin-top: 20px;
}
       /* Added by usama */
  .ins-head-padding{
          width:250px;
            }
            .life-head-padding{
          width:160px;
            }
     .inusr-prop-btn-row {
       padding: 12px;
     }
                    /*Button Arrow CSS*/
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
            background-color:#3b371e;
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
               border-width: 1px;
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
           /* .insuran-btn-space{
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
       .insurance-md-btn-width {
            width: 50%;
        }
       }
       
              @media only screen and (min-width: 768px) {
                .table-row-check{
                  padding-left: 10px;
        
                }
                     .card-proposal-insurance{
               margin:10px;

           }
                .mobile-top-20{
  margin-top: 0px;
}
  
                .form-title {
               font-size: 14px;
               padding-top: 10px;
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
               border-width: 1px;
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
                  .table-row-col-details {
                margin-left: 30px;
           }
           .mail-row{
           flex-direction:row ;
           flex:3;
           }
           /* .insuran-btn-space{
        justify-content:space-around;
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
       .insurance-md-btn-width {
            width: 30%;
        }

    @media screen and (min-width: 992px){
      .insurance-md-btn-width {
        width: 15%;
      }
    }
  
    }
  </style>