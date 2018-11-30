<template>
    <!-- this class is used for center whole page just like a wrapper -->
    <div class="master-page-wrapper" style="background-color:#F7F7F7">
        <div class="ad-dtls-pg-mrgin">

            <!-- structure starts from here -->
            <div class="ad-dtls-flx-dir" >
                <!-- left side -->
                <div class="ad-dtls-flx-nchg-col ad-dtls-lft-crd-wdth">
                    <!-- Card 1 -->
                    <div class="ad-dtls-d-crd ad-dtls-mr-btm shadow">
                        <!-- card container -->

                        <div class="ad-dtls-flx-nchg-row ad-dtls-cntr-align">
                            <!-- Advisor Image -->
                            <image src="https://img.kpopmap.com/2018/01/mixnine-woo-jinyoung.jpg" class="ad-dtls-prf-crcle" />
                            <div class="ad-dtls-lf-pd">
                                <text class="ad-dtls-amt-font ad-dtls-fnt-wght" style="color:#565656">Rahul Soni</text>
                                <text class="ad-dtls-nrml-fnt ad-dtls-lbl-color">Advisor (ADV3321)</text>
                            </div>

                            <!-- edit icon -->

                            <div class="ad-dtls-ic-circle ad-dtls-edit-ic-pos" style="background-color: #FFF" v-if="platform !== 'Web'">
                                <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="ad-dtls-icon-size" @click="jump('/adv_edit')" />
                            </div>
                            <div class="ad-dtls-ic-circle ad-dtls-edit-ic-pos" style="background-color: #FFF" v-if="platform === 'Web'">
                                <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="ad-dtls-icon-size" @click.native="showEditForm('show')" />
                            </div>
                            
                        </div>


                        <div>
                            <!--  -->
                            <div class="ad-dtls-flx-nchg-row ad-dtls-lst-bdr ad-dtls-lst-padd " v-for="(list, indx) in advisorData" :key="indx">
                                <div class="ad-dtls-conten-pad ad-dtls-lbl-width"><text class="ad-dtls-nrml-fnt ad-dtls-lbl-color">{{list.label}}</text></div>
                                <div class="ad-dtls-conten-pad"><text class="ad-dtls-nrml-fnt ad-dtls-data-clr">:</text></div>
                                <div class="ad-dtls-conten-pad" style="flex:1"><text class="ad-dtls-nrml-fnt ad-dtls-data-clr">{{list.data}}</text></div>
                                <!-- <div class="ad-dtls-conten-pad">
                                    <image src="https://www.materialui.co/materialIcons/editor/mode_edit_grey_192x192.png" class="ad-dtls-icon-size"/>
                                </div> -->

                                <!-- notice bar : when user have birthday then its show automatically  -->
                            </div>
                            <div class="ad-dtls-flx-nchg-row ad-dtls-notice-bar ad-dtls-cntr-align ad-dtls-bt-mrgn">
                                <div class="ad-dtls-ic-circle">
                                    <image src="https://www.materialui.co/materialIcons/social/cake_white_192x192.png" class="ad-dtls-icon-size" />
                                </div>
                                <div class="ad-dtls-lf-pd">
                                    <text class="ad-dtls-notify-fnt" style="color:#565656">Today is Easwar’s Birthday</text>
                                </div>
                            </div>

                            <div class="ad-dtls-flx-nchg-row ad-dtls-notice-bar ad-dtls-cntr-align">
                                <div class="ad-dtls-ic-circle">
                                    <image src="https://www.materialui.co/materialIcons/maps/restaurant_menu_white_192x192.png" class="ad-dtls-icon-size" />
                                </div>
                                <div class="ad-dtls-lf-pd">
                                    <text class="ad-dtls-notify-fnt" style="color:#565656">Celebrating 1 year with ABC!</text>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Card 2 -->
                    <div class="ad-dtls-d-crd ad-dtls-x-mr-btm shadow ">
                        <div class="ad-dtls-conten-pad ad-dtls-lst-bdr ad-dtls-title-bdr ad-dtls-btm-crd-wdt ad-dtls-bt-mrgn">
                            <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght">Recognition</text>
                        </div>

                        <div class="ad-dtls-conten-pad">
                            <text class="ad-dtls-nrml-fnt">Clubs</text>
                        </div>
                        <div class=" ad-dtls-flx-nchg-row">
                            <div class="ad-dtls-conten-pad ad-dtls-btm-crd-wdt">
                                <text class="ad-dtls-nrml-fnt ad-dtls-lbl-color">EMDRT</text>
                            </div>
                            <div class="ad-dtls-conten-pad">
                                <text class="ad-dtls-nrml-fnt ad-dtls-data-clr">2015</text>
                            </div>
                            <div class="ad-dtls-conten-pad">
                                <text class="ad-dtls-nrml-fnt ad-dtls-data-clr">2014</text>
                            </div>
                        
                        </div>
                        <div class=" ad-dtls-flx-nchg-row">
                            <div class="ad-dtls-conten-pad ad-dtls-btm-crd-wdt">
                                <text class="ad-dtls-nrml-fnt ad-dtls-lbl-color">COT</text>
                            </div>
                            <div class="ad-dtls-conten-pad">
                                <text class="ad-dtls-nrml-fnt ad-dtls-data-clr">2015</text>
                            </div>
                            <div class="ad-dtls-conten-pad">
                                <text class="ad-dtls-nrml-fnt ad-dtls-data-clr">2014</text>
                            </div>
                        
                        </div>

                        <!-- text 1 -->
                        <div class="ad-dtls-conten-pad">
                            <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght ">R&R Qualifications</text>
                        </div>
                        <div class="ad-dtls-conten-pad">
                            <text class="ad-dtls-nrml-fnt ad-dtls-data-clr">Attended Arabian Nights event Aug, 2015</text>
                        </div>

                        <!-- text 2 -->
                        <div class="ad-dtls-conten-pad">
                            <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght ">Trainings Attended / Certifications</text>
                        </div>
                        <div class="ad-dtls-conten-pad">
                            <text class="ad-dtls-nrml-fnt ad-dtls-data-clr">Trainings attended / Certifications Arjuna Induction Program in May, 2015 ABC Council Training Program in Sep, 2014</text>
                        </div>
                    </div>

                </div>

                <!-- Right side -->
                <div class="ad-dtls-d-crd ad-dtls-mrgn-left shadow" style="flex:1">
                    <div class="ad-dtls-conten-pad ad-dtls-lst-bdr ad-dtls-title-bdr ad-dtls-s-crd-wdt">
                        <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght">Account Details </text>
                    </div>

                    <!-- drop down for web -->
                    <div v-if="platform === 'Web'" style="flex-direction:row-reverse">
                        <select v-model="selectedItem" class="ad-dtls-lst-bdr ad-dtls-slc-bx-des">
                            <option v-for="(item, index) in optList" :key="index">{{item}}</option>
                        </select>
                    </div>

                    <!-- Why inline css is here? becouse it is only display in apk -->
                    <div v-if="platform !== 'Web'" style="margin-top:25px;margin-bottom:30px">
                        <apk-drop-down :option-list="optList"></apk-drop-down>
                    </div>
                    

                    <div class="ad-dtls-flx-flo-rw">
                        <div class="ad-dtls-wd-cont">
                            <div class="ad-dtls-conten-pad ad-dtls-bt-mrgn">
                                <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght">Logins</text>
                            </div>

                            <div class="ad-dtls-flx-nchg-row ad-dtls-conten-pad">
                                <!--  -->
                                <div class="ad-dtls-rt-pd">
                                    <div class="ad-dtls-bt-mrgn">
                                        <text class="ad-dtls-amt-font ad-dtls-fnt-wght">78</text>
                                    </div>
                                    <text class="ad-dtls-nrml-fnt">NOP</text>
                                </div>

                                <!--  -->
                                <div class="ad-dtls-rt-pd ad-dtls-lf-pd">
                                    <div class="ad-dtls-bt-mrgn">
                                        <text class="ad-dtls-amt-font ad-dtls-fnt-wght"> 224,000</text>
                                    </div>
                                    <text class="ad-dtls-nrml-fnt">WIP</text>
                                </div>

                            </div>
                            <!-- row end -->
                        </div>
                        <!--start  -->
                        <div class="ad-dtls-wd-cont">
                            <div class="ad-dtls-conten-pad ad-dtls-bt-mrgn">
                                <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght">Issuance</text>
                            </div>
                            
                            <div class="ad-dtls-flx-nchg-row ad-dtls-conten-pad">
                                <!--  -->
                                <div class="ad-dtls-rt-pd">
                                    <div class="ad-dtls-bt-mrgn">
                                        <text class="ad-dtls-amt-font ad-dtls-fnt-wght">61</text>
                                    </div>
                                    <text class="ad-dtls-nrml-fnt">NOP</text>
                                </div>

                                <!--  -->
                                <div class="ad-dtls-rt-pd ad-dtls-lf-pd">
                                    <div class="ad-dtls-bt-mrgn">
                                        <text class="ad-dtls-amt-font ad-dtls-fnt-wght">167,000</text>
                                    </div>
                                    <text class="ad-dtls-nrml-fnt">WIP</text>
                                </div>

                            </div>

                        </div>
                        <!-- end -->
                        <!--  -->
                        <div class="ad-dtls-wd-cont">
                            <div class="ad-dtls-conten-pad ad-dtls-bt-mrgn">
                                <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght">Persistency</text>
                            </div>
                            
                            <div class="ad-dtls-flx-nchg-row ad-dtls-conten-pad">
                                <!--  -->
                                <div class="ad-dtls-rt-pd">
                                    <div class="ad-dtls-bt-mrgn">
                                        <text class="ad-dtls-amt-font ad-dtls-fnt-wght">61.8 %</text>
                                    </div>
                                    <text class="ad-dtls-nrml-fnt">13th Month</text>
                                </div>

                                <!--  -->
                                <div class="ad-dtls-rt-pd ad-dtls-lf-pd">
                                    <div class="ad-dtls-bt-mrgn">
                                        <text class="ad-dtls-amt-font ad-dtls-fnt-wght">47.2 %</text>
                                    </div>
                                    <text class="ad-dtls-nrml-fnt">25th Month</text>
                                </div>

                            </div>

                        </div>
                    </div>

                    <!-- btn tabs- toggle button  for web-->
                    <div class="ad-dtls-flx-nchg-row ad-dtls-tp-mr-tabs-btn" v-if="platform === 'Web'">
                        <div class="ad-dtls-tabs-btn ad-dtls-ms-pntr" :style="{'background-color': btnTabs[0].bgColor}" @click.native="tabActivation(1)">
                            <text class="ad-dtls-nrml-fnt ad-dtls-label-align ad-dtls-ms-pntr" :style="{color: btnTabs[0].color}">Bussines</text>
                        </div>
                        <div class="ad-dtls-tabs-btn ad-dtls-ms-pntr" :style="{'background-color': btnTabs[1].bgColor}" @click.native="tabActivation(2)">
                            <text class="ad-dtls-nrml-fnt ad-dtls-label-align ad-dtls-ms-pntr" :style="{color: btnTabs[1].color}">Persistency</text>
                        </div>
                    </div>

                    <!-- For apk -->

                    <div class="ad-dtls-flx-nchg-row ad-dtls-tp-mr-tabs-btn" v-if="platform !== 'Web'">
                        <div class="ad-dtls-tabs-btn ad-dtls-ms-pntr" :style="{'background-color': btnTabs[0].bgColor}" @click="tabActivation(1)">
                            <text class="ad-dtls-nrml-fnt ad-dtls-label-align ad-dtls-ms-pntr" :style="{color: btnTabs[0].color}">Bussines</text>
                        </div>
                        <div class="ad-dtls-tabs-btn ad-dtls-ms-pntr" :style="{'background-color': btnTabs[1].bgColor}" @click="tabActivation(2)">
                            <text class="ad-dtls-nrml-fnt ad-dtls-label-align ad-dtls-ms-pntr" :style="{color: btnTabs[1].color}">Persistency</text>
                        </div>
                    </div>

                    <!-- Changable direction -->

                    <div class="ad-dtls-cntr-align ad-dtls-tp-mr-tabs-btn ad-dtls-flx-nchg-col">
                        <div v-if="chart_1 === true"> 
                            <div class="ad-dtls-conten-pad ad-dtls-rt-pd">
                                <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght">Total Business for Logins and Issuance </text>
                            </div>
                            <web ref="webview" style="width:500px;height:400px;" src="http://159.89.161.64:8080/#/Businessbarchart"></web>
                        </div>
                        <!-- buttons in row -->
                        <div v-if="chart_2 === true">
                            <div class="ad-dtls-conten-pad ad-dtls-rt-pd">
                                <text class="ad-dtls-nrml-fnt ad-dtls-fnt-wght ">13th Month and 25th Month Persistency. done </text>
                            </div>
                            <web ref="webview" style="width:500px;height:400px;" src="http://159.89.161.64:8080/#/Persistencybarchart"></web>
                             


                            <!-- icon button -->
                            <!-- <div class="ad-dtls-tabs-btn ad-dtls-ms-pntr">
                                <image src="" class="ad-dtls-icon-size"/>
                            </div> -->
                            <!-- <div class="ad-dtls-tabs-btn ad-dtls-ms-pntr">
                                <image src="" class="ad-dtls-icon-size"/>
                            </div> -->
                        </div>
                    </div>
                </div>

            </div>
            <!-- structure end here -->

            <popup v-if="popFrom === true">
                <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font">Adviser Details</text>
                    </div>
                    <div>
                        <!-- <image src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" class="jcb-iconcls-iocn" /> -->
                    </div>
                </div>
                <div class="">
                    <details-form></details-form>
                </div>
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="ad-edit-frm-btn-w">
                        <p-button btn-name="Save"  btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"></p-button>
                    </div>
                    <div class="ad-edit-frm-btn-w">
                        <s-button btn-name="Cancel"  
                        @click.native="showEditForm('hide')" btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"></s-button>
                    </div>
                </div>
            </popup>

            <!-- Password conformation -->
            <!-- <popup v-if="popFrom === true">
                <div class="to-do-flx-row to-do-task-title">
                    <div>
                        <text class="to-do-title-font">Adviser Details</text>
                    </div>
                    <div>
                        <image src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" class="jcb-iconcls-iocn" />
                    </div>
                </div>
                <div class="">
                    
                </div>
                <div class="todo-footer to-do-flx-row-rvrs">
                    <div class="ad-edit-frm-btn-w">
                        <p-button btn-name="Save"  btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"></p-button>
                    </div>
                    <div class="ad-edit-frm-btn-w">
                        <s-button btn-name="Cancel"  
                        @click.native="showEditForm('hide')" btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"></s-button>
                    </div>
                </div>
            </popup> -->
        </div>
    </div>
