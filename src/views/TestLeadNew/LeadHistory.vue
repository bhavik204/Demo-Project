<template>
    <div class="leadhistorywrapper card-wrap-LeadHistory">
        <div class="lead-history-title">
            <text class="modify-txt-size">Lead</text>
        </div>
        <wxc-simple-flow :list="Leaddata" :themeColor="themeColor"></wxc-simple-flow>
        <div class="lead-history-title">
            <text class="modify-txt-size">Appointment</text>
        </div>
        <wxc-simple-flow :list="Appointmentdata" :themeColor="themeColor"></wxc-simple-flow>
        <div class="lead-history-title">
            <text class="modify-txt-size">Proposal</text>
        </div>
        <wxc-simple-flow :list="Proposal" :themeColor="themeColor"></wxc-simple-flow>
        <div class="lead-history-title">
            <text class="modify-txt-size">Issuance</text>
        </div>
        <wxc-simple-flow :list="Issuance" :themeColor="themeColor"></wxc-simple-flow>
    </div>
</template>
<script>
  import { WxcSimpleFlow } from 'weex-ui';
  export default {
    components: { WxcSimpleFlow },
    data: () => ({
      themeColor: {
        lineColor: '#bf280b',
        pointInnerColor: '#b95048',
        pointBorderColor: '#bf280b',
        highlightTitleColor: '#bf280b',
        highlightPointInnerColor: '#bf280b',
        highlightPointBorderColor: '#d46262'
      },
      Leaddata: [
        {
          'date': '12.08.2018  11:24 AM',
          'owner': 'Anand Joshi',
          'desc': 'Anuj Jha   9848488490',
          'highlight': true,
          'title': 'New Lead Created'
        },
        {
          'date': '14.08.2018  10:40 AM',
          'owner': 'Anand Joshi',
          'desc': '',
          'title': 'Update - NC - Not Reachable'
        },
        {
          'date': '15.08.2018   1:40 PM',
          'owner': 'Anand Joshi',
          'desc': 'Call Back date-15.08.2018   Call Back time-16:30 PM',
          'title': 'Update - C -  Call Back'
        },
       
      ],
      Appointmentdata: [
        {
          'date': '16.08.2018  10:03 AM',
          'owner': 'Anand Joshi',
          'desc': 'Appointment date-16.08.2018   Appointment time-12:30 PM',
          'highlight': true,
          'title': 'New Appointment Created'
        },
        {
          'date': '16.08.2018  2:27 PM',
          'owner': 'Anand Joshi',
          'desc': 'Anand Joshi',
          'title': 'Update - NA - Phone keeps ringing'
        },
        {
          'date': '16.08.2018  5:06 PM',
          'owner': 'Anand Joshi',
          'desc': 'Appointment date-18.08.2018   Appointment time-12:30 PM',
          'title': 'Update - NM - Reschedule'
        },
        {
          'date': '18.08.2018  12:06 PM',
          'owner': 'Anand Joshi',
          'desc': 'Anand Joshi',
          'title': 'Update - M - Pitch'
        },
        {
          'date': '18.08.2018   3:12 PM',
          'owner': 'Anand Joshi',
          'desc': 'Appointment date-20.08.2018   Appointment time-1:30 PM',
          'title': 'Update - M - Follow up'
        },],
         Proposal: [
        {
          'date': '20.08.2018  2:30 PM',
          'owner': 'Anand Joshi',
          'desc': 'Product-Super Money Back   Annual Premium-Rs. 209,099',
          'highlight': true,
          'title': 'New BI Created'
        },
        {
          'date': '20.08.2018  2:57 PM',
          'owner': 'Anand Joshi',
          'desc': 'Anand Joshi',
          'title': 'Document Uploaded'
        },
        {
          'date': '20.08.2018  3:20 PM',
          'owner': 'Anand Joshi',
          'desc': 'Cheque Mode   Rs. 80,450',
          'title': 'Payment Captured'
        },
        {
          'date': '23.08.2018  4:50 PM',
          'owner': 'Anand Joshi',
          'desc': 'FTNR   Document Needed   Ops 49083 ',
          'title': 'Requirement Raised'
        },
        {
          'date': '24.08.2018  10:03 AM',
          'owner': 'Anand Joshi',
          'desc': 'UW   Medicals Required   UW 93888',
          'title': 'Requirement Raised'
        },
        {
          'date': '24.08.2018  12:20 PM',
          'owner': 'Anand Joshi',
          'desc': 'FTNR   Document Needed',
          'title': 'Document Uploaded'
        },
        {
          'date': '28.08.2018  2:34 PM',
          'owner': 'Anand Joshi',
          'desc': 'UW   BOP  UW 93888',
          'title': 'Requirement Raised'
        },
        {
          'date': '30.08.2018  2:20 PM',
          'owner': 'Anand Joshi',
          'desc': 'UW   BOP   Anand Joshi',
          'title': 'Payment Captured'
        },
      ],
       Issuance: [
        {
          'date': '05.09.2018   1:00 PM',
          'owner': 'Anand Joshi',
          'desc': 'Policy ID - AR938883   Docket No.-DFX884848    UW 93888',
          'highlight': true,
          'title': 'Policy Confirmed'
        },
        {
          'date': '04.09.2018  1:00 PM',
          'owner': 'Anand Joshi',
          'desc': 'UW Decision   Medical Grounds   UW 93888',
          'title': 'Policy Rejected'
        },
       
      ],

    })
  }
</script>

<style>
.leadhistorywrapper {
    background-color:  #fff;
    padding: 20px;
}

.lead-history-title {
    background-color:  #f7f7f7;
    padding: 20px 0px;
}
.modify-txt-size {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
}
.card-wrap-LeadHistory{
        margin: 20px;
        margin-bottom: 0px;
        /* background-color: #fff; */
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(139, 139, 139);
        padding: 20px 10px;
    }

@media screen and (min-width: 320px){

    .lead-history-title {
        padding: 10px 0px;
    }
    .modify-txt-size {
        font-size: 18px;
    }
    .card-wrap-LeadHistory{
        border:none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        margin:10px 5px 20px 5px;
    }
}

@media screen and (min-width: 768px){
    .card-wrap-LeadHistory{
        margin:10px;
        }
}
@media screen and (min-width: 992px){
    
}
</style>