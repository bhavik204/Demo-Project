<template>
        <!-- Professionals Details -->
     
     
        
                        <div class="side-container" style=" flex:1;">
        
                            <div class="card row">
        
        
                            
                                <div class="table-row">
                                    
                                        <div style="flex-direction:column;flex:1" class="table-row-details">
                                                <text style="flex:1" class="form-title">Education</text>
                                                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="titleType">{{value}}</text>
                                                <div class="drop-down" v-if="platform == 'Web'">
                                                    <select v-model="education">
                                                        <option class="dropdown-opt" v-for="calc in titleWeb">{{calc}}</option>
                                                    </select>
                                                </div>
                                            </div>
        
                                  
                                      <div style="flex-direction: column;flex:1" class="table-row-details">
                                <text style="flex:1" class="form-title">Profession Type</text>
                                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="martialType">{{value2}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="profession_type">
                                        <option class="dropdown-opt" v-for="calc in martialWeb">{{calc}}</option>
                                    </select>
                                </div>
                            </div>
                                </div>
                                <div class="table-row">
                                     <div style="flex-direction: column;flex:1" class="table-row-details">
                                <text style="flex:1" class="form-title">Income Group</text>
                                <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="nationality">{{value3}}</text>
                                <div class="drop-down" v-if="platform == 'Web'">
                                    <select v-model="income_grp">
                                        <option class="dropdown-opt" v-for="calc in nationalityWeb">{{calc}}</option>
                                    </select>
                                </div>

                            </div>
        
                                     <div style="flex-direction: column;flex:1;" class="table-row-col-details">
                                        <text class="form-title">Annual Income</text>
                                        <input class="input" v-model="an_income" type="tel" style="flex:1" />
                                    </div>
                                </div>
        
                              
                                <div class="table-row" style="flex-direction: column;">
                                    <text class="heading"> </text>
                                </div>
                              
                            </div>
                            <div v-if="platform==='Web'" class="card btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;margin-bottom:10px;;">
                                <div class="box activity-history-btn-width" style="padding:10px;">
                                    <!-- <div class="md-custom-btn sec-btn-color" @click.native="jump('/leaddetails/productlead')">
                                        <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                        <text class="md-sec-btn-label ">Back</text>
                                    </div> -->
                                    <div class=" cursor-pointer-globle"  @click.native="jump('/leaddetails/productlead')">
    <vx-secondary-button btn-name="Previous"  btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" ></vx-secondary-button>
    </div>
                                </div>
                                <div class="box activity-history-btn-width" style="padding:10px;">
                                    <!-- <div class="md-custom-btn btn-color" @click.native="submitData()"> -->
                                    <!-- <div class="md-custom-btn btn-color" @click.native="jump('/leaddetails/statuslead')">
                                        <text class="md-btn-label text-color-white">Next</text>
                                        <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                    </div> -->
                                     <div  class=" cursor-pointer-globle" @click.native="jump('/leaddetails/statuslead')">
    <vx-primary-button btn-name="Proceed" icon-side="right" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></vx-primary-button>
    </div>
                                </div>
                            </div>

                            <div v-if="platform !=='Web'" class="card btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;margin-bottom:10px;;">
                                <div class="box activity-history-btn-width" style="padding:10px;">
                                    <!-- <div class="md-custom-btn sec-btn-color" @click="jump('/leaddetails/productlead')">
                                        <image class="btn-icon-size" src="http://159.89.161.64:8081/web/assets/arrow_back_black.png"></image>
                                        <text class="md-sec-btn-label ">Back</text>
                                    </div> -->
                                     <div class=" cursor-pointer-globle"  @click="jump('/leaddetails/productlead')">
    <vx-secondary-button btn-name="Previous" btn-width="300px"  btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png"></vx-secondary-button>
    </div>
                                </div>
                                <div class="box activity-history-btn-width" style="padding:10px;">
                                    <!-- <div class="md-custom-btn btn-color" @click="submitData()"> -->
                                    <!-- <div class="md-custom-btn btn-color" @click="jump('/leaddetails/statuslead')">
                                        <text class="md-btn-label text-color-white">Next</text>
                                        <image class="btn-icon-size-right" src="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></image>
                                    </div> -->
                                    <div  class=" cursor-pointer-globle" @click="jump('/leaddetails/statuslead')">
    <vx-primary-button btn-name="Proceed" btn-width="300px" icon-side="right" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png"></vx-primary-button>
    </div>
                                </div>
                            </div>
        
                        </div>
        
        
                  
        </template>

<script>
    // import applicationTab from './ApplicationTab.vue'
    import appHeader from '../../components/Application/AppHead.vue'
    import leadHeader from '../../components/Proposal/LeadHeader.vue'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue';
import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue';

    const items = ["Below 10th Standard", "Diploma After 10th Standard", "Diploma", "Illiterate", "Other", "Plus Two 10+2", "Post Graduate", "SSLC 10th Standard", "Doctorate"];
    const gender = ["Male", "Female"];
    const martial = ["Agriculture", "AntiqueDealer", "Armed Forces", "Buisness", "Diamond Trader",
        "Farmer", "House Wife", "House Wife with High Income", "Jewellery Dealer", "Labour",
        "Machine Operator", "Politically Exposed Person", "Professionals", "Retired", "Salaried",
        "Unemployed", "Working in Coal Mines"
    ];
    const nationality = ["Less than 2.5 Lacs", "2.5 Lacs to 3.49 Lacs", "3.5 Lacs to 4.99 Lacs", "5 Lacs to 7.99 Lacs", "8 Lacs to 9.99 Lacs", "More than 10 Lacs, Less than 14.99 Lacs", "More than 15 Lacs, Less than 20 Lacs", "More than 20 Lacs"];
    // const educationList = ["Below 10th Standard", "Diploma After 10th Standard", "Diploma", "Illiterate", "Other", "Plus Two 10+2", "Post Graduate", "SSLC 10th Standard", "Doctorate"];
    // const occupationList = ["Agriculture", "AntiqueDealer", "Armed Forces", "Buisness", "Diamond Trader",
    //     "Farmer", "House Wife", "House Wife with High Income", "Jewellery Dealer", "Labour",
    //     "Machine Operator", "Politically Exposed Person", "Professionals", "Retired", "Salaried",
    //     "Unemployed", "Working in Coal Mines"];
    // const accountProof = ["Cancelled Cheque", "Passbook Copy"]
    // const stateList = ["Less than 2.5 Lacs","2.5 Lacs to 3.49 Lacs","3.5 Lacs to 4.99 Lacs","5 Lacs to 7.99 Lacs","8 Lacs to 9.99 Lacs","More than 10 Lacs, Less than 14.99 Lacs","More than 15 Lacs, Less than 20 Lacs","More than 20 Lacs"]
    // const cityList = ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"]



    const picker = weex.requireModule("picker");
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')
    import {
        WxcRadio
    } from 'weex-ui'
    import {
        WxcCheckbox,
        WxcCheckboxList
    } from 'weex-ui'
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown


            }
        },
        components: {
            WxcCheckbox,
            WxcCheckboxList,
            appHeader,
            leadHeader,
             vxPrimaryButton ,
        vxSecondaryButton,
            //  applicationTab
        },
        data() {
            return {
                check: 'No',
                check1: 'No',
                check2: 'No',
                check3: 'No',
                rider: '',
                agree: '',
                title: '',
                name: '',
                fname: '',
                gen: '',
                martial: '',
                assuredDate: '',
                national: '',
                education: '',
                sincome: '',
                aincome: '',
                purpose: '',
                occupation: '',
                job: '',
                duties: '',
                employ: '',
                ecs: '',
                pan: '',
                account: '',
                ifsc: '',
                bankName: '',
                bBranch: '',
                accproof: '',
                add1: '',
                add2: '',
                state: '',
                city: '',
                pincode: '',
                email: '',
                mobile: '',
                landline: '',
                permarentMail: '',
                headerName: 'Proposal Fulfilmemt',
                platform: invalid,
                deviceWidth: invalid,
                index: -1,
                index1: -1,
                index2: -1,
                index3: -1,
                index4: -1,
                index5: -1,
                index6: -1,
                index7: -1,
                index8: -1,
                index9: -1,
                index10: -1,
                index11: -1,
                index12: -1,
                index13: -1,
                show1: false,
                show2: false,
                show3: false,
                table: [{
                    status: "Date Of Quotation",
                    date: '12/02/2016',
                    premium: "Policy Term",
                    year: 12
                }, {
                    status: "Name of the life insured",
                    date: 'ConsultIT',
                    premium: "Premium Payment Term",
                    year: 12
                }, {
                    status: "Name of the insurance advisor",
                    date: ' Hello Test',
                    premium: "Mode of Premium Payment",
                    year: 'Yearly'
                }, {
                    status: "Date Of Birth",
                    date: '12/02/2016',
                    premium: "  Sum Assured for Basic Plan",
                    year: 10000000
                }, {
                    status: "Total Installment premium including service tax) for Year 1:",
                    date: 5000000,
                    premium: "Total Installment premium (including service tax )for Year 2 onwards:",
                    year: 5000000
                }, {
                    status: "Unique Identification No.",
                    date: '121N018V02',
                    premium: "Age",
                    year: 50
                }, {
                    status: "Advisor Code",
                    date: 12345,
                    premium: "Frequency",
                    year: 2
                }, {
                    status: "Age Proof",
                    date: ' Standard',
                    premium: " ",
                    year: " "
                }],
                titleWeb: ["Below 10th Standard", "Diploma After 10th Standard", "Diploma", "Illiterate", "Other", "Plus Two 10+2", "Post Graduate", "SSLC 10th Standard", "Doctorate"],
                calculatorTypeWeb: ['Annual', 'Monthly'],
                itemsWeb: ["Annunity To Premium", "Premium To Annunity"],
                genderWeb: ["Male", "Female"],
                martialWeb: ["Agriculture", "AntiqueDealer", "Armed Forces", "Buisness", "Diamond Trader",
                    "Farmer", "House Wife", "House Wife with High Income", "Jewellery Dealer", "Labour",
                    "Machine Operator", "Politically Exposed Person", "Professionals", "Retired", "Salaried",
                    "Unemployed", "Working in Coal Mines"
                ],
                nationalityWeb: [
                    "Less than 2.5 Lacs", "2.5 Lacs to 3.49 Lacs", "3.5 Lacs to 4.99 Lacs", "5 Lacs to 7.99 Lacs", "8 Lacs to 9.99 Lacs", "More than 10 Lacs, Less than 14.99 Lacs", "More than 15 Lacs, Less than 20 Lacs", "More than 20 Lacs"
                ],
                educationListWeb: ["Below 10th Standard", "Diploma After 10th Standard", "Diploma", "Illiterate", "Other", "Plus Two 10+2", "Post Graduate", "SSLC 10th Standard", "Doctorate"],
                // occupationListWeb: ["Agriculture", "AntiqueDealer", "Armed Forces", "Buisness", "Diamond Trader",
                //     "Farmer", "House Wife", "House Wife with High Income", "Jewellery Dealer", "Labour",
                //     "Machine Operator", "Politically Exposed Person", "Professionals", "Retired", "Salaried",
                //     "Unemployed", "Working in Coal Mines"],
                // accountProofWeb: ["Cancelled Cheque", "Passbook Copy"],
                // stateListWeb: [ "Less than 2.5 Lacs","2.5 Lacs to 3.49 Lacs","3.5 Lacs to 4.99 Lacs","5 Lacs to 7.99 Lacs","8 Lacs to 9.99 Lacs","More than 10 Lacs, Less than 14.99 Lacs","More than 15 Lacs, Less than 20 Lacs","More than 20 Lacs"],
                // cityListWeb: ["Mumbai", "Delhi", "Kolkata", "Benglaru", "Chennai", "Ahmedabad", "Pune", "Hyderabad"],

                checkedInfo: {
                    title: 'option2',
                    value: 2
                },
                list: [{
                    title: 'option1',
                    value: 1
                }, {
                    title: 'option2',
                    value: 2,
                }, {
                    title: 'option3',
                    value: 3
                }, {
                    title: 'option4',
                    value: 4
                }, ],
            }
        },
        computed: {
            value() {
                if (this.index == -1) {
                    return "Select ";
                } else if (this.index < items.length) {
                    return items[this.index];
                }
                return "";
            },
            value1() {
                if (this.index1 == -1) {
                    return "Select ";
                } else if (this.index1 < gender.length) {
                    return gender[this.index1];
                }
                return "";
            },
            value2() {
                if (this.index2 == -1) {
                    return "Select Martial Status";
                } else if (this.index2 < martial.length) {
                    return martial[this.index2];
                }
                return "";
            },
            value3() {
                if (this.index3 == -1) {
                    return "Select Nationality";
                } else if (this.index3 < nationality.length) {
                    return nationality[this.index3];
                }
                return "";
            },
            value4() {
                if (this.index4 == -1) {
                    return "Select Education";
                } else if (this.index4 < educationList.length) {
                    return educationList[this.index4];
                }
                return "";
            },
            value5() {
                if (this.index5 == -1) {
                    return "Select Occupation";
                } else if (this.index5 < occupationList.length) {
                    return occupationList[this.index5];
                }
                return "";
            },
            value6() {
                if (this.index6 == -1) {
                    return "Select Account Proof";
                } else if (this.index6 < accountProof.length) {
                    return accountProof[this.index6];
                }
                return "";
            },
            value7() {
                if (this.index7 == -1) {
                    return "Select Income";
                } else if (this.index7 < stateList.length) {
                    return stateList[this.index7];
                }
                return "";
            },
            value8() {
                if (this.index8 == -1) {
                    return "Select City";
                } else if (this.index7 < cityList.length) {
                    return cityList[this.index8];
                }
                return "";
            },
        },
        methods: {
            onchange(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check = 'Yes'
                } else {
                    this.check = 'No'
                }
            },
            onchange1(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check1 = 'Yes'
                } else {
                    this.check1 = 'No'
                }
            },
            onchange2(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check2 = 'Yes'
                } else {
                    this.check2 = 'No'
                }
            },
            onchange3(event) {
                this.checked = event.value
                if (event.value === true) {
                    this.check3 = 'Yes'
                } else {
                    this.check3 = 'No'
                }
            },
            submitData() {
                const formData = {

                }

                console.log(formData)
                stream.fetch({
                        method: 'POST',
                        url: 'http://172.16.57.76:5010/secure/user/addProposal',
                        headers: {
                            
                            'Content-Type': 'application/json'
                        },
                        // body:'email=dk',
                        body: JSON.stringify(formData),
                        // body:'email=usama@grr.la&password=dk',
                        type: 'json'
                    },
                    // function(ret) {
                    //   // if(!ret.ok){
                    //   //   me.postResult = "request failed";
                    //   // }else{
                    //   //   console.log('get:'+JSON.stringify(ret));
                    //   //   this.postResult = JSON.stringify(ret.data);
                    //   // }
                    // }

                    function(response) {
                        var errcodeAPI = -1
                        if (response.data.errCode == errcodeAPI) {
                            console.log('get in progress:' + JSON.stringify(response));
                            modal.toast({
                                message: 'Successfully Added Proposal Personal Details',
                                duration: 1
                            })
                            router.push('/proposalnominee');
                        } else {
                            modal.toast({
                                message: 'Please enter Unique Mobile No',
                                duration: 2
                            })

                        }
                        // this.postResult = "bytes received:"+response.length;
                    })
            },
            wxcCheckBoxListChecked(e) {
                this.checkedList = e.checkedList;
            },
            wxcRadioListChecked(e) {
                this.checkedInfo = e;
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
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
            genderType() {
                picker.pick({
                        index: this.index1,
                        items: gender
                    },
                    event => {
                        if (event.result === "success") {
                            this.value1 = items[event.data];
                            this.index1 = event.data;
                        }
                    }
                );
            },
            martialType() {
                picker.pick({
                        index: this.index2,
                        items: martial
                    },
                    event => {
                        if (event.result === "success") {
                            this.value2 = items[event.data];
                            this.index2 = event.data;
                        }
                    }
                );
            },
            nationality() {
                picker.pick({
                        index: this.index3,
                        items: nationality
                    },
                    event => {
                        if (event.result === "success") {
                            this.value3 = items[event.data];
                            this.index3 = event.data;
                        }
                    }
                );
            },
            education() {
                picker.pick({
                        index: this.index4,
                        items: educationList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value4 = items[event.data];
                            this.index4 = event.data;
                        }
                    }
                );
            },
            occupation() {
                picker.pick({
                        index: this.index5,
                        items: occupationList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value5 = items[event.data];
                            this.index5 = event.data;
                        }
                    }
                );
            },
            accountProof() {
                picker.pick({
                        index: this.index6,
                        items: accountProof
                    },
                    event => {
                        if (event.result === "success") {
                            this.value6 = items[event.data];
                            this.index6 = event.data;
                        }
                    }
                );
            },
            state() {
                picker.pick({
                        index: this.index7,
                        items: stateList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value7 = items[event.data];
                            this.index7 = event.data;
                        }
                    }
                );
            },
            city() {
                picker.pick({
                        index: this.index8,
                        items: cityList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value8 = items[event.data];
                            this.index8 = event.data;
                        }
                    }
                );
            },
            investmentOption() {
                picker.pick({
                        index: this.index9,
                        items: investmentList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value9 = items[event.data];
                            this.index9 = event.data;
                        }
                    }
                );
            },
            deathBenefitOption() {
                picker.pick({
                        index: this.index10,
                        items: deathOptionList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value10 = items[event.data];
                            this.index10 = event.data;
                        }
                    }
                );
            },
            ageProof() {
                picker.pick({
                        index: this.index11,
                        items: ageList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value11 = items[event.data];
                            this.index11 = event.data;
                        }
                    }
                );
            },
            annuityFrequency() {
                picker.pick({
                        index: this.index12,
                        items: annunityFreqList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value12 = items[event.data];
                            this.index12 = event.data;
                        }
                    }
                );
            },
            annuityOption() {
                picker.pick({
                        index: this.index13,
                        items: annunityOptionList
                    },
                    event => {
                        if (event.result === "success") {
                            this.value13 = items[event.data];
                            this.index13 = event.data;
                        }
                    }
                );
            },
            regular() {
                console.log("Regular")
                this.show1 = true
                this.show2 = false
                this.show3 = false
            },
            unfortunate() {
                console.log("unfo")
                this.show2 = true
                this.show1 = false
                this.show3 = false
            },
            bi() {
                this.show3 = true
                this.show2 = false
                this.show1 = false
            },
        }
    }
