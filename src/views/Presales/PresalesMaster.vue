<template>
        <div class="user master-page-wrapper">
            <scroller class="scroller-tab-button" scroll-direction="horizontal">
            <div class="button-row-set">
                <header-tab :tabs="tabs" :counter="counter" >{{getActiveStatus}}</header-tab>
                
                <div class="img-centerE" >
                        <div class=" x-small-btn-b"  @click.native="jump('/masteronboard/advisordetails/onbpersonal')" v-if="platform === 'Web'">
                            <!-- <div class="md-custom-btn-a btn-color-a">
                                <text class="md-btn-label-a text-color-white-a">Online Registration</text>
                            </div> -->
                            <p-button
                           
                            btn-icon="https://www.materialui.co/materialIcons/social/person_add_white_2048x2048.png"
                            btn-name="Online Registration">
                            </p-button>
                        </div>
                        <div v-if="platform !== 'Web'"  @click="jump('/masteronboard/advisordetails/onbpersonal')" style="margin-left: 20px">
                            <p-button  btn-width="350px"
                             
                                btn-icon="https://www.materialui.co/materialIcons/social/person_add_white_2048x2048.png"
                                btn-name="Online Registration">
                            </p-button>
                        </div>
                       
                        
                </div>
            </div>
            </scroller>
            <scroller class="scroller-test-master">
                <router-view ></router-view>
               
              
            </scroller>
        </div>
</template>

<script>
    import headerTab from '../../components/Tabs/HeaderTab.vue'
    import PButton from '../../components/vx-primary-button/vx-primary-button.vue'
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/'
    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Presales Tools');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {

            headerTab,
            PButton
        },
        computed:{
          getActiveStatus(){
                var me = this
            
                this.currentRoute = this.$store.state.route.fullPath
            

             
                if(this.currentRoute == ('/masterpresales/customerdetails/presentation' || '/masterpresales/customerdetails/presentation'))
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

                //   if(this.currentRoute == '/master/testpro/proposalpersonal' || this.currentRoute == '/master/testpro/proposalreport' )

                  if(this.currentRoute == ('/masterpresales/advisordetail/about' ||  'masterpresales/advisordetail/process') )
                  {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 1)
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
                    if(this.currentRoute == '/masterpresales/resourcedetails/customer' )
                    {
                  for (let ind = 0; ind < this.tabs.length; ind++) {
                        if(ind == 2)
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

            } 
          }  ,
        data() {
            return {
                counter:false,
                tabs: [{
                        bgColor: '#fff',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc + 'supervisor_account_black_192x192.png',
                        Title: 'Customer Pitch',
                        counter: 55,
                        active: false,
                        blackIcon: iconSrc + 'supervisor_account_black_192x192.png',
                        whiteIcon: iconSrc + 'supervisor_account_white_192x192.png',
                        link: '/masterpresales/customerdetails/presentation'

                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/editor/monetization_on_black_192x192.png',
                        Title: 'Advisor Pich',
                        counter: 55,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/editor/monetization_on_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/editor/monetization_on_white_192x192.png',
                        link: '/masterpresales/advisordetail/about'


                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/maps/local_library_black_192x192.png',
                        Title: 'Resource Center',
                        counter: 55,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/maps/local_library_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/maps/local_library_white_192x192.png',
                        link: '/masterpresales/resourcedetails/customer'

                    },


                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
            }
        },
        methods:{
                     jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
        }


    }
</script>

<style>
    .master-page-wrapper {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .scroller-tab-button {
      
        flex-direction: row;
    }
      .button-row-set {
            flex-direction: row;
            justify-content: space-between;
        }
        .btn-color-a {
            background-color: #3b371e;
        }
        .img-centerE {
            align-items: flex-end;
            padding-top: 20px;
            padding-left: 25px;
            /* padding-right: 20px; */
        }
        .box-a {
            padding: 10px;
        }
        .md-custom-btn-a {
            /* flex-direction: row; */
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            height: 110px;
            min-width: 200 px;
           
        }
        .md-btn-label-a {
            font-size: 21px;
            font-weight: 500;
           
            color: #fff;
        }
        .md-custom-btn:active-a {
            background-color: #3b371e;
        }
        .md-btn-width-a {
            width: 200px;
        }
        .x-small-btn-a {
            width: 110px;
        }
        .x-small-btn-b {
            min-width: 240px;
            top: 25px;
        }
        .md-btn-width-b {
            width: 110px;
        }
    
    @media (min-width: 320px) {
        .button-row-set {
            flex-direction: row;
            justify-content: space-between;
        }
        .btn-color-a {
            background-color: #3b371e;
        }
        .img-centerE {
            align-items: flex-end;
            padding-top: 20px;
            padding-left: 25px;
            /* padding-right: 20px; */
        }
        .box-a {
            padding: 10px;
        }
        .md-custom-btn-a {
            /* flex-direction: row; */
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            height: 30px;
            min-width: 170 px;
           
        }
        .md-btn-label-a {
            font-size: 14px;
            font-weight: 500;
           
            color: #fff;
        }
        .md-custom-btn:active-a {
            background-color: #3b371e;
        }
        .md-btn-width-a {
            width: 140px;
        }
        .x-small-btn-a {
            width: 110px;
        }
        .x-small-btn-b {
            min-width: 150px;
            top: 25px; 
        }
        .md-btn-width-b {
            width: 110px;
        }
    }
    
    @media (min-width: 992px) {
        .button-row-set {
            flex-direction: row;
            justify-content: space-between;
        }
        .btn-color-a {
            background-color: #3b371e;
        }
        .img-centerE {
            align-items: flex-end;
            padding-top: 20px;
            margin-left: 480px;
            /* padding-right: 20px; */
        }
        .box-a {
            padding: 10px;
        }
        .md-custom-btn-a {
            /* flex-direction: row; */
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            height: 30px;
            min-width: 170px;
           
        }
        .md-btn-label-a {
            font-size: 14px;
            font-weight: 500;
           
            color: #fff;
        }
        .md-custom-btn:active-a {
            background-color: #3b371e;
        }
        .md-btn-width-a {
            width: 140px;
        }
        .x-small-btn-a {
            width: 110px;
        }
        .x-small-btn-b {
            min-width: 150px;
            top: 25px;
        }
        .md-btn-width-b {
            width: 110px;
        }
    }
</style>