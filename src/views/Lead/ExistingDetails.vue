<template>
    <!-- Forms -->
    <div class="form-wraper">
        <scroller>
            
                <!-- row 1 -->
                <div class="nx-flex-row nx-flex-flow-wrap nx-flex-direction-change form-padding">
                    <div class="box flex-box-size-01 box-min-width">
                        <div class="nx-flex-row" style="align-items:center;">
                            <div v-if="platform == 'Web'" class="">
                                <label class="container-chk">Has Health Insurance (Add Family Dependants)
                                  <input type="checkbox" checked="checked">
                                  <span class="checkmark"></span>
                                </label>
                            </div>
                            <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                            <div>
                                <text class="form-labels">Has Health Insurance </text>
                                <text class="form-labels">(Add Family Dependants)</text>
                            </div>
                                <switch checked="true"></switch>
                            </div>
                        </div>
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Total Health Cover(in Rs.)</text>  
                        <text class="text input mouse-pointer">0</text>   
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Total Annual Premium(in Rs.)</text>
                        <text class="text input mouse-pointer">0</text>  
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <div class="nx-flex-row" style="align-items:center;">
                            <div v-if="platform == 'Web'" class="">

                                <label class="container-chk">Father
                                  <input type="checkbox" checked="checked">
                                  <span class="checkmark"></span>
                                </label>


                           </div>
                        <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                            <div>
                                <text class="form-labels">Mother </text>
                            </div>
                                <switch checked="true"></switch>
                            </div>
                        </div>
                        <div>
                            <input type="date" class="text input" placeholder="Date of Birth"/>
                        </div>
                    
                    </div>
                    <div class="box flex-box-size-01 box-min-width">
                        <div class="nx-flex-row" style="align-items:center;">
                            <div>
                                <text class="form-labels">Father </text>
                            </div>
                            <div v-if="platform == 'Web'" class="">
                                <input type="checkbox" name="vehicle" value="Bike">
                            </div>
                            <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                <switch checked="true"></switch>
                            </div>
                        </div>
                        <div>
                            <input type="date" class="text input" placeholder="Date of Birth"/>
                        </div>
                       
                       
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <div class="nx-flex-row" style="align-items:center;">
                            <div>
                                <text class="form-labels">Wife</text>
                            </div>
                            <div v-if="platform == 'Web'" class="">
                                <input type="checkbox" name="vehicle" value="Bike">
                            </div>
                            <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                <switch checked="true"></switch>
                            </div>
                        </div> 
                        <div>
                            <input type="date" class="text input" placeholder="Date of Birth"/>
                        </div> 
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <div class="nx-flex-row" style="align-items:center;">
                            <div>
                                <text class="form-labels">Has Health Insurance </text>
                            </div>
                            <div v-if="platform == 'Web'" class="">
                                <input type="checkbox" name="vehicle" value="Bike">
                            </div>
                            <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                <switch checked="true"></switch>
                            </div>
                        </div>
                    </div>


                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Son/Daughter</text>
                        <text class="text input mouse-pointer">0</text>  
                    </div>

                     <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Total Life Cover(in Rs.)</text>
                        <text class="text input mouse-pointer">0</text>  
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <div class="nx-flex-row" style="align-items:center;">
                            <div>
                                <text class="form-labels">Existing broking account details</text>
                            </div>
                            <div class="">
                                <input type="checkbox" name="vehicle" value="Bike">
                            </div>
                        </div>
                    </div>
                    
                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Total Annual Premium(in Rs.)</text>
                        <text class="text input mouse-pointer">0</text>  
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Investment Value(Total in Rs.)</text>
                        <text class="text input mouse-pointer">0</text>  
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                         <text class="form-labels">Used for(select multiple)</text>
                         <div class="nx-flex-column">
                            <div class="box">
                                <div class="nx-flex-row row-alignment multi-list-border">
                                    <div>
                                        <text class="form-labels">Equity</text>
                                    </div>
                                    <div v-if="platform == 'Web'" class="">
                                        <input type="checkbox" name="vehicle" value="Bike">
                                    </div>
                                    <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                        <switch checked="true"></switch>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <div class="nx-flex-row row-alignment multi-list-border">
                                    <div>
                                        <text class="form-labels">Debt (Bonds)</text>
                                    </div>
                                    <div v-if="platform == 'Web'" class="">
                                        <input type="checkbox" name="vehicle" value="Bike">
                                    </div>
                                    <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                        <switch checked="true"></switch>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="nx-flex-row row-alignment multi-list-border">
                                    <div>
                                        <text class="form-labels">Mutual Fund</text>
                                    </div>
                                    <div v-if="platform == 'Web'" class="">
                                        <input type="checkbox" name="vehicle" value="Bike">
                                    </div>
                                    <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                        <switch checked="true"></switch>
                                    </div>
                                </div>
                            </div>

                            <div class="box">
                                <div class="nx-flex-row row-alignment multi-list-border">
                                    <div>
                                        <text class="form-labels">F and O</text>
                                    </div>
                                    <div v-if="platform == 'Web'" class="">
                                        <input type="checkbox" name="vehicle" value="Bike">
                                    </div>
                                    <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                        <switch checked="true"></switch>
                                    </div>
                                </div>
                            </div>
                             <div class="box">
                                <div class="nx-flex-row row-alignment multi-list-border">
                                    <div>
                                        <text class="form-labels">Commodities</text>
                                    </div>
                                    <div v-if="platform == 'Web'" class="">
                                        <input type="checkbox" name="vehicle" value="Bike">
                                    </div>
                                    <div v-if="platform !== 'Web'" class="box flex-box-size-01">
                                        <switch checked="true"></switch>
                                    </div>
                                </div>
                            </div>

                             <div class="box">
                                <div class="">
                                    <div v-if="platform == 'Web'" class="">

                                    <label class="container-radio ">Three
                                          <input type="radio" checked="checked" name="radio">
                                      <span class="checkmark-rd"></span>
                                    </label>
                                                                        <label class="container-radio">one
                                          <input type="radio"  name="radio">
                                      <span class="checkmark-rd"></span>
                                    </label>
                                    <label class="container-radio">Two
                                          <input type="radio"  name="radio">
                                      <span class="checkmark-rd"></span>
                                    </label>

                                    </div>
                                </div>
                            </div>




                         </div>
                    </div>
                </div>
               
                
                <!-- Button -->
               
                <div v-if="platform == 'Web'" class="nx-flex-row" style="justify-content:center;">
                    <div class="box">
                        <!-- Button -->
                        <div class="custom-btn mouse-pointer" @click.native="salutDropDown = !salutDropDown">
                            <text class="text text-keep-center text-color-white mouse-pointer">BACK</text>
                        </div>
                    </div>
                    <div class="box">
                        <div class="custom-btn mouse-pointer" @click.native="salutDropDown = !salutDropDown">
                            <text class="text text-keep-center text-color-white mouse-pointer">NEXT</text>
                        </div>
                    </div>
                </div>
                <div v-if="platform !== 'Web'" class="nx-flex-row" style="justify-content:center;">
                    <div class="box btn-margin">
                        <!-- Button -->
                        <div class="custom-btn">
                            <text class="btn-label-size text-keep-center text-color-white">BACK</text>
                        </div>
                    </div>
                    <div class="box btn-margin">
                        <div class="custom-btn">
                            <text class="btn-label-size text-keep-center text-color-white">NEXT</text>
                        </div>
                    </div>
                </div>
               

            
        </scroller>
    </div>
