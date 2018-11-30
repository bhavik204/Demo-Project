<template>
	<div class="list">
		<scroller class="scrollor">
			<div>
				<div class="card x-bottom-margin shadow">
					<div class="card-header-height">
						<image class="card-header-height" src="http://files.all-free-download.com//downloadfiles/wallpapers/2560_1600/dubai_night_9878.jpg"></image>
					</div>

					<div class="circle position-circle shadow">
						<!--Profile-->
						<image class="circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujxrpn-aUrswBCPma6I_lftUYInAlpQw_zLjVGSd8tlnOE-gL"></image>
					</div>

					<!--<div class="small-circle position-small-circle shadow">-->
					<!--Icon-->
					<!--  <image class="icon-box edit-icon-fit-in-circle" src="https://www.materialui.co/materialIcons/editor/mode_edit_white_192x192.png"></image>-->
					<!--</div>-->

					<div class="details-box x-bottom-margin">
						<div class="row card-line">
							<text class="x-add-margin-left x-large-font-size">Paresh Soni</text>
						</div>

						<div v-for="(proInfo, pi) in profile" :key="pi">
							<div class="row card-line x-small-margin-bottom-10">
								<div class="icon-box x-add-margin-left">
									<image class="icon-box" :src="proInfo.icon"></image>
								</div>
								<text class="x-margin-left xx-font-size">{{proInfo.info}}</text>
							</div>
						</div>
					</div>
					<!--Buttons-->
					<!--<div class="row card-line card-btn" @click="policyDetails =! policyDetails">-->
					<!-- <text class="card-btn-text">Policy Details</text>-->
					<!-- <image class="icon-box shift-right bg-back-color" src="https://image.flaticon.com/icons/png/128/60/60781.png"></image>-->
					<!--</div>-->

					<div class="flex-row extend-list-height bk shift-right" @click="policyDetails =! policyDetails">
						<div class="box">
							<text>Policy Details</text>
						</div>
						<div class="box">
							<image class="icon" src="https://image.flaticon.com/icons/png/128/60/60781.png"></image>
						</div>
					</div>
					<div class="x-panel add-border" v-if="policyDetails == true">
						<div class="flex-row x-topbottom-margin">
							<div class="box A"><text class="xx-font-size label-text-color">Policy No.:</text></div>
							<div class="box B"><text class="xx-font-size">0012TRA871</text></div>
							<div class="box C"><text class="xx-font-size label-text-color">Issued on:</text></div>
							<div class="box D"><text class="xx-font-size">12/12/2015</text></div>
						</div>
						<div class="flex-row x-topbottom-margin">
							<div class="box A"><text class="xx-font-size label-text-color">Policy Term:</text></div>
							<div class="box B"><text class="xx-font-size">10 Years</text></div>
							<div class="box C"><text class="xx-font-size label-text-color">ECS Active:</text></div>
							<div class="box D"><text class="xx-font-size">Yes</text></div>
						</div>
						<div class="flex-row x-topbottom-margin">
							<div class="box A"><text class="xx-font-size label-text-color">Add Frequency:</text></div>
							<div class="box B"><text class="xx-font-size">Annual</text></div>
							<div class="box C"><text class="xx-font-size label-text-color">Premium Type:</text></div>
							<div class="box D"><text class="xx-font-size">Regular</text></div>
						</div>
						<div class="flex-row x-topbottom-margin">
							<div class="box A"><text class="xx-font-size label-text-color">Last Premium Paid On:</text></div>
							<div class="box B"><text class="xx-font-size">16/02/2016</text></div>
							<div class="box C"><text class="xx-font-size label-text-color">Mode of Payment:</text></div>
							<div class="box D"><text class="xx-font-size">Cheque</text></div>
						</div>
					</div>

					<div class="flex-row extend-list-height bk shift-right add-border" @click="advisorDetails =! advisorDetails">
						<div class="box">
							<text>Advisor Details</text>
						</div>
						<div class="box">
							<image class="icon" src="https://image.flaticon.com/icons/png/128/60/60781.png"></image>
						</div>
					</div>

					<div class="x-panel add-border" v-if="advisorDetails == true">
						<div class="flex-row x-topbottom-margin">
							<div class="box A"><text class="xx-font-size label-text-color">Name:</text></div>
							<div class="box G"><text class="xx-font-size">Amrita Sariya</text></div>
						</div>
						<div class="flex-row x-top-bottom-margin">
							<div class="box A"><text class="xx-font-size label-text-color">Mobile:</text></div>
							<div class="box B"><text class="xx-font-size">9876673443</text></div>
							<div class="box C"><text class="xx-font-size label-text-color">Advisor Code:</text></div>
							<div class="box D"><text class="xx-font-size">HYD8215</text></div>
						</div>
						<div class="flex-row x-top-bottom-margin">
							<div class="box A"><text class="xx-font-size label-text-color">Email:</text></div>
							<div class="box G"><text class="xx-font-size">amritasariya@gmail.com</text></div>
						</div>
					</div>

				</div>
			</div>
		</scroller>
	</div>
