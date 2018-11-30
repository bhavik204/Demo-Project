<template>
        <div class="user-on master-page-wrapper">
            <application-tab></application-tab>
            <!-- <main-tab  :tabs="tabs"></main-tab> -->
            <scroller >
                <router-view ></router-view>
          
                <!-- <router-view name="Onreview" ></router-view>
                <router-view name="OnDocument" /></router-view>
                <router-view name="CocDetail" /></router-view> -->
            </scroller>
        </div>
</template>

<script>
    import mainTab from '../../components/Tabs/MainTab.vue'
    import applicationTab from './OnBoardTab.vue'

    const env = weex.config.env || WXEnvironment
  const invalid = '- invalid -'
export default{
  created() {
    this.$store.commit('SET_PAGE_TITLE' , 'On Boarding');
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }
    },
       components:{mainTab,applicationTab},
    //    data() {
    //      return {
    //       tabs:[
    //                 {
    //                     Title:'Advisor Data',
    //                     inactive:true,
    //                     active:false,
                  
    //                             padding:'30px',
    //                             backgroundColor:'#fff',
        
    //                             borderBottomwidth: '5px',
    //                             borderBottomcolor: '#3b371e'
                      
    //                 },
    //                 {
    //                     Title:'Nominee',
    //                     inactive:true,
    //                     active:false,
    //                     padding:'30px',
    //                             backgroundColor:'',
        
    //                             borderBottomwidth: '',
    //                             borderBottomcolor: ''
                        
                  
    //                 },
    //                 {
    //                     Title:'Family',
    //                     inactive:true,
    //                     active:false,
                  
    //                     padding:'30px',
    //                     backgroundColor:'',

    //                     borderBottomwidth: '',
    //                     borderBottomcolor: ''
                        
    //                 },
    //                 {
    //                     Title:'Insurance',
    //                     inactive:true,
    //                     active:false,
    //                     padding:'30px',
    //                     backgroundColor:'',

    //                     borderBottomwidth: '',
    //                     borderBottomcolor: ''
    //                 },
    //                 {
    //                     Title:'Medical',
    //                     inactive:true,
    //                     active:false,
    //                     padding:'30px',
    //                     backgroundColor:'',

    //                     borderBottomwidth: '',
    //                     borderBottomcolor: ''
    //                 },
    //                 {
    //                     Title:'Lifestyle',
    //                     inactive:true,
    //                     active:false,
    //                     padding:'30px',
    //                     backgroundColor:'',

    //                     borderBottomwidth: '',
    //                     borderBottomcolor: ''
    //                 },
    //                 {
    //                     Title:'Venacular',
    //                     inactive:true,
    //                     active:false,
    //                     padding:'30px',
    //                     backgroundColor:'',

    //                     borderBottomwidth: '',
    //                     borderBottomcolor: ''
    //                 },
    //                 {
    //                     Title:'Declaration',
    //                     inactive:true,
    //                     active:false,
    //                     padding:'30px',
    //                     backgroundColor:'',

    //                     borderBottomwidth: '',
    //                     borderBottomcolor: ''
    //                 },
    //                 {
    //                     Title:'Report',
    //                     inactive:true,
    //                     active:false,
    //                     padding:'30px',
    //                     backgroundColor:'',

    //                     borderBottomwidth: '',
    //                     borderBottomcolor: ''
    //                 },

    //                 // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
    //             ]
    //      }
    //    }
    

}
</script>

<style>
.master-page-wrapper {
    padding-left: 10px;
    padding-right: 10px;
}


</style>