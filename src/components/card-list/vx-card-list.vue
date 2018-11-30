<template>
    <div class="list-card-wrapper">
      <div class="list-card-container">
        <!--Circle-->
        
        <div>
          <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzix6zlJLz7MDcz907yfj-wRJnZ1FvktyrFmfJYuEPPOV7jVv52g" class="list-card-profile"/>
        </div>
        <div class="top-icon-pos">
          <image class="list-card-icon" src="https://www.materialui.co/materialIcons/navigation/more_vert_grey_192x192.png"/>
        </div>
        <div class="list-card-small-circle"></div>
        
        <!--icons row-->
        <div class="list-card-content-wraper lst-crd-top-btm-mrgn" style="flex-direction:column;align-items:center">
          <text class="list-crd-font">Andrew Hoyle</text>
          <text class="list-card-small-fnt">Active</text>
        </div>
        <div class="list-card-flx-row" >
          <!--icon 1-->
          <div class="list-card-content-wraper icon-bdr-rdus" style="">
            <image class="list-card-icon" src="https://www.materialui.co/materialIcons/social/person_grey_192x192.png" />
          </div>
          <div class="bdr"></div>
          <!--icon 2-->
          <div class="list-card-content-wraper icon-bdr-rdus" style="">
             <image class="list-card-icon" src="https://www.materialui.co/materialIcons/communication/email_grey_192x192.png" />
          </div>
        </div>
        
        
      </div>
    </div>
</template>

<script>
  
</script>

<style>
  .list-card-wrapper {
    background-color: #FFF;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
  }
  .list-card-container {
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
    align-items: center;
  }
  .list-card-profile {
    height: 120px;
    width: 120px;
    border-radius: 60px;
    /*background-color: #3a5a8e;*/
  }
  .list-card-flx-row {
    flex-direction: row;
    justify-content: space-between;
    /*background-color: gray;*/
    /*width: 700px;*/
    width: 220px;
  }
  .list-card-content-wraper {
    padding: 10px;
  }
  .list-card-icon {
    width: 60px;
    height: 60px;
  }
  
  .list-crd-font {
    font-size: 30px;
    font-weight : bold;
  }
  .lst-crd-top-btm-mrgn {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .icon-bdr-rdus {
    border-radius: 50%;
  }
  .bdr {
    border-width: 1px;
    border-style: solid;
    border-color: #e2e2e2;
    height: 80px;
  }
  
  .top-icon-pos {
    position: absolute;
    top: 10px;
    right: -40px;
  }
  
  .list-card-small-circle {
    height: 35px;
    width: 35px;
    background-color: green;
    border-radius: 50%;
    position: absolute;
    top:50px;
    left: 40px;
    border-width: 6px;
    border-style: solid;
    border-color: #FFF;
  }
  
  .list-card-small-fnt {
    font-size: 22px;
    color: #64965a;
    text-align:center;
    font-weight:bold;
  }
</style>
