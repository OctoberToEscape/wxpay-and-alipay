<template lang="pug">
.order-success
    main
        .top-cover
            .title.mb-25
                van-icon(name="checked" size=".46rem" color="#fff")
                span.ml-10 购买成功
            .desc 您已成功购买“{{course.name}}”
        .course-content.mb-20
            .course-info
                .title.mb-25 课程详情
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
        .price-content
            .course-price.mb-30
                .text 商品金额
                .val ￥{{course.price}}
            .course-sale.mb-30
                .text 限时优惠
                .val ￥{{course.price - course.rprice}}    
            .course-coupons
                .text 优惠卷
                .val.active -￥{{course.discount_price}}  
        .real-name.mb-20
            .text 真实姓名
            .val {{course.real_name}}
        .user-info
            .title
                span 必要信息确认
                span.tips （为了更好的服务，请如实填写以下信息）
            .choose-telephone
                .tel-title
                    span.mr-10(style="color:#FF3737") *
                    span(style="width:4.2rem").mr-20 支付手机号是否为观看课程手机号
                    van-radio-group(
                        v-model="checked" 
                        direction="horizontal")
                        van-radio.mr-30(
                            name="1" 
                            icon-size=".36rem" 
                            checked-color="#FF3737") 是
                        van-radio(
                            name="2" 
                            icon-size=".36rem" 
                            checked-color="#FF3737") 否
                .pay-telephone.mb-20.mt-30(v-if="checked === '2'") 当前支付手机号:{{course.pay_phone}}
                .study-telephone(v-if="checked === '2'")
                    .tel 登录学习手机号:{{course.learn_phone}}
                    van-button(
                        type="primary"
                        round 
                        color="#333" 
                        plain 
                        hairline 
                        @click="handleRouter('modify-telephone')") 修改手机号
            .choose-address(@click="handleRouter('address')")
                .address-title.mb-20
                    .left
                        span.mr-10(style="color:#FF3737" v-if="course.address === 1") *
                        span.mr-20 邮寄地址{{course.address === 1 ? '（必填）' :''}}
                    van-icon(name="arrow" size=".36rem")
                .desc {{userAddress ? userAddress : '尊贵的会员，请完善地址信息，以便我们为您邮寄教材，确保地址正确可收件，请关注顺丰快递公众号，教材寄出后公众号会有信息提示'}}
    .bottom-btns
        van-button(
            type="primary" 
            round 
            color="#333" 
            plain 
            hairline 
            @click="nameShow = true") 修改姓名
        van-button(
            type="primary" 
            round 
            color="#333" 
            plain 
            hairline 
            @click="handleRouter('pay-details')") 查看订单
    modify-name(
        :show="nameShow" 
        @onClose="nameShow = false" 
        @onClick="hanedleName")
</template>

