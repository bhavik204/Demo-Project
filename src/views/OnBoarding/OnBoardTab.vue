<template>
        <header-tab :tabs="tabs" :counter="counter">{{getActiveStatus}}</header-tab>
        </template> 
        
        <script>
              import headerTab from '../../components/Tabs/HeaderTab.vue'
            const iconSrc = 'https://www.materialui.co/materialIcons/action/';
            var bundleUrl = weex.config.bundleUrl;
            const env = weex.config.env || WXEnvironment
          const invalid = '- invalid -'
            export default {
                created(){
                    if (typeof WXEnvironment === 'object') {
        
        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
        }
                },
                      computed:{
            getActiveStatus(){
                var me = this
                this.status=(this.$store.getters.getStatus)
                this.currentRoute = this.$store.state.route.fullPath
                   this.i=(this.$store.getters.getIndex)

                console.log(this.status)
                  console.log(this.i)
  if(this.currentRoute == '/masteronboard/advisordetails/official')
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


                  if(this.currentRoute == '/masteronboard/onbreview' )
                  {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==1)
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
                    if(this.currentRoute == '/masteronboard/onbmasterdoc/onphotodocument')
                    {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind ==2)
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
                    if(this.currentRoute == '/masteronboard/codedetails/codeofconduct')
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
                //     if(this.currentRoute == '/master/masterdoc/addressdocument')
                //     {
                //   for (let ind = 0; ind < this.tabs.length; ind++) {
                //         if(ind ==4)
                //    {
                //          this.tabs[ind].bgColor= '#3d3bee',
                //           this.tabs[ind].icon = this.tabs[ind].whiteIcon,
                //                 this.tabs[ind].color = '#fff',
                //                     me.$router.push(this.tabs[ind].link)
                //    }
                //    else{
                //          this.tabs[ind].bgColor= '#fff',
                //            this.tabs[ind].icon = this.tabs[ind].blackIcon,
                //                 this.tabs[ind].color = '#000000'  
                //    }
                //   }
                //   }


//                                      if(this.i ==0){
//  for (let ind = 0; ind < this.tabs.length; ind++) {
//                   if(ind ==0){
                  
                                 

                  
//                     this.tabs[ind].bgColor= '#3d3bee',
//                           this.tabs[ind].icon = this.tabs[ind].whiteIcon,
//                                 this.tabs[ind].color = '#fff',
//                                     me.$router.push(this.tabs[ind].link)
          
//                   }
//                   else{
//    this.tabs[ind].bgColor= '#fff',
//                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
//                                 this.tabs[ind].color = '#000000'
//                   }
//                 }
// }
//                                      if(this.i ==1){
//  for (let ind = 0; ind < this.tabs.length; ind++) {
//                   if(ind ==1){
                  
                                 

                  
//                     this.tabs[ind].bgColor= '#3d3bee',
//                           this.tabs[ind].icon = this.tabs[ind].whiteIcon,
//                                 this.tabs[ind].color = '#fff',
//                                     me.$router.push(this.tabs[ind].link)
          
//                   }
//                   else{
//    this.tabs[ind].bgColor= '#fff',
//                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
//                                 this.tabs[ind].color = '#000000'
//                   }
//                 }
// }
//                    if(this.i ==2){
//  for (let ind = 0; ind < this.tabs.length; ind++) {
//                   if(ind ==2){
                  
                                 

                  
//                     this.tabs[ind].bgColor= '#3d3bee',
//                           this.tabs[ind].icon = this.tabs[ind].whiteIcon,
//                                 this.tabs[ind].color = '#fff',
//                                     me.$router.push(this.tabs[ind].link)
          
//                   }
//                   else{
//    this.tabs[ind].bgColor= '#fff',
//                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
//                                 this.tabs[ind].color = '#000000'
//                   }
//                 }
// }
//                   if(this.i ==3){
//  for (let ind = 0; ind < this.tabs.length; ind++) {
//                   if(ind ==3){
                  
                                 

                  
//                     this.tabs[ind].bgColor= '#3d3bee',
//                           this.tabs[ind].icon = this.tabs[ind].whiteIcon,
//                                 this.tabs[ind].color = '#fff',
//                                     me.$router.push(this.tabs[ind].link)
          
//                   }
//                   else{
//    this.tabs[ind].bgColor= '#fff',
//                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
//                                 this.tabs[ind].color = '#000000'
//                   }
//                 }
// }
//                   if(this.i ==4){
//  for (let ind = 0; ind < this.tabs.length; ind++) {
//                   if(ind ==4){
                  
                                 

                  
//                     this.tabs[ind].bgColor= '#3d3bee',
//                           this.tabs[ind].icon = this.tabs[ind].whiteIcon,
//                                 this.tabs[ind].color = '#fff',
//                                     me.$router.push(this.tabs[ind].link)
          
//                   }
//                   else{
//    this.tabs[ind].bgColor= '#fff',
//                           this.tabs[ind].icon = this.tabs[ind].blackIcon,
//                                 this.tabs[ind].color = '#000000'
//                   }
//                 }
// }
            }   
             
            },
                components:{headerTab},
                data() {
                    return {
                        active:false,
                        counter:false,
        
                        tabs:[
                            {
                            
                      
                            bgColor: '#3d3bee',
                            color: '#fff',
                            shade: '',
                            icon: 'https://www.materialui.co/materialIcons/action/account_box_white_192x192.png',
                            Title: 'Advisor Data',
                            counter: 55,
                            active: false,
                            blackIcon: 'https://www.materialui.co/materialIcons/action/account_box_black_192x192.png',
                            whiteIcon: 'https://www.materialui.co/materialIcons/action/account_box_white_192x192.png',
                            link:'/masteronboard/advisordetails/official'
                              
                            },
                            {
                              
                                bgColor: '#FFF',
                                color: '#000000',
                                shade: '',
                                icon: 'https://www.materialui.co/materialIcons/action/pageview_black_192x192.png',
                                Title: 'Review Data',
                                counter: 2,
                                active: false,
                                blackIcon: 'https://www.materialui.co/materialIcons/action/pageview_black_192x192.png',
                                whiteIcon: 'https://www.materialui.co/materialIcons/action/pageview_white_192x192.png',
                                link:'/masteronboard/onbreview'
                                
                          
                            },
                            {
                              
                                bgColor: '#FFF',
                            color: '#000000',
                            shade: '',
                            icon: 'https://www.materialui.co/materialIcons/file/cloud_upload_black_192x192.png',
                            Title: 'Documents Upload',
                            counter: 34,
                            active: false,
                            blackIcon: 'https://www.materialui.co/materialIcons/file/cloud_upload_black_192x192.png',
                            whiteIcon: 'https://www.materialui.co/materialIcons/file/cloud_upload_white_192x192.png',
                            link:'/masteronboard/onbmasterdoc/onphotodocument'
                                
                            },
                            {
                           
                                bgColor: '#FFF',
                                color: '#000000',
                                shade: '',
                                icon: 'https://www.materialui.co/materialIcons/action/account_balance_black_192x192.png',
                                Title: 'Code Of Conduct',
                                counter: 23,
                                active: false,
                                blackIcon: 'https://www.materialui.co/materialIcons/action/account_balance_black_192x192.png',
                                whiteIcon: 'https://www.materialui.co/materialIcons/action/account_balance_white_192x192.png',
                                link:'/masteronboard/codedetails/codeofconduct'
                            },
                            // {
                          
                            //     bgColor: '#FFF',
                            // color: '#000000',
                            // shade: '',
                            // icon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                            // Title: 'Documents Upload',
                            // counter: 60,
                            // active: false,
                            // blackIcon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                            // whiteIcon: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png',
                            // link:'/master/document'
                            // },
                        
                        
        
                            // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                        ]
        
                    }
                },
                
        
        
        
                methods: {
                    jump(to) {
                        if (this.$router) {
                            this.$router.push(to)
                        }
                    },
        
        
                }
            }
        </script>
        
        <style>
        
        </style>
        
        