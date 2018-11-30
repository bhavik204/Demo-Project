<template>
        <!-- <div class="user"> -->
 
            <scroller class="scroller-test-master">
                <router-view ></router-view>
                <!-- <router-view name="APTestimonials" /></router-view> 
                <router-view name="Customer"/ ></router-view> -->
                
              
            </scroller>
        <!-- </div> -->
</template>

<script>
    import mainTab from '../../../components/Tabs/MainTab.vue'
    import applicationTab from '../../Application/ApplicationTab.vue'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'PreSale Tool');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        components: {
            mainTab,
            applicationTab
        },
        data() {
            return {
                tabs: [{
                        Title: 'Personal',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '#fff',

                        borderBottomwidth: '5px',
                        borderBottomcolor: '#3b371e'

                    }, {
                        Title: 'Nominee',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''


                    }, {
                        Title: 'Family',
                        inactive: true,
                        active: false,

                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''

                    }, {
                        Title: 'Insurance',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''
                    }, {
                        Title: 'Medical',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''
                    }, {
                        Title: 'Lifestyle',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''
                    }, {
                        Title: 'Venacular',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''
                    }, {
                        Title: 'Declaration',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''
                    }, {
                        Title: 'Report',
                        inactive: true,
                        active: false,
                        padding: '30px',
                        backgroundColor: '',

                        borderBottomwidth: '',
                        borderBottomcolor: ''
                    },

                    // 'Personal','Nominee','Family','Insurance','Medical','Lifestyle','Venacular','Declaration','Report','Extra'
                ]
            }
        }


    }
</script>

<style>
    .img-centerE {
        align-items: flex-end;
        padding-top: 20px;
        padding-right: 20px;
    }
    
    .box-a {
        padding: 10px;
    }
    
    .md-custom-btn-a {
        /* flex-direction: row; */
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 170 px;
        cursor: pointer;
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
    }
    
    .md-custom-btn:active-a {
        background-color: #3b371e;
    }
    
    .md-btn-width-a {
        width: 400px;
    }
    
    .x-small-btn-a {
        width: 130px;
    }
</style>