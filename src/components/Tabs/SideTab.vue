<template>
    <div style="background-color: #f7f7f7;">

        <div v-if="platform === 'Web'" class="hide-side-tab-sm">
            <scroller class="scroller-tab" scroll-direction="horizontal">
                <div class=" col-side">
                    <div v-for="(tab,id) in sTabs" :key="id" :style="{backgroundColor:tab.backgroundColor}" @click.native="tabular(id)">
                        <div class="heading-side-tab-padding" style="flex-direction:row;justify-content: space-between">
                            <text class="heading-side-tab" style="cursor:pointer;" :style="{fontWeight:tab.fontWeight}">{{tab.Title}}</text>
                            <image class="tick-img" :src="tab.tick"></image>
                            </div>
                        
                    </div>
                </div>
            </scroller>

        </div>
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
            }
        },
        props: {
            sTabs: {
                type: Array
            }
        },

        data() {
            return {
                deviceWidth: invalid,
                paltform: invalid,
                //     sTabs:[
                //      {
                //       Title:'Personal',
                //        backgroundColor:'#fff', 
                //         link:'/master/testpro/proposalpersonal'
                //      },
                //        {
                //       Title:'Nominee',
                //        backgroundColor:'', 
                //         link:'/master/testpro/proposalnominee'
                //      },
                //       {
                //             Title:'Family',
                //             inactive:true,
                //             active:false,

                //             padding:'30px',
                //             backgroundColor:'',

                //             borderBottomWidth: '',
                //             borderBottomColor: '',
                //             link:'/master/testpro/proposalfamily'

                //         },
                //         {
                //             Title:'Insurance',
                //             inactive:true,
                //             active:false,
                //             padding:'30px',
                //             backgroundColor:'',

                //             borderBottomWidth: '',
                //             borderBottomColor: '',
                //             link:'/master/testpro/proposalinsurance'
                //         },
                //         {
                //             Title:'Medical',
                //             inactive:true,
                //             active:false,
                //             padding:'30px',
                //             backgroundColor:'',

                //             borderBottomWidth: '',
                //             borderBottomColor: '',
                //             link:'/master/testpro/proposalmedical'
                //         },
                //         {
                //             Title:'Vernacular',
                //             inactive:true,
                //             active:false,
                //             padding:'30px',
                //             backgroundColor:'',

                //             borderBottomWidth: '',
                //             borderBottomColor: '',
                //             link:'/master/testpro/proposalvernacular'
                //         },
                //         {
                //             Title:'Declaration',
                //             inactive:true,
                //             active:false,
                //             padding:'30px',
                //             backgroundColor:'',

                //             borderBottomWidth: '',
                //             borderBottomColor: '',
                //             link:'/master/testpro/proposaldeclaration'
                //         },
                //         {
                //             Title:'Report',
                //             inactive:true,
                //             active:false,
                //             padding:'30px',
                //             backgroundColor:'',
                //             link:'/master/testpro/proposalreport'
                //         },
                //  ],




            }
        },
        methods: {
            tabular(ind) {
                var me = this;
                console.log(ind)
                switch (ind) {
                    case 0:

                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 0) {

                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff';
                                this.sTabs[i].fontWeight = 'bold';

                                // this.sTabs[i].borderBottomWidth= '5px';
                                // this.sTabs[i].borderBottomColor= '#3b371e';
                                me.$router.push(this.sTabs[i].link);


                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].fontWeight = 'normal';

                                this.sTabs[i].backgroundColor = '';
                                this.sTabs[i].borderBottomWidth = '';
                                this.sTabs[i].borderBottomColor = '';
                            }
                        }
                        break;
                    case 1:

                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 1) {

                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff';
                                this.sTabs[i].fontWeight = 'bold';

                                // this.sTabs[i].borderBottomWidth= '5px';
                                // this.sTabs[i].borderBottomColor= '#3b371e';
                                // me.$router.push('/master/testpro/proposalnominee') ;
                                me.$router.push(this.sTabs[i].link);
                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].backgroundColor = ''
                                this.sTabs[i].borderBottomWidth = '',
                                    this.sTabs[i].borderBottomColor = ''
                                this.sTabs[i].fontWeight = 'normal';

                            }
                        }



                        break;
                    case 2:
                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 2) {
                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff'
                                this.sTabs[i].fontWeight = 'bold';

                                // this.sTabs[i].borderBottomWidth= '5px',
                                // this.sTabs[i].borderBottomColor= '#3b371e',
                                me.$router.push(this.sTabs[i].link);
                                // me.$router.push('/master/testpro/proposalfamily') 
                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].backgroundColor = ''
                                this.sTabs[i].borderBottomWidth = '',
                                    this.sTabs[i].borderBottomColor = ''
                                this.sTabs[i].fontWeight = 'normal';

                            }
                        }

                        break;
                    case 3:
                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 3) {
                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff'
                                this.sTabs[i].fontWeight = 'bold';

                                // this.sTabs[i].borderBottomWidth= '5px',
                                // this.sTabs[i].borderBottomColor= '#3b371e',
                                me.$router.push(this.sTabs[i].link);
                                // me.$router.push('/master/testpro/proposalinsurance') 
                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].backgroundColor = ''
                                this.sTabs[i].borderBottomWidth = '',
                                    this.sTabs[i].borderBottomColor = ''
                                this.sTabs[i].fontWeight = 'normal';

                            }
                        }

                        break;
                    case 4:
                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 4) {
                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff'
                                this.sTabs[i].fontWeight = 'bold';

                                // this.sTabs[i].borderBottomWidth= '5px',
                                // this.sTabs[i].borderBottomColor= '#3b371e'
                                me.$router.push(this.sTabs[i].link);
                                // me.$router.push('/master/testpro/proposalmedical')  
                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].backgroundColor = ''
                                this.sTabs[i].borderBottomWidth = '',
                                    this.sTabs[i].borderBottomColor = ''
                                this.sTabs[i].fontWeight = 'normal';

                            }
                        }

                        break;
                    case 5:
                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 5) {
                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff'
                                this.sTabs[i].fontWeight = 'bold';

                                // this.sTabs[i].borderBottomWidth= '5px',
                                // this.sTabs[i].borderBottomColor= '#3b371e'
                                me.$router.push(this.sTabs[i].link);
                                // me.$router.push('/master/testpro/proposalmedical')  
                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].backgroundColor = ''
                                this.sTabs[i].borderBottomWidth = '',
                                    this.sTabs[i].borderBottomColor = ''
                                this.sTabs[i].fontWeight = 'normal';

                            }
                        }

                        break;
                    case 6:
                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 6) {
                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff'
                                this.sTabs[i].fontWeight = 'bold';
                                me.$router.push(this.sTabs[i].link);
                             
                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].backgroundColor = ''
                                this.sTabs[i].borderBottomWidth = '',
                                    this.sTabs[i].borderBottomColor = ''
                                this.sTabs[i].fontWeight = 'normal';

                            }
                        }

                        break;
                    case 7:
                        for (let i = 0; i < this.sTabs.length; i++) {
                            if (i == 7) {
                                console.log(this.sTabs[i].link)
                                this.sTabs[i].active = true;
                                this.sTabs[i].backgroundColor = '#fff'
                                this.sTabs[i].fontWeight = 'bold';
                                me.$router.push(this.sTabs[i].link);
                            } else {
                                this.sTabs[i].active = false;
                                this.sTabs[i].backgroundColor = ''
                                this.sTabs[i].borderBottomWidth = '',
                                    this.sTabs[i].borderBottomColor = ''
                                this.sTabs[i].fontWeight = 'normal';

                            }
                        }

                        break;
                        break
                    default:
                        // execute default code block
                }
            },
        }
    }
