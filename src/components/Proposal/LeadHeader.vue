<template>
    
    <div class="card-head prop-card hide-lead-header-sm"  >
        <div  class="head-row" style="flex-direction:row" @click.native="jump('/leaddetails/statuslead')">
            <div>
                <image class="cal-icn" src="../../../web/assets/Proposalfulfilment2.png" alt="notify"></image>
            </div>
            <div class="tab-content" >  <text class="card-heading">Status</text></div>

        </div>
       
        <div  class="head-row"  style="flex-direction:row" @click.native="jump('/leaddetails/personallead')">
            <div>
                <image class="cal-icn" src="../../../web/assets/personaldetails1.png" alt="notify"></image>
            </div>
            <div   class="tab-content">  <text class="sub-card-heading">Personal Details</text></div>

        </div>
        
        <div class="head-row" style="flex-direction:row" @click.native="jump('/leaddetails/contactlead')">
            <div>
                <image class="cal-icn" src="../../../web/assets/nominee2.png" alt="notify"></image>
            </div>
            <div   class="tab-content">   <text class="sub-card-heading">Contact Details</text></div>
        </div>
        
        <div class="head-row"  style="flex-direction:row" @click.native="jump('/leaddetails/professionallead')">
            <div>
                <image class="cal-icn" src="../../../web/assets/familyhistory1.png" alt="notify"></image>
            </div>
            <div   class="tab-content">    <text class="sub-card-heading">Professional Details</text></div>
        </div>
        
        <div class="head-row"  style="flex-direction:row" @click.native="jump('/leaddetails/existingLead')">
            <div>
                <image class="cal-icn" src="../../../web/assets/lifeinsurance2.png" alt="notify"></image>
            </div>
            <div   class="tab-content">    <text class="sub-card-heading">Existing Insurance </text></div>
        </div>
        
        <div class="head-row"  style="flex-direction:row" @click.native="jump('/leaddetails/productlead')" >
            <div>
                <image class="cal-icn" src="../../../web/assets/Lifestyle.png" alt="notify"></image>
            </div>
            <div   class="tab-content">     <text class="sub-card-heading">Product Details</text></div>
        </div>

        <!-- <div class="head-row"  style="flex-direction:row" @click.native="jump('/historylead')">
            <div>
                <image class="cal-icn" src="../../../web/assets/witness.png" alt="notify"></image>
            </div>
            <div   class="tab-content">       <text class="sub-card-heading">History</text></div>
        </div> -->
        
        <!-- <div class="head-row"  style="flex-direction:row" @click.native="jump('/proposaldeclaration')">
        <div>
        <image class="cal-icn" src="../../../web/assets/Declarationsign.png"
        alt="notify"></image>
        </div>
        <div   class="tab-content">    <text class="sub-card-heading">Declaration & Signature</text></div>
        </div> -->
        <!-- <div class="head-row1" style="flex-direction:row" @click.native="jump('/proposalreport')">
        <div>
        <image class="cal-icn" src="../../../web/assets/confidential.png"
        alt="notify"></image>
        </div>
        <div   class="tab-content"> <text class="sub-card-heading">Confidential Report</text></div>
        </div> -->


    </div>  
</template>

<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        // created() {
        //         if (typeof WXEnvironment === 'object') {

        //             this.platform = WXEnvironment.platform || unknown
        //             this.deviceWidth = WXEnvironment.deviceWidth || unknown
        //               return this.deviceWidth

        //         }
        //     },

        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            }
        },


    }
</script>
<style>
    .head-row {
        justify-content: start;
        padding: 10px;
        /* border-width: 1px;
    border-top: none;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #ebebeb; */
    }
    
    .tab-content {
        justify-content: center;
        margin-left: 10px;
    }
    
    .head-row1 {
        padding: 10px;
        justify-content: start;
    }
    
    .sub-card-heading {
        font-size: 13px;
        color: #565656;
        text-align: left;
    }
    
    .card-heading {
        font-size: 13px;
        color: #3b371e;
        font-weight: bold;
    }
    
    .prop-card {
        height: 477px;
    }
    
    .card-head {
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: transparent;
        /* background-color: #fff; */
        /* border-radius: 5px; */
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    }
    
    .cal-icn {
        height: 30px;
        width: 30px;
    }
    
    @media only screen and (min-width: 320px) {
        .hide-lead-header-sm {
            display: none;
        }
        /* .hide-tab-sm{
    display: inline-block
} */
    }
    
    @media only screen and (min-width: 768px) {
        .hide-lead-header-sm {
            display: block;
        }
        /* .hide-tab-sm{
    display: none;
} */
    }
</style>