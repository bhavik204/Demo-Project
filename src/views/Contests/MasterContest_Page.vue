<template>
        <div class="user master-page-wrapper">
            <!-- <inner-header headeTitle="Contests"></inner-header> -->
            <!-- <main-tab  :tabs="tabs"></main-tab> -->
       
            <application-tab  :tabs="tabs" :counter="counter">{{getActiveStatus}}</application-tab>

 
            <scroller  class="scroller-test-master">
                
                <router-view ></router-view>
<!--                 <router-view name="Active"/ ></router-view>
                <router-view name="Completed" /></router-view> 
                <router-view name="Overall" /></router-view>
 -->              
            </scroller>
        </div>
</template>

<script>
    import mainTab from '../../components/Tabs/MainTab.vue'
    // import contestsTab from './ContestTab.vue'
    import applicationTab from '../../components/Tabs/HeaderTab.vue'
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Contest');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            mainTab,
            applicationTab
        },
          computed:{
          getActiveStatus(){
                var me = this
            
                this.currentRoute = this.$store.state.route.fullPath
            

             
                if(this.currentRoute == '/mastercontests/contestmas')
                  {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==0)
                   {
                         this.tabs[ind].bgColor= '#3d3bee',
                          this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                    me.$router.push(this.tabs[ind].link)
                   }
                   else{
                         this.tabs[ind].bgColor= '#fff',
                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'  
                   }
                  }
                  }


                  if(this.currentRoute == '/mastercontests/active'  )
                  {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 1)
                   {
                         this.tabs[ind].bgColor= '#3d3bee',
                          this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                    me.$router.push(this.tabs[ind].link)
                   }
                   else{
                         this.tabs[ind].bgColor= '#fff',
                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'  
                   }
                  }
                  }
                    if(this.currentRoute == '/mastercontests/completed')
                    {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 2)
                   {
                         this.tabs[ind].bgColor= '#3d3bee',
                          this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                    me.$router.push(this.tabs[ind].link)
                   }
                   else{
                         this.tabs[ind].bgColor= '#fff',
                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'  
                   }
                  }
                  }
                   if(this.currentRoute == '/mastercontests/overall')
                    {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 3)
                   {
                         this.tabs[ind].bgColor= '#3d3bee',
                          this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                                this.tabs[ind].color = '#fff',
                                    me.$router.push(this.tabs[ind].link)
                   }
                   else{
                         this.tabs[ind].bgColor= '#fff',
                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
                                this.tabs[ind].color = '#000000'  
                   }
                  }
                  }

            } 
          }  ,
        data() {
            return {
                counter:false,
                tabs:[
                    {
                        bgColor: '#3d3bee',
                        color: '#fff',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                        Title: 'All',
                        counter: 55,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/navigation/apps_black_192x192.png',
                        whiteIcon:'https://www.materialui.co/materialIcons/navigation/apps_white_192x192.png',
                        link:'/mastercontests/contestmas'
                      
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/maps/directions_run_black_192x192.png',
                        Title: 'Active',
                        counter: 2,
                        active: false,
                        blackIcon:'https://www.materialui.co/materialIcons/maps/directions_run_black_192x192.png',
                        whiteIcon:'https://www.materialui.co/materialIcons/maps/directions_run_white_192x192.png',
                        link:'/mastercontests/active'
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon:'https://www.materialui.co/materialIcons/av/playlist_add_check_black_192x192.png',
                        Title: 'Completed',
                        counter: 34,
                        active: false,
                        blackIcon:'https://www.materialui.co/materialIcons/av/playlist_add_check_black_192x192.png',
                        whiteIcon:'https://www.materialui.co/materialIcons/av/playlist_add_check_white_192x192.png',
                        link:'/mastercontests/completed'
                        
                    },
                    {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc+'grade_black_192x192.png',
                        Title: 'My Overall Ranking',
                        counter: 23,
                        active: false,
                        blackIcon: iconSrc+'grade_black_192x192.png',
                        whiteIcon: iconSrc+'grade_white_192x192.png',
                        link:'/mastercontests/overall'
                    },
                
                

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
            }
        }


    }
</script>

<style>
 .scroller-test-master{
    /*flex-direction: row;*/
 }
</style>