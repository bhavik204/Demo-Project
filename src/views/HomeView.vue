<template>
    <div>
        <div class="card-headerline row">
            <div style="flex:1;justify-content:center;">
                <image class="ham-logo" src="https://www.materialui.co/materialIcons/navigation/menu_white_192x192.png"></image>
            </div>
            <div class="head-logo-class" style="justify-content:center;">
                <image class="head-logo" src="http://salesdrive.iorta.in/img/logo.png" @click="jump('/lead')"></image>
            </div>
            <!-- <text class="notlogo" @click="jump('/notifications')" style="color:#fff;  position: relative;
                   left:234px;
                   top:11px;">Notify</text> -->
            <div class="note-logos" style="flex-direction:row">
                    <div style="flex:1;justify-content:center;margin-right:20px" @click.native="showSync()">
                            <image class="notification-logo" src="https://www.materialui.co/materialIcons/notification/sync_white_192x192.png"
                                alt="notify"></image>
                        </div>
                <div style="flex:1;justify-content:center;margin-right:20px" @click.native="showNotifications()">
                    <image class="notification-logo" src="https://www.materialui.co/materialIcons/social/notifications_white_192x192.png"
                        alt="notify"></image>
                </div>
                <div style="flex:1;justify-content:center;margin-right:20px" @click.native="showMenu()">
                    <image class="other-logo" src="https://www.materialui.co/materialIcons/action/perm_identity_white_192x192.png"></image>
                </div>

            </div>

            <div >
            <div  class="notify-div" style="flex:1" v-if="sync==true">
                    <div class="card-sync">
                   <div class="card-header" style="background-color:#d8d8d8">
                          <div class="table-row" style="padding:10px">
                          <div class="total" style="flex-direction:column;justify-content:space-between;margin-right:14px;">
                             <div> <text class="sub-heading">34</text></div>
                            <div>  <text class="heading">Total No Of Files</text></div>
                          </div>
                          <div class="total" style="flex-direction:column">
                                <div> <text class="sub-heading">1.2 GB</text></div>
                               <div>  <text class="heading">Total Size of Files</text></div>
                             </div>
                          <div class="card-btn1">
                                <text class="card-btn-text">Sync All</text>
                            </div>
                      </div>
                      </div> 
                      <div class="card-content" style="flex-direction:column" >
                            <div class="table-row" style="flex-direction:row;padding:10px"  v-for="data in Sync">
                            <div class="total" style="flex-direction:column">
                               <div> <text class="heading">{{data.Status}}</text></div>
                              <div>  <text class="heading">No. of Files: {{data.No}} | Size: {{data.Size}}</text></div>
                            </div>
                              <div class="card-btn1">
                                  <text class="card-btn-text">Sync</text>
                              </div>
                        
                        </div> 
                      
                  
                    </div>
                    <div class="card-footer">
                        <div style="    justify-content: center;
                        align-items: center"><text class="heading" style="color:blue;">View All</text></div>
                    </div>
                </div>
