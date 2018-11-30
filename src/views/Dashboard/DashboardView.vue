<template>
   <div>
     <div class="card-headerline row">
   <image class="ham-logo" src="../../../hamburgerIcon.png"></image>
     <image class="head-logo" src="http://salesdrive.iorta.in/img/logo.png"  @click="jump('/lead')"></image>
        <!-- <text class="notlogo" @click="jump('/notifications')" style="color:#fff;  position: relative;
    left:234px;
    top:11px;">Notify</text> -->
        <image class="notification-logo" src="https://www.materialui.co/materialIcons/social/notifications_white_192x192.png" alt="notify" @click="jump('/notifications')"></image>
         <image class="other-logo" src="http://www.vvillageresorts.com/tour/skin/Image_2FB6632C_20CB_DBE7_41AE_0C4F8CFBCC75.png" @click="notifyDetails=!notifyDetails"></image>
  
     <div class="notify-div" v-if="notifyDetails==true">
       <div class="card-notify" >
           <div v-if="deviceWidth < 959"  class="row1" style="flex-direction:row">
         <text class="card-head-title" @click="jump('/sync')">Sync Now</text>
       
         </div>
         <div v-if="deviceWidth < 959"  class="row1" style="flex-direction:row">
         <div> <image class="news-box" src="https://www.gatewaychamber.com/Content/Uploads/ProfilePictures/default-user.png"></image></div>
         <div class="profile-det" style="flex-direction:column">
           <text class="card-head-title">Kasturi Shah</text>
             <text class="card-head-subtitle">Adv ID:HYD3245</text>
               <text class="card-head-subtitle">Miapur,Hyderabad</text>
         </div>
         </div>
          <div  v-if="deviceWidth < 959" class="row1" style="flex-direction:row">
         <div> <image class="news-box" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Icons8_flat_doughnut_chart.svg/512px-Icons8_flat_doughnut_chart.svg.png"></image></div>
         <div class="profile-det" style="flex-direction:column">
         
             <text class="card-head-title">Goal Summary</text>
             <text class="card-head-subtitle">Target:30.50 Lakh</text>
               <text class="card-head-subtitle">Achived: 20.56 Lakh</text>
                <text class="card-head-subtitle">Pending: 9.44 Lakh</text>
      
         </div>
         </div>
           <div  class="row1" style="flex-direction:row">
         <div> <image class="notify-box" src="https://www.materialui.co/materialIcons/social/people_grey_192x192.png"></image></div>
         <div class="profile-det" style="flex-direction:column">
           <text class="card-head-cust-title">My Customers</text>
         </div>
         </div>
          <div  class="row1" style="flex-direction:row">
         <div> <image class="notify-box" src="https://www.materialui.co/materialIcons/action/help_grey_192x192.png"></image></div>
         <div class="profile-det" style="flex-direction:column">
           <text class="card-head-cust-title">My Advisors</text>
         </div>
         </div>
          <div  class="row1" style="flex-direction:row">
         <div> <image class="notify-box" src="https://www.materialui.co/materialIcons/action/input_grey_192x192.png"></image></div>
         <div class="profile-det" style="flex-direction:column">
           <text class="card-head-cust-title">Team Login</text>
         </div>
         </div>
          <div  class="row1" style="flex-direction:row">
         <div> <image class="notify-box" src="https://www.materialui.co/materialIcons/action/question_answer_grey_192x192.png"></image></div>
         <div class="profile-det" style="flex-direction:column">
           <text class="card-head-cust-title">Help Desk</text>
         </div>
         </div>
         <div  class="row1" style="flex-direction:row">
         <div> <image class="notify-box" src="https://www.materialui.co/materialIcons/action/highlight_remove_grey_192x192.png"></image></div>
         <div class="profile-det" style="flex-direction:column">
           <text class="card-head-cust-title">Log Out</text>
         </div>
         </div>
       </div>
     </div>
     </div>
    
     
      <scroller class="scroller">
  <div class="list">
   
    <div class="x-bottom-margin">
      
      <div class="card shadow">
        <div class="row dashboard-body-color">
          <div class="group">
            <text class="input dashboard-body-color white-color" @click="pick">{{value}}</text>
          </div>
        </div>
        
        <!--Header End-->
        
        <div class="row dashboard-body-color" style="padding-bottom:18px">
          <div class="card-message">
            <div class="x-top-margin"></div>
            <div v-for="(items, index) in list" :key="index">
            <!--Row 1-->
            <div class="card-line x-bottom-margin">
                <div class="card-line row ">
                  <text class="card-subtitle x-font-size white-color">{{items.titleLabel}}</text>
                  <text class="card-subtitle x-small-width shift-center xx-font-size white-color">₹ {{items.amount1}}</text>
                  <text class="card-subtitle x-small-width shift-center xx-font-size white-color">₹ {{items.amount2}}</text>
                  <text class="card-subtitle x-small-width shift-center xx-font-size white-color">₹ {{items.amount2}}</text>
                </div>
          
                <div class="card-line row">
                  <text class="card-subtitle"></text>
                  <text class="card-subtitle shift-center x-font-size white-color">{{items.label1}}</text>
                  <text class="card-subtitle shift-center x-font-size white-color">{{items.label2}}</text>
                  <text class="card-subtitle shift-center x-font-size white-color">{{items.label3}}</text>
                </div>
              </div>
            </div>
            <!--<div class="x-top-margin"></div>-->
            <!--Row 1 end-->
          </div>
        </div>
        
        <!--Card Footer-->
        <div class="card-footer text-wraper row dashboard-color-footer">
            <text class="card-head-title white-color">DASHBOARDSSSSS</text>
            <div class="card-footer-new-row xx-large-margin-left">
                <text class="small-font white-color">Last Synced</text>
                <text class="small-font white-color">13 hours ago</text>
            </div>
           
            <div class="row logo-wraper">
              <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
            </div>
        </div>
    </div>
    
    <!--Dashboard End-->
       <div class="card shadow">
        <div class="row app-body-color" style="padding-bottom:18px">
          <div class="card-message">
            <div class="x-top-margin"></div>
           
            <!--Row 1-->
            <div class="card-line ">
                <div class="card-line row">
                  <text class="card-subtitle white-color xx-font-size xx-medium-width font-bold">Renewals</text>
                  <text class="card-subtitle white-color xx-font-size xx-medium-width font-bold">Applications</text>
                </div>
            </div>
             <div class="card-line">
                <div class="card-line row">
                  <text class="card-subtitle white-color xxx-large-font xx-medium-width font-bold">25</text>
                  <text class="card-subtitle white-color xxx-large-font xx-medium-width font-bold">25</text>
                </div>
            </div>
             
           <!--<div class="card-line row g-color">-->
           <!--   <div class="x2-card-line x2-row xx-medium-width">-->
           <!--         <text class="card-subtitle white-color xxx-large-font font-bold small-width">25</text>-->
           <!--         <text class="card-subtitle small-width">New</text>-->
                    
           <!--         <div class="x2-card-line x2-row xx-medium-width">-->
           <!--         <text class="card-subtitle white-color xxx-large-font font-bold small-width">25</text>-->
           <!--         <text class="card-subtitle small-width">New</text>-->
           <!-- </div>-->
    
                  
                  
                
                  
                  
                  
           <!--     </div>-->
                
           <!--   </div>-->
            
            <!--<div class="x-top-margin"></div>-->
            <!--Row 1 end-->
            
          </div>
        </div>
        
        <!--Card Header-->
         <div class="card-footer text-wraper row app-body-footer">
            <text class="card-head-title white-color">APPLICATIONS</text>
            <div class="card-footer-new-row xx-large-margin-left">
                <text class="small-font white-color">Last Synced</text>
                <text class="small-font white-color">13 hours ago</text>
            </div>
           
            <div class="row logo-wraper">
              <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
            </div>
        </div>
    </div>
         <!--Applications End-->
         
       <div class="card shadow">

        <div class="row presale-body-color" style="padding-bottom:18px">
          <div class="card-message">
            <div class="x-top-margin"></div>
           
            <!--Row 1-->
            <div class="x-bottom-margin">
                <div class="card-line row x-bottom-margin">
                  <text class="card-subtitle white-color xx-font-size xx-medium-width font-bold">Sales Pitch</text>
                  <text class="card-subtitle white-color xx-font-size xx-medium-width font-bold">Products</text>
                </div>
          
                <div class="card-line row ">
                  <text class="card-subtitle white-color xx-font-size xx-medium-width font-bold">Resource Center</text>
                  <text class="card-subtitle white-color xx-font-size xx-medium-width font-bold">Need Analysis</text>
                </div>
              </div>
            
            <!--<div class="x-top-margin"></div>-->
            <!--Row 1 end-->
            
          </div>
        </div>
        
        <!--Card Header-->
        <div class="card-footer text-wraper row presale-body-footer">
            <text class="card-head-title white-color">PRE SALES TOOLS</text>
            <div class="card-footer-new-row xx-large-margin-left">
                <text class="small-font white-color">Last Synced</text>
                <text class="small-font white-color">13 hours ago</text>
            </div>
           
            <div class="row logo-wraper">
              <text class="refresh-logo shift-right fa fa-refresh white-color"></text>
            </div>
        </div>
    </div>
    
    <!--Sales Pitch End-->
    
     <div class="card shadow">

        <div class="row on-boarding-body-color" style="padding-bottom:18px">
          <div class="card-message">
            <div class="x-top-margin"></div>
           
            <!--Row 1-->
            <div class="x-bottom-margin">
                <div class="card-line row x-bottom-margin">
                  
                </div>
          
      
              </div>
            
            <!--<div class="x-top-margin"></div>-->
            <!--Row 1 end-->
            
          </div>
        </div>
        
        <!--Card Header-->
        <div class="card-footer text-wraper row on-boarding-body-footer-color">
            <text class="card-head-title white-color">ONBOARDING</text>
            <div class="card-footer-new-row xx-large-margin-left">
                <text class="small-font white-color">Last Synced</text>
                <text class="small-font white-color">13 hours ago</text>
            </div>
           
            <div class="row logo-wraper">
              <text class="refresh-logo shift-right fa fa-refresh white-color"></text>
            </div>
        </div>
    </div>
    
    <!--Onboarding end-->
    
     <div class="card shadow">
        <div class="row app-body-color" style="padding-bottom:18px">
          <div class="card-message">
            <div class="x-top-margin"></div>
           
            <!--Row 1-->
           
             <div class="card-line">
                <div class="card-line row">
                  <text class="white-color xxx-large-font font-bold">25</text>
                  <text class="card-subtitle white-color"> New</text>
                </div>
            </div>
          </div>
        </div>
        
        <!--Card Header-->
         <div class="card-footer text-wraper row app-body-footer">
            <text class="card-head-title white-color">LEAD MANAGEMENT</text>
            <div class="card-footer-new-row xx-large-margin-left">
                <text class="small-font white-color">Last Synced</text>
                <text class="small-font white-color">13 hours ago</text>
            </div>
           
            <div class="row logo-wraper">
              <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
            </div>
        </div>
    </div>
    
    <!--Lead Management End-->
    
    <div class="card shadow">
        <div class="row cfr-body-color" style="padding-bottom:18px">
          <div class="card-message">
            <div class="x-top-margin"></div>
           
            <!--Row 1-->
           
             <div class="card-line">
                <div class="card-line row">
                  <text class="white-color xxx-large-font font-bold">25</text>
                  <text class="card-subtitle white-color"> New</text>
                </div>
            </div>
          </div>
        </div>
        
        <!--Card Header-->
         <div class="card-footer text-wraper row cfr-footer-color">
            <text class="card-head-title white-color">CALL FOR REQUIRMENT</text>
            <div class="card-footer-new-row xx-large-margin-left">
                <text class="small-font white-color">Last Synced</text>
                <text class="small-font white-color">13 hours ago</text>
            </div>
           
            <div class="row logo-wraper">
              <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
            </div>
        </div>
    </div>
    
    
        <div class="card shadow">
        <!--Header End-->
        <div class="x-height row news-body-footer">
          <div class="x-large-width">
            <div class="news-link-margin">
              <text class="white-color shift-right xx-font-size">View All</text>
            </div>
            
          </div>
        </div>
        <div class="row news-body-footer">
          <div class="news-card-message">
            <scroller class="scrollor">
              <div v-for="(list, li) in lists" :key="li">
                <div class="card-line row news-bg-color x-large-width horizontal-border">
                  <image class="news-box" :src="list.image"></image>
                  <div class="news-card-line news-row-for-text x-left-margin panel">
                    <div class="news-card-line">
                      <text class="news-card-subtitle x-large-width xx-font-size font-bold">{{list.title}}</text>
                    </div>
                    <div class="panel">
                      <text class="news-text x-font-size" lines="2">{{list.desc}}</text>
                    </div>
                    <text class="small-top-margin x-font-size">{{list.duration}}</text>
                
                  </div>
              </div>
            </div>
            </scroller>
           
          </div>
          
        </div>
        
        <!--Card Header-->
        <div class="card-footer text-wraper row news-body-footer">
            <text class="card-head-title white-color">NEW AND UPDATES</text>
            <div class="card-footer-new-row xx-large-margin-left">
                <text class="small-font white-color">Last Synced</text>
                <text class="small-font white-color">13 hours ago</text>
            </div>
           
            <div class="row logo-wraper">
              <text class="refresh-logo shift-right"><i class="fa fa-refresh white-color"></i></text>
            </div>
        </div>
    </div>
    
    </div>
   
  </div>
   </scroller>
  <!--root end - list -->
   </div>
