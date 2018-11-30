<template>  
    <div class="">
        <!-- Header -->
        <!-- <div class="documt-flex-row page-header documt-documtitems-justify-center documt-items-align-center">
            <text class="page-heder-title">Upload CFR</text>
        </div> -->
        <scroller>
            <div class="documt-flex-row documt-documtitems-justify-center documt-flex-direction-change" style="padding-top:20px;">
                <div class="documt-box-pading documt-master-page-wrapper">
                    <div class="documt-flex-row documt-flex-direction-change">

                        <div class="documt-flex-column">
                            <!-- <div class="documt-doc-cfr-card cfr-card-height documt-shadow">
                                <div class="documt-flex-row">
                                    <div class="documt-flex-01 ">
                                        <div class="documt-box-pading documt-card-title-border cfr-card-t-bdr">
                                            <text class="documt-normal-text-size documt-bold-text">CFR Details</text>
                                        </div>
                                        
                                    </div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size ">15/12/2015  |</text>
                                    </div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size documt-bold-text " style="color:green;">Open</text>
                                    </div>
                                </div>
                                <div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size">Proposer's Name: {{cfrDetails.propName}}</text>
                                    </div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size">Client ID: {{cfrDetails.clientID}} </text>
                                    </div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size">Application No.: {{cfrDetails.applicationNo}} </text>
                                    </div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size ">Plan: {{cfrDetails.plan}} </text>
                                    </div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size ">Received Premium: {{cfrDetails.recivedPremium}} </text>
                                    </div>
                                    <div class="documt-box-pading">
                                        <text class="documt-normal-text-size ">Deadline: {{cfrDetails.dedline}} </text>
                                    </div>
                                </div>
                                <div class="documt-flex-row">
                                    <div class="documt-box-pading documt-flex-01">
                                        <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                            <div class="documt-cfr-x-btn-icon-size">
                                                <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/communication/email_white_192x192.png"/>                                    
                                            </div>
                                            <text class="documt-cfr-up-md-btn-label">EMAIL</text>
                                        </div>
                                    </div>
                                    <div class="documt-box-pading documt-flex-01">
                                        <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                            <div class="documt-cfr-x-btn-icon-size">
                                                <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png"/>
                                            </div>
                                            <text class="documt-cfr-up-md-btn-label">SMS</text>
                                        </div>
                                    </div>
                                    <div class="documt-box-pading documt-flex-01">
                                        <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                            <div class="documt-cfr-x-btn-icon-size">
                                                <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/communication/call_white_192x192.png"/>
                                            </div>
                                            <text class="documt-cfr-up-md-btn-label">CALL</text>
                                        </div>
                                    </div>
                                </div>
                                
                            </div> -->

                            <div class="documt-cfr-card reurment-height documt-shadow">
                                <div class="documt-flex-row">
                                    <div class="documt-flex-01">
                                        <div class="documt-box-pading documt-card-title-border documt-cfr-requir-width">
                                            <text class="documt-normal-text-size documt-bold-text">Requirements</text>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="(item, id) in requirmt" :key="id" class="documt-flex-row reurment-list documt-items-align-center justify-space">
                                    <div>
                                        <text class="documt-normal-text-size">{{id+1}}. {{item}}</text>
                                    </div>
                                    <div>
                                        <image class="documt-list-icon-size" src="https://www.materialui.co/materialIcons/alert/warning_amber_192x192.png"></image>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class="documt-flex-row documt-doc-cfr-card documt-shadow">
                                <text class="documt-normal-text-size documt-box-pading" style="color:blue">View CFR Log</text>
                            </div>
                        </div>

                        <div class="documt-flex-column" style="flex:1">
                            <!-- This design is for bowser web not for mobile web -->
                            <div class="documt-doc-cfr-card documt-shadow documt-margin-left-in-card documt-whole-card-hide" v-if="platform === 'Web'">
                                <div class="documt-card-title-border documt-cfr-card-2-width documt-box-pading">
                                    <text class="documt-normal-text-size documt-bold-text">Upload Address Proof</text>
                                </div>

                                <div class="documt-flex-row documt-flex-direction-change documt-only-table-row">
                                    <!-- Here page Wraper is used for Color -->
                                    <div class="documt-flex-column documt-btm-margin">
                                        <div class="documt-table-heading documt-u-cfr-page-wraper">
                                            <text class="documt-normal-text-size">Description</text>
                                        </div>
                                        <div class="documt-table-heading">
                                            <text class="documt-normal-text-size documt-box-pading">Address Proof not approved</text>
                                        </div>
                                        
                                    </div>
                                    <div class="documt-flex-column">
                                        <div class="documt-table-heading documt-u-cfr-page-wraper">
                                            <text class="documt-normal-text-size">Comments</text>
                                        </div>
                                        <div class="documt-table-heading">
                                            <text class="documt-normal-text-size documt-box-pading">Alternate address proof of the LA/Proposer is required which is within last 6 months</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="documt-btm-margin">
                                    <text class="documt-normal-text-size documt-box-pading">Please select the document type you would like to upload for your Address Proof</text>
                                </div>

                                <div class="documt-flex-row">
                                    <div class="documt-box documt-flex-01">
                                        <text class="documt-form-labels">Select Document Type</text>
                                        <select class="documt-normal-text-size documt-input">
                                            <option v-for="(li, index) in listItems" :key="index"> {{li}} </option>
                                        </select>  
                                    </div>
                                    <div class="documt-documt-pading documt-flex-01">
                                        <text class="documt-form-labels">You can add multiple images for a document</text>
                                        <div class="documt-flex-row">
                                            
                                            <div class="documt-box-pading">
                                                <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                    <text class="documt-cfr-up-md-btn-label">Upload</text>
                                                </div>
                                            </div>
                                            <div class="documt-box-pading">
                                                <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                    <text class="documt-cfr-up-md-btn-label documt-text-color-white">Gallery</text>
                                                </div>
                                            </div>
                                            <div class="documt-box-pading">
                                                <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                    <text class="documt-cfr-up-md-btn-label documt-text-color-white">Browse</text>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div class="complete-border documt-btm-margin" style="background-color:#FDFDCB;border-radius:10px;">
                                    <text class="documt-normal-text-size">Please ensure that that image you upload is clear and verifiable.</text>
                                </div>

                                <!-- Table code -->
                                <div class="documt-flex-column">
                                    <div class="">
                                        <div class="documt-flex-row documt-u-cfr-page-wraper">
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">Image</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Category & Type</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">CFR ID</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Upload Date / Time</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">Actions</text>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="">
                                        <div class="documt-flex-row documt-items-align-center">
                                            <div class="documt-table-heading" style="flex:1">
                                                <image class="documt-id-prof" src="https://i.ytimg.com/vi/VlWj3GqoRQg/maxresdefault.jpg"></image>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Photo ID PAN Card</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">AFR12012</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">01/01/2016 | 10:06 am</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">Actions</text>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                
                                

                            </div>

                            <!-- Mobile Web -->
                            <div class="documt-hide-mobile-cards">
                                <div class="documt-upload-small-list-card documt-shadow">
                                    <text class="documt-normal-text-size documt-bold-text" @click="displayDocumnentUploadSection(1)">Address Proof</text>

                                    <div v-if="addressProfSection === true">
                                        <div class="documt-flex-column documt-my-custom-table documt-btm-margin" >
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text">Description</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Address Proof not approved</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Comments</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Alternate address proof of the LA/Proposer is required which is within last 6 months</text>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="documt-box-pading documt-flex-01 documt-btm-margin">
                                            <text class="documt-normal-text-size">Please select the document type you would like to upload for your Address Proof</text>
                                        </div>

                                        <div class="documt-box-pading documt-flex-01 documt-btm-margin" v-if="platform === 'Web'">
                                            <text class="documt-form-labels">Select Document Type</text>
                                            <select class="documt-normal-text-size documt-input">
                                                <option v-for="(li, index) in listItems" :key="index"> {{li}} </option>
                                            </select>  
                                        </div>

                                        
                                        <div class="documt-box-pading documt-flex-01">
                                            <text class="documt-form-labels">You can add multiple images for a document</text>
                                            <div class="documt-flex-row">
                                                
                                                <div class="documt-box-pading documt-flex-01">
                                                    <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                        <text class="documt-cfr-up-md-btn-label">Upload</text>
                                                    </div>
                                                </div>
                                                <div class="documt-box-pading documt-flex-01">
                                                    <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                        <text class="documt-cfr-up-md-btn-label documt-text-color-white">Gallery</text>
                                                    </div>
                                                </div>
                                                <div class="documt-box-pading documt-flex-01">
                                                    <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                        <text class="documt-cfr-up-md-btn-label documt-text-color-white">Browse</text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="documt-flex-column documt-my-custom-table documt-btm-margin">
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text">Image</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <image class="documt-id-prof" src="https://i.ytimg.com/vi/VlWj3GqoRQg/maxresdefault.jpg"/>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr">
                                                <div class="documt-box-pading documt-flex-01 documt-tbl-row-padding">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Category & Type</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Photo ID PAN Card</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">CFR ID</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Photo ID PAN Card</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Upload Date / Time </text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">01/01/2016 | 10:06 am</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Actions</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png"/>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Button -->
                                        <div class="documt-box-pading documt-md-btn-width">
                                            <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                <div class="documt-cfr-x-btn-icon-size">
                                                    <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"/>                                            
                                                </div>
                                                <text class="documt-cfr-up-md-btn-label">Save and Sync</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Section -->
                                
                                <div class="documt-upload-small-list-card documt-shadow" >
                                    <text class="documt-normal-text-size documt-bold-text" @click="displayDocumnentUploadSection(2)">Photo ID</text>


                                    <!-- -->
                                    <div v-if="photoIDSection === true">
                                        <div class="documt-flex-column documt-my-custom-table documt-btm-margin" >
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text">Description</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Address Proof not approved</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Comments</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Alternate address proof of the LA/Proposer is required which is within last 6 months</text>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="documt-box-pading documt-flex-01 documt-btm-margin">
                                            <text class="documt-normal-text-size">Please select the document type you would like to upload for your Address Proof</text>
                                        </div>

                                        <div class="documt-box-pading documt-flex-01 documt-btm-margin" v-if="platform === 'Web'">
                                            <text class="documt-form-labels">Select Document Type</text>
                                            <select class="documt-normal-text-size documt-input">
                                                <option v-for="(li, index) in listItems" :key="index"> {{li}} </option>
                                            </select>  
                                        </div>

                                        <div v-if="platform !== 'Web'">
                                            <apk-drop-down :opt="listItems"></apk-drop-down>
                                        </div>

                                        <div class="documt-box-pading documt-flex-01">
                                            <text class="documt-form-labels">You can add multiple images for a document</text>
                                            <div class="documt-flex-row">
                                                
                                                <div class="documt-box-pading documt-flex-01">
                                                    <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                        <text class="documt-cfr-up-md-btn-label">Upload</text>
                                                    </div>
                                                </div>
                                                <div class="documt-box-pading documt-flex-01">
                                                    <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                        <text class="documt-cfr-up-md-btn-label documt-text-color-white">Gallery</text>
                                                    </div>
                                                </div>
                                                <div class="documt-box-pading documt-flex-01">
                                                    <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                        <text class="documt-cfr-up-md-btn-label documt-text-color-white">Browse</text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="documt-flex-column documt-my-custom-table documt-btm-margin" style="margin-bottom: 50px">
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text">Image</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <image class="documt-id-prof" src="https://i.ytimg.com/vi/VlWj3GqoRQg/maxresdefault.jpg"/>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Category & Type</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Photo ID PAN Card</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">CFR ID</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">Photo ID PAN Card</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-my-custom-tb-btm-bdr documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Upload Date / Time </text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <text class="documt-normal-text-size">01/01/2016 | 10:06 am</text>
                                                </div>
                                            </div>
                                            <div class="documt-flex-row documt-tbl-row-padding">
                                                <div class="documt-box-pading documt-flex-01">
                                                    <text class="documt-normal-text-size documt-bold-text documt-flex-01">Actions</text>
                                                </div>
                                                <div class="documt-box-pading documt-flex-02">
                                                    <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="documt-box-pading documt-md-btn-width">
                                            <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                                <div class="documt-cfr-x-btn-icon-size">
                                                    <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"/>                                            
                                                </div>
                                                <text class="documt-cfr-up-md-btn-label">Save and Sync</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <!-- inside Data -->
                                
                                <!-- photo ID end -->
                                <div class="documt-upload-small-list-card documt-shadow">
                                    <div class="documt-flex-row">
                                        <div class="documt-box-pading documt-flex-01">
                                            <text class="documt-normal-text-size documt-bold-text">Age Proof</text>
                                        </div>
                                        <div class="documt-box-pading">
                                            <div class="documt-cfr-x-btn-icon-size">
                                                <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_down_grey_192x192.png"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="documt-upload-small-list-card documt-shadow">
                                    <text class="documt-normal-text-size documt-bold-text">Identity Proof</text>
                                </div>
                                <div class="documt-upload-small-list-card documt-shadow">
                                    <text class="documt-normal-text-size documt-bold-text">Income Proof</text>
                                </div>
                            </div>
                            
                            <!-- End -->
                            <div class="documt-flex-row-revers documt-doc-cfr-card documt-shadow documt-margin-left-in-card documt-whole-card-hide" v-if="platform === 'Web'">
                                <div class="documt-box-pading documt-md-btn-width">
                                    <div class="documt-cfr-up-md-custom-btn documt-cfr-bk-btn-color">
                                        <div class="documt-cfr-x-btn-icon-size">
                                            <image class="documt-cfr-x-btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"/>
                                        </div>
                                        <text class="documt-cfr-up-md-btn-label">Save and Sync</text>
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
// cfr-dropDown-apk
import apkDropDown from '../CFR/cfr-dropDown-apk'
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'


