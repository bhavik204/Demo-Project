<template>
        <div class="wrapper-div" style="background-color:#f7f7f7">
            
                <div class="card card-border-bottom" style="flex-direction:row;align-items:center;justify-content: space-between;padding: 15px;padding-top:30px;padding-bottom:30px;margin-top:-1px">
                  
                       <div style="justify-content: center;flex:1;flex-direction:row">
                         <div style="flex:1;    justify-content: center">
                            <div> <text  class="panel-heading-font text-color-white" style="margin-top:5px">Home</text></div>
                           </div>
                         <div  style="justify-content: center;flex:2;margin-bottom:2px" > <image class="head-icn" src="http://salesdrive.iorta.in/img/logo.png"
                        alt="notify"></image></div>
                        </div>
                       <div style="flex-direction:row;justify-content:space-between">
                       <div style="justify-content: center;margin-right:10px;margin-top:5px"><image class="cal-icn" src="https://www.materialui.co/materialIcons/action/search_white_192x192.png" alt="notify"></image> </div>
                       <div style="justify-content: center;margin-right:10px;margin-top:5px"><image class="cal-icn" src="https://www.materialui.co/materialIcons/social/notifications_white_192x192.png" alt="notify"></image> </div>
                       <div @click="jump('/menu-mobile')" style="justify-content: center;margin-right:10px;margin-top:5px"><image class="cal-icn" src="https://www.materialui.co/materialIcons/action/perm_identity_white_192x192.png" alt="notify"></image> </div>
                    </div>
                    </div>
     
             
                </div>
    </template>
    
    <script>
        const env = weex.config.env || WXEnvironment
        const invalid = '- invalid -'
        const items = ["Cust Name", "Cust ID", "Product Name", "Product Type","App No"];
        export default {
            created() {
                    if (typeof WXEnvironment === 'object') {
    
                        this.platform = WXEnvironment.platform || unknown
                        this.deviceWidth = WXEnvironment.deviceWidth || unknown
    
                    }
            },
          
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
        .panel-heading-font {
        font-size: 35px;
        font-weight: bold;
        color:white;
    }
        .card {
            /* width:70%; */
           
            /* margin-top: 20px; */
            /*height:100px;*/
            margin-bottom: 0px;
            background-color: #3b371e;
          
    
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
            /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
        }
      .head-icn{
          width: 200px;
        height: 60px;
      }
        .cal-icn {
            height: 60px;
            width: 60px;
        }
    </style>