<template>
    <div>
        
        
        <!-- <inner-header v-if="platform !== 'Web'" headeTitle="Advisor Details"></inner-header> -->
        <scroller>
            <div class="lead-card-wrapper shadow" style="margin-top: 120px;">
                <div v-if="platform !== 'Web'">
                    <div class="circle-wraper nx-flex-row items-justify-center" style="margin-top: 80px;">
                        <div class="profile-circle">
                            <text class="profile-circle-text">SH</text>
                        </div>
                        <!-- <text class="status-text">Active</text> -->
                    </div>

                    <div class="nx-flex-row box box-margin-btm items-justify-center" style="margin-top: 50px;">
                        <text class="user-name-text bold-text">Shruti Shrivastava</text>
                    </div>
                    <div class="nx-flex-row items-justify-center">
                        <div class="box box-margin-btm">
                            <text class="text">BRSMCU023   |</text>
                        </div>
                        <div class="box box-margin-btm ">
                            <text class="text">Madhapur, Hyderabad</text>
                        </div>
                    </div> 
                    
                    <div class="box nx-flex-row nx-flex-flow-wrap nx-flex-wrap">
                        <div class="margin-left-20-px box col-1">
                            <text class="label-font-size">Mobile No.</text>
                            <text class="data-text" style="margin-top: 10px;">+91 9122634518</text>
                        </div>
                        <div class="margin-left-20-px box col-1">
                            <text class="label-font-size">Target Achieved</text>
                            <text class="data-text" style="margin-top: 10px;">09 %</text>
                        </div>
                        <div class="margin-left-20-px box col-2">
                            <text class="label-font-size">Email</text>
                            <text class="data-text" style="margin-top: 10px;">radha.parekh@gmail.com</text>
                        </div>
                    </div>   

                    <div class="nx-flex-row items-justify-center" style="margin-top:40px;margin-bottom:20px">
                        <div class="box md-btn-width">
                            <div class="md-custom-btn btn-color">
                                <text class="md-btn-label text-color-white cursor-pointer-globle">View Details</text>
                            </div>
                        </div>
                    </div>

                    <!-- Action buttons -->
                </div>
            </div>
        </scroller>
      
            
        <div class="action-bar-tab nx-flex-row">
            <div class="box onActive flex-box-size-01 nx-flex-row items-justify-center">
                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
            </div>
            <div class="box onActive flex-box-size-01 nx-flex-row items-justify-center">
                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>
            </div>
            <div class="box onActive flex-box-size-01 nx-flex-row items-justify-center">
                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/textsms_black_192x192.png"></image>
            </div>

        </div>
    </div>
    
</template>


<script>



