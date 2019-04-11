<template>
    <div id="app" class="app">
        <div class="index-head">
        <div class="index-head-left">
            <a href="javascript:" v-if="getNavs[0]" class="index-head-nav index-head-nav-left index-back no-bg" @click.stop="handleBack"></a>
            <a href="javascript:" v-if="getNavs[1]" class="index-head-nav index-head-nav-left index-menu no-bg"></a>
        </div>
        <div class="index-head-mid">
            <p class="index-title f36 color-333" v-if="!getNavs[2]">{{getTitle}}</p>
            <div class="index-search" v-if="getNavs[2]">
            <div class="index-search-el">
                <a href="javascript:" class="index-search-btn no-bg"></a>
                <form class="index-search-form" action="">
                    <input type="search" class="f28" autocomplete="off" v-model="search" placeholder="输入日期/订单号/商品信息查询订单">
                </form>
            </div>
            </div>
        </div>
        <div class="index-head-right">
            <a href="javascript:" v-if="getNavs[3]" class="index-head-nav index-head-nav-right index-filter no-bg"></a>
            <a href="javascript:" v-if="getNavs[4]" class="index-head-nav index-head-nav-right index-filter no-bg" @click.stop="handleFilter"></a>
        </div>
        </div>
        <div class="index-body">
            <keep-alive >
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'App',
    data(){
        return {
        search:""
        }
    },
    mounted(){
        document.querySelector(".index-search-form").onsubmit = ()=>{
        alert(1);
        return false;
        }
    },
    watch:{
        getIsBack(db){
        if(db){
            setTimeout(() => {
            this.setIsBack(false);
            }, 300);
        }
        },
        search(db){
            this.setAllSearch(db);
        },
        getAllSearch(db){
            if(!db){
                this.search = "";
            }
        }
    },
    computed:{
        ...mapGetters(['getIsBack','getNavs','getAllSearch','getTitle'])
    },
    methods:{
        ...mapActions(['setIsBack','setAllSearch','setAllFilter']),
        handleBack(){
            this.$router.back(-1);
        },
        handleFilter(){
            this.setAllFilter(true)
        }
    }
}
</script>

<style>
@import url("../static/css/common.css");
</style>
<style lang="scss" scoped>
.app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    .index-head {
        width: 100%;
        display: flex;
        align-items: center;
        height: .572916rem;
        padding: 0 .143229rem;
        box-shadow:0px 0px .052083rem .026041rem rgba(233,233,233,1);
        .index-head-left{
            display: flex;
            align-items: center;
            width: 23%;
            height: 100%;
        }
        .index-head-mid{
            width: 56%;
            height: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            p {
                width: 100%;
            }
            .index-search {
                padding: 0 1.080729rem;
                width: 5.3125rem;
                height:.390625rem;
                border-radius: .065104rem;
                background-color: rgba(245,245,245,1);
                .index-search-el {
                    height: 100%;
                    display: flex;
                    align-items: center;
                .index-search-btn {
                    width:.390625rem;
                    height:.390625rem;
                }
                    .index-search-form {
                        width: 2.877604rem;
                        input {
                            width: 100%;
                            height: .260416rem;
                            background-color: transparent;
                            border: none;
                            &::-webkit-search-cancel-button{
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .index-head-right{
            width: 23%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .index-head-nav {
            width: .364583rem;
            height: .364583rem;
        }
        .index-head-nav-left {
            margin-right: .0390625rem;
        }
        .index-head-nav-right {
            margin-left: .0390625rem;
        }
    }
    .index-body {
        height: calc(100% - .572916rem);
        overflow: hidden;
    }
}
</style>