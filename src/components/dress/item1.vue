<template>
    <div class="item" @click.stop="handleShowDressEdit">
        <div class="item-img">
            <img src="" alt="">
        </div>
        <div class="item-info f28">
            <p class="item-title text-hide-1 color-333">大大声的</p>
            <p class="item-number text-hide-1 color-666">3132131</p>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    name:"item",
    props:["id"],
    data(){
        return {
            
        }
    },
    mounted(){

    },
    methods:{
        handleShowDressEdit(){
            this.$router.push('/app/dress/edit?id='+this.id);
        }
    }
}
</script>
<style lang="scss" scoped>
.item {
    display: inline-block;
    width: 3.072916rem;
    background-color: #fff;
    margin:0 .09765625rem .1953125rem;
    box-shadow:0px 0px .052083rem .026041rem rgba(233,233,233,1);
    .item-img {
        width: 100%;
        height: 4.84375rem;
        overflow: hidden;
        background-color: #efefef;
        img {
            display: block;
            width: 100%;
        }
    }
    .item-info {
        width: 100%;
        height: .703125rem;
        line-height: .260418rem;
        padding: .078125rem .104166rem;
        text-align: left;
        .item-title{
            margin-bottom: .026041rem;
        }
    }
}
</style>

