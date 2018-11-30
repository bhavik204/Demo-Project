<template>
<div>
    <div v-if="showErrorText === true">
           <text class="vx-err-font">{{errorText}}</text>
       </div>
</div>
    
</template>
<script>
export default {

    props:{
        hasRequested:{
            type:Boolean,
            default:false
        }, 
         message: {
                type: String,
                default: 'This field is required'
            },  
         },
         data(){
             return{
                    showErrorText:true,
                    errorText:'6thtrytryrddgdgdgd',
             }
             
         }
    
}
</script>
<style>
        .vx-err-font {
       font-size: 20px;
       /* padding-top: 10px; */
       color: #9d9d9d;
       font-family: robotoregular;
    }

    @media screen and (min-width:320px){
    .vx-err-font {
           font-size: 10px;
           padding-top: 0px;
           color: #fa0909;
           font-family: robotoregular;
       }    
    }
        

</style>


