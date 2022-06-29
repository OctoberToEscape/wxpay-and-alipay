import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/views/index.vue"),
        meta: {
            title: "首页",
        },
    },
    {
        path: "/error",
        name: "error",
        component: () => import("@/views/error.vue"),
        meta: {
            title: "页面不存在",
        },
    },
    {
        path: "/payment",
        name: "payment",
        component: () => import("@/views/order/index.vue"),
        meta: {
            title: "确认订单",
        },
    },
    {
        path: "/pay-success",
        name: "pay-success",
        component: () => import("@/views/order/success.vue"),
        meta: {
            title: "支付成功",
        },
    },
    {
        path: "/address",
        name: "address",
        component: () => import("@/views/order/address.vue"),
        meta: {
            title: "修改地址",
        },
    },
    {
        path: "/pay-details",
        name: "pay-details",
        component: () => import("@/views/order/details.vue"),
        meta: {
            title: "订单详情",
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "登录",
        },
    },
    {
        path: "/modify-telephone",
        name: "modify-telephone",
        component: () => import("@/views/login/modifyTelephone.vue"),
        meta: {
            title: "修改手机号",
        },
    },
];

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
};

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior,
});

router.beforeEach((to, from, next) => {
    // 页面404
    const result = routes.some((item) => item.path === to.path);
    if (!result)
        next({
            name: "error",
            query: { type: "error", title: "404 页面不存在" },
        });
    // 页面标题
    if (to.meta.title) document.title = to.meta.title;
    next();
});

export default router;
