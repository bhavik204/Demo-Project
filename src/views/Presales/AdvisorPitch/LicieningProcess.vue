<template>
        
    <div class="side-container">
        <div class="card-process shadow">
                    
            <div class="">
                <text class="heading add-border" >Our quick and easy steps to be an Agent</text>
                <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/action/open_with_white_192x192.png"  @click.native="jump('/sublicensingprocess')"></image>
                <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/action/open_with_white_192x192.png"  @click="jump('/sublicensingprocess')"></image>
                     
            </div>
            <div class="">
                    <text class="heading-data " >Process</text> 
            </div>
            <div class="">
                <text class="form-title  " >1. Aenean vulputate eleifend tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eleifend quam, et suscipit eros. Sed placerat aliquet tortor, eu venenatis magna vulputate sit amet.</text> 
                <text class="form-title  " >2. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eleifend quam, et suscipit eros. Sed placerat aliquet tortor, eu venenatis magna vulputate sit amet.</text> 
                <text class="form-title  " >3. Aenean vulputate eleifend tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eleifend quam, et suscipit eros. Sed placerat aliquet tortor, eu venenatis magna vulputate sit amet.</text> 
                <text class="form-title  " >4. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eleifend quam, et suscipit eros. Sed placerat aliquet tortor, eu venenatis magna vulputate sit amet.</text> 
                <text class="form-title  " >5. Aenean vulputate eleifend tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eleifend quam, et suscipit eros. Sed placerat aliquet tortor, eu venenatis magna vulputate sit amet.</text> 
                <text class="form-title  " >6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eleifend quam, et suscipit eros. Sed placerat aliquet tortor, eu venenatis magna vulputate sit amet.</text> 
            </div>
            <div class="" style="padding-top: 8px;">
                    <text class="heading-data " >Doccuments required</text> 
            </div>
            <div class="">
                <text class="form-title  " >1. Aenean vulputate eleifend tellus..</text> 
                <text class="form-title  " >2. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</text> 
                <text class="form-title  " >3. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</text> 
                <text class="form-title  " >4. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</text> 

            </div> 
                
        </div>
                
                
    </div>
            
       
</template>

<script>
    
    import appHeader from '../../../components/Presales/PCH.vue'
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -';

    export default {
        components: {
            appHeader
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
     .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    .card-process{
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
    }
    
    .card-prod-subtitle {
        font-size: 22px;
        color: #9D9D9D;
    }
    
    .robotoregular {
        font-family: robotoregular;
    }
    
    .main-heading {
        font-size: 15px;
        font-family: robotoregular;
        padding-top: 20px;
        font-weight: bold;
    }
    
    .heading {
        font-size: 25px;
        font-family: robotoregular;
        padding-top: 5px;
        padding-bottom: 14px;
        font-weight: bold;
    }
    
    .heading-data {
        font-size: 25px;
        font-family: robotoregular;
        font-weight: bold;
        padding-top: 7px;
        padding-bottom: 7px;
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
    /* Allclubs Tab CSS APK */
    
    .flex-tab-col-row {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px;
    }
    
    .sub-card-prod {
        background-color: white;
        /* margin: 10px; */
    }
    
    .ver-col {
        display: flex;
        flex-direction: column;
        background-color: white;
        flex: 0.6;
    }
    
    .hori-row {
        display: flex;
        flex-direction: row;
        background-color: white;
    }
    
    .get-pad {
        padding: 15px 0px 15px 0px;
    }
    
    .img-doc {
        width: 230px;
        height: 230px;
    }
    
    .img-center {
        align-items: flex-end;
        padding-top: 20px;
    }
    
    .get-pad-bottom {
        padding-bottom: 25px;
    }
    
    .get-pad-t-b {
        padding-bottom: 13px;
        margin-top: 10px;
        padding-left: 15px;
    }
    
    .img-card-prod {
        width: 50px;
        height: 50px;
    }
    
    .img-centerA {
        align-items: center;
        /* padding-top: 20px; */
    }
    
    .img-centerE {
        align-items: flex-end;
        padding-top: 20px;
        /* padding-right: 20px; */
    }
    
    .icon {
        width: 75px;
        height: 60px;
    }
    
    .calcu-img {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .top-set {
        align-content: center;
    }
    
    .size {
        height: 350px;
    }
    
    .slider {
        position: relative;
    }
    
    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.3);
        itemColor: #DDDDDD;
        itemSelectedColor: rgb(0, 180, 255);
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
        min-width: 170 px;
        
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-family: robotoregular;
        font-weight: 500;
        
        color: #fff;
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
        
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-weight: 500;
        
        color: #fff;
    }
    
    .md-custom-btn:active-a {
        background-color: #3b371e;
    }
    
    .button-pad-s {
        padding-bottom: 19px;
    }
    
    .button-pad-b {
        padding-bottom: 39px;
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
    
    .card-prod-btn1 {
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
    
    .card-prod-btn2 {
        background-color: #505050;
        border-radius: 7px;
        margin-top: 15px;
        /* width: 340px; */
        padding: 25px;
        justify-content: center;
    }
    
    .card-prod-btn-text {
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-prod-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
    }
    
    .card-prod-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: Helvetica-medium;
    }
    
    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family: Helvetica-medium;
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
        font-family: robotoregular;
        padding-top: 10px;
        color: #565656;
         line-height: 1.7;
        /* color: #9d9d9d; */
    }
    
    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
    }
    
    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
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
     .allout-icn {
            top: -3px;
            right: 2px;
            position: absolute;
            width: 55px;
            height: 55px;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }
    @media only screen and (min-width: 320px) {
         .allout-icn {
            /* top: -6px; */
            right: 2px;
            position: absolute;
            width: 35px;
            height: 35px;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
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
            
        }
        .btn-color {
            background-color: #3b371e;
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            
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
            
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .table-head-row {
            flex: 0.9;
        }
        .form-title {
            font-size: 14px;
            font-family: robotoregular;
            padding-top: 10px;
            /* color: #9d9d9d; */
        }
        .heading {
            font-size: 15px;
            font-family: robotoregular;
            padding-top: 10px;
            padding-bottom: 18px;
            font-weight: bold;
        }
        .heading-data {
            font-size: 14px;
            font-family: robotoregular;
            font-weight: bold;
            padding-top: 10px;
            padding-bottom: 10px;
            color: #9D9D9D;
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
            
        }
        .md-btn-label-a {
            font-size: 14px;
            font-family: robotoregular;
            font-weight: 500;
            
            color: #fff;
        }
        .md-btn-width-a {
            width: 230px;
        }
        .x-small-btn-a {
            width: 220px;
        }
        .x-small-btn-b {
            width: 130px;
        }
        .md-btn-width-b {
            width: 140px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .form-title {
            font-size: 14px;
            font-family: robotoregular;
            padding-top: 10px;
            /* color: #9d9d9d; */
        }
        .heading {
            font-size: 15px;
            font-family: robotoregular;
            /* padding-top: 5px; */
            font-weight: bold;
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
            width: 230px;
        }
        .x-small-btn-a {
            width: 220px;
        }
        .x-small-btn-b {
            width: 130px;
        }
        .md-btn-width-b {
            width: 140px;
        }
    }
</style>