</template>


<script>
    import apkDropDown from '../CFR/cfr-dropDown-apk.vue'
    import popup from '../Calendar/Todo-pop-up'
    import vxInputBox from '../../components/vx-input-box/vx-input-box'
    import PButton from '../../components/vx-primary-button/vx-primary-button'
    import SButton from '../../components/vx-primary-button/vx-scondary-button'

    import detailsForm from './AdvisorDetailsEdit.vue'

    import toggleButton from '../../components/GenderView/genderView'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
        data() {
            return {
                platform: invalid,
                popFrom: false,
                selectedItem: 'Select',
                chart_1: true,
                chart_2: false,
                btnTabs: [
                    {
                        bgColor: '#FFF',
                        active: true,
                        color: '#000000'
                    }, {
                        bgColor: '#FFF',
                        active: false,
                        color: '#000000'
                    }
                ],
                optList: [
                    'ALL', 'Month to Date', 'Year to Date', 'FY 2014', 'FY 2015'
                ],
                advisorData: [
                    {
                        label: 'Branch',
                        data: 'Kolhapur One, Kolhapur, Maharashtra'
                    }, {
                        label: 'Branch Manager',
                        data: 'Ravindra Tomar (BM444354)'
                    }, {
                        label: 'Sales Manager',
                        data: 'Amit Malapurkar (SM88843)'
                    }, {
                        label: 'Date of Birth',
                        data: '15/09/1986'
                    }, {
                        label: 'Date of Licensing',
                        data: '16/12/1990'
                    }, {
                        label: 'Address',
                        data: '104, Madhuban CHS, Telephone Nagar, Hi- Tech City, Hyderabad, Telangana - 500092'
                    }, {
                        label: 'PAN No.',
                        data: 'ABCDE 1234A'
                    }, {
                        label: 'Mobile',
                        data: '+91 8106312802'
                    }, {
                        label: 'Email',
                        data: 'kasturi.shah91@gmail.com'
                    }
                ]
            }
        }, components: {
            apkDropDown, popup, detailsForm, PButton, SButton, vxInputBox, toggleButton
        },
        created() {
            this.$store.commit('SET_PAGE_TITLE' , 'Profile');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        mounted() {
            this.btnTabs[0].bgColor = '#000';
            this.btnTabs[0].color = '#FFF'
            this.btnTabs[0].active = true;
            this.chart_1 = true;
        },
        methods: {
            tabActivation(id) {
                switch(id) {
                    case 1:
                        this.btnTabs[0].bgColor = '#000000';
                        this.btnTabs[0].color = '#FFF'
                        this.btnTabs[0].active = true;
                        this.chart_1 = true;
                        
                        this.btnTabs[1].bgColor = '#FFF';
                        this.btnTabs[1].color = '#000000'
                        this.btnTabs[1].active = false;
                        this.chart_2 = false;

                    break;
                    case 2:
                        this.btnTabs[0].bgColor = '#FFF';
                        this.btnTabs[0].color = '#000000'
                        this.btnTabs[0].active = false;
                        this.chart_1 = false;

                        this.btnTabs[1].bgColor = '#000000';
                        this.btnTabs[1].color = '#FFF'
                        this.btnTabs[1].active = true;
                        this.chart_2 = true;
                    break;
                }
            },
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            showEditForm(caseID) {
                switch(caseID) {
                    case 'show':
                        this.popFrom = true;
                    break;
                    case 'hide':
                        this.popFrom = false;
                    break;
                }
                
            }
        }
    
    }
