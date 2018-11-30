<template>
    <div style="background-color: #f7f7f7;">
        <div class="col" style="background-color: #f7f7f7;">
            <div class="box shadow" >
                <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
                    <div class="card-active shadow">
                        <div class=" " @click.native = "contestTab(i)" style="justify-content: flex-start; background-color:white;padding-bottom:5px; padding-top:1px">
                            <div class="active-spce-bet" style="align-items:center;justify-content:space-between">
                                <div class="active-spce-bet">
                                     <text class="club-heading-txt active-bor-cont-sel " >{{num.contnm}}</text>
                                    <div class="active-prog-hide" style="flex-direction:row; padding-left: 20px;align-items: center"> 
                                        <wxc-progress :value="num.value" :bar-height=16 :bar-width=100></wxc-progress>
                                    </div>
                                    <div class="active-prog-hide">
                                        <text style="margin-left:10px" class="heading-active">{{num.value}}%</text>
                                    </div>
                                </div>
                                <div>
                                     <text class="club-heading-txt-sml  " >{{num.date}}</text>
                                </div>
                            </div>
                            
                        </div>
                        <scroller class="active-srce" scroll-direction="horizontal">
                            <div class="active-box">
                                <div v-if="i==0 && active==true">
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-bottom:10px;padding-top:10px;" >My Progress</text>
                                    </div>
                                    <div class="active-pad-left-show"> <wxc-progress :value="num.value" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show" style="margin-top:10px"> <wxc-progress :value="40" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-top:20px; padding-bottom:10px; padding">Leaderboard</text>
                                    </div>
                                    <div class="active-table-width-big">
                                    <div class="table-row mobile-row" style="flex-direction:column;">
                                        <div class="thead-row hide-small-dev" style="flex-direction:row; flex-wrap: nowrap;background-color:#ebebeb">
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading" style="padding-left:7px;">Position</text></div>
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Name</text></div>
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Score</text></div>
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Stats</text></div>
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Information</text></div>
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Actions</text></div>
                                        </div> 

                                        <div class="tbody-row" v-for="tbl in table" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto">
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-left:7px;">{{tbl.position}}</text></div>
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.name}}</text></div>
                                            <div style="flex:1;" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.rank}}</text></div>
                                            <div style="flex:1;flex-direction:column"> <div style="margin-top:10px"><wxc-progress :value="tbl.value" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                                <div style="margin-top:10px"> <wxc-progress :value="tbl.value1" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                            </div>
                                            <div style="flex:1" class="active-pad-top-bot-show"> <text style="padding-top: 4px;" class="form-active-title">Logins:{{tbl.logins}}</text>
                                                <text style="padding-top: 12px;" class="form-active-title">Issuance:{{tbl.issuance}}</text>
                                            </div>
                                            <div style="flex:1" class="active-pad-top-bot-show">
                                                <div class="box md-btn-width" style="padding-left: 0px;padding-top: 10px;">
                                                    <!-- <div v-if="platform === 'Web'" @click.native="jump('/mastercontests/rewards')" class="md-custom-btn btn-color">
                                                        <text class="md-btn-label ">View Details</text>
                                                    </div>
                                                    <div v-if="platform !== 'Web'" @click="jump('/mastercontests/rewards')" class="md-custom-btn btn-color">
                                                        <text class="md-btn-label ">View Details</text>
                                                    </div> -->
                                                     <div  v-if="platform === 'Web'" style="padding:10px" class="active-tab-button-width"  @click.native="jump('/mastercontests/rewards')">
                                                        <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                            </vx-primary-btn>                    
                                                        
                                                    </div>
                                                    <div  v-if="platform !== 'Web'" style="padding:10px" class="active-tab-button-width" @click="jump('/mastercontests/rewards')">
                                                        <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                        </vx-primary-btn>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <!--  -->
                                </div>
                            </div>
                        </scroller>

                        <scroller class="active-srce" scroll-direction="horizontal">
                            <div class="active-box">
                                <div v-if="i == 1 && active1==true">
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-bottom:10px;padding-top:10px;" >My Progress</text>
                                    </div>
                                    <div class="active-pad-left-show"> <wxc-progress :value="num.value" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show" style="margin-top:10px"> <wxc-progress :value="40" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-top:20px; padding-bottom:10px; padding">Leaderboard</text>
                                    </div>
                                    <div class="active-table-width-big">
                                        <div class="table-row mobile-row" style="flex-direction:column;">
                                            <div class="thead-row hide-small-dev" style="flex-direction:row; flex-wrap: nowrap;background-color:#ebebeb">
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading" style="padding-left:7px;">Position</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Name</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Score</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Stats</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Information</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Actions</text></div>
                                            </div> 

                                            <div class="tbody-row" v-for="tbl in table1" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto">
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-left:7px;">{{tbl.position}}</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.name}}</text></div>
                                                <div style="flex:1;" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.rank}}</text></div>
                                                <div style="flex:1;flex-direction:column"> <div style="margin-top:10px"><wxc-progress :value="tbl.value" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                                    <div style="margin-top:10px"> <wxc-progress :value="tbl.value1" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                                </div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text style="padding-top: 4px;" class="form-active-title">Logins:{{tbl.logins}}</text>
                                                    <text style="padding-top: 12px;" class="form-active-title">Issuance:{{tbl.issuance}}</text>
                                                </div>
                                                <div style="flex:1" class="active-pad-top-bot-show">
                                                    <div class="box md-btn-width" style="padding-left: 0px;padding-top: 10px;">
                                                        <div  v-if="platform === 'Web'" style="padding:10px" class="active-tab-button-width"  @click.native="jump('/mastercontests/rewards')">
                                                            <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                                </vx-primary-btn>                    
                                                            
                                                        </div>
                                                        <div  v-if="platform !== 'Web'" style="padding:10px" class="active-tab-button-width" @click="jump('/mastercontests/rewards')">
                                                            <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                            </vx-primary-btn>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </scroller>
                        
                         

                          <scroller class="active-srce" scroll-direction="horizontal">
                            <div class="active-box">
                                <div v-if="i == 2 && active2==true">
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-bottom:10px;padding-top:10px;" >My Progress</text>
                                    </div>
                                    <div class="active-pad-left-show"> <wxc-progress :value="num.value" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show" style="margin-top:10px"> <wxc-progress :value="40" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-top:20px; padding-bottom:10px; padding">Leaderboard</text>
                                    </div>
                                    <div class="active-table-width-big">
                                        <div class="table-row mobile-row" style="flex-direction:column;">
                                            <div class="thead-row hide-small-dev" style="flex-direction:row; flex-wrap: nowrap;background-color:#ebebeb">
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading" style="padding-left:7px;">Position</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Name</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Score</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Stats</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Information</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Actions</text></div>
                                            </div> 

                                            <div class="tbody-row" v-for="tbl in table3" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto">
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-left:7px;">{{tbl.position}}</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.name}}</text></div>
                                                <div style="flex:1;" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.rank}}</text></div>
                                                <div style="flex:1;flex-direction:column"> <div style="margin-top:10px"><wxc-progress :value="tbl.value" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                                    <div style="margin-top:10px"> <wxc-progress :value="tbl.value1" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                                </div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text style="padding-top: 4px;" class="form-active-title">Logins:{{tbl.logins}}</text>
                                                    <text style="padding-top: 12px;" class="form-active-title">Issuance:{{tbl.issuance}}</text>
                                                </div>
                                                <div style="flex:1" class="active-pad-top-bot-show">
                                                    <div class="box md-btn-width" style="padding-left: 0px;padding-top: 10px;">
                                                        <div  v-if="platform === 'Web'" style="padding:10px" class="active-tab-button-width"  @click.native="jump('/mastercontests/rewards')">
                                                            <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                                </vx-primary-btn>                    
                                                            
                                                        </div>
                                                        <div  v-if="platform !== 'Web'" style="padding:10px" class="active-tab-button-width" @click="jump('/mastercontests/rewards')">
                                                            <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                            </vx-primary-btn>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </scroller>

                          <scroller class="active-srce" scroll-direction="horizontal">
                            <div class="active-box">
                                <div v-if="i == 3 && active3==true">
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-bottom:10px;padding-top:10px;" >My Progress</text>
                                    </div>
                                    <div class="active-pad-left-show"> <wxc-progress :value="num.value" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show" style="margin-top:10px"> <wxc-progress :value="40" :bar-height=27 :bar-width=600></wxc-progress></div>
                                    <div class="active-pad-left-show">
                                        <text class="heading-active " style="padding-top:20px; padding-bottom:10px; padding">Leaderboard</text>
                                    </div>
                                    <div class="active-table-width-big">
                                        <div class="table-row mobile-row" style="flex-direction:column;">
                                            <div class="thead-row hide-small-dev" style="flex-direction:row; flex-wrap: nowrap;background-color:#ebebeb">
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading" style="padding-left:7px;">Position</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Name</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Score</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Stats</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Information</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="tbl-active-heading">Actions</text></div>
                                            </div> 

                                            <div class="tbody-row" v-for="tbl in table4" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto">
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-left:7px;">{{tbl.position}}</text></div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.name}}</text></div>
                                                <div style="flex:1;" class="active-pad-top-bot-show"> <text class="form-active-title" style="padding-top: 4px;">{{tbl.rank}}</text></div>
                                                <div style="flex:1;flex-direction:column"> <div style="margin-top:10px"><wxc-progress :value="tbl.value" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                                    <div style="margin-top:10px"> <wxc-progress :value="tbl.value1" :bar-height=16 :bar-width=100></wxc-progress> </div>
                                                </div>
                                                <div style="flex:1" class="active-pad-top-bot-show"> <text style="padding-top: 4px;" class="form-active-title">Logins:{{tbl.logins}}</text>
                                                    <text style="padding-top: 12px;" class="form-active-title">Issuance:{{tbl.issuance}}</text>
                                                </div>
                                                <div style="flex:1" class="active-pad-top-bot-show">
                                                    <div class="box md-btn-width" style="padding-left: 0px;padding-top: 10px;">
                                                        <div  v-if="platform === 'Web'" style="padding:10px" class="active-tab-button-width"  @click.native="jump('/mastercontests/rewards')">
                                                            <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                                </vx-primary-btn>                    
                                                            
                                                        </div>
                                                        <div  v-if="platform !== 'Web'" style="padding:10px" class="active-tab-button-width" @click="jump('/mastercontests/rewards')">
                                                            <vx-primary-btn class="cursor-pointer-globle" btn-name="View Details" btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">  
                                                            </vx-primary-btn>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </scroller>

                       
                    </div>
                </div>
            </div>


        </div> 

    </div>
