<template>
<div style="background-color: #f7f7f7;">
    <div class="privacy-row-set">
        <div v-for="(num,i) in numArray" :key="i" class="nx-flex-bt-marg">
            <div class="privacy-card-set privacy-pad-lft-rght shadow">
                <div class="privacy-pad-top-bot"><text class="privacy-char-bold-set desc-bor-set">{{num.contnm}}</text></div>
                <div class="privacy-pad-top-bot"><text class="privacy-char-cap-set">{{num.listdef7}}</text></div>
                <div class="privacy-pad-lft"><text class="privacy-char-set">1. {{num.listdef1}}</text></div>
                <div class="privacy-pad-lft"><text class="privacy-char-set">2. {{num.listdef2}}</text></div>
                <div class="privacy-pad-lft"><text class="privacy-char-set">3. {{num.listdef3}}</text></div>
                <div class="privacy-pad-lft privacy-pad-bot"><text class="privacy-char-set">4. {{num.listdef4}}</text></div>
                <div class="privacy-pad-lft privacy-pad-bot"><text class="privacy-char-set">{{num.listdef5}}</text></div>
                <div class="privacy-pad-lft privacy-pad-bot"><text class="privacy-char-set">{{num.listdef6}}</text></div>
                <!-- <div class="privacy-pad-lft privacy-pad-bot"><text class="privacy-char-set" @click.native="abc()">ABC</text></div> -->
                 
                 
            </div>
        </div>
    </div>
    <!-- <footer-tab></footer-tab> -->
</div>
</template>
<script>
 import footerTab from '../../components/Footer/FooterSection.vue'
// import VueMoment from 'vue-moment'
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'

    export default {
        created() {
            this.$store.commit('SET_PAGE_TITLE', 'Privacy Policy');
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
                ab : '',
                platform: invalid,
                deviceWidth: invalid,
                numArray: [{
                        contnm: 'Privacy Policy',
                        listdef7: 'At ABC Insurance, we are committed to protect and maintain the confidentiality of any information relating to our customers. The information about your domain name, date and time of access to website, internet address which linked you to our website and the pages that you visited collected by us, would be kept confidential and would be used for the following purposes only:',
                        listdef1: 'To meet legal requirements (if any)',
                        listdef2: 'To protect and defend ABC Insurance or its Affiliates rights, interests or property',
                        listdef3: 'To analyze the usage pattern of the site or to get statistics on the number of visitors to the site',
                        listdef4: 'For processing and assessment of your application/claims',
                        listdef5: 'ABC Insurance will not be responsible in any manner for any direct or indirect damages that may arise out of the use of this website.',
                        listdef6: 'ABC Insurance has the right to change any part of the said content on the website at any time at its sole discretion.',

                    },

                ]


            }
        },

        methods: {
            
        click()  {
                  var d = new Date(0);
                //   (d.getTime()-d.getMilliseconds())/1000;
                this.ab = d;
                // var currentDate = selectedDate;         

                // var currentTime = currentDate.getTime(); 
                // this.ab = currentTime;
              
            },
            
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
            

        }

    }
</script>

<style>
.privacy-rew-set {
    flex-direction:row;
    
}
.privacy-card-set {
    background-color: #fff;
    padding: 10px;
    margin: 25px 30px;
    border-radius: 3px;
    
}
.privacy-char-bold-set {
    font-size: 25px;
    font-family: robotoregular;
    color: #565656;
    font-weight: bold;

}
 .privacy-char-set{
        font-size: 24px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .privacy-char-cap-set{
        font-size: 25px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .privacy-pad-top-bot {
        padding: 10px 0px;
    }
    .privacy-pad-bot {
        padding-bottom: 10px;
    }
    .privacy-pad-lft {
        padding-left: 10px;
    }
    .privacy-pad-lft-rght {
        padding: 0px 15px;
    }
    .desc-bor-set {
         background-color: white;
        width: 165px;
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
        margin-top: 5px;
    }
 @media (min-width: 320px){
     .privacy-char-bold-set {
        font-size: 15px;
        font-family: robotoregular;
        font-weight: bold;
        color: #565656;
     }
    .privacy-char-set{
        font-size: 14px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .privacy-char-cap-set{
        font-size: 15px;
        font-family: robotoregular;
        color: #565656;
        line-height: 1.7;
    }
    .privacy-pad-top-bot {
        padding: 10px 0px;
    }
    .privacy-pad-bot {
        padding-bottom: 10px;
    }
    .privacy-pad-lft {
        padding-left: 10px;
    }
    .privacy-pad-lft-rght {
        padding: 0px 15px;
    }
    .desc-bor-set {
         background-color: white;
        width: 95px;
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
        margin-top: 5px;
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