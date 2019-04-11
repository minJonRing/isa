<template>
    <div class="list">
        <div class="list-nav f28">
            <div class="list-nav-box">
                <a href="javascript:" :class="['list-nav-btn list-nav-btn-left',{'active':active == 0}]" @click.stop="active = 0">新款</a>
                <a href="javascript:" :class="['list-nav-btn list-nav-btn-mid',{'active':active == 1}]" @click.stop="active = 1">热门</a>
                <a href="javascript:" :class="['list-nav-btn list-nav-btn-right',{'active':active == 2}]" @click.stop="active = 2">全部</a>
            </div>
        </div>
        <!-- 列表 -->
        <div class="list-box" @scroll="handleScrollAjax($event)">
            <Item v-for="(item,index) in list" :key="index" :id="index"/>
        </div>
        <!-- 筛选 -->
        <Filters />
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import Item from "./item1"
import Filters from "./filter"
export default {
    name:"list",
    data(){
        return {
            active:2,
            list:[1,2,3,4,5,6,7,8,9],
            a:0
        }
    },
    activated(){
        this.setNavs([1,1,0,0,1]);
        this.setTitle("商品检索");
        document.querySelector(".list-box").scrollTop = this.getDressScroll;
    },
    mounted(){
        
    },
    watch:{
        active(db){
            this.handleAjaxList();
        }
    },
    computed:{
        ...mapGetters(['getTitle','getDressId','getDressScroll'])
    },
    methods:{
        ...mapActions(['setNavs','setTitle','setDressScroll']),
        handleAjaxList(){
            let arr = this.list;
            this.list = [...arr,...[1,2,3,4,5,6,7,8,9]]
        },
        handleScrollAjax(e){
            let sub = e.target.scrollHeight - e.target.clientHeight - 1*rem;
            let scroll = e.target.scrollTop;
            this.a = scroll;
            this.setDressScroll(scroll);
            if( scroll >  sub){
                this.handleAjaxList()
            }
        }
    },
    components:{
        Item,
        Filters
    }
}
</script>
<style lang="scss" scoped>
.list {
    position: relative;
    background-color: #F5F5F5;
    height: 100%;
    .list-nav {
        height: .911458rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .list-nav-box{
            display: flex;
            border-radius: .052083rem;
            box-shadow:0px 0px .052083rem .026041rem rgba(233,233,233,1);
            .list-nav-btn {
                width: 1.770833rem;
                height: .390625rem;
                line-height: .390625rem;
                text-align: center;
                background-color: #FFFFFF;
                color: #333;
                &.list-nav-btn-left {
                    border-top-left-radius: .052083rem;
                    border-bottom-left-radius: .052083rem;
                }
                &.list-nav-btn-mid {
                    border-left: .013020rem #D9D9D9 solid;
                    border-right: .013020rem #D9D9D9 solid;
                }
                &.list-nav-btn-right {
                    border-top-right-radius: .052083rem;
                    border-bottom-right-radius: .052083rem;
                }
                &.active {
                    background-color: #FF5677;
                    color: #fff;
                }
            }
        }
    }
    .list-box {
        min-height: 1rem;
        height: calc(100% - .813802rem);
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        padding: 0 .09765625rem;
        font-size: 0;
        text-align: left;
    }
}
</style>
