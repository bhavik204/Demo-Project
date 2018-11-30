<template>
        <div class="wrapper" style="background-color: #f7f7f7;">
                <!-- <inner-header  :headeTitle="headerName"  ></inner-header>
                <on-tab></on-tab> -->
        <scroller class="scroller"> 
       <div class="container">
            <!-- <app-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></app-header>   -->
              
       
       
       
                  
           
                  <div class="side-container page-animation" ref="pagewrap">
                   
                   <div class="card-onbqscore row" style=" flex:1; padding-bottom:20px;"  >
                       
                       
            
                               <div class="table-row-header" style="flex-direction: column;"> 
                       <text class="heading card-title-border onbqsore-width">Q Score</text>
                      </div>
                      <div class="table-row-check-title mobile-top-20" style="flex-direction: column;"> 
                            <text class="form-title">(All the questions in the questionnaire are mandatory)</text>
                           </div>
                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">1)  Age</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="titleType">{{value}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="age" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">18-25</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="age" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">25-40</label>

                                                        <input type="radio" class="cursor-pointer-globle" name="age" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;"> >40</label>
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                                         <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">2)  Number of years residing in current city</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="genderType">{{value1}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="years" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">0-2 years</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="years" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">2-5 years</label>

                                                        <input type="radio" class="cursor-pointer-globle" name="years" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;"> >5 years</label>
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">3)  Education Qualification</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="martialType">{{value2}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="qualification" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">Class 12</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="qualification" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">Graduation</label>

                                                        <input type="radio" class="cursor-pointer-globle" name="qualification" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">Post Graduation/ Professional Qualification</label>
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>
             
                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">4)  Family Income</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="nationality">{{value3}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="familyIncome" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">0-2 Lakhs</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="familyIncome" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">2-4 Lakhs</label>

                                                        <input type="radio" class="cursor-pointer-globle" name="familyIncome" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;"> >4 Lakhs </label>
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">5)  Martial Status</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="education">{{value4}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="martialStatus" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">Unmarried</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="martialStatus" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">Married</label>

                                                
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">6)  Association with Esteemed Clubs (Lions, Rotary,etc.)</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="occupation">{{value5}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="club" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">Yes</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="club" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                                
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">7)  Preferred Profiles</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:0.5" @click="accountProof">{{value6}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="profiles" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">No</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="profiles" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">Yes(if yes, kindly provide relevant proof)</label>

                                                
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.7" class="form-title">8)  Has 2-wheeler/4-wheeler</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="state">{{value7}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="vehicle" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">No</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="vehicle" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">2- wheeler</label>

                                                        <input type="radio" class="cursor-pointer-globle" name="vehicle" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">4- wheeler</label>
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                           <div class="table-row-check-title">
                                <div style="flex-direction:column;flex:1" class="table-row-details mt-20 mobile-top-20">
                                        <text style="flex:0.6" class="form-title">9)  Has previous Sales experience</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                        <div  class="table-row-check" style="flex:1" v-if="platform == 'Web'" >
                                                <div style="flex-direction: row;" class="radio-margin-top-score" >
               
                                                        <input type="radio" class="cursor-pointer-globle" name="vehicle" value="Yes" />
                                                        <label class="radio-title" style="margin-left:10px;">No</label>
                        
                                                        <input type="radio" class="cursor-pointer-globle" name="vehicle" value="No" style="margin-left:30px;" />
                                                        <label class="radio-title" style="margin-left:10px;">yes</label>

                    
                        
                                                    </div>
                                        </div>
                                    </div>
                           </div>

                           <div class="table-row-heading">
                               <text class="heading">Prefered Profiles</text>
                           </div>
                           <div class="table-row-check-title" style="flex-direction:column;padding-bottom:10px">
                               <text class="form-title" >Teacher/Professor, State & Central Govt Employees, Bank Employees, Post Master/Postal </text>
                    
                               <text class="form-title">Employees/Postal Agent, Financial Product Distributors (MF/FD/Bonds/Home Loans/Gen. </text>
                               <text class="form-title">Ins./Chit Funds/Daily Deposits), FMCG Distributors/Network Agents, </text>
                               <text class="form-title">(Amway/Tupperware/Modicare/Oriflame/ Sahara/Avon/Forever Life/Herbalife Agents), </text>
                               <text class="form-title">Army/Navy/Airforce/Police Personnel, Panchayat Pradhan/Panchayat Secretary, Retired </text>
                               <text class="form-title">Persons/Retired Development Officers, Doctors, Medical practitioners (nurses, lab </text>
                               <text class="form-title">technicians), Chemists, Lawyers, CA/CS/Tax Consultants/Accountants, Travel Agents/RTO </text>
                               <text class="form-title">Agent/Real Estate Agent, Kirana Shop Owners/PDS Shopkeepers (Ration Shop Owners), </text>
                               <text class="form-title">Anganwadi Workers/Women in SHG Members of Business/Registered Communities/Clubs </text> 
                               <text class="form-title">(Rotary Club/Lions Club/Puja Committee etc.)</text>
                           </div>
       
       
            
                           
                 
       
       
                   
                      
       
                      
       
       
       
       
       
       
                       
       
                  
       
       
       
                    
       
       
              
                
                  
       
       
                    
       
       
       
                   
                        
                   
       
                
                   </div>
                   <div  v-if="platform==='Web'" class="card-onbqscore btn-space" style=" flex-direction:row;;padding:12px;margin-bottom:20px">
                        <div class="box onbord-qscore-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/masteronboard/advisordetails/references')">
                                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label cursor-pointer-globle ">Previous</text>
                            </div> -->
                             <div class="btn-space">
									<s-button @click.native="jump('/masteronboard/advisordetails/references')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>
                        </div>
                        <div class="box onbord-qscore-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="jump('/masteronboard/advisordetails/prerecruit')">
                                <text class="md-btn-label text-color-white  cursor-pointer-globle">Proceed</text>
                                <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                            <div 
                                @click.native="jump('/masteronboard/advisordetails/prerecruit')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>

                    <div v-if="platform !=='Web'"  class="card-onbqscore btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                            <div class="box onbord-qscore-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/masteronboard/advisordetails/references')">
                                    <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                    <text class="md-sec-btn-label ">Previous</text>
                                </div> -->
                                 <div class="btn-space">
									<s-button @click="jump('/masteronboard/advisordetails/references')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                                    </div>
                            </div>
                            <div class="box onbord-qscore-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn btn-color" @click="jump('/masteronboard/advisordetails/prerecruit')">
                                    <text class="md-btn-label text-color-white">Proceed</text>
                                    <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                </div> -->
                                 <div  
                                @click="jump('/masteronboard/advisordetails/prerecruit')">
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
            // import appHeader from '../../components/Application/AppHead.vue'
            import appHeader from '../../../components/OnBoarding/OnboardHeader.vue'
            import PButton from '../../../components/vx-primary-button/vx-primary-button.vue'
            import SButton from '../../../components/vx-primary-button/vx-scondary-button'   
           const items = ["18-25","25-40",">40"];
           const gender = ["0-2 years","2-5 years",">5 years"];
           const martial = ["Class 12","Graduation","Post Graduation/ Professional Qualification"];
           const nationality = ["0-2 Lakhs","2-4 Lakhs",">4 Lakhs",
           ];

           const educationList = ["Unmarried","Married"];
           const occupationList = ["Yes","No"];
           const accountProof = ["No","Yes(if yes, kindly provide relevant proof)"]
           const stateList = ["No","2- wheeler","4- wheeler"]
           const cityList = ["No","Yes"]
       
       
       
           const picker = weex.requireModule("picker");
           const env = weex.config.env || WXEnvironment
           const invalid = '- invalid -'
          import { WxcRadio } from 'weex-ui'
          import { WxcCheckbox,WxcCheckboxList } from 'weex-ui'
          import onTab from '../OnBoardTab.vue'
      
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
               components: { WxcCheckbox, WxcCheckboxList,appHeader,onTab,PButton,SButton },
               data() {
                   return {
                    headerName:'Advisor Fulfilmemt',
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
                       profiles:[
                           "Teacher/Professor, State & Central Govt Employees, Bank Employees, Post Master/Postal Employees/Postal Agent",
                           " Financial Product Distributors (MF/FD/Bonds/Home Loans/Gen. Ins./Chit Funds/Daily Deposits"
                       ],
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
                    titleWeb : ["Mr", "Mrs", "Dr", "Prof"],
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
                           return "Select age";
                       } else if (this.index < items.length) {
                           return items[this.index];
                       }
                       return "";
                   },
                   value1() {
                       if (this.index1 == -1) {
                           return "Select years ";
                       } else if (this.index1 < gender.length) {
                           return gender[this.index1];
                       }
                       return "";
                   },
                   value2() {
                       if (this.index2 == -1) {
                           return "Select Qualification";
                       } else if (this.index2 < martial.length) {
                           return martial[this.index2];
                       }
                       return "";
                   },
                   value3() {
                       if (this.index3 == -1) {
                           return "Select Income";
                       } else if (this.index3 < nationality.length) {
                           return nationality[this.index3];
                       }
                       return "";
                   },
                   value4() {
                       if (this.index4 == -1) {
                           return "Select Martial Status";
                       } else if (this.index4 < educationList.length) {
                           return educationList[this.index4];
                       }
                       return "";
                   },
                   value5() {
                       if (this.index5 == -1) {
                           return "Select Association";
                       } else if (this.index5 < occupationList.length) {
                           return occupationList[this.index5];
                       }
                       return "";
                   },
                   value6() {
                       if (this.index6 == -1) {
                           return "Select ";
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
                           return "Select ";
                       } else if (this.index7 < cityList.length) {
                           return cityList[this.index8];
                       }
                       return "";
                   },
               },
               methods: {
                   wxcCheckBoxListChecked (e) {
               this.checkedList = e.checkedList;
             },
                   wxcRadioListChecked(e) {
                       this.checkedInfo = e;
                   },
                   jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
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
                .mt-20{
                    margin-top:20px
                }
                   .radio-margin-top-score{
        margin-top: 7px;
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
           .scroller{
               /* background-color: #f7f7f7; */
           }
       
           .row {
               flex-direction: column
           }
       
           .card-onbqscore {
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
    .onbqsore-width{
    width: 100px;
    }
           .heading{
               font-size: 25px;
               padding-top: 20px;
               font-family:robotobold;
                padding-bottom: 05px;
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
       opacity:0.8;
    }


    .onbord-qscore-btn-width {
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
               font-family: Helvetica-medium;
               font-family:robotoregular;
           }
       
           .card-subtitle-details {
               font-size: 25px;
               color: #565656;
               font-family: Helvetica-medium;
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
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

    }
      .table-row-check{
                  padding-left: 10px;
                    padding-right: 10px;
        padding-top: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 10px;
        
                }
      .table-row-heading {
         padding-left: 10px;
        padding-right: 10px;
        /* padding-top: 10px; */

        
    }
             .table-row-header {
        padding-left: 10px;
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
       @media only screen and (min-width: 320px) {
               /*Button Arrow CSS*/
                          .card-onbqscore {
                          border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;

               }
                  .table-row {
              padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;


    }
     .table-row-check{
                  padding-left: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }
    .mobile-top-20{
        margin-top:20px
    }
      .mt-20{
                    margin-top:0px
                }
     .radio-margin-top{
        margin-top: 15px;
    }
                  .onbqsore-width{
    width: 57px;
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
       .onbord-qscore-btn-width {
            width: 50%;
        }
       }
       
              @media only screen and (min-width: 768px) {
                             .card-onbqscore {
                             margin:10px;
                     }
                               .table-row {
               margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

    }
     .table-row-check{
                  padding-left: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }
     .mobile-top-20{
        margin-top:0px
    }
         .radio-margin-top-score{
        margin-top: 6px;
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
       .onbord-qscore-btn-width {
            width: 20%;
        }
  
              }
              
       @media screen and (min-width:992px) {
           .onbord-qscore-btn-width {
            width: 15%;
        }
       }
          
       </style>