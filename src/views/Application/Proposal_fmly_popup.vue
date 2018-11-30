<template>
        <!-- Create Event Page -->
    <div class="tb-side-container" style=" flex:1;">
<scroller>
    <div class="" style="height:20px;"></div>
        <div class="card-propsal-fmly-popup">
            
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 prppsal-fmly-pad-tp-10">
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10 ">
                    <div class="cra-evt-pd-btm-5"><text class="cntct-frm-lbl-size">Relationship</text></div>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="start_time"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="relationshipData" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in relationship_web" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
                
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10 ">
                    <div class="cra-evt-pd-btm-5"><text class="cntct-frm-lbl-size">Status</text></div>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="end_time"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="statusData" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in status_web" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-type="number"
                        vx-label="Age"
                        vx-placeholder="Enter Age"
                        :vx-model="ageData"
                         @valueReading="ageData=$event.value">
                    </vx-input-box>
                </div>               
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <div class=""><text class="cntct-frm-lbl-size">Disease</text></div>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="end_time"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="diaseaseData" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in disease_web" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-type="number"
                        vx-label="Diagnosis Age"
                        vx-placeholder="Enter Diagnosis Age"
                        :vx-model="d_ageData"
                        @valueReading="d_ageData=$event.value">
                    </vx-input-box>
                </div>
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    
                </div>
            </div>

          
            

        </div>

            <!-- <div v-if="platform==='Web'" class=" contact-btn-space contact-btn-padding card-wrap-contactLead" style="margin-bottom:20px">
                <div class=" lead-contact-btn-width" style="padding:10px;">

                    <div class=" cursor-pointer-globle"  @click.native="jump('')">
                        <vx-secondary-button 
                            btn-name="Cancel"  
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png" >
                        </vx-secondary-button>
                        
                    </div>
                </div>
                <div class=" lead-contact-btn-width" style="padding:10px;">
                    <div class=" cursor-pointer-globle" @click.native="jump('/leadmasterpage/leaddetails/professionallead')">
                        <vx-primary-button 
                            btn-name="Add to Calender"  
                            
                            btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" >
                        </vx-primary-button>
                    </div>
                </div>
            </div> -->


            <div v-if="platform !=='Web'" class=" contact-btn-space card-wrap-contactLead" style=" flex-direction:row;margin-bottom:10px;">
                <div class=" lead-contact-btn-width" style="padding:20px;">
                    <div class=" cursor-pointer-globle"  @click="jump('/master/testpro/proposalfamily')">
                        <vx-secondary-button 
                            btn-name="Cancel" 
                             
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png" >
                        </vx-secondary-button>
                    </div>
                </div>
                <div class=" lead-contact-btn-width" style="padding:20px;">
                    
                    <div class=" cursor-pointer-globle" @click="savefmly">
                        <vx-primary-button 
                            btn-name="Add to Calender" 
                            
                            icon-side="right" 
                            btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png">
                        </vx-primary-button>
                    </div>
                </div>
            </div>
</scroller>
    </div>
        
</template>

