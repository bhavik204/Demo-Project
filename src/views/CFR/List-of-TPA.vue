<template>
    <div class="page-wraper window-display">
        <div v-if="platform === 'Web'" class="nx-flex-row page-header items-justify-center items-align-center">
            <text class="page-heder-title">List of TPA's</text>
        </div>
        <scroller>  
            <div v-for="(li, index) in list" :key="index" class="list-container">
                <text class="list-heading botm-margin">Family Health Plan Limited</text>
                <text class="text botm-margin">Family Health Plan Limited Srinilaya - Cyber spazio suite 101,102,109 & 110, Ground Floor, Road No. 2, Banjara Hills, Hyderabad, Telangana - 500034</text>
                <div class="nx-flex-row items-align-center">
                    <text class="text">1800 425 4033</text>
                    <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/communication/phone_black_48x48.png"></image>

                </div>
            </div>
        </scroller>
    </div>
</template>

<script>


const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            this.deviceWidth = WXEnvironment.deviceWidth || unknown
            // return this.platform
        }
    },

    data() {
        return {
            headerName:'List Of TPAs',
            list: [1,2,3,4,5,6,7,8,9,10]
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

    .nx-flex-row {
        flex-direction: row;
    }
    
    .items-justify-center {
        justify-content: center;
    }

    .items-align-center {
        align-items: center;
    }
    .page-wraper {
        background-color: rgb(230, 230, 230);
    }

    .page-header {
        height: 100px;
        background-color: #3b371e;
        top: -1px;
    }


    .page-heder-title {
        font-size: 35px;
        color:white;
        font-family:robotoregular;
    }

    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }

    .list-heading {
        font-size: 27px;
        font-weight: bold;
        font-family:robotoregular;
    }

    .list-container {
        background-color: #fff;
        padding: 30px;
        border-width: 2px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: rgb(230, 230, 230);
    }

    .text {
        font-size: 24px;
        font-family:robotoregular;
    }

    .botm-margin {
        margin-bottom: 15px;
    }   

    

    @media (min-width: 320px) {
        .window-display {
            display: block;
        }

        .page-header {
            height: 50px;
        }
        .list-heading {
            font-size: 16px;
            font-family:robotoregular;
        }

        .text {
            font-size: 14px;
            font-family:robotoregular;
        }

        .list-container {
            padding: 10px;
            border-width: 1px;
        }

        .botm-margin {
            margin-bottom: 5px;
        } 
        
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-left: 10px;
        }

        .page-heder-title {
            font-size: 16px;
            font-weight: bold;
            font-family:robotoregular;
        }
    }
    @media (min-width: 768px) {
        .window-display {
            display: none;
        }
    }
    @media (min-width: 992px) {
        .window-display {
            display: none;
        }
        
    }

</style>


