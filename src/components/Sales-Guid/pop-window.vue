<template>
    <div>
      <scroller>
        <div class="product-mrg-top product-margin-list-lft">
            <text class="fnt-family-roboto product-pup-list-fnt product-pup-fnt-bold">Traditional Group Employee Benfit Plan (MBR-Par)</text>
        </div>
        <div>

            <!-- Flex column dosent change on device changing and also it is used for put center-->
            <div class="product-mrg-top" style="flex-direction:column;align-items:center">
                <image :src="img1" class="product-win-image-width"/>
                <div class="product-mrg-top">
                    <text class="fnt-family-roboto product-pup-list-fnt product-pup-fnt-bold">How this plan works?</text>
                </div>
                <div class="product-mrg-top" >
                    <image :src="img2" class="product-win-image-width"/>
                </div>
            </div>

            <!-- Listing -->
            <div class="product-mrg-top">
              
              <div class="prduct-list-row product-list-btm-bdr product-listing-pad" v-for="(list, index) in subList"   :key="index">
                <div v-if="platform === 'Web'" class="product-cont-contaner mouse-pointer">
                    <image :src="downloadIcon" class="product-list-icons" @click.native="jump('/product_brochers')"/>
                </div>  
                <div v-if="platform !== 'Web'" class="product-cont-contaner mouse-pointer">
                    <image :src="downloadIcon" class="product-list-icons" @click="jump('/product_brochers')"/>
                </div>           
                <div class="product-margin-list-lft " style="flex:1">
                    <text class="product-pup-list-fnt mouse-pointer" @click.native="callBack()">{{list}}</text>
                </div>
                <div class="product-cont-contaner ">
                    <image :src="forwordIcon" class="mouse-pointer product-list-icons"/>
                </div> 
            </div>
            </div>
        </div>
    </scroller>
    </div>
</template>

<script>
export default {
    // created() {
    //     // image Loading
    //     this.img1 ="";
    //     this.img2 = "";
    //     this.downloadIcon = "",
    //     this.forwordIcon = ""
    // },
    props: {
        callBack: Function    
    },
    data() {
        return {
            img1: 'http://salesdrive.iorta.in/img/youtub-video.jpg',
            img2: 'http://salesdrive.iorta.in/img/product-icons/plan_view_doc.jpg',
            downloadIcon: 'https://www.materialui.co/materialIcons/file/file_download_black_144x144.png',
            forwordIcon: 'https://www.materialui.co/materialIcons/navigation/arrow_forward_black_192x192.png',
            subList: [
                'Product Broucher',
                'Product Leaflets',
                'FAB Sheet',
                'Product Working PPT'
            ]
        }
    },
    method: {
         jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
    }
}
</script>

<style>
    .prduct-list-row {
        flex-direction: row;
        align-items: center;
    }
    .fnt-family-roboto {
        font-family:robotoregular;
    }
    .product-pup-list-fnt {
        font-size: 30px;
         color: #565656;
    }
    .product-pup-fnt-bold {
        font-weight: bold;
    }
    .mouse-pointer {
        cursor: pointer;
    }
    .product-list-btm-bdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: #ffffff;
        border-left-color: #ffffff;
        border-right-color: #ffffff;
        border-bottom-color: #dfdfdf;
    }

    /* Image Size class for apk*/
    .product-win-image-width {
        height: 350px;
        width: 700px;
    }

    .product-list-icons {
        width: 40px;
        height: 40px;
    }
    .product-cont-contaner {
        padding: 10px;
    }
    /* This padding is for list only becouse it has icons on left side  */
    .product-listing-pad {
        padding: 20px;
    }
    .product-margin-list-lft {
        margin-left: 20px;
    }
    
    .product-mrg-top {
      margin-top: 40px;
    }
    @media screen and (min-width: 320px){
        .product-pup-list-fnt {
            font-size: 14px;
        }
        .product-win-image-width {
            height: 350px;
            width: 95%;
        }

        .product-list-icons {
            width: 18px;
            height: 18px;
        }
        .product-cont-contaner {
            padding: 5px;
        }
        .product-listing-pad {
            padding: 10px;
        }
        .product-margin-list-lft {
            margin-left: 10px;
        }
        .product-mrg-top {
        margin-top: 20px;
        }
    }
    @media screen and (min-width: 768px) {
        
    }
    @media screen  and (min-width: 992px) {
        
    }
</style>


