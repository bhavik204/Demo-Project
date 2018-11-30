<template>
        <!-- Contact Details -->
    <div class="tb-side-container" style=" flex:1;">

        <div class="contact-dtls-frm-card ld-dtls-crd-pd-tp-20 card-wrap-contactLead">
            <div class="contactDetails-titleBorder ">
                 <text class="contactDetails-title">Contact Details</text>
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                
                <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                    <vx-input-box
                        vx-label="Address Line 1"
                        vx-placeholder="Enter Address Line 1"
                        message="Please Enter Address Details"
                        :hasRequired="true"
                        :vx-model="addressLine1" @valueReading="addressLine1=$event.value">
                    </vx-input-box>
                </div>
                <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                    <vx-input-box
                        vx-label="Address Line 2"
                        vx-placeholder="Enter Address Line 2"
                        :vx-model="addressLine2"  @valueReading="addressLine2=$event.value">
                    </vx-input-box>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Landmark"
                        vx-placeholder="Enter Landmark"
                         message="Please Enter Landmark"
                        :hasRequired="true"
                        :vx-model="landmark"  @valueReading="landmark=$event.value">
                    </vx-input-box>
                </div>                
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Country</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="country_list"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="country" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in country_list" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <!-- class="drp-mrgin-left-5" -->
                 <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">State</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="state_list"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="state" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in state_list" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
                <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">City</text>
                    <div v-if="platform !== 'Web'"  style="margin-bottom:20px">
                        <apk-drop-down :option-list="city_list" ></apk-drop-down>
                    </div>
                    <!-- <text v-if="platform !== 'Web'" class="input" style="flex:1" @click="nationality">{{value3}}</text> -->
                    <div v-if="platform === 'Web'">
                        <select v-model="city" class="vx-globle-drp-down cursor-pointer-globle">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in city_list" :key="li">{{calc}}</option>
                        </select>
                    </div>

                </div>
                
            </div>
            


            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    
                    <vx-input-box
                        vx-type="number"
                        vx-label="Pin Code"
                        vx-placeholder="Enter Pin Code"
                         message="Please Enter Pincode"
                        :hasRequired="true"
                        :vx-model="pinCode"  @valueReading="pinCode=$event.value">
                    </vx-input-box>
                </div>
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-type="tel"
                        vx-label="Primary Mobile"
                        vx-placeholder="Primary Mobile No"
                         message="Please Enter Contact No"
                        :hasRequired="true"
                        :vx-model="primaryMobileNo"  @valueReading="primaryMobileNo=$event.value">
                    </vx-input-box>
                </div>
               
            </div>
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                 <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-type="tel"
                        vx-label="Alternative Mobile"
                        vx-placeholder="Enter Alternative Mobile No"
                        message="This Field is required"
                        :vx-model="alterMobileNo"  @valueReading="alterMobileNo=$event.value">
                    </vx-input-box>
                </div>
                <div style="flex:1" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Landline No."
                        vx-placeholder="Enter Landline No."
                        message="This Field is required"
                        :vx-model="landLineNo"  @valueReading="landLineNo=$event.value">
                    </vx-input-box>

                </div>
                
                
            </div>
             <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
              
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Social Security (Aadhaar No.)"
                        vx-placeholder="Enter Your Adhar No"
                        message="This Field is required"
                        :vx-model="aadharNo"  @valueReading="aadharNo=$event.value">
                    </vx-input-box>
                </div>
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <vx-input-box
                        vx-label="Email Address"
                        vx-placeholder="Enter Your Email Address"
                        message="This Field is required"
                        :vx-model="emailadd"  @valueReading="emailadd=$event.value">
                    </vx-input-box>
                </div>
                
            </div>

            <!-- I dont know who created this line -->
            <div class="ld-cntc-dtls-flx-dir"  style="width:50%" ></div>
            
            <div class="mbt-i-ld-20 pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10">
                <text class="frm-hedng-bold-16">Mailing Address</text>
            </div>
            <!-- Enter mailing address new field Ashraf -->
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 mrgn-rw-fld-lft-rgt-10 cntc-itms-algn-cntr">
                <div class="mbt-i-ld-20">
                    <text class="cntct-frm-lbl-size">Is your permarent address same as mailing address?</text>
                </div>
                <div class="mbt-i-ld-20" v-if="platform !== 'Web'">
                    <div>
                        <switch @change="onchange3"></switch>
                    </div>
                    <text class="cntct-frm-lbl-size">{{check3}}</text>
                </div>
                <div v-if="platform === 'Web'" class="mbt-i-ld-20">
                    <switcher :value="mAddressStatus" option1="Yes" option2="No" :has-icons="false" @selectedGender="enableMailingAddress"></switcher>
                </div>
            </div>
            
            <div v-if="mailingAddresActive === true">
              

                 <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 padding-address-line1">
                
                <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                    <vx-input-box
                        vx-label="Address Line 1"
                        vx-placeholder="Enter Address Line 1"
                        essage="Please Enter Address Details "
                            :hasRequired="true"
                        :vx-model="maddressLine1"  @valueReading="maddressLine1=$event.value">
                    </vx-input-box>
                </div>
                <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                    <vx-input-box
                        vx-label="Address Line 2"
                        vx-placeholder="Enter Address Line 2"
                        
                        :vx-model="maddressLine2" @valueReading="maddressLine2=$event.value">
                    </vx-input-box>
                </div>
            </div>
                
            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10 padding-address-line1">
                 
             <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                    <vx-input-box
                        vx-label="Landmark"
                        vx-placeholder="Enter Landmark"
                        essage="Please Enter Landmark"
                            :hasRequired="true"
                        :vx-model="mlandmark"  @valueReading="mlandmark=$event.value">
                    </vx-input-box>
                </div>
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">Country</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="country_list"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="mcountry" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in country_list" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>

            </div>

            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">               
                
                <div style="flex:1;" class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">State</text>
                    <div v-if="platform !== 'Web'" style="margin-bottom:20px">
                        <apk-drop-down :option-list="state_list"></apk-drop-down>
                    </div>
                    <div v-if="platform === 'Web'">
                        <select v-model="mstate" class="cursor-pointer-globle vx-globle-drp-down">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in state_list" :key="li">{{calc}}</option>
                        </select>
                    </div>
                </div>
                <div style="flex:1" class="mbt-i-ld-20  mrgn-rw-fld-lft-rgt-10">
                    <text class="cntct-frm-lbl-size">City</text>
                    <div v-if="platform !== 'Web'"  style="margin-bottom:20px">
                        <apk-drop-down :option-list="city_list" ></apk-drop-down>
                        
                    </div>
                   
                    <div v-if="platform === 'Web'">
                        <select v-model="mcity" class="vx-globle-drp-down cursor-pointer-globle">
                            <option value="" selected>Select</option>
                            <option v-for="(calc, li) in city_list" :key="li">{{calc}}</option>                            
                        </select>
                        <!-- <error-text :has-requested="true" message="Ashraf scdjhfkjh"></error-text> -->
                        
                    </div>
                    

                </div>
            </div>


            <div class="ld-cntc-dtls-flx-dir pd-rw-lft-rgt-10">
                
                
                <div style="flex:1 " class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10">
                    
                    <vx-input-box
                        vx-type="number"
                        vx-label="Pin Code"
                        vx-placeholder="Enter Pin Code"
                        message="Please Enter Pincode"
                        :hasRequired="true"
                        :vx-model="mpinCode"  @valueReading="mpinCode=$event.value">
                    </vx-input-box>
                </div>
                <div class="mbt-i-ld-20 mrgn-rw-fld-lft-rgt-10" style="flex:1;">
                   
                </div>
            </div>
             <!-- End mailing address -->


           
            </div>
            </div>
            <div v-if="platform==='Web'" class="contact-dtls-frm-card contact-btn-space contact-btn-padding card-wrap-contactLead" style="margin-bottom:20px">
                <div class=" lead-contact-btn-width" style="padding:10px;">

                    <div class=" cursor-pointer-globle"  @click.native="jump('/leadmasterpage/leaddetails/personallead')">
                        <vx-secondary-button 
                            btn-name="Previous"  
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                        </vx-secondary-button>
                    </div>
                </div>
                <div class=" lead-contact-btn-width" style="padding:10px;">
                    <div class=" cursor-pointer-globle" @click.native="onProceedDataSaved">
                        <vx-primary-button 
                            btn-name="Proceed"  
                            icon-side="right" 
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png" >
                        </vx-primary-button>
                    </div>
                </div>
            </div>


            <div v-if="platform !=='Web'" class="contact-dtls-frm-card contact-btn-space card-wrap-contactLead" style=" flex-direction:row;margin-bottom:10px;">
                <div class=" lead-contact-btn-width" style="padding:20px;">
                    <div class=" cursor-pointer-globle"  @click="jump('/leadmasterpage/leaddetails/personallead')">
                        <vx-secondary-button 
                            btn-name="Previous" 
                             
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png" >
                        </vx-secondary-button>
                    </div>
                </div>
                <div class=" lead-contact-btn-width" style="padding:20px;">
                    
                    <div class=" cursor-pointer-globle" @click="jump('/leadmasterpage/leaddetails/professionallead')">
                        <vx-primary-button 
                            btn-name="Proceed" 
                            
                            icon-side="right" 
                            btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_forward_white_192x192.png">
                        </vx-primary-button>
                    </div>
                </div>
            </div>

    </div>
        
