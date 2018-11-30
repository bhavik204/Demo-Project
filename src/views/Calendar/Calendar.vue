<template>
    <div class="master-page-wrapper">
        <scroller>
            <div class="calendar-flx-cng-direction cal-wraper-container-magin calen-ui-put-center">
                <div class="calendar-left-cal-crd-width">
                    <div class="clendar-page-md-card-temp cal-card-margin cal-box-shadow cal-card-margin-botom calen-crd-whole-bdr">
                        <!-- Calendar wrapper -->
                        <div>
                            <!-- tabs -->
                            <div class="calendar-flx-cng-direction-revrse calendar-btn-tabs-align calendar-todo-list ">
                                <div class="calendar-card-header-row calendar-flx-size-01">
                                
                               
                                    <div class="cal-tab-margin-right" v-for="(tab, tabIndex) in calTabs" :key="tabIndex">
                                        <div  v-if="platform === 'Web'" class="clendar-page-box-pad" :class="{'cal-tab-activation-bind': tab.active}">
                                                                                    
                                                                                   
                                                                                    
                                            <text class="cal-card-tabs-font-size cursor-pointer-globle"  @click.native="tabsActive(tab.tabName)">{{tab.tabName}}</text>
                                        </div>
                                         
                                    </div>
                                    <div v-if="platform === 'Web'" class="crt-evt-plus-icon calendar-cursr">
                                        <image src="https://www.materialui.co/materialIcons/av/library_add_black_192x192.png" title="Create Event" class="calendar-page-icon-size calendar-cursr" @click.native="CreateEventData()"/>
                                    </div>
                                    <div v-if="platform !== 'Web'" class=" calendar-cursr">
                                        <image src="https://www.materialui.co/materialIcons/av/library_add_black_192x192.png" class="calendar-page-icon-size calendar-cursr" @click="jump('/createvent')"/>
                                    </div>
                                </div>
                                    <!-- Events button -->
                                <div class="clendar-page-flx-col calendar-tab-btn-gap">
                                    <!-- <div class="calendar-md-custom-btn calendar-btn-width cal-md-btn-margin-btm-10">
                                        <image src="https://www.materialui.co/materialIcons/action/event_white_192x192.png" class="cal-md-btn-icon"/> 
                                        <div class="clendar-page-box-pad">
                                            <text class="calendar-md-btn-label">Review Events</text>
                                        </div>
                                    </div>
                                    <div  v-if="platform === 'Web'" class="calendar-md-custom-btn calendar-btn-width" @click.native.native="jump('/createvent')"> 
                                        <image src="https://www.materialui.co/materialIcons/action/event_white_192x192.png" class="cal-md-btn-icon"/> 
                                        <div class="clendar-page-box-pad">
                                            <text class="calendar-md-btn-label">Create Events</text>
                                        </div>
                                    </div> -->


                                    <!-- <div  v-if="platform !== 'Web'" class="calendar-md-custom-btn calendar-btn-width" @click.native="jump('/createvent')"> 
                                        <image src="https://www.materialui.co/materialIcons/action/event_white_192x192.png" class="cal-md-btn-icon"/> 
                                        <div class="clendar-page-box-pad">
                                            <text class="calendar-md-btn-label">Create Events</text>
                                        </div>
                                    </div>  -->
                                </div>
                            </div>

                            <div class="calendar-tp-btm-margin">
                                <div class="calendar-card-header-row">
                                    <div class="clendar-page-box-pad">
                                        <image src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size"/>
                                    </div>
                                    <div class="clendar-page-box-pad">
                                        <text class="cal-card-tabs-font-size font-bolder-calendar cursor-pointer-globle">JUNE 2018</text>
                                    </div>
                                    <div class="clendar-page-box-pad">
                                        <image src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size"/>
                                    </div>
                                    <div v-if="platform === 'Web'" class="clendar-page-box-pad">
                                        <image src="https://www.materialui.co/materialIcons/action/date_range_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size" />
                                    </div>
                                    <div  v-if="platform !== 'Web'" class="clendar-page-box-pad">
                                        <image src="https://www.materialui.co/materialIcons/action/date_range_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size" @click="jump('/createvent')"/>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- Page which is dynamics -->
                               
                            <div>
                                <div class="calendar-card-header-row cal-ribbon clendar-page-box-pad " v-if="calendarTabs.upcoming">
                                    <div class="clendar-page-box-pad">
                                        <text class="calendar-normal-content-font font-bolder-calendar">AM</text>
                                    </div>
                                    <div class="content-gap-cal clendar-page-box-pad">
                                        <text class="calendar-normal-content-font ">(till 11:59am)</text>
                                    </div>
                                </div>
                                <!-- Horizontal Scroller  is ony for apk and mobile web-->
                                <scroller class="clendar-page-flx-row " scroll-direction="horizontal" v-if="calendarTabs.upcoming">
                                        <div>
                                            <!-- <div class="calendar-card-header-row calendar-todo-list" v-for="(calen, index) in this.obj" :key="index"> -->
                                            <div class="calendar-card-header-row calendar-todo-list" v-for="(calen,index) in form" :key="index">
                                                
                                                <div class="clendar-page-flx-col calendar-date-box-width">
                                                    <div class="clendar-page-box-pad" style="background-color:#5da5c0">
                                                        <text class="calendar-normal-content-font white-cal-color calendar-content-center">{{moment(calen.start_date).format('ddd')}}</text>
                                                    </div>
                                                    <div class="clendar-page-box-pad"  style="background-color:#f4f4f4">
                                                        <text class="calendar-normal-content-font calendar-content-center">{{moment(calen.start_date).format('Do')}}</text>
                                                    </div>
                                                </div>
                                                <div class="clendar-page-flx-col clendar-page-box-pad col-items-alignment-cal content-gap-cal">
                                                    <text class="calendar-normal-content-font ">{{moment(calen.start_time_MS).format('LT')}}</text>
                                                    <text class="cal-time-font-size">to</text>
                                                    <text class="calendar-normal-content-font ">{{moment(calen.end_time_MS).format('LT')}}</text>
                                                </div>
                                                <div class="clendar-page-box-pad content-gap-cal calendar-content-width">
                                                    <text class="calendar-normal-content-font">{{calen.event_description}}</text>
                                                </div>
                                                <div class="clendar-page-box-pad">
                                                    <div class="cal-calendar-sts-box clendar-page-box-pad">
                                                        <text class="cal-time-font-size white-cal-color">{{calen.set_reminder_prority}}</text>
                                                    </div>
                                                </div>
                                                <div class="clendar-page-box-pad">
                                                    <text class="cal-time-font-size">{{moment(calen.start_time_MS).format('LT')}}</text>
                                                </div>
                                                <div v-if="platform === 'Web'" class="clendar-page-box-pad">
                                                    <image @click.native="editData(index,calen)" src="https://www.materialui.co/materialIcons/editor/mode_edit_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size"/>
                                                </div>
                                                <div v-if="platform !== 'Web'" class="clendar-page-box-pad">
                                                    <image @click="jump('/createvent')" src="https://www.materialui.co/materialIcons/editor/mode_edit_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size"/>
                                                </div>
                                                <div class="clendar-page-box-pad">
                                                    <image src="https://www.materialui.co/materialIcons/action/delete_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size"/>
                                                </div>
                                        
                                            </div>
                                        </div>
                                </scroller>

                                <!-- Components calling temporry -->
                                
                                <day-tab v-if="calendarTabs.dayTab"></day-tab>
                                <week-tab v-if="calendarTabs.weekTab"></week-tab>
                                <month-tab v-if="calendarTabs.monthTab"></month-tab>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="clendar-page-flx-col">
                        <!-- Todo Card -->
                        <div class="clendar-page-md-card-temp cal-card-margin-botom cal-card-margin cal-box-shadow calen-crd-whole-bdr">
                            <!-- card header -->
                            <div class="calendar-card-header-row">
                                <div class="calendar-flx-size-01">
                                    <div class="clendar-page-box-pad">
                                        <text class="calendar-normal-content-font font-bolder-calendar">To Do List</text>
                                    </div>
                                </div>
                                <!-- Icon btn -->
                                <div class="clendar-page-box-pad" v-if="platform === 'Web'">
                                    <image src="https://www.materialui.co/materialIcons/av/library_add_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size calendar-cursr" @click.native="openTodoPopUp(1)"/>
                                </div>
                                <div class="clendar-page-box-pad" v-if="platform === 'Web'">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size calendar-cursr" @click.native="showDeleteIcon()"/>
                                </div>

                                <!-- APk -->
                                <div class="clendar-page-box-pad" v-if="platform !== 'Web'">
                                    <image src="https://www.materialui.co/materialIcons/av/library_add_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size calendar-cursr" @click="openTodoPopUp(1)"/>
                                </div>
                                <div class="clendar-page-box-pad" v-if="platform !== 'Web'">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size calendar-cursr" @click="showDeleteIcon()"/>
                                </div>
                            </div>
                            
                            <!-- Card body-wraper -->
                            <div>
                                <!-- this is not a header only i used header class property -->
                                <div class="calendar-card-header-row calendar-todo-list" v-for="(todo, list) in toDoList" :key="list">
                                    <div class="clendar-page-box-pad" v-if="platform === 'Web'">
                                        <image :src="todo.icon" class="calendar-page-icon-size calendar-cursr cursor-pointer-globle" @click.native="removListFromToDo(list)"/>
                                    </div>
                                    <div class="clendar-page-box-pad" v-if="platform !== 'Web'">
                                        <image :src="todo.icon" class="calendar-page-icon-size calendar-cursr cursor-pointer-globle" @click="removListFromToDo(list)"/>
                                    </div>
                                    <div class="clendar-page-box-pad calendar-side-card-width">
                                        <text class="calendar-normal-content-font todo-list-color" :style="{'text-decoration-line': todo.textOverLine.textDecorationLine}">{{todo.content}}</text>
                                    </div>
                                    <div class="clendar-page-box-pad">
                                        <image :src="dltIcon" class="calendar-page-icon-size calendar-cursr" :style="{opacity: todo.textOverLine.opacity}"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- Remainder card -->
                        <div class="clendar-page-md-card-temp cal-card-margin cal-box-shadow calen-crd-whole-bdr">
                            <!-- card header -->
                            <div class="calendar-card-header-row">
                                <div class="calendar-flx-size-01">
                                    <div class="clendar-page-box-pad">
                                        <text class="calendar-normal-content-font font-bolder-calendar">Reminders</text>
                                    </div>
                                </div>
                                <!-- Icon btn -->
                                <div class="clendar-page-box-pad">
                                    <image src="https://www.materialui.co/materialIcons/alert/add_alert_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size calendar-cursr" @click.native.native="openTodoPopUp(2)"/>
                                </div>
                                <div class="clendar-page-box-pad">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_black_192x192.png" class="cursor-pointer-globle calendar-page-icon-size calendar-cursr"/>
                                </div>
                            </div>

                            <!-- Card body-wraper -->
                            <div>
                                <!-- this is not a header only i used header class property -->
                                <div class="clendar-page-flx-col calendar-todo-list" v-for="(remind, list) in rmainders" :key="list">
                                    <div class="clendar-page-box-pad calendar-side-card-width">
                                        <text class="calendar-normal-content-font todo-list-color">{{remind.content}}</text>
                                    </div>
                                    <div class="calendar-card-header-row">
                                        <div class="clendar-page-box-pad">
                                            <image src="https://www.materialui.co/materialIcons/social/notifications_black_27x27.png" class="cursor-pointer-globle calendar-bell-icon"/>
                                        </div>
                                        <div class="clendar-page-box-pad">
                                            <text class="cal-time-font-size">{{remind.time}}</text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>

        <!-- APK TODO--> 
        <div v-if="platform !== 'Web'">
                <wxc-mask  
                        height="400"
                        width="600"
                        border-radius="5"
                        duration="200"
                        mask-bg-color="#FFFFFF"
                        :has-animation="hasAnimation"
                        :has-overlay="true"
                        :show-close="false"
                        :show="weexShow"
                        @wxcMaskSetHidden="wxcMaskSetHidden1">
                        <div class="content">
                            <div class="weex-overlay-header weex-overlay-task-title">
                                <div>
                                    <text class="weex-overlay-heading-font">Add Task</text>
                                </div>
                                <div>
                                    <image src="" class="" />
                                </div>
                            </div>

                            <div class="weex-overlay-body">
                                <vx-input-box 
                                    vx-type="text"
                                    vx-label= "New Task"
                                    vx-placeholder= "what do you need to do?"
                                    :vx-model="todoTask">
                                </vx-input-box>
                            </div>
                            <div class="weex-overlay-footer weex-overlay-header">
                                <div class="">
                                    <vx-secondary-button
                                        btn-width="250px"
                                        btn-name="Cancel"
                                        btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                                        @click="hideTodoPopup(1)">
                                    </vx-secondary-button>
                                </div>
                                <div style="margin-left:20px">
                                    <vx-primary-button
                                        btn-width="250px"
                                        btn-name="Add"
                                        btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                    </vx-primary-button>
                                </div>
                            </div>
                        </div>
                </wxc-mask>
        </div>
            <!--  -->

        <!-- Overlay --> 
        <div v-if="platform === 'Web'" class="">        
            <pop-up-todo v-if="todoActive === true">
                <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font">Add Task</text>
                    </div>
                    <div>
                        <image src="" class="" />
                    </div>
                </div>
                <div class="todo-body">
                    <vx-input-box 
                        vx-type="text"
                        vx-label= "New Task"
                        vx-placeholder= "What do you need to do?"
                        @valueReading="vxInputOnInput">
                    </vx-input-box>
                </div>
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="todo-lft-margin-btn pp-up-btn-width">
                        <vx-primary-button
                            btn-name="Add"
                            btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png"
                            @click.native="mConsole">
                        </vx-primary-button>
                    </div>
                    <div class="pp-up-btn-width">
                        <vx-secondary-button
                            btn-name="Cancel"
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                            @click.native="hideTodoPopup(1)">
                        </vx-secondary-button>
                    </div>
                </div>
            </pop-up-todo>
        </div>

        <!-- APK Rmainder -->

         <div v-if="platform !== 'Web'" class="">
                <wxc-mask  
                        height="475"
                        width="600"
                        border-radius="5"
                        duration="200"
                        mask-bg-color="#FFFFFF"
                        :has-animation="hasAnimation"
                        :has-overlay="true"
                        :show-close="false"
                        :show="weexReminder"
                        @wxcMaskSetHidden="wxcMaskSetHidden2">
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
                               
                                <div style="flex:1">
                                    <vx-input-box 
                                        vx-type="text"
                                        vx-label= "Enter reminder description"
                                        vx-placeholder= "What do you need to do?">
                                    </vx-input-box>
                                </div>
                                <div style="flex:1">
                                    <vx-drop-down :option-list="timeList"></vx-drop-down>
                                </div>
                                
                            </div>
                            <div class="weex-overlay-footer weex-overlay-header">
                                <div class="">
                                    <vx-secondary-button
                                        btn-width="240px"
                                        btn-name="Cancel"
                                        btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                                        @click="hideTodoPopup(1)">
                                    </vx-secondary-button>
                                </div>
                                <div style="margin-left:20px">
                                    <vx-primary-button
                                        btn-width="240px"
                                        btn-name="Add"
                                        btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png"
                                        >
                                    </vx-primary-button>
                                </div>
                            </div>
                        </div>
                </wxc-mask>
            </div>

        <!-- Remainder pop up -->
        <div v-if="platform === 'Web'">
            <pop-up-todo v-if="reminderActive === true">
                <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font">Set Reminder</text>
                    </div>
                    <div>
                        <image src="" class="" />
                    </div>
                </div>
                <div class="todo-body">
                    <div class="to-do-direction-switching">
                        <div style="flex:1">
                            <vx-input-box 
                                vx-type="text"
                                vx-label= "Enter reminder description"
                                vx-placeholder="What do you need to do?">
                            </vx-input-box>
                        </div>
                        <div class="content-gap-cal" style="flex:1">
                            <text class="vx-option-box-label vx-option-box-label-color ">Set Reminder</text>
                            <select class="vx-globle-drp-down">
                                <option v-for="(option, index) in timeList" :key="index" class="vx-option-box-label">{{ option }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="todo-lft-margin-btn pp-up-btn-width">
                        <vx-primary-button
                            btn-name="Add"
                            btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png"
                        >
                        </vx-primary-button>
                    </div>
                    <div class="pp-up-btn-width">
                        <vx-secondary-button
                            btn-name="Cancel"
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                            @click.native="hideTodoPopup(2)">
                        </vx-secondary-button>
                    </div>
                </div>

            </pop-up-todo>

            
        
        <pop-up-todo v-if="reminderActive === true">
                <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font">Create Event</text>
                    </div>
                    <div>
                        <image src="" class="" />
                    </div>
                </div>
                     
                <div class="todo-body" style="height:400px; overflow: scroll">
               

                    <createEvent  ref="accessData" ></createEvent>
                </div>
                   
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="todo-lft-margin-btn pp-up-btn-width">
                        <vx-primary-button
                            btn-name="Add"
                            btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png"
                            @click.native="saveData()">
                        </vx-primary-button>
                    </div>
                    <div class="pp-up-btn-width">
                        <vx-secondary-button
                            btn-name="Cancel"
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                            @click.native="hideTodoPopup(2)">
                        </vx-secondary-button>
                    </div>
                </div>

            </pop-up-todo>
            </div>
    </div>
</template>

<script>
    import { WxcMask } from 'weex-ui'
    import moment from 'moment'
    import popUpTodo from './Todo-pop-up.vue'
     import createEvent from './CreateEvent.vue'
    import vxInputBox from '../../components/vx-input-box/vx-input-box'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue'
    import vxDropDown from '../CFR/cfr-dropDown-apk.vue'

    // Child Pages
    import dayTab from './Day/Day.vue'
    import weekTab from './Week/Week.vue'
    import monthTab from './Month/Month.vue'
    // var moment = require('moment')
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
        components: {
            popUpTodo,
            vxInputBox,
            vxPrimaryButton,
            vxSecondaryButton,
            vxDropDown,
            WxcMask,
            dayTab,
            weekTab,
            monthTab,createEvent
        },
        created() {

            let self  =  this;
            this._id= self.$store.state.agentDetails._id
            this.GET('getAppointment/'+ this._id+'?set_reminder_prority="high","low","medium"', res =>  {
                if(!res.ok){
                  self.obj = "request failed";
                }
                else {
                    console.log('get:'+res);
                    //self.obj =  (res.data.errMsg);
                    this.form = res.data.errMsg
                    console.log(this.form , 'this.form  Dk')
                    this.$store.commit('ADD_CALENDARMAINFORMDATA',this.form)
                    for(var i =0 ;i < this.form.length;i++)
                    {
                        var srtdte = JSON.parse(this.form[i].start_date)
                        console.log(srtdte)
                        this.form[i].start_date = srtdte
                        var srttme  = JSON.parse(this.form[i].start_time_MS)
                        console.log(srttme)
                        this.form[i].start_time = srttme
                        var endtme  = JSON.parse(this.form[i].end_time_MS)
                        console.log(endtme)
                        this.form[i].end_time = endtme
                        console.log(this.form[i])
                    }
               
                    console.log(this.time)
                
                }

            });
            this.$store.commit('SET_PAGE_TITLE', 'Calendar');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }

        },
    
        computed:{

        },
    
        data() {
            return {
                items:1527681600000,
                moment:moment,
                 
                form:[],
                time:[],
                obj:'',
                platform: invalid,
                calendarTabs: {
                    upcoming: true,
                    dayTab: false,
                    weekTab: false,
                    monthTab: false
                },
                weexShow: false,
                hasAnimation: false,
                weexReminder: false,

                todoTask: '',
                reminderTask: '',
                todoActive: false,
                timeList: [
                    '10:00',
                    '11:00',
                    '12:00'
                ],
                reminderActive: false,
                toDoDefaultIcon: 'https://www.materialui.co/materialIcons/toggle/check_box_black_192x192.png',
                // checkIcon: 'https://www.materialui.co/materialIcons/toggle/check_box_outline_blank_black_192x192.png',
                checkIcon: '../../images/accessibility_black_192x192.png',
                dltIcon: 'https://www.materialui.co/materialIcons/action/delete_forever_black_192x192.png',
                toDoList: [
                    {
                        content: 'Donec quam felis, ultricies nec, pellen fdsns opjosa psfk sodf fasf dfgdfg jopf sfslmlml sjdfi.',
                        removeBtn: 'false',
                        icon: 'https://www.materialui.co/materialIcons/toggle/check_box_outline_blank_black_192x192.png',
                        textOverLine: {
                            textDecorationLine: '',
                            opacity: '0'
                        }
                    }, {
                        content: 'Aliquam lorem ante, dapibus in, vi.',
                        removeBtn: 'false',
                        icon: 'https://www.materialui.co/materialIcons/toggle/check_box_outline_blank_black_192x192.png',
                        textOverLine: {
                            textDecorationLine: '',
                            opacity: '0'
                        }
                    }, {
                        content: 'Renew Policy Numbers ADF2425',
                        removeBtn: 'false',
                        icon: 'https://www.materialui.co/materialIcons/toggle/check_box_outline_blank_black_192x192.png',
                        textOverLine: {
                            textDecorationLine: '',
                            opacity: '0'
                        }
                    }, {
                        content: 'Renew Policy Numbers ADF2425',
                        removeBtn: 'false',
                        icon: 'https://www.materialui.co/materialIcons/toggle/check_box_outline_blank_black_192x192.png',

                        textOverLine: {
                            textDecorationLine: '',
                            opacity: '0'
                        }
                    },

                ],
                rmainders: [
                    {
                        content: 'Lorem ipsum dolor set amet khsf ojtl sdgv sodfui dsf.',
                        time: '2.30 pm'
                    }, {
                        content: 'Donec quam felis, ultricies nec, pellenfd sns opjosa psfk sodf.',
                        time: '2.30 pm'
                    }, {
                        content: 'Lorem ipsum dolor set amet khsf ojtl sdgv sodfui dsf.',
                        time: '2.30 pm'
                    }, {
                        content: 'Donec quam felis, ultricies nec, pellenfd sns opjosa psfk sodf.',
                        time: '2.30 pm'
                    }
                ],
                calTabs: [
                    {
                        tabName: 'Upcoming',
                        active: true,
                        style : {
                            borderWidth: '',
                            borderStyle: '',
                            btc: '#FFF',
                            blc: '#FFF',
                            brc: '#FFF',
                            bbc: '#FFF'
                        }
                    }, {
                        tabName: 'Month',
                        active: false,
                        style : {
                            borderWidth: '',
                            borderStyle: '',
                            btc: '#FFF',
                            blc: '#FFF',
                            brc: '#FFF',
                            bbc: '#FFF'
                        }
                    }, {
                        tabName: 'Week',
                        active: false,
                        style : {
                            borderWidth: '',
                            borderStyle: '',
                            btc: '#FFF',
                            blc: '#FFF',
                            brc: '#FFF',
                            bbc: '#FFF'
                        }
                    }, 
                    {
                        tabName: 'Day',
                        active: false,
                        style : {
                            borderWidth: '',
                            borderStyle: '',
                            btc: '#FFF',
                            blc: '#FFF',
                            brc: '#FFF',
                            bbc: '#FFF'
                        }
                    }
                     
                ],

                calendarTime: [
                    {
                        day: 'Sun',
                        date: '05',
                        timeFrom: '10:00',
                        endTime: '10:30',
                        content: 'Client Meeting with Callie Putney',
                        priority: 'HIGH',
                        time: '15 mins before',
                        delete: 0,
                        edit: 0
                    }, {
                        day: 'Mon',
                        date: '01',
                        timeFrom: '11:00',
                        endTime: '11:30',
                        content: 'Client Meeting with Callie Putney',
                        priority: 'HIGH',
                        time: '15 mins before',
                        delete: 0,
                        edit: 0
                    }, {
                        day: 'Fri',
                        date: '03',
                        timeFrom: '10:30',
                        endTime: '11:00',
                        content: 'Internal Meeting about Sales Force on 3rd Floor',
                        priority: 'HIGH',
                        time: '15 mins before',
                        delete: 0,
                        edit: 0
                    }
                ]
            }
        },
         
        methods: {
            saveData(){
                console.log('Called');
                this.$refs.accessData.SaveEditData();
            },
            editData(index,data){
                var me = this
                console.log(data)
                // data.start_time = moment(data.start_time).format('LT')
                //       data.end_time = moment(data.end_time).format('LT')
                me.$store.commit('ADD_CALENDARFORMDATA',data,true)
                    this.reminderActive = true;
                me.$store.commit('SET_EDIT_STATUS',true)
            },
            CreateEventData(){
                    var me = this
                     this.reminderActive = true;
                    me.$store.commit('SET_EDIT_STATUS',false)

                  
            },
           
            calenderGetData(){
                let setData  =  this;
                this._id= '5a8c1e7d07151804a888eafc'
                this.GET('getAppointment/'+ this._id+'?set_reminder_prority="high","low"', res =>  {
                if(!res.ok){
                  setData.cald = "request failed";
                }else{
                  console.log('get:'+res);
                  setData.cald =  res.data.errMsg;
                  console.log(setData.cald)
                }

            })
            },
            vxInputOnInput (event) {
                this.todoTask = event.value;
                console.log(this.todoTask);
            },
            removListFromToDo(rowIndex) {
                if(this.toDoList[rowIndex].removeBtn === false) {
                    this.toDoList[rowIndex].removeBtn = true;
                    this.toDoList[rowIndex].icon = this.toDoDefaultIcon;
                    this.toDoList[rowIndex].textOverLine.textDecorationLine = 'line-through';
                } else {
                    this.toDoList[rowIndex].removeBtn = false;
                    this.toDoList[rowIndex].icon = this.checkIcon;
                    this.toDoList[rowIndex].textOverLine.textDecorationLine = '';
                }
            },
            showDeleteIcon() {
                for(let i = 0; i < this.toDoList.length; i++) {
                    this.toDoList[i].textOverLine.opacity = 0.6;
                }
            },
            openTodoPopUp(id) {
                switch(id) {
                    case 1: 
                        if(this.platform === 'Web') {
                            this.todoActive = true;
                        } else {
                            if(this.platform !== 'Web') {
                                this.weexShow = true;
                                this.hasAnimation = true
                            }
                        }
                        
                    break;
                    case 2: 
                        if(this.platform === 'Web') {
                            this.reminderActive = true;
                        } else {
                            if(this.platform !== 'Web') {
                                this.hasAnimation = true;
                                this.weexReminder = true;
                            }
                        }
                    break;
                }
            },
            hideTodoPopup(id) {
                switch(id) {
                    case 1: 
                        this.todoActive = false;
                    break;
                    case 2: 
                        this.reminderActive = false;
                    break;
                }
            },
            wxcMaskSetHidden1() {
                this.weexShow = false;
            },
            wxcMaskSetHidden2() {
                this.weexReminder = false;
            },
            mConsole() {
                console.log('Calendar ' + this.todoTask);
            },

            tabsActive(tabName) {
                switch(tabName) {
                    case 'Day':
                        if(this.calendarTabs.weekTab === true || this.calendarTabs.monthTab === true || this.calendarTabs.upcoming === true) {
                            this.calendarTabs.weekTab = false;
                            this.calendarTabs.monthTab = false;
                            this.calendarTabs.upcoming = false;
                            for (let i = 0; i < this.calTabs.length; i++) {
                                if (this.calTabs[i].tabName === 'Day') {
                                    this.calTabs[i].active = true;
                                } 
                               else{
                                   this.calTabs[i].active = false;
                               }
                            }


                        }
                        this.calendarTabs.dayTab = true;
                    break;
                    case 'Week':
                        if( this.calendarTabs.dayTab === true || this.calendarTabs.monthTab === true || this.calendarTabs.upcoming === true) {
                            this.calendarTabs.dayTab = false;
                            this.calendarTabs.monthTab = false;
                            this.calendarTabs.upcoming = false;

                             for (let i = 0; i < this.calTabs.length; i++) {
                                if (this.calTabs[i].tabName === 'Week') {
                                    this.calTabs[i].active = true;
                                } 
                               else{
                                   this.calTabs[i].active = false;
                               }
                            }
                        }
                        this.calendarTabs.weekTab = true;
                    break;
                    case 'Month':
                        if(this.calendarTabs.dayTab === true || this.calendarTabs.weekTab === true || this.calendarTabs.upcoming === true) {
                            this.calendarTabs.dayTab = false;
                            this.calendarTabs.weekTab = false;
                            this.calendarTabs.upcoming = false;

                             for (let i = 0; i < this.calTabs.length; i++) {
                                if (this.calTabs[i].tabName === 'Month') {
                                    this.calTabs[i].active = true;
                                } 
                               else{
                                   this.calTabs[i].active = false;
                               }
                            }
                        }
                        this.calendarTabs.monthTab = true;
                    break;
                    case 'Upcoming':
                        if(this.calendarTabs.dayTab === true || this.calendarTabs.weekTab === true || this.calendarTabs.monthTab === true) {
                            this.calendarTabs.weekTab = false;
                            this.calendarTabs.dayTab = false;
                            this.calendarTabs.monthTab = false;
                             for (let i = 0; i < this.calTabs.length; i++) {
                                if (this.calTabs[i].tabName === 'Upcoming') {
                                    this.calTabs[i].active = true;
                                } 
                               else{
                                   this.calTabs[i].active = false;
                               }
                            }
                        }
                        this.calendarTabs.upcoming = true;
                    break;
                }
            }
        }
    }
