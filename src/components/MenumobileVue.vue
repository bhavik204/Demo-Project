<template>
<div>
<!--         <div class="action-header nx-flex-row">
            <div class="box onActive  nx-flex-row items-justify-center items-align-center">
                <image class="arrow-icon" src="https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png"></image>
            </div>
            <div class="box flex-box-size-01 nx-flex-row items-align-center">
                <text class="data-text bold-text text-color-white">Advisor Details</text>
            </div>
            <div class="box onActive nx-flex-row items-justify-center">
            </div>

        </div>

 -->    
<!--     <list style="height: 700px;">
 
 -->        
    <scroller class="scroller-menu" >
  <div  class="menu-wrapper">

            <div class="circle-wraper nx-flex-row items-justify-center" style="margin-top: 80px;">
                        <div class="profile-circle">
                            <text class="profile-circle-text">SH</text>
                        </div>
                        <!-- <text class="status-text">Active</text> -->
                    </div>

                    <div class="nx-flex-row box box-margin-btm items-justify-center" style="margin-top: 50px;">
                        <text class="user-name-text">Shruti Shrivastava</text>
                    </div>
                    <div class="nx-flex-row items-justify-center">
                        <div class="box box-margin-btm">
                            <text class="text">BRSMCU023  |</text>
                        </div>
                        <div class="box box-margin-btm " style="margin-left: 10px">
                            <text class="text">Madhapur, Hyderabad</text>
                        </div>
                    </div> 
            
           <text class=" iconfont heading-txt">Profile</text>
           
                <div class="nx-flex-row wrapper-menue-option no-border">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                    <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>
                <div class="nx-flex-row wrapper-menue-option">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                    <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>
            
           <text class=" iconfont heading-txt no-border">Settings</text>
           
                <div class="nx-flex-row wrapper-menue-option no-border">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                   <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>
                <div class="nx-flex-row wrapper-menue-option">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                   <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>
                <div class="nx-flex-row wrapper-menue-option">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                   <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>
                <div class="nx-flex-row wrapper-menue-option">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                   <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>

           <text class=" iconfont heading-txt">Settings</text>


                <div class="nx-flex-row wrapper-menue-option no-border">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                   <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>

                <div class="nx-flex-row wrapper-menue-option">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                   <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>
                <div class="nx-flex-row wrapper-menue-option">
                    <image  class="ico mr-50" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image> 
                    <text class=" iconfont flex-box-size-01">Sync</text>
                   <image  class="ico mr-20" src="https://www.materialui.co/materialIcons/navigation/chevron_right_black_192x192.png"></image> 
                </div>


        </div>
        <div class="nx-flex-column items-justify-center items-align-center">
            <text class="iconfont btn-logout"> Logout</text>
            <text class="iconfont" style="color:#b7b7b7;margin-bottom: 100px;">App Version 1.0</text>

        </div>

    <!-- </list> -->
      
</scroller> 
</div>   
</template>


<script>

// const modal = weex.requireModule('modal');
// const picker = weex.requireModule("picker");
// const env = weex.config.env || WXEnvironment
// const invalid = '- invalid -'

export default {

    // created() {
    //     if (typeof WXEnvironment === 'object') {
    //         this.platform = WXEnvironment.platform || unknown
    //         return this.platform
    //     }
    // },

    // methods: {
    //     call() {
    //         modal.alert({
    //             message: 'Call Not Active'
    //         });
    //     },

    //     detailsWindow() {
    //         modal.alert({
    //             message: 'Comming Soon'
    //         });
    //     }
    // }
}
</script>
 

<style scoped>

  .scroller-menu {
  flex:1;
    /*width: 700px;*/
  
/*    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 25px;
*/  }

    .iconfont {
      font-family:Roboto-light;
      font-size: 40px;  
    }

    .nx-flex-row {
        flex-direction: row;
    }
        .nx-flex-column {
        flex-direction: column;
    }

    .items-align-center {
        align-items: center;
    }

    .items-justify-center {
        justify-content: center;
    }
    .flex-box-size-01 {
        flex: 1;
    }
    .no-border {
        border:none;
        border-top-color: #fff;
        border-top-width: 0px;
    }


    .heading-txt{
        position: sticky;
        /*height: 94;*/

        flex-direction: row;
        padding-bottom: 30px;
        padding-top: 30px;
        flex: 1;
        font-family:Roboto-regular;
        /*margin-top: 50px;*/
        border-bottom-color: #ddd;
        border-bottom-width: 1px;
        background-color: #fff;

    }
    .menu-wrapper {
        flex:1;
        padding-left: 20px;
        padding-right: 20px;
    }
    .wrapper-menue-option {
        /*border-width: 1px;*/
        /*border-color: #ddd;*/
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 1px;
        border-top-color: #ddd;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #fff;
        padding-top: 30px;
        border-bottom-width: 0px;
        padding-bottom: 30px;
    }

    .btn-logout {
        /*background: #fff;*/
        padding-top: 20px;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 20px;
        width: 500px;
        text-align: center;
        margin-bottom: 50px;
        border-width: 1px;
        border-color: #ddd;
        margin-top: 100px;

    }
    .ico {
        height: 50px;
        width: 50px;
        /*flex: 1;*/
    }

    .mr-50{
        margin-right: 50px;

    }
    .mr-20 {
        margin-right: 20px;
    }


    /* Usama Apply Css */

    .profile-circle {
        height: 200px;
        width: 200px;
        background-color: #06682f;
        border-radius: 100px;
    }

    .profile-circle-text {
        position: absolute;
        top: 55px;
        left: 49px;
        color: white;
        font-size: 80px;
        font-weight: 400;
    }

    .user-name-text {
        font-size: 45px;
        font-weight: bold;
    }

    .text {
        font-size: 30px;
    }

    .box-margin-btm {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>
