<template>
    <div>
        <div class="custom-drop-down-row drp-dwn-btm-bdr" @click="dropDownPicker">
            <div>
                <text class="slect-item-font" :style="{color: labelStyle}">{{ value }}</text>
            </div>
            <div class="xd-drop-arrow-pos">
                <image  class="xd-dropdown-icon mouse-pointer" src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_black_192x192.png"></image>
            </div>
        </div>
    </div>
</template>

<script>

const picker = weex.requireModule("picker");
var items = [''];


export default {
    props: {
        optionList: Array
    },
    data() {
        return {
            index: -1,
            labelStyle: '#999999'
        }
    },
    computed: {
        value() {
            if (this.index == -1) {
                return "Select";
            } else if (this.index < items.length) {
                return items[this.index];
            }
            return "";
        }
    },
    methods: {
        dropDownPicker() {
            items = this.optionList
            picker.pick({
                index: this.index,
                items  
            },
            event => {
                if (event.result === "success") {
                    this.value = items[event.data];
                    this.index = event.data;
                    this.labelStyle = '';
                    this.$emit('selectedValue', {value: this.value});
                }
            });
        
            
        }
    }

}
</script>

<style scoped>
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
    .custom-drop-down-row {
        flex-direction: row;
        flex: 1;
    }
    .drp-dwn-btm-bdr {
        border-width: 2px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #999999;
        padding: 20px;
        padding-left: 0;
    }
    .xd-drop-arrow-pos {
        position: absolute;
        top: 20px;
        right: 0;
    }

    .xd-dropdown-icon {
        width: 50px;
        height: 50px;
    }
    .slect-item-font {
        font-size: 28px;
        font-family:robotoregular;
    }

</style>

