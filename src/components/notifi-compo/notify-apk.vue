<template>
    <div>
        <div class="noti-apk-flx-row noti-apk-card-margin-btm" style="padding: 20px;">
            <div class="noti-apk-container ">
                <div class="noti-apk-profile-circle">
                    <text class="noti-apk-profile-title">SS</text>
                </div>
            </div>
            <div class="noti-apk-container" style="flex:1">
                <div class="noti-apk-flx-row">
                    <div class="noti-apk-container " style="flex:2">
                        <text class="noti-apk-name-font" lines="1">{{dataSource.name}}</text>
                    </div>
                    <div class="noti-apk-container" style="flex:1">
                        <text class="noti-apk-font-normal">{{dataSource.value}}</text>
                    </div>
                </div>
                <div class="noti-apk-flx-row">
                    <div class="noti-apk-container" style="flex:2">
                        <text class="noti-apk-font-normal">{{dataSource.id}}</text>
                    </div>
                    <div class="noti-apk-container" style="flex:1">
                        <text class="noti-apk-font-normal">{{dataSource.date}}</text>
                    </div>
                </div>
            </div>
            <div class="noti-apk-container noti-apk-call-active" >
                <image src="https://www.materialui.co/materialIcons/navigation/more_vert_grey_192x192.png" 
                class="noti-apk-action-button " @click="minibarRightButtonClick"/>
            </div>

            <wxc-popover ref="wxc-popover"
                 :buttons="btns"
                 :position="popoverPosition"
                 :arrowPosition="popoverArrowPosition"
                 @wxcPopoverButtonClicked="popoverButtonClicked">
            </wxc-popover>
        </div>
    </div>
</template>
  
<script>
    import { WxcPopover} from 'weex-ui';

    const modal = weex.requireModule('modal');

    export default {
        props:{
            dataSource: Object
        },
        // created() {
        //     for(let i = 0; i < this.dataSource.data.length; i++) {
        //         if(this.dataSource.data[i].label === 'CFR Type') {
        //             // this.dataForCFR();
        //             break;
        //         }
        //     }
        // },
        components: {
            WxcPopover
        },
        data() {
            return {
                listingData: {
                    name: '',
                    id: '',
                    date: '',
                    value: ''       // This value is a switchable in evey card its chnaged
                },
                btns:[{
                    icon: 'https://www.materialui.co/materialIcons/communication/call_grey_192x192.png',
                    text:'Call',
                    key:'call'
                    }, {
                    icon: 'https://www.materialui.co/materialIcons/notification/sms_grey600_192x192.png',
                    text:'SMS',
                    key:'sms'
                }, {
                    icon:'https://www.materialui.co/materialIcons/communication/email_grey_192x192.png',
                    text:'Email',
                    key:'email'
                }],
                popoverPosition: {
                    x: -14, 
                    y: 380
                },
                popoverArrowPosition: {
                    pos: 'top',
                    x: -15
                },

            }
        },
        methods: {
            minibarRightButtonClick () {
                this.$refs['wxc-popover'].wxcPopoverShow();
            },
            popoverButtonClicked (obj) {
                modal.toast({ 'message': `key:${obj.key}, index:${obj.index}`, 'duration': 1 });
            },
            // dataForCFR() {
            //     for(let i = 0; i < this.dataSource.data.length; i++) {
            //         if(this.dataSource.data[i].label === 'Client Name') {
            //             this.listingData.name = this.dataSource.data[i].data;
            //         } else if(this.dataSource.data[i].label === 'Client ID') {
            //             this.listingData.id = this.dataSource.data[i].data;
            //         } else if(this.dataSource.data[i].label === 'CFR Type') {
            //             this.listingData.value = this.dataSource.data[i].data;
            //         } else if(this.dataSource.data[i].label === 'Login Date') {
            //             this.listingData.date = this.dataSource.data[i].data;
            //         }
            //     }
            // }
        }
    }
</script>
  
  <style scoped>
    .noti-apk-page-wraper {
        /* padding: 20px;
        background-color: #f7f7f7; */
    }
    .noti-apk-flx-row {
        flex-direction: row;
        background-color: rgb(255, 255, 255);
        align-items: center;
    }
    .noti-apk-font-bold {
        font-weight: bold;
        color: green;
    }
    .noti-apk-container {
        padding: 10px;
    }
    .noti-apk-profile-circle {
        height: 100px;
        width: 100px;
        background-color: #2845a3;
        border-radius: 50px;
    }
    .noti-apk-profile-title{
        position: absolute;
        top: 26%;
        left: 24%;
        color: white;
        font-size: 40px;
        font-weight: 700;
        font-family:robotoregular;
    }
    .noti-apk-action-button {
        height: 60px;
        width: 60px;
        padding: 10px;
        margin-bottom: 22px;
        margin-top: 22px;
    }
    .noti-apk-call-active:active{
        background-color: #dfdfdf;
        border-radius: 60px;
    }
    .noti-apk-card-margin-btm {
        margin-bottom: 20px;
    }
    .noti-apk-name-font {
        font-size: 32px;
        lines: 1;
        font-weight: 700px;
        font-family:robotoregular;
    }
    .noti-apk-font-normal {
        font-size: 24px;
    }
    .noti-apk-btm-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFFFFF;
        border-left-color: #FFFFFF;
        border-right-color: #FFFFFF;
        border-bottom-color: #e2e2e2;
    }

    
    
    /**/
  </style> 
