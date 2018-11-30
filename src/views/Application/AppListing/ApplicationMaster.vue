<template>
    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        <application-tab :tabs="tabs">{{ getActiveStatus}}</application-tab>
        <filter-view class="hide-filter-application-master"></filter-view>
        
            <!-- <router-view></router-view> -->
            <scroller>
                <router-view></router-view>
            </scroller>
       
        <app-filter :rlink="rlink" v-if="platform !== 'Web'"></app-filter>
        <app-filter :rlink="rlink" class="hide-filter-application-master-mobile" v-if="platform === 'Web'"></app-filter>
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
    .lead-wrapper  {
        /*background-color: #d1cfcf;*/
    }


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
        .hide-filter-application-master{
            display:none;
        }
        .hide-filter-application-master-mobile{
            display: inline-block;
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
        .hide-filter-application-master{
            display:inline-block
        }
        .hide-filter-application-master-mobile{
            display: none;
        }
    }
</style>

<script>
import applicationTab from '../../../components/Tabs/HeaderTab.vue'
import appFilter from '../../../components/SortFilter/SF_Footer.vue'
import filterView from '../../../components/SortFilter/FilterView.vue'


const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
     computed: {
            getActiveStatus() {
                var me = this
                // this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                // this.i = (this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if (this.currentRoute == '/app_list_master/app_all') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 0) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }


                if (this.currentRoute == '/app_list_master/app_draft') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 1) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }

                if (this.currentRoute == '/app_list_master/app_login') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 2) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }
                if (this.currentRoute == '/app_list_master/app_issue') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 3) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }

                if (this.currentRoute == '/app_list_master/app_reject') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 4) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }
            }
            },
    data() {
        return {
            allCount:'',
            headerName: 'Applications',
            filter :false,
            rlink:'/appview',
            tabs:[
                    {
                    
              
                    bgColor: '#3d3bee',
                    color: '#fff',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                    Title: 'All',
                    counter: 9,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/navigation/apps_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                    link:'/app_list_master/app_all'
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon:iconSrc+ 'description_black_192x192.png',
                        Title: 'Draft Proposal',
                        counter: 3,
                        active: false,
                        blackIcon:iconSrc+ 'description_black_192x192.png',
                        whiteIcon: iconSrc+'description_white_192x192.png',
                        link:'/app_list_master/app_draft'
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc+'input_black_192x192.png',
                        Title: 'Logins',
                        counter: 2,
                        active: false,
                        blackIcon: iconSrc+'input_black_192x192.png',
                        whiteIcon: iconSrc+'input_white_192x192.png',
                        link:'/app_list_master/app_login'
                    },
                    {
                   
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc+'class_black_192x192.png',
                        Title: 'Issued',
                        counter: 2,
                        active: false,
                        blackIcon: iconSrc+'class_black_192x192.png',
                        whiteIcon: iconSrc+'class_white_192x192.png',
                        link:'/app_list_master/app_issue'
                    },
                    {
                  
                        bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    Title: 'Rejected',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png',
                    link:'/app_list_master/app_reject'
                    },
                
                

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
        }
    },
    methods:{
        filterMethod(){
            console.log("Filter Toggle")
            this.filter = !this.filter
        }
    },
    created() {
        this.$store.commit('SET_PAGE_TITLE', 'Applications');

             var me = this;
          console.log(this.$store.getters.getEditStatus)
           this._id= me.$store.state.agentDetails._id
           this.status = 'all'
                 this.GET('getAgentproposal/'+ this._id +'?proposalStatus=all', response => {
                      this.obj = (response.data.errMsg[0])
                      var count =(response.data.errMsg[1])
                      var counter = count[0].Proposalcount
                      console.log("Proposal Count is",counter)
                      for(var i=0;i<counter.length;i++){
                          var propcount = counter[i]._id
                          if(propcount == 'issued')
                          {
                              var count1 = counter[i].count
                          }
                           if(propcount == 'rejected')
                          {
                              var count2 = counter[i].count
                          }
                           if(propcount == 'draft')
                          {
                              var count3 = counter[i].count
                          }
                           if(propcount == 'login')
                          {
                              var count4 = counter[i].count
                          }
                      this.allCount = count1 + count2+count3+count4
                      console.log("All count is",this.allCount)
                      }
 this.tabs[0].counter = this.allCount,
  this.tabs[1].counter = count3,
   this.tabs[2].counter = count4,
    this.tabs[3].counter = count1,
    this.tabs[4].counter = count2
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
        applicationTab,
        filterView,
        appFilter
    }
}
</script>


