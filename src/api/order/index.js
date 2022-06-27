import { service } from "@/utils/request";
import qs from "qs";

// 支付订单详情
export const orderDetails = (data) => {
    return service.post("/WebOrder/goods", qs.stringify(data)).then((res) => {
        return res.data;
    });
};

// 获取微信code链接
export const getWechatCode = (data) => {
    return service.post("/webOrder/getCode", qs.stringify(data)).then((res) => {
        return res.data;
    });
};

// 获取openid
export const getOpenid = (data) => {
    return service
        .post("/WebOrder/getOpenid", qs.stringify(data))
        .then((res) => {
            return res;
        });
};

// 微信支付接口
export const wxPay = (data) => {
    return service
        .post("/WebOrder/addOrder", qs.stringify(data))
        .then((res) => {
            return res;
        });
};

// 支付宝支付接口
export const aliPay = (data) => {
    return service
        .post("/webOrder/addOrder", qs.stringify(data))
        .then((res) => {
            return res;
        });
};

// 查询订单接口
export const searchOrder = (data) => {
    return service
        .post("/webOrder/queryOrder", qs.stringify(data))
        .then((res) => {
            return res;
        });
};

// 取消订单接口
export const cancelOrder = (data) => {
    return service
        .post("/WebOrder/cannelOrder", qs.stringify(data))
        .then((res) => {
            return res;
        });
};

// 支付成功详情
export const payOrderDetails = (data) => {
    return service
        .post("/WebOrder/pay_success", qs.stringify(data))
        .then((res) => {
            return res.data;
        });
};

// 修改姓名
export const modifyRealName = (data) => {
    return service
        .post("/user/editRealname", qs.stringify(data))
        .then((res) => {
            return res;
        });
};

// 获取邮寄地址
export const getAddress = (data) => {
    return service
        .post("/SmallAddress/getAddress", qs.stringify(data))
        .then((res) => {
            return res.data;
        });
};

// 保存邮寄地址
export const setAddress = (data) => {
    return service
        .post("/SmallAddress/addAddress", qs.stringify(data))
        .then((res) => {
            return res;
        });
};

// 查看支付成功订单详情
export const searchOrderDetails = (data) => {
    return service.post("/WebOrder/info", qs.stringify(data)).then((res) => {
        return res.data;
    });
};
