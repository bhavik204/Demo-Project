<template>
    <div class=" card-doc doc-card">
        <div class="head-row-doc" style="flex-direction:row">
            <div>
                <!-- <image class="cal-icn" src="../../../web/assets/Proposalfulfilment2.png"
                            alt="notify"></image> -->
            </div>
            <div class="tab-content-doc"> <text class="card-heading-doc">Upload Documents</text></div>

        </div>
        <div class="head-row-doc" style="flex-direction:row">
            <div>
                <!-- <image class="cal-icn" src="../../../web/assets/Proposalfulfilment2.png"
                                    alt="notify"></image> -->
            </div>
            <div class="tab-content-doc"> <text class="sub-card-heading-doc">1.Address Proof</text></div>

        </div>
        <div class="head-row-doc" style="flex-direction:row" @click.native="jump('/master/document')">
            <div>
                <!-- <image class="cal-icn" src="../../../web/assets/personaldetails1.png"
                            alt="notify"></image> -->
            </div>
            <div class="tab-content-doc"> <text class="sub-card-heading-doc">2.Photo Id</text></div>

        </div>
        <div class="head-row-doc" style="flex-direction:row" @click.native="jump('/master/document')">
            <div>
                <!-- <image class="cal-icn" src="../../../web/assets/nominee2.png"
                        alt="notify"></image> -->
            </div>
            <div class="tab-content-doc"> <text class="sub-card-heading-doc">3.ID Proof</text></div>
        </div>
        <div class="head-row-doc" style="flex-direction:row" @click.native="jump('/master/document')">
            <div>
                <!-- <image class="cal-icn" src="../../../web/assets/familyhistory1.png"
                            alt="notify"></image> -->
            </div>
            <div class="tab-content-doc"> <text class="sub-card-heading-doc">4.Income Proof</text></div>
        </div>
        <div class="head-row-doc" style="flex-direction:row" @click.native="jump('/master/document')">
            <div>
                <!-- <image class="cal-icn" src="../../../web/assets/lifeinsurance2.png"
                                alt="notify"></image> -->
            </div>
            <div class="tab-content-doc"> <text class="sub-card-heading-doc">5.Age Proof</text></div>
        </div>
        <div class="head-row-doc" style="flex-direction:row" @click.native="jump('/master/document')">
            <div>
                <!-- <image class="cal-icn" src="../../../web/assets/Lifestyle.png"
                                    alt="notify"></image> -->
            </div>
            <div class="tab-content-doc"> <text class="sub-card-heading-doc">6.Custom Declaration Capture</text></div>
        </div>
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
    .head-row-doc {
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
    
    .tab-content-doc {
        justify-content: center;
        margin-left: 10px;
    }
    
    .head-row-doc1 {
        padding: 10px;
        justify-content: start;
    }
    
    .sub-card-heading-doc {
        font-size: 13px;
        color: #565656;
        text-align: left;
    }
    
    .card-heading-doc {
        font-size: 13px;
        color: #3b371e;
        font-weight: bold;
    }
    
    .doc-card {
        height: 272px;
    }
    
    .card-doc {
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        /* background-color: #fff;*/
        border-radius: 5px;
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    }
    
    .cal-icn {
        height: 30px;
        width: 30px;
    }
</style>