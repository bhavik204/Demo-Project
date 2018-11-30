<template>
    <div style="background-color: #f7f7f7;" class="">
        <!-- <clubs-tab></clubs-tab> -->
       
        <scroller>
           
            <div class="container">
    
                <div class="side-container">
                        <div class="card">
                            <text class="heading get-pad-t-b">International Clubs</text>
                            <div class="flex-tab-col-row" style="flex: 3">
                                <div class="sub-card add-border1" style="flex: 1" >
                                   
                                    <app-image-slide-show></app-image-slide-show>
                                    <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click.native="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                    <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                   
                                    <div class="top-set ">
                                        <div class="get-pad-t-b-qqqq">
                                            <text class="heading " >TOP OF TABLE CLUB (TOT)</text> 
                                        </div>
                                    </div>
                                    <div class="get-pad-big add-border">
                                        <div class="get-pad-t-b-hhh">
                                            <text class="form-title " >Qualifying condition for 2016 on WRP* (Rs.)</text>
                                            <text class="heading " >₹ 2,09,76,000/-</text> 
                                        </div>
                                    </div>
                                     <div class="get-pad-big add-border">
                                          <div class="get-pad-t-b-hhh">
                                        <text class="form-title " >Qualifying condition for 2016 on Commission (Rs.)</text>
                                        <text class="heading " >₹ 52,44,000/-</text> 
                                          </div>
                                    </div>
                                     <div class="get-pad-big add-border">
                                          <div class="get-pad-t-b-hhh">
                                        <text class="form-title " >Rewards</text>
                                        <text class="heading " >MDRT Conference for 1</text>
                                        <text class="heading " >MDRT Registration</text>
                                        <text class="heading " >Reimbursement of 1.5 Lac</text>
                                          </div>
                                    </div>
                                    <!-- <div class="" >
                                        <div class="box-a x-small-btn-a" >
                                            <div class="md-custom-btn-a btn-color-a" @click.native="showPOPUPwindow">
                                                <text class="md-btn-label-a text-color-white-a" style="cursor:pointer">Join Club</text>
                                            </div>
                                        </div>
                                        
                                    </div> --> 
                                    <div class="get-pad-t-b-hhh-btn">
                                     <div  v-if="platform === 'Web'" style="padding:10px" class="prduct-dec-button-width" @click.native="showPOPUPwindow">
                                        <vx-primary-btn 
                                        class="cursor-pointer-globle"
                                                btn-name="Join Club "
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    <div  v-if="platform !== 'Web'" style="padding:10px" class="prduct-dec-button-width" @click="showPOPUPwindow">
                                        <vx-primary-btn 
                                                btn-name="Join Club "
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    </div>
                                </div>


                                <div class="sub-card add-border1" style="flex: 1">
                                    <app-image-slide-show></app-image-slide-show>
                                    <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click.native="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                    <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                   
                                    <div class="top-set">
                                        <div class="get-pad-t-b-qqqq">
                                            <text class="heading ">TOP OF TABLE CLUB (TOT)</text> 
                                        </div>
                                    </div>
                                     <div class="get-pad-big add-border">
                                        <div class="get-pad-t-b-hhh">
                                            <text class="form-title " >Qualifying condition for 2016 on WRP* (Rs.)</text>
                                            <text class="heading " >₹ 1,04,88,000/-</text> 
                                        </div>
                                    </div>
                                     <div class="get-pad-big add-border">
                                        <div class="get-pad-t-b-hhh">
                                            <text class="form-title " >Qualifying condition for 2016 on Commission (Rs.)</text>
                                            <text class="heading " >₹ 26,22,000/-</text> 
                                        </div>
                                    </div>
                                    <div class="get-pad-t-b-hhh">
                                        <div class="get-pad-big  add-border">
                                            <div class="">
                                                <text class="form-title " >Rewards</text>
                                                <text class="heading " >MDRT Experience for 1</text>
                                                <text class="heading button-pad-s" >Reimbursement of 1.5 La</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="get-pad-t-b-hhh-btn-no-mrg">
                                        <div  v-if="platform === 'Web'" style="padding:10px" class="prduct-dec-button-width" @click.native="showPOPUPwindow">
                                            <vx-primary-btn 
                                            class="cursor-pointer-globle"
                                                    btn-name="Join Club "
                                                    btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                            </vx-primary-btn>
                                        </div>
                                        <div  v-if="platform !== 'Web'" style="padding:10px" class="prduct-dec-button-width" @click="showPOPUPwindow">
                                            <vx-primary-btn 
                                                    btn-name="Join Club "
                                                    btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                            </vx-primary-btn>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-card add-border1" style="flex: 1">
                                    <app-image-slide-show></app-image-slide-show>
                                   <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click.native="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                    <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                   
                                    <div class="top-set">
                                        <div class="get-pad-t-b-qqqq">
                                            <text class="heading ">TOP OF TABLE CLUB (TOT)</text> 
                                        </div>
                                    </div>
                                     <div class="get-pad-big add-border">
                                        <div class="get-pad-t-b-hhh">
                                            <text class="form-title " >Qualifying condition for 2016 on WRP* (Rs.)</text>
                                            <text class="heading " >₹ 34,96,000/-</text> 
                                        </div>
                                    </div>
                                     <div class="get-pad-big add-border">
                                        <div class="get-pad-t-b-hhh">
                                            <text class="form-title " >Qualifying condition for 2016 on Commission (Rs.)</text>
                                            <text class="heading " >₹ 8,74,000/-</text> 
                                        </div>
                                    </div>
                                     <div class="get-pad-big add-border">
                                        <div class=""> 
                                            <text class="form-title " >Rewards</text>
                                            <text class="heading button-pad-b" >MDRT Experince</text>
                                        </div>
                                    </div>
                                     <div class="get-pad-t-b-hhh-btn">
                                        <div  v-if="platform === 'Web'" style="padding:10px" class="prduct-dec-button-width" @click.native="showPOPUPwindow">
                                            <vx-primary-btn 
                                            class="cursor-pointer-globle"
                                                    btn-name="Join Club "
                                                    btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                            </vx-primary-btn>
                                        </div>
                                        <div  v-if="platform !== 'Web'" style="padding:10px" class="prduct-dec-button-width" @click="showPOPUPwindow">
                                            <vx-primary-btn 
                                                    btn-name="Join Club "
                                                    btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                            </vx-primary-btn>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            </div>
                            <!-- ddhh -->
                            <div class="card">
                            <div class="flex-tab-col-row" style="flex: 3">
                                <div class="sub-card add-border1" style="flex: 1">
                                    <app-image-slide-show></app-image-slide-show>
                                    <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click.native="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                    <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                   
                                    <div class="top-set">
                                        <div class="get-pad-t-b-qqqq">
                                            <text class="heading " >PLATINUM PREMIER</text> 
                                        </div>
                                    </div>
                                       
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >NOP</text>
                                                <text class="heading " >55</text> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >Vintage</text>
                                                <text class="heading " >44</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                        
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >WRP</text>
                                                <text class="heading " >50</text>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >FY 16 NOP</text>
                                                <text class="heading " >35</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big ">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >13th Month Persistency</text>
                                                <text class="heading " >75%</text>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big ">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >FY 15 NOP</text>
                                                <text class="heading " >20</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div class="flex-tab-row">
                                            <div class="flex-tab-col">
                                                <div class="get-pad-big add-border">
                                                    <div class="get-pad-t-b-hhh">
                                                    <text class="form-title " >25th Month Persistency</text>
                                                    <text class="heading " >65%</text>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                    </div>
                                    <div class="get-pad-t-b-hhh-btn">
                                    <div  v-if="platform === 'Web'" style="padding:10px" class="prduct-dec-button-width" @click.native="showPOPUPwindow">
                                        <vx-primary-btn 
                                        class="cursor-pointer-globle"
                                                btn-name="Join Club "
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    <div  v-if="platform !== 'Web'" style="padding:10px" class="prduct-dec-button-width" @click="showPOPUPwindow">
                                        <vx-primary-btn 
                                                btn-name="Join Club "
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    </div>
                                </div>

                               <div class="sub-card add-border1" style="flex: 1">
                                    <app-image-slide-show></app-image-slide-show>
                                   <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click.native="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                    <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                   
                                    <div class="top-set">
                                        <div class="get-pad-t-b-qqqq">
                                            <text class="heading " >PLATINUM PREMIER</text>
                                        </div> 
                                    </div>
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >NOP</text>
                                                <text class="heading " >55</text> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >Vintage</text>
                                                <text class="heading " >44</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >WRP</text>
                                                <text class="heading " >50</text>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >FY 16 NOP</text>
                                                <text class="heading " >35</text> 
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big ">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >13th Month Persistency</text>
                                                <text class="heading " >75%</text>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big ">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >FY 15 NOP</text>
                                                <text class="heading " >20</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div class="flex-tab-row">
                                            <div class="flex-tab-col">
                                                <div class="get-pad-big add-border">
                                                    <div class="get-pad-t-b-hhh">
                                                    <text class="form-title " >25th Month Persistency</text>
                                                    <text class="heading " >65%</text>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                    </div>
                                    <div class="get-pad-t-b-hhh-btn">
                                    <div  v-if="platform === 'Web'" style="padding:10px" class="prduct-dec-button-width" @click.native="showPOPUPwindow">
                                        <vx-primary-btn 
                                        class="cursor-pointer-globle"
                                                btn-name="Join Club "
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    <div  v-if="platform !== 'Web'" style="padding:10px" class="prduct-dec-button-width" @click="showPOPUPwindow">
                                        <vx-primary-btn 
                                                btn-name="Join Club "
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    </div>
                                </div>
                                <div class="sub-card add-border1" style="flex: 1">
                                    <app-image-slide-show></app-image-slide-show>
                                    <image class="allout-icn" v-if="platform === 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click.native="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                    <image class="allout-icn" v-if="platform !== 'Web'" src="https://www.materialui.co/materialIcons/action/all_out_white_192x192.png"  @click="jump('/clubsmaster/allclubsmaster/allclubsvideo')"></image>
                                   
                                    <div class="top-set">
                                        <div class="get-pad-t-b-qqqq">
                                            <text class="heading get-pad-t-b" >PLATINUM PREMIER</text> 
                                        </div>    
                                    </div>
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >NOP</text>
                                                <text class="heading " >55</text> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >Vintage</text>
                                                <text class="heading " >44</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >WRP</text>
                                                <text class="heading " >50</text>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big add-border">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >FY 16 NOP</text>
                                                <text class="heading " >35</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div class="flex-tab-row">
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big ">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >13th Month Persistency</text>
                                                <text class="heading " >75%</text>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="flex-tab-col">
                                            <div class="get-pad-big ">
                                                <div class="get-pad-t-b-hhh">
                                                <text class="form-title " >FY 15 NOP</text>
                                                <text class="heading " >20</text>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div class="flex-tab-row">
                                            <div class="flex-tab-col">
                                                <div class="get-pad-big add-border">
                                                    <div class="get-pad-t-b-hhh">
                                                    <text class="form-title " >25th Month Persistency</text>
                                                    <text class="heading " >65%</text>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                    </div>
                                    <div class="get-pad-t-b-hhh-btn">
                                    <div  v-if="platform === 'Web'" style="padding:10px" class="prduct-dec-button-width" @click.native="showPOPUPwindow">
                                        <vx-primary-btn 
                                        class="cursor-pointer-globle"
                                                icon-side="right"
                                                btn-name="Join Club"
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    <div  v-if="platform !== 'Web'" style="padding:10px" class="prduct-dec-button-width" @click="showPOPUPwindow">
                                        <vx-primary-btn 
                                                btn-name="Join Club "
                                                btn-icon="https://www.materialui.co/materialIcons/content/add_circle_outline_white_192x192.png">
                                        </vx-primary-btn>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </scroller>
        <join-clubs :parent-window="showJoinPP" @resetValue="showJoinPP = $event" ></join-clubs>
    </div>
    </template>

