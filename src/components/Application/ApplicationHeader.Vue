<template>

 
        <scroller class="scroller" scroll-direction="horizontal"> 
    <div class="app-tab" style="flex:1">

     <div class="tabapp"> 
       <div class="taba" style="flex-direction:row;">
      
       <text class=" tab-no" style="font-size:59px;color:color,">1</text>
       <div class="tab-t">
       <text  class="  title tab-index-font-size"    @click="jump('/benefit')" >Benefit</text>
       <text  class="  title tab-title"    @click="jump('/benefit')" >Illustrator</text>
       </div>

       <text class=" title tab-no" style="font-size:59px">2</text>
         <div class="tab-t">
       <text  class="title tab-index-font-size"  @click="jump('/proposalbenefit')" >Proposal</text>
       <text  class=" title tab-title"  @click="jump('/proposalbenefit')" >Fulfilment</text>
       </div>
         <text class=" title tab-no" style="font-size:59px">3</text>
         <div class="tab-t">
       <text  class="title tab-index-font-size"  @click="jump('/payment')" >Payment</text>
       <text  class=" title tab-title"  @click="jump('/payment')" >Options</text>
       </div>
         <text class=" title tab-no" style="font-size:59px">4</text>
         <div class="tab-t">
       <text  class="title tab-index-font-size"  @click="jump('/prepayview')" >Pre-pay</text>
       <text  class=" title tab-title"  @click="jump('/prepayview')" >Review</text>
       </div>
         <text class=" title tab-no" style="font-size:59px">5</text>
         <div class="tab-t">
       <text  class="title tab-index-font-size"  @click="jump('/document')" >Documents</text>
       <text  class=" title tab-title"  @click="jump('/document')" >Upload</text>
       </div>
       </div>
       
       
       </div>


 
    </div>
   </scroller>

</template>

<script>
  // import Header from '../components/header.vue'

 // import router from '../router'

  // import router from '../router'
// import mixins from './mixins'
// import router from '../router';

  export default {
    data(){
      return{
        color:'black'
      }
    },
    // components: { Header },

    methods:{
       jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        }
      // jump1(){
      //    this.$router.push('/test')
      // },
      // jump2(){
      //   console.log('we are on jump2')
      //    this.$router.push('/')
      // }

    }

  }
</script>

<style scoped>
  /* .tabbar {
    flex-direction: row;
    background-color: rgb(204, 210, 212);
     height: 130px;
  } */
  .tabapp {
    color:#565656;
    font-size:25px;
      
     flex:1;
         margin-left: 15px;
    /* justify-content: center; */
    /* text-align: center; */
    /* align-items: center; */
  }
  .tab-t{
flex-direction:colum;
margin-top:14px;
margin-left:10px;
  }
  .app-tab{
     flex-direction:row;
      flex-wrap: wrap;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    height: 80px;
  }
  .active {
    background-color: rgba(201, 24, 24, 0.2);
    transition: left 0.2s ease-in-out;
  }
  .icon {
    width: 35px;
    height: 50px;
  }
  .title {
        flex-direction:row;
    font-size: 25px;
      color:#9D9D9D

  }
  
   .tab-index-font-size {
  
    font-size: 18px;
    margin-right: 25px;
    text-align: end;
  }
  .tab-title{
    font-size: 18px;
    margin-left:0px;
  
  }
  .scroller {
    width: 750px;
  }
</style>
