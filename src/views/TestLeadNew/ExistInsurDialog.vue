<template>
   
<div >
        <div class="exist-container-padding card-wrap-InsurDialog">
            <div class="exist-insu-flx-row exist-insu-aligin-itms ">

                <!-- exist-insu-dob: - Padding class -->
                <div class="exist-insu-inner-width exist-insu-dob ex-insur-mbtm-20-px " >
                    <text  class="exist-insu-lbl-font-size">Select Relation</text>
                    <div v-if="platform ==='Web'" class="" >
                        <select  class="cursor-pointer-globle vx-globle-drp-down" style="flex:1;" v-model="memberType">
                            <option value="" selected>Select</option>
                            <option v-for="(member, li) in family" :key="li">{{member}}</option>
                        </select>
                    </div>
                    <div v-if="platform !== 'Web'" style="flex:1;">
                        <apk-drop-down :option-list="family" ></apk-drop-down>
                    </div>
                </div>

                <div class="exist-insu-outer-width exist-insu-dob exist-insu-mt ex-insur-mbtm-20-px exist-insu-inner-width">     
                    <vx-input-box 
                        vx-label="Name" 
                        vx-placeholder="Enter Name" 
                        message="Please Enter Name "
                            :hasRequired="true"
                        :vx-model="memberName" @valueReading="memberName = $event.value"></vx-input-box>
                </div>
            </div>

            <div class="exist-insu-flx-row exist-insu-container-pad exist-insu-aligin-itms ex-insur-mbtm-20-px ">
                <!-- <div class="exist-insu-inner-width">     
                    <vx-input-box vx-label="Name" vx-placeholder="Enter Name" :vx-model="name"></vx-input-box>
                </div> -->
                <div class="exist-insu-inner-width exist-insu-dob">     
                    <vx-input-box 
                    vx-type="date" 
                    vx-label="Date of Birth" 
                    :vx-model="memberDOB" 
                     message="Please Enter DOB "
                            :hasRequired="true"
                    @valueReading="memberDOB = $event.value"></vx-input-box>
                </div>
            </div>

            <!-- <div class="exist-insu-flx-row " >
                
            </div> -->

            <div class="exist-insu-flx-row exist-insu-container-pad exist-insu-aligin-itms exist-insu-radData" >
                <div class="exist-insu-RadRow">
                <div class="exist-insu-container-pad exist-insu-flx-row exist-insu-aligin-itms">     
                    <text class="exist-insu-lbl-font-size">Is Insured suffering from any chronic disease ?</text>
                </div>
                 <div class="example" v-if="platform !== 'Web'">
                    <div>
                        <switch @change="onchange1"></switch>
                    </div>
                        <text class="form-title">{{check1}}</text>
                    </div>
                    
                </div>
                <div  v-if="platform === 'Web'" class="exist-insu-container-pad exist-insu-flx-row exist-insu-aligin-itms" style="flex-direction:row;">
                
                    <input type="radio" class="cursor-pointer-globle" v-model="InsurDisease"  value="YES"  @click.native="descRadio('YES')" />
                    <label class="exist-insu-radio-title">Yes</label>
                
                    <input type="radio" class="cursor-pointer-globle" v-model="InsurDisease"  value="NO"  @click.native="descRadio('NO')" />
                    <label class="exist-insu-radio-title">No</label>
                
                </div>

            </div>

            <div class="exist-insu-flx-row exist-insu-container-pad exist-insu-aligin-itms exist-insu-dob" >
                <div class="exist-insu-inner-width" v-if="showfield === true">     
                    <vx-input-box 
                        vx-label="Enter Details" 
                        vx-placeholder="Enter Description" 
                        :vx-model="description"
                        message="Please enter details of the disease like type and year of diagnosis "
                        
                        :hasRequired="true" @valueReading="description = $event.value">
                    </vx-input-box>
                </div>
            

            </div>
        </div>
        <div>
        <div v-if="platform !=='Web'" class=" card-wrap-InsurDialog" style="flex-direction:row;">
             <div  class="exist-insu-md-btn-width btn-padding cursor-pointer-globle" style="margin-left: 10px">
            <vx-primary-button 
            btn-name="Save" 
            btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" @click="saveData"></vx-primary-button> 
        </div>
        <div  class="exist-insu-md-btn-width btn-padding cursor-pointer-globle">
           <vx-secondary-button 
            
            btn-name="Cancel" 
            btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
            @click.native="jump('/leadmasterpage/leaddetails/existingLead')"></vx-secondary-button>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
 import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
 import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue';
 import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';
 import apkDropDown from '../CFR/cfr-dropDown-apk.vue'
 import popup from '../Calendar/Todo-pop-up.vue'

 import moment from 'moment'

