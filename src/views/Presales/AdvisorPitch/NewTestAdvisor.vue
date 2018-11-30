<template>
        <div class="user" >
            <!-- <inner-header headeTitle="Proposal Fulfilment"></inner-header> -->
            <!-- <application-tab></application-tab> -->
            <main-tab  :tabs="tabs"></main-tab>
            <scroller class="scroller-test-prop">
                <router-view />

                <router-view name="About" />
                <router-view name="Benifits" />
                <router-view name="Story" />
                <router-view name="Process" />
                <router-view name="SalesManeger" />
            
            </scroller>
        </div>
</template>

<script>
    import mainTab from '../../../components/Tabs/MainTab.vue'
    import applicationTab from '../../Application/ApplicationTab.vue'
    
    const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
export default{
  created() {
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }
    },
       components:{mainTab,applicationTab},
       data() {
         return {
          tabs:[
                    {
                        Title:'Testimonials',
                        inactive:true,
                        active:false,
                  
                                padding:'30px',
                                backgroundColor:'#fff',
        
                                borderBottomwidth: '5px',
                                borderBottomcolor: '#3b371e',
                                link: '/masterpresales/newtestimonials/testimonials'
                      
                    },
                    {
                        Title:'About Us',
                        inactive:true,
                        active:false,
                        padding:'30px',
                                backgroundColor:'',
        
                                borderBottomwidth: '',
                                borderBottomcolor: '',
                                link: '/masterpresales/newtestimonials/presentation'
                        
                  
                    },
                    {
                        Title:'Success Story',
                        inactive:true,
                        active:false,
                  
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/newtestimonials/products'
                        
                    },
                    {
                        Title:'Licensing Process',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/newtestimonials/calculator'
                    },
                    {
                        Title:'Sales Manager',
                        inactive:true,
                        active:false,
                        padding:'30px',
                        backgroundColor:'',

                        borderBottomwidth: '',
                        borderBottomcolor: '',
                        link: '/masterpresales/newtestimonials/advisor'
                    }
                   

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
         }
       }
    

}
</script>

<style>

</style>