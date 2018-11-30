<template>
    <div>


        <div class="sync-div" style="flex:1" v-if="sync==true">
            <div class="card-sync">
                <div class="card-header" >
                    <div class="table-row" >
                        <div class="total" >
                            <div>
                                <text class="sub-heading">34</text>
                            </div>
                            <div>
                                <text class="heading">Total No Of Files</text>
                            </div>
                        </div>
                        <div class="total1" >
                            <div>
                                <text class="sub-heading">1.2 GB</text>
                            </div>
                            <div>
                                <text class="heading">Total Size of Files</text>
                            </div>
                        </div>
                        <div class="card-btn1" >
                            <text class="card-btn-text">Sync All</text>
                        </div>
                    </div>
                </div>
                <div class="card-content" >
                    <div class="table-row" v-for="data in Sync">
                        <div class="total" >
                            <div>
                                <text class="heading">{{data.Status}}</text>
                            </div>
                            <div>
                                <text class="heading">No. of Files: {{data.No}} | Size: {{data.Size}}</text>
                            </div>
                        </div>
                        <div class="card-btn1">
                            <text class="card-btn-text">Sync</text>
                        </div>

                    </div>


                </div>


                <div class="card-footer">
                    <div class="card-foot">
                        <text class="heading" style="color:blue;">View All</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .card-sync {

        z-index: 1;
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }

    .card-header {
        flex-direction: row;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
        background-color: rgb(241, 241, 241);
    }

    .table-row {
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        padding: 10px;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #cccccc;
    }

    .total {
        flex-direction: column;
        justify-content: space-between;
        margin-right: 14px;
        padding: 10px;
    }

    .total1 {
        flex-direction: column;
        padding: 10px;
        justify-content: space-between;
        margin-right: 14px;
    }

    .sub-heading {
        font-weight: bold;
        font-size: 25px;
        color: #565656;
    }

    .heading {
        font-size: 13px;
        color: #565656;
    }

    .card-btn1 {
        background-color: rgb(80, 80, 80);
        border-radius: 3px;
        margin-right: 5px;
        padding: 10px;
        justify-content: center;
        -webkit-box-pack: center;
        margin-left: 20px;
        margin-top: 20px;
    }

    .card-btn-text {
        color: #FFFFFF;
        font-size: 13px;
        text-align: center;
    }

    .card-content {
        flex-direction: column;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .table-row {
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        padding: 10px;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #cccccc;
    }

    .card-fot {
        background-color: rgb(241, 241, 241);
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .shadow-x {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
</style>