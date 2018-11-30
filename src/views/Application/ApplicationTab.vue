<template>
    <header-tab :tabs="tabs" :counter="counter"></header-tab>
</template>

<script>
    import headerTab from '../../components/Tabs/HeaderTab.vue'

    const iconSrc = 'https://www.materialui.co/materialIcons/action/';

    var bundleUrl = weex.config.bundleUrl;
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
     
        created() {
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            headerTab
        },
        data() {
            return {
                // active: false,
                counter:false,

                tabs: [{


                        bgColor: '#3d3bee',
                        color: '#fff',
                        shade: '',
                        icon: iconSrc + 'supervisor_account_white_192x192.png',
                        Title: 'Benefit Illustrator',
                        counter: 55,
                        active: true,
                        blackIcon: iconSrc + 'supervisor_account_black_192x192.png',
                        whiteIcon: iconSrc + 'supervisor_account_white_192x192.png',
                        link: '/master/testapp'

                    }, {

                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc + 'description_black_192x192.png',
                        Title: 'Proposal Fulfilment',
                        counter: 2,
                        active: true,
                        blackIcon: iconSrc + 'description_black_192x192.png',
                        whiteIcon: iconSrc + 'description_white_192x192.png',
                        link: '/master/testpro/proposalpersonal'


                    }, {

                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc + 'input_black_192x192.png',
                        Title: 'Pre-payment Review',
                        counter: 34,
                        active: false,
                        blackIcon: iconSrc + 'input_black_192x192.png',
                        whiteIcon: iconSrc + 'input_white_192x192.png',
                        link: '/master/prepayview'

                    }, {

                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc + 'class_black_192x192.png',
                        Title: 'Payment Options',
                        counter: 23,
                        active: false,
                        blackIcon: iconSrc + 'class_black_192x192.png',
                        whiteIcon: iconSrc + 'class_white_192x192.png',
                        link: '/master/masterpay/onlinepayment'
                    }, {

                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                        Title: 'Documents Upload',
                        counter: 60,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/av/not_interested_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png',
                        link: '/master/masterdoc/addressdocument'
                    }
                ]

            }
        },
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
        }
    }
</script>

<style>

</style>