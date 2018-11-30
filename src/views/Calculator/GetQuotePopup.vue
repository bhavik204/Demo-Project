<template>
  <div>
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
                
            </div>
      </div>
      <div>
      </div>

            <div class="tbl-mrgn tbl.pad tbl-mrgn-lft-rght">
                <scroller  scroll-direction="horizontal" class="tbl-row">
                    <div class="tbl-dt-col tbl-dt-flx-wrp tbl-dt-container tbl-whole-brdr">
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
                        <div class="tbl-row tbl-brdr tbl-btm-brdr tbl-rw-align-cntr" v-for="tblData  in obj" :key="index">
                            <div class="calc-Popup-pad tbl-col-1">
                                <text class="calc-Popup-tbl-text">{{tblData._id}}</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-2">
                                <text class="calc-Popup-tbl-text">{{tblData.firstName}}{{tblData.lastName}}</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-3">
                                <text class="calc-Popup-tbl-text e-tb-dt-al-txt">{{tblData.primaryMobile}}</text>
                            </div>
                            <div class="calc-Popup-pad tbl-col-4">
                                <text class="calc-Popup-tbl-text e-tb-dt-al-txt">{{tblData.createdDate}}</text>
                            </div>
<<<<<<< HEAD
                             <div class="calc-Popup-pad tbl-col-3 tbl-row"> 
                                <!-- WEB -->
                                <div @click.native="InsurDesc(4)" v-if="platform === 'Web'" class="calc-Popup-pad">
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
=======
                            <div class="calc-Popup-pad tbl-col-3 tbl-row">
                                <!-- WEB -->
                                <div @click.native="jump('')" v-if="platform === 'Web'" class="calc-Popup-pad">
                                    <image src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" class="tbl-action-icon cursor-pointer-globle" />
                                </div>

                                <!-- APK -->
                                <div @click="jump('')" v-if="platform !== 'Web'" class="calc-Popup-pad">
                                    <image src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" class="tbl-action-icon cursor-pointer-globle" />
                                </div>
                                
                            </div>
>>>>>>> 7e11a04bd16ad7874b5ab346955d3a01d0b97596
                        </div>
                    </div>
                </scroller>
            </div>
      <div v-if="platform !=='Web'" class="calc-Popup-card-wrap" style="flex-direction:row;">
            <div  class="calc-Popup-btn-width calc-Popup-btn-padding cursor-pointer-globle">
            <vx-primary-button 
            :icon-button="false"
            btn-name="Next" 
            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" ></vx-primary-button> 
        </div>
        <div  class="calc-Popup-btn-width calc-Popup-btn-padding cursor-pointer-globle">
           <vx-secondary-button 
            btn-name="Cancel" 
            btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
            @click.native="jump('')"></vx-secondary-button>
        </div>
        </div>
     </div>
     
  </div>
</template>

<script>

import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue';
import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';
import popup from '../Calendar/Todo-pop-up.vue'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
export default {
   created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

             let self  =  this;
                this._id= '5a8c1e7d07151804a888eafc'
                this.GET('getLead/'+ this._id , res =>  {

                if(!res.ok){
                  self.obj = "request failed";
                }else{
                  console.log('get:'+res);
                  self.obj =  res.data.errMsg;
                  console.log(self.obj)
                }

            });


        },
  components:{
      vxInputBox,
      vxPrimaryButton,
      vxSecondaryButton,
      popup
  },
  data(){
      return{
          obj:'',
          platform: invalid,
          agree:'',
          agree1:'',
          table: [{
                    ApptNo: 'APT36578',
                    name: 'Rahul Soni',
                    mobile: '987654321',
                    createdDate: '14/06/1972',
                }, {
                    ApptNo: 'APT36578',
                    name: 'Shreya Ghoshal',
                    mobile: '987654321',
                    createdDate: '20/12/1985',

                }, {
                     ApptNo: 'APT36578',
                    name: 'Sanket Kadam',
                    mobile: '987654321',
                    createdDate: '01/02/1980',
                }]
      }
  }
}
</script>

<style>
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
    
    .tbl-action-icon {
        width: 35px;
        height: 35px;
        margin-right: 12px;
    }
@media screen and (min-width:320px){
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
            width: 250px;
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
            width: 700px;
        }
        .tbl-mrgn {
            margin-bottom: 20px;
        }
        .tbl-mrgn-lft-rght {
            margin-left: 15px;
            margin-right: 15px;
        }
        .tbl-action-icon {
            width: 20px;
            height: 20px;
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
    .tbl.pad {
            padding-left: 10px;
            padding-right: 10px;
        }
        .tbl-mrgn-lft-rght {
            margin-left: 10px;
            margin-right: 10px;
        }
}
@media screen and (min-width:992px){
    .calc-Popup-btn-width{
        width: 20%;
    }
}
</style>