</template>

<script>
import vxPrimaryBtn from '../../components/vx-primary-button/vx-primary-button.vue'
    const navigator = weex.requireModule('navigator');
    import { WxcProgress } from 'weex-ui'
    import contestsTab from './ContestTab.vue'
    const invalid = '- invalid -'
    export default {
    created() {
        if (typeof WXEnvironment === 'object') {

        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
        return this.platform
        }
    },
    props: {
        listItems: {
        type: Array
        }

    },
    components: {
        contestsTab,WxcProgress ,vxPrimaryBtn
    },
    data: function() {
    return {
        headerName: 'Contests',
        platform: invalid,
        deviceWidth: invalid,
        active:true,
        active1:false,
        active2: false,
        active3: false,
        // value: 80,
        uploading: false,
        progressVisible: false,
        timer: null,
        table:[
        {
            position:'1st',
            name:'Sagar Sonawane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'2st',
            name:'Gaurav Sane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:10,
            value1:30

            },
            {
            position:'3st',
            name:'Praful Shinde',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:50,
            value1:70

            },
            {
            position:'4st',
            name:'Abhang Pathak',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'5st',
            name:'Jagdish Sisode',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:70,
            value1:90

            },
        ],
        table1:[
        {
            position:'1st',
            name:'Sagar Sonawane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'2st',
            name:'Gaurav Sane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:10,
            value1:30

            },
            {
            position:'3st',
            name:'Praful Shinde',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:50,
            value1:70

            },
            {
            position:'4st',
            name:'Abhang Pathak',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'5st',
            name:'Jagdish Sisode',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:70,
            value1:90

            },
        ],
        table3:[
        {
            position:'1st',
            name:'Sagar Sonawane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'2st',
            name:'Gaurav Sane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:10,
            value1:30

            },
            {
            position:'3st',
            name:'Praful Shinde',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:50,
            value1:70

            },
            {
            position:'4st',
            name:'Abhang Pathak',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'5st',
            name:'Jagdish Sisode',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:70,
            value1:90

            },
        ],
        table4:[
        {
            position:'1st',
            name:'Sagar Sonawane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'2st',
            name:'Gaurav Sane',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:10,
            value1:30

            },
            {
            position:'3st',
            name:'Praful Shinde',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:50,
            value1:70

            },
            {
            position:'4st',
            name:'Abhang Pathak',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:30,
            value1:50

            },
            {
            position:'5st',
            name:'Jagdish Sisode',
            rank:1827,
            logins:1600,
            issuance:1534,
            value:70,
            value1:90

            },
        ],
        numArray: [{
            contnm: 'Contest No. 1 ',
            listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
            listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
            listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
            date: '20th May - 20th June',
            value:"80",
            row:false,
            }, {
            contnm: 'Contest No. 2 ',
            listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
            listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
            listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
            value:"30",
            date: '1st June - 30th June',
            row1:false,

            }, {
            contnm: 'Contest No. 3 ',
            listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
            listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
            listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
            value:"50",
            date: '10th Aug - 15th Aug',
            row:false,
            }, {
            contnm: 'Contest No. 4',
            listdesc1: 'A Head to Head between the regions, win the privilege to be the “Pride of Digital East Regions” ',
            listdesc2: 'And your Rival??? Unlock the secret rival of your region by completing 80% of Sales Assist installation by the SMs of the region',
            listdesc3: 'Till you unlock your secret Rival, it’s playing blind!!!',
            value:"40",
            date: '16th Nov - 18th Nov',
            row:false,
            },

        ]


    }
    },

methods: {
contestTab(i){
console.log(i)
switch (i) {
case 0:

for(let i=0 ; i < this.numArray.length; i++) {
if(i == 0) {
this.active = true;
this.active1 =false;
this.active2 =false;
this.active3 =false;
this.numArray[i].row = true
// this.tabs[i].active = true;

// me.$router.push('/master/testapp');


}
else {
this.numArray[i].row = false;
}
}
break;
case 1:

for(let i=0 ; i < this.numArray.length; i++) {
if(i == 1) {
this.active1 = true;
this.active = false;
this.active2= false;
this.active3 = false;

this.numArray[i].row = false;
this.numArray[i].row = !this.numArray[i].row
// me.$router.push('/master/testpro/proposalpersonal') ;
}
// else {
this.numArray[i].row = false
// }
}


break;
case 2: 
for(let i=0 ; i < this.numArray.length; i++) {
if(i == 2) {
this.active2 = true;
this.active = false
this.active1 = false;
this.active3 = false

this.numArray[i].row = false;
this.numArray[i].row = !this.numArray[i].row
// me.$router.push('/master/testpro/proposalpersonal') ;
}
// else {
this.numArray[i].row = false
// }
}
break;
case 3: 
for(let i=0 ; i < this.numArray.length; i++) {
if(i == 3) {
this.active3 = true;
this.active1 = false;
this.active = false
this.active2 = false;


this.numArray[i].row = false;
this.numArray[i].row = !this.numArray[i].row
// me.$router.push('/master/testpro/proposalpersonal') ;
}
// else {
this.numArray[i].row = false
// }
}
break;
case 4: 
for(let i=0 ; i < this.numArray.length; i++) {
if(i == 4) {
this.active = false;
this.active1 = false;
this.active2 = false;
this.active3 = true;


this.numArray[i].row = false;
this.numArray[i].row = !this.numArray[i].row
// me.$router.push('/master/testpro/proposalpersonal') ;
}
// else {
this.numArray[i].row = false
// }
}
break;

break
default:
// execute default code block
}
},
jump(to) {
if (this.$router) {
this.$router.push(to)
}
},
gotoJump() {
navigator.push({
url: createURL('/p-active'),
animated: 'true'
})
}

}

}
</script>
<style>
.active-spce-bet{
   
    flex-direction: row;
}
.club-heading-txt {
font-size: 25px; 
color: #565656;
font-weight: bold;

}
.club-heading-txt-sml {
font-size: 23px; 
color: #565656;
font-weight: bold;

}

