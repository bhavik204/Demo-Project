<template>
  <div>
       
      <scroller class="scroller">
          <div class="main-container">
              <div class="calendar-box">
                  <div class="card">
                  <div class="card-header">
                      <div class="tab-heading" @click="jump('/calendar')"><text class="tab-head">Upcoming</text></div>
                       <div class="tab-heading" @click="jump('/calendarday')"><text class="tab-head">Day</text></div>
                       <div class="head-button" style="flex-direction:column">
                                            <div class="card-btn-head">
        <text class="card-btn-text-head" >Review Events</text>
        </div>
                             <div class="card-btn-head">
        <text class="card-btn-text-head" >Create Event</text>
        </div>
                       </div>
                  </div>

                  <div class="card-content">
                      <div class="date" >
                          <div ><image  class="cal-icn" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_black_192x192.png"></image></div>
                     <div class="date-text"><text class="date-txt">11th June 2016</text></div>
                     <div ><image  class="cal-icn" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png"></image></div>
                     <div><image class="cal-icn" src="https://www.materialui.co/materialIcons/action/date_range_black_192x192.png"></image></div>
                      </div>
                   <div class="list-fiter">
                       <div><image class="cal-icn" src="https://www.materialui.co/materialIcons/image/filter_black_192x192.png"></image></div>
                    <div class="select-text"><text class="date-txt">Select</text></div>
                   </div>
                  </div>
                  
                     <div v-for="(appt,pi) in appointment" :key="pi">
                      <div class="AM"><text class="am-txt">{{appt.Slot}}</text></div>
                      <div class="card-message" v-for="(appt,pi) in appointment" :key="pi" >
                      <div class="card-msg-left">
          
                       <div class="time-slot" style="flex:2">
                           <div><text class="date-txt">{{appt.TimeFrom}}</text></div>
                           <div><text class="date-txt">To</text></div>
                           <div><text class="date-txt">{{appt.TimeTo}}</text></div>
                       </div>
                       <div class="meeting-list"  style="flex:5"><text class="date-txt">{{appt.Details}}</text> </div>
                      </div>
                        <div class="card-msg-right">
                                                          <div class="card-btn1">
        <text class="card-btn-text" >{{appt.Priority}}</text>
        </div>
       <div> <text class="rem-txt-list-time">15 Mins Before</text></div>
          <div><image class="cal-icn"  src="https://www.materialui.co/materialIcons/image/edit_black_192x192.png"></image></div>
             <div ><image class="cal-icn" src="https://www.materialui.co/materialIcons/action/delete_black_192x192.png"></image></div>


                  </div>
                  </div>
                     </div>
              </div>
              </div>
          
          <div class="side-box">
              <div class="list-box">
               <div class="card">

                        <div class="list-header">
                      <div><text class="tab-head">To Do List</text></div>
                       
                       <div class="head-button" style="flex-direction:row">
             <div @click="showInput()"><image class="cal-icn"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image></div>
             <div @click="showDel = !showDel"><image class="cal-icn" src="https://www.materialui.co/materialIcons/action/delete_black_192x192.png"></image></div>
            
                       </div>
                       
                  </div>
                  <div class="list-details">
                    <div v-if="inp==true" style="flex-direction:row">
                       <div style="flex:6" > <input class="date-txt" style="border-style: solid; border-width:1px;
                        border-top-color: #fff;
                        border-left-color: #fff;
                        border-right-color: #fff;
                        border-bottom-color: #d8d8d8;" type="text" v-model="input"/></div>
                     <div style="flex:1"  @click="add(input)"><image class="plus-icn" src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image></div>
                     </div>

                    <div v-for="(data,index)  in List"   style="flex-direction:row;justify-content: space-between;padding:10px;   border-style: solid;border-width:1px;
                    border-top-color: #fff;
                    border-left-color: #fff;
                    border-right-color: #fff;
                    border-bottom-color: #d8d8d8"  >
                        <div style="flex:2" @click="cross(data)"><image  class="cal-icn" src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image></div>
                     <div style="flex:16"> <text  class="date-txt" style="font-size:24px;" :class="['data-Title', data.completed ? 'todo-title-completed' : '']">{{data.Title}}</text></div>
                      <div v-if="showDel==true" @click="del(index)"><image  class="cal-icn" src="https://www.materialui.co/materialIcons/action/delete_black_192x192.png"></image></div>
                    </div>
                  </div>
               </div>
               </div>
              <div class="remainder-box">
                  <div class="card">

                      <div class="list-header">
                    <div><text class="tab-head">Reminders</text></div>
                     
                     <div class="head-button" style="flex-direction:row">
           <div @click="showRemmBox()"><image class="cal-icn"  src="https://www.materialui.co/materialIcons/alert/add_alert_black_192x192.png"></image></div>
           <div @click="showRemmDel = !showRemmDel"><image class="cal-icn" src="https://www.materialui.co/materialIcons/action/delete_black_192x192.png"></image></div>
          
                     </div>
                     
                </div>
                <div class="list-details">
                  <div v-if="inpRemm==true" style="flex-direction:row">
                     <div style="flex:3" > <input class="date-txt" style="border-style: solid; border-width:1px;
                      border-top-color: #fff;
                      border-left-color: #fff;
                      border-right-color: #fff;
                      border-bottom-color: #d8d8d8;" type="text" v-model="inputRemm"/></div>
                     <div style="flex:3" >  <input type="time" style="border-style: solid; border-width:1px;
                      border-top-color: #fff;
                      border-left-color: #fff;
                      border-right-color: #fff;
                      border-bottom-color: #d8d8d8;" placeholder="Input Time" class="date-txt" v-model="inputRemmTime"/></div>

                   <div style="flex:1"  @click="addReminder(inputRemm,inputRemmTime)"><image class="plus-icn" src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image></div>
                   </div>

                  <div v-for="(data,index)  in Reminder"   style="flex-direction:row;justify-content: space-between; padding:10px;  border-style: solid;border-width:1px;
                  border-top-color: #fff;
                  border-left-color: #fff;
                  border-right-color: #fff;
                  border-bottom-color: #d8d8d8"  >
                      
                    <div style="flex:2"><image  class="cal-icn" src="https://www.materialui.co/materialIcons/action/check_circle_black_192x192.png"></image></div>
                    <div class="remainder-list" style="flex-direction:column;flex:16">
                   <div> <text  class="date-txt">{{data.Title}}</text></div>
                   <div class="remainder-time" style="flex-direction:row;justify-content: flex-end">
                      <div><image class="rem-icn"  src="https://www.materialui.co/materialIcons/social/notifications_black_192x192.png"></image></div>
                   <div> <text  class="rem-txt-time" >{{data.Time}}</text></div>
                    </div>
                  </div>
                    <div v-if="showRemmDel==true" @click="remmDel(index)"><image  class="cal-icn" src="https://www.materialui.co/materialIcons/action/delete_black_192x192.png"></image></div>
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
   const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

