<template>
	<div>
		<div ref="mainbtn" class="btn-fab btn-pos1" >   
    		<image v-if="platform == 'Web'"  @click.native="toogle" class="img-ico1" src="https://www.materialui.co/materialIcons/navigation/menu_white_192x192.png"></image>

    		<image v-else  @click="toogle" class="img-ico1" src="https://www.materialui.co/materialIcons/navigation/menu_white_192x192.png"></image>

    	 </div>
<!--  		<div ref="mainbtnhide" class="btn-fab btn-pos1" style="display: none;" >                
    		<image  @click="hide" class="img-ico1" src="https://www.materialui.co/materialIcons/navigation/menu_white_192x192.png"></image>
    	 </div>
 -->
	    <div ref="btn1" class="btn-fab btn-pos2 btn-animate">                
    		<image  title="Create Lead" v-if="platform == 'Web'" @click.native="jumpToFreshLead"  class="img-ico2" src="https://www.materialui.co/materialIcons/action/perm_identity_white_192x192.png"></image>

    		<image  v-else  title="Create Lead" @click="jumpToFreshLead"  class="img-ico2" src="https://www.materialui.co/materialIcons/action/perm_identity_white_192x192.png"></image>
		</div>
	    <div ref="btn2" class="btn-fab btn-pos3 btn-animate">                
    		<image   v-if="platform == 'Web'"  title="Application"  @click.native="jump('/app_list_master/app_all')" class="img-ico2" src="https://www.materialui.co/materialIcons/action/description_white_192x192.png"></image>

    		<image  v-else  title="Application"  @click="jump('/app_list_master/app_all')" class="img-ico2" src="https://www.materialui.co/materialIcons/action/description_white_192x192.png"></image>
		</div>
	</div>
