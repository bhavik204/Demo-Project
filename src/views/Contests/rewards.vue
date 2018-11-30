<template>
        <!-- Contests-New Tab -->
<div style="background-color: #f7f7f7;">

    
     
    <div class="col" style="background-color: #f7f7f7;">
    
    <div class="box shadow" >


<scroller class="rewards-srce" scroll-direction="horizontal">
    <div class="rewards-center">
    <div class="card-rewards-size shadow">
            <div class="table-row mobile-row" style="flex-direction:column;flex: 1">
                    <div class="thead-row hide-small-dev" style="flex-direction:row; flex-wrap: nowrap;background-color:#ebebeb">
                        <div style="flex:1" class="rewards-pad" >  <text class="tbl-rewards-heading">Rank</text></div>
                        <div style="flex:1" class="rewards-pad-top">  <text class="tbl-rewards-heading">Name</text></div>
                        <div style="flex:1" class="rewards-pad-top"> <text class="tbl-rewards-heading">Score</text></div>
                        <div style="flex:1" class="rewards-pad-top"> <text class="tbl-rewards-heading">Stats</text></div>
                        <div style="flex:1" class="rewards-pad-top"> <text class="tbl-rewards-heading">Information</text></div>
                       
                      </div>                   
          
                    <div class="tbody-row" v-for="tbl in table" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto">
                        <div  style="flex:1;justify-content: center" class="rewards-pad" >  <text class="form-rewards-title">{{tbl.position}}</text></div>
                        <div style="flex:1;justify-content: center">  <text class="form-rewards-title">{{tbl.name}}</text></div>
                        <div style="flex:1;justify-content: center"> <text class="form-rewards-title">{{tbl.rank}}</text></div>
                        <div style="flex:1;justify-content: center;flex-direction:column"> <div style="margin-top:10px"><wxc-progress  :value="tbl.value"  :bar-height=16  :bar-width=90></wxc-progress> </div>
                          <div style="margin-top:10px">  <wxc-progress  :value="tbl.value1"   :bar-height=16  :bar-width=90></wxc-progress> </div>
                        </div>
                        <div style="flex:1;justify-content: center"> <text class="form-rewards-title">Logins:{{tbl.logins}}</text>
                            <text class="form-rewards-title">Issuance:{{tbl.issuance}}</text>
                        </div>
        
                      </div>
               
                    </div>
  

         
          <!--<div class="card-rewards-size-btn"><text class="card-rewards-size-btn-text">&#x27a4;Share with an Advisor</text></div>-->
      </div>
      </div>
    </scroller>

    <div class="tabs" style="flex-direction:row;justify-content: space-around">
        <text class="heading mouse-pointer" @click.native="prizeData()">Prizes</text>
        <text class="heading mouse-pointer" @click.native="extraData()">Extras</text>
        <text class="heading mouse-pointer" @click.native="videoData()">Videos</text>
    </div>
<div v-if="prize == true" class="cardwards" style="flex:3;">
    <div class="rewards-one card-rew  margin-rewards shadow" style="flex:1">
        <div class="reward-header">
            <text class="heading">First Runner Up</text>
        </div>
        <div class="reward-image">
            <div><image class="reward-icon" src="http://salesdrive.iorta.in/img/services/washing-machine.jpg"></image></div>
        </div>
        <div class="reward-footer">
            <text class="form-rewards-title">The winner get IFB Washing Machine worth  ₹ 25,699/-</text>
        </div>
    </div>
    <div class="rewards-two card-rew margin-rewards shadow" style="flex:1;">
        <div class="reward-header">
            <text class="heading">First Runner Up</text>
        </div>
        <div class="reward-image">
            <div><image class="reward-icon" src="http://salesdrive.iorta.in/img/services/refrigrator.jpg"></image></div>
        </div>
        <div class="reward-footer">
                <text class="form-rewards-title">The winner get IFB Refrigerator worth ₹ 20,699/-</text>
        </div>
    </div>
    <div class="rewards-three card-rew margin-rewards shadow" style="flex:1;">
        <div class="reward-header">
            <text class="heading">Second Runner Up</text>
        </div>
        <div class="reward-image">
            <div><image class="reward-icon" src="http://salesdrive.iorta.in/img/services/oven.jpg"></image></div>
        </div>
        <div class="reward-footer">
            <text class="form-rewards-title">The winner get IFB Microwave worth ₹ 5,000/-</text>
        </div>
    </div>
