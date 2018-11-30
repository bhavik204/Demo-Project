<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <!-- <div class="sales-drive-header">
            <text class="header-font-size">Lead Management</text>
        </div> -->
        <!-- <app-header v-if="platform === 'Web'" :header-name="headerName"></app-header> -->
        <!-- <app-tab></app-tab> -->
        <!-- <application-tab :tabs="tabs"></application-tab>
        <filter-view class="hide-filter" ></filter-view> -->
        <div class="nx-flex-direction-ld-mgmt nx-flex-flow-wrap-ld-mgmt" style="padding-top:10px">
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div> 
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div>
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div>
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div>
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div>
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div>
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div>
            <div class="card-width-ld-mgmt">
                <app-lead-list></app-lead-list>
            </div> 
            
            <!-- Dont Delete this line -->
            <div class="card-width-ld-mgmt">
            </div> 
           
        </div>

        <app-filter v-if="platform !== 'Web'"></app-filter>
        <app-filter class="hide-filter-mobile" v-if="platform === 'Web'"></app-filter>
         
    </div>

</template>


<style>
    /* .lead-wrapper  {
        background-color: #d1cfcf;
    } */


    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }

    .nx-flex-direction-ld-mgmt {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap-ld-mgmt {
        flex-flow: wrap;
    }

    .card-width-ld-mgmt {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */

        .card-width-ld-mgmt {
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
        .nx-flex-direction-ld-mgmt {
            flex-direction: column;
        }

        .card-width-ld-mgmt {
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

        .nx-flex-direction-ld-mgmt {
            flex-direction: row;

        }
        .card-width-ld-mgmt {
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
import appHeader from '../../components/SalesDrive-Header.vue'
import appLeadList from '../../components/Lead-List-Component.vue'
// import appTab from './Tabs.vue'
import applicationTab from '../../components/Tabs/HeaderTab.vue'


import appFilter from '../../components/SortFilter/SF_Footer.vue'
import filterView from '../../components/SortFilter/FilterView.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
    created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Activity Managment');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },

    data() {
        return {
            headerName: 'Lead Management',
        }
    },
    components: {
        appLeadList,
        applicationTab,
        appHeader,
        appFilter,
        filterView
    }
}
</script>


