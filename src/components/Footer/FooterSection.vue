<template>
    <div>
<!--         <div class="footer-margin-top" >

        </div>
 -->        <div  style="flex-direction:row">
            <div v-if="platform !== 'Web'" class="content-footer ">
                    <text class="text-footer mouse-pointer" @click="jump('/disclaimer')">Disclaimer | </text>
                    <text class="text-footer mouse-pointer"  @click="jump('/termcond')">Terms and Condition |</text>
                    <text  class="text-footer mouse-pointer"  @click="jump('/privcy')"> Privacy Policy</text>
            </div>
             <div v-if="platform === 'Web'" class="content-footer ">
                    <text class="text-footer mouse-pointer" @click.native="jump('/disclaimer')">Disclaimer | </text>
                    <text class="text-footer mouse-pointer"  @click.native="jump('/termcond')">Terms and Condition |</text>
                    <text  class="text-footer mouse-pointer"  @click.native="jump('/privcy')"> Privacy Policy</text>
            </div>
        </div>
    </div>
</template>
<script>
    const navigator = weex.requireModule('navigator');
    const invalid = '- invalid -'
    export default {
    created() {
                // this.$store.commit('SET_PAGE_TITLE', 'Help desk');

                if (typeof WXEnvironment === 'object') {
                    this.platform = WXEnvironment.platform || unknown
                    this.deviceWidth = WXEnvironment.deviceWidth || unknown
                }
            },
    }
</script>

<style>
    .text-footer {
        color: #fff;
        font-size: 25px;
        padding: 20px 0px 20px 0px;
    }
    
    .mouse-pointer {
        cursor: pointer;
    }
    
    .content-footer {
        justify-content: center;
        flex-direction: row;
        background-color: #3b371e;
        flex: 0.5;
         position: relative; 
        bottom: 0px;
        width: 750px;
        align-content: flex-end;
    }
    
    .footer-margin-top {
        margin-top: 50px;
    }
    
    @media (min-width: 320px) {
        .text-footer {
            color: #fff;
            font-size: 14px;
            padding: 30px 0px 30px 0px;
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .content-footer {
            justify-content: center;
            flex-direction: row;
            background-color: #3b371e;
            flex: 1;
            /* position: fixed; */
            bottom: 0px;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            align-content: flex-end;
        }
        .footer-margin-top {
            margin-top: 50px;
        }
    }
    
    @media (min-width: 768px) {
        .text-footer {
            color: #fff;
            font-size: 14px;
            padding: 30px 0px 30px 0px;
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .content-footer {
            justify-content: center;
            flex-direction: row;
            background-color: #3b371e;
            flex: 1;
            /* position: fixed; */
            bottom: 0px;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            align-content: flex-end;
        }
        .footer-margin-top {
            margin-top: 50px;
        }
    }
    
    @media (min-width: 992px) {
        .text-footer {
            color: #fff;
            font-size: 14px;
            padding: 30px 0px 30px 0px;
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .content-footer {
            justify-content: center;
            flex-direction: row;
            background-color: #3b371e;
            flex: 1;
            /* position: fixed; */
            bottom: 0px;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            align-content: flex-end;
        }
        .footer-margin-top {
            margin-top: 50px;
        }
    }
</style>