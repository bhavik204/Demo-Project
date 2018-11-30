<template>
    <div>
        <text class="vx-option-box-label">{{vxLabel}}</text>
        <select class="vx-option-box">
            <option v-for="(option, index) in optionList" :key="index">{{ option }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            vxDataList: Array,
            vxLabel: String
        }
    }
</script>

<style>
    .vx-option-box {
        padding: 5px;
        font-size: 14px;
        width: 100%;
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #999999;
    }
    .vx-option-box:focus {
        border-width: 2px;
        border-bottom-color: #3a3a3a;
    }
    .vx-option-box-label {
        font-size: 14px;
        color: #999999;
    }
</style>
