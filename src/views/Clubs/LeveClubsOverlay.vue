<template>
    <div>
        <div v-if="platform === 'Web'">
        <pop-up v-if="leaveAckno === true">
            <div class="to-do-flx-row to-do-task-title">
                <div>
                    <text class="to-do-title-font">Leave Club</text>
                </div>
                <div>
                    <image src="" class=""/>
                </div>
            </div>
            <div class="todo-body">
                <popup-content></popup-content>
            </div>
            <div class="todo-footer to-do-flx-row-rvrs">
                <div class="todo-margin-left leave-club-width">
                    <vx-primary-button
                        btn-name="Leave"
                        btn-icon="https://www.materialui.co/materialIcons/content/remove_white_192x192.png"
                        @click.native="joinNowPopUp">
                    </vx-primary-button>
                </div>
                <div class="leave-club-width">
                    <vx-secondary-button
                        btn-name="Cancel"
                        btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                        @click.native="close(2)">
                    </vx-secondary-button>
                </div>
            </div>
        </pop-up>
        </div>
        <div v-if="childPop === 1">
            <pop-up>
                <div class="to-do-flx-row to-do-task-title" style="align-items:center;">
                    <div>
                        <text class="to-do-title-font">Leave Message</text>
                    </div>
                    <div class="leave-icon-position">
                        <image  src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" 
                                style="cursor:pointer;" 
                                class="leave-iconcls-iocn"
                                @click.native="close(1)"/>
                    </div>
                </div>
                <div class="todo-body">
                    <div style="flex-direction:row;justify-content:center;padding:10px;">
                        <image src="https://www.materialui.co/materialIcons/action/check_circle_grey_192x192.png"  class="lcb-over-ass" />>
                    </div>
                    <div>
                        <text class="leave-norml-fnt">Successfully Left EMDRT Club</text>
                    </div>
                </div>
            </pop-up>
        </div>

        <!-- APK -->
        <div v-if="platform !== 'Web'">
                <wxc-mask  
                        height="400"
                        width="600"
                        border-radius="5"
                        duration="200"
                        mask-bg-color="#FFFFFF"
                        :has-animation="hasAnimation"
                        :has-overlay="true"
                        :show-close="false"
                        :show="weexShow"
                        @wxcMaskSetHidden="wxcMaskSetHidden1">
                        <div class="content">
                            <div class="weex-overlay-header weex-overlay-task-title">
                                <div>
                                    <text class="weex-overlay-heading-font">Leave Club</text>
                                </div>
                                <div>
                                    <image src="" class="" />
                                </div>
                            </div>

                            <div class="weex-overlay-body">
                               <popup-content></popup-content>
                            </div>
                            <div class="weex-overlay-footer weex-overlay-header">
                                <div class="">
                                    <vx-secondary-button
                                        btn-width="0px"
                                        btn-name="Cancel"
                                        btn-icon="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"
                                        @click.native="hideTodoPopup(1)">
                                    </vx-secondary-button>
                                </div>
                                <div style="margin-left:20px">
                                    <vx-primary-button
                                        btn-width="300px"
                                        btn-name="Add"
                                        btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                    </vx-primary-button>
                                </div>
                            </div>
                        </div>
                </wxc-mask>
        </div>
        
    </div>
    
</template>

<script>
    import { WxcMask } from 'weex-ui'
    import popUp from '../Calendar/Todo-pop-up.vue';
    import popupContent from '../../components/club/LeveClub.vue'
    import vxPrimaryButton from '../../components/vx-primary-button/vx-primary-button.vue'
    import vxSecondaryButton from '../../components/vx-primary-button/vx-scondary-button.vue'
    
    export default {
         created() {
            // this.$store.commit('SET_PAGE_TITLE', 'Clubs');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        props: {
            leaveAckno: Boolean
        },
        components: {
            popUp,
            vxSecondaryButton,
            vxPrimaryButton,
            popupContent,
            WxcMask
        },
        data() {
            return {
                childPop: 0
            }
        },
        methods: {
            joinNowPopUp() {
                if(this.childPop === 0) {
                    this.leaveAckno = false;
                    this.$emit('resetValue', this.leaveAckno);
                    this.childPop = 1;

                } else if(this.childPop === 1) {
                    this.childPop = 0;
                }
            },
            close(id) {
                switch(id) {
                    case 1: 
                        this.childPop = 0;
                    break;
                    case 2:
                        this.leaveAckno = false;
                        this.$emit('resetValue', this.leaveAckno);
                    break;
                }
                
            }
        }
    }
</script>

<style>
    .leave-club-width {
        width: 30%;
    }

    .leave-norml-fnt {
        font-size: 14px;
        color: #565656;
        text-align: center;
    }

    .leave-icon-position {
        position: absolute;
        right: 10px;
    }
    .lcb-over-ass {
        width:60px;
        height:60px

    }
     /* Week APK */
    .weex-overlay-task-title {
        background-color: #3b371e;   
        padding: 27px;
    }
    .weex-overlay-heading-font {
        font-size: 30px;
        color: #FFF;
    }
    .weex-overlay-header {
        flex-direction: row;
    }
    .weex-overlay-body {
        margin-top: 25px;
        margin-bottom: 15px;
        padding-left: 10px;
        padding-right: 25px;
    }
    .weex-overlay-footer {
        background-color: #EBEBEB;
        padding: 25px;
        margin-top: 25px;
    }
    @media screen and (min-width: 320px) {
        .leave-iconcls-iocn {
            width: 25px;
            height: 25px;
        }
    }
    @media screen and (min-width: 768px) {
        .leave-iconcls-iocn {
            width: 20px;
            height: 20px;
        }
    }
</style>

