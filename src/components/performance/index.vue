<template>
    <div class="performance">
        <div class="left">
            <div class="list">
                <a href="javascript:" :class="['item',{'active':active == index}]" v-for="(item,index) in list" :key="index" @click="handleChange($event,index)">
                    <div class="el-box">
                        <p class="f32">2019年1月</p>
                        <i></i>
                    </div>
                </a>
            </div>
        </div>
        <div class="right">
            <h5 class="right-title f26">{{listTitle}}</h5>
            <div class="list">
                <a href="javascript:" class="item" v-for="(item,index) in list" :key="index">
                    <div class="el-box f32">
                        <p class="color-333">接待访客</p>
                        <span class="color-666">22人</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
export default {
    name:"performance",
    data(){
        return {
            list:[1,2,3,4],
            listTitle:"业绩概览",
            active:0
        }
    },
    mounted(){
        this.setNavs([1,1,0,0,0]);
        this.setTitle('我的业绩');
    },
    methods:{
        ...mapActions(['setNavs','setTitle']),
        handleChange(e,i){
            this.active = i;
        }
    }
}
</script>
<style lang="scss" scoped>
.performance{
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: rgba(245,245,245,1);
    .left {
        width: 4.166666rem;
        height: 100%;
        padding-top: .559895rem;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        border-right: .013020rem solid rgba(204,204,204,1);
        .list {
            
            .item {
                display: block;
                height: .572916rem;
                background-color: #fff;
                padding-left: .182291rem;
                .el-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    padding-right: .1953125rem;
                    border-bottom: .013020rem solid rgba(217,217,217,1);
                    p {
                        color: #333;
                    }
                    i {
                        color: #999;
                    }
                }
                &:last-child{
                    .el-box{
                        border: none;
                    }
                }
                &.active {
                    background-color: #FF5677;
                    .el-box {
                        border-color: #FF5677;
                        p,i{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
    .right {
        width: 5.833333rem;
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        padding: 0 .260416rem;
        text-align: left;
        .right-title {
            height: .559895rem;
            color: #808080;
            padding: .260416rem 0 0 .1953125rem;
            line-height: .234375rem;
            font-weight: normal;
        }
        .list {
            border-radius: .078125rem;
            overflow: hidden;
            .item {
                display: block;
                height: .572916rem;
                background-color: #fff;
                padding-left: .182291rem;
                .el-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    padding-right: .1953125rem;
                    border-bottom: .013020rem solid rgba(217,217,217,1);
                    p {
                        color: #333;
                    }
                    i {
                        color: #999;
                    }
                }
                &:last-child{
                    .el-box{
                        border: none;
                    }
                }
            }
        }
    }
}
</style>

