<template>  
    <div class="" >
        <!-- Header -->
        <!-- <div v-if="platform === 'Web'" class="nx-flex-row-cfr page-header items-justify-center items-align-center">
            <text class="page-heder-title">Medical CFR</text>
        </div> -->
        <scroller>
        <div class="nx-flex-row-cfr items-justify-center medical-cfr-flx-dir-switch" style="padding:20px">
            
            <div class="box-medical-cfr master-page-wrapper">
                <div class="nx-flex-row-cfr medical-cfr-flx-dir-switch">
                    <div class="medical-cfr-card cfr-card-height shadow medical-cfr-left-crd-width">
                        <div class="nx-flex-row-cfr">
                            <div class="flex-01">
                                <div class="box-medical-cfr card-title-border medical-cfr-border-width">
                                    <text class="medical-cfr-crd-heading bold-text-cfr">CFR Details</text>
                                </div>
                            </div>
                            <div class="box-medical-cfr">
                                <text class="text-cfr">15/12/2015  |</text>
                            </div>
                            <div class="box-medical-cfr">
                                <text class="medical-cfr-crd-heading bold-text-cfr cursor-pointer-globle" style="color:green;">OPEN</text>
                            </div>
                        </div>
                        <div>
                            <div class="box-medical-cfr">
                                <text class="text-cfr">Proposer's Name: {{cfrDetails.propName}}</text>
                            </div>
                            <div class="box-medical-cfr">
                                <text class="text-cfr">Client ID: {{cfrDetails.clientID}} </text>
                            </div>
                            <div class="box-medical-cfr">
                                <text class="text-cfr">Application No.: {{cfrDetails.applicationNo}} </text>
                            </div>
                            <div class="box-medical-cfr">
                                <text class="text-cfr">Plan: {{cfrDetails.plan}} </text>
                            </div>
                            <div class="box-medical-cfr">
                                <text class="text-cfr">Received Premium: {{cfrDetails.recivedPremium}} </text>
                            </div>
                            <div class="box-medical-cfr">
                                <text class="text-cfr">Deadline: {{cfrDetails.dedline}} </text>
                            </div>
                            
                            
                        </div>
                        <div class="nx-flex-row-cfr">
                            <div class="box-medical-cfr x-small-btn-medi">
                                <div class="md-custom-btn btn-color">
                                    <div class="btn-icon-size">
                                        <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/communication/email_white_192x192.png"/>                                    
                                    </div>
                                    <text class="md-btn-label-cfr text-color-white cursor-pointer-globle">EMAIL</text>

                                </div>
                            </div>
                            <div class="box-medical-cfr x-small-btn-medi">
                                <div class="md-custom-btn btn-color">
                                    <div class="btn-icon-size">
                                        <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png"></image>
                                    </div>
                                    <text class="md-btn-label-cfr text-color-white cursor-pointer-globle">SMS</text>
                                </div>
                            </div>
                            <div class="box-medical-cfr x-small-btn-medi">
                                <div class="md-custom-btn btn-color">
                                    <div class="btn-icon-size">
                                        <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/communication/call_white_192x192.png"></image>
                                    </div>
                                    <text class="md-btn-label-cfr text-color-white cursor-pointer-globle">CALL</text>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="nx-flex-column" style="flex:1">
                        <div class="medical-cfr-card shadow margin-left-in-card">
                            <div class="card-title-border medical-cfr-title-width box-medical-cfr">
                                <text class="medical-cfr-crd-heading bold-text-cfr">Medical Tests Details</text>
                            </div>

                            <div class="medical-cfr-flx-dir-switch medi-table-row s-tb-whole-bdr">
                                <!-- Here page Wraper is used for Color -->
                                <div class="nx-flex-column">
                                    <div class="table-heading medi-table-row-bg-color box-medical-cfr">
                                        <text class="text-cfr">Medical Tests Required</text>
                                    </div>
                                    <div class="table-heading">
                                        <div class="box-medical-cfr">
                                            <text class="text-cfr">For Example – Libido Test</text>
                                        </div>
                                        <div class="box-medical-cfr">
                                            <text class="text-cfr">2D Echo with color Doppler</text>
                                        </div>
                                        <div class="box-medical-cfr">
                                            <text class="text-cfr">Serum Alkaline Phosphates</text>
                                        </div>
                                        <div class="box-medical-cfr">
                                            <text class="text-cfr">Anti HCV</text>
                                        </div>
                                        <div class="box-medical-cfr">
                                            <text class="text-cfr">Complete blood count</text>
                                        </div>
                                        <div class="box-medical-cfr">
                                            <text class="text-cfr">FDS (Family Doctor Statement)</text>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="nx-flex-column" style="flex:1"> 
                                    <div class="table-heading medi-table-row-bg-color box-medical-cfr">
                                        <text class="text-cfr ">Remarks</text>
                                    </div>
                                    <div class="table-heading box-medical-cfr">
                                        <text class="text-cfr">These test have been prescribed after going through the clients family history</text>
                                    </div>
                                </div>
                            </div>
                            <div class="link-margin">
                                <div v-if="platform==='Web'" class="box-medical-cfr">
                                    <text class="text-cfr cursor-pointer-globle" style="color:blue;" @click.native="openListofTPA">View list of TPAs</text>
                                </div>

                                <div v-if="platform !=='Web'" class="box-medical-cfr">
                                    <text class="text-cfr" style="color:blue;" @click="openListofTPA">View list of TPAs</text>
                                </div>

                                <div  v-if="platform === 'Web'" class="box-medical-cfr ums-status-width">
                                    <text class="text-cfr cursor-pointer-globle" style="color:blue;" @click.native="jump('/checkstatus')">Check UMS Status</text>
                                </div>

                                <div v-if="platform !=='Web'" class="box-medical-cfr">
                                    <text class="text-cfr " style="color:blue;" @click="jump('/checkstatus')">Check UMS Status</text>
                                </div>
                            </div>
                        </div>
                        <div class="nx-flex-row-cfr-revers medical-cfr-card shadow margin-left-in-card ">
                            <div class="md-btn-width">
                                <div class="md-custom-btn btn-color">
                                    <div class="box-medical-cfr">
                                        <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/content/save_white_192x192.png"/>                                    
                                    </div>
                                    <div>
                                        <text class="md-btn-label-cfr text-color-white cursor-pointer-globle">Save</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- overlay -->
                    <div class="overlay-wraper" v-if="show === true">
                        <div class="overlay-container">
                            <div class="nx-flex-row-cfr page-header items-justify-center items-align-center">
                                <text class="text-cfr bold-font white-color">List of TPA'S</text>
                            </div>
                            <div class="overlay-body">
                                <div v-for="(li, index) in tpaList" :key="index" class="list-container">
                                    <div class="botm-margin">
                                        <text class="text-cfr bold-font ">{{li.titleName}}</text>
                                    </div>
                                    <div class="">
                                        <text class="text-cfr botm-margin">{{li.detail}}</text>
                                    </div>
                                    <div class="nx-flex-row-cfr items-align-center">
                                        <text class="text-cfr">{{li.contact}}</text>
                                        <div class="icon-left-margin box-medical-cfr icon-active">
                                            <image class="btn-icon-size icon-position" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Action Bar -->
                            <div class="footer-action-bar">
                                <div class="md-custom-btn btn-color overlaybtnwidth" @click.native="closeOverlayWindow">
                                    <!-- <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"></image>                                     -->
                                    <text class="md-btn-label-cfr text-color-white cursor-pointer-globle">Cancel</text>
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

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'



