<template>
  <div>
    <!-- <Header></Header> -->
  
    <div class="lead-tab">
        
         
             <text class="tablead1"  @click="jump('/personal')" >Personal</text>
                <text class="tablead"  @click="jump('/contact')" >Contact</text>
                   <text class="tablead"  @click="jump('/professional')" >Education</text>
                    <text class="tablead"  @click="jump('/benifi')" >Existing</text>
                <text class="tablead"  @click="jump('/leadproduct')" >Product</text>
                  <text class="tablead"  @click="jump('/status')" >Status</text>
      <!-- <div  class="tab" @click="jump('/benifi')">
        <text class="title">benifi</text>
      </div>
      <div  class="tab" @click="jump('/contact')">
        <text class="title">Contact</text>
      </div>

      <div  class="tab" @click="jump('/personal')">
        <text class="title">personal</text>
      </div>
      <div  class="tab" @click="jump('/leadproduct')">
        <text class="title">product</text>
      </div>
       <div  class="tab" @click="jump('/professional')">
        <text class="title">professional</text>
      </div>
      <div  class="tab" @click="jump('/status')">
        <text class="title">status</text>
      </div> -->

    </div>
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
    flex-direction: row;
    background-color: rgb(230, 98, 10);
      flex-wrap: wrap;
  }
  .lead-tab{
    flex-direction:row;
    flex-wrap: wrap;
    background-color:#2E86C1  ;

  }
  .tablead {
      color:#F0F3F4;
    height: 80px;
    /* width: 150px; */
    font-size:25px;
    margin-top:50px;
     flex:1;
    /*justify-content: center;*/
    /*  text-align: center;*/
    /* align-items: center; */
  }
    .tablead1 {
      color:#F0F3F4;
    height: 80px;
    /* width: 150px; */
    font-size:25px;
    margin-top:50px;
    margin-left:10px;
     flex:1;
    /*justify-content: center;*/
    /*  text-align: center;*/
    /* align-items: center; */
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(248, 6, 6, 0.2);
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
  /* .scroller {
    width: 1200px;
  } */

</style>
