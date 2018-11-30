<template>
    
    <div class="card-head-prop prop-card hide-prop-header-sm"  >
            <div  v-for="(data,id) in tabData"  :key ="id" :style="{backgroundColor:data.color}"  class="head-row-prop" style="flex-direction:row" @click.native="tabSide(id)" >
                <div>
                        <image class="cal-icn-prop" :src="data.img"
                        alt="notify"></image>
                </div>
                    <div class="tab-content-prop"  >  <text class="sub-card-heading-prop" :style="{fontFamily:data.font}" >{{data.title}}</text></div>
           
                 </div>
            <!-- <div  class="head-row-prop"  style="flex-direction:row" @click.native="jump('/master/testpro/proposalpersonal')">
                <div>
                        <image class="cal-icn-prop" src="../../../web/assets/personaldetails1.png"
                        alt="notify"></image>
                </div>
              <div   class="tab-content-prop">  <text class="sub-card-heading-prop">Personal Details</text></div>
     
           </div> -->
           <!-- <div class="head-row-prop" style="flex-direction:row" @click.native="jump('/master/testpro/proposalnominee')">
            <div>
                    <image class="cal-icn-prop" src="../../../web/assets/nominee2.png"
                    alt="notify"></image>
            </div>
            <div   class="tab-content-prop">   <text class="sub-card-heading-prop">Nominee  Details</text></div>
               </div> -->
               <!-- <div class="head-row-prop"  style="flex-direction:row" @click.native="jump('/master/testpro/proposalfamily')">
                <div>
                        <image class="cal-icn-prop" src="../../../web/assets/familyhistory1.png"
                        alt="notify"></image>
                </div>
                <div   class="tab-content-prop">    <text class="sub-card-heading-prop">Family History</text></div>
                   </div> -->
                   <!-- <div class="head-row-prop"  style="flex-direction:row" @click.native="jump('/master/testpro/proposalinsurance')">
                    <div>
                            <image class="cal-icn-prop" src="../../../web/assets/lifeinsurance2.png"
                            alt="notify"></image>
                    </div>
                    <div   class="tab-content-prop">    <text class="sub-card-heading-prop">Life Insurance Details</text></div>
                       </div> -->
                       <!-- <div class="head-row-prop"  style="flex-direction:row" @click.native="jump('/master/testpro/proposalmedical')" >
                        <div>
                                <image class="cal-icn-prop" src="../../../web/assets/Lifestyle.png"
                                alt="notify"></image>
                        </div>
                        <div   class="tab-content-prop">     <text class="sub-card-heading-prop">Life Style & Medical</text></div>
                           </div> -->
                           <!-- <div class="head-row-prop"  style="flex-direction:row" @click.native="jump('/master/testpro/proposalvernacular')">
                            <div>
                                    <image class="cal-icn-prop" src="../../../web/assets/witness.png"
                                    alt="notify"></image>
                            </div>
                            <div   class="tab-content-prop">       <text class="sub-card-heading-prop">Vernacular Details</text></div>
                               </div> -->
                               <!-- <div class="head-row-prop"  style="flex-direction:row" @click.native="jump('/master/testpro/proposaldeclaration')">
                                <div>
                                        <image class="cal-icn-prop" src="../../../web/assets/Declarationsign.png"
                                        alt="notify"></image>
                                </div>
                                <div   class="tab-content-prop">    <text class="sub-card-heading-prop">Declaration & Signature</text></div>
                                   </div> -->
                                   <!-- <div class="head-row-prop1" style="flex-direction:row" @click.native="jump('/master/testpro/proposalreport')">
                                    <div>
                                            <image class="cal-icn-prop" src="../../../web/assets/confidential.png"
                                            alt="notify"></image>
                                    </div>
                                    <div   class="tab-content-prop"> <text class="sub-card-heading-prop">Confidential Report</text></div>
                                       </div> -->
                

        </div> 
</template>

<script>
  const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'
