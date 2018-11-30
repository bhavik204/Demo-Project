<template>
    <div style="background-color:#F7F7F7">
        <div class="master-page-wrapper">
            <application-tab :tabs="tabs"></application-tab>
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>

import applicationTab from '../../components/Tabs/HeaderTab.vue'

const iconSrc = 'https://www.materialui.co/materialIcons/action/';

// apk
import appNotifyApk from '../../components/notifi-compo/notify-apk.vue'

const env = weex.config.env || WXEnvironment
const invalid = '- invalid -'

export default {
    created() {
        if (typeof WXEnvironment === 'object') {
            this.platform = WXEnvironment.platform || unknown
            return this.platform
        }
    },
    data: function() {
        return {
            tabs: [{
                bgColor: '#3d3bee',
                color: '#fff',
                shade: '',
                icon: iconSrc+'supervisor_account_white_192x192.png',
                Title: 'Applications',
                counter: 12,
                active: false,
                blackIcon:iconSrc+ 'supervisor_account_black_192x192.png',
                whiteIcon:iconSrc+ 'supervisor_account_white_192x192.png',
                link: '/notifypage/appnotifypage'
            }, {
                bgColor: '#FFF',
                color: '#000000',
                shade: '',
                icon: iconSrc + 'cached_black_192x192.png',
                Title: 'Renewals',
                counter: 8,
                active: false,
                blackIcon: iconSrc + 'cached_black_192x192.png',
                whiteIcon: iconSrc + 'cached_white_192x192.png',
                link: '/notifypage/renenotifypage'
            }, {
                bgColor: '#FFF',
                color: '#000000',
                shade: '',
                icon: iconSrc + 'announcement_black_192x192.png',
                Title: 'Alert',
                counter: 4,
                active: false,
                blackIcon: iconSrc + 'announcement_black_192x192.png',
                whiteIcon: iconSrc + 'announcement_white_192x192.png',
                link: '/notifypage/alertnotipage'

            }],
        }
    },
    components: {
        applicationTab
    }
}
</script>

<style>
    .robotoregular {
        font-family:robotoregular;
    }
    .robotobold{
        font-family:robotobold;
    }
    .master-page-wraper {
        flex-direction: row;
        justify-content: center;
    } 

    .master-page-flex-row {
        flex-direction: row;
        flex-flow: wrap;
        flex-wrap: wrap;
    }

    .top-flexdirection-row {
        flex-direction: row;
    }

    .container-box-width {
        margin-bottom: 20px;
    }

    @media (min-width: 320px) {
        .master-page-heder-font {
            font-size: 14px;
            font-family:robotoregular;
        }
        .clicable-link {
            color: rgb(52, 16, 248);
        }
        .content-padding-box {
            padding: 5px;
        }
        .master-page-margin-btm {
            margin-bottom: 10px;
            margin-top: 20px;
        }
        
    }
    @media (min-width: 768px) {
        /* .master-page-flex-row-width {
            width: 95%;
        } */
        .master-data-bx-margin {
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 20px;
        }
        .container-box-width {
            width: 100%;
        }
        
    }
    @media (min-width: 992px) {
        /* .master-page-flex-row-width {
            width: 95%;
        } */
        .master-data-bx-margin {
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
        }
        .container-box-width {
            width: 48%;
        }
        .btn-cursor {
            cursor: pointer;
        }
    }

</style>
