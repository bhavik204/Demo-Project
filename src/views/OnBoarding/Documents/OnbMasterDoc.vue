<template>
    <div class="wrapper" style="background-color: #f7f7f7;">
            <div class="container-proposal">
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onphotodocument')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==0)
                        {
                            this.sTabs[ind].actndve = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].tick = this.sTabs[ind].greentick;
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

                if(this.currentRoute == '/masteronboard/onbmasterdoc/onbagedocument')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==1)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].tick = this.sTabs[ind].greentick;
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onedudocument')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==2)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].tick = this.sTabs[ind].greentick;
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onpandocument')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==3)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].tick = this.sTabs[ind].greentick;
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onbaddressdocument')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==4)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].tick = this.sTabs[ind].greentick;
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onprofiledocument')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==5)
                        {
                            this.sTabs[ind].active = true;
                            this.sTabs[ind].backgroundColor = '#fff';
                            this.sTabs[ind].borderBottomWidth= '5px';
                            this.sTabs[ind].borderBottomColor= '#3b371e';
                            me.$router.push(this.sTabs[ind].link);
                            this.sTabs[ind].tick = this.sTabs[ind].greentick;
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onphotodocument')
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onbagedocument')
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onedudocument')
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onpandocument')
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onbaddressdocument')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==4)
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
                if(this.currentRoute == '/masteronboard/onbmasterdoc/onprofiledocument')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==5)
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
                sTabs: [{
                        Title: 'Personal Photo',
                        backgroundColor: '#fff',
                        fontWeight: 'bold',
                        link: '/masteronboard/onbmasterdoc/onphotodocument',
                        tick:'http://salesdrive.iorta.in/img/Alert.png',
                        greentick:'http://salesdrive.iorta.in/img/GrrenTick.png',
                    }, {
                        Title: 'Age Proof',
                        backgroundColor: '',
                        link: '/masteronboard/onbmasterdoc/onbagedocument',
                        tick:'http://salesdrive.iorta.in/img/Alert.png',
                        greentick:'http://salesdrive.iorta.in/img/GrrenTick.png',
                    }, {
                        Title: 'Education Qualification',
                        backgroundColor: '',
                        link: '/masteronboard/onbmasterdoc/onedudocument',
                        tick:'http://salesdrive.iorta.in/img/Alert.png',
                        greentick:'http://salesdrive.iorta.in/img/GrrenTick.png',
                    }, {
                        Title: 'Pan Card Copy',
                        backgroundColor: '',
                        link: '/masteronboard/onbmasterdoc/onpandocument',
                        tick:'http://salesdrive.iorta.in/img/Alert.png',
                        greentick:'http://salesdrive.iorta.in/img/GrrenTick.png',
                    }, {
                        Title: 'Address Proof',
                        link: '/masteronboard/onbmasterdoc/onbaddressdocument',
                        tick:'http://salesdrive.iorta.in/img/Alert.png',
                        greentick:'http://salesdrive.iorta.in/img/GrrenTick.png',
                    }, {
                        Title: 'Prefered Profiles',
                        link: '/masteronboard/onbmasterdoc/onprofiledocument',
                           tick:'http://salesdrive.iorta.in/img/Alert.png',
                        greentick:'http://salesdrive.iorta.in/img/GrrenTick.png',
                    },

                ],
                tabs: [{
                        Title: 'Personal Photo Upload',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '#fff',

                        borderBottomWidth: '5px',
                        borderBottomColor: '#3b371e',
                        link: '/masteronboard/onbmasterdoc/onphotodocument'

                    }, {
                        Title: 'Age Proof',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteronboard/onbmasterdoc/onbagedocument'
                    },

                    {
                        Title: 'Education Qualification',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteronboard/onbmasterdoc/onedudocument'

                    }, 
                    // {
                    //     Title: 'Proof Of Pass',
                    //     inactive: true,
                    //     active: false,
                    //     padding: '30px',
                    //     backgroundColor: '',

                    //     borderBottomWidth: '',
                    //     borderBottomColor: '',
                    //     link: '/masteronboard/onbmasterdoc/onpandocument'
                    // },
                     {
                        Title: 'Pan Card Copy',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteronboard/onbmasterdoc/onpandocument'


                    },

                    {
                        Title: 'Address Proof',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link: '/masteronboard/onbmasterdoc/onbaddressdocument'
                    }, {
                        Title: 'Prefered Profiles',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomColor: '',
                        link: '/masteronboard/onbmasterdoc/onprofiledocument'
                    },

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
            }
        }


    }
</script>

<style>
    .container-proposal {
        flex-direction: column;
    }
    
    @media only screen and (min-width: 320px) {
        .container-proposal {
            flex-direction: column;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .container-proposal {
            flex-direction: row;
        }
    }
</style>