const imgSrc = "../../../web/assets/"
export default{
data(){
    return{
        tabData:[
                    {
                         title:'Proposal Personal',
                         img:imgSrc +'personaldetails1.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposalpersonal',
                         color:''
                     },
                     {
                         title:'Proposal Nominee',
                         img:imgSrc +'nominee2.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposalnominee',
                         color:''
                     },
                     {
                         title:'Proposal Family',
                         img:imgSrc +'familyhistory1.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposalfamily',
                         color:''
                     },
                     {
                         title:'Proposal Insurance',
                         img:imgSrc +'lifeinsurance2.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposalinsurance',
                         color:''
                     },
                     {
                         title:'Proposal Medical',
                         img:imgSrc +'Lifestyle.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposalmedical',
                         color:''
                     },
                     {
                         title:'Proposal Vernacular',
                         img:imgSrc +'witness.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposalvernacular',
                         color:''
                     },
                     {
                         title:'Proposal Declaration',
                         img:imgSrc +'Declarationsign.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposaldeclaration',
                         color:''
                     },
                     {
                         title:'Proposal Report',
                         img:imgSrc +'confidential.png',
                         color:'#fff',
                         font:'robotoregular',
                         link :'/master/testpro/proposalreport',
                         color:''
                     },

        ] 
    }
} ,   // created() {
//         if (typeof WXEnvironment === 'object') {

//             this.platform = WXEnvironment.platform || unknown
//             this.deviceWidth = WXEnvironment.deviceWidth || unknown
//               return this.deviceWidth
         
//         }
//     },

methods:{
    tabSide (ind){
        console.log(ind)
        var me = this;
                       console.log(ind)
                       switch (ind) {
    case 0:

        for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 0) {
               
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link);
              
                
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
            
            }
        }
        break;
    case 1:

    for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 1) {
               
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link);
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
            
            }
        }


  
        break;
        case 2:
        for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 2) {
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link) 
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
           
            }
        }
     
        break;
        case 3:
        for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 3) {
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link);
                // me.$router.push('/master/testpro/proposalinsurance') 
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
            }
        }
     
        break;
        case 4:
        for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 4) {
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link);
                // me.$router.push('/master/testpro/proposalmedical')  
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
            }
        }
     
        break;
        case 5:
        for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 5) {
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link);
                // me.$router.push('/master/testpro/proposalvernacular')  
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
            }
        }
     
        break;
        case 6:
        for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 6) {
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link);
                // me.$router.push('/master/testpro/proposaldeclaration') 
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
            }
        }
     
        break;
        case 7:
        for(let i=0 ; i < this.tabData.length; i++) {
            if(i == 7) {
                this.tabData[i].active = true;
                this.tabData[i].fontFamily = 'robotobold';
                this.tabData[i].color = '#fff';
                me.$router.push(this.tabData[i].link);
                // me.$router.push('/master/testpro/proposalreport')  
            }
            else {
                this.tabData[i].active = false;
                this.tabData[i].fontFamily = 'robotoregular';
                this.tabData[i].color = '';
            }
        }
     
        break;
        // case 8:
        // for(let i=0 ; i < this.tabData.length; i++) {
        //     if(i == 8) {
        //         this.tabData[i].active = true;
        //         this.tabData[i].backgroundColor = '#fff'
        //         this.tabData[i].borderBottomWidth= '5px',
        //         this.tabData[i].borderBottomColor= '#3b371e'
        //         me.$router.push('/master/testpro/proposalreport')   
        //     }
        //     else {
        //         this.tabData[i].active = false;
        //         this.tabData[i].backgroundColor = ''
        //     this.tabData[i].borderBottomWidth= '',
        //     this.tabData[i].borderBottomColor= ''
        //     }
        // }
     
        break;
     
        break
    default:
        // execute default code block
}
    },

    jump(to) {
        if (this.$router) {
            this.$router.push(to)
        }
    }
},


}
</script>
<style >
      .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotorbold;
    }
.head-row-prop{
justify-content: start;
padding:10px;
 font-family:robotoregular;

/* border-width: 1px;
border-top: none;
border-style: solid;
border-top-color: #fff;
border-right-color: #fff;
border-left-color: #fff;
border-bottom-color: #ebebeb; */
}
.tab-content-prop{
justify-content: center;
margin-left: 10px;
 font-family:robotoregular;
}
.head-row-prop1{

padding:10px;
justify-content: start;
 font-family:robotoregular;
}
.sub-card-heading-prop {
     font-family:robotoregular;
    font-size: 13px;
    color:#565656;
    text-align: left;
    }
.card-heading-prop{
    font-size: 13px;
    color: #3b371e;
    font-family: 'Roboto-bold', sans-serif;
}
.prop-card{

}
.card-head-prop {
  
    margin: 20px;
    margin-top: 20px;
    margin-bottom: 0px;
    background-color:transparent;
     font-family:robotoregular;
    /* background-color: #fff; */
    /* border-radius: 5px; */
    /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
}
.cal-icn-prop{
    height:30px;
    width:30px;
}
@media only screen and (min-width: 320px) {
   .hide-prop-header-sm{
    display: none;
}
/* .hide-tab-sm{
    display: inline-block
} */
}
@media only screen and (min-width: 768px) {
    .hide-prop-header-sm{
    display: block;
}
/* .hide-tab-sm{
    display: none;
} */
}
</style>