<template>
    <div class="container">                
           
                <main-tab  :tabs="tabs">{{getMainStatus}}</main-tab>
                <side-tab :sTabs="sTabs">{{getActiveStatus}}</side-tab>
                <router-view ></router-view>
        
    </div>

</template>

<script>
    import mainTab from '../../../components/Tabs/MainTab.vue'
    // import applicationTab from '../../Application/ApplicationTab.vue'
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
            // applicationTab
        },
        computed: {
            getActiveStatus(){
                var me = this
                this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i=(this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if(this.currentRoute == '/masterpresales/advisordetail/about')
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

                if(this.currentRoute == '/masterpresales/advisordetail/Benifits')
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
                if(this.currentRoute == '/masterpresales/advisordetail/story')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==2)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link)
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
                if(this.currentRoute == '/masterpresales/advisordetail/process')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==3)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link)
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
                if(this.currentRoute == '/masterpresales/advisordetail/about')
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
                if(this.currentRoute == '/masterpresales/advisordetail/Benifits')
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
                if(this.currentRoute == '/masterpresales/advisordetail/story')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==2)
                        {
                            this.tabs[ind].active = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth= '5px';
                            this.tabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.tabs[ind].link)
                        }
                        else{
                            this.tabs[ind].active = false;
                            this.tabs[ind].backgroundColor = '';
                            this.tabs[ind].borderBottomWidth= '';
                            this.tabs[ind].borderBottomColor= ''
                        }
                    }
                }
                if(this.currentRoute == '/masterpresales/advisordetail/process')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==3)
                        {
                            this.tabs[ind].active = true;
                            this.tabs[ind].backgroundColor = '#fff';
                            this.tabs[ind].borderBottomWidth= '5px';
                            this.tabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.tabs[ind].link)
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
                    sTabs: [
                    //     {
                    //     Title: 'Testimonials',
                    //     link: '/masterpresales/advisordetail/aptest',
                    //     backgroundColor: '',


                    // },
                     {
                        Title: 'About Us',
             
                        link: '/masterpresales/advisordetail/about',
                        backgroundColor: '',

                    }, {
                        Title: 'Benefits',
              
                        link: '/masterpresales/advisordetail/Benifits',
                        backgroundColor: '',


                    }, {
                        Title: 'Success Story',
                
                        link: '/masterpresales/advisordetail/story',
                        backgroundColor: '',
                    }, {

                        Title: 'Licensing Process',
                 
                        link: '/masterpresales/advisordetail/process',
                        backgroundColor: '',
                    }, 
                    // {

                    //     Title: 'Sales Manager',
                
                    //     link: '/masterpresales/advisordetail/salesmanger',
                    //     backgroundColor: '',
                    // }
                ],

                tabs: [
                    // {
                    //     Title: 'Testimonials',
                    //     inactive: true,
                    //     active: false,

                    //     padding: '30px',
                    //     backgroundColor: '#fff',

                    //     borderBottomwidth: '5px',
                    //     borderBottomcolor: '#3b371e',
                    //     link: '/masterpresales/advisordetail/aptest'

                    // },
                     {
                        Title: 'About Us',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/advisordetail/about'


                    }, {
                        Title: 'Benefits',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/advisordetail/Benifits'

                    }, {
                        Title: 'Success Story',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/advisordetail/story'
                    }, {
                        Title: 'Licensing Process',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/advisordetail/process'
                    },
                    //  {
                    //     Title: 'Sales Manager',
                    //     inactive: true,
                    //     active: false,
                    //     padding: '30px',
                    //     backgroundColor: '',

                    //     borderBottomwidth: '',
                    //     borderBottomcolor: '',
                    //     link: '/masterpresales/advisordetail/salesmanger'
                    // }


                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
            }
        }


    }
</script>

<style>
    .container {
        flex-direction: column;
    }

    @media only screen and (min-width: 768px) {
            .container {
            flex-direction: column;
        }
    }

    @media only screen and (min-width: 768px) {
        .container {
            flex-direction: row !important;
        }
     }

</style>