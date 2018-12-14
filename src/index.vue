 <template >
  <div @androidback="back" class="font" style="position:relative;">
    <!-- <inner-header :headeTitle="headerName"></inner-header> -->
    <!-- <inner-header></inner-header> -->
    <app-sales  :notifyDetails="notifyDetails" :notifications="tabthree" v-if="show_header === true"></app-sales>
        <scroller>
        <div class="roter-margin">
            <notification-comp></notification-comp>
            <router-view style="flex:1"></router-view>
        </div>
        <!-- <text style="color : #f7f7f7; font-size: 25px " > {{this.$store.state.notificationTitle}}</text> -->
        
        <!-- <notification-comp  v-if="platform == 'Web'"></notification-comp> -->
        <!-- <notification-comp  ></notification-comp> -->


        </scroller>
        <footer-tab></footer-tab>
    <floatBtn bg-color="blue"></floatBtn>
  </div>
</template>

<script>
    
    import notificationComp from './components/notificationComponent.vue'
    import util from './assets/util';
    // import floatBtn from './components/Main/floatBtn.vue'
    import floatBtn from './components/Messenger/msgFloatBtn.vue'
    import innerHeader from './components/Main/Mb_innerheader.vue'
    import appSales from './components/sales-drive-header.vue'
    import footerTab from './components/Footer/FooterSection.vue'
 var storage = weex.requireModule('storage');
   const modal = weex.requireModule('modal')
    export default {
        created() {
               util.initRobotoRegular();
    if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
            // var self=this;
            // this.agent_id = self.$store.state.agentDetails;
            // if('_id' in this.agent_id)
            // {
            //     this.show_header = true;
            // }
            // else {
            //     this.show_header = false;
            // }
        },
        mounted() {
            var self=this;
            this.agent_id = self.$store.state.agentDetails;
            console.log('Home UI '  ,this.agent_id);
            if('_id' in this.agent_id)
            {
                this.show_header = true;
            }
            else {
                this.show_header = false;
            }
        },
        computed: {
            // headerName: this.$store.getters.getheaderTitle,
        },
        data() {
            return {
                form:[],
                // headerName: this.$store.getters.getheaderTitle,
                notifyDetails: false,
                tabthree : false,
                show_header : false
            }
        },

        methods: {
            getState() {
              console.log(store.state);
            },
            closeDropdown() {
                notifyDetails: false;
                tabthree: false;
            },
            back: function() {
                this.$router.back()
            }

        },
        components: {
            notificationComp,
            floatBtn,
            innerHeader,
            appSales,
            footerTab
        },
             destroyed(){
          
        }

    }
</script>
<style type="text/css">
    .roter-margin {
        margin-top: 120px;
        padding-bottom: 100px;
        background-color: #f7f7f7;
        min-height: 790px;
    }

    .vx-globle-drp-down {
        padding: 20px;
        padding-left: 4px;
        /* background-color: green; */
        /*padding-top: 25px;*/
        font-size: 28px;
        width: 750px;
        border-width: 2px;
        border-style: solid;
        border-top-color: #FFF;
        border-left-color: #FFF;
        border-right-color: #FFF;
        border-bottom-color: #999999;
    }

    .vx-globle-drp-down:focus {
        border-width: 2px;
        border-bottom-color: #3a3a3a;
    }
    
    @media (min-width: 320px) {
        .roter-margin {
            margin-top: 50px;
            overflow: hidden;
        }
        /* The container */
        .container-chk {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 14px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        /* Hide the browser's default checkbox */
        .container-chk input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
        }
        /* On mouse-over, add a grey background color */
        .container-chk:hover input~.checkmark {
            background-color: #ccc;
        }
        /* When the checkbox is checked, add a blue background */
        .container-chk input:checked~.checkmark {
            background-color: #000;
        }
        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        /* Show the checkmark when checked */
        .container-chk input:checked~.checkmark:after {
            display: block;
        }
        /* Style the checkmark/indicator */
        .container-chk .checkmark:after {
            left: 9px;
            top: 5px;
            width: 8px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        /*Radio button */
        .container-radio {
            display: inline;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        /* Hide the browser's default radio button */
        .container-radio input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        /* Create a custom radio button */
        .checkmark-rd {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 50%;
        }
        /* On mouse-over, add a grey background color */
        .container-radio:hover input~.checkmark-rd {
            background-color: #ccc;
        }
        /* When the radio button is checked, add a blue background */
        .container-radio input:checked~.checkmark-rd {
            background-color: #2196F3;
        }
        /* Create the indicator (the dot/circle - hidden when not checked) */
        .checkmark-rd:after {
            content: "";
            position: absolute;
            display: none;
        }
        /* Show the indicator (dot/circle) when checked */
        .container-radio input:checked~.checkmark-rd:after {
            display: block;
        }
        /* Style the indicator (dot/circle) */
        .container-radio .checkmark-rd:after {
            top: 9px;
            left: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
        }
        .card {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        }
        .master-page-wrapper {
            /*min-height: 700px;*/
        }
        .cursor-pointer-globle {
            cursor: pointer;
        }

        .vx-globle-drp-down {
            padding: 9px 0PX;
            font-size: 14px;
            width: 100%;
            padding-bottom: 10px;
            border-width: 1px;
        }
        .vx-globle-drp-down:focus {
            border-width: 1px;
            outline: none;
        }
    }
    /* Changed by Usama beacouse wrapper apply mobile web not proper */
    
    @media screen and (min-width: 768px) {
        .master-page-wrapper {
            width: 100%;
            margin: 0 auto;
            max-width: 1100px;
            margin-top: 5px;
        }
    }
    
    @media screen and (min-width: 992px) {
        .master-page-wrapper {
            padding: 5px 5px 0 5px;
            /*        width: 100%;
          margin: 0 auto;
  */
            max-width: 1280px;
            /*        margin-top: 5px;
          padding: 5px;
  */
        }
    }
</style>