.table-row{
    width:800px;
}

.active-srce {

flex-direction: row;
}
.robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
.form-active-title {
font-size: 24px;
padding-top: 10px;
color: #9d9d9d;
font-family:robotoregular;
}
.tbl-active-heading {
font-size: 25px;
padding-top: 10px;
padding-bottom: 10px;
font-weight: bold;
color: #565656;
font-family:robotobold;

}
.thead-row{
flex-direction: column;
}
.tbody-row{
flex-direction:column
}
.md-btn-width {
width: 130px;
}
.md-custom-btn {
flex-direction: row;
justify-content: center;
align-items: center;
border-radius: 2px;
height: 50px;
width: 130px;
min-width: 88px;
position: relative;
cursor: pointer;
}
.md-btn-label {
color: #fff;
font-size: 21px;
text-transform: uppercase;
font-weight: 500;
cursor: pointer;
font-family:robotoregular;
}
.btn-color {
background-color: #3b371e;
}
.col {
display: flex;
flex-direction: column;
background-color: #e0e2e5;
}

.active-row {
display: flex;
flex-direction: row;
background-color: #e0e2e5;
}

.card-active {
background-color: #ffffff;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 15px;
padding-right: 15px;
margin-bottom: 20px;
border-radius: 4px;
margin: 10px;
justify-content: center;
}
/* Button CSS */




