<template>
    <!-- Contact Details -->
    <div class="tb-side-container" style=" flex:1;">

        <div class="contact-dtls-frm-card ld-dtls-crd-pd-tp-20 card-wrap-ProductLead">
            <div class="productDetails-titleBorder ">
                <text class="productDetails-title">Product Deatails</text>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">

                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Product Category</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-down :option-list="productList"></apk-drop-down>
                    </div>
                    <div v-if="platform == 'Web'">
                        <select v-model="productCategory" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in productList" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>

                <!--  -->
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Product Type</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-down :option-list="productTypeList"></apk-drop-down>
                    </div>
                    <div v-if="platform == 'Web'">
                        <select v-model="productType" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in productTypeList" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <!--  -->
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Solution</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px;">
                        <apk-drop-down :option-list="solutionsList"></apk-drop-down>
                    </div>
                    <div v-if="platform == 'Web'">
                        <select v-model="solution" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in solutionsList" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
                <!--  -->

                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">

                    <vx-input-box 
                    vx-label="Expected Premium"
                    vx-type=number 
                    vx-placeholder="Expected Premium Amount" 
                    :vx-model="expectedPremium" 
                    message="Please enter Ammount"
                            :hasRequired="true"
                    @valueReading="expectedPremium=$event.value">
                    </vx-input-box>
                </div>

            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <!-- class="drp-mrgin-left-5" -->
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">

                    <vx-input-box 
                    vx-type="date" 
                    vx-label="Expected Closure Date" 
                    vx-placeholder="" 
                    :vx-model="clouserDate" 
                    message="Please Select Date"
                            :hasRequired="true"
                    
                    @valueReading="clouserDate=$event.value">
                    </vx-input-box>
                </div>
                <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                </div>

            </div>

        </div>
        <div v-if="platform ==='Web'" class="contact-dtls-frm-card product-btn-space product-btn-padding card-wrap-ProductLead" style="margin-bottom:20px">
            <div class=" activity-product-lead-btn-width" style="padding:10px;">

                <div class=" cursor-pointer-globle" @click.native="jump('/leadmasterpage/leaddetails/existingLead')">
                    <vx-secondary-button btn-name="Previous" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png">
                    </vx-secondary-button>
                </div>
            </div>
            <div class=" activity-product-lead-btn-width" style="padding:10px;">
                <div class=" cursor-pointer-globle" @click.native="onSubmit">
                    <vx-primary-button btn-name="Submit" btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png">
                    </vx-primary-button>
                </div>
            </div>
        </div>


        <div v-if="platform !=='Web'" class="contact-dtls-frm-card product-btn-space card-wrap-ProductLead" style=" flex-direction:row;margin-bottom:10px;">
            <div class=" activity-product-lead-btn-width" style="padding:20px;">
                <div class=" cursor-pointer-globle" @click="jump('/leadmasterpage/leaddetails/existingLead')">
                    <vx-secondary-button btn-name="Previous" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png">
                    </vx-secondary-button>
                </div>
            </div>
            <div class=" activity-product-lead-btn-width" style="padding:20px;">

                <div class=" cursor-pointer-globle" @click="openNoAnimationMask()">
                    <vx-primary-button btn-name="Submit" btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png">
                    </vx-primary-button>
                </div>
            </div>
        </div>
        <div v-if="showSuccess === true">
            <popup>
                <div class="to-do-flx-row to-do-task-title">
                    <div class="email-head">
                        <text class="to-do-title-font">Success</text>
                    </div>
                </div>
                <div class="popup-image-row">
                    <div>
                        <image src="https://png.icons8.com/color/50/000000/ok.png" class="icon" />
                    </div>
                    <div class="msg-color-font">
                        <text class="font-size" style="padding-left:05px">Details Successfully Submitted.</text>
                    </div>
                </div>

                <div class="todo-footer to-do-flx-row-rvrs">

                    <div v-if="platform === 'Web'" class="activity-product-lead-btn-width cursor-pointer-globle">

                        <vxPrimaryButton btn-name="OK" btn-icon="https://www.materialui.co/materialIcons/action/done_white_192x192.png" @click.native="success(2)"></vxPrimaryButton>
                    </div>
                </div>
            </popup>
        </div>
        <div v-if="platform !== 'Web'">
            <wxc-mask height="330" width="600" border-radius="0" duration="200" mask-bg-color="#FFFFFF" :has-animation="hasAnimation"
                :has-overlay="true" :show="show" @wxcMaskSetHidden="wxcMaskSetHidden">
                <div class="content">
                    <div class="title-bar">
                        <text class="popup-title-text">Success</text>
                    </div>
                    <div class="popup-image-row" style="align-items:center">
                        <div style="padding-left:20px;">
                            <image src="https://raw.githubusercontent.com/google/material-design-icons/master/action/drawable-xhdpi/ic_check_circle_black_48dp.png"
                                class="icon" />
                        </div>
                        <div class="msg-color-font">
                            <text class="cd-font-size">
                                Details Successfully Submitted.
                            </text>
                        </div>
                    </div>
                    <div class="popup-btn ">
                        <div class="popup-cd-btn-width">
                            <vx-Primary-Button btn-icon="https://www.materialui.co/materialIcons/action/done_white_192x192.png" btn-name="OK"></vx-Primary-Button>
                        </div>
                    </div>

                </div>
            </wxc-mask>
        </div>

    </div>

