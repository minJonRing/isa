<template>
    <div class="dress-room">
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item-img">
                <img src="" alt="">
            </div>
            <div class="item-edit">
                <div class="item-edit-tip f28">
                    <span class="item-edit-name color-333 text-hide-1">这是很好的试衣间哦，要好好用</span>
                    <span class="item-edit-status">可使用</span>
                </div>
                <a href="javascript:" class="item-edit-remove no-bg1">
                    <i></i>
                </a>
            </div>
        </div>
        <div class="item item-add" @click="handleAddDressRomm">
            <div class="flex">
                <i></i>
                <span class="f28 color-333">新增试衣间</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
    name:"dress-room",
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        this.setNavs([1,1,0,0,0]);
        this.setTitle("试衣间管理");
        this.handleAjaxList()
    },
    methods:{
        ...mapActions(['setNavs','setTitle']),
        handleAjaxList(){
            this.list = [1,2,3,4,5,6,7,8]
        },
        handleAddDressRomm(){
            this.list = [...this.list,...[1]]
        }
    }
}
</script>
<style lang="scss" scoped>
.dress-room {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    font-size: 0;
    padding: .162760rem .09765625rem;
    background-color:rgba(245,245,245,1);
    text-align: left;
    .item {
        display: inline-block;
        vertical-align: middle;
        width: 3.072916rem;
        height: 2.291666rem;
        margin: .09765625rem;
        background-color: #fff;
        border-radius: .026041rem;
        box-shadow: 0px 0px 0.05208rem 0.02604rem #e9e9e9;
        overflow: hidden;
        .item-img {
            width: 100%;
            height: 1.901041rem;
            overflow: hidden;
            background-color: #efefef;
            img {
                width: 100%;
            }
        }
        .item-edit {
            width: 100%;
            height: .390625rem;
            display: flex;
            align-items: center;
            line-height: 1;
            .item-edit-tip {
                display: flex;
                align-items: center;
                width: calc(100% - .390625rem);
                padding:0 .15625rem;
                .item-edit-name {
                    display: inline-block;
                    max-width: calc(100% - .651041rem);
                }
                .item-edit-status {
                    width: .651041rem;
                    color: #666;
                    text-align: center;
                }
            }
            .item-edit-remove {
                flex-shrink: 0;
                height: 100%;
                width: .390625rem;
            }
        }
        &.item-add {
            .flex {
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }
    }
}
</style>