.heading-active {
font-size: 25px;
padding-top: 5px;
font-weight: bold;
color: #565656;
font-family:robotoregular;
}



.shadow {
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}

.topheader {
font-size: 25px;
padding-left: 15px;
padding-top: 20px;
font-weight: bold;
color: #949494;
font-family:robotoregular;
}


.tab-text-font-size {
font-size: 30px;
font-family:robotoregular;
}

.tab-flex-row3 {
flex-direction: row;
flex-wrap: wrap;
}
/* @@ */

.row-simple {
display: flex;
flex-direction: row;
background-color: white;
padding-bottom: 10px;
padding-top: 3px;
}

.col-simple {
display: flex;
flex-direction: column;
background-color: #e0e2e5;
}

.list-item-padding {
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
}

.mouse-pointer {
cursor: pointer;
}

.filter-label-text {
color: #9d9d9d;
font-size: 12px;
font-family:robotoregular;
}

.headspace {
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
font-size: 15px;
font-weight: 600;
font-family:robotoregular;
}

.row1 {
display: flex;
flex-direction: row;
background-color: rgb(224, 226, 229);
}



.row-type {
padding-right: 27px;
background-color: white;
padding-bottom: 4px;
padding-top: 4px;
}

.flex-row-to-column-360 {
flex-direction: column;
}

