<template lang="pug">
router-view(v-slot="{ Component }")
    keep-alive(exclude="order-index,modify-telephone,login-index,error-index")
        component(:is="Component") 
</template>
<script>
import { defineComponent, onMounted } from "vue";
import helper from "@/utils/helper.js";
import store from "@/store";

export default defineComponent({
    setup() {
        onMounted(() => {
            // 储存浏览器类型
            store.commit("SET_NAVIGATOR_INFO", helper.is_weixin());
        });
        return {};
    },
});
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
}
</style>
