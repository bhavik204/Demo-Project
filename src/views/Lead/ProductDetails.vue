<template>
    <!-- Forms -->
    <div class="form-wraper">
        <scroller>
            
                <!-- row 1 -->
                <div class="nx-flex-row nx-flex-flow-wrap nx-flex-direction-change">
                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Product Category</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(1)">
                            <text class="text input mouse-pointer">{{ prdctSelectValue }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'" class="dropDown-width" @click.native="dropDownHideShow(1)">
                            <text class="text input mouse-pointer">{{ prdctSelect }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                            <div  v-if="prductDropDown == true" class="drop-item-list shadow">
                                <div v-for="(listItem, li) in productList" :key="li">
                                    <div class="list-item-padding" @click.native="pickerListItems(li, 1)">
                                        <text class="text mouse-pointer">{{listItem}}</text>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Product Type</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width" @click="dropDownPicker(2)">
                            <text class="text input">{{ ptypeSelectValue }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'" class="dropDown-width" @click.native="dropDownHideShow(2)">
                            <text class="text input mouse-pointer">{{ ptypeSelect }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                            <div  v-if="ptypeDropDown == true" class="drop-item-list shadow">
                                <div v-for="(listItem, li) in prductTypeList" :key="li">
                                    <div class="list-item-padding"  @click.native="pickerListItems(li, 2)"> 
                                        <text class="text mouse-pointer">{{ listItem }}</text>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Solution</text>
                        <!-- This code is for apk -->
                        <div v-if="platform !== 'Web'" class="dropDown-width"  @click="dropDownPicker(3)">
                            <text class="text input">{{ solutionSelectValue }}</text>
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                        </div>
                        <!-- apk end -->
                        <!-- This code is for web -->
                        <div v-if="platform == 'Web'" class="dropDown-width" @click.native="dropDownHideShow(3)">
                            <text class="text input mouse-pointer">{{ solutionSelect }}</text>
                        
                            <div class="drop-arrow-pos">
                                <image  class="dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_24x24.png"></image>
                            </div>
                            <div  v-if="soluDropDown == true" class="drop-item-list shadow">
                                <div v-for="(listItem, li) in solutionList" :key="li">
                                    <div class="list-item-padding" @click.native="pickerListItems(li, 3)">
                                        <text class="text mouse-pointer">{{ listItem }}</text>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="box flex-box-size-01 box-min-width form-controller">
                        <text class="form-labels">Expected Premium</text>
                        <input class="input text" type="text" />
                       
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <text class="form-labels">Expected Closure Date </text>
                        <input class="input text" type="date" />    
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        
                    </div>

                    <div class="box flex-box-size-01 box-min-width">
                        <div v-if="platform !== 'Web'" class="nx-flex-row row-alignment">
                            <div class="box" style="width: 600px;">
                                <text class="form-labels">Would you be Intrested in Opening an EBL account?</text>
                            </div>
                            <div class="box flex-box-size-01">
                                <switch checked="true"></switch>
                            </div>
                        </div>

                        <div v-if="platform == 'Web'" class="nx-flex-row row-alignment">
                            <div class="box">
                                <text class="form-labels">Would you be Intrested in Opening an EBL account?</text>
                            </div>
                            
                            <div class="md-radio">
                                <input id="1" type="radio" name="g" checked>
                                <label for="1" class="form-labels">Yes</label>
                            </div>
                            <div class="md-radio">
                                <input id="2" type="radio" name="g">
                                <label for="2" class="form-labels">No</label>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
                
                <!-- Button -->
               
                <div v-if="platform == 'Web'" class="nx-flex-row" style="justify-content:center;">
                    <div class="box">
                        <!-- Button -->
                        <div class="custom-btn mouse-pointer" @click.native="jump()">
                            <text class="text text-keep-center text-color-white mouse-pointer">BACK</text>
                        </div>
                    </div>
                    <div class="box">
                        <div class="custom-btn mouse-pointer">
                            <text class="text text-keep-center text-color-white mouse-pointer">NEXT</text>
                        </div>
                    </div>
                </div>
                <div v-if="platform !== 'Web'" class="nx-flex-row" style="justify-content:center;">
                    <div class="box btn-margin">
                        <!-- Button -->
                        <div class="custom-btn" @click="jump()">
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
    "Traditional",
    "Protection",
    "ULIP"
];

const prductTypeList = ["Par", "Non Par"];

const solutionList = ["Dhan Labh", "Cash Income", "Cover Plus"];


const picker = weex.requireModule("picker");
const navigator = weex.requireModule('navigator');

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

            productList: items,
            prductTypeList,
            solutionList,

            prdctSelect: "Choose..",
            ptypeSelect: "Choose..",
            solutionSelect: "Choose..",
        
            prductDropDown: false,
            ptypeDropDown: false,
            soluDropDown: false,

            pIndex: -1,
            pTIndex: -1,
            sIndex: -1
        }
    },

    computed: {
        prdctSelectValue() {
            if (this.pIndex == -1) {
                return "Choose..";
            } else if (this.pIndex < items.length) {
                return items[this.pIndex];
            }
            return "";
        },

        ptypeSelectValue() {
            if (this.pTIndex == -1) {
                return "Choose..";
            } else if (this.pTIndex < this.prductTypeList.length) {
                return this.prductTypeList[this.pTIndex];
            }
            return "";
        },

        solutionSelectValue() {
            if (this.sIndex == -1) {
                return "Choose..";
            } else if (this.sIndex < this.solutionList.length) {
                return this.solutionList[this.sIndex];
            }
            return "";

        }
        
    },

    methods: { 

        dropDownPicker(pickerID) {
            switch(pickerID) {
                case 1:
                    picker.pick({
                        index: this.pIndex,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.prdctSelectValue = items[event.data];
                            this.pIndex = event.data;
                        }
                    });
                break;

                case 2:
                    picker.pick({
                        index: this.pTIndex,
                        items: this.prductTypeList
                    },
                    event => {
                        if (event.result === "success") {
                            this.ptypeSelectValue = items[event.data];
                            this.pTIndex = event.data;
                        }
                    });
                break;

                case 3:
                    picker.pick({
                        index: this.sIndex,
                        items: this.solutionList
                    },
                    event => {
                        if (event.result === "success") {
                            this.solutionSelectValue = items[event.data];
                            this.sIndex = event.data;
                        }
                    });
                break;
            }
        },
       
        dropDownHideShow(id) {
            switch(id) {
                case 1: 
                    this.prductDropDown = !this.prductDropDown;
                    this.ptypeDropDown = false;
                    this.soluDropDown = false;
                    
                break;
                case 2: 
                    this.prductDropDown = false;
                    this.ptypeDropDown = !this.ptypeDropDown;
                    this.soluDropDown = false;
                    
                break;
                case 3:
                    this.prductDropDown = false;
                    this.ptypeDropDown = false;
                    this.soluDropDown = !this.soluDropDown;
                break;
            }
        },

        pickerListItems(keyIndex, dropDownID) {
            switch(dropDownID) {
                case 1: 
                    this.prdctSelect = this.productList[keyIndex];
                break;
                case 2:
                    this.ptypeSelect = this.prductTypeList[keyIndex];
                break;
                case 3:
                    this.solutionSelect = this.solutionList[keyIndex];
                break;
                
            }
        },

        jump() {
            navigator.push({
                url:'http://192.168.1.102:8081/#/status',
                animated: 'true'
            })
        }

    }
}
    
</script>

<style>
    /* APK Version */

    .form-wraper {
        padding: 10px;
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
        color: #a5a5a5;
    }

.form-controller {
    position: relative;
}
.form-labels-no-animate {
    font-size: 30;
    color: #a5a5a5;
    position: absolute;
    bottom: 0;
    left: 0;
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

        /* Code for Radio button */

               
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

        .md-radio {
  margin: 5px 0;
}
.md-radio.md-radio-inline {
  display: inline-block;
}
.md-radio input[type="radio"] {
  display: none;
}
.md-radio input[type="radio"]:checked + label:before {
  border-color: #337ab7;
  animation: ripple 0.2s linear forwards;
}
.md-radio input[type="radio"]:checked + label:after {
  transform: scale(1);
}
.md-radio label {
  display: inline-block;
  height: 20px;
  position: relative;
  padding: 0 30px;
  margin-bottom: 0;
  cursor: pointer;
  vertical-align: bottom;
}
.md-radio label:before, .md-radio label:after {
  position: absolute;
  content: '';
  border-radius: 50%;
  transition: all .3s ease;
  transition-property: transform, border-color;
}
.md-radio label:before {
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.54);
}
.md-radio label:after {
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  transform: scale(0);
  background: #337ab7;
}
    }
</style>