.tab-flex-row {
flex-direction: row;
}

.tab-flex-row1 {
flex-direction: row;
}

.tab-font-size {
font-size: 25px;
font-family:robotoregular;
}

.tab-box-padding {
padding-top: 10px;
padding-left: 10px;
padding-right: 10px;
padding-bottom: 10px;
margin-right: 40px;
}

.flex-row {
flex-direction: column;
}

.nx-flex-column {
flex-direction: column;
}

.nx-flex-bt-marg {
margin-bottom: 20px;
}

.flex-direction-change {
flex-direction: row;
}

.flex-column {
flex-direction: column;
}

.flex-row {
flex-direction: row;
}

.add-border {
border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-right-color: #fff;
border-left-color: #fff;
border-bottom-color: #e7e7e7;
}

.add-border1 {
border-width: 1px;
border-style: solid;
border-top-color: #6e6d6d;
border-right-color: #6e6d6d;
border-left-color: #6e6d6d;
border-bottom-color: #6e6d6d;
}

.box {
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
}

.C {
flex: 1
}
.active-bor-show {
border-bottom:3px solid; 
width: 253px;
margin-top: 3px;
}
.active-tab-button-width {
    width: 270px;
}
/* iphone */

@media (min-width: 320px) {
    .active-tab-button-width {
    width: 130px;
}
    .md-btn-width {
width: 120px;
}
.md-custom-btn {
flex-direction: row;
justify-content: center;
align-items: center;
border-radius: 2px;
height: 40px;
width: 120px;
min-width: 88px;
position: relative;
cursor: pointer;
}
    .md-btn-label {
        color: #fff;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        font-family:robotoregular;
    }
    .form-active-title {
        font-size: 14px;
        padding-top: 10px;
        color: #9d9d9d;
        font-family:robotoregular;
    }
    .tbl-active-heading {
        font-size: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-weight: bold;
        color: #565656;
        font-family:robotobold;

    }
    .club-heading-txt {
        font-size: 15px; 
    }
     .club-heading-txt-sml {
        font-size: 13px; 
    }
.active-srce {
    flex-direction: row;
}
.active-bor-cont-sel {
    background-color: white;
    width: 105px;
    margin-left: 8px;
    padding-top: 25px;
    /* padding-left: 9px; */
    padding-bottom: 10px;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: #fff;
    border-left-width: 1px;
    border-left-color: #fff;
    border-right-width: 1px;
    border-right-color: #fff;
    border-bottom-width: 2px;
    border-bottom-color: #3b371e;
    margin-bottom: 20px;
}
.active-bor-date-sel {
    background-color: white;
    width: 155px;
    margin-left: 8px;
    padding-top: 25px;
    /* padding-left: 9px; */
    padding-bottom: 10px;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: #fff;
    border-left-width: 1px;
    border-left-color: #fff;
    border-right-width: 1px;
    border-right-color: #fff;
    border-bottom-width: 2px;
    border-bottom-color: #3b371e;
    margin-bottom: 20px;
}

.active-pad-top-bot-show {
padding-bottom: 10px;
padding-top: 10px;
}
.active-pad-left-show {
padding-left: 10px;
}
.active-char-bold-color {
font-size: 35px;
color: #9d9d9d;
}
.active-prog-hide {
display: none;
}
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
}
.flex-row-content-hidden {
overflow: scroll;
}
.heading-active {
font-size: 15px;
padding-top: 5px;
font-weight: bold;
color: #565656;
font-family:robotoregular;
}
.text1 {
font-weight: bold;
font-size: 14px;
padding-bottom: 5px;
font-family:robotoregular;
}
.text2 {
display: flex;
color: #6e6d6d;
font-size: 14px;
font-family:robotoregular;
}
.text3 {
color: #6e6d6d;
font-size: 13px;
font-weight: bold;
font-family:robotoregular;
}
.card {
background-color: #ffffff;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 15px;
padding-right: 15px;
margin-bottom: 20px;
border-radius: 4px;
margin: 10px;
flex: 1
}
/* .row-simple
{
display: flex;
flex-direction: row;
flex-wrap: nowrap;
height: auto;
justify-content: start;
background-color:white; 
padding-bottom:20px; 
} */
}
/* Small Device / Tab */

