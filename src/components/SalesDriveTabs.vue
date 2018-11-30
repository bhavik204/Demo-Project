<template>
    <div class="" >
        <scroller class="cfr-scroller" scroll-direction="horizontal">
        <div class="tab-bar"> 
            <div  class="tabs-box" :style="{boxShadow: tabOne.shade, backgroundColor: tabOne.bgColor}" @click="activeTab(1)">
                <div class="tabs-content">
                    <div>
                        <image class="tab-icon" :src="tabOne.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabOne.color}">{{tabOne.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabOne.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabTwo.shade, backgroundColor: tabTwo.bgColor}" @click="activeTab(2)">
                <div class="tabs-content">
                    <div>
                        <image class="tab-icon" :src="tabTwo.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabTwo.color}">{{tabTwo.title}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabTwo.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabThree.shade, backgroundColor: tabThree.bgColor}" @click="activeTab(3)">
                <div class="tabs-content">
                    <div>
                        <image class="tab-icon" :src="tabThree.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabThree.color}">{{tabThree.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabThree.counter}}</text>
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
                tabOne: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/action/supervisor_account_black_192x192.png',
                    title: 'all',
                    counter: 34,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/action/supervisor_account_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/action/supervisor_account_white_192x192.png'
                },
                tabTwo: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/action/done_all_black_192x192.png',
                    title: 'FTNR',
                    counter: 24,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/action/done_all_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/action/done_all_white_192x192.png'
                },
                tabThree: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                    title: 'underwriting',
                    counter: 132,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/image/edit_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/image/edit_white_192x192.png'
                }
            }
        },
        

        filters: {
            'to-uppercase'(str) {
                str = str.toLowerCase();
                // str = str.split('');
                let finalStr = '';
                
                for(let i = 0 ; i < str.length; i++) {
                    if(str === 'ftnr') {
                        finalStr = str.toUpperCase();
                    } else {
                        if(i === 0) {
                            finalStr = finalStr+''+str[i].toUpperCase(); 
                        } else {
                            finalStr = finalStr+'' +str[i];
                        }
                    }
                }
                return finalStr;
            }
        },

        methods: {
            activeTab(tabID) {
                switch(tabID) {
                    case 1:
                        if(this.tabTwo.active === true || this.tabThree.active === true) {
                            this.tabTwoStateChange();
                            this.tabThreeStateChange();   
                        }
                        this.tabOne.bgColor ='#3d3bee';
                        this.tabOne.color = '#FFF';
                        // this.tabOne.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabOne.active = true;
                        this.tabOne.icon = this.tabOne.whiteIcon;
                    break;
                    case 2:
                        if(this.tabOne.active === true || this.tabThree.active === true) {
                            this.tabOneStateChange();
                            this.tabThreeStateChange();   
                        }
                        this.tabTwo.bgColor ='#3d3bee';
                        this.tabTwo.color = '#FFF';
                        // this.tabTwo.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabTwo.active = true;
                        this.tabTwo.icon = this.tabTwo.whiteIcon;
                       
                    break;

                    case 3:
                        if(this.tabOne.active === true || this.tabTwo.active === true) {
                            this.tabOneStateChange();
                            this.tabTwoStateChange();  
                        }
                        this.tabThree.bgColor ='#3d3bee';
                        this.tabThree.color = '#FFF';
                        // this.tabThree.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabThree.active = true;
                        this.tabThree.icon = this.tabThree.whiteIcon;
                    break;
                }
            },

            tabOneStateChange() {
                this.tabOne.bgColor ='#FFF';
                this.tabOne.color = '#000000';
                this.tabOne.shade = '';
                this.tabOne.active = false;
                this.tabOne.icon = this.tabOne.blackIcon;
            },
            tabTwoStateChange() {
                this.tabTwo.bgColor ='#FFF';
                this.tabTwo.color = '#000000';
                this.tabTwo.shade = '';
                this.tabTwo.active = false;
                this.tabTwo.icon = this.tabTwo.blackIcon;
                
            },
            tabThreeStateChange() {
                this.tabThree.bgColor ='#FFF';
                this.tabThree.color = '#000000';
                this.tabThree.shade = '';
                this.tabThree.active = false;
                this.tabThree.icon = this.tabThree.blackIcon;
            }
        }
    }
</script>

<style>
    .cfr-scroller {
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
    }

    .tabs-box-cfr {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: #ffffff;
        min-height: 10px;
        padding: 20px;
        width: 200px; 
        margin-right: 20px;
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
        top:14px;
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

            .tabs-box-cfr {
                border-radius: 5px;
                width: 140px; 
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
                width: 50px;
                height: 50px;
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
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {
        
    }
</style>

