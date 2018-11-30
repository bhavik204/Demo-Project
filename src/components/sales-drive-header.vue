<template>
    <div>
        <div class="sales-drive-header-wrapper">
            <!-- First Section -->
            <!-- sls-heder-right-lft-width -->

            <!-- Web Header -->
            <div  v-if="platform === 'Web'" class="sales-drive-flex-row sales-drive-container sls-heder-right-lft-width">
                <div v-if="arrowDisplay">
                    <div class="sales-drive-container"  @click.native="goBack">
                        <image :src="headerIcons.back" class="sales-drive-icon-size"></image>
                    </div>
                </div>
                <div class="sales-drive-container sales-drv-hder-tlt-w" style="padding-left:5px">
                    <text class="sales-drive-header-font large-text">{{headeTitle}}</text>
                </div>
            </div>

            <!-- APK  Header-->
            <div v-if="platform !== 'Web'" class="sales-drive-flex-row sales-drive-container sales-drive-justication">
                <div v-if="arrowDisplay">
                    <div class="sales-drive-container"  @click="goBack">
                        <image :src="headerIcons.back" class="sales-drive-icon-size"></image>
                    </div>
                </div>
                <div class="sales-drive-container" style="padding-left:5px">
                    <text class="sales-drive-header-font">{{ headeTitle }}</text>
                </div>
            </div>

            <!-- End APK Header -->

            <div v-if="platform === 'Web'"  @click.native="jump('/home')" class="sales-drive-flex-row sales-drive-container sales-drive-justication" style="flex:1">
                <image :src="logo" class="sales-drive-header-logo"/>
            </div>

            <div  v-if="platform !== 'Web'"  @click="jump('/home')"  class="sales-drive-flex-row sales-drive-container sales-drive-justication" style="flex:1">
                    <image :src="logo" class="sales-drive-header-logo"/>
                </div> 
           <!-- Input box  for web browser-->
            <div v-if="platform === 'Web'"  class="sales-drive-flex-row sales-drive-container sales-drive-justication hide-sm">
                <div v-if="showSearch == true">
                    <input class="sales-drive-ser-input" @change="gotoSearchPage" placeholder="Search" v-model="searchText" type="text" style="flex: 1;margin-right:20px;" />
                </div>
                <div class="cross-logo" v-if="showSearch == true">
                    <image v-if="searchText" @click.native="clearText" class="notification-logo" src="https://www.materialui.co/materialIcons/navigation/close_white_192x192.png"
                    alt="notify"></image>
                </div>
            </div>

            <!-- Apk  -->
            <div v-if="platform !== 'Web'"  class="sales-drive-flex-row sales-drive-container sales-drive-justication hide-sm">
                
            </div>


            <div v-if="platform === 'Web'" class="sales-drive-flex-row sales-drive-container sls-heder-right-lft-width " style="justify-content:flex-end">

                <!-- Web -->
                <div class="sales-drive-container"  @click.native="showSearchDialog()">
                    <image :src="headerIcons.search" class="sales-drive-icon-size"/>
                </div>
                <div  class="sales-drive-container"  @click.native="showNotifications()">
                    <image :src="headerIcons.notif" class="sales-drive-icon-size"/>
                </div>
                <div class="sales-drive-container"  @click.native="showMenu()">
                    <image :src="headerIcons.user" class="sales-drive-icon-size"/>
                </div>
            </div>

            <!-- APK  -->
            <div v-if="platform !== 'Web'" class="sales-drive-flex-row sales-drive-container" style="justify-content:flex-end">
                <div class="sales-drive-container"  @click="jump('/search_page')">
                    <image :src="headerIcons.search" class="sales-drive-icon-size"/>
                </div>
                <div  class="sales-drive-container"  @click="jump('/notifypage')">
                    <image :src="headerIcons.notif" class="sales-drive-icon-size"/>
                </div>

                <div class="sales-drive-container" @click="jump('/menumobile')">
                    <image :src="headerIcons.user" class="sales-drive-icon-size"/>
                </div>
            </div>
            <!-- End here -->

            <div class="notify-div-inhead shadow " v-if="notifications" style="arrow_forward_black_192x192ls">
                    <div class="tab-header" style="background-color:#F1F1F1;">
                        <div class="tab-header-details" style="flex-direction:row; 
                            justify-content: space-evenly;padding-top: 10px;
                            padding-bottom: 10px">
                            <div  @click.native="tab1">
                                <div class="tab-position">
                                    <text  style="cursor:pointer" :class="{'card-head-tab-title':tabonedisable,'card-bold-head-tab-title':tabone}">{{applicationcounter}}</text>
                                </div>
                                <div class="tab-position-bottom cursor-pointer-globle">
                                    <text style="font-size:15px;cursor:pointer" :class="{'card-head-tab-title':tabonedisable,'card-bold-head-tab-title':tabone}">Applications</text>
                                </div>
                                 <div style="margin-top:5px"  :class="{'tab-non-act':nonactiveTab1,'tab-notification-act':activeTab1}">
                                    
                                </div>
                            </div>
                            <div  @click.native="tab2">
                                <div class="tab-position">
                                    <text style="cursor:pointer" :class="{'card-head-tab-title':tabtwodisable,'card-bold-head-tab-title':tabtwo}">{{renewalcounter}}</text>
                                </div>
                                <div class="tab-position">
                                    <text style="font-size:15px;cursor:pointer" :class="{'card-head-tab-title':tabtwodisable,'card-bold-head-tab-title':tabtwo}">Renewals</text>
                                </div>
                                    <div style="margin-top:5px"  :class="{'tab-non-act':nonactiveTab2,'tab-notification-act':activeTab2}">
                                    
                                </div>
                            </div>
                            <div  @click.native="tab3">
                                <div class="tab-position">
                                    <text style="cursor:pointer" :class="{'card-head-tab-title':tabthreedisable,'card-bold-head-tab-title':tabthree}">{{alertcounter}}</text>
                                </div>
                                <div class="tab-position">
                                    <text style="font-size:15px;cursor:pointer"  :class="{'card-head-tab-title':tabthreedisable,'card-bold-head-tab-title':tabthree}">Alerts</text>
                                </div>
                                    <div style="margin-top:5px"  :class="{'tab-non-act':nonactiveTab3,'tab-notification-act':activeTab3}">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabone == true"  style="background-color:#fff;">
                        
                        <div  v-if="shownotification1 === false" class="tab-content-details" style="flex-direction:column;">
                            <scroller class="" style="height:166px;">
                                <div class="head-content card-border-bottom1" style="flex-direction:row;padding: 10px;">
                                    <div>
                                        <text class="card-head-notification-title" style="align-items: center">CFR (2)</text>
                                    </div>
                                    <div style="margin-left: 20px">
                                        <text class="card-head-notification-title" style="align-items: center;color:blue;cursor:pointer" @click.native="jump('/cfrmaster/cfrall')">View All</text>
                                    </div>
                                </div>
            
                                <div    class="body-tab-content card-border-bottom1" 
                                        style="flex-direction:row;padding: 10px; justify-content: space-between" 
                                        v-for="(app, li) in data" :key="li">
                                    <div class="left-content" style="">
                                        <div class="left-row">
                                            <text class="card-head-notification-title" style="color:green; font-weight:bold">{{app.CFRType}}</text>
                                        </div>
                                        <div class="left-row">
                                            <text class="card-head-notification-title">{{app.notification_body}}</text>
                                        </div>
                                        <!-- <div class="left-row">
                                            <text class="card-head-notification-title">Deadline:{{app.created_date}}</text>
                                        </div> -->
                                    </div>
                                    <div class="right-content">
                                        <text class="sls-drv-sml-font">{{moment(app.created_date).format('LTS')}},{{moment(app.created_date).format('LL')}}</text>
                                        <!-- <div class="button" style=" width:110px;margin-top:10px;padding:8px;border:1px solid black;align-items: center">
                                            <text class="card-head-notification-title">View Details</text>
                                        </div> -->

                                        <div class="sls-drv-hdr-btn-wrapper">
                                            <vx-secondary-button
                                                btn-name="View Details"
                                                icon-side="right"
                                                btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_black_192x192.png"
                                                @click.native="jump('/extrapremium')">
                                            </vx-secondary-button>
                                        </div>
                                    </div>
                                </div>
                            </scroller>
                        </div>
                         <div v-if="shownotification1 === true">
                                    <!-- <text>Hello World</text> -->
                                    <!-- </notification-notfound></notification-notfound> -->
                                    <notification-notfound></notification-notfound>
                                </div>
                    </div>
                    <div v-if="tabtwo == true" class="" style="background-color:#fff;">
                        <div v-if="shownotification2=== false" class="tab-content-details" style="flex-direction:column;">

                            <scroller class="" style="height:166px;">
                                <div class="head-content card-border-bottom1" style="flex-direction:row;padding: 10px">
                                    <div>
                                        <text class="card-head-notification-title" style="align-items: center">Upcoming Renewals(2)</text>
                                    </div>
                                    <div style="margin-left: 20px">
                                        <text class="card-head-notification-title" style="align-items: center;color:blue;cursor:pointer" @click.native="jump('/RenewalMaster/renewalall')">View All Renewals</text>
                                    </div>
                                </div>
                                <div class="ren-notify-drp-flx-row card-border-bottom1" style="padding: 10px;" v-for="(app, li) in renewalData" :key="li">
                                    <div class="" style="width: 60%">
                                        <div class="left-row" ><text class="card-head-notification-title" style="color:green; font-weight:bold">{{app.cfrType}}</text></div>
                                        <div class="left-row"><text class="card-head-notification-title">{{app.name_n_id}}</text></div>
                                        <div class="left-row"><text class="card-head-notification-title">{{app.installmentPremium}}</text></div>
                                    </div>
                                    <div class="sls-content-pad" style="width: 30%">
                                        <div><text class="sls-drv-sml-font">{{moment(app.created_date).format('LTS')}},{{moment(app.created_date).format('LL')}}</text></div>
                                        
                                        <div class="sls-content-pad sls-ren-icon-pos"><image class="sales-drive-icon-size" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"/></div>
                                    </div>
                                </div>

                                <!-- <div v-if="shownotification2 === true">
                                    <notification-notfound></notification-notfound>
                                </div> -->

                                
                            </scroller>
                        </div>

                        <div v-if="shownotification2 === true">
                                    <!-- <text>Hello World</text> -->
                                    <!-- </notification-notfound></notification-notfound> -->
                                    <notification-notfound></notification-notfound>
                                </div>
                    </div>
                    <div v-if="tabthree === true" class="" style="background-color:#fff;">
                        <div  v-if="shownotification3 === false" class="tab-content-details" style="flex-direction:column;">
                            <scroller class="" style="height:166px;">
                                <div class="head-content card-border-bottom1" style="flex-direction:row;padding: 10px">
                                    <div>
                                        <text class="card-head-notification-title" style="align-items: center">Birthday Today (1)</text>
                                    </div>
                                    <div style="margin-left: 20px">
                                        <text class="card-head-notification-title" style="align-items: center; color:blue; cursor:pointer" @click.native="jump('/birthdaymaster/birthtoday')">View All</text>
                                    </div>
                                </div>
            
                                <div    class="body-tab-content card-border-bottom1" 
                                        style="flex-direction:row;padding: 10px; justify-content: space-between" 
                                        v-for="(app, li) in alertData" :key="li">
                                    <div class="left-content">
                                        <div class="left-row">
                                            <text class="card-head-notification-title " style="color:green; font-weight:bold">{{app.notification_status}}</text>
                                        </div>
                                        <div class="left-row">
                                            <text class="card-head-notification-title">{{app.name_n_id}}</text>
                                        </div>
                                        <div class="left-row">
                                            <text class="card-head-notification-title">{{app.deadline}}</text>
                                        </div>
                                    </div>
                                    <div class="right-content">
                                        <text class="sls-drv-sml-font">{{moment(app.created_date).format('LTS')}},{{moment(app.created_date).format('LL')}}</text>
                                        <!-- <div class="button" style=" width:110px;margin-top:10px;padding:8px;border:1px solid black;align-items: center">
                                            <text class="card-head-notification-title">View Details</text>
                                        </div> -->
                                        <div class="sls-drv-hdr-btn-wrapper">
                                            <vx-secondary-button
                                                btn-name="View Details"
                                                icon-side="right"
                                                btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_black_192x192.png"
                                                @click.native="jump('/extrapremium')">
                                            </vx-secondary-button>
                                        </div>
                                    </div>
                                </div>
                            </scroller>
                        </div>
                         <div v-if="shownotification3 === true">
                                    <!-- <text>Hello World</text> -->
                                    <!-- </notification-notfound></notification-notfound> -->
                                    <notification-notfound></notification-notfound>
                                </div>
                    </div>
                    <div class="tab-header" style="background-color:#F1F1F1;">
                        <div class="tab-header-details" style="flex-direction:row; 
                                            justify-content: space-evenly;padding-top: 10px;
                                            padding-bottom: 10px">
                            <div class="tab-one">
                                <div class="tab-position-bottom">
                                    <text class="card-head-notification-title" style="color:blue;cursor:pointer" @click.native="jump('/notifypage/appnotifypage')">View All</text>
                                </div>
                            </div>
            
            
                        </div>
                    </div>
                </div></div>
                <div>
                    
               <div class="user-div sales-hdr-right-side-pos " style="flex:1;" v-if="notifyDetails">
                        <div class="card-notify shadow">
                
                            <div v-if="platform ==='Web'" class="row1 hide-mb" style="flex-direction:row; align-items: center ">
                                <!-- <div class="menu-position">
                                    <image class="user-menu-icn" src="https://www.materialui.co/materialIcons/action/account_circle_black_192x192.png"/>
                                </div> -->
                                <div class="user-menu-icn sls-drv-pf-crcl">
                                    <text class="sls-drv-pf-crcl-title">{{userName | name-shorter}}</text>
                                </div>
                                <div class="profile-det" style="flex-direction:column">
                                    <div class="left-row"><text class="card-head-title">{{userName | to-capitlaize}}</text></div>
                                    
                                    <div class="left-row"><text class="card-head-subtitle">Adv ID:{{AdvID}}</text></div>
                                    <div class="left-row"><text class="card-head-subtitle">{{Hcity}} {{Hstate}}</text></div>
                                </div>
                            </div>
                            <div v-if="platform ==='Web'" class="row1 hide-mb" style="flex-direction:row; align-items: center">
                                <div class="menu-position">
                                    <image class="user-menu-icn" src="https://www.materialui.co/materialIcons/editor/pie_chart_black_192x192.png"></image>
                                </div>
                                <div class="profile-det" style="flex-direction:column">
                
                                    <div class="left-row"><text class="card-head-title">Goal Summary</text></div>
                                    <div class="left-row"><text class="card-head-subtitle">Target: 30.50 Lakh</text></div>
                                    <div class="left-row"><text class="card-head-subtitle">Achived: 20.56 Lakh</text></div>
                                    <div class="left-row"><text class="card-head-subtitle">Pending: 9.44 Lakh</text></div>
                
                                </div>
                            </div>
                            <div class="row1 cursor-pointer-globle" style="flex-direction:row">
                                <div class="img-row cursor-pointer-globle">
                                    <image class="notify-box cursor-pointer-globle" src="https://www.materialui.co/materialIcons/social/people_grey_192x192.png"></image>
                                </div>
                                <div class="profile-det cursor-pointer-globle" style="flex-direction:column" @click.native="jump('/RenewalMaster/renewalall')">
                                    <text class="card-head-cust-title cursor-pointer-globle">My Customers</text>
                                </div>
                            </div>
                            <div class="row1 cursor-pointer-globle" style="flex-direction:row">
                                <div class="img-row cursor-pointer-globle">
                                    <image class="notify-box cursor-pointer-globle" src="https://www.materialui.co/materialIcons/action/help_grey_192x192.png"></image>
                                </div>
                                <div v-if="platform==='Web'" class="profile-det cursor-pointer-globle" style="flex-direction:column" @click.native="jump('/advisorMaster/advisorall')">
                                    <text class="card-head-cust-title cursor-pointer-globle">My Advisors</text>
                                </div>
                                <div v-if="platform !=='Web'" class="profile-det" style="flex-direction:column" @click="jump('/advisorMaster/advisorall')">
                                    <text class="card-head-cust-title" style="">My Advisors</text>
                                </div>
                            </div>
                            <div class="row1 cursor-pointer-globle" style="flex-direction:row">
                                <div class="img-row cursor-pointer-globle">
                                    <image class="notify-box cursor-pointer-globle " src="https://www.materialui.co/materialIcons/action/input_grey_192x192.png"></image>
                                </div>
                                <div class="profile-det cursor-pointer-globle" style="flex-direction:column">
                                    <text class="card-head-cust-title cursor-pointer-globle">Team Login</text>
                                </div>
                            </div>
                            <div class="row1 cursor-pointer-globle" style="flex-direction:row">
                                <div class="img-row cursor-pointer-globle">
                                    <image class="notify-box cursor-pointer-globle" src="https://www.materialui.co/materialIcons/action/question_answer_grey_192x192.png"></image>
                                </div>
                                <div v-if="platform==='Web'" class="profile-det cursor-pointer-globle" style="flex-direction:column" @click.native="jump('/helpdesk')">
                                    <text class="card-head-cust-title cursor-pointer-globle">Help Desk</text>
                                </div>
                
                                <div v-if="platform !=='Web'" class="profile-det" style="flex-direction:column" @click="jump('/helpdesk')">
                                    <text class="card-head-cust-title">Help Desk</text>
                                </div>
                
                            </div>
                            <div class="row2 cursor-pointer-globle" style="flex-direction:row">
                                <div class="img-row cursor-pointer-globle">
                                    <image class="notify-box cursor-pointer-globle" src="https://www.materialui.co/materialIcons/action/highlight_remove_grey_192x192.png"></image>
                                </div>
                                <div class="profile-det cursor-pointer-globle" style="flex-direction:column" @click.native="logout()" >
                                    <text class="card-head-cust-title cursor-pointer-globle">Log Out</text>
                                </div>
                            </div>
                        </div>
                   
                </div> </div>

        </div>
    </div>
