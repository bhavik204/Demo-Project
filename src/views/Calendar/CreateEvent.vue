<template>
        <!-- Create Event Page -->
    <div class="tb-side-container" style=" flex:1;">
<scroller>
        <div class="card-createvent">
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 mbt-i-ld-20">
                 <text class=" create-evnt-font-big">Set Schedule</text>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                   
                    <vx-input-box
                        vx-type="date"
                        vx-label="Select Start Date"
                        vx-placeholder="Start Date"
                        :min-date="momentdat"
                        :vx-model="moment(startdate).format('YYYY-MM-DD')"
                        @change="processEvent"
                        @valueReading="startdate=$event.value">
                    </vx-input-box>
                </div>
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <div class="cra-evt-pd-btm-5"><text class="cntct-frm-lbl-size">Select Start Time</text></div>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="start_time"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="starttime" class="cursor-pointer-globle vx-globle-drp-down">
                        <!-- <select :vx-model="moment(start_time).format('LT')" class="cursor-pointer-globle vx-globle-drp-down"> -->
                            <option value= "" >Select</option>
                            <option v-for="calc in start_timeWeb" :value="calc.value">{{calc.time}}</option>
                        </select>
                    </div>
                    
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    
                    <vx-input-box
                        vx-type="date"
                        vx-label="Select End Date"
                        vx-placeholder=""
                        :vx-model="moment(enddate).format('YYYY-MM-DD')"
                        @onChange="onchangedt"
                        @valueReading="enddate=$event.value">
                    </vx-input-box>
                </div>               
                    
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <div class="cra-evt-pd-btm-5"><text class="cntct-frm-lbl-size">Select End Time</text></div>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="end_time"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="endtime" class="cursor-pointer-globle vx-globle-drp-down" @change="onchangetm">
                            <option value="" selected >Select</option>
                            <option v-for="(calc) in end_timeWeb" :value="calc.value" >{{calc.time}}</option>
                        </select>
                   
                    </div>
                </div>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1 ;top:-17px" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="crete-evt-error-char"  v-if="errordate == true" >{{stdtmsg}}</text>
                </div>   
            
                <div style="flex:1 ;top:-17px" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="crete-evt-error-char"  v-if="errortime == true">{{sttmmsg}}</text>
                </div>
            </div>
            <div class=" pd-rw-lft-rgt-10">
                <wxc-checkbox v-if="platform !== 'Web'" title="Set Reminder" :disabled="false" :checked="true"></wxc-checkbox>
                <div class="table-row-check" style="flex-direction: column; padding-bottom:10px;">
                <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                    <input type="checkbox"  name="remains" value="true" class="cursor-pointer-globle" v-model="setreminder">
                    <div class="cra-evt-pd-lft-10"><text class="chkbox-title">Set Reminder</text></div>
                </div>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="reminder"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="repeat" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>15 min before</option>
                            <option v-for="(calc, li) in reminderWeb" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
                 <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                </div>
            </div>
           
           

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 mbt-i-ld-20">
                 <text class=" create-evnt-font-big">Event Details</text>
            </div>
            
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Event Type</text>
                    <div v-if="platform !== 'Web'"  style="margin-bottom:20px">
                        <apk-drop-down :option-list="calForm.event_type_drop" ></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="eventtype" class="vx-globle-drp-down cursor-pointer-globle">
                            <option value="" >Select</option>
                            <option v-for="(calc, li) in event_type_dropWeb" :key="li">{{calc}}</option>
                        </select>
                    </div>

                </div>
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    
                    <vx-input-box
                        vx-label="Event Name"
                        vx-placeholder="Enter Event Name"
                        :vx-model="eventName"
                        @valueReading="eventName=$event.value">
                    </vx-input-box>
                </div>
            </div>
            


            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Description"
                        vx-placeholder="Type Description Here"
                        :vx-model="eventDesc"
                        @valueReading="eventDesc=$event.value">
                    </vx-input-box>
                </div>
                
            </div>
            
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 mbt-i-ld-20">
                 <text class=" contactDetails-title">Set Reminder</text>
            </div>
            <div v-if="platform !== 'Web'" class="">
                <wxc-radio :list="list" @wxcRadioListChecked="wxcRadioListChecked"></wxc-radio>
            </div>
            <div v-if="platform === 'Web'" class=" pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 mbt-i-ld-20">
                <div class="contact-btn-padding-row " >
                    <div class=" " ><input class="inout-radio" v-model="priority" name="premainder" type="radio" value="None" /></div>
                    <div class=" cnt-evt-rdo-pd-lft-10" ><text class="none " >None</text></div>
                </div>
                <div class="contact-btn-padding-row spaceget">
                    <div class=" " ><input class="inout-radio"  v-model="priority" name="premainder" type="radio" value="high"  /></div>
                    <div class="cnt-evt-rdo-pd-lft-10 " >
                        <text class=" high mouse-pointer" style="padding: 4px 4px 4px 3px;  background-color:#eb9292; border-radius: 2px;">High</text></div>
                </div>
                <div class="contact-btn-padding-row spaceget">
                    <div class=" " ><input class="inout-radio"  v-model="priority" name="premainder" type="radio" value="medium"  /></div>
                    <div class="cnt-evt-rdo-pd-lft-10 " ><text class="high mouse-pointer" style="padding: 4px 4px 4px 3px;  background-color:#e8bd55; border-radius: 2px;">Medium</text></div>
                </div>
                <div class="contact-btn-padding-row spaceget">
                    <div class=" " ><input class="inout-radio"  v-model="priority" name="premainder" type="radio" value="low"  /></div>
                    <div class="cnt-evt-rdo-pd-lft-10 " ><text class="high mouse-pointer " style="padding: 4px 4px 4px 3px;  background-color:#a3d562; border-radius: 2px;">Low</text></div>
                </div>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 mbt-i-ld-20 cra-evt-pad-top-20">
                 <text class=" create-evnt-font-big">The Event is</text>
            </div>
           
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 mbt-i-ld-20">
                <div class="mbt-i-ld-20">
                    <div class="example" v-if="platform !== 'Web'"  style="flex:1">
                        <div>
                            <switch @change="onchange3"></switch>
                        </div>
                        <div class="switch-text-createvent" > <text class="cntct-frm-lbl-size">{{check}}</text></div>

                    </div>
                </div>
                <div  v-if="platform === 'Web'" class="mbt-i-ld-20" >
                    <switcher @selectedGender="genderSel" option1="Personal" option2="For a Group" @ v-model="scoop" :has-icons="false" ></switcher>
                </div>
            </div>   

            <div   class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Invite Guests via email"
                        vx-placeholder="Type Email ID here"
                        :vx-model="email"
                        @valueReading="email=$event.value">
                    </vx-input-box>

                </div>
                <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                </div>
                
            </div>
             <!-- <div  class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Description"
                        vx-placeholder="Type Description here"
                        :vx-model="description2"
                        @valueReading="description2=$event.value">
                    </vx-input-box>

                </div>
               
                
            </div> -->
            

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
                    <div class=" cursor-pointer-globle"  @click="jump('/leadmasterpage/leaddetails/personallead')">
                        <vx-secondary-button 
                            btn-name="Cancel" 
                             
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png" >
                        </vx-secondary-button>
                    </div>
                </div>
                <div class=" lead-contact-btn-width" style="padding:20px;">
                    
                    <div class=" cursor-pointer-globle" @click.native = "SaveEditData()">
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
    import {WxcRadio,  WxcCheckbox,WxcCheckboxList } from 'weex-ui'
    import moment from 'moment'

    var event_type_drop = ["Create new ", "policy Renewals", "Application stage", "Advisor Trainning", "Contests", "Client Birthdays", "Client Appointment"];
    var start_time = ["8.00","8.30","9.00","9.30"];
    var end_time = ["8.00","8.30","9.00","9.30"];
    var reminder = ["15 min before","1 hr before","2 hr before"];
    var stream = weex.requireModule('stream');

    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const modal = weex.requireModule('modal')
   
    export default {
        created() {
            var dat = new Date();
            this.momentdat = moment(dat).format('YYYY-MM-DD')
            console.log(this.momentdat)
            var me = this 
            var getValue = this.$store.getters.getEditStatus

            if (getValue == true)
            {
                    this.calForm = (this.$store.getters.getCalendarFormData)
                    console.log(this.calForm)
                    this.eventName= this.calForm.event_name,
                    this.eventDesc = this.calForm.event_description,
                    this.email = this.calForm.guest_email
                    this.startdate = this.calForm.start_date
                    this.enddate = this.calForm.end_date
                    this.starttime = (this.calForm.start_time); 
                    this.endtime = this.calForm.end_time
                    this.setreminder = this.calForm.set_reminder
                    this.repeat = this.calForm.event_repeat_on_every
                    this.eventtype = this.calForm.event_type
                    this.priority = this.calForm.set_reminder_prority
                    this.scoop = this.calForm.event_scop
                    this.mail = this.guest_email
                    
                //     var nd = JSON.stringify(this.calForm.start_date)
                //     var ds = nd.split("/").reverse().join("/");
                //      var sd = JSON.parse(ds)
                //    var fg = moment(sd).format("YYYY-MM-DD")
                //     console.log(fg)
                    // this.calForm.start_date = JSON.parse(ds)
                    console.log(this.calForm)
                    console.log(this.eventName, this.starttime,this.eventDesc,this.email,this.priority)
            }
          
            else
            {
            console.log("false")
            }
         
            // console.log(this.calForm)
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {  WxcRadio,WxcCheckbox,WxcCheckboxList,appHeader,leadHeader,vxInputBox,vxPrimaryButton,vxSecondaryButton,apkDropDown,switcher},
        data() {
           
            return {
                moment:moment,
                momentdat:'',
                calForm:[],
                eventName:'',
                eventDesc:'',
                email:'',
                startdate:'',
                enddate:'',
                endtime:'',
                setreminder:'',
                repeat:'',
                eventtype:'',
                priority:'',
                scoop:'',
                mail:'',
                stdtmsg: 'Error dt small',
                sttmmsg: 'Error tm small',
                errordate: false,
                errortime: false,
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
                end_timeWeb : [
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
                    {time:"9:30 PM",value:"77400000"}],
                reminderWeb : ["15 min before","1 hr before","2 hr before"],
                event_type_dropWeb : ["Create new ", "policy Renewals", "Application stage", "Advisor Trainning", "Contests", "Client Birthdays", "Client Appointment"],
                list: [
                        { title: 'None', value: 1,checked: true },
                        { title: 'High', value: 2 },
                        { title: 'Medium', value: 3 },
                        { title: 'Low', value: 4 },
                ],
              
                
                // reminder:'',
                // e_date: '',
                // landmark: '',
                // alterMobileNo: '',
                headerName: 'Create Event',
                platform: invalid,
                deviceWidth: invalid,
                personal: false,
            }
        },
     
        methods: {
            genderSel(e){
                this.scoop= e.value
                console.log(this.scoop)
            },
           
            SaveEditData(){
                var me = this
                var getValue = this.$store.getters.getEditStatus
                var sd = (this.startdate)
                var ed = this.enddate
                var re = (this.starttime)
                var epoch_start =  moment(sd).valueOf()
                var epoch_end = moment(ed).valueOf()
                // console.log(epoch_start,epoch_end)
                // console.log(typeof(this.starttime))
                //  console.log(this.endtime-this.starttime)
                // console.log(getValue)
                // console.log(this.end_timeWeb - this.start_timeWeb)
                console.log(sd)
               
                if(this.endtime < this.starttime) {
                    this.errortime = true
                    this.sttmmsg ="End Time should be past the Start Time"
                
                }
                else{
                    this.errortime = false
                }
                if(this.enddate < this.startdate) {
                    this.errordate = true
                    this.stdtmsg ="End Date should be past the Start Date"
                }
                else{
                    this.errordate = false
                }
                if (getValue == true)
                {

                    console.log("Form Data is",this.calForm)
                    const formData = {

                        userId:this.$store.state.agentDetails._id,
                        // leadId:this.calForm.leadId._id,
                        Appintment_id:this.calForm._id,

                        start_date: (epoch_start),
                        start_time: this.starttime,
                        end_date:(epoch_end),
                        end_time:this.endtime,
                        set_reminder: this.setreminder,
                        event_repeat_on_every:this.repeat,
                        event_type:this.eventtype,
                        event_name:this.eventName,
                        event_description:this.eventDesc,
                        set_reminder_prority:this.priority,
                        event_scop:this.scoop,
                        guest_email:this.email,
                       
                        // appintment_type: this.eventtype,
                        guest_sms_body: 'guest_sms_body',
                        set_permission:'set_permission',
                    };
                   
                    console.log(formData)
                    stream.fetch({
                            method: 'PUT',
                            url: 'http://159.89.161.64:5010/secure/user/updateAppointment',
                            headers: {
                                    
                                    'Content-Type': 'application/json'},
                            body:JSON.stringify(formData),
                            type:'json'
                        }, 

                        function(response){
                            var errcodeAPI= -1
                            if(response.data.errCode == errcodeAPI){
                                // me.$store.commit('ADD_APPFORMDATA',[{formData}]) 
                                console.log('get in progress:'+JSON.stringify(response));
                                    modal.toast({
                                        message: 'Successfully Appointment Booked',
                                        duration: 1
                                    })
                                 
                            }
                            else{
                                modal.toast({
                                    message: 'Please correct all fields',
                                    duration: 2
                                })
                            }

                        }
                    )
                }
                else{
                    console.log("Form Data is")
                    const formData = {

                        userId:this.$store.state.agentDetails._id,
                        // leadId:this.calForm.leadId._id,
                        // Appintment_id:this.calForm._id,

                        start_date: (epoch_start),
                        start_time: this.starttime,
                        end_date:(epoch_end),
                        end_time:this.endtime,
                        set_reminder: this.setreminder,
                        event_repeat_on_every:this.repeat,
                        event_type:this.eventtype,
                        event_name:this.eventName,
                        event_description:this.eventDesc,
                        set_reminder_prority:this.priority,
                        event_scop:this.scoop,
                        guest_email:this.email,
                       
                        appintment_type: 'event',
                        guest_sms_body: 'guest_sms_body',
                        set_permission:'set_permission',
                    
                    };
                
                     console.log(formData)
                    
                    stream.fetch({
                            method: 'POST',
                            url: 'http://159.89.161.64:5010/secure/user/bookAppointment',
                            headers: {
                                    
                                    'Content-Type': 'application/json'},
                            body:JSON.stringify(formData),
                            type:'json'
                        }, 

                        function(response){
                            var errcodeAPI= -1
                            if(response.data.errCode == errcodeAPI){
                                // me.$store.commit('ADD_APPFORMDATA',[{formData}]) 
                                console.log('get in progress:'+JSON.stringify(response));
                                    modal.toast({
                                        message: 'Successfully Appointment Booked',
                                        duration: 1
                                    })
                                    // me.$router.push('/master/testpro/proposalpersonal')
                            }
                            else{
                                modal.toast({
                                    message: 'Please complete all fields',
                                    duration: 2
                                })
                            }

                        }
                    )
                }
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
            onchangedt(event){
                if(this.enddate < this.startdate) {
                    this.errordate = true
                    this.stdtmsg ="End Date should be past the Start Date"
                }
                else{
                    this.errordate = false
                }
            },
            onchangetm(event){
                // console.log(event.value)
                if(this.endtime < this.starttime) {
                    this.errortime = true
                    this.sttmmsg ="End Time should be past the Start Time"
                
                }
                else{
                    this.errortime = false
                } 
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
    .card-createvent{
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
        .crete-evt-error-char {
            font-size: 12px;
            color: red;
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
