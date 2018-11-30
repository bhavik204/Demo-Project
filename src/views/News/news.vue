<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7">
            
      <scroller class="scroller">
         
    <div class="container-news" style="justify-content:space-between" >
        <div class="container-news wrapper-padding" >
            <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#2196f3; "><</text></div>
            <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#4E342E; ">2016</text></div>
            <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#BDBDBD; ">2015</text></div> 
            <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#BDBDBD; ">2014</text></div>
            <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#2196f3;">></text></div>
        </div>
        
        <div class="container-news wrapper-padding" >
                <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#2196f3; "><</text></div>
                <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#4E342E; ">Jan</text></div>
                <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#BDBDBD; ">Feb</text></div> 
                <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#BDBDBD; ">Mar</text></div>
                <div class="wrapper-padding-left-right"><text class=" news-text" style="color:#2196f3;">></text></div>
        </div>
    </div>
    <div class="">
    <div style="flex-direction: column;flex:1" class="table-row-details wrapper-padding ">
            <text style="flex:1;margin-left:2px;"  class="wrapper-padding news-text-nor">Choice</text>
        <text v-if="platform !== 'Web'" class="news-text input-news " style="flex:0.5; padding-left:17px;padding-top:5px; padding-bottom:5px;" @click="fixedSavingPlan">{{value}}</text>
        <div class="" v-if="platform === 'Web'">
        <select  class="news-custom-select-box cursor-pointer-globle ">
            <option class="wrapper-padding"  v-for="(calc, index) in premiumModeListWeb" :key="index">{{calc}}</option>
        </select>
        <!-- style="flex:0.6; max-width: 150px; margin-bottom:1px; padding: 8px 0px 4px 4px; -->
        </div>
    </div>
