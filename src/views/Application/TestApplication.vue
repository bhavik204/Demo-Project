<template>
    <div class=" page-animation" ref="pagewrap" style="background-color: #f7f7f7;"> 
      <!-- <inner-header  :headeTitle="headerName"  ></inner-header> -->
      <!-- <application-tab  :tabs="tabs" :counter="counter"></application-tab> -->
      <scroller>  
        <div class="container"> 
  
          <div class="form-container" style="flex:2">
            <div class="card-proposal-application" style="flex:1">
              <div class="table-row-heading" > 
              <text class="heading prop-address-card-title-border label-enter-detail-width-line">Enter Details</text>
            </div>
  
  
              <div class="table-row mt-20 " >
           
                  <div class="table-row-details mobile-top-20 mt-20" style="flex-direction: column;flex:0.5">
                    <!-- <text  class="form-title">Advisor Name*</text>
                    <input class="input"  type="text" style="flex:1" v-model="advName" @blur="$v.advName.$touch()" /> -->
     <vx-input-box
                                               vx-label="Advisor Name"
                                               vx-placeholder="Enter Advisor Name"
                                               :vx-model="Adname"
                                               @valueReading="Adname=$event.value"
                                               >
                                              </vx-input-box>
           
                    <!-- <text class="form-error-title"   v-if="!$v.advName.required">Field is required</text> -->
                  </div>
                  <div class="table-row-col-details mobile-top-20 mt-20" style="flex-direction: column;flex:0.5">
                    <!-- <text  class="form-title">Advisor Code*</text>
                    <input class="input" type="text" style="flex:1" v-model="advCode" @blur="$v.advCode.$touch()" /> -->
                      <vx-input-box
                                               vx-label="Advisor Code"
                                               vx-placeholder="Enter Advisor Code"
                                               :vx-model="Adcode"
                                                @valueReading="Adcode=$event.value">
                                              </vx-input-box>
                    <!-- <text class="form-error-title" v-if="!$v.advCode.required">Field is required</text> -->
                  </div>
  
  
  
  
              </div>
             
  
              <div class="table-row test-app-width" style="flex-direction: column;">
  
              <div class="table-row-details mt-20 ml-20 mobile-top-20" style="flex-direction: column;flex:1;">  <text  class="form-title">Select Calculator Type</text>
                <text v-if="platform !== 'Web'" class="input-drop"  @click="calculatorType">{{value}}</text>
              </div>
                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                  <select style="flex:1" class="cursor-pointer-globle" v-model="calType" >
                       <option value="">Select Type</option>
                    <option class="dropdown-opt" v-for="calc in calculatorTypeWeb">{{calc}}</option>
                  </select>
                </div>
              </div>
  
             
              
              <div class="table-row mt-20">
                <div  class="table-row-details mobile-top-20 margin-top-desktop mt-20" style="flex-direction: column;flex:1;">
                  <!-- <text  class="form-title">Name of Life Assured</text>
                  <input class="input" v-model="lifeName" type="text" style="flex:1" /> -->
                     <vx-input-box
                                               vx-label="Name of Life Assured"
                                               vx-placeholder="Enter Name of Life Assured"
                                               :vx-model="name"
                                                @valueReading="name=$event.value">
                                              </vx-input-box>
                </div>
  
                <div class="table-row-col-details mobile-top-20  mt-20 ml-20" style="flex-direction:column;flex:1">
                  <text style="flex:1" class="form-title">Gender of Life Assured</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="genderType">{{value1}}</text>
                                <div class="gender-spacing" v-if="platform == 'Web'">
                  <gender-view @selectedGender="genderSel" v-model="formDat.GenderofLifeAssured"></gender-view>
                                </div>
                  <!-- <div v-if="platform == 'Web'">
                    <div style="flex-direction:row;" class="radio-margin-top">
  
                      <input type="radio" class="cursor-pointer-globle"  name="gender" v-model="gen" value="Male" />
                      <label class="radio-title" style="margin-left:10px;">Male</label>
  
                      <input type="radio" class="cursor-pointer-globle" name="gender" v-model="gen" value="Female" style="margin-left:30px;" />
                      <label class="radio-title" style="margin-left:10px;">Female</label>
  
                    </div>
                  </div> -->
                </div>
              </div>
  
              <div style="flex-direction:column;flex:1;" class="table-row test-app-width mt-20  mobile-top-20  ">
         
             <div class="table-row-details mt-20">
              <vx-input-box
                                              vx-type="date"
                                               vx-label="Date of Birth of Life Assured"
                                               vx-placeholder="Enter Date of Birth of Life Assured"
                                               :vx-model="dobassured"
                                                 @valueReading="dobassured=$event.value">
                                              </vx-input-box>
             </div>
              </div>
     <div class="table-row">
                <div  class="table-row-details mobile-top-20  mt-20 margin-top-desktop " style="flex-direction: column;flex:1">
   
                     <vx-input-box
                                               vx-label="Name of Child"
                                               vx-placeholder="Enter Name of Child"
                                               :vx-model="childName"
                                                     @valueReading="childName=$event.value">
                                              </vx-input-box>
                                            
                </div>
  
   
  
                <div class="table-row-col-details mobile-top-20 mt-20 ml-20" style="flex-direction:column;flex:1">
                  <text style="flex:1" class="form-title">Gender of Child</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="childgenderType">{{value2}}</text>
                    <div class="gender-spacing" v-if="platform == 'Web'">
                  <gender-view @selectedGender="genderChildSel" v-model="formDat.ChildGender" ></gender-view>
                                </div>
                  <!-- <div v-if="platform == 'Web'">
                    <div style="flex-direction:row;" class="radio-margin-top">
  
                      <input type="radio" class="cursor-pointer-globle" name="genderchild" v-model="cgen" value="Male" />
                      <label class="radio-title" style="margin-left:10px;">Male</label>
  
                      <input type="radio" class="cursor-pointer-globle" name="genderchild" v-model="cgen" value="Female" style="margin-left:30px;" />
                      <label class="radio-title" style="margin-left:10px;">Female</label>
  
                    </div>
                  </div> -->
                </div>
              </div>
  
          
  
         
                
  <div style="flex:1;margin-bottom:10px;" class="table-row mt-20 ">
                   <!-- <div> <text style="flex:0.5" class="form-title">Date of Birth of Child</text></div>
                <div>  <input style="flex:0.5" v-model="dateChild" type="date" placeholder="Input Date" class="input" max="2070-12-12"  /></div>
   --> <div  class="table-row-details mobile-top-20  mt-20 pt-10 " style="flex-direction: column;flex:1">
    <vx-input-box
                                               vx-label="Date of Birth of Child"
                                               vx-placeholder="Enter Date of Birth of Child"
                                               :vx-model="dateChild" vx-type="date"
                                                     @valueReading="dateChild=$event.value"></vx-input-box>
                                               </div>
   <div style="flex-direction:column;flex:1" class="table-row-col-details mobile-top-20 mt-20 ml-20" >
                  <text style="" class="form-title">Relationship with Child</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="relationshipWithChild">{{value3}}</text>
                  <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle"  v-model="childrelationship">
                       <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in childrelationshipWeb">{{calc}}</option>
                    </select>
                  </div>
                </div>
  </div>
  
  
              <div class="table-row">
                <div style="flex-direction: column;flex:1" class="table-row-details mobile-top-20  mt-20 ml-20">
                  <text style="" class="form-title">Policy Term</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="policyTerm">{{value4}}</text>
                  <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="policy">
                              <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in policyTermListWeb">{{calc}}</option>
                    </select>
                  </div>
  
                </div>
  
                <div style="flex-direction: column;flex:1" class="table-row-col-details  mobile-top-20 mt-20 ml-20">
                    <div class="mt-20">
                  <text style="" class="form-title">Premium Paying Term</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="premiumPayingTerm">{{value5}}</text>
                  <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="premium">
                         <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in premiumPayingTermListWeb">{{calc}}</option>
                    </select>
                  </div>
                    </div>
                </div>
              </div>
  
              <div  class="table-row mt-20">
                <div style="flex-direction: column;flex:1" class="table-row-details  mobile-top-20 mt-20 ml-20">
                  <text style="" class="form-title">Premium Mode</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="premiumMode">{{value6}}</text>
                  <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="mode">
                         <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in premiumModeListWeb ">{{calc}}</option>
                    </select>
                  </div>
  
                </div>
  
                <div style="flex-direction:column;flex:1" class="table-row-col-details  mobile-top-20 mt-20 ml-20">
                     <div class="mt-20">
                  <text style="flex:0.6" class="form-title">Premium Type</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="premiumType">{{value7}}</text>
                  <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="ptype">
                         <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in premiumTypeListWeb">{{calc}}</option>
                    </select>
                  </div>
                </div>
              </div>
              </div>
  
              <div  class="table-row mt-20">
                <div style="flex-direction: column;flex:1" class="table-row-details mt-20 mobile-top-20   mb-30-mobile">
                  <!-- <text class="form-title">Installment Premium</text>
                  <input class="input" v-model ="formDat.InstallmentPremium" type="text" style="flex:1" /> -->
                        <vx-input-box
                                               vx-label="Installment Premium"
                                               vx-type="tel"
                                               vx-placeholder="Enter Installment Premium"
                                               :vx-model="inspremium"
                                                     @valueReading="inspremium=$event.value">
                                              </vx-input-box>
                </div>
  
                <div style="flex-direction:column;flex:1" class="table-row-col-details mt-20 ml-20">
                  <text style="flex:1" class="form-title-method">Method of Payment</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="paymentMethod">{{value8}}</text>
                  <div v-if="platform == 'Web'">
                    <div style="flex-direction:row" class="radio-margin-top">
  
                      <input type="radio" class="cursor-pointer-globle" name="pay" v-model="ecs" value="ECS" />
                      <label class="radio-title" style="margin-left:10px;">ECS</label>
  
                      <input type="radio" class="cursor-pointer-globle" name="pay" v-model="ecs" value="NON-ECS" style="margin-left:30px;" />
                      <label class="radio-title" style="margin-left:10px;">NON-ECS</label>
  
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="table-row mt-20">
                  <div style="flex-direction: column;flex:1" class="table-row-details mobile-top-20  mb-30-mobile mt-20 ml-20">
                      <text  class="form-title">Investment Option</text>
                      <text v-if="platform !== 'Web'" class="input-drop"  @click="investmentOption">{{value9}}</text>
                      <div class="drop-down" v-if="platform == 'Web'">
                        <select style="flex:1" class="cursor-pointer-globle" v-model="invoption">
                              <option value="">Select</option>
                          <option class="dropdown-opt" v-for="calc in investmentListWeb " >{{calc}}</option>
                        </select>
                      </div>
      
                    </div>
                      <div class="table-row-col-details mt-20  margin-top-desktop" style="flex-direction: column;flex:1">
                    <!-- <text  class="form-title">Advisor Code*</text>
                    <input class="input" type="text" style="flex:1" v-model="advCode" @blur="$v.advCode.$touch()" /> -->
                      <vx-input-box
                                            vx-label="Sum Assured"
                                            vx-placeholder="Enter SumAssured"
                                            :vx-model="sum"
                                            @valueReading="sum=$event.value">
                      </vx-input-box>
                    <!-- <text class="form-error-title" v-if="!$v.advCode.required">Field is required</text> -->
                  </div>
                </div>
  
              <div  class="table-row">
                <div style="flex-direction: column;flex:1" class="table-row-details mb-30-mobile mobile-top-20  mt-20 ml-20">
                  <text  style="" class="form-title">Death Benefit Option</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="deathBenefitOption">{{value10}}</text>
                  <div  class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="death">
                         <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in deathOptionListWeb ">{{calc}}</option>
                    </select>
                  </div>
                </div>
                
  
                <div style="flex-direction:column;flex:1" class="table-row-col-details mt-20 ml-20">
                     <div class="mt-20">
                  <text style="" class="form-title">Age Proof</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="ageProof">{{value11}}</text>
                  <div class="drop-down " v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="aproof">
                         <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in ageListWeb ">{{calc}}</option>
                    </select>
                  </div>
                </div>
              </div>
              </div>
  
              <div  class="table-row mt-20">
                <div style="flex-direction: column;flex:1 " class="table-row-details mobile-top-20  mt-20 ml-20 mb-30-mobile">
                  <text style="" class="form-title">Annuity Frequency</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="annuityFrequency">{{value12}}</text>
                  <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="annFreq">
                         <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in annunityFreqListWeb ">{{calc}}</option>
                    </select>
                  </div>
  
                </div>
  
                <div style="flex-direction:column;flex:1" class="table-row-col-details mobile-top-20  mt-20 ml-20">
                    <div class="mt-20">
                  <text style="" class="form-title">Annuity Option</text>
                  <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="annuityOption">{{value13}}</text>
                  <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                    <select style="flex:1" class="cursor-pointer-globle" v-model="annOption">
                         <option value="">Select</option>
                      <option class="dropdown-opt" v-for="calc in annunityOptionListWeb">{{calc}}</option>
                    </select>
                  </div>
                </div>
                </div>
              </div>
  
  
              <div style="flex-direction:row" class="table-row mt-20">
                <div style="flex-direction: column;">
                  <div style="flex:2">
                    <div class="ml-20 mt-20 mobile-top-20 ">
                      <text style="flex:1" class="form-title">Do you want to add riders to this plan</text>
                    </div>
                  <div class="example ml-20 mt-20" v-if="platform !== 'Web'" style="flex:1">
                      <div>
                        <switch @change="onchange1"></switch>
                      </div>
                      <text class="form-title">{{check1}}</text>
  
                    </div>
                  </div>
  
    
                  <div v-if="platform === 'Web'" style="flex:1">
                    <div style="flex-direction:row;margin-top:7px">
  
                      <input type="radio" class="cursor-pointer-globle" name="riders" v-model="ridersplan" value="true" />
                      <label class="radio-title" style="margin-left:10px;">Yes</label>
  
                      <input type="radio" class="cursor-pointer-globle" name="riders" v-model="ridersplan" value="false" style="margin-left:30px;" />
                      <label class="radio-title" style="margin-left:10px;">No</label>
  
                    </div>
                  </div>
  
                </div>
  
              </div>
         <div class="table-row mt-20">
              <text class="heading prop-address-card-title-border label-fund-alloc-width-line">Fund Allocation in %</text>
            </div>
              <div  class="table-row">
              
                  <div style="flex-direction: column;flex:1"  class="table-row-details mt-20 mobile-top-20 ">
                    <!-- <text  class="form-title">Life Equity Fund 3</text>
                    <input class="input" v-model="eqFund" type="text" style="flex:1" /> -->
                      <div class="mt-20">
                    <vx-input-box
                                               vx-label="Life Equity Fund 3"
                                               vx-placeholder="Enter Life Equity Fund 3"
                                               :vx-model="eqfund3"
                                                     @valueReading="eqfund3=$event.value">
                                              </vx-input-box>
                      </div>
                  </div>
                  <div style="flex-direction: column;flex:1" class="table-row-col-details mt-20 mobile-top-20 ">
                    <!-- <text  class="form-title">Life Pure Equity Fund 2</text>
                    <input class="input" v-model="eqFundPure" type="text" style="flex:1" /> -->
                    <vx-input-box
                                               vx-label="Life Equity Fund 2"
                                               vx-placeholder="Enter Life Equity Fund 2"
                                               :vx-model="eqfund2"
                                                     @valueReading="eqfund2=$event.value">
                                              </vx-input-box>
                  </div>
  
  
  
  
              </div>
  
  
  
              <div  class="table-row ">
                <div style="flex-direction: column;flex:1"  class="table-row-details mt-20 mobile-top-20 ">
                  <!-- <text  class="form-title">Make in India Fund</text>
                  <input class="input" v-model="mindia" type="text" style="flex:1" /> -->
                 <vx-input-box
                                               vx-label="Make in India Fund"
                                               vx-placeholder="Enter Make in India Fund"
                                               :vx-model="mindia"
                                                     @valueReading="mindia=$event.value">
                                              </vx-input-box>
                </div>
                <div style="flex-direction: column;flex:1" class="table-row-col-details mt-20 mobile-top-20 ">
                  <!-- <text  class="form-title">Life Balanced Fund 1</text>
                  <input class="input" type="text" v-model="balance" style="flex:1" /> -->
                <vx-input-box
                                               vx-label="Life Balanced Fund 1"
                                               vx-placeholder="Enter Life Balanced Fund 1"
                                               :vx-model="balfund1"
                                                     @valueReading="balfund1=$event.value">
                                              </vx-input-box>
                </div>
  
  
  
              </div>
  
  
  
  
  
              <div class="table-row">
                <div style="flex-direction: column;flex:1"  class="table-row-details mt-20 mobile-top-20 ">
                  <!-- <text  class="form-title">Life Corporation Bond Fund 1</text>
                  <input class="input" v-model="fund"  type="text" style="flex:1" /> -->
                       <vx-input-box
                                               vx-label="Life Corporation Bond Fund 1"
                                               vx-placeholder="Enter Life Corporation Bond Fund 1"
                                               :vx-model="corpfund1"
                                                     @valueReading="corpfund1=$event.value">
                                              </vx-input-box>
                </div>
                <div style="flex-direction: column;flex:1" class="table-row-col-details mt-20 mobile-top-20 ">
                  <!-- <text  class="form-title">Life Money Market Fund 1</text>
                  <input class="input" v-model="fund1" type="text" style="flex:1" /> -->
                  <vx-input-box
                                               vx-label="Life Money Market Fund 1"
                                               vx-placeholder="Enter Life Money Market Fund 1"
                                               :vx-model="moneyfund1"
                                                     @valueReading="moneyfund1=$event.value">
                                              </vx-input-box>
                </div>
  
  
  
              </div>
  
  
  
   <div class="table-row">
              <div style="flex-direction: column;flex:0.5" class="table-row-details mt-20 mobile-top-20 ">
                <!-- <text  class="form-title">Smart Pension Fund 1</text>
                <input class="input" v-model="pension" type="text" style="flex:1" /> -->
               <vx-input-box
                                               vx-label="Smart Pension Fund 1"
                                               vx-placeholder="Enter Smart Pension Fund 1"
                                               :vx-model="pensionfund"
                                                     @valueReading="pensionfund=$event.value">
                                              </vx-input-box>
              </div>
            </div>
             
  
  
            </div>
            <div  v-if ="platform ==='Web'" class="card-proposal-application btn-space test-app-btn-padding">
                <div class="box md-btn-width" style="padding:10px;">
                        <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle"  @click.native="calculateData()">
                            <text class="md-sec-btn-label cursor-pointer-globle">Calculate</text>
                        </div> -->
                         <div class="btn-space">
                                      <s-button @click.native="calculateData()" btn-icon="https://www.materialui.co/materialIcons/action/description_black_192x192.png" btn-name="Generate BI"></s-button>
  
                              </div>
                    </div>
                    <div   class="box md-btn-width margin-right-btn" style="padding:10px; ;">
                            <!-- <div class="md-custom-btn btn-color cursor-pointer-globle"  @click.native="jump('/master/testpro/proposalnominee')">
                                <text class="md-btn-label text-color-white cursor-pointer-globle">Generate BI</text>
                            </div> -->
                             <div  class=""
                                  @click.native="jump('')">
                                      <p-button btn-icon="https://www.iconsdb.com/icons/preview/white/calculator-8-xxl.png" btn-name="Calculate" ></p-button>
                                  </div>
                        </div>
               </div>
               <div  v-if ="platform !=='Web'" class="card-proposal-application btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                  <div class="box md-btn-width" style="padding:10px;">
                          <!-- <div class="md-custom-btn sec-btn-color"  @click="calculateData()">
                              <text class="md-sec-btn-label ">Calculate</text>
                          </div> -->
                           <div class="btn-space">
                                  <div  class=""
                                  @click="calculateData()">
                                      <s-button btn-icon="https://www.materialui.co/materialIcons/action/description_black_192x192.png" btn-name="Generate BI"></s-button>
                                  </div>
                              </div>
                      </div>
                      <div   class="box md-btn-width" style="padding:10px;">
                              <!-- <div class="md-custom-btn btn-color" @click="jump('/master/testpro/proposalnominee')">
                                  <text class="md-btn-label text-color-white ">Generate BI</text>
                              </div> -->
                               <div  class=""
                                  @click="jump('/master/testpro/proposalnominee')">
                                      <p-button btn-icon="https://www.iconsdb.com/icons/preview/white/calculator-8-xxl.png" btn-name="Calculate"></p-button>
                                  </div>
                          </div>
                 </div>
          </div>
  
          <div class="card-proposal-application summery-cd-mar" style="flex:1;">
            <div class="table-row-heading">
            <text class="heading label-summery-width-line prop-address-card-title-border">Summary</text>
          </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Plan Option</text>
                <text v-if="proposalBindFlow == 'true'" class="card-subtitle-details">{{productName}}</text>
                    <text  v-if="proposalBindFlow == 'false'" class="card-subtitle-details">Increase Income Plan</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Policy Term</text>
                <text class="card-subtitle-details">20 Years</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Premium Paying Term</text>
                <text class="card-subtitle-details">20 Years</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Annualised Premium</text>
                <text class="card-subtitle-details">20,00,000</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Sum Assured</text>
                <text class="card-subtitle-details">5,40,000</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Payout in 18th Year</text>
                <text class="card-subtitle-details">â‚¹ 5,40,000</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Payout in 19th Year</text>
                <text class="card-subtitle-details">â‚¹ 5,40,000</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Payout at Maturity</text>
                <text class="card-subtitle-details">â‚¹ 5,40,000</text>
              </div>
            </div>
            <div class="card-summary row">
              <div class="summ">
                <text class="form-title">Minimum Payout on Death</text>
                <text class="card-subtitle-details">â‚¹ 5,40,000</text>
              </div>
            </div>
          </div>
        </div>
        <div class="card-proposal-application">
          <div class="table-row">
            <text class="heading label-benifit-illu-alloc-width-line prop-address-card-title-border">Benefit Illustration</text>
          </div>
    
   <!-- <div v-if="platform === 'Web'" style="flex-direction:row"> 
          <div   class="benefit-button-value1 cursor-pointer-globle" :style="{backgroundColor:color}"  @click.native="regular()">
             <div class="benefit-pad-lft cursor-pointer-globle">
                 <image class="tab-icon " :src="icon" />
              </div> 
              <text class="benefit-button-char cursor-pointer-globle" :style="{color:fontColor}" >Regular</text>
          </div>
            <div   class="benefit-button-value2 cursor-pointer-globle" :style="{backgroundColor:color1}"  @click.native="unfortunate()">
             <div class="benefit-pad-lft cursor-pointer-globle">
                 <image class="tab-icon " :src="icon1" />
              </div> 
              <text class="benefit-button-char cursor-pointer-globle" :style="{color:fontColor1}" >Unfortunate Event</text>
          </div>
            <div   class="benefit-button-value3 cursor-pointer-globle" :style="{backgroundColor:color2}"  @click.native="bi()">
             <div class="benefit-pad-lft cursor-pointer-globle">
                 <image class="tab-icon " :src="icon2" />
              </div> 
              <text class="benefit-button-char cursor-pointer-globle" :style="{color:fontColor2}" >BI</text>
          </div>
          
      </div> -->
  
        <div v-if="platform === 'Web'" style="flex-direction:row; padding-top:10px;padding-left:08px;"> 
          <div v-for="(btn,id) in buttonData" :key="id" class="benefit-button-value cursor-pointer-globle" :style="{backgroundColor:btn.color}"  @click.native="btnData(id)">
             <div class="benefit-pad-lft cursor-pointer-globle">
                 <image class="tab-icon " :src="btn.icon" />
              </div> 
              <text class="benefit-button-char cursor-pointer-globle" :style="{color:btn.fontColor}" >{{btn.Title}}</text>
          </div>
        </div>
          <div v-if="platform !== 'Web'" style="flex-direction:rows; padding-top:10px;padding-left:08px;"> 
          <div v-for="(btn,id) in buttonData" :key="id" class="benefit-button-value  cursor-pointer-globle" :style="{backgroundColor:btn.color}"  @click="btnData(id)">
             <div class="benefit-pad-lft cursor-pointer-globle">
                 <image class="tab-icon " :src="btn.icon" />
              </div> 
              <text class="benefit-button-char cursor-pointer-globle" :style="{color:btn.fontColor}" >{{btn.Title}}</text>
          </div>
        </div>
  
       <!-- <div v-if="platform !== 'Web'" style="flex-direction:row"> 
          <div v-for="(btn,id) in buttonData" :key="id" class="benefit-button-value cursor-pointer-globle" :style="{backgroundColor:btn.color}"  @click="btnData(id)">
             <div class="benefit-pad-lft cursor-pointer-globle">
                 <image class="tab-icon " :src="btn.icon" />
              </div> 
              <text class="benefit-button-char cursor-pointer-globle" :style="{color:btn.fontColor}" >{{btn.Title}}</text>
          </div>
          
      </div> -->
  <!-- <div v-if="platform==='Web'" @click.native="unfortunate()"  class="documt-box-pading-application test-app-btn-width-unfortunate cursor-pointer-globle" style="padding-right:0px;padding-left:0px" >
           <s-button 
                                                 
          btn-name="Unfortunate Event" 
          btn-icon="https://www.materialui.co/materialIcons/action/description_black_192x192.png">
          </s-button>
  </div>
  <div v-if="platform==='Web'" @click.native="bi()"  class="documt-box-pading-application test-app-btn-width-bi cursor-pointer-globle" style="padding-right:0px;padding-left:0px"  >
       <s-button  
                                                 
      btn-name="BI" 
      btn-icon="https://www.materialui.co/materialIcons/image/picture_as_pdf_black_192x192.png">
      </s-button>
  </div> -->
  
  <!-- <div v-if="platform!=='Web'" @click="unfortunate()"  class="documt-box-pading-application test-app-btn-width cursor-pointer-globle" >
           <s-button 
                                                 
          btn-name="Unfortunate Event" 
          btn-icon="https://www.materialui.co/materialIcons/action/description_black_192x192.png">
          </s-button>
  </div>
  <div v-if="platform!=='Web'" @click="bi()"  class="documt-box-pading-application test-app-btn-width cursor-pointer-globle"  >
       <s-button  
                                                 
      btn-name="BI" 
      btn-icon="https://www.materialui.co/materialIcons/image/picture_as_pdf_black_192x192.png">
      </s-button>
  </div> -->
  
      
          
         
              <!-- <div class="box  x-small-btn">
                  <div class="md-custom-btn btn-color">
                     
                      <text class="md-btn-label text-color-white">Unfortunate</text>
                  </div>
              </div> -->
              <!-- <div class="box x-small-btn">
                  <div class="md-custom-btn btn-color">
                      <text class="md-btn-label text-color-white">Benefit</text>
                  </div>
              </div> -->
      
          <div v-if="show1==true"  style="justify-content:center;align-items:center;flex:2;padding-bottom:20px;padding-top:0px ">
  
            <image class="image"  src="http://salesdrive.iorta.in/img/base-plan.jpg"></image>
  
          </div>
  
          <div v-if="show2==true" style="justify-content:center;align-items:center;flex:2;padding-bottom:20px;padding-left:100px;padding-top:10px ">
  
            <image class="image"  src="http://salesdrive.iorta.in/img/death-scenerio.jpg"></image>
  
          </div>
          <div v-if="show3==true">
              <div class="table-row-heading" >
              <text class="heading">ABC Endowment Plan 121N018V02</text>
            </div>
                <div class="table-row-heading" >
                   <text class="heading">Product Benefits</text>
                </div>
                <div class="table-container">
  
                <div class="table-content" style="flex-direction:row" >
  
              <div class="table-row" style="flex-direction:column;padding-bottom:10px;">
                 <text class="form-title">Date Of Quotation</text>
                <text class="form-title">Name of the life insured</text>
                <text class="form-title ">Name of the insurance advisor</text>
                <text class="form-title ">Date Of Birth</text>
                <text class="form-title">Policy Commencement Date</text>
                 <text class="form-title">Total Installment premium</text>
                  <text class="form-title">Unique Identification No</text>
                   <text class="form-title">Advisor Code</text>
                    <text class="form-title">Age Proof</text>
              </div>
  
               <div  class="table-row" v-for="(row, pi) in table1"  style="flex-direction:column;">
                 <text class="form-title">{{row.DateOfQuotation}}</text>
                <text class="form-title">{{row.Nameofthelifeinsured}} </text>
                <text class="form-title ">{{row.Nameoftheinsuranceadvisor}} </text>
                <text class="form-title ">{{row.DateOfBirth}}</text>
                <text class="form-title">{{row.PolicyCommencementDate}}</text>
                 <text class="form-title">{{row.TotalInstallmentpremium}}</text>
                  <text class="form-title">{{row.UniqueIdentificationNo}}</text>
                   <text class="form-title">{{row.AdvisorCode}}</text>
                    <text class="form-title">{{row.AgeProof}}</text>
              </div>
  
                </div>
  
  
           
  
              <div class="table-content" style="flex-direction:row" >
  
              <div class="table-row" style="flex-direction:column;padding-bottom:10px;">
                <text class="form-title">Policy Term</text>
                <text class="form-title ">Premium Payment Term</text>
                <text class="form-title ">Mode of Premium Payment</text>
                <text class="form-title">Sum Assured for Basic Plan</text>
                 <text class="form-title">Total Installment premium</text>
                  <text class="form-title">Total Installment premium1</text>
                   <text class="form-title">Age</text>
                    <text class="form-title">Frequency</text>
              </div>
                <div class="table-row" v-for="(tbl, pi) in table2"  style="flex-direction:column;padding-left:35px">
                <text class="form-title">{{tbl.PolicyTerm}} </text>
                <text class="form-title ">{{tbl.PremiumPaymentTerm}} </text>
                <text class="form-title ">{{tbl.ModeofPremiumPayment}}</text>
                <text class="form-title">{{tbl.SumAssuredforBasicPlan}}</text>
                 <text class="form-title">{{tbl.TotalInstallmentpremium}}</text>
                  <text class="form-title">{{tbl.TotalInstallmentpremium1}}</text>
                   <text class="form-title">{{tbl.Age}}</text>
                    <text class="form-title">{{tbl.Frequency}}</text>
              </div>
  
              
  
            </div>
                </div>
              
          </div>
  
  
  
  
  </div>
  
      <div class="application-btn-position card-proposal-application " style="margin-bottom:20px;">
          <div style="flex-direction:row;flex:1">
              <div v-if="platform=== 'Web'" class="documt-box-pading-application test-app-btn-width-email" style="padding-right:0px;padding-left:08px">
                  <s-button 
                      @click.native="testApp(1)"
                      btn-name="Email Pdf" 
                      btn-icon="https://www.materialui.co/materialIcons/communication/email_black_192x192.png">
                  </s-button>
              </div>
              <div v-if="platform=== 'Web'" class="documt-box-pading-application test-app-btn-width-down-pdf" style="padding-right:0px;padding-left:0px">
                      <s-button 
                          @click.native = "pdfDownloadNptification"
                          btn-name="Download Pdf" 
                          btn-icon="https://www.materialui.co/materialIcons/action/get_app_black_192x192.png">
                      </s-button>
              </div>
               <div v-if="platform !== 'Web'" class="documt-box-pading-application test-app-btn-width-email"
               @click="jump('/send_email')">
              <s-button 
              
                  btn-name="Email PDF" 
                  
                  btn-icon="https://www.materialui.co/materialIcons/communication/email_black_192x192.png">
              </s-button>
          </div>
          
          <div v-if="platform!== 'Web'" class="documt-box-pading-application test-app-btn-width-down-pdf">
              <s-button 
                  btn-name="Download PDF" 
                  @click="pdfDownloadNptification"
                  btn-icon="https://www.materialui.co/materialIcons/action/get_app_black_192x192.png">
              </s-button>
          </div>
          </div>
          <div v-if="platform === 'Web'" class="documt-box-pading-application test-app-btn-width-proceed" style="padding-right:08px;">
              <p-button 
                  @click.native="jump('/master/testpro/proposalpersonal')"
                  btn-name="Proceed" icon-side="right"
                  btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png">
              </p-button>
          </div>
        
          <div v-if="platform !== 'Web'" class="documt-box-pading-application test-app-btn-width-proceed"
          @click="jump('/master/testpro/proposalpersonal')">
             
              <vx-primary-button
               
                  :icon-side="iconSide"
                  btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"
                  btn-name="Proceed"
              >
              </vx-primary-button>
  
  
          </div>
        </div>
  </scroller>
  
  <div v-if="showEmail === true">
  <popup>
          <div class="to-do-flx-row to-do-task-title">
              <div class="email-head">
                  <text class="to-do-title-font">Send Mail</text>
              </div>    
          </div>
  
          <div class="email-root-form email-shadow exist">
              <test-app-email-pop></test-app-email-pop>
          </div>
          <div class="todo-footer to-do-flx-row-rvrs">
              <div v-if="platform === 'Web'" class="email-md-btn-width cursor-pointer-globle" style="margin-left: 10px">
              <vx-primary-button 
              btn-name="Send" 
              btn-icon="https://www.materialui.co/materialIcons/content/send_white_192x192.png" ></vx-primary-button> 
          </div>
          <div v-if="platform === 'Web'" class="email-md-btn-width cursor-pointer-globle">
             
         <vx-secondary-button 
              
              btn-name="Cancel" 
              btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
              @click.native="testApp(2)"></vx-secondary-button>
          </div>
          </div>
      </popup>
   </div>
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
const env = weex.config.env || WXEnvironment;
const invalid = "- invalid -";
const iconSrc = "https://www.materialui.co/materialIcons/action/";
var stream = weex.requireModule("stream");
const modal = weex.requireModule("modal");
const animation = weex.requireModule("animation");
var storage = weex.requireModule("storage");
import { WxcRadio } from "weex-ui";
import moment from "moment";
import PButton from "../../components/vx-primary-button/vx-primary-button.vue";
import SButton from "../.././components/vx-primary-button/vx-scondary-button";
// import applicationTab from './ApplicationTab.vue'
import applicationTab from "../../components/Tabs/HeaderTab.vue";
import vxInputBox from "../../components/vx-input-box/vx-input-box.vue";
import vxPrimaryButton from "../../components/vx-primary-button/vx-primary-button.vue";
import vxSecondaryButton from "../../components/vx-primary-button/vx-scondary-button.vue";
import genderView from "../../components/GenderView/genderView.vue";
import popup from "../Calendar/Todo-pop-up.vue";
import errorMsg from "../../components/Errormsg/errmsg.vue";
import TestAppEmailPop from "../../views/Application/TestAppEmailPop.vue";
import { required } from "vuelidate/lib/validators";
export default {
  mounted() {
    var pagewrap = this.$refs.pagewrap;
    animation.transition(
      pagewrap,
      {
        styles: {
          opacity: "1"
        },
        duration: 200, //ms
        timingFunction: "ease-in",
        // transform: 'translate(1100px,100px)',
        delay: 100 //ms
      },
      function() {
        // modal.toast({ message: 'animation finished.' })
        console.log(pagewrap, "logggmix in ");
        // var btn01 = this.$refs.btn1;
      }
    );

    //                   storage.getItem('form', event => {
    //   console.log(event.data)
    // })
  },

  created() {
    var me = this;
    this.postflowStatus = me.$store.getters.getPostFlowStatus;
    this.Adname =
      this.$store.state.agentDetails.agent_firstname +
      " " +
      this.$store.state.agentDetails.agent_lastname;
    this.Adcode = this.$store.state.agentDetails.agent_id;
    console.log(this.Adname, this.Adcode);
    this.proposalBindFlow = this.$store.getters.getProposalFlowStatus;
    console.log(this.proposalBindFlow);
    if (this.proposalBindFlow == "true") {
      //this.formDat = this.$store.getters.getAppFormData
      this.formDat = this.$store.getters.getProductLeaddata;

      console.log("Product LEAD DATA IS", this.formDat);
      this.productName = this.formDat[0].productId.productName;
      console.log(this.productName);

      var NameofLifeAssured =
        this.formDat[1].leadId.firstName +
        " " +
        this.formDat[1].leadId.lastName;
      var DateofBirthofLifeAssured = moment(this.formDat[1].leadId.dob).format(
        "YYYY-MM-DD"
      );
      console.log(DateofBirthofLifeAssured, NameofLifeAssured);

      this.formDat.NameofLifeAssured = NameofLifeAssured;
      this.dobassured = DateofBirthofLifeAssured;
      console.log(this.formDat);
      var postformData = this.$store.getters.getAppFormData;
      console.log(postformData);
      for (var i = 0; i < postformData.length; i++) {
        me.formDat = postformData[i].benefitIllustration;
        (this.calType = me.formDat.CalculatorType),
          (this.name = me.formDat.NameofLifeAssured),
          (this.gender = me.formDat.GenderofLifeAssured),
          (this.dobassured = me.formDat.DateofBirthofLifeAssured),
          (this.childName = me.formDat.ChildName),
          (this.cgen = me.formDat.ChildGender),
          (this.dateChild = me.formDat.ChildDateofBirth),
          (this.childrelationship =
            me.formDat.RelationshipofChildwithLifeAssured),
          (this.policy = me.formDat.PolicyTerm),
          (this.premium = me.formDat.PremiumPayingTerm),
          (this.mode = me.formDat.PremiumMode),
          (this.ptype = me.formDat.PremiumType),
          (this.inspremium = me.formDat.InstallmentPremium),
          (this.ecs = me.formDat.MethodofPaymentecs),
          (this.invoption = me.formDat.InvestmentOption),
          (this.sum = me.formDat.SumAssured),
          (this.death = me.formDat.DeathBenefitOption),
          (this.aproof = me.formDat.AgeProof),
          (this.annFreq = me.formDat.AnnuityFrequency),
          (this.annOption = me.formDat.AnnuityOption),
          (this.ridersplan = me.formDat.DoyouwanttoaddRiderstothisplan),
          (this.eqfund3 = me.formDat.LifeEquityFund3),
          (this.eqfund2 = me.formDat.LifePureEquityFund2),
          (this.mindia = me.formDat.MakeinIndiaFund),
          (this.balfund1 = me.formDat.LifeBalancedFund1),
          (this.corpfund1 = me.formDat.LifeCorporationBondFund1),
          (this.moneyfund1 = me.formDat.LifeMoneyMarketFund1),
          (this.pensionfund = me.formDat.SmartPensionFund1);
      }
    } else {
      me.form = me.$store.getters.getAppFormData;
      console.log(me.form);
      for (var i = 0; i < me.form.length; i++) {
        console.log(me.form[i].benefitIllustration);
        me.formDat = me.form[i].benefitIllustration;
        console.log(me.formDat);
        (this.calType = me.formDat.CalculatorType),
          (this.name = me.formDat.NameofLifeAssured),
          (this.gender = me.formDat.GenderofLifeAssured),
          (this.dobassured = me.formDat.DateofBirthofLifeAssured),
          (this.childName = me.formDat.ChildName),
          (this.cgen = me.formDat.ChildGender),
          (this.dateChild = me.formDat.ChildDateofBirth),
          (this.childrelationship =
            me.formDat.RelationshipofChildwithLifeAssured),
          (this.policy = me.formDat.PolicyTerm),
          (this.premium = me.formDat.PremiumPayingTerm),
          (this.mode = me.formDat.PremiumMode),
          (this.ptype = me.formDat.PremiumType),
          (this.inspremium = me.formDat.InstallmentPremium),
          (this.ecs = me.formDat.MethodofPaymentecs),
          (this.invoption = me.formDat.InvestmentOption),
          (this.sum = me.formDat.SumAssured),
          (this.death = me.formDat.DeathBenefitOption),
          (this.aproof = me.formDat.AgeProof),
          (this.annFreq = me.formDat.AnnuityFrequency),
          (this.annOption = me.formDat.AnnuityOption),
          (this.ridersplan = me.formDat.DoyouwanttoaddRiderstothisplan),
          (this.eqfund3 = me.formDat.LifeEquityFund3),
          (this.eqfund2 = me.formDat.LifePureEquityFund2),
          (this.mindia = me.formDat.MakeinIndiaFund),
          (this.balfund1 = me.formDat.LifeBalancedFund1),
          (this.corpfund1 = me.formDat.LifeCorporationBondFund1),
          (this.moneyfund1 = me.formDat.LifeMoneyMarketFund1),
          (this.pensionfund = me.formDat.SmartPensionFund1);
      }
      console.log(this.ridersplan);
    }

    if (typeof WXEnvironment === "object") {
      this.platform = WXEnvironment.platform || unknown;
      return this.platform;
    }
  },
  destroyed() {
    this.$store.commit("SET_ACTIVE_STATUS", true);
    //  this.$store.commit('SET_PROPOSALFLOW_STATUS','false')
    //    this.$store.commit('SET_INDEX',1)
  },

  components: {
    WxcRadio,
    applicationTab,
    vxInputBox,
    PButton,
    SButton,
    vxPrimaryButton,
    vxSecondaryButton,
    popup,
    TestAppEmailPop,
    genderView,
    errorMsg
  },

  data() {
    return {
      moment: moment,
      proposalBindFlow: "",
      postflowStatus: "",
      idenCollection: [],
      productName: "",
      Adname: "",
      Adcode: "",
      calType: "",
      name: "",
      dobassured: "",
      childName: "",
      dateChild: "",
      childrelationship: "",
      policy: "",
      premium: "",
      mode: "",
      ptype: "",
      inspremium: "",
      ecs: "",
      invoption: "",
      sum: "",
      death: "",
      aproof: "",
      annFreq: "",
      annOption: "",
      ridersplan: "",
      eqfund3: "",
      eqfund2: "",
      mindia: "",
      balfund1: "",
      corpfund1: "",
      moneyfund1: "",
      pensionfund: "",
      prodLead: [],
      form: [],
      formDat: {},
      childinp: false,
      iconSide: "right",
      color: "#3b371e",
      color1: "#fff",
      color2: "#fff",
      fontColor: "#fff",
      fontColor1: "#000000",
      fontColor2: "#000000",
      icon: "../../web/assets/piggy-white.png",
      icon1:
        "https://www.materialui.co/materialIcons/action/description_black_192x192.png",
      icon2:
        "https://www.materialui.co/materialIcons/image/picture_as_pdf_black_192x192.png",
      notificationTitle: this.$store.state.notificationTitle,
      notificationBody: this.$store.state.notificationBody,
      showNotification: this.$store.state.shownotificationtoast,
      headerName: "Benefit Illustrator",
      platform: invalid,
      advCode: "ADV 0023",
      advName: "Pankaj Thakare",
      calculator: "Annual",

      gen: "",
      cgen: "",
      lifeName: "Rahul Soni",
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
      show1: true,
      show2: false,
      show3: false,
      showEmail: false,
      productID: "",
      leadID: "",

      buttonData: [
        {
          Title: "Maturity",
          color: "#3b371e",
          fontColor: "#fff",
          icon: "../../web/assets/piggy-white.png",
          activeIcon: "../../web/assets/piggy-white.png",
          deactiveIcon: "../../web/assets/piggy-black.png"
        },
        {
          Title: "Events",
          color: "#fff",
          fontColor: "#000000",
          icon:
            "https://www.materialui.co/materialIcons/action/description_black_192x192.png",
          activeIcon:
            "https://www.materialui.co/materialIcons/action/description_white_192x192.png",
          deactiveIcon:
            "https://www.materialui.co/materialIcons/action/description_black_192x192.png"
        },
        {
          Title: "BI",
          color: "#fff",
          fontColor: "#000000",
          icon:
            "https://www.materialui.co/materialIcons/image/picture_as_pdf_black_192x192.png",
          activeIcon:
            "https://www.materialui.co/materialIcons/image/picture_as_pdf_white_192x192.png",
          deactiveIcon:
            "https://www.materialui.co/materialIcons/image/picture_as_pdf_black_192x192.png"
        }
      ],

      table1: [
        {
          DateOfQuotation: "12/02/2016",
          Nameofthelifeinsured: "ConsultIT",
          Nameoftheinsuranceadvisor: "Hello Test",
          DateOfBirth: "12/02/2016",
          PolicyCommencementDate: "12/02/2016",
          TotalInstallmentpremium: "5000000",
          UniqueIdentificationNo: "121N018V02",
          AdvisorCode: "12345",
          AgeProof: "Standard"
        }
      ],
      table2: [
        {
          PolicyTerm: "12/02/2016",
          PremiumPaymentTerm: "ConsultIT",
          ModeofPremiumPayment: "Yearly",
          SumAssuredforBasicPlan: "50000",
          TotalInstallmentpremium: "500000",
          TotalInstallmentpremium1: "500000",
          Age: "50",
          Frequency: "2"
        }
      ],
      calculatorTypeWeb: ["Annual", "Monthly"],
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

      checkedInfo: {
        title: "option2",
        value: 2
      },
      list: [
        {
          title: "option1",
          value: 1
        },
        {
          title: "option2",
          value: 2
        },
        {
          title: "option3",
          value: 3
        },
        {
          title: "option4",
          value: 4
        }
      ]
    };
  },
  validations: {
    advName: {
      required,
      $invalid: true,
      $dirty: false,
      $error: true
      // "$pending": false,
      //   "$params": {
      // "required": {
      //   "type": "required"
      // }, required,
      // },
    },
    advCode: {
      required,
      $invalid: true,
      $dirty: false,
      $error: true
    }
  },
  computed: {
    getappForm() {},
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
    toast(src, color, msg) {
      this.$store.state.shownotificationtoast = true;
      this.$store.state.imagelink = src;
      this.$store.state.notificationTextColor = color;
      this.$store.state.notificationBody = msg;
      console.log(this.$store.state.notificationTitle);
      setTimeout(() => {
        this.$store.state.shownotificationtoast = false;
      }, 2000);
    },

    genderSel(e) {
      this.gender = e.value;
      console.log(this.gen);
    },
    genderChildSel(e1) {
      this.cgen = e1.value;
    },

    btnData(ind) {
      var me = this;
      // console.log(ind)
      switch (ind) {
        case 0:
          for (let i = 0; i < this.buttonData.length; i++) {
            if (i == 0) {
              this.buttonData[i].color = "#3b371e";
              this.buttonData[i].fontColor = "#fff";
              this.buttonData[i].icon = this.buttonData[i].activeIcon;
              // this.tabinputone = true
              this.show1 = true;
              this.show2 = false;
              this.show3 = false;
            } else {
              this.buttonData[i].color = "#fff";
              this.buttonData[i].fontColor = "#000000";
              this.buttonData[i].icon = this.buttonData[i].deactiveIcon;
              // this.tabinputtwo = false
            }
          }
          break;
        case 1:
          for (let i = 0; i < this.buttonData.length; i++) {
            if (i == 1) {
              this.buttonData[i].color = "#3b371e";
              this.buttonData[i].fontColor = "#fff";
              this.buttonData[i].icon = this.buttonData[i].activeIcon;
              this.show1 = false;
              this.show2 = true;
              this.show3 = false;

              // this.tabinputtwo = true
            } else {
              this.buttonData[i].color = "#fff";
              this.buttonData[i].fontColor = "#000000";
              this.buttonData[i].icon = this.buttonData[i].deactiveIcon;

              // this.tabinputone = false
            }
          }
          break;
        case 2:
          for (let i = 0; i < this.buttonData.length; i++) {
            if (i == 2) {
              this.buttonData[i].color = "#3b371e";
              this.buttonData[i].fontColor = "#fff";
              this.buttonData[i].icon = this.buttonData[i].activeIcon;
              this.show1 = false;
              this.show2 = false;
              this.show3 = true;
              // this.tabinputtwo = true
            } else {
              this.buttonData[i].color = "#fff";
              this.buttonData[i].fontColor = "#000000";
              this.buttonData[i].icon = this.buttonData[i].deactiveIcon;

              // this.tabinputone = false
            }
          }
          break;

        default:
      }
    },
    jump(to) {
      if (this.$router) {
        this.$router.push(to);
      }
    },
    pdfDownloadNptification() {
      console.log("function working");
      this.$store.state.shownotificationtoast = true;
      this.$store.state.notificationTitle = "PDF downloaded";
      this.$store.state.notificationBody =
        "You have Successfully downloaded the pdf";
      console.log(this.$store.state.notificationTitle);
      setTimeout(() => {
        this.$store.state.shownotificationtoast = false;
      }, 3000);
    },
    // jump(to) {
    //       if (this.$router) {
    //           this.$router.push(to)
    //       }
    //   },
    testApp(caseid) {
      switch (caseid) {
        case 1:
          this.showEmail = true;
          break;
        case 2:
          this.showEmail = false;
          break;
      }
    },
    beforeRouteLeave(to, form, next) {
      var me = this;

      const benefitIllustration = "";
      console.log("Form Data is");
      if (this.proposalBindFlow == "true") {
        var productLeadData = me.$store.getters.getProductLeaddata;
        console.log(productLeadData);
        //this.leadID = this.formDat[1].leadId._id;
        this.leadID = productLeadData[1].leadId._id;
        // this.productID = this.formDat[0].productId._id;
        this.productID = productLeadData[0].productId._id;
        //var ideni = this.formDat[1].leadId.userId._id;
        var ideni = productLeadData[1].leadId.userId._id;
        console.log("Identity is", ideni);
        var identiy = "A" + ideni.slice(16, 25).toUpperCase();
      } else {
        console.log(this.form);
        for (var i = 0; i < this.form.length; i++) {
          this.leadID = this.form[i].leadId._id;
          var iden = this.form[i]._id;
          var createddate = this.form[i].createdDate;
          console.log(this.leadID, this.productID, iden, createddate);
        }
        // this.productID = "5ac71c50389e780bccd2ad72";
        var identiy = "A" + iden.slice(16, 25).toUpperCase();
      }
      var sevendaysmilisec = parseInt(604800000);
      var Deadline_MS = parseInt(createddate + sevendaysmilisec);
      console.log(Deadline_MS, "DeadlinMS", createddate, "createddate");

      const NotifyData = {
        first_name: this.formDat.NameofLifeAssured,
        notification_body:
          this.formDat.NameofLifeAssured +
          "|" +
          identiy +
          "|" +
          "Deadline:" +
          moment(Deadline_MS).format("L"),
        notification_type: "applications",
        notification_subtype: "new",
        PlanName: this.productName, // plan option
        PremiumAmount: this.formDat.InstallmentPremium //Installment Premium
        // CFRType:CFRType ,
        // LoginDate:LoginDate ,
        // Deadline:Deadline ,  // Ashraf
      };
      console.log(NotifyData);
      const formData = {
        IclocksProposerandLifetobe: "test",
        ra: "",
        igneous: "",
        yardland: "",
        parquet: "",
        amblystegite: "",
        crowstone: "",
        Polychaeta: "",
        partisan: "",
        obsession:"",
        donatress:"",
        muircock:"",
        pseudochronism:"",
        iguanian:"",
        userId: me.$store.state.agentDetails._id,
        leadId: this.leadID,
        productId: this.productID,
        AdvisorName: this.Adname,
        AdvisorCode: this.Adcode,
        CalculatorType: this.calType,
        NameofLifeAssured: this.name,
        GenderofLifeAssured: this.gender,
        DateofBirthofLifeAssured: this.dobassured,
        ChildName: this.childName,
        ChildGender: this.cgen,
        ChildDateofBirth: this.dateChild,
        RelationshipofChildwithLifeAssured: this.childrelationship,
        PolicyTerm: this.policy,
        PremiumPayingTerm: this.premium,
        PremiumMode: this.mode,
        PremiumType: this.ptype,
        MethodofPaymentecs: this.ecs,
        InvestmentOption: this.invoption,
        DeathBenefitOption: this.death,
        AgeProof: this.aproof,
        AnnuityFrequency: this.annFreq,
        AnnuityOption: this.annOption,
        DoyouwanttoaddRidercstothisplan: this.ridersplan,
        InstallmentPremium: parseInt(this.inspremium),
        SumAssured: parseInt(this.sum),
        LifeEquityFund3: parseInt(this.eqfund3),
        LifePureEquityFund2: parseInt(this.eqfund2),
        MakeinIndiaFund: parseInt(this.mindia),
        LifeBalancedFund1: parseInt(this.balfund1),
        LifeCorporationBondFund1: parseInt(this.corpfund1),
        LifeMoneyMarketFund1: parseInt(this.moneyfund1),
        SmartPensionFund1: parseInt(this.pensionfund),
        proposalStatus: "draft"
      };

      console.log(formData);
      this.idenCollection = me.$store.getters.getProposalIDCollection;
      console.log(this.idenCollection);
      if (this.proposalBindFlow == "true") {
        stream.fetch(
          {
            method: "POST",
            url: "http://159.89.161.64:5010/secure/user/addProposal",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            type: "json"
          },

          function(response) {
            //   var me = this
            var errcodeAPI = -1;
            if (response.data.errCode == errcodeAPI) {
              // me.$store.dispatch('ADD_APPDATA', [{formData}],benefitIllustration)
              //  me.$store.commit('ADD_APPFORMDATA',[{formData}],benefitIllustration)
              // me.$store.commit("ADD_BI_DATA", {
              //   benefitIllustration: formData
              // });
              console.log("get in progress:" + JSON.stringify(response));
              var responseData = response.data.errMsg._id;
              var creatDate = response.data.errMsg.createdDate;
              console.log(creatDate);
              me.$store.commit("ADD_PROPID", responseData);
              console.log(
                "Response ID from Get after Generate is",
                responseData.data.errMsg
              );
              //GET PROPOSALS
              // var proposalArr = [];

              var DemoProposaData = [
                {
                  benefitIllustration: {},
                  leadId: {},
                  createdDate: creatDate,
                  _id: responseData,
                  productId: "",
                  proposalStatus: "",
                  personalDetails: {
                    IclocksProposerandLifetobe: "test"
                  },
                  nomineeDetails: {},
                  familyhistoryDetails: {},
                  lifeinsuranceDetails: {},
                  detailsOfWitness: {},
                  misc: {},
                  confidentialReport: {},
                  paymentOptions: {},
                  documentUpload: {}
                }
              ];
              me.$store.commit("ADD_FORMDATA", DemoProposaData);
              me.GET("getProposal/" + responseData, response => {
                console.log(response.data.errMsg);
                // me.$store.state.applicationFormData[0].benefitIllustration = response.data.errMsg.benefitIllustration
                var BIdataGET = response.data.errMsg[0].benefitIllustration;
                var leadObj = response.data.errMsg[0].leadId;
                var prodObj = response.data.errMsg[0].productId;
                console.log("BI RESPONSE IS", BIdataGET, leadObj, prodObj);
                console.log("BI RESPONSE IS", leadObj);
                console.log("BI RESPONSE IS", prodObj);
                me.$store.commit("Add_BI_GETDATA", BIdataGET, leadObj, prodObj);
                me.$store.commit("Add_BI_GETDATA_Lead", leadObj);
                me.$store.commit("Add_BI_GETDATA_Prod", prodObj);
                //  DemoProposaData.benefitIllustration.push(response.data.errMsg)
                //  console.log("Response from Get after Generate is",obj)
                //  me.$store.commit('ADD_FORMDATA',obj)
                var errcodeAPI = -1;
              });
              //END GET PROPOSALS
              //me.$store.commit('ADD_FORMDATA',responseData)
              me.toast("", "green", "Successfully completed Proposal");
              // modal.toast({
              //     message: 'Successfully Added Proposal',
              //     duration: 1
              // })

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
                    me.$store.commit("SET_PROPOSALFLOW_STATUS", "true");
                    me.$store.commit("POST_FLOW_STATUS", "false");
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
      } else {
        stream.fetch(
          {
            method: "PUT",
            url:
              "http://159.89.161.64:5010/secure/user/updateProposal/" +
              me.$store.proposal_id,
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            type: "json"
          },

          function(response) {
            //   var me = this
            var errcodeAPI = -1;
            if (response.data.errCode == errcodeAPI) {
              // me.$store.dispatch(
              //   "ADD_APPDATA",
              //   [{ formData }],
              //   benefitIllustration
              // );
              me.$store.commit(
                "ADD_APPFORMDATA",
                [
                  {
                    formData
                  }
                ],
                benefitIllustration
              );
              console.log("get in progress:" + JSON.stringify(response));
              me.toast("", "green", "Successfully completed Proposal");
              // modal.toast({
              //     message: 'Successfully Added Proposal',
              //     duration: 1
              // })

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
      }

      next();
    },

    calculateData() {
      var me = this;

      const benefitIllustration = "";
      console.log("Form Data is");
      if (this.proposalBindFlow == "true") {
        var productLeadData = me.$store.getters.getProductLeaddata;
        console.log(productLeadData);
        //this.leadID = this.formDat[1].leadId._id;
        this.leadID = productLeadData[1].leadId._id;
        // this.productID = this.formDat[0].productId._id;
        this.productID = productLeadData[0].productId._id;
        //var ideni = this.formDat[1].leadId.userId._id;
        var ideni = productLeadData[1].leadId.userId._id;
        console.log("Identity is", ideni);
        var identiy = "A" + ideni.slice(16, 25).toUpperCase();
      } else {
        console.log(me.form);
        for (var i = 0; i < me.form.length; i++) {
          this.leadID = me.form[i].leadId._id;
          var iden = me.form[i]._id;
          this.productID = me.form[i].productId;
          var createddate = me.form[i].createdDate;
          console.log(me.leadID, me.productID, iden, createddate);
        }
        // this.productID = this.productID;
        var identiy = "A" + iden.slice(16, 25).toUpperCase();
      }
      console.log(this.leadID, "lead Id");

      const NotifyData = {
        // first_name: this.formDat.NameofLifeAssured,
        notification_body:
          this.formDat.NameofLifeAssured +
          "|" +
          identiy +
          "|" +
          "Deadline:" +
          moment(createddate).format("L"),
        notification_type: "applications",
        notification_subtype: "new",
        ClientName: this.formDat.NameofLifeAssured,
        PlanName: this.productName, // plan option
        PremiumAmount: this.formDat.InstallmentPremium, //Installment Premium
        CFRType: "Draft",
        leadId: this.leadID
        // LoginDate:Date.now() ,
        // Deadline:Deadline ,  // Ashraf
      };
      console.log(NotifyData);
      const formData = {
        IclocksProposerandLifetobe: "test",
       ra: "",
        igneous: "",
        yardland: "",
        parquet: "",
        amblystegite: "",
        crowstone: "",
        Polychaeta: "",
        partisan: "",
        obsession:"",
        donatress:"",
        muircock:"",
        pseudochronism:"",
        iguanian:"",
        userId: me.$store.state.agentDetails._id,
        leadId: this.leadID,
        productId: this.productID,
        AdvisorName: this.Adname,
        AdvisorCode: this.Adcode,
        CalculatorType: this.calculatorType,
        NameofLifeAssured: this.name,
        GenderofLifeAssured: this.gender,
        DateofBirthofLifeAssured: this.dobassured,
        ChildName: this.childName,
        ChildGender: this.cgen,
        ChildDateofBirth: this.dateChild,
        RelationshipofChildwithLifeAssured: this.childrelationship,
        PolicyTerm: this.policy,
        PremiumPayingTerm: this.premium,
        PremiumMode: this.mode,
        PremiumType: this.ptype,
        MethodofPaymentecs: this.ecs,
        InvestmentOption: this.invoption,
        DeathBenefitOption: this.death,
        AgeProof: this.aproof,
        AnnuityFrequency: this.annFreq,
        AnnuityOption: this.annOption,
        DoyouwanttoaddRidercstothisplan: this.ridersplan,
        InstallmentPremium: parseInt(this.inspremium),
        SumAssured: parseInt(this.sum),
        LifeEquityFund3: parseInt(this.eqfund3),
        LifePureEquityFund2: parseInt(this.eqfund2),
        MakeinIndiaFund: parseInt(this.mindia),
        LifeBalancedFund1: parseInt(this.balfund1),
        LifeCorporationBondFund1: parseInt(this.corpfund1),
        LifeMoneyMarketFund1: parseInt(this.moneyfund1),
        SmartPensionFund1: parseInt(this.pensionfund),
        proposalStatus: "draft"
      };

      console.log(formData);
      console.log(this.postflowStatus);
      if (this.proposalBindFlow == "true" && this.postflowStatus == "true") {
        stream.fetch(
          {
            method: "POST",
            url: "http://159.89.161.64:5010/secure/user/addProposal",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            type: "json"
          },

          function(response) {
            //   var me = this
            var errcodeAPI = -1;
            if (response.data.errCode == errcodeAPI) {
              // me.$store.dispatch('ADD_APPDATA', [{formData}],benefitIllustration)
              //  me.$store.commit('ADD_APPFORMDATA',[{formData}],benefitIllustration)
              // me.$store.commit("ADD_BI_DATA", {
              //   benefitIllustration: formData
              // });
              console.log("get in progress:" + JSON.stringify(response));
              var responseData = response.data.errMsg._id;
              var creatDate = response.data.errMsg.createdDate;
              console.log(creatDate);
              me.$store.commit("ADD_PROPID", responseData);
              console.log(
                "Response ID from Get after Generate is",
                response.data.errMsg
              );
              //GET PROPOSALS
              // var proposalArr = [];

              var DemoProposaData = [
                {
                  benefitIllustration: {},
                  leadId: {},
                  createdDate: creatDate,
                  _id: responseData,
                  productId: "",
                  proposalStatus: "",
                  personalDetails: {},
                  nomineeDetails: {},
                  familyhistoryDetails: {},
                  lifeinsuranceDetails: {},
                  detailsOfWitness: {},
                  misc: {},
                  confidentialReport: {},
                  paymentOptions: {},
                  documentUpload: {
                      UploadAddressProof:{},
                      UploadIDProof:{},
                      UploadAgeProof:{},
                      UploadIncomeProof:{},
                      UploadPhotoID:{},
                      CustomerDeclarationCapture:{}

                }
                }
              ];
              me.$store.commit("ADD_FORMDATA", DemoProposaData);
              me.GET("getProposal/" + responseData, response => {
                console.log(response.data.errMsg);
                // me.$store.state.applicationFormData[0].benefitIllustration = response.data.errMsg.benefitIllustration
                var BIdataGET = response.data.errMsg[0].benefitIllustration;
                var leadObj = response.data.errMsg[0].leadId;
                var prodObj = response.data.errMsg[0].productId;
                console.log("BI RESPONSE IS", BIdataGET, leadObj, prodObj);
                console.log("BI RESPONSE IS", leadObj);
                console.log("BI RESPONSE IS", prodObj);
                me.$store.commit("Add_BI_GETDATA", BIdataGET, leadObj, prodObj);
                me.$store.commit("Add_BI_GETDATA_Lead", leadObj);
                me.$store.commit("Add_BI_GETDATA_Prod", prodObj);
                //  DemoProposaData.benefitIllustration.push(response.data.errMsg)
                //  console.log("Response from Get after Generate is",obj)
                //  me.$store.commit('ADD_FORMDATA',obj)
                var errcodeAPI = -1;
              });
              //END GET PROPOSALS
              //me.$store.commit('ADD_FORMDATA',responseData)
              me.toast("", "green", "Successfully completed Proposal");
              // modal.toast({
              //     message: 'Successfully Added Proposal',
              //     duration: 1
              // })

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
                    me.toast(
                      "",
                      "green",
                      "Successfully completed Posting Proposal"
                    );
                    // modal.toast({
                    //     message: 'Successfully Added Proposal',
                    //     duration: 1
                    // })
                    me.$store.commit("SET_PROPOSALFLOW_STATUS", "false");
                    me.$store.commit("SET_POST_FLOW_STATUS", "false");
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
      } else {
        stream.fetch(
          {
            method: "PUT",
            url: "http://159.89.161.64:5010/secure/user/updateProposal/" + iden,
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            type: "json"
          },

          function(response) {
            //   var me = this
            var errcodeAPI = -1;
            if (response.data.errCode == errcodeAPI) {
              // me.$store.dispatch(
              //   "ADD_APPDATA",
              //   [{ formData }],
              //   benefitIllustration
              // );
           me.$store.commit('ADD_APPFORMDATA',{benefitIllustration: formData})
              console.log("get in progress:" + JSON.stringify(response));
              // me.toast("", "green", "Successfully completed Proposal");
              // modal.toast({
              //     message: 'Successfully Added Proposal',
              //     duration: 1
              // })

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
                    me.toast(
                      "",
                      "green",
                      "Successfully completed Putting Proposal"
                    );
                    // modal.toast({
                    //     message: 'Successfully Added Proposal',
                    //     duration: 1
                    // })

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
      }
    },
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
    deathOption() {
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
      console.log("Regular");
      this.color = "#3b371e";
      this.fontColor = "#fff";
      this.icon = "../../web/assets/piggy-white.png";
      this.color1 = "#fff";
      this.fontColor1 = "#000000";
      this.icon1 =
        "https://www.materialui.co/materialIcons/action/description_black_192x192.png";
      this.color2 = "#fff";
      this.fontColor2 = "#000000";
      this.icon2 =
        "https://www.materialui.co/materialIcons/image/picture_as_pdf_black_192x192.png";

      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
    },
    unfortunate() {
      console.log("unfo");
      this.color = "#fff";
      this.fontColor = "#000000";
      this.icon = "../../web/assets/piggy-black.png";
      this.color1 = "#3b371e";
      this.fontColor1 = "#fff";
      this.icon1 =
        "https://www.materialui.co/materialIcons/action/description_white_192x192.png";
      this.color2 = "#fff";
      this.fontColor2 = "#000000";
      this.icon2 =
        "https://www.materialui.co/materialIcons/image/picture_as_pdf_black_192x192.png";
      this.show2 = true;
      this.show1 = false;
      this.show3 = false;
    },
    bi() {
      this.color = "#fff";
      this.fontColor = "#000000";
      this.icon = "../../web/assets/piggy-black.png";
      this.color1 = "#fff";
      this.fontColor1 = "#000000";
      this.icon1 =
        "https://www.materialui.co/materialIcons/action/description_black_192x192.png";
      this.color2 = "#3b371e";
      this.fontColor2 = "#000000";
      this.icon2 =
        "https://www.materialui.co/materialIcons/image/picture_as_pdf_white_192x192.png";
      this.show3 = true;
      this.show2 = false;
      this.show1 = false;
    }
  }
};
</script>

<style scoped>
/* .page-animation{
       opacity:0;
   } */

.cal-icn {
  height: 40px;
  width: 40px;
  margin-top: 5px;
}

.benefit-button-value {
  justify-content: center;
  height: 60px;
  width: 200px;
  font-size: 24px;
  padding: 5px;
  font-family: robotoregular;
  border-width: 1px;
  border-style: solid;
  border-top-color: rgb(139, 139, 139);
  border-right-color: rgb(139, 139, 139);
  border-left-color: rgb(139, 139, 139);
  border-bottom-color: rgb(139, 139, 139);
  flex-direction: row;
  align-items: center;
}

.table-container {
  flex-direction: column;
}

.txt-mb-20 {
  margin-bottom: 20px;
}
/* calendar width 50%  */

.mt-20 {
  margin-top: 20px;
}
/* .ml-20{
          margin-left: 20px
      } */

.application-btn-position {
  padding-top: 10px;
  flex-direction: row;
  justify-content: flex-start;
}

.documt-box-pading-application {
  padding: 10px;
}

.test-app-btn-width {
  width: 150px;
}

.mobile-drop-dwn-padding {
  margin-left: 20px;
}

.test-app-width {
  flex: 1;
}
/* apk button */

.test-app-btn-width-email {
  width: 200px;
}

.test-app-btn-width-down-pdf {
  width: 250px;
}

.test-app-btn-width-proceed {
  width: 200px;
}

.radio-margin-top {
  margin-top: 7px;
}

.robotoregular {
  font-family: robotoregular;
}

.scroller {
  /* background-color: #f7f7f7; */
}

.row {
  flex-direction: column;
}

.card-proposal-application {
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
  color: #9d9d9d;
  font-family: robotoregular;
}

.main-heading {
  font-size: 15px;
  padding-top: 20px;
  font-family: robotobold;
  font-family: robotoregular;
}

.prop-address-card-title-border {
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

.label-enter-detail-width-line {
  width: 150px;
}

.label-fund-alloc-width-line {
  width: 250px;
}

.label-benifit-illu-alloc-width-line {
  width: 220px;
}

.label-summery-width-line {
  width: 120px;
}

.heading {
  font-size: 25px;
  padding-top: 20px;
  padding-bottom: 05px;
  font-family: robotobold;
}

.test-app-btn-padding {
  flex-direction: row;
  padding: 12px;
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
  padding-left: 3px;
  padding-right: 3px;
}

.side-container {
  flex-direction: column;
  flex: 2;
}

.input {
  display: block;
  background-color: #fff;
  font-size: 24px;
  padding: 15px;
  padding-left: 0px;
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

.input-drop {
  display: block;
  background-color: #fff;
  font-size: 28px;
  padding: 20px;
  padding-left: 0px;
  /* margin-bottom: 20px; */
  color: #999999;
  border-width: 2px;
  border-top: none;
  border-style: solid;
  border-top-color: #fff;
  border-right-color: #fff;
  border-left-color: #fff;
  border-bottom-color: #999999;
  font-family: robotoregular;
}

.input-drop:focus {
  border-width: 2px;
  border-bottom-color: #2e4053;
}

.input:focus {
  border-width: 1px;
  border-bottom-color: #2e4053;
}

.switch {
  margin-top: 16px;
}

.btn-space {
  justify-content: space-between;
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
  font-family: robotoregular;
}

.md-sec-btn-label {
  font-size: 31px;
  font-weight: 500;
  color: #000;
  font-family: robotoregular;
}

.md-custom-btn:active {
  opacity: 0.8;
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
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  font-family: robotoregular;
}

.row-btn {
  flex-direction: row;
}

.card-subtitle-head {
  font-size: 14px;
  margin: 0;
  color: #9d9d9d;
  line-height: 18px;
  font-family: robotoregular;
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
  font-family: robotobold;
}

.image {
  padding-top: 10px;
  width: 600px;
  height: 500px;
}

.consent {
  white-space: normal;
}

.form-title {
  font-size: 24px;
  /* padding-top: 10px; */
  color: #9d9d9d;
  font-family: robotoregular;
}

.form-title-method {
  font-size: 24px;
  /* padding-top: 10px; */
  color: #9d9d9d;
  font-family: robotoregular;
}

.form-error-title {
  font-size: 24px;
  color: red;
  position: absolute;
  font-family: robotoregular;
  top: 69px;
}

.chkbox-title {
  flex: 1;
  font-size: 13px;
  margin-left: 10px;
  color: #9d9d9d;
  font-family: robotoregular;
}

.radio-title {
  color: #9d9d9d;
  font-size: 14px;
  font-family: robotoregular;
}

.example {
  margin-left: 10px;
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

.table-row {
  padding-left: 10px;
  padding-right: 10px;
  /* padding-top: 10px; */
}

.table-row-heading {
  padding-left: 10px;
  padding-right: 10px;
  /* padding-top: 10px; */
}

.table-row-excep-details {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  padding-left: 10px;
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
  font-family: robotobold;
  margin-left: 20px;
  font-size: 13px;
  color: #565656;
  font-family: robotoregular;
}

.card-heading {
  padding: 10px;
  font-size: 14px;
  color: #3b371e;
  font-family: robotobold;
  font-family: robotoregular;
}

.mail-row {
  flex-direction: column;
}

.radio-data {
  flex-direction: column;
  flex: 0;
}

.nx-flex-row {
  flex-direction: row;
}

.box {
  padding: 10px;
}

.x-small-btn {
  width: 210px;
}

.md-custom-btn {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 70px;
  min-width: 88px;
}

.btn-color {
  background-color: #3b371e;
}

.btn-icon-size {
  height: 30px;
  width: 30px;
  margin-right: 15px;
}

.md-btn-label {
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  font-family: robotoregular;
}

.btn-space {
  justify-content: space-between;
}

@media only screen and (min-width: 320px) {
  .table-container {
    flex-direction: column;
  }
  /*Gender Button CSS*/
  .gender-spacing {
    margin-top: 10px;
  }
  /*Button CSS*/
  .benefit-button-padding {
    background-color: #fff;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-top: 10px;
  }
  .benefit-button-center {
    justify-content: center;
  }
  .benefit-button-char {
    font-size: 12px;
    font-family: robotoregular;
  }
  .benefit-button-value {
    width: 100px;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    padding: 5px;
    font-family: robotoregular;
    /* border:1px solid rgb(139,139,139); */
    border-bottom: 1px solid rgb(139, 139, 139);
    border-top: 1px solid rgb(139, 139, 139);
    border-left: 0.5px solid rgb(139, 139, 139);
    border-right: 0.5px solid rgb(139, 139, 139);
    flex-direction: row;
    align-items: center;
  }
  .benefit-button-value1 {
    width: 110px;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    padding: 5px;
    font-family: robotoregular;
    /* border:1px solid rgb(139,139,139); */
    border-bottom: 1px solid rgb(139, 139, 139);
    border-top: 1px solid rgb(139, 139, 139);
    border-left: 0.5px solid rgb(139, 139, 139);
    border-right: 0.5px solid rgb(139, 139, 139);
    flex-direction: row;
    align-items: center;
  }
  .benefit-button-value2 {
    width: 140px;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    padding: 5px;
    font-family: robotoregular;
    /* border:1px solid rgb(139,139,139); */
    border-bottom: 1px solid rgb(139, 139, 139);
    border-top: 1px solid rgb(139, 139, 139);
    border-left: 0.5px solid rgb(139, 139, 139);
    border-right: 0.5px solid rgb(139, 139, 139);
    flex-direction: row;
    align-items: center;
  }
  .benefit-button-value3 {
    width: 110px;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    padding: 5px;
    font-family: robotoregular;
    /* border:1px solid rgb(139,139,139); */
    border-bottom: 1px solid rgb(139, 139, 139);
    border-top: 1px solid rgb(139, 139, 139);
    border-left: 0.5px solid rgb(139, 139, 139);
    border-right: 0.5px solid rgb(139, 139, 139);
    flex-direction: row;
    align-items: center;
  }
  .benefit-border {
  }
  .tab-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -8px;
    left: -10px;
  }
  .benefit-pad-lft {
    padding-left: 10px;
  }
  .cursor-pointer-globle {
    cursor: pointer;
  }
  /*END*/
  .txt-mb-20 {
    margin-bottom: 0px;
  }
  .test-app-btn-width-unfortunate {
    width: 50%;
  }
  .test-app-btn-width-email {
    width: 45%;
  }
  .test-app-btn-width-bi {
    width: 24%;
  }
  .test-app-btn-width-down-pdf {
    width: 50%;
  }
  .test-app-btn-width-proceed {
    width: 27%;
  }
  .test-app-btn-width-regular {
    width: 30%;
  }
  .table-row {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0px;
  }
  .image {
    padding-top: 10px;
    width: 100%;
    height: 200px;
  }
  .table-row-excep-details {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
  }
  .mt-20 {
    margin-top: 0px;
  }
  .ml-20 {
    margin-left: 0px;
  }
  .mobile-top-20 {
    margin-top: 20px;
  }
  .documt-box-pading-application {
    padding: 5px;
  }
  .test-app-btn-width {
    width: 35%;
  }
  .mb-30-mobile {
    margin-bottom: 20px;
  }
  /* calender width  */
  .test-app-width {
    flex: unset;
    width: 100%;
  }
  .radio-margin-top {
    margin-top: 15px;
  }
  .margin-top {
    /* margin-top: 10px; */
  }
  .label-enter-detail-width-line {
    width: 90px;
  }
  .label-fund-alloc-width-line {
    width: 140px;
  }
  .label-benifit-illu-alloc-width-line {
    width: 130px;
  }
  .label-summery-width-line {
    width: 70px;
  }
  .card-proposal-application {
    border: none;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin: 10px 5px 20px 5px;
  }
  .card-subtitle-details {
    font-size: 20px;
    padding-top: 10px;
  }
  .nx-flex-row {
    flex-direction: row;
    /* justify-content: space-around */
  }
  .container {
    flex-direction: column;
  }
  .md-btn-label {
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    font-family: robotoregular;
  }
  .btn-color {
    background-color: #3b371e;
  }
  .md-sec-btn-label {
    color: #000;
    font-size: 11px;
    font-weight: 500;
    font-family: robotoregular;
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
    padding-top: 0px;
    color: #9d9d9d;
    font-family: robotoregular;
  }
  .form-title-method {
    font-size: 14px;
    padding-top: 0px;
    color: #9d9d9d;
    font-family: robotoregular;
  }
  .form-error-title {
    font-size: 14px;
    color: red;
    position: absolute;
    font-family: robotoregular;
    top: 69px;
  }
  .heading {
    font-size: 15px;
    padding-top: 20px;
    font-family: robotobold;
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
    font-family: robotoregular;
  }
  .input-drop {
    display: block;
    background-color: #fff;
    font-size: 14px;
    padding: 10px;
    padding-left: 28px;
    /* margin-bottom: 20px; */
    color: #9999;
    border-width: 2px;
    border-top: none;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #c7c7c7;
    placeholder-color: #9d9d9d;
    font-family: robotoregular;
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
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    font-family: robotoregular;
  }
  .radio-data {
    flex-direction: column;
    flex: 1;
  }
  .md-btn-width {
    width: 50%;
  }
  .box {
    padding: 5px;
  }
  .x-small-btn {
    width: 32%;
  }
  .md-custom-btn {
    border-radius: 2px;
    height: 30px;
    min-width: 88px;
  }
  .btn-icon-size {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }
  .md-btn-label {
    font-size: 11px;
    font-family: robotoregular;
  }
}

@media only screen and (min-width: 768px) {
  .table-container {
    flex-direction: row;
  }
  .gender-spacing {
    margin-bottom: 4px;
    margin-top: 0px;
  }
  .table-row {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  }
  .mobile-top-20 {
    margin-top: 0px;
  }
  .test-app-btn-width-unfortunate {
    width: 30%;
  }
  .test-app-btn-width-bi {
    width: 30%;
  }
  .test-app-btn-width-down-pdf {
    width: 30%;
  }
  .test-app-btn-width-proceed {
    width: 30%;
  }
  .test-app-btn-width-regular {
    width: 30%;
  }
  .margin-top-desktop {
    margin-top: 10px;
  }
  .pt-10 {
    padding-top: 10px;
  }
  .image {
    padding-top: 10px;
    width: 100%;
    height: 400px;
  }
  .test-app-btn-width-email {
    width: 20%;
  }
  .test-app-btn-width {
    width: 20%;
  }
  .mb-30-mobile {
    margin-bottom: 0px;
  }
  .card-proposal-application {
    margin: 10px;
  }
  .container {
    flex-direction: row;
  }
  .footer-btn {
    flex-direction: row;
  }
  .form-title {
    font-size: 14px;
    padding-top: 10px;
    color: #9d9d9d;
    font-family: robotoregular;
  }
  .form-title-method {
    font-size: 14px;
    padding-top: 0px;
    color: #9d9d9d;
    font-family: robotoregular;
  }
  .form-error-title {
    font-size: 14px;
    color: red;
    position: absolute;
    font-family: robotoregular;
    top: 69px;
  }
  .heading {
    font-size: 15px;
    padding-top: 20px;
    font-family: robotobold;
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
    font-family: robotoregular;
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
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    font-family: robotoregular;
  }
  .radio-data {
    flex-direction: row;
  }
  .md-btn-width {
    width: 30%;
  }
  .test-app-width {
    flex: unset;
    width: 50%;
  }
}

@media only screen and (min-width: 992px) {
  .md-btn-width {
    width: 20%;
  }
  .summery-cd-mar {
    margin-left: 10px;
  }
  .test-app-btn-width {
    width: 13%;
  }
  .test-app-btn-width-email {
    width: 13%;
  }
  .test-app-btn-width-unfortunate {
    width: 13%;
  }
  .test-app-btn-width-bi {
    width: 13%;
  }
  .test-app-btn-width-down-pdf {
    width: 13%;
  }
  .test-app-btn-width-proceed {
    width: 13%;
  }
  .test-app-btn-width-regular {
    width: 13%;
  }
  .image {
    padding-top: 10px;
    width: 70%;
    height: 500px;
  }
}
</style>