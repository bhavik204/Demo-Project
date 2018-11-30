<template>
<div>
  <div class="otp-container-padding otp-card-wrap">
     
      <div class=" otp-aligin-itms otp-cntner-pad otp-txt-cntr ">
         <div class="enterotp-head" >
             <text class="otp-text-size ">Enter the OTP sent to your Mobile No/Email ID</text>
             <div style="flex-direction:row;">
                 <div class="txt-otp ">
             <input class="otp-ip-mask-txt "
             type="number" 
             id="quantity"
             placeholder="_ _ _ _"
            @input="oninput"/>
             </div>
             <!-- <div style="margin-top:14px;margin-left:10px;">
                 <text class="couter">{{counter}}</text>
         </div> -->
         
         </div>
      
             <!-- <input type="text" id="msk" maxlength="4" v-model="otp" placeholder="_ _ _ _" v-on:keypress="myFunc"  /> -->
             <!-- @input="oninput"  -->
        </div>
        <div class="cnt-snd-otp-margin">
        <text class="otpcolor " style="padding-bottom:10px;"> {{errorMsg}}</text>
        </div>
        <div  v-if="platform === 'Web'" class="otp-width cursor-pointer-globle">
            <text class="otp-text-size cursor-pointer-globle txt-didnt-snd-otp" style="color:rgb(20, 114, 168);" @click.native="OtpDtl(1)">Didn't recieve OTP?</text>
        </div>
        <div  v-if="platform !== 'Web'" class="otp-width">
            <text class="otp-text-size cursor-pointer-globle" style="color:rgb(20, 114, 168);" @click="OtpDtl(1)">Didn't recieve OTP?</text>
        </div>
       </div>

    <div v-if="showOTPDetail === true">

        
        <div class="otp-txt-pad" style="align-items: center;justify-content: center;">
            <text class="otp-text-size" >The OTP is sent on 987xxx32xx and aaxxxx@gxxx.com</text>
        </div>

        <div class="otp-flx-row otp-txt-pad" style="align-items: center;justify-content: center;">
            <div style="margin-left:0px">
            <text class="otpcolor" style="padding-bottom:10px;padding-top:10px;"> {{buttonMsg}}{{counter}}</text>
            </div>
            <!-- <div style="padding-left:20px;">
                <text class="otp-text-size" >Didn't recieve the OTP?</text>
                
            </div> -->
        </div>
        
<div  v-if="platform === 'Web'" class="otp-flx-row otp-txt-pad" style="align-items: center;justify-content: center;">
    <div class="otp-btn-width-Resend" @click.native="resendotp()">
            <vx-primary-button 
            btn-name="Resend OTP" 
            :icon-button="false">
            </vx-primary-button>
        </div>
        <div class="">
           <text class="otp-text-size">  or</text>
        </div>
        <div class="">
           <text class="otp-text-size cursor-pointer-globle" style="color:rgb(20, 114, 168);" @click.native="OtpDtl(3)"> Update Details</text>
        </div>
    </div>
    <div  v-if="platform !== 'Web'" class="otp-flx-row otp-txt-pad" style="">
        <div class="otp-btn-width-Resend" @click="resendotp()">
            <vx-primary-button 
            btn-name="Rssend OTP" 
            :icon-button="false">
            </vx-primary-button>
        </div>
        <div class="">
           <text class="otp-text-size">  or</text>
        </div>
        <div class="cursor-pointer-globle">
           <text class="otp-text-size " style="color:rgb(20, 114, 168);" @click="OtpDtl(3)"> Update Details</text>
        </div>
    </div>
    
        <div v-if="showOTPUpDtl === true" class="otp-txt-pad">
            <text class="otp-text-size" >To update your contact details, please call us on 1800-267-7227 (toll-free) and follow the IVR.You can also walk into one of our branches and our Customer Executive will be happy to help you.</text>
        </div>
</div>
  </div>
  
      <div v-if="platform !=='Web'" class="otp-card-wrap" style="flex-direction:row;">
            <!-- <div  class="otp-btn-width otp-btn-padding cursor-pointer-globle">
            <vx-primary-button 
            :icon-button="false"
            btn-name="Submit" 
            btn-icon="https://www.materialui.co/materialIcons/action/done_white_192x192.png" ></vx-primary-button> 
        </div> -->
        <div  class="otp-btn-width otp-btn-padding cursor-pointer-globle">
           <vx-secondary-button 
            btn-name="Cancel" 
            btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
            @click.native="jump('/forgotpassword')"></vx-secondary-button>
        </div>
        </div>
      
  </div>
  
</template>
<script>
 import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue';
import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';
import popup from '../Calendar/Todo-pop-up.vue'

const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
    var storage = weex.requireModule('storage')
export default {
    created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

            var self=this;
            self.recounter();
                      
        },
  components:{
      vxInputBox,
      vxPrimaryButton,
      vxSecondaryButton,
      popup
  },
  
  
  data(){
      return{
          platform: invalid,
          showOTPDetail:false,
          showOTPUpDtl:false,
          errorMsg:'',
          otp:'',
          ResendOtpGetter :'',
          counter:60,
          rsndbtnenable:false,
          buttonMsg:'',
        
      }
  },

  methods:{
             jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
  },
