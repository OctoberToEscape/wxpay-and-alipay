// import Vue from "vue";
import svgIcon from "@/components/svg-icon/index.vue"; // svg组件

// register globally
// Vue.component("svg-icon", svgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
requireAll(req);

export default svgIcon;
