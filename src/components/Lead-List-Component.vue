<template>
    <div class="lead-card-wrapper-ld-mgmt shadow">
        <!-- Web and Tab -->
        <div v-if="platform == 'Web'" class="nx-flex-row-ld-mg nx-flex-direction-change-ld-mg show-hide">
            <div class="nx-flex-column-ld-mg ">
                <div class="nx-flex-row-ld-mg items-align-center" style="background-color: #f9f9f96b;">
                    <div class="circle-wraper nx-flex-column-ld-mg items-align-center" >
                        <div class="profile-circle" :style="{'background-color':statusColors.bgColor}">
                            <text class="lead-list-crcl-title">{{ leadData.personName | nameShorter}}</text>
                        </div>
                        <text class="status-text" :style="{ color: statusColors.statusStyle}">{{leadData.status}}</text>
                    </div>
                    <div class="box flex-box-size-01">
                        <div class="nx-flex-column-ld-mg">
                            <div>
                                <div class="nx-flex-row-ld-mg nx-flex-direction-change-ld-mg">
                                    <div class="box box-margin-btm ">
                                        <text class="data-text bold-text large-text">{{leadData.personName | to-capitlaize}}</text>
                                    </div>
                                    <div class="box box-margin-btm ">
                                        <text class="data-text">{{leadData.id | userIdShorter }}</text>
                                    </div>
                                    <div class="box flex-box-size-01 box-margin-btm ">
                                        <text class="data-text large-text">{{leadData.planType}}</text>
                                    </div>
                                </div>
                            </div>
                            <div class="center-bottom-border ">
                                
                            </div>
                        
                            <div class="box nx-flex-row-ld-mg nx-flex-flow-wrap-ld-mgmt nx-flex-wrap-ld-mgmt">
                                <div class="box col-1-ld-mgmt">
                                    <text class="label-font-size large-text">Date of Allocation</text>
                                    <text class="data-text ">{{leadData.allocationDate}}</text>
                                </div>
                                <div class="box col-1-ld-mgmt">
                                    <text class="label-font-size large-text">Date of Appointment</text>
                                    <text class="data-text ">{{leadData.appointDate}}</text>
                                </div>
                                <div class="box col-1-ld-mgmt">
                                    <text class="label-font-size">Address</text>
                                    <text class="data-text large-text">{{leadData.address}}</text>
                                </div>
                                
                                <div class="box col-1-ld-mgmt">
                                    <text class="label-font-size large-text">Mobile No.</text>
                                    <text class="data-text ">{{leadData.mobileNo}}</text>
                                </div>
                                <div class="box col-1-ld-mgmt">
                                    <text class="label-font-size large-text">Allocated by</text>
                                    <text class="data-text ">{{leadData.allocatedBy}}</text>
                                </div>
            
                                <div  v-if="platform==='Web'" class="box lead-button-width">
                                    <div class="lead-custom-btn" @click.native="getLeadsFormDB()">
                                        <text class="lead-btn-lbl global-black-text cursor-pointer-globle">Update</text>
                                    </div>
                                </div>
                                <!-- not required becouse button is only show in browser -->
                                <!-- <div v-if="platform !=='Web'" class="box lead-button-width">
                                    <div class="lead-custom-btn" @click="jump('/leadmasterpage/statuslead')">
                                        <text class="lead-btn-lbl global-black-text">Update</text>
                                    </div>
                                </div> -->
                            </div>


                        </div>
                    </div>
                      <!-- Action -->
                    <div class="action-bar-padding ">
                        <div class="nx-flex-column-ld-mg">
                            <div class="box action-round-button">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>
                            </div>
                            <div class="box action-round-button">
                                <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/notification/sms_black_48x48.png"></image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- Mbile Web -->

        <div v-if="platform == 'Web'" style="padding:20px" class="mobile-show" @click.native="jump('/leadmasterpage/statuslead')">
            <div class="nx-flex-row-ld-mg items-align-center">
                <div class="box">
                    <!-- Avtar -->
                    <div class="profile-circle">
                        <text class="lead-list-crcl-title">{{ leadData.personName | nameShorter}}</text>
                    </div>
                </div>
                <div class="box flex-box-size-01">
                    <text class="user-name-text">{{leadData.personName| to-capitlaize}}</text>
                    <text class="status-text" :style="{ color: statusColors.statusStyle}">{{leadData.status}}</text>
                </div>
                <div class="box call-active" @click="call()">
                    <image class="action-button cursor-pointer-globle" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                </div>
            </div>
            
        </div>

        <!-- APK -->
        <div  v-if="platform !== 'Web'" class="nx-flex-row-ld-mg items-align-center card-padding-ld-mgmt onActive center-bottom-border" @click="jump('/leadmasterpage/statuslead')">
            <div class="box">
                <!-- Avtar -->
                <div class="profile-circle">
                     <text class="lead-list-crcl-title">SS</text>
                </div>
            </div>
            <div class="box flex-box-size-01" >
                <text class="user-name-text">{{leadData.name}}</text>
                <text class="status-text" :style="{ color: statusColors.statusStyle}">{{leadData.status}}</text>
            </div>
            <div class="box call-active" @click="call()">
                <image class="action-button " src="https://www.materialui.co/materialIcons/communication/phone_grey_192x192.png"></image>
            </div>
        </div>
    </div>
