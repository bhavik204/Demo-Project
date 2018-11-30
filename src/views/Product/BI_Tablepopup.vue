<template>
    <div>
        <div class="stus-dailog-flx-row  ">
            <!-- class="drp-container-tx-width " div class row flex if u want -->
            <div class="drp-container-tx-width">
                <div class="sts-lbl-margin">
                    <text class="sts-desig-lbl ">Select Designation</text>
                </div>
                <select class="status-drop-down cursor-pointer-globle" v-model="selectdesignation" v-if="platform === 'Web'">
                    <option v-for="(post, li) in designation" :key="li">{{post}}</option>
                </select>
                <div  class="sts-desig-lbl " v-if="platform !== 'Web'">
                    <apk-drop-down  class="apk-margin" :option-list="designation"></apk-drop-down>
                </div>
            </div>
            <div class="drp-container-tx-width">
                <div class="sts-lbl-margin">
                    <text class="sts-desig-lbl ">Select Team Member</text>
                </div>

                <select class="status-drop-down cursor-pointer-globle" v-model="selecteam" v-if="platform === 'Web'">
                    <option v-for="(show, li) in team" :key="li">{{show}}</option>
                </select>
                <div class="sts-desig-lbl" v-if="platform !== 'Web'">
                    <apk-drop-down  class="apk-margin" :option-list="team"></apk-drop-down>
                </div>
            </div>

        </div>

        <!-- <div class="exist-form-table-row exist-form-mobile-row stus-dailog-padding" style="flex-direction:column;">
        <div class="stus-table-row stus-heading-padding">
                <div class="tb-td-pad" style="flex:1"  >  
                    <text class="stus-form-tbl-heading">Designation</text>
                    </div>
                <div class="tb-td-pad" style="flex:1" >  
                    <text class="stus-form-tbl-heading">Team Member</text>
                    </div>
                
                
            </div>
                <div class="stus-table-body" v-for="(tbl,li) in tabledata" :key="li">
                <div  class="tb-td-pad" style="flex:1">  <text class="stus-form-lbl-font-size">{{tbl.Designation}}</text></div>
                <! <div class="stus-table-body" v-for="(tbl,li) in tabledata" :key="li"> -->
        <!-- <div  class="tb-td-pad" style="flex:1">  <text class="stus-form-lbl-font-size">{{tbl.TeamMember}}</text></div>
                
                
    </div>                       
    </div> -->




        <!-- These buttons is used for APK only becouse -->
        <!-- <div class="stus-dailog-flx-row stus-btn-margin" v-if="platform === 'Web'">
            <div class="drp-container-tx-width">
                <vx-secondary-button btn-name="Back" btn-icon=""></vx-secondary-button>
            </div>
            <div class="drp-container-tx-width">
                <vx-primary-button btn-name="Save" btn-icon=""></vx-primary-button>
            </div>
        </div> -->
    </div>
</template>




<script>
    import popup from '../Calendar/Todo-pop-up.vue'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue';
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';
    import apkDropDown from '../CFR/cfr-dropDown-apk.vue'

    const designation = ["Sales Manager", "Director", "Opretion Manager", "CEO"];
    const team = ["Sudeep", "Usama", "Himanshu", "Easwar"];

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {

        components: {
            popup,
            vxPrimaryButton,
            vxSecondaryButton,
            apkDropDown
        },
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },

        data() {
            return {
                selectdesignation: '',
                selecteam: '',
                team,
                designation,
                platform: invalid,

                tabledata: [{
                        Designation: 'CEO',
                        TeamMember: 'Easwar',
                    }, {
                        Designation: 'Director',
                        TeamMember: 'Himanshu',
                    }, {
                        Designation: 'Opretion Manager',
                        TeamMember: 'Sudeep',
                    }, {
                        Designation: 'Sales Manager',
                        TeamMember: 'Usama',
                    }




                ],

            }
        }


    }
</script>

<style>
    .sts-desig-lbl {
        font-size: 24px;
    }

    .apk-margin{
        margin-bottom: 20px;
    }
    
    .stus-dailog-flx-row {
        flex-direction: column;
    }
    
    .status-drop-down {
        border-width: 1px;
        border-style: solid;
        border-top-color: #ffffff;
        border-left-color: #ffffff;
        border-right-color: #ffffff;
        border-bottom-color: #d8d8d8;
        padding: 5px;
        outline: none;
    }
    
    .sts-lbl-margin {
        /* margin-top: 5px; */
        margin-bottom: 10px;
    }
    
    .vx-btn {
        padding-right: 25px;
    }
    
    .stus-btn-margin {
        justify-content: space-evenly;
        width: 30%;
        margin: auto;
    }
    /* .stus-table-row{
         flex-direction:row;
         flex-wrap: nowrap;
          background-color:#ebebeb
     } 

     .stus-table-body{
         flex-direction:row;
         flex:1;
         flex-wrap: nowrap;
         overflow: auto;
}
 
 .stus-form-tbl-heading{
      padding-left: 10px;
     font-family: robotobold;
      font-size: 14px;
}

  .exist-form-mobile-row{
         padding-top: 30px;
     }

     .stus-dailog-padding
     {
         padding: 20px;
     }

     .stus-form-lbl-font-size
     {
         font-size: 14px;
     }

     .stus-heading-padding
     {
         padding: 10px;
     }

     /* This class padding is changable */
    /* .tb-td-pad {
         padding: 10px;
     } */
    
    @media only screen and (min-width: 320px) {
        .sts-desig-lbl {
            font-size: 14px;
        }
        .drp-container-tx-width {
            flex: 1;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 15px;
            margin-top: 20px;
        }
        .stuts-dialog-btn-width {
            width: 48%;
        }
        .stus-dailog-flx-row {
            flex-direction: column;
        }
        .tb-td-pad {
            padding: 5px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .stuts-dialog-btn-width {
            width: 30%;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .stus-dailog-flx-row {
            flex-direction: row;
        }
        .drp-container-tx-width {
            flex: 1;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 0;
        }
        .stuts-dialog-btn-width {
            width: 20%;
        }
    }
</style>