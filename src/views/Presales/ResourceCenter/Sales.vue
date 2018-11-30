<template>
               
    <div style="background-color: #f7f7f7;">
        <!-- <scroller> -->
        <div class="sales-resouce-side-container">
           <div class="sales-resource-row-col">
                <div class="sales-resource-card sales-resource-card-wid shadow">
                    <div class="sales-resource-row" style="justify-content: space-between;">
                        <div class="sales-resource-pad-lft">
                            <text class="sales-resource-char-big sales-resource-pad-btm-10" >Fixed Saving Plan</text>
                        </div>
                        <div class="" style="padding-right:10px">
                            <text class="sales-resource-char-lit">15 Jan 2016</text>
                        </div>
                    </div>
                    <div class="sales-resource-row">
                        <div class="sales-resource-pad-lft-10" >
                            <image class="birth-user-icon sales-resource-pad-btm-7" title="PDF Download" @click.native="openOverlay(1)"  src="http://159.89.161.64:8081/web/assets/PDF.png"></image>
                        </div>
                        <div class="sales-resource-row sales-resource-pad-lft" style="align-items: center; flex:2">
                            <div class="sales-resource-col" style="flex:1">
                                <text class="sales-resource-char-sml">Author</text>
                                <text class="sales-resource-char-big">Ramesh Sharma</text>
                            </div>
                             <div  v-if="platform === 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                class="cursor-pointer-globle"
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                            <div  v-if="platform !== 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                            <!-- <brocher></brocher> -->
                        </div>
                    </div>
                </div>
                <div class="sales-resource-card sales-resource-card-wid shadow">
                   <div class="sales-resource-row" style="justify-content: space-between;">
                        <div class="sales-resource-pad-lft">
                            <text class="sales-resource-char-big sales-resource-pad-btm-10" >Guaranteed Money Back</text>
                        </div>
                        <div class="" style="padding-right:10px">
                            <text class="sales-resource-char-lit">09 Feb 2016</text>
                        </div>
                    </div>
                    <div class="sales-resource-row">
                        <div class="sales-resource-pad-lft-10">
                            <image class="birth-user-icon sales-resource-pad-btm-7" title="Document Download"   src="http://159.89.161.64:8081/web/assets/Document00.png"></image>
                        </div>
                        <div class="sales-resource-row sales-resource-pad-lft" style="align-items: center; flex:2">
                            <div class="sales-resource-col" style="flex:1">
                                <text class="sales-resource-char-sml">Author</text>
                                <text class="sales-resource-char-big">Pradeep Shinde</text>
                            </div>
                            <div  v-if="platform === 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                class="cursor-pointer-globle"
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                            <div  v-if="platform !== 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                        </div>
                    </div>
                </div> 

            </div> 
            <div class="sales-resource-row-col">
                <div class="sales-resource-card sales-resource-card-wid shadow">
                    <div class="sales-resource-row" style="justify-content: space-between;">
                        <div class="sales-resource-pad-lft">
                            <text class="sales-resource-char-big sales-resource-pad-btm-10" >Super Money Back</text>
                        </div>
                        <div class="" style="padding-right:10px">
                            <text class="sales-resource-char-lit">21 April 2016</text>
                        </div>
                    </div>
                    <div class="sales-resource-row">
                        <div class="sales-resource-pad-lft-10">
                            <image class="birth-user-icon sales-resource-pad-btm-7" title="Excel Download"  src="http://159.89.161.64:8081/web/assets/Excel.png"></image>
                        </div>
                        <div class="sales-resource-row sales-resource-pad-lft" style="align-items: center; flex:2">
                            <div class="sales-resource-col" style="flex:1">
                                <text class="sales-resource-char-sml">Author</text>
                                <text class="sales-resource-char-big">Naresh Gupta</text>
                            </div>
                            <div  v-if="platform === 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                class="cursor-pointer-globle"
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                            <div  v-if="platform !== 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sales-resource-card sales-resource-card-wid shadow">
                    <div class="sales-resource-row" style="justify-content: space-between;">
                        <div class="sales-resource-pad-lft">
                            <text class="sales-resource-char-big sales-resource-pad-btm-10" >Super Endowment Plan</text>
                        </div>
                        <div class="" style="padding-right:10px">
                            <text class="sales-resource-char-lit">18 Mar 2016</text>
                        </div>
                    </div>
                    <div class="sales-resource-row">
                        <div class="sales-resource-pad-lft-10">
                            <image class="birth-user-icon sales-resource-pad-btm-7" title="Viedo Download"  src="http://159.89.161.64:8081/web/assets/Video.png"></image>
                        </div>
                        <div class="sales-resource-row sales-resource-pad-lft" style="align-items: center; flex:2">
                            <div class="sales-resource-col" style="flex:1">
                                <text class="sales-resource-char-sml">Author</text>
                                <text class="sales-resource-char-big">Sumit Munde</text>
                            </div>
                            <div  v-if="platform === 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                class="cursor-pointer-globle"
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                            <div  v-if="platform !== 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                        </div>
                    </div>
                </div> 

            </div> 
             <div class="sales-resource-row-col">
                <div class="sales-resource-card sales-resource-card-wid shadow">
                    <div class="sales-resource-row" style="justify-content: space-between;">
                        <div class="sales-resource-pad-lft">
                            <text class="sales-resource-char-big sales-resource-pad-btm-10" >Child Plan</text>
                        </div>
                        <div class="" style="padding-right:10px">
                            <text class="sales-resource-char-lit">9 Aug 2016</text>
                        </div>
                    </div>
                    <div class="sales-resource-row">
                        <div class="sales-resource-pad-lft-10">
                            <image class="birth-user-icon sales-resource-pad-btm-7" title="Document Download"  src="http://159.89.161.64:8081/web/assets/PDF.png"></image>
                        </div>
                        <div class="sales-resource-row sales-resource-pad-lft" style="align-items: center; flex:2">
                            <div class="sales-resource-col" style="flex:1">
                                <text class="sales-resource-char-sml">Author</text>
                                <text class="sales-resource-char-big">Mohan Kale</text>
                            </div>
                            <div  v-if="platform === 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                class="cursor-pointer-globle"
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                            <div  v-if="platform !== 'Web'" class="prd-BI-button-width" >
                                <vx-primary-btn 
                                btn-name="Download"
                                btn-icon="https://www.materialui.co/materialIcons/action/get_app_white_192x192.png">
                                </vx-primary-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>


        <!-- </scroller> -->
 </div>
                                            