export default {
    created() {
        this.$store.commit('SET_PAGE_TITLE' , 'CFR');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            this.deviceWidth = WXEnvironment.deviceWidth || unknown
            // return this.platform
        }
    },
    data() {
        return {
            show: false,
            platform: invalid,
            cfrDetails: {
                propName: 'Rahul Soni',
                clientID: 'BRSMCU002',
                applicationNo: '0012TRA871',
                plan: 'Increasing Insurance Plan',
                recivedPremium: '₹ 5,000',
                dedline: '20/10/2018'
            },

            tpaList: [{
                titleName: 'Family Health Plan Limited',
                detail: 'Family Health Plan Limited Srinilaya - Cyber spazio suite 101,102,109 & 110, Ground Floor, Road No. 2, Banjara Hills, Hyderabad, Telangana - 500034',
                contact: '1800 425 4033'
            }, {
                titleName: 'Family Health Plan Limited',
                detail: 'Family Health Plan Limited Srinilaya - Cyber spazio suite 101,102,109 & 110, Ground Floor, Road No. 2, Banjara Hills, Hyderabad, Telangana - 500034',
                contact: '1800 425 4033'
            }, {
                titleName: 'Family Health Plan Limited',
                detail: 'Family Health Plan Limited Srinilaya - Cyber spazio suite 101,102,109 & 110, Ground Floor, Road No. 2, Banjara Hills, Hyderabad, Telangana - 500034',
                contact: '1800 425 4033'
            }         
            ]
        }
    },
    methods: {
        openOverlayWindow () {
            this.show = true;
        },
        closeOverlayWindow () {
            this.show = false;
        },
        jump(navigationLink) {
            if (this.$router) {
                this.$router.push(navigationLink)
            }
        },

        openListofTPA() {
            if(this.platform !== 'Web') {
                this.jump('/list-of-tpa');
            // } else if(this.platform === 'Web' && this.deviceWidth > 1000) {
            //     this.jump('/list-of-tpa');
            } else {
                this.openOverlayWindow();
                console.log(this.deviceWidth);
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

    .medi-table-row-bg-color {
        background-color: rgb(230, 230, 230);
    }

    .nx-flex-wrap {
        flex-wrap: wrap;
    }

    .nx-flex-row-cfr {
        flex-direction: row;
    }

    .nx-flex-column {
        flex-direction: column;
    }

    .nx-flex-row-cfr-revers {
        flex-direction: row-reverse;
    }

    .medical-cfr-flx-dir-switch {
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

    .items-align-center {
        align-items: center;
    }

    .items-justify-center {
        justify-content: center;
    }

    .self-align {
        align-self: flex-end;
    }

    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }

    .flex-01 {
        flex: 1;
    }
    .flex-02 {
        flex: 2;
    }
    .page-header {
        height: 100px;
        background-color: #3b371e;
        top: -1px;
    }

    .page-heder-title {
        font-size: 35px;
        color:white;
        font-family:robotoregular;
    }

    .text-cfr {
        font-size: 24px;
        font-family:robotoregular;
    }

    .medical-cfr-card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 12px;
        margin-bottom: 20px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .box-medical-cfr {
        padding: 10px;
    }

    .btn-color {
        background-color: rgb(33, 34, 35);
    }

    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 88px;
        cursor: pointer;
    }

    .md-btn-label-cfr {
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
        color:#fff;
        font-family:robotoregular;
    }

    .md-custom-btn:active {
       opacity:0.8;
    }

    .md-btn-width {
        width: 300px;
    }

    .x-small-btn-medi {
         width: 210px;
    }

    .table-heading {
        padding: 20px;
    }

    .link-margin {
        margin-top: 20px;
    }

    .card-title-border {
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

    .medical-cfr-border-width {
        width: 200px;
    }

    .medical-cfr-title-width {
        max-width: 320px;
    }
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }

    .bold-font {
        font-weight: bold;
        font-family:robotoregular;
    }
    .white-color {
        color: #FFFFFF;
    }

    .medical-cfr-crd-heading {
        font-size: 30px;
        font-family:robotoregular;
    }

    /* whole table border dont change in this class pleas becouse copy form other file*/
    .s-tb-whole-bdr {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(202, 202, 202);
    }
    @media (min-width: 320px) {

        .medical-cfr-flx-dir-switch {
            flex-direction: column;
        }
        .content-width {
            width: 100%;
        }

        .medical-cfr-crd-heading {
            font-size: 16px;
            font-family:robotoregular;
        }

        .page-header {
            height: 50px;
        }

        .page-heder-title {
            font-size: 16px;
            font-family:robotoregular;
        }

        .text-cfr {
            font-size: 14px;
            font-family:robotoregular;
        }

        .medical-cfr-card {
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 20px;
            border-radius: 3px;
        }

        .cfr-card-height {
            max-height: 280px;;
        }

        .card-title-border {
            border-bottom-width: 4px;
            margin-bottom: 10px;
        }

        .box-medical-cfr {
            padding: 5px;
        }

        
        .md-custom-btn {
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            cursor: pointer;
        }

        .md-btn-label-cfr {
            font-size : 11px;
            font-family:robotoregular;
        }

    .md-custom-btn:active {
       opacity:0.8;
    }

        .md-btn-width {
            width: 50%;
        }
        .x-small-btn-medi {
            width: 20%;
            margin-right: 43px;
        }
        .table-heading {
            padding: 10px;
        }

        .medical-cfr-title-width {
            max-width: 173px;
        }

        .medical-cfr-border-width {
            width: 100px;
        }

        .link-margin {
            margin-top: 20px;
        }

        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }


        /* Overlaycode */
        .overlay-wraper {
            position: fixed;
            /* display: none; */
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 100;
            cursor: pointer;
        }
        .overlay-container {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 500px;
            width: 90%;
            border-radius: 3px;
            background-color:white;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            box-shadow: 0 5px 45px rgba(0, 0, 0, .5);
        }

        .overlay-body {
            height:400px;
            /* background: red; */
            overflow: auto;
        }
        .list-container {
            /* background-color: #fff; */
            padding: 10px;
            border-width: 1px;
            border-style: solid;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
            border-bottom-color: rgb(230, 230, 230);
        }
        .overlaybtnwidth {
            width: 20%;
        }
        .footer-action-bar {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: rgb(236, 236, 236);
            padding: 10px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            z-index: 10;
        }

        .ums-status-width {
            width: 128px;
        }

        .botm-margin {
            margin-bottom: 5px;
        }

    }

    @media (min-width: 768px) {
        .margin-left-in-card {
            margin-left: 20px;
        }

        .md-btn-width {
            width: 20%;
        }

        .medical-cfr-flx-dir-switch {
            flex-direction: row;
        }

        .medi-table-row {
            flex-direction: column;
        }

        .container-width {
            width: 750px;
        }

        .md-btn-width {
           
            width: 20%;
        }

        .icon-left-margin {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            margin-left: 10px;
        }

        .icon-active:active{
            background-color: #dfdfdf;   
        }

        .icon-position {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
        }


        /* Medical CFR card width */

        .medical-cfr-left-crd-width {
            width: 334px;
        }
    }

    @media (min-width: 992px) {
        .medical-cfr-flx-dir-switch {
            flex-direction: row;
        }

        .container-width {
            max-width: 1200px;
        }

        .md-btn-width {
            width: 15%;
        }
         .x-small-btn-medi {
            width: 50px;
            margin-right: 43px;
        }

        .overlay-container {
            height: 400px;
            width: 50%; 
        }
        .overlay-body {
            height:300px;
            /* background: red; */
            /* overflow: auto; */
        }

    }

        /* --------------- */
   

</style>
