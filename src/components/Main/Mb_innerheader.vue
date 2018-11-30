<template>


    <div class="card-main-head card-border-bottom1 tab-wrapper1" style="">
        <div v-if="platform !== 'Web'" @click="jump('/home')" style="justify-content: center">
            <image class="cal-icn1" src="../../../web/assets/arrow_back_white.png" alt="notify"></image>
        </div>
        <div v-if="platform === 'Web'" @click.native="jump('/home')" style="justify-content: center">
            <image class="cal-icn1" src="../../../web/assets/arrow_back_white.png" alt="notify"></image>
        </div>
        <div class="card-header-container1">
            <text class="card-heading1">Home</text>
        </div>
        <div style="flex:2;align-items: center">
            <image class="head-logo" src="http://salesdrive.iorta.in/img/logo.png"></image>
        </div>
        <div style="flex-direction:row;justify-content:space-between">
            <div style="flex-direction:row;" class="hide-sm">
                <div>
                    <input class="input" placeholder="Search" v-model="searchText" type="text" style="flex: 1;margin-right:20px;" />
                </div>
                <div class="cross-logo">
                    <image v-if="searchText" @click.native="clearText" class="notification-logo" src="https://www.materialui.co/materialIcons/navigation/close_white_192x192.png"
                        alt="notify"></image>
                </div>
                <div class="search-logo">
                    <image class="notification-logo" v-if="!searchText" src="https://www.materialui.co/materialIcons/action/search_white_192x192.png"
                        alt="notify"></image>
                </div>
            </div>
            <!-- <div style="justify-content: center;margin-right:20px;">
                <image class="cal-icn1" src="https://www.materialui.co/materialIcons/action/search_white_192x192.png" alt="notify"></image>
            </div> -->
            <div style="justify-content: center;margin-right:20px;" @click.native="showNotifications()">
                <image class="cal-icn1" src="https://www.materialui.co/materialIcons/social/notifications_white_192x192.png"
                    alt="notify"></image>
            </div>
            <div @click="jump('/menu-mobile')" style="justify-content: center;" @click.native="showMenu()">
                <image class="cal-icn1" src="https://www.materialui.co/materialIcons/action/perm_identity_white_192x192.png"
                    alt="notify"></image>
            </div>
        </div>

        <div class="sync-div" style="flex:1" v-if="sync==true">
            <div class="card-sync">
                <div class="card-header" style="background-color:rgb(241, 241, 241)">
                    <div class="table-row" style="padding:10px">
                        <div class="total" style="flex-direction:column;justify-content:space-between;margin-right:14px;padding:10px">
                            <div>
                                <text class="sub-heading">34</text>
                            </div>
                            <div>
                                <text class="heading">Total No Of Files</text>
                            </div>
                        </div>
                        <div class="total" style="flex-direction:column;padding:10px">
                            <div>
                                <text class="sub-heading">1.2 GB</text>
                            </div>
                            <div>
                                <text class="heading">Total Size of Files</text>
                            </div>
                        </div>
                        <div class="card-btn1" style="margin-left:20px;margin-top:20px;padding:10px">
                            <text class="card-btn-text">Sync All</text>
                        </div>
                    </div>
                </div>
                <div class="card-content" style="flex-direction:column">
                    <div class="table-row" style="flex-direction:row;padding:10px" v-for="data in Sync">
                        <div class="total" style="flex-direction:column">
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
                    <div style="background-color:rgb(241, 241, 241);  justify-content: center;
                                    align-items: center;padding-top: 10px;
                                    padding-bottom: 10px">
                        <text class="heading" style="color:blue;">View All</text>
                    </div>
                </div>
            </div>
        </div>
   

    <div class="notify-div-inhead" v-if="notifications==true">
        <div class="tab-header" style="background-color:#F1F1F1;">
            <div class="tab-header-details" style="flex-direction:row; 
                justify-content: space-evenly;padding-top: 10px;
                padding-bottom: 10px">
                <div class="tab-one" @click.native="tab1">
                    <div class="tab-position">
                        <text :class="{'card-head-tab-title':tabonedisable,'card-bold-head-tab-title':tabone}">05</text>
                    </div>
                    <div class="tab-position-bottom">
                        <text class="card-head-notification-title">Applications</text>
                    </div>
                </div>
                <div class="tab-two" @click.native="tab2">
                    <div class="tab-position">
                        <text :class="{'card-head-tab-title':tabtwodisable,'card-bold-head-tab-title':tabtwo}">04</text>
                    </div>
                    <div class="tab-position">
                        <text class="card-head-notification-title">Renewals</text>
                    </div>
                </div>
                <div class="tab-three" @click.native="tab3">
                    <div class="tab-position">
                        <text :class="{'card-head-tab-title':tabthreedisable,'card-bold-head-tab-title':tabthree}">02</text>
                    </div>
                    <div class="tab-position">
                        <text class="card-head-notification-title">Alerts</text>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="tabone == true" class="tab-details" style="background-color:#fff;">
            <div class="tab-content-details" style="flex-direction:column;">
                <scroller class="scroller" style="height:166px;">
                    <div class="head-content" style="flex-direction:row;padding: 10px;">
                        <div>
                            <text class="card-head-notification-title" style="align-items: center">CFR (2)</text>
                        </div>
                        <div style="margin-left: 20px">
                            <text class="card-head-notification-title" style="align-items: center">View All</text>
                        </div>
                    </div>

                    <div class="body-tab-content" style="flex-direction:row;padding: 10px; justify-content: space-between" v-for="app in applicationData">
                        <div class="left-content">
                            <div class="left-row">
                                <text class="card-head-notification-title">{{app.Status}}</text>
                            </div>
                            <div class="left-row">
                                <text class="card-head-notification-title">{{app.Name}}| {{app.Id}} | </text>
                            </div>
                            <div class="left-row">
                                <text class="card-head-notification-title">Deadline:{{app.DraftDate}}</text>
                            </div>
                        </div>
                        <div class="right-content">
                            <text class="card-head-notification-title">{{app.Date}}</text>
                            <div class="button" style="margin-top:10px;padding:8px;border:1px solid black;align-items: center">
                                <text class="card-head-notification-title">View Details</text>
                            </div>
                        </div>
                    </div>
                </scroller>
            </div>
        </div>
        <div v-if="tabtwo == true" class="tab-details" style="background-color:#fff;">
            <div class="tab-content-details" style="flex-direction:column;">
                <scroller class="scroller" style="height:166px;">
                    <div class="head-content" style="flex-direction:row;padding: 10px">
                        <div>
                            <text class="card-head-notification-title" style="align-items: center">Upcoming Renewals(2)</text>
                        </div>
                        <div style="margin-left: 20px">
                            <text class="card-head-notification-title" style="align-items: center">View All Renewals</text>
                        </div>
                    </div>

                    <div class="body-tab-content" style="flex-direction:row;padding: 10px; justify-content: space-between" v-for="app in renewalData">
                        <div class="left-content">
                            <div class="left-row">
                                <text class="card-head-notification-title">{{app.Status}}</text>
                            </div>
                            <div class="left-row">
                                <text class="card-head-notification-title">{{app.Name}}|{{app.Id}} |</text>
                            </div>
                            <div class="left-row">
                                <text class="card-head-notification-title">Deadline:{{app.DraftDate}}</text>
                            </div>
                        </div>
                        <div class="right-content">
                            <text class="card-head-notification-title">Installment Premium:{{app.Premium}}</text>
                            <div style="align-items: flex-end;margin-top:12px;padding:8px;">
                                <image class="msg-icn" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                            </div>
                        </div>
                    </div>
                </scroller>
            </div>
        </div>
        <div v-if="tabthree == true" class="tab-details" style="background-color:#fff;">
            <div class="tab-content-details" style="flex-direction:column;">
                <scroller class="scroller" style="height:166px;">
                    <div class="head-content" style="flex-direction:row;padding: 10px">
                        <div>
                            <text class="card-head-notification-title" style="align-items: center">Birthday Today (1)</text>
                        </div>
                        <div style="margin-left: 20px">
                            <text class="card-head-notification-title" style="align-items: center">Birthdays this month</text>
                        </div>
                    </div>

                    <div class="body-tab-content" style="flex-direction:row;padding: 10px; justify-content: space-between" v-for="app in applicationData">
                        <div class="left-content">
                            <div class="left-row">
                                <text class="card-head-notification-title">{{app.Status}}</text>
                            </div>
                            <div class="left-row">
                                <text class="card-head-notification-title">{{app.Name}}| {{app.Id}} | </text>
                            </div>
                            <div class="left-row">
                                <text class="card-head-notification-title">Deadline:{{app.DraftDate}}</text>
                            </div>
                        </div>
                        <div class="right-content">
                            <text class="card-head-notification-title">{{app.Date}}</text>
                            <div class="button" style="margin-top:10px;padding:8px;border:1px solid black;align-items: center">
                                <text class="card-head-notification-title">View Details</text>
                            </div>
                        </div>
                    </div>
                </scroller>
            </div>
        </div>
        <div class="tab-header" style="background-color:#F1F1F1;">
            <div class="tab-header-details" style="flex-direction:row; 
                                justify-content: space-evenly;padding-top: 10px;
                                padding-bottom: 10px">
                <div class="tab-one">
                    <div class="tab-position-bottom">
                        <text class="card-head-notification-title">View All</text>
                    </div>
                </div>


            </div>
        </div>
    </div>

    <div class="user-div" style="flex:1" v-if="notifyDetails==true">
        <div class="card-notify">

            <div v-if="platform ==='Web'" class="row1 hide-mb" style="flex-direction:row">
                <div class="menu-position">
                    <image class="user-menu-icn" src="https://www.materialui.co/materialIcons/action/perm_identity_grey_192x192.png"></image>
                </div>
                <div class="profile-det" style="flex-direction:column">
                    <text class="card-head-title">Kasturi Shah</text>
                    <text class="card-head-subtitle">Adv ID:HYD3245</text>
                    <text class="card-head-subtitle">Miapur,Hyderabad</text>
                </div>
            </div>
            <div v-if="platform ==='Web'" class="row1 hide-mb" style="flex-direction:row">
                <div class="menu-position">
                    <image class="user-menu-icn" src="https://www.materialui.co/materialIcons/editor/pie_chart_black_192x192.png"></image>
                </div>
                <div class="profile-det" style="flex-direction:column">

                    <text class="card-head-title">Goal Summary</text>
                    <text class="card-head-subtitle">Target:30.50 Lakh</text>
                    <text class="card-head-subtitle">Achived: 20.56 Lakh</text>
                    <text class="card-head-subtitle">Pending: 9.44 Lakh</text>

                </div>
            </div>
            <div class="row1" style="flex-direction:row">
                <div class="img-row">
                    <image class="notify-box" src="https://www.materialui.co/materialIcons/social/people_grey_192x192.png"></image>
                </div>
                <div class="profile-det" style="flex-direction:column">
                    <text class="card-head-cust-title">My Customers</text>
                </div>
            </div>
            <div class="row1" style="flex-direction:row">
                <div class="img-row">
                    <image class="notify-box" src="https://www.materialui.co/materialIcons/action/help_grey_192x192.png"></image>
                </div>
                <div v-if="platform==='Web'" class="profile-det" style="flex-direction:column" @click.native="jump('/advisor-view')">
                    <text class="card-head-cust-title">My Advisors</text>
                </div>
                <div v-if="platform !=='Web'" class="profile-det" style="flex-direction:column" @click="jump('/advisor-view')">
                    <text class="card-head-cust-title">My Advisors</text>
                </div>
            </div>
            <div class="row1" style="flex-direction:row">
                <div class="img-row">
                    <image class="notify-box" src="https://www.materialui.co/materialIcons/action/input_grey_192x192.png"></image>
                </div>
                <div class="profile-det" style="flex-direction:column">
                    <text class="card-head-cust-title">Team Login</text>
                </div>
            </div>
            <div class="row1" style="flex-direction:row">
                <div class="img-row">
                    <image class="notify-box" src="https://www.materialui.co/materialIcons/action/question_answer_grey_192x192.png"></image>
                </div>
                <div v-if="platform==='Web'" class="profile-det" style="flex-direction:column" @click.native="jump('/helpdesk')">
                    <text class="card-head-cust-title">Help Desk</text>
                </div>

                <div v-if="platform !=='Web'" class="profile-det" style="flex-direction:column" @click="jump('/helpdesk')">
                    <text class="card-head-cust-title">Help Desk</text>
                </div>

            </div>
            <div class="row1" style="flex-direction:row">
                <div class="img-row">
                    <image class="notify-box" src="https://www.materialui.co/materialIcons/action/highlight_remove_grey_192x192.png"></image>
                </div>
                <div class="profile-det" style="flex-direction:column">
                    <text class="card-head-cust-title">Log Out</text>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>