</template>
<script type="text/javascript">
    const animation = weex.requireModule('animation')
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }

            this.statusLeadFormHandler = this.$store.state.leadsFormHandler;
        },

        data() {
            return {
                activebtn: false,
                statusLeadFormHandler: {}

            }
        },

        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
                var btn01 = this.$refs.btn1;
                var btn02 = this.$refs.btn2;
                animation.transition(btn01, {
                    styles: {
                        color: '#FF0000',
                        translateY: '40',
                        translateX: '0',
                        transform: 'scale(0.4)',
                        opacity: '0'
                            // transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    // timingFunction: 'ease',
                    delay: 0 //ms
                }, function() {
                    // modal.toast({ message: 'animation finished.' })
                })
                animation.transition(btn02, {
                    styles: {
                        color: '#FF0000',
                        translateY: '40',
                        translateX: '0',
                        transform: 'scale(0.4)',
                        opacity: '0'
                            // transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    // timingFunction: 'ease',
                    delay: 0 //ms
                }, function() {
                    // modal.toast({ message: 'animation finished.' })
                })

            },
            toogle() {
                // console.log(this.activebtn , 'Toogle btn')
                if (this.activebtn == false) {
                    this.show()
                        // console.log(this.activebtn , 'activebtn. IF condition')
                    this.activebtn = true;
                } else {
                    // console.log(this.activebtn , 'activebtn. ELSE condition')
                    this.hide();
                    this.activebtn = false;
                }
            },
            show() {
                var btn01 = this.$refs.btn1;
                var btn02 = this.$refs.btn2;
                animation.transition(btn01, {
                    styles: {
                        color: '#FF0000',
                        translateY: '40',
                        translateX: '0',
                        transform: 'scale(1)',
                        opacity: '1'
                            // transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    // timingFunction: 'ease',
                    delay: 0 //ms
                }, function() {

                    // modal.toast({ message: 'animation finished.' })
                    // console.log(btn01 , event , 'loggg')
                    // var btn01 = this.$refs.btn1;


                })
                animation.transition(btn02, {
                    styles: {
                        color: '#FF0000',
                        translateY: '40',
                        translateX: '0',
                        transform: 'scale(1)',
                        opacity: '1'
                            // transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    // timingFunction: 'ease',
                    delay: 0 //ms
                })
            },
            hide() {
                var btn01 = this.$refs.btn1;
                var btn02 = this.$refs.btn2;
                animation.transition(btn01, {
                    styles: {
                        color: '#FF0000',
                        translateY: '40',
                        translateX: '0',
                        transform: 'scale(0.4)',
                        opacity: '0'
                            // transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    // timingFunction: 'ease',
                    delay: 0 //ms
                }, function() {
                    // modal.toast({ message: 'animation finished.' })
                })
                animation.transition(btn02, {
                    styles: {
                        color: '#FF0000',
                        translateY: '40',
                        translateX: '0',
                        transform: 'scale(0.4)',
                        opacity: '0'
                            // transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    // timingFunction: 'ease',
                    delay: 0 //ms
                }, function() {
                    // modal.toast({ message: 'animation finished.' })
                })
			},
			
			jumpToFreshLead() {
                this.hide()
                this.$store.commit('INSERT_LEADS_DATA', {emptyArray: []});

                this.$store.commit('SAVE_RESPONSE', {});
                // Method switch to POST
                this.$store.commit('LEAD_FORM_HANDLER', {httpMethod:'POST'});
				// this.$store.commit('LEAD_FORM_HANDLER', {freshLead: true});
                this.$router.push('/leadmasterpage/statuslead');

                console.log('Store is reset');
                
			}

        }
    }
</script>
<style>
    .page-animation {
        /*transform:translateX(1000px);*/
        /*transform: scale(1) translateY(0px) translateX(100px);*/
        opacity: 0;
    }
    /*font family for all page*/
    /*	.form-title {
	  font-family: 'Roboto-thin', sans-serif;
	}
	.input {
	  font-family: 'Roboto-thin', sans-serif;
	}
	.card-subtitle-details {
	  font-family: 'Roboto-thin', sans-serif;
	}
	.tab-text {
	  font-family: 'Roboto-bold', sans-serif;
	}
	.user-name-text {
	  font-family: 'Roboto-thin', sans-serif;
	}
	.text {
	  font-family: 'Roboto-thin', sans-serif;
	}*/
    /*fab button css start */
    
    .btn-animate {
        opacity: 0;
        transform: scale(0.4) translateY(40px) translateX(0px);
    }
    
    .btn-pos1 {
        z-index: 10000;
        bottom: 100px;
        right: 60px;
        background-color: #f44336;
    }
    
    .btn-pos2 {
        z-index: 10000;
        bottom: 220px;
        right: 72px;
        background-color: #2196f3;
    }
    
    .btn-pos3 {
        z-index: 10000;
        bottom: 300px;
        right: 72px;
        background-color: #4caf50;
    }
    
    .btn-fab {
        position: fixed;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 6px 10px 0 #666;
        transition: all 0.1s ease-in-out;
    }
    
    .img-ico1 {
        width: 70px;
        height: 70px;
        cursor: pointer;
    }
    
    .img-ico2 {
        width: 50px;
        cursor: pointer;
        height: 50px;
    }
    /*==========  Mobile First Method  ==========*/
    /* Custom, iPhone Retina */
    
    @media only screen and (min-width: 320px) {
        .btn-fab {
            padding: 13px;
        }
        .img-ico1 {
            width: 30px;
            height: 30px;
        }
        .img-ico2 {
            width: 25px;
            height: 25px;
        }
        .btn-pos1 {
            bottom: 75px;
            right: 25px;
            /*background-color: #ddd;*/
        }
        .btn-pos2 {
            bottom: 145px;
            right: 34px;
            /*background-color: #2196f3;*/
            padding: 7px;
        }
        .btn-pos3 {
            bottom: 195px;
            padding: 7px;
            right: 34px;
            /*background-color: #2196f3;*/
        }
    }
    /* Extra Small Devices, Phones */
    
    @media only screen and (min-width: 480px) {}
    /* Small Devices, Tablets */
    
    @media only screen and (min-width: 768px) {}
    /* Medium Devices, Desktops */
    
    @media only screen and (min-width: 992px) {
        .btn-pos1 {
            bottom: 40px;
            right: 25px;
            /*background-color: #ddd;*/
        }
        .btn-pos2 {
            bottom: 110px;
            right: 34px;
            /*background-color: #2196f3;*/
            padding: 7px;
        }
        .btn-pos3 {
            bottom: 160px;
            padding: 7px;
            right: 34px;
            /*background-color: #2196f3;*/
        }
        /*	.btn-fab {
	    padding: 5px;
	}
	.img-ico1 {
		width: 20px;
		height: 20px;
	}
	.img-ico2 {
		width: 15px;
		height: 15px;
	}
	.btn-pos1 {
		bottom:30px;
		right: 20px;
	    background-color: #ddd;
	}
	.btn-pos2 {
		bottom:70px;
		right: 22px;
		background-color: red;
	}
*/
    }
    /*fab button css end */
</style>