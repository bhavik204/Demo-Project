<template>

<div  class="master-page-wrapper" style="background-color: #f7f7f7;">
    <div class="disc-card-set">
        <!-- <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
            <div class="disc-card-set disc-pad-lft-rght shadow">
                <div class="disc-pad-lft mt-20"><text class="disc-char-bold-set desc-bor-set">{{num.contnm}}</text></div>
                <div class=" disc-pad-lft disc-pad-top-bot"><text class="disc-char-cap-set">{{num.listdesc1}}</text></div>
                <div class=" disc-pad-lft disc-pad-top-bot"><text class="disc-char-bold-set">{{num.listhead}}</text></div>
                <div class="disc-pad-lft"><text class="disc-char-set">{{num.listdesc2}}</text></div>
                <div class="disc-pad-lft"><text class="disc-char-set">{{num.listdesc3}}</text></div>
                <div class="disc-pad-lft disc-pad-bot"><text class="disc-char-set">{{num.listdesc4}}</text></div>
            </div>     
        </div> -->
        <div class="table-row-disc-heading mt-20">
            <text class="heading">Disclaimer</text>   
        </div> 

        <div class="table-row-disc">
    <text class="form-title">VISITORS TO THIS WEB SITE ARE BOUND BY DICLAIMER GIVEN BELOW. THERFORE, YOU ARE REQUESTED TO READ THE FOLLOWING DISCLAIMER BEFORE CONTINUING TO USE THIS SITE. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS OF DISCLAIMER, PLEASE DO NOT USE THIS SITE.</text>
        </div>

        <div class= "table-row-disc-heading">
           <text class="form-title">DISCLAIMER OF WARRANTIES, INACCURACIES OR ERRORS</text> 
        </div>
        <div class="table-row-disc">
            <text class="form-title">Although ABC Insurance Company Ltd. (hereinafter referred to as "ABCIC") tries to ensure that all information and recommendations, whether in relation to the products, services, facilities, offerings or otherwise (hereinafter "Information") provided as part of this website is correct at the time of inclusion on the web site, it does not guarantee the accuracy of the Information.</text> 
             <text class="form-title">ABCIC makes no representations or warranties as to the completeness or accuracy of Information',ABCIC makes no commitment to update or correct any Information that appears on the Internet or on this web site.</text> 
              <text class="form-title">Information is supplied upon the condition that the persons receiving the same will make their own determination as to its suitability for their purposes prior to use or in connection with the making of any decision. No Information at this web site shall constitute an invitation to invest in ABCIC or any of its affiliates. Any use of this website or the Information is at your own risk. Neither ABCIC and its affiliates, nor their officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to, use of, or ABCIC upon, this website or the Information, or any website linked to this website.</text> 
        </div>
    </div>
    <!-- <footer-tab></footer-tab> -->
</div>
</template>
<script>
 import footerTab from '../../components/Footer/FooterSection.vue'
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'

    export default {
        components: {
            footerTab
        },
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Disclaimer');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        props: {
            listItems: {
                type: Array
            }

        },
        data: function() {
            return {
                headerName: 'Disclaimer',
                platform: invalid,
                deviceWidth: invalid,
                numArray: [{
                        contnm: 'Disclaimer',
                        listdesc1: 'VISITORS TO THIS WEB SITE ARE BOUND BY DICLAIMER GIVEN BELOW. THERFORE, YOU ARE REQUESTED TO READ THE FOLLOWING DISCLAIMER BEFORE CONTINUING TO USE THIS SITE. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS OF DISCLAIMER, PLEASE DO NOT USE THIS SITE.',
                        listhead: 'DISCLAIMER OF WARRANTIES, INACCURACIES OR ERRORS',
                        listdesc2: 'Although ABC Insurance Company Ltd. (hereinafter referred to as "ABCIC") tries to ensure that all information and recommendations, whether in relation to the products, services, facilities, offerings or otherwise (hereinafter "Information") provided as part of this website is correct at the time of inclusion on the web site, it does not guarantee the accuracy of the Information. RLIC makes no representations or warranties as to the completeness or accuracy of Information',
                        listdesc3: 'RLIC makes no commitment to update or correct any Information that appears on the Internet or on this web site.',
                        listdesc4: 'Information is supplied upon the condition that the persons receiving the same will make their own determination as to its suitability for their purposes prior to use or in connection with the making of any decision. No Information at this web site shall constitute an invitation to invest in RLIC or any of its affiliates. Any use of this website or the Information is at your own risk. Neither RLIC and its affiliates, nor their officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to, use of, or RLIC upon, this website or the Information, or any website linked to this website.'
                    },

                ]


            }
        },

        methods: {
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
.disc-rew-set {
    flex-direction:row;
    
}
      .table-row-disc-heading {
         padding-left: 10px;
        padding-right: 10px;
        
    }
    .table-row-disc{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;

    }
    .heading {
    font-size: 25px;
    padding-top: 20px;
    font-weight: bold;
    font-family:robotoregular;

  }
    .form-title {
    font-size: 24px;
    padding-top: 10px;
    color: #565656;
    font-family:robotoregular;
  }



.mt-20{
    margin-top: 20px;
}
.disc-card-set {
     margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;

    
}
.disc-char-bold-set {
    font-size: 25px;
    font-family: robotoregular;
    color: #565656;
    font-weight: bold;

}
 .disc-pad-top-bot {
        padding: 10px 0px;
    }
 .disc-pad-bot {
    padding-bottom: 10px;
}
.disc-pad-lft {
    padding-left: 10px;
}
.disc-pad-lft-rght {
    padding: 0px 15px;
}
.desc-bor-set {
        background-color: white;
    width: 125px;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: #fff;
    border-left-width: 1px;
    border-left-color: #fff;
    border-right-width: 1px;
    border-right-color: #fff;
    border-bottom-width: 2px;
    border-bottom-color: #3b371e;
    margin-bottom: 20px;
}
.disc-char-set{
        font-size: 24px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
 @media (min-width: 320px){
     .mt-20{
    margin-top: 0px;
}
     .disc-card-set{
                     border:none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
            margin:0px 5px

     }
       .heading {
      font-size: 15px;
      padding-top: 20px;
      font-weight: bold;
      font-family:robotoregular;

    }
      .form-title {
      font-size: 14px;
      padding-top: 10px;
      color: #565656;
    }

.table-row-disc{
            padding-left: 10px;
        padding-right: 10px;
        padding-top: 0px;

}
     .disc-char-bold-set {
        font-size: 15px;
        font-family: robotoregular;
        font-weight: bold;
        color: #565656;
     }
    .disc-char-set{
        font-size: 14px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .disc-char-cap-set{
        font-size: 15px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .disc-pad-top-bot {
        padding: 10px 0px;
    }
    .disc-pad-bot {
        padding-bottom: 10px;
    }
    .disc-pad-lft {
        padding-left: 10px;
    }
    .disc-pad-lft-rght {
        padding: 0px 15px;
    }
    .desc-bor-set {
         background-color: white;
        width: 75px;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 2px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    }
     .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
 }
 @media (min-width: 768px){
      .disc-card-set{
            margin:10px

     } 
    
          .table-row-disc {
         margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }
      .form-title {
      font-size: 14px;
      padding-top: 0px;
      padding-bottom:6px;
      color: #565656;
      font-family:robotoregular;
    }


 }
 @media (min-width: 992px){
     
 }
</style>