</template>

<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    const items = ["Cust Name", "Cust ID", "Product Name", "Product Type", "App No"];
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }

        },
        data() {
            return {
                // headeTitle: this.$store.getters.getheaderTitle,
                platform: invalid,
                deviceWidth: invalid,
                searchText: '',


                showDetails: false,
                notifications: false,
                tabonedisable: true,
                tabtwodisable: true,
                tabthreedisable: true,
                tabone: true,
                tabtwo: false,
                tabthree: false,
                sync: false,
                notifyDetails: false,
                search: '',
                color: '',
                color1: '',
                color2: '',
                img: false,
                img1: false,
                img2: false,
                showSearch: false,
                showCategory: false,
                showRange: false,
                index: -1,
                titleWeb: ["Cust Name", "Cust ID", "Product Name", "Product Type", "App No"],

                Sync: [{
                    Status: 'Proposals',
                    No: '16',
                    Size: '125 KB'
                }, {
                    Status: 'CFR Pending',
                    No: '16',
                    Size: '200 KB'
                }, {
                    Status: 'Document Pending',
                    No: '20',
                    Size: '1.2 GB'
                }, {
                    Status: 'Payment Pending',
                    No: '20',
                    Size: '1.2 GB'
                }, ],

                number: 5,
                title: 'Applications',
                applicationData: [{
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Shahu Patil',
                    Status: 'New',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU155',
                    DraftDate: '01/12/2016',
                }],
                renewalData: [{
                    Name: 'Dolly Singh',
                    Status: 'Renewal - Due Tomorrow',
                    Date: '08:05:19, March 19, 2016',
                    Id: ' BRSMCU023',
                    Premium: '₹ 7,772',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Reminder',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Reminder',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: '01/12/2016',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Reminder',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: '01/12/2016',
                }, ],
                alertData: [{
                    Name: 'Dolly Singh',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: ' BRSMCU023',
                    Premium: '₹ 7,772',
                    DraftDate: 'Increasing Income Plan',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: 'Increasing Income Plan',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: 'Increasing Income Plan',
                }, {
                    Name: 'Sonam Meshram',
                    Status: 'Birthday Today',
                    Date: '08:05:19, March 19, 2016',
                    Id: 'BRSMCU023',
                    Premium: '12/04/16',
                    DraftDate: 'Increasing Income Plan',
                }, ],
            }
        },
        computed: {
            headeTitle() {
                return this.$store.getters.getheaderTitle
            },
            value() {
                if (this.index == -1) {
                    return "Select ";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            }

        },
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            clearText() {
                this.searchText = '';
            },
            tab1() {
                this.tabone = true;
                this.tabtwo = false
                this.tabthree = false
                this.tabonedisable = true;
            },
            tab2() {
                this.tabtwo = true
                this.tabone = false,
                    this.tabthree = false
            },
            tab3() {
                this.tabthree = true
                this.tabone = false
                this.tabtwo = false
            },
            showSync() {
                this.notifications = false
                this.notifyDetails = false;
                this.sync = !this.sync
            },
            showNotifications() {

                this.sync = false,
                    this.notifyDetails = false
                this.notifications = !this.notifications
            },
            showMenu() {

                this.sync = false
                this.notifications = false
                this.notifyDetails = !this.notifyDetails
            },
            titleType() {
                picker.pick(
                    {
                        index: this.index,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.value = items[event.data];
                            this.index = event.data;
                        }
                    }
                );
            },
            showSearchDialog() {
                this.color1 = ''
                this.color2 = ''
                this.img = false;
                this.showSearch = !this.showSearch;
                this.showCategory = false;
                this.showRange = false;
                this.color = '#fff'


            },
            onFocus(event) {
                console.log(event.value)
                if (event.value !== '') {
                    console.log("True")
                    this.img = true
                }
                else {
                    this.img = false
                }


            },
            showCategoryDialog() {
                this.color = ''
                this.color2 = ''
                this.showCategory = !this.showCategory
                this.showSearch = false;
                this.showRange = false;
                this.color1 = '#fff'
            },
            showRangeDialog() {
                this.color = ''
                this.color1 = ''
                this.showSearch = false;
                this.showCategory = false;
                this.showRange = !this.showRange
                this.color2 = '#fff'
            }
        },


    }
