<template>
    
        <div class="nx-flex-direction-advisor nx-flex-flow-wrap-advisor" style="">
            <div class="card-width-advisor" v-for="(listData, index) in advisorData.data" :key="index">
                <app-advisor-compo :advisor-list="listData"></app-advisor-compo>
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

import appAdvisorCompo from '../../components/AdvisorListComponent'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';
export default {
    data() {
        return {
            advisorData: {
                pageName: 'All',
                data: [{
                        pic: '',
                        name: 'Narayan Toodi',
                        id: 'BRSMCU055',
                        planType: 'Endowment Plan (MGB)',
                        email: 'narayan@gmail.com',
                        mobileNo: '987654321',
                        targetAchived: '20%',
                        status: 'Active'
                    }, {
                        pic: 'https://i.pinimg.com/736x/3c/60/6f/3c606f0bf031d2ba367e06d634ed4377--sugar-daddy-mature-men.jpg',
                        name: 'Abhyagni Rangaswamy',
                        id: 'BRSMCU001',
                        planType: 'Endowment Plan (MGB)',
                        email: 'abhyagni_rangaswamy12@gmail.com',
                        mobileNo: '9877654321',
                        targetAchived: '15%',
                        status: 'Active'
                    }, {
                        pic: '',
                        name: 'Ramchandra Kansal',
                        id: 'BRSMCU090',
                        planType: 'Endowment Plan (MGB)',
                        email: 'ramchandra@gmail.com',
                        mobileNo: '987654321',
                        targetAchived: '18%',
                        status: 'Active'
                    }, {
                        pic: 'https://www.thebeaverton.com/wp-content/uploads/2017/11/young-man-1281282_960_720.jpg',
                        name: 'Madhav Vanchinathan',
                        id: 'BRSMCU075',
                        planType: 'Endowment Plan (MGB)',
                        email: 'm_vanchinathan225@gmail.com',
                        mobileNo: '8987654321',
                        targetAchived: '19%',
                        status: 'Active'
                    }
                ]
            }
        }
    },

    components: {
        appAdvisorCompo
    },

    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
}
</script>


