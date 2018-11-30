<template>
        <div class="wrapper">
        <scroller class="scroller"> 
       <div class="container">
            <!-- <prop-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></prop-header>   -->
              
       
       
       
                  
           
                  <div class="side-container">
                   
                   <div class="card row" style=" flex:1;"  >
                       
                          
       
                      <div class="table-row" style="flex-direction: column;"> 
                       <text class="heading">Request Details</text>
                       </div>
                       <div class="table-row">
                            <text class="heading">Raise Query for</text>  
                       </div>

                       <div class="table-row">
                            <div class="box md-btn-width">
                                    <div class="md-custom-btn btn-color" @click.native="jump('/custreq')">
                                        <text class="md-btn-label ">Customer</text>
                                    </div>
                                </div>
                                <div class="box md-btn-width">
                                        <div class="md-custom-btn sec-btn-color"  @click.native="jump('/selfreq')">
                                            <text class="md-sec-btn-label ">Self</text>
                                        </div>
                                    </div>
                       </div>
                      
       



       
                       <div  class="table-row">
       
                           <div style="flex-direction:row;flex:1;"class="table-row-details">
                               <div style="flex-direction:column;flex:1" >
                               <text style="flex:0.6" class="form-title">Search Policy By</text>
                               <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="genderType">{{value1}}</text>
                            
                               <div class="drop-down" v-if="platform == 'Web'" >
                                    <select>
                                        <option class="dropdown-opt" v-for="calc in titleWeb">{{calc}}</option>
                                    </select>
                                </div>
                            </div>
                                <div style="flex:1" class="table-row-details">
                                       <div class="form-title" style="margin-top:15.7px;flex-direction: row">   
                                    <input class="input" type="text" style="flex:1" />
                                    <image style="margin-top: 16px" class="cal-icn" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image>
                                </div> 
                                    </div>

                           </div>
                       </div>

                       <div class="table-row">
                            <div style="flex-direction: column;flex:1" class="table-row-details">
                                    <text style="flex:1" class="form-title">Customer Name</text>
                                    <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="martialType">{{value2}}</text>
                                    <div class="drop-down" v-if="platform == 'Web'">
                                        <select >
                                            <option class="dropdown-opt" v-for="calc in martialWeb">{{calc}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div style="flex-direction: column;flex:1" class="table-row-col-details">
                                        <text style="flex:1" class="form-title">Policy No</text>
                                        <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="nationality">{{value3}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'" >
                                            <select>
                                                <option class="dropdown-opt" v-for="calc in nationalityWeb">{{calc}}</option>
                                            </select>
                                        </div>
                
                                    </div>
                                    <div style="flex-direction: column;flex:1;" class="table-row-col-details">
                                            <text style="flex:1" class="form-title">Plan Name</text>
                                            <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="education">{{value4}}</text>
                                            <div class="drop-down" v-if="platform == 'Web'">
                                                <select >
                                                    <option class="dropdown-opt" v-for="calc in educationListWeb">{{calc}}</option>
                                                </select>
                                            </div>
                    
                                        </div>
                                        <div style="flex-direction: column;flex:1;" class="table-row-col-details">
                                                <text style="flex:1" class="form-title">Query Type</text>
                                                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="occupation">{{value5}}</text>
                                                <div class="drop-down" v-if="platform == 'Web'" >
                                                    <select>
                                                        <option class="dropdown-opt" v-for="calc in occupationListWeb">{{calc}}</option>
                                                    </select>
                                                </div>
                        
                                            </div>
                                            

                       </div>
       
                   
                      
       
                       <div  class="table-row">
                            <div style="flex-direction: column;flex:1;" class="table-row-details">
                                    <text style="flex:1" class="form-title">Service Request Type</text>
                                    <text v-if="platform !== 'Web'" class="input" style="flex:0.5" @click="accountProof">{{value6}}</text>
                                    <div class="drop-down" v-if="platform == 'Web'" >
                                        <select >
                                            <option class="dropdown-opt" v-for="calc in accountProofWeb">{{calc}}</option>
                                        </select>
                                    </div>
                
                                </div>

                                <div style="flex-direction: column;flex:1" class="table-row-col-details">
                                        <text style="flex:1" class="form-title">Sub-Service Request Type</text>
                                        <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="state">{{value7}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'" >
                                            <select >
                                                <option class="dropdown-opt" v-for="calc in stateListWeb">{{calc}}</option>
                                            </select>
                                        </div>
                
                                    </div>


       
                         
                       </div>
       
                       <div class="table-row">
                            <div style="flex-direction: column;flex:1" class="table-row-details">
                                <text  class="form-title">Description</text>
                                <input class="input" type="tel" style="flex:1" />
                            </div>
                          
        
                        </div>
       
                        <div  class="table-row">
                                <div style="flex-direction: column;flex:1" class="table-row-details">
                                        <text  class="heading">Current Details</text>
                                    <text  class="form-title">Full Name</text>
                                    <input class="input" type="tel" style="flex:1" />
                                </div>
                                <div style="flex-direction: column;flex:1;" class="table-row-col-details">
                                        <text  class="heading">New Details</text>
                                    <text  class="form-title">Full Name</text>
                                    <input class="input" type="tel" style="flex:1" />
                                </div>
            
            
            
                            </div>

                            <div class="table-row">
                                    <text style="flex:1" class="heading">Upload Relevent Documents</text>
                                    </div>
                                    <div class="table-row">
                                    <text style="flex:1" class="form-title">Please select the document type you would like to upload for your Address Proof</text> 
                            </div>

                            <div class="table-row">
                                    <div style="flex-direction: column;flex:0.5;" class="table-row-details">
                                           
                                            <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="city">{{value8}}</text>
                                            <div class="drop-down" v-if="platform == 'Web'" style="flex:0.7" >
                                                <select style="flex:1" >
                                                    <option class="dropdown-opt" v-for="calc in cityListWeb">{{calc}}</option>
                                                </select>
                                            </div>
                    
                                        </div>

                                        <div style="flex:0.5" class="table-row-col-details">
                                                <div class="form-title" style="flex-direction: column">   
                                             <input class="input" placeholder="Type Document Name" type="text" style="flex:1" />
                                         </div> 
                                             </div>
                                         <div style="flex:1;flex-direction:row" class="table-row-details">
                                                <div class="box md-btn-width" style="padding:10px;flex:1">
                                                        <div class="md-custom-btn sec-btn-color" style="flex-direction:row">
                                                          <text class="md-sec-btn-label text-color-white">Gallery</text>
                                      
                                                        </div>
                                                      </div>
                                                      <div class="box md-btn-width" style="padding:10px;margin-left:10px;flex:1">
                                                        <div class="md-custom-btn sec-btn-color">
                                      
                                                          <text class="md-sec-btn-label text-color-white">Capture</text>
                                                        </div>
                                                      </div>
                                                      <div class="box md-btn-width" style="padding:10px;margin-left:10px;flex:1">
                                                        <div class="md-custom-btn sec-btn-color">
                                                          <text class="md-sec-btn-label text-color-white">Browse</text>
                                                        </div>
                                                      </div>
                                         </div>



                            </div>

                            <div class="table">
                                    <!-- <scroller class="scroller"> -->
                                      <div class="thead-row table-row" style="flex-direction:row; flex-wrap: nowrap;padding-bottom: 10px">
                                        <div class="tbl-content" style="flex:3">
                                          <text class="form-title">Image Thumbnail</text>
                                        </div>
                            
                                        <div style="flex:3">
                                          <text class="form-title">Category & Type</text>
                                        </div>
                                        <div style="flex:1">
                                          <text class="form-title">Action</text>
                                        </div>
                                      </div>
                                      <div class="tbody-row table-row" v-for="tbl in table" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto;padding-bottom: 10px;
                                border-bottom: 1px solid #d8d8d8">
                                        <div style="flex:3">
                                          <image class="id-icn" :src="tbl.ImageThumbnail"></image>
                                        </div>
                                       
                                        <div class="tbl-content" style="flex:3">
                                          <text class="form-title">{{tbl.CategoryTypes}}</text>
                                        </div>
                                        <div class="tbl-content" style="flex:1;">
                                          <image class="cal-icn" :src="tbl.Action1"></image>
                                        </div>
                                      </div>
                                    <!-- </scroller> -->
                                  </div>
       
       
                     
                       
       
       
                    
       
       
       
       
       
                      
          
                 
                  
       
       
                       <div  class="table-row">
                          
       
                          
                       </div>
       
                    
                   </div>
                   <div class="card btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                        <div class="box md-btn-width" style="padding:10px;">
                                <div class="md-custom-btn sec-btn-color"  @click="jump('/proposalreport')">
                                    <text class="md-sec-btn-label ">Previous</text>
                                </div>
                            </div>
                            <div   class="box md-btn-width" style="padding:10px;">
                                    <div class="md-custom-btn btn-color" @click="jump('/proposalnominee')">
                                        <text class="md-btn-label text-color-white">Proceed</text>
                                    </div>
                                </div>
                       </div>
                 
                   </div>
             
              
                 </div>
       
             
       
       
       
       
       
       
       
       
       
       
       
               </scroller>
           
           </div>
       </template>
       
       <script>
            import appHeader from '../../components/Application/AppHead.vue'
            import propHeader from '../../components/Proposal/ProposalHeader.vue'
    
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
          import { WxcRadio } from 'weex-ui'
          import { WxcCheckbox,WxcCheckboxList } from 'weex-ui'
           export default {
               created() {
                   if (typeof WXEnvironment === 'object') {
       
                       this.platform = WXEnvironment.platform || unknown
                       this.deviceWidth = WXEnvironment.deviceWidth || unknown
         
                    
                   }
               },
               components: { WxcCheckbox, WxcCheckboxList,appHeader,propHeader},
               data() {
                   return {
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
            ImageThumbnail: "https://cdn-images-1.medium.com/max/800/1*zJqbzxQG8KF4Dfqw_dqLng.png",
            ImageName: "XYZ.jpg",
            CategoryTypes: "Photo ID Pan Card",
            Action: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
            Action1: 'https://www.materialui.co/materialIcons/action/delete_black_192x192.png'
          },
          {
            ImageThumbnail: "https://cdn-images-1.medium.com/max/800/1*zJqbzxQG8KF4Dfqw_dqLng.png",
            ImageName: "XYZ.jpg",
            CategoryTypes: "Photo ID Pan Card",
            Action: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
            Action1: 'https://www.materialui.co/materialIcons/action/delete_black_192x192.png'
          },
          {
            ImageThumbnail: "https://cdn-images-1.medium.com/max/800/1*zJqbzxQG8KF4Dfqw_dqLng.png",
            ImageName: "XYZ.jpg",
            CategoryTypes: "Photo ID Pan Card",
            Action: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
            Action1: 'https://www.materialui.co/materialIcons/action/delete_black_192x192.png'
          },
         
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
           .scroller{
               background-color: #f7f7f7;
           }
       
           .row {
               flex-direction: column
           }
       
           .card {
               /* width:70%; */
               margin: 20px;
               margin-top: 20px;
               margin-bottom: 0px;
               background-color: #fff;
               border-radius: 5px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);           }
       
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
       
       
           }
           .heading{
               font-size: 35px;
               padding-top: 20px;
               font-family:robotobold;
;
       
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
           .id-icn {
          height: 60px;
          width: 60px;
          margin-top: 5px;
        }
      
           .input {
               display: block;
               background-color: #fff;
               font-size: 32px;
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
        cursor: pointer;
    }

    .md-btn-label {
        font-size : 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color:#fff;
        font-family:robotoregular;
    }
    .md-sec-btn-label {
        font-size : 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color:#000;
        font-family:robotoregular;
    }

    .md-custom-btn:active {
       opacity:0.8;
    }


    .md-btn-width {
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
         /* .consent{
             white-space: normal;
         } */
           .form-title {
               font-size: 32px;
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
               }
               .card-heading{
                   padding: 10px;
                   font-size: 14px;
                   color: #3b371e;
                   font-family:robotobold;
;
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
        .md-btn-label {
            color:#fff;
            font-size : 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
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
            cursor: pointer;
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
            cursor: pointer;
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
           .btn-space{
        justify-content:space-evenly;
       }
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
       .md-btn-width {
            width: 20%;
        }
       }
       
              @media only screen and (min-width: 768px) {

                .id-icn {
            height: 88px;
            width: 140px;
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
           .btn-space{
        justify-content:space-around;
       }
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
       .md-btn-width {
            width: 20%;
        }
  
              }
              
       
          
       </style>