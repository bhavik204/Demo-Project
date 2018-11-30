<template>
    <div>  
        <div>
            <!-- <text>{{products}} </text> -->
        </div>
        <div class="child-page-contianer ch-pg-shadow ch-page-crd-margin-btm">
            <!-- product title -->
            <div class="ch-pg-pad-10 ch-pg-title-btm-bdr">
                <text class="child-page-crd-hedding">{{products.productName}}</text>
            </div>
            <!-- product description -->
            <div class="ch-pg-cont-body">
                <!-- content -->
                <div class="">
                    <text class="child-page-normal-font">{{products.productDescription}}</text>
                </div>
            </div>
            <!-- product footer -->

            <!-- Row reverse for moving button right side -->
            <div class="ch-page-footer-row" style="align-items:center;justify-content:space-between">
                <div v-if="platform === 'Web'"> 
                    <text class="child-page-normal-font cursor-pointer-globle"
                     style="color:blue;"
                     @click.native="openOverlay(1)">Show more</text>
                </div>
                 <div v-if="platform !== 'Web'"> 
                    <text class="child-page-normal-font"
                     style="color:blue;"
                     @click="jump('/product_details')">Show more</text>
                </div>
                <div  v-if="platform === 'Web'" class="prduct-dec-button-width" @click.native="showLeadPopoup(products)">
                    <vx-primary-btn 
                    class="cursor-pointer-globle"
                            btn-name="Benefit Illustration"
                            btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                    </vx-primary-btn>
                </div>
                <div  v-if="platform !== 'Web'" class="prduct-dec-button-width" @click="jump('/master/testapp')">
                    <vx-primary-btn 
                            btn-name="Benefit Illustration"
                            btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                    </vx-primary-btn>
                </div>
                
                <!-- <div v-if="platform !== 'Web'">
                    <text class="child-page-normal-font"
                     style="color:blue;cursor:pointer;"
                     @click="jump('/product_details')">Show more</text>
                </div> -->
            </div>


<div v-if="showPop === true">
            <popup>
                <div class="to-do-flx-row to-do-task-title">
                    <div class="exist-insu-head">
                        <text class="to-do-title-font">Select the proposer</text>
                    </div>
                </div>

                  <div class="calc-Popup-container-padding calc-Popup-card-wrap">
        <div class=" calc-Popup-aligin-itms calc-Popup-cntner-pad ">
          <wxc-checkbox v-if="platform !== 'Web'" title="I agree with the consent mentioned above" :disabled="false" :checked="true"></wxc-checkbox>
            <div  v-if="platform == 'Web'" class="calc-popup-row">
                <input type="checkbox" v-model="agree" class="cursor-pointer-globle" style="margin-right: 12px;">
                <text class="calc-Popup-text-size ">Create a quote for </text>
                <text class="calc-Popup-text-size " style="color:rgb(20, 114, 168);">Rajesh Upmanyu(APT99394)?</text>
            </div>
      </div>
    <div class="calc-Popup-aligin-itms">
        <text class="calc-Popup-text-size ">OR</text>
    </div>
    <div class=" calc-Popup-aligin-itms calc-Popup-cntner-pad" style="margin-right: 105px;">
          <wxc-checkbox v-if="platform !== 'Web'" title="I agree with the consent mentioned above" :disabled="false" :checked="true"></wxc-checkbox>
            <div  v-if="platform == 'Web'" class="calc-popup-row" >
                <input type="checkbox" v-model="agree1" class="cursor-pointer-globle" style="margin-top: 28px;margin-right: 12px;">
                <div style="width:122%;">
                <vx-input-box 
                vx-label="Search for the relevant prospect"
                vx-placeholder="Search"></vx-input-box>
                </div>
                <div>
                    <image src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image>
                </div>
            </div>
      </div>
      <div>
      </div>


            <div class="tbl-mrgn tbl-pad tbl-mrgn-lft-rght" v-if="hasLead === true">
                <!-- <scroller  class="tbl-row">
                <scroller scroll-direction="horizontal"> -->
                    
                    <div class="tbl-dt-col tbl-dt-flx-wrp tbl-dt-container tbl-whole-brdr" >
                        <!-- Header -->
                        <div class="tbl-row tbl-hdr-color tbl-brdr tbl-btm-brdr">
                            <div class="calc-Popup-pad tbl-col-1">
                                <text class="calc-Popup-tbl-text calc-Popup-fnt-wt">Lead ID</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-2">
                                <text class="calc-Popup-tbl-text calc-Popup-fnt-wt">Name</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-3">
                                <text class="calc-Popup-tbl-text calc-Popup-fnt-wt">Mobile</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-4">
                                <text class="calc-Popup-tbl-text calc-Popup-fnt-wt">Created Date</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-3">
                                <text class="calc-Popup-tbl-text calc-Popup-fnt-wt">Action</text>
                            </div>
                        </div>

                        <!-- Row -->