</template>

<script>
const picker = weex.requireModule('picker')
const items = ['Month to Date', 'Year to Date', 'Custom Date Range']
export default {
      created(){
   if (typeof WXEnvironment === 'object') {
        
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      return this.deviceWidth
      }
    },
  data: () => {
    return {
       object: WXEnvironment,
           deviceWidth: '',
        index: -1,
        notifyDetails:false,
        list: [
                {
                  titleLabel: 'Logins',
                  amount1: 234000,
                  label1: 'Target',
                  
                  amount2: 234000,
                  label2: 'Achieved',
                  
                  amount3: 234000,
                  label3: 'Shortfall'
                }, 
                {
                  titleLabel: 'Issuance',
                  
                  amount1: 234000,
                  label1: 'Target',
                  
                  amount2: 234000,
                  label2: 'Achieved',
                  
                  amount3: 234000,
                  label3: 'Shortfall'
                }   
          ],
          lists: [
          {
            image: 'http://salesdrive.iorta.in/img/dashboard/news.jpg',
            title: 'Big changes in retirement',
            desc: 'Investment advitce coming to your mail boxInvestment advitce coming',
            duration: '20 mints ago'
          },
          {
            image: 'http://salesdrive.iorta.in/img/dashboard/news.jpg',
            title: 'Big changes in retirement',
            desc: 'Investment advitce coming to your mail boxInvestment advitce coming',
            duration: '20 mints ago'
          },
          {
            image: 'http://salesdrive.iorta.in/img/dashboard/news.jpg',
            title: 'Big changes in retirement',
            desc: 'Investment advitce coming to your mail boxInvestment advitce coming',
            duration: '20 mints ago'
          }
         
        ]
    }
  },
  computed: {
      
    value() {
      if(this.index == -1) {
        return items[0]
      } else if(this.index < items.length) {
        return items[this.index]
      }
    return ''
    }
    
    
    },
    methods: {
       jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
      pick () {
        picker.pick({
          index: this.index,
          items
        }, event => {
          if (event.result === 'success') {
            this.value = items[event.data]
            this.index = event.data
          }
        })
      }
    }
    
}
  
