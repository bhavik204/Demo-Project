<template>
        <!-- Contests-New Tab -->
<div style="background-color: #f7f7f7;">
        
        <contests-tab></contests-tab>
<scroller class="scroller">
    <!-- <div class="box" style="background-color: white; padding: 15px 0px 15px 0px;">
                    <div class="tab-flex-row3 flex-nowraping">
                        <div class="box tab-box-padding1" @click="jump('/newone')">
                            <div class="outer-flex-col justi" style="align-items:center;">
                                <image class="img"   src="http://salesdrive.iorta.in/img/product-icons/contest.jpg"></image>
                                <div><text class="tab-text-font-size"  style=" padding-top: 5px;">Contests</text></div>
                            </div>
                        </div>
                        <div class="box tab-box-padding" @click="jump('/allclubs')">
                            <div class="outer-flex-col justi" style="align-items:center;">
                                <image class="img"   src="http://salesdrive.iorta.in/img/product-icons/club-gray.jpg"></image>
                                <div><text class="tab-text-font-size"   style=" padding-top: 5px;color:#949494;" >Clubs</text></div>
                            </div>
                        </div>
    
    
                    </div>
                </div> -->
      <!-- <div class="row1 shadow">
        <text class="topheader "@click="jump('/newone')">New</text>
        <text class="topheader " @click="jump('/active')" >Active</text>
        <text class="topheader select selectbor" >Completed</text>
        <text class="topheader" @click="jump('/overall')">My Overall Ranking</text>
      </div>  -->
    
     
    <div class="col" style="background-color: #f7f7f7;">
    <!-- <scroller class="scroller-tab" scroll-direction="horizontal"> -->
    <div class="box " >
    <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">

    <div class="card">
      <div class="row " style="justify-content: space-between; background-color:white;padding-bottom:5px; padding-top:1px;padding-right:10px;">
          <text class="text1" style="border-bottom:3px solid;display: inline-table;">{{num.contnm}}</text>
      </div>

        
              <div class="row-simple add-border" style="justify-content: space-between; padding-top:5px;padding-bottom: 5px;" >
                        <div> <text class="text2" >{{num.listdesc1}}</text></div>
                        <!-- <div class="card-btn"><text class="card-btn-text">View Results</text></div> -->
                        <div class="box  x-small-btn" >
                            <div class="md-custom-btn btn-color">
                                <text class="md-btn-label text-color-white">View Results</text>
                            </div>
                        </div>
                        <div> <text class="text2">{{num.listdesc2}}</text></div>
              </div>
              <div class="row-simple add-border"  style="justify-content: space-between;"> 
                      <div> <text class="text2">{{num.listdesc4}}</text></div>
                      <!-- <div class="card-btn"> -->
                          <!-- <text class="card-btn-text">View Results</text> -->
                          <div class="box  x-small-btn" >
                                <div class="md-custom-btn btn-color">
                                    <text class="md-btn-label text-color-white">View Results</text>
                                </div>
                            </div>
                          
                         
                        <!-- </div> -->
                      <div> <text class="text2">{{num.listdesc5}}</text></div>
              </div>
    
             
    
              
    </div>
    </div>
    
    
    </div> 
    <!-- </scroller> -->
    </div>
    </scroller>
    </div>
    
                                                        
    
    </template>
    
    <script>
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'

    import contestsTab from './ContestTab.vue'
    export default {
        created() {
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
    components:{ contestsTab},
    data: function() {
      return {
        headerName:'Contests',
        platform: invalid,
        deviceWidth: invalid,
        show: false,
        tpaList: [{
                    titleName: 'Family Health Plan Limited',
                    detail: 'Family Health Plan Limited Srinilaya - Cyber spazio suite 101,102,109 & 110, Ground Floor, Road No. 2, Banjara Hills, Hyderabad, Telangana - 500034',
                    contact: '1800 425 4033'
                }, {
                    titleName: 'Family Health Plan Limited',
                    detail: 'Family Health Plan Limited Srinilaya - Cyber spazio suite 101,102,109 & 110, Ground Floor, Road No. 2, Banjara Hills, Hyderabad, Telangana - 500034',
                    contact: '1800 425 4033'
                }, {
                    titleName: 'Family Health Plan Limited',
                    detail: 'Family Health Plan Limited Srinilaya - Cyber spazio suite 101,102,109 & 110, Ground Floor, Road No. 2, Banjara Hills, Hyderabad, Telangana - 500034',
                    contact: '1800 425 4033'
                }         
                ],
          numArray: [{
                        contnm: 'All Completed Contests',
                        listdesc1 : 'Contest Number 2 ( 20th May to 20th June )',
                        listdesc2 : 'Results announced: 25/06/2016',
                        listdesc4 : 'Contest Number 3 ( 20th May to 20th June )',
                        listdesc5 : 'Results announced: 25/06/2016',
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
      openOverlayWindow () {
            this.show = true;
        },
        closeOverlayWindow () {
            this.show = false;
        },
      gotoJump () {
          navigator.push({
          url: createURL('/pcard'),
          animated: 'true'
          })
      }
      
    }
    
    }
    
    
</script>
    
<style scoped>
    
    .col 
    {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
    }
    .row {
        display: flex;
        flex-direction: row;
        background-color: #e0e2e5;
    }

    .card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
        justify-content:center;
    }
    .scroller-tab {
        height: 1500px;
        flex-direction: row;
    }

    /* Button CSS */
    .card-btn {
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 50px;
        min-width: 90px;
        position: relative;
        cursor: pointer;
        padding-left:10px;
        padding-right:10px;
        margin-right:10px;
        margin-bottom:3px;
        background-color: rgb(33, 34, 35);
    }
    .card-btn-text {
        font-size : 17px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color:whitesmoke;
    }
    .card-btn:active {
        background-color:rgb(5, 4, 4);
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
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
        color:#fff;
    }
    
    .md-custom-btn:active {
        background-color:#3b371e;
    }
    .md-btn-width {
        width: 450px;
    }
    
    .x-small-btn {
          width: 230px;
    }
    /* .img-share
    {
        width:55px;
        height:40px ;
    } */
            /* @@ */
        /* Text CSS */
        .text1{
        font-weight: bold;
        font-size: 25px;
       
    }
    .text2{
        display: flex;
        color: #6e6d6d;
        font-size: 24px;
        margin-top: 30px;
        padding: 3px 7px 2px 9px;
    }
    .text3{
        color: #6e6d6d;
        font-size: 25px;
        font-weight: bold;
       ;
        padding-bottom:4px;
    }
    .topheader
    {
        font-size: 25px;
        padding-left: 15px;
        padding-top: 20px;
        font-weight: bold;
        color: #949494;
    }
        /* @@ */
    /* header box CSS */
    .tab-box-padding {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px; 
        margin-right: 40px;
    }
    .tab-box-padding1 {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px; 
        margin-right: 40px;
        margin-left: 60px;
    }
    .img{
        width: 100px;
        height: 100px;
    }
    .tab-text-font-size {
        font-size: 30px;
    }
    .tab-flex-row3 {
        flex-direction: row;
        flex-wrap: wrap;

    }
    /* @@ */

    .row-simple {
        display: flex;
        flex-direction: row;
        background-color:white; 
        padding-bottom:10px; 
        padding-top: 3px;
    }
    .col-simple {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
    }

    .list-item-padding {
        padding-top:10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px; 
    }
    .mouse-pointer {
        cursor: pointer;
    }
    .filter-label-text {
        color: #9d9d9d;
        font-size: 12px;
    }
    
    .headspace
    {
        padding-top:10px;
        padding-bottom:10px;
        padding-left: 5px;
        font-size: 15px;
        font-weight: 600;
    }
    .row1 {
        display: flex;
        flex-direction: row;
        background-color: rgb(224, 226, 229);

    }
   
    .select
    {
        border-bottom:3px solid;
        display: inline-table;
        background-color:white;
        width:190px;
        border-width: 1px;
        border-color: #f4f5f7;
        margin-left:8px;
        padding-top:19px;
        padding-bottom:10px;
        color: black;

    }
    .selectbor{
        border-bottom:2px solid;
        display: inline-table;
    }
    .row-type
    {
        padding-right:27px;
        background-color:white;
        padding-bottom:4px; padding-top:4px;   
    }
    .flex-row-to-column-360 {
        flex-direction: column;
    }
    .tab-flex-row {
        flex-direction: row;
    }
    .tab-flex-row1 {
        flex-direction: row;
    }
    .tab-font-size {
        font-size: 25px;
    }
    .tab-box-padding {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px; 
        margin-right: 40px;
    }
    .flex-row {
        flex-direction: column;
    }
    .nx-flex-column {
        flex-direction: column;
    }

    .nx-flex-bt-marg {
        margin-bottom: 20px;
    }
    .flex-direction-change {
    flex-direction: row;
    }
    .flex-column {
        flex-direction: column;
    }
    .flex-row {
        flex-direction: row;
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
        border-left-color:#6e6d6d;
        border-bottom-color: #6e6d6d;
    }
    .box {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .C {
    flex: 1
    }
    


  /* iphone */
  @media (min-width: 320px) {
        .scroller {
            overflow: auto;
        }
        .flex-row {
            flex-direction: column;
        }
        .item-alignment {
            align-items: left;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: nowrap;
        }
        .flex-row-content-hidden {
            overflow: scroll;
        }

        .card {
            background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
            flex: 1
        }
        .box {
            padding: 5px;
        }
        .text1{
            font-weight: bold;
            font-size: 14px;
        }
        .text2{
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
        }
        .text3{
            color: #6e6d6d;
            font-size: 13px;
            font-weight: bold;
        }
        
        .md-custom-btn {
            border-radius: 2px;
            height: 30px;
            min-width: 30px;
            cursor: pointer;
        }

        .md-btn-label {
            font-size : 11px;
        }

    .md-custom-btn:active {
       opacity:0.8;
    }

        .md-btn-width {
            width: 10%;
        }
        .x-small-btn {
            width: 20%;
            margin-top: 19px;
        }
        /* .row-simple
        {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            height: auto;
            justify-content: start;
            background-color:white; 
            padding-bottom:20px; 
        } */
    }

    /* Small Device / Tab */
    @media (min-width: 768px) {
        .flex-row {
            flex-direction: row;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .flex-direction-change {
            flex-direction: row;
        }
        .md-btn-width {
            width: 50%;
        }
        .card {
            background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
        }
        .text1{
            font-weight: bold;
            font-size: 14px;
        }
        .text2{
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
        }
        .text3{
            color: #6e6d6d;
            font-size: 13px;
            font-weight: bold;
        }
    }

    /* Medium Device Laptops and Desktops */
    @media (min-width: 992px) {
        .flex-row {
            flex-direction: row;
        }
        .nx-flex-column {
            flex-direction: row;
        }
        .outer-flex-col {
            flex-direction: column;
        }
        .tab-flex-row {
            flex-direction: row;
        }
        .tab-flex-row1 {
            flex-direction: row;
            flex-wrap: nowrap;
        }
        .tab-font-size {
            font-size: 25px;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-row {
            flex-direction: column;
        }

        .card {
            background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
        }

        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        .sub-row
        {
            flex-direction: row;

        }
        .row-simple {
            display: flex;
            flex-direction: row;
            background-color:white; 
            padding-bottom:6px; 
            padding-top: 3px;
        }
        .text1{
            font-weight: bold;
            font-size: 14px;
        }
        .text2{
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
        }
        .text3{
            color: #6e6d6d;
            font-size: 13px;
            font-weight: bold;
        }
        .topheader
        {
            font-size: 13.5px;
            padding-left: 15px;
            padding-top: 20px;
            font-weight: bold;
            color: #949494;
        }
        .select
        {
            border-bottom:3px solid;
            display: inline-table;
            background-color:white;
            width:100px;
            border-width: 1px;
            border-color: #f4f5f7;
            margin-left:8px;
            padding-top:19px;
            padding-bottom:10px;
            color: black;

        }
        .img{
            width: 50px;
            height: 50px;
        }
       /* .img-share 
        {
            width:35px;
            height:30px ;
        } */
        .selectbor{
            border-bottom:2px solid;
            display: inline-table;
        }
        .card-btn {
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 25px;
            min-width: 90px;
            position: relative;
            cursor: pointer;
            padding-left:10px;
            padding-right:10px;
            margin-right:10px;
            margin-bottom:3px;
            background-color: rgb(33, 34, 35);
        }
        .card-btn-text {
            font-size : 12px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            color:whitesmoke;
        }
        .card-btn:active {
            background-color:rgb(5, 4, 4);
        }

        /* Overlay CSS */
        .overlay-wraper {
            position: fixed;
            /* display: none; */
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 10;
            cursor: pointer;
        }

        .overlay-container {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 290px;
            width: 400px;
            border-radius: 3px;
            background-color:white;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            box-shadow: 0 5px 45px rgba(0, 0, 0, .5);
        }

        .overlay-body {
            height:190px;
            /* background: red; */
            overflow: auto;
        }

        .footer-action-bar {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: rgb(236, 236, 236);
            padding: 10px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
        }

        .list-container {
            /* background-color: #fff; */
            padding: 10px;
            border-width: 1px;
            border-style: solid;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
            border-bottom-color: rgb(230, 230, 230);
        }
        .botm-margin {
            margin-bottom: 5px;
        }
        .icon-left-margin {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            margin-left: 10px;
        }
        
        .icon-active:active{
            background-color: #dfdfdf;   
        }

        .icon-position {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
        }
        /* @@ */
        .md-btn-width {
            width: 50px;
        }
    }

  



    </style>