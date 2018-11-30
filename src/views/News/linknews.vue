<template>
    <div style="background-color: #f7f7f7;">
        <scroller>

            <div class="container master-page-wrapper">

                <div class="side-container">
                    <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
                        <div class="card">
                            <div class="row-reverse" style="flex-direction: row;">
                                <text class="heading  " style="margin-left:10px;padding-bottom:10px;flex:1;">{{num. contnm}}</text>
                                <!-- <div class="row-button" > -->
                                <div v-if="platform==='Web'" class="box  x-small-btn cursor-pointer-globle" style="padding-right:06px">
                                    <div > 
                            
									<p-button btn-icon="https://www.materialui.co/materialIcons/file/file_download_white_192x192.png" btn-name="Download" ></p-button>
								</div>
                                </div>
                                 <div v-if="platform!=='Web'" class="box  x-small-btn cursor-pointer-globle" style="padding-right:06px">
                                    <div > 
                            
									<p-button btn-icon="https://www.materialui.co/materialIcons/file/file_download_white_192x192.png" btn-name="Download" ></p-button>
								</div>
                                </div>
                                    <!-- <div class="md-custom-btn btn-color">
                                        <image class="btn-icon-size cursor-pointer-globle" src="https://www.materialui.co/materialIcons/file/file_download_white_192x192.png"></image>
                                        <text class="md-btn-label text-color-white cursor-pointer-globle">Download</text>
                                    </div> -->
                                
                                <!-- </div> -->

                            </div>
                            <div class="table-data" style="flex-direction: column;">
                                <text class="form-title" style="padding-left:10px;"> 4 April, 2015 | 02.26PM | In News</text>
                            </div>
                            <div class="onlineDetails">
                                <div class="row-set" style="justify-content:space-between;">
                                   
                                    <image class="image shadow" style="margin-top:3px;" resize="stretch" src="http://salesdrive.iorta.in/img/press_release.jpg"></image>

                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc2}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc3}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc4}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc5}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc6}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc7}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc8}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc9}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc10}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc11}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc12}}</text>
                                </div>
                                <div class="table-data" style="flex-direction: column;">
                                    <text class="form-title" style="padding-left:10px;"> {{num.listdesc12}}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <footer-tab></footer-tab> -->
        </scroller>
    </div>
</template>

