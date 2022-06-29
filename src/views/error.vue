<template lang="pug">
.error-index
    .empty
        van-empty(
            :image="type" 
            :description="title")
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "error-index",
    setup() {
        const route = useRoute();
        const info = reactive({ type: "", title: "" });

        onMounted(() => {
            info.type = route.query.type;
            info.title = route.query.title;
            document.title = route.query.title;
        });

        return { ...toRefs(info) };
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
