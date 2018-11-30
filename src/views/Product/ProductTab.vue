<template>
     <header-tab :tabs="tabs" :counter="counter"></header-tab>
    
    </template>

<script>
    import headerTab from '../../components/Tabs/HeaderTab.vue'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/';
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
                counter:false,
                tabs: [{
                        bgColor: '#3b3dee',
                        color: '#fff',
                        shade: '',
                        icon: iconSrc + 'wallet_membership_white_192x192.png',
                        Title: 'Protection',
                        counter: 55,
                        active: false,
                        blackIcon: iconSrc + 'wallet_membership_black_192x192.png',
                        whiteIcon: iconSrc + 'wallet_membership_white_192x192.png',
                        link: '/protection'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc + 'redeem_black_192x192.png',
                        Title: 'Saving',
                        counter: 2,
                        active: false,
                        blackIcon: iconSrc + 'redeem_black_192x192.png',
                        whiteIcon: iconSrc + 'redeem_white_192x192.png',
                        link: '/saving'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc + 'touch_app_black_192x192.png',
                        Title: 'Investment',
                        counter: 34,
                        active: false,
                        blackIcon: iconSrc + 'touch_app_black_192x192.png',
                        whiteIcon: iconSrc + 'touch_app_white_192x192.png',
                        link: '/investment'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: iconSrc + 'favorite_black_192x192.png',
                        Title: 'Health',
                        counter: 23,
                        active: false,
                        blackIcon: iconSrc + 'favorite_black_192x192.png',
                        whiteIcon: iconSrc + 'favorite_white_192x192.png',
                        link: '/health'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/hardware/gamepad_black_192x192.png',
                        Title: 'Retirement',
                        counter: 25,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/hardware/gamepad_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/hardware/gamepad_white_192x192.png',
                        link: '/retirement'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/action/account_child_black_192x192.png',
                        Title: 'Child',
                        counter: 10,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/action/account_child_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/action/account_child_white_192x192.png',
                        link: '/child'
                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon: 'https://www.materialui.co/materialIcons/action/group_work_black_192x192.png',
                        Title: 'Solution For Group',
                        counter: 28,
                        active: false,
                        blackIcon: 'https://www.materialui.co/materialIcons/action/group_work_black_192x192.png',
                        whiteIcon: 'https://www.materialui.co/materialIcons/action/group_work_white_192x192.png',
                        link: '/solution'
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


