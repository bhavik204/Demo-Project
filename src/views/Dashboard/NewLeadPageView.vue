<template>
    <div>
        <!-- <app-sales-header v-if="platform === 'Web'"></app-sales-header> -->
        <div class="" style="">

        
        <scroller class="lead-frm-scroller" scroll-direction="horizontal">

        <div class="tab-bar">
            <div  class="tabs-box" :style="{boxShadow: tabOne.shade, backgroundColor: tabOne.bgColor}" @click.native="activeTab(1)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabOne.icon"/>
                    </div>
                    <div>
                        <text class="tab-text large-text" :style="{color: tabOne.color}">{{tabOne.title}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabTwo.counter}}</text>
                </div> -->
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabTwo.shade, backgroundColor: tabTwo.bgColor}" @click.native="activeTab(2)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabTwo.icon"/>
                    </div>
                    <div>
                        <text class="tab-text large-text" :style="{color: tabTwo.color}">{{tabTwo.title}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabThree.counter}}</text>
                </div> -->
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabThree.shade, backgroundColor: tabThree.bgColor}" @click.native="activeTab(3)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabThree.icon"/>
                    </div>
                    <div>
                        <text class="tab-text large-text" :style="{color: tabThree.color}">{{tabThree.title}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabFour.counter}}</text>
                </div> -->
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabFour.shade, backgroundColor: tabFour.bgColor}" @click.native="activeTab(4)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabFour.icon"/>
                    </div>
                    <div>
                        <text class="tab-text large-text" :style="{color: tabFour.color}">{{tabFour.title}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabFive.counter}}</text>
                </div> -->
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabFive.shade, backgroundColor: tabFive.bgColor}" @click.native="activeTab(5)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabFive.icon"/>
                    </div>
                    <div>
                        <text class="tab-text large-text" :style="{color: tabFive.color}">{{tabFive.title}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabFive.counter}}</text>
                </div> -->
            </div>
            <div  class="tabs-box" :style="{boxShadow: tabSix.shade, backgroundColor: tabSix.bgColor}" @click.native="activeTab(6)">
                <div class="tabs-content">
                    <div class="">
                        <image class="tab-icon" :src="tabSix.icon"/>
                    </div>
                    <div>
                        <text class="tab-text large-text" :style="{color: tabSix.color}">{{tabSix.title}}</text>
                    </div>
                </div>
                <!-- <div class="counter">
                    <text class="counter-text">{{tabFive.counter}}</text>
                </div> -->
            </div>
        </div>
        </scroller>
        </div>

        <scroller>
            <div class="n-l-d-forms-wrapper-row">
                <app-product-details v-if="prodDetil == true"></app-product-details>
                <app-contact-details v-if="contDetil == true"></app-contact-details>
                <app-personal-details v-if="persnlDetil == true"></app-personal-details>
                <app-profe-details v-if="profeDetil == true"></app-profe-details>
                <app-status v-if="sts == true"></app-status>
                <app-existing v-if="existingDt == true"></app-existing>
            </div>
        </scroller>

    </div>
</template>

