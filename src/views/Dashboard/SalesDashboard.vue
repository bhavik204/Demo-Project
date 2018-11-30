<template>
    <scroller>
        <div class="master-page-wrapper" style="background-color: #F7F7F7">
        
            <div class="sales-dash-nx-flex-row sales-dash-nx-flex-row-column box flex-box-size-01 row-content-justify ">
                <!-- First Column -->
                <div class="flex-box-size-01">
                    <div class="sales-dash-flex-column sales-dash-flex-column-to-row">
                        <!-- Renwal wraper box -->
                        <div class="box flex-box-size-01">
                            <!-- Renewals Panel -->
                            <div class="sales-dash-flex-column shadow sales-dash-card-margin-5">
                                <!-- Panel Header -->
                                <div class="panel-footer" style="background-color:gray">
                                    <div class="sales-dash-nx-flex-row row-alignment">
                                        <div class="flex-box-size-01 add-left-short-padding">
                                            <text class="panel-heading-font text-color-white">RENEWALS</text>
                                        </div>
                                        <div class="add-short-right-padding">
                                            <!-- <div class="sales-dash-flex-column">
                                                <div>
                                                    <text class="panel-small-text text-color-white">Last Synced</text>
                                                </div>
                                                <div>
                                                    <text class="panel-small-text text-color-white">13 hours ago</text>
                                                </div>
                                            </div> -->
                                        </div>
                                        <!-- Refresh ICON -->
                                        <div class="add-left-short-padding add-icon-left-border">
                                            <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                        </div>
                                    </div>
                                </div>
                                <!-- 2nd -->
                                <!-- dropDown -->
                                <div v-for="(row, index) in renewalsPanel.rows" :key="index">
                                    <!-- dropdown -->
                                <div class="panel-middle" style="background-color:#f8f8f8">

                                    <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker(index)">
                                        <text class="text select-box mouse-pointer">{{ renSelectValue }}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                    </div>


                                    <!-- <div v-if="platform == 'Web'" class="drop-down dropDown-width" @click.native="dropDownHideShow(index)">
                                        <text class="text select-box mouse-pointer">{{row.selectedIndex}}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                        <div v-if="row.dropDownShow == true" class="drop-item-list shadow">
                                            <div v-for="(listItem, li) in dropList" :key="li">
                                                <div class="list-item-padding" @click.native="pickerListItems(li, index)">
                                                    <text class="text mouse-pointer">{{listItem}}</text>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div> -->
                                    <div v-if="platform == 'Web'">
                                        <select class="dash-custom-select-box dash-brd-listing-bdr">
                                            <!-- <option disabled value="1" class="bg-white-color">Year to Date</option> -->
                                            <option  value=""  selected>Year to Date</option>
                                            <option v-for="(listItem, li) in dropList" :key="li" class="bg-white-color"> {{listItem}} </option>
                                        </select>                            
                                    </div>

                                </div>

                                <div class="box" style="background-color:#fff;">
                                    <div class="sales-dash-nx-flex-row">
                                        <div class="box row-alignment flex-box-size-01">
                                            <div class="sales-dash-flex-column row-content-justify">
                                                <div class="row-text-alignment">
                                                    <!-- dynamic -->
                                                    <text class="large-text-font-size">{{row.allValue}}</text>
                                                </div>
                                                <div class="">
                                                    <!-- Label -->
                                                    <text class="text text-keep-center">{{row.allLabel}}</text>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box row-alignment flex-box-size-01">
                                            <div class="sales-dash-flex-column row-content-justify">
                                                <div>
                                                    <!-- dynamic -->
                                                    <text class="large-text-font-size">{{row.valueAmount}}</text>
                                                </div>
                                                <div>
                                                    <!-- Label -->
                                                    <text class="text text-keep-center">{{row.valueLabel}}</text>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                                </div>
                                

                            </div>
                        </div>

                        <!-- Birthday Panel Wraper box -->
                        <div class="box flex-box-size-01">
                            <!-- Birthdays -->
                            <div class="sales-dash-flex-column shadow sales-dash-card-margin-5">
                                <!-- Panel Header -->
                                <div class="panel-footer" style="background-color:gray">
                                    <div class="sales-dash-nx-flex-row row-alignment">
                                        <div class="flex-box-size-01 add-left-short-padding">
                                            <text class="panel-heading-font text-color-white">BIRTHDAYS</text>
                                        </div>
                                        <div class="add-short-right-padding">
                                            <!-- <div class="sales-dash-flex-column">
                                                <div>
                                                    <text class="panel-small-text text-color-white">Last Synced</text>
                                                </div>
                                                <div>
                                                    <text class="panel-small-text text-color-white">13 hours ago</text>
                                                </div>
                                            </div> -->
                                        </div>
                                        <!-- Refresh ICON -->
                                        <div class="add-left-short-padding add-icon-left-border">
                                            <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                        </div>
                                    </div>
                                </div>
                                <!-- 2nd -->
                                <!-- dropDown -->
                                <div class="panel-middle" style="background-color:#f8f8f8">

                                    <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker(3)">
                                        <text class="text select-box mouse-pointer">{{ birthSelect }}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                    </div>


                                    <!-- <div v-if="platform == 'Web'" class="drop-down dropDown-width" @click.native="dropDownHideShow(3)">
                                        <text class="text select-box mouse-pointer" >{{birthdaysPanel.selectedIndex}}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                        <div v-if="birthdaysPanel.dropDownShow == true" class="drop-item-list shadow">
                                            <div v-for="(listItem, li) in dropList" :key="li">
                                                <div class="list-item-padding" @click.native="pickerListItems(li, 3)">
                                                    <text class="text mouse-pointer">{{ listItem }}</text>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div> -->
                                    <div v-if="platform == 'Web'">
                                        <select class="dash-custom-select-box dash-brd-listing-bdr">
                                            <!-- <option disabled value="" class="bg-white-color">Choose..</option> -->
                                            <option  value=""  selected>Year to Date</option>
                                            <option v-for="(listItem, li) in dropList" :key="li" class="bg-white-color"> {{listItem}} </option>
                                        </select>                            
                                    </div>

                                </div>
                                <!-- cONTENT BODY -->
                                <div class="box" style="background-color:#fff;">
                                    <!-- ROW CONTAINS PROFILE PIC NAME AND ICONS -->
                                    <div v-for="(list, listIndex) in birthdaysPanel.userList" :key="listIndex">
                                        <div class="sales-dash-nx-flex-row row-alignment dash-brd-listing-bdr bdr-lisiting-color-change">
                                        <!-- Pic -->
                                            <div class="box">
                                                <image class="user-profile-circle" :src="list.image"/>

                                            </div>
                                            <!-- Name -->
                                            <div class="box flex-box-size-01">
                                                <text class="text">{{list.name}}</text>
                                            </div>
                                            <!-- List Iocn -->
                                            <div class="box">
                                                <image class="list-arrow-icon" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_36x36.png"></image>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box"  style="background-color:#fff;">
                                    <text class="text" style="color:blue;cursor:pointer;">+{{birthdaysPanel.more}} more</text>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <!--Second Column -->
                <div class="flex-box-size-02">
                    <!-- Column -->
                    <div class="sales-dash-flex-column">
                        <!-- Wrapper MY Application-->
                        <div>
                            <!-- row -->
                            <div class="sales-dash-nx-flex-row sales-dash-nx-flex-row-column sales-dash-flex-column-to-row nx-fl-di">
                                <!-- My Application Wraper-->
                                <div class="box flex-box-size-01">
                                    <div class="sales-dash-flex-column shadow sales-dash-card-margin-5">
                                        <!-- Panel Header -->
                                        <div class="panel-footer" style="background-color:gray">
                                            <div class="sales-dash-nx-flex-row row-alignment">
                                                <div class="flex-box-size-01 add-left-short-padding">
                                                    <text class="panel-heading-font text-color-white">MY APPLICATIONS</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <!-- <div class="sales-dash-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-white">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-white">13 hours ago</text>
                                                        </div>
                                                    </div> -->
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding add-icon-left-border">
                                                    <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="panel-middle" style="background-color:#f8f8f8">

                                            <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker(4)">
                                                <text class="text select-box mouse-pointer">{{ myAppSelect }}</text>
                                                <div class="drop-arrow-pos">
                                                    <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                                </div>
                                            </div>

                                            <!-- <div v-if="platform == 'Web'" class="drop-down dropDown-width" @click.native="dropDownHideShow(4)">
                                                <text class="text select-box mouse-pointer">{{myApplication.selectedIndex}}</text>
                                                <div class="drop-arrow-pos">
                                                    <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                                </div>
                                                <div v-if="myApplication.dropDownShow == true" class="drop-item-list shadow">
                                                    <div v-for="(listItem, li) in dropList" :key="li">
                                                        <div class="list-item-padding" @click.native="pickerListItems(li, 4)">
                                                            <text class="text mouse-pointer">{{listItem}}</text>
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                            </div> -->
                                            <div v-if="platform == 'Web'">
                                                <select class="dash-custom-select-box dash-brd-listing-bdr">
                                                    <!-- <option disabled value="" class="bg-white-color">Choose..</option> -->
                                                    <option  value=""  selected>Year to Date</option>
                                                    <option v-for="(listItem, li) in dropList" :key="li" class="bg-white-color"> {{listItem}} </option>
                                                </select>                            
                                            </div>

                                        </div>
                                        <div class="box"  style="background-color:#fff;">
                                            <!-- Table row header -->
                                            <div class="sales-dash-nx-flex-row">
                                                <div class="box flex-box-size-01">
                                                    <text class="text panel-body-link-font-bold ">Status</text>
                                                </div>
                                                <div class="box flex-box-size-01">
                                                    <text class="text panel-body-link-font-bold ">Count</text>
                                                </div>
                                                <div class="box flex-box-size-01">
                                                    <text class="text panel-body-link-font-bold ">Value (Rs.)</text>
                                                </div>
                                            </div>
                                            <div v-for="(rowData, dataIndex) in myApplication.tableRow" :key="dataIndex">
                                                <div class="sales-dash-nx-flex-row">
                                                    <div class="box flex-box-size-01">
                                                        <text class="text">{{rowData.status}}</text>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <text class="text">{{rowData.count}}</text>
                                                    </div>
                                                    <div class="box flex-box-size-01">
                                                        <text class="text">{{rowData.value}}</text>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        

                                    </div>
                                </div>

                                <!-- CFR Wrapper -->
                                <div class="box flex-box-size-01">
                                    <div class="sales-dash-flex-column shadow sales-dash-card-margin-5">
                                        <!-- Panel Header -->
                                        <div class="panel-footer" style="background-color:gray">
                                            <div class="sales-dash-nx-flex-row row-alignment">
                                                <div class="flex-box-size-01 add-left-short-padding">
                                                    <text class="panel-heading-font text-color-white">CFR</text>
                                                </div>
                                                <div class="add-short-right-padding">
                                                    <!-- <div class="sales-dash-flex-column">
                                                        <div>
                                                            <text class="panel-small-text text-color-white">Last Synced</text>
                                                        </div>
                                                        <div>
                                                            <text class="panel-small-text text-color-white">13 hours ago</text>
                                                        </div>
                                                    </div> -->
                                                </div>
                                                <!-- Refresh ICON -->
                                                <div class="add-left-short-padding add-icon-left-border">
                                                    <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="panel-middle" style="background-color:#f8f8f8">
                                            <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker(7)">
                                                <text class="text select-box mouse-pointer">{{ cfrSelect }}</text>
                                                <div class="drop-arrow-pos">
                                                    <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                                </div>
                                            </div>

                                            <!-- <div v-if="platform == 'Web'" class="drop-down dropDown-width"  @click.native="dropDownHideShow(7)">
                                                <text class="text select-box mouse-pointer">{{cfr.selectedIndex}}</text>
                                                <div class="drop-arrow-pos">
                                                    <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                                </div>
                                                <div v-if="cfr.dropDownShow == true" class="drop-item-list shadow">
                                                    <div v-for="(listItem, li) in cfr.cfrList" :key="li">
                                                        <div class="list-item-padding" @click.native="pickerListItems(li, 7)">
                                                            <text class="text mouse-pointer">{{listItem}}</text>
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                            </div> -->
                                            <div v-if="platform == 'Web'">
                                                <select class="dash-custom-select-box dash-brd-listing-bdr">
                                                    <option disabled value="" class="bg-white-color">Choose..</option>
                                                    <option v-for="(listItem, li) in cfr.cfrList" :key="li" class="bg-white-color"> {{listItem}} </option>
                                                </select>                            
                                            </div>

                                        </div>

                                        
                                        <div class="box"  style="background-color:#fff;">
                                            <!-- <image src="https://i1.wp.com/www.google.com/help/hc/images/docs_190726c_pie_chart_en.gif?ssl=1" class="sales-cfr-image"/> -->
                                            <web ref="webview" src="http://159.89.161.64:8080/#/cfrchart"></web>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <!-- WRAPPER 2  MY BUSINESS-->
                        <div class="box">
                            <div class="sales-dash-flex-column shadow sales-dash-card-margin-5">
                                <!-- Panel Header -->
                                <div class="panel-footer" style="background-color:gray">
                                    <div class="sales-dash-nx-flex-row row-alignment">
                                        <div class="flex-box-size-01 add-left-short-padding">
                                            <text class="panel-heading-font text-color-white">MY BUSINESS</text>
                                        </div>
                                        <!-- <div class="add-short-right-padding">
                                            <div class="sales-dash-flex-column">
                                                <div>
                                                    <text class="panel-small-text text-color-white">Last Synced</text>
                                                </div>
                                                <div>
                                                    <text class="panel-small-text text-color-white">13 hours ago</text>
                                                </div>
                                            </div>
                                        </div> -->
                                        <!-- Refresh ICON -->
                                        <div class="add-left-short-padding add-icon-left-border">
                                            <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel-middle" style="background-color:#f8f8f8">
                                    <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker(5)">
                                        <text class="text select-box mouse-pointer">{{ myBusiSelect }}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                    </div>

                                    
                                    <!-- <div v-if="platform == 'Web'" class="drop-down dropDown-width" @click.native="dropDownHideShow(5)">
                                        <text class="text select-box mouse-pointer">{{myBusiness.selectedIndex}}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                        <div v-if="myBusiness.dropDownShow == true" class="drop-item-list shadow">
                                            <div v-for="(listItem, li) in dropList" :key="li">
                                                <div class="list-item-padding" @click.native="pickerListItems(li, 5)">
                                                    <text class="text mouse-pointer">{{listItem}}</text>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div> -->
                                    <div v-if="platform == 'Web'">
                                        <select class="dash-custom-select-box dash-brd-listing-bdr">
                                            <!-- <option disabled value="" class="bg-white-color">Choose..</option> -->
                                            <option  value=""  selected>Year to Date</option>
                                            <option v-for="(listItem, li) in dropList" :key="li" class="bg-white-color"> {{listItem}} </option>
                                        </select>                            
                                    </div>

                                </div>
                                <div class="box" style="background-color:#fff;">
                                    <!--  -->
                                    <div class="sales-dash-nx-flex-row sales-dash-nx-flex-row-column sales-dash-flex-column-to-row nx-fl-di">
                                        <div class="box flex-box-size-01" v-for="(bList, bIndex) in myBusiness.dataList" :key="bIndex">
                                            <div class="box box-btm-border">
                                                <div class="sales-dash-flex-column ">
                                                    <div class="box">
                                                        <text class="text panel-body-link-font-bold text-keep-center">{{bList.title}}</text>
                                                    </div>
                                                    <div class="sales-dash-nx-flex-row">
                                                        <div class="box flex-box-size-01">
                                                            <div class="sales-dash-flex-column">
                                                                <div class="box">
                                                                    <text class="text text-keep-center panel-body-link-font-bold label-gray-color">{{bList.headerLabel_1}}</text>
                                                                </div>
                                                                <div class="box">
                                                                    <text class="text text-keep-center">{{bList.value_01}}</text>
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div class="box flex-box-size-01">
                                                            <div class="sales-dash-flex-column">
                                                                <div class="box">
                                                                    <text class="text text-keep-center panel-body-link-font-bold label-gray-color">{{bList.headerLabel_2}}</text>
                                                                </div>
                                                                
                                                                <div class="box">
                                                                    <text class="text text-keep-center">{{bList.value_02}}</text>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                

                                                </div>

                                            </div>
                                            
                                            
                                        </div>
                                        

                                    </div>
                                </div>

                                <div class="box" style="background-color:#fff;">
                                    <div class="sales-dash-nx-flex-row sales-dash-nx-flex-row-column sales-dash-flex-column-to-row nx-fl-di">
                                        <div class="box flex-box-size-01">
                                            <div class="box box-btm-border">
                                                <div class="sales-dash-flex-column ">
                                                    <div class="box">
                                                        <text class="text panel-body-link-font-bold text-keep-center">RENEWALS (In Rs.)</text>
                                                    </div>
                                                    <div class="sales-dash-nx-flex-row">
                                                        <div class="box flex-box-size-01">
                                                            <div class="sales-dash-flex-column">
                                                                <div class="box">
                                                                    <text class="text text-keep-center panel-body-link-font-bold label-gray-color">Collected</text>
                                                                </div>
                                                                <div class="box">
                                                                    <text class="text text-keep-center">45000</text>
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div class="box flex-box-size-01">
                                                            <div class="sales-dash-flex-column">
                                                                <div class="box">
                                                                    <text class="text text-keep-center panel-body-link-font-bold label-gray-color">Due</text>
                                                                </div>
                                                                
                                                                <div class="box">
                                                                    <text class="text text-keep-center">87000</text>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                

                                                </div>

                                            </div>
                                        </div>

                                        <div class="box flex-box-size-01">
                                            <div class="box box-btm-border">
                                                <div class="sales-dash-flex-column ">
                                                    <div class="box">
                                                        <text class="text panel-body-link-font-bold text-keep-center">PERSISTENCY (In Rs.)</text>
                                                    </div>
                                                    <div class="sales-dash-nx-flex-row">
                                                        <div class="box flex-box-size-01">
                                                            <div class="sales-dash-flex-column">
                                                                <div class="box">
                                                                    <text class="text text-keep-center panel-body-link-font-bold label-gray-color">13th Month</text>
                                                                </div>
                                                                <div class="box">
                                                                    <text class="text text-keep-center">45%</text>
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div class="box flex-box-size-01">
                                                            <div class="sales-dash-flex-column">
                                                                <div class="box">
                                                                    <text class="text text-keep-center panel-body-link-font-bold label-gray-color">Total</text>
                                                                </div>
                                                                
                                                                <div class="box">
                                                                    <text class="text text-keep-center">27%</text>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                

                                                </div>

                                            </div>
                                        </div>

                                        <div class="box flex-box-size-01">
                                            <div class="box">
                                                <div class="sales-dash-flex-column ">
                                                    <div class="box">
                                                        <text class="text panel-body-link-font-bold text-keep-center">Total Premium (in Rs.)</text>
                                                    </div>
                                                    <div class="sales-dash-nx-flex-row">
                                                        <div class="box flex-box-size-01">
                                                            <div class="sales-dash-flex-column">
                                                                <div class="box">
                                                                    <text class="text text-keep-center panel-body-link-font-bold label-gray-color">WCP + Renewals</text>
                                                                </div>
                                                                <div class="box">
                                                                    <text class="text text-keep-center">2,50,000</text>
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
                        </div>

                        <!-- Wrapper 3 MY COMMISIONS-->
                        <div class="box">
                            <div class="sales-dash-flex-column shadow sales-dash-card-margin-5">
                                <!-- Panel Header -->
                                <div class="panel-footer" style="background-color:gray">
                                    <div class="sales-dash-nx-flex-row row-alignment">
                                        <div class="flex-box-size-01 add-left-short-padding">
                                            <text class="panel-heading-font text-color-white">MY COMMISSIONS</text>
                                        </div>
                                        <div class="add-short-right-padding">
                                            <!-- <div class="sales-dash-flex-column">
                                                <div>
                                                    <text class="panel-small-text text-color-white">Last Synced</text>
                                                </div>
                                                <div>
                                                    <text class="panel-small-text text-color-white">13 hours ago</text>
                                                </div>
                                            </div> -->
                                        </div>
                                        <!-- Refresh ICON -->
                                        <div class="add-left-short-padding add-icon-left-border">
                                            <image class="panel-footer-icon-size" src="https://www.materialui.co/materialIcons/av/loop_white_24x24.png"></image>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel-middle" style="background-color:#f8f8f8">
                                    <div v-if="platform !== 'Web'" class="drop-down dropDown-width" @click="dropDownPicker(6)">
                                        <text class="text select-box mouse-pointer">{{ myCommSelect }}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                    </div>


                                    <!-- <div v-if="platform == 'Web'" class="drop-down dropDown-width" @click.native="dropDownHideShow(6)">
                                        <text class="text select-box mouse-pointer">{{myCommisions.selectedIndex}}</text>
                                        <div class="drop-arrow-pos">
                                            <image  class="dropdown-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                                        </div>
                                        <div v-if="myCommisions.dropDownShow == true" class="drop-item-list shadow">
                                            <div v-for="(listItem, li) in dropList" :key="li">
                                                <div class="list-item-padding" @click.native="pickerListItems(li, 6)">
                                                    <text class="text mouse-pointer">{{listItem}}</text>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div> -->
                                    <div v-if="platform == 'Web'">
                                        <select class="dash-custom-select-box dash-brd-listing-bdr">
                                            <option disabled value="" class="bg-white-color">Choose..</option>
                                            <option v-for="(listItem, li) in dropList" :key="li" class="bg-white-color"> {{listItem}} </option>
                                        </select>                            
                                    </div>

                                </div>

                                <div class="" style="background-color:#fff">

                                    <my-com-table></my-com-table>
                                    <!-- Custome Table -->
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div> 
        </div>
    </scroller>
