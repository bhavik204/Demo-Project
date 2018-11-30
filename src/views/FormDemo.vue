<template>
    <div class="box">
        <div class="tab-flex-row">
            <div class="box" style="flex:1">
                <wx-select-box :listItems="list"></wx-select-box>
            </div>
            <div class="box" style="flex:1">
                <wx-select-box :listItems="list"></wx-select-box>
            </div>
        </div>

    </div>
</template>


<script>
    import wxSelectBox from '../components/wx-select-box.vue'
    export default {
        data: () => {
            return {
                list: [
                    "Gopal",
                    "Abhishek",
                    "Sudeep",
                    "Pankaj",
                    "Usama",
                    "Ranjit",
                    "Apple",
                    "Mangoes",
                    "Gopal",
                    "Abhishek",
                    "Sudeep",
                    "Pankaj",
                    "Usama",
                    "Ranjit",
                    "Apple",
                    "Mangoes",
                    "Gopal",
                    "Abhishek",
                    "Sudeep",
                    "Pankaj",
                    "Usama",
                    "Ranjit",
                    "Apple",
                    "Mangoes",
                    "Gopal",
                    "Abhishek",
                    "Sudeep",
                    "Pankaj",
                    "Usama",
                    "Ranjit",
                    "Apple",
                    "Mangoes"
                ]
            }
        },
        components: {
            wxSelectBox
        }
    }
</script>



<style scoped>
    .box {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .tab-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }

     /* .wxs-box {
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
    }
    
    .wxs-card {
        margin-left: 10px;
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        background-color: #ffffff;
    }
    
    .wxs-flex-col {
        flex-direction: column;
    }
    
    .wxs-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .wxs-input {
        margin-top: 20px;
        font-size: 27px;
        padding: 10px;
        color: #666666;
        border-width: 2px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #000;
        width: 330px;
    }
    
    .wxs-input-box {
        width: 400;
    }
    
    .wxs-input:focus {
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #fff;
    }
    
    .wxs-shadow {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
    }
    
    .wxs-list {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #cccccc;
    }
    
    .wxs-list:active {
        background-color: #eaeaea;
    }
    
    .text {
        font-size: 25px;
    }

    .select-box-border {
        border-width: 2px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #cccccc;
    } */

</style>
