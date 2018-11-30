<template>
        <div style="background-color: #f7f7f7;">
           
           
       
                    <div class="side-container">
                        <div class="card-story card-story-wdt shadow">
                            <div class="">
                                <text class="heading story-bottom-margin">Our Success Stories</text>
                            </div>
                            <div class="story-row-col">
                               <image class="clips-story"  src="../../web/assets/Amit.jpg"></image>   
                                <div class="story-flex-contain story-top-margin ">
                                    <text class="heading story-pad-lft-7">Amit Kumar, Winner of Digital East, Q1 (2016-17)</text>
                                    <text class=" form-title story-pad-lft-7">On an everyday basis, Bluebeam helps create an environment where anything is possible in the creation and modification of PDFs. With the new release of Revu 11, users have even more functionality to work with such as the Format Painter. The capability to copy the formatted appearance from one annotation to another has spedup... Built documentation tremendously. Also, with the creation of Sets and the ability to split documents into multiple sections, Bluebeam has now evolved the process of forming maintenance manuals into a well-oiled machine On an everyday basis, Bluebeam helps create an environment where anything is possible in the creation and modification of PDFs. With the new release of Revu 11, users have even more functionality to work with such as the Format Painter. The capability to copy the formatted appearance from one annotation to another has spedup... Built documentation tremendously. Also, with the creation of Sets and the ability to split documents into multiple sections, Bluebeam has now evolved the process of forming maintenance manuals into a well-oiled machine.</text>
                                </div>
                            </div>
                            <text class="story-color">- Amit Kumar, Construction Office Engineer</text>
                        </div>
                        <div class="card-story card-story-wdt shadow">
                            <div class="">
                                <text class="heading story-bottom-margin">Our Success Stories</text>
                            </div>
                            <div class="story-row-col">
                               <image class="clips-story"  src="../../web/assets/Deepak.jpg"></image>   
                                <div class="story-flex-contain story-top-margin">
                                    <text class="heading story-pad-lft-7">Deepak Dhadotti, Winner of Contests, Q1 (2016-17)</text>
                                    <text class=" form-title story-pad-lft-7">Deepak Dhadotti grew up in Belgaum in an agricultural family, studied engineering and then joined the UK company, Moog, in the area of servo-controls. He travelled extensively in Asia and Europe, building deep experience – and also causing worry to his parents that he may marry a foreign woman. They arranged a marriage for him with a local bride, and he moved back to India eventually. Deepak started Servo Controls India with his brother, bagging orders from HAL and then the steel and power industry. Tie-ups with Russian companies and the Tata group have also proven lucrative.</text>
                                </div>
                            </div>
                            <text class="story-color">- Deepak Dhadotti , Construction Office Engineer</text>
                        </div>
                        <div class="card-story card-story-wdt shadow">
                            <div class="">
                                <text class="heading story-bottom-margin">Our Success Stories</text>
                            </div>
                            <div class="story-row-col">
                               <image class="clips-story"  src="../../web/assets/Jagjit.jpg"></image>   
                                <div class="story-flex-contain story-top-margin">
                                    <text class="heading story-pad-lft-7">Jagjit Singh, Winner of Contests,  (2017-18)</text>
                                    <text class=" form-title story-pad-lft-7">Jagjit Singh Kapoor’s parents were displaced from Pakistan during the Partition, and he grew up in Doraha, Punjab. He started off in the wine business but then moved into beekeeping and exporting of honey products. A trip to the UK to chase a non-paying customer ended up opening his eyes to a whole new world of quality, processing and technology. Today, Kashmir Apiaries is the largest exporter of honey from India, and Singh started the National Bee Board to increase awareness and networking for beekeepers.</text>
                                </div>
                            </div>
                            <text class="story-color">- Jagjit Singh , Construction Office </text>
                        </div>
                        <div class="card-story card-story-wdt shadow">
                            <div class="">
                                <text class="heading story-bottom-margin">Our Success Stories</text>
                            </div>
                            <div class="story-row-col">
                               <image class="clips-story"  src="../../web/assets/Chandubhai.jpg"></image>   
                                <div class="story-flex-contain story-top-margin">
                                    <text class="heading story-pad-lft-7">Chandubhai Virani, Winner of Digital East, P1 (2015-16)</text>
                                    <text class=" form-title story-pad-lft-7">Chandubhai Virani and his brothers started selling chips in a local cinema in Rajkot, and today their company Balaji Wafers has a 65% market share in five states, holding out against local and MNC competitors. They first tried the fertiliser business and then running a hostel, before settling on chips and snacks. Adherence to quality helped them get early customers, followed by importing Japanese machines and taking loans to grow their factory.</text>
                                </div>
                            </div>
                            <text class="story-color">- Chandubhai Virani , Construction Office Engineer</text>
                        </div>
                        <div class="card-story card-story-wdt shadow">
                            <div class="">
                                <text class="heading story-bottom-margin">Our Success Stories</text>
                            </div>
                            <div class="story-row-col">
                               <image class="clips-story"  src="../../web/assets/Sandeep.jpg"></image>   
                                <div class="story-flex-contain story-top-margin">
                                    <text class="heading story-pad-lft-7">Sandeep Kapoor, Winner of Contests 3, B1 (2016-17)</text>
                                    <text class=" form-title story-pad-lft-7">Sandeep Kapoor grew up in Jodhpur, and worked in his grandfather’s photo studio. Later he joined ITC, getting exposure to Russia and China in the perfume business. He realised the potential of this sector in India, and returned to start Perfume Station. With a wide range of pricing and open minded customer care, he first expanded in Tier 2 and 3 cities before moving into the metros.</text>
                                </div>
                            </div>
                            <text class="story-color">- Sandeep Kapoor , Construction Office Engineer</text>
                        </div>


                    </div>
             
        </div>
        </template>

