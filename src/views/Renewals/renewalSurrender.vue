<template>
    
        <div class="nx-flex-direction-advisor nx-flex-flow-wrap-advisor" style="">
            <div class="card-width-advisor" v-for="(listData, index) in renewalData.data" :key="index">
                <app-renewal-compo :renewal-list="listData"></app-renewal-compo>
            </div> 
        
            <!-- Dont Delete this line -->
            <div class="card-width-advisor">
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
   
    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }

    .nx-flex-direction-advisor {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap-advisor {
        flex-flow: wrap;
    }

    .card-width-advisor {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */

        .card-width-advisor {
            width: 95%;
        }

    }
    @media (min-width: 768px) {
        .nx-flex-direction-advisor {
            flex-direction: column;
        }

        .card-width-advisor {
            width: 95%;
            margin-bottom: 10px;
           
        }
    }
    @media (min-width: 992px) {
        .header-font-size {
            font-size: 16px;
            font-weight: bold;
            color:#fff;
        }

        .sales-drive-header {
            background-color: #3b371e;             
            color:#fff;
            height:50px;
        }

        .nx-flex-direction-advisor {
            flex-direction: row;

        }
        .card-width-advisor {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

<script>

import appRenewalCompo from '../../components/Renewals-List-compo.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';
export default {
    data() {
        return {
            renewalData: {
                pageName: 'Surrendered',
                data: [
                     {
                        name: 'Pankaj Thakare',
                        id: 'BRSMCU021',
                        planType: 'Endowment Plan (MGB)',
                        DueDate:'12/07/2017',
                        DueAmount:'10,000',
                        status:'Surrendered',
                    }, 
                    {
                        name: 'Abhishek Joshi',
                        id: 'BRSMCU021',
                        planType: 'Endowment Plan (MGB)',
                         DueDate:'12/07/2017',
                        DueAmount:'10,000',
                        status:'Surrendered',
                    }, 
                    
                ]
            }
        }
    },

    components: {
        appRenewalCompo
    },

    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
}
</script>


