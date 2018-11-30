<template>
    <div class="vx-secondary-btn large-text" :style="{width: btnWidth}">
        <div v-if="leftActive === true" class="vx-secondary-btn-margin-right">
            <image :src="btnIcon" class="vx-secondary-btn-icon-size" />
        </div>
        <text class="vx-secondary-btn-label large-text">{{ btnName }}</text>
        <div v-if="rightActive === true" class="vx-secondary-btn-margin-left">
            <image :src="btnIcon" class="vx-secondary-btn-icon-size" />
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            btnName: String,
            btnIcon: String,
            btnWidth: String,
            iconSide: {
                type:String,
                default: 'left'
            },
            icon: {
                type: Boolean,
                default: true
            }
        }, 
        data() {
            return {
                leftActive: true,
                rightActive: false
            }
        },
        mounted() {

            // Updated code @usama
            if(this.icon === false) {
                this.rightActive = false;
                this.leftActive = false;
            } else {
                if (this.iconSide === 'right') {
                    this.rightActive = true;
                    this.leftActive = false;
                } 
            }
        }
    }
</script>
<style scoped>

    .vx-secondary-btn {
        /* background-color: inherit; */
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        /* width: ; */
        cursor: pointer;
        border-width: 2px;
        border-color: #3b371e;
        border-style: solid;
    }
    .vx-secondary-btn-label{
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
        color:#181713;
        font-family:robotoregular;
    }
    .vx-secondary-btn-margin-right {
        margin-right: 20px;
    }
    .vx-secondary-btn-margin-left {
        margin-left: 20px;
    }
    .vx-secondary-btn-icon-size {
        width: 30px;
        height: 30px;
    }
    @media (min-width: 320px) {
        .vx-secondary-btn {
            border-radius: 2px;
            height: 30px;
            /* width: 100%; */
            position: relative;
            cursor: pointer;
            border-width: 1.2px;
            margin-right: 8px;
        }
        .vx-secondary-btn-label{
            font-size : 11px;
            font-weight: 500;
        }
        .vx-secondary-btn-margin-right {
            margin-right: 10px;
        }
        .vx-secondary-btn-margin-left {
            margin-left: 10px;
        }
        .vx-secondary-btn-icon-size {
            width: 18px;
            height: 18px;
        }

        .large-text {
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
        }
    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {
        
    }


</style>