const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {

    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    methods: {
        call() {
            modal.alert({
                message: 'Call Not Active'
            });
        },

        detailsWindow() {
            modal.alert({
                message: 'Comming Soon'
            });
        }
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

    .lead-card-wrapper {
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 3px;
    }

    .action-bar-tab {
        position: fixed;
        bottom:0px;
        left: 0px;
        width: 750px;
        height: 100px;
        background-color: rgb(221, 221, 221);
    }

    .action-header {
        position: fixed;
        top:0px;
        left: 0px;
        width: 750px;
        height: 120px;
        background-color: #3b371e;
    }

    .card-padding {
        padding: 20px;
    }

    .margin-left-20-px {
        margin-top: 30px;
        margin-left: 20px;
    } 
         
    .box {
        padding-top: 10px;
        padding-bottom:10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .text {
        font-size: 30px;
        font-family:robotoregular;
    }

    .data-text {
        font-size: 32px;
        font-family:robotoregular;
    }


    .user-name-text {
        font-size: 45px;
        font-weight: 700px;
        margin-left: 20px;
        font-family:robotoregular;
        /* text-transform: uppercase; */
    }

    .label-font-size {
        font-size: 30px;
        font-weight: 400;
        color: #9d9d9d;
        font-family:robotoregular;
    }

    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }

    .lead-card-wrapper {
        margin-left:0px;
        margin-right: 0px;
    }

    .text-color-white {
        color: #ffffff;
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

    .flex-size-0-5 {
        flex: 0.1;
    }
    .flex-box-size-01 {
        flex: 1;
    }
    .flex-box-size-02 {
        flex: 2;
    }
    .flex-box-size-03 {
        flex: 3;
    }
    .flex-box-size-04 {
        flex: 4;
    }
    .flex-box-size-05 {
        flex: 5;
    }
    .flex-box-size-06 {
        flex: 6;
    }

    .profile-circle {
        height: 200px;
        width: 200px;
        background-color: #06682f;
        border-radius: 100px;
    }

    .onActive:active {
        background-color: #bdbdbd;
    }

    .call-active:active{
         background-color: #dfdfdf;
         border-radius: 60px;
    }

    .profile-circle-text {
        position: absolute;
        top: 55px;
        left: 49px;
        color: white;
        font-size: 80px;
        font-weight: 400;
        font-family:robotoregular;
    }

    .status-text {
        font-size: 25px;
        font-weight: bold;
        color: #54ad40;
        position: relative;
        top: 0px;
        left: 0px;
        margin-left: 20px;
        font-family:robotoregular;
    }


    .action-button {
        height: 80px;
        width: 80px;
        padding: 10px;
    }

    .arrow-icon {
        height: 80px;
        width: 80px;
        padding: 10px;
    }

    .center-bottom-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #ffffff;
        border-bottom-color: #e8e8e8;
    }

    .color-green {
        color: #77A543;
    }

    .col-1 {
        width: 320px;
    }

    .col-2 {
            width: 750px;
    }


    .btn-color {
        background-color: #3b371e;
    }

    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        height: 80px;
        min-width: 88px;
        position: relative;
        
    }

    .md-btn-label {
        font-size : 31px;
        text-transform: uppercase;
        font-weight: 500;
        
        font-family:robotoregular;
    }

    .md-custom-btn:active {
       opacity:0.8;
    }


    .md-btn-width {
        width: 600px;
    }
    
    @media (min-width: 320px) {
        .box {
            padding-top: 5px;
            padding-bottom:5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .card-padding {
            padding: 0px;
        }

        .custom-btn {
            padding: 6px;
            border-radius: 1px;
            /* width: 140px; */
        }

        .btn-width {
            width: 100px;
        }

        .card-icon {
            position: absolute;
            right: 10px;
            top: 5px;
        }

        .text {
            font-size: 14px;
            font-family:robotoregular;
        }

        .icon-size {
            height: 30px;
            width: 30px;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

        .col-1 {
            width: 50%;
        }

        /* .col-2 {
            width: 100%;
        } */

        .label-font-size {
            font-size: 12px;
            font-weight: 400;
            color: #9d9d9d;
            font-family:robotoregular;
        }

        .profile-circle {
            height: 50px;
            width: 50px;
            background-color: blueviolet;
            border-radius: 50%;
        }

        .circle-wraper {
            padding: 15px;
        }

        .profile-circle-text {
            position: absolute;
            top: 25%;
            left: 18%;
            color: white;
            font-size: 23px;
            font-weight: 500;
            font-family:robotoregular;
        }

        .status-text {
            font-size: 12px;
            font-weight: bold;
            color: #54ad40;
            position: relative;
            top: 5px;
            left: 7px;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .action-bar-padding {
            padding-right: 10px;
            padding-left: 15px;
        }

        .action-button {
            height: 25px;
            width: 25px;
            padding: 10px;
        }

        .action-round-button {
            border-radius: 50%;
        }

        .btn-color {
            background-color: rgb(33, 34, 35);
        }

        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
            
        }

        .md-btn-label {
            font-size : 11px;
            text-transform: uppercase;
            font-weight: 500;
            
            font-family:robotoregular;
        }

    .md-custom-btn:active {
       opacity:0.8;
    }


        .box-margin-btm {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .lead-card-wrapper {
            margin-bottom: 20px;
            background-color: #fff;
            border-radius: 3px;
        }
    }

    @media (min-width: 768px) {
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .col-1 {
            width: 30%;
        }

        .col-2 {
            width: 25%;
        }  

        .flex-size-0-5 {
            flex: 0.2;
        }
    }

    @media (min-width: 992px) {
        
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .col-1 {
            width: 70%;
        }

        .col-2 {
            width: 30%;
        }    

        .flex-size-0-5 {
            flex: 0.5;
        }  

        .md-btn-width {
            width: 23%;
        }
    }
    
</style>


