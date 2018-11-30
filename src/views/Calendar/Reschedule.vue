<template>
                <!-- Crate Page -->
    <div style="background-color: #e0e2e5;">
            

        <scroller>
                
<div class="col">
  <div class="box" >
    <div class="card shadow"  >
        <div class="row-banner ">
            <text class="bantext"  >Reschedule Events</text>
        </div>
        <div ><text class="text-blur-small-left" > 03/06/2016</text></div>
        
        <div class="tab-flex-row"  style="background-color: white; padding-bottom:10px">
            <div class="tab-flex-row3 " style="margin:10px 0px 15px 70px;background-color: rgb(243, 237, 237);padding:10px 50px 10px ;">
              <div class="tab-flex-row-col">
                <text class="text-blur-small">8:00</text>
                <text class="text-blur-small">9:00</text>
              </div>
              <text class="text-blur-small" style="margin-top:10px;">	Client Meeting with Callie Putney</text>
              <!-- <text class="text-blur-small">	Client Meeting with Callie Putney</text> -->

            </div>
            <div class=" " >
                <!-- <text class="text-head-bold " style="margin-left:3px;">Set Schedule</text> -->
                <div class="tab-flex-row " > 
                    <!-- <div class="tab-flex-row-col" style="flex:1;">
                        <text class="text-blur-small">Select Start Date</text>
                        <input class="input" type="date" placeholder="Input Date" />
                    </div> -->
                     <div class="tab-flex-row" >
                            <wxc-checkbox v-if="platform !== 'Web'" title="Bringing Up:"
                            :disabled="false"
                            :checked="true"></wxc-checkbox>
                            <div class="table-row" style="flex-direction: column; padding-bottom:10px;"> 
                            <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                            <input type="checkbox">
                            <text class="text-blur-small">Bringing Up:</text>
                            </div>
                            </div>
                        <!-- <text class="text-blur-small">Bringing Up:</text> -->
                        <!-- <input class="input" type="time"  placeholder="Input Time"/> -->
                        <div style="flex-direction: column;flex:1" class="table-row-details ">
                                <text v-if="platform !== 'Web'" class="text-bold-drop mouse-pointer add-border" style="flex:1; padding-left:14px;" @click="superEndowmentPlan">{{value3}}</text>
                                <div class="drop-down add-border" v-if="platform == 'Web'" style="flex:1;  margin-bottom:1px; position: absolute; padding: 2px 0px 9px 11px;">
                                <select style="flex:1">
                                    <option class="dropdown-opt text3 mouse-pointer shadow"  v-for="calc in superEndowmentPlanWeb ">{{calc}}</option>
                                </select>
                                </div>
                            </div>
                    </div>
                </div>
                 <div class="tab-flex-row " > 
                    <!-- <div class="tab-flex-row-col" style="flex:1;">
                        <text class="text-blur-small">Select End Date</text>
                        <input class="input" type="date" placeholder="Input Date"/>
                    </div> -->
                     <div class="tab-flex-row" >
                        <!-- <text class="text-blur-small">Delay</text> -->
                        <wxc-checkbox v-if="platform !== 'Web'" title="Delay"
                        :disabled="false"
                        :checked="true"></wxc-checkbox>
                        <div class="table-row" style="flex-direction: column; padding-bottom:10px;"> 
                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                        <input type="checkbox">
                        <text class="text-blur-small">Delay</text>
                        </div>
                        </div>
                        <div style="flex-direction: column;flex:1" class="table-row-details ">
                            <text v-if="platform !== 'Web'" class="text-bold-drop mouse-pointer" style="flex:1; padding-left:3px;" @click="guaranteedMoneyBack">{{value1}}</text>
                            <div class="drop-down add-border" v-if="platform == 'Web'" style="flex:1; max-width: 150px; margin-bottom:1px; position: absolute; padding: 2px 0px 9px 11px;">
                            <select style="flex:1">
                                <option class="dropdown-opt text3 mouse-pointer shadow"  v-for="calc in guaranteedMoneyBackWeb ">{{calc}}</option>
                            </select>
                            </div>
                        </div>
                        <!-- <input class="input" type="time"  placeholder="Input Time"/> -->
                        <!-- <div style="flex-direction: column;flex:1" class="table-row-details ">
                            <text v-if="platform !== 'Web'" class="text-bold-drop mouse-pointer" style="flex:1; padding-left:3px;" @click="guaranteedMoneyBack">{{value1}}</text>
                            <div class="drop-down add-border" v-if="platform == 'Web'" style="flex:1; max-width: 150px; margin-bottom:1px; position: absolute; padding: 2px 0px 9px 11px;">
                            <select style="flex:1">
                                <option class="dropdown-opt text3 mouse-pointer shadow"  v-for="calc in guaranteedMoneyBackWeb ">{{calc}}</option>
                            </select>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="tab-flex-row " > 
                    <text class="text-blur-small">Move To:</text>
                    <div class="tab-flex-row-col" style="flex:1;">
                        <text class="text-blur-small">Select start Date</text>
                        <input class="input" type="date" placeholder="Input Date"/>
                    </div>
                     <div class="tab-flex-row-col" >
                        <text class="text-blur-small">Select start Time</text>
                        <input class="input" type="time"  placeholder="Input Time"/>
                        <!-- <div style="flex-direction: column;flex:1" class="table-row-details ">
                            <text v-if="platform !== 'Web'" class="text-bold-drop mouse-pointer" style="flex:1; padding-left:3px;" @click="guaranteedMoneyBack">{{value1}}</text>
                            <div class="drop-down add-border" v-if="platform == 'Web'" style="flex:1; max-width: 150px; margin-bottom:1px; position: absolute; padding: 2px 0px 9px 11px;">
                            <select style="flex:1">
                                <option class="dropdown-opt text3 mouse-pointer shadow"  v-for="calc in guaranteedMoneyBackWeb ">{{calc}}</option>
                            </select>
                            </div>
                        </div> -->
                    </div>
                    
                </div>

                <div class="tab-flex-row " >
                    <text class="text-blur-small">Move To:</text>   
                <div class="tab-flex-row-col" style="flex:1;">
                    <text class="text-blur-small">Select End Date</text>
                    <input class="input" type="date" placeholder="Input Date"/>
                </div>
                 <div class="tab-flex-row-col" >
                    <text class="text-blur-small">Select End Time</text>
                    <input class="input" type="time"  placeholder="Input Time"/>
                    <!-- <div style="flex-direction: column;flex:1" class="table-row-details ">
                        <text v-if="platform !== 'Web'" class="text-bold-drop mouse-pointer" style="flex:1; padding-left:3px;" @click="guaranteedMoneyBack">{{value1}}</text>
                        <div class="drop-down add-border" v-if="platform == 'Web'" style="flex:1; max-width: 150px; margin-bottom:1px; position: absolute; padding: 2px 0px 9px 11px;">
                        <select style="flex:1">
                            <option class="dropdown-opt text3 mouse-pointer shadow"  v-for="calc in guaranteedMoneyBackWeb ">{{calc}}</option>
                        </select>
                        </div>
                    </div> -->
                </div>
              </div>

                <div class="row-comment add-border" style="padding-bottom:30px;">
                        <wxc-checkbox v-if="platform !== 'Web'" title="Do this for all Events"
                        :disabled="false"
                        :checked="true"></wxc-checkbox>
                        <div class="table-row" style="flex-direction: column; padding-bottom:10px;"> 
                        <div v-if="platform == 'Web'" class="chkbox" style="flex-direction: row;margin-top:15px;">
                        <input type="checkbox">
                        <text class="text-blur">Do this for all Events</text>
                        </div>
                        </div>
                                    <!-- <text class="text2" style="padding-left:8px;">Do this for all Events</text> -->
                                
                </div>
                <div class="cardrow " >
                        <div class="card-btn2" @click="jump('/reschedule')">
                            <text class="card-btn-text" >Cancel</text>
                        </div>
                        <div class="card-btn1" @click="jump('/reschedule')">
                            <text class="card-btn-text"  >Reschedule</text>
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
    const picker = weex.requireModule('picker');
    const items = ["8:00", "8:30","9:00","9:30"];
    const language = ["8:00", "8:30","9:00","9:30"];
    const language1 = ["8:00", "8:30","9:00","9:30"];
    const language2 = ["By 1 Hour","By 1 Hour","By 1 Hour"];
    const language3 = ["Personal", "For a Group"];
    const language4 = ["View Only", "Modify Event", "Invite Others"];

    import { WxcCheckbox} from 'weex-ui'
    export default {
        
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Reschedule');
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
        components:{WxcCheckbox},
        data: function() {
            return {
            headerName:'Calender ',
            index: -1,
            index1: -1,
            index2:-1,
            index3: -1,
            index4: -1,
            index5: -1,
            premiumModeListWeb: ["8:00", "8:30","9:00","9:30"],
            guaranteedMoneyBackWeb: ["8:00", "8:30","9:00","9:30"],
            superMoneyBackWeb:   ["8:00", "8:30","9:00","9:30"],
            superEndowmentPlanWeb: ["By 1 Hour","By 1 Hour","By 1 Hour"],
            // childPalnWeb:   ["Hindi", "English","Marathi","Bangali","Tamil"],

            }
        },
        computed:{
        value() {
          if (this.index == -1) {
            return "Select ";
          } else if (this.index < items.length) {
            return items[this.index];
          }
          return "";
        },
        value1() {
          if (this.index1 == -1) {
            return "Select ";
          } else if (this.index1 < language.length) {
            return language[this.index1];
          }
          return "";
        },
        value2() {
            if (this.index2 == -1) {
            return "Select  ";
            } else if (this.index3 < language1.length) {
            return language1[this.index2];
            }
            return "";
        },
        value3() {
          if (this.index3 == -1) {
            return "By 1 Hour";
          } else if (this.index3 < language2.length) {
            return language2[this.index3];
          }
          return "";
        },
        value4() {
            if (this.index4 == -1) {
            return "Select Event  ";
            } else if (this.index4 < language3.length) {
            return language3[this.index4];
            }
            return "";
        },
        value5() {
            if (this.index5 == -1) {
            return "Select Event ";
            } else if (this.index5 < language4.length) {
            return language4[this.index5];
            }
            return "";
        }
    },
        methods: {
fixedSavingPlan(){
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
    guaranteedMoneyBack(){
    picker.pick(
                {
                index: this.index1,
                items:language
                },
                event => {
                if (event.result === "success") {
                    this.value1 = items[event.data];
                    this.index1 = event.data;
                }
                }
            );
    },
    superMoneyBack(){
        picker.pick(
                {
                index: this.index2,
                items:language1
                },
                event => {
                if (event.result === "success") {
                    this.value2 = items[event.data];
                    this.index2 = event.data;
                }
                }
            );
    },
    superEndowmentPlan(){
        picker.pick(
                {
                index: this.index3,
                items:language2
                },
                event => {
                if (event.result === "success") {
                    this.value3 = items[event.data];
                    this.index3 = event.data;
                }
                }
            );
    },
    childPlan(){
        picker.pick(
                {
                index: this.index4,
                items:language3
                },
                event => {
                if (event.result === "success") {
                    this.value4 = items[event.data];
                    this.index4 = event.data;
                }
                }
            );
    },
   eventIs(){
        picker.pick(
                {
                index: this.index5,
                items:language4
                },
                event => {
                if (event.result === "success") {
                    this.value5 = items[event.data];
                    this.index5 = event.data;
                }
                }
            );
    },
    
             jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
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
    .scroller {
        width:  3000px;
        flex-direction: row;
        height:60px;
    }
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
       flex-wrap: wrap;
       height: auto;
       max-width: 100%;
    }
   
   .card {
       background-color: white;
       margin: 10px;
       justify-content:center;
   	  
    }
   .card1 {
        background-color: white;
        flex:1;
        max-width: 700px;
        min-width: 200px;
        padding-left: 10px;
        padding-right: 10px;
    }
    
    /* Resource Center CSS */
    .text-head-bold{
        font-size: 33px;
        font-weight: bold;
        padding: 14px 0px 14px 14px;
        color: #6e6d6d;
        
    }
    .text-bold-drop{
        font-size: 30px;
        font-weight: bold;
        color: #6e6d6d;
    }
    .text-head{
        font-size: 29px;
        padding: 24px 0px 24px 14px;
        color: #6e6d6d;
    }

    .text-head-2{
        font-size: 29px;
        padding: 10px 0px 5px 17px;
        color: #6e6d6d;
    }
    .text-blur{
        font-size: 29px;
        color: #717375;
        padding: 15px 0px 0px 14px;
    }
    .text-blur-none{
        font-size: 29px;
        color: #717375;
        padding: 15px 0px 0px 10px;
    }
    .text-blur-small{
        font-size: 25px;
        color: #717375;
        padding: 15px 0px 0px 17px;
    }
    .text-blur-small-left{
        font-size: 25px;
        color: #717375;
        margin-left: 500px;
    }
    .text-head-catg
    {
        font-size: 36px;
        font-weight: bold;
        margin-left: 20px;
        padding: 10px 0px 10px 0px;
        
    }
  
    .input{
        width: 650px;
        margin-top: 25px;
        margin-left: 17px;
        font-size: 25px;
        padding: 5px;
        color: #666666;
        border-width: 2px;
        border-style: solid;
        border-bottom-color: #d8d8d8;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
    }
    /* @@ */
    /* Create Event CSS */
    .row-banner {
    flex-direction: row;
    padding: 22px;
    background-color: rgb(44, 46, 45);
    }
    .bantext{
    font-size: 19px;
    font-weight: 500;
    color: #FFF;
    font-family: Helvetica-Bold;
    }
    .textflex
    {
    color: #6e6d6d;
    font-size: 13px;
    flex-direction: row-reverse;
    padding-right:24px;
    }
    .tab-flex-row-col {
        flex-direction: column;
        flex-wrap: wrap;
        
    }
    .tab-flex-row-col-2 {
        flex-direction: column;
        flex-wrap: wrap;
        
    }
    .cardrow
    {
    background-color:#e5e5e5;
    padding-bottom: 13px;
    padding-top: 12px;
    flex-direction:row;
    justify-content:flex-end;
    }
    .card-btn1 {
    background-color: #3b371e;
    border-color: #3b371e;
    margin-top: 5px;
    width: 110px;
    height: 38px;
    margin-right:20px;
    justify-content: center;
    }
    .card-btn2 {
    background-color: #9d9d9d;
    border-color: #9d9d9d;
    margin-top: 5px;
    width: 90px;
    height: 38px;
    margin-right:15px;
    justify-content: center;
    }
    .card-btn-text {
    color: #ffffff;
    font-size: 13px;
    text-align: center;
    font-weight: 600;
    }
    .high{
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 4px;
      padding-top: 4px;
      width: 70px;
      height: 35px;
      background-color: #eb9292;
      color:#FFF;
      font-size: 22px;
      border-radius: 2px;
      min-width: 44px;
      text-transform: uppercase;
      font-style: normal;
      margin: 1px 0px 18px 3px;
      
    }

    .medium{
        width: 110px;
        height: 35px;
        background-color: #e8bd55;
        padding: 4px 10px;
        color:#FFF;
        font-size: 22px;
        border-radius: 2px;
        min-width: 44px;
        text-transform: uppercase;
        font-style: normal;
        margin: 1px 0px 18px 3px;
    }
    .low{
        width: 70px;
        height: 35px;
        background-color: #a3d562;
        padding: 4px 10px;
        color:#FFF;
        font-size: 22px;
        border-radius: 2px;
        min-width: 44px;
        text-transform: uppercase;
        font-style: normal;
        margin: 1px 0px 18px 15px;
    }
    .spaceget{
        margin-left: 17px;
    }
    .img-drop{
        width: 40px;
        height: 40px;
    }
    /* @@ */
    
    .mouse-pointer {
        cursor: pointer;
    }
    .tab-flex-row {
        flex-direction: column;
        flex-wrap: wrap;
        
    }
   
    .tab-flex-row1 {
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 12px;
        flex: 1;
    }
    .tab-flex-row3 {
        flex-direction: row;
        flex-wrap: wrap;
        
    }
  
    .flex-row {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
   
    .select
    {
        border-bottom:3px solid;
        display: inline-table;
        background-color:white;
        border-width: 1px;
        border-color: #f4f5f7;
        margin-left:12px;
        padding-top:15px;
        padding-bottom:25px;
        padding-right: 14px;
        color: black;
        
    }
    .selectbor{
        border-bottom:3px solid;
        display: inline-table;
    }
    
    
    .shadow {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
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
        border-bottom-color: #d8d8d8;
    }
    .add-border1 {
        border-width: 1px;
        border-style: solid;
        border-top-color: #d8d8d8;
        border-right-color: #d8d8d8;
        border-left-color:#d8d8d8;
        border-bottom-color: #d8d8d8;
    }
    .add-border-dot {
        border-width: 1px;
        border-style: dashed;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #4e4c4c;
    }
    .add-border-tb {
        border-width: 1px;
        border-style: solid;
        border-top-color: #d8d8d8;
        border-right-color: #fff;
        border-left-color:#fff;
        border-bottom-color: #d8d8d8;
    }
    
    .box {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
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
        .tab-flex-row-col {
        flex-direction: column;
        flex-wrap: wrap;
        padding-right: 70px;
        padding-left: 10px;
        }
        .tab-flex-row-col-2 {
        flex-direction: column;
        flex-wrap: wrap;
        padding-right: 90px;
        padding-left: 10px;
        }
        .tab-flex-row-col-1 {
        flex-direction: column;
        flex-wrap: wrap;
        }
        .tab-flex-row3 {
        flex-direction: row;
        flex-wrap: wrap;
        
        }
        .tab-flex-row1 {
        flex-direction: row;
        flex-wrap: nowrap;
        }
        
        
        .nx-flex-row {
            flex-direction: column;
        }
        .btn-width {
            width: 30%;
        }
        .card {
            background-color: #ffffff;
            border-radius: 2px;
            max-width: 700px;
            align-self: center;
        }
       
        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        
        
            /* Resource Center CSS */
        .text-head-bold{
            font-size: 15px;
            font-weight: bold;
            padding: 14px 0px 14px 14px;
            color: #6e6d6d;
            
        }
        .text-head{
            font-size: 14px;
            padding: 24px 0px 4px 14px;
            color: #6e6d6d;
        }
        .text-head-2{
            font-size: 14px;
            padding: 3px 0px 24px 14px;
            color: #6e6d6d;
        }
        .text-blur{
            font-size: 14px;
            color: #a9acb0;
            padding: 0px 0px 0px 14px;
        }
        .text-blur-none{
        font-size: 14px;
        color: #717375;
        padding: 15px 0px 0px 4px;
    }
        .text-blur-small{
            font-size: 12px;
            color: #a9acb0;
            padding: 0px 0px 0px 14px;
        }
        .text-blur-small-left{
        font-size: 12px;
        color: #717375;
        /* margin-left: 500px; */
        }
        .text-head-catg
        {
            font-size: 20px;
            font-weight: bold;
            margin-left: 20px;
            padding: 10px 0px 10px 0px;
            
        }
       /* CreateEvent CSS */
        .input{
            width: 180px;
            height: 40px;
            margin-top: 0px;
            margin-bottom: 17px;
            margin-left: 15px;
            font-size: 15px;;
            padding: 5px;
            color: #666666;
            background-color: #ffffff;
            border-width: 1px;
            border-style: solid;
            border-bottom-color: #d8d8d8;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
        }
        .input-desc{
            width: 500px;
            height: 50px;
            margin-top: 8px;
            margin-bottom: 17px;
            margin-left: 17px;
            font-size: 15px;;
            padding: 5px;
            color: #666666;
            background-color: #ffffff;
            border-width: 1px;
            border-style: solid;
            border-bottom-color: #d8d8d8;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
        }
        
        .inout-check{
            width: 15px;
            height: 17px;
            margin-left: 15px;
        }
        .inout-radio{
            width: 16px;
            height: 18px;
            margin-left: 15px;
        }
            .high{
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 4px;
        padding-top: 4px;
        width: 30px;
        height: 18px;
        background-color: #eb9292;
        color:#FFF;
        font-size: 9px;
        border-radius: 2px;
        min-width: 44px;
        text-transform: uppercase;
        font-style: normal;
        margin: 1px 0px 18px 3px;
        
        }

        .medium{
            width: 60px;
            height: 18px;
            background-color: #e8bd55;
            padding: 4px 10px;
            color:#FFF;
            font-size: 9px;
            border-radius: 2px;
            min-width: 44px;
            text-transform: uppercase;
            font-style: normal;
            margin: 1px 0px 18px 3px;
        }
        .low{
            width: 40px;
            height: 18px;
            background-color: #a3d562;
            padding: 4px 10px;
            color:#FFF;
            font-size: 9px;
            border-radius: 2px;
            min-width: 44px;
            text-transform: uppercase;
            font-style: normal;
            margin: 1px 0px 18px 3px;
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
            border-radius: 2px;
        }
             /* Resource Center CSS */
        .text-head-bold{
            font-size: 15px;
            font-weight: bold;
            padding: 14px 0px 14px 14px;
            color: #6e6d6d;
            
        }
        .text-head{
            font-size: 14px;
            padding: 24px 0px 4px 14px;
            color: #6e6d6d;
        }
        .text-head-2{
            font-size: 14px;
            padding: 3px 0px 24px 14px;
            color: #6e6d6d;
        }
        .text-blur{
            font-size: 14px;
            color: #a9acb0;
            padding: 0px 0px 0px 14px;
        }
        .text-blur-none{
            font-size: 14px;
            color: #a9acb0;
            padding: 0px 0px 0px 4px;
        }
        .text-blur-small{
            font-size: 12px;
            color: #a9acb0;
            padding: 0px 0px 0px 14px;
        }
        .text-blur-small-left{
        font-size: 12px;
        color: #717375;
        /* margin-left: 500px; */
        }
        .text-head-catg
        {
            font-size: 20px;
            font-weight: bold;
            margin-left: 20px;
            padding: 10px 0px 10px 0px;
            
        } 
        .img-card{
            width: 30px;
            height: 30px;
        }
        .img-card-ser{
            width: 30px;
            height: 30px;
            position: absolute;
            margin-left: 433px;
        }
        .input{
            width: 180px;
            height: 40px;
            margin-top: 0px;
            margin-bottom: 17px;
            margin-left: 15px;
            font-size: 15px;;
            padding: 5px;
            color: #666666;
            background-color: #ffffff;
            border-width: 1px;
            border-style: solid;
            border-bottom-color: #d8d8d8;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
        }
        .input-desc{
            width: 500px;
            height: 40px;
            margin-top: 0px;
            margin-bottom: 17px;
            margin-left: 15px;
            font-size: 15px;;
            padding: 5px;
            color: #666666;
            background-color: #ffffff;
            border-width: 1px;
            border-style: solid;
            border-bottom-color: #d8d8d8;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
        }
        
        .inout-check{
            width: 15px;
            height: 17px;
            margin-left: 15px;
        }
        .inout-radio{
            width: 16px;
            height: 18px;
            margin-left: 15px;
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
    .select
    {
        border-bottom:3px solid;
        display: inline-table;
        background-color:white;
        width:98px;
        border-width: 1px;
        border-color: #f4f5f7;
        margin-left:15px;
        padding-top:19px;
        padding-bottom:30px;
        color: black;
        
    }
    .selectbor{
        border-bottom:2px solid;
        display: inline-table;
    }
        /* Resource Center CSS */
        .text-head-bold{
            font-size: 15px;
            font-weight: bold;
            padding: 14px 0px 14px 14px;
            color: #6e6d6d;
            
        }
        .text-head{
            font-size: 14px;
            padding: 24px 0px 4px 14px;
            color: #6e6d6d;
        }
        .text-head-2{
            font-size: 14px;
            padding: 3px 0px 24px 14px;
            color: #6e6d6d;
        }
        .text-blur{
            font-size: 14px;
            color: #a9acb0;
            padding: 0px 0px 0px 14px;
        }
        .text-blur-none{
            font-size: 14px;
            color: #a9acb0;
            padding: 0px 0px 0px 4px;
        }
        .text-blur-small{
            font-size: 12px;
            color: #a9acb0;
            padding: 0px 0px 0px 14px;
        }
        .text-blur-small-left{
        font-size: 12px;
        color: #717375;
        /* margin-left: 500px; */
        }
        .text-head-catg
        {
            font-size: 20px;
            font-weight: bold;
            margin-left: 20px;
            padding: 10px 0px 10px 0px;
            
        }
        .img-card{
            width: 30px;
            height: 30px;
        }
        .img-card-ser{
            width: 30px;
            height: 30px;
            position: absolute;
            margin-left: 433px;
        }
        .input{
            width: 180px;
            height: 40px;
            margin-top: 0px;
            margin-bottom: 17px;
            margin-left: 15px;
            font-size: 15px;;
            padding: 5px;
            color: #666666;
            background-color: #ffffff;
            border-width: 1px;
            border-style: solid;
            border-bottom-color: #d8d8d8;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
        }
        .input-desc{
            width: 300px;
            height: 40px;
            margin-top: 0px;
            margin-bottom: 17px;
            margin-left: 15px;
            font-size: 15px;;
            padding: 5px;
            color: #666666;
            background-color: #ffffff;
            border-width: 1px;
            border-style: solid;
            border-bottom-color: #d8d8d8;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
        }
        
        .inout-check{
            width: 15px;
            height: 17px;
            margin-left: 15px;
        }
        .inout-radio{
            width: 16px;
            height: 18px;
            margin-left: 15px;
        }
    }



</style>