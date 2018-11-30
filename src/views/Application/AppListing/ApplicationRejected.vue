<template>
    <div>

        <div class="nx-flex-direction nx-flex-flow-wrap tab-wrap-width" style="padding-top:10px;">
            <div class="card-width-app" v-for="(listData, index) in obj" :key="index">
                <app-application-compo :page-name="appListData.pageName" :application-data="listData"></app-application-compo>
            </div> 
              <div v-if="draftRejected == false" class="card-width-app">
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
     */


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
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
    data() {
        return {
             obj:[],
             draftRejected:true,
               message:'No Records Found',
                 formDat:{},
                 formData:[],
            appListData: {
                pageName: 'Rejected',
                data: [
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
          console.log(me.$store.state.agentDetails._id)
           this._id= me.$store.state.agentDetails._id
           this.status = 'rejected'
                 this.GET('getAgentproposal/'+ this._id +'?proposalStatus=rejected', response => {
                      this.obj = (response.data.errMsg)
         console.log(this.obj)
                     var errcodeAPI= -1
          if(response.data.errCode == errcodeAPI){
              this.draftRejected = true
                        modal.toast({
                            message: 'Successfully Tracked Details',
                            duration: 1
                        })
                        // me.$router.push('/master/testapp')
          }
          else{
                 this.draftRejected = false
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


