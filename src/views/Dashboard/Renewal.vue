<template>
    <div>
        <scroller>
            <div class="list">
                <div v-for="(num,i) in numArray" :key="i" style="margin-bottom: 20px">
                    <div class="shadow">
                        <div class="card">
                            <div class="flex-column">
                                <div class="flex-row add-border" style="padding-bottom: 10px">
                                    <div>
                                        <div class="flex-row flex-direction-change justi">
                                            <div class="box C">
                                                <text class="text bold-text">Shahu Patil</text>
                                            </div>
                                            <div class="box">
                                                <text class="text bold-text">In Force</text>
                                            </div>
                                            <div class="box" style="align-self:center">
                                                <image class="icon" src="https://www.materialui.co/materialIcons/action/check_circle_black_24x24.png"></image>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="box"><text class="text">BRSMCU155</text></div>
                                    <div class="box C"><text class="text">Increasing Income (MGB)</text></div>
                                    <!--<div class="box"><text class="text bold-text">In Force</text></div>-->
                                    <!--<div class="box">-->
                                    <!--    <image class="icon" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>-->
                                    <!--</div>-->
                                </div>
                                <div class="flex-row flex-direction-change u3-top-margin-col">
                                    <!-- Class Z is used in small device -->
                                    <div class="C Z">
                                        <div class="flex-column C">
                                            <div class="box ">
                                                <text class="text label-text-color">Due Amount</text>
                                            </div>
                                            <div class="flex-row flex-direction-change">
                                                <div class="box G">
                                                    <text class="text">₹ 18,004</text>
                                                </div>
                                                <div class="box C F" @click="toggle()">
                                                    <text class="text link-color">{{text}}</text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="C X ">
                                        <div class="flex-column C">
                                            <div class="box">
                                                <text class="text label-text-color">Due Date</text>
                                            </div>
                                            <div class="box">
                                                <text class="text">₹ 18,004</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Collaspeble List -->
                                <scroller class="scroller" scroll-direction="horizontal">
                                    <div v-if="hideShow == true " class="flex-row flex-direction-change flex-nowraping u3-top-margin-col item-alignment flex-row-content-hidden">
                                        <div class="box">
                                            <div class="flex-column">
                                                <div class="box">
                                                    <text class="text label-text-color">Installment Premium</text>
                                                </div>
                                                <div class="box">
                                                    <text class="text">₹ 6,400</text>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Operators -->
                                        <div class="box">
                                            <div class="flex-row flex-direction-change">
                                                <text class="text">x</text>
                                            </div>
                                        </div>

                                        <div class="box">
                                            <div class="flex-column">
                                                <div class="box">
                                                    <text class="text label-text-color">No. of Installments</text>
                                                </div>
                                                <div class="box">
                                                    <text class="text">3</text>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box">
                                            <div class="flex-row flex-direction-change">
                                                <text class="text">+</text>
                                            </div>
                                        </div>

                                        <div class="box">
                                            <div class="flex-column">
                                                <div class="box">
                                                    <text class="text label-text-color">Interest</text>
                                                </div>
                                                <div class="box">
                                                    <text class="text">₹ 320</text>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="box">
                                            <div class="flex-row flex-direction-change">
                                                <text class="text">-</text>
                                            </div>
                                        </div>

                                        <div class="box">
                                            <div class="flex-column">
                                                <div class="box">
                                                    <text class="text label-text-color">Suspense Amount</text>
                                                </div>
                                                <div class="box">
                                                    <text class="text">₹ 22</text>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="box">
                                            <div class="flex-row flex-direction-change">
                                                <text class="text">=</text>
                                            </div>
                                        </div>


                                        <div class="box">
                                            <div class="flex-column">
                                                <div class="box">
                                                    <text class="text label-text-color">Net Premium Payable</text>
                                                </div>
                                                <div class="box">
                                                    <text class="text">₹ 6,400</text>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </scroller>
                            </div>
                        </div>
                        <!--Card ends here-->
                    </div>
                    <!--Shadow ends here-->
                </div>
            </div>
        </scroller>
    </div>
</template>
  
