<template>  
    <div class="">
        <!-- Header -->
        <!-- <div class="documt-flex-row page-header documt-documtitems-justify-center documt-items-align-center">
            <text class="page-heder-title">Upload CFR</text>
        </div> -->
        <scroller>
            <div class="documt-flex-row documt-documtitems-justify-center documt-flex-direction-change">
                <div class="documt-box-pading">
                    <div class="documt-flex-row documt-flex-direction-change">

                        <div class="documt-flex-column" style="flex:1">
                            <!-- This design is for bowser web not for mobile web -->
                            <div class="obpp-doc-cfr-card documt-shadow documt-margin-left-in-card ">
                                <div class="documt-card-title-border income-doc-width documt-box-pading onbpp-mbt-mr">
                                    <text class="documt-normal-text-size documt-bold-text">Upload Income Proof</text>
                                </div>

                                 <div class="onbpp-mbt-mr">
                                    <text class="documt-normal-text-size box-pading">Please select the document type you would like to upload for your Address Proof</text>
                                </div>

                                <!--  -->

                                <div class="document-button onbpp-mbt-mr rem-algn-itms">
                                    <div class="documt-box documt-flex-01 onbpp-margin-r ">
                                        <text class="documt-form-labels">Select Document Type</text>
                                        <select class="documt-normal-text-size onbpp-select onbpp-tp-margin" v-if="platform === 'Web'" v-model="incomeproof" >
                                            <option v-for="(li, index) in listItems" :key="index"> {{li}} </option>
                                        </select>  
                                        <!-- Apk -->
                                        <div v-if="platform !== 'Web'"  class="onbpp-tp-margin">
                                            <apk-drop-down :optionList="listItems"></apk-drop-down>
                                        </div>

                                    </div>
                                    <div class="documt-documt-pading documt-flex-01 obpp-switch-tp-mar">
                                        <text class="documt-form-labels">You can add multiple images for a document</text>
                                        <div class="documt-flex-row onbpp-tp-margin up-galle-btn-width">
                                            
                                            <div class="documt-box-pading" v-if="platform === 'Web'">
                                            
                                                <p-button 
                                                    btn-name="Upload" 
                                                    btn-icon="https://www.materialui.co/materialIcons/file/file_upload_white_192x192.png">
                                                </p-button>
                                            </div>
                                            <!-- APK -->
                                            <div class="documt-box-pading" v-if="platform !== 'Web'">
                                            
                                                <p-button 
                                                    btn-name="Upload" 
                                                    btn-width="300px"
                                                    btn-icon="https://www.materialui.co/materialIcons/file/file_upload_white_192x192.png">
                                                </p-button>
                                            </div>
                                            <div class="documt-box-pading" v-if="platform !== 'Web'">
                                               
                                                <p-button 
                                                    btn-name="Gallery" 
                                                    btn-width="300px"
                                                    btn-icon="https://www.materialui.co/materialIcons/image/image_white_192x192.png">
                                                </p-button>
                                            </div>
                                            <div class="documt-box-pading" v-if="platform === 'Web'">
                                
                                                <p-button 
                                                    btn-name="Gallery" 
                                                    btn-icon="https://www.materialui.co/materialIcons/image/image_white_192x192.png">
                                                </p-button>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div class="complete-border documt-btm-margin age-alert-width-pos obpp-switch-tp-mar" style="background-color:#FDFDCB;border-radius:10px;">
                                    <text class="documt-normal-text-size">Please ensure that that image you upload is clear and verifiable.</text>
                                    <!-- new Line of code -->
                                    <!-- <image src="https://www.materialui.co/materialIcons/content/clear_grey_192x192.png" class="documt-cfr-x-btn-icon-size onbpp-alert-icon-pos cursor-pointer-globle" /> -->
                                </div>

                                <!-- Table code -->
                                <div class="documt-flex-column">
                                    <div class="">
                                        <div class="documt-flex-row documt-u-cfr-page-wraper">
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Image</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Category & Type</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">CFR ID</text>
                                            </div>
                                       
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">Actions</text>
                                            </div>
                                        </div>

                                    </div>
                                  
                                    <div class="">
                                        <div class="documt-flex-row documt-items-align-center">
                                            <div class="documt-table-heading" style="flex:2">
                                                <image class="documt-id-prof" src="https://i.ytimg.com/vi/VlWj3GqoRQg/maxresdefault.jpg"></image>
                                            </div>
                                            <div class="documt-table-heading" style="flex:2">
                                                <text class="documt-normal-text-size">Photo ID PAN Card</text>
                                            </div>
                                            <div class="documt-table-heading" style="flex:1">
                                                <text class="documt-normal-text-size">AFR12012</text>
                                            </div>
                    
                                            <!-- here inline flex direction -row is fixed not changable -->
                                            <div class="documt-table-heading" style="flex-direction:row;flex:1">
                                                <div style="margin-right: 10px;">
                                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="documt-cfr-x-btn-icon-size cursor-pointer-globle" />
                                                </div>
                                                <div>
                                                    <image src="https://www.materialui.co/materialIcons/action/delete_grey_192x192.png" class="documt-cfr-x-btn-icon-size cursor-pointer-globle" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                               

                                </div>

                                
                                

                            </div>

                            <!-- Mobile Web -->
                          
                            
                            <!-- End -->
                            <div class="documt-flex-row obpp-doc-cfr-card documt-shadow documt-margin-left-in-card justify-space">
                                <div v-if="platform === 'Web'" class="documetn-income-btn-width"
                                @click.native="jump('/master/masterdoc/iddocument')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>

                                <div v-if="platform === 'Web'" class="documetn-income-btn-width"
                                @click.native="submitData()">
									<p-button btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" btn-name="Save"></p-button>
								</div>

								<div v-if="platform !== 'Web'" class="documetn-income-btn-width"
                                @click="jump('/master/masterdoc/iddocument')">
									<s-button btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" btn-name="Previous"></s-button>
								</div>

                                <div v-if="platform !== 'Web'" class="documetn-income-btn-width"
                                @click="jump('/master/masterdoc/agedocument')">
									<p-button btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png" btn-name="Save"></p-button>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>


