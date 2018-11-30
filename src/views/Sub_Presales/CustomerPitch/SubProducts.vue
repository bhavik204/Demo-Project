<template>
        
    <div >
        <div class="sub-product-row" style="justify-content: space-between">
             <div class="" style="">
                <image class="left-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_black_192x192.png"  @click.native="jump('/subtestimonials')"></image>
                <image class="left-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_black_192x192.png"  @click="jump('/subtestimonials')"></image>
            </div>  
             <div class="" style="">
                <text class="heading" style="align-item: center">Products</text>
             </div>   
             <div class="" style="">
                <image class="right-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png"  @click.native="jump('/subcalculator')"></image>
                <image class="right-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png"  @click="jump('/subcalculator')"></image>
            </div>       
                  
        </div>
        <div class="card-prod sub-win-card-wdth shadow">
            <div class="">
                <text class="heading add-border" >Term Insurance Plans</text> 
                <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/navigation/fullscreen_exit_white_192x192.png"  @click.native="jump('/masterpresales/customerdetails/products')"></image>
                <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/navigation/fullscreen_exit_white_192x192.png"  @click="jump('/masterpresales/customerdetails/products')"></image>
                  
            </div>

            <div class="prd-col" style="flex:2"> 
                <div  class="" style="flex:1">
                    <div class="">
                        <text class="heading-data " >Description</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " > A Term Insurance Plan is the most comprehensive form of financial protection. It will help your family meet their financial needs from household expenses to rentals in your absence. When you consider buying a term plan, you have to make an educated choice about the life cover you select. There are some important things you need to keep in mind when deciding the term plan and life cover you opt for. The cover should help your family maintain their lifestyle, inflation should be kept in account and lastly, it should take care of your existing liabilities preventing the worries of EMI repayments.</text> 
                    </div>
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >What is Term Insurance Plan?</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " > A term insurance plan is the simplest form of financial protection that can help your family meet its financial needs in your absence. Term plan offers peace of mind with affordable premiums and a life cover that you can choose depending on your family’s lifestyle and financial needs. Some of these term plans can also be bought online within a few clicks & without any lengthy paperwork.</text> 
                    </div>
                </div>   
                <div class="get-pad " style="flex:1; padding-left:10px;">
                    <image class="clips"  src="https://www.maxlifeinsurance.com/content/dam/corporate/images/banner/term-insurance-plans-mobile.jpg"></image>   
                </div>
            </div>
            <div class="prd-col" style="flex:2"  v-if="showMore1==true"> 
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >Useful Features of Term Insurance Plans:</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " >&#8226; Term Life Insurance is the most Cost-Effective plan.</text> 
                        <text class="form-title  " >&#8226; Pay the Policy Premium Only Till Retirement</text> 
                        <text class="form-title  " >&#8226; Flexibility to Receive Payout as Monthly Income in Addition to Lumpsum Amount</text> 
                        <text class="form-title  " >&#8226; Choose Riders to Make Your Term Plan more Comprehensive</text>
                        <text class="form-title  " >&#8226;You can Enhance/Increase the Insurance Cover at Major Life-Stages</text> 
                    </div>
                </div>
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >Why should you get a Term Insurance Plan?</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " >Some of the key benefits of term insurance plans are:</text> 
                        <text class="form-title  " >1. Term Insurance Plan provide large life insurance cover at affordable prices</text> 
                        <text class="form-title  " >2. Term Insurance Plan helps to protect your loved ones from any unforeseen eventuality</text> 
                        <text class="form-title  " >3. They can cover your financial liabilities</text>
                        <text class="form-title  " >4. They also offer tax benefits on premiums paid and the payout received</text>
                        <text class="form-title  " >5. Term Insurance Plans help during critical illness</text>
                        <text class="form-title  " >6. Provides supplementary income in case of loss of income due to accidental disabilities or illness</text>  
                    </div>
                </div>
            </div>

            <div class="prd-row" style="justify-content: space-between;align-content: center">
                <div class="" style="">
                    <text class="form-title" style="color:blue;" @click.native="showTab1()">{{Show1}}</text>
                </div>

                <div class="get-pad ">
                    <div  v-if="platform === 'Web'" class="prd-BI-button-width" @click.native="jump('/productmaster/protection')">
                        <vx-primary-btn 
                        class="cursor-pointer-globle"
                        btn-name="Show All Products"
                        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                        </vx-primary-btn>
                    </div>
                    <div  v-if="platform !== 'Web'" class="prd-BI-button-width" @click="jump('/productmaster/protection')">
                        <vx-primary-btn 
                        btn-name="Show All Products"
                        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                        </vx-primary-btn>
                    </div>
                </div> 
            </div>
        </div>

        <div class="card-prod sub-win-card-wdth shadow">
            <div class="">
                <text class="heading add-border" >Life Health Plans</text> 
            </div>

            <div class="prd-col" style="flex:2"> 
                <div style="flex:1">
                    <div class="">
                        <text class="heading-data " >Description</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " > Leading a healthy lifestyle in the modern high-stress routines is challenging. Medical emergencies can arise without any intimation. At such times, treatment costs can put a huge financial burden on families. For example, cost of cancer treatment can cost around 20 lacs*. Such huge payments coupled with work-pay loss can cause imbalances in your family finances. Max Life Health Plans help you to be financially prepared for such situations by providing you coverage for your medical recovery.</text> 
                        <text class="form-title">Health insurance plans are insurance products designed to cover your medical expenses in case of hospitalization or critical illness. ... A health insurance plan bought early on in life will provide sufficient financial coverage if such a situation arises.</text>
                    </div>
                </div>
                <div class="get-pad " style="flex:1; padding-left:10px;">
                    <image class="clips"  src="https://www.maxlifeinsurance.com/content/dam/corporate/images/banner/All-plans/Health/healthplans_cat.jpg"></image>   
                </div>
            </div>
            <div class="prd-col" style="flex:2"  v-if="showMore2==true"> 
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >What are health insurance plans?</text> 
                    </div>
                    <div class="" style="padding-right:7px;">
                        <text class="form-title  " > Health insurance plans are insurance products designed to cover your medical expenses in case of hospitalization or critical illness. Unlike other health plans, which provide coverage for only the medical bills, a health insurance plan can provide coverage for other medical procedures and treatments, depending on your need. Medical treatment procedures in complex ailments such as cancer are costly and can continue for many years. To cover these costs, people sometimes end up taking loans, or even selling or mortgaging their assets. A health insurance plan bought early on in life will provide sufficient financial coverage if such a situation arises.</text> 
                    </div>
                </div>
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >How to choose a health plan?</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " >Health plans can provide coverage to your family members. Make sure you are selecting a plan with sufficient coverage as premiums are not directly proportional to the coverage amount. Here are three simple steps to choose a health insurance plan</text> 
                        <text class="form-title  " >1. Choose the amount of Insurance Cover (sum insured) you need</text> 
                        <text class="form-title  " >2. Choose the maximum coverage age as there are chances of contracting a critical illness in old age too</text> 
                        <text class="form-title  " >3. Arrive at the premium amount basis your age, gender, chosen Sum Insured and Maximum Coverage Age</text>
                    </div>
                </div>
            </div>
            <div class="prd-row" style="justify-content: space-between;align-content: center">
                <div class="" style="">
                    <text class="form-title" style="color:blue;" @click.native="showTab2()">{{Show2}}</text>
                </div>
                <div class="get-pad ">
                    <div  v-if="platform === 'Web'" class="prd-BI-button-width" @click.native="jump('/productmaster/protection')">
                        <vx-primary-btn 
                        class="cursor-pointer-globle"
                        btn-name="Show All Products"
                        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                        </vx-primary-btn>
                    </div>
                    <div  v-if="platform !== 'Web'" class="prd-BI-button-width" @click="jump('/productmaster/protection')">
                        <vx-primary-btn 
                        btn-name="Show All Products"
                        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                        </vx-primary-btn>
                    </div>
                </div> 
            </div>
        </div>

       

        <div class="card-prod sub-win-card-wdth shadow">
            <div class="">
                <text class="heading add-border" >Retirement Planning</text> 
            </div>

            <div class="prd-col" style="flex:2"> 
                <div style="flex:1">
                        <div class="">
                            <text class="heading-data " >Description</text> 
                        </div>
                    <div class="">
                        <text class="form-title  " > Retirement is like a long vacation. You get all the time in the world to travel, have long lunches and siestas and pursue your hobbies. As India does not offer one of the best environment for senior citizens* it is important to plan for your retirement in advance. India’s consistently high inflation is noted as one of the big concern. This is why, timely investment in retirement plans is very crucial. Retirement Planning can provide you a stable source of income even after you stop working. Max Life offers one of the best retirement plans in India that will help you meet your post-retirement financial needs.</text> 
                    </div>
                </div> 
                <div class="get-pad " style="flex:1; padding-left:10px;">
                    <image class="clips"  src="https://www.maxlifeinsurance.com/content/dam/corporate/images/banner/All-plans/Retirement/retirement-catpage-mob.jpg"></image>   
                </div>
            </div>
            <div class="prd-col" style="flex:2"  v-if="showMore3==true">
                <div class="" style="flex:1"> 
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >What are retirement plans?</text> 
                    </div>
                    <div class="" style="padding-right:7px;">
                        <text class="form-title  " >Retirement plans are insurance products designed to provide you financial security once your working income stops. With the proceeds of the retirement plans, you can also opt for monthly pension benefits by purchasing annuity plans. They help you invest your earnings over the years and create a fund which you can withdraw as a whole or in parts during your retirement years. Further, with dual benefits of protection with investment, these plans are ideal for covering your financial needs in the golden years of your life.</text> 
                    </div>
                </div>
                
                <div class="" style="flex:1"> 
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >Why you should invest in retirement plans?</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " >In our ultra-stressful modern lifestyle, we barely get time to plan for future and give a conscious thought about retirement planning. However, if we can pause a little, understand current and the possible future expenses based on our lifestyle and start investing in a life insurance retirement plan, we can relieve ourselves from retirement woes. What’s important to understand is that:</text> 
                        <text class="form-title  " >1. It is a disciplined, affordable, and secure way for retirement planning.</text> 
                        <text class="form-title  " >2. You can get protection for your family, along with your retirement savings.</text> 
                        <text class="form-title  " >3. You can also choose to invest in market-linked pension plans or stick with a conventional pension plan.</text>
                    </div>
                </div>
            </div>
            <div class="prd-row" style="justify-content: space-between;align-content: center">
                <div class="" style="">
                    <text class="form-title" style="color:blue;" @click.native="showTab3()">{{Show3}}</text>
                </div>
                <div class="get-pad ">
                    <div  v-if="platform === 'Web'" class="prd-BI-button-width" @click.native="jump('/productmaster/protection')">
                        <vx-primary-btn 
                        class="cursor-pointer-globle"
                        btn-name="Show All Products"
                        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                        </vx-primary-btn>
                    </div>
                    <div  v-if="platform !== 'Web'" class="prd-BI-button-width" @click="jump('/productmaster/protection')">
                        <vx-primary-btn 
                        btn-name="Show All Products"
                        btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                        </vx-primary-btn>
                    </div>
                </div> 
            </div>
        </div>

        

        <div class="card-prod sub-win-card-wdth shadow">
            <div class="">
                <text class="heading add-border" >Child's Education Planning</text> 
            </div>
            <div class="prd-col" style="flex:2">
                <div class="" style="flex:1">
                    <div class="">
                        <text class="heading-data " >Description</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " > As a parent, your kids are the most important part of your lives. Smallest of your happy moments depend on them. While trying to maintain a balance between emotions & practical life, managing spending and savings often becomes a tricky task.</text> 
                         <text class="form-title  " >Child Plan is insurance cum investment plan that serves two purposes - Financially secure your child's future & finance the turning points in his/her life such as higher education and marriage. So, like a double-edged sword, the best child plan is designed to protect the future of your child in case of your unfortunate demise and at the same time, builds a corpus over a term to be utilized to finance prime moments in his/her life.</text>               
                    </div>
                </div>
                <div class="get-pad " style="flex:1; padding-left:10px;">
                    <image class="clips"  src="https://www.maxlifeinsurance.com/content/dam/corporate/images/banner/All-plans/Child/Child_Plans_Mobile_Banner.jpg"></image>   
                </div>
            </div>
            <div class="prd-col" style="flex:2"  v-if="showMore4==true">
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >What is a Child Insurance Plan?</text> 
                    </div>
                    <div class="" style="padding-right:10px;">
                        <text class="form-title  " >A child insurance plan is a combination of insurance and investment that ensure a secure future for your child. Life cover is available as a  lumpsum payment at the end of policy term. Not just this, these plans also provide  flexible payouts at important milestones of your child's education. While one may not want to think about unfortunate situations like death or serious medical illness, it’s important that you shield your child’s future against such incidents. Max Life Child Insurance Plans ensure that your child’s future financial needs are taken care of even in your absence.</text> 
                    </div>
                </div>
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >Why Buy a Child Plan?</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " >Simple monthly savings might not suffice the growing higher education costs. For your child to shine in the competitive environment, education fees should be the last constraint. Child insurance plans provide you the flexibility to invest based on your child's education needs, your current financial status, and other monetary goals. Typically, child insurance plans provide a life cover of around 10 times the annual premium. Additionally, these plans also provide partial withdrawal facility as needed. Along with this, you can also avail tax benefits for the premium paid.</text> 
                    </div>
                </div>
            </div>
            <div class="prd-row" style="justify-content: space-between;align-content: center">
                    <div class="" style="">
                        <text class="form-title" style="color:blue;" @click.native="showTab4()">{{Show4}}</text>
                    </div>
                    <div class="get-pad ">
                        <div  v-if="platform === 'Web'" class="prd-BI-button-width" @click.native="jump('/productmaster/protection')">
                            <vx-primary-btn 
                            class="cursor-pointer-globle"
                            btn-name="Show All Products"
                            btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                            </vx-primary-btn>
                        </div>
                        <div  v-if="platform !== 'Web'" class="prd-BI-button-width" @click="jump('/productmaster/protection')">
                            <vx-primary-btn 
                            btn-name="Show All Products"
                            btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                            </vx-primary-btn>
                        </div>
                    </div> 
            </div>   
        </div>
       


        <div class="card-prod sub-win-card-wdth shadow">
            <div class="">
                <text class="heading add-border" >Life Group Insurance Plans</text> 
            </div>

         <div class="prd-col" style="flex:2">
                <div class="" style="flex:1">
                    <div class="">
                        <text class="heading-data " >Description</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " >Happy employees create high-performing businesses. This happiness comes from  challenging tasks, professional growth, financial security and a cordial work enviroment. Group Insurance plans take care of the financial security part and empowers an organization with a variety of insurance options for every employee by managing it seamlessly on their behalf. </text> 
                        <text class="form-title  " >These plans can also be used by banks or financial institutions to deliver certain benefits to their members. Choose from the various Max Life Group Plans designed for employers/banks/financial institutions helping their members to get cost-effective policies and secure their future.</text>
                    </div>
                </div>
                <div class="get-pad " style="flex:1; padding-left:10px;">
                    <image class="clips"  src="https://www.maxlifeinsurance.com/content/dam/corporate/images/banner/All-plans/Group-plans/group-plans-mob-new.jpg"></image>   
                </div>
            </div>
            <div class="prd-col" style="flex:2"  v-if="showMore5==true">
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >What are Group Insurance Plans ?</text> 
                    </div>
                    <div class="" style="padding-right:10px;">
                        <text class="form-title  " >A child insurance plan is a combination of insurance and investment that ensure a secure future for your child. Life cover is available as a  lumpsum payment at the end of policy term. Not just this, these plans also provide  flexible payouts at important milestones of your child's education. While one may not want to think about unfortunate situations like death or serious medical illness, it’s important that you shield your child’s future against such incidents. Max Life Child Insurance Plans ensure that your child’s future financial needs are taken care of even in your absence.</text> 
                        
                    </div>
                </div>
                <div class="" style="flex:1">
                    <div class="" style="padding-top: 8px;">
                        <text class="heading-data " >Why Buy a Child Plan?</text> 
                    </div>
                    <div class="">
                        <text class="form-title  " >Group Insurance Plans help to deliver multiple insurance benefits to a standard group of individuals in one go. These are available for organizations and groups to provide effective life insurance benefits to their employees or members of different groups. Whether it is health insurance, savings, or voluntary funded plans like group gratuity; or credit life for borrowers of banks/ financial institutions; or pure protection plans for the members of a master policy, we try and cover various facets to provide complete financial security.</text> 
                    </div>
                </div>
            </div>
            <div class="prd-row" style="justify-content: space-between;align-content: center">
                    <div class="" style="">
                        <text class="form-title" style="color:blue;" @click.native="showTab5()">{{Show5}}</text>
                    </div>
                    <div class="get-pad ">
                        <div  v-if="platform === 'Web'" class="prd-BI-button-width" @click.native="jump('/productmaster/protection')">
                            <vx-primary-btn 
                            class="cursor-pointer-globle"
                            btn-name="Show All Products"
                            btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                            </vx-primary-btn>
                        </div>
                        <div  v-if="platform !== 'Web'" class="prd-BI-button-width" @click="jump('/productmaster/protection')">
                            <vx-primary-btn 
                            btn-name="Show All Products"
                            btn-icon="https://www.materialui.co/materialIcons/notification/sms_white_192x192.png">
                            </vx-primary-btn>
                        </div>
                    </div> 
            </div>   

        </div>

         
                
                
    </div>
            
        