const items = [
    "Aadhar Card-not provisionl(LR)",
    "Banker's Certification",
    "Bank Acct Statement",
    "Bihar St. ParichayPatra (LR)",
    "Credit Card Stmt 3 Mth(LR/ HR)",
    "Cert from Ward officer (LR)",
    "Caste & Domicile Cert. (LR)",
    "DRIV LCN",
    "Electricity Bill",
    "Employer's Certificate 2 Months",
    "Gas connection card/Bill (LR)",
    "Gazetted Officer",
    "Incorporation Certificate",
    "Life Insurance Policy (LR)",
    "I. tax/Wealth tax ass (LR/ HR)",
    "Lease Agrmnt wth Rnt Rcpt 3mth",
    "Rgd.Lease Agmt 6 Mth(LR/ HR)",
    "Memorandum & Articles of Assoc",
    "Special Executive Magistrate",
    "Mutual Fund stmt 3 Mth(LR/ HR)",
    "Others",
    "PAN Allotment Letter",
    "PASSPORT",
    "Pension Pmt Order by gov (LR)",
    "Pension Pmt Order by gov (LR)",
    "Public Authority Ltr",
    "Power of Attorney",
    "Ration Card",
    "Letter from SEM/GO/PA* (LR)",
    "Telephone Bill",
    "Certificate by VEO/HEAD (LR)",
    "Voter's Identity Card"
    ];
    export default {
        components:{
           
            apkDropDown
        },
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                // return this.platform
            }
        },
        data() {
            return {
                headerName:'Medical CFR',
                listItems: items,
                cfrDetails: {
                    propName: 'Amit Joshi',
                    clientID: 'BRSMCU002',
                    applicationNo: '0012TRA871',
                    plan: 'Endowment Plan',
                    recivedPremium: '5,000',
                    dedline: '20/10/2018'
                },

                requirmt: [
                    "Address Proof- XY33M",
                    "Photo ID- XY34M",
                    "ID Proof- XY33N",
                    "Income Proof- XY33T",
                    "Age Proof- XY33L"
                ],
                addressProfSection: false,
                photoIDSection: false
            }
        },
        methods: {
            displayDocumnentUploadSection(sectionId) {
                switch(sectionId) {
                    case 1: 
                        if(this.addressProfSection === true) {
                            this.addressProfSection = false
                        } else {
                            this.addressProfSection = true;
                        }
                    break;
                    case 2: 
                        if(this.photoIDSection === true) {
                            this.photoIDSection = false
                        } else {
                            this.photoIDSection = true;
                        }
                    break;
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
    /* APK */

    
    .documt-u-cfr-page-wraper {
        background-color: rgb(230, 230, 230);
        /* padding:20px; */
    }

    .page-header {
        height: 100px;
        background-color: #3b371e;
        top: -1px;
        margin-bottom: 40px;
    }

    .page-heder-title {
        font-size: 30px;
        color: white;
        font-family:robotoregular;
    }

    .documt-doc-cfr-card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    
    .nx-flex-wrap {
        flex-wrap: wrap;
    }
    
    .documt-flex-row {
        flex-direction: row;
    }
    
    .documt-flex-column {
        flex-direction: column;
    }
    
    .documt-flex-row-revers {
        flex-direction: row-reverse;
    }
    
    .documt-flex-direction-change {
        flex-direction: column;
    }
    
    .text-keep-center {
        text-align: center;
    }
    
    .text-right {
        text-align: right;
    }
    
    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }
    
    .documt-items-align-center {
        align-items: center;
    }
    
    .documt-documtitems-justify-center {
        justify-content: center;
    }
    .justify-space {
        justify-content: space-between;
    }
    
    .self-align {
        align-self: flex-end;
    }
    
    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .documt-flex-01 {
        flex: 1;
    }
    
    .documt-flex-02 {
        flex: 2;
    }

    .documt-card-title-border {
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 10px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    }

    /* Full border */
    
    .complete-border {
        border-width: 2px;
        border-style: solid;
        border-color: #FFB600;
        padding: 15px;
    }

    .documt-cfr-bk-btn-color {
        background-color: rgb(33, 34, 35);
    }

    .documt-cfr-up-md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 88px;
        cursor: pointer;
    }

    .documt-cfr-up-md-btn-label {
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
        color:#fff;
        font-family:robotoregular;
    }

    .documt-cfr-up-md-custom-btn:active {
        background-color:rgb(5, 4, 4);
    }
    .documt-md-btn-width {
        width: 300px;
    }

    .documt-box-pading {
        padding: 10px;
    }

    .x-small-btn {
         width: 210px;
    }

    .documt-table-heading {
        padding: 20px;
    }

    .documt-cfr-x-btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }

    .documt-normal-text-size {
        font-size: 24px;
        font-family:robotoregular;
    }

    .comunication-btn-width {
        width: 210px;
    }
    .documt-upload-small-list-card {
        padding: 30px;
        background-color: #FFF;
        margin-bottom: 10px;
    }
    .documt-my-custom-table {
        margin-top: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(216, 216, 216);
    }
    .documt-my-custom-tb-btm-bdr {
        border-width: 2px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: rgb(216, 216, 216);
    } 

    /* border width class */
    .cfr-card-t-bdr {


    }
    .documt-cfr-requir-width {
        width: 180px;
    }
    .documt-cfr-card-2-width {
        width: 160px;
    }

    /* Reuriment List */
    .reurment-list {
        padding: 25px;
        border-bottom-width: 1px;
        margin-bottom: 0;
        border-bottom-color: #e7e7e7;
        
    }
    .documt-list-icon-size {
        width:30px;
        height: 30px;
    }
    .documt-btm-margin {
        margin-bottom: 25px;
    }
    .documt-id-prof {
        width: 100px;
        height: 60px;
    }
    .documt-tbl-row-padding {
        padding: 15px;
    }
    @media (min-width: 320px) {
        .documt-tbl-row-padding {
            padding: 5px;
        }
        .documt-flex-direction-change {
            flex-direction: column;
        }

        .documt-form-labels {
            font-size: 13px;
            color: #a5a5a5;
            font-family:robotoregular;
        }

        .content-width {
            width: 100%;
        }
        .page-header {
            height: 50px;
            margin-bottom: 20px;
        }
        .page-heder-title {
            font-size: 16px;
            font-family:robotoregular;
        }
        .documt-normal-text-size {
            font-size: 14px;
            font-family:robotoregular;
        }
        .documt-doc-cfr-card {
            background-color: #ffffff;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 20px;
            border-radius: 2px;
        }
        .cfr-card-height {
            max-height: 270px;
            
        }
        .documt-card-title-border {
            border-bottom-width: 4px;
            margin-bottom: 10px;
        }
        .documt-box-pading {
            padding: 5px;
        }
        .documt-shadow {
            box-documt-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .documt-cfr-bk-btn-color {
            background-color: rgb(33, 34, 35);
        }
        .documt-cfr-up-md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
            cursor: pointer;
        }
        .documt-cfr-up-md-btn-label {
            font-size: 11px;
            font-weight: 500;
            cursor: pointer;
            color: #fff;
            font-family:robotoregular;
        }
        .documt-cfr-up-md-custom-btn:active {
            background-color: rgb(5, 4, 4);
        }
        .documt-md-btn-width {
            width: 50%;
        }
        .documt-table-heading {
            padding: 10px;
        }
        .title-width {
            max-width: 183px;
        }
        .link-margin {
            margin-top: 20px;
        }
        .reurment-list {
            padding: 15px;
        }
        .reurment-height {
            height: auto;
        }
        .documt-id-prof {
            width: 70px;
            height: 40px;
        }
        .documt-btm-margin {
            margin-bottom: 20px;
        }

        .documt-list-icon-size {
            width:20px;
            height: 20px;
        }

        /* Border width */
        .cfr-card-t-bdr {
            width: 92px;
        }
        .documt-cfr-requir-width {
            width: 108px;
        }
        .documt-cfr-card-2-width {
            width: 160px;
        }
        .documt-cfr-x-btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }

        /* here display none is used to totaly change ui */
        .documt-whole-card-hide {
            display: none;
        }

        /* New List */
        /* 19-04-2018 */
        .documt-upload-small-list-card {
           padding: 20px;
           background-color: #FFF;
           margin-bottom: 10px;
        }

        .documt-hide-mobile-cards {
            display: block;
        }

        .documt-my-custom-table {
            margin-top: 20px;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(216, 216, 216);
        }
    }
    
    @media (min-width: 768px) {
        .documt-margin-left-in-card {
            margin-left: 20px;
        }
        .documt-md-btn-width {
            width: 20%;
        }
        .documt-flex-direction-change {
            flex-direction: row;
        }
        .documt-only-table-row {
            flex-direction: column;
        }
        .container-width {
            max-width: 750px;
        }
        .documt-md-btn-width {
            width: 50%;
        }
    }
    
    @media (min-width: 992px) {
        .documt-flex-direction-change {
            flex-direction: row;
        }
        .container-width {
            max-width: 1200px;
        }
        .documt-md-btn-width {
            width: 20%;
        }

        .documt-whole-card-hide {
            display: block;
        }

        .documt-hide-mobile-cards {
            display: none;
        }
    }
</style>