</script>

<style>
.crt-evt-plus-icon {
    position: absolute;
    right: 0;
    cursor: pointer;
}
    .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
    /* this class is used to append only directions */
    .master-page-wrapper {
        background-color: #F7F7F7;
    }
    .warper-apk-margin {
        margin: 20px;
    }
    .calendar-flx-cng-direction {
        flex-direction: column;
    }
    .calendar-flx-cng-direction-revrse {
        flex-direction: column-reverse;
    }
    .clendar-page-flx-row {
        flex-direction: row;
    }
    .clendar-page-flx-col {
        flex-direction: column;
    }
    .calendar-card-header-row {
        flex-direction: row;
        align-items: center;
    }
    .clendar-page-box-pad {
        padding: 10px;
    }
    .clendar-page-md-card-temp {
        background-color: #FFF;
    }
    .font-bolder-calendar {
        font-weight: bold;
        font-family:robotoregular;
    }
    .calendar-page-icon-size {
        height: 50px;
        width: 50px;
    }
    .calendar-bell-icon {
        height: 25px;
        width: 25px;
    }
    .calendar-flx-size-01 {
        flex: 1;
    }
    .cal-time-font-size {
        font-size: 21px;
        font-family:robotoregular;
    }
    .content-gap-cal {
        margin-left: 40px;
    }
    .col-items-alignment-cal {
        align-items: center;
    }
    .white-cal-color {
        color: #FFF;
    }
    .calendar-content-center {
        text-align: center;
    }
    .calendar-date-box-width {
        width: 120px;
    }
    .todo-list-color {
        color: #9d9d9d;
    }
    .calendar-tp-btm-margin {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .cal-md-btn-icon {
        height: 30px;
        width: 30px;
    }
    .crt-evt-plus-icon-size {
        height: 35px;
        width: 35px; 
     }
    .clendar-page-md-card-temp {
        background-color: rgb(255, 255, 255);
        border-radius: 3px;
        padding: 20px;
    }
    .calendar-md-custom-btn{
        background-color: #3b371e;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 88px;
        cursor: pointer;
    }

    .calendar-md-btn-label{
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
        color:#fff;
        font-family:robotoregular;
    }
    .calendar-btn-width {
        width: 240px;
    }
    .cal-md-btn-margin-btm-10 {
        margin-bottom: 20px;
    }
    .cal-card-margin-botom {
        margin-bottom: 30px;

    }
    .calendar-normal-content-font {
        font-size: 25px;
        font-family:robotoregular;
    }
    .calendar-todo-list {
        padding: 20px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: rgb(239, 237, 237);
    }
    .calendar-content-width {
        width: 490px;
    }
    .cal-calendar-sts-box {
        background-color: rgb(214, 31, 144);
        border-radius: 4px;
    }
    .cal-ribbon {
        background-color: #F7F7F7
    }
    .calendar-side-card-width {
        width: 620px;
    }
    .cal-wraper-container-magin{
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;

    }
    .cal-box-shadow {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
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

    .calendar-tab-btn-gap {
        margin-bottom: 20px;
    }
    .pp-up-btn-width {
        width: 150px;
    }

    /* Card border only for apks */
    .calen-crd-whole-bdr {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        margin:15px;
    }

    /* Class Binding for browser */


    @media (min-width: 320px) {

    .cal-tab-activation-bind {
        /* border: 2px solid #000000; */
        transition: left 0.2s ease-in-out;
        border-top: #ffffff;
        border-left: #ffffff;
        border-right:#ffffff;
        border-bottom: #000000 2px solid;
        }

    .crt-evt-plus-icon-size {
        height: 20px;
        width: 20px; 
     }
        .clendar-page-box-pad {
            padding: 5px;
        }
        .clendar-page-md-card-temp {
            background-color: #FFF;
            border-radius: 3px;
            padding: 20px;
        }
        .calendar-normal-content-font {
            font-size: 14px;
            font-family:robotoregular;
        }
        .calendar-todo-list {
            padding: 10px;
            padding-right: 0;
        }
        .calendar-page-icon-size {
            height: 25px;
            width: 25px;
        }
        .calendar-bell-icon {
            height: 18px;
            width: 18px;
        }
        .cal-time-font-size {
            font-size: 11px;
            color: rgb(172, 170, 170);
            font-family:robotoregular;
        }
        .cal-card-margin-botom {
            margin-bottom: 20px;
        }
        .cal-card-tabs-font-size {
            font-size: 16px;
            font-family:robotoregular;
        }
        .cal-tab-margin-right {
            margin-right: 20px;
        }
        .content-gap-cal {
            margin-left: 20px;
        }
        .cal-calendar-sts-box {
            border-radius: 2px;
        }
        .white-cal-color {
            color: #FFF;
        }
        .cal-card-margin {
            margin-left: 10px;
            margin-right: 10px;
        }
        .cal-wraper-container-magin{
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 0;
            margin-right: 0;

        }
        .calendar-date-box-width {
            width: 60px;
        }
        .calendar-side-card-width {
            width: 266px;
        }
        .calendar-content-width {
            width: 290px;
        }
        .calendar-tp-btm-margin {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .calendar-md-custom-btn {
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
            cursor: pointer;
        }

        .calendar-md-btn-label {
            font-size : 11px;
            font-weight: 500;
            font-family:robotoregular;
        }
        .calendar-btn-width {
            width: 140px;
        }
        .cal-md-btn-margin-btm-10 {
            margin-bottom: 10px;
        }
        .cal-md-btn-icon {
            width:18px;
            height: 18px;
        }
        .calendar-tab-btn-gap {
            margin-bottom: 15px;
        }
        .pp-up-btn-width {
            width:30%;
        }
        .calendar-overlay-pop-width {
            width: 90%;
        }

        /* Card border only for apks */
        .calen-crd-whole-bdr {
            border-width: 0;
            border-style: none;
            border-color: #ffffff;
            margin-top: 0;
            margin-left: 10px;
            margin-right: 10px;
        }

    }
    @media (min-width: 768px) {
        .calendar-flx-cng-direction {
            flex-direction: row;
        }
        .clendar-page-flx-row {
            flex-direction: row;
        }
        .calendar-flx-cng-direction-revrse {
            flex-direction: row;
        }
        .calendar-btn-tabs-align {
            align-items: flex-end;
        }
        .calendar-tab-btn-gap {
            margin-bottom: 0;
        }
        .calendar-left-cal-crd-width {
            width: 400px;
        }
        .calendar-side-card-width {
            width: 200px;
        }
        .warper-apk-margin {
            margin: 0;
        }

          /* Place whole card in center  */
        .calen-ui-put-center {
            justify-content: center;
        }
    }
    @media (min-width: 992px) {
        .calendar-cursr {
            cursor: pointer;
        }
        .calendar-left-cal-crd-width {
            width: 715px;
        }
        .calendar-side-card-width {
            width: 300px;
        }   

        .pp-up-btn-width {
            width:20%;
        }

      
    }
    

</style>