export default {
  created() {
              this.$store.commit('SET_PAGE_TITLE', 'Calendar Day');
            if (typeof WXEnvironment === 'object') {
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                this.platform = WXEnvironment.platform || unknown
                
            }
        },

  data() {
    return {
      deviceWidth:invalid,
                paltform:invalid,
                headerName:'Calendar',
      List:[
        {Title:'Renew Policy Numbers ADF2425',completed:false},
        {Title:'Renew Policy Numbers ADF2425',completed:false},
        {Title:'Renew Policy Numbers ADF2425',completed:false},
        {Title:'Renew Policy Numbers ADF2425',completed:false},
        {Title:'Renew Policy Numbers ADF2425',completed:false},
        {Title:'Renew Policy Numbers ADF2425',completed:false}
        ],
        Reminder:[
        {Title:'Renew Policy Numbers ADF2425',Time:'08:30',completed:false},
        {Title:'Renew Policy Numbers ADF2425',Time:'08:30',completed:false},
        {Title:'Renew Policy Numbers ADF2425',Time:'08:30',completed:false},
        {Title:'Renew Policy Numbers ADF2425',Time:'08:30',completed:false},
        {Title:'Renew Policy Numbers ADF2425',Time:'08:30',completed:false},
        {Title:'Renew Policy Numbers ADF2425',Time:'08:30',completed:false},
        ],
      title:'',
      input:'',
      inputRemm:'',
      inputRemmTime:'',
      inp:false,
      inpRemm:false,
      textDecoration:'none',
      color:'red',
      showDel:false,
      showRemmDel:false,
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
    };
  },
  methods:{
    jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
    onchange(event) {
        this.txtChange = event.value;
      },
    showInput(){
      this.inp = true;
    },
    showRemmBox(){
      this.inpRemm =true;
    },
    add(x){
      // this.inp = true;
      console.log(x);
       this.List.push({Title :x,
       completed: false})
       this.input=''
    },
    addReminder(x,y){
      // this.inp = true;
      console.log(x,y);
       this.Reminder.push({Title :x,
        Time:y,
       completed: false})
       this.input=''
    },
    cross(data){

      // this.textDecoration = 'line-through'
      data.completed = !data.completed
    },
    del(i){
      this.List.splice(i,1)
    },
    remmDel(i){
      this.Reminder.splice(i,1)
    }
  }
};
</script>
<style scoped>
   .main-container{
    flex-direction: column;
     }
