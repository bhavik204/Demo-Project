<template>
  <div>

    <div  class="lead-tab">
<text class="tab1"  @click="jump('/lead')" >Lead</text>
<text class="tab"  @click="jump('/dashboard')" >Home</text>
<text class="tab"  @click="jump('/application')"  >Application</text>

    </div>
    <!-- <Header></Header> -->
          <scroller class="scroller" scroll-direction="horizontal">
    <div class="tabbar">
      <!-- <div  class="tab" @click="jump('/lead')">
        <text class="title">Lead</text>
      </div>
      <div  class="tab" @click="jump('/dashboard')">
        <text class="title">Home</text>
      </div>

      <div  class="tab" @click="jump('/application')">
        <text class="title">Application</text>``
      </div> -->
      
<!-- <text class="tab"  @click="jump('/lead')" >Lead</text>
<text class="tab"  @click="jump('/dashboard')" >Home</text>``
<text class="tab"  @click="jump('/application')"  >Application</text> -->


      <!-- <div  class="tab" @click="jump('/prepayview')">
        <text class="title">PrePay</text>
      </div>
       <div  class="tab" @click="jump('/proposalbenefit')">
        <text class="title">Proposal</text>
      </div>
      <div  class="tab" @click="jump('/payment')">
        <text class="title">Payment</text>
      </div>
       <div  class="tab" @click="jump('/document')">
        <text class="title">Document</text>
      </div>
      <div  class="tab" @click="jump('/dashboard')">
        <text class="title">Dashboard</text>
      </div> -->

    </div>
      </scroller>
  </div>
</template>

<script>
  // import Header from '../components/header.vue'

 // import router from '../router'

  // import router from '../router'
// import mixins from './mixins'
// import router from '../router';

  export default {
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
  .tabbar {
    /* display: flex; */
    flex-direction: row;
    /* flex:1; */
    background-color: rgb(204, 210, 212);
    flex-wrap: wrap;
  }
  .lead-tab{
      height: 80px;
flex-direction:row;
flex-wrap: wrap;
background-color: black;
  }
  .tab {
    height: 80px;
    font-size: 25px;
    color: #fff;
    /* width: 150px; */
    flex:1;
     margin-top:22px;
    /* align-items: center; */
    
    
  }
   .tab1 {
    height: 80px;
    font-size: 25px;
    color: #fff;
    /* width: 150px; */
    flex:1;
     margin-top:22px;
     margin-left:25px;
    /* align-items: center; */
    
    
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(100, 100, 100, 0.2);
    transition: left 0.2s ease-in-out;
  }
  .icon {
    width: 35px;
    height: 50px;
  }
  .title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
  .scroller {
    /* width: 1200px; */
  }

</style>
