<template>
    <div class="login-justify ">
        <div class="login-card input-padding ">
            <div class="">
                <text class="login-title" style="text-align:center;padding-top:20px;">LOGIN</text>
            </div>

            <div class="" style="flex:1">
                         <vx-input-box 
                            :vx-model="login.username" 
                            vx-placeholder="username" 
                            @valueReading="login.username=$event.value"
                            message="Username Cannot be Empty"
                            :vx-type="text">
                        </vx-input-box>
               <!--  <vx-input-box 

                    :vx-model="login.username" 
                    vx-type="text" 
                    vx-placeholder="Username">
                </vx-input-box> -->
            </div>
            <div class="" style="flex-direction: row;">
                <div style="flex:1;">
                    <div>
                        <vx-input-box 
                            :vx-model="login.password" 
                            vx-placeholder="Password" 
                            @valueReading="login.password=$event.value"
                            message="Password Cannot be Empty"
                            :vx-type="vxtype">
                            
                        </vx-input-box>
                    </div>
                    <!-- <div v-if="showpass === true">
                        <vx-input-box 
                            :vx-model="login.password" 
                            vx-placeholder="Password" 
                            @valueReading="hideCharactor" 
                            vx-type="text">
                        </vx-input-box>
                    </div> -->

                    

                   
                </div>
                    <div class="image-position" v-if="platform === 'Web'">
                         <image class="img-hgt-widt " :src="icon" @click.native="hideshow()"/>
                    </div>

                     <div class="image-position" v-if="platform !== 'Web'">
                          <image class="img-hgt-widt" :src="icon" @click="hideshow()"/>
                    </div>
                
            </div>
            
            <div v-if="platform === 'Web'" class="login-margin-tp "  @click.native="onSubmit()">
                <button class=" transparent_btn login-btn">Login</button>
            </div>
            <div v-if="platform !== 'Web'" style="margin-top: 30px">
                <vx-primary-button 
                btn-name="Login" 
                :icon-button="false" 
                label-size="30px" 
                btn-color="rgb(81, 152, 59)" @click="onSubmit()"></vx-primary-button>
            </div>


            <div class="forgot-link-padding" v-if="platform === 'Web'">
                <text @click.native="jump('/forgotpassword')" class="forgot-link cursor-pointer-globle">Forgot Password?</text>
            </div>

            <div class="forgot-link-padding login-justify" v-if="platform !== 'Web'" style="margin-top: 40px;margin-bottom:30px; justify-content:flex-end">
                <text @click="jump('/forgotpassword')" class="forgot-link">Forgot Password?</text>
            </div>


            <div class="login-margin-tp-10 ">
                <text class="login-title" style="text-align:center;">OR</text>
            </div>
            
            <!-- social button APK -->
        <div v-if="platform !== 'Web'"  class="social-btn-dir">
        <div class="social-btn-size" style="padding-right:15px;">
            <vx-primary-button 
            btn-name="f  Facebook" 
            label-size="35px"
            :icon-button="false"
            btn-color="#3B5998"></vx-primary-button>
        </div>
        <div class="social-btn-size" style="padding-left:15px;">
            <vx-primary-button 
            btn-name="G  Google+" 
            label-size="35px"
              :icon-button="false"
            btn-color="#dd4b39"></vx-primary-button>
        </div>

        </div>

            <!-- social buttom -->
            <div v-if="platform === 'Web'" class="" style="flex-direction:row;margin-top:15px;justify-content: center; padding-bottom:30px;">
                <div @click.native="jump('https://www.facebook.com')">
                    <button class=" transparent_btn  blue"> <i class="fa fa-facebook  fa-facebook-width"></i>Facebook</button>
                </div>
                <div>

                    <button class=" transparent_btn red "><i class="fa fa-google  fa-google-width"></i>Google+</button>
                </div>
            </div>

            <!-- Apk social button -->
            <!-- <div v-if="platform !=='Web'">
            <div class="vx-apk-btn">
                <div v-if="leftActive === true" class="vx-apk-btn-margin-right">
                    <image  class="vx-apk-btn-icon-size" />
                </div>
                <text class="vx-apk-btn-label">Facebook</text>
              
             </div>

             <div class="vx-apk-btn">
                <div v-if="leftActive === true" class="vx-apk-btn-margin-right">
                    <image  class="vx-apk-btn-icon-size" />
                </div>
                <text class="vx-apk-btn-label">Google</text>
             </div>
            </div> -->
            <!-- end -->
        </div>
        <div v-if="showOTP === true">
            <popup>
                <div class="to-do-flx-row to-do-task-title">
                    <div class="exist-insu-head">
                        <text class="to-do-title-font">Enter OTP</text>
                    </div>
                </div>

                <div class="exist-insu-root-form exist-insu-shadow exist">
                    <otp-view></otp-view>
                </div>
                
                    <div class="todo-footer to-do-flx-row-rvrs">
                        <!-- <div v-if="platform ==='Web'" class="otp-btn-width otp-btn-padding cursor-pointer-globle" style="">
                            <vx-primary-button 
                                btn-name="Submit" 
                                btn-icon="https://www.materialui.co/materialIcons/action/done_white_192x192.png" >
                            </vx-primary-button> 
                        </div> -->
                        <div v-if="platform ==='Web'" class="otp-btn-width otp-btn-padding  cursor-pointer-globle">
                            <vx-secondary-button 
                                btn-name="Cancel" 
                                btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
                                @click.native="otpVisible(2)">
                            </vx-secondary-button>
                        </div>
                    </div>
                     <!-- <div class="todo-footer to-do-flx-row-rvrs">
                        <div v-if="platform !=='Web'" class="otp-btn-width otp-btn-padding cursor-pointer-globle" style="">
                            <vx-primary-button 
                                btn-name="Submit" 
                                btn-icon="https://www.materialui.co/materialIcons/action/done_white_192x192.png" >
                            </vx-primary-button> 
                        </div>
                        <div v-if="platform !=='Web'" class="otp-btn-width otp-btn-padding  cursor-pointer-globle">
                            <vx-secondary-button 
                                btn-name="Cancel" 
                                btn-icon="https://www.materialui.co/materialIcons/content/clear_black_144x144.png"
                                @click.native="otpVisible(2)">
                            </vx-secondary-button>
                        </div>
                    </div> -->
                
            </popup>
            </div>
        </div>