</script>

<style>
    /* .col1 {
        flex-direction: row;
        margin-top: 25px;
    }
   

    .heading-tab {
        font-size: 25px;
     padding: 10px;
        font-weight: bold;

    }

    .spac-bet {
        margin-left: 5px;
        margin-right: 5px;
        padding-top: 19px; 
         } */
    
    .scroller-tab {
        flex-direction: row;
    }
    .tick-img{
        width:15px;
        height:15px;
    }
    
    .col-side {
        min-width: 200px;
        flex-direction: column;
        padding-bottom: 30px;
        padding-left: 10px;
        margin-top: 20px;
    }
    
    .heading-side-tab {
        font-size: 24px;
        font-weight: 500px;
        font-family: robotoregular;
    }
    
    .heading-side-tab-padding {
        padding: 15px;
    }
    
    .tab-row1 {
        padding: 10px;
    }
    
    .tab-row-selected {
        padding: 10px;
        background-color: #fff;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 5px;
        border-bottom-color: #3b371e;
    }
    
    @media only screen and (min-width: 320px) {
        .heading-side-tab {
            font-size: 14px;
        }
        .tab-row1 {
            padding: 10px;
        }
        .tab-row-selected {
            padding: 10px;
            background-color: #fff;
            border-style: solid;
            border-top-width: 1px;
            border-top-color: #fff;
            border-left-width: 1px;
            border-left-color: #fff;
            border-right-width: 1px;
            border-right-color: #fff;
            border-bottom-width: 5px;
            border-bottom-color: #3b371e;
        }
        .hide-side-tab-sm {
            display: none
        }
    }
    
    @media only screen and (min-width: 768px) {
        .hide-side-tab-sm {
            display: block;
        }
    }
    /* .select {
        background-color: white;
        width: 90px;
        margin-left: 18px;
        padding-top: 19px;
        padding-bottom: 10px;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 10px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    } */
    /* .selectbor {
        width: 100px;
    } */
    /*Media*/
    
    @media only screen and (min-width: 320px) {
        .col1 {
            flex-direction: row;
            padding-bottom: 10px;
            padding-left: 10px
        }
        /* .heading {
            font-size: 15px;
            padding-top: 10px;
            font-weight: bold;

        }

        .select {
            background-color: white;
            width: 65px;
            margin-left: 18px;
            padding-top: 19px;
            padding-left: 8px;
            padding-bottom: 10px;
            border-style: solid;
            border-top-width: 1px;
            border-top-color: #fff;
            border-left-width: 1px;
            border-left-color: #fff;
            border-right-width: 1px;
            border-right-color: #fff;
            border-bottom-width: 2px;
            border-bottom-color: #3b371e;
            margin-bottom: 20px;
        }

        .selectbor {
            width: 65px;
        } */
    }
</style>