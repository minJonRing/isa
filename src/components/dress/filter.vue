<template>
    <div :class="['filters',{active:getAllFilter}]" @click.stop="handleClose">
        <div class="filters-box" @click.stop>
            <div class="filters-search">
               <form class="filters-search-form" action="">
                    <input type="search" class="f28" autocomplete="off" v-model="search" placeholder="">
                    <div :class="['filters-search-tip f28 color-666',{'active':search}]">
                        <i></i>
                        <span>商品信息</span>
                    </div>
                </form>
            </div>
            <div class="filters-list">
                <div class="filters-item" v-for="(item,index) in check" :key="index">
                    <h5 class="filters-tip">
                        <p class="f32 color-333">品牌</p>
                        <a href="javascript:" class="f28 color-999">
                            <span>全部</span>
                            <i>_</i>
                        </a>
                    </h5>
                    <div class="filters-checks">
                        <a href="javascript:" class="filters-check f24" v-for="(i,j) in item" :key="j">
                            <input type="checkbox" v-model="checkIds">
                            <span>{{i.name}}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="filters-btns f32 line10">
                <a href="javascript:" class="re-btn color-333" @click="handleRe">重置</a>
                <a href="javascript:" class="confirm-btn" @click="handleConfirm">确定</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions , mapGetters } from "vuex";
export default {
    name:"filters",
    data(){
        return {
            check:[],
            search:"",
            checkIds:[]
        }
    },
    mounted(){
        this.handleAjaxFilter();
        document.querySelector(".filters-search-form").onsubmit = ()=>{
            alert(1);
            return false;
        }
    },
    computed:{
        ...mapGetters(['getAllFilter'])
    },
    methods:{
        ...mapActions(['setAllFilter']),
        handleAjaxFilter(){
            let arr = new Array(8).fill({id:2,name:'阿达'})
            let db = [];
            for(var i = 0;i<10;i++){
                db.push(arr)
            }
            this.check = db;
        },
        handleRe(){
            this.checkIds = [];
        },
        handleConfirm(){
            this.setAllFilter(false);
        },
        handleClose(){
            this.setAllFilter(false);
        }
    }
}
</script>
<style lang="scss" scoped>
.filters {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0,0,0,.6);
    text-align: right;
    .filters-box {
        display: inline-block;
        width: 5.899375rem;
        height: 100%;
        text-align: left;
        background-color: #fff;
        padding: 0 .29296875rem;
        .filters-search {
            height: 1.041666rem;
            padding: .520833rem .09765625rem 0;
            .filters-search-form {
                position: relative;
                width: 100%;
                height: .520833rem ;
                background-color: rgba(245,245,245,1);
                border-radius: .065104rem;
                input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                    background-color: transparent;
                    text-align: center;
                    &:focus + .filters-search-tip {
                        display: none;
                    }
                }
                .filters-search-tip {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    &.active {
                        display: none;
                    }
                }
            }
        }
        .filters-list {
            min-height: 1rem;
            height: calc(100% - 2.864583rem);
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            .filters-item {
                height: 1.8359375rem;
                overflow: hidden;
                .filters-tip{
                    height: .5859375rem;
                    padding: .065104rem .09765625rem 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: normal;
                    a {
                        display: flex;
                        align-items: center;
                    }
                }
                .filters-checks {
                    font-size: 0;
                    .filters-check {
                        position: relative;
                        display: inline-block;
                        vertical-align: middle;
                        width: 1.5625rem;
                        height: .46875rem;
                        margin: .078125rem .09765625rem;
                        input {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            &:checked + span {
                                color: #FF2D55;
                                border-color: rgba(255,45,85,1);
                            }
                        }
                        span {
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            line-height: .46875rem;
                            text-align: center;
                            background-color: rgba(245,245,245,0.5);
                            color: #999;
                            border-radius: .026041rem;
                            border:.013020rem solid transparent;
                        }
                    }
                }
                &.active {
                    overflow: visible;
                }
            }
        }
        .filters-btns {
            height: 1.822916rem;
            padding: .260416rem .09765625rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.408854rem;
                height: .520833rem;
                border-radius: .032552rem;
                &.re-btn {
                    border: .013020rem rgba(217,217,217,1) solid;
                }
                &.confirm-btn {
                    color: #fff;
                    background-color: #FF5677;
                }
            }
        }
    }
    &.active {
        display: block;
    }
}
</style>

