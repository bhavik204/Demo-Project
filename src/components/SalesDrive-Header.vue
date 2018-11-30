<template>
    <div>
        <div class="header-bar">
            <text class="header-title">{{headerName}}</text>
        </div>
    </div>

</template>

<script>
export default {
    props: [
        'headerName'
    ]
  
}
</script>

<style>

    .header-bar {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #3b371e;
        top: -1px;
        margin-bottom: 20px;
    }
    .header-title {
        font-size: 16px;
        color:white;
        font-weight: 600;
    }

</style>