</template>

<script>
    // import applicationTab from './ApplicationTab.vue'
    import appHeader from "../../components/Application/AppHead.vue";
    import leadHeader from "../../components/Proposal/LeadHeader.vue";
    import vxInputBox from "../../components/vx-input-box/vx-input-box.vue";
    import vxPrimaryButton from "../../components/vx-primary-button/vx-primary-button.vue";
    import vxSecondaryButton from "../../components/vx-primary-button/vx-scondary-button.vue";
    import popup from "../Calendar/Todo-pop-up.vue";
    import apkDropDown from "../CFR/cfr-dropDown-apk";
    import switcher from "../../components/GenderView/genderView";
    import {
        WxcMask
    } from "weex-ui";

    import moment from "moment";

    var productList = ["Traditional", "Protection", "ULIP"];
    var productTypeList = ["Par", "Non Par"];
    var solutionsList = ["Dhan Labh", "Cash Income", "Cover Plus"];

    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment;
    const invalid = "- invalid -";
    var stream = weex.requireModule("stream");
    const modal = weex.requireModule("modal");

    export default {
        created() {
            if (typeof WXEnvironment === "object") {
                this.platform = WXEnvironment.platform || unknown;
                this.deviceWidth = WXEnvironment.deviceWidth || unknown;
            }

            this.leadPostObject = this.$store.getters.getLeadFormData;

            if (this.leadPostObject[4]) {
                this.productCategory = this.leadPostObject[4].productLeadData.productCategory;
                this.productType = this.leadPostObject[4].productLeadData.productType;
                this.solution = this.leadPostObject[4].productLeadData.solution;
                this.expectedPremium = this.leadPostObject[4].productLeadData.expectedPremium;
                this.clouserDate = this.leadPostObject[4].productLeadData.expectedclosureDate;
            }
            console.log(this.leadPostObject);

            // console.log('user_id :  '+   this.$store.state.userId);
        },
        components: {
            vxInputBox,
            vxPrimaryButton,
            vxSecondaryButton,
            apkDropDown,
            switcher,
            popup,
            WxcMask
            // , applicationTab
        },
        data() {
            return {
                moment: moment,
                productList,
                productTypeList,
                solutionsList,

                productCategory: "",
                productType: "",
                solution: "",
                expectedPremium: "",
                clouserDate: "",

                leadPostObject: {},

                showSuccess: false,
                show: false,
                overlayCanClose: true,
                isFalse: false,
                hasAnimation: false,
                headerName: "Proposal Fulfilmemt",
                platform: invalid,
                deviceWidth: invalid
            };
        },
        
        methods: {
            success(caseid) {
                switch (caseid) {
                    case 1:
                        this.showSuccess = true;
                        break;
                    case 2:
                        this.showSuccess = false;
                        break;
                }
            },

            toast(src, color, msg) {
                this.$store.state.shownotificationtoast = true;
                this.$store.state.imagelink = src;
                this.$store.state.notificationTextColor = color;
                this.$store.state.notificationBody = msg;
                console.log(this.$store.state.notificationTitle);
                setTimeout(() => {
                    this.$store.state.shownotificationtoast = false;
                }, 2000);
            },
            openMask(e) {
                this.show = true;
                this.hasAnimation = true;
            },
            wxcMaskSetHidden() {
                this.show = false;
            },
            openNoAnimationMask(e) {
                this.show = true;
                // this.hasAnimation = false;
            },

            jump(to) {
                if (this.$router) {
                    this.$router.push(to);
                }
            },

            onSubmit() {
				var self = this;
				
				/**
				 * Invalid date error
				 */
				
				/**
				 * let timeStamp = Date.parse(this.clouserDate);
				 * if (isNaN(timestamp) == false) {
				 * var d = new Date(timestamp);
				 * }
				 */
				

                // It is for conditions
                let httpMethod = this.$store.getters.getLeadFormHandler.httpMethod;
                console.log(httpMethod);
                let thisFormData = {
                    productCategory: this.productCategory,
                    productType: this.productType,
                    solution: this.solution,
                    expectedPremium: this.expectedPremium,
                    expectedclosureDate: moment(this.clouserDate).format("YYYY-MM-DD")
                };

                console.log(thisFormData);

                this.$store.commit("INSERT_LEADS_DATA", {
                    productLeadData: thisFormData
                });
                if (self.leadPostObject.length !== 0) {
                    var userId = self.$store.state.agentDetails._id;
					// console.log (userId , 'userId')
					
					/**
					 * Here I am trying a condition, before condition I wrote about problem
					 * The problem is when I missed some forms to fill then and submit form it gives me error: it is bug
					 * 
					 * I am going to solve this using some sort of conditions
					 * 
					 * All Conditions are independent that's reasion I have used all if confditions
					 * insted of else if
					 */

					if(0 in self.leadPostObject === false) {
						// console.log('Data is not there in status lead form');
						self.leadPostObject[0] = {
							statusLeadData: {
								leadStatus: '',
								appointmentdisPosition: '',
								start_date: '',
								start_time: '',
								remarksfromUser: '',
								remarksfromSource: '',
                                teamMembers:''
							}
						};
					} if (1 in self.leadPostObject === false) {
						self.leadPostObject[1] = {
							personalLeadData: {
								firstName: '',
								lastName: '',
								dob: '',
								gender: '',
								maritalStatus: '',
								ChildInfo: [],
								email: ''
							}
						}
					} if (2 in self.leadPostObject === false) {
						self.leadPostObject[2] = {
							contactLeadData: {
								address: {
									line1: '',
									line2: '',
									line3: '',
								},
								state: '',
								city: '',
								pincode: '',
								primaryMobile: '',
								secondaryMobile: '',
								landlineNo: ''
							}
						}
					} if (3 in self.leadPostObject === false) {
						self.leadPostObject[3] = {
							professionLeadData: {
								education: '',
								incomeGroup: '',
								annuaLincome: '',
								professionType: ''
							}
						}
					} if (4 in self.leadPostObject === false) {
						self.leadPostObject[4] = {
							productLeadData: {
								productCategory: '',
								productType:'',
								solution: '',
								expectedPremium: '',
								expectedclosureDate: ''
							}
						} 
					} if (5 in self.leadPostObject === false) {
						self.leadPostObject[5] = {
							exsitLeadData: {
								HaveLifeInsurance: '',
								SumAssured: '',
								Insurance: '',
								Insurancedetails: [],
								riskComensmentDate: ''
							}
						}
					}


                    let formData = {
                        user_id: userId,
                        // user_id : "5a8c1e7d07151804a888eafc",
                        // lead_id:    self.leadPostObject[0].statusLeadData._id,
                        leadStatus: self.leadPostObject[0].statusLeadData.leadStatus,
                        appointmentdisPosition: self.leadPostObject[0].statusLeadData.appointmentdisPosition,
                        start_date: self.leadPostObject[0].statusLeadData.start_date,
                        start_time: self.leadPostObject[0].statusLeadData.start_time,
                        remarksfromUser: self.leadPostObject[0].statusLeadData.remarksfromUser,
                        remarksfromSource: self.leadPostObject[0].statusLeadData.remarksfromSource,
                        teamMembers:self.leadPostObject[0].statusLeadData.teamMembers,

                        line1: self.leadPostObject[2].contactLeadData.address.line1,
                        line2: self.leadPostObject[2].contactLeadData.address.line2,
                        line3: self.leadPostObject[2].contactLeadData.address.line3,
                        state: self.leadPostObject[2].contactLeadData.state /** For country */ ,
                        city: self.leadPostObject[2].contactLeadData.city,
                        pincode: self.leadPostObject[2].contactLeadData.pincode,
                        primaryMobile: self.leadPostObject[2].contactLeadData.primaryMobile,
                        secondaryMobile: self.leadPostObject[2].contactLeadData.secondaryMobile,
                        landlineNo: self.leadPostObject[2].contactLeadData.landlineNo,
                        mailingAddressSecond: self.leadPostObject[2].contactLeadData.mailingAddressSecond,
                        
                        firstName: self.leadPostObject[1].personalLeadData.firstName,
                        lastName: self.leadPostObject[1].personalLeadData.lastName,
                        dob: self.leadPostObject[1].personalLeadData.dob,
                        gender: self.leadPostObject[1].personalLeadData.gender,
                        maritalStatus: self.leadPostObject[1].personalLeadData.maritalStatus,
                        ChildInfo: self.leadPostObject[1].personalLeadData.ChildInfo,
                        email: "dk@grr.la",

                        education: self.leadPostObject[3].professionLeadData.education,
                        incomeGroup: self.leadPostObject[3].professionLeadData.incomeGroup,
                        annuaLincome: self.leadPostObject[3].professionLeadData.annuaLincome,
                        professionType: self.leadPostObject[3].professionLeadData.professionType,
                        //
                        productCategory: self.leadPostObject[4].productLeadData.productCategory,
                        productType: self.leadPostObject[4].productLeadData.productType,
                        solution: self.leadPostObject[4].productLeadData.solution,
                        expectedPremium: self.leadPostObject[4].productLeadData.expectedPremium,
                        expectedclosureDate: self.leadPostObject[4].productLeadData.expectedclosureDate,

                        HaveLifeInsurance: self.leadPostObject[5].exsitLeadData.HaveLifeInsurance,
                        SumAssured: self.leadPostObject[5].exsitLeadData.SumAssured,
                        Insurance: self.leadPostObject[5].exsitLeadData.Insurance,
                        Insurancedetails: self.leadPostObject[5].exsitLeadData.Insurancedetails,
                        riskComensmentDate: self.leadPostObject[5].exsitLeadData.riskComensmentDate
                    };

                    console.log(formData.lead_id);

                    if (httpMethod === "POST") {
                        //
                        stream.fetch({
                                method: "POST",
                                url: "http://159.89.161.64:5010/secure/user/addlead",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(formData),
                                type: "json"
                            },
                            function(response) {
                                var errcodeAPI = -1;
                                if (response.data.errCode == errcodeAPI) {
                                    console.log("get in progress:" + JSON.stringify(response));
                                    // modal.toast({
                                    //     message: 'Leads Are Updated',
                                    //     duration: 1
                                    // })

                                    self.toast("", "green", "Sucesss");
                                    self.$store.commit("INSERT_LEADS_DATA", {
                                        emptyArray: []
                                    });
                                    self.$router.push("/leadMaster/all_leads");
                                } else if (response.data.errCode === 4) {
                                    self.toast("", "red", "Database Error");
                                } else if (response.data.errCode === 9) {
                                    self.toast("", "red", "Lead Phone Number Already Exists");
                                } else if (response.data.errCode === 16) {
                                    self.toast("", "red", "Error While Book Appointment");
                                } else if (response.data.errCode === 1) {
                                    self.toast("", "red", "Mandatory Filed not found");
                                } else if (response.data.errCode === 576) {
                                    self.$store.commit('SAVE_RESPONSE', response.data);
                                    self.$router.push("/leadmasterpage/statuslead");
                                } else if (response.data.errCode === 729) {
                                    self.$store.commit('SAVE_RESPONSE', response.data);
                                    self.$router.push("/leadmasterpage/statuslead");
                                } else if (response.data.errCode === 625) {
                                    self.$store.commit('SAVE_RESPONSE', response.data);
                                    self.$router.push("/leadmasterpage/statuslead");
                                }
                            }
                        );
                    } else if (httpMethod === "PUT") {
                        let leadID = self.$store.getters.getLeadFormHandler._leadId;
                        console.log("Lead ID ==> ", leadID);
                        console.log("PUT METHOD");
                        console.log(formData);
                        // self.$store.commit('INSERT_LEADS_DATA', {emptyArray: []});
                        // url: "http://172.16.59.163:5005/secure/user/updateLead/" + leadID,
                        stream.fetch({
                                method: "PUT",
                                url: "http://159.89.161.64:5010/secure/user/updateLead/" + leadID,
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(formData),
                                type: "json"
                            },
                            function(response) {
                                var errcodeAPI = -1;
                                if (response.data.errCode == errcodeAPI) {
                                    console.log("get in progress:" + JSON.stringify(response));
									self.toast("", "green", "Lead Updated");
									
									self.$store.commit("INSERT_LEADS_DATA", {
                                        emptyArray: []
                                    });

                                    self.$router.push("/leadMaster/all_leads");
                                } else if (response.data.errCode === 4) {
                                    self.toast("", "red", "Database Error");
                                } else if (response.data.errCode === 9) {
                                    self.toast("", "red", "Lead Phone Number Already Exists");
                                } else if (response.data.errCode === 16) {
                                    self.toast("", "red", "Error While Book Appointment");
                                } else if (response.data.errCode === 576){
                                    self.$store.commit('SAVE_RESPONSE', response.data);
                                    self.$router.push("/leadmasterpage/statuslead");
                                }
                            }
                        );
                    }
                }
            }
        }
    };
