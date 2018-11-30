<template>
  <div>
      <scroller class="scrolller">
          <div class="list">
              <div class="card-sync"  style="flex:1">
                  <div class="group">
                 <text class="heading-sync">Details</text>
                 
               </div>
               <div class="head-details" style="flex:1;">
            
                       <div  class="group1" style="flex-direction:column">
          <text class="heading-sync1">34</text>
          <text class="heading-sync2">Total No of Files</text>
               </div>
                       <div class="group1" style="flex-direction:column">
          <text class="heading-sync1">1.2 GB</text>
          <text class="heading-sync2">Total Size of Files</text>
               </div>
                       <div class="group">     
                 <!-- <div class="card-sync-btn1">
        <text class="card-sync-btn-text" >Sync All</text>
        </div> -->

        <div  v-if="platform !== 'Web'"class="btn-space" style=" flex-direction:row;;padding-top:10px;padding-bottom:10px;">
                <div class="box md-btn-width-sync" >
                    <div class="md-custom-btn btn-color">
                        <!-- <image class="btn-icon-size" src="../../../web/assets/arrow_back_white.png"></image> -->
                        <text class="md-btn-label ">Sync All</text>
                    </div>
                </div>
            </div>
               </div>
               </div>
               <div class="group card-syncs">
               <div class="card-sync-details"  style="flex:1" >
                   <div class="card-sync">
                       <div class="card-sync-header wx-spce" >
                          <div>  <text class="card-sync-heading-sync-text">Proposals</text></div>
                           <div >  <text  class="card-sync-heading-sync-text-right">Synced</text></div>
                       </div>
                        <div class="card-sync-header1 wx-spce">
                          <div>  <text class="card-sync-heading-sync-text-sub">0</text></div>
                           <div >  <text  class="card-sync-heading-sync-text-sub">1.2GB</text></div>
                       </div>
                       <div class="card-sync-header1 wx-spce">
                          <div>  <text class="card-sync-heading-sync-text-right">No of Files</text></div>
                           <div >  <text  class="card-sync-heading-sync-text-right">Size</text></div>
                       </div>
                   </div>
                    
               </div>

                 <div class="card-sync-details" style="flex:1">
                   <div class="card-sync" >
                       <div class="card-sync-header wx-spce" >
                          <div>  <text class="card-sync-heading-sync-text">CFR pending</text></div>
                                 <div class="card-sync-btn-stop">
        <text class="card-sync-btn-stop-text" >Stop</text>
        </div>
                       </div>
                       <div class="card-sync-header1 wx-spce">
                          <div>  <text class="card-sync-heading-sync-text-right">Progress Bar</text></div>
                          
                       </div>
                    
                       
                   </div>
                  
               </div>

                 <div class="card-sync-details"  style="flex:1">
                   <div class="card-sync">
                       <div class="card-sync-header wx-spce" >
                          <div>  <text class="card-sync-heading-sync-text">Documents Pending</text></div>
                                          <div class="card-sync-btn1">
        <text class="card-sync-btn-text" >Sync</text>
        </div>
                       </div>
                        <div class="card-sync-header1 wx-spce">
                          <div>  <text class="card-sync-heading-sync-text-sub">16</text></div>
                           <div >  <text  class="card-sync-heading-sync-text-sub">1.2GB</text></div>
                       </div>
                       <div class="card-sync-header1 wx-spce">
                          <div>  <text class="card-sync-heading-sync-text-right">No of Files</text></div>
                           <div >  <text  class="card-sync-heading-sync-text-right">Size</text></div>
                       </div>
                   </div>
                    
               </div>

                 <div class="card-sync-details" style="flex:1">
                   <div class="card-sync" >
                       <div class="card-sync-header wx-spce">
                          <div>  <text class="card-sync-heading-sync-text">Payment Pending</text></div>
                                                       <div class="card-sync-btn1">
        <text class="card-sync-btn-text" >Sync</text>
        </div>
                       </div>
                        <div class="card-sync-header1 wx-spce">
                          <div>  <text class="card-sync-heading-sync-text-sub">4</text></div>
                           <div >  <text  class="card-sync-heading-sync-text-sub">10 Kb</text></div>
                       </div>
                       <div class="card-sync-header1 wx-spce">
                          <div>  <text class="card-sync-heading-sync-text-right">No of Files</text></div>
                           <div >  <text  class="card-sync-heading-sync-text-right">Size</text></div>
                       </div>
                   </div>
                   
               </div>
              
               </div>
               <!-- <div class="group" style="flex:1" v-if="deviceWidth > 959">
                    <text class="heading-sync">Sync History </text>
                    <div style="flex:1" class="table">
                        <div class="table-header" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto" >
                         <div style="flex:1" class="tbl-head"> <text class="table-heading-sync">Type</text></div>
                        <div style="flex:1" class="tbl-head">  <text class="table-heading-sync">Name</text></div>
                        <div style="flex:1" class="tbl-head">  <text class="table-heading-sync">Collected</text></div>
                        <div style="flex:1" class="tbl-head">  <text class="table-heading-sync">Size </text></div>
                          <div style="flex:1" class="tbl-head"> <text class="table-heading-sync">Last Sync</text></div>
                        </div>
                          <div class="table-column" style="flex-direction:row;flex:1;flex-wrap: nowrap;overflow: auto" v-for="(tbl,pi) in table" :key="pi" >
                         <div style="flex:1" class="tbl-det">  <text class="table-details">{{tbl.Type}}</text></div>
                         <div style="flex:1" class="tbl-det">  <text class="table-details">{{tbl.Name}}</text></div>
                          
                         <div style="flex:1" class="tbl-det">  <text class="table-details">{{tbl.Collected}} </text></div>
                        <div style="flex:1" class="tbl-det">   <text class="table-details">{{tbl.Size}}</text></div>
                         <div style="flex:1" class="tbl-det">  <text class="table-details">{{tbl.LastSync}}</text></div>
                        </div>
               </div>
               </div> -->
                    <div class="group" style="flex:1">
                       
                    <text class="heading-sync">Sync History</text>
                    <div class="table">
                          <div class="table-column-mob" v-for="(tbl,pi) in table" :key="pi" >
                          <text class="table-details-mob">Type:{{tbl.Type}}</text>
                          <text class="table-details-mob">Name:{{tbl.Name}}</text>
                          
                          <text class="table-details-mob">Collected:{{tbl.Collected}} </text>
                          <text class="table-details-mob">Size:{{tbl.Size}}</text>
                          <text class="table-details-mob">Last Sync:{{tbl.LastSync}}</text>
                        </div>
               </div>
               </div>
               
              </div>
          </div>
      </scroller>
  </div>
