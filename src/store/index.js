import { createStore } from "vuex";
const userInfo = localStorage.getItem("userInfo");
const isWechat = localStorage.getItem("isWechat");
const address = sessionStorage.getItem("address");

export default createStore({
    state: {
        userInfo: userInfo ? JSON.parse(userInfo) : null,
        address: address ? address : "",
        isWechat: isWechat,
    },
    mutations: {
        // 用户信息
        SET_USER_INFO(state, val) {
            state.userInfo = val;
            localStorage.userInfo = JSON.stringify(val);
        },

        // 地址信息
        SET_USER_ADDRESS(state, val) {
            state.address = val;
            localStorage.address = val;
        },

        // 微信环境
        SET_NAVIGATOR_INFO(state, val) {
            state.isWechat = val;
            localStorage.isWechat = val;
        },
    },
    actions: {
        //用户信息
        UPDATE_USER_INFO({ commit }, val) {
            commit("SET_USER_INFO", val);
        },

        //用户地址
        UPDATE_USER_ADDRESS({ commit }, val) {
            commit("SET_USER_ADDRESS", val);
        },
    },
    modules: {},
});
