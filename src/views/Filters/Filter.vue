<template>
    <div class="wrapper-div" style="background-color:#f7f7f7">
        
            <div class="card card-border-bottom" style="flex-direction:row;justify-content: space-between;padding: 15px">
                   <div style="justify-content: center"> <text class="card-heading">Reset</text></div>
                   <div style="justify-content: center"> <text class="card-heading">Filter By</text></div>
                   <div style="justify-content: center">      <image class="cal-icn" src="https://www.materialui.co/materialIcons/navigation/cancel_black_192x192.png" alt="notify"></image> </div>
                </div>
               
        <div class="container" style="flex-direction:row;">

            <div class="card-head prop-card" style="flex:1">
                <div :style="{backgroundColor:color}">
                <div class="head-row" style="flex-direction:row;" @click="showSearchDialog">
                    <div v-if="img==true">
                        <image class="cal-icn" src="https://i.pinimg.com/originals/09/15/c4/0915c44d62245550f9508bc99963b862.png" alt="notify"></image>
                    </div> 
                    <div class="tab-content">
                        <text class="sub-card-heading">Search</text> 
                    </div>

                </div> 
                </div>
                <div :style="{backgroundColor:color1}">
                <div class="head-row"  style="flex-direction:row" @click="showCategoryDialog">
                        <div v-if="img1 == true">
                                <image class="cal-icn" src="https://i.pinimg.com/originals/09/15/c4/0915c44d62245550f9508bc99963b862.png" alt="notify"></image>
                            </div>
                    <div class="tab-content">
                        <text class="sub-card-heading">Category</text>
                    </div>

                </div>
</div>


<div :style="{backgroundColor:color2}">
                <div class="head-row" style="flex-direction:row" @click="showRangeDialog">
                        <div v-if="img2 == true">
                                <image class="cal-icn" src="https://i.pinimg.com/originals/09/15/c4/0915c44d62245550f9508bc99963b862.png" alt="notify"></image>
                            </div>
                    <div class="tab-content">
                        <text class="sub-card-heading">Range</text>
                    </div>
                </div>
</div>

            </div>
            <div class="side-container" style="flex-direction:column;flex:3">
                <div class="card " v-if="showSearch==true">
                    <div class="table-row">
                            <div style="flex-direction:column;flex:1;width: 50%" class="table-row-details">
                                    <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="titleType">{{value}}</text>
                                    <div class="drop-down" v-if="platform == 'Web'"  >
                                        <select>
                                            <option class="dropdown-opt" v-for="calc in titleWeb">{{calc}}</option>
                                        </select>
                                    </div>
                                </div>
                    </div>
                    <div class="table-row" style="flex-direction:row">
                        <input class="input" @change="onFocus" type="text" placeholder="Search By"  style="width:50%" />
                        <image class="cal-icn" style="margin-top: 15px" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png" alt="notify"></image>
                    </div>
                </div>
                <div class="card" v-if="showCategory==true">
                        <div class="table-row">
                                <wxc-checkbox v-if="platform !== 'Web'"  title="Earliest To Latest"
                                :disabled="false"
                                :checked="true"></wxc-checkbox>
                                <div class="table-row" style="flex-direction: column; padding-bottom:10px;"> 
                                <div  v-if="platform == 'Web'" class="chkbox"  style="flex-direction: row;margin-top:15px;">
                                    <text class="chkbox-title">Earliest To Latest</text>
                                   <div class="ckhbox"> <input type="checkbox"></div>
                                </div>
                                 </div>
                            </div>
                            <div class="table-row">
                                    <wxc-checkbox v-if="platform !== 'Web'"  title="Latest To Earliest"
                                    :disabled="false"
                                    :checked="true"></wxc-checkbox>
                                    <div class="table-row" style="flex-direction: column; padding-bottom:10px;"> 
                                    <div  v-if="platform == 'Web'" class="chkbox"  style="flex-direction: row;margin-top:15px;">
                                        <text class="chkbox-title"> Latest To Earliest </text>
                                       <div class="ckhbox"> <input type="checkbox"></div>
                                    </div>
                                     </div>
                                </div>

                </div>
                <div class="card" v-if="showRange==true">
                  <div class="table-row">
                        <text class="chkbox-title">Month To Date</text>
                       <div class="first-col" style="flex-direction:row;margin-top:10px">
                        <div style="flex-direction:column;flex:1;">
                                <text class="chkbox-title">From</text>
                                <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  />
                            </div>
                            <div style="flex-direction:column;flex:1;" class="table-row-col-details">
                                    <text class="chkbox-title">To</text>
                                    <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  />
                                </div>
                 </div>
                            </div>
                            <div class="table-row">
                                    <text class="chkbox-title">Year To Date</text>
                                   <div class="first-col" style="flex-direction:row;margin-top:10px">
                                    <div style="flex-direction:column;flex:1;">
                                            <text class="chkbox-title">From</text>
                                            <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  />
                                        </div>
                                        <div style="flex-direction:column;flex:1;" class="table-row-col-details">
                                                <text class="chkbox-title">To</text>
                                                <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  />
                                            </div>
                             </div>
                                        </div>
                                        <div class="table-row">
                                                <text class="chkbox-title">Custom Date Range</text>
                                               <div class="first-col" style="flex-direction:row;margin-top:10px">
                                                <div style="flex-direction:column;flex:1;">
                                                        <text class="chkbox-title">From</text>
                                                        <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  />
                                                    </div>
                                                    <div style="flex-direction:column;flex:1;" class="table-row-col-details">
                                                            <text class="chkbox-title">To</text>
                                                            <input  type="date" placeholder="Input Date" class="input" max="2070-12-12"  />
                                                        </div>
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
               <div style="justify-content:center;background-color: #000;
               position: absolute;
               bottom: 0;width:750px">
              <div style="align-items: center;    padding: 10px"> <text class="md-btn-label">Show 30 results</text></div>
            </div>
            </div>
