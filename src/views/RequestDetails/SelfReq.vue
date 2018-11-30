<template>
    <div class="raise-req-wrp-row">
        <div class="raise-req-cust-frm-page">
        
            <div class="raise-re-frm-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20">
                    <div class="raise-re-frm-dir raise-converts-to-col">
                        <div style="flex:1" class="raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Submit query on behalf of</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="slcOptOne"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select</option>
                                    <option v-for="(calc, li) in slcOptOne" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                        <div style="flex:1">
                            <!-- Empty field to managed form design -->
                        </div>
                    </div>
                </div>                
                <div style="flex:1;" class="mbt-i-ld-20">
                    <!-- Empty field to managed form design -->
                </div>
            </div>

            <!-- Search bar -->
             <div class="raise-re-frm-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="">

                    <div class="raise-re-frm-dir ">
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Search Policy By</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="searchByList"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Cust. Name</option>
                                    <option v-for="(calc, li) in searchByList" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <vx-input-box
                                vx-placeholder="Search"
                                message="This Field is required">
                            </vx-input-box>
                        </div>
                    </div>
                </div>                
                <div style="flex:1;" class="raised-ml-mr-5">
                    <!-- Empty Fields for form management -->
                </div>
            </div>

            <!-- Search bar end -->

            <div class="raise-re-frm-dir pd-rw-lft-rgt-10 raise-converts-to-col">
                <div style="flex:1" class="">
                    <div class="raise-re-frm-dir">
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Customer Name</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="custNameList"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select Customer Name</option>
                                    <option v-for="(calc, li) in custNameList" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Policy No.</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="slcOptOne"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select Policy No.</option>
                                    <option v-for="(calc, li) in polisyNoList" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>                
                <div style="flex:1;" class="">
                     <div class="raise-re-frm-dir">
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Plan Name</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="planNameList"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select Plan Name</option>
                                    <option v-for="(calc, li) in planNameList" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Query Type</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="slcOptOne"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select</option>
                                    <option v-for="(calc, li) in slcOptOne" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="raise-re-frm-dir pd-rw-lft-rgt-10 raise-converts-to-col">
                <div style="flex:1" class="">
                    <div class="raise-re-frm-dir">
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Service Request Type</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="subServRequList"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select Service Request Type</option>
                                    <option v-for="(calc, li) in subServRequList" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Sub-Service Request Type</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="slcOptOne"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select Request Type</option>
                                    <option v-for="(calc, li) in slcOptOne" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>                
                <div style="flex:1;" class="raised-ml-mr-5">
                    <!-- Empty Fields for form management -->
                </div>
            </div>

            <div class="raise-re-frm-dir pd-rw-lft-rgt-10">
                
                <div class="mbt-i-ld-20 raised-ml-mr-5" style="flex:1;">
                    <vx-input-box
                        vx-label="Description"
                        vx-placeholder="Enter Description"
                        message="This Field is required"
                        >
                    </vx-input-box>
                </div>
            </div>

            <div class="raise-re-frm-dir pd-rw-lft-rgt-10">
                
                <div class="mbt-i-ld-20 raised-ml-mr-5" style="flex:1;">
                    <div class="raise-reqt-frm-mrb-10">
                        <text class="raise-request-frm-bld-lbl rise-frm-lbl-fnt-wt">Current Details</text>
                    </div>
                    <vx-input-box
                        vx-label="Full Name"
                        vx-placeholder="Current Details"
                        message="This Field is required">
                    </vx-input-box>
                </div>
                <div class="mbt-i-ld-20 raised-ml-mr-5" style="flex:1;">
                    <div class="raise-reqt-frm-mrb-10">
                        <text class="raise-request-frm-bld-lbl rise-frm-lbl-fnt-wt">New Details</text>
                    </div>
                    <vx-input-box
                        vx-label="Full Name"
                        vx-placeholder="New Details"
                        message="This Field is required">
                    </vx-input-box>
                </div>
            </div>

            <div class="raise-re-frm-dir pd-rw-lft-rgt-10">
                
                <div class="mbt-i-ld-20 raised-ml-mr-5" style="flex:1;">
                    <div class="raise-reqt-frm-mrb-10">
                        <text class="raise-request-frm-bld-lbl rise-frm-lbl-fnt-wt">Upload Relevent Documents</text>
                    </div>
                    <div><text class="cntct-frm-lbl-size">Please select the document type you would like to upload for your Address Proof</text></div>

                </div>
            </div>


             <div class="raise-re-frm-dir pd-rw-lft-rgt-10 raise-requ-last-row-align raise-converts-to-col">
                <div style="flex:1" class="">
                    <div class="raise-re-frm-dir">
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            <text class="cntct-frm-lbl-size">Document Type</text>
                            <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                                <apk-drop-down :option-list="custNameList"></apk-drop-down>
                            </div>
                            <div v-if="platform === 'Web'">
                                <select v-model="qSelect" class="cursor-pointer-globle vx-globle-drp-down">
                                    <option value="" selected>Select Document</option>
                                    <option v-for="(calc, li) in custNameList" :key="li">{{calc}}</option>
                                </select>
                            </div>
                        </div>
                        <div style="flex:1" class="mbt-i-ld-20 raised-ml-mr-5">
                            
                            <vx-input-box
                                vx-label="Document Name"
                                vx-placeholder="Enter Document Name"
                                message="This Field is required">
                            </vx-input-box>
                            
                        </div>
                    </div>
                </div>                
                <div style="flex:1;" class="">
                     <div class="raise-re-frm-dir">

                        <div style="flex-direction:row;" v-if="platform === 'Web'">
                            <div class="raise-form-doc-btn-width mbt-i-ld-20 raised-ml-mr-5">
                                <vx-p-button
                                    btn-name="Upload"
                                    btn-icon="https://www.materialui.co/materialIcons/file/file_upload_white_192x192.png">
                                </vx-p-button>
                            </div>

                            <div class="raise-form-doc-btn-width mbt-i-ld-20 raised-ml-mr-5">
                                <vx-p-button
                                    btn-name="Gallery"
                                    btn-icon="https://www.materialui.co/materialIcons/editor/insert_photo_white_192x192.png">
                                </vx-p-button>
                            </div>

                        </div>

                        <div style="flex-direction:row;" v-if="platform !== 'Web'">
                            <div class="mbt-i-ld-20 raised-ml-mr-5">
                                <vx-p-button
                                    btn-name="Upload"
                                    btn-width="250px"
                                    btn-icon="https://www.materialui.co/materialIcons/file/file_upload_white_192x192.png">
                                </vx-p-button>
                            </div>

                            <div class="mbt-i-ld-20 raised-ml-mr-5">
                                <vx-p-button
                                    btn-width="250px"
                                    btn-name="Gallery"
                                    btn-icon="https://www.materialui.co/materialIcons/editor/insert_photo_white_192x192.png">
                                </vx-p-button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Table code copy from other file -->

            <!-- Table code -->
            <div class="raise-req-tb-col">
                <div class="">
                    <div class="documt-u-cfr-page-wraper" style="flex-direction:row;background-color: rgb(230, 230, 230);">
                        <div class="raise-req-doc-tb-hd-pad" style="flex:2">
                            <text class="raise-request-frm-bld-lbl">Image</text>
                        </div>
                        <div class="raise-req-doc-tb-hd-pad" style="flex:2">
                            <text class="raise-request-frm-bld-lbl">Category & Type</text>
                        </div>
                        <div class="raise-req-doc-tb-hd-pad" style="flex:1">
                            <text class="raise-request-frm-bld-lbl">CFR ID</text>
                        </div>
                    
                        <div class="raise-req-doc-tb-hd-pad" style="flex:1">
                            <text class="raise-request-frm-bld-lbl">Actions</text>
                        </div>
                    </div>

                </div>
                
                <div class="">
                    <div class="documt-items-align-center" style="flex-direction:row;align-items:center">
                        <div class="raise-req-doc-tb-hd-pad" style="flex:2">
                            <image class="documt-id-prof" src="https://i.ytimg.com/vi/VlWj3GqoRQg/maxresdefault.jpg"></image>
                        </div>
                        <div class="raise-req-doc-tb-hd-pad" style="flex:2">
                            <text class="raise-request-frm-bld-lbl">Photo ID PAN Card</text>
                        </div>
                        <div class="raise-req-doc-tb-hd-pad" style="flex:1">
                            <text class="raise-request-frm-bld-lbl">AFR12012</text>
                        </div>

                        <!-- here inline flex direction -row is fixed not changable -->
                        <div class="raise-req-doc-tb-hd-pad" style="flex-direction:row;flex:1">
                            <div style="margin-right: 10px;">
                                <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="raise-req-tb-ico cursor-pointer-globle" />
                            </div>
                            <div >
                                <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="raise-req-tb-ico cursor-pointer-globle" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import toggleBtn from '../../components/GenderView/genderView'