</template>

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

            educSelect: "Choose..",
            profSelect: "Choose..",
            incomSelect: "Choose..",

            educDropDown: false,
            profDropDown: false,
            incomDropDown: false,

            eduIndex: -1,
            profIndex: -1,
            incomIndex: -1,


            leadSource: 'Natural Market',
            compaignName: 'Natural Market',
            leadStatus: 'New Lead Entry',
            leadDispo: 'Fresh Lead',
            leadSubDispo: 'Fresh Lead'

        }
    },

    computed: {
        education() {
            if (this.eduIndex == -1) {
                return "Choose..";
            } else if (this.eduIndex < items.length) {
                return items[this.eduIndex];
            }
            return "";
        },
        personProfession() {
            if (this.profIndex == -1) {
                return "Choose..";
            } else if (this.profIndex < this.profession.length) {
                return this.profession[this.profIndex];
            }
            return "";
        },

        incomeType() {
            if (this.incomIndex == -1) {
                return "Choose..";
            } else if (this.incomIndex < this.incomOptions.length) {
                return this.incomOptions[this.incomIndex];
            }
            return "";
        }
    },

    methods: { 
        dropDownPicker(pickerID) {
            switch(pickerID) {
                case 1:
                    picker.pick({
                        index: this.eduIndex,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.education = items[event.data];
                            this.eduIndex = event.data;
                        }
                    });
                break;
                case 2:
                    picker.pick({
                        index: this.profIndex,
                        items: this.profession
                    },
                    event => {
                        if (event.result === "success") {
                            this.personProfession = items[event.data];
                            this.profIndex = event.data;
                        }
                    });
                break;
                case 3:
                    picker.pick({
                        index: this.incomIndex,
                        items: this.incomOptions
                    },
                    event => {
                        if (event.result === "success") {
                            this.personProfession = items[event.data];
                            this.incomIndex = event.data;
                        }
                    });
                break;
            }
        },

        dropDownHideShow(id) {
            switch(id) {
                case 1: 
                    this.educDropDown = !this.educDropDown;
                    this.profDropDown = false;
                    this.incomDropDown = false;
                break;
                case 2: 
                    this.educDropDown = false;
                    this.profDropDown = !this.profDropDown;
                    this.incomDropDown = false;
                break;
                case 3:
                    this.educDropDown = false;
                    this.profDropDown = false;
                    this.incomDropDown = !this.incomDropDown;
                break;
            }
        },

        pickerListItems(keyIndex, dropDownID) {
            switch(dropDownID) {
                case 1: 
                    // this.educDropDown = !this.educDropDown;
                    this.educSelect = this.educList[keyIndex];
                break;
                case 2:
                    this.profSelect = this.profession[keyIndex];
                break;
                case 3:
                    this.incomSelect = this.incomOptions[keyIndex];
                break;
            }
        }

    }
}
    
