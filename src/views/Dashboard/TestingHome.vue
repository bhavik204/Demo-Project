<template>
    <div>
        <!-- <mobile-header v-if="platform !=='Web'"></mobile-header> -->
        <scroller>
            <div class="master-page-wrapper" style="background-color:#F7F7F7;margin-top:10px;">

                <div class="box-wrapper">

                    <!-- Flex Row -->
                    <div class="home-nx-flex-row home-nx-flex-row-column">
                        <!-- Flex Column inside flex row -->
                        <div class="box flex-box-size-01">
                            <div class="home-nx-flex-column">
                                <!-- Dashboard Panel -->
                                <div class="dashboard-body-color home-crd-bdr-radius shadow">
                                    <!-- Flex row for dropdown and Icon -->
                                     <!-- Panel footer -->
                                        <div class="panel-footer dashboard-color-footer">
                                            <div class="home-nx-flex-row row-alignment">
                                        
                                                <div  v-if="platform==='Web'" class="flex-box-size-01" @click.native ="jump('/homeinside')">
                                                    <text class="panel-heading-font home-content-white-color click-event-cursor">BUSINESS</text>
                                                </div>

                                                <div  v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/homeinside')">
                                                    <text class="panel-heading-font home-content-white-color">BUSINESS</text>
                                                </div> 
                                                <div class="add-short-right-padding">
                                                    <!-- <div class="home-nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                        </div>
                                                    </div> -->
                                                </div>
                                                <!-- Dashboard-->
                                                <div class="add-left-short-padding">
                                                    <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/action/dashboard_white_36x36.png"></image>
                                                </div>
                                            </div>
                                        </div>
                                    <!-- Panel Header -->
                                    <div class="">
                                        <div class="box">
                                            <!-- DropDown List-->

                                            <div class="home-nx-flex-row">
                                            
                                                <div class="flex-box-size-01">
                                                    <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker()">
                                                        <text class="home-nrml-fnt select-box mouse-pointer home-content-white-color">{{ value }}</text>
                                                        <div class="drop-arrow-pos">
                                                            <image class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_24x24.png"></image>
                                                        </div>
                                                    </div>
                                                    <div v-if="platform == 'Web'">
                                                        <select class="home-custom-select-box dashboard-body-color" v-model="dashoardPanel.selectedItem" @change="onSelectedEvent(dashoardPanel.selectedItem)">
                                                            <option  value="Year to Date" class="bg-white-color">Year to Date</option>
                                                            <option  value="Month to Date" class="bg-white-color">Month to Date</option>
                                                            <option  value="Goal Sheet to Date" class="bg-white-color">Goal Sheet to Date</option>
                                                            <option  value="Week to Date" class="bg-white-color">Week to Date</option>
                                                            <option  value="Today" class="bg-white-color">Today</option>
                                                            <option  value="T-1" class="bg-white-color">T-1</option>
                                                            
                                                            <!-- <option v-for="(listItem, li) in dashoardPanel.optionList" :key="li" class="bg-white-color"> {{listItem}} </option> -->
                                                        </select>                            
                                                    </div>
                                                </div>
                                                <!-- For Icon -->
                                                <div class="box">
                                                    <!-- Header ICON Position is absolute -->
                                                    <!-- <div class="panel-icon-size">
                                                        <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/dashboard_white_36x36.png"></image>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                        <div v-for="(values, val) in dashoardPanel.panelBodyData" :key="val">
                                            <div class="box gap-btwn-two-section">
                                                <!-- Panel body have one flex row and inside columns -->

                                                <div class="home-nx-flex-row">
                                                    <div class="box flex-box-size-02">
                                                        <text class="panel-label-font-12-px home-content-white-color large-text">{{values.titleLabel}}</text>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="home-nrml-fnt home-content-white-color large-text">₹ {{values.amount1}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px home-content-white-color large-text">{{values.label1}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="home-nrml-fnt  home-content-white-color large-text">₹ {{values.amount2}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px home-content-white-color large-text">{{values.label2}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="home-nx-flex-column">
                                                            <div>
                                                                <text class="home-nrml-fnt  home-content-white-color large-text">₹ {{values.amount3}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px home-content-white-color large-text">{{values.label3}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                       <!-- panel place -->


                                        <!--  -->
                                    </div>

                                </div>
                                <!-- Dashboard End Here -->

                                <!-- Calendar Shown here -->
                                <div class="home-crd-bdr-radius gap-btwn-two-section shadow home-calendar-new-height" style="background-color: rgb(72, 102, 132);">
                                    <div class="panel-footer" style="background-color:#23425e;">
                                        <div class="home-nx-flex-row row-alignment">
                                            <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('calendar')">
                                                <text class="panel-heading-font home-content-white-color click-event-cursor">ACTIVITIES</text>
                                            </div>

                                            <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('#')">
                                                <text class="home-nrml-fnt home-content-white-color click-event-cursor">4 Activities Today</text>
                                            </div>

                                            <div v-if="platform !=='Web'"  class="flex-box-size-01" @click="jump('/calendar')">
                                                <text class="panel-heading-font home-content-white-color ">ACTIVITIES</text>
                                            </div> 
                                            <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('#')">
                                                <text class="home-nrml-fnt home-content-white-color click-event-cursor">4 Activities Today</text>
                                            </div>
                                            <div class="add-short-right-padding">
                                                <div class="home-nx-flex-column">
                                                    <!-- <div>
                                                        <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!-- Refresh ICON -->
                                            <div class="add-left-short-padding">
                                                <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/action/date_range_white_192x192.png"></image>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <div class="box panels-icon-positioning">
                                        <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/date_range_white_192x192.png"></image>
                                    </div> -->
                                    <div class="calendar-main-pg-card-wraper home-calendar-footer-height">
                                        <div>
                                            <div class="main-pg-card">
                                                <div class="main-pg-card-header" v-if="deviceWidth > 750">
                                                    
                                                    <div class="activity-tabs-paddding hme-tab-active" :style="{ left: tabActive * (120 * 1024 / deviceWidth)  + 'px'}"></div>
                                
                                                    <div v-for="(tab, i) in activityTabs" :key="i" class="activity-tabs-paddding" @click.native="tabActive = i">
                                                        <text class="tab-head">{{ tab }}</text>
                                                    </div>
                                                    <!-- <div class="tab-heading activity-tabs-paddding">
                                                        <text class="tab-head">Month</text>
                                                    </div>
                                                    <div class="tab-heading activity-tabs-paddding">
                                                        <text class="tab-head">Week</text>
                                                    </div>
                                                    <div class="tab-heading activity-tabs-paddding">
                                                        <text class="tab-head">Day</text>
                                                    </div> -->
                                                </div>
                                                <div class="main-pg-card-content">
                                                    <div class="date">
                                                        <div>
                                                            <!-- class name : cal-icn -->
                                                            <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_black_192x192.png"></image>
                                                        </div>
                                                        <div class="date-text">
                                                            <text class="date-txt"> JUNE 2016</text>
                                                        </div>
                                                        <div>
                                                            <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png"></image>
                                                        </div>
                                                        <div>
                                                            <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/action/date_range_black_192x192.png"></image>
                                                        </div>
                                                    </div>
                                                </div>
                                                <scroller class="scroller">
                                                    <div v-for="(appt,pi) in appointment" :key="pi">

                                                        <div class="calender-listing-header">
                                                            <text class="am-txt calender-listing-header-text">{{appt.Slot}}</text>
                                                        </div>
                                                        <div class="main-pg-card-message" v-for="(calen,index) in form" :key="index">
                                                            <div class="main-pg-card-msg-left">
                                                                <div class="date-slot" style="flex:1">
                                                                    <div style="background-color:#5da5c0" class="box">
                                                                        <text class="date-txt panel-label-font-12-px home-content-white-color">{{moment(calen.start_date).format('ddd')}}}</text>
                                                                    </div>
                                                                    <div style="background-color:#f4f4f4" class="box">
                                                                        <text class="date-txt panel-label-font-12-px">{{moment(calen.start_date).format('Do')}}</text>
                                                                    </div>
                                                                </div>
                                                                <div class="time-slot" style="flex:2">
                                                                    <div>
                                                                        <text class="date-txt panel-label-font-12-px">{{moment(calen.start_time).format('LT')}}</text>
                                                                    </div>
                                                                    <div>
                                                                        <text class="date-txt panel-label-font-12-px">To</text>
                                                                    </div>
                                                                    <div>
                                                                        <text class="date-txt panel-label-font-12-px">{{moment(calen.end_time).format('LT')}}</text>
                                                                    </div>
                                                                </div>
                                                                <div class="meeting-list" style="flex:5;flex-direction:column;justify-content: center" @click="dropDetails(index,pi)">
                                                                    <text class="date-txt dt-text-align-left panel-label-font-12-px click-event-cursor">{{calen.event_description}}</text>

                                                                </div>
                                                            </div>

                                                            <div style="flex-direction:column">
                                                                <div v-if="showDetails==true">
                                                                    <text style="color:black" class="date-txt panel-label-font-12-px">{{calen.event_description}}</text>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </scroller>


                                            </div>
                                        </div>
                                    </div>
                                    <!-- Footer -->
                                    
                                </div>


                                <!-- End -->

                               

                                

    
                            </div>
                        </div>


                        <!-- Second Column -->
                        <div class="box flex-box-size-01">
                            <div class="home-nx-flex-column">
                                

                                <!-- Wrapper -->
                                <div class="home-nx-flex-column home-nx-flex-column-row">
                                    <!--  -->
                                    <div class="presale-body-color home-crd-bdr-radius shadow flex-box-size-01 home-nx-margin-left">
                                        <div class="panel-footer presale-body-footer">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/productmaster/protection')">
                                                    <text class="panel-heading-font home-content-white-color click-event-cursor large-text">SALES GUIDE</text>
                                                </div>

                                                <div  v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/productmaster/protection')">
                                                    <text class="panel-heading-font home-content-white-color  large-text">SALES GUIDE</text>
                                                </div> 
                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <!-- <div>
                                                            <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding">
                                                    <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/action/timeline_white_36x36.png"></image>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="home-nx-flex-column">
                                            <!-- <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/timeline_white_36x36.png"/>
                                            </div> -->

                                            <!-- Panel body -->

                                            <!-- Panel body have one flex row and inside columns -->

                                            <div class="hme-lft-ght-n-pad gap-btwn-two-section hme-sales-g-c-p-b">
                                                <div class="home-nx-flex-row">
                                                    <div v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/masterpresales/customerdetails/presentation')">
                                                        <text class="home-nrml-fnt  home-content-white-color large-text  click-event-cursor">Sales Pitch</text>
                                                    </div>

                                                    <div v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/masterpresales/customerdetails/presentation')">
                                                        <text class="home-nrml-fnt  home-content-white-color large-text">Sales Pitch</text>
                                                    </div> 
                                                    <div v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/masteronboard/advisordetails/official')">
                                                        <text class="home-nrml-fnt  home-content-white-color large-text  click-event-cursor">Advisor Onboarding</text>
                                                    </div>

                                                    <div v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/masteronboard/advisordetails/official')">
                                                        <text class="home-nrml-fnt  home-content-white-color large-text">Advisor Onboarding</text>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div class="hme-lft-ght-n-pad gap-btwn-two-section">
                                                <div class="home-nx-flex-row">
                                                    <div v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/masterpresales/advisordetail/aptest')">
                                                        <text class="home-nrml-fnt  home-content-white-color click-event-cursor large-text">Recruitment Presentation</text>
                                                    </div>
                                                    <div  v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/masterpresales/advisordetail/aptest')">
                                                        <text class="home-nrml-fnt home-content-white-color  large-text">Recruitment Presentation</text>
                                                    </div>
                                                    <div  v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/mastercalculator/calculatorhuman')">
                                                        <text class="home-nrml-fnt  home-content-white-color click-event-cursor large-text">Need Analysis</text>
                                                    </div>
                                                    <div  v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/mastercalculator/calculatorhuman')">
                                                        <text class="home-nrml-fnt  home-content-white-color  large-text">Need Analysis</text>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- new two links are added -->

                                            <div class="hme-lft-ght-n-pad gap-btwn-two-section">
                                                <div class="home-nx-flex-row">
                                                    <div v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/productmaster/protection')">
                                                        <text class="home-nrml-fnt  home-content-white-color click-event-cursor large-text">Product</text>
                                                    </div>
                                                    <div  v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/productmaster/protection')">
                                                        <text class="home-nrml-fnt home-content-white-color  large-text">Product</text>
                                                    </div>
                                                    <div  v-if="platform==='Web'" class="box flex-box-size-01" @click.native="jump('/masterpresales/resourcedetails/customer')">
                                                        <text class="home-nrml-fnt  home-content-white-color click-event-cursor large-text">Resource Center</text>
                                                    </div>
                                                    <div  v-if="platform !=='Web'" class="box flex-box-size-01" @click="jump('/masterpresales/resourcedetails/customer')">
                                                        <text class="home-nrml-fnt  home-content-white-color  large-text">Resource Center</text>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- Panel footer -->

                                            <!--  -->
                                        </div>
                                    </div>

                                    <!--  -->
                                    <!-- My Services -->
                                    <!-- cfr -->
                                <div class="gap-btwn-two-section cfr-body-color home-crd-bdr-radius shadow flex-box-size-01 home-nx-margin-left">
                                    <div class="panel-footer cfr-footer-color">
                                        <div class="home-nx-flex-row row-alignment">
                                            <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/cfrmaster/cfrall')">
                                                <text class="panel-heading-font home-content-white-color click-event-cursor">APPLICATIONS</text>
                                            </div>

                                            <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/cfrmaster/cfralls')">
                                                <text class="panel-heading-font home-content-white-color ">APPLICATIONS</text>
                                            </div>

                                            <div class="add-short-right-padding">
                                                <div class="home-nx-flex-column">
                                                    <!-- <div>
                                                        <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!-- Refresh ICON -->
                                            <div class="add-left-short-padding">
                                                <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/navigation/apps_white_36x36.png"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-nx-flex-column">
                                        <!-- <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"></image>
                                        </div> -->

                                        <div class="box">
                                            <!-- <div class="home-nx-flex-row gap-btwn-two-section " style="align-items: center;">
                                                <div class="box">
                                                    <text class="panel-heading-font  home-content-white-color"></text>
                                                </div>
                                                <div>
                                                    <text class="home-content-white-color panel-label-font-12-px ">New</text>
                                                </div>
                                            </div> -->
                                            <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">

                                               

                                                <div v-if="platform ==='Web'" class="home-nx-flex-row flex-box-size-01" style="align-items: center;" @click.native="jump('/app_list_master/app_all')">
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">5</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color home-content-white-color click-event-cursor">Open</text>
                                                    </div>
                                                </div>
                                                <div v-if="platform ==='Web'" class="home-nx-flex-row flex-box-size-01" style="align-items: center;"  @click.native="jump('/cfrmaster/cfrall')">
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">7</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color add-left-short-padding click-event-cursor">CFR</text>
                                                    </div>
                                                </div>

                                                <div v-if="platform ==='Web'" class="home-nx-flex-row flex-box-size-01" style="align-items: center;"  @click.native="jump('/candidatelist/candiall')">
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">25</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color add-left-short-padding click-event-cursor">Recruitment</text>
                                                    </div>

                                                </div>

                                                <!-- Apk Section -->
                                                  <div v-if="platform !=='Web'" class="home-nx-flex-row flex-box-size-01" style="align-items: center;" @click.native="jump('/app_list_master/app_all')">
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">5</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color home-content-white-color click-event-cursor">Open</text>
                                                    </div>
                                                </div>
                                                <div v-if="platform !=='Web'" class="home-nx-flex-row flex-box-size-01" style="align-items: center;"  @click.native="jump('/cfrmaster/cfrall')">
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">7</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color add-left-short-padding click-event-cursor">CFR</text>
                                                    </div>
                                                </div>

                                                <div v-if="platform !=='Web'" class="home-nx-flex-row flex-box-size-01" style="align-items: center;"  @click.native="jump('/candidatelist/candiall')">
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">25</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color add-left-short-padding click-event-cursor">Recruitment</text>
                                                    </div>

                                                </div>  
                                                    
                         
                                            </div>
                                        </div>

                                        <!-- Panel footer -->

                                        <!--  -->
                                       
                                    </div>
                                </div>
                                <!-- cfr end -->
                                    


                                   
                                </div>

                                 <!-- CLUBS AND CONTESTS -->
                                    <div class="gap-btwn-two-section club-body-color home-crd-bdr-radius shadow ">
                                        <div class="panel-footer club-footer-color">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div class="flex-box-size-01 click-event-cursor" @click="jump('/mastercontests/contestmas')">
                                                    <text class="panel-heading-font home-content-white-color click-event-cursor">R&R CORNER</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <!-- <div class="home-nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                        </div>
                                                    </div> -->
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding">
                                                    <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/action/card_membership_white_192x192.png"></image>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="home-nx-flex-column">
                                            <!-- <div class="box panels-icon-positioning click-event-cursor">
                                                <image class="panel-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"/>
                                            </div> -->

                                            <!-- Panel body -->

                                            <!-- Panel body have one flex row and inside columns -->
                                            <div class="home-nx-flex-row box">
                                                <div v-if="platform ==='Web'" class="box gap-btwn-two-section click-event-cursor flex-box-size-01">
                                                    <text class="home-nrml-fnt home-content-white-color click-event-cursor" @click.native="jump('mastercontests/contestmas')">Contests</text>
                                                </div>
                                                <div v-if="platform !=='Web'" class="box gap-btwn-two-section flex-box-size-01">
                                                    <text class="home-nrml-fnt home-content-white-color " @click="jump('/mastercontests/contestmas')">Contests</text>
                                                </div>

                                                <div v-if="platform==='Web'" class="box gap-btwn-two-section click-event-cursor flex-box-size-01">
                                                        <text class="home-nrml-fnt home-content-white-color click-event-cursor" @click.native="jump('/clubsmaster/allclubs')">Clubs </text>
                                                    </div>
                                                    <div v-if="platform !=='Web'" class="box gap-btwn-two-section  flex-box-size-01">
                                                        <text class="home-nrml-fnt home-content-white-color" @click="jump('/clubsmaster/allclubs')">Clubs</text>
                                                    </div>

                                            </div>

                                            
                                            <!-- hide becouse we need to decrease height by himanshu sir -->
                                            <!-- <div class="box gap-btwn-two-section">

                                            </div> -->


                                            <!-- Panel footer -->
                                           
                                        </div>
                                    </div>
                                    <!-- CLUBS AND CONTESTS -->

                                 

                                <!-- News and Updates -->

                                <div class="news-body-color gap-btwn-two-section home-crd-bdr-radius shadow">
                                    <div class="panel-footer news-footer-color">
                                        <div class="home-nx-flex-row row-alignment">
                                            <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/news')">
                                                <text class="panel-heading-font home-content-white-color click-event-cursor large-text">NEWS AND UPDATES</text>
                                            </div>

                                            <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/news')">
                                                <text class="panel-heading-font home-content-white-color  large-text">NEWS AND UPDATES</text>
                                            </div>
                                            <div class="add-short-right-padding">
                                                <div class="home-nx-flex-column">
                                                    <!-- <div>
                                                        <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!-- Refresh ICON -->
                                            <div class="add-left-short-padding click-event-cursor">
                                                <image class="panel-footer-icon-size click-event-cursor" src="https://www.materialui.co/materialIcons/action/chrome_reader_mode_white_192x192.png"></image>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-nx-flex-column">
                                        <!-- <div class="box panels-icon-positioning">
                                            <text class="home-nrml-fnt home-content-white-color box">View All</text>
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
                                                            <image class="news-image-size" src="http://salesdrive.iorta.in/img/dashboard/news.jpg"></image>
                                                        </div>
                                                        <!-- Content -->
                                                        <div class="add-small-left-margin" style="flex:1">
                                                            <!-- news title -->
                                                            <div class="box">
                                                                <text class="panel-label-font-12-px ">Big changes in retirement</text>
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
                                        
                                    </div>
                                </div>


                                


                            </div>
                        </div>

                        <!-- Third  -->
                        <div class="box flex-box-size-01">
                            <div class="home-nx-flex-column">
                                
                                <!--  -->
                                 <!-- LEAD Management -->
                                <div class="lead-mgmt-body-color home-crd-bdr-radius shadow">
                                    <div class="panel-footer lead-mgmt-footer-color gap -body-footer-margin-top">
                                        <div class="home-nx-flex-row row-alignment">
                                            <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/leadMaster/all_leads')">
                                                <text class="panel-heading-font home-content-white-color click-event-cursor large-text">ACTIVITY MANAGEMENT</text>
                                            </div>

                                            <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/leadMaster/all_leads')">
                                                <text class="panel-heading-font home-content-white-color  large-text">ACTIVITY MANAGEMENT</text>
                                            </div>
                                            <div class="add-short-right-padding">
                                                <div class="home-nx-flex-column">
                                                    <!-- <div>
                                                        <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!-- Refresh ICON -->
                                            <div class="add-left-short-padding">
                                                <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/social/person_white_36x36.png"></image>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-nx-flex-column">
                                        <!-- <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_white_36x36.png"></image>
                                        </div> -->

                                        <div class="box">
                                            <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                <div class="box">
                                                    <text class="panel-heading-font  home-content-white-color">25</text>
                                                </div>
                                                <div>
                                                    <text class="home-content-white-color panel-label-font-12-px">New</text>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel footer -->

                                        <!--  -->
                                    </div>
                                </div>
                                <!--  -->
                                <div class="home-nx-flex-column home-nx-flex-column-row">
                                    <!-- Application -->
                                    <div class="app-body-color gap-btwn-two-section home-crd-bdr-radius shadow flex-box-size-01 home-nx-margin-right">
                                        <div class="panel-footer app-body-footer ">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div v-if="platform === 'Web'" class="flex-box-size-01" >
                                                    <text class="panel-heading-font home-content-white-color  click-event-cursor">CUSTOMERS</text>
                                                </div>

                                                <div  v-if="platform !=='Web'" class="flex-box-size-01" >
                                                    <text class="panel-heading-font home-content-white-color">CUSTOMERS</text>
                                                </div> 
                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <!-- <div>
                                                            <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding">
                                                    <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/social/group_white_192x192.png"></image>
                                                </div>
                                            </div>
                                        </div>

                                        <!--  -->
                                        <div class="home-nx-flex-column">
                                            <!-- <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/navigation/apps_white_36x36.png"></image>
                                            </div> -->

                                            <!-- Panel body -->
                                            <div class="box gap-btwn-two-section">
                                                <!-- Panel body have one flex row and inside columns -->

                                                <div class="home-nx-flex-row">

                                                    <div class="box flex-box-size-01">

                                                        <div class="home-nx-flex-column">
                                                            <div v-if="platform==='Web'"  @click.native="jump('/RenewalMaster/renewalall')">
                                                                <text class="home-nrml-fnt  home-content-white-color click-event-cursor">Renewals</text>
                                                            </div>

                                                            <div v-if="platform !=='Web'" @click="jump('/RenewalMaster/renewalall')">
                                                                <text class="home-nrml-fnt  home-content-white-color">Renewals</text>
                                                            </div> 
                                                            <div>
                                                                <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                                    <div class="gap-btwn-two-section">
                                                                        <text class="panel-heading-font  home-content-white-color">25</text>
                                                                    </div>
                                                                    <div class="add-left-short-padding  gap-btwn-two-section">
                                                                        <text class="home-content-white-color panel-label-font-12-px">New</text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
 
                                                    <div class="box flex-box-size-01">
                                                        <!-- <text class="home-nrml-fnt">{{values.titleLabel}}</text> -->
                                                        <div  class="home-nx-flex-column">
                                                            <div v-if="platform ==='Web'" @click.native="jump('/app_list_master/app_all')">
                                                                <text class="home-nrml-fnt home-content-white-color large-text click-event-cursor">Customers</text>
                                                            </div>

                                                            <div v-if="platform !=='Web'" @click="jump('/app_list_master/app_all')">
                                                                <text class="home-nrml-fnt home-content-white-color large-text">Customers</text>
                                                            </div> 
                                                            <div>
                                                                <div class="home-nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                                    <div class="gap-btwn-two-section">
                                                                        <text class="panel-heading-font home-content-white-color">25</text>
                                                                    </div>
                                                                    <div class="add-left-short-padding  gap-btwn-two-section">
                                                                        <text class="home-content-white-color panel-label-font-12-px">New</text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!-- Body End -->
                                                </div>
                                            </div>

                                            <!-- Panel footer -->

                                            <!--  -->
                                        </div>

                                    </div>
                                    <!-- Application End Here -->

                                    <!-- Pre Sale Tool -->
                                    <div class="gap-btwn-two-section my-servec-body-color home-crd-bdr-radius shadow flex-box-size-01 home-nx-margin-right" style="background-color:#189096">
                                        <div class="panel-footer my-servec-footer-color" style="background-color:#2E777B">
                                            <div class="home-nx-flex-row row-alignment">
                                                <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/masterservice/serviceall')">
                                                    <text class="panel-heading-font home-content-white-color click-event-cursor">SERVICE CORNER</text>
                                                </div>

                                                <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/masterservice/serviceall')">
                                                    <text class="panel-heading-font home-content-white-color ">SERVICE CORNER</text>
                                                </div>

                                                <div class="add-short-right-padding">
                                                    <div class="home-nx-flex-column">
                                                        <!-- <div>
                                                            <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding">
                                                    <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/action/description_white_192x192.png"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="home-nx-flex-column">
                                            <!-- <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"/>
                                            </div> -->

                                            <!-- <div class="box gap-btwn-two-section">
                                                <text class="home-nrml-fnt  home-content-white-color box click-event-cursor">Request</text>
                                            </div> -->
                                            <div class="box gap-btwn-two-section">
                                                <div class="home-nx-flex-row" style="align-items: center;">
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color">25</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color home-content-white-color">WIP</text>
                                                    </div>
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">10</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color add-left-short-padding click-event-cursor">Closed</text>
                                                    </div>
                                                    <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color click-event-cursor">12</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px home-content-white-color add-left-short-padding click-event-cursor">Not Verified</text>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="box gap-btwn-two-section ">
                                                <text class="home-nrml-fnt  home-content-white-color box click-event-cursor">Downloads</text>
                                            </div> -->
                                            <!-- Panel footer -->
                                            

                                            <!--  -->
                                        </div>

                                    </div>
                                    <!-- Pre sale tool end here -->
                                </div>
                                 <!-- ONBOARDING -->
                                <div class="gap-btwn-two-section on-boarding-body-color home-crd-bdr-radius shadow">
                                    <div class="panel-footer on-boarding-body-footer-color">
                                        <div class="home-nx-flex-row row-alignment">
                                            <div v-if="platform==='Web'" class="flex-box-size-01" @click.native="jump('/birthdaymaster/birthtoday')">
                                                <text class="panel-heading-font home-content-white-color click-event-cursor large-text">BIRTHDAYS</text>
                                            </div>

                                            <div v-if="platform !=='Web'" class="flex-box-size-01" @click="jump('/birthdaymaster/birthtoday')">
                                                <text class="panel-heading-font home-content-white-color  large-text">BIRTHDAYS</text>
                                            </div> 
                                            <div class="add-short-right-padding">
                                                <div class="home-nx-flex-column">
                                                    <!-- <div>
                                                        <text class="panel-small-text home-content-white-color">Last Synced</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-small-text home-content-white-color">13 hours ago</text>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!-- Refresh ICON -->
                                            <div class="add-left-short-padding">
                                                <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/social/cake_white_192x192.png"></image>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-nx-flex-column">
                                        <!-- <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_add_white_36x36.png"></image>
                                        </div> -->

                                        <div class="box">
                                            <div class="gap-btwn-two-section" >

                                                <div ref="test" class="birth-continer-crd">
                                                    <div class="birth-navig-circle">
                                                        <image src="https://www.materialui.co/materialIcons/image/navigate_before_white_192x192.png" class="panel-footer-icon-size birth-navig-ico-pos" />
                                                    </div>
                                                    <div class="birth-home-wraper" style="flex:1" v-for="(birth, index) in whoHaveBirthDay" :key="index">
                                                        <!-- <div class="birth-profile-circle">
                                                            <text class="birth-crcle-title-mser">{{birth.nameLatter}}</text>
                                                        </div> -->
                                                        <div class="birth-profile-img-margin">
                                                            <image src="https://img.kpopmap.com/2017/11/shin-jungmin.jpg" class="birth-profile-circle"/>
                                                        </div>
                                                        <div>
                                                            <text class="home-nrml-fnt" style="text-align: center">{{birth.name}}</text>
                                                            <text class="panel-label-font-12-px" style="text-align: center">{{birth.id}}</text>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="birth-home-wraper " style="flex:1">
                                                        <div class="birth-profile-img-margin">
                                                            <image src="https://img.kpopmap.com/2017/11/shin-jungmin.jpg" class="birth-profile-circle"/>
                                                        </div>
                                                        <div>
                                                            <text class="home-nrml-fnt" style="text-align: center">Ankur Sharma</text>
                                                            <text class="home-nrml-fnt" style="text-align: center">CID17737</text>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="birth-home-wraper " style="flex:1">
                                                        <div class="birth-profile-circle" style="background-color: orange">
                                                            <text class="birth-crcle-title-mser">RR</text>
                                                        </div>
                                                        <div>
                                                            <text class="home-nrml-fnt" style="text-align: center">Rohan Razi</text>
                                                            <text class="home-nrml-fnt" style="text-align: center">CID09938</text>
                                                        </div>
                                                        
                                                    </div> -->
                                                    <div class="birth-navig-circle">
                                                        <image src="https://www.materialui.co/materialIcons/image/navigate_next_white_192x192.png" @click.native="slideShow" class="panel-footer-icon-size birth-navig-ico-pos"/>
                                                    </div>
                                                </div>
                                                <div class="home-nx-flex-row" style="align-items: center;">
                                                    <!-- <div class="box">
                                                        <text class="panel-heading-font  home-content-white-color">7</text>
                                                    </div> -->
                                                    <div class="box">
                                                        <text class="home-content-white-color panel-heading-font large-text">Wish them today!</text>
                                                    </div>

                                                </div>

                                                
                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        
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
    const animation = weex.requireModule('animation')
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const items = ["Month to Date", "Year to Date", "Goal Sheet to Date", "Week to date", "Today", "T-1"];
    import mobileHeader from '../../components/Main/Mb_Mainheader.vue'
    import appSync from '../../components/Notifications/Sync.vue'
 import moment from 'moment'
    const activityTabs = [
        'Upcoming',
        'Month',
        'Week',
        'Day'
    ];
    export default {
        created() {
          let self  =  this;
            this._id= self.$store.state.agentDetails._id
            this.GET('getAppointment/'+ this._id+'?set_reminder_prority="high","low"', res =>  {
                if(!res.ok){
                  self.obj = "request failed";
                }
                else {
                    console.log('Home get: ', res);
                    //self.obj =  (res.data.errMsg);
                    this.form = res.data.errMsg
                    this.$store.commit('ADD_CALENDARMAINFORMDATA', this.form)
                    /* Condition check by @usama */
                    if(res.data.errCode !== 400) {
                        for(var i = 0; i < this.form.length; i++) {
                            var srtdte = JSON.parse(this.form[i].start_date)
                            console.log(srtdte)
                            this.form[i].start_date = srtdte
                            var srttme  = JSON.parse(this.form[i].start_time)
                            console.log(srttme)
                            this.form[i].start_time = srttme
                            var endtme  = JSON.parse(this.form[i].end_time)
                            console.log(endtme)
                            this.form[i].end_time = endtme
                            console.log(this.form[i])
                        }
                        console.log(this.form)
                    }
                }

            });
            this.$store.commit('SET_PAGE_TITLE', 'Home');
              this.$store.commit('SET_ARROW_STATUS', false);
            if (typeof WXEnvironment === 'object') {
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                this.platform = WXEnvironment.platform || unknown
                console.log(this.deviceWidth)        
            }
        },
        mounted() {
            this.slideShow();
        },
        destroyed(){
            this.$store.commit('SET_ARROW_STATUS', true);
        },
        components: {
            mobileHeader,
            appSync
        },
       computed: {
            arrowDisplay() {
                return this.$store.getters.getArrowStatus
            }        
        },
        data: function() {
            return {
                moment:moment,
                tabActive: 0,
                activityTabs,
                searchText: '',
                   form:[],
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
                    selectedItem: 'Year to Date',
                    optionList: items,
                    panelBodyData: [{
                        titleLabel: 'Logins',
                        amount1: '12,400',
                        label1: 'Target',

                        amount2: '24,700',
                        label2: 'Achieved',

                        amount3: '12,000',
                        label3: 'Shortfall'
                    }, {
                        titleLabel: 'Issuance',

                        amount1: '28,400',
                        label1: 'Target',

                        amount2: '23,000',
                        label2: 'Achieved',

                        amount3: '13,000',
                        label3: 'Shortfall'
                    }]
                },

                whoHaveBirthDay: [
                    {
                        nameLatter: 'RS',
                        name: 'Rohit Soni',
                        id: 'CID03993'
                    }, {
                        nameLatter: 'FS',
                        name: 'Faiyaz Shaikh',
                        id: 'CID03995'
                    }, {
                        nameLatter: 'AS',
                        name: 'Ankur Sharma',
                        id: 'CID03980'
                    }
                ],

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
                    return items[1];
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
            },

            // Bussines Select box Function

            onSelectedEvent(option) {

                switch(option) {
                    case 'Month to Date':
                        let collection = [
                            {
                                amount1: '12,500',
                                amount2: '2000',
                                amount3: '15,000'
                            }, {
                                amount1: '11,000',
                                amount2: '17,000',
                                amount3: '20,000'
                            }
                        ]
                        this.valueChanger(collection);
                        console.log('Done');
                    break;
                    case 'Year to Date':
                        let collection2 = [
                            {
                                amount1: '12,400',
                                amount2: '24,000',
                                amount3: '12,000'
                            }, {
                                amount1: '28,000',
                                amount2: '23,000',
                                amount3: '13,000'
                            }
                        ]
                        this.valueChanger(collection2);
                        console.log('Done');

                    break;
                    case 'Goal Sheet to Date':
                        let collection3 = [
                            {
                                amount1: '2,400',
                                amount2: '4,000',
                                amount3: '2,000'
                            }, {
                                amount1: '8,000',
                                amount2: '3,000',
                                amount3: '3,000'
                            }
                        ]
                        this.valueChanger(collection3);
                        console.log('Done');
                    break;
                    case 'Week to Date':
                        let collection4 = [
                            {
                                amount1: '32,400',
                                amount2: '34,000',
                                amount3: '36,000'
                            }, {
                                amount1: '28,000',
                                amount2: '13,000',
                                amount3: '23,000'
                            }
                        ]
                        this.valueChanger(collection4);
                        console.log('Done');
                    break;
                    case 'Today':
                        let collection5 = [
                            {
                                amount1: '32,400',
                                amount2: '44,000',
                                amount3: '76,000'
                            }, {
                                amount1: '8,000',
                                amount2: '73,000',
                                amount3: '93,000'
                            }
                        ]
                        this.valueChanger(collection5);
                        console.log('Done');
                    break;
                    case 'T-1':
                        let collection6 = [
                            {
                                amount1: '12,400',
                                amount2: '14,000',
                                amount3: '16,000'
                            }, {
                                amount1: '38,000',
                                amount2: '43,000',
                                amount3: '53,000'
                            }
                        ]
                        this.valueChanger(collection6);
                        console.log('Done');
                    break;

                }
            },

            valueChanger(collection) {
                let arrLength = this.dashoardPanel.panelBodyData.length;
                let localArray = this.dashoardPanel.panelBodyData;
                for(let i = 0; i < arrLength; i++) {
                    localArray[i].amount1 = collection[i].amount1;
                    localArray[i].amount2 = collection[i].amount2;
                    localArray[i].amount3 = collection[i].amount3;
                }

            },

            slideShow:function() {
                this.birthDayDataLoad();
            },

            birthDayDataLoad() {
                let birthColloection = [
                    {
                        nameLatter: 'SK',
                        name: 'Shoaib Khan',
                        id: 'CID03923'
                    }, {
                        nameLatter: 'AS',
                        name: 'Ashraf Shaikh',
                        id: 'CID03915'
                    }, {
                        nameLatter: 'AP',
                        name: 'Ankur Patel',
                        id: 'CID03960'
                    }
                ];

                for(let i =0; i < this.whoHaveBirthDay.length; i++) {
                    this.whoHaveBirthDay[i].nameLatter = birthColloection[i].nameLatter;
                    this.whoHaveBirthDay[i].name = birthColloection[i].name;
                    this.whoHaveBirthDay[i].id = birthColloection[i].id;
                }


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
        
    .main-pg-card-notification {
        align-items: 0px;
        width: 600px;
        z-index: 1;
        /* flex:1; */
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
        /* background-color: red; */
    }
    
    .main-pg-card-sync {
        /* width: 450px; */
        z-index: 1;
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }

    .news-box {
        width: 110px;
        height: 110px;
        margin-top: 20px;
    }
    
    .cal-icn {
        height: 30px;
        width: 30px;
        margin-top: 5px;
    }

    .calendar-main-pg-card-wraper {
        margin-top: 10px;
        height: 700px;
        padding: 10px;
    }
    
    .main-pg-card {
        /* margin-top: 40px; */
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        height: 670px;
    }
    
    .main-pg-card-header {
        flex-direction: row;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .main-pg-card-content {
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
    
    .main-pg-card-message {
        flex-direction: column;
        background-color: #FFF;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d6d5d56b;
    }
    
    .main-pg-card-msg-left {
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
    
    .main-pg-card-line {
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    
    .row {
        flex-direction: row;
        padding-left: 15px;
    }
    
    .main-pg-card-title {
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
    
    .main-pg-card-btn1 {
        background-color: rgb(80, 80, 80);
        border-radius: 3px;
        margin-right: 5px;
        padding: 10px;
        justify-content: center;
        -webkit-box-pack: center;
    }
    
    .main-pg-card-btn-text {
        color: #FFFFFF;
        font-size: 13px;
        text-align: center;
        font-family:robotoregular;
    }
    
    .note-main-pg-card {
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
        font-weight: 500;
        font-family:robotoregular;
    }
    
    .panel-label-font-12-px {
        /* panel label font size in dashboard panel */
        font-size: 20px;
        font-weight: 500;
        font-family:robotoregular;
    }
    
    .home-nrml-fnt {
        font-size: 24px;
        font-weight: 500;
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
        margin-bottom: 25px;
    }
    
    .margin-onboarding {
        margin-top: 80px;
    }
    
    .gap-body-footer-margin-top {
        margin-top: 45px;
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
        background-color: #117A65;
    }
    
    .news-body-color {
        background-color: #16A085;
    }
    /* Color Classes */
    
    .dashboard-body-color {
        background-color: #2E86C1;
    }
    
    .dashboard-color-footer {
        background-color: #21618C;
    }
    
    .app-body-color {
        background-color: #5D9DB7;
    }
    
    .app-body-footer {
        background-color: #33738D;
    }
    
    .presale-body-color {
        background-color: #E0C166;
    }
    
    .presale-body-footer {
        background-color: #B69A49;
    }
    
    .on-boarding-body-footer-color {
        background-color: #AC2D4A;
    }
    
    .on-boarding-body-color {
        background-color: #E73C63;
    }
    
    .cfr-body-color {
        background-color: #BF51B8;
    }
    
    .cfr-footer-color {
        background-color: #A7249F;
    }
    
    .lead-mgmt-footer-color {
        background-color: #6C3483;
    }
    
    .lead-mgmt-body-color {
        background-color: #8E44AD;
    }
    
    .club-body-color {
        background-color: #E67E22;
    }
    
    .club-footer-color {
        background-color: #AF601A;
    }
    
    .my-servec-footer-color {
        background-color: #B03A2E;
    }
    
    .my-servec-body-color {
        background-color: #CB4335;
    }
    
    .home-content-white-color {
        color: #ffffff;
    }
    /* New Color for main-pg-cards */
    
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
        background-color: #2E86C1;
        font-size: 25px;
        padding: 15px;
        color: #FFF;
        border-width: 2px;
        border-style: solid;
        border-top-color: #2E86C1;
        border-right-color: #2E86C1;
        border-left-color: #2E86C1;
        border-bottom-color: #FFF;
        font-family:robotoregular;
    }
    
    .home-custom-select-box:focus {
        border-width: 4px;
        border-bottom-color: #FFF;
    }
    
    .bg-white-color {
        background-color: #FFF;
    }
    
    .activity-tabs-paddding {
        flex-direction: row;
        align-items: center;
        width: 80px;
        height: 45px;
        justify-content: center;
    }
    
    .main-pg-card-message {
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

    .home-crd-bdr-radius {
        border-radius: 5px;
    }

    /* Birthday card design */
    /* Birthday container */

    .birth-continer-crd {
        background-color: #fffbfb;
        height: 250px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        /* opacity: 0.4; */
    }
    .birth-home-wraper {
        flex-direction: column;
        align-items: center
    }
    .birth-navig-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: gray;
        opacity: 0.5
    }
    .birth-profile-circle {
        height: 100px;
        width: 100px;
        background-color: #ff581c;
        border-radius: 50px;
        margin-bottom: 20px;
    }

    .birth-profile-img-margin {
        margin-bottom: 20px;
    }

    .birth-crcle-title-mser {
        position: absolute;
        top: 26%;
        left: 24%;
        color: white;
        font-size: 40px;
        font-weight: 700;
        font-family:robotoregular;
    }

    .birth-navig-ico-pos {
        position: absolute;
        top: 5px;
        left: 5px;
    }

    .hme-lft-ght-n-pad {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    @media (min-width: 320px) {
        .home-crd-bdr-radius {
            border-radius: 3px;
        }
    
        /* Added by usama */
        .home-custom-select-box {
            font-size: 15px;
            padding: 5px;
            border-width: 1px;
            width: 160px;
            outline: none;
        }
        .home-custom-select-box:focus {
            border-width: 1px;
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
        .main-pg-card-content {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .main-pg-card-message {
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
        /* .main-pg-card-notify {
        
            align-items: 0px;
            width: 180px;
            z-index: 1;
            margin: 20px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 10px;
        } */
        .main-pg-card-head-cust-title {
            font-size: 14px;
            font-weight: bold;
            color: #565656;
            font-family:robotoregular;
        }
        .hide-sm {
            display: none;
        }
        .main-pg-card-headerline {
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
        .calendar-main-pg-card-wraper {
            margin-top: 10px;
            height: 400px;
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
            margin-bottom: 10px;
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
            height: 148px;
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
            margin-top: 45px;
        }
        .add-short-right-padding {
            padding-right: 5px;
        }
        .add-icon-left-border {
            border-left: 1px solid #ffffff;
        }
        .home-nrml-fnt {
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
            flex-direction: row;
            align-items: center;
            width: 80px;
            height: 45px;
            justify-content: center;
        }
        .tab-heading {
            margin-left: 15px;
        }
        .tab-head {
            font-size: 15px;
            font-family:robotoregular;
        }

        .birth-continer-crd {
            background-color: #fffbfb;
            height: 150px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            /* opacity: 0.4; */
        }

        .birth-profile-circle {
            height: 50px;
            width: 50px;
            background-color: blueviolet;
            border-radius: 50%;
            margin-bottom: 10px;
        }

        .birth-navig-circle {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-left: 5px;
            margin-right: 5px;
        }
        .birth-navig-ico-pos {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
        }
        .birth-profile-img-margin {
            margin-bottom: 10px;
        }
        .birth-crcle-title-mser {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 18px;
            font-weight: 500;
            font-family:robotoregular;
        }

        .hme-tab-active {
            position: absolute;
            top: 0;
            left: 0pt;
            border-width: 2px;
            border-style: solid;
            border-top-color: #FFFFFF;
            border-left-color: #FFF;
            border-right-color: #FFFF;
            /* background-color: rgb(218, 59, 85); */
            transition: left 0.2s ease-in-out;
            cursor: pointer;
        }

        .hme-lft-ght-n-pad {
            padding-left: 5px;
            padding-right: 5px;
        }
    }
    
    @media (min-width: 768px) {
        .hide-mb {
            display: inline-flex;
        }
        .hide-sm {
            display: block;
        }
        .menu-position {
            justify-content: center;
        }
        .main-pg-card-headerline {
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
            height: 372px;
        }
        .home-calendar-footer-height {
            height: 306px;
        }

        /* suale guide */
        .hme-sales-g-c-p-b {
            padding-bottom: 2px;
        }
    }
</style>