import apkDropDown from '../CFR/cfr-dropDown-apk'
import vxInputBox from '../../components/vx-input-box/vx-input-box'
import vxPButton from '../../components/vx-primary-button/vx-primary-button'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

// Submit query on behalf of
const slcOptOne = ["Self", "Another Advisor"]
const subServRequList = ["Change date of birth", "Option 1", "Option 2", "Option 3", "Option 4"]
const custNameList = ["Option 1", "Option 2", "Option 3", "Option 4"]
const polisyNoList = ["Option 1", "Option 2", "Option 3", "Option 4"]
const planNameList = ["Option 1", "Option 2", "Option 3", "Option 4"]
const searchByList = ["Client ID", "Policy Name", "Premium Type"]
export default {
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            this.deviceWidth = WXEnvironment.deviceWidth || unknown
        }
    },
    data() {
        return {
            platform: invalid,

            slcOptOne,
            subServRequList,
            custNameList,
            polisyNoList,
            planNameList,
            searchByList,
        
            qSelect: '',
        }
    },
    components: {
        toggleBtn,
        apkDropDown,
        vxInputBox,
        vxPButton
    },    
}
</script>

<style>

    /* @usama any work say usama */
     /* Dont Change any value in existing class */
    .raise-req-wrp-row {
        flex-direction: row;
        justify-content: center;
        /* align-items: center; */
    }

    .raise-req-cust-frm-page {
        background-color: #FFFFFF;
        border-radius: 3px;
    }

     /* This margin class is used to provide margin to all individual
        filed */
    .mbt-i-ld-20 {
        margin-bottom: 30px;
    }
    /* Dont Change any value in existing class */
    .raised-ml-mr-5 {
        margin-left: 20px;
        margin-right: 20px;
    }

    .frm-hedng-bold-16 {
        font-size: 28px;
        font-weight: 700;
        font-family:robotoregular;
    }

    .raise-re-frm-dir {
        flex-direction: column;
    }

    .cntct-frm-lbl-size {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
        font-family:robotoregular;
    }

    .raise-request-frm-bld-lbl {
        font-size: 24px;
        font-family:robotoregular;
    }
    .rise-frm-lbl-fnt-wt {
        font-weight: 700;
    }

    /* table code */

    .raise-req-tb-col {
        flex-direction: column;
    }

    .raise-req-doc-tb-hd-pad {
        padding: 20px;
    }

    .raise-req-tb-ico {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }

    @media screen and (min-width: 320px){

        .cntct-frm-lbl-size {
            font-size: 14px;
        }
       
        .raise-req-cust-frm-page {
            background-color: #FFFFFF;
            border-radius: 3px;
            /* padding: 20px; */
            width: 100%;
        }

         /* This margin class is used to provide margin to all individual
        filed */
        .mbt-i-ld-20 {
            margin-bottom: 20px;
        }

        .raised-ml-mr-5 {
            margin-left: 15px;
            margin-right: 15px;
        }

        .frm-hedng-bold-16 {
            font-size: 16px;
            font-weight: 700;
            font-family:robotoregular;
        }

        .raise-request-frm-bld-lbl {
            font-size: 14px;
            font-family:robotoregular;
        }

        .raise-reqt-frm-mrb-10 {
            margin-bottom: 10px;
        }

        /* Document upload btn width */

        .raise-form-doc-btn-width {
            width: 100px;
        }

        /* Table code */

        .raise-req-doc-tb-hd-pad {
            padding: 10px;
        }

        .raise-req-tb-ico {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }

        
    }
    @media screen and (min-width: 768px){
        /* This class is used to provide margin-left and right rows fileds */
        .raised-ml-mr-5 {
            margin-left: 5px;
            margin-right: 5px;
        }

        /* switching class */
        .raise-re-frm-dir {
            flex-direction: row;
        }  

        /* This class is used to make responsive nested child fileds */

        .raise-converts-to-col {
            flex-direction: column;
        }
    }
    @media screen and (min-width: 992px){
        .raise-requ-last-row-align {
            align-items: center;
        } 
        .raise-converts-to-col {
            flex-direction: row;
        }
        
    }

</style>