const family=["Father","Mother","Brother","Sister"];

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
    export default {
        props:{
            visiblity: Boolean,
            editData: Object
        },
        components: {
           vxInputBox,
           vxPrimaryButton,
           vxSecondaryButton,
           popup,
           apkDropDown,
        },

        created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }

        
    },
    mounted() {
        if(Object.keys(this.editData).length !== 0) {
            this.memberName = this.editData.Name;
            this.memberType = this.editData.SelectRelation;
            this.memberDOB =  this.editData.DateofBirth;
            this.desDescript = this.editData.Description;
            this.InsurDisease = this.editData.IsInsuredsufferingfromanychronicdisease;
        }
    },
        data(){
            return{ 
                moment: moment,
                platform: invalid,
                
                family,
                memberType: '',
                memberName:'',
                memberDOB: '',
                desDescript: '',

                InsurerDate:'',
                InsurDisease:'',
                showfield:false,
                check1:'',
            }
        },

        methods:{
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            descRadio(id){
                switch(id) {
                    case  'YES':
                    this.showfield=true
                    break;

                    case 'NO':
                    this.showfield=false
                    break;
                }
            },
            onchange1(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check1 = 'Yes'
                } else {
                    this.check1 = 'No'
                }
            },
            saveData() {
                if(this.memberType === '' || this.memberName === '' || this.memberDOB === '' 
                || this.InsurDisease === '')
                {
                    this.toast('', 'red', 'Mandatory fields are Empty!! ');
                } else {
                    let d_struct = {
                        SelectRelation: this.memberType,
                        Name: this.doSentenceCase(this.memberName),
                        DateofBirth: moment(this.memberDOB).format('YYYY-MM-DD'),
                        IsInsuredsufferingfromanychronicdisease: this.InsurDisease,
                        Description : this.desDescript
                    }
// hdjsahk
                    if ('index' in this.editData)  {
                        d_struct.index = this.editData.index;

                        /** This is for hide popup when updation is done */
                        let bol = false;
                        this.$emit('getStructData',{data: d_struct, hide: bol});
                        this.toast('', 'green', 'Updated...');
                    } else {
                        let bol = true;
                        console.log('Child Called', d_struct);
                        this.$emit('getStructData',{data: d_struct, hide: bol});
                        this.toast('', 'green', 'Saved...');
                    }
                    // Clear Values
                    this.memberType = ''
                    this.memberName = ''
                    this.memberDOB  = ''
                    this.InsurDisease = ''
                    this.desDescript = ''
                }
            },
            toast(imgSrc, textColor, infoMsg){
                this.$store.state.shownotificationtoast = true;
                this.$store.state.imagelink = imgSrc;
                this.$store.state.notificationTextColor = textColor;
                this.$store.state.notificationBody = infoMsg;
                console.log(this.$store.state.notificationTitle);
                setTimeout(()=>{ 
                    this.$store.state.shownotificationtoast = false ;
                }, 2000);
            },
        }
    }