</template>

<script>
     import vxPrimaryBtn from '../../../components/vx-primary-button/vx-primary-button.vue'
    import appHeader from '../../../components/Presales/PCH.vue'
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -';

    export default {
        components: {
            appHeader,vxPrimaryBtn
        },
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
       
        data() {
            return {
                headerName: 'Presales',
                showOnline: false,
                showCheque: false,
                showSendLink: false,
                showMore1: false,
                showMore2: false,
                showMore3: false,
                showMore4: false,
                showMore5: false,
                Show1: 'Show More',
                Show2: 'Show More',
                Show3: 'Show More',
                Show4: 'Show More',
                Show5: 'Show More',
                platform: invalid,
                deviceWidth: invalid,
               



            }
        },
        computed: {

        },
        methods: {

            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            titleType() {
                picker.pick({
                        index: this.index,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.value = items[event.data];
                            this.index = event.data;
                        }
                    }
                );
            },
            pickDate() {
                picker.pickDate({
                        value: this.date
                    },
                    event => {
                        if (event.result === "success") {
                            this.date = event.data;
                        }
                    }
                );
            },
            showTab1() {
                if (this.showMore1 == false)
                {
                    this.showMore1 = true
                    this.Show1 = 'Show Less' 
                    
                }else
                {
                    this.showMore1 = false
                    this.Show1 = 'Show More' 
                }
            },
            showTab2() {
                if (this.showMore2 == false)
                {
                    this.showMore2 = true
                    this.Show2 = 'Show Less' 
                    
                }else
                {
                    this.showMore2 = false
                    this.Show2 = 'Show More' 
                }
            },
            showTab3() {
                if (this.showMore3 == false)
                {
                    this.showMore3 = true
                    this.Show3 = 'Show Less' 
                    
                }else
                {
                    this.showMore3 = false
                    this.Show3 = 'Show More' 
                }
            },
             showTab4() {
                if (this.showMore4 == false)
                {
                    this.showMore4 = true
                    this.Show4 = 'Show Less' 
                    
                }else
                {
                    this.showMore4 = false
                    this.Show4 = 'Show More' 
                }
            },
             showTab5() {
                if (this.showMore5 == false)
                {
                    this.showMore5 = true
                    this.Show5 = 'Show Less' 
                    
                }else
                {
                    this.showMore5 = false
                    this.Show5 = 'Show More' 
                }
            }
        }

    }
