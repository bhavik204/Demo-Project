<template>
    <div class="lead-card-wrapper shadow">
        <div class="nx-flex-row">
            <div class="box flex-box-size-01">
                <div class="nx-flex-column">
                    <div>
                        <div class="nx-flex-row nx-flex-direction-change">
                            <div class="box">
                                <text class="text bold-text">Shruti Shrivastava</text>
                            </div>
                            <div class="box">
                                <text class="text">BRSMCU023</text>
                            </div>
                            <div class="box flex-box-size-01 ">
                                <text class="text">Increasing Income (MGB)</text>
                            </div>
                            <div class="box flex-size-0-5">
                                <text class="text bold-text color-green">Open</text>
                            </div>
                        </div>
                    </div>
                    <div class="center-bottom-border ">
                        
                    </div>
                
                    <div class="box nx-flex-row nx-flex-flow-wrap nx-flex-wrap">
                        <div class="box col-1">
                            <text class="label-font-size">Date of Allocation</text>
                            <text class="text ">28/10/2015</text>
                        </div>
                        <div class="box col-1">
                            <text class="label-font-size">Date of Appointment</text>
                            <text class="text ">30/10/2015</text>
                        </div>
                        <div class="box col-2">
                            <text class="label-font-size">Address</text>
                            <text class="text">2C/203, Rock Castel road, Jubilee Hills</text>
                        </div>
                        <div class="box col-1 ">
                            <text class="label-font-size">Mobile No.</text>
                            <text class="text ">8106361732</text>
                        </div>
                        <div class="box col-1">
                            <text class="label-font-size">Allocated by</text>
                            <text class="text">Tony Pinto</text>
                        </div>
                        <div class="box col-1">
                            <!-- button -->
                            <div class="custom-btn btn-width">
                                <text class="text text-keep-center text-color-white cursor-pointer-globle">NEXT</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
        <div class="card-icon">
            <image class="icon-size cursor-pointer-globle" src="https://www.materialui.co/materialIcons/action/list_black_96x96.png"></image>
        </div>
    </div>
</template>

<style>

    .lead-card-wrapper {
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 3px;
    }
         
    .box {
        padding-top: 10px;
        padding-bottom:10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .text {
        font-size: 24px;
    }

    .label-font-size {
        font-size: 22px;
        font-weight: 400;
        color: #9d9d9d;
    }

    .bold-text {
        font-weight: bold;
    }

    .lead-card-wrapper {
        margin-left:0px;
        margin-right: 0px;
    }

    .text-color-white {
        color: #ffffff;
    }
    
    .text-keep-center {
        text-align: center;
    }
    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }

    .nx-flex-wrap {
        flex-wrap: wrap;
    }

    .nx-flex-row {
        flex-direction: row;
    }

    .nx-flex-column {
        flex-direction: column;
    }

    .nx-flex-direction-change {
        flex-direction: column;
    }

    .flex-size-0-5 {
        flex: 0.1;
    }
    .flex-box-size-01 {
        flex: 1;
    }
    .flex-box-size-02 {
        flex: 2;
    }
    .flex-box-size-03 {
        flex: 3;
    }
    .flex-box-size-04 {
        flex: 4;
    }
    .flex-box-size-05 {
        flex: 5;
    }
    .flex-box-size-06 {
        flex: 6;
    }

    .center-bottom-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #ffffff;
        border-bottom-color: #e8e8e8;
    }

    .color-green {
        color: #77A543;
    }

    .col-1 {
        width: 320px;
    }

    /* .col-2 {
            width: 100%;
    } */

    .custom-btn {
        padding: 15px;
        background-color: #1867c0;
        border-radius: 7px;
        /* width: 140px; */
    }

    .btn-width {
        width: 200px;
    }

    .card-icon {
        position: absolute;
        right: 10px;
        top: 5px;
        /* background-color: burlywood; */
    }

    .icon-size {
        height: 50px;
        width: 50px;
    }
    @media (min-width: 320px) {

        
         
        .box {
            padding-top: 5px;
            padding-bottom:5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .custom-btn {
            padding: 6px;
            background-color: #1867c0;
            border-radius: 1px;
            /* width: 140px; */
        }

        .btn-width {
            width: 80px;
        }

        .card-icon {
            position: absolute;
            right: 10px;
            top: 5px;
        }

        .text {
            font-size: 14px;
        }

        .icon-size {
            height: 30px;
            width: 30px;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

        .col-1 {
            width: 50%;
        }

        .col-2 {
            width: 100%;
        }

        .label-font-size {
            font-size: 12px;
            font-weight: 400;
            color: #9d9d9d;
        }
    }

    @media (min-width: 768px) {
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .col-1 {
            width: 30%;
        }

        .col-2 {
            width: 25%;
        }  

        .flex-size-0-5 {
            flex: 0.2;
        }
    }

    @media (min-width: 992px) {
        
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .col-1 {
            width: 15%;
        }

        .col-2 {
            width: 25%;
        }    

        .flex-size-0-5 {
            flex: 0.1;
        }  
    }
    
</style>


