<template>
<div>
      <lead-header></lead-header>

   <scroller class="scroller">
    <div class="wrapper">
      <div class="card">
       <div class="form-container">
          <div class="group">
         <text class="input"  @click="titleType">{{value}}</text>
        </div>
         <div class="group">
          <input class="input" type="text" placeholder="First Name"/>
        </div>
         <div class="group">
          <input class="input" type="text" placeholder="Middle Name"/>
        </div>
         <div class="group">
          <input class="input" type="text" placeholder="Last Name"/>
        </div>
           <div class="group" style="flex-direction:row;">
               <div><text class="input-date">{{date}}</text></div>
     <div> <text class="button" @click="pickDate">D</text></div>
   
    </div>
     <div class="group">
          <input class="input" type="tel" placeholder="Age"/>
        </div>
         <div class="group">
         <text class="input"  @click="genderType">{{value1}}</text>
        </div>
        <div class="group">
         <text class="input"  @click="martialType">{{value2}}</text>
        </div>
         <div class="card-btn">
           <text class="card-btn-text" @click="addChild()">Add Child Data</text>
    </div>
    </div>
  </div>
  
     <div class="card" v-if="childData ==true">
       <div class="form-container">
         <div class="group">
          <input class="input" type="text" placeholder="Child Name" v-model="name"/>
        </div>
        <div class="group">
          <input class="input" type="tel" placeholder=" Child Age"  v-model="age"/>
        </div>
         <div class="group">
         <text class="input"  @click="childGender">{{value3}}</text>
        </div>
        <div class="card-line row" style="flex-directon:row">
          <div class="card-btn">
        <text class="card-btn-text" @click="listChild()">Submit</text>
        
        </div>
    </div>
    </div>
               <scroller class="scrollor" scroll-direction="horizontal">   
     <div class="row" >

          <div class="card-message" v-if="submit==true">
          
                <div class="card-line row">
                    <text class="card-subtitle shif-left table-header">Name</text>
                    <text class="card-subtitle shif-left table-header">Age</text>
                    <text class="card-subtitle shif-left table-header">Gender</text>
                       <text class="card-subtitle shif-left table-header">Actions</text>
                </div>
          
                   <div v-for="(children, index) in child">
                    <div class="card-line row h-border">
                      <text class="card-subtitle shif-left">{{children.Name}} </text>
                      <text class="card-subtitle shif-left">{{children.Age}}  </text>
                      <text class="card-subtitle shif-left amount-shift-left">{{children.Gender}}</text>
                       <text class="card-subtitle shif-left amount-shift-left button-del" @click=removeChild(index)>D</text>
                    </div>
                  
                </div>
            
             
            </div>
          
        </div>
          </scroller>
           
  </div>
  <div clas="card">
      <div class="card-line row" style="flex-directon:row">
          <div class="card-btn-sub" @click="jump('/lead')">
        <text class="card-btn-text">Back</text>
        
        </div>
         <div class="card-btn-sub" @click="jump('/contact')">
           <text class="card-btn-text">Next</text>
    </div>
    </div>
  </div>
  
    </div>
   </scroller>
  </div>
  </template>

<script>
  import leadHeader from '../../components/lead-header.vue'

const items = ["Mr", "Mrs","Ms"];
  const gender = ["Male", "Female"];
  const martial = ["Single", "Married","Divorced","Widowed"];
  const childGender = [
  "Male",
  "Female"
];
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
      submit:false,
      child:[],
      name:'',
      age:''
    }
  },
  computed:{
  value() {
      if (this.index == -1) {
        return "Select";
      } else if (this.index < items.length) {
        return items[this.index];
      }
      return "";
    },
     value1() {
      if (this.index1 == -1) {
        return "Select Gender";
      } else if (this.index1 < gender.length) {
        return gender[this.index1];
      }
      return "";
    },
      value2() {
      if (this.index2 == -1) {
        return "Select Martial Status";
      } else if (this.index2 < martial.length) {
        return martial[this.index2];
      }
      return "";
    },
     value3() {
      if (this.index3 == -1) {
        return "Select Child Gender";
      } else if (this.index3 < childGender.length) {
        return childGender[this.index3];
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
  addChild(){
     // this.child.push(1)
     this.childData = true
  },
  listChild(i){
    this.submit = true
     this.child.push({
       Name:this.name,
       Age:this.age,
       Gender:this.value3
     })
     console.log(this.child)
  },
  removeChild(i){
    this.child.splice(i,1)
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
    martialType() {
      picker.pick(
        {
          index: this.index2,
          items: martial
        },
        event => {
          if (event.result === "success") {
            this.value2 = items[event.data];
            this.index2 = event.data;
          }
        }
      );
    },
    childGender() {
      picker.pick(
        {
          index: this.index3,
          items: childGender
        },
        event => {
          if (event.result === "success") {
            this.value3 = items[event.data];
            this.index3 = event.data;
          }
        }
      );
    },
 
    pickDate() {
      picker.pickDate(
        {
          value: this.date
        },
        event => {
          if (event.result === "success") {
            this.date = event.data;
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
   width:50px;
   height:50px;
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
.button-del{
  width:50px;
  height:50px;
  font-size: 23px;
  color: #41b883;
   border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
    margin-left: 20px;
    padding: 10px;
    align-items:center;
}
  .h-border {
      border-width: 2px;
		  border-style: solid;
		  border-top-color: #fff;
		  border-right-color: #fff;
		  border-left-color: #fff;
		  border-bottom-color: #f1f0f0;
    }
  
  .card-header {
    height: 100px;
    background-color: #e6e6e6;
    
  }
  
  .card-head-title {
    font-size: 30px;
    /*background-color: gray;*/
    width: 400px;
  }


  
  .group { 
		position:relative; 
		margin-top: 20px;
		/*background-color: yellow;*/
	}
	


  .text-wraper {
    align-items: center;
  }

  .row {
    flex-direction: row;
    padding-left:15px;
  }

  .card-title {
    padding-left:15px;
    font-size: 36px;
    color: #666666;
    margin-top: 10px;
    padding-bottom: 6px;
  }
  .card-line {
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  
  .card-subtitle {
    font-size: 30px;
    width: 210px;
    color: #07152a;
    margin-bottom:10px;
    /*font-weight: bold;*/
    /*background-color: yellow;*/
  }
 

  
  .card-message {
    margin-top: 20px;
  }
  
  .shif-left {
    /*background-color: red;*/
    margin-left: 0px;
    text-align: center;
  }
  
  .amount-shift-left {
    text-align: center;
  }
  
  .title {
    font-size: 45px;
    font-weight: bold;
  }
 
   .scrollor {
    width:800px;
    height:300px;
    /*background-color: #EFEFEF;*/
  }
  
  .new-row {
     flex-direction: column;
     /*background-color: blue;*/
    margin-left: 50px;

  }

  .table-header {
    font-weight: bold;
  }
</style>