<!-- v-for="calen in obj" :key="calen" -->
                        <div class="tbl-row tbl-brdr tbl-btm-brdr tbl-rw-align-cntr" v-for="(tblData, index)  in obj" :key="index" v-if="'primaryMobile' in tblData">
                            <div class="calc-Popup-pad tbl-col-1">
                                <text class="calc-Popup-tbl-text">{{ tblData._id | userIdShorter}}</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-2">
                                <text class="calc-Popup-tbl-text">{{tblData.firstName +' '+tblData.lastName | to-capitlaize}}</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-3">
                                <text class="calc-Popup-tbl-text e-tb-dt-al-txt">{{tblData.primaryMobile}}</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-4">
                                <text class="calc-Popup-tbl-text e-tb-dt-al-txt">{{tblData.createdDate}}</text>
                            </div>
                             <div class="calc-Popup-pad tbl-col-3 tbl-row"> 
                                <!-- WEB -->
                                <div @click.native="getLeadData(tblData)" v-if="platform === 'Web'" class="calc-Popup-pad">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                <!-- <div  @click.native="deletedata(li)" v-if="platform === 'Web'" class="calc-Popup-pad">
                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div> -->

                                <!-- APK -->
                                 <div @click="jump('/existInsurDialog')" v-if="platform !== 'Web'" class="calc-Popup-pad">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>
                                <!-- <div  @click="deletedata(li)" v-if="platform !== 'Web'" class="calc-Popup-pad">
                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="e-tb-action-icon cursor-pointer-globle" />
                                </div>  -->
                                
                            </div> 
                        </div>
                     </div>
                        

                <!-- </scroller>
                
                </scroller> -->
            </div>
      <div v-if="platform ==='Web'" class="calc-Popup-card-wrap" style="flex-direction:row;">
            <div  class="calc-Popup-btn-width calc-Popup-btn-padding cursor-pointer-globle">
            <vx-primary-btn
            :icon-button="false"
            btn-name="Next" 
            @click.native="next()"
            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" ></vx-primary-btn> 
        </div>
        <div  class="calc-Popup-btn-width calc-Popup-btn-padding cursor-pointer-globle">
           <vx-secondary-btn 
            btn-name="Cancel" 
            btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
            @click.native="closePopUpProduct()"></vx-secondary-btn>
        </div>
        </div>
     </div>
            </popup>
    </div>
            

            

            <!-- popup only for web -->
           


        </div>
        <div v-if="showOverlay === true">
            <popup>
                <!-- <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font">Children Plans</text>
                    </div>
                    <div>
                        <image src="" class="" />
                    </div>
                </div>
                <div class="prduct-overlay-body-height">
                    <div>
                        <overlay-window :call-back="openChildOverlay"></overlay-window>
                    </div>  
                </div>
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="jcb-btn-lft-margin ">
                        
                    </div>
                    <div v-if="platform === 'Web'" class="prduct-dec-button-width">
                        <vx-secondary-btn
                            btn-name="Cancel"
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                            @click.native="openOverlay(2)">
                        </vx-secondary-btn>
                    </div>
                    <div v-if="platform !== 'Web'" class="prduct-dec-button-width">
                        <vx-secondary-btn
                            btn-name="Cancel"
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                            @click="openOverlay(2)">
                        </vx-secondary-btn>
                    </div>
                </div> -->
            </popup>
        </div>

         <div v-if="brochrVisiblity === true">
            <popup>
                <!-- <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font">Product Brochure</text>
                    </div>
                    <div  v-if="platform === 'Web'" class="jcb-icon-position">
                        <image  src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" 
                                 
                                class="jcb-iconcls-iocn"
                                @click.native="openOverlay(5)"/>
                    </div>
                    <div  v-if="platform !== 'Web'" class="jcb-icon-position">
                        <image  src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" 
                                
                                class="jcb-iconcls-iocn"
                                @click="openOverlay(5)"/>
                    </div>
                </div>
                <div class="prduct-overlay-body-height">
                    <div>
                        <brocher></brocher>
                    </div>  
                </div>
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="jcb-btn-lft-margin ">
                        
                    </div>
                    <div class="prduct-dec-button-width">
                        <vx-secondary-btn
                            btn-name="Cancel"
                            btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                            @click.native="openOverlay(3)">
                        </vx-secondary-btn>
                    </div>
                </div> -->
            </popup>
        </div>
           
        
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    // import productTab from './ProductTab.vue'
           import vxInputBox from '../vx-input-box/vx-input-box.vue'
    import vxPrimaryBtn from '../vx-primary-button/vx-primary-button.vue'
    import vxSecondaryBtn from '../vx-primary-button/vx-scondary-button.vue'
    import popup from '../../views/Calendar/Todo-pop-up.vue'
    import overlayWindow from './pop-window.vue'
    import brocher from './Brochers.vue'
    import GetQuotePopup from '@/views/Calculator/GetQuotePopup.vue'

    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

            
             let self  =  this;
                this._id= self.$store.state.agentDetails._id

                this.GET('getLead/'+ this._id+'?leadfilter=open' , res =>  {

                if(!res.ok){
                  self.obj = "request failed";
                } else {
                    if(res.data.errCode !== 4) {
                        if (res.data.errCode === 841) {
                            self.hasLead = false
                        } else {
                            self.obj =  res.data.errMsg;
                            self.hasLead = true
                            console.log('Data Come from database : ', self.obj)
                        }
                    } 
                  
                }

            });
        },
        props: {
            listItems: {
                type: Array
            },
             products: {
                // type: Array,
                required: true
             },


        },
        components: {
            // productTab,
            vxInputBox,
            vxPrimaryBtn,
            vxSecondaryBtn,
            overlayWindow,
            popup,
            brocher,
            GetQuotePopup
        },
        data: function() {
            return {
                showPop:false,
                headerName: 'Products',
                platform: invalid,
                showOverlay: false,
                brochrVisiblity: false,
                obj:'',
                agree1: '',
                agree: '',

                hasLead: false,

                

                childrenPlans: [
                    {
                        title: 'Traditional Group Employee Benfit Plan (MBR-Par)',
                        description: 'A yearly renewable fund based group product which enables employers to outsource fund management and related administration to ABC insurance company limited for their superannuation scheme.',
                        subList: [
                            'Product Broucher',
                            'Product Leaflets',
                            'FAB Sheet',
                            'Product Working PPT'
                        ]
                    }
                ]
            }
          
    
        },

        methods: {
            next(){
                var me = this
                me.$store.commit('SET_PROPOSALFLOW_STATUS','true')
                 me.$store.commit('SET_POST_FLOW_STATUS','true')
                 me.$store.state.applicationFormData =[];
                me.$router.push('/master/testapp')
            },

            showLeadPopoup(prod){
               var me = this
              
               me.$store.commit('ADD_BI_DATA',{productId:prod} )
this.showPop = true

            },
            closePopUpProduct(){
              this.showPop = false
            },
            getLeadData(data){
                var me = this
             
             console.log(data)
             me.$store.commit('ADD_BI_DATA',{leadId:data})
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            
            gotoJump() {
                navigator.push({
                    url: createURL('/pcard'),
                    animated: 'true'
                })
            },
            openOverlay(id) {
                switch(id) {
                    case 1:
                        this.showOverlay = true;
                        console.log("working");
                    break;
                    case 2:
                        this.showOverlay = false;
                    break;
                    case 3: 
                        this.showOverlay = false;
                        this.brochrVisiblity = false;
                    break;
                }
               
            },
            openChildOverlay() {
                this.brochrVisiblity = true;
            }


        },
        filters: {
            userIdShorter(id) {
                return 'L' +id.slice(16, 25).toUpperCase();
            }
        }
    }
