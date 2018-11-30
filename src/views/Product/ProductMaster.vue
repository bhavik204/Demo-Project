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
            this.$store.commit('SET_PAGE_TITLE', 'Product');
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
                if(this.currentRoute == '/productmaster/protection')
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

                if(this.currentRoute == '/productmaster/saving'  )
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
                if(this.currentRoute == '/productmaster/investment' )
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
                 if(this.currentRoute == '/productmaster/health')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==3)
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

                if(this.currentRoute == '/productmaster/retirement'  )
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 4)
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
                if(this.currentRoute == '/productmaster/child' )
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 5)
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
                 if(this.currentRoute == '/productmaster/solution' )
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 6)
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
                        icon: 'https://www.materialui.co/materialIcons/hardware/security_white_192x192.png',
                        Title: 'Protection',
                        counter: 55,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/hardware/security_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/hardware/security_white_192x192.png',
                        link: '/productmaster/protection'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/action/account_balance_wallet_black_192x192.png',
                        Title: 'Saving',
                        counter: 2,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/action/account_balance_wallet_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/action/account_balance_wallet_white_192x192.png',
                        link: '/productmaster/saving'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/editor/attach_money_black_192x192.png',
                        Title: 'Investment',
                        counter: 34,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/editor/attach_money_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/editor/attach_money_white_192x192.png',
                        link: '/productmaster/investment'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/action/favorite_black_192x192.png',
                        Title: 'Health',
                        counter: 23,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/action/favorite_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/action/favorite_white_192x192.png',
                        link: '/productmaster/health'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/notification/airline_seat_recline_normal_black_192x192.png',
                        Title: 'Retirement',
                        counter: 25,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/notification/airline_seat_recline_normal_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/notification/airline_seat_recline_normal_white_192x192.png',
                        link: '/productmaster/retirement'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/places/child_friendly_black_192x192.png',
                        Title: 'Child',
                        counter: 10,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/places/child_friendly_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/places/child_friendly_white_192x192.png',
                        link: '/productmaster/child'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/action/group_work_black_192x192.png',
                        Title: 'Solution For Group',
                        counter: 28,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/action/group_work_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/action/group_work_white_192x192.png',
                        link: '/productmaster/solution'
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