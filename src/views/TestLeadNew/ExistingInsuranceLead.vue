<template>
        <!-- Contact Details -->
    <div class="tb-side-container" style=" flex:1;">
        
        <div class="contact-dtls-frm-card ld-dtls-crd-pd-tp-20 card-wrap-InsurLead">
            <div class="exist-insur-titleBorder ">
                 <text class="exist-insur-title">Existing Insurance</text>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10">
                <div style="flex-direction:column;">
                    <div class="">
                        <text class="cntct-frm-lbl-size">Have Life Insurance ?</text>
                    </div>
                    <div class="mbt-i-ld-20" v-if="platform !== 'Web'" style="flex-direction:row">
                        <div>
                            <switch @change="onchange"></switch>
                        </div>
                        <text class="cntct-frm-lbl-size">{{check}}</text>
                    </div>
                    <div v-if="platform === 'Web'" class="mbt-i-ld-20 cntc-itms-algn-cntr" style="flex-direction:row">
                        <!-- This is not only used for gender we used this for other used -->
                        <!-- <switcher option1="Yes" option2="No" @selectedGender="readYesNo"></switcher> -->
                        <input type="radio" class="cursor-pointer-globle" v-model="ExistInsur" value="YES"  @click.native="InsurDesc('NO')" />
                        <label class="exist-form-radio-title">Yes</label>
                    
                        <input type="radio" class="cursor-pointer-globle" v-model="ExistInsur" value="NO" @click.native="InsurDesc('YES')" />
                        <label class="exist-form-radio-title">No</label>
                    </div>
                </div>
            </div>

            <!-- Wraper of hide show code section -->
            <div v-if="showfield === true">
                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                    
                    <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <vx-input-box
                            vx-label="Sum Assured"
                            vx-placeholder="Enter Sum Assured"
                            vx-type="number"
                            message="Please enter the Sum Assured for the existing insurance policy"
                            :hasRequired="true"
                            :vx-model="sumAssured" @valueReading="sumAssured = $event.value">
                        </vx-input-box>
                    </div>

                    <!--  -->
                    <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <text class="cntct-frm-lbl-size">Select Insurance</text>
                        <div v-if="platform !== 'Web'">
                            <apk-drop-down :option-list="Insurerli"></apk-drop-down>
                        </div>
                        <div v-if="platform == 'Web'">
                            <select v-model="selectedItem" class="cursor-pointer-globle vx-globle-drp-down">
                                <option value="" selected>Select</option>
                                <option v-for="(calc, li) in Insurerli" :key="li">{{calc}}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                    <!-- class="drp-mrgin-left-5" -->
                    <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        
                        <vx-input-box
                            vx-type="date"
                            vx-label="Risk Commencement Date"
                            message="Please choose the start date of insurance coverage "
                            :hasRequired="true"
                            vx-placeholder=""
                            :vx-model="comenceDate"  @valueReading="comenceDate = $event.value">
                        </vx-input-box>
                    </div>
                    <!-- Dont delete -->
                    <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                    </div>
                    
                </div>
            </div>

            <div v-if="showfield===true" class="mbt-i-ld-20 pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10" >
               <div v-if="platform === 'Web'" class="ex-ins-frm-b-width mbt-i-ld-20">
                        <vx-secondary-button 
                            btn-name="Add Insured Details"  
                            btn-icon="https://www.materialui.co/materialIcons/social/group_add_black_192x192.png"
                            @click.native=" InsurDesc(3)">
                        </vx-secondary-button>
                    </div>
                    <div v-if="platform !== 'Web'" class="mbt-i-ld-20">
                        <vx-secondary-button 
                            btn-name="Add Insured Details"  
                            btn-icon="https://www.materialui.co/materialIcons/social/group_add_black_192x192.png"
                            @click=" jump('/existInsurDialog')">
                        </vx-secondary-button>
                    </div>
            </div>
            <!-- <div v-if="platform !== 'Web'" class="mbt-i-ld-20 pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10">
                <text class="frm-hedng-bold-16 cursor-pointer-globle" style="color: blue;" @click="jump('/existInsurDialog')">(+)Add Insured Details</text>
            </div> -->

            <!-- Data table by usama -->

            <div class="mbt-i-ld-20 pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10" v-if="tableshow===true">
                <scroller  scroll-direction="horizontal" class="e-tb-dt-rw">
                    <div class="e-tb-dt-col e-tb-dt-flx-wrp e-tb-dt-container e-tb-whole-bdr">
                        <!-- Header -->
                        <div class="e-tb-dt-rw my-compo-tb-hdr-color m-c-tb-bdr m-c-tb-btm-bdr">
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-1">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Relation</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-2">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Name</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Date of Birth</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-4">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Any Chronic Disease</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Action</text>
                            </div>
                        </div>

                        <!-- Row -->

                        <div class="e-tb-dt-rw m-c-tb-bdr m-c-tb-btm-bdr e-tb-rw-align-cntr" v-for="(tbData, index) in table" :key="index">
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-1">
                                <text class="e-tb-dt-title-fnt">{{tbData.SelectRelation}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-2">
                                <text class="e-tb-dt-title-fnt">{{tbData.Name}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3">
                                <text class="e-tb-dt-title-fnt e-tb-dt-al-txt">{{tbData.DateofBirth}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-4">
                                <text class="e-tb-dt-title-fnt e-tb-dt-al-txt">{{tbData.IsInsuredsufferingfromanychronicdisease}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3 e-tb-dt-rw">
                                <!-- WEB -->
                                <div @click.native="InsurDesc('edit', index)" v-if="platform === 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                <div  @click.native="deletedata(index)" v-if="platform === 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>

                                <!-- APK -->
                                <div @click="jump('/existInsurDialog')" v-if="platform !== 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                <div  @click="deletedata(index)" v-if="platform !== 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </scroller>
            </div>
            <!-- Table end here -->
            
            </div>
            <div v-if="platform ==='Web'" class="contact-dtls-frm-card exis-btn-spavce exist-btn-padding card-wrap-InsurLead" style="margin-bottom:20px">
                <div class=" lead-contact-btn-width" style="padding:10px;">

                    <div class=" cursor-pointer-globle"  @click.native="jump('/leadmasterpage/leaddetails/professionallead')">
                        <vx-secondary-button 
                            btn-name="Previous"  
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                        </vx-secondary-button>
                    </div>
                </div>
                <div class=" lead-contact-btn-width" style="padding:10px;">
                    <div class=" cursor-pointer-globle" @click.native="dataSaveOnProcede">
                        <vx-primary-button 
                            btn-name="Proceed"  
                            icon-side="right" 
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" >
                        </vx-primary-button>
                    </div>
                </div>
            </div>


            <div v-if="platform !=='Web'" class="contact-dtls-frm-card exis-btn-spavce card-wrap-InsurLead" style=" flex-direction:row;margin-bottom:10px;">
                <div class=" lead-contact-btn-width" style="padding:20px;">
                    <div class=" cursor-pointer-globle"  @click="jump('/leadmasterpage/leaddetails/professionallead')">
                        <vx-secondary-button 
                            btn-name="Previous" 
                             
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                        </vx-secondary-button>
                    </div>
                </div>
                <div class=" lead-contact-btn-width" style="padding:20px;">
                    
                    <div class=" cursor-pointer-globle"  @click="jump('/leadmasterpage/leaddetails/productlead')">
                        <vx-primary-button 
                            btn-name="Proceed" 
                            
                            icon-side="right" 
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png">
                        </vx-primary-button>
                    </div>
                </div>
            </div>

            <!-- POP UP -->
            <div v-if="showLead === true">
                <popup>
                    <div class="to-do-flx-row to-do-task-title">
                        <div class="exist-insu-head">
                            <text class="to-do-title-font">Insured Details</text>
                        </div>    
                    </div>
        
                    <div class="exist-insu-root-form exist-insu-shadow exist">
                        <exist-insur-dialog :edit-data="editData"  ref="accessData" @getStructData="insertDataIntoTable"></exist-insur-dialog>
                    </div>
                    <div class="todo-footer to-do-flx-row-rvrs">
                        <div v-if="platform==='Web'" class="exist-insu-md-btn-width cursor-pointer-globle" style="margin-left: 10px">
                            <vx-primary-button 
                                btn-name="Save" 
                                btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" 
                                @click.native="saveData">
                            </vx-primary-button> 
                        </div>
                        <div v-if="platform ==='Web'" class="exist-insu-md-btn-width cursor-pointer-globle">
                            <vx-secondary-button 
                                btn-name="Cancel" 
                                btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
                                @click.native="InsurDesc(5)">
                            </vx-secondary-button>
                        </div>
                    </div>
                </popup>
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
    import ExistInsurDialog from '../../views/TestLeadNew/ExistInsurDialog.vue'

    import apkDropDown from '../CFR/cfr-dropDown-apk'
    import switcher from '../../components/GenderView/genderView'
    import popup from '../Calendar/Todo-pop-up.vue'

    import moment from 'moment'
   

    const Insurerli = ["Endowment Plans", "Whole Life Policy", "Money Back Policy", 
    "Life Insurance", "Health Insurance", "Medical Insurance plans" ];

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
            // This condition is used to check, Is array have index 0 or not
            if(global.$store.getters.getLeadFormData[5]) {
                let dataGetter = global.$store.getters.getLeadFormData[5].exsitLeadData;
                console.log('Personal Lead Data' , dataGetter);
                this.ExistInsur = dataGetter.HaveLifeInsurance
                this.sumAssured = dataGetter.SumAssured
                this.selectedItem = dataGetter.Insurance
                this.table = dataGetter.Insurancedetails
                this.comenceDate = dataGetter.riskComensmentDate
                // this.gender = dataGetter.gender
            }

        },
        components: {
            vxInputBox,
            vxPrimaryButton ,
            vxSecondaryButton,
            apkDropDown,
            switcher,
            popup,
            ExistInsurDialog,
           
            // , applicationTab 
        },
        data() {
            return {
                moment: moment,
                Insurerli,

                comenceDate: '',
                selectedItem: '',
                sumAssured: '',
                ExistInsur: '',
              
                platform: invalid,
                deviceWidth: invalid,

                // ------------------

                showLead: false,
                showfield: false,
                tableshow:false,

                check: '',

                table: [],
                
                editData: {}

            }
        },

         beforeRouteLeave(to, form, next){
         
                let existForm = {
                    SumAssured: this.sumAssured,
                    Insurance: this.selectedItem,  /**Selected Insurance */
                    riskComensmentDate: moment(this.comenceDate).format('YYYY-MM-DD'),
                    HaveLifeInsurance: this.ExistInsur || this.check,
                    Insurancedetails: this.table
                }
                console.log('Existing Form', existForm);

                this.$store.commit('INSERT_LEADS_DATA', {exsitLeadData: existForm});
            next();
        },
     
        methods: {
            /** This is the function which is used to call child function using $ref */
            saveData() {
                console.log('Called');
                this.$refs.accessData.saveData();
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            deletedata(index) {
                // console.log(index);
                this.table.splice(index, 1);
                // console.log(this.table.length)
                if (this.table.length === 0) {
                    this.tableshow = false
                }
            },
            InsurDesc(caseid, index) {

                switch (caseid) {

                    case 'NO':
                        this.showfield = true;
                        this.$store.commit('LEAD_FORM_HANDLER', {showfield: this.showfield});

                        break;
                    case 'YES':
                        this.showfield = false;
                        this.$store.commit('LEAD_FORM_HANDLER', {showfield: this.showfield});
                        break;
                    case 3:
                        this.editData = {};
                        this.showLead = true;
                        this.$store.commit('LEAD_FORM_HANDLER', {showLead: this.showLead});
                        break;
                    case 4:
                        this.showLead = true;
                        
                        this.$store.commit('LEAD_FORM_HANDLER', {showLead: this.showLead});

                        break;
                    case 5:
                        this.showLead = false
                        this.$store.commit('LEAD_FORM_HANDLER', {showLead: this.showLead});

                            //  this.$emit('popupOff',this.visiblity)
                        break;
                    case 'edit':
                        this.editData = this.table[index];
                        // New Property
                        this.showLead = true
                        this.editData.index = index;
                        console.log('Wants to EDIT :: ', this.editData);
                    break;
                }
            },
            onchange(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check = 'Yes'
                } else {
                    this.check = 'No'
                }
            },
            readYesNo(e) {
                var val = e.value;
                // Male ---> Yes : Male is just string but actually we read true value here
                if(val === 'Male') {
                    this.showfield = true;
                } else {
                    this.showfield = false;
                }
            },

            dataSaveOnProcede() {
                // console.log('Date :' , this.comenceDate);
                // let existForm = {
                //     SumAssured: this.sumAssured,
                //     Insurance: this.selectedItem,  /**Selected Insurance */
                //     riskComensmentDate: moment(this.comenceDate).format('YYYY-MM-DD'),
                //     HaveLifeInsurance: this.ExistInsur || this.check,
                //     Insurancedetails: this.table
                // }
                // console.log('Existing Form', existForm);

                // this.$store.commit('INSERT_LEADS_DATA', {exsitLeadData: existForm});
                this.$router.push('/leadmasterpage/leaddetails/productlead');
            },

            insertDataIntoTable(event) {
                if ('index' in event.data) {
                    /** Data Updation */
                    let indexPos = event.data.index;
                    delete event.data.index;
                    this.table[indexPos] = event.data
                    console.log('Data Updated', this.table);
                    /**
                     * Hide pop up when updation is done
                     */
                    this.showLead = event.hide;
                    this.tableshow = true;
                } else {
                    this.table.push(event.data);
                    if(this.tableshow === false) {
                        this.tableshow = true;
                    }
                    console.log('Data Pushed', this.table);
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

    .exist-btn-padding{
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
    
    .exis-btn-spavce {
        justify-content: space-between
    }

    .exist-form-radio-title{
        margin: 10px;
        color:grey;
    }
    .lead-contact-btn-width {
        width: 300px;
    }
    .cntct-frm-lbl-size {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
        font-family:robotoregular;
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

    /* Table design */
    .my-compo-tb-hdr-color {
        background-color: rgb(223, 223, 223);
    }
    .e-tb-dt-rw {
        flex-direction: row;
    }
    .e-tb-dt-col {
        flex-direction: column;
    }
    .e-tb-dt-flx-wrp {
        flex-wrap: wrap;
    }
    .e-tb-dt-container {
        width: 1120px;
    }
    .e-tb-dt-bx-padding {
        padding: 10px;
    }
    .e-tb-dt-title-fnt {
        font-size: 25px;
        font-family:robotoregular;
    }
    .e-tb-dt-bld-fnt {
        font-weight: 700;
    }

    /* Table boeders */
    .m-c-tb-bdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #FFF;
    }
    .m-c-tb-lft-bdr {
        border-left-color: rgb(232, 232, 232);;
    }
    .m-c-tb-rght-bdr {
        border-right-color: rgb(232, 232, 232);;
    }
    .m-c-tb-top-bdr {
        border-top-color: rgb(232, 232, 232);;
    }
    .m-c-tb-btm-bdr {
        border-bottom-color: rgb(232, 232, 232);;
    }

    /* table width in apk*/
    /* Table column width */
        /* for relation */
    .e-tb-dt-col-1 {
        width: 200px;
    }

    /* For name */
    .e-tb-dt-col-2 {
        width: 350px;
    }
    /* for DOB */
    .e-tb-col-3 {
        width: 180px;
    }

    /* Chornic dises */
    .e-tb-dt-col-4 {
        width: 250px;
    }
    .e-tb-dt-al-txt {
        text-align: center;
    }
    .e-tb-rw-align-cntr {
        align-items: center;
    }
    /* Action buttons */
    .e-tb-action-icon {
        width: 35px;
        height: 35px;
        margin-right: 12px;
    }

    .card-wrap-InsurLead{
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
        .exist-insur-title {
        font-size: 24px;
        font-family: robotoregular;
        }

        .exist-insur-titleBorder {
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
            width: 210px
            
            }

    @media only screen and (min-width: 320px) {
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

        /* Table design */
        .e-tb-dt-container {
            width: 750px;
        }
        .e-tb-dt-bx-padding {
            padding: 5px;
        }
        .e-tb-dt-title-fnt {
            font-size: 14px;
        }

        /* Table column width */
        /* for relation */
        .e-tb-dt-col-1 {
            width: 120px;
        }

        /* For name */
        .e-tb-dt-col-2 {
            width: 250px;
        }
        /* for DOB */
        .e-tb-col-3 {
            width: 100px;
        }

        /* Chornic dises */
        .e-tb-dt-col-4 {
            width: 150px;
        }
        /* Action buttons */
        .e-tb-action-icon {
            width: 20px;
            height: 20px;
        }

        /* whole table border only in web */
        .e-tb-whole-bdr {
            border: 1px solid rgb(232, 232, 232);
        }

         .cntc-itms-algn-cntr {
            align-items: center;
            /* justify-content: space-between; */
        }

        .card-wrap-InsurLead{
        border:none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
        }

        .exist-insur-title {
        font-size: 14px;
        font-family: robotoregular;
        }

        .exist-insur-titleBorder {
            border-bottom-width: 4px;
            margin-left: 15px;
            margin-bottom: 20px;
            width: 125px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
        }
   
        .lead-contact-btn-width {
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
            /* justify-content: space-between; */
        }
         .card-wrap-InsurLead{
        margin:10px;
        }

        /* This class is used to provide width -> Add insure details btn */
        .ex-ins-frm-b-width {
            width: 30%;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .lead-contact-btn-width {
            width: 15%;
        }
        /* This class is used to provide width -> Add insure details btn */
         .ex-ins-frm-b-width {
            width: 20%;
        }
    }
</style>
