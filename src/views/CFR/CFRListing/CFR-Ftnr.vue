<template>
    <div>
        <scroller>
            <div class="nx-flex-direction nx-flex-flow-wrap" style="">
               <div class="card-width-cfr" v-for="(listData, index) in cfrAll.cfrData" :key="index">
                    <app-cfr-list :cfr-data="listData"></app-cfr-list>
                </div>  
                <!-- Dont Delete this line -->
                <div class="card-width-cfr">
                </div> 
            
            </div>
        </scroller>       
    </div>

</template>


<style>
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
.master-page-wrapper {
    padding-left: 10px;
    padding-right: 10px;
}    
/*    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }
*/
    .nx-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }
    .card-width-cfr {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */

        .card-width-cfr {
            width: 95%;
            margin-bottom: 0;
        }
        .hide-filter{
            display:none;
        }
        .hide-filter-mobile{
            display: inline-block;
        }

    }
    @media (min-width: 768px) {
        .nx-flex-direction {
            flex-direction: column;
        }

        .card-width-cfr {
            width: 100%;
        }
    }
    @media (min-width: 992px) {
        .header-font-size {
            font-size: 14px;
            font-weight: bold;
            color:#fff;
            font-family:robotoregular;
        }

/*        .sales-drive-header {
            background-color: #3b371e;             
            color:#fff;
            height:50px;
        }

*/        .nx-flex-direction {
            flex-direction: row;

        }
        .card-width-cfr {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        .hide-filter{
            display:inline-block
        }
        .hide-filter-mobile{
            display: none;
        }
    }
</style>

<script>

import appCfrList from '../../../components/CFRListUpdated.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
    created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'CFR');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data() {
        return {
            cfrAll: {
                cfrType: 'CFR FTNR',
                cfrData: [
                    {
                        status: 'Open',
                        name: 'Shoaib khan',
                        id: 'BRSMCU023',
                        planType: 'Endowment Plan (MGB)',
                        applicationNo: '0012TRA123',
                        cfrType: 'Savings (Par)',
                        recievedPremium: '₹ 18,004',
                        date: '01/02/2016',
                        deadLine: '12/03/2016'
                    }, {
                        status: 'Re-Open',
                        name: 'Himanshu Gupta',
                        id: 'BRSMCU023',
                        planType: 'Endowment Plan (MGB)',
                        applicationNo: '0012TRA124',
                        cfrType: 'Document Needed',
                        recievedPremium: '₹ 19,005',
                        date: '09/05/2017',
                        deadLine: '10/07/2017'
                    },
                     {
                        status: 'Open',
                        name: 'Salman khan',
                        id: 'BRSMCU023',
                        planType: 'Endowment Plan (MGB)',
                        applicationNo: '0012TRA123',
                        cfrType: 'Medical',
                        recievedPremium: '₹ 18,004',
                        date: '01/02/2016',
                        deadLine: '12/03/2016'
                    }, {
                        status: 'Submitted',
                        name: 'Alex',
                        id: 'BRSMCU024',
                        planType: 'Endowment Plan (MGB)',
                        applicationNo: '0012TRA125',
                        cfrType: 'Medical',
                        recievedPremium: '₹ 20,005',
                        date: '08/05/2018',
                        deadLine: '10/06/2018'
                    }, {
                        status: 'Close',
                        name: 'Salman khan',
                        id: 'BRSMCU024',
                        planType: 'Endowment Plan (MGB)',
                        applicationNo: '0012TRA126',
                        cfrType: 'BOP',
                        recievedPremium: '₹ 21,005',
                        date: '10/05/2018',
                        deadLine: '18/09/2018'
                    }
                ]
            }
        }
    },
    components: {
        appCfrList
    }
}
</script>