<script>
// cfr-dropDown-apk
// import apkDropDown from '../CFR/cfr-dropDown-apk'
import apkDropDown from '../../CFR/cfr-dropDown-apk.vue'
import PButton from '../../../components/vx-primary-button/vx-primary-button.vue'
import SButton from '../../../components/vx-primary-button/vx-scondary-button'
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'


const items = [
    "Aadhar Card-not provisionl(LR)",
    "Banker's Certification",
    "Bank Acct Statement",
    "Bihar St. ParichayPatra (LR)",
    "Credit Card Stmt 3 Mth(LR/ HR)",
    "Cert from Ward officer (LR)",
    "Caste & Domicile Cert. (LR)",
    "DRIV LCN",
    "Electricity Bill",
    "Employer's Certificate 2 Months",
    "Gas connection card/Bill (LR)",
    "Gazetted Officer",
    "Incorporation Certificate",
    "Life Insurance Policy (LR)",
    "I. tax/Wealth tax ass (LR/ HR)",
    "Lease Agrmnt wth Rnt Rcpt 3mth",
    "Rgd.Lease Agmt 6 Mth(LR/ HR)",
    "Memorandum & Articles of Assoc",
    "Special Executive Magistrate",
    "Mutual Fund stmt 3 Mth(LR/ HR)",
    "Others",
    "PAN Allotment Letter",
    "PASSPORT",
    "Pension Pmt Order by gov (LR)",
    "Pension Pmt Order by gov (LR)",
    "Public Authority Ltr",
    "Power of Attorney",
    "Ration Card",
    "Letter from SEM/GO/PA* (LR)",
    "Telephone Bill",
    "Certificate by VEO/HEAD (LR)",
    "Voter's Identity Card"
    ];
    export default {
        components:{
            PButton,
            apkDropDown,
            SButton
        },
        created() {
                      var me = this
            me.form = (me.$store.getters.getAppFormData)
                                               
                for(var i=0;i <me.form.length;i++)
                {
                  console.log(me.form[i].documentUpload)
                  this.formDat = me.form[i].documentUpload
                  this.leadiden = me.form[i].leadId._id
                  this.prodiden = me.form[i].productId
                  console.log(me.formDat)
                     this. incomeproof = me.formDat.UploadIncomeProof.UploadIncomeProof
                  // this. incomeproof = me.formDat.UploadIncomeProof
 
                }
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
                // return this.platform
            }
        },
        data() {
            return {
                    form:[],
                formDat:{},
                leadiden :'',
                prodiden:'',
                incomeproof:'',
                headerName:'Medical CFR',
                listItems: items,
                cfrDetails: {
                    propName: 'Amit Joshi',
                    clientID: 'BRSMCU002',
                    applicationNo: '0012TRA871',
                    plan: 'Endowment Plan',
                    recivedPremium: '5,000',
                    dedline: '20/10/2018'
                },

                requirmt: [
                    "Address Proof- XY33M",
                    "Photo ID- XY34M",
                    "ID Proof- XY33N",
                    "Income Proof- XY33T",
                    "Age Proof- XY33L"
                ],
                addressProfSection: false,
                photoIDSection: false
            }
        },
        methods: {
                   submitData(){
                var  me= this ;
                  const  documentUpload = ''
                const formData = {

                    userId:me.$store.state.agentDetails._id,
                    leadId:this.leadiden,
                    productId:this.prodiden,
                    UploadIncomeProof    : this.incomeproof,
                }

                console.log(formData)
            //    me.$store.commit('ADD_APPFORMDATA',[{formData}],'documentUpload') 
                       me.$store.commit('ADD_APPFORMDATA',{UploadIncomeProof: formData})  

                    me.$router.push('/master/masterdoc/agedocument')

 
            },
            displayDocumnentUploadSection(sectionId) {
                switch(sectionId) {
                    case 1: 
                        if(this.addressProfSection === true) {
                            this.addressProfSection = false
                        } else {
                            this.addressProfSection = true;
                        }
                    break;
                    case 2: 
                        if(this.photoIDSection === true) {
                            this.photoIDSection = false
                        } else {
                            this.photoIDSection = true;
                        }
                    break;
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
    /* APK */

    .document-button{
        flex-direction:column
    }
    .documt-u-cfr-page-wraper {
        background-color: rgb(230, 230, 230);
        /* padding:20px; */
    }

    .page-header {
        height: 100px;
        background-color: #3b371e;
        top: -1px;
        margin-bottom: 40px;
    }

    .page-heder-title {
        font-size: 30px;
        color: white;
        font-family:robotoregular;
    }

    .obpp-doc-cfr-card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    
    .nx-flex-wrap {
        flex-wrap: wrap;
    }
    
    .documt-flex-row {
        flex-direction: row;
    }
    
    .documt-flex-column {
        flex-direction: column;
    }
    
    .documt-flex-row-revers {
        flex-direction: row-reverse;
    }
    
    .documt-flex-direction-change {
        flex-direction: column;
    }
    
    .text-keep-center {
        text-align: center;
    }
    
    .text-right {
        text-align: right;
    }
    
    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }
    
    .documt-items-align-center {
        align-items: center;
    }
    
    .documt-documtitems-justify-center {
        justify-content: center;
    }
    .justify-space {
        justify-content: space-between;
    }
    
    .self-align {
        align-self: flex-end;
    }
    
    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
    }
    
    .documt-flex-01 {
        flex: 1;
    }
    
    .documt-flex-02 {
        flex: 2;
    }

    .documt-card-title-border {
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 5px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    }

    /* Full border */
    
    .complete-border {
        border-width: 2px;
        border-style: solid;
        border-color: #FFB600;
        padding: 15px;
    }

    .documt-cfr-bk-btn-color {
        background-color: rgb(33, 34, 35);
    }

    .documt-cfr-up-md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 75px;
       
    }

    .documt-cfr-up-md-btn-label {
        font-size : 24px;
        font-weight: 500;
       
        color:#fff;
        font-family:robotoregular;
    }

    .documt-cfr-up-md-custom-btn:active {
        background-color:rgb(5, 4, 4);
    }
    .documetn-income-btn-width {
        width: 300px;
    }

    .documt-box-pading {
        padding: 10px;
        flex:1;
    }

    .x-small-btn {
         width: 210px;
    }

    .documt-table-heading {
        padding: 20px;
    }

    .documt-cfr-x-btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
       
    }

    .documt-normal-text-size {
        font-size: 24px;
        font-family:robotoregular;
    }

    .comunication-btn-width {
        width: 210px;
    }
    .documt-upload-small-list-card {
        padding: 30px;
        background-color: #FFF;
        margin-bottom: 10px;
    }
    .documt-my-custom-table {
        margin-top: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(216, 216, 216);
    }
    .documt-my-custom-tb-btm-bdr {
        border-width: 2px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: rgb(216, 216, 216);
    } 

    /* border width class
    .cfr-card-t-bdr {


    } */
    .documt-cfr-requir-width {
        width: 180px;
    }
    .income-doc-width {
        width: 260px;
    }

    /* Reuriment List */
    .reurment-list {
        padding: 25px;
        border-bottom-width: 1px;
        margin-bottom: 0;
        border-bottom-color: #e7e7e7;
        
    }
    .documt-list-icon-size {
        width:30px;
        height: 30px;
    }
    .documt-btm-margin {
        margin-bottom: 25px;
    }
    .documt-id-prof {
        width: 100px;
        height: 60px;
    }
    .documt-tbl-row-padding {
        padding: 15px;
    }

     .onbpp-mbt-mr {
    margin-bottom: 30px;
  }

    /* New @usama */
    .onbpp-tp-margin {
        margin-top: 25px;
    }
    /* Switching */
    .obpp-switch-tp-mar {
        margin-top: 20px;
    }   

    /* Alert box position new class added by usama  also we need width*/
    .age-alert-width-pos{
        width: 650px;
        position: relative;
        left: 20px;

    }

    .onbpp-alert-icon-pos {
        position: absolute;
        right: 20px;
       
    }
            .rem-algn-itms {
            align-items: baseline;
        }

     .documt-form-labels {
    font-size: 24px;
    color: #a5a5a5;
    font-family: robotoregular;
  }
    
    /* 320 */
    @media (min-width: 320px) {
        /* Added by usama for drop down */
        .onbpp-select {
            padding: 5px;
            padding-left: 0;
            border-bottom: 1px solid rgb(185, 185, 185);
            outline: none;
        }

        .documt-tbl-row-padding {
            padding: 5px;
        }
        .documt-flex-direction-change {
            flex-direction: column;
        }

        .documt-form-labels {
            font-size: 13px;
            color: #a5a5a5;
            font-family:robotoregular;
        }

        .content-width {
            width: 100%;
        }
        .page-header {
            height: 50px;
            margin-bottom: 20px;
        }
        .page-heder-title {
            font-size: 16px;
            font-family:robotoregular;
        }
        .documt-normal-text-size {
            font-size: 14px;
            font-family:robotoregular;
        }
        .obpp-doc-cfr-card {
            background-color: #ffffff;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
            margin-bottom: 20px;
            border-radius: 3px;
        }
        .cfr-card-height {
            max-height: 270px;
            
        }
        .documt-card-title-border {
            border-bottom-width: 4px;
            margin-bottom: 10px;
        }
        .documt-box-pading {
            padding: 5px;
        }
        .documt-shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .documt-cfr-bk-btn-color {
            background-color: rgb(33, 34, 35);
        }
        .documt-cfr-up-md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 75px;
            position: relative;
           
        }
        .documt-cfr-up-md-btn-label {
            font-size: 11px;
            font-weight: 500;
           
            color: #fff;
            font-family:robotoregular;
        }
        .documt-cfr-up-md-custom-btn:active {
            background-color: rgb(5, 4, 4);
        }
        .documetn-income-btn-width {
            width: 50%;
        }
        .documt-table-heading {
            padding: 10px;
        }
        .title-width {
            max-width: 183px;
        }
        .link-margin {
            margin-top: 20px;
        }
        .reurment-list {
            padding: 15px;
        }
        .reurment-height {
            height: auto;
        }
        .documt-id-prof {
            width: 70px;
            height: 40px;
        }
        .documt-btm-margin {
            margin-bottom: 20px;
        }

        .documt-list-icon-size {
            width:20px;
            height: 20px;
        }

        /* Border width */
        .cfr-card-t-bdr {
            width: 92px;
        }
        .documt-cfr-requir-width {
            width: 108px;
        }
        .income-doc-width {
            width: 145px;
        }
        .documt-cfr-x-btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }

        /* here display none is used to totaly change ui */
        .documt-whole-card-hide {
            display: none;
        }

        /* New List */
        /* 19-04-2018 */
        .documt-upload-small-list-card {
           padding: 20px;
           background-color: #FFF;
           margin-bottom: 10px;
        }

        .documt-hide-mobile-cards {
            display: block;
        }

        .documt-my-custom-table {
            margin-top: 20px;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(216, 216, 216);
        }

        /* New CSS 9-5-18 @usama*/
        /* This class is mainly used at provide gap between two components (select, buttons)*/
        /* not used at 320 and global */
        .onbpp-margin-r {
            margin-right: 25px;
        }

        /* This is the gap between label and fields this is not changeble */
        .onbpp-tp-margin {
            margin-top: 10px;
        }

        /* Switching */
        .obpp-switch-tp-mar {
            margin-top: 15px;
        }

        .onbpp-mbt-mr {
            margin-bottom: 20px;
        } 

        /* Alert box position new class added by usama  also we need width*/
        .age-alert-width-pos{
            width: 100%;
            position: relative;
            left: 0;
        }   

        .onbpp-alert-icon-pos {
            right: 10px;
        }    
        /* Upload and Gsllery Button width */
        .up-galle-btn-width {
            width: 93%;
        }
    }
    
    @media (min-width: 768px) {
        .documt-margin-left-in-card {
            margin-left: 20px;
        }
        .documetn-income-btn-width {
            width: 25%;
        }
        .documt-flex-direction-change {
            flex-direction: row;
        }
        .documt-only-table-row {
            flex-direction: column;
        }
        .container-width {
            max-width: 750px;
        } 
        
        /* Switching */
        .obpp-switch-tp-mar {
            margin-top: 10px;
        } 
        
        .document-button{
            flex-direction:column;
        }    

        .align-switching {
            align-items: baseline;
        }
    }
    
    @media (min-width: 992px) {

        .document-button {
            flex-direction:row;
        }  
        
        .obpp-switch-tp-mar {
            margin-top: 0;
        } 
        .documt-flex-direction-change {
            flex-direction: row;
        }
        .container-width {
            max-width: 1200px;
        }
        .documetn-income-btn-width {
            width: 13%;
        }

        .documt-whole-card-hide {
            display: block;
        }

        .documt-hide-mobile-cards {
            display: none;
        }

         .age-alert-width-pos{
            width: 50%;
            position: relative;
            left: 25%;
        }   
        .align-switching {
            align-items: center;
        }

        
         .rem-algn-itms {
            align-items: center;
        }

        /* Upload and Gsllery Button width */
        .up-galle-btn-width {
            width: 50%;
        }
    }
</style>