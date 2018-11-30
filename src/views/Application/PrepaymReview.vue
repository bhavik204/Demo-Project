<template>
    <div style="background-color: #f7f7f7;">
        <!-- <inner-header  :headeTitle="headerName"  ></inner-header>
            <application-tab></application-tab> -->
        <!-- <app-header></app-header> -->
  
            <div class="page-animation" ref="pagewrap">
                <div class="card-collection" style="flex-flow:wrap">
                    <div class="pre-pay-card-proposal" >
                        <div class="card-header-proposal" style="flex-direction:row; 
            justify-content: space-between;flex-wrap:wrap">
                            <text class="heading">Life Assured Details</text>
                            <div class="edit-position">
                                
                                <image v-if="platform == 'Web'"  class="cal-icn-prepay cursor-pointer-globle" @click.native="jump('/master/testpro/proposalmedical')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>

                                <image  v-else  class="cal-icn-prepay " @click="jump('/master/testpro/proposalmedical')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                            </div>
                        </div>
                        <div v-for="(data, index) in LifeAssuredDetails" :key="index"  class="card-content" style="flex-direction:row">
                      
                           <div  >
                                <text class="form-title">Name:</text>
                            <text class="form-title">DOB:</text>
                            <text class="form-title">Gender:</text>
                            <text class="form-title">Employee No:</text>
                            <text class="form-title">Mobile No:</text>
                            <text class="form-title">Email ID:</text>
                            </div>
                        
                         <div class="row-margin-review" >
                                        <text class="form-title">{{data.Name}}</text>
                            <text class="form-title">{{data.DOB}}</text>
                            <text class="form-title">{{data.Gender}}</text>
                            <text class="form-title">{{data.EmployeeNo}}</text>
                            <text class="form-title">{{data.MobileNo}}</text>
                            <text class="form-title">{{data.EmailID}}</text>
                            </div>
                            </div>
                        </div>

                    <div class="pre-pay-card-proposal" >
                        <div class="card-header-proposal" style="flex-direction:row; 
                justify-content: space-between;flex-wrap:wrap">
                            <text class="heading">Proposer Details</text>
                            <div class="edit-position">
                                 <image v-if="platform == 'Web'"  class="cal-icn-prepay cursor-pointer-globle" @click.native="jump('/master/testpro/proposalpersonal')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                                <image  v-else class="cal-icn-prepay" @click="jump('/master/testpro/proposalpersonal')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                            </div>
                        </div>
                        <div  class="card-content" :key="index" style="flex-direction:row">
                                    <div  >

                            <text class="form-title">Name:</text>
                            <text class="form-title">DOB:</text>
                            <text class="form-title">Gender:</text>
                            <text class="form-title">Employee No:</text>
                            <text class="form-title">Mobile No:</text>
                            <text class="form-title">Email ID:</text>
                            </div>
                        
                         <div class="row-margin-review" >
                                        <text class="form-title">{{formDat.FullName}}</text>
                            <text class="form-title">{{formDat.DateofBirth}}</text>
                            <text class="form-title">{{formDat.Gender}}</text>
                            <text class="form-title">{{formDat.AadharCardNumber}}</text>
                            <text class="form-title">{{formDat.MobileNo}}</text>
                            <text class="form-title">{{formDat.EmailID}}</text>
                            </div>
                            </div>
                            <!-- <text class="form-title">Name: {{data.Name}}</text>
                            <text class="form-title">DOB: {{data.DOB}}</text>
                            <text class="form-title">Gender: {{data.Gender}}</text>
                            <text class="form-title">Employee No: {{data.EmployeeNo}}</text>
                            <text class="form-title">Mobile No: {{data.MobileNo}}</text>
                            <text class="form-title">Email ID: {{data.EmailID}}</text> -->
                        </div>
                

                    <div class="pre-pay-card-proposal" >
                        <div class="card-header-proposal" style="flex-direction:row; 
                    justify-content: space-between;flex-wrap:wrap">
                            <text class="heading">Appointee/Nominee Details</text>
                            <div class="edit-position">
                                 <image v-if="platform == 'Web'"  class="cal-icn-prepay cursor-pointer-globle" @click.native="jump('/master/testpro/proposalnominee')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                                <image v-else class="cal-icn-prepay" @click="jump('/master/testpro/proposalnominee')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                            </div>
                        </div>
                        <div  class="card-content" :key="index" style="flex-direction:row">
                                   <div  >
                            <text class="form-title">DOB:</text>
                            <text class="form-title">Gender:</text>
                            <text class="form-title">Employee No:</text>
                            <text class="form-title">Mobile No:</text>
                            <text class="form-title">Email ID:</text>
                            </div>
                        
                         <div  class="row-margin-review" >
                            <text class="form-title">{{formnomineeDat.DateofBirth}}</text>
                            <text class="form-title">{{formnomineeDat.Gender}}</text>
                            <text class="form-title">EMP117</text>
                            <text class="form-title">{{formnomineeDat.MobileNo}}</text>
                            <text class="form-title">{{formnomineeDat.EmailID}}</text>
                            </div>
                            </div>
                            <!-- <text class="form-title">Name: {{data.Name}}</text>
                            <text class="form-title">DOB: {{data.DOB}}</text>
                            <text class="form-title">Gender: {{data.Gender}}</text>
                            <text class="form-title">Employee No: {{data.EmployeeNo}}</text>
                            <text class="form-title">Mobile No: {{data.MobileNo}}</text>
                            <text class="form-title">Email ID: {{data.EmailID}}</text> -->
                        </div>
                    

                    <div class="pre-pay-card-proposal" >
                        <div class="card-header-proposal" style="flex-direction:row; 
                    justify-content: space-between;flex-wrap:wrap">
                            <text class="heading">Plan Details</text>
                            <div class="edit-position">
                                 <image v-if="platform == 'Web'"  class="cal-icn-prepay cursor-pointer-globle" @click.native="jump('/master/testapp')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                                <image v-else class="cal-icn-prepay" @click="jump('/master/testapp')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                            </div>
                        </div>
              
                        <div v-for="(data, index) in PlanDetails" class="card-content" :key="index" style="flex-direction:row">
                                   <div  >
                            <text class="form-title">Plan Name:</text>
                            <text class="form-title">Plan Code Category:</text>
                            <text class="form-title">Policy Term:</text>
                            <text class="form-title">Premium Paying Term:</text>
                            <text class="form-title">Sum Assured:</text>
                            </div>
                        
                         <div  class="row-margin-review"  >
                            <text class="form-title">{{data.PlanName}}</text>
                            <text class="form-title">{{data.PlanCodeCategory}}</text>
                            <text class="form-title">{{data.PolicyTerm}}</text>
                            <text class="form-title">{{data.PremiumPayingTerm}}</text>
                            <text class="form-title">{{data.SumAssured}}</text>
                            </div>
                            </div>
                            <!-- <text class="form-title">Plan Name: {{data.PlanName}}</text>
                            <text class="form-title">Plan Code & Category: {{data.PlanCodeCategory}}</text>
                            <text class="form-title">Policy Term: {{data.PolicyTerm}}</text>
                            <text class="form-title">Premium Paying Term: {{data.PremiumPayingTerm}}</text>
                            <text class="form-title">Sum Assured: {{data.SumAssured}}</text> -->
                        </div>
                
                    <div class="pre-pay-card-proposal" >
                        <div class="card-header-proposal" style="flex-direction:row; 
                    justify-content: space-between;flex-wrap:wrap">
                            <text class="heading">Premium Details</text>
                            <div class="edit-position">
                                 <image v-if="platform == 'Web'"  class="cal-icn-prepay cursor-pointer-globle" @click.native="jump('/master/testapp')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                                <image v-else class="cal-icn-prepay" @click="jump('/master/testapp')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                            </div>
                        </div>
              
                        <div v-for="(data, index) in PremiumDetails" class="card-content" :key="index" style="flex-direction:row">
                                   <div  >
                            <text class="form-title">Premium Type:</text>
                            <text class="form-title">Installment Premium:</text>
                            <text class="form-title">Annualized Premium:</text>
                            <text class="form-title">ECS/Direct/Debit:</text>
                            </div>
                        
                         <div  class="row-margin-review" >
                            <text class="form-title">{{data.PremiumType}}</text>
                            <text class="form-title">{{data.InstallmentPremium}}</text>
                            <text class="form-title">{{data.AnnualizedPremium}}</text>
                            <text class="form-title">{{data.AnnualizedPremium}}</text>
                            </div>
                            </div>
                            <!-- <text class="form-title">Premium Type: {{data.PremiumType}}</text>
                            <text class="form-title">Installment Premium: {{data.InstallmentPremium}}</text>
                            <text class="form-title">Annualized Premium: {{data.AnnualizedPremium}}</text>
                            <text class="form-title">ECS/DirectDebit: {{data.ECSDirectDebit}}</text> -->
                        </div>
                
                    <div class="pre-pay-card-proposal" >
                        <div class="card-header-proposal" style="flex-direction:row; 
                        justify-content: space-between;flex-wrap:wrap">
                            <text class="heading">Other Details</text>
                            <div class="edit-position">
                                 <image v-if="platform == 'Web'"  class="cal-icn-prepay cursor-pointer-globle" @click.native="jump('/master/testapp')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                                <image v-else class="cal-icn-prepay" @click="jump('/master/testapp')" src="https://www.materialui.co/materialIcons/image/edit_white_192x192.png"></image>
                            </div>
                        </div>
                        <div v-for="(data, index) in OtherDetails" class="card-content" :key="index" style="flex-direction:row">
                                   <div  >
                            <text class="form-title">Name:</text>
                            <text class="form-title">Code:</text>
                       
                            </div>
                        
                         <div class="row-margin-review"  >
                            <text class="form-title">{{formbenefitDat.AdvisorName}}</text>
                            <text class="form-title">{{formbenefitDat.AdvisorCode}}</text>
                            </div>
                            </div>
                            <!-- <text class="form-title">Advisor Name: {{data.Name}}</text>
                            <text class="form-title"> Advisor Code: {{data.Code}}</text> -->

                        </div>
                
                </div>
                </div>
                <div v-if="platform ==='Web'" class="pre-pay-card-proposal pre-pay-btn-space pay-reiv-foter-row btn-footer">
                    <div class=" pre-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposalreport')">
                            <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                            <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                        </div> -->
                         <div class=" btn-space">
                                <div  class=""
                                @click.native="jump('/master/testpro/proposalreport')">
									              <s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								                  </div>
                            </div>
                              
                    </div>
                    <div class=" pre-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="jump('/master/payment')">
                            <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                            <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                        </div> -->
                        <div  class=""
                                @click.native="jump('/master/masterpay/onlinepayment')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                    </div>
                </div>

                <div v-if="platform !=='Web'" class="pre-pay-card-proposal pre-pay-btn-space pay-reiv-foter-row">
                    <div class=" pre-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/master/testpro/proposalreport')">
                            <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                            <text class="md-sec-btn-label ">Previous</text>
                        </div> -->
                         <div class=" btn-space">
                                <div  class=""
                                @click="jump('/master/testpro/proposalreport')">
									              <s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								                  </div>
                            </div>
                              </div>
                    
                    <div class=" pre-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn btn-color" @click="jump('/master/payment')">
                            <text class="md-btn-label text-color-white">Proceed</text>
                            <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                        </div> -->
                        <div  class=""
                                @click="jump('/master/masterpay/onlinepayment')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                    
                    </div>
                </div>
            </div>
            </div>
        
    </div>