</template>

<script>
    export default {
        data: () => {
            return {
                profile: [{
                    icon: 'https://image.flaticon.com/icons/png/512/3/3729.png',
                    info: 'PROPENSITY TO PAY'

                }, {
                    icon: 'http://www.pvhc.net/img192/jmlbfqmaanwbxhnnifki.png',
                    info: 'BRDMC0024'

                }, {
                    icon: 'https://freeiconshop.com/wp-content/uploads/edd/calendar-solid.png',
                    info: '15/09/1989'

                }, {
                    icon: 'https://png.icons8.com/metro/1600/home.png',
                    info: 'Hyderabad'

                }, {
                    icon: 'https://image.flaticon.com/icons/png/512/3/3913.png',
                    info: 'Telangana'

                }, {
                    icon: 'https://d30y9cdsu7xlg0.cloudfront.net/png/56382-200.png',
                    info: '+91 8106312874'

                }, {
                    icon: 'https://image.flaticon.com/icons/svg/59/59965.svg',
                    info: 'vivektaunk88@gmail.com'

                }],

                policyDetails: false,
                advisorDetails: false
            }
        }
    }
</script>


<style scoped>

    .scrollor {
        width: 750px;
        background-color: #EFEFEF;
    }
    
    .card {
        width: 710px;
        margin: 20px;
        margin-bottom: 0px;
        background-color: #fff;
        border-radius: 10px;
    }
    
    .card-line {
        align-items: center;
        /*padding-top: 5px;*/
    }
    
    .card-header-height {
        height: 300px;
        /*background-color: #314970;*/
    }
    
    .x-bottom-margin {
        margin-bottom: 30px;
    }
    
    .row {
        flex-direction: row;
        padding-left: 15px;
    }
    
    .circle {
        width: 120px;
        height: 120px;
        /*background-color: #ed6015;*/
        /*background-color: #000;*/
        border-radius: 60px;
    }
    
    .small-circle {
        width: 80px;
        height: 80px;
        background-color: #0d70c1;
        border-radius: 40px;
    }
    
    .position-circle {
        position: relative;
        top: -60px;
        left: 50px;
    }
    
    .position-small-circle {
        position: absolute;
        top: 255px;
        left: 600px;
    }
    
    .icon-box {
        height: 40px;
        width: 40px;
        /*background-color: #f2db8a;*/
    }
    
    .bg-back-color {
        background-color: #161613;
    }
    
    .x-add-margin-left {
        margin-left: 70px;
    }
    
    .x-margin-left {
        margin-left: 30px;
    }
    
    .x-large-font-size {
        font-size: 35px;
    }
    
    .x-medium-font-size {
        font-size: 30px;
    }
    
    .shadow {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
    }
    
    .edit-icon-fit-in-circle {
        position: relative;
        top: 20px;
        left: 20px;
    }
    
    .card-btn {
        /*margin-left:75px;*/
        /*background-color: #161613;;*/
        /*border-radius: 8px;*/
        /*width: 340px;*/
        height: 80px;
        cursor: pointer;
        border-width: 1px;
        border-style: solid;
        border-top-color: #a9abad;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #fff;
    }
    
    .card-btn-text {
        color: #000;
        font-size: 25px;
        text-align: center;
        cursor: pointer;
    }
    /*.card-btn:active {*/
    /*	background-color:#54544f;;*/
    /*}*/
    /*.x-panel {*/
    /*height: 200px;*/
    /*  background-color: #f9f9f9;*/
    /*  padding-top: 20px;*/
    /*  padding-bottom: 20px;*/
    /*}*/
    
    .x-font-size {
        font-size: 20px;
    }
    
    .xx-font-size {
        font-size: 25px;
    }
    
    .x-top-bottom-margin {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .x-label-width {
        width: 150px;
        /*background-color:yellow;*/
        color: #9b9999;
    }
    
    .x-content-width {
        width: 160px;
    }
    
    .x-small-margin-bottom-10 {
        margin-bottom: 10px;
    }
    
    .list {
        width: 750px;
        background-color: #EFEFEF;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #a9abad;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #fff;
    }
    
    .x-panel {
        /*height: 200px;*/
        background-color: #f9f9f9;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
    }
    
    .flex-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .box {
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
    }
    
    .A {
        flex: 3;
        /*background-color:#5fa1e2;*/
    }
    
    .B {
        flex: 4;
        /*background-color:#c4ed95;*/
        /*align-items: center;*/
        /*justify-content: center;*/
    }
    
    .C {
        flex: 3;
        /*background-color:#ffcd91;*/
    }
    
    .D {
        flex: 4;
        /*background-color:#d7ffd3;*/
    }
    
    .G {
        flex: 12;
        /*background-color:#c4ed95;*/
    }
    
    .x-topbottom-margin {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
    .label-text-color {
        color: #9b9999;
    }
    
    .shift-right {
        justify-content: space-between;
    }
    
    .extend-list-height {
        height: 80px;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .icon {
        width: 20px;
        height: 20px;
    }

</style>