<script>
    // import appHeader from '../../../components/Presales/PresalesAdvisorHead.vue'
    //  import footerTab from '../../../components/Footer/FooterSection.vue'
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -';

    export default {
        components: {

            // appHeader
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
                headerName: 'Presales',
                showOnline: false,
                showCheque: false,
                showSendLink: false,
                platform: invalid,
                deviceWidth: invalid,



            }
        },
        computed: {

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
       .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
    
    .row {
        flex-direction: column
    }
    
    .card-story {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
        
    }
    .card-story-wdt {
        width: 730px;
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
        /* padding-top: 5px; */
        /* padding-bottom: 14px; */
        font-weight: bold;
        font-family: robotoregular;
    }
    
    .heading-data {
        font-size: 25px;
        font-weight: bold;
        padding-top: 7px;
        padding-bottom: 7px;
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
    
    .add-border-dark {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #9c9a9a;
    }
    
    .add-border1 {
        border-width: 1px;
        border-style: solid;
        border-top-color: #e7e7e7;
        border-right-color: #e7e7e7;
        border-left-color: #e7e7e7;
        border-bottom-color: #e7e7e7;
    }
    /* Allclubs Tab CSS APK */
    
    .clips-story {
        width: 350px;
        height: 220px;
    }
    
    .flex-tab-col-row {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px;
    }
    
    .sub-card {
        background-color: white;
        /* margin: 10px; */
    }
    
    .btn-color-a {
        background-color: #3b371e;
    }
    
    .box-a {
        padding: 10px;
    }
    
    .md-custom-btn-a {
        /* flex-direction: row; */
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 220 px;
        cursor: pointer;
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family: robotoregular;
    }
    
    .md-custom-btn:active-a {
        background-color: #3b371e;
    }
    
    .md-btn-width-a {
        width: 400px;
    }
    
    .x-small-btn-a {
        width: 330px;
    }
    
    .box-a {
        padding: 10px;
    }
    
    .md-custom-btn-a {
        /* flex-direction: row; */
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 170px;
        cursor: pointer;
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family: robotoregular;
    }
    
    .md-custom-btn:active-a {
        background-color: #3b371e;
    }
    
    .flex-tab-col {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    
    .flex-tab-row {
        display: flex;
        flex-direction: row;
        flex: 2;
    }
    
    .story-row-col {
        flex-direction: column;
    }
    
    .story-top-margin {
        margin-top: 10px;
    }
    
    .story-bottom-margin {
        margin-bottom: 15px;
    }
    
    .story-color {
        font-size: 24px;
        color: #cccccc;
    }
    /* @@ */
    
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
    }
    
    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-weight: bold;
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
         .story-top-margin {
        margin-top: 10px;
    }
    .story-top {
        top: 0px;
    }
        .story-pad-lft-7 {
            padding-left: 0px;
        }
        .card-story-wdt {
            width: 98%;
        }
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
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .heading {
            font-size: 15px;
            /* padding-top: 10px; */
            /* padding-bottom: 18px; */
            font-weight: bold;
            font-family: robotoregular;
        }
        .heading-data {
            font-size: 14px;
            font-weight: bold;
            padding-top: 10px;
            padding-bottom: 10px;
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
            width: 90px;
            margin-left: 8px;
            padding-top: 11px;
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
            width: 90px;
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
        /* Customer Tab CSS 320 */
        .flex-tab-col-row {
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 10px;
        }
        .hori-row {
            display: none;
        }
        .img-doc {
            width: 130px;
            height: 130px;
            /* align-items: center; */
            /* margin: 18px 169px 20px 77px; */
        }
        .img-center {
            align-items: flex-end;
            padding-top: 20px;
        }
        .hide {
            display: none;
        }
        .img-card {
            width: 30px;
            height: 30px;
        }
        .md-custom-btn-a {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            height: 30px;
            min-width: 88px;
            cursor: pointer;
        }
        .md-btn-label-a {
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            color: #fff;
            font-family: robotoregular;
        }
        .md-btn-width-a {
            width: 5%;
        }
        .x-small-btn-a {
            width: 90px;
        }
        .x-small-btn-b {
            min-width: 200px;
        }
        .md-btn-width-b {
            width: 130px;
        }
        .story-row-col {
            flex-direction: column;
        }
        .clips-story {
            width: 290px;
            height: 125px;
        }
        .story-color {
            font-size: 14px;
            color: #cccccc;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .card-story-wdt {
            width: 10%
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
            line-height: 1.7;
        }
        .heading {
            font-size: 15px;
            /* padding-top: 5px; */
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
        }
        .radio-data {
            flex-direction: row;
        }
        /* Customer Tab CSS 768 */
        .flex-tab-col-row {
            display: flex;
            flex-direction: row;
            background-color: white;
            padding: 10px;
        }
        .hori-row {
            display: flex;
            flex-direction: row;
            background-color: white;
        }
        .img-doc {
            width: 130px;
            height: 130px;
            /* align-items: center; */
            /* margin: 18px 169px 20px 100px; */
        }
        .img-center {
            align-items: flex-end;
            padding-top: 20px;
        }
        .hide {
            display: flex;
        }
        .md-btn-width-a {
            width: 5%;
        }
        .x-small-btn-a {
            width: 20%;
        }
        .x-small-btn-b {
            min-width: 200px;
        }
        .md-btn-width-b {
            width: 130px;
        }
        .clips-story {
            width: 320px;
            height: 270px;
        }
        .story-row-col {
            flex-direction: row;
        }
        .story-flex-contain {
            margin-left: 10px;
            margin-right: 10px;
            flex: 2;
        }
        .story-color {
            font-size: 14px;
            color: #cccccc;
            margin-top: 10px;
        }
                .story-pad-lft-7 {
            padding-left: 7px;
        }
        .story-top {
        top: -2px;
    }
    }
     @media only screen and (min-width: 992px){
         .card-story-wdt {
             width: 14%;
         }
                 .story-pad-lft-7 {
            padding-left: 7px;
        }
         .story-top-margin {
        margin-top: 0px;
    }
    .story-top {
        top: -2px;
    }
     } 
</style>