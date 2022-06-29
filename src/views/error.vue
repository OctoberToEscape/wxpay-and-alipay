<template lang="pug">
.error-index
    .empty
        van-empty(
            :image="type === '0' ? 'error' : 'search'" 
            :description="type === '0' ? '404 页面不存在' : '当前活动已过期～'")
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "error-index",
    setup() {
        const route = useRoute();
        const type = ref(0);

        onMounted(() => {
            type.value = route.query.type;
            document.title =
                route.query.type === "0" ? "页面不存在" : "活动已过期";
        });

        return { type };
    },
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
