<template>
<div style="background-color: #f7f7f7;">
    <div class="disc-row-set">
        <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
            <div class="term-c-card-set term-c-pad-lft-rght shadow">
            <!--  -->
            <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set term-c-bor-set">{{num.contnm}}</text></div>
             <div class="box"><text class="term-c-char-bold-set">{{num.listhead1}}</text></div>
               
                <div class="term-c-pad-lft"> 
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listdef7}}</text></div>
                    <div class=""><text class="term-c-char-set">1. {{num.listdef1}}</text></div>
                    <div class=""><text class="term-c-char-set">2. {{num.listdef2}}</text></div>
                    <div class=""><text class="term-c-char-set">3. {{num.listdef3}}</text></div>
                    <div class=""><text class="term-c-char-set">4. {{num.listdef4}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listdef5}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listdef6}}</text></div>
                </div>

                <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set">{{num.listhead2}}</text></div>
                <div class="term-c-pad-lft">
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listaccess}}</text></div>
                </div>

                <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set">{{num.listhead3}}</text></div>
                <div class="term-c-pad-lft">
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass1}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass2}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass3}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass4}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass5}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass6}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass7}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass8}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass9}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass10}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass11}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listpass12}}</text></div>
                </div>

                <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set">{{num.listhead4}}</text></div>                
                <div class="term-c-pad-lft"> 
                   <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listmissuse}}</text></div>
               </div>

                <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set">{{num.listhead5}}</text></div>                
                <div class="term-c-pad-lft">
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listfraud}}</text></div>
                </div>

                <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set">{{num.listhead6}}</text></div>                
                <div class="term-c-pad-lft">
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listtech1}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listtech2}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listtech3}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listtech4}}</text></div>
                </div>

                <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set">{{num.listhead7}}</text></div>
                <div class="term-c-pad-lft">
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listprp1}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listprp2}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listprp3}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listprp4}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listprp5}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listprp6}}</text></div>
                </div>

                <div class="term-c-pad-top-bot"><text class="term-c-char-bold-set">{{num.listhead8}}</text></div>
                <div class="term-c-pad-lft">
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listlaw1}}</text></div>
                    <div class="term-c-pad-top-bot"><text class="term-c-char-set">{{num.listlaw2}}</text></div>
                </div>
            <!--  -->
            </div>
        </div>
    </div>
    <!-- <footer-tab></footer-tab> -->
