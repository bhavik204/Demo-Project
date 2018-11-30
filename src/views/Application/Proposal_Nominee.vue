<template>
  <div style="background-color:#f7f7f7;">
    <!-- <inner-header :headeTitle="headerName"></inner-header>
    <application-tab></application-tab> -->
    <!-- <router-view /> -->
        <!-- <app-header v-show="deviceWidth > 768" v-if="platform === 'Web'"> </app-header> -->

        <div class="side-container  page-animation" ref="pagewrap">
          <div class="card-proposal-nominee">
            <div class="table-row-nominee-heading" style="flex-direction: column;">
              <text class="heading prop-nominee-card-title-border nomni-detl-border-padding">Nominee Details</text>
            </div>
            <div class="table-row-nominee" style="flex-direction: column;">
              <text class="heading">Nominee for Plan 1</text>
            </div>
            <div class="table-row-nominee">
              <text class="form-title">(Plan: Guaranteed Money Back | Policy Term: 20 years)</text>
            </div>

            <div class="table-row-nominee ml-20">

              <div style="flex-direction:column;flex:1;">
                <text style="flex:1" class="form-title">Gender</text>
                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="genderType">{{value1}}</text>
                   <div class="gender-spacing" v-if="platform == 'Web'">
                <gender-view @selectedGender="genderSel" v-model="formDat.Gender"></gender-view>
                              </div>
                <!-- <div v-if="platform === 'Web'" style="flex:1">
                  <div style="flex-direction: row;" class="radio-margin-top">

                    <input type="radio" class="cursor-pointer-globle" name="riders" v-model="gen" value="Yes" />
                    <label class="radio-title" style="margin-left:10px;">Male</label>

                    <input type="radio" class="cursor-pointer-globle" name="riders" v-model="gen" value="No" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">Female</label>

                  </div>
                </div> -->
              </div>

              <div style="flex-direction:column;flex:1" class="table-row-nominee-col-details mt-20">
                <text style="flex:1" class="form-title">Title</text>
                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="titleType">{{value}}</text>
                <div class="drop-down" v-if="platform == 'Web'">
                  <select style="flex:1" class="cursor-pointer-globle" v-model="title">
                      <option value="">Select</option>
                    <option class="dropdown-opt" v-for="calc in titleWeb">{{calc}}</option>
                  </select>
                </div>
              </div>


            </div>

            <div class="table-row-nominee">

              <div class="desktop-top-5" style="flex-direction:column;flex:1">
                <!-- <text class="form-title">Nominee Name</text>
                <input class="input" v-model="nomineeName" type="text" style="flex:1" /> -->
                <div class="mobile-top-20 mt-20">
                                          <vx-input-box 
                                             vx-label="Nominee Name"
                                             :hasRequired="true"
                                              message="Please enter Nominee Name"
                                              vx-placeholder="Enter Nominee Name "
                                             :vx-model="nomineename"
                                              @valueReading="nomineename=$event.value">
                                            </vx-input-box>
                </div>
              </div>
              <div style="flex-direction: column;flex:1" class="table-row-nominee-col-details mt-20 mobile-top-20">
                <!-- <text class="form-title">Date of Birth</text>
                <input style="flex:1" v-model="birthDate" type="date" placeholder="Input Date" class="input" max="2070-12-12" /> -->
                                            <vx-input-box 
                                             vx-label="Date of Birth"
                                             :hasRequired="true"
                                              message="Please enter date of birth"
                                             vx-placeholder="Select Birth Date"
                                             vx-type="date"
                                             :vx-model="nomineendob"
                                             @valueReading="nomineendob=$event.value">
                                            </vx-input-box>
              </div>



            </div>

 
               <div class="table-row-nominee ml-20">
              <div style="flex-direction:column;flex:1" class="mobile-top-20 mt-20">
                <text  class="form-title">Relationship of nominee with LA</text>
                <text v-if="platform !== 'Web'" class="input-drop" @click="relationship">{{value2}}</text>
                <div class="drop-down" v-if="platform == 'Web'">
                  <select style="flex:1" class="cursor-pointer-globle" v-model="nomineeRelationship">
                     <option value="">Select</option>
                    <option class="dropdown-opt" v-for="calc in relationshipListWeb">{{calc}}</option>
                  </select>
                </div>
              </div>

              <div class="table-row-nominee-col-details desktop-top-5  mt-20 mobile-top-20" style="flex-direction:column;flex:1">
                <!-- <text class="form-title">Nominee Name</text>
                <input class="input" v-model="nomineeName2" type="text" style="flex:1" /> -->
     <div class="mt-20">
      <vx-input-box 
                                             vx-label="Mobile No"
                                               :hasRequired="true"
                                              message="Please enter valid Mobile No without any country code or 0"
                                             vx-placeholder="Enter Mobile No"
                                             :vx-model="mobileno"
                                              @valueReading="mobileno=$event.value">
                                            </vx-input-box>
     </div>
              </div>
            </div>

            <div class="table-row-nominee mt-20 ml-20">
              <div style="flex-direction: column;flex:0.5" class="table-row-nominee-details mobile-top-20">
                <!-- <text style="flex:1" class="form-title">Email ID</text>
                <input class="input" v-model="email" type="text" style="flex:0.5" /> -->
                                    <vx-input-box 
                                             vx-label="Email ID"
                                              :hasRequired="true"
                                              message="Please enter valid Email ID"
                                             vx-placeholder="Enter Email ID"
                                             vx-type="tel"
                                             :vx-model="emailid"
                                                 @valueReading="emailid=$event.value">
                                            </vx-input-box>
              </div>
            </div>
            <div class="table-row-nominee" style="flex-direction: column;">
              <text class="heading">Nominee Address Details</text>
            </div>
            <div style="flex-direction:row" class="table-row-nominee">
              <div >
                <div class="switch-row ml-20" style="flex-direction:column ;">
                  <div>
                    <text class="form-title">Is the Nominee address same as LA?</text>
                  </div>
                  <div class="example" v-if="platform !== 'Web'" style="flex:1">
                    <div style="margin-top:10px" >
                      <switch @change="onchange"></switch>
                    </div>
                    <text class="form-title">{{check}}</text>

                  </div>
                </div>


                <div v-if="platform === 'Web'" style="flex:1">
                  <div style="flex-direction: row;" class="radio-margin-top">

                    <input type="radio" class="cursor-pointer-globle" name="naddress" v-model="nomineeSame" value="true" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" name="naddress" v-model="nomineeSame" value="false" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>

            </div>
            <div v-if="nomineeSame == 'No'">
            <div class="table-row-nominee">
                            <div style="flex-direction: column;flex:1" class="table-row-nominee-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Address Line 1</text>
                                <input class="input" v-model="add1" type="text" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Address Line 1"
                                              :hasRequired="true"
                                              message="Please enter mailing address"
                                             vx-placeholder="Enter Address Line 1 "
                                             :vx-model="add1">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-nominee-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Address Line 2</text>
                                <input class="input" v-model="add2" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Address Line 2"
                                             vx-placeholder="Enter Address Line 2 "
                                             :vx-model="add2">
                                            </vx-input-box>
                            </div>
                        </div>




                        <div class="table-row-nominee">
                            <div style="flex-direction: column;flex:1" class="table-row-nominee-details  mobile-top-20 ml-20">
                                <text style="flex:1" class="form-title">State</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="state">{{value7}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="stateData" class="cursor-pointer-globle" >
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in stateListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>

                            <div style="flex-direction: column;flex:1;" class="table-row-nominee-col-details mt-20 mobile-top-20 ml-20">
                                <text style="flex:1" class="form-title">City</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="cityData" class="cursor-pointer-globle">
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in cityListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="table-row-nominee">
                            <div style="flex-direction: column;flex:1" class="table-row-nominee-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Pin Code</text>
                                <input v-model="pincode" class="input" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Pin Code"
                                             vx-placeholder="Enter Pin Code "
                                             :vx-model="pincode">
                                              @valueReading="tpincode=$event.value">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-nominee-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Email ID</text>
                                <input class="input" v-model="email" type="email" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Email ID"
                                              :hasRequired="true"
                                              message="Please enter valid Email ID"
                                             vx-placeholder="Enter Email ID "
                                             :vx-model="emailid">
                                             @valueReading="emailid=$event.value">
                                            </vx-input-box>
                            </div>

                        </div>


                        <div class="table-row-nominee">
                            <div style="flex-direction: column;flex:1" class="table-row-nominee-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Mobile No</text>
                                <input class="input" v-model="mobile" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Mobile No"
                                              :hasRequired="true"
                                              message="Please enter valid Mobile No"
                                             vx-placeholder="Enter Mobile No "
                                             :vx-model="mobile">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-nominee-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Landline No</text>
                                <input class="input" v-model="landline" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Landline No"
                                             vx-placeholder="Enter Landline No "
                                             :vx-model="landline">
                                            </vx-input-box>
                            </div>



                        </div>
            </div>
            <div class="table-row-nominee" style="flex-direction: column;">
              <text class="heading">Nominee for Plan 2</text>
            </div>
            <div class="table-row-nominee ml-20" style="flex-direction: column;">
              <text class="form-title">(Plan: Guaranteed Money Back | Policy Term: 15 years)</text>
            </div>
            <div style="flex-direction:row;padding-bottom:10px;padding-top:10px;" class="table-row-nominee">
              <div style="flex:1" >
                <div class="ml-20" style="flex-direction:column ;flex:2">
                  <div>
                    <text class="form-title">Will the Nominee Details be same as above for Plan 2?</text>
                  </div>
                  <div class="example1 ml-20" v-if="platform !== 'Web'">
                    <div style="margin-top:10px">
                      <switch @change="onchange1"></switch>
                    </div>
                    <text class="form-title">{{check1}}</text>

                  </div>
                </div>


                <div v-if="platform === 'Web'" style="flex:1">
                  <div style="flex-direction: row;" class="radio-margin-top">

                    <input type="radio" class="cursor-pointer-globle" name="ndetails" v-model="ndet" value="Yes" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" name="ndetails" v-model="ndet" value="No" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>

            </div>
            <div style="flex-direction:row" class="table-row-nominee ml-20">
              <div>
                <div style="flex-direction:column ;flex:2">
                  <div>
                    <text class="form-title">Do you want to add another nominee?</text>
                  </div>
                  <div class="example" v-if="platform !== 'Web'" style="flex:1">
                    <div style="margin-top:10px">
                      <switch @change="onchange2"></switch>
                    </div>
                    <text class="form-title">{{check2}}</text>

                  </div>
                </div>


                <div v-if="platform === 'Web'" style="flex:1">
                  <div style="flex-direction: row;" class="radio-margin-top">

                    <input type="radio" class="cursor-pointer-globle" name="anominee" v-model="anotherNominee" value="true" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" name="anominee" v-model="anotherNominee" value="false" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>

            </div>



            <div class="table-row-nominee" style="flex-direction: column;">
              <text class="heading prop-nominee-card-title-border nomni-detl-border-padding">Apointee Details</text>
            </div>

            <div class="table-row-nominee  ml-20">
              <div style="flex-direction:column;">
                <div class="mt-20">
                  <text style="flex:1" class="form-title">Gender</text>
                  <text v-if="platform !== 'Web'" class="input-drop" @click="appointeegenderType">{{value3}}</text>
                  <div class="gender-spacing" v-if="platform == 'Web'">
                <gender-view @selectedGender="genderApptSel" v-model="formDat.Gender_n"></gender-view>
                              </div>
                  <!-- <div v-if="platform == 'Web'" style="flex:2">
                    <div style="flex-direction:row;" class="radio-margin-top">

                      <input v-model="apointeeGender" class="cursor-pointer-globle" type="radio" name="agen" value="Male" />
                      <label class="radio-title" style="margin-left:10px;">Male</label>

                      <input v-model="apointeeGender" class="cursor-pointer-globle" type="radio" name="agen" value="Female" style="margin-left:30px;" />
                      <label class="radio-title" style="margin-left:10px;">Female</label>

                    </div>
                  </div> -->
                </div>



              </div>
            </div>

            <div class="table-row-nominee ml-20">
              <div style="flex-direction:column;flex:1" class="mobile-top-20 mt-20">
                <text  class="form-title">Title</text>
                <text v-if="platform !== 'Web'" class="input-drop" @click="appointeetitleType">{{value4}}</text>
                <div class="drop-down" v-if="platform == 'Web'">
                  <select style="flex:1" class="cursor-pointer-globle" v-model="appointeetitle">
                     <option value="">Select</option>
                    <option class="dropdown-opt" v-for="calc in appointeetitleListWeb">{{calc}}</option>
                  </select>
                </div>
              </div>

              <div class="table-row-nominee-col-details  mt-20 mobile-top-20" style="flex-direction:column;flex:1">
                <!-- <text class="form-title">Nominee Name</text>
                <input class="input" v-model="nomineeName2" type="text" style="flex:1" /> -->
     <div class="mt-20">
      <vx-input-box 
                                             vx-label="Nominee Name"
                                             vx-placeholder="Enter Nominee Name"
                                             :vx-model="nomineename1"
                                                 @valueReading="nomineename1=$event.value">
                                            </vx-input-box>
     </div>
              </div>
            </div>

            <div class="table-row-nominee ml-20">

              <div style="flex-direction: column;flex:1" class="mt-20 mobile-top-20">
                <!-- <text class="form-title">Date of Birth</text>
                <input style="flex:1" v-model="birthDate2" type="date" placeholder="Input Date" class="input-drop" max="2070-12-12" /> -->
      <vx-input-box 
                                               vx-type="date"
                                             vx-label="Date of Birth"
                                             vx-placeholder="Enter Date of Birth"
                                             :vx-model="birthDate2"
                                                 @valueReaddng="birthDate2=$event.value">
                                            </vx-input-box>
              </div>

              <div style="flex-direction:column;flex:1" class="table-row-nominee-col-details mt-20 mobile-top-20">
                <text  class="form-title">Relationship of nominee with LA</text>
                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="appointeeRelationship">{{value5}}</text>
                <div class="drop-down" v-if="platform == 'Web'">
                  <select style="flex:1" class="cursor-pointer-globle" v-model="nomineeRelationship2">
                      <option value="">Select</option>
                    <option class="dropdown-opt" v-for="calc in appointeeRelationshipListWeb">{{calc}}</option>
                  </select>
                </div>
              </div>




            </div>
            <div class="table-row-nominee" style="flex-direction: column;">
              <text class="heading">Appointee Address Details</text>
            </div>
            <div style="flex-direction:row" class="table-row-nominee">
              <div >
                <div class="ml-20" style="flex-direction:column ;flex:2">
                  <div>
                    <text class="form-title">Is the Appointee address same as Nominee?</text>
                  </div>
                  <div class="example" v-if="platform !== 'Web'" style="flex:1">
                    <div style="margin-top:10px">
                      <switch @change="onchange3"></switch>
                    </div>
                    <text class="form-title">{{check3}}</text>

                  </div>
                </div>


                <div v-if="platform === 'Web'" style="flex:1">
                  <div style="flex-direction: row;" class="radio-margin-top">

                    <input type="radio" class="cursor-pointer-globle" v-model="apointeeAdd" name="aAddress" value="true" />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" v-model="apointeeAdd" name="aAddress" value="false" style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>

            </div>

            <div style="flex-direction:row" class="table-row-nominee">
              <div class="mobile-top-20 desktop-top-15"  >
                <div class="ml-20 " style="flex-direction:column ;flex:2">
                  <div>
                    <text class="form-title">Do you want to add another Appointee?</text>
                  </div>
                  <div class="example" v-if="platform !== 'Web'" style="flex:1">
                    <div style="margin-top:10px">
                      <switch @change="onchange4"></switch>
                    </div>
                    <text class="form-title">{{check4}}</text>

                  </div>
                </div>


                <div v-if="platform === 'Web'" style="flex:1">
                  <div style="flex-direction: row;" class="radio-margin-top">

                    <input type="radio" class="cursor-pointer-globle" v-model="anotherApointee" name="anotApointee" value=true />
                    <label class="radio-title" style="margin-left:10px;">Yes</label>

                    <input type="radio" class="cursor-pointer-globle" v-model="anotherApointee" name="anotApointee" value=false style="margin-left:30px;" />
                    <label class="radio-title" style="margin-left:10px;">No</label>

                  </div>
                </div>

              </div>

            </div>
            <div class="table-row-nominee " style="flex-direction: column;">
              <text class="heading prop-nominee-card-title-border adv-detl-border-padding">Advisor Details</text>
            </div>
            <div style="flex-direction:row" class="table-row-nominee ml-20">
              <div style="flex-direction: column;flex:0.5" class="mt-20 mobile-top-20">
                <!-- <text style="flex:1" class="form-title">Advisor Place</text>
                <input class="input" v-model="advisorPlace" type="text" style="flex:0.5" /> -->
                <vx-input-box 
                                           
                                             vx-label="Advisor Place"
                                             vx-placeholder="Enter Advisor Place"
                                             :vx-model="advisorPlace"
                                              @valueReading="advisorPlace=$event.value">
                                            </vx-input-box>
              </div>
            </div>


          </div>

          <div  v-if="platform === 'Web'" class="card-proposal-nominee btn-space nominee-page-flx-row ">
            <div class="box nominee-md-btn-width" style="padding:10px;">
              <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposalpersonal')">
                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
              </div> -->
               <div class="s btn-space">
                                <div  class=""
                                @click.native="jump('/master/testpro/proposalpersonal')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
            </div>
            <div class="box nominee-md-btn-width" style="padding:10px;">
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
          
          <div  v-if="platform !== 'Web'" class="card-proposal-nominee btn-space nominee-page-flx-row ">
              <div class="box nominee-md-btn-width" style="padding:10px;">
                <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/master/testpro/proposalpersonal')">
                  <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                  <text class="md-sec-btn-label ">Previous</text>
                </div> -->
                 <div class=" btn-space">
                                <div  class=""
                                @click="jump('/master/testpro/proposalpersonal')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
              </div>
              <div class="box nominee-md-btn-width" style="padding:10px;">
                <!-- <div class="md-custom-btn btn-color" @click="submitData()">
                  <text class="md-btn-label text-color-white">Proceed</text>
                  <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                </div> -->
                <div class=""
                                @click="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
  // import appHeader from '../../components/Application/AppHead.vue'
  
  import applicationTab from './ApplicationTab.vue'
  import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
    import SButton from "../.././components/vx-primary-button/vx-scondary-button";         
    import genderView from '../../components/GenderView/genderView.vue';
  const items = ["Mr", "Mrs", "Dr", "Prof"];
  const gender = ["Male", "Female"];
  const relationshipList = [
   "Financier",
    "Brother-in-law",
    "Daughter",
    "Daughter-in-law",
    "Father",
    "Father-in-law",
    "Grand Daughter",
    "Grand Father",
    "Grand Mother",
    "Grand Son",
    "Husband",
    "Mother",
    "Mother-in-law",
    "Others",
    "Son",
    "Spouse",
    "Sister",
    "Sister-in-law",
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
    "Financier",
    "Brother-in-law",
    "Daughter",
    "Daughter-in-law",
    "Father",
    "Father-in-law",
    "Grand Daughter",
    "Grand Father",
    "Grand Mother",
    "Grand Son",
    "Husband",
    "Mother",
    "Mother-in-law",
    "Others",
    "Son",
    "Spouse",
    "Sister",
    "Sister-in-law",
    "Wife"
  ];
  const picker = weex.requireModule("picker");
  const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
  var stream = weex.requireModule('stream');
  const modal = weex.requireModule('modal')
  import { WxcRadio } from 'weex-ui'
  import appHeader from '../../components/Proposal/ProposalHeader.vue'
  import mainTab from '../../components/Tabs/MainTab.vue'
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
                  console.log(me.form[i].nomineeDetails)
                  me.formDat = me.form[i].nomineeDetails
                    this.leadiden = me.form[i].leadId._id
                  this.prodiden = me.form[i].productId
                  console.log(me.formDat)
                  this.title = me.formDat.Title
                  this.nomineename=me.formDat.NomineeName
                  this.nomineedob=me.formDat.DateofBirth
                  this.nomineeRelationship = me.formDat.RelationshipofnomineewithLA
                  this.mobileno=me.formDat.MobileNo
                  this.emailid=me.formDat.EmailID
                  this.nomineeSame = me.formDat.IstheNomineeaddresssameasLA
                  this.ndet = me.formDat.WilltheNomineeDetailsbesameasaboveforPlan2
                  this.anotherNominee = me.formDat.DoyouwanttoaddanotherNominee
                  this.appointeetitle = me.formDat.Title_n
                  this.nomineename1=me.formDat.NomineeName_n
                  this.birthdate2=me.formDat.DateofBirth_n
                  this.nomineeRelationship2 =me.formDat.RelationshipofnomineewithLA_n
                  this.apointeeAdd = me.formDat.IstheAppointeeaddresssameasNominee
                  this.anotherApointee = me.formDat.DoyouwanttoaddanotherAppointee
                  this.advisorPlace=me.formDat.AdvisorPlace
 
                }
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }
    },
    components: {
      WxcRadio, appHeader, applicationTab,mainTab,vxInputBox,PButton,SButton,
      genderView
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
        gen:'',
        title:'',
        nomineeName:'',
        birthDate:'',
        nomineeRelationship:'',
        mobile:'',
        email:'',
        nomineeSame:'',
        ndet:'',
        anotherNominee:'',
        apointeeGender:'',
        appointeetitle:'',
        nomineeName2:'',
        appointeedob:'',
        nomineeRelationship2:'',
        apointeeAdd:'',
        anotherApointee:'',
        advisorPlace:'',
        headerName: 'Proposal Fulfilmemt',
        platform: invalid,
        deviceWidth: invalid,
        selectedIndex: 'Select',
        dropDownShow: false,

        nomineename:'',
        nomineedob:'',
        mobileno:'',
        emailid:'',
        nomineename1:'',
        birthdate2:'',
        advisorlace:'',
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
        titleWeb: ["Mr", "Mrs", "Dr", "Prof"],
        genderWeb: ["Male", "Female"],
        relationshipListWeb: [
           "Financier",
          "Brother-in-law",
          "Daughter",
          "Daughter-in-law",
          "Father",
          "Father-in-law",
          "Grand Daughter",
          "Grand Father",
          "Grand Mother",
          "Grand Son",
          "Husband",
          "Mother",
          "Mother-in-law",
          "Others",
          "Son",
          "Spouse",
          "Sister",
          "Sister-in-law",
          "Wife"
        ],
        appointeetitleListWeb: [
          "Mr", "Mrs", "Dr", "Prof"
        ],
        appointeeRelationshipListWeb: [
          "Financier",
          "Brother-in-law",
          "Daughter",
          "Daughter-in-law",
          "Father",
          "Father-in-law",
          "Grand Daughter",
          "Grand Father",
          "Grand Mother",
          "Grand Son",
          "Husband",
          "Mother",
          "Mother-in-law",
          "Others",
          "Son",
          "Spouse",
          "Sister",
          "Sister-in-law",
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
          return "Select State";
        } else if (this.index7 < stateList.length) {
          return stateList[this.index7];
        }
        return "";
      },
      value7() {
        if (this.index8 == -1) {
          return "Select City";
        } else if (this.index7 < cityList.length) {
          return cityList[this.index8];
        }
        return "";
      },
    },
    methods: {
     genderSel(e){
        this.formDat.Gender = e.value
        console.log(this.formDat.Gender)
            
},
genderApptSel(e1){
this.formDat.Gender_n = e1.value
console.log(this.formDat.Gender_n)
},
      jump(to) {
        if (this.$router) {
          this.$router.push(to)
        }
      },
      onchange(event) {
        this.checked = event.value
        if (event.value === true) {
          this.check = 'Yes'
          this.nomineeSame = 'Yes'
        }
        else {
          this.check = 'No'
          this.nomineeSame = 'No'
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
       beforeRouteLeave(to, form, next) {
console.log(this.appointeetitle)
  var me = this;
 
  if(this.agree == true){
    this.checkAgree = 'Yes'
}
else{
    this.checkAgree ='No'
}

                const formData = {
                    userId:me.$store.state.agentDetails._id,
            leadId:this.leadiden,
            productId:this.prodiden,
            ra : this.title,
            paronymizatio : this.formDat.Gender,
            ThalesiaNomi  : this.nomineename,
            chackerDate  : this.nomineendob,
            medusiformRelationshipofnomine  : this.nomineeRelationship,
            robinMo  :parseInt(this.mobileno),
            benzylamine  : this.emailid,
            pararhotacismIstheNomineeaddresssa  : this.nomineeSame,
            CalinagoWilltheNomineeDetailsbesameasabovefo  : this.ndet,
            outquaffDoyouwanttoaddanotherN  : this.anotherNominee,
            isomer  : this.formDat.Gender_n,
            fla : this.appointeetitle,
            manifestationistNomi  : this.nomineename1,
            hexagramDate  : this.birthDate2,
            summityRelationshipofnomine  : this.nomineeRelationship2,
            unguentariaIstheAppointeeaddresssameasN  : this.apointeeAdd,
            parturientDoyouwanttoaddanotherApp  : this.anotherApointee,
            ecopheneAdvis		: this.advisorPlace, 
                }

                console.log(formData)
                   //me.$store.commit('ADD_APPFORMDATA',[{formData}],'nomineeDetails')
                       me.$store.commit('ADD_APPFORMDATA',{nomineeDetails: formData})  
                    me.$router.push('/master/testpro/proposalfamily')
            
            next();
        },
      submitData()
{
  console.log(this.appointeetitle)
  var me = this;
 
  if(this.agree == true){
    this.checkAgree = 'Yes'
}
else{
    this.checkAgree ='No'
}

                const formData = {
            userId:me.$store.state.agentDetails._id,
            leadId:this.leadiden,
            productId:this.prodiden,
            Title : this.title,
            Gender : this.formDat.Gender,
            NomineeName  : this.nomineename,
            DateofBirth  : this.nomineendob,
            RelationshipofnomineewithLA  : this.nomineeRelationship,
            MobileNo  :parseInt(this.mobileno),
            EmailID  : this.emailid,
            IstheNomineeaddresssameasLA  : this.nomineeSame,
            WilltheNomineeDetailsbesameasaboveforPlan2  : this.ndet,
            DoyouwanttoaddanotherNominee  : this.anotherNominee,
            Gender_n  : this.formDat.Gender_n,
            Title_n : this.appointeetitle,
            NomineeName_n  : this.nomineename1,
            DateofBirth_n  : this.birthDate2,
            RelationshipofnomineewithLA_n  : this.nomineeRelationship2,
            IstheAppointeeaddresssameasNominee  : this.apointeeAdd,
            DoyouwanttoaddanotherAppointee  : this.anotherApointee,
            AdvisorPlace		: this.advisorPlace, 
                }

                console.log(formData)
                  //  me.$store.commit('ADD_APPFORMDATA',[{formData}],'nomineeDetails') 
                        me.$store.commit('ADD_APPFORMDATA',{nomineeDetails: formData})
                    me.$router.push('/master/testpro/proposalfamily')
     
}  ,
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
  /*Button Arrow CSS*/
.mt-20{
margin-top:20px
}
.mt-10{
margin-top:10px
}
    .radio-margin-top{
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

  .row {
    flex-direction: column
  }
  .mb-30{
    margin-top:17px;
  }
  .mb-15{
margin-top:13px;
  }

  .card-proposal-nominee{
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
    font-weight: bold;
    font-family:robotoregular;

  }
  .prop-nominee-card-title-border {
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
    .nomni-detl-border-padding{
      width:210px;
    }
     .adv-detl-border-padding{
      width:210px;
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
    border-width: 1px;
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
    border-width: 2px;
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

  .nominee-md-btn-width {
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
    margin-left: 10px;
    flex-direction: row;
    justify-content: flex-start;
  }

  .example1 {

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

  .table-row-nominee {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }
      .table-row-nominee-heading {
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
    padding: 8px 0px;
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

  .table-row-nominee-col-details {
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

  .nominee-page-flx-row {
	  flex-direction:row;
	  padding: 12px;
	  margin-bottom:10px;
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
    /* .ml-20 {
        margin-left: 20px;
   } */


  @media only screen and (min-width: 320px) {
     /*Gender Button CSS*/
         .gender-spacing{
                  margin-top:10px;
              }
        .radio-margin-top{
        margin-top: 15px;
    }
    .mt-20{
margin-top:0px
}
.mt-10{
margin-top:0px
}
.mobile-top-20{
  margin-top:20px
}
              .table-row-nominee {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;
    }
      .card-proposal-nominee{
             border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


  }
    .input-drop {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            padding-left:28px;
            /* margin-bottom: 20px; */
            color: #666666;
            border-width: 1px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family: robotoregular;
        }
        .ml-20 {
            margin-left: 0px;
        }
      .nomni-detl-border-padding{
      width:115px;
    }
     .adv-detl-border-padding{
      width:107px;
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
    .table-row-nominee-col-details {
      margin-left: 0px;
    }
    .table-head-row {
      flex: 0.9;
    }
    .form-title {
      font-size: 14px;
      padding-top: 10px;
      color: #9d9d9d;
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
      border-width: 1px;
      border-top: none;
      border-style: solid;
      border-top-color: #fff;
      border-right-color: #fff;
      border-left-color: #fff;
      border-bottom-color: #c7c7c7;
      placeholder-color: #9d9d9d;
      font-family:robotoregular;



    }
    .table-row-nominee {
      flex-direction: column;
    }
    .table-row-nominee-col-details {
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
    .nominee-md-btn-width {
      width: 50%;
    }
  }

  @media only screen and (min-width: 768px) {
     /*Gender Button CSS*/
         .gender-spacing{
                  margin-bottom:4px;
                    margin-top:0px;
              }
        .radio-margin-top{
        margin-top: 7px;
    }
    
    .mobile-top-20{
  margin-top:0px
}
 .desktop-top-5{
            margin-top:5px
        }
         .desktop-top-15{
            margin-top:15px
        }
    .card-proposal-nominee{
                  margin:10px;
}
              .table-row-nominee {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }
    .form-title {
      font-size: 14px;
      padding-top: 0px;
      padding-bottom:6px;
      color: #9d9d9d;
      font-family:robotoregular;
    }
    .heading {
      font-size: 15px;
      padding-top: 20px;
      padding-bottom:05px;
      font-weight: bold;
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
      placeholder-color: #9d9d9d;
      font-family:robotoregular;



    }
    .table-row-nominee {
      flex-direction: row;
    }
    .table-row-nominee-col-details {
      margin-left: 30px;
    }
    .mail-row {
      flex-direction: row;
      flex: 2;
    }
    /* .btn-space {
      justify-content: space-around;
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
    .switch-row {
      flex: 2;
    }
    .nominee-md-btn-width {
      width: 30%;
    }

	.nominee-page-flx-row {
		flex-direction:row;
		padding: 12px;
		margin-bottom:20px;
	}

  }

  @media only screen and (min-width: 992px) {
                /* .container {
                  max-width: 1024px;
              }
              .card-proposal{
                  min-width: 290px;
              }
              .scroller {
                  align-items: center
              } */
	.nominee-md-btn-width {
      width: 15%;
    }
              }
</style>