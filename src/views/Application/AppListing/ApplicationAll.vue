<template>
    <div>

        <div class="nx-flex-direction nx-flex-flow-wrap tab-wrap-width" style="padding-top:10px;">
            <div class="card-width-app"  v-for="(listData, index) in obj" :key="index">
                <app-application-compo :page-name="appListData.pageName" :application-data="listData"></app-application-compo>
            </div> 
            <!-- <div v-for="(data,index) in formData" :key="index">
                <text class="text">Data is{{data.AdvisorName}}</text>
            </div> -->
             <div v-if="allApplications == false" class="card-width-app">
                <blank-card :message="message"></blank-card>
            </div>
            <!-- Dont Delete this line -->
            <div class="card-width-app">
            </div> 
            
        </div>

    </div>

</template>


<style>
    .list-fiter{
        align-items: flex-end;
    }
    .cal-icn {
  height: 40px;
  width: 40px;
  margin-top: 5px;
}
    /* .lead-wrapper  {
        /*background-color: #d1cfcf;*/
    /* } */ 


    .sales-drive-header {
        background-color: #3b371e;             
        color:#fff;
        height:80px;
    }


    .nx-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }

    .card-width-app {
        width: 720px;
        margin-bottom: 10px;
    }
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */
        .tab-wrap-width {
            width: 100%
        }

        .card-width-app {
            width: 95%;
            margin-bottom: 0;
        }
        /* .hide-filter{
            display:none;
        }
        .hide-filter-mobile{
            display: inline-block;
        } */

    }
    @media (min-width: 768px) {
        .nx-flex-direction {
            flex-direction: column;
        }

        .card-width-app {
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

        .nx-flex-direction {
            flex-direction: row;

        }
        .card-width-app {
            width: 48%;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        /* .hide-filter{
            display:inline-block
        }
        .hide-filter-mobile{
            display: none;
        } */
    }
</style>

<script>

import appApplicationCompo from '../../../components/ApplictionComponent.vue'
import blankCard from '../../../components/BlankCard/blankcard'
const modal = weex.requireModule('modal');
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
    data() {
        return {
             obj:[],
              allApplications:true,
              message:'No Records Found',
                 formDat:{},
                 formData:[],
            appListData: {
                pageName: 'All',
                data: [

                    {   
                        name:'Shoaib Khan',
                        appno:'0012TRA123',
                        plantype:'Endowment Plan (MGB)',
                        lbl_01:'Regular',   //Premium Type'
                        lbl_02:'8 Years',   //Policy Term
                        lbl_03:'02/10/2018',  //Draft date
                        lbl_04:'₹ 17,000',     //Premium Amount
                        lbl_05:'',      //Reason
                        lbl_06:'Resume', //Track Proposal
                        status:'Payment Pending'
                    },  {

                        name:'Salman Khan',
                        appno:'0012TRA143',
                        plantype:'Increasing Income (MGB)',
                        lbl_01:'Regular',   //Premium Type'
                        lbl_02:'9 Years',   //Policy Term
                        lbl_03:'05/11/2014',  //Draft date
                        lbl_04:'₹ 15,000',     //Premium Amount
                        lbl_05:'',      //Reason
                        lbl_06:'Resume', //Track Proposal
                        status:'Proposal Incomplete'
                    },
                    {   
                        name:'Himanshu Gupta',
                        appno:'0012TRA145',
                        plantype:'Increasing Income (MGB)',
                        lbl_01:'Regular',   //Premium Type'
                        lbl_02:'11 Years',   //Policy Term
                        lbl_03:'03/9/2018',  //Draft date
                        lbl_04:'₹ 14,000',     //Premium Amount
                        lbl_05:'',      //Reason
                        lbl_06:'Resume', //Track Proposal
                        status:'Documents Pending'
                    },
                                       {
                        name:'Pankaj Thakre',
                        appno:'0012TRA1243',
                        plantype:'Increasing Income (MGB)',
                        lbl_01:'Regular',   //premimum amount label
                        lbl_02:'₹ 17,000',   //Premium Amount '
                        lbl_03:'10 Years',  //Policy Term
                        lbl_04:'02/9/2018',      //Login Date
                        lbl_05:'',      //Reason
                        lbl_06:'Track Proposal', //Track Proposal
                        status:'Pending Issuance'
                    },  {
                        name:'Ashraf Khan',
                        appno:'0012TRA1273',
                        plantype:'Increasing Income (MGB)',
                        lbl_01:'Regular',   //premimum amount label
                        lbl_02:'₹ 18,000',   //Premium Amount '
                        lbl_03:'12 Years',  //Policy Term
                        lbl_04:'01/1/2019',      //Login Date
                        lbl_05:'',      //Reason
                        lbl_06:'Track Proposal', //Track Proposal
                        status:'Pending Issuance'
                    },
                    {
                        name:'Shruti Shrivastava',
                        appno:'0012TRA1243',
                        plantype:'Increasing Income (MGB)',
                        lbl_01:'Regular',   //'Client Id'
                        lbl_02:'11 Years',  // 'Premium Amount'
                        lbl_03:'03/9/2018',  //'Premium Type'
                        lbl_04:'₹ 14,000',     //'Policy Term'
                        lbl_05:'24/08/2018',      //'Issuence Date'
                        lbl_06:'Track Proposal', //Track Proposal
                        status:'Issued'
                    },{
                        name:'Rahul Kadam',
                        appno:'0012TRA1276',
                        plantype:'Increasing Income (MGB)',
                        lbl_01:'Regular',   //'Client Id'
                        lbl_02:'15 Years',  // 'Premium Amount'
                        lbl_03:'05/10/2018',  //'Premium Type'
                        lbl_04:'₹ 25,000',     //'Policy Term'
                        lbl_05:'26/10/2019',      //'Issuence Date'
                        lbl_06:'Track Proposal', //Track Proposal
                        status:'Issued'
                    },
                    {
                        name:'Shruti Shrivastava',
                        appno:'0012TRA1246',
                        plantype:'Increasing Income (MGB)',
                        lbl_01:'₹ 12,004',   //premimum amount label
                        lbl_02:'₹ 7,000',   //Premium Amount Refunded'
                        lbl_03:'01/7/2018',  //Login Date
                        lbl_04:'02/9/2018',      //Refund Date
                        lbl_05:'On medical grounds,',      //Reason
                        lbl_06:'Track Proposal', //Track Proposal
                        status:'Rejected'
                    }, 
                     {
                         name:'Rohit Kadam',
                        appno:'0012TRA1247',
                        plantype:'Increasing Income (MGB)',
                       lbl_01:'₹ 14,004',   //premimum amount label
                        lbl_02:'₹ 6,000',   //Premium Amount Refunded'
                        lbl_03:'02/2/2018',  //Login Date
                        lbl_04:'04/6/2018',      //Refund Date
                        lbl_05:'On medical grounds,',      //Reason
                        lbl_06:'Track Proposal', //Track Proposal
                        status:'Rejected'        
                    },
            


                     

                    
                ]
            }
        }
    },
    created() {

            var me = this;
          console.log(this.$store.getters.getEditStatus)
           this._id= me.$store.state.agentDetails._id
           this.status = 'all'
                 this.GET('getAgentproposal/'+ this._id +'?proposalStatus=all', response => {
                      this.obj = (response.data.errMsg[0])
                      var count =(response.data.errMsg[1])
                      var counter = count[0].Proposalcount
                      console.log("Proposal Count is",counter)

                   console.log(this.obj)
                     var errcodeAPI= -1
          if(response.data.errCode == errcodeAPI){
                 this.allApplications = true; 
                        modal.toast({
                            message: 'Successfully Tracked Details',
                            duration: 1
                        })
                        // me.$router.push('/master/testapp')
          }
          else{
                 this.allApplications = false; 
                modal.toast({
                    message: 'Please enter Unique Mobile No'
                             ,
                    duration: 2
                })

          }
            })
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },

    components: {
        appApplicationCompo,
        blankCard
    }
}
</script>


