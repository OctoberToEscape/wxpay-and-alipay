<template lang="pug">
.order-index
    van-nav-bar(
        title="确认订单"
        safe-area-inset-top
        fixed
        placeholder
        v-if="!wechat")
    main
        .course-content.mb-20
            .title 课程详情
            .info 
                .left.mr-20
                    van-image(
                        fit="cover"
                        width="100%"
                        height="100%"
                        radius=".16rem"
                        :src="course.bg_url")
                .right
                    .course-title {{course.name}}
                    .price
                        .now-price.mr-20 ￥{{course.rprice}}
                        .old-price ￥{{course.price}}
        .real-name.mb-20
            .name-left
                .text.mb-10 真实姓名（必填项）
                .tips 请填写真实姓名
            van-cell-group(inset)
                van-field(
                    v-model="course.real_name" 
                    placeholder="请输入姓名"
                    autocomplete="off"
                    maxlength="12")
        .pay-price.mb-20
            .price-old.mb-25 
                .text 课程单价
                .value ￥{{course.price}}
            .price-new
                .text 限时特价
                .value.active ￥{{course.preferential_price}}
        .choose-pay.mb-20
            .title.mb-40 支付方式
            van-radio-group(v-model="payChoose")
                van-cell-group(:border="false")
                    van-cell(
                        clickable 
                        @click="payChoose = '1'" 
                        :border="false")
                        template(#title)
                            van-icon(
                                name="wechat-pay" 
                                size=".52rem" 
                                color="#09bb07")
                            span.ml-10 微信支付
                        template(#right-icon)
                            van-radio(name="1" checked-color="#ff3737") 
                    van-cell(
                        v-if="!wechat"
                        clickable 
                        @click="payChoose = '2'" 
                        :border="false")
                        template(#title)
                            van-icon(
                                name="alipay" 
                                size=".52rem" 
                                color="#108ee9 ")
                            span.ml-10 支付宝支付
                        template(#right-icon)
                            van-radio(name="2" checked-color="#ff3737") 
        .rules
            van-checkbox(
                v-model="checked"
                checked-color="#ff3737"
                icon-size=".32rem") 
                span 已阅读并同意
                span.active(@click.stop="ruleShow = true") 《光环课程支付协议》
    .pay-bottom-btn
        .left(v-if="course.end_time - course.system_time > 0")
            .text.mb-10 特价倒计时
            van-count-down(
                :time="course.end_time - course.system_time"
                format="DD 天 HH : mm : ss"
                @finish="finish")
        div(:class="course.end_time - course.system_time > 0 ? 'right-mini ' : 'right-lang'")
            van-button(
                color="#FF3737" 
                round 
                block 
                @click="handleBuy") 立即支付
    rule-popup(
        :show="ruleShow" 
        :rich="course.agreement_content" 
        @onClose="ruleShow = false")
</template>

<script>
import {
    defineComponent,
    ref,
    computed,
    onMounted,
    reactive,
    toRefs,
} from "vue";
import rulePopup from "@/components/popup/rule-popup.vue";
import store from "@/store";
import { useRouter, useRoute } from "vue-router";
import { Toast } from "vant";
import {
    orderDetails,
    aliPay,
    getWechatCode,
    getOpenid,
    wxPay,
} from "@/api/order";

export default defineComponent({
    name: "order-index",
    components: { rulePopup },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const checked = ref(false);
        const ruleShow = ref(false);
        const payChoose = ref("1");
        const data = reactive({ course: {} });

        const getData = () => {
            let { channel_id } = route.query;
            orderDetails({
                channel_id,
                uid: store.state.userInfo ? store.state.userInfo.id : "",
            }).then((res) => {
                if (res) data.course = res;
            });
        };

        // 支付按钮点击
        const handleBuy = () => {
            const userinfo = localStorage.userInfo;
            if (userinfo) {
                if (!data.course.real_name) {
                    Toast("请填写真实姓名");
                    return;
                }
                if (!checked.value) {
                    Toast("请同意支付协议");
                    return;
                }
                payChoose.value === "1" ? wechatPay() : alipay();
            } else {
                router.push({ name: "login" });
            }
        };

        // 微信支付
        const wechatPay = () => {
            if (wechat.value) {
                console.log("吊起微信支付jssdk");
                // 微信内浏览器 微信jssdk支付

                if (!localStorage.OPENID) {
                    getWechatCode({
                        redirect_url: encodeURIComponent(window.location.href),
                    }).then((res) => {
                        console.log(res.authurl);
                        window.location.href = res.authurl;
                    });
                }
            } else {
                console.log("吊起微信支付h5商户号");
                // 外部浏览器 微信H5支付
                wxPay({
                    channel_id: route.query.channel_id,
                    // uid: store.state.userInfo.id,
                    uid: 272321,
                    pay_method: 2,
                    if_wechat_browser: 0,
                    real_name: data.course.real_name,
                    redirect_url: `${window.origin}/pay-success?order_num=`,
                }).then((res) => {
                    if (res.status === 1) {
                        window.location.href = res.data.mweb_url;
                    }
                });
            }
        };

        // 支付宝支付
        const alipay = () => {
            aliPay({
                channel_id: route.query.channel_id,
                uid: store.state.userInfo.id,
                pay_method: 1,
                real_name: data.course.real_name,
                redirect_url: `${window.origin}/pay-success?order_num=`,
            }).then((res) => {
                /**
                 * 为什么res要判断数据类型
                 * 因为接口不规范：
                 * 能支付的时候res是返回的一个字符串形式的form表单
                 * 已购买res返回的是json形式的data对象
                 * 所以判断了typeof
                 */
                if (typeof res === "string") {
                    const div = document.createElement("div");
                    div.innerHTML = res;
                    document.body.appendChild(div);
                    document.forms[0].submit();
                }
            });
        };

        // 判断浏览器环境
        const wechat = computed(() => {
            return store.state.isWechat;
        });

        // 倒计时结束
        const finish = () => getData();

        onMounted(() => {
            getData();
        });

        return {
            checked,
            ruleShow,
            payChoose,
            wechat,
            ...toRefs(data),
            finish,
            handleBuy,
            wechatPay,
            alipay,
        };
    },
});
</script>
<style lang="scss" scoped>
.order-index {
    @include uflex($align: normal, $direction: column);
    @include boxSize(100vw, 100vh);
    background: $aura_bg_gray;
    main {
        flex: 1;
        overflow-y: scroll;
        .course-content {
            @include Padding(0.3rem, 0.3rem);
            background: $aura_bg_white;
            .title {
                @include fontColor(
                    $aura_fs_default,
                    $aura_col_black,
                    0.32rem,
                    true
                );
            }
            .info {
                @include Padding(0.24rem, 0);
                @include uflex(left);
                padding-bottom: 0;
                .left {
                    @include boxSize(2.3rem, 1.48rem);
                }
                .right {
                    @include boxSize(calc(100% - 2.5rem), 1.48rem);
                    position: relative;
                    .course-title {
                        @include fontColor(
                            $aura_fs_l,
                            $aura_col_black,
                            0.4rem,
                            true
                        );
                        @include textEllipsis();
                    }
                    .price {
                        @include uflex(left);
                        @include Position(absolute, 0, 0, $istop: false);
                        .now-price {
                            @include fontColor(
                                $aura_fs_xxl,
                                $aura_col_black,
                                0.4rem,
                                true
                            );
                        }
                        .old-price {
                            @include fontColor(
                                $aura_fs_m,
                                $aura_col_gray,
                                0.4rem
                            );
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
        .real-name {
            @include Padding(0.36rem, 0.3rem);
            @include uflex();
            background: $aura_bg_white;
            .name-left {
                .text {
                    @include fontColor($aura_fs_m, $aura_col_black, 0.32rem);
                }
                .tips {
                    @include fontColor($aura_fs_xs, $aura_col_red, 0.28rem);
                }
            }
            :deep(.van-field) {
                background: $aura_bg_gray;
            }
        }
        .pay-price {
            @include Padding(0.4rem, 0.3rem);
            background: $aura_bg_white;
            .price-old,
            .price-new {
                @include uflex();
                @include fontColor($aura_fs_m, $aura_col_black, 0.32rem);
                .active {
                    color: $aura_col_red;
                }
            }
        }
        .choose-pay {
            @include Padding(0.4rem, 0.3rem);
            background: $aura_bg_white;
            .title {
                @include fontColor(
                    $aura_fs_default,
                    $aura_col_black,
                    0.38rem,
                    true
                );
            }
            :deep(.van-cell) {
                @include Padding(0.2rem, 0);
            }
            :deep(.van-cell__title) {
                @include uflex(left);
            }
        }
        .rules {
            @include Padding(0, 0.3rem);
            span {
                @include fontColor($aura_fs_xs, $aura_col_gray, 0.8rem);
            }
            .active {
                color: $aura_col_blue;
            }
        }
    }
    .pay-bottom-btn {
        @include boxSize(100%, auto);
        @include Padding(0.24rem, 0.32rem);
        @include uflex();
        height: calc(80px + constant(safe-area-inset-bottom));
        height: calc(80px + env(safe-area-inset-bottom));
        background: $aura_bg_white;
        box-shadow: 0 0 0.1rem 0 #ccc;
        .left {
            .text {
                @include fontColor($aura_fs_m, $aura_col_black, 0.32rem, true);
            }
            :deep(.van-count-down) {
                color: $aura_col_red;
            }
        }
        .right-mini {
            @include boxSize(2.76rem, 0.8rem);
            :deep(.van-button) {
                @include boxSize(100%, 100%);
            }
        }
        .right-lang {
            @include boxSize(100%, 0.8rem);
            :deep(.van-button) {
                @include boxSize(100%, 100%);
            }
        }
    }
}
</style>
