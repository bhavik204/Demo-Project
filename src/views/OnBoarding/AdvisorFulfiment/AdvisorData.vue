<template>
      <div class="" style="background-color: #f7f7f7;">
            <div class="container-advisor">
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
    import applicationTab from '../../Application/ApplicationTab.vue'
      import sideTab from '../../../components/Tabs/SideTab.vue'
    var animation = weex.requireModule('animation');
    
    const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
export default{
  created() {
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }
    },
         computed:{
            getActiveStatus(){
                var me = this
                // this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                   this.i=(this.$store.getters.getIndex)

                console.log(this.status)
                  console.log(this.i)
  if(this.currentRoute == '/masteronboard/advisordetails/official')
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


                  if(this.currentRoute == '/masteronboard/advisordetails/onbpersonal')
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
                    if(this.currentRoute == '/masteronboard/advisordetails/edubckg')
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
                    if(this.currentRoute == '/masteronboard/advisordetails/empbckg')
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
                    if(this.currentRoute == '/masteronboard/advisordetails/references')
                    {
                  for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==4)
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
                      if(this.currentRoute == '/masteronboard/advisordetails/qscore')
                    {
                  for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==5)
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
            this.sTabs[ind].borderBottomColor= ''; 
            this.sTabs[ind].fontWeight = '';
                   }
                  }
                  }
                      if(this.currentRoute == '/masteronboard/advisordetails/prerecruit')
                    {
                  for (let ind = 0; ind < this.sTabs.length; ind++) {
                        if(ind ==6)
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
            this.sTabs[ind].borderBottomColor= '';
            this.sTabs[ind].fontWeight = ''; 
                   }
                  }
                  }
            //           if(this.currentRoute == '/master/testpro/proposalreport')
            //         {
            //       for (let ind = 0; ind < this.sTabs.length; ind++)
            //        {
            //             if(ind ===7)
            //        {
            //               console.log(this.sTabs[ind].link)
            //                this.sTabs[ind].active = true;
            //     this.sTabs[ind].backgroundColor = '#fff';
            //     this.sTabs[ind].borderBottomWidth= '5px';
            //     this.sTabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.sTabs[ind].link);
            //     this.sTabs[ind].fontWeight = 'bold';
            //        }
            //        else{
            //                this.sTabs[ind].active = false;
            //     this.sTabs[ind].backgroundColor = '';
            // this.sTabs[ind].borderBottomWidth= '';
            // this.sTabs[ind].borderBottomColor= ''; 
            // this.sTabs[ind].fontWeight = '';
            //        }
            //       }
            //       }
      



},
         getMainStatus(){
                var me = this
                this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                   this.i=(this.$store.getters.getIndex)

                console.log(this.status)
                  console.log(this.i)
  if(this.currentRoute == '/master/testpro/proposalpersonal')
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


                  if(this.currentRoute == '/masteronboard/advisordetails/onbpersonal')
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
                    if(this.currentRoute == '/masteronboard/advisordetails/edubckg')
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
                    if(this.currentRoute == '/masteronboard/advisordetails/empbckg')
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
                    if(this.currentRoute == '/masteronboard/advisordetails/references')
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
                      if(this.currentRoute == '/masteronboard/advisordetails/qscore')
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
            this.tabs[ind].borderBottomColor= ''; 
                   }
                  }
                  }
                      if(this.currentRoute == '/masteronboard/advisordetails/prerecruit')
                    {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==6)
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
            this.tabs[ind].borderBottomColor= ''; 
                   }
                  }
                  }
            //           if(this.currentRoute == '/master/testpro/proposalreport')
            //         {
            //       for (let ind = 0; ind < this.tabs.length; ind++) {
            //             if(ind ==7)
            //        {
            //               console.log(this.tabs[ind].link)
            //                this.tabs[ind].active = true;
            //     this.tabs[ind].backgroundColor = '#fff';
            //     this.tabs[ind].borderBottomWidth= '5px';
            //     this.tabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.tabs[ind].link);
            //        }
            //        else{
            //                this.tabs[ind].active = false;
            //     this.tabs[ind].backgroundColor = '';
            // this.tabs[ind].borderBottomWidth= '';
            // this.tabs[ind].borderBottomColor= ''; 
            //        }
            //       }
            //       }
      



}
            } ,
       components:{mainTab,applicationTab,sideTab},
       data() {
         return {
                 sTabs:[
                 {
                  Title:'Official Details',
                   backgroundColor:'#fff', 
                   fontWeight:'bold',
                  link:'/masteronboard/advisordetails/official'
                 },
                   {
                  Title:'Personal Details',
                   backgroundColor:'', 
            link:'/masteronboard/advisordetails/onbpersonal'
                 },
                 {
                        Title:'Educational Background',
                           backgroundColor:'',
                  
                       
                    
                    link:'/masteronboard/advisordetails/edubckg'
                        
                    },
                    {
                        Title:'Employment Background',
                        backgroundColor:'',
                       
                    
                        link:'/masteronboard/advisordetails/empbckg'
                    },
                    {
                        Title:'References',
                        backgroundColor:'',
                       
                    
                         link:'/masteronboard/advisordetails/references'
                    },
                    {
                        Title:'Q Score Questionnaire',
                     
                       
                    
                         link:'/masteronboard/advisordetails/qscore'
                    },
                    {
                        Title:'Pre-recuitment Test Details',
                     
                       
                    
                        link:'/masteronboard/advisordetails/prerecruit'
                    },
                  
             ],
          tabs:[
                    {
                        Title:'Official Details',
                        inactive:true,
                        active:false,
                  
                                padding:'30px',
                                backgroundColor:'#fff',
        
                                borderBottomWidth: '5px',
                                borderBottomColor: '#3b371e',
                                link:'/masteronboard/advisordetails/official'
                      
                    },
                    {
                        Title:'Personal Details',
                        inactive:true,
                        active:false,
                        padding:'30px',
                                backgroundColor:'',
        
                                borderBottomwidth: '',
                                borderBottomcolor: '',
                                link:'/masteronboard/advisordetails/onbpersonal'
                        
                  
                    },
                    {
                        Title:'Educational Background',
                        inactive:true,
                        active:false,
                  
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link:'/masteronboard/advisordetails/edubckg'
                        
                    },
                    {
                        Title:'Employment Background',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link:'/masteronboard/advisordetails/empbckg'
                    },
                    {
                        Title:'References',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link:'/masteronboard/advisordetails/references'
                    },
                    {
                        Title:'Q Score Questionnaire',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link:'/masteronboard/advisordetails/qscore'
                    },
                    {
                        Title:'Pre-recuitment Test Details',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link:'/masteronboard/advisordetails/prerecruit'
                    },
                    // {
                    //     Title:'Report',
                    //     inactive:true,
                    //     active:false,
                    //     padding:'30px',
                    //     backgroundColor:'',

                    //     borderBottomwidth: '',
                    //     borderBottomcolor: '',
                    //     link:'/master/testpro/advisorreport'
                    // },
                    // {
                    //     Title:'Report',
                    //     inactive:true,
                    //     active:false,
                    //     padding:'30px',
                    //     backgroundColor:'',

                    //     borderBottomwidth: '',
                    //     borderBottomcolor: ''
                    // },

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
         }
       }
    

}
</script>

<style>
.master-page-wrapper {
    padding-left: 10px;
    padding-right: 10px;
}
  .container-advisor {
        flex-direction: column;
    }
    @media only screen and (min-width: 320px) {
        .container-advisor {
            flex-direction: column;
        }
    }
    @media only screen and (min-width: 768px) {
        .container-advisor {
            flex-direction: row;
        }
    }
</style>