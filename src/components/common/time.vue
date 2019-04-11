<template>
    <div class="time1">
        <div class="time-head">
            <a href="javascript:" class="time-switch time-prev no-bg" @click="handlePrev"></a>
            <div class="time-change" @click="PickerShow = true">
                <p class="f28">{{y}}年{{m}}月</p>
                <a href="javascript:" class="no-bg"></a>
            </div>
            <a href="javascript:" class="time-switch time-next no-bg" @click="handleNext"></a>
        </div>
        <div class="time-body">
            <div class="time-week f20 color-666">
                <span>日</span>
                <span>一</span>
                <span>二</span>
                <span>三</span>
                <span>四</span>
                <span>五</span>
                <span>六</span>
            </div>
            <div class="time-day f24 color-333">
                <p v-for="(item,index) in list" :key="index">
                    <span :class="[{'active':i.exist},i.cla]" v-for="(i,j) in item" :key="j">
                        <i v-if="i">{{i.num}}</i>
                        <strong></strong>
                    </span>
                </p>
            </div>
        </div>
         <wv-picker
            :visible.sync="PickerShow"
            :columns="columns"
            @confirm="confirmDayTime"
        />
    </div>
</template>
<script>
export default {
    name:"time1",
    data(){
        return {
            y:"",
            m:"",
            list:[],
            // picker
            PickerShow:false,
            columns:[]
        }
    },
    mounted(){
        this.handleInit();
    },
    methods:{
        handleInit(){
            let time = new Date();
            this.y = time.getFullYear();
            this.m = time.getMonth() + 1;
            this.handleDrew(this.y,this.m);
            // 初始化时间选择器
            let arr = [],sub = this.y - 1995;
            for(let i = 0; i < sub; i++){
                let num = 1996+(i-0);
                arr.push(num)
            }
            this.columns = [
                {values:arr,defaultIndex:sub},
                {values:[1,2,3,4,5,6,7,8,9,10,11,12],defaultIndex:this.m-1}
            ]
            // 设置时间选择器的样式
            setTimeout(()=>{
                document.querySelector(".weui-picker__bd").style.height = "476px";
                for(let i of [...document.querySelectorAll(".weui-picker__mask")]){
                    i.style.backgroundSize = "100% 204px";
                }
            },1)
            
        },
        handlePrev(){
            let y = this.y , m = this.m;
            this.m = m - 1 <= 0 ? 12 : m - 1;
            this.y = m - 1 <= 0 ?  y - 1: y;
            this.handleDrew(this.y,this.m);
        },
        handleNext(){
            let y = this.y , m = this.m;
            this.m = m + 1 > 12 ? 1 : m + 1;
            this.y = m + 1 > 12 ? y + 1 : y;
            this.handleDrew(this.y,this.m);
        },
        handleDrew(y,m){
            let num = new Date(y,m,0).getDate();
            let week = new Date(`${y}/${m}/1`).getDay();
            let add = num+week;
            let arr = [];
            // 生成展示数据
            let none = [
                {start:"2019-04-2",end:"2019-04-6"},
                {start:"2019-4-11",end:"2019-4-22"},
                {start:"2019-04-26",end:"2019-04-30"}
            ]
            let cla = '';
            for(let i = 0; i < add; i++){
                let day = i+1-week;
                let ind = Math.floor(i/7);
                let now = this.handleZ(`${y}/${m}/${day}`);
                
                if(!arr[ind]){
                    arr[ind] = [];
                }
                if(i < week){
                    arr[ind].push("");
                }else{
                    // 设置背景
                    let num;
                    for(let j in none){
                        num = this.handleJudgeTime(now,this.handleZ(none[j].start),this.handleZ(none[j].end));
                        if(num){
                            break;
                        }
                    }
                    arr[ind].push({num:day,exist:num,cla:''});
                    // 获取当前数组的长度
                    let len = arr[ind].length-1;
                    // 判断起始
                    if(num && !cla){
                        cla = "before";
                        arr[ind][len].cla = cla;
                    }
                    // 判断结束
                    if(!num && cla){
                        cla = "after";
                        let sub = len-1;
                        if(sub < 0){
                            arr[ind-1][6].cla = cla;
                        }else{
                            arr[ind][sub].cla = cla;
                        }
                        cla = "";
                    }
                    // 判断最后一个是否存在
                    if(num && i == (add - 1)){
                        cla = "after";
                        arr[ind][len].cla = cla;
                    }
                }
            }
            this.list = arr;
        },
        confirmDayTime(picker){
            let db = picker.getValues();
            this.y = db[0] || "";
            this.m = db[1] || "";
            this.handleDrew(this.y,this.m)
        },
        handleZ(str){
            return str.replace(/.\b(?:(\d)|0(\d))\b/g,'/0$1$2').replace(/[^0-9]/g,'\/');
        },
        handleJudgeTime(now,start,end){
            if(new Date(start) <= new Date(now) && new Date(now) <= new Date(end)){
                return 1;
            }else{
                return 0;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.time1 {
    width: 100%;
    .time-head{
        height: .677083rem;
        border-bottom: .026041rem #D9D9D9 solid;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .1171875rem;
        .time-switch {
            width: .364583rem;
            height: .364583rem;
        }
        .time-change {
            display: flex;
            align-items: center;
            p {
                color:#354052;
                line-height: 1;
            }
            a {
                width: .364583rem;
                height: .364583rem;
            }
        }
    }
    .time-body {
        .time-week {
            display: flex;
            align-items: center;
            justify-content: space-around;
            span {
                position: relative;
                width: .446428rem;
                height: .43rem;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1;
            }
        }
        .time-day {
            position: relative;
            z-index: 2;
            .time-day-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                p {
                    display: flex;
                    align-items: center;
                    height: .43rem;
                    span {
                        height: .2734375rem;
                        background-color: rgba(255,45,85,0.1);
                        width: .446428rem;
                        opacity: 0;
                        &.active {
                            opacity: 1;
                        }
                        &.before{
                            border-top-left-radius: .1171875rem;
                            border-bottom-left-radius: .1171875rem;
                        }
                        &.after{
                            border-top-right-radius: .1171875rem;
                            border-bottom-right-radius: .1171875rem;
                        }
                        &:first-child {
                            width: .396428rem;
                            margin-left: .05rem;
                        }
                        &:last-child {
                            width: .396428rem;
                        }
                    }
                }
            }
            p {
                display: flex;
                align-items: center;
                span {
                    position: relative;
                    width: .446428rem;
                    height: .43rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                    z-index: 2;
                    strong {
                        position: absolute;
                        height: .2734375rem;
                        background-color: rgba(255,45,85,0.1);
                        width: 100%;
                        opacity: 0;
                        z-index: -1;
                    }
                    &.active {
                        strong{
                            opacity: 1;
                        }
                    }
                    &.before{
                        strong{
                            border-top-left-radius: .1171875rem;
                            border-bottom-left-radius: .1171875rem;
                        }
                    }
                    &.after{
                        strong{
                            border-top-right-radius: .1171875rem;
                            border-bottom-right-radius: .1171875rem;
                        }
                    }
                    &:first-child {
                        strong{
                            width: .396428rem;
                            transform:translateX(.025rem);
                        }
                    }
                    &:last-child {
                        strong{
                            width: .396428rem;
                            transform:translateX(-.025rem);
                        }
                    }
                }
            }
            
        }
    }
}
</style>


