<template>
    <div class="">
        <scroller scroll-direction="horizontal" class="m-scroller">
            <div v-if="platform !== 'Web'">
                <div class="tab-bar cursor-pointer-globle ">
                    <div class="tabs-box" v-for="(tab,id) in tabs"  :key="id" :style="{ backgroundColor: tab.bgColor}" @click="tabular(id)">
                        <div class="tabs-content cursor-pointer-globle">
                            <div style="flex:1">
                                <image class="tab-icon cursor-pointer-globle " :src="tab.icon" />
                            </div>
                            <div style="justify-content">
                                <text class="tab-text cursor-pointer-globle " :style="{color: tab.color}">{{tab.Title}}</text>
                            </div>
                        </div>
                        <div class="counter" v-if="counter == true">
                            <text class="counter-text cursor-pointer-globle">{{tab.counter}}</text>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="platform === 'Web'">
                <div class="tab-bar">
                    <div class="tabs-box" v-for="(tab,id) in tabs" :key="id" :style="{ backgroundColor: tab.bgColor}" @click.native="tabular(id)">

                        <div class="tabs-content cursor-pointer-globle ">
                            <div>
                                <image class="tab-icon cursor-pointer-globle " :src="tab.icon" />
                            </div>
                            <div>
                                <text class="tab-text cursor-pointer-globle " :style="{color: tab.color}">{{tab.Title}}</text>
                            </div>
                        </div>
                        <div class="counter" v-if="counter == true">
                            <text class="counter-text cursor-pointer-globle ">{{tab.counter}}</text>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template> 