</template>

<script>
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'
    const picker = weex.requireModule('picker');
     import vxPrimaryBtn from '../../../components/vx-primary-button/vx-primary-button.vue'
    //  import brocher from '../../components/Sales_Guid/Brochers.vue'
    
    // import customer from './Customer.vue'
    export default {
        created() {
        if (typeof WXEnvironment === 'object') {
  
          this.platform = WXEnvironment.platform || unknown
          this.deviceWidth = WXEnvironment.deviceWidth || unknown
          return this.platform
        }
      },
        props: {
            listItems: {
                type: Array
            }

        },
        components:{ vxPrimaryBtn },
        data: function() {
            return {
            headerName:'Presales',
            platform: invalid,
            deviceWidth: invalid
            
            }
        },
        
        methods: {

        }
        
    }
  
    
</script>

<style scoped>
    .scroller {
        width:  3000px;
        flex-direction: row;
        height:60px;
    }
     .sales-resouce-side-container {
        flex-direction: column;
        flex: 2;
    }
.sales-resource-card {
    background-color: #ffffff;
    padding: 10px;
    margin: 7px;
    justify-content: flex-end
    

}
.sales-resource-row {
    flex-direction: row;
    
}
.sales-resource-col {
    flex-direction: column;
}
.sales-resource-row-col {
    flex-direction: column; 
}
.sales-resource-card-wid {
    width: 720px;
}
.sales-resource-char-big {
     font-size: 25px;
     font-weight: bold;
     font-family: robotoregular;
     color: #594f4f;
   
}
.sales-resource-char-sml {
     font-size: 24px;
    font-family: robotoregular;
    color: #beb7b7;
    
   
}
.sales-resource-char-sml-color-cust {
     font-size: 24px;
    font-family: robotoregular;
    color:rgb(206, 25, 230); 
   
}
.sales-resource-char-sml-color-agent {
     font-size: 24px;
    font-family: robotoregular;
    color:rgb(230, 66, 25); 
   
}
.sales-resource-char-lit {
     font-size: 22px;
     font-weight: bold;
    font-family: robotoregular;
   
}
.shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}
.sales-resource-bor-bottom{
    border-width: 1px;
    border-style: solid;
    border-top-color: #ffffff;
    border-left-color: #ffffff;
    border-right-color: #ffffff;
    border-bottom-color: #dfdfdf;
}
.sales-resource-button-width {
    width: 180px;
}
.mouse-pointer {
    cursor: pointer;
}        
.birth-user-icon {
    width: 100px;
    height: 100px;
     top: 3px;
    left: 2.5px;
    cursor: pointer;
}
 .adprof-circle {
        height: 110px;
        width: 110px;
        background-color: #2196f3;
        border-radius: 50px;
    }
    .sales-resource-pad-lft {
        padding-left: 20px;
    }
     .sales-resource-pad-lft-10 {
        padding-left:10px;
    }
    .sales-resource-pad-btm-10 {
        padding-bottom: 10px;
    }
    .sales-resource-pad-btm-7 {
        padding-bottom: 7px;
    }
      .prd-BI-button-width {
            width: 280px;
        }
@media only screen and (min-width: 320px){
      .prd-BI-button-width {
            width: 120px;
        }
    .sales-resource-row-col {
    flex-direction: column; 
}
.sales-resource-card-wid {
      width:97%;
}
.sales-resource-card {
    background-color: #ffffff;
    padding: 10px;
    margin: 10px;
    border-radius: 3px;
   border: none;
   margin-left: 5px;
}
.sales-resource-char-big {
    font-size: 15px;
     font-weight: bold;
    font-family: robotoregular;
}
.sales-resource-char-sml {
    font-size: 14px;
    font-family: robotoregular;
}
.sales-resource-char-sml-color-cust {
     font-size: 14px;
    font-family: robotoregular;
    color:rgb(206, 25, 230); 
   
}
.sales-resource-char-sml-color-agent {
     font-size: 14px;
    font-family: robotoregular;
    color:rgb(230, 66, 25); 
   
}
.sales-resource-char-lit {
    font-size: 12px;
    font-weight: bold;
    font-family: robotoregular;
}
  .cost-all-tab-button-width {
            width: 105px;
}
.birth-user-icon {
    width: 75px;
    height: 70px;
    top: 3px;
    left: 2.5px;
}
 .sales-resource-circle {
        height: 20px;
        width: 20px;
        background-color: #2196f3;
        border-radius: 50px;
    }
}
@media only screen and (min-width: 768px){

}
@media only screen and (min-width: 992px){
.sales-resource-row-col {
    flex-direction: row; 
}
.sales-resource-card-wid {
      width:48%;
}
}


</style>