</div>
      <div class="card-rew shadow" v-if="extra == true">
         <div class="rewards-row "><text class="heading">Extras</text></div> 
         <div class="rewards-row"> <text class="form-rewards-title">&#8226; A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions”</text></div>
         <div class="rewards-row"><text class="form-rewards-title">&#8226; And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region</text></div> 
         <div class="rewards-row"> <text class="form-rewards-title">&#8226; Till you unlock your secret Rival, it’s playing blind!!!</text></div> 
      </div>

      <div class="card-rew shadow" v-if="video == true">
            <div class="rewards-row"><text class="heading">Proud Moments Captured</text></div> 
            <div class="story-row-col">
                    <image class="clips-story"  src="http://salesdrive.iorta.in/img/user/user-testimonials.png"></image>   
                     <div class="story-flex-contain story-top-margin ">
                         <text class="heading">Amit Kumar, Winner of Digital East, Q1 (2016-17)</text>
                         <text class=" form-rewards-title ">On an everyday basis, Bluebeam helps create an environment where anything is possible in the creation and modification of PDFs. With the new release of Revu 11, users have even more functionality to work with such as the Format Painter. The capability to copy the formatted appearance from one annotation to another has spedup... Built documentation tremendously. Also, with the creation of Sets and the ability to split documents into multiple sections, Bluebeam has now evolved the process of forming maintenance manuals into a well-oiled machine On an everyday basis, Bluebeam helps create an environment where anything is possible in the creation and modification of PDFs. With the new release of Revu 11, users have even more functionality to work with such as the Format Painter. The capability to copy the formatted appearance from one annotation to another has spedup... Built documentation tremendously. Also, with the creation of Sets and the ability to split documents into multiple sections, Bluebeam has now evolved the process of forming maintenance manuals into a well-oiled machine.</text>
                     </div>
                 </div>
                 <div style="padding-top:5px">
                 <text class="story-color">- Robert Howard, Construction Office Engineer</text>
                 </div>
      
         </div>
 
    </div>
    
    
    </div> 
    
    </div>
    <!-- </scroller> -->
    
                                                        
    
    </template>