</template>

<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const items = ["Cust Name", "Cust ID", "Product Name", "Product Type","App No"];
    import { WxcCheckbox} from 'weex-ui'
    export default {
        created() {
                if (typeof WXEnvironment === 'object') {

                    this.platform = WXEnvironment.platform || unknown
                    this.deviceWidth = WXEnvironment.deviceWidth || unknown

                }
            },
            components:{WxcCheckbox},
            data() {
                   return {
                       platform: invalid,
                       deviceWidth: invalid,
                       search:'',
                       color:'',
                       color1:'',
                       color2:'',
                       img:false,
                       img1:false, 
                       img2:false,
                       showSearch:false,
                       showCategory:false,
                       showRange:false,
                       index: -1,
                       titleWeb : ["Cust Name", "Cust ID", "Product Name", "Product Type","App No"],
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
                       picker.pick(
                           {
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
                   showSearchDialog(){
                    this.color1=''
                    this.color2=''
                    this.img =false;
                    this.showSearch=!this.showSearch;
                       this.showCategory=false;
                       this.showRange=false;
                       this.color='#fff'
                       
                
                   },
                   onFocus(event){
                       console.log(event.value)
                         if(event.value !== ''){
                             console.log("True")
                             this.img = true
                         }
                         else{
                            this.img = false 
                         }


                   },
                   showCategoryDialog(){
                    this.color=''
                    this.color2=''
                       this.showCategory= !this.showCategory
                       this.showSearch=false;
                       this.showRange=false;
                       this.color1='#fff'
                    },
                    showRangeDialog(){
                        this.color=''
                    this.color1=''
                        this.showSearch=false;
                       this.showCategory=false;
                       this.showRange=!this.showRange
                       this.color2='#fff'
                    }
        },


    }
</script>
<style>
    .card {
        /* width:70%; */
       
        /* margin-top: 20px; */
        margin-bottom: 0px;
        background-color: #fff;
      

    }
    .card-border-bottom{
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .table-row {
               padding-left: 20px;
               padding-right: 20px;
               padding-top:10px;
             
             
           }
           .table-row-col-details{
               margin-left:10px;
           }
           select {
               color: #565656;
               font-size: 14px;
               padding:15px;
           }
           .ckhbox{
            margin-left: 15px;
    margin-top: 8px
           }
           .chkbox-title{
       
              font-size: 24px;
             margin-left:10px;
              color: #9d9d9d;
          }
          .backg-color{
              background-color: #fff;
          }
          .btn-color {
        background-color: rgb(80, 80, 80);
    }
    .md-btn-width{
        flex:1;
    }
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 80px;
        /* min-width: 88px; */
        position: relative;
        cursor: pointer;
    }

    .md-btn-label {
        font-size : 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color:#fff;
    }
    .btn-space{
   
        position: absolute; 
        bottom:0px;
        margin-bottom: 0px;

    }
    .head-row {
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

    .tab-content {
        justify-content: center;
        margin-left: 10px;
    }

    .head-row1 {

        padding: 10px;
        justify-content: start;
    }
    .input {
               display: block;
               background-color: #fff;
               font-size: 24px;
               padding: 15px;
               margin-bottom:20px;
               color: #666666;
               border-width: 1px;
               border-top: none;
               border-style: solid;
               border-top-color: #fff;
               border-right-color: #fff;
               border-left-color: #fff;
               border-bottom-color: #c7c7c7;
               placeholder-color:#9d9d9d;
       
       
               
           }
       
         
       
       
           .input:focus {
               border-width: 1px;
               border-bottom-color: #2e4053;
           }

    .sub-card-heading {

        font-size: 25px;
        color: #565656;
        text-align: left;
    }

    .card-heading {
        font-size: 25px;
        color: #3b371e;
        font-weight: bold;
    }

    .prop-card {
        height: 477px;
    }

    .card-head {

      
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: transparent;
        /* background-color: #fff; */
        /* border-radius: 5px; */
        /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);; */
    }

    .cal-icn {
        height: 30px;
        width: 30px;
    }
</style>