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
                        color: '#ff',
                        shade: '',
                        icon: iconSrc+'supervisor_account_white_192x192.png',
                        title: 'Human Life Value',
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
                        title: 'Retirement Corpus Need',
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
                        title: 'Cost of Childs Future',
                        counter: 34,
                        active: false,
                        blackIcon: iconSrc+'input_black_192x192.png',
                        whiteIcon: iconSrc+'input_white_192x192.png'
                    },
                
    
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
                            if(this.tabTwo.active === true ||  this.tabThree.active === true) {
                                this.tabTwo = this.tabStateChange(this.tabTwo); 
                                this.tabThree = this.tabStateChange(this.tabThree);
                       
                            }
                            this.tabOne.bgColor ='#3d3bee';
                            this.tabOne.color = '#FFF';
                            // this.tabOne.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                            this.tabOne.active = true;
                            this.tabOne.icon = this.tabOne.whiteIcon;
                            this.jump('/calculatorhuman')
                        break;
                        case 2:
                            if(this.tabOne.active === true ||  this.tabThree.active === true ) {
                                this.tabThree = this.tabStateChange(this.tabThree); 
                                this.tabOne = this.tabStateChange(this.tabOne);
                           
                            }
                            this.tabTwo.bgColor ='#3d3bee';
                            this.tabTwo.color = '#FFF';
                            // this.tabTwo.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                            this.tabTwo.active = true;
                            this.tabTwo.icon = this.tabTwo.whiteIcon;
                            this.jump('/calculatorretire')
                        break;
    
                        case 3:
                            if(this.tabOne.active === true || this.tabTwo.active === true) {
                                this.tabTwo = this.tabStateChange(this.tabTwo); 
                                this.tabOne = this.tabStateChange(this.tabOne);
                            
                            }
                            this.tabThree.bgColor ='#3d3bee';
                            this.tabThree.color = '#FFF';
                            // this.tabThree.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                            this.tabThree.active = true;
                            this.tabThree.icon = this.tabThree.whiteIcon;
                            this.jump('/calculatorchild')
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
        .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
        .m-scroller {
            flex-direction: row;
        }
        .tab-bar {
            flex-direction: row;
            margin-top: 20px;
            margin-bottom: 20px;
        }
    
        .tabs-content {
            flex-direction: column;
            align-items: center;
        }
    
        .tabs-box {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            background-color: #ffffff;
            min-height: 10px;
            padding: 20px;
            min-width: 200px; 
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
            font-family:robotoregular;
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
            font-family:robotoregular;
            /* transform: translate(-15%, -15%); */
        }
        .text-color-white {
            color: #FFFFFF;
        }
    
        .tab-icon-text-gap {
            margin-bottom: 15px;
        }
    
    
        @media (min-width: 320px) {
                .tab-bar {
                    flex-direction: row;
                    /*margin-top: 0;*/
                    /*margin-bottom: 20px;*/
                }
    
                .tabs-box {
                    border-radius: 5px;
                    min-width: 140px; 
                } 
    
                /* .tabAc {
                    background-color: #3d3bee;
                    transition: left 1.2s ease-in-out;
                    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); 
                } */
    
                .tab-text {
                    font-size: 12px;
                    font-family:robotoregular;
                }
                .tab-icon-text-gap {
                    margin-bottom: 10px;
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
                    font-family:robotoregular;
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
    
    