</div>
<div class="" >

    <div class="flex-direction-chnge container-contain-width" >
       
            <div class="shadow news-card-width   "  @click.native="jump('/lnews')"  @click="jump('/lnews')">
                <div class="wrapper-padding-top-bot ">
                    <div class="news-mar-top-bot">
                        <text class="news-char-second cursor-pointer-globle">4 April, 2015 | 02.26PM | In News</text>
                    </div>
                    <div class="">
                        <text class="news-text cursor-pointer-globle">Protect First, ULIP thereafter</text>
                    </div>
                </div>
                <div class="">
                    <text class="news-text-nor cursor-pointer-globle ">Japans Jombo Life Insurance today by another 23 per cent, taking its total holding to 49 per taking its total holding to 49 per</text>
                </div>
                <div class="news-row-bottom">
                    <div class="wrapper-padding-top-bot-color">
                        <text class="news-text-nor-color ">Mumbai</text>
                    </div>
                    <div class="wrapper-padding-top-bot-color">
                            <image class="btn-icon-size cursor-pointer-globle" src="https://www.materialui.co/materialIcons/file/file_download_grey_192x192.png"></image>
                    </div>
                </div>
            </div>
        
       
            <div class="news-card-width  shadow "  @click.native="jump('/lnews')"  @click="jump('/lnews')">
                <div class="wrapper-padding-top-bot ">
                    <div class="news-mar-top-bot">
                        <text class="news-char-second cursor-pointer-globle ">4 April, 2015 | 02.26PM | In News</text>
                    </div>
                    <div class="">
                        <text class="news-text cursor-pointer-globle ">Jombo Life Insurance raises stake in ABC  Life to 49 %</text>
                    </div>
                </div>
                <div class="">
                    <text class="news-text-nor cursor-pointer-globle ">ABC Life and RAK Insurance launch “Arise” – a family protection  NRIs</text>
                </div>
                <div class="news-row-bottom" style="margin-top: 10px">
                    <div class="wrapper-padding-top-bot-color">
                        <text class="news-text-nor-color ">Mumbai</text>
                    </div>
                    <div class="wrapper-padding-top-bot-color">
                            <image class="btn-icon-size cursor-pointer-globle" src="https://www.materialui.co/materialIcons/file/file_download_grey_192x192.png"></image>
                    </div>
                </div>
            </div>
        
    </div>
    <div class="flex-direction-chnge container-contain-width" >
       
        <div class="news-card-width  shadow "  @click.native="jump('/lnews')"  @click="jump('/lnews')">
            <div class="wrapper-padding-top-bot ">
                <div class="news-mar-top-bot">
                    <text class="news-char-second cursor-pointer-globle">4 April, 2015 | 02.26PM | In News</text>
                </div>
                <div class="">
                    <text class="news-text  cursor-pointer-globle">Protect First, ULIP thereafter</text>
                </div>
            </div>
            <div class="">
                <text class="news-text-nor cursor-pointer-globle ">Japans Jombo Life Insurance today by another 23 per cent, taking its total holding to 49 per taking its total holding to 49 per</text>
            </div>
            <div class="news-row-bottom">
                <div class="wrapper-padding-top-bot-color">
                    <text class="news-text-nor-color ">Mumbai</text>
                </div>
                <div class="wrapper-padding-top-bot-color">
                        <image class="btn-icon-size cursor-pointer-globle" src="https://www.materialui.co/materialIcons/file/file_download_grey_192x192.png"></image>
                </div>
            </div>
        </div>
    
   
        <div class="news-card-width  shadow "  @click.native="jump('/lnews')"  @click="jump('/lnews')">
            <div class="wrapper-padding-top-bot ">
                <div class="news-mar-top-bot">
                    <text class="news-char-second cursor-pointer-globle ">4 April, 2015 | 02.26PM | In News</text>
                </div>
                <div class="">
                    <text class="news-text cursor-pointer-globle ">Jombo Life Insurance raises stake in ABC  Life to 49 %</text>
                </div>
            </div>
            <div class="">
                <text class="news-text-nor cursor-pointer-globle ">ABC Life and RAK Insurance launch “Arise” – a family protection  NRIs</text>
            </div>
            <div class="news-row-bottom" style="margin-top: 10px">
                <div class="wrapper-padding-top-bot-color">
                    <text class="news-text-nor-color ">Mumbai</text>
                </div>
                <div class="wrapper-padding-top-bot-color">
                        <image class="btn-icon-size cursor-pointer-globle" src="https://www.materialui.co/materialIcons/file/file_download_grey_192x192.png"></image>
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
    const navigator = weex.requireModule('navigator');
    const picker = weex.requireModule('picker');
    const items = ["Option 1", "Option 2", "Option 3", "Option 4"];
    const invalid = '- invalid -'

    export default {
         components: {
            footerTab
        },
        created() {
            this.$store.commit('SET_PAGE_TITLE' , 'News and Updates');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                return this.platform
            }
        },

        props: {
            listItems: {
                type: Array
            }

        },

        data: function() {
            return {
                headerName: 'News ',
                index: -1,
                platform: invalid,
                deviceWidth: invalid,
                index6: -1,
                premiumModeListWeb: ["Option 1", "Option 2", "Option 3", "Option 4"],

            }
        },
        computed: {
            value() {
                if (this.index == -1) {
                    return "Option 1 ";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            }
        },
        methods: {
            fixedSavingPlan() {
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

            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            }

        }

    }
</script>

