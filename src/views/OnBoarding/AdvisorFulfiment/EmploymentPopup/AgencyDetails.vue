<template>
    <div class="">
                               
                            <div  class="table-row">
                                 <div style="flex-direction: column;flex:1" class="table-row-details mb-30">
                                     <!-- <text  class="form-title">Name of Insurer</text>
                                     <input class="input" type="text" style="flex:1" v-model="agName" /> -->
                                      <vx-input-box
                                                    vx-label="Name of Insurer"
                                                    vx-placeholder="Enter Name of Insurer"
                                            
                                                    :vx-model="formData.NameofInsurer">
                                            </vx-input-box>
                                 </div>
                                 <div style="flex-direction: column;flex:1" class="table-row-col-details mb-30">
                                      <!-- <text  class="form-title">Agency Code Number</text>
                                      <input class="input" type="text" style="flex:1" v-model="agCode" /> -->
                                       <vx-input-box
                                                    vx-label="Agency Code Number"
                                                    vx-placeholder="Enter Agency Code Number"
                                            
                                                    :vx-model="formData.AgencyCodeNumber">
                                            </vx-input-box>
                                  </div>
                              
                             </div>
                             <div class="table-row">
                                     <div style="flex-direction:column;flex:1;"class="table-row-details mb-30">
                                             <!-- <text  class="form-title">Date of Appointment as Agent</text>
                                             <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  /> -->
                                         <vx-input-box
                                                    vx-label="Date of Appointment as Agent"
                                                    vx-placeholder="Enter Date of Appointment as Agent"
                                                    vx-type="date"
                                                    :vx-model="formData.DateofAppointmentAgent">
                                            </vx-input-box>
                                         </div>
     
                                         <div style="flex-direction:column;flex:1;"class="table-row-col-details mb-30">
                                                 <!-- <text  class="form-title">Date of Cessation of Agency</text>
                                                 <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  /> -->
                                             <vx-input-box
                                                    vx-label="Date of Cessation of Agency"
                                                    vx-placeholder="Enter Date of Cessation of Agency"
                                                    vx-type="date"
                                                    :vx-model="formData.DateofCessationAgency">
                                            </vx-input-box>
                                             </div>
                             </div>
                            
                             <div class="table-row">
                                     <div style="flex-direction:column;flex:1;"class="table-row-details mb-30">
                                             <!-- <text  class="form-title">Reason for Cessation of Agency</text>
                                             <input class="input" type="text" style="flex:1" v-model="agReason" /> -->
                                             <vx-input-box
                                                    vx-label="Reason for Cessation of Agency"
                                                    vx-placeholder="Enter Reason for Cessation of Agency"
                                                    
                                                    :vx-model="formData.ReasonforCessationAgency">
                                            </vx-input-box>
                                         </div>
                                         <div style="flex-direction:column;flex:1;"class="table-row-col-details">
                                                 <!-- <text  class="form-title">Date of Cessation of Agency</text>
                                                 <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  /> -->
                                             <!-- <vx-input-box
                                                    vx-label="Date of Cessation of Agency"
                                                    vx-placeholder="Enter Date of Cessation of Agency"
                                                    vx-type="date"
                                                    :vx-model="formData.DateofCessationAgency">
                                            </vx-input-box> -->
                                             </div>
     
                         
                             </div>
                           
                <div v-if="platform !=='Web'" class=" btn-space" style=" flex-direction:row;;padding:12px;">
                <div class="box agecydetails-btn-width" style="padding:10px;">
                    <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/masteronboard/advisordetails/empbckg')">
                        <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                        <text class="md-sec-btn-label ">Cancel</text>
                    </div> -->
                     <div class="btn-space">
									<s-button @click="jump('/master/testapp')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Cancel"></s-button>
                            </div>
                </div>
                <div class="box agecydetails-btn-width" style="padding:10px;">
                    <!-- <div class="md-custom-btn btn-color">
                        <text class="md-btn-label text-color-white">Save</text>
                        <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                    </div> -->
                    <div 
                                @click="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Save" icon-side="right"></p-button>
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
                    NameofInsurer:'',
                    AgencyCodeNumber:'',
                    DateofAppointmentAgent:'',
                    DateofCessationAgency:'',
                    ReasonforCessationAgency:'',

                }
      }
      
     },
      components:{
                   vxInputBox ,PButton,SButton
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

<style>
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
         .mb-30{
            margin-top: 10px;
        }
           .table-row {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
    
    
        }
         .table-row-col-details {
            margin-left: 0px;
        }
          .table-row {
                flex-direction: column;
            }
                .form-title {
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

    
        .agecydetails-btn-width {
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
  .form-title {
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
             .agecydetails-btn-width{
                       width:50%;
                   }
         }
               @media only screen and (min-width: 768px) {
                     .table-row {
                flex-direction: row;
            }
            .table-row-col-details {
                margin-left: 30px;
            }
             .agecydetails-btn-width{
                       width:20%;
                   }
               }

               @media screen and (min-width:992px){
                   .agecydetails-btn-width{
                       width:15%;
                   }
               }
</style>