<template lang="pug">
.modify-telephone
    van-nav-bar(
        safe-area-inset-top
        left-arrow
        @click-left="onClickLeft"
        v-if="!wechat")
    .title 修改手机号
    .form.mb-90
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
    .submit-btn
        van-button(
            type="primary" 
            color="linear-gradient(71deg, #FF8762 0%, #FF4D4D 100%)" 
            block 
            round
            :disabled="!(telephone && code)"
            @click="submitForm") 提交申请
    .tips 建议下单后7日内提交手机号修改申,7日后提交的申请由销售电话审核请输入验证码,验证您手机号的有效性。提交申请后,请耐心等待！手机号修改成功后,您将在消息中心收到通知
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from "vue";
import { validatorTelephone } from "@/utils/common";
import { useRoute, useRouter } from "vue-router";
import { Toast } from "vant";
import { modifyLookTelephone, getSmsCode } from "@/api/login";
import store from "@/store";

export default defineComponent({
    name: "modify-telephone",
    setup() {
        const route = useRoute();
        const router = useRouter();
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
            modifyLookTelephone({
                order_num: route.query.order_num,
                phone: form.telephone,
                vcode: form.code,
            }).then((res) => {
                if (res.status === 1) {
                    Toast.success({
                        message: res.msg,
                    });
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
.modify-telephone {
    @include boxSize(100vw, 100vh);
    background: $aura_bg_white;
    :deep(.van-nav-bar .van-icon) {
        color: #000;
    }
    .title {
        @include Padding(0.32rem, 0.3rem);
        @include fontColor(0.48rem, $aura_col_black, 0.5rem, true);
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
        }
    }
    .submit-btn {
        @include boxSize(6.7rem, 0.96rem);
        margin: 0 auto 0.24rem auto;
        :deep(.van-button) {
            @include boxSize(100%, 100%);
        }
        :deep(.van-button--disabled) {
            background: #e5e5e5 !important;
            color: #fff !important;
            opacity: 1 !important;
        }
    }
    .tips {
        @include Padding(0.32rem, 0.3rem);
        @include fontColor(
            $aura_fs_mini,
            $aura_col_gray,
            0.3rem,
            $center: true
        );
    }
}
</style>
