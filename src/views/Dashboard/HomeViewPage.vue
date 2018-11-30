<template>
    <div class="page-wrapper" style="background-color:#ebebeb;">
        <scroller>
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
                                                    <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_24x24.png"></image>
                                                </div>
                                            </div>


                                            <div v-if="platform == 'Web'" class="drop-down dropDown-width" @click.native="dropDownHideShow()">
                                                <text class="text select-box mouse-pointer text-color-white">{{dashoardPanel.dropDown.selected}}</text>
                                                <div class="drop-arrow-pos">
                                                    <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_24x24.png"></image>
                                                </div>
                                                <div v-if="dashoardPanel.dropDown.listShow == false" class="drop-item-list shadow dropDown-width">
                                                    <div v-for="(list, li) in dashoardPanel.dropDown.listItems" :key="li">
                                                        <div class="list-item-padding" @click.native="pickerListItems(li)">
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
                                                <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/dashboard_white_36x36.png"></image>
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
                                        <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/navigation/apps_white_36x36.png"></image>  
                                    </div>
                                    
                                    <!-- Panel body -->
                                    <div class="box gap-btwn-two-section">
                                        <!-- Panel body have one flex row and inside columns -->
                                        
                                        <div class="nx-flex-row">

                                            <div class="box flex-box-size-01">
                                            
                                                <div class="nx-flex-column">
                                                    <div>
                                                        <text class="text panel-body-link-font-bold text-color-white">Renewals</text>
                                                    </div>
                                                    <div>
                                                        <div class="nx-flex-row gap-btwn-two-section"  style="align-items: center;">
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
                                                    <div>
                                                        <text class="text panel-body-link-font-bold text-color-white">Applications</text>
                                                    </div>
                                                    <div>
                                                        <div class="nx-flex-row gap-btwn-two-section"  style="align-items: center;">
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
                                            <div class="flex-box-size-01">
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
                                        <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/timeline_white_36x36.png"></image>  
                                    </div>
                                    
                                    <!-- Panel body -->
                                
                                    <!-- Panel body have one flex row and inside columns -->
                                
                                    <div class="box gap-btwn-two-section">
                                        <div class="nx-flex-row">
                                            <div class="box flex-box-size-01">
                                                <text class="text panel-body-link-font-bold text-color-white">Sales Pitch</text>
                                            </div>
                                            <div class="box flex-box-size-01">
                                                <text class="text panel-body-link-font-bold text-color-white">Products</text>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="box gap-btwn-two-section">
                                        <div class="nx-flex-row">
                                            <div class="box flex-box-size-01">
                                                <text class="text panel-body-link-font-bold text-color-white">Resource Center</text>
                                            </div>
                                            <div class="box flex-box-size-01">
                                                <text class="text panel-body-link-font-bold text-color-white">Need Analysis</text>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <!-- Panel footer -->
                                    <div class="panel-footer presale-body-footer gap-btwn-two-section">
                                        <div class="nx-flex-row row-alignment">
                                            <div class="flex-box-size-01">
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
                                    <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_add_white_36x36.png"></image>  
                                </div>

                                <!-- Panel footer -->
                                <div class="panel-footer on-boarding-body-footer-color margin-onboarding">
                                    <div class="nx-flex-row row-alignment">
                                        <div class="flex-box-size-01" @click.native="jump('/official')">
                                            <text class="panel-heading-font text-color-white">ONBOARDINGgggg</text>
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
                <div class="box flex-box-size-01" >
                    <div class="nx-flex-column">
                        <div class="shadow" style="background-color: #2C3E50">
                            <!-- Footer -->
                            <div class="panel-footer margin-onboarding" style="background-color:#1C2833;margin-top:400px;">
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
                                    <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/social/person_white_36x36.png"></image>  
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
                                        <div class="flex-box-size-01">
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
                                    <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"></image>  
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
                                        <div class="flex-box-size-01">
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
                                        <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"></image>  
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
                                            <div class="flex-box-size-01">
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
                                        <image  class="panel-icon-size" src="https://www.materialui.co/materialIcons/action/build_white_36x36.png"></image>  
                                    </div>
                                    
                                    <!-- Panel body -->
                                
                                    <!-- Panel body have one flex row and inside columns -->
                                
                                    <div class="box gap-btwn-two-section">
                                        <text class="panel-heading-font text-color-white box">Digital East Contest</text>
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
                                    <div class="nx-flex-column news-scroller" >
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
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        data: function() {
            return {
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
            dropDownPicker() {
                picker.pick({
                    index: this.index,
                    items
                },
                event => {
                    if (event.result === "success") {
                        this.value = items[event.data];
                        this.index = event.data;
                    }
                });
            },

            dropDownHideShow() {
                this.dashoardPanel.dropDown.listShow = !this.dashoardPanel.dropDown.listShow;
            },

            pickerListItems(keyIndex) {
                this.dashoardPanel.dropDown.selected = this.dashoardPanel.dropDown.listItems[keyIndex];

            }
        }
    }
</script>

<style scoped>
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
        height: 249px;
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
            width: 1170px;
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
    
    }
</style>