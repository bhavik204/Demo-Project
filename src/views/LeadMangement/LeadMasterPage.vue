<template>
    <div class="master-page-wrapper " style="background-color: #f7f7f7;">
        <application-tab :tabs="tabs">{{getActiveStatus}}</application-tab>
        <!-- <filter-view class="hide-filter" ></filter-view> -->

        <router-view></router-view>

        <!-- <app-filter v-if="platform !== 'Web'"></app-filter>
        <app-filter class="hide-filter-mobile" v-if="platform === 'Web'"></app-filter> -->
    </div>
  
</template>

<script>

import applicationTab from '../../components/Tabs/HeaderTab.vue'
import appFilter from '../../components/SortFilter/SF_Footer.vue'
import filterView from '../../components/SortFilter/FilterView.vue'

// const animation = weex.requireModule('animation')
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

const iconSrc = 'https://www.materialui.co/materialIcons/action/';

export default {
    created() {
          let self = this;
        
        let userId = self.$store.state.agentDetails._id

        this.GET('getLead/'+userId+'?leadfilter=open', res => {
            if( !res.ok ){
                self.getJsonpResult = "request failed";
                } else{
                    // console.log('get: ' ,res);
                    self.readDataFromServer =  res.data.errMsg;
                    // let lead_count =  res.data.errMsg[15].leadcount[0].count;
                    // let lead_count2 =  res.data.errMsg.leadcount;
                    // console.log(lead_count , 'lead_count');
                    // console.log(lead_count2 , 'lead_count2');

                    /**
                     * This line of code is used to, find how many entries are "OPEN" 
                     */

                    if (res.data.errCode === 841) {
                        self.tabs[2].counter = 0;
                    } else {
                        let openLeads;
                        for (let c = 0 ; c < self.readDataFromServer.length; c++) {
                            if ('leadcount' in self.readDataFromServer[c]) {
                                openLeads = self.readDataFromServer[c].leadcount;
                                self.tabs[2].counter = openLeads[0].count
                            }

                            if ('leadconverted' in self.readDataFromServer[c]) {
                                let convertLead =  self.readDataFromServer[c].leadconverted;
                                // console.log('Converted Leads' ,convertLead);
                                self.tabs[3].counter = convertLead[0].count
                            }
                        }
                    }
                }
        })
        this.$store.commit('SET_PAGE_TITLE' , 'Activity Management');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    components: {
        applicationTab,
        appFilter,
        filterView
    },

     computed: {
            getActiveStatus() {
                var me = this
                // this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                // this.i = (this.$store.getters.getIndex)

                // console.log(this.status)
                // console.log(this.i)
                if (this.currentRoute == '/leadMaster/all_leads') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 0) {
                            this.tabs[ind].bgColor = '#3d3bee',
                                this.tabs[ind].icon = this.tabs[ind].whiteIcon
                                this.tabs[ind].color = '#fff'
                                me.$router.push(this.tabs[ind].link)
                        } else {
                            this.tabs[ind].bgColor = '#fff',
                                this.tabs[ind].icon = this.tabs[ind].blackIcon
                                this.tabs[ind].color = '#000000'
                        }
                    }
                }


                if (this.currentRoute == '/leadMaster/fortoday') {
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

                if (this.currentRoute == '/leadMaster/openleads') {

                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 2) {
                            // this.tabs[ind].counter = this.openleadCount
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
                if (this.currentRoute == '/leadMaster/convertedleads') {
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

                if (this.currentRoute == '/leadMaster/pendingproposal') {
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
            status: '',
            i: 0,

             tabs:[
                    {
                        bgColor: '#3d3bee',
                        color: '#fff',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                        Title: 'All',
                        counter: 0,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/navigation/apps_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                        link:'/leadMaster/all_leads'    
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/notification/event_available_black_192x192.png',
                        Title: 'For Today',
                        counter: 0,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/notification/event_available_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/notification/event_available_white_192x192.png',
                        link:'/leadMaster/fortoday'
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/action/lock_open_black_192x192.png',
                        Title: 'Open',
                        counter: 0,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/action/lock_open_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/action/lock_open_white_192x192.png',
                        link:'/leadMaster/openleads'
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon:'https://www.materialui.co/materialIcons/action/cached_black_192x192.png',
                        Title: 'Converted',
                        counter: 0,
                        active: false,
                        blackIcon:'https://www.materialui.co/materialIcons/action/cached_black_192x192.png',
                        whiteIcon:'https://www.materialui.co/materialIcons/action/cached_white_192x192.png',
                        link:'/leadMaster/convertedleads'
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/av/av_timer_black_192x192.png',
                        Title: 'Pending Proposal',
                        counter: 0,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/av/av_timer_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/av/av_timer_white_192x192.png',
                        link:'/leadMaster/pendingproposal'
                    },
                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
        }
        
    }

  
}
</script>

<style>

    
</style>