<style>
    .robotoregular {
        font-family: robotoregular;
    }
    
    .robotobold {
        font-family: robotobold;
    }
    
    .container-news {
        flex-direction: row;
    }
    
    .wrapper-padding {
        padding: 15px;
    }
    
    .wrapper-padding-left-right {
        padding-left: 5px;
        padding-right: 5px;
    }
    
    .wrapper-padding-top-bot {
        padding-top: 2px;
        padding-bottom: 10px;
    }
    /* .wrapper-padding-top-bot-color {
        padding-top: 5px;
        padding-bottom: 5px;
    } */
    
    .news-text {
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 10px;
        font-family: robotoregular;
    }
    
    .news-char-second {
        font-size: 22px;
        padding-bottom: 10px;
        /* padding-top: 10px; */
        font-family: robotoregular;
    }
    
    .news-mar-top-bot {
        margin-top: 5px;
        margin-bottom: 10px;
    }
    
    .news-row-bottom {
        flex-direction: row;
        justify-content: space-between;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .news-text-bold {
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 10px;
        font-family: robotoregular;
    }
    
    .news-text-nor {
        font-size: 24px;
        font-family: robotoregular;
    }
    
    .news-text-nor-color {
        font-size: 21px;
        color: rgb(172, 168, 167);
        font-family: robotoregular;
    }
    
    .news-card-width {
        width: 680px;
        margin-bottom: 10px;
        background-color: #fff;
        padding: 10px 20px;
        margin-left: 25px;
        border-radius: 3px;
    }
    
    .input-news {
        width: 250px;
        display: block;
        background-color: #fff;
        font-size: 24px;
        margin-left: 15px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #f7f7f7;
        border-right-color: #f7f7f7;
        border-left-color: #f7f7f7;
        border-bottom-color: #c7c7c7;
        placeholder-color: #f7f7f7;
        font-family: robotoregular;
    }
    
    .btn-icon-size {
        height: 25px;
        width: 25px;
        margin-right: 20px;
    }
    
    .container-card-news {
        background-color: #FFF;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 3px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    
    .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    
    .flex-direction-chnge {
        flex-direction: column;
    }
    

    
    .news-custom-select-box {
        background-color: #f7f7f7;
        font-size: 25px;
        padding: 15px;
        color: #696868;
        border-width: 2px;
        border-style: solid;
        border-top-color: #f7f7f7;
        border-right-color: #f7f7f7;
        border-left-color: #f7f7f7;
        border-bottom-color: #9a9a9a;
    }
    
    @media (min-width: 320px) {
        .news-text {
            font-size: 15px;
            font-weight: bold;
            padding-bottom: 10px;
            font-family: robotoregular;
        }
        .news-char-second {
            font-size: 13px;
            padding-bottom: 10px;
            /* padding-top: 10px; */
            font-family: robotoregular;
        }
        .news-text-nor {
            font-size: 14px;
        }
        .news-text-nor-color {
            font-size: 11px;
            color: rgb(172, 168, 167);
            font-family: robotoregular;
        }
        .flex-direction-chnge {
            flex-direction: column;
        }
        .container-contain-width {
            width: 100%
        }
        .news-custom-select-box {
            font-size: 15px;
            padding: 5px;
            border-width: 1px;
            width: 200px;
        }
        .news-custom-select-box:focus {
            border-width: 2px;
        }
        .wrapper-padding-top-bot-color {
            padding-top: 5px;
            padding-bottom: 5px;
        }
        .btn-icon-size {
            height: 14px;
            width: 14px;
            margin-right: 20px;
        }
        .news-card-width {
            width: 90%;
            margin-bottom: 10px;
            background-color: #fff;
            padding: 10px 20px;
            margin-left: 20px;
        }
    }
    
    @media (min-width: 768px) {
        .news-text {
            font-size: 15px;
            font-weight: bold;
            padding-bottom: 10px;
            font-family: robotoregular;
        }
        .news-char-second {
            font-size: 13px;
            padding-bottom: 10px;
            /* padding-top: 10px; */
            font-family: robotoregular;
        }
        .news-text-nor {
            font-size: 14px;
            font-family: robotoregular;
        }
        .news-text-nor-color {
            font-size: 11px;
            color: rgb(172, 168, 167);
            font-family: robotoregular;
        }
        .flex-direction-chnge {
            flex-direction: column;
        }
        .container-contain-width {
            width: 100%
        }
        .wrapper-padding-top-bot-color {
            padding-top: 5px;
            padding-bottom: 5px;
        }
        .btn-icon-size {
            height: 14px;
            width: 14px;
            margin-right: 20px;
        }
        .news-card-width {
            width: 65%;
            margin-bottom: 10px;
            background-color: #fff;
            padding: 10px 20px;
            margin-left: 15px;
        }
    }
    
    @media (min-width: 992px) {
        .news-text {
            font-size: 15px;
            font-weight: bold;
            padding-bottom: 10px;
            font-family: robotoregular;
        }
        .news-char-second {
            font-size: 13px;
            padding-bottom: 10px;
            /* padding-top: 10px; */
            font-family: robotoregular;
        }
        .news-text-nor {
            font-size: 14px;
            font-family: robotoregular;
        }
        .news-text-nor-color {
            font-size: 11px;
            color: rgb(172, 168, 167);
            font-family: robotoregular;
        }
        .flex-direction-chnge {
            flex-direction: row;
        }
        .container-contain-width {
            width: 100%
        }
        .wrapper-padding-top-bot-color {
            padding-top: 5px;
            padding-bottom: 5px;
        }
        .btn-icon-size {
            height: 14px;
            width: 14px;
            margin-right: 20px;
        }
        .news-card-width {
            width: 45%;
            margin-bottom: 10px;
            margin-left: 25px;
            background-color: #fff;
            padding: 10px 15px 10px 15px;
        }
    }
</style>