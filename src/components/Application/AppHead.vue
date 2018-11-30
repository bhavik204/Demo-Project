<template>
    <div>
        <scroller  class="scroller" scroll-direction="horizontal">
        <div class="tabbar shadow">
            <div class="tab active" :style="tabStyleBind"></div>
            <div class="tab" @click="jump('/testapp')">
                <text class="title">Benefit Illustrator</text>
            </div>
            <div class="tab"  @click="jump('/proposalpersonal')">
                <text class="title">Proposal Fulfilment</text>
            </div>
            <div class="tab tab-02"  @click="jump('/prepayview')">
                <text class="title">Pre-payment Review</text>
            </div>
            <div class="tab tab-03"   @click="jump('/payment')">
                <text class="title">Payment Options</text>
            </div>
            <div class="tab tab-04"   @click="jump('/document')">
                <text class="title">Document Upload</text>
            </div>
        </div>
        </scroller>

        <!-- <div  v-if="platform == 'Web'" class="nx-flex-row">
            <div class="box">
                <text class="tab-text">Benefit Illustrator</text>
            </div>

            <div class="box">
                 <text class="tab-text">Proposal Fulfilment</text>
            </div>

            <div class="box">
                 <text class="tab-text">Pre-payment Review</text>
            </div>

            <div class="box">
                 <text class="tab-text">Payment Options</text>
            </div>

            <div class="box">
                 <text class="tab-text">Document Upload</text>
            </div>

        </div> -->

    
      
    </div>
</template>

<script>
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

  export default {
    
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data () {
        return {
            activeTab: 0,
            tabStyleBind: {
                left: '0',
                width: '350'
            },
        }
    },
    methods:{
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
    }
   
 
  }
</script>

<style scoped>
  .tabbar {
    flex-direction: row;
    background-color: #1A5276;
  }
  .tab {
    height: 120px;
    width: 350px;
    justify-content: center;
    align-items: center;
    /* background-color:cadetblue; */
  }
  


  .tab-02 {
      width: 400px;
      /* background-color: cadetblue; */
      
  }

  .tab-03 {
      width: 680px;
      /* background-color: blueviolet; */
  }

  .tab-05 {
      width: 200px;
      /* background-color: cadetblue; */
  }

  .tab-04 {
      width: 300px;
      /* background-color: cadetblue; */
  }

  .active {
    height: 120px;
    width: 350px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    border-width: 8px;
    border-top-color: #1A5276;
    border-left-color: #1A5276;
    border-right-color: #1A5276;
    border-bottom-color: #ebaf2f;
    /* background-color: rgba(100, 100, 100, 0.2); */
    transition: left 0.2s ease-in-out;
  }
  .icon {
    width: 45px;
    height: 45px;
  }
  .title {
    font-size: 28px;
    /* font-weight: 200; */
    color: #FFF;
    margin-top: 10px;
  }
  
  .scroller {
    flex-direction: row;
    height: 120px;
  }

  .shadow {
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    }

    @media (min-width: 320px) {
        .scroller {
            flex-direction: row;
            overflow: auto;
        }
        .tab-text {
            font-size: 16px;
            /* font-weight: 200; */
            /* color: #FFF; */
            margin-top: 10px;
        }

        .nx-flex-row {
            flex-direction: row;
        }

        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
  

    }

    @media (min-width: 992px) {
        /* .scroller {
            flex-direction: row;
            overflow: auto;
        } */

        .title {
            font-size: 16px;
            color: #FFF;
            /* margin-top: 10px; */
        }

        .text {
            font-size: 16px;
        }
  


    }
</style>