<template>
        <!-- Contact Details -->
    <div class="tb-side-container" style=" flex:1;">
        
        <div class="contact-dtls-frm-card ld-dtls-crd-pd-tp-20 card-wrap-PersonalLead">
            <div class="personaldetail-titleBorder ">
                 <text class="personaldetail-title">Personal Details</text>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                
                <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                    <vx-input-box
                        vx-label="First Name"
                        message="First Name is required"
                        vx-placeholder="Enter First Name"
                        :hasRequired="true"
                        :vx-model="firstName" @valueReading="firstName = $event.value">
                    </vx-input-box>
                </div>
                <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                    <vx-input-box
                        vx-label="Last Name"
                        message="Last Name is required"
                        vx-placeholder="Enter Last Name"
                        :hasRequired="true"
                        :vx-model="lastName" @valueReading="lastName = $event.value">
                    </vx-input-box>     
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-type="date"
                        vx-label="Date of Birth"
                        message="Please Select DOB"
                        vx-placeholder="yyyy-mm-dd"
                        :hasRequired="true"
                        :vx-model="dateofBirth" @valueReading="dateofBirth = $event.value">
                    </vx-input-box>
                </div>                
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Gender</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-dwon :option-list="genderOption"></apk-drop-dwon>
                    </div>
                    <div v-if="platform == 'Web'" class="radio-btn-mrgin-tp">
                        <gender-select :value="gender" @selectedGender="readGender"></gender-select> 
                    </div>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
        
                <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Martial Status</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-dwon :option-list="martialList" @selectedValue="readMeritalStatus"></apk-drop-dwon>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="meritalStatus" @change="meritalCurrentStatu(meritalStatus)" class="vx-globle-drp-down cursor-pointer-globle" >
                            <option value="" selected disabled>Select</option>
                            <option v-for="(calc, li) in martialList" :key="li">{{calc}}</option>
                        </select>
                    </div>

                </div>
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <div v-if="showChildFields === true">
                        <text class="cntct-frm-lbl-size">Children</text>
                        <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                            <apk-drop-dwon :option-list="childOption" @selectedValue="openMask"></apk-drop-dwon>
                        </div>
                        <div v-if="platform == 'Web'" class="radio-btn-mrgin-tp">
                            <!-- selectedGender here event name dosent metter -->
                            <gender-select option1="Yes" option2="No" :has-icons="false" @selectedGender="addNewChild"></gender-select> 
                        </div>
                    </div>
                    
                </div>
            </div>
            

            <!-- These fileds move on popup -->
            <!-- <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Child Name"
                        vx-placeholder="Enter Child Name"
                        :vx-model="childName">
                    </vx-input-box> 
                </div>
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                   <vx-input-box
                        vx-label="Age"
                        vx-placeholder="Enter Age "
                        :vx-model="childAge">
                    </vx-input-box>
                </div>
            </div> -->

            <!-- Data table by usama -->

            <div class="mbt-i-ld-20 pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10" v-if="childTable === true">
                <scroller  scroll-direction="horizontal" class="e-tb-dt-rw">
                    <div class="e-tb-dt-col e-tb-dt-flx-wrp e-tb-dt-container e-tb-whole-bdr">
                        <!-- Header -->
                        <div class="e-tb-dt-rw my-compo-tb-hdr-color m-c-tb-bdr m-c-tb-btm-bdr">
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-1">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Sr.No.</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-2">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Child Name</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Age</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-4">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Gender</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Action</text>
                            </div>
                        </div>

                        <!-- Row -->

                        <div class="e-tb-dt-rw m-c-tb-bdr m-c-tb-btm-bdr e-tb-rw-align-cntr" v-for="(tbData, index) in noOfChild" :key="index">
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-1">
                                <text class="e-tb-dt-title-fnt">{{index + 1}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-2">
                                <text class="e-tb-dt-title-fnt">{{tbData.childName}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3">
                                <text class="e-tb-dt-title-fnt">{{tbData.childAge}}</text>
                            </div>
                            <!-- e-tb-dt-al-txt remove -->
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-4">
                                <text class="e-tb-dt-title-fnt ">{{tbData.childGender}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3 e-tb-dt-rw">
                                <!-- WEB -->
                                <div @click.native="addChildIntoList(index,'edit')" v-if="platform === 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                <div  @click.native="addChildIntoList(index, 'Delete')" v-if="platform === 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>

                                <!-- APK -->
                                <div @click="jump('/existInsurDialog')" v-if="platform !== 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                <div  @click="addChildIntoList(index, 'Delete')" v-if="platform !== 'Web'" class="e-tb-dt-bx-padding">
                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </scroller>
            </div>
            <!-- Table end here -->
            

        </div>
        <div v-if="platform==='Web'" class="contact-dtls-frm-card pers-btn-space btn-padding card-wrap-PersonalLead" style="margin-bottom:20px">
            <div class=" activity-personal-lead-btn-width" style="padding:10px;">

                <div class=" cursor-pointer-globle"  @click.native="jump('/leadmasterpage/statuslead')">
                    <vx-secondary-button 
                        btn-name="Previous"  
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                    </vx-secondary-button>
                </div>
            </div>
            <div class=" activity-personal-lead-btn-width" style="padding:10px;">
                <div class=" cursor-pointer-globle" @click.native="saveDataAtStore">
                    <vx-primary-button 
                        btn-name="Proceed"  
                        icon-side="right" 
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" >
                    </vx-primary-button>
                </div>
            </div>
        </div>


        <div v-if="platform !=='Web'" class="contact-dtls-frm-card pers-btn-space card-wrap-PersonalLead" style=" flex-direction:row;margin-bottom:10px;">
            <div class=" activity-personal-lead-btn-width" style="padding:20px;">
                <div class=" cursor-pointer-globle"  @click="jump('/leadmasterpage/statuslead')">
                    <vx-secondary-button 
                        btn-name="Previous" 
                         
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                    </vx-secondary-button>
                </div>
            </div>
            <div class=" activity-personal-lead-btn-width" style="padding:20px;">
                
                <div class=" cursor-pointer-globle" @click="jump('/leadmasterpage/leaddetails/contactlead')">
                    <vx-primary-button 
                        btn-name="Proceed" 
                        
                        icon-side="right" 
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png">
                    </vx-primary-button>
                </div>
            </div>
        </div>

        <!-- POP UP for child  for web-->
        <popup v-if="chWindow === true">
            <div class="to-do-flx-row to-do-task-title">
                <div>
                    <text class="to-do-title-font">Add Child</text>
                </div>
                <div>
                    <image src="" class="" />
                </div>
            </div>
            <div class="pop-up-body-container-height">
                <!-- Row -->
                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                    <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <vx-input-box
                            vx-label="Child Name"
                            vx-placeholder="Enter Child Name"
                            :vx-model="childName" @valueReading="readChildName">
                        </vx-input-box> 
                    </div>
                    <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                            vx-type="number"
                            vx-label="Age"
                            vx-placeholder="Enter Age "
                            :vx-model="childAge"  @valueReading="readChildAge">
                        </vx-input-box>
                    </div>
                </div>
                <!-- Row End -->
                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                    <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <text class="cntct-frm-lbl-size">Child Gender</text>
                        <div v-if="platform == 'Web'" class="radio-btn-mrgin-tp">
                            <gender-select :value="childGender" @selectedGender="readChildGender"></gender-select> 
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="weex-overlay-footer weex-overlay-header" style="justify-content:flex-end">
                <div class="p-up-at-ld-btn-width">
                    <vx-secondary-button 
                        btn-name="Cancel"  
                        @click.native="addChildIntoList(null ,'Cancel')"
                        btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png" >
                    </vx-secondary-button>
                </div>
                <div class="p-up-at-ld-btn-width">
                    <vx-primary-button 
                        btn-name="Add"
                        @click.native="addChildIntoList(null, 'Add')"  
                        btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png" >
                    </vx-primary-button>
                    
                </div>
            </div>
        </popup>

        <!-- APK POP UP -->
        <wxc-mask height="800"
              width="702"
              border-radius="0"
              duration="200"
              mask-bg-color="#FFFFFF"
              :has-animation="hasAnimation"
              :has-overlay="true"
              :show-close="false"
              :show="show"
              @wxcMaskSetHidden="wxcMaskSetHidden">
            <div class="content">
                <div class="weex-overlay-header weex-overlay-task-title">
                    <div>
                        <text class="weex-overlay-heading-font">Add Reminder</text>
                    </div>
                    <div>
                        <image src="" class="" />
                    </div>
                </div>

                <div class="weex-overlay-body">
                    <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10" style="margin-top:30px">
                        <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                            <vx-input-box
                                vx-label="Child Name"
                                vx-placeholder="Enter Child Name"
                                :vx-model="childName" @valueReading="readChildName">
                            </vx-input-box> 
                        </div>
                        <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <vx-input-box
                                vx-label="Age"
                                vx-placeholder="Enter Age "
                                :vx-model="childAge"  @valueReading="readChildAge">
                            </vx-input-box>
                        </div>
                    </div>

                    <!--  -->

                    <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
        
                
                        <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                            <text class="cntct-frm-lbl-size">Child Gender</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                                <apk-drop-dwon :option-list="genderOption" @selectedValue="readChildGender"></apk-drop-dwon>
                            </div>
                        </div>
                    </div>

                    <!--  -->
                </div>

                <div class="weex-overlay-footer weex-overlay-header">
                    <div class="">
                        <vx-secondary-button 
                        btn-name="Cancel"  
                        @click="addChildIntoList(null ,'Cancel')"
                        btn-width="250px"
                        btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png" >
                    </vx-secondary-button>
                    </div>
                    <div style="margin-left:20px">
                        <vx-primary-button 
                            btn-width="250px"
                            btn-name="Add"
                            @click="addChildIntoList(null, 'Add')"  
                            btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png" >
                    </vx-primary-button>
                    </div>
                </div>
    
            </div>
        </wxc-mask>



    </div>
        
</template>

<script>
    // import applicationTab from './ApplicationTab.vue'
    import appHeader from '../../components/Application/AppHead.vue'
    import leadHeader from '../../components/Proposal/LeadHeader.vue'
    import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue'
    import apkDropDwon from '../CFR/cfr-dropDown-apk'
    import genderSelect from '../../components/GenderView/genderView'
    import popup from '../Calendar/Todo-pop-up'

    import moment from 'moment'

    
    const genderOption = ["Male", "Female"];
    const martialList = ["Single", "Married", "Divorced", "Widowed"];

    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')

    import {
        WxcRadio, WxcMask 
    } from 'weex-ui'
    import {
        WxcCheckbox,
        WxcCheckboxList
    } from 'weex-ui'

    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

            var global = this;
            // This condition is used to check, Is array have index 0 or not
            if(global.$store.getters.getLeadFormData[1]) {
                
                let dataGetter = global.$store.getters.getLeadFormData[1].personalLeadData;
                console.log('Personal Lead Data' , dataGetter);
                this.firstName = dataGetter.firstName
                this.lastName = dataGetter.lastName
                this.dateofBirth = dataGetter.dob
                this.meritalStatus = dataGetter.maritalStatus
                this.ChildInfo = dataGetter.ChildInfo
                this.gender = dataGetter.gender
            }

            this.showChildFields = global.$store.getters.getLeadFormHandler.showChildFields
        },
        components: {
            WxcCheckbox,
            WxcCheckboxList,
            appHeader,
            leadHeader,
            vxInputBox,
            vxPrimaryButton ,
            vxSecondaryButton,
            apkDropDwon,
            genderSelect,
            popup, WxcMask 
            //  applicationTab
        },
        data() {
            return {
                // New Variables name
                moment: moment,
                childOption: [
                    'Yes',
                    'No'
                ],
                firstName: '',
                lastName: '',
                dateofBirth: '',
                gender: '',
                meritalStatus: '',
                
                childName: '',
                childAge: '',
                childGender: '',
                genderOption,
                martialList,
                noOfChild: [],

                chWindow: false,     /** Child POP UP Windwo */
                show: false,
                hasAnimation: false,
                showChildFields: false,
                childTable: false
            }
        }, 

        beforeRouteLeave(to, form, next){
            var personalLeadForm = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    dob: moment(this.dateofBirth).format('YYYY-MM-DD'),
                    gender: this.gender,
                    maritalStatus: this.meritalStatus,
                    ChildInfo: this.noOfChild
                }
                // console.log(this.dateofBirth);
                // var kuchbhi = moment(this.dateofBirth).format('YYYY-MM-DD');
               
                console.log(personalLeadForm);
                this.$store.commit('INSERT_LEADS_DATA', {personalLeadData: personalLeadForm});
                this.$store.commit('LEAD_FORM_HANDLER', {showChildFields: this.showChildFields, childTable: this.childTable});

            next();
        },

        methods: {
            
            saveDataAtStore() {
                // var personalLeadForm = {
                //     firstName: this.firstName,
                //     lastName: this.lastName,
                //     dob: moment(this.dateofBirth).format('YYYY-MM-DD'),
                //     gender: this.gender,
                //     maritalStatus: this.meritalStatus,
                //     ChildInfo: this.noOfChild
                // }
                // // console.log(this.dateofBirth);
                // // var kuchbhi = moment(this.dateofBirth).format('YYYY-MM-DD');
               
                // console.log(personalLeadForm);
                // this.$store.commit('INSERT_LEADS_DATA', {personalLeadData: personalLeadForm});
                // this.$store.commit('LEAD_FORM_HANDLER', {showChildFields: this.showChildFields, childTable: this.childTable});

                this.$router.push('/leadmasterpage/leaddetails/contactlead');
            },
            openMask (e) {
                let opt = e.value;
                if(opt === 'Yes') {
                    this.show = true;
                    this.hasAnimation = true;
                } else {
                    this.show = false;
                    this.hasAnimation = true;
                }
            },
            wxcMaskSetHidden () {
                this.show = false;
                //  this.hasAnimation = false;
            },
            // Callback function which is called by apk dropdowns for moving values
            readGender(e) {
                this.gender = e.value;
            },
            readMeritalStatus(e) {
                this.meritalStatus = e.value
            },
            haveChild(e) {

            },

            // Child
            readChildGender(e) {
                this.childGender = e.value;
            },
            readChildName(e) {
                this.childName = e.value;
            },
            readChildAge(e) {
                this.childAge = e.value;
            },
            meritalCurrentStatu(selectedItem) {
                if(selectedItem !== 'Single') {
                    this.showChildFields = true
                    this.childTable = false
                } else {
                    this.showChildFields = false;
                    this.childTable = false
                }
            },
            /**
             * This method is used to read yes or no value from compnent
             * When childern YES then it shows all require things other wise all are hide
             */
            addNewChild(e) {
                let value = e.value;

                if(value === 'Yes') {
                    this.childName = '';
                    this.childAge = '';
                    this.childGender = ''
                    this.chWindow = true;
                    if(this.noOfChild.length !== 0) {
                        this.childTable = true
                    }
                } else if (value == 'No') {
                    this.childTable = false
                }
            },
            addChildIntoList(index ,optionID) {
                if(optionID === 'Cancel') {
                    this.chWindow = false;
                } else if(optionID === 'Add') {
                    let objStruct = {
                        childName: '',
                        childAge: 0,
                        childGender: ''
                    }

                    objStruct.childName = this.doSentenceCase(this.childName);
                    objStruct.childAge = parseInt(this.childAge);
                    objStruct.childGender = this.childGender;

                    this.childTable = true
                    if (this.noOfChild.length < 4) {
                        this.noOfChild.push(objStruct);
                        modal.toast({
                            message: 'Child Details are Added',
                            duration: 2
                        })
                    } else {
                        modal.toast({
                            message: 'Not more than four child',
                            duration: 2
                        })
                    }
                    this.childName = '';
                    this.childAge = '';
                    // childTable=true
                } 
                else if(optionID === 'edit'){
                    // this.objStruct.push(noOfChild);
                    this.chWindow = true;
                    this.childName = this.noOfChild[index].childName;
                    this.childAge = this.noOfChild[index].childAge;
                    this.childGender = this.noOfChild[index].childGender;
                }
                
                else if(optionID === 'Delete') {
                    this.noOfChild.splice(index, 1);
                    if (this.noOfChild.length === 0) {
                    this.childTable=false
                }
                    // this.childTable=false
                   
                    console.info('Item Delete', index);
                    //  childTable=false
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

    .btn-padding{
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
    
    .pers-btn-space {
        justify-content: space-between
    }
    .activity-personal-lead-btn-width {
        width: 300px;
    }
    .cntct-frm-lbl-size {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
    }

    /* WEEX Overlay */
    .weex-overlay-task-title {
        background-color: #3b371e;   
        padding: 27px;
    }
    .weex-overlay-heading-font {
        font-size: 30px;
        color: #FFF;
    }
    .weex-overlay-header {
        flex-direction: row;
    }
    .weex-overlay-body {
        margin-top: 25px;
        margin-bottom: 15px;
        padding-left: 10px;
        padding-right: 25px;
    }
    .weex-overlay-footer {
        background-color: #EBEBEB;
        padding: 25px;
        margin-top: 25px;
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
    .card-wrap-PersonalLead{
        margin: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
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

    /* Salman */
        .personaldetail-title {
        font-size: 24px;
        font-family: robotoregular;
        }

        .personaldetail-titleBorder {
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
            width: 180px
            
            }

    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
            font-family:robotoregular;
        }
       
        .activity-personal-lead-btn-width {
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
         /* Radio buttons margin top in 320px only */
        .radio-btn-mrgin-tp {
            margin-top: 10px;
        }
        .card-wrap-PersonalLead{
        border:none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
        }

        .pop-up-body-container-height {
            margin-top: 25px;
            min-height: 100px;
        }

        .p-up-at-ld-btn-width {
            width: 30%;
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

         .personaldetail-title {
        font-size: 14px;
        font-family: robotoregular;
        }

        .personaldetail-titleBorder {
        border-bottom-width: 4px;
        margin-left: 15px;
        margin-bottom: 20px;
        width: 110px;
        }

    }
    
    @media only screen and (min-width: 768px) {
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
        }
   
        .activity-personal-lead-btn-width {
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
         .card-wrap-PersonalLead{
        margin:10px;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .activity-personal-lead-btn-width {
            width: 15%;
        }

        /* pop-up btn-width */
        .p-up-at-ld-btn-width {
            width: 20%;
        }
    }
</style>
