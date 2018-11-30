<template>
    <div class="card-wrap">
        <text class="text-size">{{errCode}}</text>
    </div>
</template>

<script>
export default {
    props:{
        errCode: String
    },
}
</script>

<style>
    .card-wrap{
        margin: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
    }
    .text-size{
        font-size: 26px;
    }

    @media screen and (min-width:320px) {
        .card-wrap{
        border:none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
        }
         .text-size{
        font-size: 14px;
    }
    }
    @media screen and (min-width:768px) {
        .card-wrap{
        margin:10px;
        }
         .text-size{
        font-size: 14px;
    }
    }
    @media screen and (min-width:992px) {
        
    }
</style>