</script>
<style scoped>
.sub-product-row {
    flex-direction: row;
}
    /*Button Arrow CSS*/
    
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
    
    .row {
        flex-direction: column
    }
      .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    .card-prod {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
    }
    .prd-col {
        flex-direction: column;
    }
       .clips {
        width: 680px;
        height: 500px;
    }
    .prd-row {
        flex-direction: row;
    }
    .prd-show-hide {
        display: none;
    }
    .prd-cross-show-color-char {
        font-size: 23px;
        font-family: robotoregular;
        color: blue;
    }
    .prd-hide-show {
        display: none;
    }
    .prd-cross-show-hide {
        display: block;
    }
    .mouse-pointer {
        cursor: pointer;
    }
    .card-prod-subtitle {
        font-size: 22px;
        color: #9D9D9D;
    }
    
    .robotoregular {
        font-family: robotoregular;
    }
    
    .main-heading {
        font-size: 15px;
        font-family: robotoregular;
        padding-top: 20px;
        font-weight: bold;
    }
    
    .heading {
        font-size: 25px;
        font-family: robotoregular;
        padding-top: 5px;
        padding-bottom: 14px;
        font-weight: bold;
    }
    
    .heading-data {
        font-size: 25px;
        font-family: robotoregular;
        font-weight: bold;
        padding-top: 7px;
        padding-bottom: 7px;
        color: #9D9D9D;
    }
    
   
    
    .container {
        flex-direction: row;
    }
    
    .side-container {
        flex-direction: column;
        flex: 2;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .add-border-dark {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #9c9a9a;
    }
    
    .add-border1 {
        border-width: 1px;
        border-style: solid;
        border-top-color: #e7e7e7;
        border-right-color: #e7e7e7;
        border-left-color: #e7e7e7;
        border-bottom-color: #e7e7e7;
    }
    
    .input {
        display: block;
        background-color: #fff;
        font-size: 24px;
        padding: 15px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
    }
    
    .spac-bet {
        margin-left: 5px;
        margin-right: 5px;
        padding-top: 19px;
    }
    
    .select {
        background-color: white;
        width: 130px;
        margin-left: 18px;
        padding-top: 19px;
        padding-bottom: 10px;
        padding-left: 9px;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 10px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    }
    
    .selectbor {
        width: 130px;
    }
    /* Allclubs Tab CSS APK */
    
    .flex-tab-col-row {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px;
    }
    
    .sub-card-prod {
        background-color: white;
        /* margin: 10px; */
    }
    
    .ver-col {
        display: flex;
        flex-direction: column;
        background-color: white;
        flex: 0.6;
    }
    
    .hori-row {
        display: flex;
        flex-direction: row;
        background-color: white;
    }
    
    .get-pad {
        padding: 15px 0px 15px 0px;
    }
    
    .img-doc {
        width: 230px;
        height: 230px;
    }
    
    .img-center {
        align-items: flex-end;
        padding-top: 20px;
    }
    
    .get-pad-bottom {
        padding-bottom: 25px;
    }
    
    .get-pad-t-b {
        padding-bottom: 13px;
        margin-top: 10px;
        padding-left: 15px;
    }
    
    .img-card-prod {
        width: 50px;
        height: 50px;
    }
    
    .img-centerA {
        align-items: center;
        /* padding-top: 20px; */
    }
    
    .img-centerE {
        align-items: flex-end;
        padding-top: 20px;
        /* padding-right: 20px; */
    }
    
    .icon {
        width: 75px;
        height: 60px;
    }
    
    .calcu-img {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .top-set {
        align-content: center;
    }
    
    .size {
        height: 350px;
    }
    
    .slider {
        position: relative;
    }
    
    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.3);
        itemColor: #DDDDDD;
        itemSelectedColor: rgb(0, 180, 255);
    }
    
    .btn-color-a {
        background-color: #3b371e;
    }
    
    .box-a {
        padding: 10px;
    }
    
    .md-custom-btn-a {
        /* flex-direction: row; */
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 170 px;
        
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-family: robotoregular;
        font-weight: 500;
        
        color: #fff;
    }
    
    .md-custom-btn:active-a {
        background-color: #3b371e;
    }
    
    .md-btn-width-a {
        width: 400px;
    }
    
    .x-small-btn-a {
        width: 330px;
    }
    
    .box-a {
        padding: 10px;
        
    }
    
    .md-custom-btn-a {
        /* flex-direction: row; */
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 170px;
        
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-weight: 500;
        
        color: #fff;
    }
    
    .md-custom-btn:active-a {
        background-color: #3b371e;
    }
    
    .button-pad-s {
        padding-bottom: 19px;
    }
    
    .button-pad-b {
        padding-bottom: 39px;
    }
    
    .flex-tab-col {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    
    .flex-tab-row {
        display: flex;
        flex-direction: row;
        flex: 2;
    }
    /* @@ */
    
    .input:focus {
        border-width: 4px;
        border-bottom-color: #2e4053;
    }
    
    .switch {
        margin-top: 16px;
    }
    
    .btn-space {
        justify-content: space-between
    }
    
    .btn-color {
        background-color: #3b371e;
    }
    
    .sec-btn-color {
        background-color: #fff;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #000;
        border-right-color: #000;
        border-left-color: #000;
        border-bottom-color: #000;
    }
    
    .card-prod-btn1 {
        background-color: rgb(80, 80, 80);
        width: 340px;
        border-radius: 7px;
        margin-left: 10.6797px;
        margin-right: 20px;
        margin-right: 20px;
        padding: 25px;
        justify-content: center;
        -webkit-box-pack: center;
    }
    
    .card-prod-btn2 {
        background-color: #505050;
        border-radius: 7px;
        margin-top: 15px;
        /* width: 340px; */
        padding: 25px;
        justify-content: center;
    }
    
    .card-prod-btn-text {
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-prod-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
    }
    
    .card-prod-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: Helvetica-medium;
    }
    
    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family: Helvetica-medium;
    }
    
    .image {
        width: 500px;
        height: 500px;
    }
    
    .consent {
        white-space: normal;
        
    }
    
    .form-title {
        font-size: 24px;
        font-family: robotoregular;
        padding-top: 10px;
        line-height: 1.7;
        /* color: #9d9d9d; */
    }
    
    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
    }
    
    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
    }
    
    .example {
        flex-direction: row;
        justify-content: flex-start;
    }
    
    .label {
        font-size: 22px;
        line-height: 60px;
        width: 350px;
        color: #9d9d9d;
        text-align: right;
        margin-right: 20px;
    }
    
    .table-row {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
    
    .graph {
        flex-direction: column;
    }
    
    .drop-down {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 5px;
    }
    
    .card-summary {
        margin-top: 10px;
        padding: 20px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .table-row-col-details {
        margin-left: 0px;
    }
    
    .card-line1 {
        padding: 20px;
    }
    
    .head-row {
        padding: 10px;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #ebebeb;
    }
    
    .head-row1 {
        padding: 10px;
    }
    
    .sub-heading {
        font-weight: bold;
        margin-left: 20px;
        font-size: 13px;
        color: #565656;
    }
    
    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-weight: bold;
    }
    
    .cal-icn {
        height: 20px;
        width: 20px;
        margin-top: 5px;
    }
    
    .mail-row {
        flex-direction: column;
    }
    
    .radio-data {
        flex-direction: column;
        flex: 0;
    }
      .prd-BI-button-width {
            width: 280px;
        }
           .allout-icn {
            top:0px;
            right: 7px;
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }
         .left-icn {
            left: 2px;
            position: absolute;
            width: 55px;
            height: 55px;
            cursor: pointer;
        }
        .right-icn {
            right: 2px;
            /* top: 15px; */
            /* position: absolute; */
            width: 55x;
            height: 55px;
            cursor: pointer;
        }
    
    @media only screen and (min-width: 320px) {
        .allout-icn {
            /* top: -6px; */
            right: 2px;
            position: absolute;
            width: 35px;
            height: 35px;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }
        .left-icn {
            left: 2px;
            position: absolute;
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
        .right-icn {
            right: 2px;
            position: absolute;
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
          .prd-BI-button-width {
            width: 150px;
        }
         .prd-col {
        flex-direction: column;
    }
      .clips {
            width: 100%;
            height: 230px;
        }
         .prd-show-hide {
        display: none;
        }
        .prd-hide-show {
            display: none;
        }
    .prd-cross-show-color-char {
        font-size: 13px;
        font-family: robotoregular;
        color: blue;
    }
    .prd-cross-show-hide {
        display: block;
    }
        /*Button Arrow CSS*/
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }
        .btn-icon-size-right {
            height: 18px;
            width: 18px;
            margin-left: 10px;
        }
        .md-btn-label {
            color: #fff;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            
        }
        .btn-color {
            background-color: #3b371e;
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            
        }
        .sec-btn-color {
            background-color: #fff;
            border: 1px solid black
        }
        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 36px;
            min-width: 88px;
            position: relative;
            
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .table-head-row {
            flex: 0.9;
        }
        .form-title {
            font-size: 14px;
            font-family: robotoregular;
            padding-top: 10px;
            /* color: #9d9d9d; */
        }
        .heading {
            font-size: 15px;
            font-family: robotoregular;
            padding-top: 10px;
            padding-bottom: 18px;
            font-weight: bold;
        }
        .heading-data {
            font-size: 14px;
            font-family: robotoregular;
            font-weight: bold;
            padding-top: 10px;
            padding-bottom: 10px;
            color: #9D9D9D;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
        }
        .select {
            background-color: white;
            width: 90px;
            margin-left: 8px;
            padding-top: 11px;
            padding-left: 9px;
            padding-bottom: 10px;
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
        .selectbor {
            width: 90px;
        }
        .table-row {
            flex-direction: column;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .mail-row {
            flex-direction: column;
        }
        .btn-space {
            justify-content: space-evenly;
        }
        /* Customer Tab CSS 320 */
        .flex-tab-col-row {
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 10px;
        }
        .hori-row {
            display: none;
        }
        .img-doc {
            width: 130px;
            height: 130px;
            /* align-items: center; */
            /* margin: 18px 169px 20px 77px; */
        }
        .img-center {
            align-items: flex-end;
            padding-top: 20px;
        }
        .hide {
            display: none;
        }
        .img-card {
            width: 30px;
            height: 30px;
        }
        .md-custom-btn-a {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            height: 30px;
            min-width: 88px;
            
        }
        .md-btn-label-a {
            font-size: 14px;
            font-family: robotoregular;
            font-weight: 500;
            
            color: #fff;
        }
        .md-btn-width-a {
            width: 230px;
        }
        .x-small-btn-a {
            width: 220px;
        }
        .x-small-btn-b {
            width: 130px;
        }
        .md-btn-width-b {
            width: 140px;
        }
    }
    
    @media only screen and (min-width: 768px) {
           .prd-BI-button-width {
            width: 150px;
        }
        .form-title {
            font-size: 14px;
            font-family: robotoregular;
            padding-top: 10px;
            /* color: #9d9d9d; */
        }
        .heading {
            font-size: 15px;
            font-family: robotoregular;
            /* padding-top: 5px; */
            font-weight: bold;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
        }
        .table-row {
            flex-direction: row;
        }
        .table-row-col-details {
            margin-left: 30px;
        }
        .mail-row {
            flex-direction: row;
            flex: 3;
        }
        .btn-space {
            justify-content: space-around;
        }
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
        }
        .radio-data {
            flex-direction: row;
        }
        /* Customer Tab CSS 768 */
        .flex-tab-col-row {
            display: flex;
            flex-direction: row;
            background-color: white;
            padding: 10px;
        }
        .hori-row {
            display: flex;
            flex-direction: row;
            background-color: white;
        }
        .img-doc {
            width: 130px;
            height: 130px;
            /* align-items: center; */
            /* margin: 18px 169px 20px 100px; */
        }
        .img-center {
            align-items: flex-end;
            padding-top: 20px;
        }
        .hide {
            display: flex;
        }
        .md-btn-width-a {
            width: 230px;
        }
        .x-small-btn-a {
            width: 220px;
        }
        .x-small-btn-b {
            width: 130px;
        }
        .md-btn-width-b {
            width: 140px;
        }
        .prd-show-hide {
            display: block;
        }
        .prd-hide-show {
            display: block;
        }
        .prd-cross-show-hide {
        display: none;
    }
    }
      @media only screen and (min-width: 992px)  {
        .prd-BI-button-width {
            width: 150px;
        }
        .prd-col {
            flex-direction: row;
        }
        .prd-show-hide {
            display: block;
        }
        .prd-hide-show {
            display: block;
        }
       
    .prd-cross-show-hide {
        display: none;
    }
     .sub-win-card-wdth {
             margin-left: 55px;
             margin-right: 55px;
         }
      }   
    
</style>