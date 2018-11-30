<template>
	 <div>

        <scroller class="scroller">
            <div class="list">

                <div class="x-bottom-margin">

                    <div class="card shadow">
                        <!--Card Header-->
                        <div class="card-footer text-wraper row header-color">
                            <text class="card-head-title">RENEWALS</text>
                            <div class="card-footer-new-row xx-large-margin-left">
                                <text class="small-font">Last Synced</text>
                                <text class="small-font">13 hours ago</text>
                            </div>

                            <div class="row logo-wraper">
                                <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
                            </div>
                        </div>


                        <div class="card-footer row light-gray">
                            <div class="group">
                                <text class="input light-gray" @click="pick">{{value}}</text>
                            </div>
                        </div>

                        <!--Header End-->

                        <div class="row" style="padding-bottom:18px">
                            <div class="card-message">
                                <!--Row 1-->
                                <div v-for="(bList, list) in businessList" :key="list">
                                    <div class="card-line x-big-list-height small-top-margin horizontal-border">

                                        <text class="xx-font-size font-bold">{{bList.title}}</text>
                                        <div class="card-line row x-top-margin-20">
                                            <text class="card-subtitle shift-center x-font-size gray-label-color">{{bList.subTitle1}} </text>
                                            <text class="card-subtitle shift-center x-font-size gray-label-color">{{bList.subTitle2}}</text>
                                        </div>
                                        <div class="card-line row">
                                            <text class="card-subtitle shift-center xx-font-size">{{bList.val_1}}</text>
                                            <text class="card-subtitle shift-center xx-font-size">{{bList.val_2}}</text>
                                        </div>
                                    </div>
                                </div>

                                <!--Row 1 end-->

                                <!--Row 2-->
                                <div class="shift-center">

                                    <div class="card-line x-big-list-height small-top-margin">
                                        <text class="xx-font-size font-bold">Total Premium (In Rs.)</text>
                                        <div class="card-line row x-top-margin-20 header-color">
                                            <text class="card-subtitle shift-center gray-label-color x-font-size">WCP + Renewals</text>
                                            <!--<text class="card-subtitle shif-left label-font">Issuance</text>-->
                                        </div>
                                        <div class="card-line row">
                                            <text class="card-subtitle shift-center xx-font-size">250000</text>
                                            <!--<text class="card-subtitle shif-left">65,000</text>-->
                                        </div>
                                    </div>

                                </div>

                                <!--Row 2 end-->
                            </div>
                        </div>
                    </div>

                    <div class="card shadow">
                        <!--Card Header-->
                        <div class="card-footer text-wraper row header-color">
                            <text class="card-head-title">MY APPLICATIONS</text>
                            <div class="card-footer-new-row xx-large-margin-left">
                                <text class="small-font">Last Synced</text>
                                <text class="small-font">13 hours ago</text>
                            </div>

                            <div class="row logo-wraper">
                                <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
                            </div>
                        </div>

                        <div class="card-header row light-gray">
                            <div class="group">
                                <text class="input light-gray" @click="pick">{{value}}</text>
                            </div>
                        </div>

                        <!--Header End-->

                        <div class="row" style="padding-bottom:18px">
                            <div class="card-message x-top-margin">
                                <div class="card-line row">
                                    <text class="table-row-label shift-center xx-font-size font-bold">Status</text>
                                    <text class="table-row-label shift-center xx-font-size font-bold">Count</text>
                                    <text class="table-row-label shift-center xx-font-size font-bold">Value (â‚¹)</text>
                                </div>
                                <scroller class="scrollor">
                                    <div class="hidden">
                                        <div v-for="(row, pi) in table" :key="pi">

                                            <div class="card-line row horizontal-border">
                                                <text class="table-row-label xx-font-size">{{row.status}} </text>
                                                <text class="table-row-label shift-center xx-font-size">{{row.count}}  </text>
                                                <text class="table-row-label shift-center shift-right xx-font-size">{{row.value}}</text>
                                            </div>
                                        </div>
                                    </div>
                                </scroller>
                            </div>
                        </div>
                    </div>


                    <div class="card shadow">
                        <!--Card Header-->
                        <div class="card-footer text-wraper row header-color">
                            <text class="card-head-title">BIRTHDAYS</text>
                            <div class="card-footer-new-row xx-large-margin-left">
                                <text class="small-font">Last Synced</text>
                                <text class="small-font">13 hours ago</text>
                            </div>

                            <div class="row logo-wraper">
                                <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
                            </div>
                        </div>
                        <div class="card-header row light-gray">
                            <div class="group">
                                <text class="input light-gray" @click="pick">{{value}}</text>
                            </div>
                        </div>

                        <!--Header End-->

                        <div class="row" style="padding-bottom:18px">
                            <div class="">
                                <scroller class="scrollor">
                                    <div v-for="(list, li) in Birthlists" :key="li">
                                        <div class="card-line row x-small-list-height horizontal-border">
                                            <image class="circle" :src="list.profile"></image>
                                            <text class="card-subtitle x-left-margin xx-font-size">{{list.name}}</text>
                                            <div class="row logo-wraper">
                                                <image class="refresh-logo arrow-logo" src="https://images.vexels.com/media/users/3/136721/isolated/preview/0a87638be517433b4846494d15db9126-right-arrowhead-by-vexels.png"></image>
                                            </div>
                                        </div>
                                    </div>
                                </scroller>
                                <div class="card-action card-action-height">
                                    <text class="color-b  xx-font-size">+2 more</text>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </scroller>
    </div>
