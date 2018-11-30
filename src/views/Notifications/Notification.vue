<template>
  <div>
      <div class="tabbar">
            <div class="tab active" :style="{ left: activeTab * 250 + 'px'}"></div> 
            <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
                <text class="title">{{tab.number}}</text>
                <text class="title">{{tab.title}}</text>
            </div>
        </div>
        <!-- Tab Heading-->
        <div class="tab-panels" v-if="activeTab == 0"  :style="{ left: activeTab * -750 + 'px'}">
  
            <div class="list"  v-for="(panel, pi) in panels" :key="pi">
                <scroller class="scrollor">
                    <div class="end-margin">
                    <!--Card Start-->
    
                       <div class="card" v-for="(list, ci) in panel.content">
                           <div class="row-text" style="padding-bottom:18px;">
                                <div class="card-message">
                                    <div class="h-border">
                                     
                                       <text class="card-title">{{list.Name}}</text>
                                    <text class="picker status-bold g-color"  @click="jump('/lead')">Open</text>
                                     <div class="card-line row">
                                        <text class="card-subtitle">{{list.Id}}</text>
                                    </div>
                                    <div class="card-line row">
                                        <text class="card-subtitle">{{list.Plan}}</text>
                                    </div>
                                    <div class="card-line row">
                                        <text class="card-subtitle" style="color:blue">{{list.Status}}</text>
                                    </div>
                                    </div>
                                     <div class="card-line row add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Product Type </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.ProductType}}</text>
                                         </div>
                                        <text class="card-subtitle label-text label-width">App no.</text>
                                        <text class="card-subtitle change-width">{{list.ApplicationNo}}</text>
                                    </div>
                                      <div class="card-line row add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Premium Amount </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.PremiumAmount}}</text>
                                         </div>
                                        <text class="card-subtitle label-text label-width">Premium Type</text>
                                        <text class="card-subtitle change-width">{{list.PremiumType}}</text>
                                    </div>
                                      <div class="card-line row add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Policy Term </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.PolicyTerm}}</text>
                                         </div>
                                        <text class="card-subtitle label-text label-width">Premium Paying Term</text>
                                        <text class="card-subtitle change-width">{{list.PremiumPayingTerm}}</text>
                                    </div>
                                      <div class="card-line row add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Draft Date </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.DraftDate}}</text>
                                         </div>
                                         <div @click="jump('/benefit')">
                                        <text class="card-subtitle label-text label-width">App no.</text>
                                        <text class="card-subtitle change-width">{{list.listTitle}}</text>
                                    </div>
                                      </div>
                                </div>
                           </div>
                       </div>
                    <!--Card Ends-->

                    </div> 
                </scroller>
            </div>
  
        </div>
              <div class="tab-panels" v-if="activeTab == 1"  :style="{ left: activeTab * -750 + 'px'}">
  
            <div class="list"  v-for="(panel, pi) in panels" :key="pi">
                <scroller class="scrollor">
                    <div class="end-margin">
                    <!--Card Start-->
    
                       <div class="card" v-for="(list, ci) in panel.content">
                           <div class="row-text" style="padding-bottom:18px;">
                                <div class="card-message">
                                        <text class="card-subtitle">Renewal Due Tommorow </text>
                                        <text class="card-subtitle">05:19 March 19 2016 </text>
                                     <div class="card-line row  add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Client Name </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.ProductType}}</text>
                                         </div>
                                        <text class="card-subtitle label-text label-width">Client ID.</text>
                                        <text class="card-subtitle change-width">{{list.ApplicationNo}}</text>
                                    </div>
                                      <div class="card-line row add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Plan Name </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.PremiumAmount}}</text>
                                         </div>
                                        <text class="card-subtitle label-text label-width">Installment Plan</text>
                                        <text class="card-subtitle change-width">{{list.PremiumType}}</text>
                                    </div>
                          
                        
                                </div>
                           </div>
                       </div>
                    <!--Card Ends-->

                    </div> 
                </scroller>
            </div>
  
        </div>
          <div class="tab-panels" v-if="activeTab == 2"  :style="{ left: activeTab * -750 + 'px'}">
  
            <div class="list"  v-for="(panel, pi) in panels" :key="pi">
                <scroller class="scrollor">
                    <div class="end-margin">
                    <!--Card Start-->
    
                       <div class="card" v-for="(list, ci) in panel.content">
                           <div class="row-text" style="padding-bottom:18px;">
                                <div class="card-message">
                                        <text class="card-subtitle">Birthday Today </text>
                                        <text class="card-subtitle">05:19 March 19 2016 </text>
                                     <div class="card-line row  add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Client Name </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.ProductType}}</text>
                                         </div>
                                        <text class="card-subtitle label-text label-width">Client ID.</text>
                                        <text class="card-subtitle change-width">{{list.ApplicationNo}}</text>
                                    </div>
                                      <div class="card-line row add-marg">
                                         <div>
                                        <text class="card-subtitle label-text label-width">Plan Name </text>
                                         </div>
                                         <div>
                                        <text class="card-subtitle change-width">{{list.PremiumAmount}}</text>
                                         </div>
                                        <text class="card-subtitle label-text label-width">Installment Plan</text>
                                        <text class="card-subtitle change-width">{{list.PremiumType}}</text>
                                    </div>
                          
                        
                                </div>
                           </div>
                       </div>
                       <div class="card">
                                <div class="row-text" style="padding:18px">
                                  <div class="card-message">
                                    <text class="card-subtitle">Birthday Today </text>
                                     <text class="card-subtitle">05:19 March 19 2016</text>
                                       <div @click="jump('/benefit')" style="flex-direction:row-reverse">
                                        <text class="card-subtitle" style="color:blue">View Details</text>
                              
                                    </div>
                                  </div>
                                  </div>
                                  
                       </div>
                    <!--Card Ends-->

                    </div> 
                </scroller>
            </div>
  
        </div>
        
  </div>
