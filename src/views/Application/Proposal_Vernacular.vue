<template>
  <div style="background-color: #f7f7f7;">
    <!-- <inner-header :headeTitle="headerName"></inner-header>
    <application-tab></application-tab> -->
        <!-- <app-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></app-header> -->

        <div class="side-container  page-animation" ref="pagewrap">
          <div class="card-proposal-vernacular">
            <div class="table-row-heading" style="flex-direction: column;">
              <text class="heading  card-title-border vernacular-width ">Vernacular Details</text>
            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">ABC Life Insurance Company Limited requires that this proposal is completed by the Proposer. (If the Proposer does not read , write, or speak English, then this proposal may be completed by another person as per item 2 in guidelines of page 1 of this proposal. As such person need to complete this declaration.) I have explained the contents of this proposal to the Proposer and endeavoured to ensure that the contents have been fully understood. I have accurately recorded the responses to the information sought by the proposal form and I have read the responses back to the Proposer and confirmed that they are correct.
              </text>
            </div>
            <div style="flex-direction:row;margin-bottom: 20px" class="table-row-check">
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


                <div v-if="platform === 'Web'">
                  <div style="flex-direction:row;">

                    <input type="radio" class="cursor-pointer-globle" v-model="agreement" name="riders" value="Yes" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" v-model="agreement" name="riders" value="No" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>

            </div>

          </div>



          <div class="card-proposal-vernacular">
            <div class="table-row-heading" style="flex-direction: column;">
              <text class="heading card-title-border vernacular-width">Details Of Witness</text>
            </div>
            <div class="table-row">
              <div class="mobile-top-20 mt-20" style="flex-direction: column;flex:1">
                <!-- <text class="form-title">Name</text>
                <input class="input" v-model="name" type="text" style="flex:1" /> -->
                 <vx-input-box
                                             vx-label="Name"
                                                :hasRequired="true"
                                            message="Please Enter Valid Name"
                                             vx-placeholder="Enter Name" 
                                             :vx-model="name"
                                                 @valueReading="name=$event.value"
                                             >
                                            </vx-input-box>
              </div>
              <div style="flex-direction: column;flex:1" class="table-row-col-details mt-20 mobile-top-20">
                <!-- <text class="form-title">Mobile No</text>
                <input class="input" v-model="mobile" type="tel" style="flex:1" /> -->
                 <vx-input-box
                                             vx-label="Mobile No"
                                               :hasRequired="true"
                                            message="Please Enter Valid Mobile No."
                                             vx-type="tel"
                                             vx-placeholder="Enter Mobile No"
                                             :vx-model="mobile"
                                                 @valueReading="mobile=$event.value">
                                            </vx-input-box>
              </div>
            </div>

            <div style="flex-direction:column;flex:1;" class="table-row mt-20 mobile-top-20">
              <!-- <text class="form-title">Date of Birth of Life Assured</text>
              <input type="date" v-model="birthDate" placeholder="Input Date" class="input" max="2070-12-12" /> -->
           <vx-input-box
                                             vx-label="Date of Birth"
                                               :hasRequired="true"
                                            message="Please select Valid Date"
                                             vx-placeholder="Enter Date of Birth"
                                             vx-type="date"
                                             :vx-model="birthDate"
                                                 @valueReading="birthDate=$event.value">
                                            </vx-input-box>
            </div>



            <div class="table-row mobile-top-20 mt-20">
              <div style="flex-direction: column;flex:1">
                <!-- <text class="form-title">Address Line 1</text>
                <input class="input" v-model="add1" type="text" style="flex:1" /> -->
                 <vx-input-box
                                             vx-label="Address Line 1"
                                             :hasRequired="true"
                                            message="Please Enter address"
                                             vx-placeholder="Enter Address"
                                             :vx-model="add1"
                                                 @valueReading="add1=$event.value">
                                            </vx-input-box>
              </div>
              <div style="flex-direction: column;flex:1;" class="table-row-col-details mt-20 mobile-top-20">
                <!-- <text class="form-title">Address Line 2</text>
                <input class="input" v-model="add2" type="tel" style="flex:1" /> -->
                 <vx-input-box
                                             vx-label="Address Line 2"
                                             vx-placeholder="Enter Address"
                                             :vx-model="add2"
                                                 @valueReading="add2=$event.value">
                                            </vx-input-box>
              </div>
            </div>






            <div class="table-row">
              <div style="flex-direction: column;flex:1" class="mobile-top-20 mt-10">
                <text style="flex:1" class="form-title">State</text>
                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="state">{{value7}}</text>
                <div class="drop-down" v-if="platform == 'Web'">
                  <select style="flex:1" class="cursor-pointer-globle" v-model="stateData">
                      <option value="">Select</option>
                    <option class="dropdown-opt" v-for="calc in stateListWeb">{{calc}}</option>
                  </select>
                </div>

              </div>

              <div style="flex-direction: column;flex:1" class="table-row-col-details mt-20 mobile-top-20">
                <text style="flex:1" class="form-title">City</text>
                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                <div class="drop-down" v-if="platform == 'Web'">
                  <select style="flex:1" class="cursor-pointer-globle" v-model="cityData">
                     <option value="">Select</option>
                    <option class="dropdown-opt" v-for="calc in cityListWeb">{{calc}}</option>
                  </select>
                </div>

              </div>
            </div>

            <div style="flex:1;margin-bottom: 20px" class="table-row">
              <div class="mobile-top-20 mt-20" style="flex-direction: column;flex:1">
                <!-- <text class="form-title">Pin Code</text>
                <input class="input" v-model="pincode" type="tel" style="flex:1;" /> -->
                 <vx-input-box
                                             vx-label="Pincode"
                                             :hasRequired="true"
                                            message="Please enter Valid Pincode"
                                             vx-type="tel"
                                             vx-placeholder="Enter Pincode"
                                             :vx-model="pincode"
                                                 @valueReading="pincode=$event.value">
                                            </vx-input-box>
              </div>


            </div>
          </div>
          <div v-if="platform ==='Web'" class="card-proposal-vernacular btn-space vera-flx-row" style="margin-bottom:20px;">
            <div class="box vers-md-btn-width" style="padding:10px;">
              <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposalmedical')">
                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
              </div> -->
               <div class=" btn-space">
                                <div  class=""
                                @click.native="jump('/master/testpro/proposalmedical')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
            </div>
            <div class="box vers-md-btn-width" style="padding:10px;">
              <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposaldeclaration')">
                <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
              </div> -->
              <div  class=""
                                @click.native="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
            </div>
          </div>

          <div v-if="platform !=='Web'" class="card-proposal-vernacular btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
              <div class="box vers-md-btn-width" style="padding:10px;">
                <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/master/testpro/proposalmedical')">
                  <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                  <text class="md-sec-btn-label ">Previous</text>
                </div> -->
                 <div class=" btn-space">
                                <div  class=""
                                @click="jump('/master/testpro/proposalmedical')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
              </div>
              <div class="box vers-md-btn-width" style="padding:10px;">
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
          <!-- <div class="card-proposalnx-flex-row" style="padding-top:10px;padding-bottom:10px">
                          <div class="box  x-small-btn">
                              <div class="md-custom-btn btn-color">
                                  <image class="btn-icon-size"  src="../../../web/assets/arrow_back_white.png"></image>                                
                                  <text class="md-btn-label text-color-white"> Previous</text>
                
                              </div>
                          </div>
                          <div class="box  x-small-btn">
                              <div class="md-custom-btn btn-color">
                                  <text class="md-btn-label text-color-white">Sync & Proceed</text>
                                  <image class="btn-icon-size" style="    position: relative;
                                  left: 17px;" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                              </div>
                          </div>
                      </div> -->

        </div>
  </div>
