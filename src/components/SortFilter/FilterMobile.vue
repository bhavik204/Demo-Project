<template>
    <div class="wrapper-div" style="background-color:#f7f7f7">

        <div class="card-filter card-filter-border-bottom" style="flex-direction:row;justify-content: space-between;padding: 15px">
            <div style="justify-content: center"> <text class="card-filter-heading">Reset</text></div>
            <div style="justify-content: center"> <text class="card-filter-heading">Filter By</text></div>
            <div v-if="platform === 'Web'" style="justify-content: center" @click.native="jump(rlink)">
                <image class="cal-icn-filter" src="https://www.materialui.co/materialIcons/navigation/cancel_black_192x192.png" alt="notify"></image>
            </div>
              <div v-if="platform !== 'Web'" style="justify-content: center" @click="jump(rlink)">
                <image class="cal-icn-filter" src="https://www.materialui.co/materialIcons/navigation/cancel_black_192x192.png" alt="notify"></image>
            </div>
        </div>  

        <div class="container-filter" style="flex-direction:row;">

            <div class="card-filter-head prop-card-filter" style="flex:1">
                <div :style="{backgroundColor:color}">
                    <div v-if="platform !== 'Web'" class="head-row-filter" style="flex-direction:row;" @click="showSearchDialog">
                        <div v-if="img==true">
                            <image class="cal-icn-filter" src="https://i.pinimg.com/originals/09/15/c4/0915c44d62245550f9508bc99963b862.png" alt="notify"></image>
                        </div>
                        <div class="tab-content-filter" >
                            <text :style="{fontWeight:weight}" class="sub-card-filter-heading">Search</text>
                        </div>

                    </div>

                      <div v-if="platform === 'Web'" class="head-row-filter" style="flex-direction:row;" @click.native="showSearchDialog">
                        <div v-if="img==true">
                            <image class="cal-icn-filter" src="https://i.pinimg.com/originals/09/15/c4/0915c44d62245550f9508bc99963b862.png" alt="notify"></image>
                        </div>
                        <div class="tab-content-filter" >
                            <text :style="{fontWeight:weight}" class="sub-card-filter-heading">Search</text>
                        </div>

                    </div>
                </div>
            


                <div :style="{backgroundColor:color2,fontWeight:weight2}">
                    <div v-if="platform === 'Web'" class="head-row-filter" style="flex-direction:row" @click.native="showRangeDialog">
                        <div v-if="img2 == true">
                            <image class="cal-icn-filter" src="https://i.pinimg.com/originals/09/15/c4/0915c44d62245550f9508bc99963b862.png" alt="notify"></image>
                        </div>
                        <div class="tab-content-filter" >
                            <text :style="{fontWeight:weight2}" class="sub-card-filter-heading">Filter</text>
                        </div>
                    </div>
             

             
                    <div v-if="platform !== 'Web'" class="head-row-filter" style="flex-direction:row" @click="showRangeDialog">
                        <div v-if="img2 == true">
                            <image class="cal-icn-filter" src="https://i.pinimg.com/originals/09/15/c4/0915c44d62245550f9508bc99963b862.png" alt="notify"></image>
                        </div>
                        <div class="tab-content-filter" >
                            <text :style="{fontWeight:weight2}" class="sub-card-filter-heading">Filter</text>
                        </div>
                    </div>
                </div>
 
            </div>
            <div class="side-container-filter" style="flex-direction:column;flex:3">
                <div class="card-filter card-filter-mb"  v-if="showSearch==true">
                    <div class="table-row-filter">
                        <div style="flex-direction:column;flex:1;width: 50%" class="table-row-filter-details">
                            <text v-if="platform !== 'Web'" class="input-filter" style="flex:1" @click="titleType">{{value}}</text>
                             <div  v-if="platform !== 'Web'" class="xd-drop-arrow-pos">
                <image  class="xd-dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
            </div>
                            <div class="drop-down" v-if="platform == 'Web'">
                                <select>
                                                <option class="dropdown-opt" v-for="calc in titleWeb">{{calc}}</option>
                                            </select>
                            </div>
                        </div>
                    </div>
                    <div class="table-row-filter" style="flex-direction:row">
                      <div class="pl-20"> <input class="input-filter" @change="onFocus" type="text" placeholder="Search By" /></div>
                       <div> <image class="cal-icn-filter" style="margin-top: 15px" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png" alt="notify"></image></div>
                    </div>
                </div>
          
                <div class="card-filter" v-if="showRange==true">
                      <div class="wrap-filetype">
                        <div  class="mobile-btn-chk" >
                        
                            <text class="mobile-btn-title" for="checkbox_id">Custom</text>
                        </div>
                        
                        <div  class="mobile-btn-chk">
                 
                            <text class="mobile-btn-title" for="checkbox_id1">MTD</text>
                        </div>
                        <div  class="mobile-btn-chk">
                    
                            <text class="mobile-btn-title" for="checkbox_id2">YTD</text>
                        </div>
                </div>
                    <!-- <div class="table-row-filter">
                        <text class="chkbox-filter-title">Month To Date</text>
                        <div class="first-col-filter" style="flex-direction:row;margin-top:10px">
                            <div style="flex-direction:column;flex:1;">
                                <text class="chkbox-filter-title">From</text>
                                <input type="date" placeholder="Input Date" class="input-filter" max="2070-12-12" />
                            </div>
                            <div style="flex-direction:column;flex:1;" class="table-row-filter-col-details">
                                <text class="chkbox-filter-title">To</text>
                                <input type="date" placeholder="Input Date" class="input-filter" max="2070-12-12" />
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="table-row-filter">
                        <text class="chkbox-filter-title">Year To Date</text>
                        <div class="first-col-filter" style="flex-direction:row;margin-top:10px">
                            <div style="flex-direction:column;flex:1;">
                                <text class="chkbox-filter-title">From</text>
                                <input type="date" placeholder="Input Date" class="input-filter" max="2070-12-12" />
                            </div>
                            <div style="flex-direction:column;flex:1;" class="table-row-filter-col-details">
                                <text class="chkbox-filter-title">To</text>
                                <input type="date" placeholder="Input Date" class="input-filter" max="2070-12-12" />
                            </div>
                        </div>
                    </div> -->
                    <div class="table-row-filter">
                        <text class="chkbox-filter-title-bold">Custom Date Range</text>
                        <div class="first-col-filter" style="flex-direction:row;margin-top:60px">
                            <div style="flex-direction:column;flex:1;">
                                <text class="chkbox-filter-title">From</text>
                                <input type="date" placeholder="Input Date" class="input-filter" max="2070-12-12" />
                            </div>
                            <div style="flex-direction:column;flex:1;" class="table-row-filter-col-details">
                                <text class="chkbox-filter-title">To</text>
                                <input type="date" placeholder="Input Date" class="input-filter" max="2070-12-12" />
                            </div>
                        </div>
                    </div>

                    <div class="table-row-filter" style="justify-content:center">
                        <div  class="mobile-mainbtn-chk">
                    
                            <text class="mobile-mainbtn-title" for="checkbox_id2">Apply</text>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <!-- <div  class="btn-space">
                    <div class="box md-btn-width" style="padding:10px;">
                            <div class="md-custom-btn btn-color"  >
                                <text class="md-btn-label ">Show 30 results</text>
                            </div>
                        </div>
    
                </div> -->
                <div  class="sort-mb-footer"style="justify-content:center;background-color: #000;
                position: fixed;
                bottom: 0;">
            <div style="align-items: center;    padding: 10px"> <text class="mb-btn-label">Show 30 results</text></div>
        </div>
    </div>