@media (min-width: 768px) {
.active-box{
width:150%;

}
.active-prog-hide {
display: block;
}
.flex-row {
flex-direction: row;
}
.item-alignment {
align-items: left;
}
.nx-flex-bt-marg {
margin-bottom: 10px;
}
.flex-direction-change {
flex-direction: row;
}
.heading-active {
font-size: 15px;
padding-top: 5px;
font-weight: bold;
color: #565656;
font-family:robotoregular;
}
.text1 {
font-weight: bold;
font-size: 14px;
padding-bottom: 5px;
font-family:robotoregular;
}
.text2 {
display: flex;
color: #6e6d6d;
font-size: 14px;
font-family:robotoregular;
}
.text3 {
color: #6e6d6d;
font-size: 13px;
font-weight: bold;
font-family:robotoregular;
}
.card {
background-color: #ffffff;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 15px;
padding-right: 15px;
margin-bottom: 20px;
border-radius: 4px;
margin: 10px;
}
}
/* Medium Device Laptops and Desktops */

@media (min-width: 992px) {
    .table-row{
    width:100%;
}

.active-table-width-big {
    width: 100%;
}
.active-box{
width:150%;

}
.flex-row {
flex-direction: row;
}
.nx-flex-column {
flex-direction: row;
}
.outer-flex-col {
flex-direction: column;
}
.tab-flex-row {
flex-direction: row;
}
.tab-flex-row1 {
flex-direction: row;
flex-wrap: nowrap;
}
.tab-font-size {
font-size: 25px;
font-family:robotoregular;
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
.card {
background-color: #ffffff;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 15px;
padding-right: 15px;
margin-bottom: 20px;
border-radius: 4px;
margin: 10px;
}
.box {
padding-top: 5px;
padding-bottom: 5px;
padding-left: 5px;
padding-right: 5px;
}
.sub-row {
flex-direction: row;
}
.row-simple {
display: flex;
flex-direction: row;
background-color: white;
padding-bottom: 6px;
padding-top: 3px;
}
.heading-active {
font-size: 15px;
padding-top: 5px;
font-weight: bold;
color: #565656;
font-family:robotoregular;
}
.text1 {
font-weight: bold;
font-size: 14px;
padding-bottom: 5px;
font-family:robotoregular;
}
.text2 {
display: flex;
color: #6e6d6d;
font-size: 14px;
font-family:robotoregular;
}
.text3 {
color: #6e6d6d;
font-size: 13px;
font-weight: bold;
font-family:robotoregular;
}
.topheader {
font-size: 13.5px;
padding-left: 15px;
padding-top: 20px;
font-weight: bold;
color: #949494;
font-family:robotoregular;
}
.select {
border-bottom: 3px solid;
display: inline-table;
background-color: white;
width: 69px;
border-width: 1px;
border-color: #f4f5f7;
margin-left: 8px;
padding-top: 19px;
padding-bottom: 10px;
color: black;
}
.img {
width: 50px;
height: 50px;
}
/* .img-share
{
width:35px;
height:30px ;
} */
.selectbor {
border-bottom: 2px solid;
display: inline-table;
}
.active-prog-hide {
display: block;
}
}
</style>