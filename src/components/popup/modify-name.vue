<template lang="pug">
van-popup.modify-name(
    v-model:show="dialog"
    round
    :close-on-click-overlay="false"
    @close="close")
    .modify-name-content
        .title.mb-30 修改姓名
        van-cell-group(inset)
            van-field(
                v-model="name" 
                autocomplete="off"
                placeholder="请输入姓名" 
                maxlength="10"
                border)
        .handle-btn
            van-button(
                plain 
                type="primary" 
                color="#333"
                @click="close") 取消
            span 
            van-button(
                plain 
                type="primary"
                :disabled="!name"
                @click="checkName") 确定
</template>
<script>
import { defineComponent, ref, watchEffect } from "vue";
export default defineComponent({
    name: "modify-name-popup",
    props: {
        show: {
            type: Boolean,
            default: () => false,
        },
    },
    setup(props, { emit }) {
        const dialog = ref(false);
        const name = ref("");
        // 弹窗关闭
        const close = () => emit("onClose");

        // 确定按钮
        const checkName = () => emit("onClick", name.value);

        // 监听props
        watchEffect(() => {
            dialog.value = props.show;
        });

        return {
            dialog,
            name,
            close,
            checkName,
        };
    },
});
</script>
<style lang="scss" scoped>
.modify-name {
    .modify-name-content {
        @include boxSize(5.5rem, 3rem);
        @include Padding(0.3rem, 0.32rem);
        position: relative;
        .title {
            @include fontColor(
                $aura_fs_default,
                $aura_col_black,
                0.36rem,
                true,
                true
            );
        }
        :deep(.van-field) {
            @include Padding(0.15rem, 0.1rem);
            background: $aura_bg_gray;
        }
        .handle-btn {
            @include boxSize(100%, auto);
            @include uflex();
            @include Position(absolute, 0, 0, $istop: false);
            border-top: 0.01rem solid #e8e8e8;
            span {
                @include boxSize(0.01rem, 0.88rem);
                background: #e8e8e8;
            }
            :deep(.van-button) {
                flex: 1;
            }
        }
    }
}
</style>
