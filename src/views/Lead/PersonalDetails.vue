<template>
    <div class="personal-details-form-wrapper shadow">
        <div class="new-lead-form-row new-lead-form-row-flow">
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">First Name</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.fName">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Last Name</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.lName">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Date of Birth</text>
                <input type="date" class="new-lead-form-text-box new-lead-form-date-text-box" v-model="formData.dob" max="2017-12-12" min="2015-01-01">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Gender</text>
                <!-- APK -->
                <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(2)">
                    <text class="" >{{ personGender }}</text>
                    <div class="drop-arrow-pos">
                        <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                    </div>
                </div>
                <!-- Web -->
                <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.gender">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in genList" :key="li"> {{listItem}} </option>
                    </select>                            
                </div>
                
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Marital Status</text>
                <!-- APK -->
                <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(2)">
                    <text class="" >{{ personGender }}</text>
                    <div class="drop-arrow-pos">
                        <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                    </div>
                </div>
                <!-- Web -->
                <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.maritalStatus">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in maritalList" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div> 
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Childern</text>
                <div class="radio-button-row n-l-d-margin-top">
                    <label class="container-radio new-lead-form-label ">Yes
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark-rd"></span>
                    </label>
                    <label class="container-radio new-lead-form-label n-l-d-margin-left">No
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark-rd"></span>
                    </label>
                </div>
            </div>                                     
        </div>
         <!-- Child form -->
        <div class="new-lead-form-row new-lead-form-row-flow">
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Child Name</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.fName">
            </div>
            <div class="new-lead-form-field-container n-l-d-age-width">
                <text class="new-lead-form-label">Age</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.fName">
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Gender</text>
                <!-- APK -->
                <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(2)">
                    <text class="" >{{ personGender }}</text>
                    <div class="drop-arrow-pos">
                        <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                    </div>
                </div>
                <!-- Web -->
                <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.gender">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in genList" :key="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>
            
            <div class="n-l-d-fab-btn">
                <image class="n-l-d-fab-icon" src="https://www.materialui.co/materialIcons/content/add_white_192x192.png"/>
            </div>
            
        </div>
        <!-- Child form end-->
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
const items = ["Mr.", "Mrs.", "Ms."];
const genderList = ["Male", "Female", "Other"];
const maritalStatusList = ["Single", "Married", "Divorced", "Widowed", "Separated"];

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
            genList: genderList,
            maritalList: maritalStatusList,
            formData: {
                fName: '',
                lName: '',
                dob: '',
                gender: '',
                maritalStatus: '',
                childern: '',
                childName: '',
                childAge: '',
                
            },
            platform: invalid
        }
    }
}
           
</script>


