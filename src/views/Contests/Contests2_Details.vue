<template>
                    <div class="side-container" >
                        <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
                            <div class="card-newone shadow">
                                <div class="" style="flex-direction: column;"> 
                                    <text class="heading add-border " style="margin-left:10px;padding-bottom:10px;">{{num.contnm}}</text>
                                </div>
                                <div class="onlineDetails"  >
                                    <div  class="table-data" style="flex-direction: column;"  >
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle1}}</text>
                                        
                                    </div>
                                    <div  class="table-data" style="flex-direction: column;">
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle2}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc1}}</text>
                                    </div>
                                    <div  class="table-data" style="flex-direction: column;">
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle3}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc2}}</text>
                                    </div>
                                    <div  class="table-data" style="flex-direction: column;"  >
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle4}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc3}}</text>
                                    </div>
                                    <div  class="table-data" style="flex-direction: column;">
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle5}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc4}}</text>
                                    </div>
                                    <div  class="table-data" style="flex-direction: column;">
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle6}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc5}}</text>
                                    </div>
                                     <div  class="table-data" style="flex-direction: column;">
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle7}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc6}}</text>
                                    </div>
                                    <div  class="table-data" style="flex-direction: column;">
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle8}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc7}}</text>
                                    </div>
                                     <div  class="table-data" style="flex-direction: column;">
                                        <text class="form-title" style="padding-left:10px;">&#8226; {{num.listtitle9}}</text>
                                        <text class="form-title-ans" style="padding-left:10px;"> {{num.listdesc7}}</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
       
        </template>

