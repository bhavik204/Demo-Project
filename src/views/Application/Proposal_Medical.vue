<template>
    <div style="background-color: #f7f7f7;">
        <!-- <inner-header :headeTitle="headerName"></inner-header>
     
        <application-tab></application-tab> -->
        <!-- <main-tab v-if="platform === 'Web'"></main-tab> -->
                <!-- <app-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></app-header> -->



                <div class="side-container  page-animation" ref="pagewrap">
                    <div class="card-proposal-medical">
                        <div class="table-row-heading" style="flex-direction: column;">
                            <text class="heading prop-medical-card-title-border medical-width">Life Style and Medical</text>
                        </div>
                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">1) Are you currently or do you intend engaging in any hazardous occupation or hobbies, eg. Working at heights, undergroundor offshore, using explosives, flying other than as fare-paying passenger,diving,mountaineering or any other dangerous activity?
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


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="hazoccup" name="hazardous" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="hazoccup" name="hazardous" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>
                                <div class="table-row" v-if="hazoccup == 'Yes'" style="flex:3">
                                    <div class="" style="flex:1">
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Working at heights" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Working at heights</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" style="flex:1">    
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Working underground" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Working underground</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" style="flex:1">
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Working in mineFlying other than as a fare passengers" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Flying other than as a fare passenger</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-row" v-if="hazoccup == 'Yes'" style="flex:3">
                                    <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Working at mines" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Working in mines</text>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="" style="flex:1">
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Diving" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Diving</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" style="flex:1">
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Mountaineering" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Mountaineering</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-row" v-if="hazoccup == 'Yes'" style="flex:3">
                                    <div class="" style="flex:1">
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Offshore/Oil and Natural gas" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Offshore/Oil and Natural gas</text>
                                            </div>
                                        </div>
                                        </div>
                                    <div class="" style="flex:1">
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Any other Hazardous avocation/occupation" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Any other Hazardous avocation/occupation</text>
                                            </div>
                                        </div>
                                        </div>
                                    <div class="" style="flex:1">
                                        <wxc-checkbox v-if="platform !== 'Web'" title="Using Explosives" :disabled="false" :checked="true"></wxc-checkbox>
                                        <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                                <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                                <text class="chkbox-title">Using Explosives</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>




                        </div>
                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">2) Are you currently or do you intend to live or travel outside of India for more than 6 months?If yes, please provide full details of countries to be visited and purpose of visit and duration
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


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="outside" name="out" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="outside" name="out" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                          <div class="table-row">
                                    <div v-if="outside == 'Yes'" style="flex-direction: column;flex:1;" class="table-row-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Select Country</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in countryWeb">{{calc}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div v-if="outside == 'Yes'" style="flex-direction: column;flex:1;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Purpose of Visit</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="state">{{value7}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in purposeWeb">{{calc}}</option>
                                            </select>
                                        </div>

                                    </div>
                          

                                </div>
                                <div class="table-row" style="">

                                    <div v-if="outside == 'Yes'" style="flex-direction: column;flex:1;" class="table-row-details mt-20 mobile-top-20 ml-20">
                                        <vx-input-box
                                                vx-label="Duration"
                                                vx-placeholder="Enter Duration"
                                                :vx-model="outduration">
                                                </vx-input-box>

                                    </div>
                                    <div v-if="outside == 'Yes'" style="flex-direction: column;flex:1;" class="table-row-details mt-20 mobile-top-20 ml-20">
                                    </div>
                                </div>
                                    
                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">3)Habits: Do you smoke or have you smoked more than 5 cigarettes / E-Cigarettes or beedis or 3 Pouches of Gutka or Chewable Tobacco per day.
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


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="cigHabits" name="hab" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="cigHabits" name="hab" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>
                        </div>

                         <!-- <div class="table-row" v-if="hazoccup == 'Yes'" style="flex:3">
                                    <div class="" style="flex:1"> -->

                        <div class="table-row" v-if="cigHabits == 'Yes'" style="flex:5">
                            <div class="" style="flex:1"> 
                                <wxc-checkbox v-if="platform !== 'Web'" title="Cigarettes" :disabled="false" :checked="true"></wxc-checkbox>
                                <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Cigarettes</text>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="cigHabits == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <text  class="form-title">Count(per day)</text>
           
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="relationship">{{value2}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="cityData" class="cursor-pointer-globle">
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                    </select>
                                </div>
                            </div>

                            <div v-if="cigHabits == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <vx-input-box
                                    vx-label="Since"
                                    vx-placeholder="Enter No of Years"
                                    :vx-model="outduration">
                                </vx-input-box>

                            </div>
                                    
                        </div>


                        <div class="table-row" v-if="cigHabits == 'Yes'" style="flex:5">
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Chew Gutkha/Khaini" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Chew Gutkha/Khaini</text>
                                        </div>
                                    </div>
                            </div>
                            <div  style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <text  class="form-title">Count(per day)</text>
           
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="appointeegenderType">{{value3}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="cityData" class="cursor-pointer-globle">
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                    </select>
                                </div>
                            </div>
                            <div  style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <vx-input-box
                                        vx-label="Since"
                                        vx-placeholder="Enter No of Years"
                                        :vx-model="outduration">
                                    </vx-input-box>
                            </div>
                                    
                        </div>


                        <div class="table-row" v-if="cigHabits == 'Yes'" style="flex:5">
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Beedis" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Beedis</text>
                                        </div>
                                    </div>
                            </div>
                            <div style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <text  class="form-title">Count(per day)</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="appointeetitleType">{{value4}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="cityData" class="cursor-pointer-globle">
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>
                            <div style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <vx-input-box
                                        vx-label="Since"
                                        vx-placeholder="Enter No of Years"
                                        :vx-model="outduration">
                                </vx-input-box>
                            </div>
                         </div>


                        <div class="table-row" v-if="cigHabits == 'Yes'" style="flex:5">
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Chew Pan/Betelnut" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Chew Pan/Betelnut</text>
                                    </div>
                                    </div>
                            </div>
                            <div  style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Count(per day)</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="appointeeRelationship">{{value5}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                            </select>
                                        </div>

                                    </div>
                                         <div  style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                     <vx-input-box
                                             vx-label="Since"
                                             vx-placeholder="Enter No of Years"
                                             :vx-model="outduration">
                                            </vx-input-box>

                                    </div>
                                    
                         </div>
                          <div class="table-row" v-if="cigHabits == 'Yes'" style="flex:5">
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Other Forms of chewable Tobacco/Hookah" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Other Forms of chewable Tobacco/Hookah</text>
                                        </div>
                                    </div>
                            </div>
                            <div style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <text  class="form-title">Count(per day)</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="accountProof">{{value6}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="cityData" class="cursor-pointer-globle">
                                        <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>
                            <div  style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                     <vx-input-box
                                             vx-label="Since"
                                             vx-placeholder="Enter No of Years"
                                             :vx-model="outduration">
                                            </vx-input-box>

                            </div>
                                    
                         </div>
                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">4) Do you consume or have you consumed any form of alcohol / liquor exceeding 90ml or 3 Pegs of Hard Liquor or 2 glasses of beer / wine per week.
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
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


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="alcohol" name="alco" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="alcohol" name="alco" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="table-row" v-if="alcohol == 'Yes'" style="flex:5">
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Beer" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Beer</text>
                                    </div>
                                    </div>
                            </div>
                            <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Enter Qty(per week in ml)</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                            </select>
                                        </div>

                            </div>
                            <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                <vx-input-box
                                             vx-label="Duration"
                                             vx-placeholder="Enter No of Years"
                                             :vx-model="outduration">
                                </vx-input-box>

                            </div>
                                    
                         </div>


                         <div class="table-row" v-if="alcohol == 'Yes'" style="flex:5">
                            <div class="" style="flex:1"> 
                            <wxc-checkbox v-if="platform !== 'Web'" title="Rum/Whisky/Vodka" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Rum/Whisky/Vodka</text>
                                    </div>
                                    </div>
                            </div>
                                           <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Enter Qty(per week in ml)</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                            </select>
                                        </div>

                                    </div>
                                         <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                     <vx-input-box
                                             vx-label="Duration"
                                             vx-placeholder="Enter No of Years"
                                             :vx-model="outduration">
                                            </vx-input-box>

                                    </div>
                                    
                         </div>
                         <div class="table-row" v-if="alcohol == 'Yes'" style="flex:5">
                             <div class="" style="flex:1">
                           <wxc-checkbox v-if="platform !== 'Web'" title="Wine" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Wine</text>
                                    </div>
                                    </div>
                            </div>
                                           <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Enter Qty(per week in ml)</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                            </select>
                                        </div>

                                    </div>
                                         <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                     <vx-input-box
                                             vx-label="Duration"
                                             vx-placeholder="Enter No of Years"
                                             :vx-model="outduration">
                                            </vx-input-box>

                                    </div>
                                    
                         </div>
                         <div class="table-row" v-if="alcohol == 'Yes'" style="flex:5">
                             <div class="" style="flex:1">
                           <wxc-checkbox v-if="platform !== 'Web'" title="Any Other form of liquor" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Any Other form of liquor</text>
                                    </div>
                                    </div>
                             </div>
                                           <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                        <text  class="form-title">Enter Qty(per week in ml)</text>
                                        <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="city">{{value8}}</text>
                                        <div class="drop-down" v-if="platform == 'Web'">
                                            <select v-model="cityData" class="cursor-pointer-globle">
                                                <option value="">Select</option>
                                                <option class="dropdown-opt" v-for="calc in cigcountWeb">{{calc}}</option>
                                            </select>
                                        </div>

                                    </div>
                                         <div v-if="alcohol == 'Yes'" style="flex-direction: column;flex:2;" class="table-row-col-details mt-20 mobile-top-20 ml-20">
                                     <vx-input-box
                                             vx-label="Duration"
                                             vx-placeholder="Enter No of Years"
                                             :vx-model="outduration">
                                            </vx-input-box>

                                    </div>
                                    
                         </div>
                         

                        <div class="table-row">
                            <div style="flex-direction: column;flex:1" class=" mobile-top-20 mt-20">
                                <text class="form-title">Height in Feet</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="height">{{value}}</text>
                                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                                    <select style="flex:1" class="cursor-pointer-globle" v-model="heightFeet">
                                         <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in heightListWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>

                            <div style="flex-direction: column;flex:1" class="table-row-col-details mobile-top-20 mt-20">
                                <text class="form-title">Height in Inches</text>
                                <text v-if="platform !== 'Web'" class="input-drop" style="flex:1" @click="heightInch">{{value1}}</text>
                                <div class="drop-down" v-if="platform == 'Web'" style="flex:1">
                                    <select style="flex:1" class="cursor-pointer-globle" v-model="heightInchData">
                                          <option value="">Select</option>
                                        <option class="dropdown-opt" v-for="calc in heightInchesListWeb">{{calc}}</option>
                                    </select>
                                </div>


                            </div>
                        </div>
                        <div class="table-row">
                            <div style="flex-direction: column;flex:0.5" class="mt-20 mobile-top-20">
                                <!-- <text class="form-title">Weight in Kgs</text>
                                <input class="input" type="tel" v-model="weight" style="flex:0.5" /> -->
                                       <vx-input-box
                                             vx-type="tel"
                                               :hasRequired="true"
                                            message="Please enter the weight in Kgs."
                                             vx-label="Weight in kgs"
                                             vx-placeholder="Enter Weight in kgs "
                                             :vx-model="weightinkg"
                                                 @valueReading="weightinkg=$event.value">
                                            </vx-input-box>
                            </div>
                        </div>
                        <div class="table-row-check-title mt-20" style="flex-direction: column;">
                            <text class=" form-title">6) Are you currently taking any medication or drugs, other than minor conditions, (e.g. colds and flu), either prescribed by doctor, or have you suffered from any illness, disorder, disability or injury during the past 5 years which has required any form of medical or specialized examinations(including chest x-rays, gynecological inestigations, pap smear, or blood tests), consultaion,hospitalization or surgery?
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


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="medicalCondition" name="medication" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="medicalCondition" name="medication" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                        <div v-if="medicalCondition == 'Yes'" class="table-row">
                            <div style="flex-direction: column;flex:0.5" class="table-row-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Weight in Kgs</text>
                                <input class="input" type="tel" v-model="weight" style="flex:0.5" /> -->
                                       <vx-input-box
                                             vx-type="tel"
                                             vx-label="Name of illness "
                                             vx-placeholder="Enter Name of illness  "
                                             :vx-model="weight">
                                            </vx-input-box>
                            </div>
                             <div style="flex-direction: column;flex:0.5" class=" table-row-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Weight in Kgs</text>
                                <input class="input" type="tel" v-model="weight" style="flex:0.5" /> -->
                                       <vx-input-box
                                             vx-type="tel"
                                             vx-label="Name of medication"
                                             vx-placeholder="Enter Name of medication "
                                             :vx-model="weight">
                                            </vx-input-box>
                            </div>
                             <div style="flex-direction: column;flex:0.5" class=" table-row-col-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Weight in Kgs</text>
                                <input class="input" type="tel" v-model="weight" style="flex:0.5" /> -->
                                       <vx-input-box
                                             vx-type="tel"
                                             vx-label="Duration(Years)"
                                             vx-placeholder="Enter Duration(Years) "
                                             :vx-model="weight">
                                            </vx-input-box>
                            </div>
                        </div>

                        <div v-if="medicalCondition == 'Yes'" class="table-row" style="flex:4">
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Medical or Specilazed Examination" :disabled="false" :checked="true"></wxc-checkbox>
                                <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Medical or Specilazed Examination</text>
                                    </div>
                                </div>
                            </div>
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Consultation" :disabled="false" :checked="true"></wxc-checkbox>
                                <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Consultation</text>
                                    </div>
                                </div>
                            </div>
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Hospitalization" :disabled="false" :checked="true"></wxc-checkbox>
                                <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Hospitalization</text>
                                    </div>
                                </div>
                            </div>
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Surgery" :disabled="false" :checked="true"></wxc-checkbox>
                                <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                    <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                        <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                        <text class="chkbox-title">Surgery</text>
                                    </div>
                                </div>
                            </div>
                        </div>

                           <div v-if="medicalCondition == 'Yes'" style="flex-direction: column;flex:0.5" class=" table-row mt-20 mobile-top-20">
                                <!-- <text class="form-title">Weight in Kgs</text>
                                <input class="input" type="tel" v-model="weight" style="flex:0.5" /> -->
                                       <vx-input-box
                                             vx-label="Reason for the same"
                                             vx-placeholder="Enter Reason"
                                             :vx-model="weight">
                                            </vx-input-box>
                            </div>
                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">7) Do you have : congenital / birth defects, pain or problems in the back, spine, muscles or joint,arthritis,gout, severe injury or other physical disability and have you been incapable of working /attending the school during the last 2 years for more than 5 days or are you currently incapable of working / attending school?
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


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="birthCondition" name="defects" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="birthCondition" name="defects" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                         <div v-if="birthCondition == 'Yes'" class="table-row">
                            <div style="flex-direction: column;flex:0.5" class="table-row-details mt-20 mobile-top-20">
                                <!-- <text class="form-title">Weight in Kgs</text>
                                <input class="input" type="tel" v-model="weight" style="flex:0.5" /> -->
                                       <vx-input-box
                                             vx-type="tel"
                                             vx-label="Description "
                                             vx-placeholder="Enter Description  "
                                             :vx-model="weight">
                                            </vx-input-box>
                            </div>
                         </div>
                     

                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">8) Do you suffer from any medical ailments e.g: diabetes, high blood pressure, cancer, respiratory disease (including asthma),kidney, liver disease, stroke, any blood disorder, heart problems,hepatitisB, tuberculosis, psychiatric disorder, depression, HIV AIDS or a related infection?
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


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="medicalProb" name="medicalAil" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="medicalProb" name="medicalAil" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                         <div v-if="medicalProb == 'Yes'" class="table-row" style="flex:4">
                             <div class="" style="flex:1">
                            <wxc-checkbox v-if="platform !== 'Web'" title="Diabetes" :disabled="false" :checked="true"></wxc-checkbox>
                            <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                    <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                    <text class="chkbox-title">Diabetes</text>
                                </div>
                            </div>
                            </div>
                            <div class="" style="flex:1">
                                <wxc-checkbox v-if="platform !== 'Web'" title="Psychiatric" :disabled="false" :checked="true"></wxc-checkbox>
                            <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                    <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                    <text class="chkbox-title">Psychiatric</text>
                                </div>
                            </div>
                            </div>
                            <div class="" style="flex:1">
                            <wxc-checkbox v-if="platform !== 'Web'" title="Respiratory Disease(including Asthama)" :disabled="false" :checked="true"></wxc-checkbox>
                            <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                    <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                    <text class="chkbox-title">Respiratory Disease(including Asthama)</text>
                                </div>
                            </div>
                            </div>
                            <div class="" style="flex:1">
                             <wxc-checkbox v-if="platform !== 'Web'" title="Tuberculosis" :disabled="false" :checked="true"></wxc-checkbox>
                            <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                    <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                    <text class="chkbox-title">Tuberculosis</text>
                                </div>
                            </div>
                            </div>
                        </div>

                            <div v-if="medicalProb == 'Yes'" class="table-row" style="flex:4">
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Cancer" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Cancer</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="HIV/Aids or a related infection" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">HIV/Aids or a related infection</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="High Blood Pressure" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">High Blood Pressure</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Depression" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Depression</text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="medicalProb == 'Yes'" class="table-row" style="flex:4">
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Kidney Disease" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Kidney Disease</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Pain or problems in back,spine or joint" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Pain or problems in back,spine or joint</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Hospitalization" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Hospitalization</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Liver Disease" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Liver Disease</text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="medicalProb == 'Yes'" class="table-row" style="flex:4">
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Cogential Birth Disease" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Cogential Birth Disease</text>
                                        </div>
                                    </div>
                                </div>

                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Stroke" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Stroke</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Severe Injury" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Severe Injury</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Any blood disorder" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Any blood disorder</text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           <div v-if="medicalProb == 'Yes'" class="table-row" style="flex:4">
                                <div class="" style="flex:1"> 
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Arthritis,gout" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Arthritis,gout</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Hepatitis B" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Hepatitis B</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Any Other Physical Disability" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Any Other Physical Disability</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="flex:1">
                                    <wxc-checkbox v-if="platform !== 'Web'" title="Heart Problems" :disabled="false" :checked="true"></wxc-checkbox>
                                    <div class="table-row-col-details" style="flex-direction: column;padding-bottom:10px;">
                                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                                            <input type="checkbox" class="cursor-pointer-globle" v-model="callBox">
                                            <text class="chkbox-title">Heart Problems</text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">9) Is any surgery planned or are you currently aware or have been advised, that you may need to seek medical advice within the near future? (Other than for medical examinations that may arise from this application)
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange7"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check7}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="surgery" name="sug" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="surgery" name="sug" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                          <div v-if="surgery == 'Yes'"  class="table-row">
                            <div style="flex-direction: column;flex:0.5" class="mt-20 mobile-top-20">
                                <!-- <text class="form-title">Weight in Kgs</text>
                                <input class="input" type="tel" v-model="weight" style="flex:0.5" /> -->
                                       <vx-input-box
                                             vx-label="Details of Surgery/Medical Advice"
                                             vx-placeholder="Enter Details of Surgery/Medical Advice "
                                             :vx-model="weight">
                                            </vx-input-box>
                            </div>
                        </div>
                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">10) Have you ever suffered from drug or alcohol addiction or been advised by a doctor to reduce your alcohol / drug intake?
                            </text>
                        </div>
                        <div style="flex-direction:row" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange8"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check8}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" style="flex:1">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="addiction" name="daddict" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="addiction" name="daddict" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                        <div class="table-row-check-title mt-20 mobile-top-20" style="flex-direction: column;">
                            <text class=" form-title">11) Whether the Life Assured / Proposer / Nominee(s) is/are Politically Exposed Person(s).
                            </text>
                        </div>
                        <div style="flex-direction:row;padding-bottom:10px;" class="table-row-check">
                            <div style="flex-direction: column;">
                                <div style="flex-direction:row ;flex:1">

                                    <div class="example" v-if="platform !== 'Web'" style="flex:1">


                                        <div>
                                            <switch @change="onchange9"></switch>
                                        </div>
                                        <div>
                                            <text class="form-title">{{check9}}</text>
                                        </div>
                                    </div>
                                </div>


                                <div v-if="platform === 'Web'" style="flex:1; margin-bottom: 15px">
                                    <div style="flex-direction:row;">

                                        <input type="radio" class="cursor-pointer-globle" v-model="political" name="pol" value="Yes" />
                                        <label class="radio-title" style="margin-left:10px;">Yes</label>

                                        <input type="radio" class="cursor-pointer-globle" v-model="political" name="pol" value="No" style="margin-left:30px;" />
                                        <label class="radio-title" style="margin-left:10px;">No</label>

                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>

                    <div v-if ="platform === 'Web'" class="card-proposal-medical p-medical-btn-space prop-medical-row " style="">
                        <div class="box prop-medical-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposalinsurance')">
                                <image class="btn-icon-size cursor-pointer-globle" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label cursor-pointer-globle">Previous</text>
                            </div> -->
                             <div class=" btn-space">
                                <div  class=""
                                @click.native="jump('/master/testpro/proposalinsurance')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                        </div>
                        <div class="box prop-medical-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color cursor-pointer-globle" @click.native="jump('/master/testpro/proposalvernacular')">
                                <text class="md-btn-label text-color-white cursor-pointer-globle">Proceed</text>
                                <image class="btn-icon-size-right cursor-pointer-globle" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                            <div  class=""
                                @click.native="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>

                    <div  v-if ="platform !== 'Web'" class="card-proposal-medical p-medical-btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                            <div class="box prop-medical-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/master/testpro/proposalinsurance')">
                                    <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                    <text class="md-sec-btn-label ">Previous</text>
                                </div> -->
                                 <div class=" btn-space">
                                <div  class=""
                                @click="jump('/master/testpro/proposalinsurance')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                            </div>
                            <div class="box prop-medical-btn-width" style="padding:10px;">
                                <!-- <div class="md-custom-btn btn-color" @click="jump('/master/testpro/proposalvernacular')">  
                                    <text class="md-btn-label text-color-white">Proceed</text>
                                    <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                </div> -->
                                <div  class=""
                                @click="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
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
    import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
    import SButton from "../.././components/vx-primary-button/vx-scondary-button";         
import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
    import applicationTab from './ApplicationTab.vue'
    import mainTab from '../../components/Tabs/MainTab.vue'
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
                  console.log(me.form[i].lifeinsuranceDetails)
                  me.formDat = me.form[i].lifeinsuranceDetails
                   this.leadiden = me.form[i].leadId._id
                  this.prodiden = me.form[i].productId
                  console.log(me.formDat)
                  this.hazoccup = me.formDat.Question1
                  this.outside = me.formDat.Question2
                  this.cigHabits = me.formDat.Question3
                  this.alcohol = me.formDat.Question4
                  this.heightFeet =  me.formDat.HeightinFeet
                  this.heightInchData = me.formDat.HeightinInches
                  this.weightinkg = me.formDat.WeightinKgs
                  this.medicalCondition = me.formDat.Question6
                  this.birthCondition = me.formDat.Question7
                  this.medicalProb = me.formDat.Question8
                  this.surgery = me.formDat.Question9
                  this.addiction = me.formDat.Question10
                  this.political = me.formDat.Question11
 
                }
            
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown

            }
            // this.weightinkg=this.formDat.weight
        },
        components: {
            WxcRadio, appHeader, applicationTab,mainTab,PButton,SButton,vxInputBox,WxcCheckbox  },
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
                check5: 'No',
                check6: 'No',
                check7: 'No',
                check8: 'No',
                check9: 'No',
                hazoccup: '',
                outside: '',
                cigHabits: '',
                alcohol: '',
                heightFeet: '',
                heightInchData: '',
                weight: '',
                medicalCondition: '',
                birthCondition: '',
                medicalProb: '',
                surgery: '',
                addiction: '',
                political: '',
                headerName: 'Proposal Fulfilmemt',
                platform: invalid,
                deviceWidth: invalid,

                weightinkg:'',
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
                countryWeb:["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", 
                "Bhutan", "Bolivia", "Bosnia and Herzegovina", 
                "Botswana", "Bouvet Island", "Brazil",
                 "British lndian Ocean Territory", "Brunei Darussalam", "Bulgaria", 
                 "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands",
                  "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland",
                   "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"],
                purposeWeb:['Official/Project','Holiday/Vacation','Employment','Others'],
                cigcountWeb:['1-5','6-10','11-15','16-20','21-30','>30'],
                heightListWeb: ["1", "2", "3", "4", "5", "6", "7", "8"],
                heightInchesListWeb: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
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
                    return "Select";
                } else if (this.index2 < relationshipList.length) {
                    return relationshipList[this.index2];
                }
                return "";
            },
            value3() {
                if (this.index3 == -1) {
                    return "Select ";
                } else if (this.index3 < appointeegenderList.length) {
                    return appointeegenderList[this.index3];
                }
                return "";
            },
            value4() {
                if (this.index4 == -1) {
                    return "Select";
                } else if (this.index4 < appointeetitleList.length) {
                    return appointeetitleList[this.index4];
                }
                return "";
            },
            value5() {
                if (this.index5 == -1) {
                    return "Select";
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
                    this.hazoccup ='Yes'
                }
                else {
                    this.check = 'No'
                    this.hazoccup = 'No'
                }
            },
            onchange1(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check1 = 'Yes'
                    this.outside = 'Yes'
                }
                else {
                    this.check1 = 'No'
                    this.outside = 'No'
                }
            },
            onchange2(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check2 = 'Yes'
                    this.cigHabits = 'Yes'
                }
                else {
                    this.check2 = 'No'
                    this.cigHabits - 'No'
                }
            },
            onchange3(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check3 = 'Yes'
                      this.alcohol = 'Yes'
                }
                else {
                    this.check3 = 'No'
                      this.alcohol = 'No'
                }
            },
            onchange4(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check4 = 'Yes'
                      this.medicalCondition = 'Yes'
                }
                else {
                    this.check4 = 'No'
                      this.medicalCondition = 'No'
                }
            },
            onchange5(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check5 = 'Yes'
                      this.birthCondition = 'Yes'
                }
                else {
                    this.check5 = 'No'
                      this.birthCondition = 'No'
                }
            },
            onchange6(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check6 = 'Yes'
                      this.medicalProb = 'Yes'
                }
                else {
                    this.check6 = 'No'
                      this.medicalProb = 'No'
                }
            },
            onchange7(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check7 = 'Yes'
                      this.surgery = 'Yes'
                }
                else {
                    this.check7 = 'No'
                      this.surgery = 'No'
                }
            },
            onchange8(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check8 = 'Yes'
                      this.addiction = 'Yes'
                }
                else {
                    this.check8 = 'No'
                      this.addiction = 'No'
                }
            },
            onchange9(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check9 = 'Yes'
                      this.political = 'Yes'
                }
                else {
                    this.check9 = 'No'
                      this.political = 'No'
                }
            },
            submitData() {
                var me = this;
              
                console.log("Hello")
                const formData = {
                    
                    userId:me.$store.state.agentDetails._id,
                    leadId:this.leadiden,
                    productId:this.prodiden,
                    Question1: this.hazoccup,
                    Question2: this.outside,
                    Question3: this.cigHabits,
                    Question4: this.alcohol,
                    HeightinFeet: parseInt(this.heightFeet),
                    HeightinInches: parseInt(this.heightInchData),
                    WeightinKgs: parseInt(this.weightinkg),
                    Question6: this.medicalCondition,
                    Question7: this.birthCondition,
                    Question8: this.medicalProb,
                    Question9: this.surgery,
                    Question10: this.addiction,
                    Question11: this.political,

                }

                console.log(formData)
                            me.$store.commit('ADD_APPFORMDATA',{lifeinsuranceDetails: formData})
                    //   me.$store.commit('ADD_APPFORMDATA',[{formData}],'lifeinsuranceDetails') 
                    me.$router.push('/master/testpro/proposalvernacular')
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
                //                 message: 'Successfully Added Proposal Medical Details',
                //                 duration: 1
                //             })
                //           me.$router.push('/master/testpro/proposalvernacular')
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
.mt-20{
    margin-top:20px
}
.mt-10{
    margin-top:10px
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

    .form-title {
        lines: 4;
    }

    .row {
        flex-direction: column
    }

    .card-proposal-medical{
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
    .prop-medical-card-title-border {
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
.medical-width{
     width:260px;
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

    .p-medical-btn-space {
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
       opacity:0.8;
    }

    .prop-medical-btn-width {
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

    .prop-medical-row {
        flex-direction:row;;padding:12px;margin-bottom:10px;
    }
    .check-pad-left-apk {
        padding-left: -10px;
    }
    @media only screen and (min-width: 320px) {
        .check-pad-left-apk {
        padding-left: 0px;
    }
        /*Button Arrow CSS*/
          .table-row-check{
                  padding-left: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }
        .mt-20{
    margin-top:0px
}
.mt-10{
    margin-top:0px
}
          .table-row {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;
    }

.mobile-top-20{
    margin-top: 20px
}
           .card-proposal-medical{
               border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:10px 5px 20px 5px;


    }
        .medical-width{
     width:160px;
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
            ;
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
        .table-row {
            flex-direction: column;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .mail-row {
            flex-direction: column;
        }
        /* .p-medical-btn-space {
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
        .prop-medical-btn-width {
            width: 50%;
        }
    }

    @media only screen and (min-width: 768px) {
           .table-row-check{
                  padding-left: 10px;
        
                }
                       .table-row-check-title{
                  padding-left: 10px;
                  padding-top: 15px;
        
                }

                  .table-row {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }

        .mobile-top-20{
    margin-top: 0px
}
           .card-proposal-medical{
               margin:10px;

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
        /* .p-medical-btn-space {
            justify-content: space-between;
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
        .prop-medical-btn-width {
            width: 30%;
        }
    }
    @media screen and (min-width: 992px) {
         .prop-medical-btn-width {
            width: 15%;
        }
    }
</style>