</template>

<script>
    import appHeader from '../../components/Application/AppHead.vue'
    import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
  import SButton from "../.././components/vx-primary-button/vx-scondary-button";  

    import applicationTab from './ApplicationTab.vue'
    const items = ["Cash", "Cheque", "DD"]
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -'
      var stream = weex.requireModule('stream');
    export default {
        mounted(){
    
        },

        created() {
                   var me = this
            this.form = (this.$store.getters.getAppFormData)
                                               
                for(var i=0;i <this.form.length;i++)
                {
                  console.log(this.form[i].personalDetails)
                  this.formbenefitDat = this.form[i].benefitIllustration
                  this.formDat = this.form[i].personalDetails
                  this.formnomineeDat = this.form[i].nomineeDetails
                       console.log("Benefit Illustration",this.formbenefitDat)
                  console.log("Personal Details",this.formDat)
                     console.log("Nominee Details",this.formnomineeDat)
 
                }
          
                   
       
              this.$store.commit('SET_INDEX',2)
       
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
          
        },
        components: {
            appHeader,
            applicationTab,SButton,PButton
        },
        computed: {
            value() {
                if (this.index == -1) {
                    return "Select Your Payment Mode";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            }
        },
        data() {
            return {
                form:[],
                formDat:{},
                formnomineeDat:{},
                obj:[],
                headerName: 'Pre-payment Review',
                platform: invalid,
                showOnline: false,
                showCheque: false,
                showSendLink: false,
                index: -1,
                date: '',
                LifeAssuredDetails: [{
                    Name: 'Rahul Soni',
                    DOB: '1 May 1986',
                    Gender: 'Male',
                    EmployeeNo: 'EMP117',
                    MobileNo: '7128762435',
                    EmailID: 'rahulsoni@gmail.com'
                }],
                ProposerDetails: [{
                    Name: 'Rahul Soni',
                    DOB: '1 May 1986',
                    Gender: 'Male',
                    EmployeeNo: 'EMP117',
                    MobileNo: '7128762435',
                    EmailID: 'rahulsoni@gmail.com'
                }],
                AppointeeDetails: [{
                    Name: 'Rahul Nigam',
                    DOB: '15 Aug 1965',
                    Gender: 'Male',
                    EmployeeNo: 'EMP117',
                    MobileNo: '7128762435',
                    EmailID: 'nigamrahul@gmail.com'
                }],
                PlanDetails: [{
                    PlanName: 'Increasing Insurance Plan',
                    PlanCodeCategory: 'MBG (Par)',
                    PolicyTerm: '20',
                    PremiumPayingTerm: '10',
                    SumAssured: '5,40,000',

                }],
                PremiumDetails: [{
                    PremiumType: 'Regular',
                    InstallmentPremium: '10000',
                    AnnualizedPremium: '20,00,000',
                    ECSDirectDebit: 'Yes'

                }],
                OtherDetails: [{
                    Name: 'Pankaj Thakare',
                    Code: 'ADV1212',
                }],
                table: [{
                    status: "Installment Premium",
                    value: "ADV 0023"
                }, {
                    status: "Cheque DD No",
                    value: "8657567455"
                }, {
                    status: "Bank Name",
                    value: "Axis Bank"
                }, {
                    status: "Cheque DD Date",
                    value: "01/01/2016"
                }, {
                    status: "Branch Name",
                    value: "Mulund"
                }, {
                    status: "Action",
                    value: "Edit"
                }, ],
                Payment: [{
                    'InstallmentPremium': '85,005',
                    'Frequency': 'Monthly',
                    'PremiumPayingTerm': '20 years'
                }],
                Cheque: [{
                    'InstallmentPremium': '85,005',
                    'Amount': '24,004',
                    'RemmainingAmount': '61,001',
                    'Frequency': 'Monthly',
                    'PremiumPayingTerm': '20 years',
                }]
            }
        },
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            titleType() {
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
            pickDate() {
                picker.pickDate({
                        value: this.date
                    },
                    event => {
                        if (event.result === "success") {
                            this.date = event.data;
                        }
                    }
                );
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
.card-collection {
    justify-content: center;
    padding: 0px 10px;
}
         .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
    /*Button Arrow CSS*/
    .row-margin-review{
        padding-left: 30px
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
    
    .scroller {
        /* background-color: #d8d8d8 */
    }
    
    .row {
        flex-direction: column;
    }
    
    .first-row {
        flex-direction: column;
        flex-flow: wrap;
    }
    
    .table-row {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
    
    .pre-pay-btn-space {
        justify-content: space-between
    }
    
    .pre-btn-width {
        width: 300px;
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
    
    .md-custom-btn:active {
       opacity:0.8;
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
    
    .btn-color {
        background-color: #3b371e;
    }
    
    .combined {
        flex-direction: row
    }
    
    .pre-pay-card-proposal{
        /* width:70%; */
        /*margin: 20px;*/
    margin-top: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-width: 1px;
    border-color: rgba(0,0,0,0.25);
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
/*    margin-right: 3px;
    margin-left: 3px;
*/        /*box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;*/
    }
    
    .card-header-proposal {
        padding-left: 10px;
        background-color: #3b371e;
        border-width: 2px;
        border-color: rgba(0,0,0,0.25);
    }
    
    .card-content {
        padding-left: 10px;
        padding-bottom: 10px;
    }
    
    .card-subtitle {
        font-size: 22px;
        color: #9D9D9D;
        font-family:robotoregular;
    }
    
    .heading {
        font-size: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #fff;
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
        /* padding-bottom: 50px */
    }
    
    .input {
        display: block;
        background-color: #fff;
        font-size: 24px;
        padding: 10px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        font-family:robotoregular;
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
        padding: 30px;
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
    
    .form-title {
        font-size: 24px;
        padding-top: 10px;
        color: #565656;
        font-family:robotoregular;
    }
    
    .form-edit-title {
        font-size: 24px;
        padding-top: 10px;
        padding-right: 10px;
        color: #565656;
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
    
    select {
        color: #565656;
        font-size: 14px;
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
    
    .table-row-details {
        margin-left: 40px;
    }
    
    .card-line1 {
        padding: 20px;
    }
    
    .sub-heading {
        padding: 10px;
        font-size: 18px;
        color: #565656;
        font-family:robotoregular;
    }
    
    .head-row {
        flex-direction: row;
        justify-content: space-between;
    }
    
    .cal-icn-prepay {
        height: 40px;
        width: 40px;
        margin-top: 5px;
        
    }
    
    .edit-position {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 15px;
    }

    /* Added by Khan Usama */

    .pay-reiv-foter-row {
        flex-direction:row;
        padding: 20px;
        margin-bottom:20px;
    }
    
    @media only screen and (min-width: 320px) {
         .pre-pay-card-proposal{
            border:none;
            width: 99%;
        }
        .card-header-proposal {
            border:none;
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
        .cal-icn-prepay {
            height: 20px;
            width: 20px;
            margin-top: 5px;
        }
        .first-row {
            flex-direction: column;
        }
        .heading {
            font-size: 15px;
            font-family:robotoregular;
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #565656;
            font-family:robotoregular;
        }
        .form-edit-title {
            font-size: 14px;
            padding-right: 10px;
            padding-top: 20px;
            color: #565656;
            font-family:robotoregular;
        }
        /* .pre-pay-btn-space {
            justify-content: space-evenly;
        } */
        .pre-btn-width {
            width: 50%;
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
        .sec-btn-color {
            background-color: #fff;
            border: 1px solid black;
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            
            font-weight: 500;
            
            font-family:robotoregular;
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

        /* usama */

        .pay-reiv-foter-row {
            padding: 12px;
        }

    }
    
    @media only screen and (min-width: 768px) {
        .card-collection {
            padding: 0px;
        }

         .pre-pay-card-proposal{
            margin-right:  10px;
            margin-left: 10px;
            border:none;
            width: 47%;
        }


        .first-row {
            flex-direction: row;
        }
        .table-row {
            flex-direction: row;
        }
        .combined {
            flex-direction: column
        }
        .btn-footer{
            width:99%;
            
        }
     /*   .pre-pay-card-proposal{
            min-width: 352px;
        }*/
        /* .pre-pay-btn-space {
            justify-content: space-around;
        } */

        .pre-btn-width {
            width: 20%;
        }
    }
    
    @media only screen and (min-width: 992px) {
         .pre-pay-card-proposal{
            width: 31.1%;
        }
        .btn-footer{
            width:99%;
            
        }
       
          /* .pre-pay-card-proposal{
            min-width: 380px;
        } */
        /* .wrapper {
            max-width: 1024px;
        }
        .pre-pay-card-proposal{
            min-width: 290px;
        }
        .scroller {
            align-items: center
        } */
        .pre-btn-width {
            width: 13%;
        }
    }
</style>