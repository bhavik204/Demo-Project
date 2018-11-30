>
<template>
                <!-- All Clubs Page -->
    <div style="background-color: #f7f7f7;">
            <!-- <clubs-tab></clubs-tab> -->
        <scroller>
          <!-- <div class="box" style="background-color: white; padding: 15px 0px 15px 0px;">
                <div class="tab-flex-row3 flex-nowraping">
                    <div class="box tab-box-padding1">
                        <div class="outer-flex-col justi" style="align-items:center;" @click="jump('/newone')">
                            <image class="img"    src="http://salesdrive.iorta.in/img/product-icons/contest-gray.jpg"></image>
                            <div><text class="tab-text-font-size"  style="color:#949494; padding-top: 5px;">Contests</text></div>
                        </div>
                    </div>

                     

                    <div class="box tab-box-padding">
                        <div class="outer-flex-col justi" style="align-items:center;">
                             <image class="img"   src="http://salesdrive.iorta.in/img/product-icons/club.jpg"></image>
                            <div><text class="tab-text-font-size" style=" padding-top: 5px;" >Clubs</text></div>
                        </div>
                    </div>

                    
                </div>
            </div> -->

            <!-- <div class="tab-flex-row4" style="flex-wrap:nowrap;">
              <text class="topheader select selectbor" >All Clubs</text>
              <text class="topheader" @click="jump('/myclubs')">My Clubs</text>
            </div>  -->

<div class="col" style="background-color: #f7f7f7;">
  <div class="box">
    <div class="card ">
        <text class="text-head" >International Clubs</text>
        <div class="tab-flex-row"  style="background-color: white;">

       	   <div class="card1 add-border1 ">
                    <slider class="slider size"  auto-play="true">
                        <div v-for="(src,li) in posters"  :key="li">
                        <image class="size" resize="cover" :src="src"></image>
                        </div>
                        <indicator class="indicator"></indicator>
                    </slider>
                <div class="tab-flex-row-color add-border2" > 
                    <text class="headspace "  >TOP OF TABLE CLUBS(TOT)</text>
                </div>
                <div class=" space-get add-border">
                    <text class="text1"  >Qualifying condition for 2016 on WRP* (Rs.)</text>
                    <text class="text2 " >&#x20b9; 2,09,76,000/-</text>
                </div>
                <div class="space-get add-border">
                    <text class="text1"  >Qualifying condition for 2016 on Commission (Rs.)</text>
                    <text class="text2" >&#8377;52,44,000/-</text>
                </div>
                <div class="space-get add-border">
                    <text class="text1"  >Reward</text>
                    <text class="text2" >MDRT Conference for 1</text>
                    <text class="text2" >MDRT Registration</text>
                    <text class="text2" >Reimbursement of 1.5 Lac</text>
                </div>
                <!-- <div style="padding: 4px 10px 0px 10px;">
                    <div class="card-btn btn-width"  ><text class="card-btn-text">Join Club</text></div>
                </div> -->
                <div class="row-button" >
                    <div class="box  x-small-btn" >
                        <div class="md-custom-btn btn-color">
                            <text class="md-btn-label text-color-white">Join Club</text>
                        </div>
                    </div>
                </div>
           
       	  </div>
           
          <div class="card1 add-border1 ">
           
             <div style="justify-content:center">
                <slider class="slider size" auto-play="true">
                  <div v-for="(src,li) in posters"  :key="li">
                    <image class="size" resize="cover" :src="src"></image>
                  </div>
                  <indicator class="indicator"></indicator>
                </slider>
            </div>
            <div class="tab-flex-row-color add-border2" > 
              <text class="headspace">COURT OF TABLE CLUB (COT)</text>
            </div>
            <div class="space-get add-border">
              <text class="text1" >Qualifying condition for 2016 on WRP* (Rs.)</text>
              <text class="text2"> &#x20b9; 1,04,88,000/-</text>
            </div>
            <div class="space-get add-border">
              <text class="text1" >Qualifying condition for 2016 on Commission (Rs.)</text>
              <text class="text2"> &#8377; 26,22,000/-</text>
            </div>
            <div class="space-get add-border">
              <text class="text1" >Reward</text>
              <text class="text2">MDRT Experience for 1</text>
              <text class="text2" >Reimbursement of 1.5 Lac</text>
           </div>
           <div class="row-button" >
                <div class="box  x-small-btn" >
                    <div class="md-custom-btn btn-color">
                        <text class="md-btn-label text-color-white">Join Club</text>
                    </div>
                </div>
            </div>
           
       	</div>
        <div class="card1 add-border1 ">
           
             <div style="justify-content:center">
                <slider class="slider size" auto-play="true">
                  <div v-for="(src,li) in posters"  :key="li">
                    <image class="size" resize="cover" :src="src"></image>
                  </div>
                  <indicator class="indicator"></indicator>
                </slider>
            </div>
            <div class="tab-flex-row-color add-border2" > 
              <text class="headspace">TOP OF TABLE CLUBS(TOT)</text>
            </div>
            <div class="space-get add-border">
              <text class="text1"  >Qualifying condition for 2016 on WRP* (Rs.)</text>
              <text class="text2" > &#x20b9; 34,96,000/-</text>
            </div>
            <div class="space-get add-border">
              <text class="text1" >Qualifying condition for 2016 on Commission (Rs.)</text>
              <text class="text2"> &#8377;8,74,000/-</text>
            </div>
            <div class="space-get add-border">
              <text class="text1" >Reward</text>
              <!-- <text class="text1 ">MDRT Conference for 1</text> -->
              <text class="text2 "  >MDRT Registration</text>
              <!-- <text class="text1" >Reimbursement of 1.5 Lac</text> -->
           </div>
           <div class="row-button" >
                <div class="box  x-small-btn" >
                    <div class="md-custom-btn btn-color">
                        <text class="md-btn-label text-color-white">Join Club</text>
                    </div>
                </div>
            </div>
           
       	</div>
    </div>
  </div>

   
   </div>
