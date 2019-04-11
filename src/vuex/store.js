import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        // navs:[0,1,0,0,0], //返回键 个人中心 搜索 空 筛选
        navs:[1,1,1,1,1], //返回键 个人中心 搜索 空 筛选
        isBack:false,
        allSearch:"",
        allFilter:false,
        title:"",
        // 礼服滚动高度
        dressScroll:0,
    },
    mutations:{
        changeIsBack(state,val){
            state.isBack = val;
        },
        changeNavs(state,val){
            state.navs = val;
        },
        changeAllSearch(state,val){
            state.allSearch = val;
        },
        changeAllFilter(state,val){
            state.allFilter = val;
        },
        changeTitle(state,val){
            state.title = val;
        },
        changeDressScroll(state,val){
            state.dressScroll = val;
        },
    },
    getters:{
        getIsBack(state){
            return state.isBack;
        },
        getNavs(state){
            return state.navs;
        },
        getAllSearch(state){
            return state.allSearch;
        },
        getAllFilter(state){
            return state.allFilter;
        },
        getTitle(state){
            return state.title;
        },
        getDressScroll(state){
            return state.dressScroll;
        },
    },
    actions:{
        setIsBack({commit},db){
            commit("changeIsBack",db);
        },
        setNavs({commit},db){
            commit("changeNavs",db);
        },
        setAllSearch({commit},db){
            commit("changeAllSearch",db);
        },
        setAllFilter({commit},db){
            commit("changeAllFilter",db);
        },
        setTitle({commit},db){
            commit("changeTitle",db);
        },
        setDressScroll({commit},db){
            commit("changeDressScroll",db);
        },
    }
})

export default store;