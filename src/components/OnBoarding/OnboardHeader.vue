<template>
    
        <div class="card-head prop-card hide-side-tab"  >
                <div  v-for="(tab,id) in advData" :key="id" class="head-row" :style="{backgroundColor:tab.bgcolor,flexDirection:'row'}" @click.native="onData(id)" >
                    <div>
                            <image class="cal-icn" :src="tab.image"
                            alt="notify"></image>
                    </div>
                        <div class="tab-content" >  <text class="sub-card-heading">{{tab.Title}}</text></div>
               
                     </div>
                <!-- <div  class="head-row"  style="flex-direction:row" @click.native="jump('/masteronboard/advisordetails/onbpersonal')">
                    <div>
                            <image class="cal-icn" src="../../../web/assets/Personaldetails_blk.png"
                            alt="notify"></image>
                    </div>
                  <div   class="tab-content">  <text class="sub-card-heading">Personal Details</text></div>
         
               </div>
               <div class="head-row" style="flex-direction:row" @click.native="jump('/masteronboard/advisordetails/edubckg')">
                <div>
                        <image class="cal-icn" src="../../../web/assets/educationalbackground.png"
                        alt="notify"></image>
                </div>
                <div   class="tab-content">   <text class="sub-card-heading">Education Background</text></div>
                   </div>
                   <div class="head-row"  style="flex-direction:row" @click.native="jump('/masteronboard/advisordetails/empbckg')">
                    <div>
                            <image class="cal-icn" src="../../../web/assets/employeebackground.png"
                            alt="notify"></image>
                    </div>
                    <div   class="tab-content">    <text class="sub-card-heading">Employment Background</text></div>
                       </div>
                       <div class="head-row"  style="flex-direction:row" @click.native="jump('/masteronboard/advisordetails/references')">
                        <div>
                                <image class="cal-icn" src="../../../web/assets/References.png"
                                alt="notify"></image>
                        </div> 
                        <div   class="tab-content">    <text class="sub-card-heading">References</text></div>
                           </div>
                           <div class="head-row"  style="flex-direction:row" @click.native="jump('/masteronboard/advisordetails/qscore')" >
                            <div>
                                    <image class="cal-icn" src="../../../web/assets/Questionairee.png"
                                    alt="notify"></image>
                            </div>
                            <div   class="tab-content">     <text class="sub-card-heading">Q Score Questionnaire</text></div>
                               </div>
                               <div class="head-row"  style="flex-direction:row" @click.native="jump('/masteronboard/advisordetails/prerecruit')">
                                <div>
                                        <image class="cal-icn" src="../../../web/assets/Prerecuritment.png"
                                        alt="notify"></image>
                                </div>
                                <div   class="tab-content">       <text class="sub-card-heading">Pre-recruitment details</text></div>
                                   </div> -->
                                
            
                   

            </div> 
</template>

<script>
      const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
