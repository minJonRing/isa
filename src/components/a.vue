<template>
    <div class="a">
        <div class="b"></div>
        <div class="c">
            <div class="d">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="e">
                <a href=""></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"a"
}
</script>
<style lang="scss" scoped>
.a {
    position: relative;
    height: 100%;
    .b {
        height: 100%;
    }
    .c {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 200px;
        display: flex;
        align-items: center;
        background-color: #efefef;
        .d {
            width: 80%;
            textarea {
                width: 90%;
                margin:auto;
                height: 90%;
            }
        }
        .e {
            width: 20%;
        }
    }
}
</style>

