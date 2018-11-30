<template>
    
        <div class="card-head prop-card"  >
                <div  class="head-row" style="flex-direction:row" @click.native="jump('/masteronboard/codedetails/codeofconduct')" >
                    <div>
                            <image class="cal-icn" src="../../../web/assets/Codeofconduct.png"
                            alt="notify"></image>
                    </div>
                        <div class="tab-content" >  <text class="card-heading">Code Of Conduct</text></div>
               
                     </div>
                <div  class="head-row"  style="flex-direction:row" @click.native="jump('/masteronboard/codedetails/codeagreement')">
                    <div>
                            <image class="cal-icn" src="../../../web/assets/agreement.png"
                            alt="notify"></image>
                    </div>
                  <div   class="tab-content">  <text class="sub-card-heading">Agreement</text></div>
         
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
.head-row{
justify-content: start;
padding:10px;


}
.tab-content{
    justify-content: center;
    margin-left: 10px;
    }
.head-row1{

padding:10px;
justify-content: start;
}
.sub-card-heading {
    
    font-size: 13px;
    color:#565656;
    text-align: left;
    }
.card-heading{
    font-size: 13px;
    color: #3b371e;
    font-weight:bold;
}
.prop-card{
    height:477px;
}
.card-head {
      
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        background-color:transparent;
        /* background-color: #fff; */
        /* border-radius: 5px; */
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    }
    .cal-icn{
        height:30px;
        width:30px;
    }
</style>