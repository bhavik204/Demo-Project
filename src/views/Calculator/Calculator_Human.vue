<template>
    <div style="background-color: #f7f7f7;">
    <scroller >
    

  <div class="first-container"> 
<div class="card-calculator-human" style="flex:2">
        <div class="txt-mb-20">
            <text  class="heading-calhuman">How much life insurance you should have?</text>
        </div>
          <div class="set-flex-wrapper">
            <div style="flex:1" class="txt-mb-20">
                <vx-input-box
                    vx-label="Current Age"
                    vx-placeholder="Enter Current Age"
                    :vx-model="ageVal"
                        @valueReading="ageVal=$event.value">
                </vx-input-box>
            </div>
            <div style="flex-direction: column;flex:1" class="table-row-col-details txt-mb-20">
                    <vx-input-box
                        vx-label="CurrentMonthly Income"
                        vx-placeholder="Enter CurrentMonthly Income"
                        :vx-model="monthlyInc"
                            @valueReading="monthlyInc=$event.value">
                    </vx-input-box>
            </div>
          </div>
     
          <div class="set-flex-wrapper" >
            <div style="flex:1" class="txt-mb-20">
                  <vx-input-box
                    vx-label="Age do you plan to retire"
                    vx-placeholder="Enter Age do you plan to retire"
                    :vx-model="ageRetire"
                        @valueReading="ageRetire=$event.value">
                </vx-input-box>
            </div>
            <div style="flex-direction: column;flex:1" class="table-row-col-details txt-mb-20">
                  <vx-input-box
                    vx-label="Current Monthly Savings"
                    vx-placeholder="Enter Current Monthly Savings"
                    :vx-model="monthSavings"
                        @valueReading="monthSavings=$event.value">
                  </vx-input-box>
            </div>
  
          </div>
      
        <div @click.native="calculate(ageVal,monthlyInc,ageRetire,monthSavings)"  v-if="platform === 'Web'" class="calcu-button-width" >
            <vx-primary-btn 
            class="cursor-pointer-globle"
            btn-name="Calculator"
            btn-icon="http://159.89.161.64:8081/web/assets/Calculator-white.png">
            </vx-primary-btn>
        </div>
        <div @click="calculate()" v-if="platform !== 'Web'" class="calcu-button-width" >
            <vx-primary-btn 
            btn-name="Calculator"
            btn-icon="http://159.89.161.64:8081/web/assets/Calculator-white.png">
            </vx-primary-btn>
        </div>


</div>
<div class="card-calculator-human ">
    <div  class="">
        <div class="ml-20">
        <text  class="heading-calhuman">Estimated Life Value?</text>
        </div>
      
        <div class="right-body-content ml-20">  
            <text  class="form-title ">You should insure your life with</text>
            </div>
        <div class=" right-body-content ml-20"> 
             <text  class="heading-content">&#8377 {{reqInsurance}}</text>
             </div>
          <div class="right-body-content ml-20"> 
              <text class="form-title right-body-content">Two Crore fifty seven lakhs seventy seven</text>
              </div>
    
  <div>
      <div class="right-body-content ml-20 mt-20">
          <text  class="form-title">Thus, extra monthly savings required</text>
      </div>
          <div class=" ml-20 mb-20">
            <text  class="form-title">1,20,396/ month to cover the shortfall</text>
          </div>
          </div>
          </div>

</div>  
    </div>
    <div class="bottom-container txt-mb-20">
      <div class="card-calculator-human ">
    <text  class="heading-calhuman">Plan for you?</text>
