<template>
    <div class="edit">
        <div class="edit-top">
            <div class="edit-left">
                <img src="" alt="">
                <a href="javascript:" class="edit-zoom no-bg"></a>
            </div>
            <div class="edit-right">
                <div class="edit-parameter-box edit-list-box">
                    <div class="edit-list">
                        <div class="edit-list-item" v-for="(item,index) in new Array(6)" :key="index">
                            <p class="edit-list-item-title f32 color-333">撒大大</p>
                            <p class="edit-list-item-value f28 color-666">JLD A </p>
                        </div>
                    </div>
                </div>
                <div class="edit-money-box edit-list-box">
                    <div class="edit-list">
                        <div class="edit-list-item">
                            <p class="edit-list-item-title f32 color-333">购买</p>
                            <p class="edit-list-item-value f28 color-666">￥7000.00</p>
                        </div>
                        <div class="edit-list-item">
                            <p class="edit-list-item-title f32 color-333">租赁</p>
                            <p class="edit-list-item-value f28 color-666">￥3000.00</p>
                        </div>
                        <div class="edit-list-item">
                            <p class="edit-list-item-title f32 color-333">定租</p>
                            <p class="edit-list-item-value f28 color-666">￥5000.00</p>
                        </div>
                    </div>
                </div>
                <div class="edit-number-box edit-list-box">
                    <div class="edit-list">
                        <div class="edit-list-item">
                            <p class="edit-list-item-title f32 color-333">试穿次数</p>
                            <p class="edit-list-item-value f28 color-666">22</p>
                        </div>
                        <div class="edit-list-item">
                            <p class="edit-list-item-title f32 color-333">成交次数</p>
                            <p class="edit-list-item-value f28 color-666">8</p>
                        </div>
                        <a href="javascript:" class="edit-list-item" @click="handleShowOrderEdit">
                            <p class="edit-list-item-title f32 color-333">订单详情</p>
                            <p class="edit-list-item-value f28 color-666">></p>
                        </a>
                    </div>
                </div>
                <div class="edit-time">
                    <time1 />
                </div>
            </div>
        </div>
        <div class="edit-bottom">
            <div class="edit-bottom-title f32">配饰</div>
            <div class="edit-botton-list">
                <div class="edit-bottom-item" v-for="(item,index) in list" :key="index"><img src="" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import Time1 from "../common/time"
export default {
    name:"edit",
    data(){
        return {
            list:[1,2,3,4,5,6,7,8]
        }
    },
    mounted(e){
        console.log(this.$route.query.id) //礼服ID
        this.setNavs([1,0,0,0,0]);;
        this.setTitle("标题信息加载中...")
    },
    destroyed(){
        
    },
    computed:{
        ...mapGetters(['getNavs','getTitle'])
    },
    methods:{
        ...mapActions(['setNavs','setTitle']),
        handleAjaxEdit(){
            
        },
        handleShowOrderEdit(){
            this.$router.push("/app/order");
        }
    },
    components:{
        Time1
    }
}
</script>
<style lang="scss" scoped>
.edit {
    height: 100%;
    padding: .1953125rem .1953125rem 0;
    background-color: #F5F5F5;
    .edit-top {
        display: flex;
        justify-content: space-between;
        height: 9.986979rem;
        .edit-left {
            position: relative;
            width: 6.2890625rem;
            height: 100%;
            overflow: hidden;
            background-color: #fff;
            img {
                width: 100%
            }
            .edit-zoom {
                position: absolute;
                width:.638020rem;
                height:.638020rem;
                bottom: 0;
                right: 0;
                z-index: 1;
            }
        }
        .edit-right{
            width:3.125rem;
            height:100%;
            .edit-list-box {
                position: relative;
                width: 100%;
                min-height: 1rem;
                max-height: 2.473958rem;
                overflow-y: scroll;
                -webkit-overflow-scrolling: touch;
                background-color: #fff;
                margin-bottom: .1953125rem;
                padding-top: .0390625rem;
                .edit-list {
                    padding: 0 .1953125rem;
                    .edit-list-item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: .598958rem;
                        border-bottom: .013020rem #D9D9D9 solid;
                        &:last-child{
                            border: none;
                        }
                    }
                    
                }
                &.edit-money-box {
                    max-height: 1.875rem;
                }
                &.edit-number-box {
                    max-height: 1.875rem;
                }
            }
            .edit-time {
                width: 100%;
                background-color: #fff;
            }
        }
    }
    .edit-bottom {
        .edit-bottom-title {
            height: .690104rem;
            padding-top: .143229rem;
            display: flex;
            align-items: center;
            line-height: 1;
            color: #333333;
        }
        .edit-botton-list {
            height: 1.432291rem;
            display: flex;
            align-items: center;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            .edit-bottom-item {
                width: 1.432291rem;
                height: 1.432291rem;
                flex-shrink: 0;
                flex-grow: 0;
                margin-right: .2083333rem;
                background-color: #fff;
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>


