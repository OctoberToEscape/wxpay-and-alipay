<template lang="pug">
.order-address 
    van-nav-bar(
        safe-area-inset-top
        title="填写地址"
        left-arrow
        @click-left="onClickLeft"
        v-if="!wechat")
    van-notice-bar(
        left-icon="volume-o"
        text="尊贵的会员，请完善填写信息，以便我们为您邮寄教材")
    .form
        van-form(@submit="onSubmit")
            van-cell-group(inset)
                van-field(
                    disableautocomplete
                    v-model="form.name"
                    name="收货人"
                    label="收货人"
                    placeholder="请填写收件人姓名"
                    maxlength="12"
                    autocomplete="off"
                    :rules="[{ required: true, message: '请填写用户名' }]")
                van-field(
                    v-model="form.phone"
                    name="手机号码"
                    label="手机号码"
                    placeholder="请填写收件人手机号"
                    maxlength="11"
                    autocomplete="off"
                    :rules="[{ required: true, message: '请填写正确手机号',validator }]")
                van-field(
                    v-model="form.area"
                    name="所在地区"
                    label="所在地区"
                    placeholder="省市区县、乡镇等"
                    is-link
                    readonly
                    @click="showPicker = true")
                van-field(
                    v-model="form.address"
                    name="详细地址"
                    label="详细地址"
                    placeholder="街道、门牌号等"
                    maxlength="40"
                    autocomplete="off"
                    :rules="[{ required: true, message: '请填写详细地址，街道、门牌号等' }]")
            .submit-btn
                van-button(
                    round 
                    block 
                    type="primary" 
                    native-type="submit" 
                    color="linear-gradient(71deg, #FF8762 0%, #FF4D4D 100%)"
                    :disabled="!(form.name && form.phone && form.area && form.address)") 提交
    van-popup(v-model:show="showPicker" position="bottom") 
        van-area(
            title="请选择" 
            :area-list="areaList"
            @confirm="handleConfirm"
            @cancel="showPicker = false")
</template>

<script>
import {
    defineComponent,
    reactive,
    toRefs,
    ref,
    onActivated,
    computed,
} from "vue";
import { validatorTelephone } from "@/utils/common";
import { areaList } from "@vant/area-data";
import { getAddress, setAddress } from "@/api/order";
import { useRoute, useRouter } from "vue-router";
import { Toast } from "vant";
import store from "@/store";

export default defineComponent({
    name: "order-address",
    setup() {
        const route = useRoute();
        const router = useRouter();
        const showPicker = ref(false);
        const data = reactive({ form: {} });
        // 返回上一页
        const onClickLeft = () => history.back();

        // 手机号正则验证
        const validator = (val) => !validatorTelephone(val);

        // 城市选择
        const handleConfirm = (e) => {
            const province = e[0].code,
                city = e[1].code,
                county = e[2].code,
                area = e
                    .filter((item) => !!item)
                    .map((item) => item.name)
                    .join("-");
            data.form.area = area;
            data.form.province = province;
            data.form.city = city;
            data.form.county = county;
            showPicker.value = false;
        };

        // 提交表单
        const onSubmit = () => {
            setAddress({
                ...data.form,
                uid: store.state.userInfo.id,
                order_num: route.query.order_num,
            }).then((res) => {
                if (res.status === 1) {
                    Toast.success({
                        message: res.msg,
                    });
                    store.dispatch("UPDATE_USER_ADDRESS", data.form.address);
                    setTimeout(() => {
                        router.back();
                    }, 1500);
                }
            });
        };

        // 判断浏览器环境
        const wechat = computed(() => {
            return store.state.isWechat;
        });

        onActivated(() => {
            // 获取地址
            getAddress({
                uid: store.state.userInfo.id,
            }).then((res) => {
                data.form = res;
            });
        });

        return {
            areaList,
            showPicker,
            wechat,
            ...toRefs(data),
            validator,
            onClickLeft,
            handleConfirm,
            onSubmit,
        };
    },
});
</script>
<style lang="scss" scoped>
.order-address {
    @include boxSize(100vw, 100vh);
    background: $aura_bg_gray;
    :deep(.van-nav-bar .van-icon) {
        color: #000;
    }
    .form {
        background: $aura_bg_white;
        .submit-btn {
            @include layout-flex(fixed, $top: 93%);
            :deep(.van-button) {
                @include boxSize(6.7rem, 0.8rem);
            }
            :deep(.van-button--disabled) {
                background: #e5e5e5 !important;
                opacity: 1 !important;
            }
        }
    }
}
</style>