<script>
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    var bundleUrl = weex.config.bundleUrl;
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
     var storage = weex.requireModule('storage');
    export default {
     
        // activated(){
        //         console.log(this.active)
        //             if(this.active == true){
        //                this.tabs[1].bgColor = '#3d3bee';
        //                         this.tabs[1].icon = this.tabs[1].whiteIcon;
        //                         this.tabs[1].color = '#fff'
        //     }
        // },
  
        created() {
        
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
           
         
        },
        props: {
            tabs: {
                type: Array
            },
            counter: {
                type: Boolean,
                default: true
            },
         
            callBackFunction: Function
        },
        data() {
            return {

            }
        },

        // filters: {
        //     'to-uppercase'(str) {
        //         str = str.toLowerCase();
        //         // str = str.split('');
        //         let finalStr = '';

        //         for(let i = 0 ; i < str.length; i++) {
        //             if(str === 'ftnr') {
        //                 finalStr = str.toUpperCase();
        //             } else {
        //                 if(i === 0) {
        //                     finalStr = finalStr+''+str[i].toUpperCase(); 
        //                 } else {
        //                     finalStr = finalStr+'' +str[i];
        //                 }
        //             }
        //         }
        //         return finalStr;
        //     }
        // },

        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            tabular(ind) {
                var me = this;
                console.log(ind)
                switch (ind) {
                    case 0:

                        for (let i = 0; i < this.tabs.length; i++) {
                            if (i == 0) {

                                this.tabs[i].active = true;
                                this.tabs[i].bgColor = '#3d3bee';
                                this.tabs[i].icon = this.tabs[i].whiteIcon;
                                this.tabs[i].color = '#fff',
                                    me.$router.push(this.tabs[i].link);
                                // me.$router.push('/master/testapp');

                                // Events 
                                // var dataSource = {
                                //     tabId: i,
                                //     tabName: this.tabs[i].Title
                                // };
                                // this.$emit('readData', dataSource)
                                // this.callBackFunction();
                            } else {
                                this.tabs[i].active = false;
                                this.tabs[i].bgColor = '#fff';
                                this.tabs[i].icon = this.tabs[i].blackIcon;
                                this.tabs[i].color = '#000000'

                            }
                        }
                        break;
                    case 1:

                        for (let i = 0; i < this.tabs.length; i++) {
                            if (i == 1 ) {
                                this.tabs[i].active = true;
                                this.tabs[i].bgColor = '#3d3bee';
                                this.tabs[i].icon = this.tabs[i].whiteIcon;
                                this.tabs[i].color = '#fff',
                                    me.$router.push(this.tabs[i].link);
                                // me.$router.push('/master/testpro/proposalpersonal') ;
                            } else {
                                this.tabs[i].active = false;
                                this.tabs[i].bgColor = '#fff'
                                this.tabs[i].icon = this.tabs[i].blackIcon;
                                this.tabs[i].color = '#000000'
                            }
                        }



                        break;
                    case 2:
                        for (let i = 0; i < this.tabs.length; i++) {
                            if (i == 2) {
                                this.tabs[i].active = true;
                                this.tabs[i].bgColor = '#3d3bee';
                                this.tabs[i].icon = this.tabs[i].whiteIcon;
                                this.tabs[i].color = '#fff',
                                    me.$router.push(this.tabs[i].link);
                                // me.$router.push('/master/prepayview') 
                                // this.callBackFunction();
                            } else {
                                this.tabs[i].active = false;
                                this.tabs[i].bgColor = '#fff'
                                this.tabs[i].icon = this.tabs[i].blackIcon;
                                this.tabs[i].color = '#000000'
                            }
                        }

                        break;
                    case 3:
                        for (let i = 0; i < this.tabs.length; i++) {
                            if (i == 3) {
                                this.tabs[i].active = true;
                                this.tabs[i].bgColor = '#3d3bee';
                                this.tabs[i].icon = this.tabs[i].whiteIcon;
                                this.tabs[i].color = '#fff',
                                    me.$router.push(this.tabs[i].link);
                                // me.$router.push('/master/payment') 
                            } else {
                                this.tabs[i].active = false;
                                this.tabs[i].bgColor = '#fff'
                                this.tabs[i].icon = this.tabs[i].blackIcon;
                                this.tabs[i].color = '#000000'
                            }
                        }

                        break;
                    case 4:
                        for (let i = 0; i < this.tabs.length; i++) {
                            if (i == 4) {
                                this.tabs[i].active = true;
                                this.tabs[i].bgColor = '#3d3bee';
                                this.tabs[i].icon = this.tabs[i].whiteIcon;
                                this.tabs[i].color = '#fff',
                                    me.$router.push(this.tabs[i].link);
                                // me.$router.push('/master/document')  
                            } else {
                                this.tabs[i].active = false;
                                this.tabs[i].bgColor = '#fff'
                                this.tabs[i].icon = this.tabs[i].blackIcon;
                                this.tabs[i].color = '#000000'
                            }
                        }

                        break;
                    case 5:
                        for (let i = 0; i < this.tabs.length; i++) {
                            if (i == 5) {
                                this.tabs[i].active = true;
                                this.tabs[i].bgColor = '#3d3bee';
                                this.tabs[i].icon = this.tabs[i].whiteIcon;
                                this.tabs[i].color = '#fff',
                                    me.$router.push(this.tabs[i].link);
                                // me.$router.push('/testpro/proposalvernacular')  
                            } else {
                                this.tabs[i].active = false;
                                this.tabs[i].bgColor = '#fff'
                                this.tabs[i].icon = this.tabs[i].blackIcon;
                                this.tabs[i].color = '#000000'
                            }
                        }

                        break;
                    case 6:
                        for (let i = 0; i < this.tabs.length; i++) {
                            if (i == 6) {
                                this.tabs[i].active = true;
                                this.tabs[i].bgColor = '#3d3bee';
                                this.tabs[i].icon = this.tabs[i].whiteIcon;
                                this.tabs[i].color = '#fff',
                                    me.$router.push(this.tabs[i].link);
                                // me.$router.push('/testpro/proposaldeclaration') 
                            } else {
                                this.tabs[i].active = false;
                                this.tabs[i].bgColor = '#fff'
                                this.tabs[i].icon = this.tabs[i].blackIcon;
                                this.tabs[i].color = '#000000'
                            }
                        }

                        break;
                        // case 7:
                        // for(let i=0 ; i < this.tabs.length; i++) {
                        //     if(i == 7) {
                        //           this.tabs[i].active = true;
                        //         this.tabs[i].bgColor = '#3d3bee';
                        //         this.tabs[i].icon = this.tabs[i].whiteIcon;
                        //         this.tabs[i].color = '#fff',
                        //         me.$router.push(this.tabs[i].link);
                        //         // me.$router.push('/testpro/proposaldeclaration')  
                        //     }
                        //     else {
                        //         this.tabs[i].active = false;
                        //         this.tabs[i].bgColor = '#fff'
                        //          this.tabs[i].icon = this.tabs[i].blackIcon;
                        //          this.tabs[i].color = '#000000'
                        //     }
                        // }

                        // break;
                        // case 8:
                        // for(let i=0 ; i < this.tabs.length; i++) {
                        //     if(i == 8) {
                        //         this.tabs[i].active = true;
                        //         this.tabs[i].backgroundColor = '#fff'
                        //         this.tabs[i].borderBottomWidth= '5px',
                        //         this.tabs[i].borderBottomColor= '#3b371e'
                        //         me.$router.push('/testpro/proposalreport')   
                        //     }
                        //     else {
                        //         this.tabs[i].active = false;
                        //         this.tabs[i].backgroundColor = ''
                        //     this.tabs[i].borderBottomWidth= '',
                        //     this.tabs[i].borderBottomColor= ''
                        //     }
                        // }

                        break;

                        break
                    default:
                        // execute default code block
                }
            },


        }
    }
