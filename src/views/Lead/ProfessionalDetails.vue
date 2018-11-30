<template>
    <div class="personal-details-form-wrapper shadow">
        <div class="new-lead-form-row new-lead-form-row-flow">
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Education</text>
                 <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.eduction">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in educList" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>

            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Profession Type</text>
                 <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.profession">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in profession" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Income Group</text>
                 <div v-if="platform == 'Web'">
                    <select class="new-lead-form-text-box" v-model="formData.incomeType">
                        <option disabled value="">Choose..</option>
                        <option v-for="(listItem, li) in incomOptions" :key="li" :value="li"> {{listItem}} </option>
                    </select>                            
                </div>
            </div>
    
            <div class="new-lead-form-field-container">
                <text class="new-lead-form-label">Annual Income</text>
                <input type="text" class="new-lead-form-text-box" v-model="formData.primaryNo">
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
    @media (min-width: 320px) {
        .personal-details-form-wrapper {
            width: 95%;
            padding: 20px;
            margin-bottom: 30px;
        }

    }
    @media (min-width: 768px) {
        .personal-details-form-wrapper {
            width: 80%;
        }
    }
    @media (min-width: 992px) {
        .personal-details-form-wrapper {
            width: 90%;
        }
    }


</style>



<script>

const items = [
    "Below 10th",
    "10th Passed",
    "12th Passed",
    "Graduate",
    "Post Graduate",
    "Professional",
    "Others"
];

const profession = [
    "Salaried",
    "Agriculture",
    "Retired",
    "Student",
    "Professional",
    "Housewife",
    "Self Employed",
    "Other"
];

const incomOptions = [
    "Less than 2.5 Lacs",
    "2.5 Lacs to 3.49 Lacs",
    "3.5 Lacs to 4.99 Lacs",
    "5 Lacs to 7.99 Lacs",
    "8 Lacs to 9.99 Lacs",
    "More than 10 Lacs, Less than 14.99 Lacs",
    "More than 15 Lacs, Less than 20 Lacs",
    "More than 20 Lacs"
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
            platform: invalid,
            educList: items,
            profession,
            incomOptions,
            formData: {
                eduction: '',
                profession: '',
                incomeType: '',
                annualIncome: ''
            }
        }
    }
}
           
</script>


