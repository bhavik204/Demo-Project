import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
// import App from '@/index.vue'

const App = require('@/index.vue');
const router = require('./router');
import store from '@/store/index'
// const store = require('../store/');
import { sync } from 'vuex-router-sync'

import Vuelidate from 'vuelidate'
import VeeValidate from 'vee-validate';
// import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import mixins from '@/mixins/index'

// sync the router with the vuex store.

// this registers `store.state.route`


sync(store, router)

/* eslint-disable no-new */
const meta = weex.requireModule('meta')
    // The width of the viewport is set to 640px
meta.setViewport({
    // width: 1024
})

Vue.filter('to-capitlaize', function(strText) {
    if (strText !== '' || strText !== null || typeof(strText) !== 'undefine') {
        var _str = strText.toLowerCase();
        var collection = _str.split(" ");
        var modifyStrigs = [];
        _str = '';
        for (var i = 0; i < collection.length; i++) {
            modifyStrigs[i] = collection[i].charAt(0).toUpperCase() + collection[i].slice(1);
            _str = _str + modifyStrigs[i] + ' ';
        }
        return _str;
    } else {
        return "";
    }

})

Vue.filter('name-shorter', function(userName) {
    userName = userName.toUpperCase();
    let arr = userName.split(" ");
    let fLatter = arr[0].charAt(0);
    let sLatter = arr[1].charAt(0);
    // fLatter = fLatter.charAt(0);
    // sLatter = sLatter.charAt(0);
    userName = fLatter + sLatter;
    return userName;

});

// register global mixins.
Vue.mixin(mixins)
    // Vue.use(Vuelidate)

Vue.use(VeeValidate)
    // Vue.use(VueMoment)
    // Vue.use(VueMoment, {
    //     moment,
    // })



new Vue(Vue.util.extend({ el: '#root', router, store }, App));

router.push('/');