function setRem() {
    var ui_w = 375;
    // 获取屏幕的宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 通过js动态改变html根节点字体大小
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 100 + 'px';
}
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;
window.onload = setRem;

// 封装获取元素属性
function getStyle(obj, styleName) {
    if (obj.currentStyle) {
        return obj.currentStyle[styleName];
    } else {
        return getComputedStyle(obj, null)[styleName];
    }
}
var tab_lis = document.querySelectorAll(".tab_lis");
var tab_span = document.querySelector(".tab_span");
var fl2_tab_con_lis = document.querySelectorAll(".fl2_tab_con_lis");
for (var i = 0; i < tab_lis.length; i++) {
    tab_lis[i].index = i;
    touch.on(tab_lis[i], "tap", function () {
        for (var j = 0; j < tab_lis.length; j++) {
            tab_lis[j].style.color = "#999";
            tab_lis[j].style.fontWeight = "400";
        }
        this.style.color = "#e60012";
        this.style.fontWeight = "800";
        tab_span.style.width = (this.offsetWidth / 100) + "rem";
        donghua(tab_span, this.offsetLeft);
        for (var j = 0; j < tab_lis.length; j++) {
            fl2_tab_con_lis[j].style.opacity = "0";
        }
        fl2_tab_con_lis[this.index].style.opacity = "1";
    })
}
var account_info_lis = document.querySelectorAll(".account_info_lis");
var bottom = document.querySelectorAll(".bottom");
var model_open = document.querySelectorAll(".model-open");
for (var i = 0; i < account_info_lis.length; i++) {
    account_info_lis[i].index = i;
    // touch.on(account_info_lis[i], "tap", function () {
    //     console.log(this);
    //     console.log(bottom[0]);
    // })
    account_info_lis[i].onclick = function () {
        for (var j = 0; j < account_info_lis.length; j++) {
            model_open[j].style.opacity = 0;
            bottom[j].style.bottom = "0px";
        }
        // console.log(this.index);
        // console.log(model_open[this.index].style.opacity);
        // getStyle(model_open[this.index], "opacity");
        // console.log(getStyle(model_open[this.index], "opacity"));
        if (getStyle(model_open[this.index], "opacity") == 0) {
            model_open[this.index].style.opacity = 1;
            bottom[this.index].style.bottom = "-50px";
        } else {
            model_open[this.index].style.opacity = 0;
            bottom[this.index].style.bottom = "0px";
        }
    }
}

// touch.on(window, "swipe", function () {
//     console.log(document.documentElement.scrollTop);
// })

var floor1 = document.querySelector(".floor1");
var floor2 = document.querySelector(".floor2");
var text_box = document.querySelector(".text_box");
window.onload = function () {
    text_box.style.opacity = 1;
}
// console.log(floor1.scrollTop);
window.onscroll = function () {
    // console.log(floor1.offsetTop);
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= floor2.offsetTop - 300) {
        text_box.style.opacity = 1;
    } else {
        text_box.style.opacity = 0;
    }
}