<div class="  table-style" style="flex:2">
<div style="flex:1" class="left-table">
    <text  class="heading-content">Increasing Insurance Plan</text>
    <div  style="flex-direction:row">
    <div class="" style="flex:0.9">
            <text style="" class="form-title">Dolor set amaret ipsum dolor set amare dolor set amaret ipsum dolor set amare</text>
        </div>
    <div  v-if="platform === 'Web'" class="calcu-button-width" @click.native="CalcPop(1)">
        <vx-primary-btn 
        class="cursor-pointer-globle"
        btn-name="Get Quote"
        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
        </vx-primary-btn>
    </div>
    <div  v-if="platform !== 'Web'" class="calcu-button-width" @click="CalcPop(1)">
        <vx-primary-btn 
        btn-name="Get Quote"
        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
        </vx-primary-btn>
    </div>
  </div>
  </div>
  <div style="flex:1" class="table-row-col-details" >
      <text style="flex:1" class="heading-content">Super Money Back Plan</text>
      <div  style="flex-direction:row">
      <div class="" style="flex:0.9">
            <text style="" class="form-title">Dolor set amaret ipsum dolor set amare dolor set amaret ipsum dolor set amare</text>
        </div>
      <div  v-if="platform === 'Web'" class="calcu-button-width" @click.native="CalcPop(1)">
        <vx-primary-btn 
        class="cursor-pointer-globle"
        btn-name="Get Quote"
        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
        </vx-primary-btn>
    </div>
    <div  v-if="platform !== 'Web'" class="calcu-button-width" @click="CalcPop(1)">
        <vx-primary-btn 
        btn-name="Get Quote"
        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
        </vx-primary-btn>
    </div>
    </div>
    </div>
  </div>

</div>
    </div>

</scroller>
<div v-if="showPop === true">
            <popup>
                <div class="to-do-flx-row to-do-task-title">
                    <div class="exist-insu-head">
                        <text class="to-do-title-font">Select the proposer</text>
                    </div>
                </div>

                <div class="">
                    <get-quote-popup></get-quote-popup>
                </div>
                
                    <div class="todo-footer to-do-flx-row-rvrs">
                        <div v-if="platform ==='Web'" class="calc-Popup-btn-width calc-Popup-btn-padding cursor-pointer-globle" style="">
                            <vx-primary-btn
                                btn-name="Next" 
                                btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" >
                            </vx-primary-btn> 
                        </div>
                        <div v-if="platform ==='Web'" class="calc-Popup-btn-width calc-Popup-btn-padding cursor-pointer-globle">
                            <vx-secondary-button 
                                btn-name="Cancel" 
                                btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
                                @click.native="CalcPop(2)">
                            </vx-secondary-button>
                        </div>
                    </div>
            </popup>
    </div>
</div>
</template>

