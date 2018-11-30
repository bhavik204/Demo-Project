<template>
        <div style="background-color: #e0e2e5">
                <div class="box shadow" style="background-color: white; padding-top:5px;">
                        <!-- <div class="row" style="justify-content:space-between;">
                           <div class="row">
                               <div><text class="text-bold" style="color:#2196f3; "><</text></div>
                               <div><text class="text-bold" style="color:#4E342E; ">2016</text></div>
                               <div><text class="text-med" style="color:#BDBDBD; ">2015</text></div> 
                               <div><text class="text-bold" style="color:#BDBDBD; ">2014</text></div>
                               <div><text class="text-bold" style="color:#2196f3;">></text></div>
                           </div>
                           <div class="row">
                                <div><text class="text-bold" style="color:#2196f3; "><</text></div>
                                <div><text class="text-bold" style="color:#4E342E; ">Jan</text></div>
                                <div><text class="text-bold" style="color:#BDBDBD; ">Feb</text></div> 
                                <div><text class="text-bold" style="color:#BDBDBD; ">Mar</text></div>
                                <div><text class="text-bold" style="color:#2196f3;">></text></div>
                           </div>
                        </div> -->
                    </div>
    <div class="col-tab ">
        <div class="box ">  

                   <div class="row-tab" style="justify-content:space-between" >
                       
                                <div class="row-tab" >
                                    <div><text class="text-bold" style="color:#2196f3; "><</text></div>
                                    <div><text class="text-bold" style="color:#4E342E; ">2016</text></div>
                                    <div><text class="text-bold" style="color:#BDBDBD; ">2015</text></div> 
                                    <div><text class="text-bold" style="color:#BDBDBD; ">2014</text></div>
                                    <div><text class="text-bold" style="color:#2196f3;">></text></div>
                                </div>
                                
                                
                                <div class="row-tab" >
                                     <div><text class="text-bold" style="color:#2196f3; "><</text></div>
                                     <div><text class="text-bold" style="color:#4E342E; ">Jan</text></div>
                                     <div><text class="text-bold" style="color:#BDBDBD; ">Feb</text></div> 
                                     <div><text class="text-bold" style="color:#BDBDBD; ">Mar</text></div>
                                     <div><text class="text-bold" style="color:#2196f3;">></text></div>
                                </div>
                            </div>
                                    <div style="flex-direction: column;flex:1" class="table-row-details ">
                                            <text style="flex:1;margin-left:2px;"  class="option text-bold">Views</text>
                                            <text v-if="platform !== 'Web'" class="text-sml mouse-pointer" style="flex:1" @click="premiumMode">{{value6}}</text>
                                            <div class="drop-down " v-if="platform == 'Web'" style="flex:1; max-width: 20px;margin-left:2px;">
                                              <select style="flex:1">
                                                <option class="dropdown-opt text-sml mouse-pointer shadow"  v-for="calc in premiumModeListWeb ">{{calc}}</option>
                                              </select>
                                            </div>
                                    </div>
                                
        <div class="row-header shadow" >
            <div class="row-header" style="flex-flow:row wrap;">
                <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
                    <div class="card shadow" style="flex:1;">
                        <div class="row-header" style="flex-flow:row wrap;">
                            <text class="text-med1"  >{{num.listContent}}</text>
                        </div>
                        <text class="text-med" >{{num.listContent1}}</text>
                        <text class="text-med" >{{num.listImage}}</text>
                        <text class="text-sml" >Mumbai</text>
                        <image class="icon" src="http://salesdrive.iorta.in/img/downloadiconB.png.png"></image>
                    </div>
                </div>
            </div>
           
        </div>
        <div class="row-header" >
                <div class="row-header" >
                    <div v-for="(num,i) in numArray2" :key="i" class="nx-flex-bt-marg">
                        <div class="card shadow" >
                            <div class="row-header" >
                                <text class="text-med1"  >{{num.listContent}}</text>
                            </div>
                            <text class="text-med" >{{num.listContent1}}</text>
                            <text class="text-med" >{{num.listImage}}</text>
                            <text class="text-sml" >Mumbai</text>
                            <image class="icon" src="http://salesdrive.iorta.in/img/downloadiconB.png.png"></image>
                        </div>
                </div>
            </div>
               
        </div>
        <div class="row-header" >
                <div class="row-header" >
                    <div v-for="(num,i) in numArray3" :key="i" class="nx-flex-bt-marg">
                        <div class="card shadow" >
                            <div class="row-header" >
                                <text class="text-med1"  >{{num.listContent}}</text>
                            </div>
                            <text class="text-med"  >{{num.listContent1}}</text>
                            <text class="text-med"  >{{num.listImage}}</text>
                            <text class="text-sml"  >Mumbai</text>
                            <image class="icon" src="http://salesdrive.iorta.in/img/downloadiconB.png.png"></image>
                        </div>
                    </div>
                </div>
                
            </div>
        <div class="row-header" >
                <div class="row-header" >
                    <div v-for="(num,i) in numArray4" :key="i" class="nx-flex-bt-marg">
                        <div class="card shadow" >
                            <div class="row-header" >
                                <text class="text-med1"  >{{num.listContent}}</text>
                            </div>
                            <text class="text-med" >{{num.listContent1}}</text>
                            <text class="text-med" >{{num.listImage}}</text>
                            <text class="text-sml" >Mumbai</text>
                            <image class="icon" src="http://salesdrive.iorta.in/img/downloadiconB.png.png"></image>
                        </div>
                    </div>
                </div>
                
        </div>
            
        </div>
        </div>
        </div>
        
        
        </template>
        
        <script>
        const navigator = weex.requireModule('navigator');
        const premiumModeList = ["Option 1", "Option 2", "Option 3", "Option 4"];
        export default {
            created() {
            if (typeof WXEnvironment === 'object') {
      
              this.platform = WXEnvironment.platform || unknown
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
            index6: -1,
            numArray: [{
                                    listTitle: '4 April, 2015 | 02.26PM | In News',
                                    listContent: 'Jombo Life Insurance raises stake in ABC  Life to 49 %',
                                    listContent1: 'Japans Jombo Life Insurance today by another 23 per cent, taking its total holding to 49 per cent...',
                                    button:'Benefit Illustration'
                                },
                                {
                                    listTitle: '4 April, 2015 | 02.26PM | In News',
                                    listContent: 'ABC Life and RAK Insurance launch “Arise” – a family protection  NRIs',
                                    button:'Benefit Illustration'
                                }],
            premiumModeListWeb: ["Option 1", "Option 2", "Option 3", "Option 4"],
            numArray2:[
                                {
                                    listTitle: '4 April, 2015 | 02.26PM | In News',
                                    listContent: 'Protect First, ULIP thereafter',
                                    listContent1: 'Japans Jombo Life Insurance today by another 23 per cent, taking its total holding to 49 per cent...',
                                    button:'Benefit Illustration'
                                },
                                {
                                    listTitle: '4 April, 2015 | 02.26PM | In News',
                                    listContent1: 'Life Insurance industry set to grow 12-15% in FY17: report',
                                    // listImage:'http://salesdrive.iorta.in/img/newimg2.jpg',
                                    button:'Benefit Illustration'
                                }],
            numArray3:[
                                {
                                    listTitle:'4 April, 2015 | 02.26PM | In News',
                                    listContent: 'ABC Life and RAK Insurance launch “Arise” – a family protection scheme for NRIs',
                                    button:'Benefit Illustration'
                                },
                                {
                                    listTitle: '4 April, 2015 | 02.26PM | In News',
                                    listContent:'Protect First, ULIP thereafter',
                                    button:'Benefit Illustration'
                                }],
            numArray4:[
                                {
                                    listTitle: '4 April, 2015 | 02.26PM | In News',
                                    listContent: 'Jombo Life Insurance raises stake in ABC Life to 49 %',
                                    button:'Benefit Illustration'
                                },
                                {
                                    listTitle: '4 April, 2015 | 02.26PM | In News',
                                    listContent: 'ABC Life and RAK Insurance launch “Arise” – a family protection scheme for NRIs',
                                    button:'Benefit Illustration'
                                }
                            ]
                  }
        },
        computed:{
            value6() {
              if (this.index6 == -1) {
                return "Select ";
              } else if (this.index6 < premiumModeList.length) {
                return premiumModeList[this.index6];
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
          premiumMode() {
              picker.pick(
                {
                  index: this.index6,
                  items: premiumModeList
                },
                event => {
                  if (event.result === "success") {
                    this.value6 = items[event.data];
                    this.index6 = event.data;
                  }
                }
              );
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
        .col {
        display: flex;
        flex-direction: column;
        background-color: white;
        flex-wrap:wrap;
        }
        .col-tab {
        display: flex;
        flex-direction: column;
        /* background-color: white; */
        flex-wrap:wrap;
        margin-left: 10px;
        margin-right: 10px;
        }
        .col-header{
        display: flex;
        flex-direction: column;
        background-color: white;
        flex-wrap: wrap;
        justify-content:space-between;
        padding: 15px 7px 10px 6px; 
        }
        .row-tab {
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        margin-bottom: 20px;
        margin-top: 10px;
        /* background-color: white; */
        }
        .row-text {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
        }
        .row-image {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
        }
        .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        background-color: white;
        }
        .row-header{
        display: flex;
        flex-direction: row;
        background-color: white;
        flex-wrap: wrap;
        justify-content:space-between;
        /* padding: 15px 7px 10px 6px;  */
        }
        .row-flex{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: white;
        }
        .image {
        width: 500px;
        height: 300px;
        background-color: #666666;
        margin-left: 7px;
        margin-right: 12px; 
        }
        .card {
        background-color: white;
        margin-top: 10px;
        margin-bottom: 10px;   
        flex-wrap: wrap; 
        /* max-width: 1230px; */
        margin-left: 10px;
        margin-right: 10px;
        }
        .card-btn {
        background-color: #0f0f0f;
        margin-top: 3px;
        width: 100px;
        height: 25px;
        justify-content: center;
        margin-left: 15px;
        }
        .card-btn-text {
        color: #FFFFFF;
        font-size: 12px;
        text-align: center;
        font-family:robotoregular;
        }
        
        .card-btn:active {
        background-color: #353535;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .text-bold{
        font-weight: bold;
        font-size: 24px;
        margin-left: 10px;
        font-family:robotoregular;
        }
        .text-med{
        color: #6e6d6d;
        font-size: 15px;
        margin-right: 15px;
        margin-left: 15px;
        font-family:robotoregular;
        }
        .text-med1{
        color: #6e6d6d;
        font-size: 15px;
        font-weight: bold;
        margin-right: 15px;
        margin-left: 15px;
        font-family:robotoregular;
        }
        .text-sml{
        font-size: 12px;
        padding-bottom: 10px;
        padding-top: 6px;
        margin-left: 15px;
        color: #6e6d6d;
        font-family:robotoregular;
        }
        
        .card {
        background-color: #ffffff;
        border-radius: 5px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
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
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 5px;
        padding-right: 5px;
        }
        .scroller {
          display: none;
        }
        .shadow {
          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .label-pro{
            /* font-size:13px; */
            padding: 4px 10px 4px 10px;
            background-color: #ce93d8;
            border-radius: 3px;
            font-family:robotoregular;
        }
        .label-news{
            /* font-size:13px; */
            padding: 4px 10px 4px 10px;
            background-color: #b388ff;
            border-color: #b388ff;
            border-radius: 3px;
        }
        .label-O3{
            /* font-size:13px; */
            padding: 4px 10px 4px 10px;
            background-color: #f8bbd0;
            border-radius: 3px;
        }
        .label-O4{
            /* font-size:13px; */
            padding: 4px 10px 4px 10px;
            background-color: #ce93d8;
            border-radius: 3px;
        }
        .label-O5{
            /* font-size:13px; */
            padding: 4px 10px 4px 10px;
            background-color: #0277bd;
            border-radius: 3px;
        }
        .fontcolor{
            color: white;
            font-size: 13px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .img{
            width:13px;
            height: 13px;;
        }
        .drop-down {
          border-width: 1px;
          border-style: solid;
          border-top-color: #fff;
          border-left-color: #fff;
          border-right-color: #fff;
          border-bottom-color: #d8d8d8;
      
        }
        .option{
            flex:1;
            margin-left:2px;
            font-size: 17px;
            font-weight: bold;
            color: #4E342E;
            font-family:robotoregular;
        }
        


        /* chghfgdgfg */
        @media (min-width: 992px) {
        .card {
          background-color: #ffffff;
          padding-top: 10px;
          padding-right: 10px;
          padding-left: 10px;
          padding-bottom: 10px;
          border-radius: 2px;
        }
        .scroller {
        display: none;
        }
        .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        
        }
        
        @media (min-width: 768px) {
        .scroller {
          display: none;
        }
        /* .image {
        width: 200px;
        height: 100px;
        background-color: #666666;
        margin-left: 7px;
        margin-right: 12px; 
        } */
        
        .card {
          background-color: #ffffff;
          padding-top: 10px;
          padding-right: 10px;
          padding-left: 10px;
          padding-bottom: 10px;
          border-radius: 2px;
        }
        .shadow {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        
        }
        
        @media (min-width: 480px) {
        .card {
          background-color: #ffffff;
          padding-top: 10px;
          padding-right: 10px;
          padding-left: 10px;
          padding-bottom: 10px;
          border-radius: 2px;
        }
        .shadow {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .scroller {
          display: none;
        }
        .text {
          font-size: 14px;
          font-family:robotoregular;
        }
        
        }
        
        
        
        @media (min-width: 320px) {
        .scroller {
          overflow: auto;
        }
        
        .card {
        background-color: white;
        margin-top: 10px;
        /* max-width: 1230px; */
        margin-left: 10px;
        margin-right: 10px;
        /* justify-content: center; */
        }
        .shadow {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        
        }
        
        
        </style>