<script>
    // 
    // import clubsTab from './ClubsTab.vue'
     import vxPrimaryBtn from '../../components/vx-primary-button/vx-primary-button.vue'
    import appImageSlideShow from '../../components/SlideShow/Image-slide-show'
      import JoinClubs from './JoinClubsOverlay.vue';
    const picker = weex.requireModule("picker");
    const invalid = '- invalid -';

    export default {
        created() {
            // this.$store.commit('SET_PAGE_TITLE', 'Clubs');
            if (typeof WXEnvironment === 'object') {

                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        data() {
            return {
                headerName: 'Presales',
                showOnline: false,
                showCheque: false,
                showSendLink: false,
                platform: invalid,
                deviceWidth: invalid,
                showJoinPP: false
            }
        },
        components: {
            appImageSlideShow, vxPrimaryBtn,
            // clubsTab
            JoinClubs
        },
        methods: {

            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            titleType() {
                picker.pick({
                        index: this.index,
                        items
                    },
                    event => {
                        if (event.result === "success") {
                            this.value = items[event.data];
                            this.index = event.data;
                        }
                    }
                );
            },
            pickDate() {
                picker.pickDate({
                        value: this.date
                    },
                    event => {
                        if (event.result === "success") {
                            this.date = event.data;
                        }
                    }
                );
            },
            // disapperWindow() {
            //     this.showJoinPP = false
            // },
          showPOPUPwindow() {
                this.showJoinPP = true;
                console.log('JOIN CLUB PAGE : ' + this.showJoinPP);
            }
        }

    }
</script>
<style scoped>
    .robotoregular {
        font-family: robotoregular;
    }
    
    .robotobold {
        font-family: robotobold;
    }
    /*Button Arrow CSS*/
    
    .master-page-wrapper {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .btn-icon-size {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    
    .btn-icon-size-right {
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }
    
    .row {
        flex-direction: column
    }
    
    .card {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        margin: 10px;
    }
    
    .card-subtitle {
        font-size: 22px;
        color: #9D9D9D;
        font-family: robotoregular;
    }
    
    .main-heading {
        font-size: 15px;
        padding-top: 20px;
        font-weight: bold;
        font-family: robotoregular;
    }
    
    .heading {
        font-size: 25px;
        padding-top: 10px;
        font-family: robotobold;
        /* padding-top: 5px; */
        font-weight: bold;
    }
    
    .heading-data {
        font-size: 25px;
        font-family: robotoregular;
        /* color: #9D9D9D; */
    }
    
    .col1 {
        flex-direction: row;
        margin-top: 25px;
    }
    
    .group {
        position: relative;
        margin-top: 25px;
    }
    
    .container {
        flex-direction: row;
    }
    
    .side-container {
        flex-direction: column;
        flex: 2;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .add-border1 {
        border-width: 1px;
        border-style: solid;
        border-top-color: #e7e7e7;
        border-right-color: #e7e7e7;
        border-left-color: #e7e7e7;
        border-bottom-color: #e7e7e7;
    }
    
    .input {
        display: block;
        background-color: #fff;
        font-size: 24px;
        padding: 15px;
        margin-bottom: 20px;
        color: #666666;
        border-width: 2px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #c7c7c7;
        placeholder-color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .spac-bet {
        margin-left: 5px;
        margin-right: 5px;
        padding-top: 19px;
    }
    
    .select {
        background-color: white;
        width: 130px;
        margin-left: 18px;
        padding-top: 19px;
        padding-bottom: 10px;
        padding-left: 9px;
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
    }
    
    .selectbor {
        width: 130px;
    }
    /* Allclubs Tab CSS APK */
    
    .flex-tab-col-row {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px;
    }
    
    .sub-card {
        background-color: white;
        margin: 10px;
    }
    
    .ver-col {
        display: flex;
        flex-direction: column;
        background-color: white;
        flex: 0.6;
    }
    
    .hori-row {
        display: flex;
        flex-direction: row;
        background-color: white;
    }
    
    .get-pad {
        padding: 15px;
    }
    
    .img-doc {
        width: 230px;
        height: 230px;
    }
    
    .img-center {
        align-items: flex-end;
        padding-top: 20px;
    }
    
    .get-pad-big {
        margin-top: 8px;
        padding-bottom: 15px;
        padding-left: 15px;
    }
    
    .get-pad-t-b {
        padding-bottom: 20px;
        margin-top: 20px;
        padding-left: 15px;
    }
     .get-pad-t-b-qqqq {
        padding-bottom: 40px;
        margin-top: 40px;
        padding-left: 15px;
    }
     .get-pad-t-b-hhh {
        padding-bottom: 25px;
        margin-top: 25px;
       
    }
     .get-pad-t-b-hhh-btn {
        padding-bottom: 30px;
        margin-top: 30px;
        margin-left: 10px;
       
    }
    
     .get-pad-t-b-hhh-btn-no-mrg {
        padding-bottom: 30px;
        /* margin-top: 30px; */
        margin-left: 10px;
       
    }

    .img-card {
        width: 50px;
        height: 50px;
    }
    
    .top-set {
        background-color: #f8f8f8;
        border-color: transparent;
        border-top: 1px solid #d8d8d8;
        border-bottom: 1px solid #d8d8d8;
        font-family: robotoregular;
        text-transform: uppercase;
    }
    
    .size {
        height: 350px;
        width: 440px;
    }
    
    .slider {
        position: relative;
        width: 100px;
        background-color: #000;
    }
    
    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.3);
        itemColor: #DDDDDD;
        itemSelectedColor: rgb(0, 180, 255);
        font-family: robotoregular;
    }
    
    .btn-color-a {
        background-color: #3b371e;
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
        min-width: 188px;
        cursor: pointer;
    }
    
    .md-btn-label-a {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        font-family: robotoregular;
    }
    
    .md-custom-btn:active-a {
        background-color: #3b371e;
    }
    
    .md-btn-width-a {
        width: 450px;
    }
    
    .x-small-btn-a {
        width: 220px;
    }
    
    .button-pad-s {
        padding-bottom: 19px;
    }
    
    .button-pad-b {
        padding-bottom: 39px;
    }
    
    .flex-tab-col {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    
    .flex-tab-row {
        display: flex;
        flex-direction: row;
        flex: 2;
    }
    /* @@ */
    
    .input:focus {
        border-width: 4px;
        border-bottom-color: #2e4053;
    }
    
    .switch {
        margin-top: 16px;
    }
    
    .btn-space {
        justify-content: space-between
    }
    
    .btn-color {
        background-color: #3b371e;
    }
    
    .sec-btn-color {
        background-color: #fff;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #000;
        border-right-color: #000;
        border-left-color: #000;
        border-bottom-color: #000;
    }
    
    .card-btn1 {
        background-color: rgb(80, 80, 80);
        width: 340px;
        border-radius: 7px;
        margin-left: 10.6797px;
        margin-right: 20px;
        margin-right: 20px;
        padding: 25px;
        justify-content: center;
        -webkit-box-pack: center;
    }
    
    .card-btn2 {
        background-color: #505050;
        border-radius: 7px;
        margin-top: 15px;
        /* width: 340px; */
        padding: 25px;
        justify-content: center;
    }
    
    .card-btn-text {
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
        font-family: robotoregular;
    }
    
    .row-btn {
        flex-direction: row;
    }
    
    .card-subtitle-head {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
        line-height: 18px;
        font-family: robotoregular;
    }
    
    .card-subtitle-title {
        font-size: 18px;
        margin: 0;
        line-height: 24px;
        font-family: robotoregular;
    }
    
    .card-subtitle-details {
        font-size: 25px;
        color: #565656;
        font-family: robotoregular;
    }
    
    .image {
        width: 500px;
        height: 500px;
    }
    
    .consent {
        white-space: normal;
    }
    
    .form-title {
        font-size: 24px;
        padding-top: 10px;
        color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .chkbox-title {
        flex: 1;
        font-size: 13px;
        margin-left: 10px;
        color: #9d9d9d;
        font-family: robotoregular;
    }
    
    .radio-title {
        color: #9d9d9d;
        font-size: 14px;
        font-family: robotoregular;
    }
    
    .example {
        flex-direction: row;
        justify-content: flex-start;
    }
    
    .label {
        font-size: 22px;
        line-height: 60px;
        width: 350px;
        color: #9d9d9d;
        text-align: right;
        margin-right: 20px;
        font-family: robotoregular;
    }
    
    .table-row {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
    
    .graph {
        flex-direction: column;
    }
    
    .drop-down {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    select {
        color: #565656;
        font-size: 14px;
        padding: 5px;
        font-family: robotoregular;
    }
    
    .card-summary {
        margin-top: 10px;
        padding: 20px;
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #fff;
        border-bottom-color: #d8d8d8;
    }
    
    .table-row-col-details {
        margin-left: 0px;
    }
    
    .card-line1 {
        padding: 20px;
    }
    
    .head-row {
        padding: 10px;
        border-width: 1px;
        border-top: none;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #ebebeb;
    }
    
    .head-row1 {
        padding: 10px;
    }
    
    .sub-heading {
        font-weight: bold;
        margin-left: 20px;
        font-size: 13px;
        color: #565656;
        font-family: robotoregular;
    }
    
    .card-heading {
        padding: 10px;
        font-size: 14px;
        color: #3b371e;
        font-weight: bold;
        font-family: robotoregular;
    }
    
    .cal-icn {
        height: 20px;
        width: 20px;
        margin-top: 5px;
    }
    
    .mail-row {
        flex-direction: column;
    }
    
    .radio-data {
        flex-direction: column;
        flex: 0;
    }
     .prduct-dec-button-width {
            width: 280px;
        }
        .allout-icn {
            top: -3px;
            right: 0px;
            position: absolute;
            width: 55px;
            height: 55px;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }
    @media only screen and (min-width: 320px) {
        .allout-icn {
             top: 0px;
            right: 0;
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }
         .get-pad-t-b-qqqq {
            padding-bottom: 13px;
            margin-top: 10px;
            padding-left: 15px;
    }
     .get-pad-t-b-hhh {
        padding-bottom: 0px;
        margin-top: 0px;
        
    }
     .get-pad-t-b-hhh-btn {
        padding-bottom: 0px;
        margin-top: 0px;
        margin-left: 0px;
       
    }
     .get-pad-t-b-hhh-btn-no-mrg {
        padding-bottom: 0px;
        /* margin-top: 30px; */
        margin-left: 0px;
       
    }
         .get-pad-t-b {
            padding-bottom: 13px;
            margin-top: 10px;
            padding-left: 15px;
        }
          .prduct-dec-button-width {
            width: 115px;
        }
        /*Button Arrow CSS*/
        .btn-icon-size {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }
        .btn-icon-size-right {
            height: 18px;
            width: 18px;
            margin-left: 10px;
        }
        .md-btn-label {
            color: #fff;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            font-family: robotoregular;
        }
        .btn-color {
            background-color: #3b371e;
        }
        .md-sec-btn-label {
            color: #000;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            font-family: robotoregular;
        }
        .sec-btn-color {
            background-color: #fff;
            border: 1px solid black
        }
        .md-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 36px;
            min-width: 88px;
            position: relative;
            cursor: pointer;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .table-head-row {
            flex: 0.9;
        }
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 10px;
            font-weight: bold;
            font-family: robotoregular;
        }
        .heading-data {
            font-size: 14px;
            font-family: robotoregular;
            /* color: #9D9D9D; */
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family: robotoregular;
        }
        .select {
            background-color: white;
            width: 90px;
            margin-left: 8px;
            padding-top: 11px;
            padding-left: 9px;
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
            width: 90px;
        }
        .table-row {
            flex-direction: column;
        }
        .table-row-col-details {
            margin-left: 0px;
        }
        .mail-row {
            flex-direction: column;
        }
        .btn-space {
            justify-content: space-evenly;
        }
        /* Customer Tab CSS 320 */
        .flex-tab-col-row {
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 10px;
        }
        .hori-row {
            display: none;
        }
        .img-doc {
            width: 130px;
            height: 130px;
            /* align-items: center; */
            /* margin: 18px 169px 20px 77px; */
        }
        .img-center {
            align-items: flex-end;
            padding-top: 20px;
        }
        .hide {
            display: none;
        }
        .img-card {
            width: 30px;
            height: 30px;
        }
        .md-custom-btn-a {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            height: 30px;
            min-width: 88px;
            cursor: pointer;
        }
        .md-btn-label-a {
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            color: #fff;
            font-family: robotoregular;
        }
        .md-btn-width-a {
            width: 5%;
        }
        .x-small-btn-a {
            width: 5%;
        }
        .size {
            height: 350px;
            width: 26px;
        }
      
    }
    
    @media (min-width: 768px) {
         /* .prduct-dec-button-width {
            width: 27%;
        } */
        .form-title {
            font-size: 14px;
            padding-top: 10px;
            color: #9d9d9d;
            font-family: robotoregular;
        }
        .heading {
            font-size: 15px;
            padding-top: 5px;
            font-weight: bold;
            font-family: robotoregular;
        }
        .input {
            display: block;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;
            color: #666666;
            border-width: 2px;
            border-top: none;
            border-style: solid;
            border-top-color: #fff;
            border-right-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #c7c7c7;
            placeholder-color: #9d9d9d;
            font-family: robotoregular;
        }
        .table-row {
            flex-direction: row;
        }
        .table-row-col-details {
            margin-left: 30px;
        }
        .mail-row {
            flex-direction: row;
            flex: 3;
        }
        .btn-space {
            justify-content: space-around;
        }
        .card-btn1 {
            background-color: rgb(80, 80, 80);
            width: 140px;
            border-radius: 4px;
            margin-left: 10.6797px;
            margin-right: 20px;
            margin-right: 20px;
            padding: 10px;
            justify-content: center;
            -webkit-box-pack: center;
        }
        .card-btn2 {
            background-color: #505050;
            border-radius: 4px;
            margin-top: 15px;
            width: 140px;
            padding: 10px;
            justify-content: center;
        }
        .card-btn-text {
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
            font-family: robotoregular;
        }
        .radio-data {
            flex-direction: row;
        }
        /* Customer Tab CSS 768 */
        .flex-tab-col-row {
            display: flex;
            flex-direction: row;
            background-color: white;
            padding: 10px;
        }
        .hori-row {
            display: flex;
            flex-direction: row;
            background-color: white;
        }
        .img-doc {
            width: 130px;
            height: 130px;
            /* align-items: center; */
            /* margin: 18px 169px 20px 100px; */
        }
        .img-center {
            align-items: flex-end;
            padding-top: 20px;
        }
        .hide {
            display: flex;
        }
        .md-btn-width-a {
            width: 5%;
        }
        .x-small-btn-a {
            width: 5%;
        }
    }
    
    @media (min-width: 992px) {
        .size {
            height: 350px;
            width: 460px;
        }
          /* .prduct-dec-button-width {
            width: 30%;
        } */
    }
</style>