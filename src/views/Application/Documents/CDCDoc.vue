<template>  
    <div class="">
        <!-- Header -->
        <!-- <div class="documt-flex-row page-header documt-documtitems-justify-center documt-items-align-center">
            <text class="page-heder-title">Upload CFR</text>
        </div> -->
        <scroller>
            <div class="documt-flex-row documt-documtitems-justify-center documt-flex-direction-change">
                <div class="documt-box-pading">
                    <div class="documt-flex-row documt-flex-direction-change">

                        <div class="documt-flex-column" style="flex:1">
                            <!-- This design is for bowser web not for mobile web -->
                            <div class="obpp-doc-cfr-card documt-shadow documt-margin-left-in-card ">
                                <div class="documt-card-title-border cdc-doc-width documt-box-pading onbpp-mbt-mr">
                                    <text class="documt-normal-text-size documt-bold-text">Customer Declaration Capture</text>
                                </div>

                                 <div class="onbpp-mbt-mr">
                                    <text class="documt-normal-text-size box-pading">Please select the document type you would like to upload for your Address Proof</text>
                                </div>

                                <!--  -->

                                <div class="document-button onbpp-mbt-mr rem-algn-itms">
                                    <div class="documt-box documt-flex-01 onbpp-margin-r ">
                                        <text class="documt-form-labels">Select Document Type</text>
                                        <select class="documt-normal-text-size onbpp-select onbpp-tp-margin" v-if="platform === 'Web'" v-model="formDat.CustomerDeclarationCapture" >
                                            <option v-for="(li, index) in listItems" :key="index"> {{li}} </option>
                                        </select>  
                                        <!-- Apk -->
                                        <div v-if="platform !== 'Web'"  class="onbpp-tp-margin">
                                            <apk-drop-down :optionList="listItems"></apk-drop-down>
                                        </div>

                                    </div>
                                    <div class="documt-documt-pading documt-flex-01 obpp-switch-tp-mar">
                                        <text class="documt-form-labels">You can add multiple images for a document</text>
                                        <div class="documt-flex-row onbpp-tp-margin document-cd-upload-btn-width">
                                            
                                            <div class="documt-box-pading" v-if="platform === 'Web'">
                                            
                                                <p-button 
                                                    btn-name="Upload" 
                                                    btn-icon="https://www.materialui.co/materialIcons/file/file_upload_white_192x192.png">
                                                </p-button>
                                            </div>
                                            <!-- APK -->
                                            <div class="documt-box-pading" v-if="platform !== 'Web'">
                                            
                                                <p-button 
                                                    btn-name="Upload" 
                                                    btn-width="300px"
                                                    btn-icon="https://www.materialui.co/materialIcons/file/file_upload_white_192x192.png">
                                                </p-button>
                                            </div>
                                            <div class="documt-box-pading" v-if="platform !== 'Web'">
                                               
                                                <p-button 
                                                    btn-name="Gallery" 
                                                    btn-width="300px"
                                                    btn-icon="https://www.materialui.co/materialIcons/image/image_white_192x192.png">
                                                </p-button>
                                            </div>
                                            <div class="documt-box-pading" v-if="platform === 'Web'">
                                
                                                <p-button 
                                                    btn-name="Gallery" 
                                                    btn-icon="https://www.materialui.co/materialIcons/image/image_white_192x192.png">
                                                </p-button>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                                <div class="complete-border documt-btm-margin age-alert-width-pos obpp-switch-tp-mar" style="background-color:#FDFDCB;border-radius:10px;">
                                    <text class="documt-normal-text-size">Please ensure that that image you upload is clear and verifiable.</text>
                                    <!-- new Line of code -->
                                    <!-- <image src="https://www.materialui.co/materialIcons/content/clear_grey_192x192.png" class="documt-cfr-x-btn-icon-size onbpp-alert-icon-pos cursor-pointer-globle" /> -->
                                </div>

                                <!-- Table code -->
                                <div class="documt-flex-column">
                                    <div class="">
                                        <div class="documt-flex-row documt-u-cfr-page-wraper">
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Image</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Category & Type</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">CFR ID</text>
                                            </div>
                                       
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">Actions</text>
                                            </div>
                                        </div>

                                    </div>
                                  
                                    <div class="">
                                        <div class="documt-flex-row documt-items-align-center">
                                            <div class="documt-table-heading" style="flex:2">
                                                <image class="documt-id-prof" src="https://i.ytimg.com/vi/VlWj3GqoRQg/maxresdefault.jpg"></image>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Photo ID PAN Card</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">AFR12012</text>
                                            </div>
                    
                                            <!-- here inline flex direction -row is fixed not changable -->
                                            <div class="documt-table-heading" style="flex-direction:row;flex:1">
                                                <div style="margin-right: 10px;">
                                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="documt-cfr-x-btn-icon-size cursor-pointer-globle" />
                                                </div>
                                                <div>
                                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="documt-cfr-x-btn-icon-size cursor-pointer-globle" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                               

                                </div>

                                
                                

                            </div>

                            <!-- Mobile Web -->
                          
                            
                            <!-- End -->
                            <div class="documt-flex-row obpp-doc-cfr-card documt-shadow documt-margin-left-in-card justify-space">
                                <div v-if="platform === 'Web'" class="documet-cd-btn-width"
                                @click.native="jump('/master/masterdoc/agedocument')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>

                                <div v-if="platform === 'Web'" class="documet-cd-btn-width"
                                @click.native="success(1)">
									<p-button btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" btn-name="Save & Submit"></p-button>
								</div>

								<div v-if="platform !== 'Web'" class="documet-cd-btn-width"
                                @click="jump('/master/masterdoc/agedocument')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>

                                <div v-if="platform !== 'Web'" class="documet-cd-btn-width"
                                @click="openNoAnimationMask()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" btn-name="Save & Submit"></p-button>
								</div>
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
            <text class="cd-font-size" style="margin-left:6px" >Details Successfully Submitted.</text>
            </div>
        </div>
       
        <div class="todo-footer to-do-flx-row-rvrs">
           
        <div v-if="platform === 'Web'" class="documet-cd-btn-width cursor-pointer-globle">
            
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
      <div>
        <div class="title-bar">
          <text class="popup-title-text">Success</text>
        </div>
        <div class="popup-image-row" style="align-items:center">
         <div style="padding-left:50px;">
            <image src="https://raw.githubusercontent.com/google/material-design-icons/master/action/drawable-xhdpi/ic_check_circle_black_48dp.png" class="icon" />
            </div>
            <div class="msg-color-font">
        <text class="cd-font-size" >
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
// cfr-dropDown-apk
// import apkDropDown from '../CFR/cfr-dropDown-apk'
import apkDropDown from '../../CFR/cfr-dropDown-apk.vue'
import PButton from '../../../components/vx-primary-button/vx-primary-button.vue'
import SButton from '../../../components/vx-primary-button/vx-scondary-button'
  import popup from '../../Calendar/Todo-pop-up.vue'
  import { WxcMask } from 'weex-ui';
  import moment from 'moment'
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
    var stream = weex.requireModule('stream');

