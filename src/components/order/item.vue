<template>
    <div class="item">
        <div class="item-top f32 color-333">
            <div class="item-type">订单类型：定制单</div>
            <div class="item-time">
                <span>2019年1月11日 10:23:45</span>
                <a href="javascript:"></a>
            </div>
        </div>
        <div class="item-body">
            <div class="item-body-left">
                <div class="item-body-left-top">
                    <div class="item-img"><img src="" alt=""></div>
                    <div class="item-info">
                        <div class="item-info-p">
                            <span class="item-info-type f32">商品</span>
                            <i class="item-info-value f28">端庄典雅抹胸婚纱</i>
                        </div>
                        <div class="item-info-p">
                            <span class="item-info-type f32">款号</span>
                            <i class="item-info-value f28">L266-NSG-222</i>
                        </div>
                        <div class="item-info-p">
                            <span class="item-info-type f32">尺码</span>
                            <i class="item-info-value f28">L</i>
                        </div>
                        <div class="item-info-p">
                            <span class="item-info-type f32">定制</span>
                            <i class="item-info-value f28">￥10000.00</i>
                        </div>
                    </div>
                </div>
                <div class="item-body-left-bottom">
                    <div class="item-body-ornament-title f32 color-333">配饰</div>
                    <div class="item-body-ornament-cont">
                        <div class="item-body-ornament-p" v-for="(item,index) in list" :key="index">
                            <div class="item-ornament-img"><img src="" alt=""></div>
                            <span class="item-ornament-money f24 color-666">￥1000.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-body-right">
                <div class="item-tip-p">
                    <span class="item-tip-type f32 color-333">单号</span>
                    <i class="item-tip-value f28 color-666">831983183132801</i>
                </div>
                <div class="item-tip-p">
                    <span class="item-tip-type f32 color-333">时间</span>
                    <i class="item-tip-value f28 color-666">2月13日 — 15日</i>
                </div>
                <div class="item-tip-p">
                    <span class="item-tip-type f32 color-333">取件</span>
                    <i class="item-tip-value f28 color-666">快递</i>
                </div>
                <div class="item-tip-p">
                    <span class="item-tip-type f32 color-333">备注</span>
                    <i class="item-tip-value f28 color-666">无</i>
                </div>
                <div class="item-tip-p">
                    <span class="item-tip-type f32 color-333">数量</span>
                    <i class="item-tip-value f28 color-666">1</i>
                </div>
                <div class="item-tip-p">
                    <span class="item-tip-type f32 color-333">付款</span>
                    <i class="item-tip-value f28 color-666">￥12000.00</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"item",
    data(){
        return {
            list:[1,2,3,4,5,6,7,8,9,0]
        }
    }
}
</script>
<style lang="scss" scoped>
.item{
    width: 100%;
    background-color: #fff;
    padding: 0 .1953125rem .1953125rem;
    .item-top {
        padding-bottom: .065104rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: .7421875rem;
        line-height: 1;
    }
    .item-body{
        display: flex;
        .item-body-left{
            flex-shrink: 0;
            flex-grow: 0;
            width: 6.09375rem;
            border-right: .026041rem #D9D9D9 solid;
            .item-body-left-top {
                display: flex;
                .item-img {
                    width: 1.888020rem;
                    height: 2.981770rem;
                    overflow: hidden;
                    background-color: #efefef;
                    img {
                        width: 100%;
                    }
                }
                .item-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-left: .1953125rem;
                    .item-info-p {
                        text-align: left;
                        .item-info-type{
                            display: block;
                            height: .286458rem;
                            line-height: .286458rem;
                            color: #333;
                        }
                        .item-info-value{
                            display: block;
                            height: .260416rem;
                            line-height: .260416rem;
                            margin-top: .052083rem;
                            color:#666;
                        }
                    }
                }
            }
            .item-body-left-bottom {
                .item-body-ornament-title {
                    height: .611979rem;
                    padding-top: .065104rem;
                    display: flex;
                    align-items: center;
                    line-height: 1;
                }
                .item-body-ornament-cont{
                    display: flex;
                    align-items: center;
                    width: calc(100% - .1953125rem);
                    overflow-x: scroll;
                    -webkit-overflow-scrolling: touch;
                    .item-body-ornament-p {
                        flex-shrink: 0;
                        flex-grow: 0;
                        margin-right: .1953125rem;
                        text-align: center;
                        .item-ornament-img {
                            width: .78125rem;
                            height: .78125rem;
                            overflow: hidden;
                            background-color: #efefef;
                            img {
                                width: 100%;
                            }
                        }
                        .item-ornament-money {
                            display: inline-block;
                            height: .221354rem;
                            line-height: .221354rem;
                            margin-top: .052083rem;
                        }
                    }
                }
            }
        }
        .item-body-right{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: .390625rem;
            text-align: left;
            .item-tip-p {
                .item-tip-type {
                    display: block;
                    height: .286458rem;
                    line-height: .286458rem;
                }
                .item-tip-value {
                    display: block;
                    height: .260416rem;
                    line-height: .260416rem;
                    margin-top: .052083rem;
                }
            }
        }
    }
}
</style>

