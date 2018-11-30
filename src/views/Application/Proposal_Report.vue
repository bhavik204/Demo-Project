<template>
    <div style="background-color: #f7f7f7;">
        <!-- <inner-header :headeTitle="headerName"></inner-header> -->
       
                <!-- <app-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></app-header> -->



                <div class="side-container  page-animation" ref="pagewrap">
                    <div class="card-proposal-report">
                        <div class="table-row-heading" style="flex-direction: column;">
                            <text class="heading prop-report-card-title-border report-width">Confidential Report</text>
                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">1) Have you met the Proposer & the Life to be Assured?
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
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

                                        <input type="radio" class="cursor-pointer-globle" v-model="propLife" name="proposer" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="propLife" name="proposer" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">2)Are you (Advisor / SM) related to the Life to be Assured? If Yes, to whom and what is the relationship?
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange1"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check1}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="advisorLife" name="advisor" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="advisorLife" name="advisor" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">3) Do you notice any disability, mental or physical deformity for Life to be Assured?
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange2"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check2}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="disability" name="disable" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="disability" name="disable" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">4) Are you personally satisfied with the financial standing of the Proposer & Life to be Assured in relation to the proposed insurance? Please estimate the income of the Proposer.
                            </text>
                        </div>
                        <div style="flex-direction:row;" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange3"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check3}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" >
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="financial" name="personal" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="financial" name="personal" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>


                        <div style="flex-direction:row" class="table-row">
                            <div class="mobile-top-20 " style="flex-direction: column;">
                                <!-- <text style="" class="form-title">Income of the Proposer</text>
                               
                               < <input class="input" type="tel" style="flex:0.5" v-model="income" /> -->
                              <div class="desktop-top-10">
                              <vx-input-box
                                             vx-label="Income of the Proposer"
                                             vx-placeholder="Enter Income of the Proposer"
                                             vx-type="tel"
                                             :vx-model="proposalincome"
                                             @valueReading="proposalincome=$event.value">
                                            </vx-input-box>
                            </div>
                              </div>
                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">5) Is the income proof verified by you? What is the type of income proof verified
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange4"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check4}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" >
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="incomeProof" name="inproof" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="incomeProof" name="inproof" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>






                        </div>
                        <div style="flex-direction:column" class="table-row">
                            <div  class="mobile-top-20 income-report-width"  style="flex-direction: column;flex:1">
                                <text style="flex:1" class="form-title">Type Of Income proof</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="incomeData">{{value}}</text>
                                <div class="drop-down" v-if="platform == 'Web'" style="flex:1;">
                                    <select style="flex:1" class="cursor-pointer-globle" v-model="incomeType">
                                         <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in incomeProofWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>


                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">6) Is the age proof verified by you for all Life to be Assured?
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange5"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check5}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" >
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="ageProof" name="aprrof" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="ageProof" name="aprrof" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">7) Is the Life to be Assured, presently, in good health? if no, give details.
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange6"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check6}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" >
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="health" name="good" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="health" name="good" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                        <div class="table-row-check-title mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">8) How long have you konwn the Life to be assured?
                            </text>
                        </div>
                      

                        <div class="table-row">
                            <div class="mobile-top-20" style="flex-direction: column;flex:1">
                                <!-- <text class="form-title">Years</text>
                                <input class="input" type="tel" style="flex:1" v-model="years" /> -->
                                     <vx-input-box
                                             vx-label="Years"
                                               :hasRequired="true"
                                            message="Please enter the Years"
                                             vx-placeholder="Enter Years"
                                             vx-type="tel"
                                             :vx-model="proposalyears"
                                                 @valueReading="proposalyears=$event.value">
                                            </vx-input-box>

                            </div>
                            <div style="flex-direction: column;flex:1" class="table-row-col-details mobile-top-20">
                                <!-- <text class="form-title">Months</text>
                                <input class="input" type="tel" style="flex:1" v-model="months" /> -->
  <vx-input-box
                                             vx-label="Months"
                                             :hasRequired="true"
                                            message="Please enter Months 0-12"
                                             vx-placeholder="Enter Months"
                                             vx-type="tel"
                                             :vx-model="proposalmonths"
                                                 @valueReading="proposalmonths=$event.value">
                                            </vx-input-box>

                            </div>


                        </div>
                        <div style="flex-direction:row" class="table-row">
                            <div style="flex-direction: column;flex:1" class="mobile-top-20">
                                <div class="mobileno-report-width">
                                <!-- <text class="form-title">SM / FLS Mobile No.</text>
                                <input class="input" type="tel" style="flex:0.5" v-model="mobile" /> -->
   <vx-input-box
                                             vx-label="Mobile No."
                                             vx-placeholder="Enter Mobile No."
                                             vx-type="tel"
                                             :vx-model="proposalmobile"
                                                 @valueReading="proposalmobile=$event.value">
                                            </vx-input-box>
                                </div>

                            </div>



                        </div>




                    </div>

                    <!--comment by ashraf  all buttons not in use using secondry/primary button component -->
                    <div  v-if="platform ==='Web'" class="card-proposal-report btn-space prop_Report-btn_padding">
                        <div class="box doc-proposal-reprt-btn-width" style="padding:10px;">
                            <!-- Button 1 -->
                            <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposaldeclaration')">
                                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                            </div> -->
                            <div class="btn-space">
                                <div  class="documt-doc-proposal-reprt-btn-width"
                                @click.native="jump('/master/testpro/proposaldeclaration')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                            <!--  -->
                        </div>
                        <div class="box doc-proposal-reprt-btn-width" style="padding:10px;">
                            <!-- button 2 -->
                            <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="submitData()">
                                <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                                <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                             <div class="documt-doc-proposal-reprt-btn-width"
                                @click.native="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>

                            <!--  -->
                        </div>
                    </div>

                    <div v-if="platform !=='Web'" class="card-proposal-report btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                            <div class="box doc-proposal-reprt-btn-width" style="padding:10px;">
                                <!--  -->
                                <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/master/testpro/proposaldeclaration')">
                                    <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                    <text class="md-sec-btn-label ">Previous</text>
                                </div> -->
                             <div class="btn-space">
                                <div  class="documt-doc-proposal-reprt-btn-width"
                                @click="jump('/master/testpro/proposaldeclaration')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                                <!--  -->
                            </div>
                            <div class="box doc-proposal-reprt-btn-width" style="padding:10px;">
                                
                                <!-- <div class="md-custom-btn btn-color" @click="submitData()">
                                    <text class="md-btn-label text-color-white">Proceed</text>
                                    <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                </div> -->
                                <div  class="documt-doc-proposal-reprt-btn-width"
                                @click="jump('/master/prepayview')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                                <!--  -->
                            </div>
                        </div>
                </div>

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
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
    import { WxcRadio } from 'weex-ui'
    import appHeader from '../../components/Proposal/ProposalHeader.vue'
    import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
    import SButton from "../.././components/vx-primary-button/vx-scondary-button"; 
       import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'         
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
                  console.log(me.form[i].confidentialReport)
                  me.formDat = me.form[i].confidentialReport
                  console.log(me.formDat)
              this.propLife=me.formDat.Question1
      this.advisorLife=me.formDat.Question2
      this.disability=me.formDat.Question3
      this.financial=me.formDat.Question4
      this.proposalincome=me.formDat.incomeofProposer
      this.incomeProof=me.formDat.Question5
      this.ageProof = me.formDat.Question6
      this.health = me.formDat.Question7
      this.incomeType = me.formDat.TypeOfIncomeproof
      this.proposalyears = me.formDat.HowlonghaveyoukonwntheLifetobeassured_year
       this.proposalmonths = me.formDat.HowlonghaveyoukonwntheLifetobeassured_month
        this.proposalmobile = me.formDat.HowlonghaveyoukonwntheLifetobeassured_fls_mob_no
 
                }
            console.log(this.$store.state.route.fullPath)
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

          



        },

        components: {
            WxcRadio, appHeader,PButton,SButton,vxInputBox
        },
        data() {
            return {
                check: 'No',
                check1: 'No',
                check2: 'No',
                check3: 'No',
                check4: 'No',
                check5: 'No',
                check6: 'No',
                check7: 'No',
                propLife: '',
                advisorLife: '',
                disability: '',
                financial: '',
                income: '',
                incomeProof: '',
                incomeType: '',
                ageProof: '',
                health: '',
               proposalmonths:'',
               proposalyears:'',
               proposalmobile:'',
                headerName: 'Proposal Fulfilmemt',
                platform: invalid,
                deviceWidth: invalid,
                income: '',
                proposalincome:'',
                activeemail: true,
                animateEmail: false,
                activepass: true,
                animatePass: false,
                index: -1,

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
            routeLink(){
                var me = this
                this.active = true
               
                 me.$router.push('/master/prepayview')
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
            onchange2(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check2 = 'Yes'
                }
                else {
                    this.check2 = 'No'
                }
            },
            onchange3(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check3 = 'Yes'
                }
                else {
                    this.check3 = 'No'
                }
            },
            onchange4(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check4 = 'Yes'
                }
                else {
                    this.check4 = 'No'
                }
            },
            onchange5(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check5 = 'Yes'
                }
                else {
                    this.check5 = 'No'
                }
            },
            onchange6(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check6 = 'Yes'
                }
                else {
                    this.check6 = 'No'
                }
            },
            onchange7(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check7 = 'Yes'
                }
                else {
                    this.check7 = 'No'
                }
            },
            submitData() {
                const confidentialReport =''
                var me = this
           
                const formData = {
                    userId:me.$store.state.agentDetails._id,
                    leadId: '5abf315ab3b7e76f81a999c3',
                    productId: '5ac71c50389e780bccd2ad72',
                    Question1: this.propLife,
                    Question2: this.advisorLife,
                    Question3: this.disability,
                    Question4: this.financial,
                    incomeofProposer:this.proposalincome,
                    Question5: this.incomeProof,
                    TypeOfIncomeproof: this.incomeType,
                    Question6: this.ageProof,
                    Question7: this.health,
                    HowlonghaveyoukonwntheLifetobeassured_year: parseInt(this.proposalyears),
                    HowlonghaveyoukonwntheLifetobeassured_month: parseInt(this.proposalmonths),
                    HowlonghaveyoukonwntheLifetobeassured_fls_mob_no: parseInt(this.proposalmobile),

                }

                console.log(formData)
                    //   me.$store.commit('ADD_APPFORMDATA',[{formData}],'confidentialReport') 
                        me.$store.commit('ADD_APPFORMDATA',{confidentialReport: formData})
                    me.$router.push('/master/prepayview')
                // stream.fetch({
                //     method: 'POST',
                //     url: 'http://172.16.58.195:5010/secure/user/addProposal',
                //     headers: {
                        
                //         'Content-Type': 'application/json'
                //     },
                
                //     body: JSON.stringify(formData),
             
                //     type: 'json'
                // },

                //     function (response) {
                //         var errcodeAPI = -1
                //         if (response.data.errCode == errcodeAPI) {
                //             console.log('get in progress:' + JSON.stringify(response));
                //             modal.toast({
                //                 message: 'Successfully Added Proposal Confidential Report Details',
                //                 duration: 1
                //             })
                //             me.$router.push('/master/prepayview')
                //         }
                //         else {
                //             modal.toast({
                //                 message: 'Please enter Unique Mobile No'
                //                 ,
                //                 duration: 2
                //             })

                //         }
                      
                //     })
             },
            wxcRadioListChecked(e) {
                this.checkedInfo = e;
            },
            incomeData() {
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

    .card-proposal-report{
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;

    }
.prop_Report-btn_padding{
    flex-direction:row;
    padding:12px;
    margin-bottom:10px;
}
    .card-subtitle {
        font-size: 22px;
        color: #9D9D9D;
        font-family:robotoregular;
    }
    .prop-report-card-title-border {
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
    .report-width{
 width:240px;
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
        border-width: 1px;
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

    /* .btn-space {
        justify-content: space-between
    } */

    .btn-color {
        background-color: #3b371e
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
       
        color: #0000;
        font-family:robotoregular;
    }

    .md-custom-btn:active {
       opacity:0.8;
    }

    .doc-proposal-reprt-btn-width {
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
        padding-top: 10px
    }
  .table-row-check{
                  padding-left: 20px;
                    padding-right: 10px;
        padding-top: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 20px;
                  padding-top: 15px;
        
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
        .btn-space {
            justify-content: space-between;
        }
    @media only screen and (min-width: 320px) {
        .income-report-width{
            width:100%;
        }
           .mobileno-report-width{
            width:100%
        }
          .table-row-check{
                  padding-left: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }
        .card-proposal-report{
              border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


    }
    .mobile-top-20{
        margin-top: 20px;
    }
       .table-row {
             padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;

    }
  .report-width{
 width:140px;
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
        .doc-proposal-reprt-btn-width {
            width: 50%;
        }
    }

    @media only screen and (min-width: 768px) {
        .income-report-width{
            width:50%
        }
        .mobileno-report-width{
            width:50%
        }
            .table-row-check{
                  padding-left: 10px;
        
                }
                     .card-proposal-insurance{
               margin:10px;

           }
        .card-proposal-report{
               margin:10px;

    }
    .desktop-top-10{
        margin-top: 10px;
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
        .doc-proposal-reprt-btn-width {
            width: 30%;
        }

    }
    @media screen and (min-width:992px){
       .doc-proposal-reprt-btn-width {
            width:15%;
        } 
    }
</style>