</template>

<script>
export default {
   data () {
            return {
                activeTab: 0,
                personalId:'',
                tabs: [{
                    number:55,
                    title: 'Applications',
                    icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png',
                    productList: [{
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                            Plan:'Endownment Plan(MGB)',  
                            Status:'Proposal Incomplete', 
                            ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                            PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016',                     
                            listTitle: 'Resume',
                            listContent: 'A pure term insurance plan that provides financial protection to your family and offers you the flexibility to choose the plan that suits your need.',
                            button:'Benefit Illustration'
                        },
                        {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                        {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123',
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non-linked, non-participating Term Insurance plan, offers you a wide range of choices to fulfill your familys specific needs of financial protection.',
                            button:'Benefit Illustration'
                        },
                          {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                          {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                          {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                          {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                          {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                          {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                          {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Proposal Incomplete', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                    ]
                },
                {
                    number:23,
                    title: 'Renewals',                                      
                    icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png',
                    productList: [{
                              Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Payment Pending', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                        {
                             Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Payment Pending', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                        {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Payment Pending', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                    ]
          
                }, 
                {
                    number:40,
                    title: 'Alerts',
                    icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png',
                    productList: [{
                               Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Pending Issuance', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                        {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                              Status:'Pending Issuance', 
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                        {
                            Name:'Shahu Patil',
                            Id :'BRSMCU155',  
                             Plan:'Endownment Plan(MGB)', 
                               Status:'Pending Issuance',  
                              ProductType:'Savings(Par)',
                            ApplicationNo:'0012TRA123', 
                               PremiumAmount:'18,004',
                            PremiumType:'Regular',
                            PolicyTerm:'10 years',
                            PremiumPayingTerm:'10 years',
                            DraftDate:'01/12/2016', 
                            listTitle: 'Resume',
                            listContent: 'A non linked non participating, term insurance plan. Its designed to be your online pure term solution of choice that will ensure your peace of mind at a very attractive and easily affordable price.',
                            button:'Benefit Illustration'
                        },
                    ]

                }, 
               ]
            }
        },
         computed: {
            panelsContent () {
                return this.tabs.map(tab => ({ 
                    content: tab
                }))
            },
            panels () {
                return this.tabs.map(tab => ({ 
                    content: tab.productList
                }))
            },
        },
        methods:{
       jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        }
      // jump1(){
      //    this.$router.push('/test')
      // },
      // jump2(){
      //   console.log('we are on jump2')
      //    this.$router.push('/')
      // }

    }
}
</script>

<style scoped>
  .tabbar {
    flex-direction: row;
    background-color: #505050;
  
  }
  .tab {
    height: 120px;
    width: 250px;
    justify-content: center;
    align-items: center;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    /*background-color: rgb(218, 59, 85);*/
    background-color: #353535;
    transition: left 0.2s ease-in-out;
  }
  .icon {
    width: 45px;
    height: 45px;
  }
  .title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
  .tab-panels {
    position: relative;
    width: 3750;
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    background-color: #F5F5F5;
    transition: left 0.2s ease-in-out;
  }
  .panel {
    width: 750px;
    justify-content: center;
    align-items: center;
  }
  .content {
    font-size: 100px;
    color: #707070;
  }
  
  .h-border {
      border-width: 2px;
      border-style: solid;
      border-top-color: #fff;
      border-right-color: #fff;
      border-left-color: #fff;
      border-bottom-color: #f1f0f0;
    }
   .text {
    lines: 10;
    color: #666666;
    font-size: 23px;
    text-align: justify;
  }
  .row-text {
    padding: 15px;
  }
  .row {
    flex-direction: row;
    padding-left:15px;
    
  }
  .card {
    width: 710px;
    margin: 20px;
    margin-top: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
    
  }
  .card-banner {
    width: 222px;
    height: 60px;
  }
  .card-side {
    padding: 20px;
  }
  .card-poster {
    width: 230px;
    height: 230px;
    margin-right: 20px;
  }
  .card-title {
    padding-left:15px;
    font-size: 25px;
    font-weight: bold;
    color: #666666;
    margin-top: 25px;
    padding-bottom: 6px;
  }
  .card-line {
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .card-icon {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .card-subtitle {
    font-size: 22px;
    color: #07152a;
    
    
  }
  .card-progress {
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 30px;
    background-color: #FEC1C1;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card-progress-inner {
    position: absolute;
    height: 30px;
    left: 0;
    border-radius: 20px;
    background-color: #ff3c32;
  }
  .card-got {
    position: absolute;
    left: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px
  }
  .card-remain {
    position: absolute;
    right: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px;
  }
  .card-info {
    width: 400px;
    flex-direction: row;
    align-items: flex-end;
  }
  .card-price {
    font-size: 52px;
    color: #ff3c32;
    margin-bottom: -10px;
    margin-top: 10px;
    margin-right: 8px;
  }
  .card-sale-price {
    font-size: 28px;
    color: #999999;
    text-decoration: line-through;
  }
  .card-btn {
    background-color: #505050;
    border-radius: 8px;
    margin-top: 5px;
    width: 230px;
    height: 52px;
    justify-content: center;
  }
  .card-btn-text {
    color: #FFFFFF;
    font-size: 25px;
    text-align: center;
  }
  
  .card-btn:active {
    background-color: #353535;
  }
  
  .list {
    width: 750px;
    background-color: #EFEFEF;
  }

  .scrollor {
    width: 750px;
    background-color: #EFEFEF;
  }
  
  .end-margin {
    margin-bottom: 20px;
  }
  /*CARD CSS*/
    .wrapper {
    justify-content: center;
    align-items: center;
    background-color: #feb041;
    height: 80px;
   }
  .form-container {
    /*background-color: #feb041;*/
    margin-top: 10px;
    padding-bottom:20px;
  }
 .heding {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
  .log-out-img {
    position: absolute;
    left: 700px;
    top: 20;
    width: 50px;
        height: 50px;
        font-size:50px;
  }
  
  .row {
    flex-direction: row;
    padding-left:15px;
  }
  .picker {
    position: absolute;
    top: 25px;
    left: 580px;
  }
  .card {
    width: 710px;
    margin: 20px;
    margin-top: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
  }
  .card-banner {
    width: 222px;
    height: 60px;
  }
  .card-side {
    padding: 20px;
  }
  .card-poster {
    width: 230px;
    height: 230px;
    margin-right: 20px;
  }
  .card-title {
    padding-left:15px;
    font-size: 30px;
    font-weight: bold;
    color: #666666;
    /*color: #fff;*/
    margin-top: 25px;
    padding-bottom: 6px;
    /*background-color: yellow;*/
  }
  .card-line {
    /*align-items: center;*/
    padding-top: 5px;
    padding-bottom: 5px;
    /*background-color: #000;*/
    
  }
  .card-icon {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .card-subtitle {
    font-size: 23px;
    color: #07152a;
    /*color: #fff;*/
  }
  .card-progress {
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 30px;
    background-color: #FEC1C1;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card-progress-inner {
    position: absolute;
    height: 30px;
    left: 0;
    border-radius: 20px;
    background-color: #ff3c32;
  }
  .card-got {
    position: absolute;
    left: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px
  }
  .card-remain {
    position: absolute;
    right: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px;
  }
  .card-info {
    width: 400px;
    flex-direction: row;
    align-items: flex-end;
  }
  .card-price {
    font-size: 52px;
    color: #ff3c32;
    margin-bottom: -10px;
    margin-top: 10px;
    margin-right: 8px;
  }
  .card-sale-price {
    font-size: 28px;
    color: #999999;
    text-decoration: line-through;
  }
  .card-btn {
    background-color: #feb041;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 25px;
    width: 180px;
    height: 52px;
    justify-content: center;
    margin-left:15px;
  }
  .card-btn-text {
    color: #FFFFFF;
    font-size: 25px;
    text-align: center;
  }
  
  .card-btn:active {
    background-color: #ce8927;
  }
  
  .list {
    width: 750px;
    background-color: #EFEFEF;
  }
  
  .label-text {
    color: #989898;
    font-size: 21px;
  }
  
  .status-bold {
    font-weight: bold;
  }
  
  .change-width {
    width:220px;
    /*background-color: yellow;*/
    /*margin-left: 20px;*/
    
  }
  
  .shif-left {
    /*background-color: red;*/
    /*margin-left: 100px;*/
    text-align: center;
  }
  
  .label-width {
    width: 110px;
    /*background-color: blue;*/
  }
  
  .b-border {
    border-width: 2px;
    width: 680px;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #f1f0f0;
  }
  
  .add-marg {
    margin-top: 15px;
  }
  
  .g-color {
    color:#366b36;
  }
  
  .add-pad-border {
    padding-bottom: 10px;
  }
  
   .end-margin {
    margin-bottom: 20px;
  }

</style>
