<template>
    <div class="card-head prop-card" style="background-color: #f7f7f7;">
        <div v-if="platform !== 'Web'">
            <scroller class="scroller-side-tab">
                <div>
                    <div v-for="(tab,id) in sidetabData" class="head-row" :key="id" :style="{backgroundColor:tab.backgroundColor,padding:tab.padding,
                        borderBottomWidth:tab.borderBottomWidth,borderBottomcolor:tab.borderBottomColor}" @click="sideData(id)">
                        <div>
                            <image class="cal-icn" :src="tab.image" alt="notify"></image>
                        </div>
                        <div class="tab-content"> <text class="card-heading">{{tab.Title}}</text></div>
                    </div>
                </div>
            </scroller>

        </div>
        <div v-if="platform === 'Web'" class="hide-side-tab-sm">
            <div>
                <div v-for="(tab,id) in sidetabData" class="head-row" :key="id" :style="{backgroundColor:tab.backgroundColor,padding:tab.padding,
                                borderBottomWidth:tab.borderBottomWidth,borderBottomcolor:tab.borderBottomColor}" @click="sideData(id)">
                    <div>
                        <image class="cal-icn" :src="tab.image" alt="notify"></image>
                    </div>
                    <div class="tab-content"> <text class="card-heading">{{tab.Title}}</text></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        props: {
            sidetabData: {
                type: Array
            }
        },

        data() {
            return {
                deviceWidth: invalid,
                platform: invalid,
            }
        },
        methods: {
            sideData(ind) {
                var me = this;
                console.log(ind)
                switch (ind) {
                    case 0:

                        for (let i = 0; i < this.sidetabs.length; i++) {
                            if (i == 0) {

                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                me.$router.push(this.sidetabData[i].link);


                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }
                        break;
                    case 1:

                        for (let i = 0; i < this.sidetabData.length; i++) {
                            if (i == 1) {

                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                // me.$router.push('/master/testpro/proposalnominee') ;
                                me.$router.push(this.sidetabData[i].link);
                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }



                        break;
                    case 2:
                        for (let i = 0; i < this.sidetabData.length; i++) {
                            if (i == 2) {
                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                me.$router.push(this.sidetabData[i].link);
                                // me.$router.push('/master/testpro/proposalfamily') 
                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }

                        break;
                    case 3:
                        for (let i = 0; i < this.sidetabData.length; i++) {
                            if (i == 3) {
                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                me.$router.push(this.sidetabData[i].link);
                                // me.$router.push('/master/testpro/proposalinsurance') 
                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }

                        break;
                    case 4:
                        for (let i = 0; i < this.sidetabData.length; i++) {
                            if (i == 4) {
                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                me.$router.push(this.sidetabData[i].link);
                                // me.$router.push('/master/testpro/proposalmedical')  
                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }

                        break;
                    case 5:
                        for (let i = 0; i < this.sidetabData.length; i++) {
                            if (i == 5) {
                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                me.$router.push(this.sidetabData[i].link);
                                // me.$router.push('/master/testpro/proposalvernacular')  
                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }

                        break;
                    case 6:
                        for (let i = 0; i < this.sidetabData.length; i++) {
                            if (i == 6) {
                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                me.$router.push(this.sidetabData[i].link);
                                // me.$router.push('/master/testpro/proposaldeclaration') 
                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }

                        break;
                    case 7:
                        for (let i = 0; i < this.sidetabData.length; i++) {
                            if (i == 7) {
                                this.sidetabData[i].active = true;
                                this.sidetabData[i].backgroundColor = '#fff';
                                this.sidetabData[i].borderBottomWidth = '5px';
                                this.sidetabData[i].borderBottomColor = '#3b371e';
                                me.$router.push(this.sidetabData[i].link);
                                // me.$router.push('/master/testpro/proposalreport')  
                            } else {
                                this.sidetabData[i].active = false;
                                this.sidetabData[i].backgroundColor = '';
                                this.sidetabData[i].borderBottomWidth = '';
                                this.sidetabData[i].borderBottomColor = '';
                            }
                        }

                        break;
                    default:
                        // execute default code block
                }
            }
        }
    }
</script>

<style>
    .col1 {
        padding-bottom: 30px;
        padding-left: 10px
    }
    
    .heading-tab {
        font-size: 24px;
    }
    
    .tab-row1 {
        padding: 10px;
    }
    
    .tab-row-selected {
        padding: 10px;
        background-color: #fff;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 5px;
        border-bottom-color: #3b371e;
    }
    
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
        .col1 {
            /* flex-direction:row; */
            padding-bottom: 10px;
            padding-left: 10px
        }
        .hide-side-tab-sm {
            display: none;
        }
        .heading-tab {
            font-size: 14px;
        }
        .tab-row1 {
            padding: 10px;
        }
        .tab-row-selected {
            padding: 10px;
            background-color: #fff;
            border-style: solid;
            border-top-width: 1px;
            border-top-color: #fff;
            border-left-width: 1px;
            border-left-color: #fff;
            border-right-width: 1px;
            border-right-color: #fff;
            border-bottom-width: 5px;
            border-bottom-color: #3b371e;
        }
        /* .hide-tab-sm{
            display: none;
        } */
    }
    
    @media only screen and (min-width: 768px) {
        .hide-side-tab-sm {
            display: block;
        }
        /* .hide-tab-sm{
      display:block
  } */
    }
</style>