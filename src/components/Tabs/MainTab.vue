<template>
    <div style="background-color: #f7f7f7;">
    <div  >
        <scroller v-if="platform !== 'Web'"  class="scroller-tab" scroll-direction="horizontal">
            <div class=" col1" >
                <div v-for="(tab,id) in tabs" :key ="id"  :style="{backgroundColor:tab.backgroundColor,padding:tab.padding,
                    borderBottomWidth:tab.borderBottomWidth,borderBottomcolor:tab.borderBottomColor}"   @click="tabular(id)">
                    <text class="heading-tab cursor-pointer-globle " >{{tab.Title}}</text>
                </div>
            </div>
        </scroller>
      
    </div>
    <div  v-if="platform === 'Web'" class="hide-tab-sm">
            <scroller class="scroller-tab"  scroll-direction="horizontal">
                <div class=" col1" >
                    <div v-for="(tab,id) in tabs" :key ="id"  :class="{'tab-row1':tab.inactive,'tab-row-selected':tab.active}"   @click.native="tabular(id)">
                        <text class="heading-tab cursor-pointer-globle " >{{tab.Title}}</text>
                    </div>
                </div>
            </scroller>
          
        </div>
        </div>
</template>

<script>
        const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
      if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      }
    },
 props:{
    tabs:{
        type:Array
    }
 },
        // props: {
        //     'header1': {
        //         type: String,
        //         default: 'Personal'
        //     },
        //     'header2': {
        //         type: String,
        //         default: 'Nominee'
        //     },
        //     'header3': {
        //         type: String,
        //         default: 'Family'
        //     },
        //     'header4': {
        //         type: String,
        //         default: 'Insurance'
        //     },
        //     'header5': {
        //         type: String,
        //         default: 'Medical'
        //     },
        //     'header6': {
        //         type: String,
        //         default: 'Lifestyle'
        //     },
        //     'header7': {
        //         type: String,
        //         default: 'Vernacular'
        //     },
        //     'header8': {
        //         type: String,
        //         default: 'Declaration'
        //     },
        //     'header9': {
        //         type: String,
        //         default: 'Report'
        //     },
        //     'header10': {
        //         type: String,
        //         default: 'Extra'
        //     },
        // },
        data(){
            return{
                deviceWidth: invalid,
                paltform: invalid,
                // inactive:true,
                // active:false,
            

                
     
            }
        },
        methods:{
            tabular(ind){
                var me = this;
                       console.log(ind)
                       switch (ind) {
    case 0:

        for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 0) {
               
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff';
                this.tabs[i].borderBottomWidth= '5px';
                this.tabs[i].borderBottomColor= '#3b371e';
                me.$router.push(this.tabs[i].link);
              
                
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = '';
            this.tabs[i].borderBottomWidth= '';
            this.tabs[i].borderBottomColor= '';
            }
        }
        break;
    case 1:

    for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 1) {
               
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff';
                this.tabs[i].borderBottomWidth= '5px';
                this.tabs[i].borderBottomColor= '#3b371e';
                // me.$router.push('/master/testpro/proposalnominee') ;
                me.$router.push(this.tabs[i].link);
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = ''
                this.tabs[i].borderBottomWidth= '',
                this.tabs[i].borderBottomColor= ''
            }
        }


  
        break;
        case 2:
        for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 2) {
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff'
                this.tabs[i].borderBottomWidth= '5px',
                this.tabs[i].borderBottomColor= '#3b371e',
                me.$router.push(this.tabs[i].link);
                // me.$router.push('/master/testpro/proposalfamily') 
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = ''
            this.tabs[i].borderBottomWidth= '',
            this.tabs[i].borderBottomColor= ''
            }
        }
     
        break;
        case 3:
        for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 3) {
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff'
                this.tabs[i].borderBottomWidth= '5px',
                this.tabs[i].borderBottomColor= '#3b371e',
                me.$router.push(this.tabs[i].link);
                // me.$router.push('/master/testpro/proposalinsurance') 
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = ''
            this.tabs[i].borderBottomWidth= '',
            this.tabs[i].borderBottomColor= ''
            }
        }
     
        break;
        case 4:
        for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 4) {
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff'
                this.tabs[i].borderBottomWidth= '5px',
                this.tabs[i].borderBottomColor= '#3b371e'
                me.$router.push(this.tabs[i].link);
                // me.$router.push('/master/testpro/proposalmedical')  
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = ''
            this.tabs[i].borderBottomWidth= '',
            this.tabs[i].borderBottomColor= ''
            }
        }
     
        break;
        case 5:
        for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 5) {
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff'
                this.tabs[i].borderBottomWidth= '5px',
                this.tabs[i].borderBottomColor= '#3b371e'
                me.$router.push(this.tabs[i].link);
                // me.$router.push('/master/testpro/proposalvernacular')  
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = ''
            this.tabs[i].borderBottomWidth= '',
            this.tabs[i].borderBottomColor= ''
            }
        }
     
        break;
        case 6:
        for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 6) {
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff'
                this.tabs[i].borderBottomWidth= '5px',
                this.tabs[i].borderBottomColor= '#3b371e'
                me.$router.push(this.tabs[i].link);
                // me.$router.push('/master/testpro/proposaldeclaration') 
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = ''
            this.tabs[i].borderBottomWidth= '',
            this.tabs[i].borderBottomColor= ''
            }
        }
     
        break;
        case 7:
        for(let i=0 ; i < this.tabs.length; i++) {
            if(i == 7) {
                this.tabs[i].active = true;
                this.tabs[i].backgroundColor = '#fff'
                this.tabs[i].borderBottomWidth= '5px',
                this.tabs[i].borderBottomColor= '#3b371e'
                me.$router.push(this.tabs[i].link);
                // me.$router.push('/master/testpro/proposalreport')  
            }
            else {
                this.tabs[i].active = false;
                this.tabs[i].backgroundColor = ''
            this.tabs[i].borderBottomWidth= '',
            this.tabs[i].borderBottomColor= ''
            }
        }
     
        break;
        // case 8:
        // for(let i=0 ; i < this.tabs.length; i++) {
        //     if(i == 8) {
        //         this.tabs[i].active = true;
        //         this.tabs[i].backgroundColor = '#fff'
        //         this.tabs[i].borderBottomWidth= '5px',
        //         this.tabs[i].borderBottomColor= '#3b371e'
        //         me.$router.push('/master/testpro/proposalreport')   
        //     }
        //     else {
        //         this.tabs[i].active = false;
        //         this.tabs[i].backgroundColor = ''
        //     this.tabs[i].borderBottomWidth= '',
        //     this.tabs[i].borderBottomColor= ''
        //     }
        // }
     
        break;
     
        break
    default:
        // execute default code block
}
                   }
        }
    }
