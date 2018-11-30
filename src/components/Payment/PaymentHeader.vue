<template>
    
        <div class="card-payment prop-card-payment"  >
                <div  class="head-row-payment" style="flex-direction:row" >
                    <div>
                            <image class="cal-icn-payment" src="../../../web/assets/Proposalfulfilment2.png"
                            alt="notify"></image>
                    </div>
                        <div class="tab-content-payment" >  <text class="card-heading-payment">Online</text></div>
               
                     </div>
                <div  class="head-row-payment"  style="flex-direction:row" @click.native="jump('/master/payment')">
                    <div>
                            <image class="cal-icn-payment" src="../../../web/assets/personaldetails1.png"
                            alt="notify"></image>
                    </div>
                  <div   class="tab-content-payment">  <text class="sub-card-heading-payment">Cheque/Cash/DD</text></div>
         
               </div>
               <div class="head-row-payment" style="flex-direction:row" @click.native="jump('/master/payment')">
                <div>
                        <image class="cal-icn-payment" src="../../../web/assets/nominee2.png"
                        alt="notify"></image>
                </div>
                <div   class="tab-content-payment">   <text class="sub-card-heading-payment">Send Link For Payment</text></div>
                   </div>

            </div> 
</template>

<script>
      const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
export default{
    // created() {
    //         if (typeof WXEnvironment === 'object') {

    //             this.platform = WXEnvironment.platform || unknown
    //             this.deviceWidth = WXEnvironment.deviceWidth || unknown
    //               return this.deviceWidth
             
    //         }
    //     },

    methods:{
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        }
    },
 

}
</script>
<style >
.head-row-payment{
justify-content: start;
padding:10px;

/* border-width: 1px;
    border-top: none;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #ebebeb; */
}
.tab-content-payment{
    justify-content: center;
    margin-left: 10px;
    }
.head-row1-payment{

padding:10px;
justify-content: start;
}
.sub-card-heading-payment {
    
    font-size: 13px;
    color:#565656;
    text-align: left;
    }
.card-heading-payment{
    font-size: 13px;
    color: #3b371e;
    font-weight:bold;
}
.prop-card{
    height:161px; 
}
.card {
      
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    }
    .cal-icn-payment{
        height:30px;
        width:30px;
    }
</style>