<template>
    <!-- Forms -->
    
    <div class="form-wraper">
        <scroller >
            
                <!-- row 1 -->
                <div class="nx-flex-row nx-flex-flow-wrap nx-flex-direction-change form-padding">
                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Lead Source *</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(1)">
                            <text class="text input mouse-pointer">{{ leadSrcValue }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'">
                            <select class="text input">
                                <option v-for="listItem in leadSourceList"> {{listItem}} </option>
                            </select>                            
                        </div>
                    </div>

                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Campaign Name *</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(2)">
                            <text class="text input">{{ campSelectedName }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'">
                            <select class="text input">
                                <option v-for="listItem in campaignList"> {{listItem}} </option>
                            </select>   
                            
                        </div>
                        
                        
                    </div>

                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Lead Status *</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(3)">
                            <text class="text input mouse-pointer">{{ leadStatusType }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'">
                            <select class="text input">
                                <option v-for="listItem in leadStatusList"> {{listItem}} </option>
                            </select>   
                        </div>
                    </div>

                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Lead Disposition</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(4)">
                            <text class="text input mouse-pointer">{{ leadDisposSts }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'">
                            <select class="text input">
                                <option v-for="listItem in disposLead"> {{listItem}} </option>
                            </select>   
                        </div>
                        
                    </div>

                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Lead Sub Disposition</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(5)">
                            <text class="text input mouse-pointer">{{ subDspLead }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'">
                            <select class="text input">
                                <option v-for="listItem in disposLead"> {{listItem}} </option>
                            </select>   
                        </div>
                        
                    </div>
                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Remarks From Source</text>
                        <input class="input text" type="text" />
                       
                    </div> 

                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Remarks From User</text>
                        <input class="input text" type="text" />    
                    </div>

                    <!-- End -->

                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Appointment Date *</text>
                        <input class="input input-date-padding text" type="date" />    
                    </div>

                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
                        <text class="form-labels">Appointment Time *</text>
                        <input class="input input-date-padding text" type="time" />    
                    </div>

                    <div class="box flex-box-size-01 box-min-width input-margin-btm">
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
    "Natural Market", "Reference Lead", "Web"
];

const campaignList =   ["Natural Market", "Reference Lead", "Affiliate"];
const leadStatusList = ["New Lead Entry", "Non Contact", "Contact"];
const listforNonCont = ["Not reachable", "Ringing / Busy", "Wrong number", "Invalid Number", "Switched off"];
const listforCont = ["Appointment", "Call Back", "Short hang up", "Not Interested", "Non Servicable location", "Not Eligible"];

const subDispLis = [
    "Client has given appointment", 
    "Asked to call back later", 
    "Decision maker unavailable", 
    "ECS is active, asked to call on due date",
    "Short hang up", 
    "NI - to meet",
    "NI - did not enquire",
    "NI - too expensive",
    "NI - discontinue existing policy",
    "Non Servicable location",
    "NE - Income / Age"
];


// const contact

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

            leadSourceList: items,
            campaignList,
            leadStatusList,

            disposLead: ["Fresh Lead"],
            leadSubDsp: ["Fresh Lead"],
        
            educSelect: "Choose..",
            profSelect: "Choose..",
            incomSelect: "Choose..",

            educDropDown: false,
            profDropDown: false,
            incomDropDown: false,

            leadSrcIndex: -1,
            compIndex: -1,
            ledStsIndex: -1,
            dspIndex: -1,
            subDspIndex: -1,

            // leadSource: 'Natural Market',
            // compaignName: 'Natural Market',
            // leadStatus: 'New Lead Entry',
            // leadDispo: 'Fresh Lead',
            // leadSubDispo: 'Fresh Lead'

            email: "",
              passw: "",
              id:'',
              id1:'',
              activeemail : true,
              animateEmail : false,
              activepass : true,
              animatePass : false,
              error:false,
              usdata: [],
              postResult: "",
              className: 'txt-lbl'

        }
    },

    computed: {
        leadSrcValue() {
            if (this.leadSrcIndex == -1) {
                return "Natural Market";
            } else if (this.leadSrcIndex < this.leadSourceList.length) {
                return this.leadSourceList[this.leadSrcIndex];
            }
            return "";
        },
        campSelectedName() {
            if (this.compIndex == -1) {
                return "Natural Market";
            } else if (this.compIndex < this.campaignList.length) {
                return this.campaignList[this.compIndex];
            }
            return "";
        },

        leadStatusType() {
            if (this.ledStsIndex == -1) {
                return "New Lead Entry";
            } else if (this.ledStsIndex < this.leadStatusList.length) {
                return this.leadStatusList[this.ledStsIndex];
            }
            return "";
        },
        leadDisposSts() {
            if (this.dspIndex == -1) {
                return "Fresh Lead";
            } else if (this.dspIndex < this.disposLead.length) {
                return this.disposLead[this.dspIndex];
            }
            return "";

        },

        subDspLead() {
            if (this.subDspIndex == -1) {
                return "Fresh Lead";
            } else if (this.subDspIndex < this.leadSubDsp.length) {
                return this.leadSubDsp[this.subDspIndex];
            }
            return "";

        }
    },

    methods: { 
        dropDownPicker(pickerID) {
            switch(pickerID) {
                case 1:
                    picker.pick({
                        index: this.leadSrcIndex,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.leadSrcValue = items[event.data];
                            this.leadSrcIndex = event.data;
                        }
                    });
                break;
                case 2:
                    picker.pick({
                        index: this.compIndex,
                        items: this.campaignList
                    },
                    event => {
                        if (event.result === "success") {
                            this.campSelectedName = items[event.data];
                            this.compIndex = event.data;
                        }
                    });
                break;
                case 3:
                    picker.pick({
                        index: this.ledStsIndex,
                        items: this.leadStatusList
                    },
                    event => {
                        if (event.result === "success") {
                            this.leadStatusType = items[event.data];
                            this.ledStsIndex = event.data;
                        }
                    });
                break;
                case 4:
                    if(this.leadStatusType === this.leadStatusList[0]) {
                        this.disposLead = listforNonCont;
                    } else {
                        this.disposLead = listforCont;
                    }
                    picker.pick({
                        index: this.dspIndex,
                        items: this.disposLead
                    },
                    
                    event => {
                        // Wants to change
                        if (event.result === "success") {
                            this.leadDisposSts = items[event.data];
                            this.dspIndex = event.data;
                        }
                    });
                break;

                case 5: 
                    if(this.leadDisposSts === this.disposLead[0]) {

                        if(this.leadDisposSts !== this.disposLead[0]) {
                            this.subDspIndex = -1;
                        } else {
                            this.leadSubDsp = [];     
                            this.leadSubDsp[0] = subDispLis[0];
                        }   
                    }
                    
                    else if(this.leadDisposSts === this.disposLead[1]) {
                        if(this.leadDisposSts !== this.disposLead[1]) {
                            this.subDspIndex = -1;   
                        } else {
                            this.leadSubDsp = [];
                            let j = 0;
                            for( let i = 1; i <= 3; i++ ) {
                                this.leadSubDsp[j] = subDispLis[i];
                                j++;
                            }

                        }
                    }
                    else if(this.leadDisposSts === this.disposLead[2]) {
                        // 
                        if(this.leadDisposSts !== this.disposLead[2]) {
                            this.subDspIndex = -1;
                        } else {
                            this.leadSubDsp = []; 
                            this.leadSubDsp[0] = subDispLis[4];
                        }
                    } 

                    else if(this.leadDisposSts === this.disposLead[3]) {
                        if(this.leadDisposSts !== this.disposLead[3]) {
                            this.subDspIndex = -1;
                        } else {
                            this.leadSubDsp = []; 
                            let j = 0;
                            for( let i = 5; i <= 8; i++ ) {
                                this.leadSubDsp[j] = subDispLis[i];
                                j++;
                            }
                        }
                    } else if (this.leadDisposSts === this.disposLead[4]) {
                        if(this.leadDisposSts !== this.disposLead[4]) {
                            this.subDspIndex = -1;
                        } else {
                            this.leadSubDsp = []; 
                            this.leadSubDsp[0] = subDispLis[9];
                        }
                    } else if (this.leadDisposSts === this.disposLead[5]) {
                        if(this.leadDisposSts !== this.disposLead[5]) {
                            this.subDspIndex = -1;
                        } else {
                            this.leadSubDsp = []; 
                            this.leadSubDsp[0] = subDispLis[10];
                        }

                    } else {
                        if(this.leadStatusType === this.leadStatusList[0]) {
                            this.leadSubDsp = []; 
                            this.leadSubDsp = listforNonCont;
                        } 
                    }

                    picker.pick({
                        index: this.subDspIndex,
                        items: this.leadSubDsp
                    },
                    
                    event => {
                        // Wants to change
                        if (event.result === "success") {
                            this.subDspLead = items[event.data];
                            this.subDspIndex = event.data;
                            // this.leadSubDsp.pop();
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
                // case 3:
                //     this.incomSelect = this.incomOptions[keyIndex];
                // break;
            }
        },
    }
}
    
</script>

<style >
    /* APK Version */


    /* ----------- */

    .form-wraper {
        background-color: #FFF;
    }
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

        .form-padding {
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
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
            padding: 10px;
            background-color: #1867c0;
            width: 140px;
            border-radius: 4px;
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

        .input-margin-btm {
            margin-bottom: 20px;
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
    }
</style>
