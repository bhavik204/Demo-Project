<template>
    
    <div>
        <div class="my-serveces-compo-flex-direction my-serveces-compo-flex-flow-wrap" style="padding-top:10px">
            <div class="card-width-mservice" v-for="(listData, index) in myServicesData.data" :key="index">
                <!-- <text>{{data}}</text> -->
               <app-my-services-compo :service-data="listData"></app-my-services-compo>
            </div>      
            <!-- Dont Delete this line -->
            <div class="card-width-mservice">
            </div> 
        </div>
    </div>
</template>


<style>
    .robotoregular {
        font-family:robotoregular;
        }
        .robotobold{
        font-family:robotobold;
        }
    /* .lead-wrapper  {
        background-color: #d1cfcf;
    } */
    
    /* .sales-drive-header {
        background-color: #3b371e;
        color: #fff;
        height: 80px;
    }
     */
    .my-serveces-compo-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .my-serveces-compo-flex-flow-wrap {
        flex-flow: wrap;
    }
    
    .card-width-mservice {
        width: 720px;
        margin-bottom: 10px;
    }
    
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */
        .card-width-mservice {
            width: 95%;
            margin-bottom: 0;
        }
        .hide-filter {
            display: none;
        }
        .hide-filter-mobile {
            display: inline-block;
        }
    }
    
    @media (min-width: 768px) {
        .my-serveces-compo-flex-direction {
            flex-direction: column;
        }
        .card-width-mservice {
            width: 95%;
            margin-bottom: 10px;
        }
    }
    
    @media (min-width: 992px) {
        .hide-filter {
            display: inline-block
        }
        .hide-filter-mobile {
            display: none;
        }

        /* Not used now */
        /* .header-font-size {
            font-size: 16px;
            font-weight: bold;
            color:#fff;
            font-family:robotoregular;
        } */
        /* .sales-drive-header {
            background-color: #3b371e;
            color: #fff;
            height: 50px;
        } */
        .my-serveces-compo-flex-direction {
            flex-direction: row;
        }
        .card-width-mservice {
            width: 48%;
            /* flex: 1; */
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

<script>
import appMyServicesCompo from '../../components/My-Services-List-Compo.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

const iconSrc = 'https://www.materialui.co/materialIcons/action/';


export default {
    created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Serveic Corner');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data() {
        return {
            platform: invalid,
            myServicesData: {
                serviceType: 'ServiceSelf',
                data: [
                    {
                        status: 'Close',
                        Advisor:'44479M',
                        id:'13272',
                        policyno: '38345',
                        type: '0012TRA111',
                        subtype: 'DOB Change',
                        CreatedOn :'05/12/2019',
                        LastUpdatedOn: '04/11/2019',
                        Remarks: 'Address changed in the CRM',
                        btnLabe: 'Verify Now'
                    },  {
                        status: 'Close',
                        Advisor:'444710M',
                        id:'13287',
                        policyno: '38345',
                        type: '0012TRA145',
                        subtype: 'DOB Change',
                        CreatedOn :'01/6/2015',
                        LastUpdatedOn: '05/06/2015',
                        Remarks: 'Address changed in the CRM',
                        btnLabe: 'Verify Now'
                    }
                ]
            }
                    
        }
    },

    components: {
        appMyServicesCompo
    }
}
</script>