</script>

<style>

/*POPUP BENEFIT*/
.calc-popup-row{
    flex-direction: row;
}
.calc-Popup-card-wrap{
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
        
    }
    .calc-Popup-text-size{
        color: gray;
        font-size: 24px;
    }

    .calc-Popup-aligin-itms {
        align-items: center;
    }
    .calc-Popup-cntner-pad{
        padding: 10px;
    }
    .calc-Popup-btn-width{
        width: 200px;
    }
    .calc-Popup-tbl-text{
        font-size: 25px;
        font-family: robotoregular;
    }
    .calc-Popup-fnt-wt{
        font-weight: 700
    }
    .calc-Popup-pad{
        padding: 10px;
    }

     /* for ApptNO */
    .tbl-col-1 {
        width: 200px;
    }

    /* For name */
    .tbl-col-2 {
        width: 350px;
    }
    /* for Mobile */
    .tbl-col-3 {
        width: 180px;
    }

    /* Created date */
    .tbl-col-4 {
        width: 250px;
    }
    .tbl-row{
        flex-direction: row;
    }
    .tbl-row-vertical{
        flex-direction: column;
        max-height:920px;
    }

    .tbl-hdr-color{
        background-color: rgb(223, 223, 223);
    }
    /* table borders */
    .tbl-brdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #FFF;
    }
    .tbl-btm-brdr {
        border-bottom-color: rgb(232, 232, 232);;
    }
    .tbl-rw-align-cntr {
        align-items: center;
    }
    .tbl-dt-col {
        flex-direction: column;
    }
    .tbl-dt-flx-wrp {
        flex-wrap: wrap;
    }
    .tbl-dt-container {
        width: 1120px;
        /* max-height:920px; */
    }
    .tbl-whole-brdr {
            border: 1px solid rgb(232, 232, 232);
    }
    .tbl-mrgn {
            margin-bottom: 30px;
    }
    .tbl-mrgn-lft-rght {
        margin-left: 20px;
        margin-right: 20px;
    }
    /*END*/
    .child-page-contianer {
        background-color: #FFFFFF;
        padding: 20px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
    }
    .ch-page-row {
        flex-direction: row;
    }
    .ch-pg-title-btm-bdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: #ffffff;
        border-left-color: #ffffff;
        border-right-color: #ffffff;
        border-bottom-color: #dfdfdf;
    }
    .ch-pg-cont-body {
        padding-top: 20px;
        margin-bottom: 20px;
    }
    .child-page-normal-font {
        font-size: 24px;
        line-height: 1.5;
        color: #565656;
        font-family:robotoregular;
    }
    .child-page-crd-hedding {
        font-size: 28px;
        font-weight: bold;
        color: #565656;
    }
    .ch-pg-pad-10 {
        margin-left: 15px;
        padding-bottom: 20px;
    }
    .ch-page-crd-margin-btm {
        margin-bottom: 20px;
    }
    .ch-listing-pad {
        padding: 10px;
    }

    .jcb-icon-position {
        position: absolute;
        right: 10px;
    }
      .prduct-dec-button-width {
            width: 280px;
        }
          .ch-page-footer-row {
            flex-direction: row;
        }
    @media screen and (min-width: 320px){
        /*POPUP BENEFIT CSS*/
        .calc-Popup-container-padding {
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
        }
        .calc-Popup-card-wrap{
        border:none;
        /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12); */
        margin:10px 5px 20px 5px;
         padding: 10px;
        }
        .calc-Popup-text-size{
        font-size: 14px;
    }
    .calc-Popup-btn-width{
        padding-left: 12px;
        width: 50%;
    }
    .calc-Popup-tbl-text{
        font-size: 14px;
    }
    .calc-Popup-pad{
        padding: 5px;
    }
    /* for ApptNO */
        .tbl-col-1 {
            width: 120px;
        }

        /* For name */
        .tbl-col-2 {
            width: 120px;
        }
        /* for Mobile */
        .tbl-col-3 {
            width: 100px;
        }

        /* Created DAte */
        .tbl-col-4 {
            width: 150px;
        }
        .tbl-dt-container {
            width: 579px;
            /* max-height: 300px; */
        }
        .tbl-mrgn {
            margin-bottom: 20px;
        }
        .tbl-mrgn-lft-rght {
            margin-left: 15px;
            margin-right: 15px;
            height: 250px;
            overflow: scroll;
        }

         .tbl-row-vertical{
        /* flex-direction: column; */
        max-height:300px;
    }
}
@media screen and (min-width:768px){
    .calc-Popup-card-wrap{
        margin:10px;
        } 
        .calc-Popup-text-size{
        font-size: 14px;
    }
    .calc-Popup-btn-width{
        width: 50%;
    }
    .tbl-pad {
            padding-left: 10px;
            padding-right: 10px;
        }
        .tbl-mrgn-lft-rght {
            margin-left: 10px;
            margin-right: 10px;
        }
        /*END*/
        .child-page-contianer {
               border:none;
            background-color: #FFFFFF;
            padding: 20px;
            border-radius: 3px;
            border: none;
        }
        .child-page-normal-font {
            font-size: 12px;
        }
        .child-page-crd-hedding {
            font-size: 14px;
        }
        .ch-pg-pad-10 {
            padding-bottom: 10px;
            margin-left: 0px
        }
        .ch-pg-shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .ch-pg-cont-body {
            padding-top: 10px;
            margin-bottom: 10px;
        }
        .prduct-dec-button-width {
            width: 150px;
        }
        .ch-page-footer-row {
            flex-direction: row;
        }
        .ch-page-crd-margin-btm {
            margin-bottom: 10px;
        }
        .ch-page-image-width {
            height: 150px;
            width: 100%;
        }
        .jcb-iconcls-iocn {
            width: 25px;
            height: 25px;
        }

    }
    @media screen and (min-width: 768px){
        .prduct-dec-button-width {
            width: 150px;
        }
        .jcb-iconcls-iocn {
            width: 20px;
            height: 20px;
        }
    
    }
    @media screen and (min-width: 992px){

        /*POPUP BEBEFIR CSS*/
            .calc-Popup-btn-width{
        width: 20%;
    }
    /*END*/
        .prduct-dec-button-width {
            width: 150px;
        }

        .prduct-overlay-body-height {
            height: 300px;
            overflow: scroll;
        }
       
    }

</style>