</template>


<script>

const navigator = weex.requireModule('navigator');
const animation = weex.requireModule('animation')
const modal = weex.requireModule('modal');
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

const colors = ['#073c91', '#5d0ba5', "#31681a", "#242d20", "#a03110", "#035b51", "#b20c22", "#723c43"]

export default {
    props: {
        leadData: Object
    },
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }

        // console.log(this.leadData);

        // this.dbData = this.$store.state.leadFormData;
    },
    mounted() {
        // Status Color changing
        if(this.leadData.status === 'Converted') {
            this.statusColors.statusStyle = this.statusColors.Converted;}
           else if(this.leadData.status === 'Closed') {
            this.statusColors.statusStyle = this.statusColors.closed;
        } 
           else if(this.leadData.status === 'Pending Proposal') {
            this.statusColors.statusStyle = this.statusColors.PendingProposals;
        }
        else  {
            this.statusColors.statusStyle = this.statusColors.open;
        }

        // Color apply on circles
        // let str = this.leadData.name;
        // let charCode = str.charCodeAt(0);

        // if(charCode > 80 || charCode === 84) {
        //     this.statusColors.bgColor = colors[0];
        // }

        // animation code start

    },
    data() {
        return {
            statusColors: {
                closed: '#D04949',
                open: '#e0cb0d',
                PendingProposals:'#3a68b2',
                Converted:'#159e0e',

                statusStyle: '',
                bgColor: ''
            },

            dbData: {}
        }
    },
    
    methods: {
        call() {
            modal.alert({
                message: 'Call Not Active'
            });
        },

        detailsWindow() {
            modal.alert({
                message: 'Comming Soon'
            });
        },

        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },

        getLeadsFormDB() {
            let id = this.leadData.id;
            let self = this;
            let userId = self.$store.state.agentDetails._id
            // Switch POST to PUT
            this.$store.commit('LEAD_FORM_HANDLER', {httpMethod:'PUT'});
            this.$store.commit('LEAD_FORM_HANDLER', {_leadId: id});


            /** Here this commit is used to clear LeadDataForm which is inside at store */
            this.$store.commit('INSERT_LEADS_DATA', {emptyArray: []});
            
            this.GET('getlead_details/'+id, res => {
                if( !res.ok ){
                    self.getJsonpResult = "request failed";
                } else {
                    let data = res.data.errMsg;

                    /**
                     * Not required code becouse changed of API
                     */
                    // for(let i=0; i < data.length; i++) {
                    //     if(id === data[i]._id) {
                    //         self.dbData = data[i];
                    //         console.log('Data Storage 1', self.dbData);
                    //         break;
                    //     }
                    // }

                    /**
                     * Line shifted when API changed
                     */

                    self.dbData = data[0];
                    console.log('Data Storage 2', self.dbData);
                    let formData = {
                    statusLeadData: {
                        _id: id,        /** It is a lead ID */
                        leadStatus:  self.doSentenceCase(self.dbData.leadStatus),
                        appointmentdisPosition:  self.dbData.appointmentdisPosition,
                        start_date: self.dbData.start_date,
                        start_time: self.dbData.start_time,
                        remarksfromUser: self.dbData.remarksfromUser,
                        remarksfromSource: self.dbData.remarksfromSource,
                    },
                    contactLeadData: {
                        address: {
                            line1: self.dbData.address[0].line1,
                            line2: self.dbData.address[0].line2,
                            line3: self.dbData.address[0].line3
                        },
                        state:  self.dbData.state,       /** For country */
                        city:  self.dbData.city,
                        pincode:  self.dbData.pincode,
                        primaryMobile:  self.dbData.primaryMobile,
                        secondaryMobile:  self.dbData.secondaryMobile,
                        landlineNo:  self.dbData.landlineNo,
                    },
                    personalLeadData: {
                        firstName: self.dbData.firstName,
                        lastName: self.dbData.lastName,
                        dob: self.dbData.dob,
                        gender: self.dbData.gender,
                        maritalStatus: self.dbData.maritalStatus,
                        ChildInfo: self.dbData.ChildInfo
                    },
                    professionLeadData: {
                        education: self.dbData.education,
                        incomeGroup: self.dbData.incomeGroup,
                        annuaLincome: self.dbData.annuaLincome,
                        professionType: self.dbData.professionType
                    },
                    productLeadData: {
                        productCategory: self.dbData.productCategory ,
                        productType: self.dbData.productType,
                        solution: self.dbData.solution,
                        expectedPremium: self.dbData.expectedPremium,
                        expectedclosureDate: self.dbData.expectedclosureDate 
                    },
                    exsitLeadData: {
                        HaveLifeInsurance: self.dbData.HaveLifeInsurance,
                        SumAssured: self.dbData.SumAssured,
                        Insurance: self.dbData.Insurance,
                        Insurancedetails: self.dbData.Insurancedetails,
                        riskComensmentDate: self.dbData.riskComensmentDate
                    }
                }

            this.$store.commit('INSERT_LEADS_DATA', {statusLeadData: formData.statusLeadData})
            this.$store.commit('INSERT_LEADS_DATA', {contactLeadData: formData.contactLeadData})
            this.$store.commit('INSERT_LEADS_DATA', {professionLeadData: formData.professionLeadData})
            this.$store.commit('INSERT_LEADS_DATA', {productLeadData: formData.productLeadData})
            this.$store.commit('INSERT_LEADS_DATA', {personalLeadData: formData.personalLeadData})
            this.$store.commit('INSERT_LEADS_DATA', {exsitLeadData: formData.exsitLeadData})
            
            this.$router.push('/leadmasterpage/statuslead');

                }
            });

            
            
        }
    },
    filters: {
        nameShorter(str) {
            if(str !== '') {
                str = str.toUpperCase();
                let arr = str.split(" ");
                let fLatter = arr[0].charAt(0);
                let sLatter = arr[1].charAt(0);
                // fLatter = fLatter.charAt(0);
                // sLatter = sLatter.charAt(0);
                str = fLatter + sLatter;
                
            }
           return str;
        },

        userIdShorter(id) {
            if(id !== '') {
                if (typeof(id) !== undefined) {
                    id = 'L' +id.slice(16, 25).toUpperCase();
                }
            }
            return id;
        }
    }
}
</script>


