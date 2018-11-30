/**
 * Created by Sudeep on 03-04-2018.
 */


let utilFunc = {
    initRobotoRegular () {
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "robotoregular",
            'src': "url('../../web/assets/fonts/roboto.regular.ttf')"
            // 'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        }),
        // domModule.addRule('fontFace', {
        //     'fontFamily': "robotothin",
        //     'src': "url('../../web/assets/fonts/roboto.thin.ttf')"
        //     // 'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        // })
        // domModule.addRule('fontFace', {
        //     'fontFamily': "Robotolight",
        //     'src': "url('../../web/assets/fonts/roboto.light.ttf')"
        //     // 'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        // }),
        domModule.addRule('fontFace', {
            'fontFamily': "robotobold",
            'src': "url('../../web/assets/fonts/roboto.bold.ttf')"
            // 'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        })

    },
    setBundleUrl(url, jsFile) {
        const bundleUrl = url;
        let host = '';
        let path = '';
        let nativeBase;
        const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            const matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        const h5Base = './index.html?page=';
        // in Native
        let base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path? path+'/':'');
        }

        const newUrl = base + jsFile;
        return newUrl;
    },

};

export default utilFunc;