</template>

 	<script>
        const picker = weex.requireModule('picker')
        const items = ['Month to Date', 'Year to Date', 'Custom Date Range']
        export default {
            data: () => {
                return {
                    index: -1,
                    index1: -1,

                    businessList: [{
                            title: "NOP",
                            subTitle1: "Login",
                            subTitle2: "Issuance",
                            val_1: 12,
                            val_2: 12
                        }, {
                            title: "WRP(In Rs.)",
                            subTitle1: "Login",
                            subTitle2: "Issuance",
                            val_1: 65000,
                            val_2: 65000
                        },

                        {
                            title: "WCP (In Rs.)",
                            subTitle1: "Login",
                            subTitle2: "Issuance",
                            val_1: 45000,
                            val_2: 45000
                        }, {
                            title: "Renewals (In Rs.)",
                            subTitle1: "Collected",
                            subTitle2: "Due",
                            val_1: 45000,
                            val_2: 87000
                        }, {
                            title: "Persistency (In Rs.)",
                            subTitle1: "13th Month",
                            subTitle2: "Total",
                            val_1: 45,
                            val_2: 27
                        }

                    ],

                    table: [{
                        status: "Logins",
                        count: 3,
                        value: "180,000"
                    }, {
                        status: "Issued",
                        count: 3,
                        value: "125,000"
                    }, {
                        status: "Rejected",
                        count: 4,
                        value: "275,000"
                    }, {
                        status: "Rejected",
                        count: 4,
                        value: "275,000"
                    }, {
                        status: "Rejected",
                        count: 4,
                        value: "275,000"
                    }, {
                        status: "Rejected",
                        count: 4,
                        value: "275,000"
                    }, {
                        status: "Rejected",
                        count: 4,
                        value: "275,000"
                    }, {
                        status: "Usama",
                        count: 4,
                        value: "275,000"
                    }],
                    Birthlists: [{
                        profile: 'https://blogs.timesofindia.indiatimes.com/wp-content/uploads/2017/10/Rema-1.jpg',
                        name: 'Sukhvinder Narula'
                    }, {
                        profile: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                        name: 'Sukhvinder Narula'
                    }, {
                        profile: 'https://blogs.timesofindia.indiatimes.com/wp-content/uploads/2017/10/Rema-1.jpg',
                        name: 'Sukhvinder Narula'
                    }, {
                        profile: 'http://www.qygjxz.com/data/out/190/3800078-profile-pics.png',
                        name: 'Sukhvinder Narula'
                    }]
                }
            },
            computed: {

                value() {
                    if (this.index == -1) {
                        return items[0]
                    } else if (this.index < items.length) {
                        return items[this.index]
                    }
                    return ''
                },

                value1() {
                    if (this.index1 == -1) {
                        return items[0]
                    } else if (this.index1 < items.length) {
                        return items[this.index1]
                    }
                    return ''
                }


            },
            methods: {
                pick() {
                    picker.pick({
                        index: this.index,
                        items
                    }, event => {
                        if (event.result === 'success') {
                            this.value = items[event.data]
                            this.index = event.data
                        }
                    })
                },

                pick2() {
                    picker.pick({
                        index: this.index1,
                        items
                    }, event => {
                        if (event.result === 'success') {
                            this.value1 = items[event.data]
                            this.index1 = event.data
                        }
                    })
                }
            }

        }
    </script>

	<style scoped>
        .text-wraper {
            justify-content: center;
            align-items: center;
        }
        
        .card-line {
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        
        .card-subtitle {
            font-size: 30px;
            width: 330px;
            color: #07152a;
        }
        
        .list {
            width: 750px;
            background-color: #EFEFEF;
        }
        
        .scrollor {
            height: 300px;
            width: 750px;
            /*background-color: #EFEFEF;*/
        }
        
        .shadow {
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
        }
        
        .light-gray {
            background-color: #f8f8f8;
        }
        
        .x-small-list-height {
            height: 120px;
        }
        
        .x-big-list-height {
            height: 150px;
            /*background-color: red;*/
        }
        
        .x-top-margin {
            margin-top: 10px;
        }
        
        .x-top-margin-20 {
            margin-top: 20px;
        }
        
        .row {
            flex-direction: row;
            padding-left: 15px;
        }
        
        .horizontal-border {
            border-width: 2px;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #f1f0f0;
        }
        
        .card {
            width: 710px;
            margin: 20px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 10px;
        }
        
        .card-footer {
            height: 100px;
        }
        
        .card-head-title {
            font-size: 30px;
            font-weight: bold;
            width: 400px;
        }
        
        .small-font {
            font-size: 15px;
            font-style: italic;
        }
        
        .card-footer-new-row {
            flex-direction: column;
        }
        
        .refresh-logo {
            font-size: 50px;
            color: white;
            height: 50px;
            width: 50px;
        }
        
        .logo-wraper {
            align-items: center;
            margin-left: 10px;
            width: 100px;
            /*background-color: gray;*/
            /*  border-width: 2px;*/
            /*border-top: none;*/
            /*border-style: solid;*/
            /*border-top-color: #21618C;*/
            /*border-right-color: #21618C;*/
            /*border-left-color: #FFF;*/
            /*border-bottom-color: #21618C;*/
        }
        
        .xx-large-margin-left {
            margin-left: 90px;
        }
        
        .small-top-margin {
            margin-top: 20px;
        }
        
        .group {
            margin-top: 20px;
        }
        
        .input {
            display: block;
            /* width: 250px; */
            /*background-color: #fff;*/
            /*margin-left: 70px;*/
            font-size: 23px;
            padding: 20px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #f8f8f8;
            border-right-color: #f8f8f8;
            border-left-color: #f8f8f8;
            border-bottom-color: #e6e6e6;
        }
        
        .shift-center {
            /*background-color: red;*/
            margin-left: 0px;
            text-align: center;
        }
        
        .x-font-size {
            font-size: 20px;
            /*color:#aba8a8;*/
        }
        
        .xx-font-size {
            font-size: 25px;
        }
        
        .font-bold {
            font-weight: bold;
        }
        
        .gray-label-color {
            color: #aba8a8;
        }
        
        .x-bottom-margin {
            margin-bottom: 30px;
        }
        
        .header-color {
            background-color: #e6e6e6;
        }
        
        .white-color {
            color: #fff;
        }
        
        .shift-right {
            /*background-color: red;*/
            margin-left: 0px;
            text-align: right;
        }
        
        .shift-left {
            /*background-color: red;*/
            margin-left: 0px;
            text-align: left;
        }
        
        .table-row-label {
            width: 210px;
            color: #07152a;
            margin-bottom: 10px;
            /*font-weight: bold;*/
            /*background-color: yellow;*/
        }
        
        .circle {
            width: 100px;
            height: 100px;
            /*background-color: red;*/
            border-radius: 50px;
        }
        
        .x-left-margin {
            margin-left: 50px;
            width: 400px;
        }
        
        .card-action {
            margin-top: 10px;
        }
        
        .card-action-height {
            height: 60px;
            width: 170px;
            /*padding-left: 15px;*/
            align-items: center;
            justify-content: center;
        }
        
        .card-action-height:active {
            background-color: #EAEDED;
        }
        
        .color-b {
            color: #2E86C1;
           
        }
        
        .arrow-logo {
            height: 30px;
            width: 30px;
            margin-left: 25px;
            align-items: right;
        }
    </style>