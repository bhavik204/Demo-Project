<template>
<div style="background-color: #f7f7f7">
    <headerTab >  </headerTab>
     <!-- <router-view></router-view> -->
    <div class="const-all-tab-flex-row ">

        <div class="const-all-tab-card const-all-tab-card-wdth shadow">
            <div class="const-all-tab-flex-row-row " style="align-items:center;justify-content:space-between">
                <div class="">
                    <text class="const-all-tab-char-big-fix const-bor-cont-sel" style="padding-bottom: 3px;">Digital East</text>

                </div>
                <div class="">
                    <text class="const-all-tab-char-lit-fix ">1st Jun to 30th Jun</text>

                </div>
            </div>
            <div class="const-all-tab-flex-row-row" style="align-items:center;justify-content:space-between">
                <div class="const-all-tab-flex-row-row">
                    <div class="const-prog-hide" style="flex-direction:row; ;align-items: center"> 
                        <wxc-progress :value=40  :bar-height=16 :bar-width=130></wxc-progress>
                    </div>
                    <div class="" style="padding-left: 5px;"><text class="const-all-tab-char-sml-fix">40% Achieved</text> </div>
                </div>
                <div class="mouse-pointer" style="flex-direction: row-reverse;">
                    <div  v-if="platform === 'Web'" style="padding:10px" class="cost-all-tab-button-width"  @click.native="jump('/mastercontests/newdetails/newone')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                            </vx-primary-btn>                    
                        
                    </div>
                    <div  v-if="platform !== 'Web'" style="padding:10px" class="cost-all-tab-button-width"  @click="jump('/mastercontests/newdetails/newone')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                        </vx-primary-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="const-all-tab-card const-all-tab-card-wdth shadow">
           <div class="const-all-tab-flex-row-row " style="align-items:center;justify-content:space-between">
                <div class="">
                    <text class="const-all-tab-char-big-fix const-bor-cont-sel-big" style="padding-bottom: 3px;">Contest No.2</text>

                </div>
                <div class="">
                    <text class="const-all-tab-char-lit-fix ">1st Jun to 30th Jun</text>

                </div>
           </div>
             <div class="const-all-tab-flex-row-row" style="align-items:center;justify-content:space-between">
                <div class="const-all-tab-flex-row-row">
                    <div class="const-prog-hide" style="flex-direction:row; ;align-items: center"> 
                        <wxc-progress :value=57  :bar-height=16 :bar-width=130></wxc-progress>
                    </div>
                    <div class="" style="padding-left: 5px;"><text class="const-all-tab-char-sml-fix">57% Achieved</text> </div>
                </div>
                <div class="mouse-pointer" style="flex-direction: row-reverse;">
                    <div  v-if="platform === 'Web'" style="padding:10px" class="cost-all-tab-button-width"  @click.native="jump('/mastercontests/newcontests2/contests2_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                            </vx-primary-btn>                    
                        
                    </div>
                    <div  v-if="platform !== 'Web'" style="padding:10px" class="cost-all-tab-button-width" @click="jump('/mastercontests/newcontests2/contests2_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                        </vx-primary-btn>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    <div class="const-all-tab-flex-row ">
        <div class="const-all-tab-card const-all-tab-card-wdth shadow">
            <div class="const-all-tab-flex-row-row " style="align-items:center;justify-content:space-between">
                    <div class="">
                        <text class="const-all-tab-char-big-fix const-bor-cont-sel-big" style="padding-bottom: 3px;">Contest No.3</text>

                    </div>
                    <div class="">
                        <text class="const-all-tab-char-lit-fix ">10th Aug to 15th Aug</text>

                    </div>
            </div>
            
             <div class="const-all-tab-flex-row-row" style="align-items:center;justify-content:space-between">
                <div class="const-all-tab-flex-row-row">
                    <div class="const-prog-hide" style="flex-direction:row; ;align-items: center"> 
                        <wxc-progress :value=72  :bar-height=16 :bar-width=130></wxc-progress>
                    </div>
                    <div class="" style="padding-left: 5px;"><text class="const-all-tab-char-sml-fix">72% Achieved</text> </div>
                </div>
                <div class="mouse-pointer" style="flex-direction: row-reverse;">
                    <div  v-if="platform === 'Web'" style="padding:10px" class="cost-all-tab-button-width"  @click.native="jump('/mastercontests/newcontests3/contests3_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                            </vx-primary-btn>                    
                        
                    </div>
                    <div  v-if="platform !== 'Web'" style="padding:10px" class="cost-all-tab-button-width" @click="jump('/mastercontests/newcontests3/contests3_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                        </vx-primary-btn>
                    </div>
                </div>
            </div>
           
        </div>

        <div class="const-all-tab-card const-all-tab-card-wdth shadow">
            <div class="const-all-tab-flex-row-row " style="align-items:center;justify-content:space-between">
                    <div class="">
                        <text class="const-all-tab-char-big-fix const-bor-cont-sel-big" style="padding-bottom: 3px;">Contest No.4</text>

                    </div>
                    <div class="">
                        <text class="const-all-tab-char-lit-fix ">16th Nov to 18th Nov</text>

                    </div>
            </div>
            <div class="const-all-tab-flex-row-row" style="align-items:center;justify-content:space-between">
                <div class="const-all-tab-flex-row-row">
                    <div class="const-prog-hide" style="flex-direction:row; ;align-items: center"> 
                        <wxc-progress :value=35  :bar-height=16 :bar-width=130></wxc-progress>
                    </div>
                    <div class="" style="padding-left: 5px;"><text class="const-all-tab-char-sml-fix">35% Achieved</text> </div>
                </div>
                <div class="mouse-pointer" style="flex-direction: row-reverse;">
                    <div  v-if="platform === 'Web'" style="padding:10px" class="cost-all-tab-button-width"  @click.native="jump('/mastercontests/newcontests4/contests4_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                            </vx-primary-btn>                    
                        
                    </div>
                    <div  v-if="platform !== 'Web'" style="padding:10px" class="cost-all-tab-button-width" @click="jump('/mastercontests/newcontests4/contests4_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                        </vx-primary-btn>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

    <div class="const-all-tab-flex-row ">
        <div class="const-all-tab-card const-all-tab-card-wdth shadow">
            <div class="const-all-tab-flex-row-row " style="align-items:center;justify-content:space-between">
                    <div class="">
                        <text class="const-all-tab-char-big-fix const-bor-cont-sel-big" style="padding-bottom: 3px;">Contest No.5</text>

                    </div>
                    <div class="">
                        <text class="const-all-tab-char-lit-fix ">8th Dec to 18th Dec</text>

                    </div>
            </div>
            
             <div class="const-all-tab-flex-row-row" style="align-items:center;justify-content:space-between">
                <div class="const-all-tab-flex-row-row">
                    <div class="const-prog-hide" style="flex-direction:row; ;align-items: center"> 
                        <wxc-progress :value=82  :bar-height=16 :bar-width=130></wxc-progress>
                    </div>
                    <div class="" style="padding-left: 5px;"><text class="const-all-tab-char-sml-fix">82% Achieved</text> </div>
                </div>
                <div class="mouse-pointer" style="flex-direction: row-reverse;">
                    <div  v-if="platform === 'Web'" style="padding:10px" class="cost-all-tab-button-width"  @click.native="jump('/mastercontests/newcontests5/contests5_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                            </vx-primary-btn>                    
                        
                    </div>
                    <div  v-if="platform !== 'Web'" style="padding:10px" class="cost-all-tab-button-width" @click="jump('/mastercontests/newcontests5/contests5_details')">
                        <vx-primary-btn class="cursor-pointer-globle" btn-name="Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                        </vx-primary-btn>
                    </div>
                </div>
            </div>
           
        </div>
        
    </div>

