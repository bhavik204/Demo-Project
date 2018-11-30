<template>
    <div class="comp-overlay-wraper">
        <div class="comp-overlay-container">
            <!--button  -->
            <div  @click.native="hidePopUp"  class="" >
                <image @click.native="hidePopUp"  class="close-icon-size"  style="cursor:pointer;" src="https://www.materialui.co/materialIcons/action/highlight_off_black_192x192.png"/>
            </div>
            <div class="mx-content">
                <div class="compo-circle-wraper p-itm-align-cntr">
                    <div class="compo-profile-circle">
                        <text class="compo-profile-circle-text">RS</text>
                    </div>
                    <div class="pop-padding-box" style="margin-left: 10px;">
                        <div class="">
                            <text class="user-name-text bold-text">Rahul Soni</text>
                        </div>
                        <div class="">
                            <text class="compo-label-font-size">PROPENSITY TO BUY</text>
                        </div>
                    </div>
                </div>

                <!-- Status Position -->
                <div class="r-crd-sts-pos">
                    <text class="data-font-size-14 r-crd-sts-pos-t-c">HIGH</text>                        
                </div>

                <div class="nx-flex-row pop-padding-box nx-flex-flow-wrap nx-flex-wrap">
                    <div v-for="(details, pi) in propsData.renewalsProfileCard" :key="pi" class="x-pop-up-col-width">
                        <text class="compo-label-font-size">{{details.labelName}}</text>
                        <text class="data-font-size-14">{{details.value}}</text>
                    </div>

                </div>

                <div class="pop-padding-box">
                    <text class="pop-sub-header-font">Policy Details</text>
                </div>

                <div class="nx-flex-row box nx-flex-flow-wrap nx-flex-wrap">
                    <div v-for="(details, pi) in propsData.policyDetails" :key="pi" class="x-pop-up-col-width">
                        <text class="compo-label-font-size">{{details.labelName}}</text>
                        <text class="data-font-size-14">{{details.value}}</text>
                    </div>
                </div>

                <!-- <div class="box">
                    <text class="data-font-size-14" style="color: blue">View Break up</text>
                </div> -->
                <div class="nx-flex-row">
                    <div class="pop-padding-box">
                        <text class="compo-label-font-size">{{ propsData.breakUps[0].labelName }}</text>
                        <text class="data-font-size-14">{{propsData.breakUps[0].value}}</text>
                    </div>
                    <div class="pop-padding-box" style="margin-left:35px" @click.native="breakupShow = !breakupShow">
                        <text class="data-font-size-14" style="color: blue;cursor:pointer">View break up</text>
                    </div>
                </div>

                <div v-if="breakupShow === true" class="nx-flex-row box w3-animate-top" style="overflow:auto;">
                    <div v-for="(details, pi) in propsData.breakUps" :key="pi" class="">
                        <div v-if="details.labelName !== 'Net Premium Payable'" class="nx-flex-row items-align-center w3-animate-top">
                            <div>
                                <text class="compo-label-font-size">{{details.labelName}}</text>
                                <text class="data-font-size-14">{{details.value}}</text>
                            </div>
                            <div style="margin-left: 5px;margin-right:5px">
                                <text class="data-font-size-14">{{details.operator}} </text>
                            </div>

                        </div>

                    </div>

                </div>

                <!-- advisorDetails -->
                <div class="pop-padding-box">
                    <text class="pop-sub-header-font">Advisor Details</text>
                </div>
                <div class="nx-flex-row pop-padding-box nx-flex-flow-wrap nx-flex-wrap">
                    <div v-for="(details, pi) in propsData.advisorDetails" :key="pi" class="x-pop-up-col-width">
                        <text class="compo-label-font-size">{{details.labelName}}</text>
                        <text class="data-font-size-14">{{details.value}}</text>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            propsData: Object,
            show: Boolean
        },
        data() {
            return {
                breakupShow: false,
                popUpHide: this.show
            }
        },
        methods: {
            hidePopUp() {
                this.popUpHide = false;
                this.$emit('popHide', this.popUpHide);
            }
        }
    }
</script>

<style scoped>
    @media (min-width:320px) {}
    
    @media (min-width:768px) {
        .p-itm-align-cntr {
            align-items: center;
        }
        .comp-overlay-wraper {
            position: fixed;
            /* display: none; */
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 200;
        }
        .comp-overlay-container {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 520px;
            width: 400px;
            border-radius: 3px;
            background-color: white;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            box-shadow: 0 5px 45px rgba(0, 0, 0, .5);
        }
        .compo-overlay-body {
            height: 180px;
            overflow: auto;
            padding: 20px;
        }
        .compo-circle-wraper {
            padding: 10px;
            flex-direction: row;
            /* justify-content: center; */
        }
        .compo-label-font-size {
            font-size: 11px;
            font-weight: 400;
            color: #9d9d9d;
        }
        .compo-profile-circle {
           height: 50px;
            width: 50px;
            background-color: blueviolet;
            border-radius: 50%;
        }
        .compo-profile-circle-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 23px;
            font-weight: 500;
            font-family:robotoregular;
        }
        .status-text {
            font-size: 12px;
            font-weight: bold;
            color: #54ad40;
            position: relative;
            top: 0px;
            left: 0px;
            margin-left: 0px;
        }
        .pop-status-box {
            padding: 5px;
            background-color: #098c09;
            border-radius: 15px;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        .pop-status-text {
            font-weight: bold;
            color: #fff;
        }
        .pop-sub-header-font {
            font-size: 13px;
            font-weight: bold;
        }

        .pop-padding-box {
            padding: 5px;
        }
        .data-font-size-14 {
            font-size: 14px;
        }
        .x-pop-up-col-width {
            width: 50%;
            margin-bottom: 10px;
        }
        .mx-content {
            padding: 20px;
            height: 480px;
            overflow: auto;
            margin-top: 20px;
        }

        .close-icon-size {
            width: 25px;
            height: 25px;
            position: absolute;
            top: 4px;
            right: 3px;
        }

        .r-crd-sts-pos {
            position: absolute;
            right: 10px;
            top: 49px;
        }
        .r-crd-sts-pos-t-c {
            color: green;
            font-weight: 500;
        }

        .w3-animate-top {
            position:relative;
            animation: animatetop 0.4s
        }
        @keyframes animatetop{
            from{
                top:-300px;
                opacity:0
            }
            to{
                top: 0;
                opacity:1
            }
        }
    }
    
    @media (min-width:992px) {}
</style>