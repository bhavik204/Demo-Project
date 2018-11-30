<template>
  <div style="background-color: #f7f7f7;">
    <!-- <inner-header :headeTitle="headerName"></inner-header>
    <application-tab></application-tab> -->
 

        <div class="side-container  page-animation" ref="pagewrap">
          <div class="card-proposal-declaration">
            <div class="table-row-heading" style="flex-direction: column;">
              <text class="heading prop-declaration-card-title-border border-size-declaratios">Declaration by Life to be Assured / Proposer</text>
            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">I understand and agree that the statements in this proposal form shall be the basis of the contract between me and ABC Life Insurance Company Limited ('the Company'). I agree that I will inform the Company if between the date of this proposal and the date of issuance of the policy about any change in my general health, occupation,financial position or if any other proposal or application to any other Insurance Company on my life is declined / postponed or accepted other than the standard terms so that the Company may consider the terms of acceptance.I understand that if I fail to disclose the information sought by the Company, then the Company may voidthe contract at its sole discretion without giving any further explanation and the consequence thereof shall follow. I agree that the Insurance protection shall only be provided effective from the date of acceptance of risk by the Company. I further declare that the statements in this proposal are true and I have disclosed all information which might be material to the Company while issuing the policy contract. I declare that I have read the sales literature of the proposed plan and understood the terms and conditions of the plan along with the associated risks and benefits which I propose to take. I declare that the premiums paid have  not been generated from the proceeds of any criminal activities/offences and I shall abide by and conform to the Prevention of Money Laundering Act, 2002 or any other applicable laws. I declare that the Company has disclosed and explained all the information related to this product and riders to me and I declare thatI have understood the same before signing this proposal form. In case of fraud the policy contract shall be cancelled immediately by forfeiture of all premiums paid or in case of misrepresentation the policy contractshall be cancelled immediately by refund of all premiums paid, subject to the fraud or misrepresentation being established by the insurer in accordance with Section 45 of the Insurance Act, 1938 as ammended from time to time.
              </text>
            </div>
            <!-- <div style="flex-direction:row" class="table-row">
                                      <div style="flex-direction: column;">
                                          <div style="flex-direction:row ;flex:1" >
                                 
                                              <div class="example" v-if="platform !== 'Web'" style="flex:1">
                                              
                                              
                                               <div> <switch></switch>
                                              </div>
                                              <div><text class="form-title">Yes</text></div>
                                              </div>
                                            </div>
                        
                                        <div v-if="platform === 'Web'" style="flex:1">
                                          <div style="flex-direction:row;">
                        
                                            <input type="radio" name="riders" value="Yes" />
                                            <label class="radio-title" style="margin-left:10px;">Yes</label>
                        
                                            <input type="radio" name="riders" value="No" style="margin-left:30px;" />
                                            <label class="radio-title" style="margin-left:10px;">No</label>
                        
                                          </div>
                                        </div>
                        
                                      </div>
                
                       
                   
         
                        </div> -->

            <wxc-checkbox v-if="platform !== 'Web'" title="I agree" :disabled="false" :checked="true"></wxc-checkbox>
            <div class="table-row-check" style="flex-direction: column; padding-bottom:10px;">
              <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                <input type="checkbox" class="cursor-pointer-globle" v-model="declaration">
                <text class="chkbox-title">I agree</text>
              </div>
            </div>
          </div>
          <div class="card-proposal-declaration">
            <div class="table-row-heading" style="flex-direction: column;">
              <text class="heading prop-declaration-card-title-border border-size-authoriz">Authorization by Life to be Assured / Proposer</text>
            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">I hereby authorize the Company to charge any occupation / residential / age extra or reduce the sum assured on my proposal based on the information provided by me and the supporting documents submitted with this proposalform. I hereby authorize the Company to conduct screening/confirmation/ reconfirmation of overall status of the Life to be Assured including the health status through medical examinations, if required, which mayinclude Laboratory tests, Cardiac, Radiological investigations and other medical tests including blood tests to detect bacterial / viral / fungal infections. I hereby give my consent to undergo HIV1 /2 test by ELISA method. I am aware that this test is only for screening purposes and not confirmatory for HIV/AIDS. In order to enable the Company to assess the risk under this proposal and any time thereafter, I hereby, authorize the past and present employer(s)/business associates / medical practitioner / hospital and medical source/any life and non-life insurance Company / organization or Life Insurance Association to release to the Company the records of employment / business or other details as may be considered relevant for acceptance or otherwise of this proposal form. I agree that to underwrite the policy effectively, ABC Life Insurance Company may need to share my personnel information with a specialist service provider, who would keep the said information in secure and confidential manner. Payments will be made to the provided bank a/c, unless the bank a/c particulars are changed/modified by my written communication to RLIC. I also hereby agree and authorized the Company to access my data maintained by the Unique Identificatio Authority of India (UIDA) for KYC verification purpose.
              </text>
            </div>
          

            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">In Order to support ABC Life Insurance Company in its 'Go-Green' initiative, I agree to recieve policy documents by electronic mail instead of physical form
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


                <div v-if="platform === 'Web'" >
                  <div style="flex-direction:row;">

                    <input type="radio" class="cursor-pointer-globle" name="comp" v-model="support" value="true" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" name="comp" v-model="support" value="false" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>




            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">I am aware that in order to enable the company to assess the risk, I need to undergo medicals as per ABC Life Insurace Comapny Ltd. requirements and the same has been explained to may be the Adviser / Sales MAnager
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


                <div v-if="platform === 'Web'" >
                  <div style="flex-direction:row;">

                    <input type="radio" class="cursor-pointer-globle" name="aware" v-model="enable" value="true" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" name="aware" v-model="enable" value="false" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>




            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">I authorize ABC Life Insurance Comapany Limited and/or its representative to call us/me for all policy service related calls.
              </text>
            </div>
            <div style="flex-direction:row" class="table-row-check">
              <div style="flex-direction: column;">
                                              <div style="flex-direction:row ;flex:1" >
                                 
                                                  <div class="example" v-if="platform !== 'Web'" style="flex:1">
                                                  
                                                  
                                                   <div> <switch></switch>
                                                  </div>
                                                  <div><text class="form-title">Yes</text></div>
                                                  </div>
                                                </div>
                            
                            
                                            <div v-if="platform === 'Web'" >
                                              <div style="flex-direction:row;">
                             
                                                <input type="radio" class="cursor-pointer-globle" name="representative" v-model="callBox" value="true" />
                                                <label class="radio-title" style="margin-left:10px;">Yes</label>
                            
                                                <input type="radio" class="cursor-pointer-globle" name="representative" value="false" v-model="callBox" style="margin-left:30px;" />
                                                <label class="radio-title" style="margin-left:10px;">No</label>
                            
                                              </div>
                                            </div>
                            
                                          </div>




            </div>
            <wxc-checkbox v-if="platform !== 'Web'" title="I agree" :disabled="false" :checked="true"></wxc-checkbox>
            <div class="table-row-check" style="flex-direction: column;padding-bottom:10px;">
              <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                <input type="checkbox" class="cursor-pointer-globle" v-model="call">
                <text class="chkbox-title">I agree</text>
              </div>
            </div>
          </div>


          <div class="card-proposal-declaration">
            <div class="table-row-heading" style="flex-direction: column;">
              <text class="heading prop-declaration-card-title-border border-size-proheb">Prohibitation of rebate</text>
            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">1.No person shall allow or offer to allow, either directly on indirectly , as an inducement to any person to take or renew or continue an insurance in respect of any kinds of risk relating to lives or property in india,any rebate of the whole or part of the commission payable or any rebate of the premium shown on the policy,nor shall any person taking out or renewing or continuing a Policy accept any rebate, except such rebate as may be allowed in accordance with the published prospectuses or tabes of the insurer.
              </text>

            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">2.Any person making the default in complying with the provisions of this section shall be liable for a prohibitionrebate which may extend to ten lakh rupees.Please refer to our website or contact our office for the details under the above mentioned Sectioned 41.
              </text>
            </div>
        
            <wxc-checkbox v-if="platform !== 'Web'" title="I agree" :disabled="false" :checked="true"></wxc-checkbox>
            <div class="table-row-check" style="flex-direction: column;padding-bottom:10px">
              <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                <input type="checkbox" class="cursor-pointer-globle" v-model="prohibitionrebate">
                <text class="chkbox-title">I agree</text>
              </div>
            </div>
          </div>


          <div class="card-proposal-declaration">
            <div class="table-row-heading" style="flex-direction: column;">
              <text class="heading prop-declaration-card-title-border border-size-policy">Policy not be called in question after 3 years</text>
            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">1) No policy of life insurance shalle be called in question on any ground whatsoever after the expiry of three years from the date of the policy i.e., from the date of insurance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later.
              </text>
            </div>
         

            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">2) A policy of life insurance may be called in question at anytime within three years from the date of insurance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later, on the ground of fraud : provided that the insurer shall have to communicate in writing to the insure or the legal representatives or nominees or assigners of the insured the grounds and materials on which such decisions is based.
              </text>
            </div>

            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">3) Notwithstanding anything contained in subsection(2), No insurer shall repudiate a life insurance policy on the ground of fraud if the insured can prove that the mis-statement of supression of material fact was true to the best of his knowledge and belief or that there was no deliberate intention to supress the fact or that such mis-statement of supression of the material fact or within the knowledge of the insurer-provided that in case of fraud, the onus of disproving lies upon the beneficiaries, in case the policy holder is not alive.
              </text>
            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class=" form-title">4) A policy of life insurance may be called in question at any time within three years from the date of insurance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy ,whichever is later, on the ground that any statement or supression of the fact material to the expectancy of the life of the insured was incorrectly made in the proposal or other document on the basis of which the policy was issued or revived or rider issued; Provided that the insurer shall have to communicate in writing to the insured the grounds and materials on which such decision to repudiate the policy of life insurance is based; Provided further that in case of repudation of the policy on the ground of misstatement or supression of material fact, and not on the ground of fraud, the premiums collected on the policy till the date of repudation shall be paid to the insured or legal representatives or nominees or assignees of the insured within a period of ninety days from the, whichever is later, on the ground that any statement or supression of the fact material to the expectancy of the life of the insured was incorrectly made in the proposal or other document on the basis of which the policy was issued or revived or rider issued; Provided that the insurer shall have to communicate in writing to the insured the grounds and materials on which such decision to repudiate the policy of life insurance is based; Provided further that in case of repudation of the policy on the ground of misstatement or supression of material fact, and not on the ground of fraud,the premiums collected on the policy till the date of repudation shall be paid to the insured or legal representatives or nominees or assignees of the insured within a period of ninety days from the date of such repudation.Mis-statement or supression of shall not be considered material unless it has a direct bearing on the risk undertaken by the insurer. the onus is on the insurer to show that had the insurer been aware of the said fact no life insurance policy would have been issued to the insured. Nothing in this section shall prevent the insurer from calling for proof of age at any time if if entitled to do so, and no policy shall be deemed to be called in question merely because the term of the policy are adjusted on subsequent proof that the age of the life insured was incorrectly stated in the proposal.
              </text>
            </div>
      
            <wxc-checkbox v-if="platform !== 'Web'" title="I agree" :disabled="false" :checked="true"></wxc-checkbox>
            <div class="table-row-check" style="flex-direction: column;padding-bottom:10px">
              <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                <input type="checkbox" class="cursor-pointer-globle" v-model="quest">
                <text class="chkbox-title">I agree</text>
              </div>
            </div>

          </div>

          <div class="card-proposal-declaration">
            <div class="table-row-heading" style="flex-direction: column;">
              <text class="heading prop-declaration-card-title-border border-size-ins">Insurance Repository</text>
            </div>
            <div class="table-row-check-title" style="flex-direction: column;">
              <text class="form-title">I would like to convert this policy into an e-policy with the free e-insurance account with CAMS Insurance Repository.
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

                    <input type="radio" class="cursor-pointer-globle" name="epolicy" v-model="convert" value="true" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" name="epolicy" v-model="convert" value="false" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>




            </div>


            <div class="table-row-check-title" style="flex-direction: column;">
              <text class="heading ">Click Here to change e-insurance repository</text>
            </div>
            <wxc-checkbox v-if="platform !== 'Web'" title="I agree" :disabled="false" :checked="true"></wxc-checkbox>
            <div class="table-row-check" style="flex-direction: column;padding-bottom:10px;">
              <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                <input type="checkbox" class="cursor-pointer-globle" v-model="agreeBox">
                <text class="chkbox-title">I agree</text>
              </div>
            </div>
          </div>






              <div v-if="platform==='Web'" class="card-proposal-declaration btn-space pr-declaration-padding">
            <div class=" prop-declartion-btn-width" style="padding:10px;">
              <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposalvernacular')">
                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
              </div> -->
               <div class=" dec-btn-space">
                                <div  class=""
                                @click.native="jump('/master/testpro/proposalvernacular')">
                  <s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                </div>
                            </div>
            </div>
            <div class=" prop-declartion-btn-width" style="padding:10px;">
             
              <div  class=""
                                @click.native="submitData()">
                  <p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
                </div>
            </div>
          </div>

              <div v-if="platform !=='Web'" class="card-proposal-declaration btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                            
                              
                         
                                <div  
                                @click="jump('/master/testpro/proposalvernacular')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous" btn-width="300px"></s-button>
								</div>
                        
                            
                                <div 
                                @click="jump('/master/testpro/proposalreport')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right" btn-width="300px"></p-button>
								</div>
                                
                           
                        </div>

        </div>







  </div>
