<template>
        <div  class="master-page-wrapper">
        
          <scroller class="scroller">
                    <div class="row-tem"  >
            
                        <div class="col " style="flex: 1;" >
                        <!-- <div class="box "> -->
                            <div class="container-card-lok shadow ">
                                <div class="help-desk-row" style="justify-content: space-between; background-color:white;padding-bottom:6px; padding-top:1px;">
                                    <text class="help-char-med selectbor" >Online Help Desk</text>
                                </div>
                                <text class="help-char-second" style="justify-content: start; background-color:white;  padding-top:10px;">For online helpdesk support please call uson the number.given below</text>
                                <text class="help-char-med " style="padding-top: 10px;">Call on us</text>
                                <div class="row-no-space" style="padding-bottom:2px;">
                                        <text class="help-char-second" style="padding-top: 5px;">180030008181</text>
                                        <text class="help-char-second" style="padding: 4px 4px 4px 3px; margin-left:8px;top: 0px;background-color: rgb(228, 222, 222);border-radius: 3px;background-color:rgb(228, 222, 222); ">Toll Free</text>
                                </div>
                                
                            </div>
                        <!-- </div>  -->
                        </div>
                
                        <div class="col " style="flex: 1;"  >
                                <!-- <div class="box "> -->
                                    <div class="container-card-lok shadow">
                                    <div class="row-space" style="padding-bottom:4px; padding-top:1px;">
                                        <text class="help-char-med selectbor" >Send mail to</text>
                                        <image class="img img-space-right img-space-top" src="https://www.materialui.co/materialIcons/alert/add_alert_black_192x192.png"></image>
                                    </div>
                                        <text class="help-char-second" style="justify-content: start; background-color:white;  padding-top:0px; padding-bottom:6px;">In case of an escalation or where queries are not resolved within reasonable timelines, you can get in touch with Jessy Barot.</text>
                                        <text class="help-char-med " style="padding-bottom:5px;">Email us on</text>
                                        <div class="row-no-space" style="padding-bottom:2px;">
                                            <text class="help-char-second" >jessy.barot@ada.com</text>
                                            <image class="img-msg img-space-top" style=" margin-left: 5px;" src="https://www.materialui.co/materialIcons/communication/email_black_192x192.png"></image>
                                        </div>
                                        
                                    </div>
                                <!-- </div>  -->
                            </div>
                  </div>
                   <!-- main row end-->
    
                <div class="col " style="flex: 2;background-color: #f7f7f7;"  >
                    <!-- <div class="box  "> -->
                        <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
                            <div class="container-card-lok shadow  ">
                                <div class="help-desk-row" style="justify-content: space-between; background-color:white;padding-bottom:6px; padding-top:1px;">
                                    <text class=" help-char-med selectbor" >FAQs</text>
                                    <image class="img img-space-right img-space-top"  src="https://www.materialui.co/materialIcons/action/question_answer_grey_192x192.png"></image>
                                </div>
                                <div >
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showAddress = !showAddress">
                                        <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab1}}</text>
                                        <div class="help-pad-show"><image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image> </div>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showAddress = !showAddress">
                                        <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab1}}</text>
                                        <div class="help-pad-show"><image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image> </div>
                                    </div>

                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showAddress==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-nor" style="padding-bottom:8px;">1. {{num.listtab1ans1}}</text></div>
                                            <text class="text-head" >{{num.listque2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab1ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">2.{{num.listtab1ans3}}</text></div>
                                    </div>
                                </div>
                                <!-- <div>
                                   <div v-if="platform !== 'Web'" class="row-space help-padding-left-right  add-border2 mouse-pointer" @click="showAssignment = !showAssignment">
                                        <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab2}}</text>
                                        <div class="help-pad-show"><image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image></div>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right  add-border2 mouse-pointer" @click.native="showAssignment = !showAssignment">
                                        <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab2}}</text>
                                    <div class="help-pad-show"> <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image></div>
                                    </div>
                                    
                                    
                                    <div class="add-border2 mouse-pointer help-d-show-pad" v-if="showAssignment==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab2ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >2.{{num.listtab2img/product-icons/plan_view_doc.jpgans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">3.{{num.listtab2ans3}}</text></div>
                                            <text class="text-head" >{{num.listque2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab2ans4}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">2.{{num.listtab2ans5}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">3.{{num.listtab2ans6}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">4.{{num.listtab2ans7}}</text></div>
                                            <text class="text-head" >{{num.listque3}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" >1.{{num.listtab2ans8}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" >2.{{num.listtab2ans9}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">3.{{num.listtab2ans10}}</text></div>
                                    </div>
                                </div> -->
                                <div >
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showBill = ! showBill">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab3}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showBill = ! showBill">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab3}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showBill==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">1.{{num.listtab3ans1}}</text></div>
                                            <text class="text-head" >{{num.listque2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab3ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">2.{{num.listtab3ans3}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">3.{{num.listtab3ans4}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">4.{{num.listtab3ans5}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showCancellation = !showCancellation">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab4}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showCancellation = !showCancellation">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab4}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showCancellation==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab4ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">2.{{num.listtab4ans2}}</text></div>
                                            <text class="text-head" >{{num.listque2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab4ans3}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">2.{{num.listtab4ans4}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showDuplicate = !showDuplicate">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab5}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showDuplicate = !showDuplicate">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab5}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showDuplicate==true">
                                            <text class="help-char-que" >{{num.listtab5que1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">1.{{num.listtab5ans1}}</text></div>
                                            <text class="text-head" >{{num.listtab5que2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">1.{{num.listtab2ans2}}</text></div>
                                            <text class="text-head" >{{num.listque3}}</text>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-head" style="padding-bottom:8px;">1.{{num.listtab1ans3}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showFund = ! showFund">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab6}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showFund = ! showFund">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab6}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showFund==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" >1.{{num.listtab6ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">2.{{num.listtab6ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">3.{{num.listtab6ans3}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showRedirection = !showRedirection">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab7}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showRedirection = !showRedirection">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab7}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showRedirection==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab7ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor">2.{{num.listtab7ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">{{num.listtab7ans3}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showNomination = !showNomination">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab8}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showNomination = !showNomination">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab8}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showNomination==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab8ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >2.{{num.listtab8ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">3.{{num.listtab8ans3}}</text></div>
                                            <text class="text-head" >{{num.listque2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab8ans4}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">2.{{num.listtab8ans5}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">3.{{num.listtab8ans6}}</text></div>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">4.{{num.listtab8ans7}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">5.{{num.listtab8ans8}}</text></div>
                                            <text class="text-head" >{{num.listque3}}</text>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-head">1.{{num.listtab8ans9}}</text></div>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-head">2.{{num.listtab8ans10}}</text></div>
                                          <div class="help-d-show-ans-pad help-d-pad-min-ans">  <text class="help-char-ans-head">3.{{num.listtab8ans11}}</text></div>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-head">4.{{num.listtab8ans12}}</text></div>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-head" style="padding-bottom:8px;">5.{{num.listtab8ans13}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showCorrection= !showCorrection">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab9}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showCorrection= !showCorrection">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab9}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showCorrection==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-nor" style="padding-bottom:8px;">{{num.listtab9ans1}}</text></div>
                                            
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showReinstatment= !showReinstatment">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab10}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showReinstatment= !showReinstatment">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab10}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showReinstatment==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                        <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-nor" style="padding-bottom:8px;" >{{num.listtab10ans1}}</text></div>
                                            <text class="text-head" >{{num.listque2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab10ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">2.{{num.listtab10ans3}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">3.{{num.listtab10ans4}}</text></div>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-head">4.{{num.listtab10ans5}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">5.{{num.listtab10ans6}}</text></div>
                                    </div>
                                </div>
                                <div class="">
                                    <div  v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showSurrnders = !showSurrnders">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab11}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div  v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showSurrnders = !showSurrnders">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab11}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showSurrnders==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab11ans1}}</text></div>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-nor" >2.{{num.listtab11ans2}}</text></div>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-nor" style="padding-bottom:8px;">3.{{num.listtab11ans3}}</text></div>
                                            <text class="text-head" >{{num.listque2}}</text>
                                           <div class="help-d-show-ans-pad help-d-pad-min-ans"> <text class="help-char-ans-head">1.{{num.listtab11ans4}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">2.{{num.listtab11ans5}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showLoans = ! showLoans">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab12}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showLoans = ! showLoans">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab12}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showLoans==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab12ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >2.{{num.listtab12ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >3.{{num.listtab12ans3}}</text></div>
                                            <text class="text-head" style="padding-bottom:8px;">{{num.listtab12head}}</text>
                                            <text class="text-head" >{{num.listque2}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab12ans5}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">2.{{num.listtab12ans6}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">3.{{num.listtab12ans7}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">4.{{num.listtab12ans8}}</text></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click="showTopups = !showTopups">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab13}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                     <div v-if="platform === 'Web'" class="row-space help-padding-left-right help-bor-show-bot mouse-pointer" @click.native="showTopups = !showTopups">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab13}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showTopups==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab13ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">2.{{num.listtab13ans2}}</text></div>
                                            
                                    </div>
                                </div>
                                <div>
                                    <div v-if="platform !== 'Web'"  class="row-space help-padding-left-right add-border2 mouse-pointer" @click="showMarket= !showMarket">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab14}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div v-if="platform === 'Web'"  class="row-space help-padding-left-right add-border2 mouse-pointer" @click.native="showMarket= !showMarket">
                                            <text class="help-char-med" style="justify-content: start;   padding-top:10px; padding-bottom: 10px;">{{num.listtab14}}</text>
                                        <image class="help-plus-icon"  src="https://www.materialui.co/materialIcons/content/add_black_192x192.png"></image>
                                    </div>
                                    <div class="help-bor-show-top mouse-pointer help-d-show-pad" v-if="showMarket==true">
                                            <text class="help-char-que" >{{num.listqus1}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >1.{{num.listtab14ans1}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" >2.{{num.listtab14ans2}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-nor" style="padding-bottom:8px;">3.{{num.listtab14ans3}}</text></div>
                                            <text class="text-head" >{{num.listque3}}</text>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">1.{{num.listtab14ans4}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">2.{{num.listtab14ans5}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head">3.{{num.listtab14ans6}}</text></div>
                                            <div class="help-d-show-ans-pad help-d-pad-min-ans"><text class="help-char-ans-head" style="padding-bottom:8px;">4.{{num.listtab14ans7}}</text></div>
                                    </div>
                                </div>
                        
                                <text class="help-char-second-sideTab "></text>
                                <text class="help-char-second"></text>
                                
                            </div>
                        </div>
                    <!-- </div>  -->
                </div>
            </scroller>
        </div>
    </template>

<script>
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'

    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Help desk');

            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                this.deviceWidth = WXEnvironment.deviceWidth || unknown
            }
        },
        props: {
            listItems: {
                type: Array
            }

        },

        data: function() {
            return {
                platform: invalid,
                deviceWidth: invalid,
                showAddress: false,
                showAssignment: false,
                showBill: false,
                showCancellation: false,
                showDuplicate: false,
                showFund: false,
                showRedirection: false,
                showNomination: false,
                showCorrection: false,
                showReinstatment: false,
                showSurrnders: false,
                showLoans: false,
                showTopups: false,
                showMarket: false,
                headerName: 'Help Desk ',
                numArray: [{
                        listqus1: 'Q. What are the requirements to process ?',
                        listque2: 'Before forwarding the same to the HO place',
                        listque3: 'Comman Error',

                        listtab1: 'Address Changes',
                        listtab1ans1: 'A formal request from the Policy owner intimating the new address with pin code and phone number, if available',
                        listtab1head: 'Before forwarding the same to the HO place',
                        listtab1ans2: 'Contact Number & pin code should be mentioned',
                        listtab1ans3: 'Collect the new phone number if available',

                        listtab2: 'Assignment',
                        listtab2ans1: 'Assignment Format',
                        listtab2ans2: 'Notice of Assignment',
                        listtab2ans3: 'Policy Document',
                        listtab2head1: 'Before forwarding the same to the HO place',
                        listtab2ans4: 'Ensure that the assignment forms is duly filled and witnessed.',
                        listtab2ans5: 'Place and date field should be filled.',
                        listtab2ans6: 'Policy DocumentIf the policy owner signs in vernacular, a vernacular declaration should be signed.',
                        listtab2ans7: 'Please enclose the Policy Document along with the Assignment format and Notice of Assignment.',
                        listtab2head2: 'Common Errors',
                        listtab2ans8: 'Notice of Assignment enclosed',
                        listtab2ans9: 'Assignment is not witnessed',
                        listtab2ans10: 'Policy document not closed',

                        listtab3: 'Bills Changes',
                        listtab3ans1: 'A formal request mentioning the new frequency of the payment',
                        listtab3ans2: 'Ensure that contract in force',
                        listtab3ans3: 'Mode change to verify frequency can be done only in cases where paid to date coincides the paid to anniversary',
                        listtab3ans4: 'Mode change from Quarterly to Half Yearly can be done only in cases where paid to date with policy anniversary / 2 quarterly premiums are paid in the policy year.',
                        listtab3ans5: 'Mode change from Yearly to Half-Yearly/ Quarterly or Half-Yearly to Quarterly are not to be encouraged',

                        listtab4: 'Cancellations',
                        listtab4ans1: 'A formal request mentioning the new frequency of the payment',
                        listtab4ans2: 'Policy Document',
                        listtab4ans3: 'Request Letter should be duly signed & contract number should be mentioned',
                        listtab4ans4: 'If the Policy owner signs in vernacular , a vernacular should be mentioned',

                        listtab5: 'Duplicate Policy',
                        listtab5que1: 'Q.In case of lost in transit , check verify the date on which the policy is dispatched',
                        listtab5ans1: 'In case of courier delivery note down the Air Way Bill from My CSM check with the local branch of the courier about the status.',
                        listtab5que2: 'Q.What are the requirements to process ?',
                        listtab5ans2: 'Request from the customer in the prescribed format (Lost / Lost in Transit).',
                        listtab5ans3: 'Duplicate policy requested for in a letter which is not acceptable.',

                        listtab6: 'Fund Switch',
                        listtab6ans1: 'The source fund and the target fund amount/ percentage/ units has to be clearly mentioned.',
                        listtab6ans2: 'The total percentage corresponding to a particular source fund should be 100%',
                        listtab6ans3: 'The form should be signed by CE/MST and the branch seal affixed Before forwarding the Fund Switch request read the request and satisfy yourself about what the customer is trying to convey',

                        listtab7: 'Primimum Redirection',
                        listtab7ans1: 'The total percentages of all funds should be 100%',
                        listtab7ans2: 'The form should be signed by CE/MST and the branch seal affixed',
                        listtab7ans3: 'Before forwarding the request read the request and yourself about what the customer is trying to convey',

                        listtab8: 'Nomination Changes',
                        listtab8ans1: 'Nomination change form',
                        listtab8ans2: 'Notice of Nomination',
                        listtab8ans3: 'Policy Document',
                        listtab8ans4: 'Ensure that the Nominee change request is signed by the Policy Owner.',
                        listtab8ans5: 'It should be duly witnessed.',
                        listtab8ans6: 'If the policy owner signs in vernacular, a vernacular declaration should be signed.',
                        listtab8ans7: 'Please enclose the Policy Document along with the Nomination change format and Notice of Nomination.',
                        listtab8ans8: 'In case of Minor Nominee an Appointee has to be mentioned.',
                        listtab8ans9: 'Nomination change is requested in a letter which is not acceptable.',
                        listtab8ans10: 'Notice of nomination not enclosed.',
                        listtab8ans11: 'Nomination is not witnessed.',
                        listtab8ans12: 'Policy document not enclosed.',
                        listtab8ans13: 'Age of the nominee not mentioned',

                        listtab9: 'Correction In Policy',
                        listtab9ans1: 'In case of correction in name/nominee name etc proper proof to substantiate the request should be enclosed',

                        listtab10: 'Reinstatement',
                        listtab10ans1: 'Declaration of state of health form',
                        listtab10ans2: 'Height and weight & occupation is filled.',
                        listtab10ans3: 'DSH should be properly filled and all the questions answered.',
                        listtab10ans4: 'DSH should be witnessed.',
                        listtab10ans5: 'If the policy owner signs in vernacular, a vernacular declaration should be signed.',
                        listtab10ans6: 'In case of minor life policies the particulars filled in DSH should be that of Life Assured and declaration should be signed by both Life Assured and Proposer.',

                        listtab11: 'Surrenders Not Allow For LPR,LPS,LBS',
                        listtab11ans1: 'A formal request letter for Surrender.',
                        listtab11ans2: 'Policy document.',
                        listtab11ans3: 'Policy should have completed at least three years from the RCD- not applicable for Unit Linked and Single premium contracts.',
                        listtab11ans4: 'Request letter should be duly signed & contract number mentioned',
                        listtab11ans5: 'If the policy owner signs in vernacular, a vernacular declaration should be signed.',

                        listtab12: 'Loans',
                        listtab12ans1: 'Loan Application & Receipt of Loan advance duly filled and witnessed.',
                        listtab12ans2: 'Policy document.',
                        listtab12ans3: 'At least three full years premium should have been paid- not applicable for single premium contracts.',
                        listtab12head: 'Loan eligibility Only for CPP,WLP,SEP,DEP,DES',
                        listtab12ans5: 'Loan application should be duly filled, signed and witnessed.',
                        listtab12ans6: 'If the policy owner signs in vernacular the declaration should be signed by a English knowing person.',
                        listtab12ans7: 'Loan receipt should be obtained in which the policy owner should sign on a revenue stamp.',
                        listtab12ans8: 'In case of a minor life assured, a declaration from the proposer stating that the loan is utilized for the benefit of the life assured has to be obtained',

                        listtab13: 'Top Ups',
                        listtab13ans1: 'In case of cash receipt please fax / scan the top up request and e-mail the same to customer service mail ID, as this would avoid delays in processing',
                        listtab13ans2: 'Before forwarding the top up request by courier/ e-mail check if the fund option is mentioned clearly & the total adds up to 100 %.',

                        listtab14: 'Market Returns Plan Surrender',
                        listtab14ans1: 'In case of part surrender the amount has to be mentioned in Rupees or as a percentage.',
                        listtab14ans2: 'Customer has to clearly mention the Fund from which the withdrawal has to made.',
                        listtab14ans3: 'Branches are advised to enclose a DSH along with the request so that the delay arising due to a requirement for the same can be avoided.',
                        listtab14ans4: 'Part withdrawal is mentioned as profit booking.',
                        listtab14ans5: 'Withdrawal is mentioned in units which are not permitted. It can be mentioned in rupees or as a percentage of funds.',
                        listtab14ans6: 'Partial withdrawal requests on Regular premium contracts where Fund holdings are less than sum assured',
                        listtab14ans7: 'Partial withdrawal requests on Single premium contracts issued after 20th Feb. 2005 within the first policy year.',


                    }


                ],
                sideTab: [{
                    listTitle1: 'Traditional Group Employee Benfit Plan (MBR-Par)',
                    listTitle2: 'How this plan works',
                    buttonDesc: 'Product Desription',
                    buttonDesc2: 'Product Leafteats',
                    buttonDesc3: 'FAB Sheet',
                    buttonDesc4: 'Product Working PPT'

                }]

            }
        },

        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            }

        },
        gotoJump() {
            navigator.push({
                url: createURL('/pcard-help'),
                animated: 'true'
            })
        }
    }
</script>

<style>
    .scroller {
        /* height: 2000px; */
    }
    
    .container-card-lok {
        background-color: #FFF;
        padding: 20px;
        /* align-items: center; */
        /* margin-bottom: 10px; */
        margin: 10px 5px 5px 10px;
        border-radius: 3px;
    }
    
    .robotoregular {
        font-family: robotoregular;
    }
    
    .col {
        display: flex;
        flex-direction: column;
        background-color: #f7f7f7;
    }
    
    .topheader {
        font-size: 27px;
        padding-left: 15px;
        padding-top: 20px;
        color: black;
    }
    
    .help-desk-row {
        display: flex;
        flex-direction: row;
        background-color: white;
    }
    
    .row-tem {
        display: flex;
        flex-direction: column;
        background-color: white;
    }
    
    .row-side-tab {
        display: flex;
        flex-direction: row;
        background-color: white;
        padding-top: 9px;
        padding-bottom: 9px;
        flex: 1;
    }
    
    .card-help {
        background-color: #ffffff;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        /* margin-bottom: 20px; */
        margin: 5px 5px 20px 5px;
        border-radius: 4px;
        /*padding: 10px;*/
        justify-content: center;
    }
    
    .padding-left-right {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .img-side-tab {
        width: 33px;
        height: 33px;
        margin-right: 3px;
    }
    
    .imgtab {
        width: 700px;
        height: 250px;
        padding: 2px 10px 2px 20px;
    }
    
    .size {
        height: 350px;
    }
    
    .slider {
        position: relative;
    }
    
    .shadow {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    }
    
    .help-char-second {
        display: flex;
        color: #6e6d6d;
        font-size: 24px;
        padding: 0px 8px 6px 13px;
    }
    
    .help-char-second-sideTab {
        display: flex;
        color: #6e6d6d;
        font-size: 24px;
        font-weight: bold;
        padding: 3px 8px 3px 13px;
        font-family: robotoregular;
    }
    
    .mouse-pointer {
        cursor: pointer;
    }
    
    .add-border {
        border-width: 1px;
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #fff;
        border-left-color: #fff;
        border-bottom-color: #e7e7e7;
    }
    
    .add-border2 {
        border-width: 1px;
       
        border-style: solid;
        border-top-color: #D9D9D9;
        border-right-color: #D9D9D9;
        border-left-color: #D9D9D9;
        border-bottom-color: #D9D9D9;
    }
    .help-bor-show-bot {
        border-width: 1px;
        border-style: solid;
        border-top-color: #D9D9D9;
        border-right-color: #D9D9D9;
        border-left-color: #D9D9D9;
        border-bottom-color: #fff; 
    }
    .help-bor-show-top {
        border-width: 1px;
        border-style: solid;
        border-bottom-color: #D9D9D9;
        border-right-color: #D9D9D9;
        border-left-color: #D9D9D9;
        border-top-color: #fff; 
    }
    .add-border1 {
        border-width: 1px;
        /* border-radius: 3px; */
        border-style: solid;
        border-top-color: #fff;
        border-right-color: #D9D9D9;
        border-left-color: #D9D9D9;
        border-bottom-color: #D9D9D9;
    }
    
    .card-help-border {
        border-width: 1px;
        border-style: solid;
        border-color: rgba(86, 86, 86, 0.47);
    }
    
    .selectbor {
        border-bottom: 3px solid;
        display: inline-table;
    }
    
    .card-help-border:hover {
        border-color: #4589e8;
        cursor: pointer;
    }
    
    .tab-flex-row {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .tab-flex-row1 {
        flex-direction: row;
        flex-wrap: nowrap;
    }
    
    .tab-font-size {
        font-size: 25px;
    }
    
    .tab-text-font-size {
        font-size: 16px;
        color: gray;
        padding-top: 13px;
        font-family: robotoregular;
    }
    
    .flex-row {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .nx-flex-column {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .nx-flex-bt-marg {
        margin-bottom: 20px;
    }
    
    .flex-direction-change {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .flex-column {
        flex-direction: column;
    }
    
    .flex-row {
        flex-direction: row;
    }
    /* Help Desk Tab CSS */
    
    .row-space {
        display: flex;
        flex-direction: row;
        background-color: white;
        justify-content: space-between;
    }
    
    .row-no-space {
        display: flex;
        flex-direction: row;
        background-color: white;
    }
    
    .add-border2 {
        border-width: 1px;
        border-style: solid;
        border-top-color: #D9D9D9;
        border-right-color: #D9D9D9;
        border-left-color: #D9D9D9;
        border-bottom-color: #D9D9D9;
    }
    
    /* .row-space:active {
        background-color: #3b371e;
    } */
    
    .help-char-med {
        font-size: 24px;
        color: black;
        font-weight: bold;
        margin-left: 20px;
        padding-top: 10px;
    }
    
    /* .help-char-med:active {
        color: white;
    } */
    
    .help-char-que {
        font-size: 25px;
        font-weight: bold;
        padding: 8px 0px 5px 0px;
        margin: 5px 0px 2px 8px;
        font-family: robotoregular;
    }
    
    .help-char-ans-nor {
        font-size: 24px;
        margin: 5px 0px 2px 8px;
        font-family: robotoregular;
    }
    
    .text-head {
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 5px;
        margin: 5px 0px 2px 15px;
        font-family: robotoregular;
    }
    
    .help-char-ans-head {
        font-size: 24px;
        margin: 5px 0px 2px 18px;
        font-family: robotoregular;
    }
    
    .selectbor {
        border-bottom: 3px solid;
        display: inline-table;
    }
    
    .img-space-right {
        margin-right: 5px;
    }
    
    .img-space-top {
        margin-top: 2px;
    }
    
    .img {
        width: 50px;
        height: 50px;
    }
    
    .help-padding-left-right {
        padding-right: 10px;
        padding-left: 10px;
    }
    
    .help-plus-icon {
        width: 25px;
        height: 25px;
        margin: 15px 10px 5px 0px;
        top: 3px;
    }
    
    .img-msg {
        width: 22px;
        height: 22px;
        top: -3px;
    }
    .help-d-show-pad {
        padding: 12px;
    }
    .help-d-show-ans-pad {
        padding-left: 20px;
    }
    .help-d-pad-min-ans {
        padding-bottom: 5px;
        padding-top: 5px;
    }
    /* Medium Device Laptops and Desktops */
     /* iphone */
    
    @media (min-width: 320px) {
         .help-plus-icon {
            width: 20px;
            height: 20px;
            margin: 15px 10px 5px 0px;
            top: 8px;
        }
        .flex-row {
            flex-direction: column;
        }
        .item-alignment {
            align-items: left;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: nowrap;
        }
        .flex-row-content-hidden {}
        .card-help {
            background-color: #ffffff;
            padding-top: 25px;
            padding-bottom: 25px;
            padding-left: 15px;
            padding-right: 15px;
            margin: 5px 5px 20px 5px;
            border-radius: 4px;
            /* padding-right: 10px;
                    padding-left: 10px;
                    padding-bottom: 10px; */
            /* border-radius: 2px; */
            flex: 1
        }
        .selectbor {
            border-bottom: 3px solid;
            display: inline-table;
            border-color: black;
        }
        .help-char-second {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-family: robotoregular;
        }
        .help-char-second-sideTab {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-weight: bold;
            font-family: robotoregular;
        }
        .img-side-tab {
            width: 16px;
            height: 16px;
            margin-right: 3px;
        }
        .imgtab {
            width: 100%;
            height: 120px;
        }
        .btnrow {
            display: flex;
            flex-direction: row-reverse;
            padding-top: 20px;
            margin-bottom: 10px;
        }
        .card-help-btn-text {
            color: black;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            font-family: robotoregular;
        }
        .card-help-btn {
            background-color: white;
            margin-top: 3px;
            padding: 4px 10px;
            justify-content: center;
            width: 145px;
        }
        .card-help-btn:hover {
            background-color: #353535;
        }
        .card-help-btn-text:hover {
            color: white;
            font-weight: 600;
        }
        .img {
            width: 31px;
            height: 31px;
            top: -7px;
        }
        .topheader {
            font-size: 17px;
            padding-left: 15px;
            padding-top: 20px;
            color: black;
            font-family: robotoregular;
        }
        .help-char-que {
            font-size: 15px;
            font-weight: bold;
            padding: 8px 0px 5px 0px;
            margin: 5px 0px 2px 18px;
            font-family: robotoregular;
        }
        .help-char-ans-nor {
            font-size: 14px;
            margin: 5px 0px 2px 18px;
            font-family: robotoregular;
        }
        .text-head {
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 5px;
            margin: 5px 0px 2px 25px;
            font-family: robotoregular;
        }
        .help-char-ans-head {
            font-size: 14px;
            margin: 5px 0px 2px 28px;
            font-family: robotoregular;
        }
        .help-char-med {
            font-size: 14px;
            color: black;
            font-weight: bold;
            margin-left: 20px;
            font-family: robotoregular;
        }
    } 
   
    /* Small Device / Tab */
    
    @media (min-width: 768px) {
        .scroller {}
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .flex-direction-change {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .card-help {
            background-color: #ffffff;
            padding-top: 25px;
            padding-bottom: 25px;
            padding-left: 15px;
            padding-right: 15px;
            margin: 5px 5px 20px 5px;
            border-radius: 4px;
            /* padding-right: 10px;
                padding-left: 10px;
                padding-bottom: 10px; */
            /* border-radius: 2px; */
        }
        .row-tem {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: auto;
            /* background-color: #e0e2e5; */
            max-width: 100%;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .outer-flex-col {
            flex-direction: column;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .tab-flex-row1 {
            flex-direction: row;
            flex-wrap: nowrap;
        }
        .tab-font-size {
            font-size: 25px;
            font-family: robotoregular;
        }
        .tab-text-font-size {
            font-size: 16px;
        }
        .tab-box-padding {
            margin-right: 40px;
            font-family: robotoregular;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-row {
            flex-direction: column;
        }
        .card-help {
            background-color: #ffffff;
            padding-top: 25px;
            padding-bottom: 25px;
            padding-left: 15px;
            padding-right: 15px;
            /* margin-bottom: 20px; */
            margin: 5px 5px 20px 5px;
            border-radius: 4px;
            /* padding-right: 10px;
                    padding-left: 10px;
                    padding-bottom: 10px; */
            /* border-radius: 2px; */
        }
        .help-char-second {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-family: robotoregular;
        }
        .help-char-second-sideTab {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-weight: bold;
            font-family: robotoregular;
        }
        .img-side-tab {
            width: 16px;
            height: 16px;
            margin-right: 3px;
        }
        .imgtab {
            width: 100%;
            height: 120px;
        }
        .btnrow {
            display: flex;
            flex-direction: row-reverse;
            padding-top: 20px;
            margin-bottom: 10px;
        }
        .card-help-btn-text {
            color: black;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            font-family: robotoregular;
        }
        .card-help-btn {
            background-color: white;
            margin-top: 3px;
            padding: 4px 10px;
            justify-content: center;
            width: 145px;
        }
        .card-help-btn:hover {
            background-color: #353535;
        }
        .card-help-btn-text:hover {
            color: white;
            font-weight: 600;
        }
        .img {
            width: 31px;
            height: 31px;
            top: -7px;
        }
        .topheader {
            font-size: 17px;
            padding-left: 15px;
            padding-top: 20px;
            color: black;
            font-family: robotoregular;
        }
        .help-char-que {
            font-size: 15px;
            font-weight: bold;
            padding: 8px 0px 5px 0px;
            margin: 5px 0px 2px 18px;
            font-family: robotoregular;
        }
        .help-char-ans-nor {
            font-size: 14px;
            margin: 5px 0px 2px 18px;
            font-family: robotoregular;
        }
        .text-head {
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 5px;
            margin: 5px 0px 2px 25px;
            font-family: robotoregular;
        }
        .help-char-ans-head {
            font-size: 14px;
            margin: 5px 0px 2px 28px;
            font-family: robotoregular;
        }
        .help-char-med {
            font-size: 14px;
            color: black;
            font-weight: bold;
            margin-left: 20px;
            font-family: robotoregular;
        }
    }
  
     @media (min-width: 992px) {
        .row-tem {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: auto;
            /* background-color: #e0e2e5; */
            max-width: 100%;
        }
        .flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .nx-flex-column {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .outer-flex-col {
            flex-direction: column;
        }
        .tab-flex-row {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .tab-flex-row1 {
            flex-direction: row;
            flex-wrap: nowrap;
        }
        .tab-font-size {
            font-size: 25px;
            font-family: robotoregular;
        }
        .tab-text-font-size {
            font-size: 16px;
            font-family: robotoregular;
        }
        .tab-box-padding {
            margin-right: 40px;
        }
        .nx-flex-bt-padd {
            padding-bottom: 5px;
        }
        .nx-flex-bt-marg {
            margin-bottom: 10px;
        }
        .item-alignment {
            align-items: left;
        }
        .nx-flex-row {
            flex-direction: column;
        }
        .card-help {
            background-color: #ffffff;
            padding-top: 25px;
            padding-bottom: 25px;
            padding-left: 15px;
            padding-right: 15px;
            margin: 5px 5px 20px 5px;
            border-radius: 4px;
            /* padding-right: 10px;
                padding-left: 10px;
                padding-bottom: 10px; */
            /* border-radius: 2px; */
        }
        .help-char-second {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-family: robotoregular;
        }
        .help-char-second-sideTab {
            display: flex;
            color: #6e6d6d;
            font-size: 14px;
            font-weight: bold;
            font-family: robotoregular;
        }
        .img-side-tab {
            width: 16px;
            height: 16px;
            margin-right: 3px;
        }
        .imgtab {
            width: 100%;
            height: 120px;
        }
        .btnrow {
            display: flex;
            flex-direction: row-reverse;
            padding-top: 20px;
            margin-bottom: 10px;
        }
        .card-help-btn-text {
            color: black;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            font-family: robotoregular;
        }
        .card-help-btn {
            background-color: white;
            margin-top: 3px;
            padding: 4px 4px;
            justify-content: center;
            width: 145px;
        }
        .card-help-btn:hover {
            background-color: #353535;
        }
        .card-help-btn-text:hover {
            color: white;
            font-weight: 600;
        }
        .img {
            width: 31px;
            height: 31px;
            top: -7px;
        }
        .topheader {
            font-size: 17px;
            padding-left: 15px;
            padding-top: 20px;
            color: black;
            font-family: robotoregular;
        }
        /* Help Desk Tab CSS */
        /* .help-plus-icon {
            width: 20px;
            height: 20px;
            margin: 15px 10px 5px 0px;
            top: 8px;
        } */
        .img-msg {
            width: 18px;
            height: 18px;
            top: 0px;
        }
        .help-char-que {
            font-size: 15px;
            font-weight: bold;
            padding: 8px 0px 5px 0px;
            margin: 5px 0px 2px 18px;
            font-family: robotoregular;
        }
        .help-char-ans-nor {
            font-size: 14px;
            margin: 5px 0px 2px 18px;
            font-family: robotoregular;
        }
        .text-head {
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 5px;
            margin: 5px 0px 2px 25px;
            font-family: robotoregular;
        }
        .help-char-ans-head {
            font-size: 14px;
            margin: 5px 0px 2px 28px;
            font-family: robotoregular;
        }
        .help-char-med {
            font-size: 14px;
            color: black;
            font-weight: bold;
            margin-left: 20px;
            font-family: robotoregular;
        }
        .help-pad-show {
        
        }
    }
</style>