<script>
import {
    defineComponent,
    ref,
    onActivated,
    reactive,
    toRefs,
    computed,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { payOrderDetails, modifyRealName } from "@/api/order";
import { Toast } from "vant";
import modifyName from "@/components/popup/modify-name.vue";
import store from "@/store";

export default defineComponent({
    name: "order-success",
    components: { modifyName },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const checked = ref("1");
        const nameShow = ref(false);
        const data = reactive({ course: {} });

        // 修改姓名按钮
        const hanedleName = (val) => {
            modifyRealName({
                real_name: val,
                online_oid: data.course.id,
                uid: store.state.userInfo.id,
            }).then((res) => {
                Toast.success({
                    message: res.msg,
                });
                nameShow.value = false;
                data.course.real_name = val;
            });
        };

        // 页面跳转
        const handleRouter = (path) => {
            router.push({
                name: path,
                query: { order_num: data.course.order_num },
            });
        };

        // 地址信息
        const userAddress = computed(() => {
            return store.state.address;
        });

        onActivated(() => {
            // 支付成功详情数据
            payOrderDetails({
                order_num: route.query.order_num,
                uid: store.state.userInfo.id,
            }).then((res) => {
                data.course = res;
            });
        });

        return {
            checked,
            nameShow,
            userAddress,
            ...toRefs(data),
            handleRouter,
            hanedleName,
        };
    },
});
</script>
<style lang="scss" scoped>
.order-success {
    @include uflex($align: normal, $direction: column);
    @include boxSize(100vw, 100vh);
    background: $aura_bg_gray;
    .fixed-bg {
        background: #fff !important;
    }
    :deep(.van-nav-bar) {
        background-color: rgba(0, 0, 0, 0);
    }
    :deep(.van-nav-bar .van-icon) {
        color: #fff;
        font-size: 0.48rem;
    }
    main {
        flex: 1;
        overflow-y: scroll;
        .top-cover {
            @include Padding(0.28rem, 0.3rem);
            @include boxSize(100%, 3.38rem);
            @include settingBackground("/static/img/success-bg.28fbf39a.png");
            padding-top: 1.3rem;
            .title {
                @include uflex(center);
                span {
                    @include fontColor(0.48rem, $aura_col_white, 0.5rem, true);
                }
            }
            .desc {
                width: 3.38rem;
                margin: auto;
                @include fontColor(
                    $aura_fs_s,
                    $aura_col_white,
                    0.36rem,
                    $center: true
                );
            }
        }
        .course-content {
            background: $aura_bg_white;
            border-radius: 0.24rem 0.24rem 0 0;
            margin-top: -0.2rem;
            @include Padding(0.32rem, 0.3rem);
            .title {
                @include fontColor(
                    $aura_fs_default,
                    $aura_col_black,
                    0.35rem,
                    true
                );
            }
            .info {
                @include uflex(left);
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
                            @include fontColor(
                                $aura_fs_m,
                                $aura_col_gray,
                                0.4rem
                            );
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
        .order-tips {
            @include Padding(0.4rem, 0.3rem);
            background: $aura_bg_white;
            border-bottom: 0.01rem solid #e8e8e8;
            .order-sn,
            .order-date {
                @include uflex();
                .text,
                .val {
                    @include fontColor($aura_fs_m, $aura_col_black, 0.3rem);
                }
            }
        }
        .price-content {
            @include Padding(0.4rem, 0.3rem);
            background: $aura_bg_white;
            border-bottom: 0.01rem solid #e8e8e8;
            .course-price,
            .course-sale,
            .course-coupons {
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
        .user-info {
            @include Padding(0.4rem, 0.3rem);
            background: $aura_bg_white;
            .title {
                @include fontColor(
                    $aura_fs_default,
                    $aura_col_black,
                    0.32rem,
                    true
                );
                @include uflex(left);
                .tips {
                    @include fontColor($aura_fs_mini, $aura_col_gray, 0.32rem);
                }
            }
            .choose-telephone {
                border-bottom: 0.01rem solid #e8e8e8;
                @include Padding(0.4rem, 0);
                .tel-title {
                    @include uflex(left);
                    span {
                        @include fontColor(
                            $aura_fs_m,
                            $aura_col_black,
                            0.32rem
                        );
                    }
                    :deep(.van-radio__label) {
                        font-size: 0.28rem !important;
                    }
                }
                .pay-telephone {
                    @include fontColor($aura_fs_m, $aura_col_gray, 0.32rem);
                }
                .study-telephone {
                    @include uflex();
                    @include fontColor($aura_fs_m, $aura_col_gray, 0.32rem);
                    :deep(.van-button) {
                        @include boxSize(1.68rem, 0.48rem);
                        @include fontColor(
                            $aura_fs_xs,
                            $aura_col_black,
                            0.48rem
                        );
                    }
                }
            }
            .choose-address {
                @include Padding(0.4rem, 0);
                .address-title {
                    @include uflex();
                    .left {
                        @include uflex(left);
                        span {
                            @include fontColor(
                                $aura_fs_m,
                                $aura_col_black,
                                0.32rem
                            );
                        }
                    }
                }
                .desc {
                    @include fontColor($aura_fs_xs, $aura_col_gray, 0.32rem);
                }
            }
        }
    }
    .bottom-btns {
        @include boxSize(100%, auto);
        @include Padding(0.24rem, 0.32rem);
        @include uflex();
        height: calc(80px + constant(safe-area-inset-bottom));
        height: calc(80px + env(safe-area-inset-bottom));
        background: $aura_bg_white;
        box-shadow: 0 0 0.1rem 0 #ccc;
        :deep(.van-button) {
            @include boxSize(3.3rem, 0.8rem);
        }
    }
}
</style>
