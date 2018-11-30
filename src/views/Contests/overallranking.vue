<template>
    <div style="background-color: #f7f7f7;">
        <!-- 
        <contests-tab></contests-tab> -->
        <!-- <scroller> -->
            
        <div class="container-overall">
            <div class="side-container-overall">
                <div class="card-overall shadow">
                    <div style="margin-top: 10px;margin-bottom: 15px;">
                        <text class="heading overall-margin-left  select" >View All My Ranking</text> 
                    </div>
                    <div class="overall-row-col overall-flex" >
                        <div class="overall-margin-left" style="flex: 1">
                            <text class="heading ">National Rank: 8549th</text> 
                            <image class="clips-overall"  src="https://blog.zingchart.com/content/images/2017/03/Line.png"></image>
                        </div>
                        <div class="overall-margin-left-sub" style="flex: 1">
                            <text class="heading">Regional Rank: 1354th</text> 
                            <image class="clips-overall"  src="http://datavizproject.com/wp-content/uploads/2015/10/1-Line-Chart.png"></image>
                        </div>
                    </div>
                    <div class="overall-row-col overall-flex" >
                        <div class="overall-margin-left" style="flex: 1">
                            <text class="heading">State Rank: 456th</text> 
                            <image class="clips-overall"  src="http://www.mbaexcel.com/wp-content/uploads/2013/03/LineChart1.png"></image>
                        </div>
                        <div class="overall-margin-left-sub" style="flex: 1">
                            <text class="heading">City Rank: 156th</text> 
                            <image class="clips-overall"  src="http://www.conceptdraw.com/How-To-Guide/picture/Line-chart-Circuit-efficiency-Erlang-B.png"></image>
                        </div>
                    </div>
                    <div class="overall-row-col overall-flex" >
                        <div class="overall-margin-left" style="flex: 1">
                            <text class="heading" style="margin-top: 13px;">Area Rank: 57th</text> 
                            <image class="clips-overall"  src="https://blog.zingchart.com/content/images/2017/03/Line.png"/>
                        </div>
                        <!-- <div style="flex: 1">
                            <text class="heading">City Rank:156th</text> 
                            <image class="clips-overall"  src="http://datavizproject.com/wp-content/uploads/2015/10/1-Line-Chart.png"></image>
                        </div> -->
                    </div>

                    
                </div>
                
            </div>
        </div>
        <!-- </scroller> -->
    </div>
        </template>

<script>
    import contestsTab from './ContestTab.vue'
    const items = ["Cash", "Cheque", "DD"]
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -'
    export default {
        components: {
            contestsTab

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

                platform: invalid,
                deviceWidth: invalid,

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
    
    .card-overall {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
    }
    
    .card-overall-subtitle {
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
    
    .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
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
    
    .container-overall {
        flex-direction: row;
    }
    
    .side-container-overall {
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
        width: 240px;
        margin-left: 18px;
        padding-top: 19px;
        padding-bottom: 10px;
        /* padding-left: 9px; */
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
    
    .card-overall-btn1 {
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
    
    .card-overall-btn2 {
        background-color: #505050;
        border-radius: 7px;
        margin-top: 15px;
        /* width: 340px; */
        padding: 25px;
        justify-content: center;
    }
    
    .card-overall-btn-text {
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
        font-family: robotoregular;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-overall-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
        font-family: robotoregular;
    }
    
    .card-overall-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: robotoregular;
    }
    
    .card-overall-subtitle-details {
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
    
    .box {
        padding: 5px;
    }
    
    .md-custom-btn {
        border-radius: 2px;
        height: 70px;
        min-width: 88px;
        cursor: pointer;
    }
    
    .md-btn-label {
        font-size: 24px;
        font-family: robotoregular;
    }
    
    .md-custom-btn:active {
       opacity:0.8;
    }
    
    .md-btn-width {
        width: 450px;
    }
    
    .x-small-btn {
        width: 180px;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 5px;
        font-family: robotoregular;
    }
    
    .card-overall-summary {
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
    
    .card-overall-line1 {
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
    
    .card-overall-heading {
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
    
    .overall-row-col {
        flex-direction: column;
    }
    
    .overall-col {
        flex-direction: column;
    }
    
    .overall-row {
        flex-direction: row;
    }
    
    .overall-clips {
        width: 300px;
        height: 200px
    }
    
    .clips-overall {
        width: 400px;
        height: 315px;
        margin-top: 10px;
    }
    
    .overall-margin-left {
        margin-left: 15px;
    }
    
    .overall-margin-left-sub {
        margin-left: 15px;
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
        .md-btn-width {
            width: 150px;
        }
        .x-small-btn {
            width: 140px;
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
            width: 150px;
            margin-left: 8px;
            padding-top: 25px;
            /* padding-left: 9px; */
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
        .card-overall-btn1 {
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
        .card-overall-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-overall-btn-text {
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
        .overall-row-col {
            flex-direction: column;
        }
        .overall-col {
            flex-direction: column;
        }
        .overall-row {
            flex-direction: row;
        }
        /* 320 */
        .clips-overall {
            width: 285px;
            height: 215px;
            margin-top: 10px;
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
        .card-overall-btn1 {
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
        .card-overall-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-overall-btn-text {
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
        .space {
            flex-direction: row-reverse;
        }
        .overall-flex {
            flex: 2;
        }
        .overall-row-col {
            flex-direction: column;
            align-content: center;
        }
        .overall-col {
            flex-direction: column;
            flex: 1;
        }
        .overall-row {
            flex-direction: row;
        }
        /* 768 */
        .clips-overall {
            width: 415px;
            height: 250px;
            margin-top: 13px;
        }
        .overall-margin-left {
            margin-left: 15px;
        }
        .overall-margin-left-sub {
            margin-left: 15px;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .overall-flex {
            flex: 2;
        }
        .overall-row-col {
            flex-direction: row;
        }
        .overall-col {
            flex-direction: column;
            flex: 1;
        }
        .overall-row {
            flex-direction: row;
        }
        /* 992 */
        .clips-overall {
            width: 415px;
            height: 250px;
            margin-top: 13px;
        }
        .overall-margin-left {
            margin-left: 15px;
        }
        .overall-margin-left-sub {
            margin-left: none;
        }
    }
</style>