</script>

<style scoped>
    /*Button Arrow CSS*/
    
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
    
    .scroller {
        /* background-color: #f7f7f7; */
    }
    
    .row {
        flex-direction: column
    }
    
    .card {
        /* width:70%; */
    
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    
    .card-subtitle {
        font-size: 22px;
        color: #9D9D9D;
    }
    
    .main-heading {
        font-size: 15px;
        padding-top: 20px;
        font-weight: bold;
    }
    
    .heading {
        font-size: 25px;
        padding-top: 20px;
        font-weight: bold;
    }
    
    .col1 {
        flex-direction: row;
        margin-top: 25px;
    }
    
    .group {
        position: relative;
        margin-top: 25px;
    }
    
    .container {
        flex-direction: row;
    }
    
    .side-container {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .input {
        display: block;
        background-color: #fff;
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
    
    .input:focus {
        border-width: 1px;
        border-bottom-color: #2e4053;
    }
    
    .switch {
        margin-top: 16px;
    }
    
    .btn-space {
        justify-content: space-between
    }
    
    .btn-color {
        background-color: #3b371e;
    }
    
    .sec-btn-color {
        background-color: #fff;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #000;
        border-right-color: #000;
        border-left-color: #000;
        border-bottom-color: #000;
    }
    
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 80px;
        min-width: 88px;
        position: relative;
        cursor: pointer;
    }
    
    .md-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
    }
    
    .md-sec-btn-label {
        font-size: 31px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: #000;
    }
    
    .md-custom-btn:active {
       opacity:0.8;
    }
    
    .activity-history-btn-width {
        width: 300px;
    }
    
    .card-btn1 {
        background-color: rgb(80, 80, 80);
        width: 340px;
        border-radius: 7px;
        margin-left: 10.6797px;
        margin-right: 20px;
        margin-right: 20px;
        padding: 25px;
        justify-content: center;
        -webkit-box-pack: center;
    }
    
    .card-btn2 {
        background-color: #505050;
        border-radius: 7px;
        margin-top: 15px;
        /* width: 340px; */
        padding: 25px;
        justify-content: center;
    }
    
    .card-btn-text {
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
    }
    
    .card-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: Helvetica-medium;
    }
    
    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family: Helvetica-medium;
    }
    
    .image {
        width: 500px;
        height: 500px;
    }
    
    
    
    .form-title {
        font-size: 24px;
        padding-top: 10px;
        color: #9d9d9d;
    }
    
    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
    }
    
    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
    }
    
    .example {
        flex-direction: row;
        justify-content: flex-start;
    }
    
    .label {
        font-size: 22px;
        line-height: 60px;
        width: 350px;
        color: #9d9d9d;
        text-align: right;
        margin-right: 20px;
    }
    
    .table-row {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
    
    .graph {
        flex-direction: column;
    }
    
    .drop-down {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 5px;
    }
    
    .card-summary {
        margin-top: 10px;
        padding: 20px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .table-row-col-details {
        margin-left: 0px;
    }
    
    .card-line1 {
        padding: 20px;
    }
    
    .head-row {
        padding: 10px;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #ebebeb;
    }
    
    .head-row1 {
        padding: 10px;
    }
    
    .sub-heading {
        font-weight: bold;
        margin-left: 20px;
        font-size: 13px;
        color: #565656;
    }
    
    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-weight: bold;
    }
    
    .cal-icn {
        height: 20px;
        width: 20px;
        margin-top: 5px;
    }
    
    .mail-row {
        flex-direction: column;
    }
    
    .radio-data {
        flex-direction: column;
        flex: 0;
    }
    
    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }
        .btn-icon-size-right {
            height: 18px;
            width: 18px;
            margin-left: 10px;
        }
        .md-btn-label {
            color: #fff;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
        }
        .btn-color {
            background-color: #3b371e;
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
        }
        .sec-btn-color {
            background-color: #fff;
            border: 1px solid black;
        }
        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 36px;
            min-width: 88px;
            position: relative;
            cursor: pointer;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .table-head-row {
            flex: 0.9;
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-weight: bold;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
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
        .table-row {
            flex-direction: column;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .mail-row {
            flex-direction: column;
        }
        .btn-space {
            justify-content: space-evenly;
        }
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
        }
        .radio-data {
            flex-direction: column;
            flex: 1
        }
        .activity-history-btn-width {
            width: 20%;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
        }
        .heading {
            font-size: 15px;
            padding-top: 20px;
            font-weight: bold;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
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
        .table-row {
            flex-direction: row;
        }
        .table-row-col-details {
            margin-left: 30px;
        }
        .mail-row {
            flex-direction: row;
            flex: 3;
        }
        .btn-space {
            justify-content: space-around;
        }
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
        }
        .radio-data {
            flex-direction: row;
        }
        .activity-history-btn-width {
            width: 23%;
        }
    }
    @media only screen and (min-width: 992px) {
                .activity-history-btn-width {
            width: 15%;
        }
                      }
</style>
