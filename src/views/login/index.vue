<template lang="pug">
.login-index
    van-nav-bar(
        safe-area-inset-top
        left-arrow
        title="登录"
        @click-left="onClickLeft"
        v-if="!wechat")
    .top-cover
        .text.mb-30 登录光环
        .tips 请完成登录
    .form.mb-10
        .telephone.mb-20
            van-field(
                :border="false"
                v-model="telephone" 
                maxlength="11"
                autocomplete="off"
                placeholder="请输入手机号")
            van-icon(
                name="clear" 
                size="0.36rem" 
                color="#DDDDDD"
                v-if="telephone.length"
                @click="telephone = ''")
        .sms-code
            van-field(
                :border="false"
                v-model="code" 
                autocomplete="off"
                placeholder="请输入验证码"
                maxlength="6")
            van-button(
                type="primary" 
                color="#FF3737" 
                plain 
                hairline 
                round
                size="small"
                :disabled="disabled"
                @click="handleSms") {{text}}
    .aura-tips.mb-30
        .text.mb-10 未注册手机验证后自动登录
        .text 
            span 注册即同意
            span.active(@click="ruleShow = true") 《服务与隐私政策》
            span 并授权光环获得本机号码
    .submit-btn
        van-button(
            type="primary" 
            color="linear-gradient(71deg, #FF8762 0%, #FF4D4D 100%)" 
            block 
            round
            :disabled="!(telephone && code)"
            @click="submitForm") 登录
    rule-popup(:show="ruleShow" :rich="rich" @onClose="ruleShow = false")
</template>

<script>
import { defineComponent, reactive, toRefs, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { validatorTelephone } from "@/utils/common";
import { Toast } from "vant";
import { login, getSmsCode } from "@/api/login";
import { ruleRich } from "@/utils/rule";
import rulePopup from "@/components/popup/rule-popup.vue";
import store from "@/store";

export default defineComponent({
    name: "login-index",
    components: { rulePopup },
    setup() {
        const router = useRouter();
        const ruleShow = ref(false);
        const rich = ruleRich();
        const form = reactive({ telephone: "", code: "" });
        const codeStatus = reactive({ text: "获取验证码", disabled: false });

        // 返回
        const onClickLeft = () => history.back();

        // 获取验证码
        const handleSms = () => {
            if (form.telephone && !validatorTelephone(form.telephone)) {
                getSmsCode({
                    phone: form.telephone,
                }).then((res) => {
                    if (res.status === 1) {
                        Toast.success({
                            message: res.msg,
                        });
                        let timer,
                            num = 60;
                        if (timer) clearInterval(timer);

                        timer = setInterval(() => {
                            num--;
                            if (num === 0) {
                                clearInterval(timer);
                                codeStatus.text = "获取验证码";
                                codeStatus.disabled = false;
                            } else {
                                codeStatus.text = `${num}秒后重试`;
                                codeStatus.disabled = true;
                            }
                        }, 1000);
                    }
                });
            } else Toast({ message: "请输入正确手机号", duration: 1500 });
        };

        // 提交表单
        const submitForm = () => {
            login({
                phone: form.telephone,
                vcode: form.code,
                type: 2,
            }).then((res) => {
                if (res.status === 1) {
                    Toast.success({
                        message: res.msg,
                    });
                    store.dispatch("UPDATE_USER_INFO", res.userinfo);
                    setTimeout(() => {
                        router.back();
                    }, 2000);
                }
            });
        };

        // 判断浏览器环境
        const wechat = computed(() => {
            return store.state.isWechat;
        });

        return {
            rich,
            ruleShow,
            wechat,
            ...toRefs(form),
            ...toRefs(codeStatus),
            onClickLeft,
            handleSms,
            submitForm,
        };
    },
});
</script>
<style lang="scss" scoped>
.login-index {
    @include boxSize(100vw, 100vh);
    background: $aura_bg_white;
    :deep(.van-nav-bar .van-icon) {
        color: #000;
    }
    .top-cover {
        @include boxSize(100%, 2rem);
        @include Padding(0.36rem, 0);
        background: linear-gradient(131deg, #ff3737 0%, #ff6e4b 100%);
        .text {
            @include fontColor(0.48rem, $aura_col_white, 0.5rem, true, true);
        }
        .tips {
            @include fontColor(
                $aura_fs_m,
                $aura_col_white,
                0.32rem,
                $center: true
            );
        }
    }
    .form {
        @include Padding(0.32rem, 0.3rem);
        .telephone,
        .sms-code {
            @include boxSize(100%, auto);
            @include uflex();
            border-bottom: 0.01rem solid #dddddd;
            :deep(.van-button) {
                @include boxSize(1.9rem, 0.56rem);
            }
            :deep(.van-button--disabled) {
                color: #999 !important;
                border-color: #999 !important;
                opacity: 1 !important;
            }
            :deep(.van-cell) {
                @include Padding(0.2rem, 0);
            }
            :deep(.van-field__control) {
                font-size: 0.32rem;
            }
        }
    }
    .aura-tips {
        .text {
            @include fontColor(
                $aura_fs_xs,
                $aura_col_gray,
                0.28rem,
                $center: true
            );
            .active {
                color: $aura_col_red;
            }
        }
    }
    .submit-btn {
        @include boxSize(6.7rem, 0.8rem);
        margin: 0 auto 0.24rem auto;
        :deep(.van-button) {
            @include boxSize(100%, 100%);
            font-size: 0.32rem;
        }
        :deep(.van-button--disabled) {
            background: #e5e5e5 !important;
            color: #fff !important;
            opacity: 1 !important;
        }
    }
}
</style>