</template>

<script>
    import vxInputBox from '../components/vx-input-box/vx-input-box.vue'
    import vxSecondaryButton from '../components/vx-primary-button/vx-scondary-button.vue'
    import notificationNotfound from './notification-notfound.vue'
    const items = ["Cust Name", "Cust ID", "Product Name", "Product Type", "App No"];
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
     var storage = weex.requireModule('storage');
   const modal = weex.requireModule('modal')
import moment from 'moment'
    export default {
        computed: {
            headeTitle() {
                var str = this.$store.getters.getheaderTitle;
                if(this.platform !== 'Web') {
                    var arr = [];
                    arr = str.split(' ');
                    var word1 = arr[0];
                    if(arr.length > 1) {                    
                        let word2 = '';
                        let ch = '';
                        for(let i = 0 ; i < arr.length; i++) {
                            if(i === 1) {
                                word2 = arr[i];
                                word2 = word2.split('');
                                for(let j = 0 ; j < word2.length; j++) {
                                    if(j === 0) {
                                        /**
                                         *  only first latter move in ch
                                         */
                                        
                                        ch = word2[j];
                                        ch = ch + '...'
                                        // String Concatination
                                        str = word1 + ' '+ ch;
                                    }
                                }
                            }
                        }
                    } else {
                        str = word1;
                    }
                }
                return str;
                
            },
            arrowDisplay() {
                return this.$store.getters.getArrowStatus
            }        
        },
        created() {
            var self = this;
            var f_name=self.$store.state.agentDetails.agent_firstname;
            var l_name=self.$store.state.agentDetails.agent_lastname;
            this.userName=f_name +' '+l_name;
            
            this.AdvID = self.$store.state.agentDetails.agent_id;
//                  storage.getItem('storedata', event => {
//           console.log('get value:', event.data)
//           this.form = event.data
         
//         }),
//            modal.toast({
//                            message: this.form,
//                             duration: 1
//                         })
//           console.log("GET:Local Storage Value",this.form)
//           this.$store.commit('ADD_FORMDATA',this.form)

            this.logo = 'http://salesdrive.iorta.in/img/logo.png',
            this.headerIcons.user = 'https://www.materialui.co/materialIcons/action/perm_identity_white_192x192.png';
            this.headerIcons.notif = 'https://www.materialui.co/materialIcons/social/notifications_white_192x192.png';
            this.headerIcons.search = 'https://www.materialui.co/materialIcons/action/search_white_216x216.png';
            this.headerIcons.back = "https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png";
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }

            this.userId = this.$store.state.agentDetails._id;

            // this.GET('getnotification/5a8c1e7d07151804a888eafc', res => {
            // if( !res.ok ){
            //     self.getJsonpResult = "request failed";
            //     } else{
            //         console.log('get: ' + res);
            //         let data =  res.data.errMsg;
            //         console.log('data', data);
                                      
            //     }
            // });

           




            // return str;
        },

        mounted(){
            
        },
        destroyed(){
//   var me = this
//             this.form = (this.$store.getters.getAppFormData)
//             console.log(this.form)

//               storage.setItem('storedata', this.form, event => {
//           this.state = 'set success'
         
//         })
//          modal.toast({
//                                             message: this.form,
//                                             duration: 1
//                                         }),
//   console.log("Local Storage Value stored is",this.form)
        },
        props : ['notifyDetails', 'notifications'],
        data() {
            return {
                // headeTitle: this.$store.getters.getheaderTitle,
                logo: '',
              

                search: '',
                shownotification1: false,
                shownotification2: false,
                shownotification3:false,
                headerIcons: {
                    user: '',
                    notif: '',
                    search: '',
                    back: '',
                },

                alertcounter: 0,
                renewalcounter: 0,
                applicationcounter: 0,
                platform: invalid,
                deviceWidth: invalid,
                searchText: '',
                data:"",
                moment:moment,
                userName:'',
                
                AdvID:'',
                Hcity:'Mumbai',
                Hstate:'Maharshtra',
                userId: '',  // Comming from store
                showDetails: false,
                tabonedisable: true,
                tabtwodisable: true,
                tabthreedisable: true,
                tabone: true,
                tabtwo: false,
                tabthree : false,
                nonactiveTab1: true,
                nonactiveTab2: true,
                nonactiveTab3: true,
                activeTab1: true,
                activeTab2: false,
                activeTab3: false,
                sync: false,
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
                    Status: 'Remainder',
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
                renewalData: [],
                alertData: [],

                birthdayList: [
                    'Rahul Soni'
                ]
            }
        },
        components: {
            vxInputBox,
            vxSecondaryButton,
            notificationNotfound

        },
        methods: {
            goBack(){
                // window.history.back();
                this.$router.back()
                // this.$router.go(-1)
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            clearText() {
                this.searchText = '';
            },
            tab1() {
                  var self = this
                var id = self.$store.state.agentDetails._id
                var application = 'applications'
                 this.GET('getnotification/'+id+'?notification_type=applications', res => {
            if( !res.ok ){
                self.getJsonpResult = "request failed";
                } else{

                    console.log('get: ', res);
                    let data =  res.data.errMsg;
                    console.log('data ', data);

                      if(res.data.errCode === 81){
                        console.log('Condition 1');
                      this.shownotification2 = false
                      this.shownotification1 = true
                      this.shownotification3 = false
                      
                  }
                  else{

                      console.log('condition else part')
                      this.shownotification1=false
                      

                  }
                }
            });
                this.tabone = true;
                this.tabtwo = false
                this.tabthree = false
                this.tabonedisable = true;
                this.nonactiveTab1 = true;
                this.activeTab1 = true
                this.activeTab2 = false
                this.activeTab3 = false
            },
            tab2() {
                var self = this;
                let db_struct = {};
                var id = self.$store.state.agentDetails._id
                this.GET('getnotification/'+id+'?notification_type=renewals', res => {
            if( !res.ok ){
                self.getJsonpResult = "request failed";
                } 
                
                else {
                    console.log('get: ' + res);
                    console.log('renewals data is',res.data.errMsg)
                    let data =  res.data.errMsg[0];
                    console.log('renewals notification data', data);
                     var count = res.data.errMsg[1]
                    // console.log(count)
                    // console.log("Count is",count[0].Notifycount[0].count)
                    // this.renewalcounter = count[0].Notifycount[0].count
                    // console.log('data', data);
                    /**
                     * Empty object
                     */

                    this.renewalData=[]
                
                    let temp = [];
                    for(let i = 0; i < data.length; i++) {
                        if (data[i].notification_type === "renewals") {
                            temp = data[i].notification_body.split("|");
                            // console.log('Split Sting',  data[i]);
                            db_struct.name_n_id = temp[0] +' | '+ temp[1];
                            db_struct.installmentPremium = temp[2];
                            db_struct.cfrType = data[i].CFRType;
                            /**
                             * Array Clear
                             */
                            temp = [];
                
                            this.renewalData.push(db_struct);

                            /**
                             * you must clear object when you pushed data into an array
                             */

                            db_struct = {};

                            /**
                             * Data store on array
                             * 
                             */
                  
                    }
                }
                      if(res.data.errCode === 81){
                      console.log('Condition 1');
                      this.shownotification2 = true
                      this.shownotification1 = false
                      this.shownotification3 = false
                  }
                  else{
                       console.log('Condition 2');
                      this.shownotification2 = false
                    //   this.shownotification1 = true
                    //   this.shownotification3 = true
                       
                             
                        }
                }
            });
                this.tabtwo = true
                this.tabone = false,
                this.tabthree = false,
                this.activeTab2 = true
                this.activeTab1 = false
                this.activeTab3 = false
            },
            tab3() {
                var self = this
                let db_struct = {};
                var id = self.$store.state.agentDetails._id
                 this.GET('getnotification/'+id+'?notification_type=alerts', res => {
            if( !res.ok ){
                self.getJsonpResult = "request failed";
                } else{
                    console.log('get: ' + res);
                    let data =  res.data.errMsg[0];
                    let count=res.data.errMsg[1]
                    console.log(count)
                    console.log('data alert', data);

                    var count = res.data.errMsg[1]

                    this.alertData=[]
                    // console.log(count)
                    // console.log("Count is",count[0].Notifycount[0].count)
                    // this.alertcounter = count[0].Notifycount[0].count
                    // console.log('data', data);
                     let temp = [];
                    for(let i = 0; i < data.length; i++) {
                        if (data[i].notification_type === "alerts") {
                            temp = data[i].notification_body.split("|");
                            // console.log('Split Sting',  data[i]);
                            db_struct.name_n_id = temp[0] +' | '+ temp[1];
                            db_struct.PlanName = data[i].PlanName;
                            db_struct.deadline=temp[2]
                            db_struct.cfrType = data[i].CFRType;

                            /**
                             * Array Clear
                             */
                            temp = [];
                
                            this.alertData.push(db_struct);

                            /**
                             * you must clear object when you pushed data into an array
                             */

                            db_struct = {};

                           
                        }}
                  if(res.data.errCode === 81){
                                     console.log('Condition 1');
                                        this.shownotification2 = false
                                        this.shownotification1 = false
                                        this.shownotification3 = true
                      
                                            }
                            else{
                                 this.shownotification3 = false
                                }
                }
            });
                this.tabthree = true
                this.tabone = false
                this.tabtwo = false
                this.activeTab3 = true
                this.activeTab2 = false
                this.activeTab1 = false
            },
            showSync() {
                this.notifications = false
                this.notifyDetails = false;
                this.sync = !this.sync
            },
            showNotifications() {
                var self = this
                var id = self.$store.state.agentDetails._id
                var application = 'applications'
                 this.GET('getnotification/'+id+'?notification_type=applications', res => {
            if( !res.ok ){
                self.getJsonpResult = "request failed";
                } 
                else if(res.data.errCode === 81){
                    this.applicationcounter=0
                    this.renewalcounter=0
                    this.alertcounter=0
                    console.log("if all data delet")

                } else {
                    console.log('get: ' + res);
                    self.data =  res.data.errMsg[0];
                    var count = res.data.errMsg[1]
                    console.log(count)
                    console.log("Count is", count[0].Notifycount[0].count)
                    //this.applicationcounter = count[0].Notifycount[0].count
                    var checkcount = count[0].Notifycount
                    console.log('checkcount jckjshk', checkcount)
                    for(var i = 0; i < checkcount.length; i++)
                    {
                        // var test = checkcount[i]._id
                        // console.log("Id is",test)

                        /**
                         * Application notification counter
                         */

                        if(checkcount[i]._id === 'applications') {
                            if (checkcount[i].count < 1) {
                                this.applicationcounter = 0
                            } else {
                                this.applicationcounter = checkcount[i].count
                                console.log("application count",this.applicationcounter)
                            }        
                        }

                        /**
                         * Renewals notifications counter
                         */

                        if(checkcount[i]._id === 'renewals') {
                            if(checkcount[i].count < 1) {
                                this.renewalcounter = 0
                            } else {
                                this.renewalcounter = checkcount[i].count
                                console.log("renewals count",this.renewalcounter)
                            }
                        }

                        /**
                         * Alert notification counter
                         */
                        if(checkcount[i]._id === 'alerts') {
                            if(checkcount[i].count < 1) {
                                self.alertcounter=0
                            } else {
                                this.alertcounter = checkcount[i].count
                                console.log("alert count", this.alertcounter)
                            }

                            
                            
                        }  
                        
                    }
                    console.log('data', self.data);
                  
                }
                    
                
                      if(res.data.errCode === 81){
                        console.log('Condition 1');
                      this.shownotification2 = false
                      this.shownotification1 = true
                      this.shownotification3 = false
                      
                  }
                  else{

                      console.log('condition else part')
                      this.shownotification1=false
                  }
            });
                this.sync = false;
                this.notifyDetails = false
                    // if(this.notifications === true) {
                    //     this.notifications = false;
                    // } else {
                    //     this.notifications = true;
                    // }
                this.notifications = !this.notifications

            },
            showMenu() {

                this.sync = false
                this.notifications = false
                this.notifyDetails = !this.notifyDetails
            },
            titleType() {
                picker.pick({
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
                console.log("Search")
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
                } else {
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
            },
            gotoSearchPage(event) {
                this.jump('/search_page');
               
            },
            logout(){
                // this.userId = '';
                if(this.platform === "Web")
                {
                    this.$router.go(0);
                }
                this.$store.commit('LOGOUT', this.userId);
                this.$store.state.agentDetails=[];
                this.$store.state.applicationFormData =[]
                
                this.$router.go('/loginview');
                // this.$router.push('/loginview');
                
                
            },

            // asciiConverter(str) {
            //     return str.charCodeAt(0);
            // }
        }
       
    }
</script>

<style>
    .robotoregular {
        font-family: robotoregular;
    }
    
    .robotobold {
        font-family: robotobold;
    }
    

    
    .notify-box {
        width: 20px;
        height: 20px;
        margin-top: 20px;
    }
    

    
    .card-head-notification-title {
        font-size: 13px;
        color: #565656;
        font-family: robotoregular;
    }
    
    .left-row {
        padding-bottom: 5px;
    }
    
    .tab-position {
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        color: #565656;
        font-family: robotoregular;
    }
    
    .card-head-tab-title {
        font-size: 30px;
        color: #565656;
        font-family: robotoregular;
    }
    
    .card-bold-head-tab-title {
        font-size: 30px;
        font-weight: bold;
        color: #565656;
        font-family: robotoregular;
    }
    
    .notification-logo {
        width: 40px;
        height: 40px;
        cursor: pointer;
        
    }
    
    .user-menu-icn {
        width: 50px;
        height: 50px;
     
        cursor: pointer;
    }
    
    .sync-div {
        position: fixed;
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

    
    .notify-div-inhead:before {
        content: "\a ";
        border-style: solid;
        border-width: 7px 9px 11px;
        border-color: transparent transparent #F1F1F1;
        position: absolute;
        top: -18px;
        right: 48px;
    }
    
    .row1 {
        border-bottom: 1px solid #e6e6e6;
       
        padding: 5px;
         padding-left: 15px;
    }
    
    .row1:hover {
        background-color: #F7F7F7;
   
    }
    
    .row2 {
        /* border-bottom: 1px solid #565656; */
       
              padding: 5px;
               padding-left: 15px;
    }
    
    .row2:hover {
   
        background-color: #F7F7F7;
    }
    
    .profile-det {
        padding: 10px;
    }
    
    .card-head-cust-title {
        font-size: 25px;
        font-weight: bold;
        color: #565656;
        font-family: robotoregular;
    }
    
    .card-head-subtitle {
        font-size: 14px;
        color: #565656;
        font-family: robotoregular;
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
        font-family: robotoregular;
    }
    
    .card-notify {
        width: 180px;
        z-index: 1;
        margin-top: 40px;
        margin-right: 0px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 3px;
    }
    /*END*/
    
    .img-row {
        margin-top: 3px;
        justify-content: center;
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
    
    .sales-drive-ser-input {
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
   
    }
    
    .search-logo {
        position: relative;
        margin-top: 0.6px;
        margin-left: 140px;
    }
    
    .cross-logo {
        position: absolute;
        cursor: pointer;
        top: 16px;
        right: 34px;
    }
    
    .head-logo {
        width: 119px;
        height: 30px;
        cursor: pointer;
  
    }
    
    .card-main-head {
    
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
    
    /* select {
        color: #565656;
        font-family: robotoregular;
        font-size: 14px;
        padding: 15px;
    }
     */
    .ckhbox1 {
        margin-left: 15px;
        margin-top: 8px;
    }
    
    .chkbox-title1 {
        font-family: robotoregular;
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
        font-family: robotoregular;
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
       
    }
    
    .tab-content1 {
        justify-content: center;
        margin-left: 10px;
    }
    
    .head-row1 {
        padding: 10px;
        justify-content: start;
    }

    
    .input1:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }
    
    .sub-card-heading11 {
        font-family: robotoregular;
        font-size: 25px;
        color: #565656;
        text-align: left;
    }
    
    .card-header-container1 {
        flex-direction: row;
    
        flex: 1;
        padding-left: 10px;
    }
    
    .card-heading1 {
        font-family: robotoregular;
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
        
    }
    
    .cal-icn1 {
        height: 60px;
        width: 60px;
    }
    
    .hide-sm {
        display: none;
        /* transition: .30s cubic-bezier(.25, .8, .5, 1); */
        position: absolute;
        right: 9.5%;
    }
    
    .sales-drive-flex-row {
        flex-direction: row;
    }
    
    .sales-drive-justication {
        justify-content: center;
        align-items: center;
    }
    
    .sales-drive-header-wrapper {
        background-color: #3b371e;
        color: #fff;
        /*box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;*/
        position: fixed;
        width: 750px;
        height: 120px;
        top: 0%;
        flex-direction: row;
        align-items: center;
        /* margin-bottom: 20px; */
    }
    
    .sales-drive-header-font {
        font-size: 30px;
        font-weight: bold;
        color: #FFF;
    }
    
    .sales-drive-container {
        padding: 10px;
    }
    
    .sales-drive-header-logo {
        width: 200px;
        height: 50px;
        cursor: pointer;
    }
    
    .sales-drive-icon-size {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .sls-drv-sml-font {
        font-size: 10px;
        font-style: italic;
        color: gray;
        width: 125px;
    }
    .sls-drv-pf-crcl {
        background-color: rgb(5, 100, 145);
        border-radius: 25px;
    }
    .sls-drv-pf-crcl-title {
        font-size: 18px;
        font-weight: bold;
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: robotoregular;

    }
    .left-content{
        flex: 1;
    }
    
    @media screen and (min-width: 320px) {
        .card-notify {
            align-items: 0px;
            width: 100%;
            z-index: 1;
            margin: 20px;
            margin-right: 0px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 3px;
        }
        .user-div {
            width: 100%;
            position: fixed;
            z-index: 9999;
            top: 29px;
            right: 0px;
        }
        .card-head-title {
            font-size: 14px;
            font-weight: bold;
            width: 400px;
            font-family: robotoregular;
        }
        .cal-icn1 {
            height: 25px;
            width: 25px;
        }
        .notification-logo {
            width: 20px;
            height: 20px;
        }
        .card-head-cust-title {
            font-size: 14px;
            font-weight: bold;
            color: #565656;
            font-family: robotoregular;
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
            font-family: robotoregular;
            font-size: 20px;
        }
        .sales-drive-header-wrapper {
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
            position: fixed;
            width: 100%;
            height: 50px;
            top: 0%;
            z-index: 10;
        }
        .sales-drive-header-font {
            font-size: 16px;
        }
        .sales-drive-icon-size {
            width: 25px;
            height: 25px;
        }
        .sales-drive-header-logo {
            width: 120px;
            height: 30px;
        }
        .notify-div-inhead {
            width: 350px;
            position: fixed;
            z-index: 100;
            top: 55px;
            right: 20px;
        }
        /* --------------- */
        .ren-notify-drp-flx-row {
            flex-direction: row;
        }
        .sls-content-pad {
            padding: 5px;
        }
        /* .sls-listing {
            border-width: 1px;
            border-style: solid;
            border-top-color: 
        } */

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .sls-ren-icon-pos {
            position: absolute;
            top: 23px;
            /* left: 10px; */
            right: -30px;
        }

        .sales-drive-container {
            padding: 5px;
        }

        /* Title width in mobile web */

        .sales-drv-hder-tlt-w {
            width: 70px;
        }
    }
    
    @media screen and (min-width: 768px) {
        .card-notify {
            align-items: 0px;
            width: 250px;
            z-index: 1;
            margin: 20px;
            margin-right: 0px;
            margin-bottom: 0px;
            background-color: #fff;
            border-radius: 3px;
        }
        .user-div {
            position: fixed;
            z-index: 9999;
            top: 29px;
            right: 0px;
            width: 277px;
        }
        .hide-sm {
            transition: .30s cubic-bezier(.25, .8, .5, 1);
            display: block;
        }
        .sls-drv-hdr-btn-wrapper {
            width: 100%;
            position: absolute;
            right: 0;
            top: 30px;
        }
        .notify-div-inhead {
            width: 350px;
            position: fixed;
            z-index: 100;
            top: 50px;
            right: 9px;
        }

        /* This class is used for poviding position to right side header */
        .sales-hdr-right-side-pos {
            top: 30px;
            right: 10px;
        }

        .sales-drive-container {
            padding: 10px;
        }
    }
    .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter { 
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
 transform: translateY(-50px);
  opacity: 0; 
}

.sls-heder-right-lft-width {
            width: 25%;
            align-items: center;
        }

     .sales-drv-hder-tlt-w {
            width: 100%;
        }
        

    @media screen and (min-width: 992px){
        /* Heder title and icons width */

        


    }
</style>