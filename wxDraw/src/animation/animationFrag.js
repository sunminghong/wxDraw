/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-09-29 16:34:09 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-10-07 11:11:52
 */

 import { AnimationTimer } from "./animationTimer.js"



var FRAGOPTION = {
    onStart:function(){
      // 动画碎片开始的函数
    },
    onLooping:function(){
        //在动画重复执行的时候 需要循环的函数 这里 可能需要一些传参
    },
    onEnd:function(){
       // 动画结束 的时候 执行
    },
    duration:1000,// 毫秒
    easing:"linear"// 缓动函数 
}

export const AnimationFrag = function(object,atrribute,target,option){
    // 这里是动画碎片 更改 obj的地方 但是 问题就在这里 这应该是 最简单的功能 就是对比目标 
    // 添加 delta
    // 一旦完成 那这个 running就等于 false 而对于时间 的控制 不应该在这里 控制时间 来 控制 动画 
    // 假比 是 linear 传进来的 deatla 时间 就是 均衡的
    // 那这一刻增加的东西就是 均衡的 
    
    this.object = object;
    this.target = target;
    this._complete = false;
}

AnimationFrag.prototype = {
    updateAnimation:function(){
    //    if
    },
}