</template>
<script>
export default {
    created(){
   if (typeof WXEnvironment === 'object') {
        
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
      return this.deviceWidth
      }
    },
  data(){
      return{
          object: WXEnvironment,
           deviceWidth: '',         
          table:[
              {
               Type:'Proposals',
               Name:'MedicalReport.doc',
               Collected:'02:23 PM | 31/03/2016',
                Size:'	10 KB',
                LastSync:'06:37 PM | 29/03/2016'   
          },
                 {
               Type:'CFR ',
               Name:'MedicalReport.doc',
               Collected:'02:23 PM | 31/03/2016',
                Size:'	10 KB',
                LastSync:'06:37 PM | 29/03/2016'   
          },
                 {
               Type:'Document',
               Name:'MedicalReport.doc',
               Collected:'02:23 PM | 31/03/2016',
                Size:'	10 KB',
                LastSync:'06:37 PM | 29/03/2016'   
          },
                 {
               Type:'Proposals',
               Name:'MedicalReport.doc',
               Collected:'02:23 PM | 31/03/2016',
                Size:'	10 KB',
                LastSync:'06:37 PM | 29/03/2016'   
          },
                 {
               Type:'CFR',
               Name:'MedicalReport.doc',
               Collected:'02:23 PM | 31/03/2016',
                Size:'	10 KB',
                LastSync:'06:37 PM | 29/03/2016'   
          }
          ]
      }
  }
}
</script>
<style scoped>
  .scroller {
/*  
     background-color: #EFEFEF; */
 
  }
  
  .md-btn-width-sync {
        width: 100px;
    }
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        height: 40px;
        min-width: 88px;
        position: relative;
        cursor: pointer;
    }
    .btn-color {
        background-color: #3b371e;
    }
    .btn-space {
        justify-content: space-between
    }
    .md-btn-label {
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
    }

    .card-sync {

  margin-top: 20px;
  margin:20px;
  margin-bottom: 0px;
  background-color: #fff;
  border-radius: 5px;
  /* border-top:1px solid #d8d8d8 */
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
 
}
.heading-sync{
       margin-left:20px;
  font-size: 20px;
  margin-top: 25px;
  color: #565656;
  font-family:robotobold;
;
}
.heading-sync1{
    font-size: 26px;
    color: #9d9d9d;
    margin: 0px;
}
.heading-sync2{
    font-size: 14px;
    color: #565656;
    margin: 0px;
}


  /* .group {
  position: relative;
  margin-top: 10px;
  padding:20px;
}
.group1 {
  position: relative;
  margin-top: 25px;
  padding:20px;
} */
.head-details{
    flex-direction:row;
    justify-content: space-between;
}
.card-sync-btn1{
     background-color: #505050;

    margin-top: 5px;
    width: 60px;
    height: 30px;
    justify-content: center;
  
}
.card-sync-btn1{
     background-color: #505050;
  
    margin-top: 5px;
    width: 60px;
    height: 30px;
    justify-content: center;
  
}
.card-sync-btn-stop{
 
    margin-top: 5px;
    /* border: 1px solid red; */
      border-width: 1px;
    border-style: solid;
    border-color:red;
    width: 60px;
    height: 30px;
    justify-content: center;
  
}
 .card-sync-btn-text {
    color: #FFFFFF;
    font-size: 15px;
    text-align: center;
  }
  .card-sync-btn-stop-text {
    color: red;
    font-size: 15px;
    text-align: center;
  }
  
  .card-sync-header{
      flex-direction: row;
      flex-wrap: wrap;
     padding:10px;
     /* border-bottom:1px solid #d8d8d8 */
    border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-left-color: #fff;
border-right-color: #fff;
border-bottom-color: #d8d8d8;
  }
    .card-sync-header1{
      flex-direction: row;
      flex-wrap: wrap;
     padding:10px;
    
  }

  .wx-spce {
      justify-content: space-between;
  } 
      /* .card-syncs    {
    flex-direction:row;
} */
  .card-sync-heading-sync-text{
          font-family:robotobold;
    margin: 0;
    font-size: 15px;
      justify-content: left;
    align-items: left;
  }
  .card-sync-heading-sync-text-right{

    margin: 0;
    font-size: 15px;
    justify-content: right;
    align-items: right;
  }
   .card-sync-heading-sync-text-sub{
  font-family:robotobold;
;
    margin: 0;
    font-size: 20px;
  }
  .table{
      flex:1;
    
     border-width: 2px;
    border-style: solid;
    border-color: transparent;
      margin-top:20px;
  }
  .table-header{
      padding-top:10px;
         padding-bottom:10px;
      flex-direction:row;
      flex:1;
     background-color: #d8d8d8;
      
            border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-left-color: #fff;
border-right-color: #fff;
border-bottom-color: #ebebeb;
  }
  .table-column{
      flex-direction:row;
      flex:1;
         border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-left-color: #fff;
border-right-color: #fff;
border-bottom-color: #d8d8d8;
      
  }
  /* .table-heading-sync{
      font-size:30px;
       text-align: center;
  
  } */
  .table-details{
      font-size:20px;
          text-align: center;
          font-weight:medium;
      padding:20px;
      padding-left:0px;
      color:#565656;
  }
  .tbl-head{
      flex:1;
       justify-content: center;
       
  }
   .tbl-det{
      flex:1;
       justify-content: center;
  }
  /*MEDIA*/
 .card-syncs    {
    flex-direction:column;
}

 .table-heading-sync{
      font-size:15px;
            text-align: center;
 
   
  }

  .table-column-mob{
 flex-direction:column;
  border-width: 2px;
    border-style: solid;
    border-color: transparent;
 margin-top:10px;

  }
  .table-details-mob{
     font-size: 15px;
      font-weight:medium;
      border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-left-color: #fff;
border-right-color: #fff;
border-bottom-color: #d8d8d8;
    padding: 20px;
    color: #565656
  }
  .group{
      padding:12px;
  }
  .group1{
      padding:0px;
      justify-content: center;
  }

/* @media only screen and (max-width: 959px) {
    .card-syncs    {
    flex-direction:column;
}

 .table-heading-sync{
      font-size:15px;
            text-align: center;
 
   
  }

  .table-column-mob{
 flex-direction:column;
  border-width: 2px;
    border-style: solid;
    border-color: transparent;
 margin-top:10px;

  }
  .table-details-mob{
     font-size: 15px;
      font-weight:medium;
      border-width: 1px;
border-style: solid;
border-top-color: #fff;
border-left-color: #fff;
border-right-color: #fff;
border-bottom-color: #d8d8d8;
    padding: 20px;
    color: #565656
  }
  .group{
      padding:12px;
  }
  .group1{
      padding:0px;
  }

}   */
</style>