<script>
    const items = ["Education", "Marriage"];
    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    import {
        WxcProgress,
        WxcSliderBar
    } from 'weex-ui'
    import childHeader from '../../components/Calculator/CalculatorHeader.vue'
     import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
     import vxPrimaryBtn from '../../components/vx-primary-button/vx-primary-button.vue'
    import calTab from './CalculatorTab.vue'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';
   import GetQuotePopup from '@/views/Calculator/GetQuotePopup.vue'
   import popup from '../Calendar/Todo-pop-up.vue'
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown


            }
        },
        components: {
            WxcProgress,
            WxcSliderBar,
            childHeader,
            calTab,
            vxInputBox,vxPrimaryBtn,
            vxSecondaryButton,
            GetQuotePopup,
            popup
        },
        data() {
            return {
                    reqInsurance:'N/A',
                    slength: 400,
                    srange: false,
                    smin: 0,
                    smax: 100,
                    svalue: 50,
                    sdefaultValue: 50,
                    sdisabled: false,
            
                ageVal: '',
                monthlyInc: '',
                ageRetire: '',
                // todaySavings: '',
                monthSavings: '',
                index: -1,
                uploading: false,
                progressVisible: false,
                timer: null,
                showPop:false,
            }
        },
        computed: {
            value() {
                if (this.index == -1) {
                    return "Select";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            },
        },
        methods: {
            calculate(a,b,c,d){
                var balInc = ((b-d)*12)
                var balAge =(c-a)
                var balInf = 0.03
var reqIns = (balInc * balAge * balInf)*balAge
console.log(this.reqInsurance.toLocaleString('en'))
this.reqInsurance = ( reqIns.toLocaleString('en'))

                 console.log(a,b,c,d)
               
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            genderType() {
                picker.pick({
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
            CalcPop(id) {
                switch (id) {
                    case 1:
                        this.showPop = true
                        break;
                    case 2:
                        this.showPop = false
                        break;
                }
            },
        }
    }
</script>

<style scoped>
    .txt-mb-20 {
        margin-bottom: 20px;
    }
    .scroller {
        /* width: 1500px; */
        /* width:  1000px; */
        /* flex-direction: row; */
    }
    
    .box {
        flex: 1;
    }
 
      .pt-10{
        padding-top: 10px;
    }
        .ml-20{
 /*padding-left: 20px;*/
    }
    .mb-20{
        padding-bottom: 20px
    }
    .mt-20{
 padding-top: 20px;
    }
    .right-body-content{
        padding-top: 10px;
    }
    .card-calculator-human  {
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 30px 20px;
    }
  
    
    .heading-calhuman {
        font-size: 25px;
        font-weight: bold;
        font-family:robotoregular;
    }
          .heading-content {
        font-size: 25px;
        padding-top: 10px;
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .form-title {
        font-size: 24px;
        font-family:robotoregular;
        /* padding-top: 10px; */
        color: #9d9d9d;
    }
    
    .col {
        display: flex;
        flex-direction: column;
        background-color: #e0e2e5;
    }
    /* .topheader{
        font-size: 17px;
        padding-left: 15px;
        padding-top: 20px;
        color: black;
    } */
    
    .tab-icn {
        width: 54px;
        height: 54px;
    }
    
    .table-row {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        flex-direction: column;
    }
    
    .table-row-col-details {
        margin-left: 0px;
    }
    
    .set-flex-wrapper {
        flex-direction: column;
    }
    
    .progress-width {
        width: 700px;
    }
    
    .left-table {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #ebebeb;
        border-bottom-color: #fff;
    }
    
    .input {
        display: block;
        background-color: #fff;
        font-size: 24px;
        padding: 5px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
        font-family:robotoregular;
    }
    
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        background-color: #e0e2e5;
        max-width: 100%;
    }
    
    .row-side-tab {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        background-color: white;
        max-width: 100%;
        padding-top: 9px;
        padding-bottom: 9px;
        flex: 1;
    }
    
    .img-side-tab {
        width: 16px;
        height: 16px;
        margin-right: 3px;
    }
    
    .size {
        height: 350px;
    }
    
    .slider {
        position: relative;
    }
    
    .btnrow {
        display: flex;
        flex-direction: row-reverse;
        padding-top: 20px;
    }
    
    .btn-color {
        background-color: #3b371e;
    }
    
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 40px;
        min-width: 88px;
        position: relative;
      
    }
    
    .md-btn-label {
        font-size: 21px;
        text-transform: uppercase;
        font-weight: 500;
      
        color: #fff;
        font-family:robotoregular;
    }
    
    .md-custom-btn:active {
       opacity:0.8;
    }
    
    .md-btn-width {
        width: 150px;
    }
    
    .card-btn {
        background-color: white;
        margin-top: 3px;
        padding: 4px 10px;
        justify-content: center;
    }
    
    .card-btn-text {
        color: black;
        font-size: 12px;
        font-weight: 600;
        text-align: center;
        font-family:robotoregular;
    }
    
    .card-btn:hover {
        background-color: #353535;
    }
    
    .card-btn-text:hover {
        color: white;
        font-weight: 600;
        font-family:robotoregular;
    }
    
    a {
        color: #0B4DAA;
      
    }
    
    .text2 {
        display: flex;
        color: #6e6d6d;
        font-size: 14px;
        flex-wrap: wrap;
        max-width: 100%;
        font-family:robotoregular;
    }
    
    .text2-sideTab {
        display: flex;
        color: #6e6d6d;
        font-size: 14px;
        font-weight: bold;
        flex-wrap: wrap;
        max-width: 100%;
        font-family:robotoregular;
    }
    
    .mouse-pointer {
      
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .add-border1 {
        border-width: 1px;
        border-radius: 3px;
        border-style: solid;
        border-top-color: #6e6d6d;
        border-right-color: #6e6d6d;
        border-left-color: #6e6d6d;
        border-bottom-color: #6e6d6d;
    }
    
    .card-border {
        border-width: 1px;
        border-style: solid;
        border-color: rgba(86, 86, 86, 0.47);
    }
    
    .selectbor {
        border-bottom: 3px solid;
        display: inline-table;
    }
    
    .card-border:hover {
        border-color: #4589e8;
      
    }
    
    .tab-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .tab-flex-row1 {
        flex-direction: row;
        flex-wrap: nowrap;
    }
    
    .tab-font-size {
        font-size: 25px;
        font-family:robotoregular;
    }
    
    .tab-text-font-size {
        font-size: 16px;
        color: gray;
        padding-top: 13px;
        font-family:robotoregular;
    }
    
    .tab-box-padding {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        margin-right: 38px;
    }
    
    .flex-row {
        flex-direction: column;
        flex-wrap: wrap;
    }
    /* For APK */
    
    .nx-flex-column {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .nx-flex-bt-marg {
        margin-bottom: 20px;
    }
    
    .flex-direction-change {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .flex-column {
        flex-direction: column;
    }
    
    .flex-row {
        flex-direction: row;
    }
     .calcu-button-width {
            width: 280px;
        }
    /* iphone */
    
    @media (min-width: 320px) {
         .calcu-button-width {
            width: 120px;
        }
    .txt-mb-20 {
        margin-bottom: 20px;
    }
               .ml-20{
 padding-left: 0px;
    }
    .mb-20{
        padding-bottom: 0px
    }
    .mt-20{
 padding-top: 0px;
    }
        .mobile-pt-10{
            padding-top: 10px
        }
        .card-calculator-human  {
            border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }


    
        .btn-color {
            background-color: #3b371e;
        }
        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
          
        }
        .md-btn-label {
            font-size: 21px;
            text-transform: uppercase;
            font-weight: 500;
          
            color: #fff;
            font-family:robotoregular;
        }
    .md-custom-btn:active {
       opacity:0.8;
    }

        .md-btn-width {
            width: 30%;
        }
        .tab-icn {
            width: 34px;
            height: 34px;
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            font-family:robotoregular;
            color: #9d9d9d;
        }
        .table-style {
            flex-direction: column;
            padding-top: 10px;
        }
        .table-row {
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            flex-direction: column;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .set-flex-wrapper {
            flex-direction: column;
        }
        .progress-width {
            width: 100%;
        }
        .heading-calhuman {
            font-size: 15px;
            /* padding-top: 20px; */
            font-weight: bold;
            font-family:robotoregular;
        }
         .heading-content {
        font-size: 15px;
        padding-top: 10px;
        font-weight: bold;
        font-family:robotoregular;
    }
        .md-btn-label {
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
          
            color: #fff;
            font-family:robotoregular;
        }
        /* .first-container{
        flex-direction: column;
      } */
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
            /* overflow: scroll; */
        }
        /* .col 
        {
            display: flex;
            flex-direction: row;
            background-color: #e0e2e5;
        }   */

        /* .row {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: auto;
            background-color: #e0e2e5;
            max-width: 100%;
        } */
        .selectbor {
            border-bottom: 3px solid;
            display: inline-table;
            border-color: black;
        }
           .left-table {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #fff;
    }
    }
    /* Small Device / Tab */
    
    @media (min-width: 768px) {
    .left-table {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #ebebeb;
        border-bottom-color: #fff;
    }
        .card-calculator-human  {
            margin:10px;
        }

          .mobile-pt-10{
            padding-top: 0px
        }
          .heading-calhuman {
            font-size: 15px;
            /*padding-top: 10px;*/
            font-weight: bold;
            font-family:robotoregular;
        }
         .right-body-content{
        padding-top: 10px;
    }
          /* .form-title {
            font-size: 14px;
            padding-top: 0px;
            font-family:robotoregular;
            color: #9d9d9d;
        } */
        .table-row {
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: column;
        }
        .md-btn-width {
            width: 20%;
        }
        .table-row-col-details {
             margin-left: 20px; 
        }
        .btn-space {
            margin-right: 10px;
        }
        .set-flex-wrapper {
            flex-direction: row;
        }
        .tab-icn {
            width: 54px;
            height: 54px;
        }
        .table-style {
            flex-direction: row;
        }
        .first-container {
            flex-direction: row;
        }
        .scroller {
            /* display: none; */
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
        /* .row {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: auto;
            background-color: #e0e2e5;
            max-width: 100%;.table
        } */


        /* .col 
        {
            display: flex;
            flex-direction: row;
            background-color: #e0e2e5;
        }    */
    }
    /* Medium Device Laptops and Desktops */
    
   
        /* .table-style {
            flex-direction: row;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }
        /* This flex column is root and dose not change at diffrent view port */
        /* .outer-flex-col {
            flex-direction: column;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .tab-flex-row1 {
            flex-direction: row;
            flex-wrap: nowrap;
        }
        .tab-font-size {
            font-size: 25px;
            font-family:robotoregular;
        }
        .tab-text-font-size {
            font-size: 16px;
            font-family:robotoregular;
        }
        .tab-box-padding {
            margin-right: 40px;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-row {
            flex-direction: column;
        }
     
        /* This margin is used in browser only */
    
</style>