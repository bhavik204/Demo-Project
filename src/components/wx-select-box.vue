<template>
     <div class="drop-down">
       
        <text class="text select-box mouse-pointer" @click.native="dropList = !dropList">{{selected}}</text>
        
        <div v-if="dropList == true" class="drop-item-list shadow">
            <div v-for="(list, li) in listItems" :key="li">
                <div class="list-item-padding " @click.native="pickItems(li)">
                    <text class="text mouse-pointer">{{list}}</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                dropList: false,
                listItems: ["Item 1", "Item 2", "Item 3", "Item 5"],
                selected: 'Select Items'
            }
        },
        
        methods: {
            pickItems(key) {
                this.dropList = !this.dropList;
                this.selected = this.listItems[key];
            }
        }

    }
</script>

<style>
    @media (min-width: 1281px) {
        .drop-down {
            position: relative;

        }

        .drop-item-list {
            position: absolute;
            top: 30px;
            left: 0;
            /* width: 100%; */
        }

        .list-item-padding {
            padding-top:10px;
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px; 
        }

        .text {
            font-size: 14px;
        }

        .select-box {
            padding-top:8px;
            padding-bottom: 8px;
            padding-left: 5px;
            padding-right: 5px; 
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

        .mouse-pointer {
            cursor: pointer;
        }

        .list-item-padding:active {
            background-color: #b7b7b7;
        }

        .list-item-padding:hover {
            background-color: #f2f2f2;
        } 
        
    }


/* css from page  */
    .scroller {
        width: 1200px;
    }

    .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:80px;
    }
    
    .percent-margin {
        margin-left:10px;
        margin-right: 10px;
    }
    
    .flex-row-to-column-360 {
        flex-direction: column;
    }
    
    .tab-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .tab-font-size {
        font-size: 50px;
    }
    .tab-text-font-size {
        font-size: 32px;
      }
    
    .tab-box-padding {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px; 
        margin-right: 40px;
    }
    
    .list {
        background-color: #e7e7e7;
        padding-top: 20px;
        padding-right: 20px;
        padding-left: 20px;
    }
    
    .u3-x-margin-btm {
        margin-bottom: 10px;
    }
    
    .card {
        background-color: #ffffff;
        border-radius: 5px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
    }
    
    .x-top-margin {
        margin-top: 10px;
    }
    
    .link-color {
        color: blue;
    }
    
    .flex-row {
        flex-direction: column;
        flex-wrap: wrap;
    }
    /* For APK */
    
    .nx-flex-column {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .nx-flex-bt-marg {
        margin-bottom: 20px;
    }
    
    .justi {
        justify-content: center;
    }
    
    .item-alignment {
        align-items: center;
    }
    
    .flex-direction-change {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .flex-column {
        flex-direction: column;
    }
    
    .flex-nowraping {
        flex-wrap: nowrap;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .shadow {
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    }
    
    .box {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }
    
    .u3-top-margin-col {
        margin-top: 10px;
    }
    
    .C {
        flex: 1
    }
    /*.flex-2 {*/
    /*  flex:2;*/
    /*}*/
    
    .text {
        font-size: 25px;
    }
    
    .label-text-color {
        color: #9b9999;
    }
    
    .bold-text {
        font-weight: bold;
    }
    
    .g-back-color {
        background-color: rgb(82, 160, 47);
    }
    
    .b-back-color {
        background-color: rgb(38, 96, 172);
    }
    
    .r-back-color {
        background-color: rgb(252, 145, 198);
    }
    
    .icon {
        width: 25px;
        height: 25px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }
    /*This class is used to positioning the element "in force and icon"*/
    
    .positioning {
        position: absolute;
        left: 550px;
        top: 0;
    }

    /* Side Card APK Classes */
    .nx-flex-row {
        flex-direction: row;
    }
    
     .circle {
        width: 120px;
        height: 120px;
        background-color: #ed6015;
        /*background-color: #000;*/
        border-radius: 70px;
    }
    
    .name-text-size {
        font-size: 35px;
    }
    
    .x-panel {
        background-color: #f9f9f9;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .flex-2 {
        flex: 2;
    }
    
    .flex-3 {
        flex: 3;
    }
    
    .flex-4 {
        flex: 4;
    }
    
    .flex-5 {
        flex: 5;
    }
    
    .flex-6 {
        flex: 6;
    }
    
    .flex-7 {
        flex: 7;
    }
    
    .icon-list {
        width: 30px;
        height: 30px;
    }
    
    .flex-space-between {
        justify-content: space-between;
    }
    
    .flex-list-btn-pad {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        /*height:80px;*/
    }
    
    .circle-text {
        position: absolute;
        top: 33px;
        left: 28px;
        font-size: 50px;
        font-weight: bold;
        color: #fff;
    }

    .extra-padding {
        padding-top:20px;
        padding-bottom:20px;
        padding-left:5px;
    }
    
    .wxc-inputBox {
        width: 350px;
        /*margin-top: 250px;*/
        /*margin-left: 10px;*/
        font-size: 24px;
        padding: 10px;
        color: #666666;
        border-width: 1px;
        border-style: solid;
        border-color: #41B883;
    }
    
    .wxc-inputBox-width {
       width: 720px;
    }


    /* High Resolution Laptops and Desktops */
    @media (min-width: 1281px) {
        .outer-flex-col {
            flex-direction: column;
        }

        .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:50px;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .percent-margin {
            margin-left:10%;
            margin-right: 10%;
        }
        
        .tab-font-size {
            font-size: 50px;
        }
        .tab-text-font-size {
            font-size: 16px;
        }
        .tab-box-padding {
            /* padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px; */
            margin-right: 40px;
        }
        .justi {
            justify-content: center;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: center;
        }

         .wxc-inputBox {
            height: 30px;
            width: 100%;
            padding: 0 10px;
            border: solid #d8d8d8;
            border-width: 1px;
            border-style: solid;
            font-size: 14px;
        } 
    

        .list {
            
            padding-top: 0px;
            padding-right: 0px;
            padding-left: 0px;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
            /* background-color: #dd1818; */
        }
        .scroller {
            display: none;
        }

        .drop-down {
            position: relative;

        }

        .drop-item-list {
            z-index: 4;
            width: 300px;
            background: beige;
            position: absolute;
            top: 30px;
            left: 0;
            /* width: 100%; */
        }

        .list-item-padding {
            padding-top:10px;
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px; 
        }

        .text {
            font-size: 14px;
        }

        .select-box {
            padding-top:8px;
            padding-bottom: 8px;
            padding-left: 5px;
            padding-right: 5px; 
        }

        .mouse-pointer {
            cursor: pointer;
        }

        .list-item-padding:active {
            background-color: #b7b7b7;
        }

        .list-item-padding:hover {
            background-color: #f2f2f2;
        } 

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
      
        .G {
            flex: 2;
        }
        .F {
            flex: 4;
        }
        
        /* This margin is used in browser only */
        .percent-margin {
            margin-left:10%;
            margin-right:10%;
        }
        .u3-top-margin-col {
            margin-top: 10px;
        }

        .small-left-margin-row {
            margin-left: 20px;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        /* Side Profile Card */
        .circle {
            width: 50px;
            height: 50px;
            background-color: #ed6015;
            /*background-color: #000;*/
            border-radius: 50px;
        }
        .name-text-size {
            font-size: 18px;
        }
        .circle-text {
            position: absolute;
            top: 25%;
            left: 18%;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            /* background: blue; */
        }
        .font-10px {
            font-size: 10px;
        }
        
    }

    @media (max-width: 1024px) {
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }
        /* This flex column is root and dose not change at diffrent view port */
        .outer-flex-col {
            flex-direction: column;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .tab-font-size {
            font-size: 50px;
        }
        .tab-text-font-size {
            font-size: 16px;
        }
        .tab-box-padding {
            /* padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px; */
            margin-right: 40px;
        }
        .justi {
            justify-content: center;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-row {
            flex-direction: column;
        }
        .list {
            
            padding-top: 0px;
            padding-right: 0px;
            padding-left: 0px;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .scroller {
            display: none;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
      
        .G {
            flex: 2;
        }
        .F {
            flex: 4;
        }
        
        /* This margin is used in browser only */
        .percent-margin {
            margin-left:15px;
            margin-right:15px;
        }
        .u3-top-margin-col {
            margin-top: 10px;
        }
        .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:50px;
        }

        .small-left-margin-row {
            margin-left: 15px;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        /* Side Profile Card */
        .circle {
            width: 50px;
            height: 50px;
            background-color: #ed6015;
            /*background-color: #000;*/
            border-radius: 50px;
        }
        .name-text-size {
            font-size: 18px;
        }
        .circle-text {
            position: absolute;
            top: 25%;
            left: 18%;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            /* background: blue; */
        }
        .font-10px {
            font-size: 10px;
        }

        .x-panel {
            /* background-color: #f9f9f9; */
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    
    @media (max-width: 768px) {
        .scroller {
            display: none;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .list {
            background-color: #e7e7e7;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        .G {
            flex: 2;
        }
        .F {
            flex: 4;
        }

        .sales-drive-header {
            background-color: #3b371e; 
            color:#fff;
            height:50px;
        }
        
    }
    
    @media (max-width: 480px) {
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .scroller {
            display: none;
        }
        .text {
            font-size: 14px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
    }
    
    @media (max-width: 640px) {
        .item-alignment {
            align-items: center;
        }
        .card {
            background-color: #ffffff;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .text {
            font-size: 14px;
        }
        .G {
            flex: 1;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .scroller {
            display: none;
        }
    }
    
    @media (max-width: 360px) {
        .scroller {
            overflow: auto;
        }
        .flex-row {
            flex-direction: column;
        }
        .item-alignment {
            align-items: left;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: nowrap;
            /* flex-wrap: wrap; */
        }
        .flex-row-content-hidden {
            overflow: scroll;
            /* background-color: green; */
        }
        .list {
            background-color: #e7e7e7;
            padding-top: 0px;
            padding-right: 0px;
            padding-left: 0px;
        }
        .card {
            background-color: #FFF;
            padding-top: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            border-radius: 2px;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .text {
            font-size: 14px;
        }
        .E {
            flex: 2;
        }
        .F {
            flex: 2;
        }
        .Z {
            flex: 3;
        }
        .X {
            flex: 2;
        }
        .icon {
            width: 15px;
            height: 15px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        /* Side Card */
         .circle {
            width: 50px;
            height: 50px;
            background-color: #ed6015;
            /*background-color: #000;*/
            border-radius: 50px;
        }
        .name-text-size {
            font-size: 18px;
        }
        .circle-text {
            position: absolute;
            top: 13px;
            left: 10px;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            /* background: blue; */
        }
        .btm-profile-padding {
            padding-bottom: 0px;
        }
        .box-update {
            padding-top: 0px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        .flex-list-btn-pad {
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 10px;
            padding-right: 3px;
            /*height:80px;*/
        }

        .flex-row-to-column-360 {
            flex-direction: column;
        }

        .nx-flex-column {
            flex-direction: column;
            flex-wrap: wrap;
        }

        .small-left-margin-row {
            margin-left: 0;
        }

        .percent-margin {
            margin-left:5px;
            margin-right:5px;
        }

        .nx-flex-row {
            flex-direction: row;
        }

        .text {
            font-size: 13px;
        }

    }
</style>