export default{ 
    components:{},
    created(){

    },
data(){
    return{
         advData:[
             {
                bgcolor:'',
                 Title:'Official Details',
                 image:'../../../web/assets/Officiadetails.png',
                 link:'/masteronboard/advisordetails/official',
                 whiteIcon:'../../../web/assets/officialdetails_white.png'
             },
             {
                bgcolor:'',
                 Title:'Personal Details',
                 image:'../../../web/assets/Personaldetails_blk.png',
                 link:'/masteronboard/advisordetails/onbpersonal',
                 whiteIcon:'../../../web/assets/Personaldetails_white.png',
             },
             {
                 Title:'Education Background',
                 image:'../../../web/assets/educationalbackground.png',
                 link:'/masteronboard/advisordetails/edubckg'
             },
             {
                 Title:'Employment Background',
                 image:'../../../web/assets/employeebackground.png',
                 link:'/masteronboard/advisordetails/empbckg'
             },
             {
                 Title:'References',
                 image:'../../../web/assets/References.png',
                 link:'/masteronboard/advisordetails/references'
             },
             {
                 Title:'Q Score Questionnaire',
                 image:'../../../web/assets/Questionairee.png',
                 link:'/masteronboard/advisordetails/qscore'
             },
             {
                 Title:'Pre-recruitment details',
                 image:'../../../web/assets/Prerecuritment.png',
                 link:'/masteronboard/advisordetails/prerecruit'
             },
         ]
    }
},

    methods:{
        onData(ind){
            console.log(ind)
            var me =this;
            switch (ind) {

                case 0:
                
        for(let i=0 ; i < this.advData.length; i++) {
            if(i == 0) {
               
                // this.advData[i].active = true;
                // this.advData[i].backgroundColor = '#fff';
                // this.advData[i].borderBottomWidth= '5px';
                // this.advData[i].bgcolor = '#3d3bee'
                // this.advData[i].image= this.advData[i].whiteIcon;
       
                me.$router.push(this.advData[i].link);
              
                
            }
            else{
                // this.advData[i].image= this.advData[i].image;
                // this.advData[i].bgcolor = '#fff'
            }
            }
            break;
            case 1:
                
                for(let i=0 ; i < this.advData.length; i++) {
                    if(i == 1) {
                       
                        // this.advData[i].active = true;
                        // this.advData[i].backgroundColor = '#fff';
                        // this.advData[i].borderBottomWidth= '5px';
                        // this.advData[i].borderBottomColor= '#3b371e';
                        // this.advData[i].bgcolor = '#3d3bee'
                        // this.advData[i].image= this.advData[i].whiteIcon;
                        me.$router.push(this.advData[i].link);
                      
                        
                    }
                    else{
                //         this.advData[i].bgcolor = '#fff'
                // this.advData[i].image= this.advData[i].image;
            
            }
                    }
                    break;
                    case 2:
                
                for(let i=0 ; i < this.advData.length; i++) {
                    if(i == 2) {
                       
                        // this.advData[i].active = true;
                        // this.advData[i].backgroundColor = '#fff';
                        // this.advData[i].borderBottomWidth= '5px';
                        // this.advData[i].borderBottomColor= '#3b371e';
                        me.$router.push(this.advData[i].link);
                      
                        
                    }
                    }
                    break;
                    case 3:
                
                for(let i=0 ; i < this.advData.length; i++) {
                    if(i == 3) {
                       
                        // this.advData[i].active = true;
                        // this.advData[i].backgroundColor = '#fff';
                        // this.advData[i].borderBottomWidth= '5px';
                        // this.advData[i].borderBottomColor= '#3b371e';
                        me.$router.push(this.advData[i].link);
                      
                        
                    }
                    }
                    break;
                    case 4:
                
                for(let i=0 ; i < this.advData.length; i++) {
                    if(i == 4) {
                       
                        // this.advData[i].active = true;
                        // this.advData[i].backgroundColor = '#fff';
                        // this.advData[i].borderBottomWidth= '5px';
                        // this.advData[i].borderBottomColor= '#3b371e';
                        me.$router.push(this.advData[i].link);
                      
                        
                    }
                    }
                    break;
                    case 5:
                
                for(let i=0 ; i < this.advData.length; i++) {
                    if(i == 5) {
                       
                        // this.advData[i].active = true;
                        // this.advData[i].backgroundColor = '#fff';
                        // this.advData[i].borderBottomWidth= '5px';
                        // this.advData[i].borderBottomColor= '#3b371e';
                        me.$router.push(this.advData[i].link);
                      
                        
                    }
                    }
                    break;
                    case 6:
                
                for(let i=0 ; i < this.advData.length; i++) {
                    if(i == 6) {
                       
                        // this.advData[i].active = true;
                        // this.advData[i].backgroundColor = '#fff';
                        // this.advData[i].borderBottomWidth= '5px';
                        // this.advData[i].borderBottomColor= '#3b371e';
                        me.$router.push(this.advData[i].link);
                      
                        
                    }
                    }
                    break; 
                    default:
        // execute default code block
}
        },
    },
 

}
</script>
<style >
.head-row{
justify-content: start;
padding:10px;

/* border-width: 1px;
    border-top: none;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #ebebeb; */
}
.tab-content{
    justify-content: center;
    margin-left: 10px;
    }
.head-row1{

padding:10px;
justify-content: start;
}
.sub-card-heading {
    
    font-size: 13px;
    color:#565656;
    text-align: left;
    }
.card-heading{
    font-size: 13px;
    color: #3b371e;
    font-weight:bold;
}
.prop-card{
    height:477px;
}
.card-head {
      
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        /* border-radius: 5px; */
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    }
    .cal-icn{
        height:30px;
        width:30px;
    }
    @media only screen and (min-width: 320px) {
        .hide-side-tab{
                display:none; 
             }

      }
    @media only screen and (min-width: 768px) {
        .hide-side-tab{
                display:block; 
             }

      }
</style>