</script>

<style>

    /* default flex row which is not changed */
    .ad-dtls-flx-nchg-row {
        flex-direction: row;
    }
    /* it is fixed column */
    .ad-dtls-flx-nchg-col {
        flex-direction: column;
    }
    .ad-dtls-justi-cntr {
        justify-content: center;
    }
    .ad-dtls-cntr-align {
        align-items: center;
    }
    /* this class is direction switching class */
    .ad-dtls-flx-dir {
        flex-direction: column;
    }
    /* flex-flew in apk is column */
    .ad-dtls-flx-flo-rw {
        flex-flow: column;
    }
    /* For bold */
    .ad-dtls-fnt-wght {
        font-weight: 600;
    }
    /* Normal label font size */
    .ad-dtls-nrml-fnt {
        font-size: 24px;
    }
    .ad-dtls-lbl-color {
        color: #9d9d9d;
    }
    .ad-dtls-data-clr {
        color: #565656;
    }

    /* lisiting padding */
    .ad-dtls-lst-padd {
        padding: 15px;
        padding-left: 0;
    }

    .ad-dtls-lst-bdr {
        border-width: 1px;
        border-style: solid;
        border-top-color: #FFFFFF;
        border-right-color: #FFFFFF;
        border-left-color: #FFFFFF;
        border-bottom-color: #e0e0e0;
    }
    .ad-dtls-title-bdr {
        border-width: 4px;
        border-bottom-color: #131212;
    }
    /* nomrmal padding*/
    .ad-dtls-conten-pad {
        padding: 10px;
    }
    /* Cards breaking class */
    .ad-dtls-mr-btm {
        margin-bottom: 20px;
    }

    /* text alignment */
    .ad-dtls-label-align {
        text-align: center;
    }

    /* Icons size */
    .ad-dtls-icon-size {
        width: 35px;
        height: 35px;
        position: absolute;
        top: 12px;
        left: 13px;
        /* transform: translate(-50%, -50%); */
    }

    /* margins -bottom*/
    .ad-dtls-bt-mrgn {
        margin-bottom: 10px;
    }
    /* margin top in used to btn tabs */
    .ad-dtls-tp-mr-tabs-btn {
        margin-top: 30px;
    }
    /* title bdr-width */
    /* btm card width */
    .ad-dtls-btm-crd-wdt {
        width: 170px;
    }
    /* right side card width */
    .ad-dtls-s-crd-wdt {
        width: 210px;
    }

    /* Page Margin */
    .ad-dtls-pg-mrgin {
        margin: 20px;
    }

    /* cards */
    .ad-dtls-d-crd {
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        min-height: 150px;
        padding: 20px;
    }

    /* Width classe */
    .ad-dtls-lbl-width {
        width: 200px;
    }

    /* icon size */

    .ad-dtls-ic-circle {
        width: 60px;
        height: 60px;
        background-color: #330eb9;
        border-radius: 30px;
    }

     /* edit icon position */
    .ad-dtls-edit-ic-pos {
        position: absolute;
        top: 0;
        right: 0;
    }
    /* notication font size */
    .ad-dtls-notify-fnt {
        font-size: 22px;
    }
    /* Padding left*/
    .ad-dtls-lf-pd {
        padding-left: 20px;
    }
    /* Padding Right */
    .ad-dtls-rt-pd {
        padding-right: 20px;
    }

    .ad-dtls-notice-bar {
        padding: 20px;
        background-color: #e7e7e7;
    }

    /* this margin class is used to provide bottom margin right card */

    .ad-dtls-x-mr-btm {
        margin-bottom: 20px;
    }

    .ad-dtls-prf-crcle  {
        width: 120px;
        height: 120px;
        border-radius: 60px;
    }

    /* tabs button */
    .ad-dtls-tabs-btn {
        width: 200px;
        padding: 20px;
        /* border-radius: 2px; */
        border-width: 1px;
        border-style: solid;
        border-color: #131212;
    }

    @media screen and (min-width: 320px){
        /* Amount Details font size */
        .ad-dtls-amt-font {
            font-size: 17px;
            font-weight: 700;
        }

        /* Normal label font size */
        .ad-dtls-nrml-fnt {
            font-size: 14px;
        }
        /* notication font size */
        .ad-dtls-notify-fnt {
            font-size: 12px;
        }

        /* edit icon position */
        .ad-dtls-edit-ic-pos {
            right: -5px;
        }

        /* cards */
        .ad-dtls-d-crd {
            border-radius: 3px;
        }
         /* nomrmal padding*/
        .ad-dtls-conten-pad {
            padding: 5px;
        }
         /* lisiting padding */
        .ad-dtls-lst-padd {
            padding: 10px;
            padding-left: 0;
        }

        /* Width classe */

        .ad-dtls-lbl-width {
            width: 28%;
        }

        /* tabs button */
        .ad-dtls-tabs-btn {
            width: 150px;
            padding: 10px;
            /* border-radius: 3px; */
        }
        .ad-dtls-tabs-btn:hover {
            background-color: #e0e0e0;
        }
        /* mouse pointer */

        .ad-dtls-ms-pntr {
            cursor: pointer;
        }

        /* icon size */

        .ad-dtls-ic-circle {
            width: 30px;
            height: 30px;
            background-color: #330eb9;
            border-radius: 50%;
        }
        .ad-dtls-icon-size {
           
            width: 18px;
            height: 18px;
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        /* margins -btm*/
        .ad-dtls-bt-mrgn {
            margin-bottom: 5px;
        }

        /* title bdr-width */
        /* btm card width */
        .ad-dtls-btm-crd-wdt {
            width: 100px;
        }
        /* right side card width */
        .ad-dtls-s-crd-wdt {
            width: 130px;
        }

         /* margin top in used to btn tabs */
        .ad-dtls-tp-mr-tabs-btn {
            margin-top: 5%;
        }
        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .ad-dtls-prf-crcle  {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }

        .ad-dtls-notice-bar {
            padding: 10px;
            background-color: #e7e7e7;
        }

        /* edit icon position */
        /* .ad-dtls-edit-ic-pos {
            position: absolute;
            top: 0;
            right: -5px;
        } */

        /* Select box */

        .ad-dtls-slc-bx-des{
            padding: 5px;
            border-bottom-color: #acacac;
            width: 100%;
            font-size: 14px;
            padding-left: 0;
            margin-bottom: 20px;
            margin-top: 20px;
        }

        .ad-dtls-wd-cont {
            width: 50%;
        }

        /* this margin class is used to provide bottom margin right card */

        .ad-dtls-x-mr-btm {
            margin-bottom: 20px;
        }

        /* Page Margin */
        .ad-dtls-pg-mrgin {
            margin: 10px;
        }

        /* flex-flew in web is wrap */
        .ad-dtls-flx-flo-rw {
            flex-direction: row;
            flex-flow: wrap;
        }
    }
    @media screen and (min-width: 768px){
         /* Page Margin */
        .ad-dtls-pg-mrgin {
            margin: 5px;
        }

        /* this class is direction switching class */
        .ad-dtls-flx-dir {
            flex-direction: row;
        }

        /* right-side card margin-left */
        .ad-dtls-mrgn-left {
            margin-left: 20px;
        }

        .ad-dtls-slc-bx-des{
            width: 50%;
            margin-top: 10px;
        }

        .ad-dtls-amt-font {
            font-size: 20px;
            font-weight: 700;
        }

        /* cards width */
        /* left cards width */

        .ad-dtls-lft-crd-wdth {
            width: 40%;
        }
        /* right card width */
        .ad-dtls-rgt-crd-wdth {
            width: 50%;
        }

        /* this margin class is used to provide bottom margin right card */
        .ad-dtls-x-mr-btm {
            margin-bottom: 0;
        }

        /* Overlay-pop-frm-width of btn */
        .ad-edit-frm-btn-w {
            width: 20%;
            margin-left: 5px;
            margin-right: 5px;
        }

        .jcb-iconcls-iocn {
            width: 20px;
            height: 20px;
        }
    }
    @media screen and (min-width: 992px) {
        /* cards width */
        /* left cards width */

        .ad-dtls-lft-crd-wdth {
            width: 30%;
        }
        /* right card width */
        .ad-dtls-rgt-crd-wdth {
            width: 60%;
        }

        /* Page Margin */
        .ad-dtls-pg-mrgin {
            margin: 20px;
        }

        /* Container width: logins issued and persistanc */
        .ad-dtls-wd-cont {
            width: 30%;
        }

        .ad-dtls-slc-bx-des{
            width: 40%;
            margin-top: 10px;
        }        
    }
</style>

