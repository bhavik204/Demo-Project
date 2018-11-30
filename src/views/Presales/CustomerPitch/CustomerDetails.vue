<template>
    <div class="container">                
        <!-- <scroller class="scroller-test-prop"> -->
           
               <main-tab  :tabs="tabs">{{getMainStatus}}</main-tab>
                <side-tab :sTabs="sTabs">{{getActiveStatus}}</side-tab>
                <router-view ></router-view>
                <!-- <router-view name="Presentation" />
                <router-view name="Products" />
                <router-view name="Calculator" />
                <router-view name="Advisersviews" /> -->
                
        <!-- </scroller> -->
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
                if(this.currentRoute == '/masterpresales/customerdetails/presentation')
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

                if(this.currentRoute == '/masterpresales/customerdetails/testimonials')
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
                if(this.currentRoute == '/masterpresales/customerdetails/products')
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
                if(this.currentRoute == '/masterpresales/customerdetails/calculator')
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
                if(this.currentRoute == '/masterpresales/customerdetails/presentation')
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
                if(this.currentRoute == '/masterpresales/customerdetails/testimonials')
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
                if(this.currentRoute == '/masterpresales/customerdetails/products')
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
                if(this.currentRoute == '/masterpresales/customerdetails/calculator')
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
                      {
                          Title: 'Presentation ',
                          backgroundColor: '',
                          link: '/masterpresales/customerdetails/presentation'
                      },
                    {
                        Title: 'Testimonials',
                        backgroundColor: '',
                                link: '/masterpresales/customerdetails/testimonials'
                    }, 
                     {
                        Title: 'Products',
                        link: '/masterpresales/customerdetails/products',
                        backgroundColor: '',
                    },
                     {
                        link: '/masterpresales/customerdetails/calculator',
                        Title: 'Calculator',
                        backgroundColor: '',
                    },
                    // {
                    //     backgroundColor: '',
                    //     Title: 'Advisors',
                    //     link: '/masterpresales/customerdetails/advisorview'
                    // },
          ],
                tabs: [
                    {
                       Title: 'Presentation',
                       inactive: true,
                       active: false,
                       padding: '30px',
                       backgroundColor: '',

                       borderBottomwidth: '',
                       borderBottomcolor: '',
                       link: '/masterpresales/customerdetails/presentation'


                   },
                    {
                        Title: 'Testimonials',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '#fff',
                        borderBottomwidth: '5px',
                        borderBottomcolor: '#3b371e',
                        link: '/masterpresales/customerdetails/testimonials'

                    },
                     {
                        Title: 'Products',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/customerdetails/products'

                    }, {
                        Title: 'Calculator',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/customerdetails/calculator'
                    },
                    //  {
                    //     Title: 'Advisors',
                    //     inactive: true,
                    //     active: false,
                    //     padding: '30px',
                    //     backgroundColor: '',
    
                    //     borderBottomwidth: '',
                    //     borderBottomcolor: '',
                    //     link: '/masterpresales/customerdetails/advisorview'
                    // },


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