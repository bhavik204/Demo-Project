<template>
    <div>
        <div class="nx-flex-direction-ld-mgmt nx-flex-flow-wrap-ld-mgmt" style="padding-top:10px">
            <div class="card-width-ld-mgmt" v-for="(lead ,listIndex) in todayLeads.leadsData" :key="listIndex">
                <app-lead-list :lead-data="lead"></app-lead-list>
            </div> 
               <div v-if="draftData == false" class="card-width-app">
                <blank-card :message="message"></blank-card>
            </div> 
            <!-- Dont Delete this line -->
            <div class="card-width-ld-mgmt">
            </div> 
           
        </div>      
    </div>
</template>


<style>

   
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

import appLeadList from '../../components/Lead-List-Component.vue'
import blankCard from '../../components/BlankCard/blankcard.vue'
// const animation = weex.requireModule('animation')
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
              message:'No Records Found',
              draftData :true,
           todayLeads: {
               leadsType: 'Pending Proposal',
               leadsData: [
                   {
                    personName: 'Rahul Soni',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '18/5/2018',
                    address: '72, Kushal Apartments, Mansarovar Pondicherry - 308126',
                    mobileNo: '9978120993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Open'
                }, {
                    personName: 'Salman Shaikh',
                    id: 'BRSMCU013',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '16/5/2018',
                    address: '49, Alka Heights, Bhanupriya Nagar Pune - 198010',
                    mobileNo: '9978120990',
                    allocatedBy: 'Tony Pinto',
                    status: 'Pending Proposal'
                }, {
                    personName: 'Pankaj Thakre',
                    id: 'BRSMCU020',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '12/5/2018',
                    address: 'Hina Chowk, Vadodara - 366733',
                    mobileNo: '9978420993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Pending Proposal'
                }, {
                    personName: 'Fizal Khan',
                    id: 'BRSMCU033',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '20/5/2018',
                    address: 'Azhar Chowk, Kota - 556815',
                    mobileNo: '9978020993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Open'
                },
                {
                    personName: 'Sudeep Makwana',
                    id: 'BRSMCU062',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '18/5/2018',
                    address: '49, Alka Heights, Bhanupriya Nagar Pune - 198010',
                    mobileNo: '9978120993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Open'
                }, {
                    personName: 'Joti Kour',
                    id: 'BRSMCU028',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '16/5/2018',
                    address: '72, Kushal Apartments, Mansarovar Pondicherry - 308126',
                    mobileNo: '9978120990',
                    allocatedBy: 'Tony Pinto',
                    status: 'Open'
                }, {
                    personName: 'Paresh Soni',
                    id: 'BRSMCU030',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '12/5/2018',
                    address: 'Azhar Chowk, Kota - 556815',
                    mobileNo: '9978420993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Open'
                }, {
                    personName: 'Ubaid Khan',
                    id: 'BRSMCU054',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '20/5/2018',
                    address: 'Hina Chowk, Vadodara - 366733',
                    mobileNo: '9978020993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Open'
                },

                 {
                    personName: 'Rahul Soni',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '18/5/2018',
                    address: '72, Kushal Apartments, Mansarovar Pondicherry - 308126',
                    mobileNo: '9004329540',
                    allocatedBy: 'Tony Pinto',
                    status: 'Converted'
                }, {
                    personName: 'Rahul Soni',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '16/5/2018',
                    address: '49, Alka Heights, Bhanupriya Nagar Pune - 198010',
                    mobileNo: '9004328540',
                    allocatedBy: 'Tony Pinto',
                    status: 'Converted'
                }, {
                    personName: 'Rahul Soni',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '12/5/2018',
                    address: 'Hina Chowk, Vadodara - 366733',
                    mobileNo: '9002329542',
                    allocatedBy: 'Tony Pinto',
                    status: 'Converted'
                }, {
                    personName: 'Rahul Soni',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '20/5/2018',
                    address: 'Azhar Chowk, Kota - 556815',
                    mobileNo: '9001329550',
                    allocatedBy: 'Tony Pinto',
                    status: 'Converted'
                },
                {
                    personName: 'Prakash Jain',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '18/5/2018',
                    address: '72, Kushal Apartments, Mansarovar Pondicherry - 308126',
                    mobileNo: '9718120993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Pending Proposal'
                }, {
                    personName: 'Rahul Sodi',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '16/5/2018',
                    address: '49, Alka Heights, Bhanupriya Nagar Pune - 198010',
                    mobileNo: '9728120990',
                    allocatedBy: 'Tony Pinto',
                    status: 'Pending Proposal'
                }, {
                    personName: 'Sana Shaikh',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '12/5/2018',
                    address: 'Hina Chowk, Vadodara - 366733',
                    mobileNo: '9758420993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Pending Proposal'
                }, {
                    personName: 'Shurti Saraswati',
                    id: 'BRSMCU022',
                    planType: 'Increasing Income (MGB)',
                    allocationDate: '10/5/2018',
                    appointmentDate: '20/5/2018',
                    address: 'Azhar Chowk, Kota - 556815',
                    mobileNo: '9798020993',
                    allocatedBy: 'Tony Pinto',
                    status: 'Pending Proposal'
                },
                ],
           }
        }
    },
    components: {
        appLeadList,
        blankCard
    }
}
</script>


