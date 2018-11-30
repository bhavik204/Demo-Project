<template>
    <div class="wrapper">
        <div class="nx-flex-driection-row row-position">
            <div v-if="platform ==='Web'" class="btn-sort-footer btn-top-border-footer btn-right-border-footer" style="flex:1">
              <div>  <text class="filter-btn-label-size" @click.native="openBottomSort">Sort By</text></div>
            </div>
            <div  v-if="platform ==='Web'" class="btn-sort-footer btn-top-border-footer" style="flex:1" @click.native="jump('/mobilefilter')">
             <div>   <text class="filter-btn-label-size">Filters</text></div>
            </div>

            <div v-if="platform !=='Web'" class="btn-sort-footer btn-top-border-footer btn-right-border-footer" style="flex:1">
                    <div>  <text class="filter-btn-label-size" @click="openBottomSort">Sort By</text></div>
                  </div>
                  <div  v-if="platform !=='Web'" class="btn-sort-footer btn-top-border-footer" style="flex:1" @click="jump('/mobilefilter')">
                   <div>   <text class="filter-btn-label-size">Filters</text></div>
                  </div>
       
        </div>  
        <wxc-popup v-if="platform ==='Web'" popup-color="#fff" :show="isBottomShow" @click.native="popupClose" pos="bottom" height="249">
            <div class="sort-wrapper">
                <!-- <image  class="btn-sort-footer-close" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image>  -->
              <div class="padl-30-footer ">  <text class="wrapper-menue-sort-footer  iconfont-footer">Login date - old to new </text></div>
              <div class="padl-30-footer ">   <text class="wrapper-menue-sort-footer  iconfont-footer">Login date - new to old</text></div>
              <div class="padl-30-footer ">   <text class="wrapper-menue-sort-footer iconfont-footer">Premium Amount - high to low</text></div>
              <div class="padl-30-footer ">   <text class="wrapper-menue-sort-footer  iconfont-footer">Premium Amount - low to high</text></div> 
            </div>
        </wxc-popup> 

        <wxc-popup v-if="platform !=='Web'" popup-color="#fff" :show="isBottomShow" @click="popupClose" pos="bottom" height="330">
                <div class="sort-wrapper">
                    <!-- <image  class="btn-sort-footer-close" src="https://www.materialui.co/materialIcons/action/search_black_192x192.png"></image>  -->
                    <text class="wrapper-menue-sort-footer padl-30-footer iconfont-footer">Login date - old to new </text>
                    <text class="wrapper-menue-sort-footer padl-30-footer iconfont-footer">Login date - new to old</text>
                    <text class="wrapper-menue-sort-footer padl-30-footer iconfont-footer">Premium Amount - high to low</text>
                    <text class="wrapper-menue-sort-footer padl-30-footer iconfont-footer">Premium Amount - low to high</text>
                </div>
            </wxc-popup>
        <!-- <app-filter-mobile v-if="filterOverlay === true" @click="closeFilterContainer"></app-filter-mobile> -->
    </div>
</template>
<script>
    import appFilterMobile from './FilterMobile.vue'
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    import {
        WxcPopup
    } from 'weex-ui';
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown

            }
        },
        components: {
            WxcPopup,
            appFilterMobile
        },

        data: () => ({
            platform: invalid,
            isBottomShow: false,
			height: 400,
			filterOverlay: false 
        }),
        methods: {
            openBottomSort() {
                this.isBottomShow = true;
            },
            popupClose() {
                this.isBottomShow = false;
			},

			jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        }

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
    .nx-flex-driection-row {
        flex-direction: row;
        justify-content: center;
        /* height: 100px;*/
        width: 750px; 
        background-color: #FFF;
        z-index: 10; 
    }
    
    .btn-sort-footer {
        flex-direction: row;
        justify-content: center; 
        align-items: center;
        height: 100px;
        width:100%
    }
       
    .row-position {
        position: fixed;
        bottom: 0;
    }
    
    .btn-top-border-footer {
        border-width: 1px;
        border-style: solid;
        border-top-color: rgb(139, 139, 139);
        ;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #FFF;
    }
    
    .btn-right-border-footer {
        border-width: 1px;
        border-style: solid;
        border-top-color: rgb(139, 139, 139);
        border-left-color: #FFF;
        border-right-color: rgb(139, 139, 139);
        border-bottom-color: #FFF;
    }
    
    .filter-btn-label-size {
        font-size: 32px;
        font-family:robotoregular;
    }
    
    .iconfont-footer {
        font-family:robotoregular;
      font-size: 40px;
      color: #6f6e6e;      
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
        background-color: #fff;
        /*align-items: center;*/
        justify-content: center;
   
    }
    
    .padl-30-footer {
        padding-left: 30px;
        align-items: center;
           border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 1px;
            border-bottom-width: 1px;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        
            padding-top: 15px;
    padding-bottom:15px
    }

    
    .scroller {
        background-color: #f4f4f4;
        /*flex: 1;*/
        /*width: 700px;*/
        /*height: 700px;*/
        /*    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 25px;
*/
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
        border: none;
        border-top-color: #f4f4f4;
        border-top-width: 0px;
    }
    
    .heading-txt {
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
    
    .wrapper-menue-sort-footer {
        /*border-width: 1px;*/
        /*border-color: #ddd;*/
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 1px;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #fff;
       
        border-bottom-width: 0px;
      

     
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
    
    .mr-50 {
        margin-right: 50px;
    }
    
    .mr-20 {
        margin-right: 20px;
    }

    @media (min-width: 320px) {
          .btn-sort-footer {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;
        width:100%
    }
        .iconfont-footer {
        font-family:robotoregular;
      font-size: 18px;
      color: #6f6e6e;      
    }
        .filter-btn-label-size{
              font-size:16px;
              font-family:robotoregular;
        }
        .nx-flex-driection-row {
        flex-direction: row;
        justify-content: center;
        /* height: 80px; */
        width: 100%;
        background-color: #FFF;
        z-index: 1;
    }
    }

    @media (min-width: 768px) {
        .filter-btn-label-size{
              font-size:16px;
              font-family:robotoregular;
        }
        .nx-flex-driection-row {
        flex-direction: row;
        justify-content: center;
        /* height: 100px;
        width: 100%; */
        background-color: #FFF;
        z-index: 1;
    }
    }
</style>