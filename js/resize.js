/**
 * Created by sd on 2016/12/5.
 */
function resize(originSize,type){
    var type=type||"x";
    if(type=="x"){
        var widths=document.documentElement.clientWidth;
        var scale=widths/originSize*100;
    }else if(type=="y"){
        var heights=document.documentElement.clientHeight;
        var scale=heights/originSize*100;
    }
    document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
}
window.onload=function(){
    resize(1136,"y");
}
/*var mySwiper = new Swiper ('.swiper-container', {
    /!*direction: 'vertical',
     loop: true,*!/
    pagination: '.swiper-pagination',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})*/
