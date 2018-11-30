<template>

    <!-- Please do not change any exisitng class becouse all classes used in another file 
    exisitng Lead form  -->
    <div class="my-com-outer-margin">
        <!-- Table row -->
        <scroller  scroll-direction="horizontal" class="my-com-table-scroller ">
            <div class="my-com-table-column my-com-table-flex-wrap my-com-table-container">

                <!-- Row -->
                <div class="my-com-table-scroller m-c-tb-bdr m-c-tb-btm-bdr my-compo-tb-hdr-color">
                    <div class="my-com-table-cont my-com-table-col-1">
                        <!-- Empty field -->
                    </div>
                    <div class="my-com-table-cont my-com-table-col-2 ">
                        <text class="my-com-table-title my-com-content-align">Renewals</text>
                    </div>
                    <div class="my-com-table-cont my-com-table-col-2">
                        <text class="my-com-table-title my-com-content-align">New Business</text>
                    </div>
                    <div class="my-com-table-cont my-com-col-4">
                        <text class="my-com-table-title my-com-content-align">Totals</text>
                    </div>
                    
                </div>
                <div class="my-com-table-scroller m-c-tb-bdr m-c-tb-btm-bdr">
                    <div class="my-com-table-cont my-com-table-col-1 ">
                        <!-- Empty field -->
                    </div>
                    <div class="">
                        <div class="my-com-table-scroller">
                            <div class="my-com-table-cont my-com-table-col-3 ">
                                <text class="my-com-table-title ">Perload 1</text>
                            </div>
                            <div class="my-com-table-cont my-com-table-col-3">
                                <text class="my-com-table-title ">Perload 2</text>
                            </div>
                        </div>
                    </div>
                    <div class="my-com-table-cont ">
                        <div class="my-com-table-scroller">
                            <div class="my-com-table-col-3">
                                <text class="my-com-table-title ">Perload 1</text>
                            </div>
                            <div class="my-com-table-col-3">
                                <text class="my-com-table-title">Perload 2</text>
                            </div>
                        </div>
                    </div>
                    <div class="my-com-table-cont my-com-col-4"></div>
                    
                </div>
                <div class="my-com-table-scroller m-c-tb-bdr m-c-tb-btm-bdr">
                    <div class="my-com-table-cont my-com-table-col-1">
                        <!-- Empty field -->
                        <text class="my-com-table-data">Premium Collected (in Rs.)</text>
                    </div>
                    <div class="my-com-table-cont">
                        <div class="my-com-table-scroller">
                            <div class="my-com-table-col-3">
                                <text class="my-com-table-data">18000</text>
                            </div>
                            <div class="my-com-table-col-3">
                                <text class="my-com-table-data">18000</text>
                            </div>
                        </div>
                    </div>
                    <div class="my-com-table-cont">
                        <div class="my-com-table-scroller">
                            <div class="my-com-table-col-3">
                                <text class="my-com-table-data">175000</text>
                            </div>
                            <div class="my-com-table-col-3">
                                <text class="my-com-table-data">165000</text>
                            </div>
                        </div>
                    </div>
                    <div class="my-com-table-cont my-com-col-4 m-c-tb-rght-bdr ">
                        <text class="my-com-table-data">265000</text>
                    </div>
                    
                </div>

            </div>
        </scroller>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style>
    .my-com-table-column {
        flex-direction: column;
    }
    .my-com-table-flex-wrap {
        flex-wrap: wrap;
    }
    .my-com-table-scroller {
        flex-direction: row;
    }
    .my-com-table-title {
        font-size: 25px;
        font-weight: bold;
    }
    .my-com-table-cont {
        padding: 10px;
    }
    .my-com-content-align {
        text-align: center;
    }

    /* Table boeders */
    .m-c-tb-bdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #FFF;
    }
    .m-c-tb-lft-bdr {
        border-left-color: rgb(232, 232, 232);;
    }
    .m-c-tb-rght-bdr {
        border-right-color: rgb(232, 232, 232);;
    }
    .m-c-tb-top-bdr {
        border-top-color: rgb(232, 232, 232);;
    }
    .m-c-tb-btm-bdr {
        border-bottom-color: rgb(232, 232, 232);;
    }

    .my-com-table-container {
        width: 1120px;
    }

    /* Table columns width */
    /* Column width */
    .my-com-table-col-1 {
        width: 360px;
        /* background-color: blueviolet; */
    }
    .my-com-table-col-2 {
        width: 300px;
    }
    .my-com-table-col-3 {
        width: 150px;
    }
    .my-com-col-4 {
        width: 120px;
    }
    .my-com-table-data {
        font-size: 24px;
    }
    .my-compo-tb-hdr-color {
        background-color: rgb(223, 223, 223);
    }
    @media screen and (min-width: 320px){
        .my-com-table-title {
            font-size: 14px;
        }
        .my-com-table-data {
            font-size: 14px;
        }
        .my-com-table-cont {
            padding: 5px;
        }

        .my-com-table-container {
            width: 750px;
        }

        /* Column width */
        .my-com-table-col-1 {
            width: 250px;
            /* background-color: blueviolet; */
        }
        .my-com-table-col-2 {
            width: 200px;
        }
        .my-com-table-col-3 {
            width: 94px;
        }
        .my-com-col-4 {
            width: 80px;
        }
        .my-com-outer-margin {
            margin: 15px;
        }       

    }
    @media screen and (min-width: 992px){
        
    }
</style>