//   myFunc(evt) {
//   	var theEvent = evt || window.event;
//   var key = theEvent.keyCode || theEvent.which;
//   key = String.fromCharCode( key );
//   var regex = /[0-9]|\./;
//   if( !regex.test(key) ) {
//     theEvent.returnValue = false;
//     if(theEvent.preventDefault) theEvent.preventDefault();
//   }
//   },
 

    
        wlcmsalesdrive(){
            console.log('function working');
            this.$store.state.shownotificationtoast = true;
            this.$store.state.imagelink='http://flaticons.net/gd/makefg.php?i=icons/Application/Check.png&r=34&g=171&b=62'
          this.$store.state.notificationTitle = 'PDF download';
          this.$store.state.notificationTextColor = 'green';
           this.$store.state.notificationBody = 'Welcome to Sales Drive. ';
           console.log(this.$store.state.notificationTitle);
           setTimeout(()=>{ 
           this.$store.state.shownotificationtoast = false;
           if(this.platform==="Web"){
           window.location.reload(true);
           }
           this.$router.push('/home')
           
            }, 2000);
    },
    toast(src,color,msg){
         this.$store.state.shownotificationtoast = true;
            this.$store.state.imagelink=src;
          this.$store.state.notificationTextColor = color;
           this.$store.state.notificationBody =msg;
           console.log(this.$store.state.notificationTitle);
           setTimeout(()=>{ 
           this.$store.state.shownotificationtoast =false ;
            }, 2000);

        
    },
    recounter(){
        var self=this;
          var interval=setInterval(()=> {
                self.counter = self.counter - 1;
                self.rsndbtnenable=false; 
                
                self.buttonMsg="Can't Resend OTP! Wait Second ";  
                // console.log(self.counter);     
            if(self.counter===0){
                    self.counter="";
                    self.rsndbtnenable=true;
                    self.buttonMsg=""; 
                    clearInterval(interval)
                    
                }
                }, 1000);

    },


  OtpDtl(id){
                switch(id)
                {
                case 1:
                    
                    if(this.showOTPDetail === true) {
                        this.showOTPDetail = false;
                    } else if(this.showOTPDetail === false) {
                        this.showOTPDetail = true;
                    }
                    
                break;

                case 2:
                this.showOTPDetail=false
                break;
                case 3:
                if(this.showOTPUpDtl === true){
                    this.showOTPUpDtl = false;
                }else if(this.showOTPUpDtl === false){
                    this.showOTPUpDtl=true;
                }
                

                break;
                }
                

  },
//     number(event){
//         console.log(event.value);
//         if(event.value) {

//         }
//  var keycode=event.keyCode;
//             if(keycode>48 && keycode<57){
//                 return true;
//             }
//                     return false;
                
//               },

//   sent otp method

resendotp() {
    console.log('hello')
  
if(this.rsndbtnenable === true) {
    
      var self = this
     
			storage.getItem('mobileNo', event => {
				console.log('Value is:', event.data)
				var mobileNo_local  = event.data
				console.log(mobileNo_local , 'mobileNo_local')
			})
			storage.getItem('userId', event => {
				console.log('Value is:', event.data)
				var user_id_local  =  event.data
				console.log(user_id_local , 'user_id_local')
			})			
			// storage.getItem('mobileNo', event => {
			// 	console.log('Value is:', event.data)
			// 	var mobileNo_local  = 'value: ' + event.data
			// 	console.log(mobileNo_local , 'mobileNo_local')
			// })
			// storage.getItem('userId', event => {
			// 	console.log('Value is:', event.data)
			// 	var user_id_local  = 'value: ' + event.data
			// 	console.log(user_id_local , 'user_id_local')
			// })

			// loggedn in user credential will be here , get from vuex ,for now getting from local storage
            // var mobileNo  , user_id
             self. ResendOtpGetter = self.$store.getters.getresendOtp;
			const formData = {
				mobileNo: self.ResendOtpGetter.agent_mobno,
				user_id: self.ResendOtpGetter._id,
	
				// mobileNo: mobileNo_local,
				// user_id: user_id_local

			};
	
			var stringform = JSON.stringify(formData);
			console.log(stringform, "stringform");


			stream.fetch({
			  method: "POST",
			  url: "http://159.89.161.64:5010/secure/user/sendOtp",
			  headers: {
			  
			    "Content-Type": "application/json"
			  },
			  body:(stringform),
			  type: "json"
			},
			function(response) {
                console.log(response.data.errMsg)
			   storage.setItem('EmailId',response.data.errMsg.primary_email)
			   storage.setItem('Id',response.data.errMsg._id)
	
				if (response.data.errCode == -1) {

				console.log("get in progress:" + JSON.stringify(response));

				// self.jump('dashboard')
				// self.$router.push('login')
                // self.showmodal('OTP send sucessfully' , 1.5);
                
                 self.toast('','Green','OTP send sucessfully');
                 self.counter=60;
                 self.recounter();
                 
                

				// call this showmodal function to show toast send modal body , time
                // self.showmodal('Welcome to Sales drive' , 1);
            //    self.wlcmsalesdrive1()
			    } else if(response.data.errCode == 100) {
                //   self.showmodal('Error while Resend OTP , please try again' , 2);
                self.toast('','red','Error while Resend OTP , please try agai');
                }
                else if(response.data.errCode == 4)
                {
                    self.toast('','red','DataBase Error');

                }
               
			  }
			);
  }
},


    	oninput(event){
            console.log(event.value.length)
            var self = this
           var iden = self.$store.state.agentDetails._id
			const formData = {
				user_id: iden,
				otp_code:`${event.value}`
            };
            console.log('user id is',iden)
            // var keycode=event.keycode;
            // if(keycode>48 && keycode<57){
            //     return true;
            //     {
            //         return false;
            //     }
            // };

			if(event.value.length == 4){
                stream.fetch({
                    method: "POST",
                    url: "http://159.89.161.64:5010/secure/user/matchOtp",
                    headers: {
                      
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                    type: "json"
                },  function(response) {
                        console.log(response)
	
				        if (response.data.errCode == -1) {

				            console.log("get in progress:" + JSON.stringify(response));

                            // self.$router.push('login')
                            // self.showmodal('OTP send sucessfully' , 1.5);

                            // call this showmodal function to show toast send modal body , time
                            // self.showmodal('Welcome to Sales drive' , 1);
                            // self.jump('home')
                               self.wlcmsalesdrive();

                }

                 else{
                //   self.showmodal(response.data.errMsg , 2);
                  self.errorMsg = "You Entered Wrong OTP"
                //   console.log('jhxcjhzjchkdashkasdhk');
    
                
			    }
                
               
                     if (response.data.errCode == 121) {

				            console.log("get in progress:" + JSON.stringify(response));

                    self.toast('','red','OTP Not Matched');
                }
                 else if(response.data.errCode == 144)
                {
                    self.toast('','red','OTP Expired');

                }
                 else if(response.data.errCode == 4)
                {
                  self.toast('','red','DataBase Error'); 
                }
                
			  }
			);


				// fire check OTP api here 
				self.showmodal(`input: ${event.value}`)
			}
    	}
  }
  }
