<template>
  <div>

    <!-- <div class="tabbar">
      <div class="tab active" :style="{ left: activeTab * 150 + 'px'}"></div>
      <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
        <image class="icon" :src="tab.icon"></image>
        <text class="title">{{tab.title}}</text>
      </div>
    </div> -->
    <div class="tab-panels" :style="{ left: activeTab * -750 + 'px'}">
      <div class="panel" v-for="(panel, pi) in panels" :key="pi">
       <div class="container">
      <div class="card" v-for="(list, index) in panel.content">
        <div class="row">
          <div class="card-header">
            <text class="header-text">{{list.Name}}</text>
          </div>
        </div>

      </div>
       </div>
       
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    created(){
      this.$store.commit('SET_PAGE_TITLE', 'CFR');
    },
    data () {
      return {
        activeTab: 0,
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
      panels () {
        return this.tabs.map(tab => ({ content: tab.productList }))
      }
    }
  }
</script>

<style scoped>
  .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
  .tabbar {
    flex-direction: row;
    background-color: #FF4563;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(218, 59, 85);
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
    font-family:robotoregular;
  }
  .tab-panels {
    position: relative;
 
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    background-color: #F5F5F5;
    transition: left 0.2s ease-in-out;
  }
  .panel {
    /* justify-content: center; */
    /* align-items: center; */
  }
  .content {
    font-size: 100px;
    color: #707070;
    font-family:robotoregular;
  }
  /*  RESPONSIVE CARD CSS*/
  .container{
    flex-direction:column;
  }
  .card{
     margin: 20px;
  margin-top: 20px;
  margin-bottom: 0px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
}
.row{
  flex-direction:row;
   flex-wrap: wrap;
}
</style>
