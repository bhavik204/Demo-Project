<template>
        <!-- Contact Details -->
    <div class="tb-side-container" style=" flex:1;">

        <div class="ld-cntc-dtls-flx-dir">
            
            <div class="contact-dtls-frm-card ld-dtls-crd-pd-tp-20 card-wrap-status" style="flex:1">
                <div class="status-titleBorder ">
                 <text class="status-title">Status</text>
            </div>
                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                    
                    <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <text class="cntct-frm-lbl-size">Lead Status</text>
                        <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                            <apk-drop-down :option-list="leadStatusList" @selectedValue="callBackStatus"></apk-drop-down>
                        </div>
                        <div v-if="platform === 'Web'">
                            <select v-model="leadStatusValue" @change="display(leadStatusValue)" class="cursor-pointer-globle vx-globle-drp-down">
                                <option value="" selected>Select</option>
                                <option v-for="(calc, li) in leadStatusList" :key="li">{{calc}}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Appointment disposition -->
                    <div style="flex:1"  v-if="divshow===true">

                    </div>
                
                    <div v-if="apntVisible === true" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1">
                        <text class="cntct-frm-lbl-size">Appointment Disposition</text>
                        <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                            <apk-drop-down :option-list="appoint"  @selectedValue="callBackAppnt"></apk-drop-down>
                        </div>
                        <div v-if="platform === 'Web'">
                            <select v-model="appoinDisp" @change="display(appoinDisp)" class="cursor-pointer-globle vx-globle-drp-down">
                                <option value="" selected>Select</option>
                                <option v-for="(calc, li) in appoint" :key="li" v-if="calc !== 'Select'">{{calc}}</option>
                            </select>
                        </div>
                    </div>
                    
                </div>

                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10" v-if="dateTimeVisible === true">
                    <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <vx-input-box 
                            vx-placeholder="" 
                            vx-type="date" 
                            :vx-model="appointDate"
                            vx-label="Appointment Date" @valueReading="appointDate = $event.value"
                            :hasRequired="true"
                            message="Please Select Appointment Date">
                           
                        </vx-input-box>
                    </div>                
                    <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <div class="cra-evt-pd-btm-5"><text class="cntct-frm-lbl-size">Select Start Time</text></div>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="start_time"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="appointTime" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value= "">Select</option>
                            <option v-for="(calc,li) in start_timeWeb" :value="calc.value" :key="li">{{calc.time}}</option>
                        </select>
                    </div>
                    <!-- Error Text Visible on condition -->
                    <div class="err-line-cont" v-if="err.visible">
                        <text class="err-line-sh-o-con" >{{err.errText}}</text>
                    </div>
                </div>
                </div>

                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                    <!-- class="drp-mrgin-left-5" -->
                    <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                        <vx-input-box 
                            vx-label="Remark From Source" 
                            vx-placeholder="Enter some text"
                           
                            :vx-model="sourceRemark" @valueReading="sourceRemark = $event.value"
                        
                            >
                        </vx-input-box>

                    </div>
                    <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                        <vx-input-box 
                            vx-label="Remark From User" 
                            vx-placeholder="Enter some text" 
                            :vx-model="userRemark"  @valueReading="userRemark = $event.value"
                             
                            >
                        </vx-input-box>
                    </div>
                </div>
                
                
                <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 cntc-itms-algn-cntr">
                    <div class="mbt-i-ld-20" style="flex:1">
                        <text class="cntct-frm-lbl-size" style="font-style:italic">Select the team members you want to involve for this lead</text>
                    </div>
                    <div v-if="platform === 'Web'" class="ad-tm-mbr-btn-w-pxl mbt-i-ld-20">
                        <vx-secondary-button 
                            btn-name="Add Team Member"  
                            btn-icon="https://www.materialui.co/materialIcons/social/group_add_black_192x192.png"
                            @click.native="display(6)">
                        </vx-secondary-button>
                    </div>
                    <div v-if="platform !== 'Web'" class="mbt-i-ld-20">
                        <vx-secondary-button 
                            btn-name="Add Team Member"  
                            btn-icon="https://www.materialui.co/materialIcons/social/group_add_black_192x192.png"
                            @click="display(6)">
                        </vx-secondary-button>
                    </div>
                </div>

                <!-- Data table by usama -->

            <div class="mbt-i-ld-20 pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10" v-if="tableshow===true">
                <scroller  scroll-direction="horizontal" class="e-tb-dt-rw">
                    <div class="e-tb-dt-col e-tb-dt-flx-wrp s-tb-dt-container s-tb-whole-bdr">
                        <!-- Header -->
                        <div class="e-tb-dt-rw my-compo-tb-hdr-color m-c-tb-bdr m-c-tb-btm-bdr">
                            <div class="e-tb-dt-bx-padding s-tb-dt-col-1">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Designation</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-2">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Team Member's</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3">
                                <text class="e-tb-dt-title-fnt e-tb-dt-bld-fnt">Action</text>
                            </div>
                        </div>

                        <!-- Row -->

                        <div class="e-tb-dt-rw m-c-tb-bdr m-c-tb-btm-bdr e-tb-rw-align-cntr" v-for="(tbData, index) in table" :key="index">
                            <div class="e-tb-dt-bx-padding s-tb-dt-col-1">
                                <text class="e-tb-dt-title-fnt">{{tbData.designationtype}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-dt-col-2">
                                <text class="e-tb-dt-title-fnt">{{tbData.teamname}}</text>
                            </div>
                            <div class="e-tb-dt-bx-padding e-tb-col-3 e-tb-dt-rw">
                                <!-- WEB -->
                                <div @click.native="display(7, index)" v-if="platform === 'Web'" class="e-tb-dt-bx-padding">
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

            <div v-if="popup === true" >
            <div  v-if="platform == 'Web'">

           
            <child-form  >
                <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font cursor-pointer-globle">Add Team Member</text>
                    </div>
                    <div>
                        <image src="" class="" />
                    </div>
                </div>
                <div class="todo-body">
                    <add-team-member :edit-data="selectedDataEdited" ref="accessData" @getStructData="insertDataIntoTable"></add-team-member>
                </div>
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="appoint-sub-margin-left sp-btn-w ">
                        <vx-primary-button 
                            btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" 
                            btn-name="Save"
                            @click.native="saveData()">
                        </vx-primary-button>
                    </div>

                    <div class="sp-btn-w">
                        <vx-secondary-button 
                            btn-name="Cancel" 
                            btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png" 
                            @click.native="display('back')">
                        </vx-secondary-button>
                    </div>
                </div>
            </child-form>
            </div>

        </div>

            <!-- Apk Popo -->
            
        <div v-if="platform !== 'Web'" class="">
                <wxc-mask  
                        height="545"
                        width="600"
                        border-radius="5"
                        duration="200"
                        mask-bg-color="#FFFFFF"
                        :has-animation="animationPopup"
                        :has-overlay="true"
                        :show-close="false"
                        :show="popup"
                        @wxcMaskSetHidden="wxcMaskSetHidden">
                        <div class="content">
                            <div class="weex-overlay-header weex-overlay-task-title">
                                <div>
                                    <text class="weex-overlay-heading-font">Add Team Member</text>
                                </div>
                                <div>
                                    <image src="" class="" />
                                </div>
                            </div>

                            <div class="weex-overlay-body">
                               
                               <!-- <add-team-memner></add-team-memner> -->
                               <add-team-member></add-team-member>
                                
                            </div>
                            <div class="weex-overlay-footer weex-overlay-header">
                                <div class="">
                                    
                                <vx-secondary-button
                                    btn-width="240px"
                                    btn-name="Cancel"
                                    btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
                                    @click="display('back')">
                                </vx-secondary-button>
                                </div>
                                <div style="margin-left:20px">
                                    <vx-primary-button
                                         btn-width="240px"
                                         btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"
                                         btn-name="Save"
                                         @click="display('back')">
                             
                                    </vx-primary-button>
                                </div>
                            </div>
                        </div>
                </wxc-mask>
        </div>
         
            <!-- Apk Popup -->
                
                

            </div>

            <!-- SUMMARY CARD OR RIGHT CARD -->
            <div class="contact-dtls-frm-card ld-dtls-crd-pd-tp-20 s-summ-cr-sid-width card-wrap-status">
                <div class="pd-rw-lft-rgt-10">
                    <div class="st-summ-con-padd">
                        <text class="frm-hedng-bold-16">Summary</text>
                    </div>
                </div>

                <div v-if="haveData === true">
                    <div class="pd-rw-lft-rgt-10">
                        <div class="st-sum-fx-dir m-c-tb-bdr m-c-tb-btm-bdr st-summ-con-padd">
                            <div class="st-summ-con-padd" style="flex:1">
                                <text class="cntct-frm-lbl-size">Lead ID</text>
                                <text class="cntct-frm-lbl-size" style="color: rgb(36, 36, 36)">{{leadID | userIdShorter}}</text>
                            </div>
                            <div class="st-summ-con-padd" style="flex:1">
                                <text class="cntct-frm-lbl-size">Source</text>
                                <text class="cntct-frm-lbl-size"  style="color: rgb(36, 36, 36)">Natural</text>
                            </div>
                        </div>

                        <div class="st-sum-fx-dir m-c-tb-bdr m-c-tb-btm-bdr st-summ-con-padd">
                            <div class="st-summ-con-padd" style="flex:1">
                                <text class="cntct-frm-lbl-size">Name</text>
                                <text class="cntct-frm-lbl-size"  style="color: rgb(36, 36, 36)">{{name | to-capitlaize}}</text>
                            </div>
                            <div class="st-summ-con-padd" style="flex:1">
                                <text class="cntct-frm-lbl-size">Mobile Number</text>
                                <text class="cntct-frm-lbl-size"  style="color: rgb(36, 36, 36)">{{mbNo}}</text>
                            </div>
                        </div>
                    
                        <div class="st-sum-fx-dir m-c-tb-bdr m-c-tb-btm-bdr st-summ-con-padd">
                            <div class="st-summ-con-padd" style="flex:1">
                                <text class="cntct-frm-lbl-size">State</text>
                                <text class="cntct-frm-lbl-size"  style="color: rgb(36, 36, 36)">{{state}}</text>
                            </div>
                            <div class="st-summ-con-padd" style="flex:1">
                                <text class="cntct-frm-lbl-size">City</text>
                                <text class="cntct-frm-lbl-size" style="color: rgb(36, 36, 36)">{{city}}</text>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-else style="flex-direction:row;justify-content:center;align-items:center">
                    <text class="cntct-frm-lbl-size">Fresh Lead</text>
                </div>
            </div>
        </div>

        <div v-if="platform==='Web'" class="contact-dtls-frm-card btn-space btn-padding card-wrap-status" style="margin-bottom:20px">
            <div class="box lead-contact-btn-width" style="padding:10px;">

                <div class=" cursor-pointer-globle"  @click.native="jump('/leadMaster/all_leads')">
                    <vx-secondary-button 
                        btn-name="Previous"  
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                    </vx-secondary-button>
                </div>
            </div>
            <div class="box lead-contact-btn-width" style="padding:10px;">
                <div class=" cursor-pointer-globle" @click.native="dataSaveOnStore">
                    <vx-primary-button 
                        btn-name="Proceed"  
                        icon-side="right" 
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" >
                    </vx-primary-button>
                </div>
            </div>
        </div>

        <div v-if="platform !=='Web'" class="contact-dtls-frm-card btn-space card-wrap-status" style=" flex-direction:row;margin-bottom:10px;">
            <div class="box lead-contact-btn-width" style="padding:20px;">
                <div class=" cursor-pointer-globle"  @click="jump('/leadMaster/all_leads')">
                    <vx-secondary-button 
                        btn-name="Previous" 
                        btn-width="250px"  
                        btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                    </vx-secondary-button>
                </div>
            </div>
            <div class="box lead-contact-btn-width" style="padding:20px;">
                
                <div class=" cursor-pointer-globle" @click="jump('/leadmasterpage/leaddetails/personallead')">
                    <vx-primary-button 
                        btn-name="Proceed" 
                        btn-width="250px" 
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

    import addTeamMember from './StatusDialog.vue'
    import childForm from '../Calendar/Todo-pop-up'
 import moment from 'moment'
    import {
        WxcMask
    } from 'weex-ui'

    const leadStatusList = ["New Lead Entry", "No Contact", "Contact"];
    const nonContact = ["Select", "Not reachable", "Ringing/Busy", "Wrong Number", "Invalid"];
    const contact = ["Select", "Appointment", "Call back", "Short hang up", "Not Interested"];

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

            // Data read from store
            // For store
            var global = this;
        
            // This condition is used to check, Is array have index 0 or not
        
            if(global.$store.getters.getLeadFormData[0]) {
                
                // console.log(' Status Lead Data', global.$store.getters.getLeadFormData[0]);
                let dataGetter = global.$store.getters.getLeadFormData[0];
                dataGetter = dataGetter.statusLeadData;

                /** It checks key is present or not */
                if ('_id' in dataGetter === true) {
                    this.leadID = dataGetter._id;
                }
                // console.log(this.doSentenceCase(dataGetter.leadStatus));
                // this.leadStatusValue = dataGetter.leadStatus; 

                /**
                 * Called Mixins here : @doSentenceCase
                 */

                
                this.leadStatusValue = this.doSentenceCase(dataGetter.leadStatus);
                this.display(this.leadStatusValue);
                this.appoinDisp = dataGetter.appointmentdisPosition
                this.appointDate = moment(dataGetter.start_date).format('YYYY-MM-DD')
                this.appointTime = dataGetter.start_time
                this.userRemark = dataGetter.remarksfromUser
                this.sourceRemark = dataGetter.remarksfromSource

                if(typeof(dataGetter.teamMembers) === undefined) {
                    let jsonData = JSON.parse(dataGetter.teamMembers)
                    console.log(jsonData);

                    if(0 in jsonData) {
                        this.table = jsonData;
                    } else {
                        console.log('Not Found');
                    }
                } 
                
                // console.log(JSON.parse(dataGetter.teamMembers));
                console.log('I am inside the if Condition: statusLead', this.table.length);
            }
            this.apntVisible = global.$store.getters.getLeadFormHandler.apntVisible
            this.dateTimeVisible = global.$store.getters.getLeadFormHandler.dateTimeVisible
            this.divshow = global.$store.getters.getLeadFormHandler.divshow

            // console.log('Status Lead' ,this.userRemark);

            /** Here I need to show data in summary card. there for I need 
             * Contact Dtails, Name, State, and City from store in difrrent array
             * locaton
             */
            let leadTempArray = global.$store.getters.getLeadFormData;
            console.log('Page: 1' ,leadTempArray);
            if(1 in leadTempArray === true) {
                let perData = leadTempArray[1];
                this.name = perData.personalLeadData.firstName+' '+perData.personalLeadData.lastName
            }

            if(2 in leadTempArray === true) {
                let contData = leadTempArray[2];
                this.mbNo = contData.contactLeadData.primaryMobile
                this.city = contData.contactLeadData.city
                this.state = contData.contactLeadData.state
            }

            if(this.name !== '' && this.leadID !== '') {
                this.haveData = true;
            } else {
                this.haveData = false
            }


            // Read Reponse from database

            let readResponse = this.$store.getters.getResponseFromStore;
            if(readResponse.errCode === 576) {
                this.err.errText = readResponse.errMsg;
                this.err.visible = true
            } else if (readResponse.errCode === 729) {
                this.err.errText = 'Appointment Exist';
                this.err.visible = true
            } else if (readResponse.errCode === 625) {
                this.err.errText = 'The appointment cannot be booked for the passed time!';
                this.err.visible = true
            }   
        },
        components: {
            appHeader,
            leadHeader,
            vxInputBox,
            vxPrimaryButton ,
            vxSecondaryButton,
            apkDropDown,
            switcher,
            addTeamMember,
            WxcMask,
            childForm
            // , applicationTab 
        },
        data() {
            return {

                
                platform: invalid,
                deviceWidth: invalid,

                leadStatusList,

                show: false,
                overlayCanClose: true,
                isFalse: false,
                animationPopup: true,
                haveData: false,

                appoint: [],
                /** Comes when user modify leads data (it is for summary) */
                leadID: '',
                name: '',
                mbNo: '',
                city: '',
                state: '',
                table:[],
                leadStatusValue: '',
                appoinDisp: '',
                appointDate: '',
                appointTime: '',
                sourcename: '',
                sourceRemark: '',
                userRemark: '',
                selectedDataEdited:{
                    designation:'',
                    teamName:''
                },

                apntVisible: false,
                dateTimeVisible: false,
                
                popup: false,
                divshow: true,
                tableshow:false,
                   start_timeWeb : [
                    {time:"8:00 AM",value:"28800000"},
                    {time:"8:30 AM",value:"30600000"},
                    {time:"9:00 AM",value:"32400000"},
                    {time:"9:30 AM",value:"34200000"},
                    {time:"10:00 AM",value:"36000000"},
                    {time:"10:30 AM",value:"37800000"},
                    {time:"11:00 AM",value:"39600000"},
                    {time:"11:30 AM",value:"41400000"},
                    {time:"12:00 PM",value:"43200000"},
                    {time:"12:30 PM",value:"45000000"},
                    {time:"1:00 PM",value:"46800000"},
                    {time:"1:30 PM",value:"48600000"},
                    {time:"2:00 PM",value:"50400000"},
                    {time:"2:30 PM",value:"52200000"},
                    {time:"3:00 PM",value:"54000000"},
                    {time:"3:30 PM",value:"55800000"},
                    {time:"4:00 PM",value:"57600000"},
                    {time:"4:30 PM",value:"59400000"},
                    {time:"5:00 PM",value:"61200000"},
                    {time:"5:30 PM",value:"63000000"},
                    {time:"6:00 PM",value:"64800000"},
                    {time:"6:30 PM",value:"66600000"},
                    {time:"7:00 PM",value:"68400000"},
                    {time:"7:30 PM",value:"70200000"},
                    {time:"8:00 PM",value:"72000000"},
                    {time:"8:30 PM",value:"73800000"},
                    {time:"9:00 PM",value:"75600000"},
                    {time:"9:30 PM",value:"77400000"}
               ],
                tabledata: [{
                        desig: 'CEO',
                        teamMember: 'Easwar',
                    }, {
                        desig: 'Director',
                        teamMember: 'Himanshu',
                    }, {
                        desig: 'Opretion Manager',
                        teamMember: 'Sudeep',
                    }, {
                        
                        desig: 'Sales Manager',
                        teamMember: 'Usama',
                    }
                ],

                err: {
                    errText: '',
                    visible: false
                }
            }
        },
        filters: {
            userIdShorter(id) {
                return 'L' +id.slice(16, 25).toUpperCase();
            },
            nameFormate(name) {
                if(name !== '') {
                    name = name.split(" ");
                    let fName = name[0];
                    let lName = name[1];
                    fName = fName.charAt(0).toUpperCase();
                    lName = lName.charAt(0).toUpperCase();

                    return fName+' '+lName
                }
            }
        },
        // beforeRouteLeave (to, from, next) {
        //     console.log('Before Routes worked', to , from , next)
        //     this.dataSaveOnStore();
        //     next();
        // },

        beforeRouteLeave(to, form, next) {
            console.log(this.appointDate)
            var epochdate =  moment(this.appointDate).valueOf()
            console.log(' DEEEEEE : ',epochdate)
            const formData = {
                leadStatus: this.leadStatusValue,
                appointmentdisPosition: this.appoinDisp,
                start_date: epochdate,
                start_time: this.appointTime,
                remarksfromSource: this.sourceRemark,
                remarksfromUser: this.userRemark,
                teamMembers: JSON.stringify(this.table),
            };
            //Calling Store
            this.$store.commit('INSERT_LEADS_DATA', {statusLeadData: formData});
            // this.$store.commit('ADD_LEADFORM_DATA', formData, '');
            console.log(formData);

            next();

        },
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            saveData() {
                // console.log('Called');
                this.$refs.accessData.saveData();
            },
            display(id, index) {
                // if(this.martial === 'Non Contact') {
                //     this.appoint = educationList
                // } else {
                //     this.appoint = [];
                // }
                console.log(id)
                switch (id) {
                    case 'Non Contact':
                        this.appoint = [];
                        this.appoinDisp = ''
                        this.appoint = nonContact;
                        this.apntVisible = true;
                        this.divshow = false;
                        this.dateTimeVisible = false;
                        this.$store.commit('LEAD_FORM_HANDLER', {dateTimeVisible: this.dateTimeVisible});
                        
                        this.$store.commit('LEAD_FORM_HANDLER', {apntVisible: this.apntVisible, divshow: this.divshow});
                        break;

                    case 'Contact':
                        this.appoint = [];
                        this.appoinDisp = ''
                        this.appoint = contact
                        this.apntVisible = true;
                        this.divshow = false;
                        this.$store.commit('LEAD_FORM_HANDLER', {apntVisible: this.apntVisible, divshow: this.divshow});
                        break; 

                    case 'New Lead Entry':
                        this.appoinDisp = ''
                        this.dateTimeVisible = false;
                        this.apntVisible = false;
                        this.divshow= true;
                        this.$store.commit('LEAD_FORM_HANDLER', {apntVisible: this.apntVisible, divshow: this.divshow});
                        break;

                    case 'Appointment':
                        this.dateTimeVisible = true;
                        this.$store.commit('LEAD_FORM_HANDLER', {dateTimeVisible: this.dateTimeVisible});
                        break;
                    
                    case 'Not Interested':
                        this.dateTimeVisible = false;
                        this.$store.commit('LEAD_FORM_HANDLER', {dateTimeVisible: this.dateTimeVisible});
                        break;

                    case 'Call back':
                        this.dateTimeVisible = true;
                        this.$store.commit('LEAD_FORM_HANDLER', {dateTimeVisible: this.dateTimeVisible});
                        break;
                    
                    case 'Short hang up':
                        this.dateTimeVisible = false;
                        this.$store.commit('LEAD_FORM_HANDLER', {dateTimeVisible: this.dateTimeVisible});
                        break;

                    case 6:
                        console.log('Befor adding index prop in switch case 6' ,this.table[index])
                         this.selectedDataEdited ={
                            designation:'',
                            teamName:''
                        },
                        this.popup = true;
                       
                        break;
                        case 7:
                            this.popup = true;
                            if(this.table.length > 0) {
                                this.selectedDataEdited.designation = this.table[index].designationtype;
                                this.selectedDataEdited.teamName = this.table[index].teamname;

                                // index is external property
                                this.selectedDataEdited.index = index
                            }

                        break;
                    
                    case 'back':
                        this.popup = false;
                        break;
                }
            },
            openMask(e) {
                this.popup = true;
                this.animationPopup = true;
            },
            wxcMaskSetHidden() {
                this.popup = false;
            },
     
           deletedata(index) {
                console.log(index);
                this.tabledata.splice(index, 1);
            },
            // APK DROP DOWN CONDITIONS BY USAMA
            callBackStatus(event) {
                this.leadStatusValue = event.value;
                if( this.leadStatusValue === 'Contact') {
                    this.appoint = contact;
                    this.apntVisible = true;

                } else if(this.leadStatusValue === 'Non Contact') {
                    this.appoint = nonContact;
                    this.apntVisible = true;
                } else {
                    this.apntVisible = false;
                    this.dateTimeVisible = false;
                }
            },
            callBackAppnt (event) {
                this.appoinDisp = event.value;
                if(this.appoinDisp === 'Appointment') {
                    this.dateTimeVisible = true;
                }
            },

            // Data save on store when proceed button is clicked

            dataSaveOnStore() {
                // console.log(this.appointDate)
                //    var epochdate =  moment(this.appointDate).valueOf()
                //    console.log(epochdate)
                // const formData = {
                //     leadStatus: this.leadStatusValue,
                //     appointmentdisPosition: this.appoinDisp,
                //     start_date: epochdate,
                //     start_time: this.appointTime,
                //     remarksfromSource: this.sourceRemark,
                //     remarksfromUser: this.userRemark,
                //     teamMembers: JSON.stringify(this.table),
                // };
                // //Calling Store
                // this.$store.commit('INSERT_LEADS_DATA', {statusLeadData: formData});
                // // this.$store.commit('ADD_LEADFORM_DATA', formData, '');
                // console.log(formData);
                this.$router.push('/leadmasterpage/leaddetails/personallead');
            },
            insertDataIntoTable(event) {
                
                console.log(event.data);
                if (event.data.hasOwnProperty('index') == true) {
                    /** Data Updation */
                    let indexPos = event.data.index;
                    delete event.data.index;
                    this.table[indexPos] = event.data
                    console.log('Data Updated', this.table);
                    this.popup = event.hide;
                    this.tableshow = true;

                } else {
                    /** New Data insertion */
                    this.tableshow = true
                    this.table.push(event.data);
                    console.log('Data Pushed', this.table);
                }
                
            },
             deletedata(index) {
                console.log(index);

                this.table.splice(index, 1);
                if (this.table.length === 0) {
                    this.tableshow = false
                }
            },
        }
    }
