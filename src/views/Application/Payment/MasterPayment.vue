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
  if(this.currentRoute == '/master/masterpay/onlinepayment')
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


                  if(this.currentRoute == '/master/masterpay/chequepayment')
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
                    if(this.currentRoute == '/master/masterpay/linkpayment')
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
            //         if(this.currentRoute == '/master/testpro/proposalinsurance')
            //        {
            //       for (let ind = 0; ind < this.sTabs.length; ind++) {
            //             if(ind ==3)
            //        {
            //                this.sTabs[ind].active = true;
            //     this.sTabs[ind].backgroundColor = '#fff';
            //     this.sTabs[ind].borderBottomWidth= '5px';
            //     this.sTabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.sTabs[ind].link)
            //     this.sTabs[ind].fontWeight = 'bold';
            //        }
            //        else{
            //                  this.sTabs[ind].active = false;
            //     this.sTabs[ind].backgroundColor = '';
            // this.sTabs[ind].borderBottomWidth= '';
            // this.sTabs[ind].borderBottomColor= ''
            // this.sTabs[ind].fontWeight = '';
            //        }
            //       }
            //       }
            //         if(this.currentRoute == '/master/testpro/proposalmedical')
            //         {
            //       for (let ind = 0; ind < this.sTabs.length; ind++) {
            //             if(ind ==4)
            //        {
            //                this.sTabs[ind].active = true;
            //     this.sTabs[ind].backgroundColor = '#fff';
            //     this.sTabs[ind].borderBottomWidth= '5px';
            //     this.sTabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.sTabs[ind].link)
            //     this.sTabs[ind].fontWeight = 'bold';
            //        }
            //        else{
            //                  this.sTabs[ind].active = false;
            //     this.sTabs[ind].backgroundColor = '';
            // this.sTabs[ind].borderBottomWidth= '';
            // this.sTabs[ind].borderBottomColor= ''  
            // this.sTabs[ind].fontWeight = '';
            //        }
            //       }
            //       }
            //           if(this.currentRoute == '/master/testpro/proposalvernacular')
            //         {
            //       for (let ind = 0; ind < this.sTabs.length; ind++) {
            //             if(ind ==5)
            //        {
            //               this.sTabs[ind].active = true;
            //     this.sTabs[ind].backgroundColor = '#fff';
            //     this.sTabs[ind].borderBottomWidth= '5px';
            //     this.sTabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.sTabs[ind].link)
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
            //           if(this.currentRoute == '/master/testpro/proposaldeclaration')
            //         {
            //       for (let ind = 0; ind < this.sTabs.length; ind++) {
            //             if(ind ==6)
            //        {
            //               this.sTabs[ind].active = true;
            //     this.sTabs[ind].backgroundColor = '#fff';
            //     this.sTabs[ind].borderBottomWidth= '5px';
            //     this.sTabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.sTabs[ind].link);
            //     this.sTabs[ind].fontWeight = 'bold';
            //        }
            //        else{
            //               this.sTabs[ind].active = false;
            //     this.sTabs[ind].backgroundColor = '';
            // this.sTabs[ind].borderBottomWidth= '';
            // this.sTabs[ind].borderBottomColor= '';
            // this.sTabs[ind].fontWeight = ''; 
            //        }
            //       }
            //       }
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
  if(this.currentRoute == '/master/masterpay/onlinepayment')
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


                  if(this.currentRoute == '/master/masterpay/chequepayment')
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
                    if(this.currentRoute == '/master/masterpay/linkpayment')
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
            //         if(this.currentRoute == '/master/testpro/proposalinsurance')
            //        {
            //       for (let ind = 0; ind < this.tabs.length; ind++) {
            //             if(ind ==3)
            //        {
            //                this.tabs[ind].active = true;
            //     this.tabs[ind].backgroundColor = '#fff';
            //     this.tabs[ind].borderBottomWidth= '5px';
            //     this.tabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.tabs[ind].link)
            //        }
            //        else{
            //                  this.tabs[ind].active = false;
            //     this.tabs[ind].backgroundColor = '';
            // this.tabs[ind].borderBottomWidth= '';
            // this.tabs[ind].borderBottomColor= ''
            //        }
            //       }
            //       }
            //         if(this.currentRoute == '/master/testpro/proposalmedical')
            //         {
            //       for (let ind = 0; ind < this.tabs.length; ind++) {
            //             if(ind ==4)
            //        {
            //                this.tabs[ind].active = true;
            //     this.tabs[ind].backgroundColor = '#fff';
            //     this.tabs[ind].borderBottomWidth= '5px';
            //     this.tabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.tabs[ind].link)
            //        }
            //        else{
            //                  this.tabs[ind].active = false;
            //     this.tabs[ind].backgroundColor = '';
            // this.tabs[ind].borderBottomWidth= '';
            // this.tabs[ind].borderBottomColor= ''  
            //        }
            //       }
            //       }
            //           if(this.currentRoute == '/master/testpro/proposalvernacular')
            //         {
            //       for (let ind = 0; ind < this.tabs.length; ind++) {
            //             if(ind ==5)
            //        {
            //               this.tabs[ind].active = true;
            //     this.tabs[ind].backgroundColor = '#fff';
            //     this.tabs[ind].borderBottomWidth= '5px';
            //     this.tabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.tabs[ind].link)
            //        }
            //        else{
            //                this.tabs[ind].active = false;
            //     this.tabs[ind].backgroundColor = '';
            // this.tabs[ind].borderBottomWidth= '';
            // this.tabs[ind].borderBottomColor= ''; 
            //        }
            //       }
            //       }
            //           if(this.currentRoute == '/master/testpro/proposaldeclaration')
            //         {
            //       for (let ind = 0; ind < this.tabs.length; ind++) {
            //             if(ind ==6)
            //        {
            //               this.tabs[ind].active = true;
            //     this.tabs[ind].backgroundColor = '#fff';
            //     this.tabs[ind].borderBottomWidth= '5px';
            //     this.tabs[ind].borderBottomColor= '#3b371e';
            //     me.$router.push(this.tabs[ind].link);
            //        }
            //        else{
            //               this.tabs[ind].active = false;
            //     this.tabs[ind].backgroundColor = '';
            // this.tabs[ind].borderBottomWidth= '';
            // this.tabs[ind].borderBottomColor= ''; 
            //        }
            //       }
            //       }
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
       components:{mainTab,sideTab},
       data() {
         return {
             sTabs:[
                 {
                  Title:'Online',
                   backgroundColor:'#fff', 
                   fontWeight:'bold',
                    link:'/master/masterpay/onlinepayment'
                 },
                   {
                  Title:'Cheque/Cash/DD',
                   backgroundColor:'', 
                    link:'/master/masterpay/chequepayment'
                 },
                 {
                        Title:'Send Link For Payment',
                           backgroundColor:'',
                  
                       
                    
                        link:'/master/masterpay/linkpayment'
                        
                    },
                 
                
                  
             ],
          tabs:[
                    {
                      Title:'Online',
                        inactive:true,
                        active:false,
                  
                                padding:'30px',
                                backgroundColor:'#fff',
        
                                borderBottomWidth: '5px',
                                borderBottomColor: '#3b371e',
                                link:'/master/masterpay/onlinepayment'
                      
                    },
                    {
                       Title:'Cheque/Cash/DD',
                        inactive:true,
                        active:false,
                        padding:'30px',
                                backgroundColor:'',
        
                                borderBottomWidth: '',
                                borderBottomColor: '',
                                link:'/master/masterpay/chequepayment'
                        
                  
                    },
                    {
                       Title:'Send Link For Payment',
                        inactive:true,
                        active:false,
                  
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomWidth: '',
                        borderBottomColor: '',
                        link:'/master/masterpay/linkpayment'
                        
                    },
                   
                 
                    // {
                    //     Title:'Report',
                    //     inactive:true,
                    //     active:false,
                    //     padding:'30px',
                    //     backgroundColor:'',

                    //     borderBottomwidth: '',
                    //     borderBottomColor: ''
                    // },

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
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