</template>

<script>
  const items = ["Mr", "Mrs", "Dr", "Prof"];
  const gender = ["Male", "Female"];
  const martial = ["Single", "Married", "Divorced", "Widowed"];
  const nationality = [
    "Indian",
    "NRI",
    "Others"
  ];
  const educationList = ["Below 10th Standard", "Diploma After 10th Standard", "Diploma", "Illiterate", "Other", "Plus Two 10+2", "Post Graduate", "SSLC 10th Standard", "Doctorate"];
  const occupationList = ["Agriculture", "AntiqueDealer", "Armed Forces", "Buisness", "Diamond Trader",
    "Farmer", "House Wife", "House Wife with High Income", "Jewellery Dealer", "Labour",
    "Machine Operator", "Politically Exposed Person", "Professionals", "Retired", "Salaried",
    "Unemployed", "Working in Coal Mines"];
  const accountProof = ["Cancelled Cheque", "Passbook Copy"]
  const stateList = ["Maharashtra", "Gujarat", "Orissa", "Kerela", "Jharkhand", "Uttar Pradesh", "Haryana", "Madhya Pradesh", "Karnataka", "Andhra Pradesh", "Rajasthan"]
  const cityList = ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"]



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
  export default {
    created() {
       var me = this
            me.form = (me.$store.getters.getAppFormData)
            console.log(me.form)
              for(var i=0;i <me.form.length;i++)
                {
                  console.log(me.form[i].detailsOfWitness)
                  me.formDat = me.form[i].detailsOfWitness
                   this.leadiden = me.form[i].leadId._id
                  this.prodiden = me.form[i].productId
                  console.log(me.formDat)
                   this.agreement = me.formDat.Question12
                   this.name=me.formDat.Name
                   this.mobile=me.formDat.MobileNo
                   this.birthDate=me.formDat.Date
                   this.add1=me.formDat.AddressLine1
                   this.add2=me.formDat.AddressLine2
                   this.pincode=me.formDat.PinCode
                   this.stateData = me.formDat.State
                   this.cityData = me.formDat.City
 
                }
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }

     
    },
    components: {
      WxcRadio, appHeader, applicationTab,PButton,SButton,vxInputBox
    },
    data() {
      return {
        form:[],
        formDat:{},
        leadiden:'',
        prodiden:'',
        check: 'No',
        headerName: 'Proposal Fulfilmemt',
        deviceWidth: invalid,
        platform: invalid,
        agreement:'',
        name:'',
        mobile:'',
        birthDate:'',
        add1:'',
        add2:'',
        stateData:'',
        cityData:'',
        pincode:'',
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
        nameofwitness:'',
        mobilenumber:'',
        dateofbirth:'',
        address1:'',
        address2:'',
        pinCode:'',
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
        calculatorTypeWeb: ['Annual', 'Monthly'],
        itemsWeb: ["Annunity To Premium", "Premium To Annunity"],
        genderWeb: ["Male", "Female"],
        martialWeb: ["Single", "Married", "Divorced", "Widowed"],
        nationalityWeb: [
          "Indian",
          "NRI",
          "Others"
        ],
        educationListWeb: ["Below 10th Standard", "Diploma After 10th Standard", "Diploma", "Illiterate", "Other", "Plus Two 10+2", "Post Graduate", "SSLC 10th Standard", "Doctorate"],
        occupationListWeb: ["Agriculture", "AntiqueDealer", "Armed Forces", "Buisness", "Diamond Trader",
          "Farmer", "House Wife", "House Wife with High Income", "Jewellery Dealer", "Labour",
          "Machine Operator", "Politically Exposed Person", "Professionals", "Retired", "Salaried",
          "Unemployed", "Working in Coal Mines"],
        accountProofWeb: ["Cancelled Cheque", "Passbook Copy"],
        stateListWeb: ["Maharashtra", "Gujarat", "Orissa", "Kerela", "Jharkhand", "Uttar Pradesh", "Haryana", "Madhya Pradesh", "Karnataka", "Andhra Pradesh", "Rajasthan"],
        cityListWeb: ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"],

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
          return "Select Martial Status";
        } else if (this.index2 < martial.length) {
          return martial[this.index2];
        }
        return "";
      },
      value3() {
        if (this.index3 == -1) {
          return "Select Nationality";
        } else if (this.index3 < nationality.length) {
          return nationality[this.index3];
        }
        return "";
      },
      value4() {
        if (this.index4 == -1) {
          return "Select Education";
        } else if (this.index4 < educationList.length) {
          return educationList[this.index4];
        }
        return "";
      },
      value5() {
        if (this.index5 == -1) {
          return "Select Occupation";
        } else if (this.index5 < occupationList.length) {
          return occupationList[this.index5];
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
          return "Select State";
        } else if (this.index7 < stateList.length) {
          return stateList[this.index7];
        }
        return "";
      },
      value8() {
        if (this.index8 == -1) {
          return "Select City";
        } else if (this.index7 < cityList.length) {
          return cityList[this.index8];
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
      submitData() {
        const  detailsOfWitness =''
        var me = this
      

        const formData = {
          userId:me.$store.state.agentDetails._id,
          leadId:this.leadiden,
          productId:this.prodiden,
          Question12  : this.agreement,
          Name : this.name,
          MobileNo: parseInt(this.mobile),
          Date : this.birthDate,
          AddressLine1 : this.add1,
          AddressLine2 : this.add2,
          State : this.stateData,
          City : this.cityData,
          PinCode : parseInt(this.pincode),

        }

        console.log(formData)
             // me.$store.commit('ADD_APPFORMDATA',[{formData}],'detailsOfWitness') 
             me.$store.commit('ADD_APPFORMDATA',{detailsOfWitness: formData})
                    me.$router.push('/master/testpro/proposaldeclaration')
        // stream.fetch({
        //   method: 'POST',
        //   url: 'http://172.16.58.195:5010/secure/user/addProposal',
        //   headers: {
            
        //     'Content-Type': 'application/json'
        //   },
    
        //   body: JSON.stringify(formData),
   
        //   type: 'json'
        // },

        //   function (response) {
        //     var errcodeAPI = -1
        //     if (response.data.errCode == errcodeAPI) {
        //       console.log('get in progress:' + JSON.stringify(response));
        //       modal.toast({
        //         message: 'Successfully Added Proposal Vernacular Details',
        //         duration: 1
        //       })
        //         me.$router.push('/master/testpro/proposaldeclaration')
        //     }
        //     else {
        //       modal.toast({
        //         message: 'Please enter Unique Mobile No'
        //         ,
        //         duration: 2
        //       })

        //     }
         
        //   })
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
      martialType() {
        picker.pick(
          {
            index: this.index2,
            items: martial
          },
          event => {
            if (event.result === "success") {
              this.value2 = items[event.data];
              this.index2 = event.data;
            }
          }
        );
      },
      nationality() {
        picker.pick(
          {
            index: this.index3,
            items: nationality
          },
          event => {
            if (event.result === "success") {
              this.value3 = items[event.data];
              this.index3 = event.data;
            }
          }
        );
      },
      education() {
        picker.pick(
          {
            index: this.index4,
            items: educationList
          },
          event => {
            if (event.result === "success") {
              this.value4 = items[event.data];
              this.index4 = event.data;
            }
          }
        );
      },
      occupation() {
        picker.pick(
          {
            index: this.index5,
            items: occupationList
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
    },
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

  }
</script>

<style scoped>
       .robotoregular {
        font-family:robotoregular;
    }
    .mt-20{
      margin-top:20px;
    }
    .mt-10{
      margin-top:10px
    }
       .table-row {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

    }
     .table-row-check{
                  padding-left: 20px;
                    padding-right: 10px;
        padding-top: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 20px;
                  padding-top: 10px;
        
                }
      .table-row-heading {
         padding-left: 20px;
        padding-right: 10px;
        /* padding-top: 10px; */

        
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

  .form-title {
    lines: 4;
  }

  .row {
    flex-direction: column
  }

  .card-proposal-vernacular {
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
    padding-bottom: 05px;
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
    /*flex: 2;*/
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
        border-bottom-color: #c7c7c7;
        placeholder-color: #999999;
        font-family: robotoregular;
    }
    .input-drop:focus {
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
    font-size: 31px;
    
    font-weight: 500;
    
    color: #fff;
    font-family:robotoregular;
  }

  .md-sec-btn-label {
    font-size: 31px;
    
    font-weight: 500;
    
    color: #000;
    font-family:robotoregular;
  }

  .md-custom-btn:active {
    background-color: rgb(5, 4, 4);
  }

  .vers-md-btn-width {
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
    padding-left: 20px;
    padding-right: 20px;
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

  .vera-flx-row {
	  flex-direction: row;
	  padding: 20px;
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
    .vernacular-width{
          width: 220px;
    }

  @media only screen and (min-width: 320px) {
      .card-proposal-vernacular {
            border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


  }
    .table-row-check{
                  padding-left: 10px;
                  padding-top: 10px
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }
      .mt-20{
      margin-top:0px;
    }
    .mt-10{
      margin-top:0px
    }
    .mobile-top-20{
      margin-top: 20px;
    }
            .table-row {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;
    }

     .vernacular-width{
          width: 130px;
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
      
      font-weight: 500;
      
      font-family:robotoregular;
    }
    .btn-color {
      background-color: #3b371e;
    }
    .md-sec-btn-label {
      color: #000;
      ;
      font-size: 11px;
      
      font-weight: 500;
      
      font-family:robotoregular;
    }
    .sec-btn-color {
      background-color: #fff;
      border: 1px solid black;
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
    .btn-space {
      justify-content: space-evenly;
    }
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
	.vera-flx-row {
		padding: 12px;
	}
	.vers-md-btn-width {
      width: 50%;
    }
  }

  @media only screen and (min-width: 768px) {
      .card-proposal-vernacular {
          margin: 10px;
      

  }
  .table-row-check{
                  padding-left: 10px;
        
                }
     .mobile-top-20{
      margin-top: 0px;
    }
              .table-row {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
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
    .btn-space {
      justify-content: space-between;
    }
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
    .vers-md-btn-width {
      width: 30%;
    }
  }

  @media screen and (min-width: 992px){
	.vers-md-btn-width {
      	width: 15%;
    }
  }
</style>