</template>

<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const items = ["Cust Name", "Cust ID", "Product Name", "Product Type", "App No"];
    
    const picker = weex.requireModule("picker");
    import {
        WxcCheckbox
    } from 'weex-ui'
    export default {
        props:{
            rlink: {
                type:String,
                default:'/home'
                
            }
        
        },
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown

            }
        },
        components: {
            WxcCheckbox
        },
        data() {
            return {

                platform: invalid,
                deviceWidth: invalid,
                search: '',
                color: '#fff',
                color1: '',
                color2: '',
                weight:'bold',
                weight2:'',
                img: false,
                img1: false,
                img2: false,
                showSearch: true,
                showCategory: false,
                showRange: false,
                index: -1,
                titleWeb: ["Cust Name", "Cust ID", "Product Name", "Product Type", "App No"],
            }
        },
        computed: {
            value() {
                if (this.index == -1) {
                    return "Select ";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
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
            showSearchDialog() {
                this.color1 = ''
                this.color2 = ''
                this.img = false;
                this.showSearch = true;
                this.showCategory = false;
                this.showRange = false;
                this.color = '#fff',
                this.weight = 'bold'
                this.weight2= ''


            },
            onFocus(event) {
                console.log(event.value)
                if (event.value !== '') {
                    console.log("True")
                    this.img = true
                } else {
                    this.img = false
                }


            },
            showCategoryDialog() {
                this.color = ''
                this.color2 = ''
                this.showCategory = !this.showCategory
                this.showSearch = false;
                this.showRange = false;
                this.color1 = '#fff'
            },
            showRangeDialog() {
                this.color = ''
                this.color1 = ''
                this.showSearch = false;
                this.showCategory = false;
                this.showRange = !this.showRange
                this.color2 = '#fff'
                this.weight2 = 'bold',
                this.weight = ''
            }
        },


    }
</script>
<style>
    
.robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
.sort-mb-footer{
    width:750px;
}
 .xd-drop-arrow-pos {
        position: absolute;
        top: 20px;
        right: 80px;
    }
      .xd-dropdown-icon {
        width: 50px;
        height: 50px;
    }
     .wrap-filetype {
            flex-direction: row;
            padding-top: 10px;
            padding: 20px;
       
          
        }
          .mobile-btn-title{
        font-size: 21px;  
        color: #fff;
        font-family:robotoregular;
    }
          .mobile-btn-chk {
            background-color: #3b371e;
            width: 130px;
            height: 50px;
            font-size: 14px;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-family:robotoregular;
            justify-content: center
        }
         .mobile-mainbtn-chk {
            background-color: #3b371e;
            width: 200px; 
            height: 50px;
            font-size: 14px;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-family:robotoregular;
                justify-content: center
        }
              .mobile-mainbtn-title{
        font-size: 21px;  
        color: #fff;
        font-family:robotoregular;
    }
.mb-btn-label{
    color:#fff;
    font-size:20px;
    font-family:robotoregular;
}
    .card-filter {
        /* width:70%; */
        /* margin-top: 20px; */
        margin-bottom: 0px;
        background-color: #fff;
    }
  
    
    .card-filter-border-bottom {
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .table-row-filter {
       padding:20px;
    }
    
    .table-row-filter-col-details {
        margin-left: 10px;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 15px;
        font-family:robotoregular;
    }
    
    .ckhbox-filter {
        margin-left: 15px;
        margin-top: 8px
    }
    .chkbox-filter{
           
           justify-content: space-between
    }
    
    .chkbox-filter-title {
        font-size: 24px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family:robotoregular;
    }
     .chkbox-filter-title-bold {
        font-size: 24px;
        margin-left: 10px;
        font-weight: bold;
        color: #9d9d9d;
        font-family:robotoregular;
    }
    
    .backg-color {
        background-color: #fff;
    }
    
    /* .btn-color {
        background-color: rgb(80, 80, 80);
    } */
    
    /* .md-btn-width {
        flex: 1;
    } */
    
    /* .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 80px;
   
     
    } */
    
    /* .md-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family:robotoregular;
    } */
/*     
    .btn-space {
        position: absolute;
        bottom: 0px;
        margin-bottom: 0px;
    } */
    
    .head-row-filter {
        justify-content: start;
        padding: 15px;
        /* border-width: 1px;
    border-top: none;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #ebebeb; */
    }
    
    .tab-content-filter {
        justify-content: center;
        margin-left: 10px;
    }
    
    .head-row-filter1 {
        padding: 10px;
        justify-content: start;
    }
    
    .input-filter {
        display: block;
        width:400px;
        background-color: #fff;
        font-size: 24px;
        padding: 15px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
        font-family:robotoregular;
    }
    
    .input-filter:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }
    
    .sub-card-filter-heading {
        font-size: 30px;
        color: #565656;
        text-align: left;
        font-family:robotoregular;
    }
    
    .card-filter-heading {
        font-size: 30px;
        color: #3b371e;
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .prop-card-filter {
        height: 477px;
    }
    
    .card-filter-head {
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: transparent;
        /* background-color: #fff; */
        /* border-radius: 5px; */
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    }
    
    .cal-icn-filter {
        height: 30px;
        width: 30px;
    }
    @media only screen and (min-width : 320px) {
        .pl-20{
            padding-left: 20px;
        }
            .mobile-btn-chk {
            width: 20%;
            justify-content: center;
            height: 30px;
            font-size: 14px;
            padding:5px;
            margin-right: 5px;
            margin-bottom: 5px;
            font-family:robotoregular;
        }
.mobile-btn-chk:active{
    background-color:black;
}
        
              .mobile-mainbtn-chk {
            width: 25%;
            justify-content: center;
            height: 30px;
            font-size: 14px;
            padding:5px;
            margin-right: 5px;
            margin-bottom: 5px;
            font-family:robotoregular;
        }
                  .mobile-btn-title{
        font-size: 11px;  
        color: #fff;
        font-family:robotoregular;
    }
     
                 .mobile-mainbtn-title{
        font-size: 11px;  
        color: #fff;
        font-family:robotoregular;
    }
       
        
        .sort-mb-footer{
    width:100%;
}
        .sub-card-filter-heading {
        font-size: 20px;
        color: #565656;
        text-align: left;
        font-family:robotoregular;
    }
    
    .card-filter-heading {
        font-size: 20px;
        color: #3b371e;
        font-weight: bold;
        font-family:robotoregular;
    }
     .chkbox-filter-title {
        font-size: 15px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family:robotoregular;
    }
     .chkbox-filter-title-bold {
        font-size: 15px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family:robotoregular;
        font-weight: bold;
    }
      .input-filter {
        display: block;
        /* width:400px; */
        background-color: #fff;
        font-size: 14px;
        padding: 15px;
        padding-left: 0px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
        font-family:robotoregular;
    }
    
    .input-filter:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }
     .table-row-filter {
       padding:10px;
       padding-left: 20px;
    }

    }
</style>