</div>
</template>
<script>
 import footerTab from '../../components/Footer/FooterSection.vue'
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'

    export default {
        components: {
            footerTab
        },
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Terms and Condition');
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
                headerName: 'Disclaimer',
                platform: invalid,
                deviceWidth: invalid,
                numArray: [{
                        contnm: 'Terms and Condition',

                    listhead1: 'Definitions',
                    listdef1: 'A User of Client Code means a policy holder.',
                    listdef2: 'A user of Advisor code means an insurance advisor.',
                    listdef3: 'A user of User ID means an employee .',
                    listdef4: 'An user of CDA Code means an authenticated user of Lifeline-CDA portal.',
                    listdef5: 'All of the above persons are described as "The User" below and a user uses a LOGIN ID.',
                    listdef6: 'LOGIN ID grants a user access to the ABCIC website.',
                    listdef7: 'ABCIC website means ABC Insurance Company Limited resources.',

                    listhead2: 'ABCIC On-line /Internet Services Access',
                    listaccess: 'The user would be allotted an Internet/on-line services access LOGIN ID and a set of secret passwords by ABCIC in the first instance to access the respective user account. The user will be required to change the password assigned by ABCIC on accessing on-line /Internet services for the first time. As a safety measure, the user shall change the password as frequently thereafter as possible. In addition to LOGIN ID and password ABCIC may, at its discretion, advice the user to adopt such other means of authentication including but not limited to digital certification and/ or smart cards. The user shall not attempt or permit others to attempt accessing the on-line/internet services or any kind of information provided by ABCIC stored in the computers of ABCIC through any means.',

                    listhead3: 'ABCIC On-line /Internet Services Password',
                    listpass1: 'The user acknowledges, represents and warrants that the password which will be issued to it, provides access to the ABCIC on-line /Internet Services and that user is the sole and exclusive owner and is the only authorized user of the password and accepts sole responsibility for use, confidentiality and protection of the password, as well as for all requests, transactions and information changes (exp: change of address) entered into the ABCIC data / using such password.',
                    listpass2: 'A LOGIN ID will enable the user to get access to use the ABCIC On-Line /Internet Services – such as view his/her Account Statement, policy/policies status, on-line service requests such as Change of mailing address, change of Mode, bill junction and downloadable provided on the website, for Policy Holder & client dairy, contract dairy, Renewal details, Lapse details , commission/s, and tools like premium calculator, benefit illustrations for Insurance advisor or any other on-line /internet services provided by ABCIC which it thinks deems fit for particular user category or to all user category on the ABCIC website and certain other services as defined & provided By ABCIC from time to time.',
                    listpass3: 'The user shall have no objection in the ABCIC verifying his/her/its identity before allotting the LOGIN ID.',
                    listpass4: 'The LOGIN ID allotted to the User is confidential in nature and the user confirms that he/she/it will keep the LOGIN ID confidential and will not divulge to anybody else. The user also agrees to take all possible care to prevent discovery of the LOGIN ID by any person. The responsibility for misuse of the LOGIN ID of the User is solely of the user and ABCIC shall not be responsible for the use/misuse of the LOGIN ID in any manner whatsoever.',
                    listpass5: 'The User shall inform ABCIC immediately in case the LOGIN ID becomes known to any other person. ABCIC may in its absolute discretion, issue to the user a new LOGIN ID on similar terms and conditions or under such terms and conditions as ABCIC may deem fit.',
                    listpass6: 'ABCIC will take reasonable efforts to keep its website updated so as to provide most current information to the user. The user acknowledges that ABCIC expressly disclaim liability for errors or omissions in the information on the website. The user also recognizes that because of communication and other issues, it is possible that the site may not be operating/ working on many occasions. The user also agrees that the look and feel of the Web screen/ web pages layout and outputs there from may differ based on the nature of the software used by the user to browse the site. The user agrees not only to the terms and conditions herein contained but also the disclaimer and other matters, as may be displayed / posted on the site.',
                    listpass7: 'The ABCIC may, in the best interest of the user/ABCIC/ both, request a fax confirmation of the Instructions and any additional information that ABCIC may require in addition to the on-line / internet service request wherever ABCIC deems fit with out assigning any reasons. ABCIC shall not be bound to act on instructions/ requests received until the said fax confirmation and additional information are received from the user.',
                    listpass8: 'The user shall be fully liable to the ABCIC for every transaction entered into using the LOGIN ID facility, whether with or without the knowledge of the user and consequences thereof.',
                    listpass9: 'The user shall not use the on-line services on a PC or other Internet access device which belongs to any other person or which is provided to the user by his/her employer without such persons or, as the case may be, his/her employers previous written permission. ABCIC will not be responsible for any harm or loss caused to any person as a result of the user not complying with this condition. The user indemnifies and agrees to keep ABCIC at all times saved, defended, harmless and indemnified from and against any and all loss, costs, outgoings, expenses, claims, damages or consequences whatsoever that ABCIC or its constituent companies may suffer as a result of the user using any PC or Internet device without the permission of the owner thereof and he or she shall be bound to compensate. ABCIC shall not be liable for the non-suitability thereof or if any other data or software contained in such PC or Internet access device through which the on-line services are accessed by the user is damaged or lost in any manner whatsoever.',
                    listpass10: 'The user agrees that the use and storage of any information including without limitation, the LOGIN ID, account information, policy information, transaction activity, account balances, Business Portfolio, commission/s , renewal policy details and any other information available on the user personal computer is at his/her own risk and is his/her sole responsibility.',
                    listpass11: 'ABCIC is authorized to provide any information or details relating to the user or his/her account to any third person so far as is necessary to give effect to any instructions or to comply with any order of Court or of any competent/ statutory authority or as is required under applicable law.',
                    listpass12: 'The user hereby acknowledges that he/she is utilizing this facility at his/her own risk. These risks would, among others, include the following:',

                    listhead4: 'Misuse of Password',
                    listmissuse: 'The user acknowledges that if any third person obtains access to his/her/its password such third person would be able to provide Transaction request to ABCIC. The user shall ensure that the terms and conditions applicable to the use of the password as contained herein are complied with at all times.',

                    listhead5: 'Internet Frauds',
                    listfraud: 'The Internet per se is susceptible to a number of frauds, misuse, hacking and other actions, which could affect Instructions to ABCIC. Whilst ABCIC shall aim to provide security to prevent the same, there cannot be any guarantee from such Internet frauds, hacking and other actions, which could affect Instructions to ABCIC. The user shall separately evaluate all risks arising out of the same.',

                    listhead6: 'The technology',
                    listtech1: 'for enabling the transfer of services offered by ABCIC could be affected by virus or other malicious, destructive or corrupting code, programmed or macro. This could result in delays in the processing of Instructions or failure in the processing of instructions and other such failures and inabilities.',
                    listtech2: 'The user understands that ABCIC disclaims all and any liability, whether direct or indirect, whether arising out of loss of profit or otherwise arising out of any failure or inability by the ABCIC to honour any user instruction for whatsoever reason. The user understands and accepts that ABCIC shall not be responsible for any of the aforesaid risks. The user also accepts that ABCIC shall disclaim all liability in respect of the said risks.',
                    listtech3: 'The user acknowledges having read and understood the Terms and Conditions relating to usage of Internet / on-line services /facilities and various other services/facilities provided by ABCIC. The user accepts and agrees to be bound by the said Terms and Conditions including those excluding ABCICs liability.',
                    listtech4: 'ABCIC reserves the exclusive right to amend the terms and conditions for issue and use of LOGIN ID to the users without any prior approval of the user concerned, and thereafter such amended terms and conditions will apply to the all the user category or to particular user.',

                    listhead7: 'Proprietary Rights',
                    listprp1: 'ABCIC shall make reasonable efforts to advise from time to time the Internet software such as browsers which are required for availing of ABCIC On-line /Internet Services access. There will be no obligation on ABCIC to support all or any versions of the Internet software as may be required for offering ABCIC On-line /Internet Services. The user acknowledges that the software underlying the ABCIC On-line /Internet Services as well as other Internet related software which are required for accessing ABCIC On-line /Internet Services is the legal property of the respective vendors. The permission given by ABCIC to access ABCIC On-line / Internet Services will not convey any proprietary or ownership rights in such software. The user shall not attempt to modify, translate, disassemble, decompile or reverse engineer the software underlying ABCIC On-line /Internet Services or create any derivative product based on the software.',
                    listprp2: 'In consideration of the ABCIC providing the user with the on-line/internet services access, user agrees to indemnify and keep safe, harmless and indemnified ABCIC, its constituent companies, their officers, employees, successors and assigns from and against all actions, claims, demands, proceedings, loss, damages, costs, charges and expenses whatsoever which ABCIC or its constituent companies may at any time incur, sustain, suffer or be put to as a consequence of or arising out of the user use of the said on-line services.',
                    listprp3: 'The user hereby indemnifies and agrees to keep ABCIC saved, defended, harmless and indemnified for all liabilities, losses, damages and expenses which ABCIC may sustain or incur either directly or indirectly as a result of :',
                    listprp4: '1. Illegal, unauthorized, fraudulent usage or misuse of the users LOGIN ID to access ABCIC Website; all requests carrying the users LOGIN ID as evidenced by electronic records available at ABCIC will be the users sole responsibility',
                    listprp5: '2. Non-compliance of the terms and conditions relating to on-line services on the ABCIC website.',
                    listprp6: 'Notices under these Terms may be given by ABCIC and the user in writing by delivering them by hand or by sending them by post to the last address given by the user and in the case of ABCIC to its office address as mentioned/displayed on the website. In addition, ABCIC may also publish notices of general nature, which are applicable to all users in a newspaper or on its web site located at www.abclife.co.in. Such notices will have the same effect as a notice served individually to each user. Notice and instructions will be deemed served 7 days after posting or upon receipt in the case of hand delivery, cable, telex or facsimile.',

                    listhead8: 'Governing Law',
                    listlaw1: 'These Terms & conditions and/or the transactions/ requests in the Accounts of the user shall be governed by the laws of India. The Parties hereby agree that any legal action or proceedings arising out of the Terms & conditions for on-line/internet services provided by ABCIC shall be brought in the courts or tribunals at Chennai in India and irrevocably submit themselves to the jurisdiction of such courts and tribunals. ABCIC may, however, in its absolute discretion, commence any legal action or proceedings arising out of the Terms for Internet Banking in any other court, tribunal or other appropriate forum, and the user hereby consents to that jurisdiction. Any provision of the Terms & conditions of on-line/internet services provided by ABCIC which is prohibited or unenforceable in any jurisdiction shall, as to such jurisdiction, be ineffective to the extent of prohibition or unenforceability but shall not invalidate the remaining provisions of the Terms & conditions or affect such provision in any other jurisdiction.',
                    listlaw2: 'The Courts in Chennai alone shall have jurisdiction over all disputes arising out of or in respect of this Terms & conditions of ABCIC on-line/internet services usage.'

                    },

                ]


            }
        },

        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            }

        }

    }
