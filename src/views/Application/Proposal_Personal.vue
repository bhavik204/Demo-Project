<template>

    <div class="wrapper" style="background-color:#f7f7f7;">
      <!-- <application-tab :tabs="tabs" :counter="counter"></application-tab> -->
     
                <!-- <prop-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></prop-header> -->


                <div class="side-container page-animation"  ref="pagewrap"  style="flex:2">
                <!-- <div  class="main-conatiner" style="flex-direction:row"> -->
               
          
                      <div class="card-proposal-personal">
                        <div class="heading-radio-padding">
                            <div style="flex-direction:row" class="table-row-proposal-heading">
                            <div >
                                <div style="flex:2">
                                    <div>
                                        <text class="form-title" >Is Proposer and Life to be Assured the same?</text>
                                    </div>
                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">
                                        <div>
                                            <switch @change="onchange"></switch>
                                        </div>
                                        <text class="form-title">{{check}}</text>

                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction: row;" class="radio-margin-top radio-desktop">

                                        <input type="radio" checked class="cursor-pointer-globle" name="proposer" v-model="propagree" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" name="proposer" v-model="propagree" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>
   
                        </div>
                        
                        </div>
                    </div>
                    <div class="card-proposal-personal" >


                        
                       <div class="table-row-proposal-heading" style="flex-direction: column;">
                           <div class="">
                            <text  class=" heading card-title-border life-proposal-width " style="padding:05px" >Life To Be Assured</text>
                           </div>
                        </div>

                        <div class="table-row-proposal mobile-top-20 mt-20" style="flex-direction: column;">
                            <text class="heading">Aadhar Card Details</text>
                        </div>
                        <div class="table-row-proposal" style="flex-direction: column;">
                            <!-- <text class="form-title">Aadhar card-proposalNumber</text>
                            <input class="input" v-model="aadharNo" type="text" style="width:50%" /> -->
                     <div class="table-row-proposal-details mt-20 mobile-top-20" style="width:50%">
                           <vx-input-box
                                             vx-label="Aadhar Card Number"
                                             vx-placeholder="Enter Aadhar Card Number"
                                             vx-type="tel"
                                             :vx-model="aadharNo"
                                               @valueReading="aadharNo=$event.value">
                                            </vx-input-box>
                     </div>
                            <div class="box pers-posal-md-btn-width-submit" style="padding-top:10px;">
                                <!-- <div class="md-custom-btn btn-color cursor-pointer-globle">
                                    <text class="md-btn-label cursor-pointer-globle" style="color:white">Submit</text>
                                </div> -->
                                <div  class="  ">
                            				<p-button 
                                             btn-name="Submit"
                                            btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"></p-button>
								</div>
                            </div>
                            <div class="table-head-row mobile-top-20" style="margin-top:20px;">
                                <text style="flex:1; font-weight:bold" class="form-title" :style="{color: '#000000'}">Consent For Aadhar Authentication</text>
                            </div>
                            <div style="padding: 10px;padding-left:0">
                                 <text class="form-title para-line-height">I, the holder of Aadhar number xxxxxxxx, hereby give my consent to ABC Nippon Life Insurance to obtain my Aadhar Number,Name and Fingerprints/Iris details for authentication with UIDAI.ABC Nippon Life Insurance has informed me that my identity information would only be used for life insurance proposal and also informed that my biometrics will not be stored/shared and will be submitted to CIDR only for the purpose of authentication.
                                </text>
                            </div>
                           

                            <wxc-checkbox v-if="platform !== 'Web'" title="I agree with the consent mentioned above" :disabled="false" :checked="true"></wxc-checkbox>

                            <div v-if="platform == 'Web'" style="flex-direction: row;margin-top:15px;">
                                <input type="checkbox" v-model="agree" class="cursor-pointer-globle">
                                <text class="chkbox-title">I agree with the consent mentioned above</text>
                            </div>

                        </div>


                        <div class="table-row-proposal cursor-pointer-globle">
                            <div style="flex-direction:column;flex:1" class="table-row-proposal-details mobile-top-20 mt-20 ml-20 cursor-pointer-globle">
                                <text  class="form-title ">Title</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="titleType">{{value}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="titles" class="cursor-pointer-globle"  @change="titleDropValue(formDat.Title)">
                                           <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in titleWeb">{{calc}}</option>
                                    </select>
                                    <!-- <text  class="form-title" v-if="titleactive == true">{{titleErrorMsg}}</text> -->
                                </div>
                            </div>

                            <div class="table-row-proposal-col-details mt-20 mobile-top-20 " style="flex-direction:column;flex:1;">
                                <!-- <text class="form-title">Full Name</text>
                                <input class="input" v-model="name" type="text" style="flex:1" /> -->
        <div class="mt-20 desktop-top-5">
         <vx-input-box
                                             vx-label="Full Name"
                                             :hasRequired="true"
                                            message="Please Enter Name"
                                             vx-placeholder="Enter Full Name"
                                             :vx-model="FullName"
                                               @valueReading="FullName=$event.value">
                                            </vx-input-box>
        </div>
                            </div>
                        </div>

                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details  mobile-top-20">
                                <!-- <text class="form-title">Fathers Full Name</text>
                                <input class="input" v-model="fname" type="text" style="flex:1" /> -->
                                   <div class="mt-10">
                                    <vx-input-box
                                             vx-label="Fathers Full Name"
                                                 :hasRequired="true"
                                                   message="Please Enter Fathers Name"
                                             vx-placeholder="Enter Fathers Full Name "
                                             :vx-model="fathername"
                                               @valueReading="fathername=$event.value">
                                            </vx-input-box>
                                   </div>
                            </div>

                            <div style="flex-direction:column;flex:1;" class="table-row-proposal-col-details mobile-top-20 ml-20 cursor-pointer-globle">
                                <div class="mt-10">
                                <text style="flex:1" class="form-title ">Gender</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="genderType">{{value1}}</text>
                                  <div class="gender-spacing" v-if="platform == 'Web'">
                <gender-view @selectedGender="genderSel" v-model="formDat.Gender" ></gender-view>
                              </div>
                                <!-- <div v-if="platform === 'Web'">
                                    <div style="flex-direction: row" class="radio-desktop">

                                        <input type="radio" class="cursor-pointer-globle" v-model="gen" name="riders" value="Male" />
                                        <label class="radio-title" style="margin-left:10px;">Male</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="gen" name="riders" value="Female" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">Female</label>
                                    </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mobile-top-20 desktop-top-5 mt-20 ml-20">
                                <text  class="form-title ">Martial Status</text>
                                <text v-if="platform !== 'Web'" class="input-drop cursor-pointer-globle" style="flex:1" @click="martialType">{{value2}}</text>
                                <div class="drop-down cursor-pointer-globle" v-if="platform == 'Web'">
                                    <select class="cursor-pointer-globle" v-model="martial">
                                           <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in martialWeb">{{calc}}</option>
                                    </select>
                                </div>
                            </div>
                            <div style="flex-direction:column;flex:1;" class="table-row-proposal-col-details mobile-top-20 mt-20 ml-20">
                                <!-- <text class="form-title ">Date of Birth of Life Assured</text>
                                <input v-model="assuredDate" type="date" placeholder="Input Date" class="input-drop" max="2070-12-12" /> -->
                                         <div class="mt-20 desktop-top-5">
                                        <vx-input-box
                                            vx-type="date"
                                             vx-label="Date of Birth of Life Assured"
                                               message="Please enter date of birth"
                                                :hasRequired="true"
                                             vx-placeholder="Enter Date of Birth of Life Assured"
                                             :vx-model="DateofBirth"
                                               @valueReading="DateofBirth=$event.value">
                                            </vx-input-box>
                            </div>
                            </div>
                        </div>
                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mobile-top-20  ml-20">
                                <text style="flex:1" class="form-title">Nationality</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="nationality">{{value3}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="national" class="cursor-pointer-globle">
                                           <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in nationalityWeb">{{calc}}</option>
                                    </select>
                                </div>
                            </div> 
                        

                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mobile-top-20 ml-20">
                                 <div class="mt-20">
                                <text style="flex:1" class="form-title">Education</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="educationData">{{value4}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="education" class="cursor-pointer-globle">
                                           <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in educationListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-10 mobile-top-20">
                                <!-- <text class="form-title">Source of Income</text>
                                <input v-model="sincome" class="input" type="text" style="flex:1" /> -->
                                      <div class="mt-20">
                                     <vx-input-box
                                     vx-type="tel"
                                             vx-label="Source of Income"
                                             vx-placeholder="Enter Source of Income "
                                             :vx-model="sourceofincome"
                                               @valueReading="sourceofincome=$event.value">
                                            </vx-input-box>
                                      </div>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20  mobile-top-20">
                                <!-- <text class="form-title">Annual Income</text>
                                <input v-model="aincome" class="input" type="tel" style="flex:1" /> -->
                                   <div class="desktop-top-10">
                                    <vx-input-box
                                    vx-type="tel"
                                             vx-label="Annual Income"
                                             vx-placeholder="Enter Annual Income "
                                             :vx-model="annualincome"
                                               @valueReading="annualincome=$event.value">
                                            </vx-input-box>
                                   </div>
                            </div>
                        </div>

                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-10 mobile-top-20">
                                <!-- <text class="form-title">Purpose Of Insurance</text>
                                <input v-model="purpose" class="input" type="text" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Purpose Of Insurance"
                                             vx-placeholder="Enter Purpose Of Insurance "
                                             :vx-model="purpose"
                                               @valueReading="purpose=$event.value">
                                            </vx-input-box>
                            </div>

                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mobile-top-20 mt-10 ml-20">
                                <text class="form-title">Occupation</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="occupationData">{{value5}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="occupation" class="cursor-pointer-globle">
                                            <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in occupationListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20 ">
                                <!-- <text class="form-title">Job Description</text>
                                <input v-model="job" class="input" type="text" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Job Description"
                                             vx-placeholder="Enter Job Description "
                                             :vx-model="jobdescription"
                                               @valueReading="jobdescription=$event.value">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20 ">
                                <!-- <text class="form-title">Nature Of Duties</text>
                                <input v-model="duties" class="input" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Nature Of Duties"
                                             vx-placeholder="Enter Nature Of Duties "
                                                message="Please enter nature of duties"
                                                :hasRequired="true"
                                             :vx-model="natureofduties"
                                               @valueReading="natureofduties=$event.value">
                                            </vx-input-box>
                            </div>
                        </div>

                        <div class="table-row-proposal" style="flex:2">
                            <div style="flex:1" class="" >
                                <div style="flex:2" class="mobile-top-20 mt-10">
                                    <div>
                                        <text class="form-title">Are you ABC Group employee</text>
                                    </div>
                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">
                                        <div>
                                            <switch @change="onchange1"></switch>
                                        </div>
                                        <text class="form-title">{{check1}}</text>
                                    </div>
                                </div>
                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction: row;" class="radio-margin-top">
                                        <input type="radio" class="cursor-pointer-globle" name="employed" v-model="employ" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" name="employed" v-model="employ" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>
                                    </div>
                                </div>
                            </div>
                            <div v-if="employ == 'Yes'"  class="table-row-proposal-col-details mobile-top-20  " style="flex:1">
                               <div  class="  mobile-top-20 ">
                                    <vx-input-box
                                             vx-label="Employee ID"
                                                message="Please enter Employee ID"
                                                :hasRequired="true"
                                             vx-placeholder="Enter Employee ID "
                                             :vx-model="employeeid">
                                            </vx-input-box>
                                </div>
                            </div>
                        </div>
                        <div style="flex-direction:row;padding-top:10px;" class="table-row-proposal ">
                            <div>
                                <div  style="flex:2" class="desktop-top-15">
                                    <div class="ml-20 mt-20 mobile-top-20">
                                        <text class="form-title"> Opting for ECS?</text>
                                    </div>
                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">
                                        <div>
                                            <switch @change="onchange2"></switch>
                                        </div>
                                        <text class="form-title">{{check2}}</text>

                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" style="flex:1" >
                                    <div style="flex-direction: row;" class="radio-margin-top">

                                        <input type="radio" class="cursor-pointer-globle" v-model="ecs" name="opting" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="ecs" name="opting" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>

                        </div>


                        <div style="flex-direction:row" class="table-row-proposal">
                            <div style="flex-direction: column;flex:0.5" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text style="flex:1" class="form-title">PAN card-proposalNo.</text>
                                <input class="input" v-model="pan" type="text" style="flex:0.5" /> -->
                                   <div class="desktop-top-10">
                                    <vx-input-box
                                             vx-label="PAN card"
                                                message="Please enter valid PAN No"
                                                :hasRequired="true"
                                             vx-placeholder="Enter PAN card No "
                                             :vx-model="pancard"
                                               @valueReading="pancard=$event.value">
                                            </vx-input-box>
                                   </div>
                            </div>
                        </div>

                        <div class="table-row-proposal mobile-top-20" style="flex-direction: column;">
                            <text class="heading bank-proposal-width bank-border-width" style="padding:5px">Bank Details</text>
                        </div>
                        <div class="table-row-proposal">
                            <div class="mobile-top-20">
                            <text class="form-title">(Manadatory only in case if premium is >= 25000)</text>
                            </div>
                        </div>

                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Bank Account No</text>
                                <input v-model="account" class="input" type="text" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Bank Account No"
                                             vx-placeholder="Enter Bank Account No "
                                             :vx-model="bankaccount"
                                               @valueReading="bankaccount=$event.value">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">IFSC Code</text>
                                <input v-model="ifsc" class="input" type="tel" style="flex:1" /> -->
                                  
                                   <vx-input-box
                                             vx-label="IFSC Code"
                                             vx-placeholder="Enter IFSC Code "
                                             :vx-model="ifsccode"
                                               @valueReading="ifsccode=$event.value">
                                            </vx-input-box>
                           </div>
                        </div>



                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-10 mobile-top-20">
                                <!-- <text class="form-title">Bank Name</text>
                                <input v-model="bankName" class="input" type="text" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Bank Name"
                                             vx-placeholder="Enter Bank Name "
                                             :vx-model="bankname"
                                               @valueReading="bankname=$event.value">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Bank Branch</text>
                                <input class="input" v-model="bBranch" type="tel" style="flex:1" /> -->
                                   <div class="">
                                    <vx-input-box
                                             vx-label="Bank Branch"
                                             vx-placeholder="Enter Bank Branch "
                                             :vx-model="branchname"
                                               @valueReading="branchname=$event.value">
                                            </vx-input-box>
                                   </div>
                            </div>
                        </div>


                        <div style="flex-direction: column;flex:1;" class="table-row-proposal bank-acc-personal-width mobile-top-20 ml-20">
                            <text style="flex:1" class="form-title ">Bank Account Proof</text>
                            <text v-if="platform !== 'Web'" class="input-drop" style="flex:0.5" @click="accountProof">{{value6}}</text>
                            <div class="drop-down" v-if="platform == 'Web'">
                                <select v-model="accproof" class="cursor-pointer-globle">
                                    <option value="">Select</option>
                                    <option class="dropdown-opt" v-for="calc in accountProofWeb">{{calc}}</option>
                                </select>
                            </div>
                        

                        </div>
                        <div class="table-row-proposal mobile-top-20"  style="flex-direction: column;">
                            <text class="heading mailing-border-width" style="padding:05px">Mailing Address</text>
                        </div>
                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Address Line 1</text>
                                <input class="input" v-model="add1" type="text" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Address Line 1"
                                                message="Please enter valid Address"
                                                :hasRequired="true"
                                             vx-placeholder="Enter Address Line 1 "
                                             :vx-model="add1"
                                               @valueReading="add1=$event.value">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Address Line 2</text>
                                <input class="input" v-model="add2" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Address Line 2"
                                             vx-placeholder="Enter Address Line 2 "
                                             :vx-model="add2"
                                               @valueReading="add2=$event.value">
                                            </vx-input-box>
                            </div>
                        </div>




                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details  mobile-top-20 ml-20">
                                <text style="flex:1" class="form-title">State</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="state">{{value7}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="state" class="cursor-pointer-globle" >
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in stateListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>

                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20 ml-20">
                                <text style="flex:1" class="form-title">City</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="city" class="cursor-pointer-globle">
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in cityListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Pin Code</text>
                                <input v-model="pincode" class="input" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Pin Code"
                                                message="Please enter valid Pincode"
                                                :hasRequired="true"
                                             vx-placeholder="Enter Pin Code "
                                             :vx-model="personalpincode"
                                               @valueReading="personalpincode=$event.value">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Email ID</text>
                                <input class="input" v-model="email" type="email" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Email ID"
                                                message="Please enter valid Email ID"
                                                :hasRequired="true"
                                             vx-placeholder="Enter Email ID "
                                             :vx-model="EmailID"
                                               @valueReading="EmailID=$event.value">
                                            </vx-input-box>
                            </div>

                        </div>


                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Mobile No</text>
                                <input class="input" v-model="mobile" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Mobile No"
                                                message="Please enter valid Mobile No without any country code or 0"
                                                :hasRequired="true"
                                             vx-placeholder="Enter Mobile No "
                                             :vx-model="mobileno"
                                               @valueReading="mobileno=$event.value">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Landline No</text>
                                <input class="input" v-model="landline" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Landline No"
                                             vx-placeholder="Enter Landline No "
                                             :vx-model="personallandline"
                                               @valueReading="personallandline=$event.value">
                                            </vx-input-box>
                            </div>



                        </div>
                        <div class="table-row-proposal mobile-top-20" style="flex-direction: column;">
                            <text class="heading mailing-border-width-big " style="padding:05px">Permanent Address </text>
                        </div>
                        <div class="maling-adrs-box table-row-proposal">
                            <div >
                                <div class="mail-row mt-20 mobile-top-20">
                                    <div>
                                        <text class="form-title"> Is Your Permarent address same as Mailing address?</text>
                                    </div>
                                    <div class="example" v-if="platform !== 'Web'">
                                        <div>
                                            <switch @change="onchange3" ></switch>
                                        </div>
                                        <text class="form-title">{{check3}}</text>

                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction: row;" class="radio-margin-top">

                                        <input type="radio" class="cursor-pointer-globle" v-model="permarentMail"   name="mailing" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="permarentMail"  name="mailing" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                                  

                        </div>
                         


                        <!-- <div   style=" flex-direction:row;justify-content:space-evenly;margin-top: 30px;padding:30px;">
                           <div class="card-btn1"  >
                                 <text class="card-btn-text" >Previous</text>
                                 </div>
                           <div class="card-btn1" >
                                 <text class="card-btn-text" >Proceed</text>
                                 </div>
                               </div> -->
                    </div>

               
                    <div v-if="permarentMail == 'No'"  >
                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Address Line 1</text>
                                <input class="input" v-model="add1" type="text" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Address Line 1"
                                             vx-placeholder="Enter Address Line 1 "
                                             :vx-model="add1">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Address Line 2</text>
                                <input class="input" v-model="add2" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Address Line 2"
                                             vx-placeholder="Enter Address Line 2 "
                                             :vx-model="add2">
                                            </vx-input-box>
                            </div>
                        </div>




                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details  mobile-top-20 ml-20">
                                <text style="flex:1" class="form-title">State</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="state">{{value7}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="stateData" class="cursor-pointer-globle" >
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in stateListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>

                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20 ml-20">
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

                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Pin Code</text>
                                <input v-model="pincode" class="input" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Pin Code"
                                             vx-placeholder="Enter Pin Code "
                                             :vx-model="pincode">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Email ID</text>
                                <input class="input" v-model="email" type="email" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Email ID"
                                             vx-placeholder="Enter Email ID "
                                             :vx-model="email">
                                            </vx-input-box>
                            </div>

                        </div>


                        <div class="table-row-proposal">
                            <div style="flex-direction: column;flex:1" class="table-row-proposal-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Mobile No</text>
                                <input class="input" v-model="mobile" type="tel" style="flex:1" /> -->
                                    <vx-input-box
                                             vx-label="Mobile No"
                                             vx-placeholder="Enter Mobile No "
                                             :vx-model="mobile">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction: column;flex:1;" class="table-row-proposal-col-details mt-20 mobile-top-20">
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
        
                    </div>
                <div v-if="platform === 'Web'" class="card-proposal-personal  btn-space pro-perso-flx-row" style="margin-bottom:20px">
                        <div class="box pers-posal-md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/master/testapp')">
                                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"/>
                                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                            </div> -->
                             <div class="btn-space">
                                <div  class=""
                                @click.native="jump('/master/testapp')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                        </div>
                        <div class="box pers-posal-md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="submitData()">
                                <text class="md-btn-label cursor-pointer-globle" style="color:white">Proceed</text>
                                <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                            <div  class=""
                                @click.native="submitData()">
									<p-button icon-side="right" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed"></p-button>
								</div>
                        </div>
                    </div>
                    <div  v-if="platform !== 'Web'" class="card-proposal-personal btn-space pro-perso-flx-row" style="margin-bottom:20px">
                        <div class="box pers-posal-md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/master/testapp')">
                                <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"/>
                                <text class="md-sec-btn-label ">Previous</text>
                            </div> -->
                             <div class="btn-space">
                                <div  class=""
                                @click.native="jump('/master/testapp')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                        </div>
                        <div class="box pers-posal-md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color" @click="submitData()">
                                <text class="md-btn-label card-subtitle">Proceed</text>
                                <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                            <div  class=""
                                @click="submitData()">
									<p-button 
                                    btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" 
                                    btn-name="Proceed"
                                    icon-side="right"></p-button>
								</div>
                        </div>
                    </div>

                <!-- </div> -->
            
    </div>
    </div>
</template>

<script>
    // import applicationTab from './ApplicationTab.vue'
        import mainTab from '../../components/Tabs/MainTab.vue'
    // import applicationTab from './ApplicationTab.vue'
    import sideTab from '../../components/Tabs/SideTab.vue'
       import applicationTab from '../../components/Tabs/HeaderTab.vue'
    import appHeader from '../../components/Application/AppHead.vue'
    import propHeader from '../../components/Proposal/ProposalHeader.vue'
    import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
    import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
    import SButton from "../.././components/vx-primary-button/vx-scondary-button";         
    
    // import propHeader from '../../components/Tabs/SideTab.vue'
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
     const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    var storage = weex.requireModule('storage');
    import { WxcRadio } from 'weex-ui'
    import { WxcCheckbox, WxcCheckboxList } from 'weex-ui'
       import genderView from '../../components/GenderView/genderView.vue';
    import util from '../../assets/util';
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
                me.formDat = me.form[0].personalDetails
                console.log('Proposal', me.formDat)                             
                // for(var i=0;i <me.form.length;i++)
                // {
                //   console.log(me.form[i].personalDetails)
                //  me.formDat = me.form[i].personalDetails
                //   this.leadiden = me.form[i].leadId._id
                //   this.prodiden = me.form[i].productId
                //   console.log(me.formDat)
                // }
                  this.leadiden = me.form[0].leadId._id
                  this.prodiden = me.form[0].productId
                  this.aadharNo=me.formDat.AadharCardNumber
                  this.titles = me.formDat.Title
                  this.FullName=me.formDat.FullName
                  this.fathername=me.formDat.FathersFullName
                  this.martial = me.formDat.MaritalStatus
                  this.national = me.formDat.Nationality
                  this.education = me.form.Education
                  this.DateofBirth=me.formDat.DateofBirth
                  this.sourceofincome=me.formDat.SourceOfIncome
                  this.annualincome=me.formDat.AnnualIncome
                  this.purpose=me.formDat.PuposeOfInsurance
                  this.occupation =me.formDat.Occupation
                  this.jobdescription=me.formDat.JobDescription
                  this.natureofduties=me.formDat.NatureofDuties
                  this.employ = me.formDat.AreyouABCGroupemployee
                  this.ecs = me.formDat.OptingforECS
                  this.pancard=me.formDat.PANCardNo
                  this.bankaccount=me.formDat.BankAccountNo
                  this.ifsccode=me.formDat.IFSCCode
                  this.bankname=me.formDat.BankName
                  this.branchname=me.formDat.BankBranch
                  this.address1=me.formDat.AddressLine1
                  this.address2=me.formDat.AddressLine2
                  this.stateData = me.formDat.State
                  this.cityData = me.formDat.City
                  this.personalpincode=me.formDat.PinCode
                  this.EmailID=me.formDat.EmailID
                  this.mobileno=me.formDat.MobileNo
                  this.personallandline=me.formDat.LandlineNo
                  this.permarentMail = me.formDat.IsyourPermanentaddresssameasmailingaddress
               // }
                 console.log(this.aadharNo)
          
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
    

            }
            

    
            

                               


        },

       
        components: { WxcCheckbox, 
        WxcCheckboxList, 
        appHeader, propHeader, 
        applicationTab, 
        vxInputBox,
        PButton,
        SButton,
        mainTab,
        sideTab,
        genderView },
      
        data() {
            return {
            titleactive : false,
                titleErrorMsg:'',
                 form:[],
                formDat:{},
                leadiden:'',
                prodiden:'',
                check: 'No',
                check1: 'No',
                check2: 'No',
                check3: 'No',
                rider:'',
                propagree:true,
                aadharNo:'',
                agree:'',
                titles:'',
                name:'',
                fname:'',
                gen:'',
                martial:'',
                assuredDate:'',
                national:'',
                education:'',
                sincome:'',
                aincome:'',
                purpose:'',
                occupation:'',
                job:'', 
                duties:'',
                employ:'',
                ecs:'',
                pan:'',
                account:'',
                ifsc:'',
                bankName:'',
                bBranch:'',
                accproof:'',
                add1:'',
                add2:'',
                stateData:'',
                cityData:'',
                pincode:'',
                email:'',
                mobile:'',
                landline:'',
                permarentMail:'',
                checkAgree:'',
                showfield:'false',
                 headerName: 'Proposal Fulfilmemt',
                platform: invalid,
                deviceWidth: invalid,
                FullName:'',
                fathername:'',
                DateofBirth:'',
                sourceofincome:'',
                annualincome:'',
                purpose:'',
                JomoplatoscopyobDescription:'',
                natureofduties:'',
                pancard:'',
                bankaccount:'',
                ifsccode:'',
                bankname:'',
                branchname:'',
                address1:'',
                address2:'',
                personalpincode:'',
                EmailID:'',
                mobileno:'',
                personallandline:'',

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
                titleWeb: ["Mr", "Mrs", "Dr", "Prof"],
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
genderSel(e){
        this.formDat.Gender = e.value
     
},
// titleDropValue(dt){
//  if(dt=''){
//      this.titleactive = true
//      this.titleErrorMsg = "Please Enter a value"
//  }
//  else{
//      this.titleactive =false
//  }
// },
            
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
                    this.employ = 'Yes'
                }
                else {
                    this.check1 = 'No'
                    this.employ = 'No'
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
                    this.permarentMail = 'Yes'
                }
                else {
                    this.check3 = 'No'
                    this.permarentMail = 'No'
                    
                }
            },
            
        beforeRouteLeave(to, form, next) {

                    var  me= this ;
                  const  personalDetails = ''

                const formData = {
                    userId:me.$store.state.agentDetails._id,
                    leadId:this.leadiden,
                    productId:this.prodiden,
                    IclocksProposerandLifetobe: this.propagree,
                    Astadholdershipadhar: this.aadharNo,
                    IuntimberedAgreecheckbox : this.checkAgree,
                    Tethmopalatineitle : this.titles,
                    FbranchiurousullName : this.FullName,
                    FcrozzlyathersFullName : this.fathername,
                    Gzoosporangiophoreender : this.formDat.Gender,
                    MtenuisaritalStatus : this.martial,
                    DphaneroscopeateofBirth : this.formDat.DateofBirth,
                    NZarathustrianismationality : this.national,
                    Eexuviationducation : this.education,
                    SmesepisternumourceOfIncome: this.sourceofincome,
                    AchurchwardnnualIncome : parseInt(this.annualincome),
                    PsmokeryuposeOfInsurance : this.purpose,
                    Odaityaccupation : this.occupation,
                    JomoplatoscopyobDescription : this.job,
                    JomoplatoscNatureofDuties : this.duties,
                    AbuzzerreyouABCGroupemployee: this.employ, 
                    OunimucronateptingforECS : this.ecs,
                    PblackbackANCardNo : this.pan,
                    BpeddleankAccountNo : this.account,
                    IsaddlebagFSCCode : this.ifsc,
                    BpreternaturalistankName : this.bankName,
                    BacanthodianankBranch : this.bBranch,
                    BpantomimistankAccountProof : this.accproof,
                    AsmellingddressLine1 : this.add1,
                    AbatwingddressLine2 : this.add2,
                    Sgalumphtate : this.stateData,
                    CUmbellulidaeity : this.cityData,
                    PperiproctousinCode : this.pincode,
                    EsilverskinmailID : this.formDat.EmailID,
                    MartarobileNo :parseInt(this.formDat.MobileNo),
                    LrediscussionandlineNo : this.landline,
                    Isynecdochicallysyour: this.permarentMail,
                }

                

                console.log(formData)
                //   me.$store.dispatch('ADD_APPDATA', {personalDetails: formData})
                //   me.$store.commit('ADD_APPFORMDATA',[{formData}],'personalDetails') 
                    me.$router.push('/master/testpro/proposalnominee')
                  next();
        },
            submitData(){
                var  me= this ;
                  const  personalDetails = ''

                const formData = {
                    userId:me.$store.state.agentDetails._id,
                    leadId:this.leadiden,
                    productId:this.prodiden,
                    IsProposerandLifetobeAssuredthesame: this.propagree,
                    AadharCardNumber: this.aadharNo,
                    IAgreecheckbox : this.checkAgree,
                    Title : this.titles,
                    FullName : this.FullName,
                    FathersFullName : this.fathername,
                    Gender : this.formDat.Gender,
                    MaritalStatus : this.martial,
                    DateofBirth : this.DateofBirth,
                    Nationality : this.national,
                    Education : this.education,
                    SourceOfIncome: this.sourceofincome,
                    AnnualIncome : parseInt(this.annualincome),
                    PuposeOfInsurance : this.purpose,
                    Occupation : this.occupation,
                    JobDescription : this.jobdescription,
                    NatureofDuties : this.natureofduties,
                    AreyouABCGroupemployee: this.employ, 
                    OptingforECS : this.ecs,
                    PANCardNo : this.pancard,
                    BankAccountNo : this.bankaccount,
                    IFSCCode : this.ifsccode,
                    BankName : this.bankname,
                    BankBranch : this.branchname,
                    BankAccountProof : this.accproof,
                    AddressLine1 : this.add1,
                    AddressLine2 : this.add2,
                    AddressLine3: '',

                    State : this.stateData,
                    City : this.cityData,
                    PinCode : this.personalpincode,
                    EmailID : this.EmailID,
                    MobileNo :parseInt(this.mobileno),
                    LandlineNo : this.personallandline,
                    IsyourPermanentaddresssameasmailingaddress: this.permarentMail,
                }

                console.log(formData)
                //   me.$store.dispatch('ADD_APPDATA', {personalDetails: formData})
                //   me.$store.commit('ADD_APPFORMDATA',[{formData}],'personalDetails') 
                  me.$store.commit('ADD_APPFORMDATA',{personalDetails: formData}) 
                  console.log('Adhar Card No',  this.aadharNo);
                    me.$router.push('/master/testpro/proposalnominee');

                me.$store.commit('AADHAR', formData.AadharCardNumber);
            },

             showfieldfunction(id)
            {
                switch(id)
                {
                    case 'YES':
                        this.showfield=true
                    break;
                    case 'NO':
                        this.showfield=false
                    break;
                }
                
            },
            wxcCheckBoxListChecked(e) {
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
            educationData() {
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
            occupationData() {
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

<style>
/* .ml-20 {
    margin-left: 20px;
} */

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
.mt-10{
  margin-top:10px  
}
      .radio-margin-top{
        margin-top: 7px;
    }
    .fontfam{
        font-family:robotoregular;
        font-size:14px;
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

    .scroller-personal {
        /* background-color: #f7f7f7; */
    }

    .row {
        flex-direction: column
    }
    .card-proposal-personal{
            margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;

    }
    .heading-radio-padding{
        /* padding-top:12px; */
        padding-bottom:12px;
        padding-right:12px;
    }

    .card-subtitle {
        font-size: 22px;
        color: white;
        
    }

    .main-heading {
        font-size: 15px;
        padding-top: 20px;

        font-family: robotoregular;
    }

    .heading {
        font-size: 25px;
        padding-top: 20px;
        /* padding-bottom:15px; */
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
        padding-left: 3px;
        padding-right: 3px;
        flex: 2;
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
        /* flex-direction: row; */
        justify-content: center;
        align-items: center;
        /* border-radius: 2px;
        height: 80px;
        min-width: 88px;
        position: relative; */
        
    }

    .md-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        
        color: #fff;
    }

    .md-sec-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        
        color: #000;
    }

    .md-custom-btn:active {
       opacity:0.8;
    }

    .pers-posal-md-btn-width {
        width: 300px;
    }
    .pers-posal-md-btn-width-submit{
        width:300px;
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
    }

    .card-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: robotoregular;
    }

    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family: robotoregular;
        /*font-family: Helvetica-medium;*/
    }

    .image {
        width: 500px;
        height: 500px;
    }

    .consent {
        /* white-space: normal; */
    }

    .form-title {
        font-size: 24px;
        padding-top: 10px;
        font-family: robotoregular;
        color: #9d9d9d;
    }

    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        font-family: robotoregular;
        color: #9d9d9d;
    }

    .radio-title {
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
        font-family: robotoregular;
    }
    .table-row-proposal {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        flex-direction: column


    }
      .table-row-proposal-heading {
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
        font-family: robotoregular;
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

    .table-row-proposal-col-details {
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
        font-family: 'Roboto-bold';
        margin-left: 20px;
        font-size: 13px;
        color: #565656;
    }

    .card-heading {
        padding: 10px;
        font-size: 14px;
        font-family: 'Roboto-bold';
        color: #3b371e;
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

    .cnt-details-vx-main
    {
        margin-left: 20px;
        margin-bottom: 20px;
        margin-right: 10px;
        
    }

    /* -------------Footer by Ashraf--------------------- */

    .pro-perso-flx-row {
        flex-direction: row;
        padding: 12px;
    }
    .maling-adrs-box {
        margin-bottom: 20px;
    }
    .para-line-height {
        line-height: 1.5;
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
    .life-proposal-width{
            width: 242px;
    }
.bank-border-width{
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
.bank-proposal-width{
      width: 159px;
}
.mailing-border-width{
           border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 4px;
        border-bottom-color: #3b371e;
        width: 204px;
        font-weight: bold;
}
.mailing-border-width-big {
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 4px;
        border-bottom-color: #3b371e;
        width: 234px;
        font-weight: bold;
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


    @media only screen and (min-width: 320px) {
        /*Gender Button CSS*/
         .gender-spacing{
                  margin-top:10px;
              }
              .bank-acc-personal-width{
  width:100%
              }
.mt-20{
    margin-top:0px
}
.mt-10{
  margin-top:0px  
}
.row-width-personal{
    width:100%
}
        .radio-margin-top{
        margin-top: 15px;
    }
         .mobile-top-20{
        margin-top:20px
    }
             .table-row-proposal {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;
        flex-direction: column;
    }
            .card-proposal-personal{
              border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


    }
         .life-proposal-width{
            width: 142px;
    }
    .bank-proposal-width{
      width: 99px;
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
        width: 142pxpx;
        font-weight: bold;
    }
    .bank-border-width{
        width: 99px;
       
}
.mailing-border-width{
        width: 126px;
    
}
.mailing-border-width-big{
        width: 148px;
    
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
            
        }
        .btn-color {
            background-color: #3b371e;
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            
        }
        .sec-btn-color {
            background-color: #fff;
            border: 1px solid black;
        }

        .md-custom-btn {
            /* flex-direction: row;*/
            justify-content: center; 
            align-items: center;
            /* border-radius: 2px;
            height: 36px;
            min-width: 88px;
            position: relative;
             */
        }
        .table-row-proposal-col-details {
            margin-left: 0px;
        }
        .table-head-row {
            flex: 0.9;
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
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



        }
       
        .table-row-proposal-col-details {
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
        }
        .radio-data {
            flex-direction: column;
            flex: 1
        }
        .pers-posal-md-btn-width {
            width: 50%;
        }
        .pers-posal-md-btn-width-submit{
            width:50%;
        }
        .maling-adrs-box {
            margin-bottom: 10px;
        }


        }

    @media only screen and (min-width: 768px) {
        /*Gender Button CSS*/
         .gender-spacing{
                  margin-bottom:4px;
                   
              }
                        .bank-acc-personal-width{
  width:50%
              }
        .row-width-personal{
    width:50%
}
        .radio-desktop{
            margin-top: 15px;
        }
         .mobile-top-20{
        margin-top:0px
    }
          .radio-margin-top{
        margin-top: 7px;
    }
        .desktop-top-5{
            margin-top:5px
        }
        .desktop-top-10{
            margin-top:10px;
        }
             .desktop-top-15{
            margin-top:15px;
        }
             .table-row-proposal {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        flex-direction: row;
    }
                .card-proposal-personal{
                margin:10px;


    }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
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
              }
      
        .table-row-proposal-col-details {
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
        }
        .radio-data {
            flex-direction: row;

        }
        .pers-posal-md-btn-width {
            width: 30%;
        }
        .pers-posal-md-btn-width-submit{
            width:30%;
        }
        .maling-adrs-box {
            padding-bottom: 3.51563px;
            padding-top: 3.51563px;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            margin-bottom: 10px;
        }

    }

    /* Media Screen added usama */

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
        .pers-posal-md-btn-width {
            width: 15%;
        }
        .pers-posal-md-btn-width-submit{
            width:15%;
            padding:10px;
        }
    }
</style>