</script>
<style>
                    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
/*Header CSS*/
        .notify-box {
        width: 20px;
        height: 20px;
        margin-top: 20px;
    }
    .head-content {
        border-bottom: 1px solid #ebebeb
    }
    .card-head-notification-title {
        font-size: 13px;
        color: #565656;
        font-family:robotoregular;
    }
    .left-row {
        padding-bottom: 5px;
    }
    .tab-position {
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        color: #565656;
        font-family:robotoregular;
    }
    .card-head-tab-title {
        font-size: 30px;
        color: #565656;
        font-family:robotoregular;
    }
    .card-bold-head-tab-title {
        font-size: 30px;
        font-weight: bold;
        color: #565656;
        font-family:robotoregular;
    }
    .notification-logo {
        width: 40px;
        height: 40px;
        cursor: pointer;
        /* position: relative;
        left:234px;
        top:11px; */
    }
  
        .user-menu-icn {
        width: 50px;
        height: 50px;
        margin-top: 20px;
        cursor: pointer;
    }
    .sync-div {
        position: fixed;
        ;
        z-index: 9999;
        top: 29px;
        right: 0px;
    }
    
    .sync-div:before {
        content: "\a ";
        border-style: solid;
        border-width: 7px 9px 11px;
        border-color: transparent transparent #F7F7F7;
        position: absolute;
        top: 2px;
        right: 129px;
    }
    .user-div {
        position: fixed;
        ;
        z-index: 9999;
        top: 29px;
        right: 0px;
    }
    
    .user-div:before {
        content: "\a ";
        border-style: solid;
        border-width: 7px 9px 11px;
        border-color: transparent transparent #F7F7F7;
        position: absolute;
        top: 2px;
        right: 14px;
    }
    .notify-div-inhead {
        width:330px;
        position: fixed;
        ;
        z-index: 9999;
        top: 49px;
        right: 0px;
    }
    
    .notify-div-inhead:before {
        content: "\a ";
        border-style: solid;
        border-width: 7px 9px 11px;
        border-color: transparent transparent #F1F1F1;
        position: absolute;
        top: -18px;
        right: 59px;
    }
    .row1 {
        border-bottom: 1px solid #565656;
        padding-left: 30px;
    }
    .profile-det {
        width: 750px;
        padding: 10px;
    }
    .card-head-cust-title {
        font-size: 25px;
        font-weight: bold;
        color: #565656;
        font-family:robotoregular;
    }
   
        .card-head-subtitle {
        font-size: 14px;
        color: #565656;
        font-family:robotoregular;
    }
    .msg-icn {
        height: 20px;
        width: 20px;
        margin-top: 5px;
    }
      .card-head-title {
        font-size: 14px;
        font-weight: bold;
        width: 400px;
        font-family:robotoregular;
    }
    .card-notify {
        
        align-items: 0px;
        width: 180px;
        z-index: 1;
        margin: 20px;
        margin-right: 0px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }

    /*END*/

    .img-row {
            margin-top: 3px;
            justify-content: center
        }
    .tab-wrapper1 {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top: -1px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
    }

    .input {
        display: block;
        background-color: #fff;
        font-size: 14px;
        height: 30px;
        background-color: transparent;
border-top: none;
border-right: none;
border-left: none;
border-image: initial;
border-bottom: 1px solid #efe9e9;
color: rgb(255, 255, 255);
        /* padding: 15px; */
        /* margin-bottom:20px; */
        /* color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
        font-family:robotoregular; */
    }

    .search-logo{
     
     position: relative; 
     margin-top: 0.6px;
     margin-left: 140px; 

 }
 .cross-logo{
     position: relative; 
     margin-top: -25.5px;
     margin-left: 140px;
     /* position: absolute;
   margin-top: 0;
   right: 0; */
 }

    .head-logo {
        width: 119px;
        height: 30px;
        cursor: pointer;
        /* position:relative; 
        left:113px;
        bottom: 8px; */
    }

    .card-main-head {
        /* width:70%; */
        /* margin-top: 20px; */
        margin-bottom: 0px;
        background-color: #3b371e;


    }

    .card-border-bottom1 {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }

    .table-row1 {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;


    }

    .table-row-col-details1 {
        margin-left: 10px;
    }

    select {
        color: #565656;
        font-family:robotoregular;
        font-size: 14px;
        padding: 15px;
    }

    .ckhbox1 {
        margin-left: 15px;
        margin-top: 8px
    }

    .chkbox-title1 {

        font-family:robotoregular;
        font-size: 24px;
        margin-left: 10px;
        color: #9d9d9d;
    }

    .backg-color1 {
        background-color: #fff;
    }

    .btn-color1 {
        background-color: rgb(80, 80, 80);
    }

    .md-btn-width1 {
        flex: 1;
    }

    .md-custom-btn1 {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 80px;
        /* min-width: 88px; */
        position: relative;
        cursor: pointer;
    }

    .md-btn-label1 {
        font-family:robotoregular;
        font-size: 31px;
        text-transform: uppercase;
        cursor: pointer;
        color: #fff;

    }

    .btn-space1 {

        position: absolute;
        bottom: 0px;
        margin-bottom: 0px;

    }

    .head-row1 {
        justify-content: start;
        padding: 15px;

        /* border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #ebebeb; */
    }

    .tab-content1 {
        justify-content: center;
        margin-left: 10px;
    }

    .head-row1 {

        padding: 10px;
        justify-content: start;
    }

    .input1 {
        display: block;
        background-color: #fff;
        font-family:robotoregular;
        font-size: 24px;
        padding: 15px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;



    }




    .input1:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }

    .sub-card-heading11 {

        font-family:robotoregular;
        font-size: 25px;
        color: #565656;
        text-align: left;
    }

    .card-header-container1 {
        flex-direction: row;
        /*            align-items: center;
            justify-content: center;

*/
        flex: 1;
        padding-left: 10px;
    }

    .card-heading1 {
        font-family:robotoregular;
        font-size: 32px;
        color: #fff;
    }

    .prop-card1 {
        height: 477px;
    }

    .card-head1 {


        margin-top: 20px;
        margin-bottom: 0px;
        background-color: transparent;
        /* background-color: #fff; */
        /* border-radius: 5px; */
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    }

    .cal-icn1 {
        height: 60px;
        width: 60px;
    }

    .hide-sm {
        display: none;
    }

    @media only screen and (min-width: 320px) {
        .card-head-title {
        font-size: 14px;
        font-weight: bold;
        width: 400px;
        font-family:robotoregular;
    }
        .cal-icn1 {
            height: 25px;
            width: 25px;
        }
        .notification-logo  {
            width: 20px;
            height: 20px;
        }
        .card-head-cust-title media {
            font-size: 14px;
            font-weight: bold;
            color: #565656;
            font-family:robotoregular;
        }

        .tab-wrapper1 {
            padding: 10px;
            border: none;
            /*                padding-top:30px;
                padding-bottom:30px;
*/
            margin-top: -1px;
            margin-right: 0px;
            margin-left: 0px;
        }
        .card-heading1 {
            font-family:robotoregular;
            font-size:20px;
        }

    }

    @media only screen and (min-width: 768px) {
        .card-notify {
            align-items: 0px;
            width: 250px;
            z-index: 1;
            margin: 20px;
            margin-right: 0px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 10px;
        }

        .hide-sm {
            display: block;
        }

    }
</style>