<template>
    
       
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
                serviceType: 'ServiceCustomer',
                data: [
                    {
                        status: 'WIP',
                        Advisor:'444710M',
                        id:'13245',
                        policyno: '38356',
                        type: '0012TRA166',
                        subtype: 'DOB Change',
                        CreatedOn :'6/12/2017',
                        LastUpdatedOn: '17/12/2017',
                        Remarks: 'Address changed in the CRM',
                        btnLabe: 'Track Request'
                    },  {
                        status: 'WIP',
                        Advisor:'4447123M',
                        id:'13283',
                        policyno: '383412',
                        type: '0012TRA123',
                        subtype: 'DOB Change',
                        CreatedOn :'12/6/2015',
                        LastUpdatedOn: '03/06/2015',
                        Remarks: 'Address changed in the CRM',
                        btnLabe: 'Track Request'
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