<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'


    import appProductDetails from '../Lead/ProductDetails.vue'
    import appPersonalDetails from '../Lead/PersonalDetails.vue'
    import appContactDetails from '../Lead/ContactDetails.vue'
    import appProfeDetails from '../Lead/ProfessionalDetails.vue'
    import appStatus from '../Lead/Status'
    import appExisting from '../Lead/ExistingDetails.vue'

    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    export default {
        components: {
            appProductDetails,
            appPersonalDetails,
            appContactDetails,
            appProfeDetails,
            appStatus,
            appExisting
        },
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        data() {
            return {
                prodDetil: false,
                contDetil: false,
                persnlDetil: true,
                profeDetil: false,
                sts: false,
                existingDt: false,

                tabOne: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'date_range_black_192x192.png',
                    title: 'Personal Details',
                    counter: 2,
                    active: false,
                    blackIcon: iconSrc + 'date_range_black_192x192.png',
                    whiteIcon: iconSrc + 'date_range_white_192x192.png'
                },
                tabTwo: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'open_in_new_black_192x192.png',
                    title: 'Contact Details',
                    counter: 34,
                    active: false,
                    blackIcon: iconSrc + 'open_in_new_black_192x192.png',
                    whiteIcon: iconSrc + 'open_in_new_white_192x192.png'
                },
                tabThree: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'swap_horiz_black_192x192.png',
                    title: 'Professional Details',
                    counter: 23,
                    active: false,
                    blackIcon: iconSrc + 'swap_horiz_black_192x192.png',
                    whiteIcon: iconSrc + 'swap_horiz_white_192x192.png'
                },
                tabFour: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'description_black_192x192.png',
                    // title: 'Existing Insurance & Ownership Details',
                    title: 'Existing Insurance',
                    counter: 60,
                    active: false,
                    blackIcon: iconSrc + 'description_black_192x192.png',
                    whiteIcon: iconSrc + 'description_white_192x192.png'
                },
                tabFive: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'description_black_192x192.png',
                    title: 'Product Details',
                    counter: 60,
                    active: false,
                    blackIcon: iconSrc + 'description_black_192x192.png',
                    whiteIcon: iconSrc + 'description_white_192x192.png'
                },
                tabSix: {
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'description_black_192x192.png',
                    title: 'Status',
                    counter: 60,
                    active: false,
                    blackIcon: iconSrc + 'description_black_192x192.png',
                    whiteIcon: iconSrc + 'description_white_192x192.png'
                },
                tabSeven: {
                              bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: iconSrc + 'description_black_192x192.png',
                    title: 'Status',
                    counter: 60,
                    active: false,
                    blackIcon: iconSrc + 'description_black_192x192.png',
                    whiteIcon: iconSrc + 'description_white_192x192.png'
                }

            }
        },


        filters: {
            'to-uppercase' (str) {
                str = str.toLowerCase();
                // str = str.split('');
                let finalStr = '';

                for (let i = 0; i < str.length; i++) {
                    if (str === 'ftnr') {
                        finalStr = str.toUpperCase();
                    } else {
                        if (i === 0) {
                            finalStr = finalStr + '' + str[i].toUpperCase();
                        } else {
                            finalStr = finalStr + '' + str[i];
                        }
                    }
                }
                return finalStr;
            }
        },

        methods: {
            activeTab(tabID) {
                switch (tabID) {
                    case 1:
                        if (this.tabTwo.active === true || this.tabFour.active === true || this.tabThree.active === true || this.tabFive.active === true ||
                            this.tabSix.active === true || this.tabSeven.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo);
                            this.tabThree = this.tabStateChange(this.tabThree);
                            this.tabFour = this.tabStateChange(this.tabFour);
                            this.tabFive = this.tabStateChange(this.tabFive);
                            this.tabSix = this.tabStateChange(this.tabSix);
                            this.tabSeven = this.tabStateChange(this.tabSeven);

                            this.contDetil = false;
                            this.profeDetil = false;
                            this.existingDt = false;
                            this.prodDetil = false;
                            this.sts = false;


                        }
                        this.tabOne.bgColor = '#3d3bee';
                        this.tabOne.color = '#FFF';
                        // this.tabOne.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabOne.active = true;
                        this.tabOne.icon = this.tabOne.whiteIcon;
                        this.persnlDetil = true;

                        break;
                    case 2:
                        if (this.tabOne.active === true || this.tabFour.active === true || this.tabThree.active === true || this.tabFive.active === true ||
                            this.tabSix.active === true || this.tabSeven.active === true) {
                            this.tabThree = this.tabStateChange(this.tabThree);
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabFour = this.tabStateChange(this.tabFour);
                            this.tabFive = this.tabStateChange(this.tabFive);
                            this.tabSix = this.tabStateChange(this.tabSix);
                            this.tabSeven = this.tabStateChange(this.tabSeven);

                            this.persnlDetil = false;
                            this.profeDetil = false;
                            this.existingDt = false;
                            this.prodDetil = false;
                            this.sts = false;

                        }
                        this.tabTwo.bgColor = '#3d3bee';
                        this.tabTwo.color = '#FFF';
                        // this.tabTwo.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabTwo.active = true;
                        this.tabTwo.icon = this.tabTwo.whiteIcon;
                        this.contDetil = true;

                        break;

                    case 3:
                        if (this.tabOne.active === true || this.tabTwo.active === true || this.tabFour.active === true || this.tabFive.active === true ||
                            this.tabSix.active === true || this.tabSeven.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo);
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabFour = this.tabStateChange(this.tabFour);
                            this.tabFive = this.tabStateChange(this.tabFive);
                            this.tabSix = this.tabStateChange(this.tabSix);
                            this.tabSeven = this.tabStateChange(this.tabSeven);

                            this.persnlDetil = false;
                            this.contDetil = false;

                            this.existingDt = false;
                            this.prodDetil = false;
                            this.sts = false;


                        }
                        this.tabThree.bgColor = '#3d3bee';
                        this.tabThree.color = '#FFF';
                        // this.tabThree.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabThree.active = true;
                        this.tabThree.icon = this.tabThree.whiteIcon;
                        this.profeDetil = true;
                        break;
                    case 4:
                        if (this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFive.active === true ||
                            this.tabSix.active === true || this.tabSeven.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo);
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabThree = this.tabStateChange(this.tabThree);
                            this.tabFive = this.tabStateChange(this.tabFive);
                            this.tabSix = this.tabStateChange(this.tabSix);
                            this.tabSeven = this.tabStateChange(this.tabSeven);
                            this.persnlDetil = false;
                            this.contDetil = false;
                            this.profeDetil = false;
                            this.prodDetil = false;
                            this.sts = false;

                        }
                        this.tabFour.bgColor = '#3d3bee';
                        this.tabFour.color = '#FFF';
                        // this.tabFour.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabFour.active = true;
                        this.tabFour.icon = this.tabFour.whiteIcon;
                        this.existingDt = true;

                        break;
                    case 5:
                        if (this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFour.active === true ||
                            this.tabSix.active === true || this.tabSeven.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo);
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabThree = this.tabStateChange(this.tabThree);
                            this.tabFour = this.tabStateChange(this.tabFour);
                            this.tabSix = this.tabStateChange(this.tabSix);
                            this.tabSeven = this.tabStateChange(this.tabSeven);

                            this.persnlDetil = false;
                            this.contDetil = false;
                            this.profeDetil = false;
                            this.existingDt = false;
                            this.prodDetil = false;
                            this.sts = false;


                        }
                        this.tabFive.bgColor = '#3d3bee';
                        this.tabFive.color = '#FFF';
                        // this.tabFive.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabFive.active = true;
                        this.tabFive.icon = this.tabFive.whiteIcon;
                        this.prodDetil = true;

                        break;
                    case 6:
                        if (this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFour.active === true ||
                            this.tabSeven.active === true || this.tabFive.active === true) {
                            this.tabTwo = this.tabStateChange(this.tabTwo);
                            this.tabOne = this.tabStateChange(this.tabOne);
                            this.tabThree = this.tabStateChange(this.tabThree);
                            this.tabFour = this.tabStateChange(this.tabFour);
                            this.tabFive = this.tabStateChange(this.tabFive);
                            this.tabSeven = this.tabStateChange(this.tabSeven);

                            this.persnlDetil = false;
                            this.contDetil = false;
                            this.profeDetil = false;
                            this.existingDt = false;
                            this.prodDetil = false;

                        }
                        this.tabSix.bgColor = '#3d3bee';
                        this.tabSix.color = '#FFF';
                        // this.tabFive.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        this.tabSix.active = true;
                        this.tabSix.icon = this.tabSix.whiteIcon;
                        // product Form
                        this.sts = true;


                        break;

                        // case 7:
                        //     if(this.tabOne.active === true || this.tabTwo.active === true || this.tabThree.active === true || this.tabFour.active === true
                        //     || this.tabSix.active === true ||  this.tabFive.active === true ) {
                        //         this.tabTwo = this.tabStateChange(this.tabTwo); 
                        //         this.tabOne = this.tabStateChange(this.tabOne);
                        //         this.tabThree = this.tabStateChange(this.tabThree); 
                        //         this.tabFour = this.tabStateChange(this.tabFour);
                        //         this.tabFive = this.tabStateChange(this.tabFive);
                        //         this.tabSix = this.tabStateChange(this.tabSix);
                        //         this.prodDetil = false;
                        //         this.contDetil = false;
                        //         this.profeDetil = false;

                        //         this.existingDt = false
                        //     }
                        //     this.tabSeven.bgColor ='#3d3bee';
                        //     this.tabSeven.color = '#FFF';
                        //     // this.tabFive.shade = '0 15px 20px rgba(0, 0, 0, 0.3)';
                        //     this.tabSeven.active = true;
                        //     this.tabSeven.icon = this.tabSeven.whiteIcon;

                        // break;
                }
            },

            tabStateChange(tabObject) {
                tabObject.bgColor = '#FFF';
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
    .n-l-d-forms-wrapper-row {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .frm-scroller {
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
        top: 14px;
        /* transform: translate(-15%, -15%); */
    }
    /* Updated Button */

    /* Flex-size */
    /* .n-l-d-flex-01 {
        flex: 1;
    }

    */
    
    @media (min-width: 320px) {
        .tab-bar {
            flex-direction: row;
/*            margin-bottom: 20px;
            margin-top: 0;
*/        }
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
        .large-text {
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
        }

        /* Forms Design */
        
        
    }
    
    @media (min-width: 768px) {
       
    }
    
    @media (min-width: 992px) {
        
    }
</style>