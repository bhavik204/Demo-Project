<template>
    <div>
        <div class="nx-flex-direction-ld-mgmt nx-flex-flow-wrap-ld-mgmt " style="padding-top:10px">
            <div class="card-width-ld-mgmt" v-for="(lead ,listIndex) in todayLeads.leadsData" :key="listIndex">
                <app-lead-list :lead-data="lead"></app-lead-list>
            </div> 

             <div v-if="todayLeadData == false" class="card-width-app">
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
        
        this.GET('getLead/'+userId+'?leadfilter=open', res => {
            if( !res.ok ){
                self.getJsonpResult = "request failed";
                this.todayLeadData = false
                } else{
                     if(res.data.errCode == -1)
                    {
                        this.todayLeadData = true
                    }
                    else{
                        this.todayLeadData = false
                    }
                    this.todayLeadData =true
                    console.log('get: ', res);
                    self.readDataFromServer =  res.data.errMsg;
                    // console.log('Data Reading from server');
                    console.log(self.readDataFromServer);

                    for(let i = 0; i < self.readDataFromServer.length; i++) {
                        this.dataStructure.personName = this.nameConcatination(self.readDataFromServer[i].firstName, 
                        self.readDataFromServer[i].middleName, self.readDataFromServer[i].lastName);
                        // this.dataStructure.id = 'L' + self.readDataFromServer[i]._id.slice(16, 25);
                        this.dataStructure.id = self.readDataFromServer[i]._id;
                        // console.log(this.dataStructure.id + '====' + this.dataStructure.id.length);
                        this.dataStructure.mobileNo = self.readDataFromServer[i].primaryMobile;
                        this.dataStructure.address = this.joinAddress(self.readDataFromServer[i].address[0].line1,
                        self.readDataFromServer[i].address[0].line2, self.readDataFromServer[i].address[0].line3,
                        self.readDataFromServer[i].pincode );
                        // Data push on data 
                        // this.todayLeads.leadsData[i] = this.dataStructure;
                        this.todayLeads.leadsData.push(this.dataStructure);
                        // console.log(this.todayLeads.leadsData);
                        
                        // this.dataStructure.id  = '';

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
                            status: 'Open'
                        }
                    }
                }
            });
    },

    data() {
        return {
                message:'No Records Found',
              todayLeadData :true,
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
                status: 'Open'
            },
            todayLeads: {
               leadsType: 'for today',
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


