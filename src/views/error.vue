<template lang="pug">
.error-index
    .empty
        van-empty(image="error" description="404 页面不存在")
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "error-index",
    setup() {},
});
</script>

<style lang="scss" scoped>
.error-index {
    @include boxSize(100vw, 100vh);
    background: $aura_bg_white;
    .empty {
        @include layout-flex();
        :deep(.van-empty__description) {
            padding: 0;
        }
    }
}
</style>