</template>

<script>
    // import applicationTab from './ApplicationTab.vue'
    import appHeader from '../../components/Application/AppHead.vue'
    import leadHeader from '../../components/Proposal/LeadHeader.vue'
    import vxInputBox from '../../components/vx-input-box/vx-input-box.vue'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue'

    import apkDropDown from '../CFR/cfr-dropDown-apk'
    import switcher from '../../components/GenderView/genderView'

    // error text component ashraf
    import errorText from '../../components/ErrorText.vue'


    var city_list = ["Mumbai", "Kanpur", "Pune", "Lucknow"];

    var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    var state_list = ["Andhra Pradesh","Arunachal Pradesh","Assam,Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh",
"Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
"Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh",
"West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman & Diu","Dehi","Lakshadweep","Puducherry"]


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

            var global = this;
            console.log('Created Method Object');

           
            // This condition is used to check, Is array have index 0 or not
            if(global.$store.getters.getLeadFormData[2]) {
                console.log(global.$store.getters.getLeadFormData[2]);
                let contactData = global.$store.getters.getLeadFormData[2];
                this.addressLine1   = contactData.contactLeadData.address.line1
                this.addressLine2   = contactData.contactLeadData.address.line2
                this.landmark       = contactData.contactLeadData.address.line3
                this.state        = contactData.contactLeadData.state
                this.city           = contactData.contactLeadData.city
                this.pinCode        = contactData.contactLeadData.pincode
                this.primaryMobileNo = contactData.contactLeadData.primaryMobile
                this.alterMobileNo  = contactData.contactLeadData.secondaryMobile
                this.landLineNo   = contactData.contactLeadData.landlineNo
                this.mAddressStatus = contactData.contactLeadData.mailingAddressStatus
                
                let mailingAd = JSON.parse(contactData.contactLeadData.mailingAddressSecond)

                this.mcity = mailingAd.city;
                this.mpinCode = mailingAd.pincode
                this.mstate = mailingAd.state
                this.mcountry = mailingAd.country
                this.mlandmark = mailingAd.mailingaddress.line3
                this.maddressLine1 = mailingAd.mailingaddress.line1
                this.maddressLine2 = mailingAd.mailingaddress.line2
                console.log(mailingAd.city);

                  
                //   add thes field in data base
                // this.country        = contactData.contactLeadData.country
                // this.aadharNo = contactData.contactLeadData.aadharNo
                // this.emailadd = contactData.contactLeadData.emailadd
            }
        },
        components: {
            WxcCheckbox,
            WxcCheckboxList,
            appHeader,
            leadHeader,
            vxInputBox,
            vxPrimaryButton ,
            vxSecondaryButton,
            apkDropDown,
            switcher,
            errorText
            // , applicationTab 
        },
        data() {
            return {
                country_list,
                state_list,
                city_list,

                addressLine1: '',
                addressLine2: '',
                landmark: '',
                country: '',
                state:'',
                mpinCode:'',
                mcity:'',
                mstate:'',
                mcountry:'',
                mlandmark:'',
                maddressLine1:'',
                maddressLine2:'',
                city: '',
                pinCode: '',
                primaryMobileNo: '',
                alterMobileNo: '',
                landLineNo: '',
                aadharNo: '',
                mailingAddress: '',
                check3: '',
                emailadd:'',

                headerName: 'Proposal Fulfilmemt',
                platform: invalid,
                deviceWidth: invalid,

                mAddressStatus: '',
                mailingAddres: '',
                mailingAddresActive: false
            }
        },
        beforeRouteLeave(to, form, next){ 
             let mailingFormdata = {
                    mailingaddress: {
                        line1: this.maddressLine1,
                        line2: this.maddressLine2,
                        line3: this.mlandmark, 
                    },
                    state:this.mstate,           
                    city: this.mcity,
                    country: this.mcountry, 
                    pincode: this.mpinCode,
                };

                let formData = {
                    address: {
                        line1: this.addressLine1,
                        line2: this.addressLine2,
                        line3: this.landmark,
                    },
                    
                    state:this.state,           
                    city: this.city,
                    pincode: this.pinCode,
                    primaryMobile: this.primaryMobileNo,
                    secondaryMobile: this.alterMobileNo,
                    landlineNo: this.landLineNo,
                      // add these field in database
                    //  country: this.country,       
                    // aadharNo: this.aadharNo,
                    // emailadd: this.emailadd,
                    mailingAddressStatus: this.mAddressStatus,
                    // mailingAddress: this.mailingAddress
                    // Social Security (Aadhaar No. this property is not avalible in backend
                    mailingAddressSecond : JSON.stringify(mailingFormdata),
                    
                }
                
               
                console.log('Maling Address OBJ' , mailingFormdata);
                console.log(formData);
                this.$store.commit('INSERT_LEADS_DATA', {contactLeadData: formData});

            next();
        },
     
        methods: {
            mailingAddresValue(e){
                console.log(e.value)
            },
            enableMailingAddress(event) {
                this.mAddressStatus = event.value;
                if(this.mAddressStatus === 'Yes') {
                    this.mailingAddresActive = false
                } else if(this.mAddressStatus === 'No'){
                    this.mailingAddresActive = true
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
            onProceedDataSaved() {
                // let mailingFormdata = {
                //     mailingaddress: {
                //         line1: this.maddressLine1,
                //         line2: this.maddressLine2,
                //         line3: this.mlandmark, 
                //     },
                //     state:this.mstate,           
                //     city: this.mcity,
                //     country: this.mcountry, 
                //     pincode: this.mpinCode,
                // };

                // let formData = {
                //     address: {
                //         line1: this.addressLine1,
                //         line2: this.addressLine2,
                //         line3: this.landmark,
                //     },
                    
                //     state:this.state,           
                //     city: this.city,
                //     pincode: this.pinCode,
                //     primaryMobile: this.primaryMobileNo,
                //     secondaryMobile: this.alterMobileNo,
                //     landlineNo: this.landLineNo,
                //       // add these field in database
                //     //  country: this.country,       
                //     // aadharNo: this.aadharNo,
                //     // emailadd: this.emailadd,
                //     mailingAddressStatus: this.mAddressStatus,
                //     // mailingAddress: this.mailingAddress
                //     // Social Security (Aadhaar No. this property is not avalible in backend
                //     mailingAddressSecond : JSON.stringify(mailingFormdata),
                    
                // }
                
               
                // console.log('Maling Address OBJ' , mailingFormdata);
                // console.log(formData);
                // this.$store.commit('INSERT_LEADS_DATA', {contactLeadData: formData});
                this.$router.push('/leadmasterpage/leaddetails/professionallead');
    
            }
        }
    }
</script>

<style>
    /*Button Arrow CSS*/

    /* New Class make by usama */
    .ld-cntc-dtls-flx-dir {
        flex-direction: column;
    }

    .frm-hedng-bold-16 {
        font-size: 28px;
        font-weight: 700;
        font-family:robotoregular;
    }

    
    .contact-btn-padding {
        flex-direction:row;
        margin-bottom:10px;
        padding:12px;
    }

    .contact-dtls-frm-card {
        /* width:70%; */
    
        margin-top: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    
    .tb-side-container {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .contact-btn-space {
        justify-content: space-between
    }
    .lead-contact-btn-width {
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
    .card-wrap-contactLead{
        margin: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
    }
    /* Salman */
        .contactDetails-title {
        font-size: 24px;
        font-family: robotoregular;
        }
              .padding-address-line1{
                padding-top:0px;
        }

        .contactDetails-titleBorder {
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
            width: 170px
            
            }

    @media only screen and (min-width: 320px) {
        /*Button Arrow CSS*/
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
            font-family:robotoregular;
        }
        .padding-address-line1{
padding-top:0px;
        }
       
        .lead-contact-btn-width {
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
            font-family:robotoregular;
        }

        /* Card top padding */
        .ld-dtls-crd-pd-tp-20 {
            padding-top: 20px; 
        }

        .card-wrap-contactLead{
        border:none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
        }

         .contactDetails-title {
        font-size: 14px;
        font-family: robotoregular;
        }

        .contactDetails-titleBorder {
        border-bottom-width: 4px;
        margin-left: 15px;
        margin-bottom: 20px;
        width: 105px;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .cntct-frm-lbl-size {
            font-size: 14px;
            color: #9d9d9d;
        }
   
        .lead-contact-btn-width {
            width: 23%;
        }

        /* switching class */
        .ld-cntc-dtls-flx-dir {
            flex-direction: row;
        }

        /* This class is used to provide padding to row */
        .pd-rw-lft-rgt-10 {
            padding-left: 0px;
            padding-right: 0px;
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
         .card-wrap-contactLead{
        margin:10px;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .lead-contact-btn-width {
            width: 15%;
        }
    }
</style>
