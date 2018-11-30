<template>
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        <div class="outer-flx-dirction-row">

                <div class="nx-flex-direction nx-flex-flow-wrap full-box-width" style="">
                    <div class="card-width">
                        <app-advisor-compo></app-advisor-compo>
                    </div> 
                    <div class="card-width">
                        <app-advisor-compo></app-advisor-compo>
                    </div> 
                    <div class="card-width">
                        <app-advisor-compo></app-advisor-compo>
                    </div> 
                    
                    
                    <!-- Dont Delete this line -->
                    <div class="card-width">
                    </div> 
                    
          </div>

        </div>
       
        

    </div>

</template>


<style>
    .lead-wrapper {
        /*background-color: #d1cfcf;*/
    }
    
    .sales-drive-header {
        background-color: #3b371e;
        color: #fff;
        height: 80px;
    }
    
    .nx-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }
    
    .card-width {
        width: 720px;
        margin-bottom: 10px;
    }
    
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */
        .card-width {
            width: 95%;
        }
        .full-box-width {
            width: 100%;
        }
    }
    
    @media (min-width: 768px) {
        .nx-flex-direction {
            flex-direction: column;
        }
        .card-width {
            width: 75%;
            margin-bottom: 10px;
        }
        .outer-flx-dirction-row {
            flex-direction: row;
        }
        .nx-flex-flow-wrap {
            flex-flow: wrap;
            width: 48%
        }
    }
    
    @media (min-width: 992px) {
        .header-font-size {
            font-size: 16px;
            font-weight: bold;
            color: #fff;
        }
        .sales-drive-header {
            background-color: #3b371e;
            color: #fff;
            height: 50px;
        }
        .nx-flex-direction {
            flex-direction: row;
        }
        .card-width {
            width: 45%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        .outer-flx-dirction-row {
            flex-direction: row;
        }
        .nx-flex-flow-wrap {
            flex-flow: wrap;
            width: 66%
        }
    }
</style>

<script>
    import appHeader from '../../components/SalesDrive-Header.vue'
    import appAdvisorCompo from '../../components/AdvisorListComponent'
    import appSalesTabs from './AdvisorTabs.vue'
    import appFilter from '../../components/SortFilter/SF_Footer.vue'
    import appHeader1 from '../../components/Presales/PCH.vue'
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
        data() {
            return {
                headerName: 'Applications'
            }
        },

        components: {
            appAdvisorCompo,
            appSalesTabs,
            appHeader,
            appHeader1,
            appFilter
        },

        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
    }
</script>