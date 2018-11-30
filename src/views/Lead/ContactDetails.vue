<template>
    <div class="personal-details-form-wrapper shadow">
        <div class="new-lead-form-row new-lead-form-row-flow">
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Address Line 1</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.addressLineOne">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Address Line 1</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.addressLineTwo">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Land Mark</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.landMark">
            </div>

            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Country</text>
                 <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.country">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in countryList" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>

            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">State</text>
                 <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.state">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in stats" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">City</text>
                 <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.city">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in cities" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Pin Code</text>
                 <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.pinCode">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in pinCodeNumbers" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>

            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Primary Mobile</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.primaryNo">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Alternate No.</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.alternateNo">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Landline No.</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.landLineNo">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Email</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.emailID">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Social Security (Aadhaar No.)</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.socialSecurityID">
            </div>
        </div>

        <div class="new-lead-form-row n-l-d-btn-space n-l-d-margin-top">
            <div class="n-l-d-navig-btn n-l-d-second-bdr-btn n-l-d-navi-width n-l-d-sec-btn">
                <text class="n-l-d-navig-btn-label">Back</text>
            </div>
            <div class="n-l-d-navig-btn n-l-d-navi-width bg-back-black-color n-l-d-btn-active">
                <text class="n-l-d-navig-btn-label fg-white-color">Next</text>
            </div>
        </div>

       
    </div>
</template>

<style>

    .personal-details-form-wrapper {
        width: 700px;
        padding: 20px;
        background-color: #FFF;
    }
    .radio-button-row {
        flex-direction: row;
        align-items: center;
    }

    /* --------------------- Form Code--------------*/

    .new-lead-form-row-flow {
        flex-flow: wrap;
    }
    .new-lead-form-row {
        flex-direction: column;
        /* background-color: red; */
    }
    .bg-back-black-color {
        background-color: #3b371e;
    }
    .fg-white-color {
        color: #FFF;
    }
    .fg-black-color {
        background-color: #3b371e;
    }
    .n-l-d-navig-btn{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 88px;
        cursor: pointer;
    }

    .n-l-d-navig-btn-label {
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
    }

    .n-l-d-btn-active:active {
        background-color:rgb(5, 4, 4);
    }
    .n-l-d-sec-btn:active {
        background-color:rgb(228, 228, 228);
    }
    .n-l-d-navi-width  {
        width: 300px;
    }

    .n-l-d-second-bdr-btn {
        border-width: 2px;
        border-style: solid;
        border-color: #3b371e;
    }
    .n-l-d-btn-space {
        justify-content: space-between;
    }

    .new-lead-form-field-container {
        width: 650px;
        padding: 10px;
        margin-bottom: 15px;
    }

    .new-lead-form-text-box {
        background-color: #fff;
        font-size: 25px;
        padding: 15px;
        color: #666666;
        border-width: 2px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
    }

    .new-lead-form-text-box:focus {
        border-width: 4px;
        border-bottom-color: #3b371e;
    } 
    @media (min-width: 320px) {
        .personal-details-form-wrapper {
            width: 95%;
            padding: 20px;
            margin-bottom: 30px;
        }

        /* ------------------------------------- */

        .n-l-d-age-box-width {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .new-lead-form-field-container {
            padding: 5px;  
            width: 100%;
            margin-bottom: 10px;
        }
        .new-lead-form-label {
            font-size: 14px;
        }
        .new-lead-form-text-box {
            font-size: 15px;
            padding: 5px;
            color: #666666;
            border-width: 1px;
        }

        .new-lead-form-text-box:focus {
            border-width: 2px;
        }
        .new-lead-form-date-text-box {
            padding: 2px;
        }
        .n-l-d-margin-top {
            margin-top: 10px;
        }
        .n-l-d-margin-left {
            margin-left: 30px;
        }

        /* Buttons */

        .n-l-d-fab-btn {
            height: 40px;
            width: 40px;
            background-color: #3b371e;
            border-radius: 50%;
            position: relative;
            top: 14px;
            left: 20px;
        }
        .n-l-d-fab-icon {
            height: 25px;
            width: 25px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
        }
        .n-l-d-navig-btn {
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            cursor: pointer;
        }
        .n-l-d-navig-btn-label {
            font-size: 11px;
        }
        .n-l-d-navi-width {
            width: 50%;
        }
        .n-l-d-second-bdr-btn {
            border-width: 1px;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

    }
    @media (min-width: 768px) {
        .personal-details-form-wrapper {
            width: 80%;
        }
        /* ------------------------------- */

        .new-lead-form-row {
            flex-direction: row;
        }
        .new-lead-form-field-container {
            width: 50%;
        }

        .n-l-d-navi-width {
            width: 25%;
        }
    }
    @media (min-width: 992px) {
        .personal-details-form-wrapper {
            width: 90%;
        }
        /* ---------------------------------- */

        .new-lead-form-row {
            flex-direction: row;
        }
        .new-lead-form-field-container  {
            width: 32%;
        }
        .n-l-d-navi-width {
            width: 20%;
        }
        .n-l-d-age-width {
            width: 20%;
        }
    }


</style>

<script>
const items = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Goa",
    "Gujrat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttar Pradesh",
    "West Bengal",
    "Chhattisgarh",
    "Uttarakhand",
    "Jharkhand",
    "Telangana"
];
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
		,"Yemen","Zambia","Zimbabwe"];

const cityList = [
    "Mumbai",
    "Kanpur"
];

const pinCodeList = [
    123456,
    223345,
    789098
];
const picker = weex.requireModule("picker");
const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data() {
        return {
            countryList: country_list,
            stats: items,
            cities: cityList,
            pinCodeNumbers: pinCodeList,
            formData: {
                addressLineOne: '',
                addressLineTwo: '',
                landMark: '',
                country: '',
                state: '',
                city: '',
                pinCode: '',
                primaryNo: '',
                alternateNo: '',
                landLineNo: '',
                emailID: '',
                socialSecurityID: ''
            },
            platform: invalid
        }
    }
}
           
</script>


