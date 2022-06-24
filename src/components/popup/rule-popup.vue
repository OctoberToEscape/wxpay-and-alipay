<template lang="pug">
van-popup.modify-name(
    v-model:show="dialog"
    round
    :close-on-click-overlay="false"
    @close="close")
    .modify-name-content
        .desc(v-html="rich")
        .handle-btn
            van-button(
                plain 
                type="primary"
                @click="close") 确定
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
        rich: {
            type: String,
            default: () => "",
        },
    },
    setup(props, { emit }) {
        const dialog = ref(false);

        // 弹窗关闭
        const close = () => emit("onClose");

        // 监听props
        watchEffect(() => {
            dialog.value = props.show;
        });

        return {
            dialog,
            close,
        };
    },
});
</script>
<style lang="scss" scoped>
.modify-name {
    .modify-name-content {
        @include uflex($align: normal, $direction: column);
        padding-bottom: 0;
        width: 6rem;
        .desc {
            @include fontColor($aura_fs_default, $aura_col_black, 0.44rem);
            @include Padding(0.3rem, 0.32rem);
            max-height: 7rem;
            overflow-y: scroll;
        }
        .handle-btn {
            @include boxSize(100%, auto);
            @include uflex();
            background: #fff;
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