<script>
    const navigator = weex.requireModule('navigator');
 import { WxcProgress } from 'weex-ui'
    import contestsTab from './ContestTab.vue'
    const invalid = '- invalid -'
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
        components: {
            contestsTab,WxcProgress 
        },
        data: function() {
            return {
                headerName: 'Contests',
                platform: invalid,
                prize:true,
                extra:false,
                video:false,
                deviceWidth: invalid,
                rewards:true,
                rewards1:false,
                // value: 80,
      uploading: false,
      progressVisible: false,
      timer: null,
      table:[
          {
          position:'1st',
        name:'Shashank Milttal',
        rank:1827,
        logins:1600,
        issuance:1534,
        value:30,
        value1:50

      },
    ],
                numArray: [{
                        contnm: 'Contest No. 2 ( 20th May - 20th June )',
                        listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
                        listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
                        listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
                        value:"80",
                        row:false,
                    }, {
                        contnm: 'Contest 2 (1st to 30th June)',
                        listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
                        listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
                        listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
                        value:"30",
                        row1:false,
                        
                    }, {
                        contnm: 'Contest 2 (10th to 15th Aug)',
                        listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
                        listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
                        listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
                        value:"50",
                        row:false,
                    }, {
                        contnm: 'Contest 3 (16th to 18th Nov)',
                        listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
                        listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
                        listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
                        value:"40",
                        row:false,
                    },

                ]


            }
        },

        methods: {
            prizeData(){
this.prize = true
this.video = false;
this.extra = false;
            },
            extraData(){
                this.prize=false;
                this.extra = true;
                this.video = false;
            },
            videoData(){
                this.prize=false;
                this.video = true
                this.extra = false;
            },
            contestTab(i){
             console.log(i)
             switch (i) {
    case 0:

        for(let i=0 ; i < this.numArray.length; i++) {
            if(i == 0) {
                this.rewards = true;
                this.rewards1 =false;
               this.numArray[i].row = true
                // this.tabs[i].rewards = true;
         
                // me.$router.push('/master/testapp');
              
                
            }
            else {
                this.numArray[i].row = false;
            }
        }
        break;
    case 1:

    for(let i=0 ; i < this.numArray.length; i++) {
            if(i == 1) {
                this.rewards = false;
                this.rewards1 = !this.rewards1
                
                this.numArray[i].row = false;
                this.numArray[i].row = !this.numArray[i].row
                // me.$router.push('/master/testpro/proposalpersonal') ;
            }
            // else {
                this.numArray[i].row = false
            // }
        }


  
        break;
        // case 2:
        // for(let i=0 ; i < this.tabs.length; i++) {
        //     if(i == 2) {
            // this.numArray[i].row = !this.numArray[i].row
        //     }
        //     else {
            // this.numArray[i].row = false
        //     }
        // }
     
        // break;
        // case 3:
        // for(let i=0 ; i < this.tabs.length; i++) {
        //     if(i == 3) {
        //         this.tabs[i].rewards = true;
        //         this.tabs[i].bgColor = '#3d3bee';
        //         this.tabs[i].icon = this.tabs[i].whiteIcon;
        //         this.tabs[i].color = '#fff',
        //         me.$router.push(this.tabs[i].link);
        //         // me.$router.push('/master/payment') 
        //     }
        //     else {
        //         this.tabs[i].rewards = false;
        //         this.tabs[i].bgColor = '#fff'
        //          this.tabs[i].icon = this.tabs[i].blackIcon;
        //          this.tabs[i].color = '#000000'
        //     }
        // }
     
        // break;

  
   
        // case 7:
        // for(let i=0 ; i < this.tabs.length; i++) {
        //     if(i == 7) {
        //           this.tabs[i].rewards = true;
        //         this.tabs[i].bgColor = '#3d3bee';
        //         this.tabs[i].icon = this.tabs[i].whiteIcon;
        //         this.tabs[i].color = '#fff',
        //         me.$router.push(this.tabs[i].link);
        //         // me.$router.push('/testpro/proposaldeclaration')  
        //     }
        //     else {
        //         this.tabs[i].rewards = false;
        //         this.tabs[i].bgColor = '#fff'
        //          this.tabs[i].icon = this.tabs[i].blackIcon;
        //          this.tabs[i].color = '#000000'
        //     }
        // }
     
        // break;
        // case 8:
        // for(let i=0 ; i < this.tabs.length; i++) {
        //     if(i == 8) {
        //         this.tabs[i].rewards = true;
        //         this.tabs[i].backgroundColor = '#fff'
        //         this.tabs[i].borderBottomWidth= '5px',
        //         this.tabs[i].borderBottomColor= '#3b371e'
        //         me.$router.push('/testpro/proposalreport')   
        //     }
        //     else {
        //         this.tabs[i].rewards = false;
        //         this.tabs[i].backgroundColor = ''
        //     this.tabs[i].borderBottomWidth= '',
        //     this.tabs[i].borderBottomColor= ''
        //     }
        // }
     
         break;
     
         break
    default:
        // execute default code block
        }
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            gotoJump() {
                navigator.push({
                    url: createURL('/p-rewards'),
                    animated: 'true'
                })
            }

        }

    }
</script>

