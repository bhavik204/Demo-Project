<template>
    <div class="wrapper" style="background-color: #f7f7f7;">
            <div class="container-payment">
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

    var animation = weex.requireModule('animation');
    
    const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
export default{
    mounted(){

      var pagewrap = this.$refs.pagewrap;
      animation.transition(pagewrap, {
            styles: {
              opacity:'1'
            },
            duration: 200, //ms
            timingFunction: 'ease-in',
            // transform: 'translate(1100px,100px)',
            delay: 100 //ms
          }, function () {

            // modal.toast({ message: 'animation finished.' })
            console.log(pagewrap , 'logggmix in ')
          // var btn01 = this.$refs.btn1;


      })
    },
  created() {
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }
    },
       components:{mainTab,sideTab},
       computed: {
            getActiveStatus(){
                var me = this
                this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                this.i=(this.$store.getters.getIndex)

                console.log(this.status)
                console.log(this.i)
                if(this.currentRoute == '/masteronboard/codedetails/codeofconduct')
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

                if(this.currentRoute == '/masteronboard/codedetails/codeagreement')
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
                if(this.currentRoute == '/masteronboard/codedetails/codeofconduct')
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
                if(this.currentRoute == '/masteronboard/codedetails/codeagreement')
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
              sTabs:[
                 {
                  Title:'Code Of Conduct',
                   backgroundColor:'#fff', 
                   fontWeight:'bold',
                    link:'/masteronboard/codedetails/codeofconduct'
                 },
                   {
                  Title:'Agreement',
                   backgroundColor:'', 
                    link:'/masteronboard/codedetails/codeagreement'
                 },
              
                 
                
                  
             ],
          tabs:[
                    {
                        Title:'Code Of Conduct',
                        inactive:true,
                        active:false,
                  
                                padding:'30px',
                                backgroundColor:'#fff',
        
                                borderBottomwidth: '5px',
                                borderBottomcolor: '#3b371e',
                                link:'/masteronboard/codedetails/codeofconduct'
                      
                    },
                    {
                        Title:'Agreement',
                        inactive:true,
                        active:false,
                        padding:'30px',
                                backgroundColor:'',
        
                                borderBottomwidth: '',
                                borderBottomcolor: '',
                                link:'/masteronboard/codedetails/codeagreement'
                        
                  
                    },
              

                    
                ]
         }
       }
    

}
</script>

<style>
    .container-payment {
        flex-direction: column;
    }
    @media only screen and (min-width: 320px) {
        .container-payment {
            flex-direction: column;
        }
    }
    @media only screen and (min-width: 768px) {
        .container-payment {
            flex-direction: row;
        }
    }
</style>