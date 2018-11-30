<template>
        <div>
        <!-- <div class="btn btn-margin blue"
           @click.native="openRightPopup">
            <text class="btn-txt">OPen popup</text>
        </div> -->
        <div  style="padding-right: 30px" class="list-fiter">
                <div v-if="platform === 'Web'" @click.native ="openRightPopup()"><image   class="filter-ico-web" src="../../web/assets/filter.png"></image></div>
            </div>
        <wxc-popup width="340"
                     :show="isRightShow"
                     pos="right"
                     ref="wxcPopup"
                     popup-color="#f7f7f7" 
                    > 
    
<scroller>    
      
             <div class="filter-wrapper" style="position:relative;top:50px;">
              
                 <div style="flex-direction:row;justify-content: space-between">
            <div class="box-title"> <text class="heading-filter" style="font-size: 18px;">Select Filter</text></div> 
            <image  @click.native="popupOverlayRightClick()"  class="cross-icn" src="https://www.materialui.co/materialIcons/navigation/close_black_192x192.png"></image>
        </div>
      
        <div class="filter-desktop-card">
              <div class="search-filter-header-desktop" >
            <text class="heading-filter">Sort by</text>
        </div>
                <select class=" dropdown-controll mt-10 mb-20 mouse-pointer" >
                        <option class="dropdown-opt" >Login date - old to new</option>
                        <option class="dropdown-opt" >Login date - new to old</option>
                        <option class="dropdown-opt" >Premium Amount - high to low</option>
                        <option class="dropdown-opt" >Premium Amount - low to high</option>
                </select>
        </div>
          <!--Filter Mobile Page-->
           <div>
      <div class="tab-header">
          
  
             <div class="filter-desktop-card">
                         <div class="search-filter-header-desktop">
    <text  class="heading-filter">Search Type Selection</text>
</div>
            <div class="button-filter-row-desktop" style="flex-direction:row">
                        <div v-for="(btn,id) in buttonData" :key="id" class="mobile-btn-chk-filter-desktop" :style="{backgroundColor:btn.color}" @click.native="tabData(id)" >
                        
                            <text class="mobile-btn-title-filter-desktop" :style="{color:btn.fontColor}">{{btn.Title}}</text>
                        </div>
                        
                </div>
  
      <div v-if="tabinputone== true" class="tab-input-one">
          <div class="table-row-filter-desktop" style="flex-direction:row;position:relative">
                       <div class="pl-20-dektop mouse-pointer" style="flex:1"> <!--<input class="input-new-search-filter-desktop" type="text" placeholder="Search By Name" /> -->
                        <vx-input-box
                                             vx-label="Name"
                                             vx-placeholder="Search By Name"
                                             :vx-model="duties">
                                            </vx-input-box>
                                            </div>
                       <div class="search-img-posn-dektop mouse-pointer"> <image class="cal-icn-filter-dektop mouse-pointer" style="" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png" alt="notify"></image></div>
                    </div>
      </div>
       <div v-if="tabinputtwo== true" class="tab-input-two">
           <div class="table-row-filter-desktop" style="flex-direction:row;position:relative">
                     <div class="pl-20-dektop" style="flex:1"> <!--<input class="input-new-search-filter-desktop" type="text" placeholder="Search By Name" /> -->
                        <vx-input-box
                                             vx-label="Mobile"
                                             vx-placeholder="Search By Mobile"
                                             :vx-model="duties">
                                            </vx-input-box>
                                            </div>
                       <div class="search-img-posn-dektop"> <image class="cal-icn-filter-dektop" style="" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png" alt="notify"></image></div>
                    </div>
      </div>
       <div v-if="tabinputthree== true" class="tab-input-three">
           <div class="table-row-filter-desktop" style="flex-direction:row;position:relative">
                      <div class="pl-20-dektop" style="flex:1"> <!--<input class="input-new-search-filter-desktop" type="text" placeholder="Search By Name" /> -->
                        <vx-input-box
                                             vx-label="Lead ID"
                                             vx-placeholder="Search By Lead ID"
                                             :vx-model="duties">
                                            </vx-input-box>
                                            </div>
                       <div class="search-img-posn-dektop"> <image class="cal-icn-filter-dektop" style="" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png" alt="notify"></image></div>
                    </div>
      </div>
      </div>
          </div>

<div class="filter-desktop-card">
    <div class="search-filter-header-desktop" style="padding-top: 10px">
    <text  class="heading-filter">Search Between</text>