</script>

<style scoped>

  .w-wraper {
    justify-content: center;
    align-items : center;
  }
  
  .horizontal-border {
      border-width: 2px;
		  border-style: solid;
		  border-top-color: #fff;
		  border-right-color: #fff;
		  border-left-color: #fff;
		  border-bottom-color: #f1f0f0;
    }
  
  .card-footer {
    height: 100px;
    /*background-color: #e6e6e6;*/
  }
  
  .card-head-title {
    font-size: 30px;
    font-weight: bold;
    width: 400px;

  }
   .card-head-cust-title {
    font-size: 25px;
    font-weight: bold;
    color: #565656;
    font-family: 'Helvetica-Bold'
  
  }
  
  .card-head-subtitle {
    font-size: 20px;
  }
  
  .logo-wraper {
    align-items: center;
    margin-left: 10px;
    width:100px;
    background-color: gray;
    border-width: 2px;
		border-top: none;
		border-style: solid;
		border-top-color: #21618C;
		border-right-color: #21618C;
		border-left-color: #FFF;
		border-bottom-color: #21618C;
  }
  
  .refresh-logo {
    font-size: 50px;
    color: white;
    height:50px;
    width: 50px;
  }
  
  .group { 
		position:relative; 
		margin-top: 20px;
		/*background-color: yellow;*/
	}
	
	.input {
		display:block;
		width: 400px;
		background-color: #fff;
		/*margin-left: 70px;*/
		font-size: 23px;
		padding: 20px;
		color: #666666;
		border-width: 2px;
		border-top: none;
		border-style: solid;
		border-top-color: #2E86C1;
		border-right-color: #2E86C1;
		border-left-color: #2E86C1;
		border-bottom-color: #FFF;
	}

  .text-wraper {
    align-items: center;
  }

  .row {
    flex-direction: row;
    padding-left:15px;
  }
  
  .x2-row {
    flex-direction: row;
  }
  .card {
    width: 710px;
    margin: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 10px;
  }
  

  .card-title {
    padding-left:15px;
    font-size: 36px;
    color: #666666;
    margin-top: 10px;
    padding-bottom: 6px;
  }
  .card-line {
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  .x2-card-line {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  .card-subtitle {
    font-size: 30px;
    width: 160px;
    color: #07152a;
    margin-right:10px;
    /*background-color: yellow;*/
  }
 
  .x-small-width {
      width: 160px;
      /*background-color: yellow;*/
  }
  
  .small-width {
    width: 80px;
    background-color:red;
  }
  
  .xx-medium-width {
     width: 250px;
  }
 
  .list {
    width: 750px;
    background-color: #EFEFEF;
  }
  
  .card-message {
    margin-top: 20px;
  }
  
  .shift-center {
    /*background-color: red;*/
    margin-left: 0px;
    text-align: center;
  }
  
  .shift-right {
    /*background-color: red;*/
    margin-left: 0px;
    text-align: right;
  }
  
  .b-color {
    color: #517bbd;
  }
  
  .g-color {
    background-color:#366b36;
  }
  
  .xxx-large-font {
    font-size: 35px;
  }
  
  .font-bold {
    font-weight: bold;
  }
  .xx-font-size {
    font-size: 25px;
  }
  
  .x-font-size {
    font-size: 20px;
    color:#aba8a8;
  }
  
  .x-link-font {
    font-size: 28px;
    font-weight: bold;
  }
  
  .title {
    font-size: 45px;
    font-weight: bold;
  }
 
   .scrollor {
    height: 300px;
    width: 680px;
    /*background-color: #EFEFEF;*/
  }
  
  .card-footer-new-row {
     flex-direction: column;
  }
  
  .small-top-margin {
   
    margin-top: 10px;
  }
  
  .xx-large-margin-left {
     margin-left: 90px;
  }
  
  .color-g {
    background-color: green;
  }
  
  .shadow {
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
  }
  
  .small-font {
    font-size: 15px;
    font-style: italic;
  }
  
  .light-gray {
    background-color: #f8f8f8;
  }
 
  .app-width {
    background-color: red;
  }
  
  .x-height {
    height: 80px;
    /*background-color: red;*/
    /*width: ;*/
  }
  
  .x-top-margin {
    margin-top: 10px;
  }
  
  .x-bottom-margin {
    margin-bottom: 30px;
  }
  
  .list-title {
    font-weight: bold;
    background-color:red;
    
  }
  
  .dashboard-body-color {
    background-color: #2E86C1;
  }
  
  .dashboard-color-footer {
    background-color: #21618C;
  }
  
  .app-body-color {
    background-color: #5D9DB7;
  }
  
  .app-body-footer {
    background-color: #33738D;
  }
  
   .presale-body-color {
    background-color: #E0C166;
  }
  
  .presale-body-footer {
    background-color: #B69A49;
  }
  
  .news-body-color {
    background-color: #FFF;
    color: white;
  }
  
  .news-body-footer {
    background-color: #74CB83;
  }
  
  .white-color {
    color: #fff;
  }


/*Temporary code*/

 .news-text {
    lines: 2;
    color: #666666;
  }

  .news-bg-color {
    background-color: #fff;
  }
  
  .news-text-color {
    background-color: #000;
  }

  .news-card-header {
    height: 100px;
    background-color: #e6e6e6;
    
  }
  .news-h-border {
      border-width: 2px;
		  border-style: solid;
		  border-top-color: #fff;
		  border-right-color: #fff;
		  border-left-color: #fff;
		  border-bottom-color: #f1f0f0;
    }
  
  .news-card-head-title {
    font-size: 35px;
    font-weight: bold;
    width: 400px;
  }
  
  .news-logo-wraper {
    align-items: center;
    margin-left: 40px;
    background-color: gray;
  }
  
  .news-refresh-logo {
    width:50px;
    height:50px;
  }

  .news-text-wraper {
    align-items: center;
  }

  .x-left-margin {
    margin-left: 30px;
  }

  .news-card-title {
    padding-left:15px;
    font-size: 36px;
    color: #666666;
    margin-top: 10px;
    padding-bottom: 6px;
  }
  
  .news-card-line {
    /*align-items: center;*/
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  .news-text-line {
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  .news-card-subtitle {
    width: 200px;
    margin-right:10px;
  }
 
  .news-list {
    width: 750px;
    background-color: #EFEFEF;
  }
  
  .news-card-message {
    margin-top: 0px;
  }
  
  .news-new-row {
     flex-direction: column;
     /*background-color: blue;*/
     margin-left: 50px;
  }
  
  .news-row-for-text {
    flex-direction: column;
  }
  
  .news-shadow {
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
  }
  
  .news-small-font {
    font-size: 20px;
    font-style: italic;
  }

  .news-x-height {
    height: 180px;
    /*background-color: red;*/
    /*width: ;*/
  }
  
  .news-x-top-margin {
    margin-top: 50px;
  }
  
  .news-x-bottom-margin {
    margin-bottom: 50px;
  }
  
  .news-list-title {
    font-weight: bold;
  }
  
  .news-material-color-blue {
    background-color: #FFF;
    color: white;
  }
  
  .news-material-color {
    background-color: #74CB83;
  }
  
  .news-white-color {
    color: #FFFFFF;
  }
  
  .x-large-width {
    width: 680px;
  }
  
  .news-box {
    width: 110px;
    height: 110px;
    margin-top:20px;
  }
    .notify-box {
    width: 40px;
    height: 40px;
    margin-top:20px;
  }
  
   .panel {
    width: 490px;
  }
  

  .news-link-margin {
    margin-top: 40px;
  }
  
  .on-boarding-body-footer-color {
    background-color:#AC2D4A;
  }
  
   .on-boarding-body-color {
    background-color:#E73C63;
  }
  
  .cfr-body-color {
    background-color: #BF51B8;
  }
  
  .cfr-footer-color {
    background-color: #A7249F;
  }
  .card-headerline{
       background-color:#3b371e;
       height:87px;
       padding: 15px;
  }
  /* .header-text{
    color:#ffffff;
    font-size: 47px;
  } */
  .ham-logo{
 height:60px;
 width:60px;
  }
  .head-logo{
    width:277px;
    height:63px;
    position:relative; 
    left:113px;
    bottom: 8px;
  }
   .notification-logo{
    width:50px;
    height:40px;
    position: relative;
    left:234px;
    top:11px;
   
  }
    .other-logo{
    width:60px;
    height:69px;
    position: relative;
    left:268px;
    top:0px;
   
  }
  
  .profile-det{
    width:750px;
    padding:30px;
   
  }
  .row1{
  border-bottom:1px solid #565656;
  padding-left:30px;
  }
  .notify-div{
    position: relative;;
    z-index: 1;
    left:289px;
  }
    .card-notify {
      /* position: absolute; */

  /* position: absolute; 
    top: 50px;
     right: 0; */
    /* flex-direction: l; */
    /* left: 0; */
    /* flex-direction: row; */
    align-items: 0px;
    width: 400px;
    /* z-index: 1; */
    margin: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 10px;
  }
  
</style>
