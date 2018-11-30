<template>
    
        <div class="card prop-card"  >
                <div  class="head-row" style="flex-direction:row" >
                    <div>
                            <!-- <image class="cal-icn" src="../../../web/assets/Proposalfulfilment2.png"
                            alt="notify"></image> -->
                    </div>
                        <div class="tab-content" >  <text class="card-heading">Upload Documents</text></div>
               
                     </div>
                     <div  class="head-row" style="flex-direction:row" >
                            <div>
                                    <!-- <image class="cal-icn" src="../../../web/assets/Proposalfulfilment2.png"
                                    alt="notify"></image> -->
                            </div>
                                <div class="tab-content" >  <text class="sub-card-heading">1.Personal Photo Upload</text></div>
                       
                             </div>
                <div  class="head-row"  style="flex-direction:row" @click.native="jump('/proposalpersonal')">
                    <div>
                            <!-- <image class="cal-icn" src="../../../web/assets/personaldetails1.png"
                            alt="notify"></image> -->
                    </div>
                  <div   class="tab-content">  <text class="sub-card-heading">2.Age Proof</text></div>
         
               </div>
               <div class="head-row" style="flex-direction:row" @click.native="jump('/proposalnominee')">
                <div>
                        <!-- <image class="cal-icn" src="../../../web/assets/nominee2.png"
                        alt="notify"></image> -->
                </div>
                <div   class="tab-content">   <text class="sub-card-heading">3.Educational Qualification</text></div>
                   </div>
                   <div class="head-row"  style="flex-direction:row" @click.native="jump('/proposalfamily')">
                    <div>
                            <!-- <image class="cal-icn" src="../../../web/assets/familyhistory1.png"
                            alt="notify"></image> -->
                    </div>
                    <div   class="tab-content">    <text class="sub-card-heading">4.Proof of Pass in Agency examination</text></div>
                       </div>
                       <div class="head-row"  style="flex-direction:row" @click.native="jump('/proposalinsurance')">
                        <div>
                                <!-- <image class="cal-icn" src="../../../web/assets/lifeinsurance2.png"
                                alt="notify"></image> -->
                        </div>
                        <div   class="tab-content">    <text class="sub-card-heading">5.Pan Card Copy</text></div>
                           </div>
                           <div class="head-row"  style="flex-direction:row" @click.native="jump('/proposalmedical')" >
                            <div>
                                    <!-- <image class="cal-icn" src="../../../web/assets/Lifestyle.png"
                                    alt="notify"></image> -->
                            </div>
                            <div   class="tab-content">     <text class="sub-card-heading">6.Address Proof</text></div>
                               </div>
                               <div class="head-row"  style="flex-direction:row" @click.native="jump('/proposalmedical')" >
                                <div>
                                        <!-- <image class="cal-icn" src="../../../web/assets/Lifestyle.png"
                                        alt="notify"></image> -->
                                </div>
                                <div   class="tab-content">     <text class="sub-card-heading">6.Prefered Profiles Proof</text></div>
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

border-width: 1px;
    border-top: none;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #ebebeb;
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
    height:311px;
}
.card {
      
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    }
    .cal-icn{
        height:30px;
        width:30px;
    }
</style>