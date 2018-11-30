<template>
    <div>
        <!-- <mobile-header v-if="platform !=='Web'"></mobile-header> -->
        <scroller>
            <div class="master-page-wrapper" style="background-color:#F7F7F7;margin-top:10px;">

                <div class="box-wrapper">

                    <!-- Flex Row -->
                    <div class="home-nx-flex-row home-nx-flex-row-column apply-width">
                        <!-- Flex Column inside flex row -->
                        <div class="box flex-box-size-01">
                            <div class="home-nx-flex-column">
                                <!-- Dashboard Panel -->
                                <div class="dashboard-body-color shadow">
                                    <!-- Flex row for dropdown and Icon -->
                                    <!-- Panel Header -->
                                    <div class="">
                                        <div class="box">
                                            <!-- DropDown List-->

                                            <div class="home-nx-flex-row">
                                            
                                                <div class="flex-box-size-01">
                                                    <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker()">
                                                        <text class="text select-box mouse-pointer txt-clr-bgWhite">{{ value }}</text>
                                                        <div class="drop-arrow-pos">
                                                            <image class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_24x24.png"></image>
                                                        </div>
                                                    </div>
                                                    <div v-if="platform == 'Web'">
                                                        <select class="home-custom-select-box dashboard-body-color" v-model="dashoardPanel.selectedItem">
                                                            <option disabled value="" class="bg-white-color">Choose..</option>
                                                            <option v-for="(listItem, li) in dashoardPanel.optionList" :key="li" class="bg-white-color"> {{listItem}} </option>
                                                        </select>                            
                                                    </div>
                                                </div>
                                                <!-- For Icon -->
                                                <div class="box">
                                                    <!-- Header ICON Position is absolute -->
                                                    <div class="panel-icon-size">
                                                        <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/dashboard_white_36x36.png"></image>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-for="(values, val) in dashoardPanel.panelBodyData" :key="val">
                                            <div class="box gap-btwn-two-section">
                                                <!-- Panel body have one flex row and inside columns -->

                                                <div class="home-nx-flex-row">
                                                    <div class="box flex-box-size-02">
                                                        <text class="panel-label-font-12-px txt-clr-bgWhite large-text">{{values.titleLabel}}</text>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text">₹ {{values.amount1}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px txt-clr-bgWhite large-text">{{values.label1}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text">₹ {{values.amount2}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px txt-clr-bgWhite large-text">{{values.label2}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text">₹ {{values.amount3}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px txt-clr-bgWhite large-text">{{values.label3}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer dashboard-color-footer gap-btwn-two-section">
                                            <div class="home-nx-flex-row row-alignment">
                                        
                                                <div  v-if="platform==='Web'" class="flex-box-size-01" @click.native ="jump('/homeinside')">
                                                    <text class="panel-heading-font text-color-footer footer-white click-event-cursor">BUSINESS</text>
                                                </div>

                                                <div  v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/homeinside')">
                                                    <text class="panel-heading-font text-color-footer">BUSINESS</text>
                                                </div> 
                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding add-icon-left-border">
                                                    <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                                <!-- Dashboard End Here -->

                                <!-- Application and presale tool wraped in one column when it is on large device
                                    when device is small it in row -->
                                <div class="home-nx-flex-column home-nx-flex-column-row">
                                    <!-- Application -->
                                    <div class="app-body-color gap-btwn-two-section shadow flex-box-size-01 home-nx-margin-right">
                                        <div class="home-nx-flex-column">
                                            <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/navigation/apps_white_36x36.png"></image>
                                            </div>

                                            <!-- Panel body -->
                                            <div class="box gap-btwn-two-section">
                                                <!-- Panel body have one flex row and inside columns -->

                                                <div class="home-nx-flex-row">

                                                    <div class="box flex-box-size-01">

                                                        <div class="home-nx-flex-column">
                                                            <div v-if="platform==='Web'"  @click.native="jump('/renewals')">
                                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite click-event-cursor" >Renewals</text>
                                                            </div>

                                                            <div v-if="platform !=='Web'" @click="jump('/renewals')">
                                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite">Renewals</text>
                                                            </div> 
                                                            <div>
                                                                <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                                    <div class="gap-btwn-two-section">
                                                                        <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite">25</text>
                                                                    </div>
                                                                    <div class="add-left-short-padding  gap-btwn-two-section">
                                                                        <text class="txt-clr-bgWhite panel-label-font-12-px">New</text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
 
                                                    <div class="box flex-box-size-01">
                                                        <!-- <text class="text">{{values.titleLabel}}</text> -->
                                                        <div  class="home-nx-flex-column">
                                                            <div v-if="platform ==='Web'" @click.native="jump('/appview')">
                                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text click-event-cursor">Customers</text>
                                                            </div>

                                                            <div v-if="platform !=='Web'" @click="jump('/appview')">
                                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text">Customers</text>
                                                            </div> 
                                                            <div>
                                                                <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                                    <div class="gap-btwn-two-section">
                                                                        <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite">25</text>
                                                                    </div>
                                                                    <div class="add-left-short-padding  gap-btwn-two-section">
                                                                        <text class="txt-clr-bgWhite panel-label-font-12-px">New</text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!-- Body End -->
                                                </div>
                                            </div>

                                            <!-- Panel footer -->
                                            <div class="panel-footer app-body-footer gap-btwn-two-section">
                                                <div class="home-nx-flex-row row-alignment">
                                                    <div v-if="platform === 'Web'" class="flex-box-size-01" @click.native="jump('/appview')">
                                                        <text class="panel-heading-font text-color-footer click-event-cursor">CUSTOMERS</text>
                                                    </div>

                                                    <div  v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/appview')">
                                                        <text class="panel-heading-font text-color-footer click-event-cursor">CUSTOMERS</text>
                                                    </div> 
                                                    <div class="add-short-right-padding">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Refresh ICON -->
                                                    <div class="add-left-short-padding add-icon-left-border">
                                                        <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- Application End Here -->

                                    <!-- Pre Sale Tool -->
                                    <div class="presale-body-color gap-btwn-two-section shadow flex-box-size-01 home-nx-margin-left">
                                        <div class="home-nx-flex-column">
                                            <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/timeline_white_36x36.png"></image>
                                            </div>

                                            <!-- Panel body -->

                                            <!-- Panel body have one flex row and inside columns -->

                                            <div class="box gap-btwn-two-section">
                                                <div class="home-nx-flex-row">
                                                    <div v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/masterpresales/customerdetails/testimonials')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text click-event-cursor">Sales Pitch</text>
                                                    </div>

                                                    <div v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/masterpresales/customerdetails/testimonials')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text">Sales Pitch</text>
                                                    </div> 
                                                    <div v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/masteronboard/advisordetails/official')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text click-event-cursor">Onboarding</text>
                                                    </div>

                                                    <div v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/masteronboard/advisordetails/official')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite large-text">Onboarding</text>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div class="box gap-btwn-two-section">
                                                <div class="home-nx-flex-row">
                                                    <div v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/customer')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite click-event-cursor large-text click-event-cursor">Recruitment Presentation</text>
                                                    </div>
                                                    <div  v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/customer')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite click-event-cursor large-text">Recruitment Presentation</text>
                                                    </div>
                                                    <div  v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/mastercalculator/calculatorhuman')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite click-event-cursor large-text click-event-cursor">Need Analysis</text>
                                                    </div>
                                                    <div  v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/mastercalculator/calculatorhuman')">
                                                        <text class="text panel-body-link-font-bold txt-clr-bgWhite click-event-cursor large-text">Need Analysis</text>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- Panel footer -->
                                            <div class="panel-footer presale-body-footer gap-btwn-two-section">
                                                <div class="home-nx-flex-row row-alignment">
                                                    <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/protection')">
                                                        <text class="panel-heading-font text-color-footer click-event-cursor large-text click-event-cursor">SALES GUIDE</text>
                                                    </div>

                                                    <div  v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/protection')">
                                                        <text class="panel-heading-font text-color-footer click-event-cursor large-text">SALES GUIDE</text>
                                                    </div> 
                                                    <div class="add-short-right-padding">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Refresh ICON -->
                                                    <div class="add-left-short-padding add-icon-left-border">
                                                        <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Pre sale tool end here -->
                                </div>
                                <!-- Wraper end -->


                                <!-- ONBOARDING -->
                                <div class="gap-btwn-two-section on-boarding-body-color shadow">
                                    <div class="home-nx-flex-column">
                                        <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_add_white_36x36.png"/>
                                        </div>

                                        <div class="box">
                                            <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                <div class="box">
                                                    <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite">7</text>
                                                </div>
                                                <div>
                                                    <text class="txt-clr-bgWhite panel-label-font-12-px large-text">Birthdays this week</text>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer on-boarding-body-footer-color gap-body-footer-margin-top">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/masteronboard/advisordetails/official')">
                                                    <text class="panel-heading-font text-color-footer click-event-cursor large-text click-event-cursor">BIRTHDAYS</text>
                                                </div>

                                                <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/masteronboard/advisordetails/official')">
                                                    <text class="panel-heading-font text-color-footer click-event-cursor large-text">BIRTHDAYS</text>
                                                </div> 
                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding add-icon-left-border">
                                                    <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- Second Column -->
                        <div class="box flex-box-size-01">
                            <div class="home-nx-flex-column">
                                <div class="shadow calendar-body-color home-calendar-new-height" >
                                    <div class="box panels-icon-positioning">
                                        <image class="panel-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/action/date_range_white_192x192.png"/>
                                    </div>
                                    <div class="calendar-card-wraper c home-calendar-footer-height">


                                        <div>
                                            <div class="">
                                                <div class="card-header">
                                                    <div class="tab-heading activity-tabs-paddding">
                                                        <text class="tab-head click-event-cursor">Upcoming</text>
                                                    </div>
                                                    <div class="tab-heading activity-tabs-paddding">
                                                        <text class="tab-head click-event-cursor">Month</text>
                                                    </div>
                                                    <div class="tab-heading activity-tabs-paddding">
                                                        <text class="tab-head click-event-cursor">Week</text>
                                                    </div>
                                                    <div class="tab-heading activity-tabs-paddding">
                                                        <text class="tab-head click-event-cursor">Day</text>
                                                    </div>
                                                </div>
                                                <div class="card-content">
                                                    <div class="date">
                                                        <div>
                                                            <image class="cal-icn" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_black_192x192.png"></image>
                                                        </div>
                                                        <div class="date-text">
                                                            <text class="date-txt"> JUNE 2016</text>
                                                        </div>
                                                        <div>
                                                            <image class="cal-icn click-event-cursor" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png"></image>
                                                        </div>
                                                        <div>
                                                            <image class="cal-icn click-event-cursor" src="https://www.materialui.co/materialIcons/action/date_range_black_192x192.png"></image>
                                                        </div>
                                                    </div>
                                                </div>
                                                <scroller class="scroller">
                                                    <div v-for="(appt,pi) in appointment" :key="pi">

                                                        <div class="calender-listing-header">
                                                            <text class="am-txt calender-listing-header-text">{{appt.Slot}}</text>
                                                        </div>
                                                        <div class="card-message" v-for="(appt,pi) in appointment" :key="pi">
                                                            <div class="card-msg-left">
                                                                <div class="date-slot" style="flex:1">
                                                                    <div style="background-color:#5da5c0" class="box">
                                                                        <text class="date-txt panel-label-font-12-px txt-clr-bgWhite">{{appt.Day}}</text>
                                                                    </div>
                                                                    <div style="background-color:#f4f4f4" class="box">
                                                                        <text class="date-txt panel-label-font-12-px">{{appt.Date}}</text>
                                                                    </div>
                                                                </div>
                                                                <div class="time-slot" style="flex:2">
                                                                    <div>
                                                                        <text class="date-txt panel-label-font-12-px">{{appt.TimeFrom}}</text>
                                                                    </div>
                                                                    <div>
                                                                        <text class="date-txt panel-label-font-12-px">To</text>
                                                                    </div>
                                                                    <div>
                                                                        <text class="date-txt panel-label-font-12-px">{{appt.TimeTo}}</text>
                                                                    </div>
                                                                </div>
                                                                <div class="meeting-list" style="flex:5;flex-direction:column;justify-content: center" @click="dropDetails(index,pi)">
                                                                    <text class="date-txt dt-text-align-left panel-label-font-12-px">{{appt.Details}}</text>

                                                                </div>
                                                            </div>

                                                            <div style="flex-direction:column">
                                                                <div v-if="showDetails==true">
                                                                    <text style="color:black" class="date-txt panel-label-font-12-px">{{appt.Details}}</text>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </scroller>


                                            </div>
                                        </div>
                                    </div>
                                    <!-- Footer -->
                                    <div class="panel-footer panel-footer-color" >
                                        <div class="home-nx-flex-row row-alignment">
                                            <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('calendar')">
                                                <text class="panel-heading-font text-color-footer click-event-cursor">ACTIVITIES</text>
                                            </div>

                                            <div v-if="platform !=='Web'"  class="flex-box-size-01" @click="jump('/calendar')">
                                                <text class="panel-heading-font text-color-footer click-event-cursor">ACTIVITIES</text>
                                            </div> 
                                            <div class="add-short-right-padding">
                                                <div class="home-nx-flex-column">
                                                    <div>
                                                        <text class="panel-small-text text-color-footer">Last Synced</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Refresh ICON -->
                                            <div class="add-left-short-padding add-icon-left-border">
                                                <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- LEAD Management -->
                                <div class="gap-btwn-two-section lead-mgmt-body-color shadow">
                                    <div class="home-nx-flex-column">
                                        <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_white_36x36.png"></image>
                                        </div>

                                        <div class="box">
                                            <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                <div class="box">
                                                    <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite">25</text>
                                                </div>
                                                <div>
                                                    <text class="txt-clr-bgWhite panel-label-font-12-px">New</text>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer lead-mgmt-footer-color gap-body-footer-margin-top">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/leadmgmt')">
                                                    <text class="panel-heading-font text-color-footer click-event-cursor large-text click-event-cursor">ACTIVITY MANAGEMENT</text>
                                                </div>

                                                <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/leadmgmt')">
                                                    <text class="panel-heading-font text-color-footer click-event-cursor large-text">ACTIVITY MANAGEMENT</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding add-icon-left-border">
                                                    <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <!-- Third Column -->
                        <div class="box flex-box-size-01">
                            <div class="home-nx-flex-column">
                                <!-- cfr -->
                                <div class="cfr-body-color shadow">
                                    <div class="home-nx-flex-column">
                                        <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"/>
                                        </div>

                                        <div class="box">
                                            <div class="home-nx-flex-row gap-btwn-two-section " style="align-items: center;">
                                                <div class="box">
                                                    <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite">25</text>
                                                </div>
                                                <div>
                                                    <text class="txt-clr-bgWhite panel-label-font-12-px ">New</text>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer cfr-footer-color gap-body-footer-margin-top">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/cfrview')">
                                                    <text class="panel-heading-font text-color-footer click-event-cursor">APPLICATIONS</text>
                                                </div>

                                                <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/cfrview')">
                                                    <text class="panel-heading-font text-color-footer click-event-cursor">APPLICATIONS</text>
                                                </div>

                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding add-icon-left-border">
                                                    <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- cfr end -->

                                <!-- Wrapper -->
                                <div class="home-nx-flex-column home-nx-flex-column-row">
                                    <!-- My Services -->
                                    <div class="gap-btwn-two-section my-servec-body-color shadow flex-box-size-01 home-nx-margin-right" >
                                        <div class="home-nx-flex-column">
                                            <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"/>
                                            </div>

                                            <!-- <div class="box gap-btwn-two-section">
                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite box click-event-cursor">Request</text>
                                            </div> -->
                                            <div class="box gap-btwn-two-section">
                                                <div class="home-nx-flex-row" style="align-items: center;">
                                                    <div class="box">
                                                        <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite">25</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px txt-clr-bgWhite txt-clr-bgWhite">WIP</text>
                                                    </div>
                                                    <div class="box">
                                                        <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite click-event-cursor">10</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px txt-clr-bgWhite add-left-short-padding click-event-cursor">Closed</text>
                                                    </div>
                                                    <div class="box">
                                                        <text class="panel-heading-font panel-body-link-font-bold txt-clr-bgWhite click-event-cursor">12</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px txt-clr-bgWhite add-left-short-padding click-event-cursor">Not Verified</text>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="box gap-btwn-two-section ">
                                                <text class="text panel-body-link-font-bold txt-clr-bgWhite box click-event-cursor">Downloads</text>
                                            </div> -->
                                            <!-- Panel footer -->
                                            <div class="panel-footer my-servec-footer-color gap-btwn-two-section" >
                                                <div class="home-nx-flex-row row-alignment">
                                                    <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/myservices')">
                                                        <text class="panel-heading-font text-color-footer click-event-cursor">SERVICE CORNER</text>
                                                    </div>

                                                    <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/myservices')">
                                                        <text class="panel-heading-font text-color-footer click-event-cursor">SERVICE CORNER</text>
                                                    </div>

                                                    <div class="add-short-right-padding">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Refresh ICON -->
                                                    <div class="add-left-short-padding add-icon-left-border">
                                                        <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <!-- CLUBS AND CONTESTS -->
                                    <div class="gap-btwn-two-section club-body-color shadow flex-box-size-01 home-nx-margin-left">
                                        <div class="home-nx-flex-column">
                                            <div class="box panels-icon-positioning click-event-cursor">
                                                <image class="panel-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"/>
                                            </div>

                                            <!-- Panel body -->

                                            <!-- Panel body have one flex row and inside columns -->
                                            <div class="home-nx-flex-row">
                                                <div v-if="platform==='Web'" class="box gap-btwn-two-section click-event-cursor flex-box-size-01">
                                                    <text class="panel-heading-font txt-clr-bgWhite box click-event-cursor" @click.native="jump('mastercontests/newdetails/newone')">Contests</text>
                                                </div>
                                                <div v-if="platform !=='Web'" class="box gap-btwn-two-section click-event-cursor flex-box-size-01">
                                                    <text class="panel-heading-font txt-clr-bgWhite box click-event-cursor" @click="jump('/mastercontests/newdetails/newone')">Contests</text>
                                                </div>

                                                <div v-if="platform==='Web'" class="box gap-btwn-two-section click-event-cursor flex-box-size-01">
                                                        <text class="panel-heading-font txt-clr-bgWhite box click-event-cursor" @click.native="jump('/clubsmaster/allclubs')">Clubs </text>
                                                    </div>
                                                    <div v-if="platform !=='Web'" class="box gap-btwn-two-section click-event-cursor flex-box-size-01">
                                                        <text class="panel-heading-font txt-clr-bgWhite box click-event-cursor" @click="jump('/clubsmaster/allclubs')">Clubs</text>
                                                    </div>

                                            </div>

                                            

                                            <div class="box gap-btwn-two-section">

                                            </div>


                                            <!-- Panel footer -->
                                            <div class="panel-footer club-footer-color gap-body-footer-margin-top">
                                                <div class="home-nx-flex-row row-alignment">
                                                    <div class="flex-box-size-01 click-event-cursor" @click="jump('/mastercontests/newdetails/newone')">
                                                        <text class="panel-heading-font text-color-footer click-event-cursor">R&R CORNER</text>
                                                    </div>
                                                    <div class="add-short-right-padding">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Refresh ICON -->
                                                    <div class="add-left-short-padding add-icon-left-border click-event-cursor">
                                                        <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- CLUBS AND CONTESTS -->
                                </div>

                                <!-- News and Updates -->

                                <div class="gap-btwn-two-section news-body-color shadow">
                                    <div class="home-nx-flex-column">
                                        <!-- <div class="box panels-icon-positioning">
                                            <text class="text txt-clr-bgWhite box">View All</text>
                                        </div> -->

                                        <!-- Panel body -->

                                        <!-- Panel body have one flex row and inside columns -->

                                        <div class="box news-box-style">
                                            <!-- here column is used arrange each row in column wice -->
                                            <div class="home-nx-flex-column news-scroller">
                                                <!-- News row with image -->
                                                <div v-for="(arr, index) in newsArray" :key="index">
                                                    <div class="home-nx-flex-row" style="align-items:center;">
                                                        <!-- Image  -->
                                                        <div class="add-left-short-padding">
                                                            <image class="news-image-size" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201402/srk-3_650_021614104929.jpg"></image>
                                                        </div>
                                                        <!-- Content -->
                                                        <div class="add-small-left-margin" style="flex:1">
                                                            <!-- news title -->
                                                            <div class="box">
                                                                <text class="panel-label-font-12-px panel-body-link-font-bold">Big changes in retirement</text>
                                                            </div>
                                                            <!-- story -->
                                                            <div class="add-left-short-padding">
                                                                <text class="panel-label-font-12-px text-wrapper" lines="3">Investment advitce coming to your mail boxInvestment advitce coming...</text>

                                                            </div>
                                                            <!-- time  -->
                                                            <div class="box">
                                                                <text class="panel-small-text">20 Mins ago</text>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <!-- border bottom -->
                                                    <div class="news-btm-border"></div>
                                                </div>

                                            </div>

                                        </div>
                                        <!-- Panel footer -->
                                        <div class="panel-footer news-footer-color">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/news')">
                                                    <text class="panel-heading-font text-color-footer click-event-curso large-text">NEWS AND UPDATES</text>
                                                </div>

                                                <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/news')">
                                                    <text class="panel-heading-font text-color-footer click-event-curso large-text">NEWS AND UPDATES</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-footer">13 hours ago</text>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding add-icon-left-border click-event-cursor">
                                                    <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </scroller>
    </div>
</template>

<script>
    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    const items = ["Month to Date", "Year to Date"];
    import mobileHeader from '../../components/Main/Mb_Mainheader.vue'
    import appSync from '../../components/Notifications/Sync.vue'
    export default {
        created() {
            // this.$store.commit('SET_PAGE_TITLE', 'Home');
            if (typeof WXEnvironment === 'object') {
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                this.platform = WXEnvironment.platform || unknown
                console.log(this.deviceWidth)

            }
        },
        components: {
            mobileHeader,
            appSync
        },
        data: function() {
            return {
                searchText: '',

                deviceWidth: invalid,
                platform: invalid,
                showDetails: false,
                notifications: false,
                tabonedisable: true,
                tabtwodisable: true,
                tabthreedisable: true,
                tabone: true,
                tabtwo: false,
                tabthree: false,
                sync: false,
                notifyDetails: false,
                selId: 0,
                activeTab: 0,
                personalId: '',
                Sync: [{
                    Status: 'Proposals',
                    No: '16',
                    Size: '125 KB'
                }, {
                    Status: 'CFR Pending',
                    No: '16',
                    Size: '200 KB'
                }, {
                    Status: 'Document Pending',
                    No: '20',
                    Size: '1.2 GB'
                }, {
                    Status: 'Payment Pending',
                    No: '20',
                    Size: '1.2 GB'
                }, ],

                number: 5,
                title: 'Applications',
                applicationData: [{
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }],
                renewalData: [{
                    Name: 'Dolly Singh',
                    Status: 'Renewal - Due Tomorrow',
                    Date: '08:05:19, March 19, 2016',
                    Id: ' BRSMCU023',
                    Premium: '₹ 7,772',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Reminder',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Reminder',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Reminder',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: '01/12/2016',
                }, ],
                alertData: [{
                    Name: 'Dolly Singh',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: ' BRSMCU023',
                    Premium: '₹ 7,772',
                    DraftDate: 'Increasing Income Plan',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: 'Increasing Income Plan',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: 'Increasing Income Plan',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: 'Increasing Income Plan',
                }, ],


                appointment: [{
                        Slot: 'AM (till 11:59am)',
                        Day: "Fri",
                        Date: "03",
                        TimeFrom: "8:00",
                        TimeTo: "8:30",
                        Details: "Meeting with Catie",
                        Priority: "High"
                    }, {
                        Slot: 'LUNCH',
                        Day: "Fri",
                        Date: "03",
                        No: "2",
                        TimeFrom: "8:30",
                        TimeTo: "9:00",
                        Details: "Renew Policy Number 32456789",
                        Priority: "Low"
                    }, {
                        Slot: 'MEETING',
                        Day: "Fri",
                        Date: "03",
                        No: "3",
                        TimeFrom: "9:00",
                        TimeTo: "9:30",
                        Details: "Internal Meeting about Sales Force on 3rd Floor",
                        Priority: "High"
                    },

                ],

                itemIndex: -1,
                dashoardPanel: {
                    selectedItem: '',
                    optionList: items,
                    panelBodyData: [{
                        titleLabel: 'Logins',
                        amount1: 234000,
                        label1: 'Target',

                        amount2: 234000,
                        label2: 'Achieved',

                        amount3: 234000,
                        label3: 'Shortfall'
                    }, {
                        titleLabel: 'Issuance',

                        amount1: 234000,
                        label1: 'Target',

                        amount2: 234000,
                        label2: 'Achieved',

                        amount3: 234000,
                        label3: 'Shortfall'
                    }]
                },

                newsArray: [1, 2, 3, 4]
            }
        },

        computed: {
            panels() {
                return this.tabs.map(tab => ({
                    content: tab.productList
                }))
            },

            value() {
                if (this.itemIndex == -1) {
                    return "Choose..";
                } else if (this.itemIndex < this.dashoardPanel.optionList.length) {
                    return this.dashoardPanel.optionList[this.itemIndex];
                }
                return "";
            }
        },

        methods: {
            clearText() {
                this.searchText = '';
            },
            tab1() {
                this.tabone = true;
                this.tabtwo = false
                this.tabthree = false
                this.tabonedisable = true;
            },
            tab2() {
                this.tabtwo = true
                this.tabone = false,
                    this.tabthree = false
            },
            tab3() {
                this.tabthree = true
                this.tabone = false
                this.tabtwo = false
            },
            showSync() {
                this.notifications = false
                this.notifyDetails = false;
                this.sync = !this.sync
            },
            showNotifications() {

                this.sync = false,
                    this.notifyDetails = false
                this.notifications = !this.notifications
            },
            showMenu() {

                this.sync = false
                this.notifications = false
                this.notifyDetails = !this.notifyDetails
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            dropDownPicker() {
                picker.pick({
                        index: this.itemIndex,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.value = items[event.data];
                            this.itemIndex = event.data;
                        }
                    });
            }
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
    /*MY CODE*/
    /*Header Page*/
    .master-page-wrapper {
        padding-left: 10px;
        padding-right: 10px;
    }    
 
    
    .body-tab-content {
        border-bottom: 1px solid #ebebeb;
    }
    
 
    
    .row {
        flex-direction: row;
        padding-left: 15px;
    }
    

    
    .card-notification {
        /* position: absolute; */
        /* position: absolute; 
        top: 50px;
         right: 0; */
        /* flex-direction: l; */
        /* left: 0; */
        /* flex-direction: row; */
        align-items: 0px;
        width: 600px;
        z-index: 1;
        /* flex:1; */
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }
    
    .card-sync {
        /* width: 450px; */
        z-index: 1;
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }
    
    /* .card-head-title {
        font-size: 14px;
        font-weight: bold;
        width: 400px;
        font-family:robotoregular;
    } */
    
    /* .row1 {
        border-bottom: 1px solid #565656;
        padding-left: 30px;
    } */
    
    .news-box {
        width: 110px;
        height: 110px;
        margin-top: 20px;
    }
    
    /* .profile-det {
        width: 750px;
        padding: 10px;
    } */
    
    /* .card-head-title {
        font-size: 14px;
        font-weight: bold;
        width: 400px;
        font-family:robotoregular;
    } */
    
    /* .card-head-cust-title {
        font-size: 25px;
        font-weight: bold;
        color: #565656;
        font-family:robotoregular;
    } */
    
    /* .card-head-subtitle {
        font-size: 14px;
        color: #565656;
        font-family:robotoregular;
    } */
    
    /* .notify-box {
        width: 20px;
        height: 20px;
        margin-top: 20px;
    } */
    
    .cal-icn {
        height: 30px;
        width: 30px;
        margin-top: 5px;
    }
    
    /* .msg-icn {
        height: 20px;
        width: 20px;
        margin-top: 5px;
    } */
    
    .calendar-card-wraper {
        margin-top: 100px;
        height: 700px;
        padding: 10px;
    }
    
    .card {
        /* margin-top: 40px; */
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
    }
    
    .card-header {
        flex-direction: row;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .card-content {
        flex-direction: row;
        margin-top: 15px;
        margin-bottom: 15px;
        /* border-width: 1px;
      border-style: solid;
      border-top-color: #fff;
      border-left-color: #fff;
      border-right-color: #fff;
      border-bottom-color: #d8d8d8; */
    }
    
    .tab-head {
        font-size: 25px;
        font-family:robotoregular;
    }
    
    .tab-heading {
        margin-left: 20px;
    }
    
    .date {
        flex-direction: row;
    }
    
    .date-text {
        align-self: center;
    }
    
    .date-txt {
        font-size: 24px;
        margin-top: 6px;
        text-align: center;
        color: #434344;
        font-family:robotoregular;
    }
    
    .am-txt {
        padding: 10px;
        font-size: 18px;
        margin-top: 5px;
        color: #434343;
        font-family:robotoregular;
    }
    
    .AM {
        background-color: #f4f4f4;
    }
    
    .card-message {
        flex-direction: column;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d6d5d56b;
    }
    
    .card-msg-left {
        flex: 1;
        flex-direction: row;
        padding: 10px;
        align-items: center;
    }
    
    .date-slot {
        flex: 2;
    }
    
    .time-slot {
        flex: 2;
    }
    
    .sel {
        background-color: #d8d8d8;
    }
    
    .sub-heading {
        font-weight: bold;
        font-size: 25px;
        color: #565656;
        font-family:robotoregular;
    }
    
    .heading {
        font-size: 13px;
        color: #565656;
        font-family:robotoregular;
    }
    /* .scroller{
          height: 357px;
       } */
    /* Box class is used create 5px box fot insert
                content or itmes in this box 
            */
    /* .page-wrapper {
                flex-direction: row;
                justify-content: center;
                padding-left: 10px;
                padding-right: 10px;
                margin-left: 10%;
                margin-right: 10%;
            } */
    
    .box {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }
    /* This class is used to create columns inside 
            flex rows */
    
    .home-nx-flex-column {
        flex-direction: column;
    }
    
    .home-nx-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    /* text class convert font size: it is used for normal font size 14px */
    
    /* .text {
        font-size: 25px;
        font-family:robotoregular;
    }
    
    .news-footer-color {
        background-color: #117A65;
    }
    
    .news-body-color {
        background-color: #16A085;
    }
    /* Notification BELL CSS*/
    
    .tabbar {
        flex-direction: row;
        background-color: #d8d8d8;
    }
    
    .tab {
        height: 120px;
        width: 200px;
        justify-content: center;
        align-items: center;
    }
    
    .active {
        position: absolute;
        top: 0;
        left: 0;
        /*background-color: rgb(218, 59, 85);*/
        background-color: #f7f7f7;
        transition: left 0.2s ease-in-out;
    }
    
    .title {
        font-size: 20px;
        font-family:robotoregular;
    }
    
    .row-text {
        padding: 15px;
        flex: 1;
    }
    
    .h-border {
        border-width: 2px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #f1f0f0;
    }
    
    .card-line {
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    
    .row {
        flex-direction: row;
        padding-left: 15px;
    }
    
    .card-title {
        font-size: 18px;
        font-family:robotoregular;
    }
    
    .table-head-row {
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        padding: 10px;
    }
    
    .table-row {
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        padding: 10px;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #cccccc;
    }
    
    .card-btn1 {
        background-color: rgb(80, 80, 80);
        border-radius: 3px;
        margin-right: 5px;
        padding: 10px;
        justify-content: center;
        -webkit-box-pack: center;
    }
    
    .card-btn-text {
        color: #FFFFFF;
        font-size: 13px;
        text-align: center;
        font-family:robotoregular;
    }
    
    .note-card {
        flex: 1;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .notification-header {
        padding: 15px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #cccccc;
    }
    /* Box class is used create 5px box fot insert
            content or itmes in this box 
        */
    
    .page-wrapper {
        flex-direction: row;
        justify-content: center;
    }
    
    .box {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
    /* This class is used to create columns inside 
        flex rows */
    
    .home-nx-flex-column {
        flex-direction: column;
    }
    
    .home-nx-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .home-nx-flex-row-column {
        flex-direction: column;
    }
    
    .flex-box-size-01 {
        flex: 1;
    }
    
    .flex-box-size-02 {
        flex: 1.2;
    }
    
    .apply-width {
        width: 750px;
    }
    /* text wraper is used to wrap text when its gone beyond limit */
    
    .text-wrapper {
        lines: 3;
    }
    
    .panel-footer {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    .panel-small-text {
        /* This font size is used in panel footer "last syn" */
        font-size: 15px;
        font-style: italic;
        font-family:robotoregular;
    }
    
    .panel-heading-font {
        font-size: 30px;
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .panel-body-link-font-bold {
        /* It is used for links to be bold */
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .panel-label-font-12-px {
        /* panel label font size in dashboard panel */
        font-size: 20px;
        font-family:robotoregular;
    }
    
    .text {
        font-size: 24px;
        font-family:robotoregular;
    }
    /*margin*/
    
    .gap-btwn-two-section {
        margin-top: 25px;
    }
    
    .row-alignment {
        align-items: center;
    }
    
    .add-left-short-padding {
        /* This class is used to assign padding between value and status */
        padding-left: 10px;
    }
    
    .add-short-right-padding {
        padding-right: 10px;
    }
    
    .panel-footer-icon-size {
        height: 50px;
        width: 50px;
    }
    
    .panels-icon-positioning {
        position: absolute;
        right: 0px;
    }
    
    .panel-icon-size {
        width: 70px;
        height: 70px;
    }
    
    .news-box-style {
        background-color: #ffffff;
        margin-top: 25px;
        margin-right: 25px;
        margin-left: 25px;
    }
    
    .margin-onboarding {
        margin-top: 80px;
    }
    
    .gap-body-footer-margin-top {
        /* margin-top: 45px; */
    }
    
    .shadow {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
    }
    
    .margin-onboarding {
        margin-top: 80px;
    }
    /* All Required Dropdowns Classes */
    
    .drop-down {
        position: relative;
        border-width: 1px;
        border-style: solid;
        border-top-color: #2E86C1;
        border-right-color: #2E86C1;
        border-left-color: #2E86C1;
        border-bottom-color: #cccccc;
    }
    
    .dropDown-width {
        width: 350px;
    }
    
    .select-box {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .dropdown-icon {
        width: 25px;
        height: 25px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }
    
    .drop-arrow-pos {
        width: 30px;
        height: 30px;
        /* background-color: red; */
        position: absolute;
        top: 15px;
        right: 5;
    }
    
    .drop-item-list {
        /*z-index: 10;*/
        /*width: 50px;*/
        background: rgb(255, 255, 255);
        position: absolute;
        top: 50px;
        left: 0;
        width: 350px;
    }
    
    .list-item-padding {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
    /* Drop Down Code End Here */
    /* .news-content-width {
        width: 420px;
    } */
    
    .news-image-size {
        width: 110px;
        height: 110px;
    }
    
    .news-scroller {
        height: 270px;
        /* overflow: scroll; */
    }
    
    .news-btm-border {
        margin-bottom: 5px;
        margin-top: 5px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #ffffff;
        border-left-color: #ffffff;
        border-right-color: #ffffff;
        border-bottom-color: #e4e4e4;
    }
    
    .news-footer-color {
        background-color: #9600FF;
    }
    
    .news-body-color {
        background-color: #fff;
    }
    /* Color Classes */
    
    .dashboard-body-color {
            background-color: #fff;
    }
    .calendar-body-color{
         background-color: #fff;
    }
    .panel-footer-color{
        background-color: #212121;
    }
    .dashboard-color-footer {
        background-color: #00AEFF;
    }
    
    .app-body-color {
             background-color: #fff;
    }
    
    .app-body-footer {
         background-color: #FF3D00;
    }
    
    .presale-body-color {
            background-color: #fff;
    }
    
    .presale-body-footer {
        background-color: #F21A6D;
    }
    
    .on-boarding-body-footer-color {
        background-color: #F18E0D;
    }
    
    .on-boarding-body-color {
              background-color: #fff;
    }
    
    .cfr-body-color {
            background-color: #fff;
    }
    
    .cfr-footer-color {
        background-color: #A7249F;
    }
    
    .lead-mgmt-footer-color {
        background-color: #C3411F;
    }
    
    .lead-mgmt-body-color {
             background-color: #fff;
    }
    
    .club-body-color {
        background-color: #fff;
    }
    
    .club-footer-color {
        background-color: #1437F1;
    }
    
    .my-servec-footer-color {
        background-color: #D57521;
    }
    
    .my-servec-body-color {
            background-color: #fff;
    }
    
    .txt-clr-bgWhite {
        color:black;
    }
      .text-color-footer {
        color:#fff;
    }
    /* New Color for cards */
    
    .hs-lighgray-color {
        background-color: #d8d8d8;
    }
    /* Media query for mobile */
    
    .add-small-left-margin {
        margin-left: 15px;
    }
    
    .calender-listing-header {
        background-color: #f4f4f4;
        padding: 10px;
    }
    
    .calender-listing-header-text {
        font-size: 24px;
        font-weight: 700;
        font-family:robotoregular;
    }
    
    .home-custom-select-box {
        /* background-color: #2E86C1; */
        font-size: 25px;
        padding: 15px;
        color: black;
        border-width: 1px;
        border-style: solid;
        border-top-color: #d7d7d7;
        border-right-color: #d7d7d7;
        border-left-color: #d7d7d7;
        border-bottom-color: #d7d7d7;
        font-family:robotoregular;
    }
    
    .home-custom-select-box:focus {
        border-width: 4px;
        border-bottom-color: #3b371e;
    }
    
    .bg-white-color {
        background-color: #FFF;
    }
    
    .activity-tabs-paddding {
        padding-top: 25px;
        padding-bottom: 25px;
    }
    
    .card-message {
        flex-direction: column;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #f1f1f1;
    }
    
    .dt-text-align-left {
        text-align: left;
    }
    
    @media (min-width: 320px) {
        /* Added by usama */
        .home-custom-select-box {
            font-size: 15px;
            padding: 5px;
            border-width: 1px;
            width: 200px;
        }
        .home-custom-select-box:focus {
            border-width: 2px;
        }
        .calender-listing-header {
            background-color: #f4f4f4;
            padding: 5px;
        }
        .calender-listing-header-text {
            font-size: 14px;
            font-weight: 600;
            font-family:robotoregular;
        }
        .card-content {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .card-message {
            border-bottom-color: #d6d5d56b;
        }
        /* ------------- */
        .img-row {
            margin-top: 3px;
            justify-content: center
        }
        .hide-mb {
            display: none;
        }
        /* .card-notify {
        
            align-items: 0px;
            width: 180px;
            z-index: 1;
            margin: 20px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 10px;
        } */
        .card-head-cust-title {
            font-size: 14px;
            font-weight: bold;
            color: #565656;
            font-family:robotoregular;
        }
        .hide-sm {
            display: none;
        }
        .card-headerline {
            background-color: #3b371e;
            height: 50px;
            padding: 10px;
        }
        .row {
            flex-direction: row;
            padding-left: 15px;
        }

        .apply-width {
            width: 100%;
        }
        .calendar-card-wraper {
            margin-top: 40px;
            height: 440px;
            padding: 2px;
            overflow: auto;
        }
        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        .news-box-style {
            background-color: #ffffff;
            margin-top: 10px;
            margin-right: 10px;
            margin-left: 10px;
        }
        .box-wrapper {
            flex: 1;
        }
        .home-nx-flex-row-column {
            flex-direction: column;
        }
        .panel-small-text {
            /* This font size is used in panel footer "last syn" */
            font-size: 10px;
            font-style: italic;
            font-family:robotoregular;
        }
        .panel-body-link-font-bold {
            /* It is used for links to be bold */
            font-weight: bold;
            font-family:robotoregular;
        }
        .add-left-short-padding {
            /* This class is used to assign padding between value and status */
            padding-left: 5px;
        }
        .news-content-width {
            width: 220px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .panel-top-icon-position {
            position: absolute;
            top: 8px;
            right: 18px;
        }
        .panel-icon-size {
            width: 30px;
            height: 30px;
        }
        /* this scroller only work in web versions not in apk */
        .news-scroller {
            height: 149px;
            overflow: auto;
        }
        /* All Required Dropdowns Classes */
        .drop-down {
            position: relative;
            border-width: 1px;
            border-style: solid;
            border-top: none;
            border-right: none;
            border-left: none;
            border-bottom-color: #cccccc;
        }
        .dropDown-width {
            width: 150px;
        }
        .select-box {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 5px;
            padding-right: 5px;
        }
        .dropdown-icon {
            width: 20px;
            height: 20px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }
        .drop-arrow-pos {
            width: 20px;
            height: 20px;
            /* background-color: red; */
            position: absolute;
            top: 6px;
            left: 89%;
        }
        .drop-item-list {
            z-index: 4;
            min-width: 100%;
            background: rgb(255, 255, 255);
            position: absolute;
            top: 30px;
            left: 0;
            /* width: 100%; */
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .list-item-padding {
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px;
        }
        /* Drop Down Code End Here */
        /* This class is used for panel heading font size */
        .panel-heading-font {
            font-size: 16px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .panel-footer {
            padding-left: 7px;
            padding-right: 7px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .panel-footer-icon-size {
            height: 24px;
            width: 24px;
        }
        /* 01 indicate size of flex */
        .flex-box-size-01 {
            flex: 1;
        }
        .flex-box-size-02 {
            flex: 1.2;
        }
        /* news images size*/
        .news-image-size {
            width: 70px;
            height: 70px;
        }
        /* Some Icon not required row there for I am using positioning*/
        .panels-icon-positioning {
            position: absolute;
            right: 0px;
        }
        /* here margin is used for gap between header icon and row */
        .gap-btwn-two-section {
            margin-top: 10px;
        }
        .margin-onboarding {
            margin-top: 80px;
        }
        .gap-body-footer-margin-top {
            /* margin-top: 45px; */
        }
        .add-short-right-padding {
            padding-right: 5px;
        }
        .add-icon-left-border {
            border-left: 1px solid #ffffff;
        }
        .text {
            font-size: 14px;
            font-family:robotoregular;
        }
        .input {
            display: block;
     
            font-size: 14px;
            height: 30px;
            
background-color: transparent;
border-top: none;
border-right: none;
border-left: none;
border-image: initial;
border-bottom: 1px solid #efe9e9;
color: rgb(255, 255, 255);
            /* padding: 15px; */
            /* margin-bottom:20px; */
            /* color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family:robotoregular; */
        }
        /* Club and contest 13-040-18*/
        .add-small-left-margin {
            margin-left: 10px;
        }
        /* Font-size */
        .date-txt {
            font-size: 16px;
            margin-top: 6px;
            font-family:robotoregular;
            /* text-align: center; */
        }
        .panel-label-font-12-px {
            /* panel label font size in dashboard panel */
            font-size: 12px;
            font-family:robotoregular;
        }
        .activity-tabs-paddding {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .tab-heading {
            margin-left: 15px;
        }
        .tab-head {
            font-size: 15px;
            font-family:robotoregular;
        }
    }
    
    @media (min-width: 768px) {
        .hide-mb {
            display: inline-flex;
        }
        /* .card-notify { */
            /* position: absolute; */
            /* position: absolute; 
        top: 50px;
         right: 0; */
            /* flex-direction: l; */
            /* left: 0; */
            /* flex-direction: row; */
            /* align-items: 0px;
            width: 250px;
            z-index: 1; */
            /* flex:1; */
            /* margin: 20px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 10px; */
        /* } */
        .hide-sm {
            display: block;
        }
        .menu-position {
            justify-content: center;
        }
        /* display: block;
             background-color: #fff;
             font-size: 14px;
             height: 30px; */
        /* padding: 15px; */
        /* margin-bottom:20px; */
        /* color: #666666;
             border-width: 2px;
             border-top: none;
             border-style: solid;
             border-top-color: #fff;
             border-right-color: #fff;
             border-left-color: #fff;
             border-bottom-color: #c7c7c7;
             placeholder-color:#9d9d9d; */
        /* .input:focus {
             border-width: 4px;
             border-bottom-color: #2e4053;
         } */
        .card-headerline {
            background-color: #3b371e;
            height: 50px;
            padding: 10px;
        }
        .row {
            flex-direction: row;
            padding-left: 15px;
        }
        /* .ham-logo {
            height: 20px;
            width: 25px;
        } */
        .home-nx-flex-row-column {
            flex-direction: column;
        }
        /* this class change direction from column to row */
        .home-nx-flex-column-row {
            flex-direction: row;
            /* flex-wrap: wrap; */
        }
        .home-nx-margin-left {
            margin-left: 5px;
        }
        .home-nx-margin-right {
            margin-right: 5px;
        }
        .news-content-width {
            width: 320px;
        }
    }
    
    @media (min-width: 992px) {
        /* Normally it is used for fixed items in center */
        /* .table-row{
            border-bottom: 1px solid #cccccc
        } */
        .page-wrapper {
            flex-direction: row;
            justify-content: center;
        }
        .home-nx-flex-row-column {
            flex-direction: row;
        }
        .home-nx-flex-column-row {
            flex-direction: column;
        }
        .panel-footer {
            padding-left: 7px;
            padding-right: 7px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .panel-heading-font {
            font-size: 16px;
            font-family:robotoregular;
        }
        /* Width is used to extends size of row */
        .apply-width {
            padding-left: 30px;
            padding-right: 30px;
        }
        .home-nx-margin-left {
            margin-left: 0;
        }
        .home-nx-margin-right {
            margin-right: 0;
        }
        .news-content-width {
            width: 220px;
        }
        .list-item-padding:active {
            background: #dadada;
        }
        .list-item-padding:hover {
            background: #dadada;
        }
        /* .date-txt {
            font-size: 12px;
            margin-top: 6px;
            text-align: center;
        } */
        .click-event-cursor {
            cursor: pointer;
        }

        /* New Classes  30-04-2018 - Calendar heigth puropos*/

        .home-calendar-new-height {
            height: 537px;
        }
        .home-calendar-footer-height {
            height: 453px;
        }


    }
</style>