</div>

</scroller>
 </div>
                                            

</template>

<script>
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'

    import clubsTab from './ClubsTab.vue'
    export default {
        created() {
        if (typeof WXEnvironment === 'object') {
        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
        }
        },
        props: {
            listItems: {
                type: Array
            }

        },
        components:{clubsTab},
        data: function() {
            return {
                headerName:'Clubs',
                platform: invalid,
                deviceWidth: invalid,
                dropList: false,
                dropList1: false,
                listItems: ["Yearly", "Monthly"],
                listItems1:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
                selected: 'Select Item..',
                selected1:'Select ..',
                posters: [
                          'http://salesdrive.iorta.in/img/services/clubSlider-img1.jpg',
                          'http://salesdrive.iorta.in/img/services/clubSlider-img2.jpg',
                           'http://salesdrive.iorta.in/img/services/clubSlider-img3.jpg',
                           'http://salesdrive.iorta.in/img/services/clubSlider-img4.jpg'

                        ]
            }
        },
        
        methods: {
             jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            pickItems(key) {
                this.dropList = !this.dropList;
                this.selected = this.listItems[key];
            },
             pickItems1(key) {
                this.dropList1 = !this.dropList1;
                this.selected1 = this.listItems1[key];
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
   	 background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
    background-color: #e0e2e5;
     }
  
   .row {
   	   display: flex;
   	   flex-direction: row;
       flex-wrap: wrap;
       height: auto;
       background-color: #e0e2e5;
       max-width: 100%;
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
   .card1 {
        /* padding: 10px; */
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        /* margin: 10px; */
        margin: 20px;
        flex:1;
        max-width: 700px;
        min-width: 200px;
    }
    .size {
        height:350px;
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

    /* APK CSS */
    .topheader{
      font-size: 28px;
      padding-left: 15px;
      padding-top: 20px;
      font-weight: bold;
      color: #949494;
    }

    .space-get{
        margin-top:10px;
        margin-bottom: 20px;
        padding-bottom: 10px;
    }
    .row-button {
      display: flex;
      flex-direction: row;
      background-color: white;
      margin-left:350px;
      margin-top: 18px;
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
          width: 220px;
    }
   .card-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 34px;
        min-width: 88px;
        position: relative;
        cursor: pointer;
        background-color: rgb(33, 34, 35);
    }
    .card-btn-text {
        font-size : 14px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color:whitesmoke;
    }
    .btn-width{
        width:30px;
    }
    .card-btn:active {
        background-color:rgb(5, 4, 4);
    }
    .text1{
        font-size: 24px;
        padding-left: 13px;
        padding-bottom: 5px;
        padding-top: 10px;
        color: #6e6d6d;
        
    }
    .text2{
        display: flex;
        font-weight: bold;
        font-size: 25px;
        padding-left: 13px;
        padding-top: 2px;
        padding-bottom: 5px;
    }
    .text3{
        color: #6e6d6d;
        font-size: 20px;
        font-weight: bold;
    }
    .text-head
    {
        font-size: 25px;
        font-weight: bold;
        margin-left: 20px;
        padding: 10px 0px 10px 0px;
        
    }
    .text-footer{
        color:#fff; 
        font-size:25px;
        padding: 20px 0px 20px 0px;
    }
    .img{
        width: 100px;
        height: 100px;
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
    .tab-flex-row {
        flex-direction: column;
        flex-wrap: wrap;
        
    }
    .tab-flex-row1 {
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 12px;
    }
    .tab-flex-row3 {
        flex-direction: row;
        flex-wrap: wrap;
        
    }
    .tab-flex-row4 {
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 12px;
    }
    .tab-flex-row-color{
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #e0e2e5;
    }
    
    .tab-box-padding1 {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px; 
        margin-right: 40px;
        margin-left: 60px;
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
        flex-wrap: wrap;
    }
    .headspace
    {
        padding-top:10px;
        padding-bottom:10px;
        padding-left: 15px;
        font-size: 35px;
        font-weight: 600;
    }
    .row1 {
   	   display: flex;
   	   flex-direction: row;
       flex-wrap: wrap;
       height: auto;
       background-color: rgb(224, 226, 229);
       max-width: 100%;
    }
    .icon {
        width: 15px;
        height: 15px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }

    .dropdown-icon  {
        width: 20px;
        height: 20px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }

    .drop-arrow-pos {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 6px;
        left: 185px;
    }
    .select-box {
        padding-top:8px;
        padding-bottom: 8px;
        padding-left: 5px;
        padding-right: 5px; 
    }

    .mouse-pointer {
        cursor: pointer;
    }
   /* APK */
    .select
    {
        border-bottom:3px solid;
        display: inline-table;
        background-color:white;
        border-width: 1px;
        border-color: #f4f5f7;
        margin-left:6px;
        padding-top:10px;
        padding-bottom:10px;
        padding-right: 5px;
        color: black;
        
    }
    .selectbor{
        border-bottom:3px solid;
        display: inline-table;
    }
    .row-type
    {
        padding-right:27px;
        background-color:white;
        padding-bottom:4px; padding-top:4px;   
    }
    .mouse-pointer {
            cursor: pointer;
    }
    .shadow {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
        
   /* djhsd */

   
   .flex-row-to-column-360 {
        flex-direction: column;
    }
    
    .tab-font-size {
        font-size: 25px;
    }
    .tab-text-font-size {
        font-size: 30px;
      }
   
   
    
    .nx-flex-column {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .nx-flex-bt-marg {
        margin-bottom: 20px;
    }
    
   
    
    .flex-direction-change {
        flex-direction: row;
        flex-wrap: wrap;
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
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }
    
    .u3-top-margin-col {
        margin-top: 10px;
    }
    
    .C {
        flex: 1
    }
    /*.flex-2 {*/
    /*  flex:2;*/
    /*}*/
    
    .text {
        font-size: 20px;
    }
   
    .bold-text {
        font-weight: bold;
    }
    
    .row-simple {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: auto;
        background-color:white; 
        padding-bottom:20px; 
        padding-top: 7px;
   }
    .col-simple {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
    }
    .drop-down {
        position: relative;
        border-width: 1px;
        border-style: solid;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom-color: #ccc;

    }

    .drop-arrow-pos {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 6px;
        left: 185px;
    } 

    /* Medium Device Laptops and Desktops */
    @media (min-width: 992px) {
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }
        /* This flex column is root and dose not change at diffrent view port */
        .outer-flex-col {
            flex-direction: column;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .tab-flex-row1 {
        flex-direction: row;
        flex-wrap: nowrap;
        }
        .tab-font-size {
            font-size: 25px;
        }
        .tab-text-font-size {
            font-size: 15px;
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
        .btn-width {
            width: 30%;
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
        .text1{
        font-size: 12px;
        padding-left: 13px;
        padding-bottom: 5px;
        padding-top: 10px;
        color: #6e6d6d;
        
    }
    .text2{
        display: flex;
        font-weight: bold;
        font-size: 15px;
        flex-wrap: wrap;
        max-width: 100%;
        padding-left: 13px;
        padding-top: 2px;
        padding-bottom: 5px;
    }
    .text3{
        color: #6e6d6d;
        font-size: 13px;
        font-weight: bold;
    }
    .text-head
    {
        font-size: 15px;
        font-weight: bold;
        margin-left: 20px;
        padding: 10px 0px 10px 0px;
        
    }
    .text-footer{
        color:#fff; 
        font-size:12px;
        padding: 8px 0px 8px 0px;
    }
    .img{
        width: 50px;
        height: 50px;
    }
    .md-btn-width {
            width: 25%;
        }
        /* This margin is used in browser only */
       
       
       
    }
    /* Small Device / Tab */
    @media (min-width: 768px) {
        .scroller {
            display: none;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: wrap;
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
        .text-footer{
        color:#fff; 
        font-size:12px;
        padding: 8px 0px 8px 0px;
    }
        
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
        background-color: #FFF;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
        border-radius: 2px;
        flex: 1
    }
            
    .row-simple
    {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: auto;
        justify-content: start;
        background-color:white; 
        padding-bottom:20px; 
    }
    .topheader
    {
        font-size: 12.5px;
        padding-left: 15px;
        padding-top: 20px;
        font-weight: bold;
        color: #949494;
    }
    .text-footer{
        color:#fff; 
        font-size:12px;
        padding: 8px 0px 8px 0px;
    }
    .select
    {
        border-bottom:3px solid;
        display: inline-table;
        background-color:white;
        width:80px;
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
    .spaceto{
        padding-top: 5px;
        padding-bottom: 8px;
        padding-left: 8px;
        font-size: 11px;
        color: #6d6d6d;
    }
    .spaceto1{
        padding-top: 5px;
        padding-bottom: 8px;
        padding-left: 8px;
        font-size: 11.5px;
        font-weight: bold;
        color: #222121;
    }
    .headspace
    {
        padding-top:10px;
        padding-bottom:10px;
        padding-left: 15px;
        font-size: 13px;
        font-weight: 600;
    }
    .card-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 36px;
        min-width: 88px;
        position: relative;
        cursor: pointer;
        background-color: rgb(33, 34, 35);
    }
    .card-btn-text {
        font-size : 14px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color:whitesmoke;
    }
    .card-btn:active {
        background-color:rgb(5, 4, 4);
    }
    .box {
            padding: 5px;
        }
     .row-button {
        display: flex;
        flex-direction: row;
        background-color: white;
        margin-left:10px;
        margin-top: 18px;
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
            width: 24%;
            /* margin-top: 19px; */
        }
    }



</style>