<script>
    import appHeader from '../../components/Contests/ContestsHead.vue'
    import footerTab from '../../components/Footer/FooterSection.vue'
    import contestsTab from './ContestTab.vue'
    const items = ["Cash", "Cheque", "DD"]
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -'
    export default {
        components: {
            contestsTab,
            appHeader,
            footerTab

        },
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        computed: {

        },
        data() {
            return {
                headerName: 'Payment Options',
                showOnline: false,
                showCheque: false,
                showSendLink: false,
                platform: invalid,
                deviceWidth: invalid,
                numArray: [{
                        contnm: 'Contests No. 2 ',
                        listtitle1: 'Anytime, Anywhere, Paperless login',
                        listtitle2: 'Ease in customer on-boarding – ',
                        listtitle3: 'Compatible to any Android device - ',
                        listtitle4: 'Offline Capability –',
                        listtitle5: 'CFR notification and upload –',
                        listtitle6: 'Split payment -',
                        listtitle7: 'Send link to customer – ',
                        listtitle8: 'Team Login –',
                        listtitle9: 'Auto upgrade –',
                        listdesc1: 'Complete the entire customer on-boarding in just few minutes from anywhere, without the need to travel back to office for login completion',
                        listdesc2: 'Now use your personal devices like Android mobile or Android tablet.',
                        listdesc3: 'After BI generation the entire process can be completed even without internet connectivity',
                        listdesc4: 'Check for CFR requirements and upload CFR related documents straight from your device',
                        listdesc5: 'Split the premium into multiple payments of Cheque/DD/Cash',
                        listdesc6: 'Send a link for premium payment to the customer mail ID and the customer can make online payment from his own device',
                        listdesc7: 'Login upto ZM level, select a FLS/Sales Manager/Advisor from the hierarchy and login a case as the selected sales person',
                        listdesc8: 'After installing the app the first time, there is no need to go to playstore for download or upgrade again. Just upgrade from the app directly!'

                    }
                    // , {
                    //     contnm: 'Contest 2 (1st to 30th June)',
                    //     listtitle1: 'Anytime, Anywhere, Paperless login',
                    //     listtitle2: 'Ease in customer on-boarding – ',
                    //     listtitle3: 'Compatible to any Android device - ',
                    //     listtitle4: 'Offline Capability –',
                    //     listtitle5: 'CFR notification and upload –',
                    //     listtitle6: 'Split payment -',
                    //     listtitle7: 'Send link to customer – ',
                    //     listtitle8: 'Team Login –',
                    //     listtitle9: 'Auto upgrade –',
                    //     listdesc1: 'Complete the entire customer on-boarding in just few minutes from anywhere, without the need to travel back to office for login completion',
                    //     listdesc2: 'Now use your personal devices like Android mobile or Android tablet.',
                    //     listdesc3: 'After BI generation the entire process can be completed even without internet connectivity',
                    //     listdesc4: 'Check for CFR requirements and upload CFR related documents straight from your device',
                    //     listdesc5: 'Split the premium into multiple payments of Cheque/DD/Cash',
                    //     listdesc6: 'Send a link for premium payment to the customer mail ID and the customer can make online payment from his own device',
                    //     listdesc7: 'Login upto ZM level, select a FLS/Sales Manager/Advisor from the hierarchy and login a case as the selected sales person',
                    //     listdesc8: 'After installing the app the first time, there is no need to go to playstore for download or upgrade again. Just upgrade from the app directly!'

                    // }, {
                    //     contnm: 'Contest 2 (10th to 15th Aug)',
                    //     listtitle1: 'Anytime, Anywhere, Paperless login',
                    //     listtitle2: 'Ease in customer on-boarding – ',
                    //     listtitle3: 'Compatible to any Android device - ',
                    //     listtitle4: 'Offline Capability –',
                    //     listtitle5: 'CFR notification and upload –',
                    //     listtitle6: 'Split payment -',
                    //     listtitle7: 'Send link to customer – ',
                    //     listtitle8: 'Team Login –',
                    //     listtitle9: 'Auto upgrade –',
                    //     listdesc1: 'Complete the entire customer on-boarding in just few minutes from anywhere, without the need to travel back to office for login completion',
                    //     listdesc2: 'Now use your personal devices like Android mobile or Android tablet.',
                    //     listdesc3: 'After BI generation the entire process can be completed even without internet connectivity',
                    //     listdesc4: 'Check for CFR requirements and upload CFR related documents straight from your device',
                    //     listdesc5: 'Split the premium into multiple payments of Cheque/DD/Cash',
                    //     listdesc6: 'Send a link for premium payment to the customer mail ID and the customer can make online payment from his own device',
                    //     listdesc7: 'Login upto ZM level, select a FLS/Sales Manager/Advisor from the hierarchy and login a case as the selected sales person',
                    //     listdesc8: 'After installing the app the first time, there is no need to go to playstore for download or upgrade again. Just upgrade from the app directly!'

                    // }, {
                    //     contnm: 'Contest 3 (16th to 18th Nov)',
                    //     listtitle1: 'Anytime, Anywhere, Paperless login',
                    //     listtitle2: 'Ease in customer on-boarding – ',
                    //     listtitle3: 'Compatible to any Android device - ',
                    //     listtitle4: 'Offline Capability –',
                    //     listtitle5: 'CFR notification and upload –',
                    //     listtitle6: 'Split payment -',
                    //     listtitle7: 'Send link to customer – ',
                    //     listtitle8: 'Team Login –',
                    //     listtitle9: 'Auto upgrade –',
                    //     listdesc1: 'Complete the entire customer on-boarding in just few minutes from anywhere, without the need to travel back to office for login completion',
                    //     listdesc2: 'Now use your personal devices like Android mobile or Android tablet.',
                    //     listdesc3: 'After BI generation the entire process can be completed even without internet connectivity',
                    //     listdesc4: 'Check for CFR requirements and upload CFR related documents straight from your device',
                    //     listdesc5: 'Split the premium into multiple payments of Cheque/DD/Cash',
                    //     listdesc6: 'Send a link for premium payment to the customer mail ID and the customer can make online payment from his own device',
                    //     listdesc7: 'Login upto ZM level, select a FLS/Sales Manager/Advisor from the hierarchy and login a case as the selected sales person',
                    //     listdesc8: 'After installing the app the first time, there is no need to go to playstore for download or upgrade again. Just upgrade from the app directly!'

                    // }

                ]

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
        font-family: robotoregular;
    }
    
    .robotobold {
        font-family: robotobold;
    }
    /*Button Arrow CSS*/
    
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
    
    .row {
        flex-direction: column
    }
    
    .card-newone {
        /* width:70%; */
        /* margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
 */
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
    }
    
    .card-subtitle {
        font-size: 22px;
        color: #9D9D9D;
        font-family: robotoregular;
    }
    
    .main-heading {
        font-size: 15px;
        padding-top: 20px;
        font-weight: bold;
        font-family: robotoregular;
    }
    
    .heading {
        font-size: 25px;
        padding-top: 5px;
        font-weight: bold;
        font-family: robotoregular;
    }
    
    .heading-data {
        font-size: 25px;
        color: #9D9D9D;
        font-family: robotoregular;
    }
    
    .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
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
    
    .table-data {
        flex-direction: column;
    }
    
    .side-container {
        flex-direction: column;
        flex: 2;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .add-border1 {
        border-width: 1px;
        border-style: solid;
        border-top-color: #6e6d6d;
        border-right-color: #6e6d6d;
        border-left-color: #6e6d6d;
        border-bottom-color: #6e6d6d;
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
        font-family: robotoregular;
    }
    
    .spac-bet {
        margin-left: 5px;
        margin-right: 5px;
        padding-top: 19px;
    }
    
    .select {
        background-color: white;
        width: 90px;
        margin-left: 18px;
        padding-top: 19px;
        padding-left: 10px;
        padding-bottom: 10px;
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
    
    .selectbor {
        width: 100px;
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
        font-family: robotoregular;
    }
    
    .md-sec-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: #000;
        font-family: robotoregular;
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
        font-family: robotoregular;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
        font-family: robotoregular;
    }
    
    .card-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: robotoregular;
    }
    
    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family: robotoregular;
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
        font-weight: bold;
        color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .form-title-ans {
        font-size: 24px;
        padding-top: 10px;
        color: #9d9d9d;
    }
    
    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
        font-family: robotoregular;
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
        font-family: robotoregular;
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
        font-family: robotoregular;
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
        font-family: robotoregular;
    }
    
    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-weight: bold;
        font-family: robotoregular;
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
    .onlineDetails {
        padding-top: 10px;
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
            font-family: robotoregular;
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
            font-family: robotoregular;
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
            font-weight: bold;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .form-title-ans {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 10px;
            font-weight: bold;
            font-family: robotoregular;
        }
        .heading-data {
            font-size: 18px;
            color: #9D9D9D;
            font-family: robotoregular;
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
            font-family: robotoregular;
        }
        .select {
            background-color: white;
            width: 65px;
            margin-left: 18px;
            padding-top: 11px;
            padding-left: 8px;
            padding-bottom: 10px;
            border-style: solid;
            border-top-width: 1px;
            border-top-color: #fff;
            border-left-width: 1px;
            border-left-color: #fff;
            border-right-width: 1px;
            border-right-color: #fff;
            border-bottom-width: 2px;
            border-bottom-color: #3b371e;
            margin-bottom: 20px;
        }
        .selectbor {
            width: 65px;
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
            font-family: robotoregular;
        }
        .radio-data {
            flex-direction: column;
            flex: 1
        }
        .table-data {
            flex-direction: column;
        }
        .md-btn-width {
            width: 20%;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .form-title {
            font-size: 14px;
            font-weight: bold;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .form-title-ans {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 5px;
            font-weight: bold;
            font-family: robotoregular;
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
            font-family: robotoregular;
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
            justify-content: space-around;
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
            font-family: robotoregular;
        }
        .radio-data {
            flex-direction: row;
        }
        .md-btn-width {
            width: 20%;
        }
        .table-data {
            flex-direction: row;
        }
    }
</style>