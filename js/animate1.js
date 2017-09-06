/**
 * Created by Administrator on 2016/10/25.
 */
/**
 * 获得标签对象属性值的函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    // 能力检测  所谓的能力检测，也就是看浏览器是否支持此对象的属性或是方法
    if(obj.currentStyle){
        return  obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}

//封装缓动动画animate函数
function animate1(obj,json,fn){
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function(){
        var flag = true;
         for (var key in json){                             //在计时器里面，要把所有的属性都取出来，然后让他们都到达目的位置
             if (key == "opacity"){
                 var current = (getStyle(obj,key))*100;
                 var step = (json[key]*100 - current)/5;
                 step = step > 0 ? Math.ceil(step): Math.floor(step);
                 current +=step;
                 obj.style[key] = current/100;
                 if ( current/100 != json[key]){
                     flag = false;
                 }
             }else if(key =="zIndex"){
                 var current = parseInt(getStyle(obj,key));
                 obj.style[key] = json[key];
                 if ( current != json[key]){
                     flag = false;
                 }
             }else{
                 var current = parseInt(getStyle(obj,key));
                 var step = (json[key] - current)/5;
                 step = step > 0 ? Math.ceil(step): Math.floor(step);
                 current +=step;
                 obj.style[key] = current +"px";
                 if ( current != json[key]){
                     flag = false;
                 }
             }
         }
        if (flag){
            clearInterval(obj.timeId);
            if (typeof fn == "function"){
                fn();
            }
        }
    console.log(step+":"+ current);

    },15)
}