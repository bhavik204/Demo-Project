<template>
  <div>
      <app-header></app-header>
              <!-- <inner-header  headeTitle="Lead"></inner-header> -->

      <div class="wrapper" style='margin-top:200px'>
        <text class="btn-test"  @click.native='checkroute()'>Go to Home Using method</text>

        <text class="btn-test"  @click.native="jump('app-view')">Jump-mixin</text>


                                <label class="container-chk">Has Health Insurance (Add Family Dependants)
                                  <input type="checkbox" checked="checked">
                                  <span class="checkmark"></span>
                                </label>




                                    <text class="container-radio ">Three
                                          <input type="radio" checked="checked" name="radio">
                                      <span class="checkmark-rd"></span>
                                    </text>
                                    <text class="container-radio">one
                                          <input type="radio"  name="radio">
                                      <span class="checkmark-rd"></span>
                                    </text>
                                    <text class="container-radio">Two
                                          <input type="radio"  name="radio">
                                      <span class="checkmark-rd"></span>
                                    </text>



<scroller class="scroller">
      <wxc-checkbox title="default"></wxc-checkbox>
      <wxc-checkbox title="default checked"
                    :checked="true"></wxc-checkbox>
      <wxc-checkbox title="unchecked and disabled"
                    :disabled="true"></wxc-checkbox>
      <wxc-checkbox title="checked and disabled"
                    :disabled="true"
                    :checked="true"></wxc-checkbox>
      <div class="margin">
        <wxc-checkbox-list :list="list"
                           @wxcCheckBoxListChecked="wxcCheckBoxListChecked"></wxc-checkbox-list>
        <text class="checked-text">checked list {{checkedList.toString()}}</text>
      </div>
    </scroller>



        <div ref="box"  class="box">
          <text class="info">Width: {{size.width}}</text>
          <text class="info">Height: {{size.height}}</text>
          <text class="info">Top: {{size.top}}</text>
          <text class="info">Bottom: {{size.bottom}}</text>
          <text class="info">Left: {{size.left}}</text>
          <text class="info">Right: {{size.right}}</text>
        </div>
        
        <text class="info btn"  @click='click()'>{{this.tip}}</text>

      </div>


  </div>
</template> 

<script>
    import { WxcCheckbox,WxcCheckboxList } from 'weex-ui'

  const dom = weex.requireModule('dom')
  import AppHeader from '../components/header.vue'

 function round(size) {
      var roundSize = {
        'width': Math.round(size.width),
        'height': Math.round(size.height),
        'top': Math.round(size.top),
        'bottom': Math.round(size.bottom),
        'left': Math.round(size.left),
        'right': Math.round(size.right)
      }
      return roundSize
  }

  export default {

    created() {
      this.$store.commit('SET_PAGE_TITLE' , 'Title_dk1 Test viewport');
    },
    computed() {
        // this.$store.commit('SET_PAGE_TITLE' , this.Title_dk);
        // commit('SET_PAGE_TITLE' , 'dktitlesetbycommit')
        console.log('created methods')
    } ,
    data () {


      return {
        size: {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        Title_dk : "Title_dk1 nooo bhaijan testviewport",
        ref:"viewport",
        tip:"get box rect",
          list: [
        { title: 'option1', value: 1 },
        { title: 'option2', value: 2, checked: true },
        { title: 'option3', value: 3 },
        { title: 'option4', value: 4 }
      ],
      checkedList: [2]
      } 
    },
    components: { AppHeader , WxcCheckbox },
    mounted () {



      // Use this code to show model@all page
      var self = this
      self.showmodal('Welcome to Sales drive' , 1);

      const result = dom.getComponentRect(this.ref, option => {
        console.log('getComponentRect:', option)
        this.size = round.call(this,option.size);
      })
    },
    
    methods:{

      checkroute(){
        // Use this code to route by programming / consume global Route
        this.$router.push('home')
      },
      click:function() {
        if (this.ref === 'viewport') {
          this.ref = this.$refs.box;
          this.tip = "get viewport rect"
        } else {
          this.ref = 'viewport'
          this.tip = "get box rect"
        }
          
         const result = dom.getComponentRect(this.ref, option => {
          console.log('getComponentRect:', option)
          this.size = round.call(this,option.size);
        })
      },
      wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
      }
    }
    
  }
</script>

<style scoped>
  .btm-test {
      text-align: center;
      margin-bottom: 30px;
      cursor: pointer;
  }
  .btn {
    margin-top:20px;
    border-width:2px;
    border-style: solid;
    border-radius:10px;
    width:300px;
    margin-left:170px;
    padding-left:35px;
    border-color: rgb(162, 217, 192);
    
  }
  .btn:active {
    background-color: #8fbc8f;
		border-color: gray;
  }
  
  .box {
    align-items:center;
    margin-left: 150px;
    width: 350px;
    height: 400px;
    background-color: #DDD;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .info {
    font-size: 40px;
    top:30px;
    margin-left:20px;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
    color: #41B883;
  }

    @media (min-width: 992px) {
    
      .weex-toast {
        left: none;
        bottom:none;
            top: 40px !important;
            right: 0 !important;
            font-size: 14px !important; 
      }
    }




</style>