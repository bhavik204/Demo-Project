<template>
<div class="card-justify-forgotpass" >
    <div class="card-porgot-password">
        <text class="heding-font-forgotpass">FORGOT PASSWORD</text>
        <div class="inputfield-form">
            <div v-if="platform === 'Web'">
             <vx-input-box
                vx-placeholder="Enter Registered Email ID"
                :vx-model="fund">
            </vx-input-box>
            </div>

              <div v-if="platform !== 'Web'">
             <vx-input-box
                vx-placeholder="Enter Agent Id/Username"
                :vx-model="fund">
            </vx-input-box>
            </div>

            <div v-if="platform === 'Web'"  style="padding-top:20px;" @click.native="sndlinknotification">
           <button  class="  transition-btn-forgot  change-btn" >Send Link</button>
           </div>
            
        <div v-if="platform !== 'Web'" style="margin-top: 30px" @click="sndotpnotification">
                <vx-primary-button btn-name="Send OTP" :icon-button="false" label-size="30px" btn-color="rgb(81, 152, 59)"></vx-primary-button>
            </div>

            
           
           
        <div v-if="platform === 'Web'" class="back-login-font-padding  " @click.native="jump('/loginview')">
            <text  class="back-login-font ">Back to Login</text>
        </div>

        <div v-if="platform !== 'Web'" class="back-login-font-padding  " @click="jump('/loginview')">
            <text  class="back-login-font ">Back to Login</text>
        </div>
        </div>
        </div>    
    </div>

    
</template>
<script>
import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue';
import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';
import OtpView from '../../views/UAM/OTPview.vue'
import popup from '../Calendar/Todo-pop-up.vue'

const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
export default {
    components:
        {
        vxInputBox,
        vxPrimaryButton,
        vxSecondaryButton,
        OtpView,
        popup
        },

         created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
    data(){
        return{
            showOTPFpass:false,
        }
    },
     methods:{
            OtpFpass(id){
                switch(id)
                {
                case 1:
                this.showOTPFpass=true
                break;

                case 2:
                this.showOTPFpass=false
                break;
                }
            },
             sndlinknotification(){
            console.log('function working');
            this.$store.state.shownotificationtoast = true;
            this.$store.state.imagelink='http://flaticons.net/gd/makefg.php?i=icons/Application/Check.png&r=34&g=171&b=62'
          this.$store.state.notificationTitle = 'PDF download';
          this.$store.state.notificationTextColor = 'green';
           this.$store.state.notificationBody = ' Password Reset Link sent Successfully to your Email. ';
           console.log(this.$store.state.notificationTitle);
           setTimeout(()=>{ 
           this.$store.state.shownotificationtoast = false;
           this.$router.push('/loginview')
            }, 2000);
            
          },
           sndotpnotification(){
            console.log('function working');
            this.$store.state.shownotificationtoast = true;
            this.$store.state.imagelink='http://flaticons.net/gd/makefg.php?i=icons/Application/Check.png&r=34&g=171&b=62'
          this.$store.state.notificationTitle = 'PDF download';
          this.$store.state.notificationTextColor = 'green';
           this.$store.state.notificationBody = ' OTP has been sent to your mobile number. ';
           console.log(this.$store.state.notificationTitle);
           setTimeout(()=>{ 
           this.$store.state.shownotificationtoast = false;
           this.$router.push('/changepassword')
            }, 2000);
            
          },
}
    
}
</script>
<style>
 
    .card-justify-forgotpass{
        justify-content:center;
        align-items:center;
       
    }
    .card-porgot-password {
    margin-top:100px;     
    padding-top: 60px;
    padding-bottom: 40px;
    height: 500px;
    width: 700px;
    border-radius: 05px;
    background-color: rgb(255, 255, 255);
   
    }
   
    .heding-font-forgotpass{
        
        color:rgb(66, 65, 65);
        font-family: robotoregular;
        text-align:center;
        font-size:40px;
    }
    .inputfield-form{
        padding-left:50px;
        padding-right:50px;
        padding-top:30px;
        padding-bottom:20px;
          }
    .back-login-font{
        font-size:30px;
        font-family: robotoregular;
        color:rgb(20, 114, 168);
        cursor: pointer;
        
    }
    .back-login-font-padding{
        padding-top:40px;
    }
    


@media screen and (min-width:320px){
    

    .inputfield-form{
        padding-left:40px;
        padding-right:40px;
        padding-top:30px;
        padding-bottom:10px;
          }
        .back-login-font-padding{
        padding-top:15px;
    }
     .heding-font-forgotpass{
        
        color:rgb(66, 65, 65);
        font-family: robotoregular;
        text-align:center;
        font-size:20px;
    }
     .back-login-font{
        font-size:16px;
        font-family: robotoregular;
        color:rgb(20, 114, 168);
        cursor: pointer;
        
    }
   .transition-btn-forgot {
	display: inline-block;
	padding: 10px 14px;
	color: #FFF;
	 border: 1px solid #FFF; 
	text-decoration: none;
    text-align:center;
	line-height: 120%;
	background-color: rgba(255,255,255, 0);
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	-webkit-transition: background-color 300ms ease;
	-moz-transition: background-color 300ms ease;
	transition: background-color 300ms ease;
	cursor: pointer;
    outline: none;
}


.card-porgot-password {
     margin-top:0px;      
    padding-top: 40px;
    padding-bottom: 40px;
    height: 300px;

    width: 400px;
    border-radius: 05px;
    box-shadow: 1px 1px  #b4b2b2;
    background-color: #ffff;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
        
    }
    .transition-btn-forgot.change-btn {
	color: white;
	background-color: rgb(81, 152, 59);
    width:100%;
    height:40px;
    font-size: 16px;
    
}
}

@media screen  and (min-width:768px){
  
}
@media screen  and (min-width:992px){
  
}

</style>