</script>

<style scoped>
    /* APK Version */
    .box {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .nx-flex-row {
        flex-direction: row;
    }

    .nx-flex-column {
        flex-direction: column;
    }

    .nx-flex-wrap {
        flex-wrap: wrap;
    }
    .nx-flex-nowrap {
        flex-wrap: nowrap;
    }

    .nx-flex-flow-wrap {
        flex-flow: wrap;
    }

    .row-alignment {
        align-items: center;
    }

    /* By default it is column */
    .nx-flex-direction-change {
        flex-direction: column;
    }

    .text {
        font-size: 40px;
    }

    .text-keep-center {
        text-align: center;
    }

    .text-color-white {
        color: #ffffff;
    }

    .form-labels {
        font-size: 30;
        padding-bottom:10px;
        color: #a5a5a5;
    }

    .input {
        background-color: #fff;
        padding: 15px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        margin-bottom: 20px;
    }

    .input:focus {
        border-bottom-color: #e90a85;
        border-width: 4px;
    }

    .form-padding {
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
        }

    .custom-btn {
        /* margin-top: 100px; */
        padding: 25px;
        background-color: #1867c0;
        border-radius: 7px;
        width: 340px;
    }

    .btn-margin {
        margin-top: 80px;
        margin-bottom: 50pc;
    }

    .btn-width {
        width: 710px;
    }

    .btn-label-size {
        font-size: 30px;

    }

    .btn-position {
        position: absolute;
        top: 30px;
        right: 10px;
    }

    .icon-btn {
        width: 70px;
        height: 70px;
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

        .drop-arrow-pos {
           
            /* background-color: red; */
            position: absolute;
            top: 20px;
            right: 0;
        }

        .dropdown-icon {
            width: 50px;
            height: 50px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        .multi-list-border {
            border-width: 1px;
            border-top-color: #fff;
            border-left-color: #fff;
            border-right-color: #fff;
            border-bottom-color: rgb(226, 226, 226);

        }


    /* Responsive Web mobile  */
    @media (min-width: 320px) {

        .box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .input {
            background-color: #fff;
            padding: 5px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            margin-bottom: 0;
        }

        .input-date-padding {
             padding: 2px;
        }

        .input:focus {
            border-bottom-color: #3F51B5;
            border-width: 2px;
        }

        .text {
            font-size: 14px;
        }

        .form-labels {
            font-size: 13px;
            color: #a5a5a5;
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }

         /* DropDowns */
        /* All Required Dropdowns Classes */
          .drop-down {
            position: relative;
            border-width: 2px;
            border-style: solid;
            border-top: none;
            border-right: none;
            border-left: none;
            border-bottom-color: #c7c7c7;
        }
        .dropDown-width {
            width: 100%;
        }
        .select-box {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        .dropdown-icon {
            width: 20px;
            height: 20px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }
        .drop-arrow-pos {
            width: 20px;
            height: 20px;
            /* background-color: red; */
            position: absolute;
            top: 6px;
            right: 0;
        }
        .drop-item-list {
            z-index: 4;
            min-width: 100%;
            background: rgb(255, 255, 255);
            position: absolute;
            top: 30px;
            left: 0;
            /* width: 100%; */
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .list-item-padding {
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px;
        }

        .custom-btn {
            padding: 15px;
            background-color: #1867c0;
            width: 140px;
        }

        .custom-btn:active {
            background-color: #59a0f1;
        }
        .btn-position {
            top: 10px;
            right: 10px;
            padding: 10px;
        }

        /* scroller tag not visible in web  */
        .scroll-hide {
            display: none;
        }

        .icon-btn {
            width:30px;
            height: 30px;
        }
               
    }

    /* Tab */
    @media (min-width: 768px) {
        .nx-flex-direction-change {
            flex-direction: row;
        }
        .box-min-width {
             min-width: 50%;
        }
    }

    /* Large screen */
    @media (min-width: 992px) {

        /* Desktop screen its changed to row */
        .nx-flex-direction-change {
            flex-direction: row;
        }

        .list-item-padding:active {
            background: #dadada;
        }

        .list-item-padding:hover {
            background: #dadada;
        }

        .box-min-width {
            min-width: 30%;
        }


        .checkbox label {
	padding-left: 24px;
}




        
    }
</style>
