<template>
  <div>
    <scroller class="scroller">
      <div class="container">

        <div class="form-container" style="flex:2">
          <div class="card row" style="flex:2">
            <text class="heading">Enter Details</text>

            <div class="table-row" style="flex-direction:row">
              <div style="flex-direction: row;flex:1">
                <div style="flex-direction: column;flex:1">
                  <text style="flex:1" class="form-title">Advisor Name</text>
                  <input class="input" type="text" style="flex:1" />
                </div>
                <div class="table-row-details" style="flex-direction: column;flex:1">
                  <text style="flex:1" class="form-title">Advisor Code</text>
                  <input class="input" type="text" style="flex:1" />
                </div>



              </div>

            </div>


            <div class="table-row" style="flex-direction: column;flex:1">
              <text style="flex:1" class="form-title">Select Calculator Type</text>
              <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="calculatorType">{{value}}</text>
              <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                <select style="flex:1">
                  <option class="dropdown-opt" v-for="(calc, li) in calculatorTypeWeb" :key="li">{{calc}}</option>
                </select>
              </div>
            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Name of Life Assured</text>
                <input class="input" type="text" style="flex:1" />
              </div>

              <div  class="table-row-details" style="flex-direction:column;flex:1">
                <text style="flex:1" class="form-title">Gender of Life Assured</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="genderType">{{value1}}</text>
                <div v-if="platform == 'Web'" style="flex:1">
                  <div style="flex-direction:row;margin-top:30px">

                    <input type="radio" name="gender" value="Male" />
                    <label class="radio-title"  style="margin-left:10px;">Male</label>

                    <input type="radio" name="gender" value="Female" style="margin-left:30px;" />
                    <label  class="radio-title" style="margin-left:10px;">Female</label>

                  </div>
                </div>
              </div>
            </div>

            <div style="flex-direction:row" class="table-row">
                <text style="flex:1" class="form-title">Date of Birth of Life Assured</text>
                <input style="flex:1" type="date" placeholder="Input Date" class="input" max="2017-12-12" min="2015-01-01" />
            </div>


            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Name of The Child</text>
                <input class="input" type="text" style="flex:1" />
              </div>

              <div style="flex-direction:column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Gender of The Child</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="childgenderType">{{value2}}</text>
                <div v-if="platform == 'Web'" style="flex:1">
                  <div style="flex-direction:row;margin-top:30px">

                    <input type="radio" name="gender" value="Male" />
                    <label class="radio-title" style="margin-left:10px;">Male</label>

                    <input type="radio" name="gender" value="Female" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">Female</label>

                  </div>
                </div>
              </div>
            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Date of Birth of Child</text>
                <input style="flex:1" type="date" placeholder="Input Date" class="input" max="2017-12-12" min="2015-01-01" />

              </div>

              <div style="flex-direction:column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Relationship with Child</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="relationshipWithChild">{{value3}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in childrelationshipWeb">{{calc}}</option>
                  </select>
                </div>
              </div>
            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Policy Term</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="policyTerm">{{value4}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in policyTermListWeb">{{calc}}</option>
                  </select>
                </div>

              </div>

              <div style="flex-direction: column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Premium Paying Term</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="premiumPayingTerm">{{value5}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in premiumPayingTermListWeb">{{calc}}</option>
                  </select>
                </div>

              </div>
            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Premium Mode</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="premiumMode">{{value6}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in premiumModeListWeb ">{{calc}}</option>
                  </select>
                </div>

              </div>

              <div style="flex-direction:column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Premium Type</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="premiumType">{{value7}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in premiumTypeListWeb">{{calc}}</option>
                  </select>
                </div>
              </div>
            </div>


            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Installment Premium</text>
                <input class="input" type="text" style="flex:1" />
              </div>

              <div style="flex-direction:column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Method of Payment</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="paymentMethod">{{value8}}</text>
                <div v-if="platform == 'Web'" style="flex:1">
                  <div style="flex-direction:row;margin-top:30px">

                    <input type="radio" name="gender" value="ECS" />
                    <label class="radio-title" style="margin-left:10px;">ECS</label>

                    <input type="radio" name="gender" value="NON-ECS" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">NON-ECS</label>

                  </div>
                </div>
              </div>
            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Investment Option</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="investmentOption">{{value9}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in investmentListWeb ">{{calc}}</option>
                  </select>
                </div>

              </div>

              <div style="flex-direction: column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Sum Assured</text>
                <input class="input" type="text" style="flex:1" />
              </div>

            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Death Benefit Option</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="deathBenefitOption">{{value10}}</text>
                <div v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in deathOptionListWeb ">{{calc}}</option>
                  </select>
                </div>

              </div>

              <div style="flex-direction:column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Age Proof</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="ageProof">{{value11}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in ageListWeb ">{{calc}}</option>
                  </select>
                </div>
              </div>
            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Annuity Frequency</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="annuityFrequency">{{value12}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in annunityFreqListWeb ">{{calc}}</option>
                  </select>
                </div>

              </div>

              <div style="flex-direction:column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Annuity Option</text>
                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="annuityOption">{{value13}}</text>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1">
                    <option class="dropdown-opt" v-for="calc in annunityOptionListWeb">{{calc}}</option>
                  </select>
                </div>
              </div>
            </div>


            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: column;">
                <div style="flex-direction:row ;flex:2" >
               <div><text style="flex:1" class="form-title">Do you want to add riders to this plan</text></div> 
                <div class="example" v-if="platform !== 'Web'" style="flex:1">
                
                  <div><text class="label">Yes</text></div>
                 <div> <switch></switch></div>
                
                </div>
              </div>


                <div v-if="platform === 'Web'" style="flex:1">
                  <div style="flex-direction:row;margin-top:30px">

                    <input type="radio" name="riders" value="Yes" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" name="riders" value="No" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>

            </div>

            <div style="flex-direction:row" class="table-row">
              <div style="flex-direction: row;flex:1">
                <div style="flex-direction: column;flex:1">
                  <text style="flex:1" class="form-title">Life Equity Fund 3</text>
                  <input class="input" type="text" style="flex:1" />
                </div>
                <div style="flex-direction: column;flex:1" class="table-row-details">
                  <text style="flex:1" class="form-title">Life Pure Equity Fund 2</text>
                  <input class="input" type="text" style="flex:1" />
                </div>



              </div>

            </div>



            <div style="flex-direction: row;flex:1" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Make in India Fund</text>
                <input class="input" type="text" style="flex:1" />
              </div>
              <div style="flex-direction: column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Life Balanced Fund 1</text>
                <input class="input" type="text" style="flex:1" />
              </div>



            </div>





            <div style="flex-direction: row;flex:1" class="table-row">
              <div style="flex-direction: column;flex:1">
                <text style="flex:1" class="form-title">Life Corporation Bond Fund 1</text>
                <input class="input" type="text" style="flex:1" />
              </div>
              <div style="flex-direction: column;flex:1" class="table-row-details">
                <text style="flex:1" class="form-title">Life Money Market Fund 1</text>
                <input class="input" type="text" style="flex:1" />
              </div>



            </div>




            <div style="flex-direction: column;flex:1" class="table-row">
              <text style="flex:1" class="form-title">Smart Pension Fund 1</text>
              <input class="input" type="text" style="flex:1" />
            </div>

            <div class="row-btn" style="flex:2">
              <div class="card-btn1" style="flex:1">
                <text class="card-btn-text">Calculate</text>
              </div>
              <div class="card-btn1" style="flex:1">
                <text class="card-btn-text"> Generate BI</text>
              </div>
            </div>


          </div>
        </div>

        <div class="card" style="flex:1">
          <text class="heading">Summary</text>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Plan Option</text>
              <text class="card-subtitle-details">Income with Maturity Benefit</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Policy Term</text>
              <text class="card-subtitle-details">20 Years</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Premium Paying Term</text>
              <text class="card-subtitle-details">20 Years</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Annualised Premium</text>
              <text class="card-subtitle-details">20 Years</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Sum Assured</text>
              <text class="card-subtitle-details">5,40,000</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Payout in 18th Year</text>
              <text class="card-subtitle-details">₹ 5,40,000</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Payout in 19th Year</text>
              <text class="card-subtitle-details">₹ 5,40,000</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Payout at Maturity</text>
              <text class="card-subtitle-details">₹ 5,40,000</text>
            </div>
          </div>
          <div class="card-summary row">
            <div class="summ">
              <text class="card-subtitle">Minimum Payout on Death</text>
              <text class="card-subtitle-details">₹ 5,40,000</text>
            </div>
          </div>
        </div>
      </div>
      <div class="card row" >
        <div class="row-btn" style="justify-content:center;align-items:center">
          <div class="card-btn2" @click="regular()">
            <text class="card-btn-text">Regular</text>
          </div>
          <div class="card-btn2" @click="unfortunate()">
            <text class="card-btn-text">Unfortunate</text>
          </div>
          <div class="card-btn2" @click="bi()">
            <text class="card-btn-text">Benefit</text>
          </div>
        </div>
        <div v-if="show1==true" style="justify-content:center;align-items:center;flex:2">

          <image class="image" src="http://salesdrive.iorta.in/img/base-plan.jpg"></image>

        </div>

        <div v-if="show2==true" style="justify-content:center;flex:2">

          <image class="image" src="http://salesdrive.iorta.in/img/death-scenerio.jpg"></image>

        </div>
        <div v-if="show3==true" style="justify-content:center;flex:2">
          <div v-for="(row, pi) in table" :key="pi">

            <div class="card-line1 row h-border" style="flex-direction:row">
              <text class="card-subtitle1">{{row.status}} </text>
              <text class="card-subtitle1 ">{{row.date}} </text>
              <text class="card-subtitle1 ">{{row.premium}}</text>
              <text class="card-subtitle1">{{row.year}}</text>
            </div>

          </div>
        </div>
      </div>






    </scroller>
  </div>
</template>

<script>
  const items = ["Annunity To Premium", "Premium To Annunity"];
  const gender = ["Male", "Female"];
  const childgender = ["Male", "Female"];
  const childrelationship = [
    "Son",
    "Daughter",
    "Grandson",
    "Granddaughter",
    "Legal Guardian"
  ];
  const policyTermList = ["1", "2", "3", "4", "5"];
  const premiumPayingTermList = ["1", "2", "3", "4", "5"];
  const premiumModeList = ["Yearly", "Half-yearly", "Quarterly", "Monthly"];
  const premiumTypeList = ["Single", "Regular", "Limited"];
  const paymentList = ["ECS", "NON-ECS"];
  const investmentList = ["Self-Managed", "Target Maturity", "Life Stage"];
  const deathOptionList = ["Option 1", "Option 2"];
  const ageList = ["Standard", "Non-standard"];
  const annunityFreqList = ["Yearly", "Half-yearly", "Quarterly", "Monthly"];
  const annunityOptionList = ["Life Annunity", " Life Annunity with ROP"];



  const picker = weex.requireModule("picker");
  const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
  import { WxcRadio } from 'weex-ui'
  export default {
    created() {
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        return this.platform
      }
    },
    components: {
      WxcRadio
    },
    data() {
      return {
        platform: invalid,
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
        calculatorTypeWeb: ['Annual', 'Monthly'],
        itemsWeb: ["Annunity To Premium", "Premium To Annunity"],
        genderWeb: ["Male", "Female"],
        childgenderWeb: ["Male", "Female"],
        childrelationshipWeb: [
          "Son",
          "Daughter",
          "Grandson",
          "Granddaughter",
          "Legal Guardian"
        ],
        policyTermListWeb: ["1", "2", "3", "4", "5"],
        premiumPayingTermListWeb: ["1", "2", "3", "4", "5"],
        premiumModeListWeb: ["Yearly", "Half-yearly", "Quarterly", "Monthly"],
        premiumTypeListWeb: ["Single", "Regular", "Limited"],
        paymentListWeb: ["ECS", "NON-ECS"],
        investmentListWeb: ["Self-Managed", "Target Maturity", "Life Stage"],
        deathOptionListWeb: ["Option 1", "Option 2"],
        ageListWeb: ["Standard", "Non-standard"],
        annunityFreqListWeb: ["Yearly", "Half-yearly", "Quarterly", "Monthly"],
        annunityOptionListWeb: ["Life Annunity", " Life Annunity with ROP"],

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
          return "Select ";
        } else if (this.index2 < childgender.length) {
          return childgender[this.index2];
        }
        return "";
      },
      value3() {
        if (this.index3 == -1) {
          return "Select ";
        } else if (this.index3 < childrelationship.length) {
          return childrelationship[this.index3];
        }
        return "";
      },
      value4() {
        if (this.index4 == -1) {
          return "Select ";
        } else if (this.index4 < policyTermList.length) {
          return policyTermList[this.index4];
        }
        return "";
      },
      value5() {
        if (this.index5 == -1) {
          return "Select ";
        } else if (this.index5 < premiumPayingTermList.length) {
          return premiumPayingTermList[this.index5];
        }
        return "";
      },
      value6() {
        if (this.index6 == -1) {
          return "Select ";
        } else if (this.index6 < premiumModeList.length) {
          return premiumModeList[this.index6];
        }
        return "";
      },
      value7() {
        if (this.index7 == -1) {
          return "Select  ";
        } else if (this.index7 < premiumTypeList.length) {
          return premiumTypeList[this.index7];
        }
        return "";
      },
      value8() {
        if (this.index8 == -1) {
          return "Select  ";
        } else if (this.index8 < paymentList.length) {
          return paymentList[this.index8];
        }
        return "";
      },
      value9() {
        if (this.index9 == -1) {
          return "Select  ";
        } else if (this.index9 < investmentList.length) {
          return investmentList[this.index9];
        }
        return "";
      },
      value10() {
        if (this.index10 == -1) {
          return "Select  ";
        } else if (this.index10 < deathOptionList.length) {
          return deathOptionList[this.index10];
        }
        return "";
      },
      value11() {
        if (this.index11 == -1) {
          return "Select  ";
        } else if (this.index11 < ageList.length) {
          return ageList[this.index11];
        }
        return "";
      },
      value12() {
        if (this.index12 == -1) {
          return "Select  ";
        } else if (this.index12 < annunityFreqList.length) {
          return annunityFreqList[this.index12];
        }
        return "";
      },
      value13() {
        if (this.index13 == -1) {
          return "Select";
        } else if (this.index13 < annunityOptionList.length) {
          return annunityOptionList[this.index13];
        }
        return "";
      }
    },
    methods: {
      wxcRadioListChecked(e) {
        this.checkedInfo = e;
      },
      calculatorType() {
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
      childgenderType() {
        picker.pick(
          {
            index: this.index2,
            items: childgender
          },
          event => {
            if (event.result === "success") {
              this.value2 = items[event.data];
              this.index2 = event.data;
            }
          }
        );
      },
      relationshipWithChild() {
        picker.pick(
          {
            index: this.index3,
            items: childrelationship
          },
          event => {
            if (event.result === "success") {
              this.value3 = items[event.data];
              this.index3 = event.data;
            }
          }
        );
      },
      policyTerm() {
        picker.pick(
          {
            index: this.index4,
            items: policyTermList
          },
          event => {
            if (event.result === "success") {
              this.value4 = items[event.data];
              this.index4 = event.data;
            }
          }
        );
      },
      premiumPayingTerm() {
        picker.pick(
          {
            index: this.index5,
            items: premiumPayingTermList
          },
          event => {
            if (event.result === "success") {
              this.value5 = items[event.data];
              this.index5 = event.data;
            }
          }
        );
      },
      premiumMode() {
        picker.pick(
          {
            index: this.index6,
            items: premiumModeList
          },
          event => {
            if (event.result === "success") {
              this.value6 = items[event.data];
              this.index6 = event.data;
            }
          }
        );
      },
      premiumType() {
        picker.pick(
          {
            index: this.index7,
            items: premiumTypeList
          },
          event => {
            if (event.result === "success") {
              this.value7 = items[event.data];
              this.index7 = event.data;
            }
          }
        );
      },
      paymentMethod() {
        picker.pick(
          {
            index: this.index8,
            items: paymentList
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

<style >
  .row {
    flex-direction: column
  }

  .card {
    margin: 20px;
    margin-top: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
  }

  .card-subtitle {
    font-size: 22px;
    color:#9D9D9D;
  }

  .heading {
    font-size: 30px;
    padding:30px;
   
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
    flex-direction: column;
    /* padding-bottom: 50px */
  }

  .input {
    display: block;
    background-color: #fff;
    font-size: 25px;
    padding: 10px;
    color: #666666;
    border-width: 2px;
    border-top: none;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #c7c7c7;
  }

  .input:focus {
    border-width: 3px;
    border-bottom-color: #2e4053;
  }

  .card-btn1 {
    background-color: #505050;
    border-radius: 8px;
    margin-top: 15px;
    margin: 30px;
    width: 210px;
    height: 60px;
    justify-content: center;
  }

  .card-btn2 {
    background-color: #505050;
    border-radius: 8px;
    margin-top: 15px;
    width: 210px;
    height: 60px;
    justify-content: center;
  }

  .card-btn-text {
    color: #FFFFFF;
    font-size: 25px;
    text-align: center;
  }

  .row-btn {
    flex-direction: row;
  }

  .card-subtitle-head {
    font-size: 14px;
    margin: 0;
    color: #9D9D9D;
    line-height: 18px;
  }

  .card-subtitle-title {
    font-size: 18px;
    margin: 0;
    line-height: 24px;
    font-family: Helvetica-medium;
  }
  .card-subtitle-details {
    font-size: 25px;
  color:#565656;
    font-family: Helvetica-medium;
  }

  .image {
    width: 500px;
    height: 500px;
  }

  .form-title {
    font-size: 22px;
    padding: 10px;
    color: #9d9d9d;
  }
  .radio-title{
    color: #9d9d9d;
    font-size: 14px;
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
  }

  .table-row {
    padding: 20px;
    margin-top: 30px;
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
  select{
    color: #565656;
    font-size: 14px
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
  .table-row-details{
    margin-left:40px;
  }
  .card-line1{
    padding:20px;
  }

  /* @media only screen and (max-width: 959px) {
    .container {
      flex-direction: column;
    }
    .col1 {
      flex-direction: column;
    }
    .card-btn1 {
      background-color: #505050;
      border-radius: 8px;
      margin-top: 15px;
      margin: 30px;
      width: 100px;
      height: 60px;
      justify-content: center;
    }
    .card-btn2 {
      background-color: #505050;
      border-radius: 8px;
      margin-top: 15px;
      width: 100px;
      height: 60px;
      justify-content: center;
    }
    .card-btn-text {
      color: #FFFFFF;
      font-size: 15px;
      text-align: center;
    }
  }

  .card-subtitle1 {
    font-size: 18px;
    color: #9D9D9D;
    margin-top: 30px;
  }

  .wrapper {
    background-color: #EFEFEF;
  } */
</style>