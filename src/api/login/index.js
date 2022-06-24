import { service } from "@/utils/request";
import qs from "qs";

// 获取验证码
export const getSmsCode = (data) => {
    return service.post("/Login/msgSend", qs.stringify(data)).then((res) => {
        return res;
    });
};

// 登录接口
export const login = (data) => {
    return service.post("/login/login", qs.stringify(data)).then((res) => {
        return res;
    });
};

// 修改看课手机号
export const modifyLookTelephone = (data) => {
    return service
        .post("/smallOrderExtend/checkLearnPhone", qs.stringify(data))
        .then((res) => {
            return res;
        });
};
