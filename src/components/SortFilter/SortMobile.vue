<template>
<div>
        <wxc-popup popup-color="rgb(255, 255, 255)"
        :show="isBottomShow"
        @wxcPopupOverlayClicked="popupOverlayBottomClick"
        pos="bottom"
        height="450">
<div class="sort-wrapper">
 <!-- <image  class="btn-close" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image>  -->
 <text class="wrapper-menue-option padl-30 iconfont">Draft date New to Old</text>
 <text class="wrapper-menue-option padl-30 iconfont">Draft date Old to New<</text>
 <text class="wrapper-menue-option padl-30 iconfont">Product Name A-Z</text>
 <text class="wrapper-menue-option padl-30 iconfont">Product Name Z-A</text>
</div>
</wxc-popup>
</div>
</template>

<script> 
     import { WxcPopup } from 'weex-ui';
export default{
    components: { WxcPopup },
    data: () => ({
      isBottomShow: false,
      height: 400
    }),
    methods: {
      openBottomPopup () {
        this.isBottomShow = true;
      },
}
}
</script>

<style>
        .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
.btn-close {
        position: absolute;
        height: 70px;
        width: 70px;
        left: 340px;
        top: -100px;

    }
    .sort-wrapper {
        position: relative;
        background-color: #f4f4f4;
        /*align-items: center;*/
        justify-content: center;
        flex: 1;
    }
    .padl-30 {
        padding-left: 30px;
    }


  .scroller {
    /*background-color: #f4f4f4;*/
    /*flex: 1;*/
    /*width: 700px;*/
    /*height: 700px;*/
/*    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 25px;
*/  }

    .iconfont {
        font-family:robotoregular;
      font-size: 40px;
      color: #6f6e6e;      
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
        border-top-color: #f4f4f4;
        border-top-width: 0px;
    }


    .heading-txt{
        position: sticky;
        /*height: 94;*/

        flex-direction: row;
        padding-bottom: 30px;
        padding-top: 30px;
        flex: 1;
        font-family:robotoregular;
        /*margin-top: 50px;*/
        border-bottom-color: #ddd;
        border-bottom-width: 1px;
        background-color: #f4f4f4;

    }
    .menu-wrapper {
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
        /*width: 500px;*/
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
</style>