<script>
    
    import appHeader from '../../components/Application/AppHead.vue'
    import leadHeader from '../../components/Proposal/LeadHeader.vue'
    import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue'

    import apkDropDown from '../CFR/cfr-dropDown-apk'
    import switcher from '../../components/GenderView/genderView'


    var event_type = ["Create new ", "policy Renewals", "Application stage", "Advisor Trainning", "Contests", "Client Birthdays", "Client Appointment"];

    var relationship = [ 
        "Aunty",
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
        "Wife"];
    var status = ["Dead","Alive"];
    var disease = ["Cancer","Diabaties","Heart Attack","Raised Colesterol","Stroke","Hypertension","Any other hereditory disease"];


    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
    import {
        WxcRadio,  WxcCheckbox,WxcCheckboxList
    } from 'weex-ui'
   
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            WxcRadio,
            WxcCheckbox,
            WxcCheckboxList,
            appHeader,
            leadHeader,
            vxInputBox,
            vxPrimaryButton ,
            vxSecondaryButton,
            apkDropDown,
            switcher
           
        },
        data() {
           
            return {
                 relationship_web: [ 
        "Aunty",
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
        "Wife"],
     status_web: ["Dead","Alive"],
     disease_web: ["Cancer","Diabaties","Heart Attack","Raised Colesterol","Stroke","Hypertension","Any other hereditory disease"],

                list: [
                    { title: 'None', value: 1,checked: true },
                    { title: 'High', value: 2 },
                    { title: 'Medium', value: 3 },
                    { title: 'Low', value: 4 },
                ],
                relationshipData:'',
                event_type,
                statusData: '',
                diaseaseData: '',
                ageData: '',
                d_ageData:'',
                s_date: '',
                e_date: '',
                landmark: '',
                country: '',
                city: '',
                event_name: '',
                description: '',
                alterMobileNo: '',
                email_ID: '',
                description2: '',
                check: 'Personal',
                headerName: 'Proposal Fulfilmemt',
                platform: invalid,
                deviceWidth: invalid,
                personal: false,
                fmlyinfo: []
            }
        },
     
        methods: {
            savefmly(){
                var me = this
                console.log('consle is working@@@@@')
                var rel = this.relationshipData
                console.log('Reletionship is=='+ rel)
                var stut = this.statusData
                var dia = this.d_ageData
                var ageee = this.ageData
                var diad =this.diaseaseData
                const fmlyinfoTbl = {
                    Relationship:rel,
                    Status:stut,
                    Age:ageee,
                    Disease:diad,
                    DiagosisAge:dia
                }
                console.log(fmlyinfoTbl)
                me.$store.commit('ADD_PROPOSALFAMILY',fmlyinfoTbl)

            },
            onchange3(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check = 'For a group'
                }
                else {
                    this.check = 'Personal'
                }
            },

            submitData() {
                const formData = {

                }

                console.log(formData)
                stream.fetch({
                        method: 'POST',
                        url: 'http://172.16.57.76:5010/secure/user/addProposal',
                        headers: {
                            
                            'Content-Type': 'application/json'
                        },
                        // body:'email=dk',
                        body: JSON.stringify(formData),
                        // body:'email=usama@grr.la&password=dk',
                        type: 'json'
                    },
                    // function(ret) {
                    //   // if(!ret.ok){
                    //   //   me.postResult = "request failed";
                    //   // }else{
                    //   //   console.log('get:'+JSON.stringify(ret));
                    //   //   this.postResult = JSON.stringify(ret.data);
                    //   // }
                    // }

                    function(response) {
                        var errcodeAPI = -1
                        if (response.data.errCode == errcodeAPI) {
                            console.log('get in progress:' + JSON.stringify(response));
                            modal.toast({
                                message: 'Successfully Added Proposal Personal Details',
                                duration: 1
                            })
                            router.push('/proposalnominee');
                        } else {
                            modal.toast({
                                message: 'Please enter Unique Mobile No',
                                duration: 2
                            })

                        }
                        // this.postResult = "bytes received:"+response.length;
                    })
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
            }
        }
    }
</script>