</div>
</div>
            <div class="notify-div" style="flex:1" v-if="notifications==true">
                <div class="card-notification">
                    <div class="tabbar">
                        <div class="tab active" :style="{ left: activeTab * 200 + 'px'}"></div>
                        <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
                            <text class="title">{{tab.number}}</text>
                            <text class="title">{{tab.title}}</text>
                        </div>
                    </div>
                        <!-- Tab Heading-->
                    <div class="tab-panels">
                      
                        <scroller class="scroller" style="height:500px;">
                           <div class="notification-header"> <text class="title"> CFR (2) View All CFR</text></div>
                            <div class="tab-panels"  v-for="(panel, pi) in panels" :key="pi">


                                <!--Card Start-->
                                <div class="note-card" v-for="(list, ci) in panel.content">
                                  
                                        <div>
                                            <div class="table-head-row" style="flex-direction:row">
                                                <div>
                                                    <text class="card-title">{{list.Status}}</text>
                                                </div>
                                                <div>
                                                    <text class="card-title">{{list.Date}}</text>
                                                </div>
                                            </div>
                                            <div class="table-row" style="flex-direction:row">
                                                <div>
                                                    <text class="card-title">Name:{{list.Name}} | {{list.Id}}</text>
                                                    <text class="card-title">Deadline:{{list.DraftDate}}</text>
                                                </div>
                                                <div>
                                                    <div class="card-btn1">
                                                        <text class="card-btn-text">Details</text>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                   
                                </div>

                                <!--Card Ends-->



                            </div>




                        </scroller>
            
                    </div>
                </div>
            </div>

            <div class="notify-div" style="flex:1" v-if="notifyDetails==true">
                <div class="card-notify">
                    <div v-if="deviceWidth < 959" class="row1" style="flex-direction:row">
                        <text class="card-head-title" @click="jump('/sync')">Sync Now</text>

                    </div>
                    <div v-if="deviceWidth < 959" class="row1" style="flex-direction:row">
                        <div>
                            <image class="news-box" src="https://www.materialui.co/materialIcons/action/perm_identity_grey_192x192.png"></image>
                        </div>
                        <div class="profile-det" style="flex-direction:column">
                            <text class="card-head-title">Kasturi Shah</text>
                            <text class="card-head-subtitle">Adv ID:HYD3245</text>
                            <text class="card-head-subtitle">Miapur,Hyderabad</text>
                        </div>
                    </div>
                    <div v-if="deviceWidth < 959" class="row1" style="flex-direction:row">
                        <div>
                            <image class="news-box" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Icons8_flat_doughnut_chart.svg/512px-Icons8_flat_doughnut_chart.svg.png"></image>
                        </div>
                        <div class="profile-det" style="flex-direction:column">

                            <text class="card-head-title">Goal Summary</text>
                            <text class="card-head-subtitle">Target:30.50 Lakh</text>
                            <text class="card-head-subtitle">Achived: 20.56 Lakh</text>
                            <text class="card-head-subtitle">Pending: 9.44 Lakh</text>

                        </div>
                    </div>
                    <div class="row1" style="flex-direction:row">
                        <div>
                            <image class="notify-box" src="https://www.materialui.co/materialIcons/social/people_grey_192x192.png"></image>
                        </div>
                        <div class="profile-det" style="flex-direction:column">
                            <text class="card-head-cust-title">My Customers</text>
                        </div>
                    </div>
                    <div class="row1" style="flex-direction:row">
                        <div>
                            <image class="notify-box" src="https://www.materialui.co/materialIcons/action/help_grey_192x192.png"></image>
                        </div>
                        <div class="profile-det" style="flex-direction:column">
                            <text class="card-head-cust-title">My Advisors</text>
                        </div>
                    </div>
                    <div class="row1" style="flex-direction:row">
                        <div>
                            <image class="notify-box" src="https://www.materialui.co/materialIcons/action/input_grey_192x192.png"></image>
                        </div>
                        <div class="profile-det" style="flex-direction:column">
                            <text class="card-head-cust-title">Team Login</text>
                        </div>
                    </div>
                    <div class="row1" style="flex-direction:row">
                        <div>
                            <image class="notify-box" src="https://www.materialui.co/materialIcons/action/question_answer_grey_192x192.png"></image>
                        </div>
                        <div class="profile-det" style="flex-direction:column">
                            <text class="card-head-cust-title">Help Desk</text>
                        </div>
                    </div>
                    <div class="row1" style="flex-direction:row">
                        <div>
                            <image class="notify-box" src="https://www.materialui.co/materialIcons/action/highlight_remove_grey_192x192.png"></image>
                        </div>
                        <div class="profile-det" style="flex-direction:column">
                            <text class="card-head-cust-title">Log Out</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <scroller>
            <div class="page-wrapper" style="background-color:#ebebeb;">

                <div class="box-wrapper">

                    <!-- Flex Row -->
                    <div class="nx-flex-row nx-flex-row-column apply-width">
                        <!-- Flex Column inside flex row -->
                        <div class="box flex-box-size-01">
                            <div class="nx-flex-column">
                                <!-- Dashboard Panel -->
                                <div class="dashboard-body-color shadow">
                                    <!-- Flex row for dropdown and Icon -->
                                    <!-- Panel Header -->
                                    <div class="">
                                        <div class="box">
                                            <!-- DropDown List-->
                                            <div class="nx-flex-row">
                                                <div class="flex-box-size-01">
                                                    <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker()">
                                                        <text class="text select-box mouse-pointer text-color-white">{{ value }}</text>
                                                        <div class="drop-arrow-pos">
                                                            <image class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_24x24.png"></image>
                                                        </div>
                                                    </div>


                                                    <div v-if="platform == 'Web'" class="drop-down dropDown-width" @click="dropDownHideShow()">
                                                        <text class="text select-box mouse-pointer text-color-white">{{dashoardPanel.dropDown.selected}}</text>
                                                        <div class="drop-arrow-pos">
                                                            <image class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_24x24.png"></image>
                                                        </div>
                                                        <div v-if="dashoardPanel.dropDown.listShow == false" class="drop-item-list shadow dropDown-width">
                                                            <div v-for="(list, li) in dashoardPanel.dropDown.listItems" :key="li">
                                                                <div class="list-item-padding" @click="pickerListItems(li)">
                                                                    <text class="text mouse-pointer">{{list}}</text>
                                                                </div>
                                                            </div>
                                                        </div>

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

                                                <div class="nx-flex-row">
                                                    <div class="box flex-box-size-02">
                                                        <text class="panel-label-font-12-px text-color-white">{{values.titleLabel}}</text>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="nx-flex-column">
                                                            <div>
                                                                <text class="text panel-body-link-font-bold text-color-white">₹ {{values.amount1}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px text-color-white">{{values.label1}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="nx-flex-column">
                                                            <div>
                                                                <text class="text panel-body-link-font-bold text-color-white">₹ {{values.amount2}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px text-color-white">{{values.label2}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <div class="nx-flex-column">
                                                            <div>
                                                                <text class="text panel-body-link-font-bold text-color-white">₹ {{values.amount3}}</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-label-font-12-px text-color-white">{{values.label3}}</text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer dashboard-color-footer gap-btwn-two-section">
                                            <div class="nx-flex-row row-alignment">
                                                <div class="flex-box-size-01">
                                                    <text class="panel-heading-font text-color-white">DASHBOARD</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <div class="nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-white">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-white">13 hours ago</text>
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
                                <div class="nx-flex-column nx-flex-column-row">
                                    <!-- Application -->
                                    <div class="app-body-color gap-btwn-two-section shadow flex-box-size-01 nx-margin-right">
                                        <div class="nx-flex-column">
                                            <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/navigation/apps_white_36x36.png"></image>
                                            </div>

                                            <!-- Panel body -->
                                            <div class="box gap-btwn-two-section">
                                                <!-- Panel body have one flex row and inside columns -->

                                                <div class="nx-flex-row">

                                                    <div class="box flex-box-size-01">

                                                        <div class="nx-flex-column">
                                                            <div @click="jump('/renewals')">
                                                                <text class="text panel-body-link-font-bold text-color-white">Renewals</text>
                                                            </div>
                                                            <div>
                                                                <div class="nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                                    <div class="gap-btwn-two-section">
                                                                        <text class="panel-heading-font panel-body-link-font-bold text-color-white">25</text>
                                                                    </div>
                                                                    <div class="add-left-short-padding  gap-btwn-two-section">
                                                                        <text class="text-color-white panel-label-font-12-px">New</text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="box flex-box-size-01">
                                                        <!-- <text class="text">{{values.titleLabel}}</text> -->
                                                        <div class="nx-flex-column">
                                                            <div @click="jump('/advisor-view')">
                                                                <text class="text panel-body-link-font-bold text-color-white">Applications</text>
                                                            </div>
                                                            <div>
                                                                <div class="nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                                    <div class="gap-btwn-two-section">
                                                                        <text class="panel-heading-font panel-body-link-font-bold text-color-white">25</text>
                                                                    </div>
                                                                    <div class="add-left-short-padding  gap-btwn-two-section">
                                                                        <text class="text-color-white panel-label-font-12-px">New</text>
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
                                                <div class="nx-flex-row row-alignment">
                                                    <div class="flex-box-size-01" @click="jump('/app-view')">
                                                        <text class="panel-heading-font text-color-white">APPLICATIONS</text>
                                                    </div>
                                                    <div class="add-short-right-padding">
                                                        <div class="nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-white">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-white">13 hours ago</text>
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
                                    <!-- Application End Here -->

                                    <!-- Pre Sale Tool -->
                                    <div class="presale-body-color gap-btwn-two-section shadow flex-box-size-01 nx-margin-left">
                                        <div class="nx-flex-column">
                                            <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/timeline_white_36x36.png"></image>
                                            </div>

                                            <!-- Panel body -->

                                            <!-- Panel body have one flex row and inside columns -->

                                            <div class="box gap-btwn-two-section">
                                                <div class="nx-flex-row">
                                                    <div class="box flex-box-size-01" @click="jump('/testimonials')">
                                                        <text class="text panel-body-link-font-bold text-color-white">Sales Pitch</text>
                                                    </div>
                                                    <div class="box flex-box-size-01" @click="jump('/protection')">
                                                        <text class="text panel-body-link-font-bold text-color-white">Products</text>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box gap-btwn-two-section">
                                                <div class="nx-flex-row">
                                                    <div class="box flex-box-size-01" @click="jump('/customer')" >
                                                        <text class="text panel-body-link-font-bold text-color-white">Resource Center</text>
                                                    </div>
                                                    <div class="box flex-box-size-01" @click="jump('/calculatorhuman')"   >
                                                        <text class="text panel-body-link-font-bold text-color-white">Need Analysis</text>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- Panel footer -->
                                            <div class="panel-footer presale-body-footer gap-btwn-two-section">
                                                <div class="nx-flex-row row-alignment">
                                                    <div class="flex-box-size-01" @click="jump('/protection')">
                                                        <text class="panel-heading-font text-color-white">PRE SALE TOOLS</text>
                                                    </div>
                                                    <div class="add-short-right-padding">
                                                        <div class="nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-white">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-white">13 hours ago</text>
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
                                    <!-- Pre sale tool end here -->
                                </div>
                                <!-- Wraper end -->


                                <!-- ONBOARDING -->
                                <div class="gap-btwn-two-section on-boarding-body-color shadow">
                                    <div class="nx-flex-column">
                                        <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_add_white_36x36.png"></image>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer on-boarding-body-footer-color margin-onboarding">
                                            <div class="nx-flex-row row-alignment">
                                                <div class="flex-box-size-01" @click="jump('/official')">
                                                    <text class="panel-heading-font text-color-white">ONBOARDING</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <div class="nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-white">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-white">13 hours ago</text>
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
                            </div>
                        </div>


                        <!-- Second Column -->
                        <div class="box flex-box-size-01">
                            <div class="nx-flex-column">
                                <div class="shadow" style="background-color: #2C3E50">
                                    <div class="box panels-icon-positioning">
                                        <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/date_range_white_192x192.png"></image>
                                    </div>
                                    <div>
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="tab-heading">
                                                    <text class="tab-head">Upcoming</text>
                                                </div>
                                                <div class="tab-heading">
                                                    <text class="tab-head">Month</text>
                                                </div>
                                                <div class="tab-heading">
                                                    <text class="tab-head">Week</text>
                                                </div>
                                                <div class="tab-heading">
                                                    <text class="tab-head">Day</text>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <div class="date">
                                                    <div>
                                                        <image class="cal-icn" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_black_192x192.png"></image>
                                                    </div>
                                                    <div class="date-text">
                                                        <text class="date-txt"> June 2016</text>
                                                    </div>
                                                    <div>
                                                        <image class="cal-icn" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png"></image>
                                                    </div>
                                                    <div>
                                                        <image class="cal-icn" src="https://www.materialui.co/materialIcons/action/date_range_black_192x192.png"></image>
                                                    </div>
                                                </div>
                                            </div>
                                            <scroller class="scroller">
                                                <div v-for="(appt,pi) in appointment" :key="pi">

                                                    <div class="AM">
                                                        <text class="am-txt">{{appt.Slot}}</text>
                                                    </div>
                                                    <div class="card-message" v-for="(appt,pi) in appointment" :key="pi">
                                                        <div class="card-msg-left">
                                                            <div class="date-slot" style="flex:1">
                                                                <div style="background-color:#5da5c0">
                                                                    <text style="color:black" class="date-txt">{{appt.Day}}</text>
                                                                </div>
                                                                <div style="background-color:#f4f4f4">
                                                                    <text class="date-txt">{{appt.Date}}</text>
                                                                </div>
                                                            </div>
                                                            <div class="time-slot" style="flex:2">
                                                                <div>
                                                                    <text class="date-txt">{{appt.TimeFrom}}</text>
                                                                </div>
                                                                <div>
                                                                    <text class="date-txt">To</text>
                                                                </div>
                                                                <div>
                                                                    <text class="date-txt">{{appt.TimeTo}}</text>
                                                                </div>
                                                            </div>
                                                            <div class="meeting-list" style="flex:5;flex-direction:column;justify-content: center" @click="dropDetails(index,pi)">
                                                                <text class="date-txt">{{appt.Details}}</text>

                                                            </div>
                                                        </div>

                                                        <div style="flex-direction:column">
                                                            <div v-if="showDetails==true">
                                                                <text style="color:black" class="date-txt">{{appt.Details}}</text>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </scroller>


                                        </div>
                                    </div>
                                    <!-- Footer -->
                                    <div class="panel-footer " style="background-color:#1C2833;">
                                        <div class="nx-flex-row row-alignment">
                                            <div class="flex-box-size-01" @click="jump('/calendar')">
                                                <text class="panel-heading-font text-color-white">CALENDER</text>
                                            </div>
                                            <div class="add-short-right-padding">
                                                <div class="nx-flex-column">
                                                    <div>
                                                        <text class="panel-small-text text-color-white">Last Synced</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-small-text text-color-white">13 hours ago</text>
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
                                <!-- LEAD Management -->
                                <div class="gap-btwn-two-section lead-mgmt-body-color shadow">
                                    <div class="nx-flex-column">
                                        <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_white_36x36.png"></image>
                                        </div>

                                        <div class="box">
                                            <div class="nx-flex-row gap-btwn-two-section" style="align-items: center;">
                                                <div class="box">
                                                    <text class="panel-heading-font panel-body-link-font-bold text-color-white">25</text>
                                                </div>
                                                <div>
                                                    <text class="text-color-white panel-label-font-12-px">New</text>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer lead-mgmt-footer-color gap-body-footer-margin-top">
                                            <div class="nx-flex-row row-alignment">
                                                <div class="flex-box-size-01" @click="jump('/lead-mgmt')">
                                                    <text class="panel-heading-font text-color-white">LEAD MANAGEMENT</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <div class="nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-white">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-white">13 hours ago</text>
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

                            </div>

                        </div>

                        <!-- Third Column -->
                        <div class="box flex-box-size-01">
                            <div class="nx-flex-column">
                                <!-- cfr -->
                                <div class="cfr-body-color shadow">
                                    <div class="nx-flex-column">
                                        <div class="box panels-icon-positioning">
                                            <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"></image>
                                        </div>

                                        <div class="box">
                                            <div class="nx-flex-row gap-btwn-two-section " style="align-items: center;">
                                                <div class="box">
                                                    <text class="panel-heading-font panel-body-link-font-bold text-color-white">25</text>
                                                </div>
                                                <div>
                                                    <text class="text-color-white panel-label-font-12-px">New</text>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel footer -->
                                        <div class="panel-footer cfr-footer-color gap-body-footer-margin-top">
                                            <div class="nx-flex-row row-alignment">
                                                <div class="flex-box-size-01" @click="jump('/cfr-view')">
                                                    <text class="panel-heading-font text-color-white">CALL FOR REQUIREMENT</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <div class="nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-white">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-white">13 hours ago</text>
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
                                <!-- cfr end -->

                                <!-- Wrapper -->
                                <div class="nx-flex-column nx-flex-column-row">
                                    <!-- My Services -->
                                    <div class="gap-btwn-two-section my-servec-body-color shadow flex-box-size-01 nx-margin-right">
                                        <div class="nx-flex-column">
                                            <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"></image>
                                            </div>

                                            <div class="box gap-btwn-two-section">
                                                <text class="text panel-body-link-font-bold text-color-white box">Request</text>
                                            </div>
                                            <div class="box gap-btwn-two-section">
                                                <div class="nx-flex-row" style="align-items: center;">
                                                    <div class="box">
                                                        <text class="panel-heading-font panel-body-link-font-bold text-color-white">25</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px text-color-white text-color-white">WIP</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-heading-font panel-body-link-font-bold text-color-white">10</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px text-color-white add-left-short-padding">Closed</text>
                                                    </div>
                                                    <div>
                                                        <text class="panel-heading-font panel-body-link-font-bold text-color-white">12</text>
                                                    </div>
                                                    <div class="flex-box-size-01">
                                                        <text class="panel-label-font-12-px text-color-white add-left-short-padding">Not Verified</text>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box gap-btwn-two-section">
                                                <text class="text panel-body-link-font-bold text-color-white box">Downloads</text>
                                            </div>
                                            <!-- Panel footer -->
                                            <div class="panel-footer my-servec-footer-color gap-btwn-two-section">
                                                <div class="nx-flex-row row-alignment">
                                                    <div class="flex-box-size-01" @click="jump('/my-services')">
                                                        <text class="panel-heading-font text-color-white">MY SERVICES</text>
                                                    </div>
                                                    <div class="add-short-right-padding">
                                                        <div class="nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-white">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-white">13 hours ago</text>
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


                                    <!-- CLUBS AND CONTESTS -->
                                    <div class="gap-btwn-two-section club-body-color shadow flex-box-size-01 nx-margin-left">
                                        <div class="nx-flex-column">
                                            <div class="box panels-icon-positioning">
                                                <image class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"></image>
                                            </div>

                                            <!-- Panel body -->

                                            <!-- Panel body have one flex row and inside columns -->

                                            <div class="box gap-btwn-two-section">
                                                <text class="panel-heading-font text-color-white box"  @click="jump('/allclubs')"></text>
                                            </div>

                                            <div class="box gap-btwn-two-section">

                                            </div>


                                            <!-- Panel footer -->
                                            <div class="panel-footer club-footer-color gap-btwn-two-section">
                                                <div class="nx-flex-row row-alignment">
                                                    <div class="flex-box-size-01" @click="jump('/newone')">
                                                        <text class="panel-heading-font text-color-white">CLUBS AND CONTESTS</text>
                                                    </div>
                                                    <div class="add-short-right-padding">
                                                        <div class="nx-flex-column">
                                                            <div>
                                                                <text class="panel-small-text text-color-white">Last Synced</text>
                                                            </div>
                                                            <div>
                                                                <text class="panel-small-text text-color-white">13 hours ago</text>
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
                                    <!-- CLUBS AND CONTESTS -->
                                </div>

                                <!-- News and Updates -->

                                <div class="gap-btwn-two-section news-body-color shadow">
                                    <div class="nx-flex-column">
                                        <div class="box panels-icon-positioning">
                                            <text class="text text-color-white box">View All</text>
                                        </div>

                                        <!-- Panel body -->

                                        <!-- Panel body have one flex row and inside columns -->

                                        <div class="box news-box-style">
                                            <!-- here column is used arrange each row in column wice -->
                                            <div class="nx-flex-column news-scroller">
                                                <!-- News row with image -->
                                                <div v-for="(arr, index) in newsArray" :key="index">
                                                    <div class="nx-flex-row">
                                                        <!-- Image  -->
                                                        <div class="">
                                                            <image class="news-image-size" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201402/srk-3_650_021614104929.jpg"></image>
                                                        </div>
                                                        <!-- Content -->
                                                        <div class="">
                                                            <!-- news title -->
                                                            <div class="box">
                                                                <text class="panel-label-font-12-px panel-body-link-font-bold">Big changes in retirement</text>
                                                            </div>
                                                            <!-- story -->
                                                            <div class="add-left-short-padding news-content-width">
                                                                <text class="panel-label-font-12-px text-wrapper" lines="3">Investment advitce coming to your mail boxInvestment advitce
                                                                    coming...</text>
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
                                            <div class="nx-flex-row row-alignment">
                                                <div class="flex-box-size-01" @click="jump('/news')">
                                                    <text class="panel-heading-font text-color-white">NEWS AND UPDATES</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <div class="nx-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-white">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-white">13 hours ago</text>
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

    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                this.platform = WXEnvironment.platform || unknown
                
            }
        },
        data: function () {
            return {
                deviceWidth:invalid,
                paltform:invalid,
                showDetails: false,
                notifications: false,
                sync:false,
                notifyDetails: false,
                selId: 0,
                activeTab: 0,
                personalId: '',
                Sync:[
                    {
                        Status:'Proposals',
                        No:'16',
                        Size:'125 KB'
                    },
                    {
                        Status:'CFR Pending',
                        No:'16',
                        Size:'200 KB'
                    },
                    {
                        Status:'Document Pending',
                        No:'20',
                        Size:'1.2 GB'
                    },
                    {
                        Status:'Payment Pending',
                        No:'20',
                        Size:'1.2 GB'
                    },
                ],
                tabs: [
                    {
                    number: 5,
                    title: 'Applications',
                    productList: [{
                        Name: 'Shahu Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Shahu Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Shahu Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Shahu Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Shahu Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },



                    ]
                },
                {
                    number: 23,
                    title: 'Renewals',
                    productList: [{
                        Name: 'Kasturi Shah',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Kasturi Shah',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Kasturi Shah',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Kasturi Shah',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Kasturi Shah',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },



                    ]

                },
                {
                    number: 40,
                    title: 'Alerts',
                    productList: [{
                        Name: ' Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },
                    {
                        Name: 'Patil',
                        Status: 'New',
                        Date: '08:05:19, March 19, 2016',
                        Id: 'BRSMCU155',
                        DraftDate: '01/12/2016',

                    },



                    ]

                },
                ],

                appointment: [
                    {
                        Slot: 'AM (till 11:59am)',
                        Day: "Fri",
                        Date: "03",
                        TimeFrom: "8:00",
                        TimeTo: "8:30",
                        Details: "Meeting with Catie",
                        Priority: "High"
                    },
                    {
                        Slot: 'Lunch',
                        Day: "Fri",
                        Date: "03",
                        No: "2",
                        TimeFrom: "8:30",
                        TimeTo: "9:00",
                        Details: "Renew Policy Number 32456789",
                        Priority: "Low"
                    },
                    {
                        Slot: 'Lunch',
                        Day: "Fri",
                        Date: "03",
                        No: "3",
                        TimeFrom: "9:00",
                        TimeTo: "9:30",
                        Details: "Internal Meeting about Sales Force on 3rd Floor",
                        Priority: "High"
                    },

                ],
                dashoardPanel: {
                    dropDown: {
                        listItems: ["Month to Date", "Year to Date"],
                        selected: "Month to Date",
                        listShow: false
                    },
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
                    }],



                },

                index: -1,
                dashoardPanel: {
                    dropDown: {
                        listItems: items,
                        selected: "Month to Date",
                        listShow: true
                    },
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
                if (this.index == -1) {
                    return "Choose..";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            }
        },

        methods: {
            showSync(){
          this.notifications = false
          this.notifyDetails = false;
          this.sync  = !this.sync
            },
            showNotifications(){
     
               this. sync=false,
                this.notifyDetails= false
                this.notifications  = !this.notifications
            },
            showMenu(){
          
            this. sync=false
            this.notifications= false
            this.notifyDetails  = !this.notifyDetails
            },
            jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        }
        }
    }