</script>

<style>
    /* .col1 {
        flex-direction: row;
        margin-top: 25px;
    }
   

    .heading-tab {
        font-size: 25px;
     padding: 10px;
        font-weight: bold;

    }

    .spac-bet {
        margin-left: 5px;
        margin-right: 5px;
        padding-top: 19px; 
         } */
         .scroller-tab{
            flex-direction:row;
         }
         .col1{
             flex-direction:row;
             padding-bottom: 30px;
             padding-left: 10px
            
         }
         .heading-tab{
             font-size: 24px;
         }
         .tab-row1{
             padding: 10px;
         }
         .tab-row-selected{
            padding: 10px;
             background-color: #fff;
             border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 5px;
        border-bottom-color: #3b371e;
         }
         @media only screen and (min-width: 320px) {
            .heading-tab{
             font-size: 14px;
         }
         .tab-row1{
             padding: 10px;
         }
         .tab-row-selected{
            padding: 10px;
             background-color: #fff;
             border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 5px;
        border-bottom-color: #3b371e;
         }
  .hide-tab-sm{
      display: inline-block
  }


  }
  @media only screen and (min-width: 768px) {

  .hide-tab-sm{
      display: none;
  }
  }

    /* .select {
        background-color: white;
        width: 90px;
        margin-left: 18px;
        padding-top: 19px;
        padding-bottom: 10px;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 10px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    } */

    /* .selectbor {
        width: 100px;
    } */

    /*Media*/

    @media only screen and (min-width: 320px) {
        .col1{
             flex-direction:row;
             padding-bottom: 10px;
             padding-left: 10px
            
         }
        /* .heading {
            font-size: 15px;
            padding-top: 10px;
            font-weight: bold;

        }

        .select {
            background-color: white;
            width: 65px;
            margin-left: 18px;
            padding-top: 19px;
            padding-left: 8px;
            padding-bottom: 10px;
            border-style: solid;
            border-top-width: 1px;
            border-top-color: #fff;
            border-left-width: 1px;
            border-left-color: #fff;
            border-right-width: 1px;
            border-right-color: #fff;
            border-bottom-width: 2px;
            border-bottom-color: #3b371e;
            margin-bottom: 20px;
        }

        .selectbor {
            width: 65px;
        } */
    }
</style>