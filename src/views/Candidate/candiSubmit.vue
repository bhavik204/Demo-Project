<template>
    
        <div class="nx-flex-direction-advisor nx-flex-flow-wrap-advisor" style="">
            <div class="card-width-advisor" v-for="(listData, index) in candidateData.data" :key="index">
                
                <candidate-app :candidate-list="listData"></candidate-app>
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

import CandidateApp from '../../components/CandidateApp.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';
export default {
    data() {
        return {
            candidateData: {
                pageName: 'Submit',
                data: [
                   {
                        name: 'Shruti Shrivastav',
                        id: 'BRSMCU021',
                        planType: 'Endowment Plan (MGB)',
                        Name:' Suman Buchar',
                         CID:'CID2849',
                        AppID:'C993883AB18',
                        AppDate:'12/02/2013',
                        UpdatedOn:'13/01/2013',
                        status:'Submit',
                    }, 
                    {
                        name: 'Rohit Patil',
                        id: 'BRSMCU021',
                        planType: 'Endowment Plan (MGB)',
                        Name:'Sudhi Parag',
                         CID:'CID2849',
                        AppID:'C993883AB18',
                        AppDate:'12/02/2013',
                        UpdatedOn:'13/01/2013',
                        status:'Submit',
                    }, 
                   
                ]
            }
        }
    },

    components: {
        CandidateApp
    },

    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
}
</script>


