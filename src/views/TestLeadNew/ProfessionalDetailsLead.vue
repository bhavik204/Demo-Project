<template>
        <!-- Contact Details -->
    <div class="tb-side-container" style=" flex:1;">

        <div class="contact-dtls-frm-card ld-dtls-crd-pd-tp-20 card-wrap-ProfessionalLead">
            <div class="prof-details-titleBorder ">
                 <text class="prof-details-title">Professional Deatails</text>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <!-- Education Dropdown -->
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Education</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-down :option-list="eductionList"></apk-drop-down>
                    </div>
                    <div v-if="platform == 'Web'">
                        <select v-model="eduction" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in eductionList" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>

                <!-- Professtion type -->
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Profession Type</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-down :option-list="professionList"></apk-drop-down>
                    </div>
                    <div v-if="platform == 'Web'">
                        <select v-model="profession" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in professionList" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Income Group</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-down :option-list="incomeTypeList"></apk-drop-down>
                    </div>
                    <div v-if="platform == 'Web'">
                        <select v-model="incomeGrp" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in incomeTypeList" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div> 

                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    
                    <vx-input-box
                        vx-label="Annual Income"
                        vx-type=number
                        vx-placeholder="Enter Annual Income"
                        message="Please Enter Amount"
                            :hasRequired="true"
                        :vx-model="annualIncome" @valueReading="annualIncome=$event.value">
                    </vx-input-box>
                </div>                 
            </div>
        </div>

        <div v-if="platform==='Web'" class="contact-dtls-frm-card pro-btn-space pro-btn-padding card-wrap-ProfessionalLead" style="margin-bottom:20px">
            <div class=" activity-prof-details-btn-width" style="padding:10px;">

                <div class=" cursor-pointer-globle"  @click.native="jump('/leadmasterpage/leaddetails/contactlead')">
                    <vx-secondary-button 
                        btn-name="Previous"  
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                    </vx-secondary-button>
                </div>
            </div>
            <div class=" activity-prof-details-btn-width" style="padding:10px;">
                <div class=" cursor-pointer-globle" @click.native="dataSaveOnProceed">
                    <vx-primary-button 
                        btn-name="Proceed"  
                        icon-side="right" 
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" >
                    </vx-primary-button>
                </div>
            </div>
        </div>

        <div v-if="platform !=='Web'" class="contact-dtls-frm-card pro-btn-space card-wrap-ProfessionalLead" style=" flex-direction:row;margin-bottom:10px;">
            <div class=" activity-prof-details-btn-width" style="padding:20px;">
                <div class=" cursor-pointer-globle"  @click="jump('/leadmasterpage/leaddetails/contactlead')">
                    <vx-secondary-button 
                        btn-name="Previous" 
                         
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                    </vx-secondary-button>
                </div>
            </div>
            <div class=" activity-prof-details-btn-width" style="padding:20px;">
                
                <div class=" cursor-pointer-globle" @click="jump('/leadmasterpage/leaddetails/existingLead')">
                    <vx-primary-button 
                        btn-name="Proceed" 
                        
                        icon-side="right" 
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png">
                    </vx-primary-button>
                </div>
            </div>
        </div>

    </div>
        
</template>

<script>
    // import applicationTab from './ApplicationTab.vue'
    import appHeader from '../../components/Application/AppHead.vue'
    import leadHeader from '../../components/Proposal/LeadHeader.vue'
    import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue'

    import apkDropDown from '../CFR/cfr-dropDown-apk'
    import switcher from '../../components/GenderView/genderView'

    const eductionList = ["Below 10th Standard", "Diploma After 10th Standard", "Diploma", "Illiterate", "Other", "Plus Two 10+2", "Post Graduate", "SSLC 10th Standard", "Doctorate"];

    const professionList = ["Agriculture", "AntiqueDealer", "Armed Forces", "Buisness", "Diamond Trader",
        "Farmer", "House Wife", "House Wife with High Income", "Jewellery Dealer", "Labour",
        "Machine Operator", "Politically Exposed Person", "Professionals", "Retired", "Salaried",
        "Unemployed", "Working in Coal Mines"
    ];

    const incomeTypeList = ["Less than 2.5 Lacs", "2.5 Lacs to 3.49 Lacs", "3.5 Lacs to 4.99 Lacs", "5 Lacs to 7.99 Lacs", "8 Lacs to 9.99 Lacs", "More than 10 Lacs, Less than 14.99 Lacs", "More than 15 Lacs, Less than 20 Lacs", "More than 20 Lacs"];

    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
   
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

            var global = this;
            // console.log('Created Method Object');
          
            // This condition is used to check, Is array have index 0 or not
            if(global.$store.getters.getLeadFormData[3]) {
                console.log(global.$store.getters.getLeadFormData[3]);
                let profesnlData   = global.$store.getters.getLeadFormData[3];

                this.eduction    = profesnlData.professionLeadData.education
                this.incomeGrp  = profesnlData.professionLeadData.incomeGroup
                this.annualIncome  = profesnlData.professionLeadData.annuaLincome
                this.profession = profesnlData.professionLeadData.professionType
            }
        },
        components: {
            vxInputBox,
            vxPrimaryButton ,
            vxSecondaryButton,
            apkDropDown,
            switcher
        },
        data() {
            return {
                eductionList,
                professionList,
                incomeTypeList,

                eduction: '',
                profession: '',
                incomeGrp: '',
                annualIncome: '',
            
                platform: invalid,
                deviceWidth: invalid,
            }
        },
        beforeRouteLeave(to, form, next){
           let formData = {
                    education: this.eduction,
                    professionType: this.profession,
                    incomeGroup: this.incomeGrp,
                    annuaLincome: this.annualIncome
                }
                console.log(formData);
                this.$store.commit('INSERT_LEADS_DATA', {professionLeadData: formData});
            next();
        },
     
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },

            dataSaveOnProceed() {
               
                // let formData = {
                //     education: this.eduction,
                //     professionType: this.profession,
                //     incomeGroup: this.incomeGrp,
                //     annuaLincome: this.annualIncome
                // }
                // console.log(formData);
                // this.$store.commit('INSERT_LEADS_DATA', {professionLeadData: formData});
                this.$router.push('/leadmasterpage/leaddetails/existingLead');
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

    .pro-btn-padding{
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
    
    .pro-btn-space {
        justify-content: space-between
    }
    .activity-prof-details-btn-width {
        width: 300px;
    }
    .cntct-frm-lbl-size {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
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
     .card-wrap-ProfessionalLead{
        margin: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
    }

    /* Salman */
        .prof-details-title {
        font-size: 24px;
        font-family: robotoregular;
        }

        .prof-details-titleBorder {
            border-style: solid;
            border-top-width: 1px;
            border-top-color: #fff;
            border-left-width: 1px;
            border-left-color: #fff;
            border-right-width: 1px;
            border-right-color: #fff;
            border-bottom-width: 5px;
            border-bottom-color: #3b371e;
            margin-left: 20px;
            margin-bottom: 30px;
            width: 240px
            
            }


    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
            font-family:robotoregular;
        }
       
        .activity-prof-details-btn-width {
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

        .card-wrap-ProfessionalLead{
        border:none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
        }

         .prof-details-title {
        font-size: 14px;
        font-family: robotoregular;
        }

        .prof-details-titleBorder {
        border-bottom-width: 4px;
        margin-left: 15px;
        margin-bottom: 20px;
        width: 137px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
        }
   
        .activity-prof-details-btn-width {
            width: 23%;
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
         .card-wrap-ProfessionalLead{
        margin:10px;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .activity-prof-details-btn-width {
            width: 15%;
        }
    }
</style>
