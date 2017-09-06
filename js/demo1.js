/**
 * Created by Administrator on 2017/3/28.
 */
window.onload = function(){
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
    //1. 获得要操作的对象
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight= document.getElementById("arrRight");

    //2.给每一张图片设置定位封装成一个函数
    var flag = true;
    function getTolis (){
        for (var i= 0; i< lis.length; i++){
            animate1(lis[i],config[i],function(){
                flag = true;
            })
        }
    }
    getTolis();

    //3.给鼠标移入,移出事件
    wrap.onmouseover = function(){
        animate1(arrow,{
            opacity:1
        })
    }
    wrap.onmouseout = function(){
        animate1(arrow,{
            opacity:0
        })
    }

    //4.给按钮设置点击事件
    arrRight.onclick = function(){
        if(flag){
            flag = false;
            config.unshift(config.pop());
            getTolis();
        }

    }

    arrLeft.onclick = function(){
        if(flag){
            flag = false;
            config.push(config.shift());
            getTolis();
        }

    }





}