</div>
   <div class="button-filter-row-desktop" style="flex-direction:row">
                        <div v-for="(btnrange,range) in rangeData" :key="range" class="mobile-btn-chk-filter-desktop" :style="{backgroundColor:btnrange.colorRange}" @click.native="tabDataRange(range)" >
                        
                              <text class="mobile-btn-title-filter-desktop" :style="{color:btnrange.fontColorRange}">{{btnrange.titleRange}}</text>
                        </div>
                        
                </div>
                      <div class="table-row-filter-desktop" style="padding-top:0px;" v-if="customDate == true">
                        <div class="first-col-filter" style="flex-direction:row;margin-top:10px">
                            <div style="flex-direction:column;flex:1;">
                                <!-- <text class="chkbox-filter-title">From</text>
                               <div class="input-spacing"> <input type="date" placeholder="Input Date" class="input-new-filter" max="2070-12-12" /></div> -->
                                 <vx-input-box vx-type="date"
                                             vx-label="From"
                                             vx-placeholder=""
                                             :vx-model="duties">
                                            </vx-input-box>
                            </div>
                            <div style="flex-direction:column;flex:1;" class="table-row-filter-desktop-col-details">
                                <!-- <text class="chkbox-filter-title">To</text>
                              <div class="input-spacing">  <input type="date" placeholder="Input Date" class="input-new-filter" max="2070-12-12" /></div> -->
                             <vx-input-box vx-type="date"
                                             vx-label="To"
                                             vx-placeholder=""
                                             :vx-model="duties">
                                            </vx-input-box>
                            </div>
                        </div>
                    </div>
</div>
                    <div class="button-filter-row-desktop" style="align-items: center;" >
                        <div  class="mobile-mainbtn-chk-filter-dektop" >
                    
                            <text class="mobile-mainbtn-title-filter-dektop">Apply</text>
                        </div>
                    </div>
  </div>
            </div>
       </scroller>
        </wxc-popup>
    
    
    
    
        </div>
    </template>
    <style >
        
.robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
.filter-desktop-card{
background-color: #fff;
margin-top: 10px
}
        .list-fiter{
        align-items: flex-end;
    }
.popup-heading{
    padding-top: 20px;
}
.cross-icn{
    height: 25px;
  width: 25px;
}
.box-title{
    padding-bottom: 15px;
    align-items: center;
}
  .mouse-pointer {
        cursor: pointer;
    }
