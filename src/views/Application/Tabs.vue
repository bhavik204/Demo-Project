<template>
    <div class="" >
        <scroller class="app-scroller" scroll-direction="horizontal">
        <div class="tab-bar"> 
            <div  class="tabs-box" :style="{boxShadow: tabOne.shade, backgroundColor: tabOne.bgColor}" @click="activeTab(1)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabOne.icon"/>
                    </div>
                    <div class="">
                        <text class="tab-text" :style="{color: tabOne.color}" lines="1">{{tabOne.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabOne.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabTwo.shade, backgroundColor: tabTwo.bgColor}" @click="activeTab(2)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabTwo.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabTwo.color}" lines="1">{{tabTwo.title}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabTwo.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabThree.shade, backgroundColor: tabThree.bgColor}" @click="activeTab(3)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabThree.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabThree.color}" lines="1">{{tabThree.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabThree.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabFour.shade, backgroundColor: tabFour.bgColor}" @click="activeTab(4)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabFour.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabFour.color}" lines="1">{{tabFour.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabFour.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabFive.shade, backgroundColor: tabFive.bgColor}" @click="activeTab(5)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabFive.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabFive.color}" lines="1">{{tabFive.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabFive.counter}}</text>
                </div>
            </div>
        </div>
        </scroller>
    </div>

</template>

<script>
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    export default {
        data() {
            return {
                tabOne: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc+'supervisor_account_black_192x192.png',
                    title: 'ALL',
                    counter: 55,
                    active: false,
                    blackIcon: iconSrc+'supervisor_account_black_192x192.png',
                    whiteIcon: iconSrc+'supervisor_account_white_192x192.png'
                },
                tabTwo: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc+'description_black_192x192.png',
                    title: 'Draft Proposal',
                    counter: 2,
                    active: false,
                    blackIcon: iconSrc+'description_black_192x192.png',
                    whiteIcon: iconSrc+'description_white_192x192.png'
                },
                tabThree: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc+'input_black_192x192.png',
                    title: 'Logins',
                    counter: 34,
                    active: false,
                    blackIcon: iconSrc+'input_black_192x192.png',
                    whiteIcon: iconSrc+'input_white_192x192.png'
                },
                tabFour: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc+'class_black_192x192.png',
                    title: 'Issued',
                    counter: 23,
                    active: false,
                    blackIcon: iconSrc+'class_black_192x192.png',
                    whiteIcon: iconSrc+'class_white_192x192.png'
                },
                tabFive: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    title: 'Rejected',
                    counter: 60,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png'
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
                        if(this.tabTwo.active === true || this.tabFour.active === true || this.tabThree.active === true || this.tabFive.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo); 
                            this.tabThree = this.tabStateChange(this.tabThree);
                            this.tabFour = this.tabStateChange(this.tabFour); 
                            this.tabFive = this.tabStateChange(this.tabFive);
                        }
                        this.tabOne.bgColor ='#3d3bee';
                        this.tabOne.color = '#FFF';
                        // this.tabOne.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabOne.active = true;
                        this.tabOne.icon = this.tabOne.whiteIcon;
                    break;
                    case 2:
                        if(this.tabOne.active === true || this.tabFour.active === true || this.tabThree.active === true || this.tabFive.active === true) {
                            this.tabThree = this.tabStateChange(this.tabThree); 
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabFour = this.tabStateChange(this.tabFour); 
                            this.tabFive = this.tabStateChange(this.tabFive);
                        }
                        this.tabTwo.bgColor ='#3d3bee';
                        this.tabTwo.color = '#FFF';
                        // this.tabTwo.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabTwo.active = true;
                        this.tabTwo.icon = this.tabTwo.whiteIcon;
                       
                    break;

                    case 3:
                        if(this.tabOne.active === true || this.tabTwo.active === true || this.tabFour.active === true || this.tabFive.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo); 
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabFour = this.tabStateChange(this.tabFour); 
                            this.tabFive = this.tabStateChange(this.tabFive);
                        }
                        this.tabThree.bgColor ='#3d3bee';
                        this.tabThree.color = '#FFF';
                        // this.tabThree.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabThree.active = true;
                        this.tabThree.icon = this.tabThree.whiteIcon;
                    break;
                    case 4:
                        if(this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFive.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo); 
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabThree = this.tabStateChange(this.tabThree); 
                            this.tabFive = this.tabStateChange(this.tabFive);
                        }
                        this.tabFour.bgColor ='#3d3bee';
                        this.tabFour.color = '#FFF';
                        // this.tabFour.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabFour.active = true;
                        this.tabFour.icon = this.tabFour.whiteIcon;
                    break;
                    case 5:
                        if(this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFour.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo); 
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabThree = this.tabStateChange(this.tabThree); 
                            this.tabFour = this.tabStateChange(this.tabFour);
                        }
                        this.tabFive.bgColor ='#3d3bee';
                        this.tabFive.color = '#FFF';
                        // this.tabFive.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabFive.active = true;
                        this.tabFive.icon = this.tabFive.whiteIcon;
                    break;
                }
            },

            tabStateChange(tabObject) {
                tabObject.bgColor ='#FFF';
                tabObject.color = '#000000';
                tabObject.shade = '';
                tabObject.active = false;
                tabObject.icon = tabObject.blackIcon;

                return tabObject;
            }

        }
    }
</script>

<style>
    .app-scroller {
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

    .tabs-box {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: #ffffff;
        min-height: 10px;
        padding: 20px;
        width: 200px; 
        margin-left: 20px;
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
        top:14px;
        /* transform: translate(-15%, -15%); */
    }
    .text-color-white {
        color: #FFFFFF;
    }


    @media (min-width: 320px) {
            .tab-bar {
                flex-direction: row;
                /*margin-bottom: 20px;*/
                /*margin-top: 0;*/
            }

            .tabs-box {
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

