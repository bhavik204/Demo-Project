<template>
<div class="card-justify-chng-pswd" >
    <div class="card-chng-pswd">
        <text class="heading-chng-pswd">CHANGE PASSWORD</text>
        <div class="inputfield-form-chnge-pswd">
             <vx-input-box
                vx-placeholder="Enter New Password"
                :vx-model="fund">
            </vx-input-box>
            <vx-input-box
                vx-placeholder="Re-Enter Password"
                :vx-model="fund">
            </vx-input-box>
           <div v-if="platform === 'Web'" style="padding-top:20px;" @click.native="changedpassnotification">
           <button  class="  transition-btn-chng-pswd  submit-btn-chng" >Submit</button>
           </div>

           <div v-if="platform !== 'Web'" style="padding-top:30px;" @click="changedpassnotification">
            <vx-primary-button 
            btn-name="Submit" 
            :icon-button="false" 
            label-size="30px" 
            btn-color="rgb(81, 152, 59)"></vx-primary-button>
        </div>
    </div>
    
</div>
</div>
    
</template>
<script>
import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue';
import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
import popup from '.././Calendar/Todo-pop-up.vue' 

export default {
     components:
        {
         vxInputBox ,popup  ,vxPrimaryButton
        },
        created() {
             if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        data(){
            return{
                
            }
        },
        methods:{
             changedpassnotification(){
            console.log('function working');
            this.$store.state.shownotificationtoast = true;
          this.$store.state.notificationTitle = 'PDF download';
          this.$store.state.notificationTextColor = 'green';
           this.$store.state.notificationBody = 'Password Changed Successfully ';
           console.log(this.$store.state.notificationTitle);
           setTimeout(()=>{ 
           this.$store.state.shownotificationtoast = false;
           this.$router.push('/loginview')
            }, 1500);
            
          },
           

        }


    
}
</script>
<style>
 .card-justify-chng-pswd{
        justify-content:center;
        align-items:center;
       
    }
    .card-chng-pswd {
         
     margin-top:100px;     
    padding-top: 60px;
    padding-bottom: 40px;
    height: 550px;
    width: 700px;
    border-radius: 05px;
    background-color: rgb(255, 255, 255);
   
    }
        
    
    .heading-chng-pswd{
        
        color:rgb(66, 65, 65);
        font-family: robotoregular;
        text-align:center;
        font-size:40px;
    }
    .inputfield-form-chnge-pswd{
        padding-left:40px;
        padding-right:40px;
        padding-top:30px;
        padding-bottom:10px;
          }
     /* .back-login-font{
        font-size:16px;
        font-family: robotoregular;
        color:rgb(20, 114, 168); 
         
    }  */
    /* .back-login-font-padding{
        padding-top:15px;
    } */


@media screen and (min-width:320px){
    
    .heading-chng-pswd{
        
        color:rgb(66, 65, 65);
        font-family: robotoregular;
        text-align:center;
        font-size:20px;
    }
   .transition-btn-chng-pswd {
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
.card-chng-pswd {
    margin-top:0px;    
    padding-top: 40px;
    padding-bottom: 40px;
    height:300px;
    width: 400px;
    border-radius: 05px;
    box-shadow: 1px 1px  #b4b2b2;
    background-color: #ffff;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
        
    }
    .transition-btn-chng-pswd.submit-btn-chng {
	color: white;
	background-color: rgb(81, 152, 59);
    width:100%;
    height:40px;
    font-size: 16px;
    
}
/* popup */

}
@media screen and (min-width:768px){
    
}
@media screen and (min-width:992px) {
    
}


</style>