.side-box {
  flex-direction: column;
  flex: 1;
}
.list-box {
  flex: 1;
}
.remainder-box {
  flex: 1;
}
.calendar-box {
  flex: 2;
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
.card-header {
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-style: solid;
  border-top-color: #fff;
  border-left-color: #fff;
  border-right-color: #fff;
  border-bottom-color: #d8d8d8;
}
.tab-heading{
  justify-content: flex-end;
}
.tab-head {
  font-size: 25px;
  margin-top: 8px;

}
.meeting-list{
  justify-content: center;
}
.date-slot{
  flex:1;
  padding-top:10px;
}
.date-txt {
   font-size: 24px;
    margin-top: 8px;
    text-align: center;
   }
   .rem-txt {
  font-size: 12px;
  margin-top:5px;
}
.rem-txt-list-time{
  font-size: 12px;
  margin-top:5px;
  color:#9d9d9d
}
.rem-txt-time{
  font-size:12px;
  margin-top:7px;
  color:#9d9d9d
}
.am-txt{
  padding: 10px;
  font-size: 14px;
  margin-top:5px;
  color:#434343
}

.head-button {
  padding-bottom: 10px;
  padding-right: 10px;
}
     .card-btn1 {
    background-color: #505050;
    margin-top: 5px;
    width: 60px;
    height: 30px;
    margin-right:40px;
    justify-content: center;
}
.card-btn-head{
  background-color: #505050;
    margin-top: 5px;
    width: 100px;
    height: 30px;
    justify-content: center;
}
.card-btn-text {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
}
.card-btn-text-head{
  color: #ffffff;
    font-size: 14px;
    text-align: center;
}
.card-content {
  flex-direction: row;
  justify-content: space-between;
}
.cal-icn {
  height: 40px;
  width: 40px;
  margin-top: 5px;
}
.plus-icn {
  height: 40px;
  width: 40px;
  /* margin-top: 5px; */
}
.rem-icn{
  height: 30px;
  width: 30px;
  margin-top: 5px;
}
.list-fiter {
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 20px;
}
.date {
  flex-direction: row;
  padding-top: 20px;
  padding-left: 20px;
}
.AM {
  background-color: #f4f4f4;
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
 .card-msg-left{
     flex:1;
     flex-direction: row;
   }
.card-msg-right {
  flex-direction: row;
  margin-right: 10px;
  align-items: center;

}
.date-slot{
    flex:2;
}
 .time-slot{
     flex:2;
   }
.list-header{
  flex-direction:row;
  justify-content: space-between;
  padding:5px;
}
.list-details{
  padding:10px;
}
.input {

    color: #666666;
    border-width: 2px;
    font-size: 14px;
    border-style: solid;
    border-color: #41B883;
    height: 30px;
  }
  .todo-title-completed {
    text-decoration: line-through;
  }
  @media only screen and (min-width: 992px){
    .rem-icn{
  height: 15px;
  width: 15px;
  margin-top: 5px;
}
  }

  @media only screen and (min-width: 992px){
    .date-txt {
   font-size: 12px;
    margin-top: 8px;
    text-align: center;
   }
   .tab-head {
  font-size: 14px;
  margin-top: 8px;

}
  }


 
   
</style>