.heading-filter {
        font-size: 25px;
        padding-top: 20px;
        font-weight: bold;
        font-family:robotoregular;

    }
    .form-title-filter {
        font-size: 24px;
        color: #9d9d9d;
        font-family:robotoregular;
    }

    /*Filter Mobile CSS*/
    .search-filter-header-desktop{
    padding: 10px;
}
.search-img-posn-dektop{
    right:30px;
     margin-top: 25px;
}
.input-spacing{
    padding-top: 10px;
}
.button-filter-row-desktop{
    justify-content: center;
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
        margin-top: 10px
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
          .mobile-btn-title-filter-desktop{
        font-size: 21px;  
        /* color: #fff; */
        font-family:robotoregular;
    }
          .mobile-btn-chk-filter-desktop {
            /* background-color: #3b371e; */
            width: 130px;
            height: 50px;
            font-size: 14px;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            margin-right: 10px;
            font-family:robotoregular;
            justify-content: center;
        border-width: 1px;
        border-style: solid;
        border-top-color: rgb(139,139,139);
        border-right-color: rgb(139,139,139);
        border-left-color: rgb(139,139,139);
        border-bottom-color: rgb(139,139,139);
        }
         .mobile-mainbtn-chk-filter-dektop {
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
              .mobile-mainbtn-title-filter-dektop{
        font-size: 21px;  
        color: #fff;
        font-family:robotoregular;
    }
.mb-btn-label{
    /* color:#fff; */
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
    
    .table-row-filter-desktop {
       padding-top:10px;
    }
    
    .table-row-filter-desktop-col-details {
        margin-left: 10px;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 10px;
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
    
    .input-new-filter {
        display: block;
        /* width:400px; */
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
    
    .input-new-filter:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }
       .input-new-search-filter-desktop {
        display: block;
        /* width:400px; */
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
    
    .input-new-search-filter-desktop:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }
    
    .sub-card-filter-heading-desktop {
        font-size: 25px;
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
    
    .cal-icn-filter-dektop {
        height: 20px;
        width: 20px;
       
    }
    
    /*fab button css start */
    
    
    /*==========  Mobile First Method  ==========*/
     
    /* Custom, iPhone Retina */ 
    @media only screen and (min-width : 320px) {
        .heading-filter {
        font-size: 13px;
        padding-top: 20px;
        font-weight: bold;

    }
    .form-title-filter {
        font-size: 14px;
   
        color: #9d9d9d;
        font-family:robotoregular;
    }
    .btn-title{
        font-size: 11px; 
        color: #fff;
        font-family:robotoregular;
    }
    /*Filter Mobile CSS-320*/
     .pl-20-dektop{
            padding-left: 20px;
        }
            .mobile-btn-chk-filter-desktop {
            width: 20%;
            justify-content: center;
            height: 30px;
            font-size: 14px;
            padding:5px;
            margin-right: 5px;
            font-family:robotoregular;
        }
/* .mobile-btn-chk:active{
    background-color:black;
} */
        
              .mobile-mainbtn-chk-filter-dektop {
            width: 25%;
            justify-content: center;
            height: 30px;
            font-size: 14px;
            padding:5px;
            margin-right: 5px;
            margin-bottom: 5px;
            font-family:robotoregular;
        }
                  .mobile-btn-title-filter-desktop{
        font-size: 11px;  
        /* color: #fff; */
        font-family:robotoregular;
    }
     
                 .mobile-mainbtn-title-filter-dektop{
        font-size: 11px;  
        /* color: #fff; */
        font-family:robotoregular;
    }
       
        
        .sort-mb-footer{
    width:100%;
}
        .sub-card-filter-heading-desktop {
        font-size: 15px;
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
      .input-new-filter {
        display: block;
        /* width:400px; */
        background-color: #fff;
        font-size: 13px;
        padding: 10px;
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
       .input-new-search-filter-desktop {
        display: block;
        /* width:400px; */
        background-color: #fff;
        font-size: 14px;
        padding: 10px;
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
    
    .input-new-filter:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }
     .table-row-filter-desktop {
       /* padding:10px;
       padding-left: 20px; */
    }
    }
    
     
    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) {
     
    }
     
    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {
      
    
        /*Filter */
    
        .btn-chk {
            width: 50px;
            height: 20px;
            font-size: 14px;
            padding:5px;
            margin-right: 5px;
            margin-bottom: 5px;
            font-family:robotoregular;
        }
        /* .mb-20 {
            margin-bottom: 10px;
        } */
        .filter-wrapper{
            padding: 5px;
        }
        .header-txt  {
            /*font-weight: bold;*/
            margin-top: 5px;
            font-family:robotoregular;
    
        }
    
    
    
    
    
    }
     
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
    .filter-ico-web {
        height: 30px;
        width: 30px;
        margin-top: 5px;
        position: absolute;
        top: -84px;
        right: 0px;
        cursor: pointer;
    }

        /* .btn-fab {
            padding: 5px;
        }
        .img-ico1 {
            width: 20px;
            height: 20px;
        }
        .img-ico2 {
            width: 15px;
            height: 15px;
        }
        .btn-pos1 {
            bottom:30px;
            right: 20px;
            background-color: #ddd;
        }
        .btn-pos2 {
            bottom:70px;
            right: 22px;
            background-color: red;
        } */
    
    
    }
    
    
    
    /*fab button css end */
    
    
    
    /*Filter css start */
    
        .wrap-filetype {
            flex-direction: row;
            padding-top: 10px;
        }
        .checkbox-cnt {
            margin-right: 8px;
            /* margin-top: 10px */
           
        }
        .btn-chk {
            background-color: #3b371e;
            width: 80px;
            height: 30px;
            font-size: 14px;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-family:robotoregular;
        }
        .mb-20 {
            margin-bottom: 10px;
        } 
         .mt-10{
            margin-top: 10px;
        }
        .dropdown-controll {
            font-size: 14px;
          border-width: 1px;
    border-style: solid;
    border-top-color: #fff;
    border-left-color: #fff;
    border-right-color: #fff;
    border-bottom-color: #d8d8d8;
            font-family:robotoregular;
            margin-left: 10px;
    margin-right: 10px
        }
    
    
        .filter-wrapper{
            /*padding-left: 10px;*/
            /*padding-right: 1p*/
            padding: 10px;
            overflow: scroll;
        }
        .header-txt  {
            /*font-weight: bold;*/
            font-size: 14px;
            font-family:robotoregular;
            margin-top: 15px;
    
        }
  
    /*Filter css end */
    
    
    
    </style>
    <script>
    
        // import util from '../assets/util';
        import { WxcPopup } from 'weex-ui';
          import vxInputBox from '../vx-input-box/vx-input-box.vue'
              const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

        export default {
                           created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },

            components: { WxcPopup,vxInputBox },
            data: () => ({
                   platform:invalid,
              isRightShow: false,
              height: 400,
              tabinputone:true,
          tabinputtwo:false,
          tabinputthree:false,
          customDate:false,
          duties: '',

          buttonData:[
              {
                  Title:'Name',
                  color:'#fff',
                  fontColor:'#000000',
                
              },
                 {
                  Title:'Mobile',
                  color:'#fff',
                  fontColor:'#000000',
              },
                 {
                  Title:'Lead ID',
                  color:'#fff',
                  fontColor:'#000000'
              }
          ],
          rangeData:[
                {
                  titleRange:'MTD',
                  colorRange:'#fff',
                  fontColorRange:'#000000',
                
              },
                 {
                  titleRange:'YTD',
                  colorRange:'#fff',
                  fontColorRange:'#000000',
              },
                 {
                  titleRange:'Custom',
                  colorRange:'#fff',
                  fontColorRange:'#000000'
              } 
          ]
            }),
            methods: {
                   tabData(ind){

               var me = this;
                       console.log(ind)
                       switch (ind) {
    case 0:

        for(let i=0 ; i < this.buttonData.length; i++) {
            if(i == 0) {
               
                // this.buttonData[i].active = true;
                this.buttonData[i].color = '#3b371e';
                this.buttonData[i].fontColor ='#fff'
                this.tabinputone = true
        
            
            }
            else {
                // this.buttonData[i].active = false;
                this.buttonData[i].color = '#fff';
 
                this.buttonData[i].fontColor = '#000000'
         this.tabinputtwo = false
          this.tabinputthree = false
            }
        }
        break;
    case 1:

    for(let i=0 ; i < this.buttonData.length; i++) {
            if(i == 1) {
               
                // this.buttonData[i].active = true;
                
                this.buttonData[i].color = '#3b371e';
         
                this.buttonData[i].fontColor = '#fff'
               this.tabinputtwo = true
            }
            else {
              
                this.buttonData[i].color = '#fff'
  
                this.buttonData[i].fontColor = '#000000'
                this.tabinputone = false
          this.tabinputthree = false
            }
        }


  
        break;
        case 2:
        for(let i=0 ; i < this.buttonData.length; i++) {
            if(i == 2) {
          
                this.buttonData[i].color = '#3b371e';
       
                this.buttonData[i].fontColor = '#fff'
                    this.tabinputthree = true

             
            }
            else {
     
                this.buttonData[i].color = '#fff'
                 this.buttonData[i].fontColor = '#000000'
                    this.tabinputone = false
          this.tabinputtwo = false
            }
        }
     
        break;
            case 3:
        for(let i=0 ; i < this.buttonData.length; i++) {
            if(i == 3) {
          
                this.buttonData[i].color = '#3b371e';
       
                this.buttonData[i].fontColor = '#fff'

             
            }
            else {
     
                this.buttonData[i].color = '#fff'
                 this.buttonData[i].fontColor = '#000000'
            }
        }
     
        break;
     break;
    default:
        // execute default code block
        }
    }, 
    tabDataRange(rng){
                
                       console.log(rng)
                       switch (rng) {
    case 0:

        for(let i=0 ; i < this.rangeData.length; i++) {
            if(i == 0) {
               
                // this.rangeData[i].active = true;
                this.rangeData[i].colorRange = '#3b371e';
                this.rangeData[i].fontColorRange ='#fff'
                this.customDate = false
        
            
            }
            else {
                // this.rangeData[i].active = false;
                this.rangeData[i].colorRange = '#fff';
 
                this.rangeData[i].fontColorRange = '#000000'
                
        
            }
        }
        break;
    case 1:

    for(let i=0 ; i < this.rangeData.length; i++) {
            if(i == 1) {
               
                // this.rangeData[i].active = false;
                this.rangeData[i].colorRange = '#3b371e';
         
                this.rangeData[i].fontColorRange = '#fff'
                this.customDate = false
            
            }
            else {
              
                this.rangeData[i].colorRange = '#fff'
  
                this.rangeData[i].fontColorRange = '#000000'
            }
        }


  
        break;
        case 2:
        for(let i=0 ; i < this.rangeData.length; i++) {
            if(i == 2) {
          
                this.rangeData[i].colorRange = '#3b371e';
       
                this.rangeData[i].fontColorRange = '#fff'
this.customDate = true
             
            }
            else {
     
                this.rangeData[i].colorRange = '#fff'
                 this.rangeData[i].fontColorRange = '#000000'
            }
        }
     
        break;
            case 3:
        for(let i=0 ; i < this.rangeData.length; i++) {
            if(i == 3) {
          
                this.rangeData[i].colorRange = '#3b371e';
       
                this.rangeData[i].fontColorRange = '#fff'

             
            }
            else {
     
                this.rangeData[i].colorRange = '#fff'
                 this.rangeData[i].fontColorRange = '#000000'
            }
        }
     
        break;
     break;
    default:
        // execute default code block
        } 
    },
                 openRightPopup () {
                 this.isRightShow = true;
                },
               popupOverlayRightClick () {
                this.isRightShow = false;
              },
            }
        };
    </script>