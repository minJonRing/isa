<template>
    <div class="item">
        <div class="item-top">
            <div class="item-info">
                <div class="item-info-left">
                    <div class="item-img">
                        <img src="" alt="">
                    </div>
                    <div class="item-user-name">
                        <span class="f28">王流失</span>
                        <i></i>
                    </div>
                </div>
                <div class="item-info-right">
                    <div class="item-time f28">08:00 — 10:00</div>
                    <div class="item-server f24">
                        <p class="item-server-p">
                            <span class="item-type color-333">客服：</span>
                            <i class="item-server-name color-999">刘婷婷</i>
                        </p>
                        <p class="item-server-p">
                            <span class="item-type color-333">客服：</span>
                            <i class="item-server-name color-999">刘婷婷</i>
                        </p>
                    </div>
                </div>
            </div>
            <div class="item-basic f24">
                <div class="item-basic-p">
                    <span class="item-basic-type color-333 flex-0">预算：</span>
                    <i class="item-basic-value text-hide-1 color-999 flex-1">2万元</i>
                </div>
                <div class="item-basic-p">
                    <span class="item-basic-type color-333 flex-0">需求：</span>
                    <i class="item-basic-value text-hide-1 color-999 flex-1">男士西装、姐妹装、婚鞋</i>
                </div>
            </div>
            <div class="item-edit f24">
                <a href="javascript:" class="item-edit-btn">
                    <div class="item-edit-icon"></div>
                    <span class="item-edit-name">到店</span>
                </a>
                <a href="javascript:" class="item-edit-btn">
                    <div class="item-edit-icon"></div>
                    <span class="item-edit-name">到店</span>
                </a>
                <a href="javascript:" class="item-edit-btn">
                    <div class="item-edit-icon"></div>
                    <span class="item-edit-name">到店</span>
                </a>
            </div>
        </div>
        <div class="item-bottom f24">
            <a href="javascript:" class="item-btn item-btn-continue">查看跟进</a>
            <a href="javascript:" class="item-btn item-btn-await">更改接待</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"item1",
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.item {
    display: inline-block;
    width: 2.994791rem;
    height: 3.736979rem;
    overflow: hidden;
    background-color: #fff;
    margin: .130208rem .123697rem;
    .item-top {
        height: 3.190104rem;
        padding: .3125rem .364583rem 0 .364583rem;
        .item-info {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .item-info-left{
                width: 1.002604rem;
                .item-img {
                    width: .625rem;
                    height: .625rem;
                    border-radius: 50%;
                    overflow: hidden;
                    background-color: #efefef;
                    img {
                        height: 100%;
                    }
                }
                .item-user-name{
                    display: flex;
                    align-items: center;
                    margin-top: .052083rem;
                    height: .260416rem;
                    line-height: 1;
                    color: #333;
                }
            }
            .item-info-right{
                widows: 1.263020rem;
                .item-time {
                    width: 100%;
                    height: .260416rem;
                    line-height: .260416rem;
                    color: #FE5578;
                    text-align: right;
                }
                .item-server {
                    width: 100%;
                    padding-top: .104166rem;
                    .item-server-p {
                        display: inline-block;
                        width: 100%;
                        margin: .0390625rem 0 ;
                        text-align: right;
                        height: .221354rem;
                        line-height: .221354rem;
                    }
                }
            }
        }
        .item-basic {
            padding: .1171875rem 0 .169270rem;
            .item-basic-p {
                height: .221354rem;
                display: flex;
                align-items: center;
                line-height: 1;
                margin: .0390625rem 0;
            }
        }
        .item-edit {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .item-edit-btn {
                text-align: center;
                .item-edit-icon {
                    display: inline-block;
                    width: .520833rem;
                    height: .520833rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border:.013020rem rgba(217,217,217,1) solid;
                }
                .item-edit-name {
                    display: inline-block;
                    height: .221354rem;
                    line-height: .221354rem;
                    color:#ccc;
                    margin-top: .052083rem;
                }
            }
        }
    }
    .item-bottom {
        height: .546875rem;
        border-top: .013020rem #E9E9E9 solid;
        display: flex;
        align-items: center;
        .item-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 100%;
            color:#999999;
            &.item-btn-continue {
                border-right: .013020rem #E9E9E9 solid;
            }
        }
    }
}
</style>

