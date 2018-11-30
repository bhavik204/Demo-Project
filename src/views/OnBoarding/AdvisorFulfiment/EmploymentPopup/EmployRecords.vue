<template>
    
                              <div class="">
                
                      
                            <div class= "table-row-employ">
                                    <div style="flex:1;"class="table-row-employ-details mb-30">
                                            <!-- <text  class="form-title-employ">Employed From</text>
                                            <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  /> -->
                                             <vx-input-box
                                                    vx-label="Employed From"
                                                    vx-placeholder="Input Date"
                                                    vx-type="date"
                                                    :vx-model="formData.EmployedFrom">
                                            </vx-input-box>
                                        </div>
    
                                        <div style="flex:1;"class="table-row-employ-col-details mb-30">
                                                <!-- <text  class="form-title-employ">Employed Till</text>
                                                <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  /> -->
                                            <vx-input-box
                                                    vx-label="Employed Till"
                                                    vx-placeholder="Input Date"
                                                    vx-type="date"
                                                    :vx-model="formData.EmployedTill">
                                            </vx-input-box>
                                            </div>
                            </div>
                            <div  class="table-row-employ">
                                    <div style="flex-direction: column;flex:1" class="table-row-employ-details mb-30">
                                            <!-- <text  class="form-title-employ">Name of Employer</text>
                                            <input class="input" type="text" style="flex:0.5" v-model="empName" /> -->
                                             <vx-input-box
                                                    vx-label="Name of Employer"
                                                    vx-placeholder="Enyter Employer Name"
                                            
                                                    :vx-model="formData.NameofEmployer">
                                            </vx-input-box>
                                        </div>
                                        <div style="flex-direction: column;flex:1" class="table-row-employ-col-details mb-30">
                                         <!-- <text  class="form-title-employ">Address Line 2</text>
                                         <input class="input" type="text" style="flex:1" v-model="Add2" /> -->
                                          <vx-input-box
                                                    vx-label="Last Position Held"
                                                    vx-placeholder="Enter Last Position Held"
                                            
                                                    :vx-model="formData.LastPositionHeld">
                                            </vx-input-box>
                                     </div>
                                </div>
                            <div  class="table-row-employ">
                                    <div style="flex-direction: column;flex:1" class="table-row-employ-details mb-30">
                                        <!-- <text  class="form-title-employ">Adddress Line 1</text>
                                        <input class="input" type="text" style="flex:1" v-model="Add1" /> -->
                                         <vx-input-box
                                                    vx-label="Adddress Line 1"
                                                    vx-placeholder="Enter Adddress Line 1"
                                            
                                                    :vx-model="formData.Address1">
                                            </vx-input-box>
                                    </div>
                                    <div style="flex-direction: column;flex:1" class="table-row-employ-col-details mb-30">
                                         <!-- <text  class="form-title-employ">Address Line 2</text>
                                         <input class="input" type="text" style="flex:1" v-model="Add2" /> -->
                                          <vx-input-box
                                                    vx-label="Adddress Line 2"
                                                    vx-placeholder="Enter Adddress Line 2"
                                            
                                                    :vx-model="formData.Address2">
                                            </vx-input-box>
                                     </div>
                                 
                                </div>
                                <div  class="table-row-employ">
                                        <div style="flex-direction: column;flex:1" class="table-row-employ-details">
                                                <!-- <text  class="form-title-employ">Last Position Held</text>
                                                <input class="input" type="text" style="flex:0.5" v-model="position" /> -->
                                                
                                            </div>
                                    </div>
                                    <div  class="table-row-employ">
                                            <div style="flex-direction: column;flex:1" class="table-row-employ-details">
                                                <!-- <text class="form-title-employ">Annual Income</text>
                                                <input class="input" type="text" style="flex:1" v-model="empIncome" /> -->
                                                 <vx-input-box
                                                    vx-label="Annual Income"
                                                    vx-placeholder="Enter Annual Income"
                                                    vx-type="number"
                                                    :vx-model="formData.AnnualIncome">
                                            </vx-input-box>
                                            </div>
                                            <div style="flex-direction: column;flex:1" class="table-row-employ-col-details">
                                                 <!-- <text  class="form-title-employ">Reason For Leaving</text>
                                                 <input class="input" type="text" style="flex:1" v-model="empReason" /> -->
                                                 <vx-input-box
                                                    vx-label="Reason For Leaving"
                                                    vx-placeholder="Enter Reason For Leaving"
                                                    
                                                    :vx-model="formData.ReasonForLeaving">
                                            </vx-input-box>
                                             </div>
                                         
                                        </div>
                           
                                        
        <div v-if="platform !=='Web'" class=" btn-space" style=" flex-direction:row;;padding:12px;">
                <div class="box emprecord-btn-width" style="padding:10px;">
                    <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/masteronboard/advisordetails/empbckg')">
                        <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                        <text class="md-sec-btn-label ">Cancel</text>
                    </div> -->
                     <div class="btn-space">
									<s-button @click="jump('/master/testapp')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
                            </div>
                </div>
                <div class="box emprecord-btn-width" style="padding:10px;">
                    <!-- <div class="md-custom-btn btn-color">
                        <text class="md-btn-label text-color-white">Save</text>
                        <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                    </div> -->
                    <div 
                                @click="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                </div>
            </div>
    
    
                              
    
    
                              </div>
