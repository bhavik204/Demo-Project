<template>
        <div class="user master-page-wrapper">
           
            <application-tab  :tabs="tabs" :counter="counter">{{getActiveStatus}}</application-tab>

            <scroller  class="scroller-test-master">
                <router-view ></router-view>
            </scroller>
        </div>
</template>

<script>
    // import mainTab from '../../components/Tabs/MainTab.vue'
    import applicationTab from '../../components/Tabs/HeaderTab.vue'
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
    export default {
        created() {
        this.$store.commit('SET_PAGE_TITLE', 'Birthday');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            // mainTab,
            applicationTab
        },
          computed:{
          getActiveStatus(){
                var me = this
            
                this.currentRoute = this.$store.state.route.fullPath
            

             
                if(this.currentRoute == '/birthdaymaster/birthtoday')
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


                  if(this.currentRoute == '/birthdaymaster/birthmonth'  )
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
                    if(this.currentRoute == '/birthdaymaster/birthupcome')
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

            } 
          }  ,
        data() {
            return {
                counter:false,
                 tabs: [{
                        bgColor: '#3b3dee',
                        color: '#fff',
                        shade: '',
                        icon: 'http://159.89.161.64:8081/web/assets/Cake-black.png',
                        Title: 'Today',
                        counter: 55,
                        active: false,
                        blackIcon: 'http://159.89.161.64:8081/web/assets/Cake-black.png',
                        whiteIcon: 'http://159.89.161.64:8081/web/assets/Cake-white.png',
                        link: '/birthdaymaster/birthtoday'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'http://159.89.161.64:8081/web/assets/Calendar-week-black.png',
                        Title: 'This Week',
                        counter: 2,
                        active: false,
                        blackIcon: 'http://159.89.161.64:8081/web/assets/Calendar-week-black.png',
                        whiteIcon: 'http://159.89.161.64:8081/web/assets/Calendar-week-white.png',
                        link: '/birthdaymaster/birthmonth'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'http://159.89.161.64:8081/web/assets/Calendar-month-black.png',
                        Title: 'This Month',
                        counter: 34,
                        active: false,
                        blackIcon: 'http://159.89.161.64:8081/web/assets/Calendar-month-black.png',
                        whiteIcon: 'http://159.89.161.64:8081/web/assets/Calendar-month-white.png',
                        link: '/birthdaymaster/birthupcome'
                    }

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