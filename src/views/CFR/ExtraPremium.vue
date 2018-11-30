<template>
    <div class="" style="background-color: #F7F7F7">
        <!-- Header -->
        <!-- <div class="nx-flex-row page-header items-justify-center items-align-center">
                <text class="page-heder-title">Extra Premium Payment</text>
            </div> -->
        <scroller>
            <div class="nx-flex-row items-justify-center nx-flex-direction-change" style="padding-top:20px;">
                <div class="box master-page-wrapper">
                    <div class="nx-flex-row nx-flex-direction-change" style="justify-content:center">

                        <div class="nx-flex-column extr-premium-column-p-width">
                            <div class="medical-cfr-card cfr-card-height shadow">
                                <div class="nx-flex-row">
                                    <div class="flex-01">
                                        <div class="box card-title-border border-width">
                                            <text class="text bold-text ">CFR Details</text>
                                        </div>
                                    </div>
                                    <div class="box">
                                        <text class="text">15/12/2015  |</text>
                                    </div>
                                    <div class="box">
                                        <text class="text bold-text" style="color:green;">OPEN</text>
                                    </div>
                                </div>
                                <div>
                                    <div class="box">
                                        <text class="text">Proposer's Name: {{cfrDetails.propName}}</text>

                                    </div>
                                    <div class="box">
                                        <text class="text box">Client ID: {{cfrDetails.clientID}} </text>

                                    </div>
                                    <div class="box">
                                        <text class="text box">Application No.: {{cfrDetails.applicationNo}} </text>

                                    </div>
                                    <div class="box">
                                        <text class="text box">Plan: {{cfrDetails.plan}} </text>

                                    </div>
                                    <div class="box">
                                        <text class="text box">Received Premium: {{cfrDetails.recivedPremium}} </text>

                                    </div>
                                    <div class="box">
                                        <text class="text box">Deadline: {{cfrDetails.dedline}} </text>

                                    </div>

                                </div>
                                <div class="nx-flex-row">
                                    <div class="box  x-small-btn">
                                        <!-- <div class="md-custom-btn btn-color">
                                            <div class="btn-icon-size">
                                                <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/communication/email_white_192x192.png" />
                                            </div>
                                            <text class="md-btn-label text-color-white">EMAIL</text>
                                        </div> -->
                                        <p-button btn-icon="https://www.materialui.co/materialIcons/communication/call_white_216x216.png"
                                        btn-name="CALL"></p-button>
                                    </div>
                                    <div class="box  x-small-btn">
                                        <!-- <div class="md-custom-btn btn-color">
                                            <div class="btn-icon-size">
                                                <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/communication/email_white_192x192.png" />
                                            </div>
                                            <text class="md-btn-label text-color-white">SMS</text>
                                        </div> -->
                                        <p-button btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png"
                                        btn-name="SMS"></p-button>
                                    </div>
                                    <div class="box x-small-btn">
                                        <!-- <div class="md-custom-btn btn-color">
                                            <div class="btn-icon-size">
                                                <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/communication/call_white_192x192.png"></image>
                                            </div>
                                            <text class="md-btn-label text-color-white">CALL</text>
                                        </div> -->
                                        <p-button btn-icon="https://www.materialui.co/materialIcons/communication/email_white_192x192.png"
                                        btn-name="EMAIL"></p-button>
                                    </div>
                                </div>

                            </div>

                            <div class="nx-flex-row medical-cfr-card shadow">
                                <text class="text" style="color:blue">View CFR Log</text>
                            </div>
                        </div>

                        <div class="nx-flex-column extra-premium-col-p-wdt">
                            <div class="medical-cfr-card shadow margin-left-in-card">
                                <div class="card-title-border title-width box">
                                    <text class="text bold-text ">Extra Premium Payment</text>
                                </div>

                                <div class="nx-flex-row nx-flex-direction-change only-table-row s-tb-whole-bdr">
                                    <!-- Here page Wraper is used for Color -->
                                    <div class="nx-flex-column">
                                        <div class="table-heading table-row-bg-color box">
                                            <text class="text">Description</text>
                                        </div>
                                        <div class="table-heading box">
                                            <text class="text ">Extra Premium of ₹5000 required</text>
                                        </div>

                                    </div>
                                    <div class="nx-flex-column" style="flex:1">
                                        <div class="table-heading table-row-bg-color box">
                                            <text class="text ">Comments</text>
                                        </div>
                                        <div class="table-heading box">
                                            <text class="text">This extra premium is being asked after going through proposers investments</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="link-margin">
                                    <div class="box">
                                        <text class="text ">Amount for extra premium payment</text>
                                    </div>
                                    <div class="box">
                                        <text class="price-font">₹ 5,000</text>
                                    </div>
                                </div>

                                <div class="nx-flex-row link-margin">
                                    <image v-if="platform !== 'Web'" class="check-box" :src="chImage" @click ="checkBoxToggle()"/>
                                    <image v-if="platform === 'Web'" class="check-box" :src="chImage" @click.native ="checkBoxToggle()"/>
                                    <div class="box">
                                        <text class="text">I Agree to Terms and Conditions</text>
                                    </div>
                                </div>

                                <div class="nx-flex-row-revers">
                                    <div class="box md-btn-width">
                                        <div class="md-custom-btn btn-color-green">

                                            <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/action/payment_white_48x48.png"></image>
                                            <div class="box">
                                                <text class="md-btn-label text-color-white">Make Payment</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="nx-flex-row-revers medical-cfr-card shadow margin-left-in-card">
                                <div class="box md-btn-width">
                                    <!-- <div class="md-custom-btn btn-color">
                                        <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/notification/sync_white_36x36.png"></image>
                                        <div class="box">
                                            <text class="md-btn-label text-color-white">Save</text>
                                        </div>
                                    </div> -->

                                    <p-button btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"
                                        btn-name="Save"></p-button>
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
    const chBox = [
        "https://www.materialui.co/materialIcons/toggle/check_box_outline_blank_black_192x192.png",
        "https://www.materialui.co/materialIcons/toggle/check_box_black_192x192.png"
    ];

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    import PButton from '../../components/vx-primary-button/vx-primary-button.vue'

    export default {
         created() {
            this.$store.commit('SET_PAGE_TITLE' , 'CFR');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        data() {
            return {
                platform: invalid,
                headerName: 'Medical CFR',
                cfrDetails: {
                    propName: 'Amit Joshi',
                    clientID: 'BRSMCU002',
                    applicationNo: '0012TRA871',
                    plan: 'Endowment Plan',
                    recivedPremium: '₹ 5,000',
                    dedline: '20/10/2018'
                },

                chImage: chBox[0],
                chValue: false
            }
        },

        methods: {
            checkBoxToggle() {
                if (this.chImage === chBox[0] && this.chValue === false) {
                    this.chImage = chBox[1];
                    this.chValue = true;
                } else {
                    this.chImage = chBox[0];
                    this.chValue = false;
                }
                console.log(this.chValue);
            }
        },

        components: {
            PButton
        }

    }
</script>

<style>
    /* APK */
    .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
    
    .table-row-bg-color {
        background-color: rgb(230, 230, 230);
    }
    
    .nx-flex-wrap {
        flex-wrap: wrap;
    }
    
    .nx-flex-row {
        flex-direction: row;
    }
    
    .nx-flex-column {
        flex-direction: column;
    }
    
    .nx-flex-row-revers {
        flex-direction: row-reverse;
    }
    
    .nx-flex-direction-change {
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
        color: white;
        font-family:robotoregular;
    }
    
    .text {
        font-size: 24px;
        font-family:robotoregular;
    }
    
    .medical-cfr-card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    
    .box {
        padding: 10px;
    }
    
    .btn-color {
        background-color: rgb(33, 34, 35);
    }
    
    .btn-color-green {
        background-color: #79BE46;
    }
    
    .btn-color-green:active {
        background-color: rgb(84, 143, 42);
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
    
    .md-btn-label {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family:robotoregular;
    }
    
    .btn-color:active {
        background-color: rgb(5, 4, 4);
    }
    
    .md-btn-width {
        width: 300px;
    }
    
    .x-small-btn {
        width: 210px;
    }
    
    .table-heading {
        padding: 20px;
    }
    
    .link-margin {
        margin-top: 50px;
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

    .price-font {
        font-size: 30px;
        font-family:robotoregular;
    }
    
    .border-width {
        width: 150px;
    }
    
    .title-width {
        max-width: 290px;
    }
    
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    
    .check-box {
        width: 50px;
        height: 50px;
    }

    /* whole table border dont change in this class pleas becouse copy form other file*/
    .s-tb-whole-bdr {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(202, 202, 202);
    }

    
    @media (min-width: 320px) {
        .nx-flex-direction-change {
            flex-direction: column;
        }
        .content-width {
            width: 100%;
        }
        .page-header {
            height: 50px;
        }
        .page-heder-title {
            font-size: 16px;
            font-family:robotoregular;
        }
        .text {
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
            max-height: 270px;
            
        }
        .price-font {
            font-size: 16px;
            font-family:robotoregular;
        }
        .card-title-border {
            border-bottom-width: 4px;
            margin-bottom: 10px;
        }
        .box {
            padding: 5px;
        }
        .md-custom-btn {
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            cursor: pointer;
        }
        .md-btn-label {
            font-size: 11px;
            font-family:robotoregular;
        }
        /* .md-custom-btn:active {
            background-color: rgb(5, 4, 4);
        } */
        .md-btn-width {
            width: 50%;
        }
        .x-small-btn {
            width: 32%;
        }
        .table-heading {
            padding: 10px;
        }
        .title-width {
            max-width: 183px;
        }
        .border-width {
            width: 100px;
        }
        .link-margin {
            margin-top: 50px;
        }
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }
        .check-box {
            width: 25px;
            height: 25px;
        }
    }
    
    @media (min-width: 768px) {
        .margin-left-in-card {
            margin-left: 20px;
        }
        .md-btn-width {
            width: 20%;
        }
        .nx-flex-direction-change {
            flex-direction: row;
        }
        .only-table-row {
            flex-direction: column;
        }
        .container-width {
            max-width: 750px;
        }
        .md-btn-width {
            width: 50%;
        }

        .extra-premium-col-p-wdt {
            width: 65%
        }
    }
    
    @media (min-width: 992px) {
        .nx-flex-direction-change {
            flex-direction: row;
        }
        /* .container-width {
            max-width: 1200px;
        } */
        .md-btn-width {
            width: 20%;
        }

        .extr-premium-column-p-width {
            width: 25%;
        }

        .extra-premium-col-p-wdt {
            width: 70%
        }
        


    }
</style>