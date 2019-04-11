<template>
    <div class="index">
        <div class="init-head">
            <div class="init-head-btn">
                <a href="javascript:" class="no-bg"></a>
            </div>
        </div>
        <div class="init-check no-bg1">
            <div class="init-check-box init-check-left">
                <a href="javascript:" class="init-check-left-btn">
                    <i></i>
                    <span class="f32">1月15日</span>
                </a>
            </div>
            <div class="init-check-box init-check-mid">
                <a href="javascript:" class="item-check-switch item-check-time-prev no-bg"><i></i></a>
                <p class="item-check-show-time f32">08:00 — 10::00</p>
                <a href="javascript:" class="item-check-switch item-check-time-prev no-bg"><i></i></a>
            </div>
            <div class="init-check-box init-check-right">
                <a href="javascript:" class="no-bg"></a>
            </div>
        </div>
        <div class="init-body no-bg">
            <item1 v-for="(item,index) in arr" :key="index" />
        </div>
        <div class="init-bottom no-bg">
            <a href="javascript:" class="init-bottom-nav" v-for="(item,index) in nav" :key="index" @click="handleLinkTo($event,index)">
                <div class="init-bottom-icon no-bg1"></div>
                <span class="f32 color-333">{{item}}</span>
            </a>
        </div>
        <a href="javascript:" class="init-start f40" @click.stop="handleStart">开始选款</a>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
import Item1 from "./item1"
export default {
    name: 'HelloWorld',
    data () {
        return {
            nav:["订单管理",'客户管理','试衣管理','商品检索','我的业绩'],
            arr:[1,2,3,4,5,6,7,8,9,0]
        }
    },
    mounted(){

    },
    methods:{
        handleStart(){
            // this.$router.push("/app/dress");
        },
        handleLinkTo(e,index){
            if(index == 2){
                this.$router.push("/app/dress-room");
                return;
            }
            if(index == 3){
                this.$router.push("/app/dress");
                return;
            }
            if(index == 4){
                this.$router.push("/app/performance");
                return;
            }
        }
    },
    components:{
        Item1
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .init-head{
        height: 1.302083rem;
        .init-head-btn {
            width: 100%;
            display: flex;
            align-items: center;
            height: .572916rem;
            padding: 0 .143229rem;
            a {
                width: .364583rem;
                height: .364583rem;
            }
        }
    }
    .init-check {
        height: .572916rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .260416rem;
        .init-check-box {
            display: flex;
            align-items: center;
            line-height: 1;
            &.init-check-left,
            &.init-check-right {
                width: 1.5625rem;
            }
            &.init-check-left {
                .init-check-left-btn {
                    display: flex;
                    align-items: center;
                    color: #fff;
                }
            }
            &.init-check-right {
                flex-direction: row-reverse;
                a {
                    width: .364583rem;
                    height: .364583rem;
                }
            }
            &.init-check-mid {
                .item-check-switch {
                    width: .364583rem;
                    height: .364583rem;
                }
                .item-check-show-time {
                    color:#FF2D55;
                    padding: 0 .15625rem;
                }
            }
        }
        
    }
    .init-body {
        width: 100%;
        // height: 8.333333rem;
        height: 7.864583rem;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        padding: 0 .13671875rem;
        text-align: left;
        font-size: 0;
    }
    .init-bottom {
        width: 9.479166rem;
        height: 1.861979rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: .260416rem auto;
        .init-bottom-nav {
            .init-bottom-icon {
                width: .625rem;
                height: .625rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
            }
            span {
                display: inline-block;
                height: .286458rem;
                line-height: .286458rem;
                margin-top: .15625rem;
            }
        }
    }
    .init-start {
        display: block;
        width: 9.479166rem;
        height: .703125rem;
        background-color: #FF5677;
        color: #fff;
        line-height: .703125rem;
        margin: 0 auto;
        border-radius: .026041rem;
    }
}
</style>

