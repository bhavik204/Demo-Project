<template>
    <div>

        <div class="nx-flex-direction nx-flex-flow-wrap tab-wrap-width" style="padding-top:10px;">
            <div v-if="draftData == true" class="card-width-app" v-for="(listData, index) in obj" :key="index">
                <app-application-compo :page-name="appListData.pageName"  :application-data="listData"></app-application-compo>
            </div> 
            <!-- If No Data Exists -->
           
            <div v-if="draftData == false" class="card-width-app">
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
              message:'No Records Found',
              draftData :true,
                 formDat:{},
                 formData:[],
            appListData: {
                pageName: 'Draft Proposals',
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
                ]
            }
        }
    },
    created() {
                var me = this;
          console.log(this.$store.getters.getEditStatus)
          console.log(me.$store.state.agentDetails._id)
           this._id= me.$store.state.agentDetails._id
           this.status = 'draft'
                 this.GET('getAgentproposal/'+ this._id +'?proposalStatus=draft', response => {
                      this.obj = (response.data.errMsg[0])
         console.log(this.obj)
         if(this.obj.length == 0){
             this.draftData = false;
         }
         console.log(this.draftData)
                     var errcodeAPI= -1
          if(response.data.errCode == errcodeAPI){
                         this.draftData = true; 
                        modal.toast({
                            message: 'Successfully Tracked Details',
                            duration: 1
                        })
                        // me.$router.push('/master/testapp')
          }
          else{
                  this.draftData = false;
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