<style>
    /*Button Arrow CSS*/

    /* New Class make by usama */
    .ld-cntc-dtls-flx-dir {
        flex-direction: column;
    }
      .example {
        flex-direction: row;
        justify-content: flex-start;
    }
    .card-propsal-fmly-popup{
        background-color: #fff;
    }
    .switch-text-createvent{
        padding-top: 10px;
        padding-left: 30px;
    }

    .frm-hedng-bold-16 {
        font-size: 28px;
        font-weight: 700;
        font-family:robotoregular;
    }

    
    .contact-btn-padding {
        flex-direction:row;
        margin-bottom:10px;
        padding:12px;
    }

    .contact-dtls-frm-card {
        /* width:70%; */
    
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    
    .tb-side-container {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .contact-btn-space {
        justify-content: space-between
    }
    .lead-contact-btn-width {
        width: 300px;
    }
    .cntct-frm-lbl-size {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
    }
     .chkbox-title {
    flex: 1;
    font-size: 13px;
    margin-left: 10px;
    color: #9d9d9d;
    font-family:robotoregular;
  }
   .table-row-check {
        padding-left: 20px;
        padding-right: 10px;
        padding-top: 10px;
        
    }
    .create-evnt-font-big {
        font-size: 25px;
        font-family:robotoregular;
        font-weight: 700;
    }
     .cra-evt-pd-btm-5 {
        padding-bottom: 0px;
    }
    .cra-evt-brd-dash {
        border-bottom: 1px dashed #565656;
        margin: 10px 0;
    }
    .cra-evt-pd-lft-10 {
        padding-left: 10px;
        top:-1px;
    }
     .none{
            font-size: 24px;
            font-family: robotoregular;
        }
     .high {
        /* padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 4px;
        padding-top: 4px; */
        /* min-width: 44px; */
        /* margin: 1px 0px 18px 3px; */
       
        font-size: 9px;
        text-transform: uppercase;
        font-style: normal;
        
        color: #fff;
        vertical-align: middle;
    }
    .high-color {
        background-color: #eb9292;

    }
    .medium {
        width: 110px;
        height: 35px;
        background-color: #e8bd55;
        /* padding: 4px 10px; */
        color: #FFF;
        font-size: 22px;
        font-family: robotoregular;
        border-radius: 2px;
        min-width: 44px;
        text-transform: uppercase;
        font-style: normal;
        /* margin: 1px 0px 18px 3px; */
    }
    
    .low {
        width: 70px;
        height: 35px;
        background-color: #a3d562;
        /* padding: 4px 10px; */
        color: #FFF;
        font-size: 22px;
        font-family: robotoregular;
        border-radius: 2px;
        min-width: 44px;
        text-transform: uppercase;
        font-style: normal;
        /* margin: 1px 0px 18px 15px; */
    }
    .contact-btn-padding-row {
        flex-direction: row;
    }
    .cnt-evt-rdo-pd-lft-10 {
        padding-left: 10px;
        padding-bottom: 5px;
        top: -2px;

    }
    .cra-evt-pad-top-20 {
        padding-top: 30px;
    }
    /* @usama  */

    /* This margin class is used to provide margin to all individual
        filed */
    .mbt-i-ld-20 {
        margin-bottom: 30px;
    }

    .mrgn-rw-fld-lft-rgt-10 {
        margin-left: 20px;
        margin-right: 20px;
    }

     .ld-dtls-crd-pd-tp-20 {
        padding-top: 25px; 
    }
    .card-wrap-contactLead{
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
    }
    /* Salman */
        .contactDetails-title {
        font-size: 24px;
        font-family: robotoregular;
        }

        .contactDetails-titleBorder {
            border-style: solid;
            border-top-width: 1px;
            border-top-color: #fff;
            border-left-width: 1px;
            border-left-color: #fff;
            border-right-width: 1px;
            border-right-color: #fff;
            border-bottom-width: 5px;
            border-bottom-color: #fff;
            margin-left: 20px;
            margin-bottom: 30px;
            width: 170px
            
            }

    @media only screen and (min-width: 320px) {
        .prppsal-fmly-pad-tp-10 {
            padding-top: 0px;
        }
     .cra-evt-pad-top-20{
         padding-top: 0px;
     }
          .switch-text-createvent{
        padding-top: 0px;
        padding-left: 0px;
    }
        .none{
            font-size: 14px;
            font-family: robotoregular;
        }
        .high {
           
            font-size: 11px;
            text-transform: uppercase;
          
            color: #fff;
            vertical-align: middle;
         
            
        }
        .high-color {
            background-color: #eb9292;
        }
        .medium {
            padding-left: 5px;
            padding-top: 2px;
            width: 60px;
            height: 18px;
            background-color: #e8bd55;
            
            color: #FFF;
            font-size: 11px;
            border-radius: 2px;
            min-width: 44px;
            text-transform: uppercase;
            font-style: normal;
            /* margin: 1px 0px 18px 3px; */
        }
        .low {
            width: 40px;
            height: 18px;
            background-color: #a3d562;
            padding-left: 5px;
            padding-top: 2px;
            color: #FFF;
            font-size: 11px;
            border-radius: 2px;
            /* min-width: 44px; */
            text-transform: uppercase;
            font-style: normal;
            /* margin: 1px 0px 18px 3px; */
        }
         .table-row-check{
            padding-left: 10px;
        
        }
         .cra-evt-pd-btm-5 {
            padding-bottom: 0px;
        }
        .create-evnt-font-big {
            font-size: 15px;
            font-family:robotoregular;
            font-weight: 700;
        }
        /*Button Arrow CSS*/
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
            font-family:robotoregular;
        }
       
        .lead-contact-btn-width {
            width: 50%;
        }

        /* This margin class is used to provide margin to all individual
        filed */
        .mbt-i-ld-20 {
            margin-bottom: 20px;
        }

        .mrgn-rw-fld-lft-rgt-10 {
            margin-left: 15px;
            margin-right: 15px;
        }

        .frm-hedng-bold-16 {
            font-size: 16px;
            font-weight: 700;
            font-family:robotoregular;
        }

        /* Card top padding */
        .ld-dtls-crd-pd-tp-20 {
            padding-top: 20px; 
        }

        .card-wrap-contactLead{
        border:none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
        }

         .contactDetails-title {
        font-size: 14px;
        font-family: robotoregular;
        }

        .contactDetails-titleBorder {
        border-bottom-width: 4px;
        margin-left: 15px;
        margin-bottom: 20px;
        width: 105px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .prppsal-fmly-pad-tp-10 {
            padding-top: 10px;
        }
         .table-row-check{
                  padding-left: 10px;
        
                }
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
        }
   
        .lead-contact-btn-width {
            width: 150px;
        }

        /* switching class */
        .ld-cntc-dtls-flx-dir {
            flex-direction: row;
        }

        /* This class is used to provide padding to row */
        .pd-rw-lft-rgt-10 {
            padding-left: 10px;
            padding-right: 10px;
        }

        /* This class is used to provide margin-left and right rows fileds */
        .mrgn-rw-fld-lft-rgt-10 {
            margin-left: 10px;
            margin-right: 10px;
        }

        /* alignment class for fixing elements at center */
        .cntc-itms-algn-cntr {
            align-items: center;
            justify-content: space-between;
        }
         .card-wrap-contactLead{
        margin:10px;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .lead-contact-btn-width {
            width: 150px;
        }
        .cra-evt-pd-btm-5 {
            padding-bottom: 5px;
        }
    }
</style>