<script>
    import footerTab from '../../components/Footer/FooterSection.vue'
    import PButton from "../.././components/vx-primary-button/vx-primary-button.vue";
    import SButton from "../.././components/vx-primary-button/vx-scondary-button"; 
    const items = ["Cash", "Cheque", "DD"]
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -'
    export default {
        components: {
            footerTab, PButton, SButton
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
                        contnm: 'ABC Insurance Launches Increasing Income Insurance Plan',
                        listdesc1: ' MUMBAI, August 17, 2015: ABC Insurance Company (ABC), part of ABC Capital Limited, today launched a new plan ‘Increasing Income Insurance Plan”.',
                        listdesc2: 'Increasing Income Insurance Plan is traditional non-participating plan that secures an assured source of monthly income to meet growing expenses and support the dreams and aspirations of policyholder.',
                        listdesc3: 'The key feature of the plan is that it offers a long term regular monthly income after the end of increases every year at 3% under the Income with Maturity Benefit option and 6% under Only Income Option.',
                        listdesc4: 'With increasing inflation and demands of a better lifestyle, there is a strong need to save up for an alternative source of income. We have carefully designed a plan that will provide a long term income that increases every year. From the protection perspective, the life insurance benefits along with the savings component make Increasing Income a very relevant proposition”, said Mr. Manoj Sahoo, Chief Agency Officer, ABC Insurance.',
                        listdesc5: 'The age of entry in the plan is from 14 years to 60 years with the policy term varying from 12 years to 24 years.',
                        listdesc6: 'The plan is divided into two phases – Saving phase and Income phase. The Saving phase, the first half of the policy term, is a phase wherein the customer would be paying regular premiums.',
                        listdesc7: 'The Income phase, the second half of the policy term, is the phase wherein customer would start receiving monthly income of as part of the plan.',
                        listdesc8: 'For a 24 year policy, under “Income with Maturity Benefit” option the policyholder starts getting 1% of sum assured every month as regular income from 13th policy year and earns 12% of the sum assured as total income during the year. The total income for the year will go up to 45% of sum assured in the 24th policy year on the back of annual increment of 3 per cent.',
                        listdesc9: 'Whereas under “Only Income” option the policyholder starts getting 2% of sum assured every month as regular income from 13th policy year and earns 24% of the sum assured as total income during the year. The total income for the year will go up to 90% of sum assured in the 24th policy year on the back of annual increment of 6%.',
                        listdesc10: '“The Monthly Income from this product can be great way to achieve your financial goals – whether your goal is to reduce loans, save for an early retirement, acquire an asset or even provide your children with the best education facilities. An additional income stream means you can achieve these financial goals with ease.” Mr. Sahoo added.',
                        listdesc11: 'Apart from guaranteed money income, the policyholder can also plan to receive a lump sum benefit equal to double the Sum Assured by choosing Income with Maturity Benefit option.',
                        listdesc12: 'In the unfortunate event of demise of the policyholder during the policy term, provided the policy is in force, the Sum Assured on Death or 105 per cent of all the premiums will be paid, depending on the case. The nominee would receive the full death benefit, irrespective of the income benefits already paid.',
                        listdesc13: 'The plan allows saving of tax under section 80C on premium paid and under section 10(10D) for benefits received.'

                    },

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
    
    .scroller {
        width: 3000px;
        flex-direction: row;
        height: 110px;
    }
    /*Button Arrow CSS*/
    
    .btn-icon-size {
        height: 22px;
        width: 22px;
        margin-right: 15px;
    }
    
    .btn-icon-size-right {
        height: 20px;
        width: 20px;
        margin-left: 15px;
    }
    
    .row {
        flex-direction: column
    }
    
    .row-set {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        background-color: white;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    .col-set {
        display: flex;
        flex-direction: column;
        background-color: white;
        flex-wrap: wrap;
    }
    
    .card {
        /* width:70%; */
        /* margin: 20px;
    margin-top: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);; */
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
        width: 130px;
        margin-left: 18px;
        padding-top: 19px;
        padding-bottom: 10px;
        padding-left: 9px;
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
        width: 130px;
    }
    
    .input:focus {
        border-width: 4px;
        border-bottom-color: #2e4053;
    }
    
    .switch {
        margin-top: 16px;
    }
    
    .row-button {
        display: flex;
        flex-direction: row;
        background-color: white;
        margin-left: 450px;
        margin-top: 18px;
    }
    
    .btn-color {
        background-color: #3b371e;
    }
    
    .box {
        padding: 10px;
    }
    
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 188px;
        cursor: pointer;
    }
    
    .md-btn-label {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family: robotoregular;
    }
    
    .md-custom-btn:active {
        background-color: #3b371e;
    }
    
    .md-btn-width {
        width: 450px;
    }
    
    .x-small-btn {
        width: 270px;
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
        width: 700px;
        height: 350px;
        background-color: #666666;
        margin-left: 15px;
        margin-right: 15px;
    }
    
    .consent {
        white-space: normal;
    }
    
    .form-title {
        font-size: 24px;
        padding-top: 10px;
        color: #9d9d9d;
        font-family: robotoregular;
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
    
    .row-reverse {
        flex-direction: column;
        /* justify-content: space-between; */
    }
    
    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
        .row-button {
            display: flex;
            flex-direction: row-reverse;
            background-color: white;
            /* margin-left:600px; */
            margin-top: 18px;
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
            font-family: robotoregular;
        }
    .md-custom-btn:active {
       opacity:0.8;
    }

        .md-btn-width {
            width: 10%;
        }
        .x-small-btn {
            width: 130px;
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
            width: 85px;
            margin-left: 8px;
            padding-top: 25px;
            padding-left: 9px;
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
            width: 85px;
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
        .md-btn-width {
            width: 20%;
        }
        .row-reverse {
            flex-direction: column;
            /* justify-content: space-between; */
        }
        .image {
            width: 95%;
            height: 270px;
            background-color: #666666;
            margin-left: 13px;
            margin-right: 15px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .form-title {
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
        .row-reverse {
            flex-direction: row;
            justify-content: space-between;
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
        .scroller {
            /* overflow: auto; */
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
        .row-button {
            display: flex;
            flex-direction: row-reverse;
            background-color: white;
            /* margin-left:600px; */
            margin-top: 18px;
        }
        .image {
            width: 98%;
            height: 430px;
            background-color: #666666;
            margin-left: 15px;
            margin-right: 12px;
        }
    }
</style>