<script>

  export default {
    data: function() {
      return {
        hideShow: false,
        text: 'View Break-up',
        numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    methods: {
      toggle() {
        if(this.hideShow == this.hideShow) {
          this.hideShow = !this.hideShow;
          if(this.text == 'View Break-up') {
            this.text = 'Hide Break-up';
          } else {
            this.text ='View Break-up';
          }
        }
      }
    }
  }
    
</script>

<style scoped>
  /*Horizontal Scroller*/
  .scroller {
    width: 1200px;
  }
  .list {
      background-color: #e7e7e7;
      padding-top:20px;
      padding-right:20px;
      padding-left:20px;
  }
  
  .u3-x-margin-btm {
    margin-bottom: 10px;
  }
 
    .card{
        background-color: #ffffff;
        border-radius: 5px; 
        padding-top:10px;
        padding-right:10px;
        padding-left:10px;
        padding-bottom:10px;
        
    }
    
    .x-top-margin {
      margin-top: 10px;
    }
    .link-color {
      color: blue;
    }
    
    .flex-row {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .justi {
      justify-content: center;
    }
    
    .item-alignment {
        align-items: center;
    }  
    .flex-direction-change {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .flex-column {
        flex-direction: column;
    }
    
    .flex-nowraping {
      flex-wrap: nowrap;
    }

    .add-border {
        border-width:1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color:  #e7e7e7;
    }

    .shadow {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
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
        font-size: 25px;
    }

    .label-text-color {
        color: #9b9999;
    }
    .bold-text {
        font-weight: bold;
    }

    .g-back-color {
        background-color: rgb(82, 160, 47);
    }

    .b-back-color {
        background-color: rgb(38, 96, 172);
    }
     .r-back-color {
        background-color: rgb(252, 145, 198);
    }

    .icon {
        width: 25px;
        height: 25px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }


    @media only screen and (min-width : 1200px) {
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .item-alignment {
            align-items: center;
         }   
        .list {
            background-color: #e7e7e7;
            padding-top:10px;
            padding-right:10px;
            padding-left:10px;
        }

        .card{
            background-color: #ffffff;
            padding-top:10px;
            padding-right:10px;
            padding-left:10px;
            padding-bottom:10px;
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
        
        }
        .text {
            font-size: 14px;
        }

        .box {
            padding-top: 0;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        
        .G {
            flex:1;
        }

        .F {
            flex:4;
        }
        .u3-top-margin-col {
            margin-top: 10px;
        }
    }

    @media only screen and (min-width : 750px) {
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .item-alignment {
            align-items: center;
         }  

        .flex-direction-change {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .list {
            background-color: #e7e7e7;
            padding-top: 10px;
            padding-right:10px;
            padding-left:10px;
        }

        .card{
            background-color: #ffffff;
            padding-top:10px;
            padding-right:10px;
            padding-left:10px;
            padding-bottom:10px;
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
        
        }

        .text {
            font-size: 20px;
        }
    }

    @media only screen and (min-width : 480px) {

        .card{
            background-color: #ffffff;
            padding-top:10px;
            padding-right:10px;
            padding-left:10px;
            padding-bottom:10px;
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
        
        }

        .text {
            font-size: 14px;
        }
 
    }

    @media only screen and (min-width : 640px) {
    
        .item-alignment {
            align-items: center;
         }  

        .card{
            background-color: #ffffff;
            padding-top:10px;
            padding-right:10px;
            padding-left:10px;
            padding-bottom:10px;
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
        
        }

        .text {
            font-size: 14px;
        }

        .G {
            flex:1;
        }
 
    }

    @media only screen and (min-width : 320px) {
        .flex-row {
            flex-direction: column;  
        }

        .item-alignment {
            align-items: center;
         }  

        .flex-direction-change {
            flex-direction: row;
            flex-wrap: nowrap;

            /* flex-wrap: wrap; */
        }

        .flex-row-content-hidden {
            overflow: scroll;
            /* background-color: green; */
        }
        .list {
            background-color: #e7e7e7;
            padding-top: 8px;
            padding-right:8px;
            padding-left:8px;
        }

        .card{
            background-color: #ffffff;
            padding-top:10px;
            padding-right:10px;
            padding-left:10px;
            padding-bottom:10px;
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
        
        }

        .text {
            font-size: 14px;
        }

        .E {
            flex: 2;
        }
        .F {
            flex: 2;
        }

        .Z {
            flex:3;
        }

        .X {
            flex:2;
        }
 
    }
</style>

