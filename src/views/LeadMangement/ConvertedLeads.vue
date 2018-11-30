<template>
    <div>
        <div class="nx-flex-direction-ld-mgmt nx-flex-flow-wrap-ld-mgmt " style="padding-top:10px">
            <div class="card-width-ld-mgmt" v-for="(lead ,listIndex) in todayLeads.leadsData" :key="listIndex">
                <app-lead-list :lead-data="lead"></app-lead-list>
            </div> 
             <div v-if="convertedLeadData === true" class="card-width-ld-mgmt">
                <blank-card :message="message"></blank-card>
            </div> 
            <!-- Dont Delete this line -->
            <div class="card-width-ld-mgmt">
            </div> 
           
        </div>      
    </div>
</template>


<style>
    /* new class added for animation  */
    /* .li-li-animate {
        opacity: 0;
    } */
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
import blankCard from '../../components/BlankCard/blankcard'
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
    mounted() {
        let self = this;
        let userId = self.$store.state.agentDetails._id
        this.GET('getLead/'+userId+'?leadfilter=leadconverted', res => {
            if( !res.ok ){
                self.getJsonpResult = "request failed";
                // console.log('No Data Found')
                 this.convertedLeadData = false
                } else {
                    self.readDataFromServer =  res.data.errMsg;
                    // console.log('Coverted Leads:  ', self.readDataFromServer);
                    if(res.data.errCode !== 400) {

                        if(res.data.errCode === 784) {
                            this.convertedLeadData = true

                        } else {

                            /**
                             * When response have dATA THEN convertedLeadData = false
                             */
                            this.convertedLeadData = false
                            let tempObject = {};
                            for(let i = 0; i < self.readDataFromServer.length; i++) {
                               
                                /**
                                 * Why this condition: Becouse leadId contain null values and values both
                                 * and I need only values section not null section
                                 */

                                
                                if(self.readDataFromServer[i].leadId !== null) {
                                    tempObject = self.readDataFromServer[i].leadId;
                                    // console.log('Temp Object : ', tempObject);

                                    self.dataStructure.personName = self.nameConcatination(tempObject.firstName, 
                                    tempObject.middleName, tempObject.lastName);
                                    self.dataStructure.id = tempObject._id;
                                
                                    self.dataStructure.mobileNo = tempObject.primaryMobile;
                                    // self.dataStructure.address = self.joinAddress(tempObject.address[0].line1,
                                    // self.readDataFromServer[i].address[0].line2, tempObject.address[0].line3,
                                    // tempObject.pincode );

                                    tempObject = {};
                                }
                                
                                
                                
                                /**
                                Data pushed into an array
                                */
                                this.todayLeads.leadsData.push(this.dataStructure);
                            

                                this.dataStructure = {
                                    personName: '',
                                    id: '',
                                    planType: 'Increasing Income (MGB)',
                                    allocationDate: '10/5/2018',
                                    appointDate: '18/5/2018',
                                    address: '',
                                    mobileNo: '',
                                    allocBy: 'Tony Pinto',
                                    btnName: 'Update',
                                    navigationLink: '/leadmasterpage/statuslead',
                                    status: 'Converted'
                                }                            
                            }
                        }
                    } else {
                        this.convertedLeadData = false
                    }
                }
            });
    },

    data() {
        return {
            message:'No Records Found',
            convertedLeadData :false,
            readDataFromServer: [],
            dataStructure: {
                personName: 'Rahul Soni',
                id: 'BRSMCU022',
                planType: 'Increasing Income (MGB)',
                allocationDate: '10/5/2018',
                appointDate: '18/5/2018',
                address: '72, Kushal Apartments, Mansarovar Pondicherry - 308126',
                mobileNo: '9967171738',
                allocBy: 'Tony Pinto',
                btnName: 'Update',
                navigationLink: '/leadmasterpage/statuslead',
                status: 'Converted'
            },
            todayLeads: {
               leadsType: 'Converted',
               leadsData: []
           }

        //    todayLeads: {
        //        leadsType: 'for today',
        //        leadsData: [
        //         {
        //             name: 'Rahul Soni',
        //             id: 'BRSMCU022',
        //             planType: 'Increasing Income (MGB)',
        //             allocationDate: '10/5/2018',
        //             appointmentDate: '18/5/2018',
        //             address: '72, Kushal Apartments, Mansarovar Pondicherry - 308126',
        //             mobileNo: '9978120993',
        //             allocatedBy: 'Tony Pinto',
        //             status: 'Open'
        //         }, {
        //             name: 'Salman Shaikh',
        //             id: 'BRSMCU013',
        //             planType: 'Increasing Income (MGB)',
        //             allocationDate: '10/5/2018',
        //             appointmentDate: '16/5/2018',
        //             address: '49, Alka Heights, Bhanupriya Nagar Pune - 198010',
        //             mobileNo: '9978120990',
        //             allocatedBy: 'Tony Pinto',
        //             status: 'Closed'
        //         }, {
        //             name: 'Pankaj Thakre',
        //             id: 'BRSMCU020',
        //             planType: 'Increasing Income (MGB)',
        //             allocationDate: '10/5/2018',
        //             appointmentDate: '12/5/2018',
        //             address: 'Hina Chowk, Vadodara - 366733',
        //             mobileNo: '9978420993',
        //             allocatedBy: 'Tony Pinto',
        //             status: 'Closed'
        //         }, {
        //             name: 'Fizal Khan',
        //             id: 'BRSMCU033',
        //             planType: 'Increasing Income (MGB)',
        //             allocationDate: '10/5/2018',
        //             appointmentDate: '20/5/2018',
        //             address: 'Azhar Chowk, Kota - 556815',
        //             mobileNo: '9978020993',
        //             allocatedBy: 'Tony Pinto',
        //             status: 'Open'
        //         }],
        //    }
        }
    },
    components: {
        appLeadList,
        blankCard
    },
    methods: {
        nameConcatination(fName, mName, lName) {
            return fName +' '+ lName;
        },
        joinAddress(line_01, line_02, line_03, pinCode)  {
            return line_01 + ' '+ line_02 + ' ' + line_03 + '-' + pinCode;
        }
    }
}
</script>


