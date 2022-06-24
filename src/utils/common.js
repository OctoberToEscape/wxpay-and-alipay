//富文本图片100%宽
export const richImageWidth = (rich) => {
    const reg = new RegExp("<img", "gi");
    return rich.replace(reg, `<img style="width:100%";height:auto`);
};

//获取元素是否在可视区域
export const elementIsVisibleInViewport = (el) => {
    if (el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >=
                (window.innerHeight || document.documentElement.clientHeight) ||
            rect.bottom <= 0
        );
    }
};

//拿url参数
export const getUrlParam = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

// 手机号正则
export const validatorTelephone = (tel) => {
    let reg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    return reg.test(tel) ? false : true;
};
