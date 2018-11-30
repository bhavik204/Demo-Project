// let modals = weex.requireModule('modal');

export default {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        showmodal(mbody, duration) {
            let modals = weex.requireModule('modal')
            modals.toast({
                message: mbody,
                duration: duration
            });
        },
        GET(api, callback) {
            let stream = weex.requireModule('stream');

            return stream.fetch({
                method: 'GET',
                type: 'json',
                 url: 'http://159.89.161.64:5010/secure/user/' + api
                //url: 'http://172.16.59.163:5005/secure/user/' + api
            }, callback)
        },

        // Mixin filter

        doSentenceCase(strText) {
            var _str = strText.toLowerCase();
            var collection = _str.split(" ");
            var modifyStrigs = [];
            _str = '';
            for (var i = 0; i < collection.length; i++) {
                modifyStrigs[i] = collection[i].charAt(0).toUpperCase() + collection[i].slice(1);
                _str = _str + modifyStrigs[i] + ' ';

            }
            return _str.trim();
        }
    },
    //     mounted(){
    //     const animation = weex.requireModule('animation')

    //     var pagewrap = this.$refs.pagewrap;
    //     animation.transition(pagewrap, {
    //             styles: {
    //               opacity:'1'
    //             },
    //             duration: 200, //ms
    //             timingFunction: 'ease-in',
    //             // transform: 'translate(1100px,100px)',
    //             delay: 100 //ms
    //           }, function () {

    //             // modal.toast({ message: 'animation finished.' })
    //             console.log(pagewrap , 'logggmix in ')
    //           // var btn01 = this.$refs.btn1;


    //     })
    // }

}