</template>
<script>
import vxInputBox from '../../../../components/vx-input-box/vx-input-box.vue'
import PButton from '../../../../components/vx-primary-button/vx-primary-button.vue'
import SButton from '../../../../components/vx-primary-button/vx-scondary-button.vue'
  const env = weex.config.env || WXEnvironment
      const invalid = '- invalid -'
      
export default {
     created() {
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown

      }
    },
    
     data() {
      return {
                platform: invalid,
                 formData:{
                     EmployedFrom:'',
                     Address2:'',
                     Address1:'',
                     LastPositionHeld:'',
                     AnnualIncome:'',
                     ReasonForLeaving:'',
                     EmployedTil:'',
                     NameofEmployer:'',
      }
      }
     
     },
      components:{
                   vxInputBox,PButton,SButton
                },
      methods: {
                jump(to) {
                    if (this.$router) {
                        this.$router.push(to)
                    }
                },
               
                
      }
}
</script>

<style >
          .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
 .content {
            /* width:70%; */
            margin: 20px;
            margin-top: 20px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
        }
           .table-row-employ {
               flex-direction: column;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
    
    
        }
        .mb-30{
            margin-top: 10px;
        }
         .table-row-employ-col-details {
            margin-left: 0px;
        }
          .table-row-employ {
                flex-direction: column;
            }
                .form-title-employ {
            font-size: 24px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family:robotoregular;
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
          .tbl-heading {
            font-size: 25px;
            padding-top: 10px;
            padding-bottom: 10px;
            font-weight: bold;
            font-family:robotoregular;
    
        }
             .btn-space {
            justify-content: space-between
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
            font-size: 31px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            color: #fff;
            font-family:robotoregular;
        }
        .md-sec-btn-label {
            font-size: 31px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            color: #0000;
            font-family:robotoregular;
        }
    
    .md-custom-btn:active {
       opacity:0.8;
    }

    
        .emprecord-btn-width {
            width: 300px;
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
         @media only screen and (min-width: 320px) {
                       .table-row-employ {
                flex-direction: column;
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
  .form-title-employ {
                font-size: 14px;
                padding-top: 10px;
                color: #9d9d9d;
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
                .tbl-heading {
            font-size: 25px;
            padding-top: 10px;
            padding-bottom: 10px;
            font-weight: bold;
            font-family:robotoregular;
    
        }
        
            .md-btn-label {
                color: #fff;
                font-size: 11px;
                text-transform: uppercase;
                font-weight: 500;
                cursor: pointer;
                font-family:robotoregular;
            }
            .btn-color {
                background-color: rgb(80, 80, 80);
               
            }
            .md-sec-btn-label {
                color: #000;
                font-size: 11px;
                text-transform: uppercase;
                font-weight: 500;
                cursor: pointer;
                font-family:robotoregular;
            }
            .sec-btn-color {
                background-color: #fff;
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
            .emprecord-btn-width{
                    width:50%;
                }
         }
               @media only screen and (min-width: 768px) {
                     .table-row-employ {
                flex-direction: row;
            }
            .table-row-employ-col-details {
                margin-left: 30px;
            }
            .emprecord-btn-width{
                    width:20%;
                }
               }
               @media screen and (min-width:992px) {
                .emprecord-btn-width{
                    width:15%;
                }
               }
</style>


