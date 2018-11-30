<template>
    <div class="raise-req-wrp-row">
        <div class="raise-req-frm-page">
            <div class="mbt-i-ld-20 pd-rw-lft-rgt-10 raised-ml-mr-5">
                <text class="frm-hedng-bold-16">Raise Query for</text>
            </div>
            <div class="mbt-i-ld-20 pd-rw-lft-rgt-10 raised-ml-mr-5">
                <toggle-btn option1="Customer" option2="Self" :hasIcons="false" @selectedGender="raisedFormActivation"></toggle-btn>
            </div>

            <div v-if="true">
                <cust-request></cust-request>
            </div>

            <div v-if="false">
                <self-request></self-request>
            </div>
        </div>
    </div>
</template>

<script>
import toggleBtn from '../../components/GenderView/genderView'

import custRequest from './RaisedRequestForm'
import selfRequest from './SelfReq'
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            this.deviceWidth = WXEnvironment.deviceWidth || unknown
        }
    },
    data() {
        return {
            platform: invalid,

            custActive: true,
            selfActive: false
        }
    },
    components: {
        toggleBtn,
        custRequest,
        selfRequest
    },   
    methods: {
        raisedFormActivation(event) {
            if (formName === 'Customer') {
                this.custActive = true;
                this.selfActive = false;
            } else if (formName === 'Self') {
                this.custActive = false;
                this.selfActive = true;
            }
        }
    } 
}
</script>

<style>

    /* @usama any work say usama */
     /* Dont Change any value in existing class */
    .raise-req-wrp-row {
        flex-direction: row;
        justify-content: center;
        /* align-items: center; */
    }

    .raise-req-frm-page {
        background-color: #FFFFFF;
        border-radius: 3px;
    }

     /* This margin class is used to provide margin to all individual
        filed */
    .mbt-i-ld-20 {
        margin-bottom: 30px;
    }
    /* Dont Change any value in existing class */
    .raised-ml-mr-5 {
        margin-left: 20px;
        margin-right: 20px;
    }

    .frm-hedng-bold-16 {
        font-size: 28px;
        font-weight: 700;
        font-family:robotoregular;
    }

    .raise-re-frm-dir {
        flex-direction: column;
    }

    .cntct-frm-lbl-size {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
        font-family:robotoregular;
    }

    @media screen and (min-width: 320px){

        .cntct-frm-lbl-size {
            font-size: 14px;
        }
       
        .raise-req-frm-page {
            background-color: #FFFFFF;
            border-radius: 3px;
            padding: 20px;
            width: 90%;
        }

         /* This margin class is used to provide margin to all individual
        filed */
        .mbt-i-ld-20 {
            margin-bottom: 20px;
        }

        .raised-ml-mr-5 {
            margin-left: 15px;
            margin-right: 15px;
        }

        .frm-hedng-bold-16 {
            font-size: 16px;
            font-weight: 700;
            font-family:robotoregular;
        }

        .raise-reqt-frm-mrb-10 {
            margin-bottom: 10px;
        }

        /* Document upload btn width */

        .raise-form-doc-btn-width {
            width: 100px;
        }

        
    }
    @media screen and (min-width: 768px){
        /* This class is used to provide margin-left and right rows fileds */
        .raised-ml-mr-5 {
            margin-left: 5px;
            margin-right: 5px;
        }

        /* switching class */
        .raise-re-frm-dir {
            flex-direction: row;
        }        
    }
    @media screen and (min-width: 992px){
        .raise-requ-last-row-align {
            align-items: center;
        }
    }

</style>