</script>

<style>
    /*Button Arrow CSS*/
     /* Apk popup css */

     .weex-overlay-header {
        flex-direction: row;
    }
    
    .weex-overlay-task-title {
        background-color: #3b371e;
        padding: 27px;
    }
   
     .weex-overlay-body {
        margin-top: 25px;
        margin-bottom: 15px;
        padding-left: 10px;
        padding-right: 25px;
    }


    /* apk popup heading font */
      .weex-overlay-heading-font {
        font-size: 30px;
        color: #FFF;
    }

    /* apk popup footer */
    .weex-overlay-footer {
        background-color: #EBEBEB;
        padding: 25px;
        margin-top: 25px;
    }

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
    
    .btn-space {
        justify-content: space-between
    }
    /* .lead-contact-btn-width {
        width: 300px;
    } */
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

    .frm-hedng-bold-16 {
        font-size: 28px;
        font-weight: 700;
        font-family:robotoregular;
    }

    /* Summary List  */
    /* Container padding which is apply on text div */
    .st-summ-con-padd {
        padding: 10px;
    }
    /* Flex Direction which is used to provide row on data */
    .st-sum-fx-dir {
        flex-direction: row;
    }

    .m-c-tb-bdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #FFF;
    }
    /* This class replaced the border-bottom-color->m-c-tb-bdr  */
    .m-c-tb-btm-bdr {
        border-bottom-color: rgb(232, 232, 232);;
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
    .s-tb-dt-container {
        width: 750px;
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

    /* table width in apk*/
    /* Table column width */
        /* for relation */
    .s-tb-dt-col-1 {
        width: 250px;
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

    /* whole table border only in web */
    .s-tb-whole-bdr {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(202, 202, 202);
    }

    .card-wrap-status{
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
        .status-title {
        font-size: 24px;
        font-family: robotoregular;
        }

        .status-titleBorder {
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
            width: 80px
            
            }

    @media only screen and (min-width: 320px) {

        /* Error text */
        .err-line-cont {
            padding: 5px;
        }
        .err-line-sh-o-con{
            font-size: 10px;
            padding-top: 0px;
            color: #fa0909;
            font-family: robotoregular;
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

        /* Summary List  */
        /* Container padding which is apply on text div */
        .st-summ-con-padd {
            padding: 5px;
        }

        /* Table design */
        .s-tb-dt-container {
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
        .s-tb-dt-col-1 {
            width: 150px;
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
        .s-tb-whole-bdr {
            border: 1px solid rgb(232, 232, 232);
        }

        .sp-btn-w {
            width: 50%;
        }
        .card-wrap-status{
        border:none;
        box-shadow: 0 1px 3px,0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
    }

         .status-title {
        font-size: 14px;
        font-family: robotoregular;
        }

        .status-titleBorder {
        border-bottom-width: 4px;
        margin-left: 15px;
        margin-bottom: 20px;
        width: 50px;
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

        .sp-btn-w {
            width: 30%;
        }

        .s-summ-cr-sid-width {
            width: 30%;
            height: 240px;
            margin-left: 20px;
        }
.card-wrap-status{
       margin:10px;
    }
    
    }
    
    @media only screen and (min-width: 992px) {
        .lead-contact-btn-width {
            width: 15%;
        }

        /* This class is used to provide width to add team memeber butto */
        .s-frm-b-width {
            width: 20%;
        }

        /* new add team member width in pixel */

        .ad-tm-mbr-btn-w-pxl {
            width: 150px;
        }

        /* Summary card width also have extra property*/
        .s-summ-cr-sid-width {
            width: 30%;
            height: 240px;
            margin-left: 20px;
        }

        .sp-btn-w {
            width: 15%;
        }
    }
</style>