const items = [
    "Aadhar Card-not provisionl(LR)",
    "Banker's Certification",
    "Bank Acct Statement",
    "Bihar St. ParichayPatra (LR)",
    "Credit Card Stmt 3 Mth(LR/ HR)",
    "Cert from Ward officer (LR)",
    "Caste & Domicile Cert. (LR)",
    "DRIV LCN",
    "Electricity Bill",
    "Employer's Certificate 2 Months",
    "Gas connection card/Bill (LR)",
    "Gazetted Officer",
    "Incorporation Certificate",
    "Life Insurance Policy (LR)",
    "I. tax/Wealth tax ass (LR/ HR)",
    "Lease Agrmnt wth Rnt Rcpt 3mth",
    "Rgd.Lease Agmt 6 Mth(LR/ HR)",
    "Memorandum & Articles of Assoc",
    "Special Executive Magistrate",
    "Mutual Fund stmt 3 Mth(LR/ HR)",
    "Others",
    "PAN Allotment Letter",
    "PASSPORT",
    "Pension Pmt Order by gov (LR)",
    "Pension Pmt Order by gov (LR)",
    "Public Authority Ltr",
    "Power of Attorney",
    "Ration Card",
    "Letter from SEM/GO/PA* (LR)",
    "Telephone Bill",
    "Certificate by VEO/HEAD (LR)",
    "Voter's Identity Card"
    ];
    export default {
        components:{
            PButton,
            apkDropDown,
            SButton,popup,WxcMask
        },
        created() {
                        var me = this
            me.form = (me.$store.getters.getAppFormData)
               console.log(me.form)                                
                for(var i=0;i <me.form.length;i++)
                {
                  console.log(me.form[i].documentUpload)
                  this.formDat = me.form[i].documentUpload
                  this.leadiden = me.form[i].leadId._id
                  this.prodiden = me.form[i].productId
                  this.proposaliden = me.form[i]._id
                  console.log(me.formDat)
                    this. cdcproof = me.formDat.CustomerDeclarationCapture
              
 
                }
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                // return this.platform
            }
        },
        data() {
            return {
                moment:moment,
                   form:[],
                   mainForm:[],
                formDat:{},
                leadiden :'',
                prodiden:'',
                proposaliden:'',
                cdcproof:'',
                headerName:'Medical CFR',
                listItems: items,
                cfrDetails: {
                    propName: 'Amit Joshi',
                    clientID: 'BRSMCU002',
                    applicationNo: '0012TRA871',
                    plan: 'Endowment Plan',
                    recivedPremium: '5,000',
                    dedline: '20/10/2018'
                },

                requirmt: [
                    "Address Proof- XY33M",
                    "Photo ID- XY34M",
                    "ID Proof- XY33N",
                    "Income Proof- XY33T",
                    "Age Proof- XY33L"
                ],
                addressProfSection: false,
                photoIDSection: false,
                showSuccess:false,
                show: false,
                 overlayCanClose: true,
                isFalse: false,
                 hasAnimation: false
            }
        },
        methods: {
                    submitData(){
           

 
            },
                      toast(src,color,msg){
         this.$store.state.shownotificationtoast = true;
            this.$store.state.imagelink=src;
          this.$store.state.notificationTextColor = color;
           this.$store.state.notificationBody =msg;
           console.log(this.$store.state.notificationTitle);
           setTimeout(()=>{ 
           this.$store.state.shownotificationtoast =false ;
            }, 2000);

        
    },
            displayDocumnentUploadSection(sectionId) {
                switch(sectionId) {
                    case 1: 
                        if(this.addressProfSection === true) {
                            this.addressProfSection = false
                        } else {
                            this.addressProfSection = true;
                        }
                    break;
                    case 2: 
                        if(this.photoIDSection === true) {
                            this.photoIDSection = false
                        } else {
                            this.photoIDSection = true;
                        }
                    break;
                }
            },
             success(caseid)
            {
                
                switch(caseid)
                {
                    case 1: 

                        this.showSuccess=true;
                       console.log(this.proposaliden)
                         var  me= this ;
                        const  documentUpload = ''
                         const formData = {

                    userId:me.$store.state.agentDetails._id,
                    leadId:this.leadiden,
                    productId:this.prodiden,
                    iguanian      : this.cdcproof

                }
                     console.log(formData)
               me.$store.commit('ADD_APPFORMDATA',[{formData}],'documentUpload') 
                 me.mainForm = (me.$store.getters.getAppFormData)
                 console.log(me.mainForm)
                 const ProposalData ={
                     //IDS To be Sent
                     userId:me.$store.state.agentDetails._id,
                    leadId:this.leadiden,
                    productId:this.prodiden,
                    //BI DATA
                    AdvisorName:me.mainForm[0].benefitIllustration.AdvisorName,
                    AdvisorCode:me.mainForm[0].benefitIllustration.AdvisorCode,
                    CalculatorType:me.mainForm[0].benefitIllustration.CalculatorType,
                    NameofLifeAssured:me.mainForm[0].benefitIllustration.NameofLifeAssured,
                    GenderofLifeAssured:me.mainForm[0].benefitIllustration.GenderofLifeAssured,
                    DateofBirthofLifeAssured:me.mainForm[0].benefitIllustration.DateofBirthofLifeAssured,
                    ChildName:me.mainForm[0].benefitIllustration.ChildName,
                    ChildGender:me.mainForm[0].benefitIllustration.ChildGender,
                    ChildDateofBirth:me.mainForm[0].benefitIllustration.ChildDateofBirth,
                    RelationshipofChildwithLifeAssured:me.mainForm[0].benefitIllustration.RelationshipofChildwithLifeAssured,
                    PolicyTerm:me.mainForm[0].benefitIllustration.PolicyTerm,
                    PremiumPayingTerm:me.mainForm[0].benefitIllustration.PremiumPayingTerm,
                    PremiumMode:me.mainForm[0].benefitIllustration.PremiumMode,
                    PremiumType:me.mainForm[0].benefitIllustration.PremiumType,
                    InstallmentPremium:me.mainForm[0].benefitIllustration.InstallmentPremium,
                    MethodofPaymentecs:me.mainForm[0].benefitIllustration.MethodofPaymentecs,
                    InvestmentOption:me.mainForm[0].benefitIllustration.InvestmentOption,
                    SumAssured:me.mainForm[0].benefitIllustration.SumAssured,
                    DeathBenefitOption:me.mainForm[0].benefitIllustration.DeathBenefitOption,
                    AgeProof:me.mainForm[0].benefitIllustration.AgeProof,
                    AnnuityFrequency:me.mainForm[0].benefitIllustration.AnnuityFrequency,
                    AnnuityOption:me.mainForm[0].benefitIllustration.AnnuityOption,
                    DoyouwanttoaddRiderstothisplan:me.mainForm[0].benefitIllustration.DoyouwanttoaddRiderstothisplan,
                    LifeEquityFund3:me.mainForm[0].benefitIllustration.LifeEquityFund3,
                    LifePureEquityFund2:me.mainForm[0].benefitIllustration.LifePureEquityFund2,
                    MakeinIndiaFund:me.mainForm[0].benefitIllustration.MakeinIndiaFund,
                    LifeBalancedFund1:me.mainForm[0].benefitIllustration.LifeBalancedFund1,
                    LifeCorporationBondFund1:me.mainForm[0].benefitIllustration.LifeCorporationBondFund1,
                    LifeMoneyMarketFund1:me.mainForm[0].benefitIllustration.LifeMoneyMarketFund1,
                    SmartPensionFund1:me.mainForm[0].benefitIllustration.SmartPensionFund1,

                    //Proposal Personal Data
                    IclocksProposerandLifetobe:me.mainForm[0].personalDetails.IsProposerandLifetobeAssuredthesame,
                    Astadholdershipadhar:me.mainForm[0].personalDetails.AadharCardNumber,
                    IuntimberedAgreecheckbox:me.mainForm[0].personalDetails.IAgreecheckbox,
                    Tethmopalatineitle:me.mainForm[0].personalDetails.Title,
                    FbranchiurousullName:me.mainForm[0].personalDetails.FullName,
                    FcrozzlyathersFullName:me.mainForm[0].personalDetails.FathersFullName,
                    Gzoosporangiophoreender:me.mainForm[0].personalDetails.Gender,
                    MtenuisaritalStatus:me.mainForm[0].personalDetails.MaritalStatus,
                    DphaneroscopeateofBirth:me.mainForm[0].personalDetails.DateofBirth,
                    NZarathustrianismationality:me.mainForm[0].personalDetails.Nationality,
                    Eexuviationducation:me.mainForm[0].personalDetails.Education,
                    SmesepisternumourceOfIncome:me.mainForm[0].personalDetails.SourceOfIncome,
                    AchurchwardnnualIncome:me.mainForm[0].personalDetails.AnnualIncome,
                    PsmokeryuposeOfInsurance:me.mainForm[0].personalDetails.PuposeOfInsurance,
                    Odaityaccupation:me.mainForm[0].personalDetails.Occupation,
                    JomoplatoscopyobDescription:me.mainForm[0].personalDetails.JobDescription,
                    JomoplatoscNatureofDuties:me.mainForm[0].personalDetails.NatureofDuties,
                    AbuzzerreyouABCGroupemployee:me.mainForm[0].personalDetails.AreyouABCGroupemployee,
                    OunimucronateptingforECS:me.mainForm[0].personalDetails.OptingforECS,
                    PblackbackANCardNo:me.mainForm[0].personalDetails.PANCardNo,
                    BpeddleankAccountNo:me.mainForm[0].personalDetails.BankAccountNo,
                    IsaddlebagFSCCode:me.mainForm[0].personalDetails.IFSCCode,
                    BpreternaturalistankName:me.mainForm[0].personalDetails.BankName,
                    BacanthodianankBranch:me.mainForm[0].personalDetails.BankBranch,
                    BpantomimistankAccountProof:me.mainForm[0].personalDetails.BankAccountProof,
                    AsmellingddressLine1:me.mainForm[0].personalDetails.AddressLine1,
                    AbatwingddressLine2:me.mainForm[0].personalDetails.AddressLine2,
                    ArelicddressLine3:me.mainForm[0].personalDetails.AddressLine3,
                    Sgalumphtate:me.mainForm[0].personalDetails.State,
                    CUmbellulidaeity:me.mainForm[0].personalDetails.City,
                    PperiproctousinCode:me.mainForm[0].personalDetails.PinCode,
                    EsilverskinmailID:me.mainForm[0].personalDetails.EmailID,
                    MartarobileNo:me.mainForm[0].personalDetails.MobileNo,
                    LrediscussionandlineNo:me.mainForm[0].personalDetails.LandlineNo,
                    Isynecdochicallysyour:me.mainForm[0].personalDetails.IsyourPermanentaddresssameasmailingaddress,

                    //Proposal Nominee Data
                    ra:me.mainForm[0].nomineeDetails.Title,
                    paronymizatio:me.mainForm[0].nomineeDetails.Gender,
                    ThalesiaNomi:me.mainForm[0].nomineeDetails.NomineeName,
                    chackerDate:me.mainForm[0].nomineeDetails.DateofBirth,
                    medusiformRelationshipofnomine:me.mainForm[0].nomineeDetails.RelationshipofnomineewithLA,
                    robinMo:me.mainForm[0].nomineeDetails.MobileNo,
                    benzylamine:me.mainForm[0].nomineeDetails.EmailID,
                    pararhotacismIstheNomineeaddresssa:me.mainForm[0].nomineeDetails.IstheNomineeaddresssameasLA,
                    CalinagoWilltheNomineeDetailsbesameasabovefo:me.mainForm[0].nomineeDetails.WilltheNomineeDetailsbesameasaboveforPlan2,
                    outquaffDoyouwanttoaddanotherN:me.mainForm[0].nomineeDetails.DoyouwanttoaddanotherNominee,
                    isomer:me.mainForm[0].nomineeDetails.Gender_n,
                    fla:me.mainForm[0].nomineeDetails.Title_n,
                    manifestationistNomi:me.mainForm[0].nomineeDetails.NomineeName_n,
                    hexagramDate:me.mainForm[0].nomineeDetails.DateofBirth_n,
                    summityRelationshipofnomine:me.mainForm[0].nomineeDetails.RelationshipofnomineewithLA_n,
                    unguentariaIstheAppointeeaddresssameasN:me.mainForm[0].nomineeDetails.IstheAppointeeaddresssameasNominee,
                    parturientDoyouwanttoaddanotherApp:me.mainForm[0].nomineeDetails.DoyouwanttoaddanotherAppointee,
                    ecopheneAdvis:me.mainForm[0].nomineeDetails.AdvisorPlace,

                    //Proposal Family Data
                    igneous:me.mainForm[0].familyhistoryDetails.FamilyHistoryDetails,
                    //Proposal Insurance Data & Proposal Medical Data
                    lifeinsuranceDetails:me.mainForm[0].lifeinsuranceDetails. lifeinsuranceDetails ,
						Nameofparentspouse:me.mainForm[0].lifeinsuranceDetails. Nameofparentspouse ,
						totalsumass:me.mainForm[0].lifeinsuranceDetails.Totalsumassuredonlifeofparentspouse  ,
						 yardland:me.mainForm[0].lifeinsuranceDetails.Question1 ,
						entomophilous:me.mainForm[0].lifeinsuranceDetails.Question2  ,
						 disponee:me.mainForm[0].lifeinsuranceDetails.Question3 ,
						 tautopodic:me.mainForm[0].lifeinsuranceDetails.Question4 ,
						 overmuchness:me.mainForm[0].lifeinsuranceDetails.HeightinFeet ,
						 omniscient:me.mainForm[0].lifeinsuranceDetails.HeightinInches ,
						 inexactly:me.mainForm[0].lifeinsuranceDetails.WeightinKgs ,
						 bicameralism:me.mainForm[0].lifeinsuranceDetails.Question6 ,
						 monopodous:me.mainForm[0].lifeinsuranceDetails.Question7 ,
						 upheap:me.mainForm[0].lifeinsuranceDetails.Question8 , 
						unheritable:me.mainForm[0].lifeinsuranceDetails.Question9  ,
						 reptiliousness:me.mainForm[0].lifeinsuranceDetails.Question10 ,
						 kehoeite:me.mainForm[0].lifeinsuranceDetails.Question11 ,
                         although:me.mainForm[0].lifeinsuranceDetails.Question12  ,

                         //Proposal Vernacular Data
                          undershire:me.mainForm[0].detailsOfWitness.Name ,
						 swoop:me.mainForm[0].detailsOfWitness.MobileNo,
						 parquet:me.mainForm[0].detailsOfWitness.Date ,
						 oariopathic:me.mainForm[0].detailsOfWitness.AddressLine1 ,
						 pookaun:me.mainForm[0].detailsOfWitness.AddressLine2 ,
						 unfallaciously:me.mainForm[0].detailsOfWitness.AddressLine3 ,
						 dictyopteran:me.mainForm[0].detailsOfWitness.State ,
						phasmatoid:me.mainForm[0].detailsOfWitness.City  ,
                        hushing:me.mainForm[0].detailsOfWitness.PinCode ,
                         Question1VernacularDetails:me.mainForm[0].detailsOfWitness.Question12,
                        
                        //Proposal Declaration Data
                    //    Question1VernacularDetails:me.mainForm[0].misc.VernacularDetails,
						 DeclarationbyLifeto:me.mainForm[0].misc.DeclarationbyLifeto ,
						 Catskill:me.mainForm[0].misc.AuthorizationbyLifetobeAssuredProposer1 ,
						 fulgurite:me.mainForm[0].misc.AuthorizationbyLifetobeAssuredProposer2 ,
						 amblystegite:me.mainForm[0].misc.AuthorizationbyLifetobeAssuredProposer3 ,
						 Prohibitationofrebate:me.mainForm[0].misc.Prohibitationofrebate ,
						 Policynotbecalledinquestionafterthreeyear:me.mainForm[0].misc.PolicynotbecalledinquestionafterthreeyearsQ1,
						 PolicynotbecalledinquestionafterthreeyearsAgreeorno:me.mainForm[0].misc.PolicynotbecalledinquestionafterthreeyearsAgreeornot,
						 InsuranceRepositoryq1:me.mainForm[0].misc.InsuranceRepositoryq1 ,
                         InsuranceRepositoryagreeornot:me.mainForm[0].misc.InsuranceRepositoryagreeornot ,
                         
                         //Proposal Report Data
                          Jarmo: me.mainForm[0].confidentialReport.Question1 ,
						 prosect:me.mainForm[0].confidentialReport.Question2  ,
						 glycogenic:me.mainForm[0].confidentialReport.Question3  ,
                         elaeomargaric:me.mainForm[0].confidentialReport.Question4  ,
                         infectress:me.mainForm[0].confidentialReport.incomeofProposer,
						  unhoodwink:me.mainForm[0].confidentialReport.TypeOfIncomeproof,
						  cowtail:me.mainForm[0].confidentialReport.Question5 ,
						  crowstone:me.mainForm[0].confidentialReport.Question6 ,
						  posterishness:me.mainForm[0].confidentialReport.Question7 ,
					      reviser:me.mainForm[0].confidentialReport.HowlonghaveyoukonwntheLifetobeassured_year,
						  Thaliacea:me.mainForm[0].confidentialReport.HowlonghaveyoukonwntheLifetobeassured_month ,
						  warted:me.mainForm[0].confidentialReport.HowlonghaveyoukonwntheLifetobeassured_fls_mob_no,
                         
                         //Payment Options
                          unsensible:me.mainForm[0].paymentOptions.PaymentMode ,
						 rather:me.mainForm[0].paymentOptions.InstalmentPremium ,
						 knitwork:me.mainForm[0].paymentOptions.ChequeDDNo ,
						 enchantingness:me.mainForm[0].paymentOptions.ChequeDDDate ,
						 conclusive:me.mainForm[0].paymentOptions.BankName ,
						 fumaroidal:me.mainForm[0].paymentOptions.BranchName ,
						 Polychaeta:me.mainForm[0].paymentOptions.EmailID ,
						 prestigiation:me.mainForm[0].paymentOptions.MobileNo,

                        //DOCUMENT UPLOAD DATA
                        obsession:me.mainForm[0].documentUpload.UploadAddressProof ,
                        donatress:me.mainForm[0].documentUpload.UploadPhotoID, 
                        partisan:me.mainForm[0].documentUpload.UploadIDProof ,
                        muircock:me.mainForm[0].documentUpload.UploadIncomeProof ,
                        pseudochronism:me.mainForm[0].documentUpload.UploadAgeProof, 
                        iguanian:me.mainForm[0].documentUpload.CustomerDeclarationCapture,
                        //Login Status
                        proposalStatus:'login'


                 }
                         var iden =me.mainForm[0]._id;
                         var identiy = "A" + iden.slice(16, 25).toUpperCase();
                         var createddate =me.mainForm[0].createdDate
                         const NotifyData = {
                        // first_name: this.formDat.NameofLifeAssured,
                        notification_body:
                           me.mainForm[0].benefitIllustration.NameofLifeAssured+
                            "|" +
                            identiy +
                            "|" +
                            "Deadline:" +
                            moment(createddate).format("L"),
                        notification_type: "applications",
                        notification_subtype: "new",
                        ClientName:this.formDat.NameofLifeAssured ,
                        PlanName:this.productName ,  // plan option
                        PremiumAmount:this.formDat.InstallmentPremium  ,  //Installment Premium
                        CFRType:"login" ,
                        leadId : this.leadiden
                        // LoginDate:Date.now() , 
                        // Deadline:Deadline ,  // Ashraf
                        };

                 console.log(ProposalData)
                                  stream.fetch({
                        method: 'PUT',
                        url: 'http://159.89.161.64:5010/secure/user/updateProposal/'+ this.proposaliden,
                         headers: {
                           
                           'Content-Type': 'application/json'},
                         body:JSON.stringify(ProposalData),
                        type:'json'
                      }, 


                      function(response){
                        //   var me = this
                        var errcodeAPI= -1
                          if(response.data.errCode == errcodeAPI){
                            //   me.$store.dispatch('ADD_APPDATA', [{formData}],benefitIllustration)
                             
                 stream.fetch(
                {
                  method: "POST",
                  url:
                    "http://159.89.161.64:5010/secure/user/sendnotification/" +
                    me.$store.state.agentDetails._id,
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(NotifyData),
                  type: "json"
                },

                function(response) {
                  //   var me = this
                  var errcodeAPI = -1;
                  if (response.data.errCode == errcodeAPI) {
                    //   me.$store.dispatch('ADD_APPDATA', [{formData}],benefitIllustration)
                    //   me.$store.commit('ADD_APPFORMDATA',[{formData}],benefitIllustration)
                    console.log("get in progress:" + JSON.stringify(response));
                    me.toast("", "green", "Successfully completed Proposal");
                    // modal.toast({
                    //     message: 'Successfully Added Proposal',
                    //     duration: 1
                    // })
                      me.$store.commit('SET_PROPOSALFLOW_STATUS','true')
                    me.$router.push("/master/testpro/proposalpersonal");
                  } else {
                    me.toast("", "red", "Mandatory field not found");
                    // modal.toast({
                    //     message: 'Please complete all fields'
                    //              ,
                    //     duration: 2
                    // })
                  }
                }
              );
                              console.log('get in progress:'+JSON.stringify(response));
                              me.toast('','green','Successfully completed Proposal');
}
})
                    // me.$router.push('/master/masterdoc/cdcdocument')
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

<style>
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
    /* APK */

    .document-button{
        flex-direction:column
    }
    .documt-u-cfr-page-wraper {
        background-color: rgb(230, 230, 230);
        /* padding:20px; */
    }

    .page-header {
        height: 100px;
        background-color: #3b371e;
        top: -1px;
        margin-bottom: 40px;
    }

    .page-heder-title {
        font-size: 30px;
        color: white;
        font-family:robotoregular;
    }
   

    .obpp-doc-cfr-card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    
    .nx-flex-wrap {
        flex-wrap: wrap;
    }
    
    .documt-flex-row {
        flex-direction: row;
    }
    
    .documt-flex-column {
        flex-direction: column;
    }
    
    .documt-flex-row-revers {
        flex-direction: row-reverse;
    }
    
    .documt-flex-direction-change {
        flex-direction: column;
    }
    
    .text-keep-center {
        text-align: center;
    }
    
    .text-right {
        text-align: right;
    }
    
    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }
    
    .documt-items-align-center {
        align-items: center;
    }
    
    .documt-documtitems-justify-center {
        justify-content: center;
    }
    .justify-space {
        justify-content: space-between;
    }
    
    .self-align {
        align-self: flex-end;
    }
    
    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .documt-flex-01 {
        flex: 1;
    }
    
    .documt-flex-02 {
        flex: 2;
    }

    .documt-card-title-border {
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 5px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    }

    /* Full border */
    
    .complete-border {
        border-width: 2px;
        border-style: solid;
        border-color: #FFB600;
        padding: 15px;
    }

    .documt-cfr-bk-btn-color {
        background-color: rgb(33, 34, 35);
    }

    .documt-cfr-up-md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 75px;
        
    }

    .documt-cfr-up-md-btn-label {
        font-size : 24px;
        font-weight: 500;
        
        color:#fff;
        font-family:robotoregular;
    }

    .documt-cfr-up-md-custom-btn:active {
        background-color:rgb(5, 4, 4);
    }
    .documet-cd-btn-width {
        width: 300px;
    }

    .documt-box-pading {
        padding: 10px;
        flex:1;
    }

    .x-small-btn {
         width: 210px;
    }

    .documt-table-heading {
        padding: 20px;
    }

    .documt-cfr-x-btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
        
    }

    .documt-normal-text-size {
        font-size: 24px;
        font-family:robotoregular;
    }

    .comunication-btn-width {
        width: 210px;
    }
    .documt-upload-small-list-card {
        padding: 30px;
        background-color: #FFF;
        margin-bottom: 10px;
    }
    .documt-my-custom-table {
        margin-top: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(216, 216, 216);
    }
    .documt-my-custom-tb-btm-bdr {
        border-width: 2px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: rgb(216, 216, 216);
    } 

    /* border width class
    .cfr-card-t-bdr {


    } */
    .documt-cfr-requir-width {
        width: 180px;
    }
    .cdc-doc-width {
        width: 360px;
    }

    /* Reuriment List */
    .reurment-list {
        padding: 25px;
        border-bottom-width: 1px;
        margin-bottom: 0;
        border-bottom-color: #e7e7e7;
        
    }
    .documt-list-icon-size {
        width:30px;
        height: 30px;
    }
    .documt-btm-margin {
        margin-bottom: 25px;
    }
    .documt-id-prof {
        width: 100px;
        height: 60px;
    }
    .documt-tbl-row-padding {
        padding: 15px;
    }

    /* New @usama */
    .onbpp-tp-margin {
        margin-top: 25px;
    }
    /* Switching */
    .obpp-switch-tp-mar {
        margin-top: 20px;
    }   

    /* Alert box position new class added by usama  also we need width*/
    .age-alert-width-pos{
        width: 650px;
        position: relative;
        left: 20px;

    }

    .onbpp-alert-icon-pos {
        position: absolute;
        right: 20px;
        
    }
         .rem-algn-itms {
            align-items: baseline;
        }
         .documt-form-labels {
    font-size: 24px;
    color: #a5a5a5;
    font-family: robotoregular;
  }
            
     .onbpp-mbt-mr {
    margin-bottom: 30px;
  }

  /* APK popup botton */
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
          /* justify-content: center; */
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
   
    /* 320 */
    @media (min-width: 320px) {
        /* Added by usama for drop down */
        .onbpp-select {
            padding: 5px;
            padding-left: 0;
            border-bottom: 1px solid rgb(185, 185, 185);
            outline: none;
        }

        .documt-tbl-row-padding {
            padding: 5px;
        }
        .documt-flex-direction-change {
            flex-direction: column;
        }

        .documt-form-labels {
            font-size: 13px;
            color: #a5a5a5;
            font-family:robotoregular;
        }

        .content-width {
            width: 100%;
        }
        .page-header {
            height: 50px;
            margin-bottom: 20px;
        }
        .page-heder-title {
            font-size: 16px;
            font-family:robotoregular;
        }
        .documt-normal-text-size {
            font-size: 14px;
            font-family:robotoregular;
        }
        .obpp-doc-cfr-card {
            background-color: #ffffff;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
            margin-bottom: 20px;
            border-radius: 3px;
        }
        .cfr-card-height {
            max-height: 270px;
            
        }
        .documt-card-title-border {
            border-bottom-width: 4px;
            margin-bottom: 10px;
        }
        .documt-box-pading {
            padding: 5px;
        }
        .documt-shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .documt-cfr-bk-btn-color {
            background-color: rgb(33, 34, 35);
        }
        .documt-cfr-up-md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 75px;
            position: relative;
            
        }
        .documt-cfr-up-md-btn-label {
            font-size: 11px;
            font-weight: 500;
            
            color: #fff;
            font-family:robotoregular;
        }
        .documt-cfr-up-md-custom-btn:active {
            background-color: rgb(5, 4, 4);
        }
        .documet-cd-btn-width {
            width: 50%;
        }
        .documt-table-heading {
            padding: 10px;
        }
        .title-width {
            max-width: 183px;
        }
        .link-margin {
            margin-top: 20px;
        }
        .reurment-list {
            padding: 15px;
        }
        .reurment-height {
            height: auto;
        }
        .documt-id-prof {
            width: 70px;
            height: 40px;
        }
        .documt-btm-margin {
            margin-bottom: 20px;
        }

        .documt-list-icon-size {
            width:20px;
            height: 20px;
        }

        /* Border width */
        .cfr-card-t-bdr {
            width: 92px;
        }
        .documt-cfr-requir-width {
            width: 108px;
        }
        .cdc-doc-width {
            width: 200px;
        }
        .documt-cfr-x-btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }

        /* here display none is used to totaly change ui */
        .documt-whole-card-hide {
            display: none;
        }

        /* New List */
        /* 19-04-2018 */
        .documt-upload-small-list-card {
           padding: 20px;
           background-color: #FFF;
           margin-bottom: 10px;
        }

        .documt-hide-mobile-cards {
            display: block;
        }

        .documt-my-custom-table {
            margin-top: 20px;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(216, 216, 216);
        }

        /* New CSS 9-5-18 @usama*/
        /* This class is mainly used at provide gap between two components (select, buttons)*/
        /* not used at 320 and global */
        .onbpp-margin-r {
            margin-right: 25px;
        }

        /* This is the gap between label and fields this is not changeble */
        .onbpp-tp-margin {
            margin-top: 10px;
        }

        /* Switching */
        .obpp-switch-tp-mar {
            margin-top: 15px;
        }

        .onbpp-mbt-mr {
            margin-bottom: 20px;
        } 

        /* Alert box position new class added by usama  also we need width*/
        .age-alert-width-pos{
            width: 100%;
            position: relative;
            left: 0;
        }   

        .onbpp-alert-icon-pos {
            right: 10px;
        }    
        /* Upload and Gsllery Button width */
        .document-cd-upload-btn-width {
            width: 93%;
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
       .cd-font-size{
          font-size:19px;
          margin-left:06px;
      }
    }
    
    @media (min-width: 768px) {
        .documt-margin-left-in-card {
            margin-left: 20px;
        }
        .documet-cd-btn-width {
            width: 25%;
        }
        .documt-flex-direction-change {
            flex-direction: row;
        }
        .documt-only-table-row {
            flex-direction: column;
        }
        .container-width {
            max-width: 750px;
        } 
        
        /* Switching */
        .obpp-switch-tp-mar {
            margin-top: 10px;
        }
        
        
        .document-button{
            flex-direction:column;
        }    
        .align-switching {
            align-items: baseline;
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
       .cd-font-size{
          font-size:17px;
          margin-left:06px;
      }
    }
    
    @media (min-width: 992px) {

        .document-button {
            flex-direction:row;
        }  
        
        .obpp-switch-tp-mar {
            margin-top: 0;
        } 
        .documt-flex-direction-change {
            flex-direction: row;
        }
        .container-width {
            max-width: 1200px;
        }
        .documet-cd-btn-width {
            width: 13%;
        }

        .documt-whole-card-hide {
            display: block;
        }

        .documt-hide-mobile-cards {
            display: none;
        }

         .age-alert-width-pos{
            width: 50%;
            position: relative;
            left: 25%;
        }   
        .align-switching {
            align-items: center;
        }
        .rem-algn-itms {
            align-items: center;
        }
        /* Upload and Gsllery Button width */
        .document-cd-upload-btn-width {
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
      .cd-font-size{
          font-size:16px;
          margin-left:08px;
      }
    }
        
    
</style>