</script>

<style>
    .m-scroller {
        flex-direction: row;
    }
    
    .tab-bar {
        flex-direction: row;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    
    .tabs-content {
        flex-direction: column;
        align-items: center;
        /* background-color: red; */
        flex: 1;
    }
    
    .tabs-box {
        flex-direction: row;
        justify-content: center;
        /* align-items: center; */
        border-radius: 10px;
        background-color: #ffffff;
        min-height: 10px;
        padding: 20px;
        min-width: 200px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        margin-left: 20px;
        flex: 1;
    }
    
    .tab-icon {
        width: 60px;
        height: 60px;
    }
    
    .tabAc {
        background-color: #3d3bee;
        /* transition: left 1.2s ease-in-out; */
        /* box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);  */
    }
    
    .counter {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        background-color: #ff1b43;
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
        position: absolute;
        right: 15px;
        top: 15px;
    }
    
    .tab-text {
        lines: 1;
        font-size: 28px;
        text-align: center;
        font-weight: 500;
    }
    
    .text-color-white {
        color: #FFFFFF;
    }
    
    .counter-text {
        font-size: 18px;
        color: #ffffff;
        font-weight: 700px;
        text-align: center;
        top: 14px;
        /* transform: translate(-15%, -15%); */
    }
    
    .text-color-white {
        color: #FFFFFF;
    }

    @media (min-width: 320px) {
        .tab-bar {
            flex-direction: row;
            margin-bottom: 20px;
            /*margin-top: 0;*/
        }
        .tabs-box {
            flex: auto;
            border-radius: 5px;
            min-width: 140px;
            border: none;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        }
        /* .tabAc {
                background-color: #3d3bee;
                transition: left 1.2s ease-in-out;
                box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); 
            } */
        .tab-text {
            font-size: 14px;
        }
        .tab-icon {
            width: 40px;
            height: 40px;
        }
        .counter {
            height: 25px;
            width: 25px;
            right: 10px;
            top: 10px;
        }
        .counter-text {
            font-size: 12px;
            font-weight: 400px;
            /* top: 50%;
                left: 50%; */
            top: 25%;
            /* transform: translate(-50%, -50%); */
        }
    }
    
    @media (min-width: 768px) {}
    
      @media (min-width: 992px) {
    
        .m-scroller {
            max-width: 1132px;;
        }
    }

</style>