</script>
<style>
     .otp-flx-row {
        padding-top: 20px;
        flex-direction: row;
        
    }
    .couter{
        font-size:30px;
        color:rgb(102, 100, 100);
    }

    .otpcolor{
        color:red;
        font-size:35px;
        padding-top:30px;
        
        font-family: robotoregular;
    }
    
    .otp-aligin-itms {
        align-items: baseline;
    }
    .otp-width{
        width: 600px;
    }
    .otp-btn-width{
        width: 200px;
    }
    .otp-btn-width-Resend{
        width: 200px;
    }
    /* .otp-btn-padding{
        padding:10px;
        margin-bottom:10px;
    } */

    .otp-card-wrap{
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
        
    }
    .otp-cntner-pad{
        padding: 10px;
    }
    .otp-text-size{
        color: gray;
        font-size: 24px;
    }
    .otp-txt-pad{
        padding-top:10px;
        padding-left: 5px; 
    }
    .otp-ip-mask-txt{
        font-size: 35px;
        color: grey;
        margin-top: 12px;
        margin-bottom: 12px;

    }
    .otp-txt-cntr{
        margin: auto;
        /* justify-content: center; */
    }
@media screen and (min-width:320px) {
    /* Mobile Web */
    .otp-width{
        width: 100%;
    }
    .couter{
        font-size:18px;
        color:rgb(102, 100, 100);
    }
    .otp-heading{
        justify-content: center;
    }
    
     .otpcolor{
        color:red;
        font-size:14px;
        padding-top:10px;
        
        font-family: robotoregular;
    }

    .otp-btn-width{
        padding-left: 12px;
        width: 50%;
    }
    .otp-btn-width-Resend{
        width: 25%;
    }

    .otp-container-padding {
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
        }

    .otp-card-wrap{
        border:none;
        /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12); */
        margin:10px 5px 20px 5px;
         padding: 10px;
        }
        .otp-cntner-pad{
        padding: 5px;
    }
    .otp-text-size{
        font-size: 14px;
    }
    .otp-ip-mask-txt{
        font-size: 26px;     
    }
}

@media screen and (min-width:768px) {
    /* Tab */
    .otp-width{
        width: 100%;
    }

    .otp-btn-width{
        width: 50%;
    }
    .otp-btn-width-Resend{
        width: 30%;
    }
    .otp-card-wrap{
        margin:10px;
        } 

    .otp-text-size{
        font-size: 14px;
    } 
    .otp-ip-mask-txt{
        font-size: 26px;     
    }
}

@media screen and (min-width:992px) {
    /* Desktop */
     .otp-width{
         width: 100%;
             margin-left: 100px;
    padding-left: 60px;
     }
     
     .txt-otp{
         margin-left:80px
     }
     .enterotp-head{
         margin-left:100px
     }
      .otp-btn-width{
        width: 20%;
    }
    .cnt-snd-otp-margin{
        margin-left:140px;
    }
    .otp-btn-width-Resend{
        width: 15%;
    }
}
</style>
