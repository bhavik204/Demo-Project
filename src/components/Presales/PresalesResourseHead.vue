<template>
    
        <div class="card-head-prop prop-card hide-prop-header-sm"  >
                <div  class="head-row-prop mouse-pointer" style="flex-direction:row" @click.native="jump('/masterpresales/resourcedetails/customer')">
                    <div class="tab-content-prop" >  <text class="sub-card-heading-prop">Customer</text></div>
                </div>

                <div  class="head-row-prop mouse-pointer"  style="flex-direction:row" @click.native="jump('/masterpresales/resourcedetails/sales')">
                  <div   class="tab-content-prop">  <text class="sub-card-heading-prop">Sales</text></div>
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
    .head-row-prop {
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
    
    .tab-content-prop {
        justify-content: center;
        margin-left: 10px;
    }
    
    .head-row-prop1 {
        padding: 10px;
        justify-content: start;
    }
    
    .sub-card-heading-prop {
        font-size: 13px;
        color: #565656;
        text-align: left;
    }
    
    .card-heading-prop {
        font-size: 13px;
        color: #3b371e;
        font-weight: bold;
    }
    
    .mouse-pointer {
        cursor: pointer;
    }
    
    .prop-card {}
    
    .card-head-prop {
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: transparent;
        /* background-color: #fff; */
        /* border-radius: 5px; */
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    }
    
    .cal-icn-prop {
        height: 30px;
        width: 30px;
    }
    
    @media only screen and (min-width: 320px) {
        .hide-prop-header-sm {
            display: none;
        }
        .hide-tab-sm {
            display: inline-block
        }
    }
    
    @media only screen and (min-width: 768px) {
        .hide-prop-header-sm {
            display: block;
        }
        .hide-tab-sm {
            display: none;
        }
    }
</style>