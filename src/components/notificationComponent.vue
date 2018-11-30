<template>
 <!--  -->
	<div>
		<div class="notifywrapperdiv" v-if="this.$store.state.shownotificationtoast">
			<div class="toast-flx-row" style="align-items:center; flex:1">
				<div class="toast-padding">
					<image class="tost-icon-width"  :src="this.$store.state.imagelink"/>
				</div>
				<div style="flex:1" class="toast-padding">
					<!-- <text class="title" :style="textColor" > {{this.$store.state.notificationTitle}}</text> -->
					<text class="toast-nrmal-fnt" :style="textColor"> {{this.$store.state.notificationBody}}</text>
				</div>
				<div class="toast-padding"> 
					<image class="tost-icon-width"  src="https://www.materialui.co/materialIcons/content/clear_grey_192x192.png" @click.native="dontShow"/>
				</div>
			</div>
			<!-- <text v-if="platform == 'Web'" type="button" style="color : #f7f7f7; text-align: right; font-size: 10px" @click.native="dontShow" >Close</text> -->

			
		</div>
	</div>
</template>
<script>
    import store from '../store'
	export default{
		computed : {
			textColor : function() {
				return {
					color : this.$store.state.notificationTextColor
				}
			}
		},
	    created() {
	        if (typeof WXEnvironment === 'object') {
	            this.platform = WXEnvironment.platform || unknown
	            return this.platform
	        }
	    },
		methods: {
			dontShow () {
			  this.$store.state.shownotificationtoast = false;
			}
		},
	}
</script>
<style scoped>
	.title{
		font-size: 25px;
		display: inline-block;
		align-items: right;
	}

	.notifywrapperdiv{
		position: fixed;
		bottom: 100px;
		left: 20px;
		/* transform: translate(-50%, -50%); */
		background-color: #2c2e33;
		flex-direction: row;
		align-items: center;
		/* opacity: 0.5; */
		border-radius: 3px;
		/* vertical-align : bottom; */
		/* align-items: right; */
		/* width : 500px; */
		height : 80px;
		z-index: 50;
			
		}

	.toast-flx-row {
		flex-direction: row;
	}

	.toast-nrmal-fnt{
		font-size: 24px;
		font-weight: 700;
	}

	@media screen and (min-width: 320px) {
		.notifywrapperdiv{
			position: fixed;
			bottom: 67px;
			left: 20px;
			/* transform: translate(-50%, -50%); */
			background-color: #2c2e33;
			flex-direction: row;
			align-items: center;
			/* opacity: 0.5; */
			border-radius: 3px;
			/* vertical-align : bottom; */
			/* align-items: right; */
			/* width : 500px; */
			height : 50px;
			z-index: 50;
			
		}

		.tost-icon-width {
			width: 20px;
			height: 20px;
			cursor: pointer;
		}
		.toast-nrmal-fnt{
			font-size: 13px;
			font-weight: 700;
		}
		.toast-padding {
			padding: 5px;
		}
	}
	@media screen and (min-width: 768px) {
		
	}
	@media screen and (min-width: 992px) {
		
	}
</style>