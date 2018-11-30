<template>
    <div class="" >
        <scroller class="m-scroller" scroll-direction="horizontal">
        <div class="tab-bar"> 
            <div  class="tabs-box" :style="{boxShadow: tabOne.shade, backgroundColor: tabOne.bgColor}" @click="activeTab(1)">
                <div class="tabs-content">
                    <div class="tab-icon-text-gap">
                        <image class="tab-icon" :src="tabOne.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabOne.color}">{{tabOne.title | to-uppercase}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabOne.counter}}</text>
                </div> -->
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabTwo.shade, backgroundColor: tabTwo.bgColor}" @click="activeTab(2)">
                <div class="tabs-content">
                    <div class="tab-icon-text-gap">
                        <image class="tab-icon" :src="tabTwo.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabTwo.color}">{{tabTwo.title}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabTwo.counter}}</text>
                </div> -->
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabThree.shade, backgroundColor: tabThree.bgColor}" @click="activeTab(3)">
                <div class="tabs-content">
                    <div class="tab-icon-text-gap">
                        <image class="tab-icon" :src="tabThree.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabThree.color}">{{tabThree.title | to-uppercase}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabThree.counter}}</text>
                </div> -->
            </div>
            <!-- <div  class="tabs-box" :style="{boxShadow: tabFour.shade, backgroundColor: tabFour.bgColor}" @click="activeTab(4)">
                <div class="tabs-content">
                    <div class="tab-icon-text-gap">
                        <image class="tab-icon" :src="tabFour.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabFour.color}">{{tabFour.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabFour.counter}}</text>
                </div>
            </div> -->
            <!-- <div  class="tabs-box" :style="{boxShadow: tabFive.shade, backgroundColor: tabFive.bgColor}" @click="activeTab(5)">
                <div class="tabs-content">
                    <div class="tab-icon-text-gap">
                        <image class="tab-icon" :src="tabFive.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabFive.color}">{{tabFive.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabFive.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabSix.shade, backgroundColor: tabSix.bgColor}" @click="activeTab(6)">
                <div class="tabs-content">
                    <div class="tab-icon-text-gap">
                        <image class="tab-icon" :src="tabSix.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabSix.color}">{{tabSix.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabFive.counter}}</text>
                </div>
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabSeven.shade, backgroundColor: tabSeven.bgColor}" @click="activeTab(7)">
                <div class="tabs-content">
                    <div class="tab-icon-text-gap">
                        <image class="tab-icon" :src="tabSeven.icon"/>
                    </div>
                    <div>
                        <text class="tab-text" :style="{color: tabSeven.color}">{{tabSeven.title | to-uppercase}}</text>
                    </div>
                </div>
                <div class="counter">
                    <text class="counter-text">{{tabFive.counter}}</text>
                </div>
            </div> -->
            
            
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
                    bgColor: '#3d3bee',
                    color: '#fff',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/action/store_black_192x192.png',
                    title: 'Customer Pitch',
                    counter: 55,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/action/store_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/action/store_white_192x192.png'
                },
                tabTwo: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/hardware/gamepad_black_192x192.png',
                    title: 'Advisor Pitch',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/hardware/gamepad_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/hardware/gamepad_white_192x192.png'
                },
                tabThree: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/action/touch_app_black_192x192.png',
                    title: 'Resource Center',
                    counter: 34,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/action/touch_app_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/action/touch_app_white_192x192.png'
                },
                // tabFour: {
                //     bgColor: '#FFF',
                //     color: '#000000',
                //     shade: '',
                //     icon: 'https://www.materialui.co/materialIcons/action/store_black_192x192.png',
                //     title: 'My Overall Ranking',
                //     counter: 23,
                //     active: false,
                //     blackIcon: 'https://www.materialui.co/materialIcons/action/store_black_192x192.png',
                //     whiteIcon: 'https://www.materialui.co/materialIcons/action/store_white_192x192.png'
                // },
                // tabFive: {
                //     bgColor: '#FFF',
                //     color: '#000000',
                //     shade: '',
                //     icon: 'https://www.materialui.co/materialIcons/hardware/gamepad_black_192x192.png',
                //     title: 'Reteirement',
                //     counter: 60,
                //     active: false,
                //     blackIcon: 'https://www.materialui.co/materialIcons/hardware/gamepad_black_192x192.png',
                //     whiteIcon: 'https://www.materialui.co/materialIcons/hardware/gamepad_white_192x192.png'
                // },
                // tabSix: {
                //     bgColor: '#FFF',
                //     color: '#000000',
                //     shade: '',
                //     icon: 'https://www.materialui.co/materialIcons/action/account_child_black_192x192.png',
                //     title: 'Child',
                //     counter: 60,
                //     active: false,
                //     blackIcon: 'https://www.materialui.co/materialIcons/action/account_child_black_192x192.png',
                //     whiteIcon: 'https://www.materialui.co/materialIcons/action/account_child_white_192x192.png'
                // },
                // tabSeven: {
                //     bgColor: '#FFF',
                //     color: '#000000',
                //     shade: '',
                //     icon: 'https://www.materialui.co/materialIcons/action/group_work_black_192x192.png',
                //     title: 'Solution For Group',
                //     counter: 60,
                //     active: false,
                //     blackIcon: 'https://www.materialui.co/materialIcons/action/group_work_black_192x192.png',
                //     whiteIcon: 'https://www.materialui.co/materialIcons/action/group_work_white_192x192.png'
                // }

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
            jump(to) {
          if (this.$router) {
              this.$router.push(to)
          }
      },
            activeTab(tabID) {
                switch(tabID) {
                    case 1:
                        if(this.tabTwo.active === true  || this.tabThree.active === true ) {
                            this.tabTwo = this.tabStateChange(this.tabTwo); 
                            this.tabThree = this.tabStateChange(this.tabThree);
                            this.tabFour = this.tabStateChange(this.tabFour); 
                           
                        }
                        this.tabOne.bgColor ='#3d3bee';
                        this.tabOne.color = '#FFF';
                        // this.tabOne.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabOne.active = true;
                        this.tabOne.icon = this.tabOne.whiteIcon;
                       this.jump('/testimonials')
                    break;
                    case 2:
                        if(this.tabOne.active === true  || this.tabThree.active === true ) {
                            this.tabThree = this.tabStateChange(this.tabThree); 
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabFour = this.tabStateChange(this.tabFour); 
                            
                        }
                        this.tabTwo.bgColor ='#3d3bee';
                        this.tabTwo.color = '#FFF';
                        // this.tabTwo.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabTwo.active = true;
                        this.tabTwo.icon = this.tabTwo.whiteIcon;
                        this.jump('/aptest')
                    break;

                    case 3:
                        if(this.tabOne.active === true || this.tabTwo.active === true  ) {
                            this.tabTwo = this.tabStateChange(this.tabTwo); 
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabFour = this.tabStateChange(this.tabFour); 
                           
                        }
                        this.tabThree.bgColor ='#3d3bee';
                        this.tabThree.color = '#FFF';
                        // this.tabThree.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabThree.active = true;
                        this.tabThree.icon = this.tabThree.whiteIcon;
                        this.jump('/customer')
                    break;
                    // case 4:
                    //     if(this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true ) {
                    //         this.tabTwo = this.tabStateChange(this.tabTwo); 
                    //         this.tabOne = this.tabStateChange(this.tabOne);
                    //         this.tabThree = this.tabStateChange(this.tabThree); 
                           
                    //     }
                    //     this.tabFour.bgColor ='#3d3bee';
                    //     this.tabFour.color = '#FFF';
                    //     // this.tabFour.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                    //     this.tabFour.active = true;
                    //     this.tabFour.icon = this.tabFour.whiteIcon;
                    //     this.jump('/overall')
                    // break;
                //     case 5:
                //         if(this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFour.active === true || this.tabSix.active === true || this.tabSeven.active === true) {
                //             this.tabTwo = this.tabStateChange(this.tabTwo); 
                //             this.tabOne = this.tabStateChange(this.tabOne);
                //             this.tabThree = this.tabStateChange(this.tabThree); 
                //             this.tabFour = this.tabStateChange(this.tabFour);
                //             this.tabSix = this.tabStateChange(this.tabSix);
                //             this.tabSeven = this.tabStateChange(this.tabSeven);
                //         }
                //         this.tabFive.bgColor ='#3d3bee';
                //         this.tabFive.color = '#FFF';
                //         // this.tabFive.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                //         this.tabFive.active = true;
                //         this.tabFive.icon = this.tabFive.whiteIcon;
                //         this.jump('/retirement')
                //     break;
                //     case 6:
                //         if(this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFour.active === true || this.tabFive.active === true || this.tabSeven.active === true) {
                //             this.tabTwo = this.tabStateChange(this.tabTwo); 
                //             this.tabOne = this.tabStateChange(this.tabOne);
                //             this.tabThree = this.tabStateChange(this.tabThree); 
                //             this.tabFour = this.tabStateChange(this.tabFour);
                //             this.tabFive = this.tabStateChange(this.tabFive);
                //             this.tabSeven = this.tabStateChange(this.tabSeven);
                //         }
                //         this.tabSix.bgColor ='#3d3bee';
                //         this.tabSix.color = '#FFF';
                //         // this.tabFive.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                //         this.tabSix.active = true;
                //         this.tabSix.icon = this.tabSix.whiteIcon;
                //         this.jump('/child')
                //     break;
                //     case 7:
                //         if(this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFour.active === true || this.tabSix.active === true || this.tabFive.active === true) {
                //             this.tabTwo = this.tabStateChange(this.tabTwo); 
                //             this.tabOne = this.tabStateChange(this.tabOne);
                //             this.tabThree = this.tabStateChange(this.tabThree); 
                //             this.tabFour = this.tabStateChange(this.tabFour);
                //             this.tabSix = this.tabStateChange(this.tabSix);
                //             this.tabFive = this.tabStateChange(this.tabFive);
                //         }
                //         this.tabSeven.bgColor ='#3d3bee';
                //         this.tabSeven.color = '#FFF';
                //         // this.tabFive.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                //         this.tabSeven.active = true;
                //         this.tabSeven.icon = this.tabSeven.whiteIcon;
                //         this.jump('/solution')
                //     break;
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
  .lead-scroller {
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

    .tab-icon-text-gap {
        margin-bottom: 10px;
    }


    @media (min-width: 320px) {
            .tab-bar {
                flex-direction: row;
/*                margin-bottom: 20px;
                margin-top: 0;
*/            }

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

            .tab-icon-text-gap {
                margin-bottom: 10px;
            }

    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {
        
    }
</style>

