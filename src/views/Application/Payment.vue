<template>
    <div style="background-color: #f7f7f7;">
        <!-- <inner-header  :headeTitle="headerName"  ></inner-header>
                <application-tab></application-tab> -->
        <scroller>
            <div class="container">
                <app-header v-show="deviceWidth > 768" v-if="platform === 'Web'"></app-header>

                <div class="side-container  page-animation" ref="pagewrap">
                    <div class="card-proposal">
                        <div class="table-row" style="flex-direction: column;padding-bottom:10px">
                            <text class="heading" @click.native="showOnline =!showOnline">Online</text>
                        </div>

                        <div class="onlineDetails">
                            <div class="table-row">

                                <text class="heading  prop-ins-card-title-border">Payment Review</text>
                            </div>
                            <div class="table-row row-structure" v-for="pay in Payment">

                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title">Installment Premium</text>
                                    <text class="heading-data">{{pay.InstallmentPremium}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title">Premium Frequency</text>
                                    <text class="heading-data">{{pay.Frequency}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title">Premium Paying Term</text>
                                    <text class="heading-data">{{pay.PremiumPayingTerm}}</text>
                                </div>
                             
                            </div>
                               <div class="btn-space" style=" flex-direction:row;justify-content: flex-end;padding-top:10px;padding-bottom:10px;">
                                    <div class="box md-btn-width" style="padding:10px;">
                                        <!-- <div class="md-custom-btn btn-color" >
                                            <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/action/payment_white_192x192.png"></image>
                                            <text class="md-btn-label ">Pay Now</text>
                                        </div> -->
                                         <div class="">
                                             
									<p-button btn-icon="https://www.materialui.co/materialIcons/action/payment_white_192x192.png" btn-name="Pay Now"></p-button>
								</div>
                                    </div>
                                </div>
                        </div>
                    </div>




                    <div class="card-proposal">
                        <div class="table-row" style="flex-direction: column;padding-bottom:10px">
                            <text class="heading" @click.native="showCheque =!showCheque">Cash/Cheque/DD</text>
                        </div>
                        <div class="onlineDetails" v-if="showCheque==true">
                            <div class="table-row">
                                <text class="heading">Payment Review</text>
                            </div>
                            <div class="table-row" v-for="cheq in Cheque" style="flex-direction:column">
                                <div class="row-structure">
                                <div class="table-data">
                                    <text class="form-title">Installment Premium</text>
                                    <text class="heading-data">{{cheq.InstallmentPremium}}</text>
                                </div>
                                <div class="table-data">
                                    <text class="form-title">Amount</text>
                                    <text class="heading-data">{{cheq.Amount}}</text>
                                </div>
                                <div class="table-data">
                                    <text class="form-title">Remmaining Amount</text>
                                    <text class="heading-data">{{cheq.RemmainingAmount}}</text>
                                </div>
                                </div>
                                <div class="row-structure">
                                <div class="table-data">
                                    <text class="form-title"> Premium Frequency</text>
                                    <text class="heading-data">{{cheq.Frequency}}</text>
                                </div>
                                <div style="flex: 2">
                                    <text class="form-title">Premium Paying Term</text>
                                    <text class="heading-data">{{cheq.PremiumPayingTerm}}</text>
                                </div>
                                </div>
                            </div>
                            <div class="table-row">
                                <text class="heading">Payment Details</text>
                            </div>

                            <div class="table-row">
                                <div style="flex-direction:column;flex:1">
                                    <text style="flex:0.7" class="form-title">Payment Mode</text>
                                    <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="titleType">{{value}}</text>
                                    <div class="drop-down" v-if="platform == 'Web'">
                                        <select style="flex:1">
                            <option class="dropdown-opt" v-for="calc in paymentList">{{calc}}</option>
                        </select>
                                    </div>
                                </div>

                                <div class="table-row-col-details" style="flex-direction:column;flex:1">
                                    <text  class="form-title">Instalment Premium</text>
                                    <input class="input" type="tel" style="flex:1" />


                                </div>
                            </div>
                            <div class="table-row">

                                <div style="flex-direction:column;flex:1" class="table-row-details">
                                    <text  class="form-title">Cheque/DD No.</text>
                                    <input class="input" type="text" style="flex:1" />
                                </div>
                                <div style="flex-direction: column;flex:1" class="table-row-col-details">
                                    <text  class="form-title">Cheque DD/Date</text>
                                    <input style="flex:1" type="date" placeholder="Input Date" class="input" max="2070-12-12" />

                                </div>



                            </div>
                            <div class="table-row">

                                <div style="flex-direction:column;flex:1" class="table-row-details">
                                    <text  class="form-title">Bank Name</text>
                                    <input class="input" type="text" style="flex:1" />
                                </div>
                                <div style="flex-direction: column;flex:1" class="table-row-col-details">
                                    <text  class="form-title">Bank Branch</text>
                                    <input style="flex:1" type="date" placeholder="Input Date" class="input" max="2070-12-12" />

                                </div>



                            </div>
                            <div class="btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                                <div class="box md-btn-width" style="padding:10px;">
                                    <div class="md-custom-btn btn-color" @click="jump('/proposalreport')">
                                        <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/action/payment_white_192x192.png"></image>
                                        <text class="md-btn-label ">Pay Now</text>
                                    </div>
                                </div>
                            </div>

                            <div class="table">
                                <scroller class="scroller">
                                    <div class="thead-row" style="flex-direction:row; flex-wrap: nowrap;">
                                        <div style="flex:1"> <text class="heading">Installment Premium</text></div>
                                        <div style="flex:1"> <text class="heading">Cheque/DD No</text></div>
                                        <div style="flex:1"> <text class="heading">Cheque/DD Date</text></div>
                                        <div style="flex:1"> <text class="heading">Bank Name</text></div>
                                        <div style="flex:1"> <text class="heading">Branch Name</text></div>
                                        <div style="flex:1"> <text class="heading">Action</text></div>
                                    </div>

                                    <div class="tbody-row" v-for="tbl in table" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto">
                                        <div style="flex:1"> <text class="form-title">{{tbl.InstallmentPremium}}</text></div>
                                        <div style="flex:1"> <text class="form-title">{{tbl.ChequeDDNo}}</text></div>
                                        <div style="flex:1"> <text class="form-title">{{tbl.ChequeDate}}</text></div>
                                        <div style="flex:1"> <text class="form-title">{{tbl.BankName}}</text></div>
                                        <div style="flex:1"> <text class="form-title">{{tbl.BranchName}}</text></div>
                                        <div style="flex:1;flex-direction:row;">
                                            <image class="cal-icn" :src="tbl.Action"></image>
                                            <image class="cal-icn" style="margin-left:10px;" :src="tbl.Action1"></image>
                                        </div>
                                    </div>
                                </scroller>
                            </div>
                        </div>

                    </div>

                    
                    <div class="card-proposal">
                        <div class="table-row" style="flex-direction: column;padding-bottom:10px">
                            <text class="heading" @click.native="showSendLink =!showSendLink">SendLink</text>
                        </div>
                        <div class="onlineDetails" v-if="showSendLink==true">
                            <div class="table-row">
                                <text class="heading">Payment Review</text>
                            </div>
                            <div class="table-row row-structur" v-for="cheq in Cheque">
                                <div class="table-data">
                                    <text class="form-title">Installment Premium</text>
                                    <text class="heading-data">{{cheq.InstallmentPremium}}</text>
                                </div>
                                <div class="table-data">
                                    <text class="form-title"> Premium Frequency</text>
                                    <text class="heading-data">{{cheq.Frequency}}</text>
                                </div>
                                <div class="table-data">
                                    <text class="form-title">Premium Paying Term</text>
                                    <text class="heading-data">{{cheq.PremiumPayingTerm}}</text>
                                </div>
                            </div>
                            <div class="table-row">
                                <text class="form-title">Please enter the Mobile No on which you want to send the link</text>
                            </div>
                            <div class="table-row">

                                <div style="flex-direction:column;flex:1" class="table-row-details">
                                    <text class="form-title">Email ID</text>
                                    <input class="input" type="text" style="flex:1" />
                                </div>

                                <div style="flex-direction:column;flex:1" class="table-row-col-details">
                                    <text  class="form-title">Mobile No</text>
                                    <input class="input" type="tel" style="flex:1" />
                                </div>




                            </div>

                            <div class="card-btnpay">
                                <text class="card-btn-text">Send</text>
                            </div>

                        </div>
                    </div>
                    <div v-if="platform ==='Web'" class="card-proposal btn-space" style=" flex-direction:row;padding:12px;margin-bottom:10px;x;">
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color" @click.native="jump('/master/testpro/proposalreport')">
                                <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label ">Previous</text>
                            </div> -->
                            <div class=" btn-space">
                                <div  class="documt-md-btn-width"
                                @click.native="jump('/master/testpro/proposalreport')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                        </div>
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color" @click.native="jump('/master/document')">
                                <text class="md-btn-label text-color-white">Proceed</text>
                                <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                             <div class="documt-md-btn-width"
                               @click="jump('/master/masterpay/chequepayment')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>

                    <div v-if="platform !=='Web'" class="card-proposal btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/master/testpro/proposalreport')">
                                <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                <text class="md-sec-btn-label ">Previous</text>
                            </div> -->
                            <div class=" btn-space">
                                <div  class="documt-md-btn-width"
                                @click.native="jump('/master/testpro/proposalreport')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>
                            </div>
                        </div>
                        <div class="box md-btn-width" style="padding:10px;">
                            <!-- <div class="md-custom-btn btn-color" @click="jump('/master/document')">
                                <text class="md-btn-label text-color-white">Proceed</text>
                                <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                            </div> -->
                             <div class="documt-md-btn-width"
                               @click="jump('/master/masterpay/chequepayment')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" btn-name="Proceed" icon-side="right"></p-button>
								</div>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
    import appHeader from '../../components/Payment/PaymentHeader.vue'

    import applicationTab from './ApplicationTab.vue'
    const items = ["Cash", "Cheque", "DD"]
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -'
    export default {
            mounted(){
      var animation = weex.requireModule('animation');

      var pagewrap = this.$refs.pagewrap;
      animation.transition(pagewrap, {
            styles: {
              opacity:'1'
            },
            duration: 200, //ms
            timingFunction: 'ease-in',
            // transform: 'translate(1100px,100px)',
            delay: 100 //ms
          }, function () {

            // modal.toast({ message: 'animation finished.' })
            console.log(pagewrap , 'logggmix in ')
          // var btn01 = this.$refs.btn1;


      })
    },

        components: {
            appHeader,
            applicationTab
        },
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        computed: {
            value() {
                if (this.index == -1) {
                    return "Select Your Payment Mode";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            }
        },
        data() {
            return {
                headerName: 'Payment Options',
                showOnline: false,
                showCheque: false,
                showSendLink: false,
                platform: invalid,
                deviceWidth: invalid,
                img: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                index: -1,
                date: '',
                paymentList: ["Cash", "Cheque", "DD"

                ],
                table: [{
                        InstallmentPremium: 2000,
                        ChequeDDNo: "AD1232",
                        ChequeDate: '01/01/2016',
                        BankName: 'Axis Bank',
                        BranchName: 'Mulund',
                        Action: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                        Action1: 'https://www.materialui.co/materialIcons/action/delete_black_192x192.png'

                    }, {
                        InstallmentPremium: 8000,
                        ChequeDDNo: "AD1295",
                        ChequeDate: '21/01/2016',
                        BankName: 'SBI Bank',
                        BranchName: 'Andheri',
                        Action: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                        Action1: 'https://www.materialui.co/materialIcons/action/delete_black_192x192.png'
                    }, {
                        InstallmentPremium: 2000,
                        ChequeDDNo: "AD1287",
                        ChequeDate: '31/01/2016',
                        BankName: 'HDFC Bank',
                        BranchName: 'Kandivali',
                        Action: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                        Action1: 'https://www.materialui.co/materialIcons/action/delete_black_192x192.png'
                    },

                ],
                Payment: [{
                    'InstallmentPremium': '85,005',
                    'Frequency': 'Monthly',
                    'PremiumPayingTerm': '20 years'
                }],
                Cheque: [{
                    'InstallmentPremium': '85,005',
                    'Amount': '24,004',
                    'RemmainingAmount': '61,001',
                    'Frequency': 'Monthly',
                    'PremiumPayingTerm': '20 years',
                }]
            }
        },
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            titleType() {
                picker.pick({
                        index: this.index,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.value = items[event.data];
                            this.index = event.data;
                        }
                    }
                );
            },
            pickDate() {
                picker.pickDate({
                        value: this.date
                    },
                    event => {
                        if (event.result === "success") {
                            this.date = event.data;
                        }
                    }
                );
            },
        }

    }
</script>
<style scoped>
        .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
    /*Button Arrow CSS*/
    
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    .table-data{
        flex:1
    }
    
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
    .row-structure{
        flex-direction: column
    }
    
    .row {
        flex-direction: column
    }
    
    .card-proposal{
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
        margin-right: 3px;
        margin-left: 3px;
    }
    
    .card-subtitle {
        font-size: 22px;
        color: #9D9D9D;
        font-family:robotoregular;
    }
    
    .main-heading {
        font-size: 15px;
        padding-top: 20px;
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .heading {
        font-size: 25px;
        padding-top: 20px;
        padding-bottom:05px;
        font-weight: bold;
    }
    .prop-ins-card-title-border {
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 4px;
        border-bottom-color: #3b371e;
        font-weight: bold;
         width:115px;
    }
    
    .heading-data {
        font-size: 25px;
        color: #9D9D9D;
    }
    
    .col1 {
        flex-direction: row;
        margin-top: 25px;
    }
    
    .group {
        position: relative;
        margin-top: 25px;
    }
    
    .container {
        flex-direction: row;
    }
    
    .side-container {
        flex-direction: column;
        flex: 2;
    }
    
    .input {
        display: block;
        background-color: #fff;
        font-size: 24px;
        padding: 15px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
        font-family:robotoregular;
        
    }
    
    .input:focus {
        border-width: 4px;
        border-bottom-color: #2e4053;
    }
    
    .switch {
        margin-top: 16px;
    }
    
    .btn-space {
        justify-content: space-between
    }
    
    .btn-color {
        background-color: #3b371e;
    }
    
    .sec-btn-color {
        background-color: #fff;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #000;
        border-right-color: #000;
        border-left-color: #000;
        border-bottom-color: #000;
    }
    
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 80px;
        min-width: 88px;
        position: relative;
        cursor: pointer;
    }
    
    .md-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family:robotoregular;
    }
    
    .md-sec-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: #000;
        font-family:robotoregular;
    }
    
    .md-custom-btn:active {
       opacity:0.8;
    }
    
    .md-btn-width {
        width: 300px;
    }
    
    .card-btn1 {
        background-color: rgb(80, 80, 80);
        width: 340px;
        border-radius: 7px;
        margin-left: 10.6797px;
        margin-right: 20px;
        margin-right: 20px;
        padding: 25px;
        justify-content: center;
        -webkit-box-pack: center;
    }
    
    .card-btn2 {
        background-color: #505050;
        border-radius: 7px;
        margin-top: 15px;
        /* width: 340px; */
        padding: 25px;
        justify-content: center;
    }
    
    .card-btn-text {
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
        font-family:robotoregular;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
        font-family:robotoregular;
    }
    
    .card-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family:robotoregular;
    }
    
    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family:robotoregular;
    }
    
    .image {
        width: 500px;
        height: 500px;
    }
    
    .consent {
        white-space: normal;
    }
    
    .form-title {
        font-size: 24px;
        padding-top: 10px;
        color: #9d9d9d;
        font-family:robotoregular;
    }
    
    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family:robotoregular;
    }
    
    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
        font-family:robotoregular;
    }
    
    .example {
        flex-direction: row;
        justify-content: flex-start;
    }
    
    .label {
        font-size: 22px;
        line-height: 60px;
        width: 350px;
        color: #9d9d9d;
        text-align: right;
        margin-right: 20px;
        font-family:robotoregular;
    }
    
    .table-row {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
    
    .graph {
        flex-direction: column;
    }
    
    .drop-down {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 5px;
        font-family:robotoregular;
    }
    
    .card-summary {
        margin-top: 10px;
        padding: 20px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .table-row-col-details {
        margin-left: 0px;
    }
    
    .card-line1 {
        padding: 20px;
    }
    
    .head-row {
        padding: 10px;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #ebebeb;
    }
    
    .head-row1 {
        padding: 10px;
    }
    
    .sub-heading {
        font-weight: bold;
        margin-left: 20px;
        font-size: 13px;
        color: #565656;
        font-family:robotoregular;
    }
    
    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .cal-icn {
        height: 20px;
        width: 20px;
        margin-top: 5px;
    }
    
    .mail-row {
        flex-direction: column;
    }
    
    .radio-data {
        flex-direction: column;
        flex: 0;
    }
    
    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }
        .btn-icon-size-right {
            height: 18px;
            width: 18px;
            margin-left: 10px;
        }
        .md-btn-label {
            color: #fff;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            font-family:robotoregular;
        }
        .btn-color {
            background-color: #3b371e;
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            font-family:robotoregular;
        }
        .sec-btn-color {
            background-color: #fff;
            border: 1px solid black
        }
        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 36px;
            min-width: 88px;
            position: relative;
            cursor: pointer;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .table-head-row {
            flex: 0.9;
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family:robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .heading-data {
            font-size: 18px;
            color: #9D9D9D;
            font-family:robotoregular;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family:robotoregular;
        }
        .table-row {
            flex-direction: column;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .mail-row {
            flex-direction: column;
        }
        .btn-space {
            justify-content: space-evenly;
        }
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
            font-family:robotoregular;
        }
        .radio-data {
            flex-direction: column;
            flex: 1
        }
        .md-btn-width {
            width: 20%;
        }
    }
    
    @media only screen and (min-width: 768px) {
          .row-structure{
        flex-direction: row;
    }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family:robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family:robotoregular;
        }
        .table-row {
            flex-direction: row;
        }
        .table-row-col-details {
            margin-left: 30px;
        }
        .mail-row {
            flex-direction: row;
            flex: 3;
        }
        .btn-space {
            justify-content: space-between;
        }
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
            font-family:robotoregular;
        }
        .radio-data {
            flex-direction: row;
        }
        .md-btn-width {
            width: 15%;
        }
    }
</style>