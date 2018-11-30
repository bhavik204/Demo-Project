<template>  
    <div class="master-page-wrapper">
        <!-- Header -->
        <!-- <div v-if="platform === 'Web'" class="ums-pg-row page-header items-justify-center items-align-center">
            <text class="page-heder-title">UMS Status</text>
        </div> -->
        <scroller style="">
            <div class="ums-cfr-card margin-add shadow">
                <div class="ums-pg-row ums-pg-direction-change ums-btm-margin">
                    <!-- <text class="form-labels">Search By</text> -->
                        <div class="ums-pg-row">

                            <div class="box">
                                <select v-if="platform === 'Web'" class="vx-globle-drp-down">
                                    <option selected>Select</option>
                                    <option v-for="(option , i) in optionList" :key="i" class="ums-sts-nrml-fnt box">{{option}}</option>
                                </select>
                                
                                <div v-if="platform !== 'Web'">
                                    <apk-drop-down :option-list="optionList"></apk-drop-down>
                                </div>
                            </div>
                            <div class="box">
                                <input  v-model="searchBox.text" type="text" class="vx-input-box" @focus="onFocusText" @blur="onBlurText"/>
                                <div class="input-icon-pos" @click.native="clearSearchBox(searchBox.iconId)">
                                    <image class="btn-icon-size btn-icon-size-pos" :src="textBoxIcon"/>                                   
                                </div>
                            </div>
                        </div>
                        <div class="ums-pg-row btn-bottom-margin">
                            <div class="box ums-btn-width" v-if="platform === 'Web'">
                                <p-button 
                                    btn-name="Search"
                                    btn-icon="https://www.materialui.co/materialIcons/action/search_white_192x192.png">
                                </p-button>
                            </div>
                            <div v-if="platform !== 'Web'">
                                <p-button 
                                    btn-name="Search"
                                    btn-width="250px"
                                    btn-icon="https://www.materialui.co/materialIcons/action/search_white_192x192.png">
                                </p-button>
                            </div>
                        </div>
                </div>
                <scroller  scroll-direction="horizontal" class="tb-ums-scroller">
                <div class="table-container-width s-tb-whole-bdr">
                   
                        <div class="ums-pg-column ums-pg-wrap tb-container">
                            <div class="ums-pg-row">
                                <div class="table-heading table-header-width page-wraper">
                                    <text class="ums-sts-nrml-fnt">Category</text>
                                </div>
                                <div class=" table-heading table-header-width page-wraper">
                                    <text class="ums-sts-nrml-fnt">Round 1</text>
                                </div>
                                <div class=" table-heading table-header-width page-wraper">
                                    <text class="ums-sts-nrml-fnt">Round 2</text>
                                </div>
                            </div>

                            <div v-for="(li, index) in tableData" :key="index" class="ums-pg-row box list-container">
                                <div class="table-header-width ">
                                    <text class="ums-sts-nrml-fnt">{{li.title}}</text>
                                </div>
                                <div class="table-header-width">
                                    <text class="ums-sts-nrml-fnt">{{li.roundOne}}</text>
                                </div>
                                <div class="table-header-width">
                                    <text class="ums-sts-nrml-fnt">{{li.roundTwo}}</text>
                                </div>
                            </div> 
                        </div>
                    
                 </div>
                </scroller>
            </div>
        </scroller>
    </div>
</template>

<script>
import PButton from '../../components/vx-primary-button/vx-primary-button'
import apkDropDown from '../CFR/cfr-dropDown-apk'


const textBoxImages = [
    "https://www.materialui.co/materialIcons/action/search_grey_192x192.png",
    "https://www.materialui.co/materialIcons/content/clear_grey_192x192.png"
];
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

const picker = weex.requireModule("picker");


