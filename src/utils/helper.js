class helper {
    //判断是否微信
    static is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/wechatdevtools/i) == "wechatdevtools") {
            return true;
        }
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") == 0) {
            return false;
        }
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    static is_mobile() {
        return (
            navigator.userAgent.search(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            ) >= 0
        );
    }
    static is_ios_mobile() {
        return navigator.userAgent.search(/(iPhone|iPod|ios|iPad)/i) >= 0;
    }
    static is_ios_app() {
        var ua = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") == 0) {
            return false;
        }
        if (ua.match(/mindcherish_ios_app/i) == "mindcherish_ios_app") {
            return true;
        } else {
            return false;
        }
    }
    static is_android_app() {
        var ua = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") == 0) {
            return false;
        }
        if (ua.match(/mindcherish_android_app/i) == "mindcherish_android_app") {
            return true;
        } else {
            return false;
        }
    }
    static is_app() {
        return helper.is_ios_app() || helper.is_android_app();
    }
}
export default helper;