</script>

<style scoped>
    /*MY CODE*/

    /*Header Page*/

    .card-headerline {

        background-color: #3b371e;
        height: 40px;
        padding: 10px;
    }

    .row {
        flex-direction: row;
        padding-left: 15px;
    }

    .ham-logo {
        height:31px;
        width: 25px;
    }

    .head-logo {
        width: 100px;
        height: 28px;
        /* position:relative; 
        left:113px;
        bottom: 8px; */
    }

    .head-logo-class {
        flex: 1.5;
    }

    .notification-logo {
        width: 20px;
        height: 21px;
        /* position: relative;
        left:234px;
        top:11px; */
    }

    .other-logo {
        width: 20px;
        height: 21px;
        /* position: relative;
        left:268px;
        top:0px; */
    }

    .notify-div {

        position: fixed;
        ;
        z-index: 9999;
        top: 30px;
        right: 0px;

    }

    .card-notify {
        /* position: absolute; */
        /* position: absolute; 
        top: 50px;
         right: 0; */
        /* flex-direction: l; */
        /* left: 0; */
        /* flex-direction: row; */
        align-items: 0px;
        width: 400px;
        z-index: 1;
        /* flex:1; */
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
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
    .card-sync{
     
  
        width: 450px;
        z-index: 1;
    
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }

    .card-head-title {
        font-size: 30px;
        font-weight: bold;
        width: 400px;

    }

    .row1 {
        border-bottom: 1px solid #565656;
        padding-left: 30px;
    }

    .news-box {
        width: 110px;
        /* height: 110px; */
        margin-top: 20px;
    }

    .profile-det {
        width: 750px;
        padding: 30px;

    }

    .card-head-title {
        font-size: 30px;
        font-weight: bold;
        width: 400px;

    }

    .card-head-cust-title {
        font-size: 25px;
        font-weight: bold;
        color: #565656;
        font-family: 'Helvetica-Bold'
    }

    .card-head-subtitle {
        font-size: 20px;
    }

    .notify-box {
        width: 40px;
        height: 40px;
        margin-top: 20px;
    }

    .cal-icn {
        height: 30px;
        width: 30px;
        margin-top: 5px;
    }

    .card {
        margin-top: 40px;
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
        /* border-width: 1px;
      border-style: solid;
      border-top-color: #fff;
      border-left-color: #fff;
      border-right-color: #fff;
      border-bottom-color: #d8d8d8; */
    }

    .tab-head {
        font-size: 25px;
        margin: 6px
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
    }

    .am-txt {
        padding: 10px;
        font-size: 18px;
        margin-top: 5px;
        color: #434343
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
        border-bottom-color: #d8d8d8;

    }

    .card-msg-left {
        flex: 1;
        flex-direction: row;
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
    .sub-heading{
        font-weight: bold;
        font-size:28px;
        color:#565656;
    }
    .heading{
       
        font-size:18px;
        color:#565656;
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

    .nx-flex-column {
        flex-direction: column;
    }

    .nx-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }

    /* text class convert font size: it is used for normal font size 14px */

    .text {
        font-size: 25px;
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
        background-color: #353535;
        transition: left 0.2s ease-in-out;
    }

    .title {
        font-size: 20px;
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
    }
    .table-head-row {
        
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        padding:10px;
       
        

    }
    .table-row {
        
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        padding:10px;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color:#cccccc;
        

    }
 

    .card-btn1 {
        background-color: rgb(80, 80, 80);
        border-radius: 8px;
        margin-right: 5px;
        padding: 10px;
        justify-content: center;
        -webkit-box-pack: center;
    }

    .card-btn-text {
        color: #FFFFFF;
        font-size: 25px;
        text-align: center;
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
    .notification-header{
        padding:15px;
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

    .nx-flex-column {
        flex-direction: column;
    }

    .nx-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .nx-flex-row-column {
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
    }

    .panel-heading-font {
        font-size: 30px;
        font-weight: bold;
    }

    .panel-body-link-font-bold {
        /* It is used for links to be bold */
        font-weight: bold;
    }

    .panel-label-font-12-px {
        /* panel label font size in dashboard panel */
        font-size: 20px;
    }

    .text {
        font-size: 24px;
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
        margin-top: 60px;
        margin-right: 25px;
        margin-left: 25px;
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

    .news-content-width {
        width: 420px;
    }

    .news-image-size {
        width: 110px;
        height: 110px;
    }

    .news-scroller {
        /* height: 249px; */
        overflow: auto;
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

    .text-color-white {
        color: #ffffff;
    }

    /* Media query for mobile */

    @media (min-width: 320px) {

        .apply-width {
            width: 100%;
        }

        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .news-box-style {
            background-color: #ffffff;
            margin-top: 30px;
            margin-right: 10px;
            margin-left: 10px;
        }

        .box-wrapper {
            flex: 1;
        }
        .nx-flex-row-column {
            flex-direction: column;
        }
        .panel-small-text {
            /* This font size is used in panel footer "last syn" */
            font-size: 10px;
            font-style: italic;
        }
        .panel-body-link-font-bold {
            /* It is used for links to be bold */
            font-weight: bold;
        }
        .panel-label-font-12-px {
            /* panel label font size in dashboard panel */
            font-size: 12px;
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
            /* height: 149px; */
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
        .text {
            font-size: 14px;
        }
    }

    @media (min-width: 768px) {
        .nx-flex-row-column {
            flex-direction: column;
        }
        /* this class change direction from column to row */
        .nx-flex-column-row {
            flex-direction: row;
            /* flex-wrap: wrap; */
        }
        .nx-margin-left {
            margin-left: 5px;
        }
        .nx-margin-right {
            margin-right: 5px;
        }
        .news-content-width {
            width: 320px;
        }
    }

    @media (min-width: 992px) {
        /* Normally it is used for fixed items in center */
        .table-row{
            border-bottom: 1px solid #cccccc
        }
        .page-wrapper {
            flex-direction: row;
            justify-content: center;
        }
        .nx-flex-row-column {
            flex-direction: row;
        }
        .nx-flex-column-row {
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
        }

        /* Width is used to extends size of row */
        .apply-width {
            padding-left: 30px;
    padding-right: 30px;
        }
        .nx-margin-left {
            margin-left: 0;
        }
        .nx-margin-right {
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
        .date-txt {
        font-size: 12px;
        margin-top: 6px;
        text-align: center;
    }
    .tab-head {
        font-size: 13px;
        margin: 6px
    }

    }
</style>