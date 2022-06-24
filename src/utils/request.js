import axios from "axios";
import store from "@/store";
import router from "@/router";
import { Toast } from "vant";

let loading = null;
const pendingList = [];
const CancelToken = axios.CancelToken;

//取消重复请求
const removePending = (config) => {
    for (const key in pendingList) {
        const item = +key;
        const list = pendingList[key];

        // 当前请求在数组中存在时执行函数体
        if (
            list.url === config.url &&
            list.method === config.method &&
            list.params === config.params &&
            list.data === config.data
        ) {
            // 执行取消操作
            list.cancel("操作太频繁，请稍后再试");
            // 从数组中移除记录
            pendingList.splice(item, 1);
        }
    }
};

const service = axios.create({
    timeout: 20000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        Accept: "application/x-www-form-urlencoded;charset=utf-8",
        apid: "testyun.aura.cn",
        osName: "H5",
    },
    baseURL: process.env.VUE_APP_BASE_API,
});

service.interceptors.request.use(
    (config) => {
        if (!loading) {
            loading = Toast.loading({
                message: "请稍等...",
                forbidClick: false,
                duration: 0,
            });
        }
        removePending(config);
        config.cancelToken = new CancelToken((c) => {
            pendingList.push({
                url: config.url,
                method: config.method,
                params: config.params,
                data: config.data,
                cancel: c,
            });
        });

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        removePending(response.config);
        if (loading && pendingList.length == 0) {
            Toast.clear();
            loading = null;
        }
        let { status, msg } = response.data;

        if (status === 0) {
            Toast.fail({
                message: msg,
                duration: 2500,
            });
        }

        return Promise.resolve(response.data);
    },
    (error) => {
        // 判断请求异常信息中是否含有超时timeout字符串;
        if (error.message && error.message.includes("timeout")) {
            Toast.fail({
                message: "请求超时",
                duration: 2500,
            });
        } else {
            Toast.fail({
                message: "请求失败" + error.message,
                duration: 2500,
            });
        }
        return Promise.reject(error);
    }
);
export { axios, service };
