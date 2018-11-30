<template>
        <div class="user master-page-wrapper">
            <!-- <inner-header headeTitle="Contests"></inner-header> -->
            <!-- <contests-tab></contests-tab> -->
            <!-- <main-tab  :tabs="tabs"></main-tab> -->
            <application-tab  :tabs="tabs" :counter="counter">{{getActiveStatus}}</application-tab>
            
            <scroller class="scroller-test-master">
                <router-view ></router-view>
                <!-- <router-view name="MyClubs"/ ></router-view> -->
               
              
            </scroller>
        </div>
</template>

<script>
    // import contestsTab from './ContestTab.vue'
    // import mainTab from '../../components/Tabs/MainTab.vue'
    import applicationTab from '../../components/Tabs/HeaderTab.vue'
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Club');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            // mainTab,
            applicationTab
            // contestsTab
        },
         computed:{
          getActiveStatus(){
                var me = this
            
                this.currentRoute = this.$store.state.route.fullPath
            

             
                if(this.currentRoute == '/clubsmaster/allclubs')
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


                  if(this.currentRoute == '/clubsmaster/myclubs'  )
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
                   

            } 
          }  ,
        data() {
            return {
                counter:false,
                tabs: [
                    {

                        bgColor: '#3d3bee',
                        color: '#FFF',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/device/dvr_white_192x192.png',
                        Title: 'All Clubs',
                        counter: 55,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/device/dvr_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/device/dvr_white_192x192.png',
                        link:'/clubsmaster/allclubs'
                    },
                     {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/action/flip_to_front_black_192x192.png',
                        Title: 'My Clubs',
                        counter: 2,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/action/flip_to_front_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/action/flip_to_front_white_192x192.png',
                        link:'/clubsmaster/myclubs'
                    }


                ]
            }
        }


    }
</script>

<style>

</style>