</template>

<script>
import myComTable from '../../components/my-com-table.vue'
const items = [ "Month to Date", "Year to Date", "Custom Date Range"];
const cfrList = ["All Open", "Open > 5 Days", "Due for cancellation in 7 days"]
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

    export default {
        created() {
          this.$store.commit('SET_PAGE_TITLE' , 'Dashboard');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        components: {
            myComTable
        },
        data: function() {
            return {
                dropList: items,
               
                renewalsPanel: {
                    
                    rows: [
                        {
                            selectedIndex: 'Month to Date',
                            allValue: 14,
                            allLabel: 'All',
                            valueAmount: 14000,
                            valueLabel: 'Value',
                            dropDownShow: false,
                            index: -1
                        },
                        {
                            selectedIndex: 'Month to Date',
                            allValue: 14,
                            allLabel: 'All',
                            valueAmount: 14000,
                            valueLabel: 'Value',
                            dropDownShow: false,
                            index: -1
                        }
                    ],
                },

                birthdaysPanel: {
                    selectedIndex: 'Month to Date', 
                    index: -1,
                    dropDownShow: false,
                    more: 2,
                    userList: [
                        {
                            image: "https://cdn.vox-cdn.com/thumbor/CDwac_nCcPBl-4rmi1BKg6rhtRA=/0x0:3975x2640/1200x800/filters:focal(1670x1002:2306x1638)/cdn.vox-cdn.com/uploads/chorus_image/image/58641295/913011958.jpg.0.jpg",
                            name: "Sudeep Makwaana"
                        },
                        {
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEp35r5gO-TT20q4tFKhpyHdmiOT20r5cdoB8jhbcfo2QMLAwGg",
                            name: "Gopal Hannurkar"
                        },
                        {
                            image: "http://bestprofilepix.com/wp-content/uploads/2014/03/cute-stylish-winter-girls-facebook-profile-pictures.jpg",
                            name: "Shurti Soni"
                        }
                    ]
                },

                myApplication: {
                    selectedIndex: 'Month to Date', 
                    dropDownShow: false,
                    index: -1,
                    tableRow: [
                        {
                            status: 'Login',
                            count: 4,
                            value: 180000
                        },
                        {
                            status: 'Issued',
                            count: 2,
                            value: 120000
                        },
                        {
                            status: 'Rejected',
                            count: 3,
                            value: 275000
                        }
                    ]        
                },

                myBusiness: {
                    selectedIndex: 'Month to Date',
                    dropDownShow: false,
                    index: -1,
                    dataList: [
                        {
                            title: 'NOP',
                            headerLabel_1: 'Login',
                            headerLabel_2: "Issuance",
                            value_01: 12,
                            value_02: 12
                        },
                        {
                            title: 'WRP (In Rs.)',
                            headerLabel_1: 'Login',
                            headerLabel_2: "Issuance",
                            value_01: 65000,
                            value_02: 65000
                        },
                        {
                            title: 'WCP (In Rs.)',
                            headerLabel_1: 'Login',
                            headerLabel_2: "Issuance",
                            value_01: 45000,
                            value_02: 45000

                        }
                        
                        // {
                        //     title: 'WCP (In Rs.)',
                        //     headerLabel_1: 'Collected',
                        //     headerLabel_2: "DUE",
                        //     value_01: 45000,
                        //     value_02: 45000
                        // }, 
                        // {
                        //     title: 'RENEWALS (In Rs.)',
                        //     headerLabel_1: 'Collected',
                        //     headerLabel_2: "DUE",
                        //     value_01: 45000,
                        //     value_02: 45000
                        // },
                        // {
                        //     title: 'PERSISTENCY (In Rs.)',
                        //     headerLabel_1: '13th MONTH',
                        //     headerLabel_2: "TOTAL",
                        //     value_01: '45%',
                        //     value_02: '27%'
                        // },
                        // {
                        //     title: 'PERSISTENCY (In Rs.)',
                        //     headerLabel_1: 'WCP',
                        //     headerLabel_2: "RENEWALS",
                        //     value_01: '',
                        //     value_02: 250000
                        // }
                    ]
                },

                myCommisions: {
                    selectedIndex: 'Month to Date',
                    dropDownShow: false,
                    index: -1,
                    dataTable: [
                        {
                            sideTitle: 'Premium Collected (in Rs.)',
                            renewals: {
                                perload_1: 180000,
                                perload_2: 180000
                            },
                            bussines: {
                                perload_1: 125000,
                                perload_2: 125000
                            },
                            total: 276933
                        },
                        {
                            sideTitle: 'Commission Earned (in Rs.)',
                            renewals: {
                                perload_1: 180000,
                                perload_2: 180000
                            },
                            bussines: {
                                perload_1: 125000,
                                perload_2: 125000
                            },
                            total: 276933
                        },
                        {
                            sideTitle: 'Status',
                            renewals: {
                                perload_1: 'Credited',
                                perload_2: 'Accured'
                            },
                            bussines: {
                                perload_1: 'Credited',
                                perload_2: 'Accured'
                            },
                            total: ''
                        }
                    ]
                },

                cfr: {
                    selectedIndex: 'Select',
                    dropDownShow: false,
                    cfrList,
                    index: -1

                }
            }
        },
        computed: {
            renSelectValue() {
                if (this.renewalsPanel.rows[0].index == -1) {
                    return "Month to Date";
                } else if (this.renewalsPanel.rows[0].index < items.length) {
                    return items[this.renewalsPanel.rows[0].index];
                }
                return "";
            },

            birthSelect() {
                if (this.birthdaysPanel.index == -1) {
                    return "Month to Date";
                } else if (this.birthdaysPanel.index < items.length) {
                    return items[this.birthdaysPanel.index];
                }
                return "";
            },

            myAppSelect() {
                if (this.myApplication.index == -1) {
                    return "Month to Date";
                } else if (this.myApplication.index < items.length) {
                    return items[this.myApplication.index];
                }
                return "";
            },
            myBusiSelect() {
                
                if (this.myBusiness.index == -1) {
                    return "Month to Date";
                } else if (this.myBusiness.index < items.length) {
                    return items[this.myBusiness.index];
                }
                return "";

            },

            myCommSelect() {

                if (this.myCommisions.index == -1) {
                    return "Month to Date";
                } else if (this.myCommisions.index < items.length) {
                    return items[this.myCommisions.index];
                }
                return "";

            },

            cfrSelect() {
                if (this.cfr.index == -1) {
                    return "Select";
                } else if (this.cfr.index < this.cfr.cfrList.length) {
                    return this.cfr.cfrList[this.cfr.index];
                }
                return "";
            }

        },
        methods: {
            dropDownPicker(pickerID) {
                switch(pickerID) {
                    case 0:
                        picker.pick({
                            index: this.renewalsPanel.rows[0].index,
                            items
                        },
                        event => {
                            if (event.result === "success") {
                                this.renSelectValue = items[event.data];
                                this.renewalsPanel.rows[0].index = event.data;
                            }
                        });
                    break;
                    case 1:
                        picker.pick({
                            index: this.renewalsPanel.rows[1].index,
                            items: this.dropList
                        },
                        event => {
                            if (event.result === "success") {
                                this.renSelectValue = items[event.data];
                                this.renewalsPanel.rows[1].index = event.data;
                            }
                        });
                    break;
                    case 3:
                        picker.pick({
                            index: this.birthdaysPanel.index,
                            items: this.dropList
                        },
                        event => {
                            if (event.result === "success") {
                                this.birthSelect = items[event.data];
                                this.birthdaysPanel.index = event.data;
                            }
                        });
                    break;
                    case 4:
                        picker.pick({
                            index: this.myApplication.index,
                            items: this.dropList
                        },
                        event => {
                            if (event.result === "success") {
                                this.myAppSelect = items[event.data];
                                this.myApplication.index = event.data;
                            }
                        });
                    break;
                    case 5:
                        
                        picker.pick({
                            index: this.myBusiness.index,
                            items: this.dropList
                        },
                        event => {
                            if (event.result === "success") {
                                this.myBusiSelect = items[event.data];
                                this.myBusiness.index = event.data;
                            }
                        });

                    break;
                    case 6:
                        
                        picker.pick({
                            index: this.myCommisions.index,
                            items: this.dropList
                        },
                        event => {
                            if (event.result === "success") {
                                this.myCommSelect = items[event.data];
                                this.myCommisions.index = event.data;
                            }
                        });

                    break;

                    case 7: 
                        picker.pick({
                            index: this.cfr.index,
                            items: this.cfr.cfrList
                        },
                        event => {
                            if (event.result === "success") {
                                this.cfrSelect = items[event.data];
                                this.cfr.index = event.data;
                            }
                        });

                    break;
                }
            },
            dropDownHideShow(id) {
                console.log('sjkdfhskjf' +  id);
                switch(id) {
                    case 0:
                        this.renewalsPanel.rows[0].dropDownShow = !this.renewalsPanel.rows[0].dropDownShow;
                        this.renewalsPanel.rows[1].dropDownShow = false;
                        this.birthdaysPanel.dropDownShow = false;
                        this.myApplication.dropDownShow = false;
                        this.myBusiness.dropDownShow = false;
                        this.myCommisions.dropDownShow = false;
                        this.cfr.dropDownShow = false;
                    break;
                    case 1:
                        this.renewalsPanel.rows[1].dropDownShow = !this.renewalsPanel.rows[1].dropDownShow;
                        this.renewalsPanel.rows[0].dropDownShow = false;
                        this.birthdaysPanel.dropDownShow = false;
                        this.myApplication.dropDownShow = false;
                        this.myBusiness.dropDownShow = false;
                        this.myCommisions.dropDownShow = false;
                        this.cfr.dropDownShow = false;
                    break;
                    case 3:
                        this.renewalsPanel.rows[1].dropDownShow = false;
                        this.renewalsPanel.rows[0].dropDownShow = false;
                        this.birthdaysPanel.dropDownShow = !this.birthdaysPanel.dropDownShow;
                        this.myApplication.dropDownShow = false;
                        this.myBusiness.dropDownShow = false;
                        this.myCommisions.dropDownShow = false;
                        this.cfr.dropDownShow = false;
                    break;
                    case 4:
                        this.renewalsPanel.rows[1].dropDownShow = false;
                        this.renewalsPanel.rows[0].dropDownShow = false;
                        this.birthdaysPanel.dropDownShow = false
                        this.myApplication.dropDownShow = !this.myApplication.dropDownShow;
                        this.myBusiness.dropDownShow = false;
                        this.myCommisions.dropDownShow = false;
                        this.cfr.dropDownShow = false;
                    break;
                    case 5:
                        this.renewalsPanel.rows[1].dropDownShow = false;
                        this.renewalsPanel.rows[0].dropDownShow = false;
                        this.birthdaysPanel.dropDownShow = false;
                        this.myApplication.dropDownShow = false;
                        this.myBusiness.dropDownShow = !this.myBusiness.dropDownShow;
                        this.myCommisions.dropDownShow = false;
                        this.cfr.dropDownShow = false;
                    break;
                    case 6:
                        this.renewalsPanel.rows[1].dropDownShow = false;    this.renewalsPanel.rows[0].dropDownShow = false;
                        this.birthdaysPanel.dropDownShow        = false;    this.myApplication.dropDownShow         = false;
                        this.myBusiness.dropDownShow           = false;    this.myCommisions.dropDownShow          = !this.myCommisions.dropDownShow;
                        this.cfr.dropDownShow = false;
                    break;
                    case 7:
                        this.renewalsPanel.rows[1].dropDownShow = false;    this.renewalsPanel.rows[0].dropDownShow = false;
                        this.birthdaysPanel.dropDownShow        = false;    this.myApplication.dropDownShow         = false;
                        this.myBusiness.dropDownShow           = false;    this.myCommisions.dropDownShow          = false;
                        this.cfr.dropDownShow = !this.cfr.dropDownShow;
                    break;
                }
            },

            pickerListItems(keyIndex, dropDownID) {
                switch(dropDownID)  {
                    case 0:this.renewalsPanel.rows[0].selectedIndex = this.dropList[keyIndex];break;
                    case 1:this.renewalsPanel.rows[1].selectedIndex = this.dropList[keyIndex];break; 
                    case 3:this.birthdaysPanel.selectedIndex        = this.dropList[keyIndex];break;
                    case 4:this.myApplication.selectedIndex         = this.dropList[keyIndex];break;
                    case 5:this.myBusiness.selectedIndex           = this.dropList[keyIndex];break;
                    case 6:this.myCommisions.selectedIndex          = this.dropList[keyIndex];break;
                    case 7:this.cfr.selectedIndex                   = this.cfr.cfrList[keyIndex];break;
                }
            }
        }
    
    }
</script>

<style >

    /* APK Version Code */

    .page-wraper {
        background-color: #ebebeb;
    }
    .shadow {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
    }

    .sales-dash-flex-column {
        flex-direction: column;
    }
    
    .sales-dash-nx-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .sales-dash-nx-flex-row-column {
        flex-direction: column;
    }

    .row-alignment {
        align-items: center;
    }

    .row-content-justify {
        justify-content: center;
    }
    .row-content-spaces {
        justify-content: space-between;
    }

    .box {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .box-btm-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #ffffff;
        border-right-color: #ffffff;
        border-left-color: #ffffff;
        border-bottom-color: #dadada;
    }

    .panel-footer {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .panel-footer-icon-size {
        height: 50px;
        width: 50px;
    }
    .add-left-short-padding {
        /* This class is used to assign padding between value and status */
        padding-left: 10px;
    }
    

    .add-short-right-padding {
        padding-right: 10px;
    }

    /* Flex Size */

    .flex-box-size-01 {
        flex: 1;
    }
    .flex-box-size-02 {
        flex: 2;
    }
    .flex-box-size-03 {
        flex: 3;
    }
    .flex-box-size-04 {
        flex: 4;
    }
    .flex-box-size-05 {
        flex: 5;
    }
    .flex-box-size-06 {
        flex: 6;
    }




    /* FONT SIZES */
    .label-gray-color {
        color: #9d9d9d;
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

    .panel-middle {
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 20px;
        padding-bottom: 20px;
        /* background: red; */
    }

    /* Used only renewals panel */
    .large-text-font-size {
        font-size: 60px;
    }

    .panel-body-link-font-bold {
        /* It is used for links to be bold */
        font-weight: bold;
    }

    .text {
        font-size: 24px;
    }

    .text-keep-center {
        text-align: center;
    }

    .user-profile-circle {
        width: 80px;
        height: 80px;
        background: purple;
        border-radius: 40px;
    }

    .list-arrow-icon {
        width: 30px;
        height: 30px;
    }

    /* Colors */
    .text-color-white {
        color: #ffffff;
    }

    .table-border {
        border-width: 1px;
        border-style: solid;
        border-color: mediumslateblue;
    }

    .drop-down {
        position: relative;
        border-width: 2px;
        border-style: solid;
        border-bottom-color: #d6d6d6;
        border-top-color: #F7F7F7;
        border-left-color: #F7F7F7;
        border-right-color: #F7F7F7;
        /* border-color: #cccccc; */
    }
    .dropDown-width {
        width: 400px;
    }
    .select-box {
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .dropdown-icon {
        width: 30px;
        height: 30px;
        
    }
    .drop-arrow-pos {
        /* width: 20px;
        height: 20px; */
        /* background-color: red; */
        position: absolute;
        top: 16px;
        right: 5;
    }

    /* Colors  */
    .ren-header-color {
        background-color: #1A5276;
    }
    .ren-midd-color {
         background-color: #1F618D;
    }
    .ren-body-color {
        background-color: #2471A3;
    }

    /* New Class added by usama */
    .dash-brd-listing-bdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: rgb(248, 248, 248);
        border-right-color:rgb(248, 248, 248);
        border-left-color: rgb(248, 248, 248);
        border-bottom-color: #d6d6d6;
    }

    .bdr-lisiting-color-change {
        border-top-color: #FFFFFF;
        border-right-color:#FFFFFF;
        border-left-color: #FFFFFF;
        border-bottom-color: #f0f0f0da;
    }

    .sls-dash-crd-bdr {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
    }

     .sales-dash-border-round {
            border-radius: 3px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(139, 139, 139);
        }

    @media (min-width: 320px) {
        .dash-custom-select-box {
            background-color: #f8f8f8;
            color: rgb(49, 49, 49);
            font-size: 15px;
            padding: 5px;
            width: 200px;
        }
        .dash-custom-select-box:focus {
            border-width: 2px;
        }
        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
            /* background: brown; */
        }

        .box-btm-border {
            border-width: 1px;
            border-style: solid;
            border-top-color: #ffffff;
            border-right-color: #dadada;
            border-left-color: #ffffff;
            border-bottom-color: #ffffff;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

        .sales-dash-nx-flex-row-column {
            flex-direction: column;
        }

        /* FONT SIZES */
        .panel-small-text {
        /* This font size is used in panel footer "last syn" */
            font-size: 10px;
            font-style: italic;
        }
        .panel-heading-font {
            font-size: 16px;
            font-weight: bold;
        }

        .text {
            font-size: 14px;
        }
        /* Used only renewals panel */
        .large-text-font-size {
            font-size: 30px;
        }

        .panel-footer {
            padding-left: 7px;
            padding-right: 7px;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .list-arrow-icon {
            width: 25px;
            height: 25px;
        }

        .add-left-short-padding {
            /* This class is used to assign padding between value and status */
            padding-left: 5px;
        }
        .add-short-right-padding {
            /* This class is used to assign padding between value and status */
            padding-left: 5px;
        }

        .panel-footer-icon-size {
            height: 24px;
            width: 24px;
        }

        .user-profile-circle {
            width: 40px;
            height: 40px;
           
            border-radius: 20px;
        }

        .panel-middle {
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
                border-bottom: 1px solid #D8D8D8;
    border-top: 1px solid #D8D8D8;
        }

        /* DropDowns */
        /* All Required Dropdowns Classes */
          .drop-down {
            position: relative;
            border-width: 1px;
            border-style: solid;
            border-top: none;
            border-right: none;
            border-left: none;
            border-bottom-color: #d6d6d6;
        }
        .dropDown-width {
            width: 250px;
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
        .sales-cfr-image {
            width: 150px;
            height: 100px;
        }

       

    }
    @media (min-width: 768px) {
        .sales-dash-flex-column-to-row {
            flex-direction: row;
        }
    }
    @media (min-width: 992px) {
        .page-wraper {
            background-color: #ebebeb;

            /* padding: 0 70px; */
        }
        .sales-dash-nx-flex-row-column {
            flex-direction: row;
        }

        /* This class is normally used in tab here it is used to convert it original possition */
        .sales-dash-flex-column-to-row {
            flex-direction: column;
        }

        .apply-width {
            width: 1170px;
        }

        .list-item-padding:active {
            background: #dadada;
        }

        .list-item-padding:hover {
            background: #dadada;
        }

        /* this flex direction is used to convert its proper direction in 992 pixel*/
        .nx-fl-di {
            flex-direction: row;
        }

        /* Only margin class is used to provide gap between all cards */
        .sales-dash-card-margin-5 {
            margin: 5px;
        }


        /* Currently not in used */
        /* .side-bx-width {
            width: 55%;
        } */
    }

</style>