</script>

<style>
    /*Button Arrow CSS*/
    /* New Class make by usama */
    
    .ld-cntc-dtls-flx-dir {
        flex-direction: column;
    }
    
    .product-btn-padding {
        flex-direction: row;
        margin-bottom: 10px;
        padding: 12px;
    }
    
    .contact-dtls-frm-card {
        /* width:70%; */
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    }
    
    .tb-side-container {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .product-btn-space {
        justify-content: space-between;
    }
    
    .activity-product-lead-btn-width {
        width: 300px;
    }
    
    .cntct-frm-lbl-size {
        font-size: 24px;
        /* padding-top: 10px; */
        color: #9d9d9d;
    }
    /* @usama  */
    /* This margin class is used to provide margin to all individual
        filed */
    
    .mbt-i-ld-20 {
        margin-bottom: 30px;
    }
    
    .mrgn-rw-fld-lft-rgt-10 {
        margin-left: 20px;
        margin-right: 20px;
    }
    
    .ld-dtls-crd-pd-tp-20 {
        padding-top: 25px;
    }
    
    .card-wrap-ProductLead {
        margin: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
    }
    
    .msg-color-font {
        font-family: robotoregular;
        color: #0000;
    }
    
    .icon {
        height: 40px;
        width: 40px;
    }
    
    .popup-image-row {
        flex-direction: row;
        padding: 37px;
        justify-content: center;
    }
    
    .cd-font-size {
        font-size: 26px;
        margin-left: -60px;
    }
    
    .title-bar {
        width: 600px;
        height: 70px;
        background-color: #3b371e;
    }
    
    .popup-title-text {
        padding-top: 20px;
        padding-left: 20px;
        font-size: 30px;
        font-family: robotoregular;
        color: #fff;
    }
    
    .popup-btn {
        height: 100px;
        width: 600px;
        background-color: #ebebeb;
    }
    
    .popup-cd-btn-width {
        width: 150px;
        position: absolute;
        right: 15px;
        bottom: 15px;
    }
    /* Salman */
    
    .productDetails-title {
        font-size: 24px;
        font-family: robotoregular;
    }
    
    .productDetails-titleBorder {
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 5px;
        border-bottom-color: #3b371e;
        margin-left: 20px;
        margin-bottom: 30px;
        width: 180px;
    }
    
    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .activity-product-lead-btn-width {
            width: 50%;
        }
        /* This margin class is used to provide margin to all individual
        filed */
        .mbt-i-ld-20 {
            margin-bottom: 20px;
        }
        .mrgn-rw-fld-lft-rgt-10 {
            margin-left: 15px;
            margin-right: 15px;
        }
        .frm-hedng-bold-16 {
            font-size: 16px;
            font-weight: 700;
            font-family: robotoregular;
        }
        /* Card top padding */
        .ld-dtls-crd-pd-tp-20 {
            padding-top: 20px;
        }
        .msg-color-font {
            font-family: robotoregular;
            color: #0000;
        }
        .icon {
            height: 20px;
            width: 20px;
        }
        .popup-image-row {
            flex-direction: row;
            padding: 37px;
            justify-content: center;
        }
        .font-size {
            font-size: 19px;
            margin-left: 06px;
        }
        .card-wrap-ProductLead {
            border: none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
            margin: 10px 5px 20px 5px;
        }
        .productDetails-title {
            font-size: 14px;
            font-family: robotoregular;
        }
        .productDetails-titleBorder {
            border-bottom-width: 4px;
            margin-left: 15px;
            margin-bottom: 20px;
            width: 113px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
        }
        .activity-product-lead-btn-width {
            width: 23%;
        }
        /* switching class */
        .ld-cntc-dtls-flx-dir {
            flex-direction: row;
        }
        /* This class is used to provide padding to row */
        .pd-rw-lft-rgt-10 {
            padding-left: 10px;
            padding-right: 10px;
        }
        /* This class is used to provide margin-left and right rows fileds */
        .mrgn-rw-fld-lft-rgt-10 {
            margin-left: 10px;
            margin-right: 10px;
        }
        /* alignment class for fixing elements at center */
        .cntc-itms-algn-cntr {
            align-items: center;
            justify-content: space-between;
        }
        .msg-color-font {
            font-family: robotoregular;
            color: #0000;
        }
        .icon {
            height: 20px;
            width: 20px;
        }
        .popup-image-row {
            flex-direction: row;
            padding: 37px;
            justify-content: center;
        }
        .font-size {
            font-size: 17px;
            margin-left: 06px;
        }
        .card-wrap-ProductLead {
            margin: 10px;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .activity-product-lead-btn-width {
            width: 15%;
        }
        .msg-color-font {
            font-family: robotoregular;
            color: #0000;
        }
        .icon {
            height: 20px;
            width: 20px;
        }
        .popup-image-row {
            flex-direction: row;
            padding: 37px;
            justify-content: center;
        }
        .font-size {
            font-size: 16px;
            margin-left: 06px;
        }
    }
</style>