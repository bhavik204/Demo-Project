<template>
    <div class="lead-card-wrapper shadow">
        <div class="nx-flex-row">
            <div class="box flex-box-size-01">
                <div class="nx-flex-column">
                    <div class="box">
                        <div class="nx-flex-row nx-flex-direction-change">
                            <div class="box-margin-btm contnt-mrgn-right">
                                <text class="text bold-text">Shahu Patll</text>
                            </div>
                            <div class="box-margin-btm contnt-mrgn-right">
                                <text class="text">BRSMCU155</text>
                            </div>
                            <div class="flex-box-size-01 box-margin-btm">
                                <text class="text">Endowment Plan (MGB)</text>
                            </div>
                            <div class="flex-size-0-5 box-margin-btm">
                                <text class="text bold-text color-green text-shift-center">Submitted</text>
                            </div>
                        </div>
                    </div>
                    <div class="center-bottom-border">
                        
                    </div>
                
                    <div class="box nx-flex-row nx-flex-flow-wrap nx-flex-wrap">
                        <div class="box col-1 box-margin-btm">
                            <text class="label-font-size">Application No.</text>
                            <text class="text ">0012TRA123</text>
                        </div>
                        <div class="box col-1 box-margin-btm">
                            <text class="label-font-size">CFR Type</text>
                            <text class="text ">Savings (Par)</text>
                        </div>

                        <div class="box col-1 box-margin-btm">
                            <text class="label-font-size">Recieved Premium</text>
                            <text class="text ">₹ 18,004</text>
                        </div>

                        <div class="box col-1 box-margin-btm">
                            <text class="label-font-size">Date</text>
                            <text class="text">01/02/2016</text>
                        </div>
                        <div class="box col-1 box-margin-btm">
                            <text class="label-font-size">Deadline</text>
                            <text class="text ">12/03/2016</text>
                        </div>
                        
                        <div class="box col-1 box-margin-btm">
                            <!-- button -->
                            <div class="custom-btn btn-width">
                                <text class="text text-keep-center text-color-white">RESUME</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
    </div>
</template>

<style>
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
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
        font-family:robotoregular;
    }

    .label-font-size {
        font-size: 22px;
        font-weight: 400;
        color: #9d9d9d;
        font-family:robotoregular;
    }

    .bold-text {
        font-weight: bold;
        font-family:robotoregular;
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

    .text-shift-center {
        text-align:left;
    }

    .box-margin-btm {
        margin-top: 10px;
        margin-bottom: 10px;
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
        .text {
            font-size: 14px;
            font-family:robotoregular;
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
            font-family:robotoregular;
        }

        .box-margin-btm {
            margin-top: 5px;
            margin-bottom: 5px;
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
            flex: 0.5;
        }

        .text-shift-center {
            text-align: right;
        }

        .contnt-mrgn-right {
            margin-right: 10px; 
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
            width: 15%;
        }    
        .flex-size-0-5 {
            flex: 0.2;
        }  
    }
    
</style>