</script>
<style>
    .exist-insu-flx-row {
        padding-top: 20px;
        flex-direction: column;
        
    }
    .exist-insu-container-pad {
        padding: 10px;
    }
    .exist-insu-aligin-itms {
        align-items: baseline;
    }
    .exist-insu-lbl-font-size {
        font-size: 24px;
        color: grey;
        
    }
    .exist-insu-root-form {
        background-color: #FFFFFF;
       
    }

    .exist-insu-drop-down{
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }

    .exist-insu-radio-title{
        margin: 10px;
        color:grey;
    }

    .input {
        padding: 20px;
        padding-left: 4px;
        /* background-color: green; */
        /*padding-top: 25px;*/
        font-size: 28px;
        width: 750px;
        border-width: 2px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #999999;
    }
    .input:focus {
            border-width: 1px;
            border-bottom-color: #2e4053;
        }

        .exist-insu-btn{
            font-family: robotobold;
            padding-left: 2px;
            font-size: 12px;
            width: 20px;
            height: 20px;
            border-radius: 20px;
        }

        .exist-insu-outer-width{
            width: 50%;
        }

        .exist-insu-inner-width{
            width:750px;
        }

        .exist-insu-md-btn-width{
            width: 200px;
            
        }

        .exist-insu-btn-space {
        justify-content: space-between;
        width:30%;
        margin: auto;
       
    }
    .vx-btn{
        padding-right: 25px;
    }

   .exist-insu-dob{
      
       padding-left: 10px;
       padding-right: 10px;
   }

   .exist-insu-RadRow{
       flex-flow: column;
   }

   .exist-insu-radData{
       flex-direction: row;
     align-items: center;
   }
.btn-padding{
        padding:12px;
        margin-bottom:10px;
    }

    .form-title {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
        margin-top: 15px;
    }

    .exist-insu-marginbtm {
        
        margin-bottom: 25px;
        padding: 13px;
    }


    /* This margin bottom only affect in 320 and apk not in browser and tab */
    .ex-insur-mbtm-20-px {
        margin-bottom: 20px;
    }
    .card-wrap-InsurDialog{
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
        
    }
    
    @media screen and (min-width:320px){
        /* Mobile Web */
        .exist-insu-container-pad {
            padding: 5px;
        }
        .exist-insu-lbl-font-size {
            font-size: 14px;
        }
        .exist-insu-shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

         .exist-insu-md-btn-width{
            width: 50%;
        }

        .exist-container-padding {
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
        }
        
         .exist-insu-RadRow{
       flex-flow: column;
   }
   .exist-insu-radData{
       flex-direction: column;
       align-items: unset;
     
   }
   .exist-insu-inner-width{
            width:100%;
        }
        .form-title {
        font-size: 14px;
       
    }
    .dropdown-lbl {
            font-size: 12px;
            color: #9d9d9d;
            margin-bottom: 10PX;
        }
    
    .exist-insu-outer-width {
        width: 100%;
    }
     .card-wrap-InsurDialog{
        border:none;
        /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12); */
        margin:10px 5px 20px 5px;
         padding: 10px;
        }
       
    }
    @media screen and (min-width:768px){
        /* tab web */
         .exist-insu-md-btn-width{
            width: 23%;
        }
         .exist-insu-RadRow{
       flex-flow: row;
       flex: 3;
   }
   .exist-insu-radData{
       flex-direction: column;
       align-items: unset;
     
   }

    .exist-insu-flx-row {
        /* padding-top: 20px; */
        flex-direction: row;
        
    }

    .exist-insu-aligin-itms {
        align-items: center;
    }
        .exist-insu-inner-width{
            width:50%;
        }
         /* This margin bottom  affect in 320 and apk and in browser and tab */
        .ex-insur-mbtm-20-px {
        margin-bottom: 5px;
    }
     .card-wrap-InsurDialog{
        margin:10px;
        }   

    }
    @media screen and (min-width:992px){
        /* desktop */
         .exist-insu-md-btn-width{
            width: 15%;
        }
        .exist-insu-radData{
       flex-direction: row;
     
   }

         .exist-insu-inner-width{
            width:50%;
        }

    .exist-insu-mt{
        margin-top: 5px;
    }
   .exist-insu-outer-width {
        width: 50%;
    }
    
    }
</style>