</div>

</template>

<script>
    import vxPrimaryBtn from '../../components/vx-primary-button/vx-primary-button.vue'
      import headerTab from '../../components/Tabs/HeaderTab.vue'
     import { WxcProgress } from 'weex-ui'
     const picker = weex.requireModule("picker");
    const invalid = '- invalid -';
    export default {
        components: {
           vxPrimaryBtn,WxcProgress,headerTab
           
        },
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        computed: {

        },
        data() {
            return {
               
                
                platform: invalid,
                deviceWidth: invalid,
                

            }
        },
        computed: {

        },
        methods: {

            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            titleType() {
                picker.pick({
                        index: this.index,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.value = items[event.data];
                            this.index = event.data;
                        }
                    }
                );
            },
            pickDate() {
                picker.pickDate({
                        value: this.date
                    },
                    event => {
                        if (event.result === "success") {
                            this.date = event.data;
                        }
                    }
                );
            },
           
        }

    }
</script>

<style>
.const-all-tab-flex-row {
    flex-direction: column;

}
.const-all-tab-flex-row-row {
    flex-direction: row;

}
.const-all-tab-card-wdth {
      width: 720px;
}
.const-all-tab-card {
    background-color: #ffffff;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(139, 139, 139);
}
.const-all-tab-char-big-fix {
    font-size: 25px;
     font-weight: bold;
    font-family: robotoregular;
    
}
.const-all-tab-char-sml-fix {
    font-size: 24px;
    font-family: robotoregular;
}
.const-all-tab-char-lit-fix {
    font-size: 22px;
    font-weight: bold;
    font-family: robotoregular;
}
.shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}
.const-all-tab-bor-bott{
    border-width: 1px;
    border-style: solid;
    border-top-color: #ffffff;
    border-left-color: #ffffff;
    border-right-color: #ffffff;
    border-bottom-color: #dfdfdf;
}
.cost-all-tab-button-width {
    width: 180px;
}
.mouse-pointer {
    cursor: pointer;
}        