</template>





<script>
    import vxInputBox from '../../components/vx-input-box/vx-input-box'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';
    import OtpView from '../../views/UAM/OTPview.vue'
    import popup from '../Calendar/Todo-pop-up.vue'

    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
    export default {



        components: {
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
        data() {
            return {
                showOTP: false,
                platform: invalid,
                vxtype: 'password',
                image: ['https://www.materialui.co/materialIcons/action/visibility_grey_192x192.png',
                    'https://www.materialui.co/materialIcons/action/visibility_off_grey_192x192.png'
                ],

                iconstate: false,
                icon: 'https://www.materialui.co/materialIcons/action/visibility_off_grey_192x192.png',

                login: {
                    username: 'bhavik',
                    password: 'bhavik'
                },
                plac: 'password',

                hidepass: true,
                showpass: false
            }
        },
        methods: {
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

    // testing toast for reload
    reload(){
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
    // end testing toast for reload

             onSubmit() {
    this.$router.push('home')
      var self = this

      const usdata = [];
      const formData = {
        email: this.login.username.toLowerCase(),
        password: this.login.password
      };
      var stringform = JSON.stringify(formData);
      console.log(stringform, "stringform");
      console.log(formData, "onSubmit Method Data");
      stream.fetch({
          method: "POST",
          url: "http://159.89.161.64:5010/secure/user/login",
          headers: {
            // Accepts: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
          type:'json',

        },
        function(response) {


          if (response.data.errCode == -1) {

            console.log("get in progress:" + JSON.stringify(response));
            var User_data = {
                 agent_firstname:response.data.errMsg.first_name ,
                 agent_lastname:response.data.errMsg.last_name ,
                _id:response.data.errMsg._id,
                agent_email:response.data.errMsg.primary_email,
                agent_email_sec:response.data.errMsg.secondary_email,
                agent_status:response.data.errMsg.active,
                agent_mobno:response.data.errMsg.mobileNo,
                agent_id:response.data.errMsg.agent_id
            } 
            // self.$store.commit('SET_AGENT_DATA' , response.data.errMsg);
            self.$store.commit('SET_AGENT_DATA' , User_data);
            self.$store.commit('SAVE_MOBLENO_ID', User_data);

            // self.$store.state.agentDetails = JSON.stringify(response);
              const appData = {
                email: response.data.errMsg.primary_email,
                user_id: response.data.errMsg._id
              };
              

              // self.jump('home')
                self.showOTP = true
               self.reload();
                // self.toast('','green','Please Verify OTP Sent on your Mobile Number ');

                

            } else if(response.data.errCode == 25)
            {
                self.toast('','red','No Agent Registered');
            }
            else if(response.data.errCode == 36)
            {
                self.toast('','red','Account is not Active');
            }
            else if(response.data.errCode == 49)
            {
                self.toast('','red','NO Data ');
            }
            else if(response.data.errCode == 64)
            {
                self.toast('','red','Email Password Combination is Incorrect');
            }
            else if(response.data.errCode == 1)
            {
                self.toast('','red','Mandatory field not found');
            }
            else if(response.data.errCode == 4)
            {
                self.toast('','red','DataBase Error');
            }
            // else {
            //   self.showmodal(''+ response.data.errMsg , 2);
            // // self.notregisteredagent();
            // }
          }
        );
        
      } ,


            hideshow() {
                if (this.iconstate === false) {
                    this.icon = this.image[0]
                    this.iconstate = true;
                    // this.showpass = true;
                    // this.hidepass = false;
                   
                    this.vxtype = this.vxtype === 'password' ? 'text' : 'password';


                    // console.log(this.login.password);

                } else if (this.iconstate === true) {
                    this.icon = this.image[1]
                    this.iconstate = false
                    // this.hidepass = true;
                    // this.showpass = false;
                    this.vxtype = this.vxtype === 'text' ? 'password' : 'text';
                }

            },
            //  
            hideCharactor(e) {
                this.login.password = e.value;
                //  console.log(String.fromCharCode(254));
            },
            otpVisible(id) {
                switch (id) {
                    case 1:
                        this.showOTP = true
                        break;
                    case 2:
                        this.showOTP = false
                        break;
                }
            },
            
        }
    }
</script>


<style>
     .social-btn-dir{
         flex-direction:row;
         justify-content:center;
         margin-top:50px; 
         margin-bottom:50px;
     }
    .social-btn-size{
        width:230px;
    }
    /* APK Social button */

    .vx-apk-btn {
        /* background-color: inherit; */
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 90px;
        /* width: ; */
        cursor: pointer;
        border-width: 2px;
        border-color: #3B5998;
        border-style: solid;
    }
    .vx-apk-btn-label{
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
        color:#181713;
        font-family:robotoregular;
    }
    .vx-apk-btn-margin-right {
        margin-right: 20px;
    }
    .vx-apk-btn-margin-left {
        margin-left: 20px;
    }
    .vx-apk-btn-icon-size {
        width: 30px;
        height: 30px;
    }
    /*  */
    .login-justify {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    /* login title font size */
    
    .login-card {
        margin-top:100px; 
        background-color: #FFFFFF;
        border-radius: 5px;
        width: 700px;
        
    }
    
    .flx-dir {
        flex-direction: row;
    }
    
    .forgot-link {
        font-size: 30px;
        font-family: robotoregular;
        color: rgb(20, 114, 168);
    }
    
    .input-padding {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 30px;
        padding-bottom: 10px;
    }
    
    .login-title {
        color: rgb(66, 65, 65);
        font-family: robotoregular;
        text-align: center;
        font-size: 34px;
    }
    
    .image-position {
        position: absolute;
        top: 40px;
        right: 10px;
        /* margin-left: 290px;
        margin-top: 28px; */
    }
    
    .img-hgt-widt {
        height: 50px;
        width: 55px;
    }
    
    @media only screen and (min-width: 320px) {
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        /* card */
        .login-card {
            /* width:70%; */
            margin-top:0px; 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            width: 100%;
            
        
        }
        .input-padding{
            padding-left: 40px;
        padding-right: 40px;
        padding-top: 30px;
        padding-bottom: 10px;
        }
        .btn-shadow {
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -webkit-box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -o-box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -o-transform: scale(1.1);
            transform: scale(1.0);
        }

        .forgot-link {
            font-size: 16px;
            font-family: robotoregular;
            color: rgb(20, 114, 168);
        }
        .login-title {
            color: rgb(66, 65, 65);
            font-family: robotoregular;
            text-align: center;
            font-size: 20px;
        }
        .login-margin-tp {
            margin-top: 25px;
        }
        .login-margin-tp-10 {
            margin-top: 10px;
        }
        .login-width {
            width: 100%;
        }
        /* password filed visible image hight width */
        .img-hgt-widt {
            height: 20px;
            width: 25px;
        }
        .image-position {
            position: absolute;
            top: 25px;
            right: 0;
        }
         .img-hgt-widt {
            height: 20px;
            width: 25px;
        }
        .flx-dir {
            flex-direction: column;
        }

        .forgot-link-padding {
            padding-top: 15px;
            padding-left: 190px;
        }
        /* social button */
        .transparent_btn {
            display: inline-block;
            padding: 10px 14px;
            color: #FFF;
            border: 1px solid rgb(255, 255, 255);
            text-decoration: none;
            text-align: center;
            line-height: 120%;
            background-color: rgba(255, 255, 255, 0);
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            -webkit-transition: background-color 300ms ease;
            -moz-transition: background-color 300ms ease;
            transition: background-color 300ms ease;
            cursor: pointer;
            outline: none;
        }
        .transparent_btn.red {
            color: white;
            background-color: #dd4b39;
            border-color: #dd4b39;
            width: 130px;
            margin-left: 15px;
            height: 45px;
            font-size: 18px;
        }
        .transparent_btn.blue {
            color: white;
            background-color: #3B5998;
            border-color: #3B5998;
            width: 130px;
            height: 45px;
            font-size: 18px;
        }
        .transparent_btn.red:hover {
            opacity: 0.9;
        }
        .transparent_btn.blue:hover {
            opacity: 0.9;
        }
        .transparent_btn.login-btn {
            color: white;
            background-color: rgb(81, 152, 59);
            width: 100%;
            height: 40px;
            font-size: 16px;
        }
        /* .transparent_btn.fa-facebook:hover {
        color: white;
      
    } */
        .fa-facebook {
            color: white;
        }
        .fa-facebook-width {
            height: 23px;
            width: 20px;
        }
        .fa-google {
            color: white;
        }
        .fa-google-width {
            height: 24px;
            width: 24px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .login-width {
            width: 30%;
        }
        .flx-dir {
            flex-direction: row;
        }

        .login-card {
            /* width:70%; */
            position: absolute;
            top: 41%;
            left: 50%;
            width: 400px;
           
        }
    }
    
    @media only screen and (min-width: 992px) {
        .login-width {
            width: 47%;
        }
       
    }
</style>