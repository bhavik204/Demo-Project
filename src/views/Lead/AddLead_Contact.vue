<template>
<div>
   <lead-header></lead-header>
   <scroller class="scroller">
    <div class="wrapper">
      <div class="card">
       <div class="form-container">
         <div class="group">
          <input class="input" type="text" placeholder="Address Line 1"/>
        </div>
         <div class="group">
          <input class="input" type="text" placeholder="Address Line 2"/>
        </div>
         <div class="group">
          <input class="input" type="text" placeholder="Address Line 3"/>
        </div>
         <div class="group">
         <text class="input"  @click="titleType">{{value}}</text>
        </div>
         <div class="group">
         <text class="input"  @click="cityType">{{value1}}</text>
        </div>
         <div class="group">
          <input class="input" type="tel" placeholder="Pincode"/>
        </div>
         <div class="group">
          <input class="input" type="tel" placeholder="Primary Mobile"/>
        </div>
         <div class="group">
          <input class="input" type="tel" placeholder="Secondary Mobile"/>
        </div>
         <div class="group">
          <input class="input" type="tel" placeholder="Landline No"/>
        </div>
         <div class="group">
          <input class="input" type="text" placeholder="Email ID"/>
        </div>
      <div class="card-line row" style="flex-directon:row">
          <div class="card-btn-sub" @click="jump('/personal')">
        <text class="card-btn-text">Back</text>
        
        </div>
         <div class="card-btn-sub" @click="jump('/professional')">
           <text class="card-btn-text">Next</text>
    </div>
    </div>
    
     
    </div>
  </div>

    </div>
   </scroller>
  </div>
  </template>

<script>
 import leadHeader from '../../components/lead-header.vue'
  const items = ["Goa", "Kerela","Gujarat"];
  const city = ["Mumbai", "Pune","Delhi","Kolkata"];
  const picker = weex.requireModule("picker");
export default {
    components: {
    //   WxcLightbox,
      leadHeader
    },
  data(){
    return{
      index:-1,
      index1:-1,
      index2:-1,
      index3:-1,
      date: "",
      childData: false,
      child:[]
    }
  },
  computed:{
  value() {
      if (this.index == -1) {
        return "Select State";
      } else if (this.index < items.length) {
        return items[this.index];
      }
      return "";
    },
     value1() {
      if (this.index1 == -1) {
        return "Select City";
      } else if (this.index1 < city.length) {
        return city[this.index1];
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
     cityType() {
      picker.pick(
        {
          index: this.index1,
          items: city
        },
        event => {
          if (event.result === "success") {
            this.value1 = items[event.data];
            this.index1 = event.data;
          }
        }
      );
    },
}
  
}
</script>

<style scoped>
.input {
  
  display: block;
  width: 600px;
  background-color: #fff;
  margin-left: 30px;
  font-size: 25px;
  padding: 20px;
  color: #666666;
  border-width: 2px;
  border-top: none;
  border-style: solid;
  border-top-color: #fff;
  border-right-color: #fff;
  border-left-color: #fff;
  border-bottom-color: #c7c7c7;
}
.input:focus{
    border-width: 3px;
     border-bottom-color: #2e4053;
}


.input-date{
  display: block;
  width: 420px;
  background-color: #fff;
  font-size: 25px;
  padding: 20px;
  margin-left: 30px;
  color: #666666;
  border-width: 2px;
  border-top: none;
  border-style: solid;
  border-top-color: #fff;
  border-right-color: #fff;
  border-left-color: #fff;
  border-bottom-color: #c7c7c7;
}
.input-date:focus{
    border-width: 3px;
     border-bottom-color: #2e4053;
}
/*.input:focus {
  outline: none;
}*/
.card{
  padding: 15px;
  width: 710px;
  margin: 20px;
  margin-top: 20px;
  margin-bottom: 0px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
}
.example{
  padding:20px;
}
.label{
  font-size: 23px;
}
.heading{
  padding:20px;
  font-size: 30px;
  font-weight: bold;
}
.heading1{
  padding:20px;
  font-size: 25px;
  font-weight: bold;
}
.heading2{
  padding:20px;
  font-size: 23px;
}
.card-btn {
    background-color: #505050;
    border-radius: 8px;
    margin-top: 30px;
    margin-left:20px;
    width: 210px;
    height: 60px;
    justify-content: center;
  /*  float: left;*/
  }
  .card-btn-sub {
    background-color: #505050;
    border-radius: 8px;
    margin-top: 30px;
    margin-left:100px;
    width: 210px;
    height: 60px;
    justify-content: center;
  /*  float: left;*/
  }
  .card-btn-text {
    color: #FFFFFF;
    font-size: 25px;
    text-align: center;
  }
  .text {
    lines: 10;
    font-size: 25px;
  }
  .chkbox{
    width:30px;
    height:30px;
  }
  .consent{
    padding:20px;
  }
  .group{
    margin-top:40px;
  }
  .button {
font-size: 23px;
    /* height: 50px; */
    width: 169px;
    color: #41b883;
    /* text-align: center; */
    /* padding-top: 25px; */
    /* padding-bottom: 25px; */
    /* border-width: 2px; */
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
    margin-left: 20px;
    padding: 10px;
}
.card-line {
  margin-top:30px;
   padding-top:10px;
   padding-bottom:10px;
 }
   .row {
    flex-direction: row;
    padding-left:5px;
  }
</style>
