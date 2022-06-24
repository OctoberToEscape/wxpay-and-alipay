<template lang="pug">
.layout-index 光环国际h5页面合集
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "index",
    setup() {},
});
</script>
<style lang="scss" scoped>
.layout-index {
    @include boxSize(100vw, 100vh);
    @include fontColor($aura_fs_default, $aura_col_black, 100vh, $center: true);
    background: $aura_bg_white;
}
</style>