<style >
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
.reward-header{
    background-color: #ebebeb;
    padding: 10px;
    align-content: center;
}
.reward-icon{
    width:273px;
    height:300px;
}
.card-rewards-size{
    flex-direction:column
}
.cardwards{
    flex-direction:column 
}
.rewards-row{
    padding: 10px;
}
.form-rewards-title {
                font-size: 24px;
                padding-top: 10px;
                color: #9d9d9d;
                font-family:robotoregular;
            }
            .tbl-rewards-heading {
                font-size: 25px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-family:robotobold;
    
            }
            .thead-row{
                flex-direction: column;
            }
            .tbody-row{
                flex-direction:column
            }
            .md-btn-width {
            width: 20%;
        }
        .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 40px;
        min-width: 88px;
        position: relative;
        cursor: pointer;
    }
    .md-btn-label {
            color: #fff;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            font-family:robotoregular;
        }
        .btn-color {
            background-color: #3b371e;
        }
        /*Video CSS*/
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
  .clips-story {
        width: 350px;
        height: 220px;
    }
    /*END*/
    .col {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
    }
    
    .row {
        display: flex;
        flex-direction: row;
        background-color: #e0e2e5;
    }
    
    .card-rewards-size {
        background-color: #ffffff;
        /* width: 100%; */
        padding-top: 15px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px 5px;
        justify-content: center;
    }
    .card-rew {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
        justify-content: center;
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
        padding-left: 4px;
        padding-right: 10px;
        margin-right: 10px;
        margin-bottom: 3px;
        background-color: rgb(33, 34, 35);
    }
    
    .card-btn-text {
        font-size: 17px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: whitesmoke;
        font-family:robotoregular;
    }
    
    .card-btn:active {
        background-color: rgb(5, 4, 4);
    }
    /* .img-share
    {
        width:55px;
        height:40px ;
    } */
    /* @@ */
    /* Text CSS */
    
    .heading {
        font-size: 25px;
        padding-top: 5px;
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .text1 {
        font-weight: bold;
        font-size: 25px;
        font-family:robotoregular;
    }
    
    .text2 {
        display: flex;
        color: #6e6d6d;
        font-size: 24px;
        padding: 3px 7px 2px 9px;
        font-family:robotoregular;
    }
    
    .text3 {
        color: #6e6d6d;
        font-size: 25px;
        font-weight: bold;
        padding-left: 9px;
        padding-bottom: 4px;
        font-family:robotoregular;
    }
    
    .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    
    .topheader {
        font-size: 25px;
        padding-left: 15px;
        padding-top: 20px;
        font-weight: bold;
        color: #949494;
        font-family:robotoregular;
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
    
    .img {
        width: 100px;
        height: 100px;
    }
    
    .tab-text-font-size {
        font-size: 30px;
        font-family:robotoregular;
    }
    
    .tab-flex-row3 {
        flex-direction: row;
        flex-wrap: wrap;
    }
    /* @@ */
    
    .row-simple {
        display: flex;
        flex-direction: row;
        background-color: white;
        padding-bottom: 10px;
        padding-top: 3px;
    }
    
    .col-simple {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
    }
    
    .list-item-padding {
        padding-top: 10px;
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
        font-family:robotoregular;
    }
    
    .headspace {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 5px;
        font-size: 15px;
        font-weight: 600;
        font-family:robotoregular;
    }
    
    .row1 {
        display: flex;
        flex-direction: row;
        background-color: rgb(224, 226, 229);
    }
    
    .select {
        border-bottom: 3px solid;
        display: inline-table;
        background-color: white;
        width: 110px;
        border-width: 1px;
        border-color: #f4f5f7;
        margin-left: 8px;
        padding-top: 19px;
        padding-bottom: 10px;
        color: black;
    }
    
    .selectbor {
        border-bottom: 2px solid;
        display: inline-table;
    }
    
    .row-type {
        padding-right: 27px;
        background-color: white;
        padding-bottom: 4px;
        padding-top: 4px;
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
        font-family:robotoregular;
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
        border-left-color: #6e6d6d;
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
    .rewards-pad{
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .rewards-pad-top{
        padding-top: 5px;
    }
    .tabs{
        margin-top: 10px;
    }
    .rewards-srce {
        
        flex-direction: row;
    }
    /* iphone */
    
    @media (min-width: 320px) {
        .rewards-srce {
            flex-direction: row;
        }
        .rewards-center{
            justify-content: center;
        }
        .reward-icon{
           width: 80%;
            height: 240px;
        }
        .story-row-col {
            flex-direction: column;
        }
        .clips-story {
            width: 275px;
            height: 125px;
        }
        .card-rewards-size{
            flex-direction:column;
            width: 180%;
        }
        .margin-rewards{
            padding-top:10px
        }
        .form-rewards-title {
                font-size: 14px;
                padding-top: 10px;
                color: #9d9d9d;
                font-family:robotoregular;
            }
            .tbl-rewards-heading {
                font-size: 15px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-family:robotobold;
    
            }
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
        .heading {
            font-size: 15px;
            padding-top: 5px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .text1 {
            font-weight: bold;
            font-size: 14px;
            padding-bottom: 5px;
            font-family:robotoregular;
        }
        .text2 {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-family:robotoregular;
        }
        .text3 {
            color: #6e6d6d;
            font-size: 13px;
            font-weight: bold;
            font-family:robotoregular;
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
        .table-row{
            padding-left: 0px;
            padding-right: 0px;
            padding-top: 5px;
        }
         .story-color {
            font-size: 14px;
            color: #cccccc;
        }
    }
    /* Small Device / Tab */
    
    @media (min-width: 768px) {
         .table-row{
            padding-left: 0px;
            padding-right: 0px;
            padding-top: 5px;
        }
        .reward-icon{
            width: 95%;
            height: 280px;
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
        }
        .card-rewards-size{
            flex-direction:row;
            width: 315%;
        }
        .cardwards{
            flex-direction: row;
        }

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
        .heading {
            font-size: 15px;
            padding-top: 5px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .text1 {
            font-weight: bold;
            font-size: 14px;
            padding-bottom: 5px;
            font-family:robotoregular;
        }
        .text2 {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-family:robotoregular;
        }
        .text3 {
            color: #6e6d6d;
            font-size: 13px;
            font-weight: bold;
            font-family:robotoregular;
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
    }
   
    /* Medium Device Laptops and Desktops */
    
    @media (min-width: 992px) {
         .card-rewards-size{
            flex-direction:row;
            width: 290%;
        }
        .reward-icon{
    width: 95%;
    height: 280px;
}
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
            font-family:robotoregular;
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
        .sub-row {
            flex-direction: row;
        }
        .row-simple {
            display: flex;
            flex-direction: row;
            background-color: white;
            padding-bottom: 6px;
            padding-top: 3px;
        }
        .heading {
            font-size: 15px;
            padding-top: 5px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .text1 {
            font-weight: bold;
            font-size: 14px;
            padding-bottom: 5px;
            font-family:robotoregular;
        }
        .text2 {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-family:robotoregular;
        }
        .text3 {
            color: #6e6d6d;
            font-size: 13px;
            font-weight: bold;
            font-family:robotoregular;
        }
        .topheader {
            font-size: 13.5px;
            padding-left: 15px;
            padding-top: 20px;
            font-weight: bold;
            color: #949494;
            font-family:robotoregular;
        }
        .select {
            border-bottom: 3px solid;
            display: inline-table;
            background-color: white;
            width: 69px;
            border-width: 1px;
            border-color: #f4f5f7;
            margin-left: 8px;
            padding-top: 19px;
            padding-bottom: 10px;
            color: black;
        }
        .img {
            width: 50px;
            height: 50px;
        }
        /* .img-share
        {
            width:35px;
            height:30px ;
        } */
        .selectbor {
            border-bottom: 2px solid;
            display: inline-table;
        }
    }
</style>