<template>
     <div class="lead-card-wrapper shadow">
        <div class="blank-card-title"> <text class="card-message">{{message}}</text></div>
     </div>
</template>

<script>
export default {
    props:{
        message:{
        type:String,
        default:'No Data'
        }
    }
}
</script>

<style>
   .lead-card-wrapper {
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
          margin-left:0px;
        margin-right: 0px;
    }
      .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .blank-card-title{
            flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 160px
        }
        .card-message{
            text-align: center;
            color:#d9d9d9;
        }
   @media (min-width: 320px) {
        .lead-card-wrapper {
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 3px;
        }
          .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
   }

</style>


