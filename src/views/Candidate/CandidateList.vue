<template>

    <div class="master-page-wrapper" style="background-color: #f7f7f7;">
        
        <application-tab :tabs="tabs">{{getActiveStatus}}</application-tab>
        
        <filter-view  class="candi-list-hide-filter"></filter-view>
            <router-view></router-view>
         <app-filter v-if="platform !== 'Web'"></app-filter>
        <app-filter class="candi-list-hide-filter-mobile" v-if="platform === 'Web'"></app-filter>
        <!-- Dont Delete this line -->
        <div class="candi-list-card-width">
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
    /* .lead-wrapper  {
        background-color: #d1cfcf;
    } */
    
    /* .sales-drive-header {
        background-color: #3b371e;
        color: #fff;
        height: 80px;
    }
     */
    .candi-list-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .candi-list-flex-flow-wrap {
        flex-flow: wrap;
    }
    
    .candi-list-card-width {
        width: 720px;
        margin-bottom: 10px;
    }
    
    @media (min-width: 320px) {
        /* .lead-wrapper  {
            padding: 10px;
        } */
        .candi-list-card-width {
            width: 95%;
            margin-bottom: 0;
        }
        .candi-list-hide-filter {
            display: none;
        }
        .candi-list-hide-filter-mobile {
            display: inline-block;
        }
    }
    
    @media (min-width: 768px) {
        .candi-list-flex-direction {
            flex-direction: column;
        }
        .candi-list-card-width {
            width: 95%;
            margin-bottom: 10px;
        }
    }
    
    @media (min-width: 992px) {
        .candi-list-hide-filter {
            display: inline-block
        }
        .candi-list-hide-filter-mobile {
            display: none;
        }

        /* Not used now */
        /* .header-font-size {
            font-size: 16px;
            font-weight: bold;
            color:#fff;
            font-family:robotoregular;
        } */
        /* .sales-drive-header {
            background-color: #3b371e;
            color: #fff;
            height: 50px;
        } */
        .candi-list-flex-direction {
            flex-direction: row;
        }
        .candi-list-card-width {
            width: 48%;
            /* flex: 1; */
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

<script>
import CandidateApp from '../../components/CandidateApp.vue'
import applicationTab from '../../components/Tabs/HeaderTab.vue'

import appFilter from '../../components/SortFilter/SF_Footer.vue'
import filterView from '../../components/SortFilter/FilterView.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

const iconSrc = 'https://www.materialui.co/materialIcons/action/';


export default {
    created() {
        this.$store.commit('SET_PAGE_TITLE' , 'Applications');
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },

    computed: {
            getActiveStatus() {
                var me = this
                // this.status = (this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                // this.i = (this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if (this.currentRoute == '/candidatelist/candiall') {
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


                if (this.currentRoute == '/candidatelist/candiincomplete') {
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

                if (this.currentRoute == '/candidatelist/candisubmit') {
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
                if (this.currentRoute == '/candidatelist/canditraining') {
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

                if (this.currentRoute == '/candidatelist/candipassed') {
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
                 if (this.currentRoute == '/candidatelist/candifail') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 5) {
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
                 if (this.currentRoute == '/candidatelist/candireexam') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 6) {
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
                if (this.currentRoute == '/candidatelist/candireexam') {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if (ind == 7) {
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
            platform: invalid,
            headerName: 'Services: My Requests',
            tabs:[
                {
                    bgColor: '#3d3bee',
                    color: '#fff',
                    shade: '',
                    icon: iconSrc+'supervisor_account_white_192x192.png',
                    Title: 'All',
                    counter: 15,
                    active: false,
                    blackIcon:iconSrc+ 'supervisor_account_black_192x192.png',
                    whiteIcon:iconSrc+ 'supervisor_account_white_192x192.png',
                    link:'/candidatelist/candiall'
                        
                },
                {
                    
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon:'https://www.materialui.co/materialIcons/social/person_black_216x216.png',
                    Title:'Incomplete',
                     counter: 2,
                    active: false,
                    blackIcon:'https://www.materialui.co/materialIcons/social/person_black_216x216.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/person_white_216x216.png',
                    link:'/candidatelist/candiincomplete'
                },
                {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: ' Submitted',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:'/candidatelist/candisubmit'
                        
                },
               
                 {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: 'Training',
                    counter: 3,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:'/candidatelist/canditraining'
                        
                },
                 {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: ' Passed',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:'/candidatelist/candipassed'
                        
                },
                 {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: 'Failed',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:'/candidatelist/candifail'
                        
                },
                 {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: 'Re-exam',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:'/candidatelist/candireexam'
                        
                },
                 {
                      
                    bgColor: '#FFF',
                    color: '#000000',
                    shade: '',
                    icon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    Title: 'Licensed ',
                    counter: 2,
                    active: false,
                    blackIcon: 'https://www.materialui.co/materialIcons/social/group_black_192x192.png',
                    whiteIcon: 'https://www.materialui.co/materialIcons/social/group_white_192x192.png',
                    link:'/candidatelist/candilicense'
                        
                }

                ],

              
        }
    },

    components: {
        CandidateApp,
        applicationTab,
        appFilter,
        filterView
    }
}
</script>