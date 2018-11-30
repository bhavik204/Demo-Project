<template>
    <div class="">
        <div class="protection-top-pad">
            <text class="protection-top-head-name">Investment Plans</text>
        </div>
        <div class="invest-master-flex-row">
            <div class="protection-p-crd-one" v-for="products in productlist" :key="products">
                <product-description  :products="products"></product-description>
            </div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'
    import footerTab from '../../components/Footer/FooterSection.vue'
    // import productTab from './ProductTab.vue'
    // import vxPrimaryBtn from '../../components/vx-primary-button/vx-primary-button.vue'
    import productTab from './ProductTab.vue'
    import productDescription from '../../components/Sales-Guid/product-description.vue'
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

            let self  =  this;
            this.GET('getproduct/?productType=investment', res => {

                if(!res.ok){
                  self.productlist = "request failed";
                }else{
                  console.log('get:'+res);
                  self.productlist =  res.data.errMsg;
                  console.log(self.productlist)
                }

            });
        },
        
        components: {
            productTab,
            productDescription,footerTab
        },
        data: function() {
            return {
                productlist: "",

                headerName: 'Products',
                platform: invalid,
                
                childrenPlans: [
                    {
                        title: 'Traditional Group Employee Benfit Plan (MBR-Par)',
                        description: 'A yearly renewable fund based group product which enables employers to outsource fund management and related administration to ABC insurance company limited for their superannuation scheme.',
                        subList: [
                            'Product Broucher',
                            'Product Leaflets',
                            'FAB Sheet',
                            'Product Working PPT'
                        ]
                    }
                ]
            }
        },

        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            
            gotoJump() {
                navigator.push({
                    url: createURL('/pcard'),
                    animated: 'true'
                })
            }
        }
    }
</script>

<style>
    .invest-master-flex-row {
        flex-direction: column;
        flex-flow: wrap;
       /* align-items: center; */
       justify-content: left;
        /* width: 100%; */
    }

    .protection-p-crd-one {
        width: 730px;
        margin-bottom: 10px;
        padding-left: 20px;
    }
    .protection-top-head-name {
        font-size: 25px;
        padding-left: 15px;
        padding-top: 20px;
        color: black;
        font-family: robotoregular;
    }
   .protection-top-pad{
       padding-bottom: 20px;
       padding-left: 5px;
   }
    
    @media screen and (min-width: 320px){
          .invest-master-flex-row {
        flex-direction: column;
        flex-flow: wrap;
       /* align-items: center; */
       justify-content: left;
        /* width: 100%; */
    }
        .protection-p-crd-one {
            width: 100%;
            margin-bottom: 5px;
            padding-left: 0px;
        
        }
         .protection-top-head-name {
        font-size: 15px;
        padding-left: 15px;
        padding-top: 20px;
        padding-bottom: 10px;
        color: black;
        font-family: robotoregular;
    }
        .protection-pad-lft {
            padding-left: 20px;
        }
    }
    @media screen and (min-width: 768px){
      .protection-top-pad {
            padding-left: 10px;
        }   
        .protection-pad-lft {
            padding-left: 18px;
        }
          .invest-master-flex-row {
        flex-direction: row;
        flex-flow: wrap;
       /* align-items: center; */
       /* justify-content: center; */
        /* width: 100%; */
    }
            .protection-p-crd-one {
                padding-left: 10px
            }

    }
    @media screen and (min-width: 992px){
      .protection-top-pad {
            padding-left: 15px;
        }   
      
      .invest-master-flex-row {
        flex-direction: row;
        flex-flow: wrap;
       /* align-items: center; */
       /* justify-content: center; */
        /* width: 100%; */
    }
        .protection-p-crd-one {
            width: 49%;
            margin-left: 5px;
            margin-right: 5px;
        }
       .protection-pad-lft {
            padding-left: 25px;
        }
    }
</style>