const items =[
    "App No.",
    "LTRF No."
]
export default {
    created() {
        this.$store.commit('SET_PAGE_TITLE' , 'CFR');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    components: {
        PButton,
        apkDropDown
    },
    data() {
        return {
            headerName:'UMS Status',
            optionList: items,
            textBoxIcon: textBoxImages[0],
            searchBox: {
                iconId: 0,
                text: ''
            },

            tableData: [
                {
                    title: "Final Status",
                    roundOne: "Medical recd & processed.",
                    roundTwo: "Medical recd & processed."
                },
                {
                    title: "LTRF No",
                    roundOne: "52368386_A",
                    roundTwo: "52368386"
                },
                {
                    title: "Application No",
                    roundOne: "WA136534",
                    roundTwo: "WA136534"
                },
                {
                    title: "PROCESS DATE",
                    roundOne: "9/29/2015 12:0000 AM",
                    roundTwo: "9/29/2015 12:0000 AM"
                },
                {
                    title: "Final Status",
                    roundOne: "Medical recd & processed.",
                    roundTwo: "Medical recd & processed."
                },
                {
                    title: "LTRF No",
                    roundOne: "52368386_A",
                    roundTwo: "52368386"
                },
                {
                    title: "Application No",
                    roundOne: "WA136534",
                    roundTwo: "WA136534"
                },
                {
                    title: "PROCESS DATE",
                    roundOne: "9/29/2015 12:0000 AM",
                    roundTwo: "9/29/2015 12:0000 AM"
                }
            ],

            index: -1

        }
    },

    
    methods: {

        onFocusText() {
            this.textBoxIcon = textBoxImages[1];
            this.searchBox.iconId = 1;
        },

        onBlurText() {
            this.textBoxIcon = textBoxImages[0];
            this.searchBox.iconId = 0;
        },

        clearSearchBox(iconId) {
            if(iconId === 1) {
                this.searchBox.text = '';
            } else {
                // comming soon
            }
        }
    }
}
</script>

<style>

    /* APK */

    .page-wraper {
        background-color: rgb(230, 230, 230);
    }

    .ums-pg-wrap {
        flex-wrap: wrap;
    }

    /* Horizontal Scroller */
    .tb-ums-scroller {
        flex-direction: row;
        /* width: 100%; */
    }

    .margin-add {
        margin:20px;
    }

    .ums-pg-row {
        flex-direction: row;
    }

    .ums-pg-column {
        flex-direction: column;
    }

    .ums-pg-row-revers {
        flex-direction: row-reverse;
    }

    .ums-pg-direction-change {
        flex-direction: column;
    }

    .text-keep-center {
        text-align: center;
    }
    .text-right {
         text-align: right;
    }
    .ums-pg-flow-wrap {
        flex-flow: wrap;
    }

    .items-align-center {
        align-items: center;
    }

    .items-justify-center {
        justify-content: center;
    }

    .bold-text {
        font-weight: bold;
    }

    .ums-sts-nrml-fnt{
        font-size: 24px;
    }


    .ums-cfr-card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
    }

    .box {
        padding: 10px;
    }

    .ums-btn-width {
         width: 250px;
    }

    .table-heading {
        padding: 20px;
    }

    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }

    .btn-icon-size-pos {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .vx-input-box {
        padding: 20px;
        padding-left: 4px;
        /* background-color: green; */
        /*padding-top: 25px;*/
        font-size: 28px;
        width: 750px;
        border-width: 2px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #999999;
    }

    .vx-input-box:focus {
        border-width: 2px;
        border-bottom-color: #3a3a3a;
    }

     .input-new-property {
            width: 450px;
            padding-right: 50px;
        }

        .input-icon-pos {
            position: absolute;
            right: 15px;
            top: 15px;
            height: 50px;
            width: 50px;
            padding: 5px;
            border-radius: 25px;
        }

        .input-icon-pos:active {
            background-color: #dfdfdf;   
        }

        .dropdown-icon {
            width: 50px;
            height: 50px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }
        .drop-arrow-pos {
           
            /* background-color: red; */
            position: absolute;
            top: 15px;
            right: 0;
        }

        .dropDown-width {
            width:200px;
        }

        .table-header-width {
            width: 450px;
        }

        .btn-bottom-margin {
            margin-top: 0;
            margin-bottom: 20px;
        }

         /* whole table border dont change in this class pleas becouse copy form other file*/
    .s-tb-whole-bdr {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(202, 202, 202);
    }
    @media (min-width: 320px) {

        .ums-pg-direction-change {
            flex-direction: column;
        }
        

        .ums-pg-wrap {
            flex-wrap: nowrap;
            overflow: scroll;
        }

        .ums-sts-nrml-fnt{
            font-size: 14px;
        }

        .ums-cfr-card {
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 20px;
            border-radius: 3px;
        }

        .cfr-card-height {
            max-height: 270px;;
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
            
        }

        .md-btn-label {
            font-size : 11px;
        }

    .md-custom-btn:active {
       opacity:0.8;
    }

        .ums-btn-width {
            width: 120px;
        }
        .table-heading {
            padding: 10px;
        }

    
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }

        .table-header-width {
            width: 35%;
        }
        .tb-container {
            width: 650px;
        }

        .list-container {
            border-width: 1px;
            border-style: solid;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
            border-bottom-color: rgb(230, 230, 230);
        }

    
        .input-icon-pos {
            position: absolute;
            right: 5px;
            top: 15px;
            height: 25px;
            width: 25px;
            padding: 5px;
            /* background-color: red; */
            border-radius: 50%;
        }

        .btn-icon-size-pos {
            position: absolute;
            top: 4px;
            left: 4px;
        }

        .vx-input-box {
			padding: 10px 0PX;
            font-size: 14px;
            width: 100%;
            padding-bottom: 10px;
            border-width: 1px;
		}

        .vx-input-box:focus {
            border-width: 1px;
            border-bottom-color: #3a3a3a;
        }

        .input-new-property {
            width: 180px;
            padding-right: 30px;
        }

        .table-container-width {
            width:100%;
            overflow: auto;
        }
        .btn-bottom-margin {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

    }

    @media (min-width: 768px) {
        .margin-left-in-card {
            margin-left: 20px;
        }
        .ums-pg-direction-change {
            flex-direction: row;
        }

        .only-table-row {
            flex-direction: column;
        }
        .container-width {
            max-width: 750px;
        }
        .tb-ums-scroller {
            flex-direction: column;
        }
        .btn-bottom-margin {
            margin-top: 0;
            margin-bottom: 0;
        }
        /* Serach Field margin btm */
        .ums-btm-margin {
            margin-bottom: 20px;
        }
    }


    @media (min-width: 992px) {
        .ums-pg-direction-change {
            flex-direction: row;
        }

        .container-width {
            max-width: 1200px;
        }

        .tb-container {
            width: 100%;
        }

        .ums-pg-wrap {
            overflow: hidden;
        }

        /* This button class is used */

        .ums-btn-width {
            width: 110px;
        }
        .table-container-width {
            width:100%;
            overflow: auto;
        }

        /* This class is used here is for the table work properly */
        .tb-ums-scroller {
            flex-direction: column;
        }

    }

</style>
