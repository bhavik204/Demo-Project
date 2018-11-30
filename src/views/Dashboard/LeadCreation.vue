<template>
    <div>
        <scroller class="scroller" scroll-direction="horizontal">
            <div class="tabbar">
                <div class="tab active" :style="{ left: activeTab * 290 + 'px'}"></div>
                <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
                    <div class="row">
                        <text class="title tab-index-font-size">{{tab.index}}</text>
                        <div class="tab-title-margin">
                            <text class="title tab-content-width">{{tab.title}}</text>
                        </div>

                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 0,
                tabs: [{
                    index: 1,
                    title: 'Benefit Illustrator'
                }, {
                    index: 2,
                    title: 'Proposal Fulfilment'
                }, {
                    index: 3,
                    title: 'Payment Options'
                }, {
                    index: 4,
                    title: 'Pre-payment Review'
                }, {
                    index: 5,
                    title: 'Documents Upload'
                }]
            }
        }
    }
</script>

<style scoped>
    .tabbar {
        flex-direction: row;
        background-color: #FF4563;
    }
    
    .tab {
        height: 130px;
        width: 290px;
        justify-content: center;
        align-items: center;
    }
    
    .active {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(100, 100, 100, 0.2);
        transition: left 0.2s ease-in-out;
    }
    
    .icon {
        width: 45px;
        height: 45px;
    }
    
    .title {
        font-size: 33px;
        color: #FFF;
        /*margin-top: 10px;*/
    }
    
    .row {
        flex-direction: row;
        /*padding-left: 15px;*/
    }
    
    .line {
        /*align-items: center;*/
        padding-top: 5px;
        padding-bottom: 5px;
    }
    
    .box-color {
        background-color: black;
    }
    
    .tab-content-width {
        width: 200px;
    }
    
    .tab-index-font-size {
        font-size: 90px;
        margin-right: 10px;
    }
    
    .text-wraper {
        justify-content: center;
        align-items: center;
    }
    
    .tab-title-margin {
        margin-top: 15px;
    }
    
    .scroller {
        width: 1450px;
    }
</style>