@media only screen and (min-width: 320px) {
    .const-all-tab-card-wdth {
      width:95%;
}
.const-all-tab-card {
    background-color: #ffffff;
    padding: 10px;
    margin: 10px;
    border-radius: 3px;
   border: none;
}
.const-all-tab-char-big-fix {
    font-size: 15px;
     font-weight: bold;
    font-family: robotoregular;
}
.const-all-tab-char-sml-fix {
    font-size: 14px;
    font-family: robotoregular;
}
.const-all-tab-char-lit-fix {
    font-size: 12px;
    font-weight: bold;
    font-family: robotoregular;
}
  .cost-all-tab-button-width {
            width: 120px;
}
.const-bor-cont-sel {
    background-color: white;
    width: 85px;
    margin-left: 8px;
    padding-top: 25px;
    /* padding-left: 9px; */
    padding-bottom: 10px;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: #fff;
    border-left-width: 1px;
    border-left-color: #fff;
    border-right-width: 1px;
    border-right-color: #fff;
    border-bottom-width: 2px;
    border-bottom-color: #3b371e;
    margin-bottom: 20px;
}
.const-bor-cont-sel-big {
    background-color: white;
    width: 92px;
    margin-left: 8px;
    padding-top: 25px;
    /* padding-left: 9px; */
    padding-bottom: 10px;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: #fff;
    border-left-width: 1px;
    border-left-color: #fff;
    border-right-width: 1px;
    border-right-color: #fff;
    border-bottom-width: 2px;
    border-bottom-color: #3b371e;
    margin-bottom: 20px;
}
.const-prog-hide {
display: block;
}
}


@media only screen and (min-width: 768px) {
    .const-prog-hide {
display: block;
}

}


@media only screen and (min-width: 992px) {
 .const-all-tab-flex-row {
    flex-direction: row;

}
    .const-all-tab-card-wdth {
      width:46%;
}
.const-prog-hide {
display: block;
}
}
</style>