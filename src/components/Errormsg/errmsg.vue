<template>
    <div>
    <text class="form-title">{{message}}</text>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        message:{
            type:String,
            default:'Error'
        }
    }
}
</script>

<style>
    .robotoregular {
        font-family: robotoregular;
    }
  .form-title {  
        font-size: 20px;
        /* padding-top: 10px; */
        color: #9d9d9d;
        font-family: robotoregular;
    }
        @media only screen and (min-width: 320px)  {
            .form-title {
            font-size: 10px;
            padding-top: 0px;
            color:red;
            font-family: robotoregular;
        }
        }

</style>


