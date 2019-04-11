<template>
    <div class="order">
        <item />
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import Item from "./item"
export default {
    name:"order",
    data(){
        return {

        }
    },
    mounted(){
        this.setNavs([1,1,1,0,0])
    },
    methods:{
        ...mapActions(['setNavs'])
    },
    components:{
        Item
    }
}
</script>
<style lang="scss" scoped>
.order {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background:rgba(245,245,245,1);
    padding: .1953125rem;
}
</style>