<style>

    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
    .lead-card-wrapper-ld-mgmt {
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }

    .card-padding-ld-mgmt {
        padding: 20px;
    }
         
    .box {
        padding-top: 10px;
        padding-bottom:10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .large-text {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
    }

    .user-name-text {
        font-size: 32px;
        font-weight: 700px;
        margin-left: 20px;
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

    .lead-card-wrapper-ld-mgmt {
        margin-left:0px;
        margin-right: 0px;
    }

    .text-color-white {
        color: #ffffff;
    }
    
    .text-keep-center {
        text-align: center;
    }
    .text-right {
         text-align: right;
    }
    .nx-flex-flow-wrap-ld-mgmt {
        flex-flow: wrap;
    }

    .items-align-center {
        align-items: center;
    }

    .items-justify-center {
        justify-content: center;
    }

    .self-align {
        align-self: flex-end;
    }

    .nx-flex-wrap-ld-mgmt {
        flex-wrap: wrap;
    }

    .nx-flex-row-ld-mg {
        flex-direction: row;
    }

    .nx-flex-column-ld-mg {
        flex-direction: column;
    }
    .nx-flex-direction-change-ld-mg {
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

    .profile-circle {
        height: 100px;
        width: 100px;
        background-color: #ff581c;
        border-radius: 50px;
    }

    .onActive:active {
        background-color: #e2e2e2;
    }

    .call-active:active{
         background-color: #dfdfdf;
         border-radius: 60px;
    }

    .lead-list-crcl-title {
        position: absolute;
        top: 26%;
        left: 24%;
        color: white;
        font-size: 40px;
        font-weight: 700;
        font-family:robotoregular;
    }

    .status-text {
        font-size: 25px;
        font-weight: bold;
        /* color: #54ad40; */
        /* position: relative;
        top: 0px;
        left: 0px; */
        margin-left: 20px;
        font-family:robotoregular;
    }


    .action-button {
        height: 80px;
        width: 80px;
        padding: 10px;
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

    .col-1-ld-mgmt {
        width: 320px;
    }

    /* .col-2 {
            width: 100%;
    } */

    .custom-btn {
        padding: 15px;
        background-color:#3b371e;
        border-radius: 7px;
        /* width: 140px; */
    }

    .btn-width {
        width: 200px;
    }
    
    @media (min-width: 320px) {
        .box {
            padding-top: 5px;
            padding-bottom:5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .user-name-text {
            font-size: 14px;
            font-weight: 400;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .show-hide {
            display: none;
        }
        .mobile-show {
            display: block;
        }

        .card-padding-ld-mgmt {
            padding: 0px;
        }

        .icon-size {
            height: 30px;
            width: 30px;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

        .col-1-ld-mgmt {
            width: 50%;
        }

        .col-2 {
            width: 100%;
        }

        .label-font-size {
            font-size: 11px;
            font-weight: 400;
            color: #9d9d9d;
            font-family:robotoregular;
        }

        .profile-circle {
            height: 36px;
            width: 36px;
            background-color: blueviolet;
            border-radius: 50%;
        }
        .lead-list-crcl-title {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); 
            font-size: 16px;
            font-weight: 500;
        }

        .status-text {
            font-size: 12px;
            font-weight: bold;
            position: relative;
            top: 0px;
            left: 0px;
            margin-left: 0px;
            font-family:robotoregular;
        }

        .action-bar-padding {
            padding-right: 10px;
            padding-left: 15px;
        }

        .action-button {
            height: 25px;
            width: 25px;
            padding: 10px;
        }

        .action-round-button {
            border-radius: 50%;
        }

        /* .btn-color {
            background-color: rgb(33, 34, 35);
             background-color: #FFFFFF; 
        } */

        .lead-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
            
            border: 1.2px solid #000;
        }

        .lead-btn-lbl {
            font-size : 11px;
            font-weight: 500;
            
            color: #000000;
            font-family:robotoregular;
        }

        /* .lead-custom-btn:active,.lead-btn-lbl:active {
            background-color:rgb(5, 4, 4);
            color: #FFFFFF;
        } */

        .box-margin-btm {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .lead-card-wrapper-ld-mgmt {
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 3px;
        }

        .data-text {
            font-size: 12px;
            font-family:robotoregular;
        }
    }

    @media (min-width: 768px) {
        .nx-flex-direction-change-ld-mg {
            flex-direction: row;
        }

        .profile-circle {
            height: 50px;
            width: 50px;
            background-color: blueviolet;
            border-radius: 50%;
        }

        .circle-wraper {
            padding: 15px;
        }

        .lead-list-crcl-title {
            /* position: absolute;
            top: 25%;
            left: 18%;
            color: white; */
            font-size: 23px;
            /* font-weight: 500;
            font-family:robotoregular; */
        }

        .status-text {
            font-size: 12px;
            font-weight: bold;
            position: relative; 
            top: 5px;
            /* left: 7px; */
            margin-left: 0px;
            font-family:robotoregular;
        }

        .col-1-ld-mgmt {
            width: 30%;
        }

        .col-2 {
            width: 25%;
        }  

        .flex-size-0-5 {
            flex: 0.2;
        }

        .mobile-show {
            display: none;
        }

        .show-hide {
            display: block;
        }
    }

    @media (min-width: 992px) {
        
        .nx-flex-direction-change-ld-mg {
            flex-direction: row;
        }

        .lead-button-width {
            width: 23%;
        }
    }
    
</style>