</script>

<style>
.disc-rew-set {
    flex-direction:row;
    
}
.term-c-card-set {
    background-color: #fff;
    padding: 10px;
    margin: 25px 30px;
    border-radius: 3px;
    
}
.term-c-char-bold-set {
    font-size: 25px;
    font-family: robotoregular;
    color: #565656;
    font-weight: bold;

}
 .term-c-char-set{
        font-size: 24px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .term-c-char-cap-set{
        font-size: 25px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .term-c-pad-top-bot {
        padding: 10px 0px;
    }
    .disc-pad-bot {
        padding-bottom: 10px;
    }
    .term-c-pad-lft {
        padding-left: 10px;
    }
    .term-c-pad-lft-rght {
        padding: 0px 15px;
    }
    .term-c-bor-set {
         background-color: white;
        width: 245px;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 2px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    }
 @media (min-width: 320px){
     .term-c-char-bold-set {
        font-size: 15px;
        font-family: robotoregular;
        font-weight: bold;
        color: #565656;
     }
    .term-c-char-set{
        font-size: 14px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .term-c-char-cap-set{
        font-size: 15px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .term-c-pad-top-bot {
        padding: 10px 0px;
    }
    .disc-pad-bot {
        padding-bottom: 10px;
    }
    .term-c-pad-lft {
        padding-left: 10px;
    }
    .term-c-pad-lft-rght {
        padding: 0px 15px;
    }
    .term-c-bor-set {
         background-color: white;
        width: 145px;
        border-style: solid;
        border-top-width: 1px;
        border-top-color: #fff;
        border-left-width: 1px;
        border-left-color: #fff;
        border-right-width: 1px;
        border-right-color: #fff;
        border-bottom-width: 2px;
        border-bottom-color: #3b371e;
        margin-bottom: 20px;
    }
     .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
 }
 @media (min-width: 768px){
     
 }
 @media (min-width: 992px){
     
 }
</style>