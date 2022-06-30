<template lang="pug">
.order-details
    van-nav-bar(
        safe-area-inset-top
        title="订单详情"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
        v-if="!wechat")
    .course-content.mb-20
        .title
            .text 课程详情
            .status 已完成
        .info 
            .left.mr-20
                van-image(
                    fit="cover"
                    width="100%"
                    height="100%"
                    radius=".16rem"
                    :src="course.bg_url")
            .right
                .course-title {{course.name}}
                .price
                    .now-price.mr-20 ￥{{course.rprice}}
                    .old-price ￥{{course.price}}
        .order-tips
            .order-sn.mb-30
                .text 订单编号
                .val {{course.order_num}}
            .order-date
                .text 订单日期
                .val {{course.create_time}}
    .price-content.mb-20
        .course-price.mb-30
            .text 商品金额
            .val ￥{{course.price}}
        .course-sale.mb-30
            .text 限时优惠
            .val ￥{{course.price - course.rprice}}   
        //.course-coupons.mb-30
            .text 优惠卷
            .val ￥4000.00      
        //.balance.mb-30
            .text 余额支付
            .val ￥4000.00       
        .pay
            .text 实付
            .val.active ￥{{course.pay_price}}
    .real-name
        .text 真实姓名
        .val {{course.real_name}}
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from "vue";
import { useRoute } from "vue-router";
import { searchOrderDetails } from "@/api/order";
import store from "@/store";

export default defineComponent({
    name: "order-details",
    setup() {
        const route = useRoute();
        const data = reactive({ course: {} });
        const onClickLeft = () => history.back();

        // 判断浏览器环境
        const wechat = computed(() => {
            return store.state.isWechat;
        });

        onMounted(() => {
            searchOrderDetails({
                order_num: route.query.order_num,
            }).then((res) => {
                data.course = res;
            });
        });

        return {
            wechat,
            ...toRefs(data),
            onClickLeft,
        };
    },
});
</script>
<style lang="scss" scoped>
.order-details {
    @include boxSize(100vw, 100vh);
    background: $aura_bg_gray;
    :deep(.van-nav-bar .van-icon) {
        color: #000;
    }
    .course-content {
        @include Padding(0.3rem, 0.3rem);
        background: $aura_bg_white;
        .title {
            @include uflex();
            .text {
                @include fontColor(
                    $aura_fs_default,
                    $aura_col_black,
                    0.32rem,
                    true
                );
            }
            .status {
                @include fontColor($aura_fs_xs, $aura_col_green, 0.32rem, true);
            }
        }
        .info {
            @include Padding(0.24rem, 0);
            @include uflex(left);
            border-bottom: 0.01rem solid #e8e8e8;
            .left {
                @include boxSize(2.3rem, 1.48rem);
            }
            .right {
                @include boxSize(calc(100% - 2.5rem), 1.48rem);
                position: relative;
                .course-title {
                    @include fontColor(
                        $aura_fs_l,
                        $aura_col_black,
                        0.4rem,
                        true
                    );
                    @include textEllipsis();
                }
                .price {
                    @include uflex(left);
                    @include Position(absolute, 0, 0, $istop: false);
                    .now-price {
                        @include fontColor(
                            $aura_fs_xxl,
                            $aura_col_black,
                            0.4rem,
                            true
                        );
                    }
                    .old-price {
                        @include fontColor($aura_fs_m, $aura_col_gray, 0.4rem);
                        text-decoration: line-through;
                    }
                }
            }
        }
        .order-tips {
            @include Padding(0.4rem, 0);
            padding-bottom: 0.1rem;
            .order-sn,
            .order-date {
                @include uflex();
                .text,
                .val {
                    @include fontColor($aura_fs_m, $aura_col_black, 0.3rem);
                }
            }
        }
    }
    .price-content {
        @include Padding(0.4rem, 0.3rem);
        background: $aura_bg_white;
        .course-price,
        .course-sale,
        .course-coupons,
        .balance,
        .pay {
            @include uflex();
            .text,
            .val {
                @include fontColor($aura_fs_m, $aura_col_black, 0.3rem);
            }
            .active {
                color: $aura_col_red;
                font-weight: bold;
            }
        }
    }
    .real-name {
        @include Padding(0.4rem, 0.3rem);
        @include uflex();
        background: $aura_bg_white;
        .text,
        .val {
            @include fontColor($aura_fs_m, $aura_col_black, 0.3rem);
        }
    }
}
</style>
