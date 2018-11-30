<template>
        <div>
             
            
                <div class="main-container">
                   
                    <div class="list-box">
                        <div class="card">
                                <div class="card-content-row">
                                        <div class="date" >
                                                <div class="tab-heading"><text class="tab-head">Search Event</text></div>
                                        </div>
                                    <div class="list-fiter">
                                        <div><image class="cal-icn" src="http://salesdrive.iorta.in/img/calendar/filter-gray.png"></image></div>
                                        <div class="select-text"><text class="date-txt" @click="filterPopUp =! filterPopUp">Select Filters</text></div>
    
                                         <!-- filter card start -->
                                         <scroller class="scroller">
                                        <div v-if="filterPopUp == true">
                                            
                                             <div class="card border shadow filter-card">
                <div class="row " style="flex-flow: row-reverse nowrap; margin-right:18px;">
                    <div><text class="text-sml" style="margin-left: 600px;">Reset</text></div>
                </div>
              <div class="row row-direction-change" >
                  <div class="col" style="flex: 3;" > 
                      <text class="text-big" style="margin-left: 15px;">Type</text>
                      <div class="card-content">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="text-med mouse-pointer" style=" align-self: center;">Policy Renewals</text>
                      </div>
                      <div class="card-content">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="text-med mouse-pointer" style=" align-self: center;">Application Stage </text>
                      </div>
                      <div class="card-content">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="text-med mouse-pointer" style=" align-self: center;">Advisor Training</text>
                      </div>
    
                      <div class="card-content">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="text-med mouse-pointer" style=" align-self: center;">Contests </text>
                      </div>
    
                      <div class="card-content">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="text-med mouse-pointer" style=" align-self: center;">Client Birthdays</text>
                      </div>
                      <div class="card-content">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="text-med mouse-pointer" style=" align-self: center;">Client Appointment</text>
                      </div>
                  </div>
                  <div class="col" style="flex: 3;"> 
                      <text class="text-big"style="margin-left: 15px;margin-top: 18px;margin-bottom:10px">Time</text>
                      <text class="text-med" style="margin-left: 15px;">Select Date Range </text>
                      <div class="row">
                        <input type="date" placeholder="From" style="margin-left: 15px;margin-bottom:8px" class="text-med-cal add-border"  max="2017-12-12" min="2015-01-01"/>
                        <!-- <image class="cal-icn-cal mouse-pointer" @click="pickDate" src="http://salesdrive.iorta.in/img/calendar.png"></image> -->
                      </div>
                      <div class="row">
                        <input type="date" placeholder="To" style="margin-left: 15px;margin-bottom:8px" class="text-med-cal add-border"  max="2017-12-12" min="2015-01-01"/>
                        <!-- <image class="cal-icn-cal mouse-pointer" @click="pickDate" src="http://salesdrive.iorta.in/img/calendar.png"></image> -->
                      </div>  
                  </div>
                  <div class="col" style="flex: 2;"> 
                      <text class="text-big"style="margin-left: 15px;margin-top: 18px;margin-bottom:10px">Priority</text>
                      <div class="card-content">

                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="text-med mouse-pointer" style=" align-self: center; margin-left: 3px;">None</text>
                      </div>
                      <div class="card-content" style="margin-bottom:18px;">

                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="high mouse-pointer" style=" align-self: center;">High</text>
                      </div>
                      <div class="card-content" style="margin-bottom:18px;">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="medium mouse-pointer" style=" align-self: center;">Medium</text>
                      </div>
                      <div class="card-content" style="margin-bottom:18px;">
                          <!-- <image class="cal-icn "  src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image> -->
                          <text class="low mouse-pointer" style=" align-self: center;">Low</text>
                      </div>
                  </div>
              </div>
                  <div class=" cardrow " >
                        <div class="card-btn2">
                            <text class="card-btn-text" @click="jump('/reviewevent')">Cancel</text>
                        </div>
                        <div class="card-btn1">
                            <text class="card-btn-text" @click="jump('/reviewevent')" >Apply</text>
                        </div>
                  </div>  
          </div>
    
                                        </div> 
                                         </scroller>
                                        <!-- filter card end -->
    
                                    </div>
                                   
                    </div>
                    <div class="sel-box add-border" style="flex-direction:row;margin-top:15px;">                              
                        <!-- <div   @click="cross(data)"><image  class="cal-icn" src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image></div>  -->
                        <div><text class="text-big" style="padding-left:30px;">Select All</text></div>
                    </div>

                    <div v-for="(appt,pi) in appointment" :key="pi">
        
                    <div class="card-message" v-for="(appt,pi) in appointment" :key="pi" >
                        <div class="card-msg-left">
                       
                        <!-- <div class="checkbox"><image  class="cal-icn" src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image></div>  -->
                        <div class="time-slot" style="flex:1;">
                            
                            <div><text class="text-med" style="margin-left:8px;">{{appt.TimeFrom}}</text></div>
                            <div><text class="text-med" style="margin-left:8px;">{{appt.TimeTo}}</text></div>
                        </div>
                        <div class="meeting-list"  style="flex:5;justify-content: space-evenly">
                            <div style="align-self:left"> <text class="text-med">{{appt.Details}}</text></div>
                            </div>
                        </div>
                        <div class="card-msg-right">
        
                            <div> <text class="text-sml">15 Mins Before</text></div>
                            <div><image class="cal-icn" @click="jump('/createvent')" src="https://www.materialui.co/materialIcons/image/edit_black_192x192.png"></image></div>
                            <div ><image class="cal-icn" src="https://www.materialui.co/materialIcons/action/delete_black_192x192.png"></image></div>


                        </div>
                    </div>
                    </div>
            </div>
        </div>
        <div class="button-box">
            <div class="card" style="flex-direction:row;justify-content:flex-end;padding:10px;">
                    <div class="card-btn1" @click="jump('/reschedule')">
                        <text class="card-btn-text" >Reschedule</text>
                    </div>
                    <div class="card-btn1">
                        <text class="card-btn-text" >Delete</text>
                    </div>
            </div>
        </div>
    </div>

