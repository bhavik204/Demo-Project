<template>
        <div class="user master-page-wrapper">
            <!-- <application-tab></application-tab> -->
            <header-tab :tabs="tabs" :counter="counter" ></header-tab>
            <!-- <main-tab  :tabs="tabs"></main-tab> -->
            <scroller class="scroller-test-master">
                <router-view ></router-view>
                <!-- <router-view name="CalculatorChild"/ ></router-view>
                <router-view name="CalculatorRetire" /></router-view> 
                -->
              
            </scroller>
        </div>
</template>

<script>
    // import mainTab from '../../../components/Tabs/MainTab.vue'
    // import applicationTab from '../Application/ApplicationTab.vue'
    import headerTab from '../../components/Tabs/HeaderTab.vue'
    const iconSrc = 'https://www.materialui.co/materialIcons/action/'
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Calculator');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            // mainTab,
            // applicationTab,
            headerTab
        },
        data() {
            return {
                counter:false,
                tabs: [{
                        bgColor: '#3d3bee',
                        color: '#fff',
                        shade: '',
                        icon:  'https://www.materialui.co/materialIcons/notification/wc_white_192x192.png',
                        Title: 'Human Life',
                        counter: 55,
                        active: false,
                        blackIcon:  'https://www.materialui.co/materialIcons/notification/wc_black_192x192.png',
                        whiteIcon:  'https://www.materialui.co/materialIcons/notification/wc_white_192x192.png',
                        link: '/mastercalculator/calculatorhuman'

                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon:  'https://www.materialui.co/materialIcons/notification/airline_seat_recline_normal_black_192x192.png',
                        Title: 'Retirement',
                        counter: 55,
                        active: false,
                        blackIcon:  'https://www.materialui.co/materialIcons/notification/airline_seat_recline_normal_black_192x192.png',
                        whiteIcon:  'https://www.materialui.co/materialIcons/notification/airline_seat_recline_normal_white_192x192.png',
                        link: '/mastercalculator/calculatorretire'


                    }, {
                        bgColor: '#FFF',
                        color: '#000000',
                        shade: '',
                        icon:  'https://www.materialui.co/materialIcons/places/child_friendly_black_192x192.png',
                        Title: 'Child',
                        counter: 55,
                        active: false,
                        blackIcon:  'https://www.materialui.co/materialIcons/places/child_friendly_black_192x192.png',
                        whiteIcon:  'https://www.materialui.co/materialIcons/places/child_friendly_white_192x192.png',
                        link: '/mastercalculator/calculatorchild'

                    },


                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
            }
        }


    }
</script>

<style>

</style>