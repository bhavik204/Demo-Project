<template>
  <div>
      <div class="email-container-padding">
           <div class="email-flx-row email-container-pad email-aligin-itms">
                <div class="email-outer-width email-flx" >     
                    <!-- <vx-input-box vx-label="To" vx-placeholder="Enter Email" :vx-model="to" ></vx-input-box> -->
                    <text class="email-lbl-font-size">To</text>
                    <textarea class="textarea" placeholder="Email" :v-model="to"></textarea>
                    <text class="email-lbl-font-sizelbl" style="margin-top:10px;font-style:italic;">Enter multiple email Id's with comma(,).</text>
                </div>
            </div>

            <div class="email-flx-row email-container-pad email-aligin-itms">
                <div class="email-inner-width email-flx">     
                    <!-- <vx-input-box vx-label="Subject" vx-placeholder="Enter Subject" :vx-model="sub" ></vx-input-box> -->
                    <text class="email-lbl-font-size">Subject</text>
                    <textarea class="textarea" placeholder="Subject" :v-model="sub"></textarea>
                </div>
            </div>

            <div class="email-flx-row email-container-pad email-aligin-itms">
                <div class="email-inner-width email-flx">     
                    <!-- <vx-input-box vx-label="Subject" vx-placeholder="Enter Subject" :vx-model="sub" ></vx-input-box> -->
                    <text class="email-lbl-font-size">Body</text>
                    <textarea class="textarea-body" placeholder="Enter text" :v-model="body"></textarea>
                </div>
            </div>

<div>
    <div class="email-flx-row ">
        <div v-if="platform !== 'Web'" class="email-md-btn-widthpop btn-padding cursor-pointer-globle" style="margin-left: 10px">
            <vx-primary-button 
            btn-name="Send" 
            btn-icon="https://www.materialui.co/materialIcons/content/send_white_192x192.png" >
            </vx-primary-button> 
        </div>
        <div v-if="platform !== 'Web'" class="email-md-btn-widthpop btn-padding cursor-pointer-globle">
           <vx-secondary-button 
            btn-name="Cancel" 
            btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
            @click.native="jump('/master/testapp')">
            </vx-secondary-button>
        </div>
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
    export default {
       
        components: {
           vxInputBox,
           vxPrimaryButton,
           vxSecondaryButton,
           popup
        },

        created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
        data(){
            return{ 
                platform: invalid,
                to:'',
                sub:'',
                
            }
        },
        methods:{
             jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
  },
        }

       
        }

</script>
<style>
        
  .email-flx-row {
        padding-top: 20px;
        flex-direction: row;
        
    }
    .email-container-pad {
        padding: 10px;
    }
    .email-aligin-itms {
        align-items: center;
    }
        .email-inner-width{
            width:100%;
        }
        .email-outer-width{
            width:50%;
        }

        .email-md-btn-width{
            width: 50%;
            
        }
        .textarea {
            font-size: 24px;
            width: 650px;
            margin-top: 12px;
            padding: 20px;
            border-width: 1px;
            border-style:solid;
            border-bottom-color: #999999;
            border-top-color:white;
            border-left-color:white;
            border-right-color:white;
            placeholder-color: #ddd;
        }
        .textarea-body{
             font-size: 24px;
            width: 650px;
            margin-top: 12px;
            padding: 20px;
            border-width: 1px;
            border-style:solid;
            border-color: #999999;
          
            placeholder-color: #ddd;
        }

        .email-lbl-font-size {
        font-size: 24px;
        color: grey;
        }
        .email-lbl-font-sizelbl{
        
        font-size: 24px;
        color: gray;
        }

        .email-flx{
            width: 750px;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
        }
        .email-md-btn-widthpop{
            width: 200px;
        }
        .btn-padding{
            /* padding-left: 20px; */
        padding:12px;
        margin-bottom:10px;
    }
    @media screen and (min-width:320px){
        /* Mobile Web */
        .email-container-pad {
            padding: 5px;
        }
      
        

         .email-md-btn-width{
            width: 49%;
        }

        .email-container-padding{
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-top: 20px;
        }
        
        .textarea {
            font-size: 14px;
            width: 100%;
            margin-top: 12px;
            padding: 5px;
            border-width: 1px;
        }

        .textarea-body{
             font-size: 14px;
            width: 100%;
            /* margin-top: 12px;
            padding: 5px; */
            border-width: 1px;
            
        }

        ::-webkit-input-placeholder{ 
            color:#ddd; 
        }
        .email-lbl-font-size {
        font-size: 14px;

        }
        .email-lbl-font-sizelbl{
        /* margin-top:10px; */
        font-size: 12px;
        }

        .email-flx{
            width: 100%;
        }
        
    }
    @media screen and (min-width:768px){
        /* tab web */
         .email-md-btn-width{
            width: 23%;
        }
        

    }
    @media screen and (min-width:992px){
        /* desktop */
         .email-md-btn-width{
            width: 15%;
        }
    }

</style>