</template>

<script>
  const items = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const heightIn = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
  import { WxcCheckbox } from 'weex-ui'
  import appHeader from '../../components/Proposal/ProposalHeader.vue'
  import applicationTab from './ApplicationTab.vue'
  import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
  import SButton from "../.././components/vx-primary-button/vx-scondary-button";         

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
                  console.log(me.form[i].misc)
                  me.formDat = me.form[i].misc
                    this.leadiden = me.form[i].leadId._id
                  this.prodiden = me.form[i].productId
                  console.log(me.formDat)
              this.declaration=me.formDat.DeclarationbyLifeto
      this.support=me.formDat.AuthorizationbyLifetobeAssuredProposer1
      this.enable=me.formDat.AuthorizationbyLifetobeAssuredProposer2
      this.call=me.formDat.AuthorizationbyLifetobeAssuredProposer3
      this.callBox=me.formDat.AuthorizationbyLifetobeAssured
      this.prohibitionrebate=me.formDat.Prohibitationofrebate
      this.quest = me.formDat.PolicynotbecalledinquestionafterthreeyearsAgreeornot
      this.convert = me.formDat.InsuranceRepositoryq1
      this.agreeBox = me.formDat.InsuranceRepositoryagreeornot
 
                }
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown

      }
    },
    components: {
      WxcRadio, WxcCheckbox, appHeader, applicationTab,PButton,SButton
    },
    data() {
      return {
        form:[],
        formDat:{},
        leadiden:'',
        prodiden:'',
        check: 'No',
        check1: 'No',
        check2: 'No',
        check3: 'No',
        check4: 'No',
        headerName: 'Proposal Fulfilmemt',
        declaration:'',
        support:'',
        enable:'',
        call:'',
        callBox:'',
        prohibitionrebate:'',
        quest:'',
        convert:'',
        agreeBox:'',
        platform: invalid,
        deviceWidth: invalid,
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
        heightListWeb: ["1", "2", "3", "4", "5", "6", "7", "8"],
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
        } else if (this.index1 < heightIn.length) {
          return heightIn[this.index1];
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
      submitData()
{
  const misc = ''
  var me = this
console.log(this.prohibitionrebate)

                const formData = {
                            userId:me.$store.state.agentDetails._id,
                            leadId:this.leadiden,
                            productId:this.prodiden,
                            DeclarationbyLifeto : this.declaration,
                            AuthorizationbyLifetobeAssuredProposer1 : this.support,
                            AuthorizationbyLifetobeAssuredProposer2 : this.enable,
                            AuthorizationbyLifetobeAssuredProposer3 :this.callBox,
                            Prohibitationofrebate : this.call,
                            PolicynotbecalledinquestionafterthreeyearsQ1 : this.prohibitionrebate,
                            PolicynotbecalledinquestionafterthreeyearsAgreeornot: this.quest,
                            InsuranceRepositoryq1 : this.convert,
                            InsuranceRepositoryagreeornot : this.agreeBox,
                                }

                console.log(formData)
                      me.$store.commit('ADD_APPFORMDATA',{misc: formData})
                    me.$router.push('/master/testpro/proposalreport')
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
      //                       message: 'Successfully Added Proposal Declaration Details',
      //                       duration: 1
      //                   })
      //                     me.$router.push('/master/testpro/proposalreport')
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
      wxcRadioListChecked(e) {
        this.checkedInfo = e;
      },
      height() {
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
      heightInch() {
        picker.pick(
          {
            index: this.index1,
            items: heightIn
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
.prop-declaration-card-title-border {
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
    .border-size-declaratios{
      width: 505px;
      }
      .border-size-authoriz{
      width: 550px;
      }
      .border-size-proheb{
      width: 255px;
      }
      .border-size-policy{
      width: 555px;
      }
      .border-size-ins{
      width: 250px;
      }
    
  .card-proposal-declaration{
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

  /* .dec-btn-space {
    justify-content: space-between
  } */

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
    background-color: rgb(5, 4, 4);
  }

  .prop-declartion-btn-width {
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
.pr-declaration-padding{
   flex-direction:row;
   padding:12px;
   margin-bottom:10px;
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
    /*Button Arrow CSS*/
      .card-proposal-declaration{
            border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:0 5px;


  }
    .table-row-check{
                  padding-left: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }
   .table-row {
     padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;



  }
  .mobile-top-20{
    margin-top: 20px;
  }
     .border-size-declaratios{
      width: 280px;
      }
      .border-size-authoriz{
      width: 289px;
      }
      .border-size-proheb{
      width: 155px;
      }
      .border-size-policy{
      width: 280px;
      }
      .border-size-ins{
      width: 150px;
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
      background-color: #3b371e;

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
      font-size: 14px;
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
    /* .dec-btn-space {
      justify-content: space-evenly; */
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
    .prop-declartion-btn-width {
      width: 50%;
    }
  

  @media only screen and (min-width: 768px) {
     .table-row-check{
                  padding-left: 10px;
        
                }
        .card-proposal-declaration  {
        margin:10px;
    }
      .table-row {
           margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;




  }
  .mobile-top-20{
    margin-top: 0px;
  }

     .border-size-declaratios{
      width: 305px;
      }
      .border-size-authoriz{
      width: 312px;
      }
      .border-size-policy{
      width: 300px;
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
    .prop-declartion-btn-width {
      width: 30%;
    }

  }
  @media screen and (min-width:992px){

    .prop-declartion-btn-width {
      width: 15%;
    }
  }
</style>