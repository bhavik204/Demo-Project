<template>
    <div class="container-resource">   
        <div>            
                <main-tab  :tabs="tabs">{{getMainStatus}}</main-tab>
                <side-tab :sTabs="sTabs">{{getActiveStatus}}</side-tab>
        </div>
                   <div style="flex:1">
                    <scroller >
                        <router-view></router-view>
                    </scroller>
                </div>  
    </div>
</template>

<script>
    import mainTab from '../../../components/Tabs/MainTab.vue'
    import sideTab from '../../../components/Tabs/SideTab.vue'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            mainTab,
            sideTab
        },
         computed: {
            getActiveStatus(){
                var me = this
                this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i=(this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if(this.currentRoute == '/masterpresales/resourcedetails/customer')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==0)
                        {
                            this.sTabs[ind].actndve = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].fontWeight = 'bold';
                        }
                        else{
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth= '';
                            this.sTabs[ind].borderBottomColor= '';  
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }

                if(this.currentRoute == '/masterpresales/resourcedetails/sales')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==1)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].fontWeight = 'bold';
                        }
                        else{
                            this.sTabs[ind].active = false;
                            this.sTabs[ind].backgroundColor = '';
                            this.sTabs[ind].borderBottomWidth= '';
                            this.sTabs[ind].borderBottomColor= '' 
                            this.sTabs[ind].fontWeight = '';
                        }
                    }
                }
               

            },
            getMainStatus(){
                var me = this
                this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i=(this.$store.getters.getIndex)
                console.log(this.status)
                console.log(this.i)
                if(this.currentRoute == '/masterpresales/resourcedetails/customer')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==0)
                        {
                            this.tabs[ind].actndve = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth= '5px';
                            this.tabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.tabs[ind].link);
                        }
                        else{
                            this.tabs[ind].active = false;
                            this.tabs[ind].backgroundColor = '';
                            this.tabs[ind].borderBottomWidth= '';
                            this.tabs[ind].borderBottomColor= '';  
                        }
                    }
                }
                if(this.currentRoute == '/masterpresales/resourcedetails/sales')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==1)
                        {
                            this.tabs[ind].active = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth= '5px';
                            this.tabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.tabs[ind].link);
                        }
                        else{
                            this.tabs[ind].active = false;
                            this.tabs[ind].backgroundColor = '';
                            this.tabs[ind].borderBottomWidth= '';
                            this.tabs[ind].borderBottomColor= '' 
                        }
                    }
                }
                
            }
        },
        data() {
            return {
                    sTabs: [{
                        backgroundColor: '',
                        Title: 'Customer',
                        link: '/masterpresales/resourcedetails/customer'
                    }, {
                        Title: 'Sales',
                        backgroundColor: '',
                        link: '/masterpresales/resourcedetails/sales'
                    }
                ],
                tabs: [{
                        Title: 'Customer',
                        inactive: true,
                        active: false,
                        icon: '../../../web/assets/Customer_black.png',
                        padding: '30px',
                        backgroundColor: '#fff',
                        borderBottomwidth: '5px',
                        borderBottomcolor: '#3b371e',
                        link: '/masterpresales/resourcedetails/customer'

                    }, {
                        Title: 'Sales',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',
                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/resourcedetails/sales'
                    }
                ]
            }
        }


    }
</script>

<style>
 .container-resource{
        flex-direction: column;
    }
    @media only screen and (min-width: 320px) {
        .container-resource{
            flex-direction: column;
        }
    }
    @media only screen and (min-width: 768px) {
        .container-resource{
            flex-direction: row;
        }
    }
</style>