</div>
    
    </template>
    
    <script>
const items = ['Option 1','Option 2','Option 3','Option 4','Option 5'];
const gender = ['Option 1','Option 2','Option 3','Option 4','Option 5'];
  const childgender = ['Option 1','Option 2','Option 3','Option 4','Option 5'];
  const picker = weex.requireModule("picker");

//   import { WxcCheckbox} from 'weex-ui'
  const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
        export default {
            created() {
                this.$store.commit('SET_PAGE_TITLE', 'ReviewEvents');
        if (typeof WXEnvironment === 'object') {
        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
        }
        },
      data(){
          return{
            platform: invalid,
            headerName:' Calender',
            filterPopUp : false,
            selected:'',
            index: -1,
            index1: -1,
            index2: -1,
                    showData:false,
                    listItems: ["App No.", "Cust. ID", "Name", "Mobile No."],
                    eventTypeWeb:['Option 1','Option 2','Option 3','Option 4','Option 5'],
                     genderWeb : ['Option 1','Option 2','Option 3','Option 4','Option 5'],
                childgenderWeb : ['Option 1','Option 2','Option 3','Option 4','Option 5'],
            appointment: [
            {
                Slot:'AM (till 11:59am)',
              Day: "Fri",
              Date: "03",
              TimeFrom: "8:00",
              TimeTo: "8:30",
              Details: "Meeting with Catie",
              Priority: "High"
            },
            {
                 Slot:'Lunch',
              Day: "Fri",
              Date: "03",
              No: "2",
              TimeFrom: "8:30",
              TimeTo: "9:00",
              Details: "Renew Policy Number 32456789",
              Priority: "Low"
            },
            {
                   Slot:'Lunch',
              Day: "Fri",
              Date: "03",
              No: "3",
              TimeFrom: "9:00",
              TimeTo: "9:30",
              Details: "Internal Meeting about Sales Force on 3rd Floor",
              Priority: "High"
            }
          ]
          }
      },
      computed:{
        value() {
        if (this.index == -1) {
          return "Select An Event ";
        } else if (this.index < items.length) {
          return items[this.index];
        }
        return "";
      },
      value1() {
        if (this.index1 == -1) {
          return "Select ";
        } else if (this.index1 < gender.length) {
          return gender[this.index1];
        }
        return "";
      },
      value2() {
        if (this.index2 == -1) {
          return "Select ";
        } else if (this.index2 < childgender.length) {
          return childgender[this.index2];
        }
        return "";
      },
      },
      methods:{
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        calculatorType() {
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
      genderType() {
        picker.pick(
          {
            index: this.index1,
            items: gender
          },
          event => {
            if (event.result === "success") {
              this.value1 = items[event.data];
              this.index1 = event.data;
            }
          }
        );
      },
      childgenderType() {
        picker.pick(
          {
            index: this.index2,
            items: childgender
          },
          event => {
            if (event.result === "success") {
              this.value2 = items[event.data];
              this.index2 = event.data;
            }
          }
        );
      },
        dropListAutoHide() {
            console.log("TEST")
                  this.showData = !this.showData
                  
                },
                pickItems(list,index) {
                    console.log(list,index)
                   
                   
                    this.selected = this.listItems[index];
                    console.log(this.selected + '' + index)
                     this.showData = !this.showData;
                   return this.selected
                  
                },
      }
        }
    
    </script>
    
<style scoped>
    /* review event css */
    .text-big{
        font-size: 27px;
        color: #6e6d6d;
    }
    .text-med{
        font-size: 22px;
        color: #6e6d6d;
    }
    .text-sml{
        font-size: 18px;
        color: #949090;
    }
    .text-big-bold{
        font-size: 27px;
        font-weight: bold;

    }
    .scroller01{
        height: 2500px;
    }
    /* @@ */
text2{
font-size:12px;
}
select{
padding:10px;
}
.filter-card{
position: fixed;
top:150px;
right:27px;
z-index:9999;
}

.main-container {
flex-direction: column;
flex:1;
background-color:lightgrey;
}
.filter-box{
flex-direction:row;
flex:1;
/* background-color: #d8d6d6; */
margin-right: 20px;
margin-left: 20px;
}
.input{
/* background-color: #d8d8d8; */
}

.tab-head {
font-size: 18px;
margin-top: 8px;

}
.tab-head-top{
font-size: 15px;
margin-top: 8px;
padding-bottom: 4px;
padding-top: 4px;

}
.top-color{
color:#9d9d9d;
}

.card {
margin-top: 20px;
margin: 20px;
margin-bottom: 0px;
background-color: #fff;
border-radius: 5px;
border-width: 1px;
border-style: solid;
border-color: transparent;
}
.card-content {
flex-direction: row;
margin-left: 28px;
/* justify-content: space-between; */
}
.card-content-row {
flex-direction: row;
justify-content: space-between;
}
.cal-icn {
height: 40px;
width: 40px;
margin-top: 5px;
}

.date {
flex-direction: row;
padding-top: 20px;
padding-left: 20px;
}
.date-txt {
font-size: 12.5px;
margin-top: 4px;
text-align: center;
margin-bottom: 2px;
}
.list-fiter {
flex-direction: row;
justify-content: flex-end;
padding-top: 20px;
padding-right: 20px;
}
.card-msg-left{
flex:1;
flex-direction: row;
}
.card-msg-right {
flex-direction: row;
margin-right: 10px;
align-items: center;

}
.card-message {
flex-direction: row;
border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-left-color: #fff;
border-right-color: #fff;
border-bottom-color: #d8d8d8;

}
.border{
border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-left-color: #fff;
border-right-color: #fff;
border-bottom-color: #d8d8d8;  
}
.rem-txt-list-time{
font-size: 12px;
margin-top:5px;
color:#9d9d9d
}
.card-btn1 {
background-color: #505050;
margin-top: 5px;
width: 120px;
height: 50px;
margin-right:40px;
justify-content: center;
}
.card-btn-text {
color: #ffffff;
font-size: 15px;
text-align: center;
}
.checkbox{
justify-content: center;
}

.drop-down {
position: relative;
border-width: 1px;
border-style: solid;
border-top: none;
border-right: none;
border-left: none;
border-bottom-color: #cccccc;
}

.select-box {
padding-top:8px;
padding-bottom: 8px;
padding-left: 5px;
padding-right: 5px; 
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
/* background-color: red; */
position: absolute;
top: 6px;
left: 89%;
}

.drop-item-list {
z-index: 4;
min-width: 100%;
background: rgb(255, 255, 255);
position: absolute;
top: 30px;
left: 0;
/* width: 100%; */
}

.mouse-pointer {
cursor: pointer;
}

.list-item-padding {
padding-top:10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px; 
}

/* Drop Down Code End Here */

.shadow {
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}

/* filter css start */
.cal-icn {
height: 35px;
width: 35px;
margin-top: 5px;
padding-left: 8px;
}
.texthead{
display: flex;
color: #565656;
font-size: 30px;
font-weight: 600;
margin-bottom: 20px;
padding-left: 8px;
}
.textsub{
font-size: 26px;
color: #565656;
margin-bottom: 20px;
top:6px;
padding-left: 8px;
}
.textsub-cal{
font-size: 18px;
color: #565656;
margin-bottom: 20px;
top:6px;
padding-left: 8px;
}
.border
{
border-width: 1px;
border-color: #565656;
}
.high{
padding-left: 12px;
padding-right: 12px;
padding-bottom: 8px;
padding-top: 8px;
background-color: #eb9292;
color:#FFF;
font-size: 12px;
border-radius: 2px;
min-width: 44px;
text-transform: uppercase;
font-style: normal;
margin-left: 8px;

}

.medium{
background-color: #e8bd55;
padding: 8px 12px;
color:#FFF;
font-size: 12px;
border-radius: 2px;
min-width: 44px;
text-transform: uppercase;
font-style: normal;
margin-left: 8px;
}
.low{
background-color: #a3d562;
padding: 8px 12px;
color:#FFF;
font-size: 12px;
border-radius: 2px;
min-width: 44px;
text-transform: uppercase;
font-style: normal;
margin-left: 8px;
}
.cal-icn-cal {
height: 18px;
width: 18px;
margin-top: 5px;
}
.add-border {
border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-right-color: #fff;
border-left-color: #fff;
border-bottom-color: #e7e7e7;
}
.add-border-top {
border-width: 1px;
border-style: solid;
border-top-color: #d8d6d6;
border-right-color: #d8d6d6;
border-left-color: #d8d6d6;
border-bottom-color: rgb(185, 179, 179);
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
.shadow{
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
}
.row-direction-change {
flex-direction: column; 

}
/* djhsd */


/* Medium Device Laptops and Desktops */

/* Small Device / Tab */
@media (min-width: 768px) {

.card {
background-color: #ffffff;
padding-top: 10px;
padding-right: 10px;
padding-left: 10px;
padding-bottom: 10px;
border-radius: 2px;
}
.texthead{
display: flex;
color: #565656;
font-size: 25px;
font-weight: 600;
margin-bottom: 20px;
padding-left: 8px;
}
.textsub{
font-size: 24px;
color: #565656;
margin-bottom: 20px;
top:6px;
padding-left: 8px;
}     

}


/* iphone */
@media (min-width: 320px) {

.row {
flex-direction: row;
background-color: #ffffff;
}

.row-direction-change {
flex-direction: column; 

}
.texthead{
display: flex;
color: #565656;
font-size: 15px;
font-weight: 600;
margin-bottom: 20px;
padding-left: 8px;
}
.textsub{
font-size: 14px;
color: #565656;
margin-bottom: 20px;
top:6px;
padding-left: 8px;
}
.textsub-cal{
font-size: 12.5px;
color: #565656;
margin-bottom: 20px;
top:6px;
padding-left: 8px;
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
.shadow {
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}
}

@media (min-width: 992px) {

.row-direction-change {
flex-direction: row; 
}
/* .texthead{
display: flex;
color: #565656;
font-size: 15px;
font-weight: 600;
margin-bottom: 20px;
padding-left: 8px;
}
.textsub{
font-size: 14px;
color: #565656;
margin-bottom: 20px;
top:6px;
padding-left: 8px;
}   */

.card {
background-color: #ffffff;
padding-top: 10px;
padding-right: 10px;
padding-left: 10px;
padding-bottom: 10px;
border-radius: 2px;
}

.box {
padding-top: 5px;
padding-bottom: 5px;
padding-left: 5px;
padding-right: 5px;
}
/* This margin is used in browser only */
}


</style>