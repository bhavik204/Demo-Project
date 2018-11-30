<template>
    <div class="user" >
       <div class="" style="background-color: #f7f7f7;">
           <div class="container">
                 <main-tab  :tabs="tabs">{{getMainStatus}}</main-tab>
                <side-tab :sTabs="sTabs">{{getActiveStatus}}</side-tab>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import sideTab from '../../components/Tabs/SideTab.vue'
    import mainTab from '../../components/Tabs/MainTab.vue'
    import applicationTab from '../Application/ApplicationTab.vue'

    const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
export default{
  created() {
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }
    },
     computed: {
            getActiveStatus(){
                var me = this
                this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i=(this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if(this.currentRoute == '/mastercontests/newdetails/newone')
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

                if(this.currentRoute == '/mastercontests/newdetails/newtwo')
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
                if(this.currentRoute == '/mastercontests/newdetails/newthree')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==2)
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

                if(this.currentRoute == '/mastercontests/newdetails/newfour')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==3)
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
                 if(this.currentRoute == '/mastercontests/newdetails/newfive')
                {
                    for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==4)
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
                if(this.currentRoute == '/mastercontests/newdetails/newone')
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
                if(this.currentRoute == '/mastercontests/newdetails/newtwo')
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
                 if(this.currentRoute == '/mastercontests/newdetails/newthree')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==2)
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
                if(this.currentRoute == '/mastercontests/newdetails/newfour')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==3)
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
                 if(this.currentRoute == '/mastercontests/newdetails/newfive')
                {
                    for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==4)
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
       components:{mainTab,applicationTab , sideTab},
       data() {
         return {
               sTabs: [
                //    Digital East
                    {
                        Title: 'Details',
                        backgroundColor: '',
                        link: '/mastercontests/newdetails/newone'


                    }, 
                    {
                        Title: 'Eligibility ',
                        backgroundColor: '',
                        link: '/mastercontests/newdetails/newtwo'

                    },
                     {
                        Title: 'Rules',
                        backgroundColor: '',
                        link: '/mastercontests/newdetails/newthree'
                    },
                     {
                        link: '/mastercontests/newdetails/newfour',
                        Title: 'Rewards',
                        backgroundColor: '',
                    },
                     {
                        Title: 'Extras',
                        link: '/mastercontests/newdetails/newfive',
                        backgroundColor: '',
                    },
                  

          ], 
          tabs:[
                    {
                        Title:'Details',
                        inactive:true,
                        active:false,
                  
                                padding:'30px',
                                backgroundColor:'#fff',
        
                                borderBottomWidth: '5px',
                                borderBottomColor: '#3b371e',
                                link: '/mastercontests/newdetails/newone'
                      
                    },
                    {
                        Title:'Eligibility',
                        inactive:true,
                        active:false,
                        padding:'30px',
                                backgroundColor:'',
        
                                borderBottomwidth: '',
                                borderBottomcolor: '',
                                link: '/mastercontests/newdetails/newtwo'
                        
                  
                    },
                    {
                        Title:'Rules',
                        inactive:true,
                        active:false,
                  
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/mastercontests/newdetails/newthree'
                        
                    },
                    {
                        Title:'Rewards',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/mastercontests/newdetails/newfour'
                    },
                    {
                        Title:'Extras',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/mastercontests/newdetails/newfive'
                    }
                   

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
            flex-direction: row;
        }
     }

</style>