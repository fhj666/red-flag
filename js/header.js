var header_icon = document.querySelector(".header-icon");
var menu = document.querySelector(".menu");
var body = document.querySelector("body");
header_icon.addEventListener("click", function () {
    menu.style.top = 0;
    body.style.overflow = "hidden";
})
var icon_cuo = document.querySelector(".icon-cuo");
icon_cuo.addEventListener("click", function () {
    menu.style.top = "-700px";
    body.style.overflow = "visible";
})
function setRem() {
    var ui_w = 375;
    // 获取屏幕的宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    console.log(ui_w, clientWidth);

    // 通过js动态改变html根节点字体大小
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 100 + 'px';
}
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;

$(function () {
    $(".menu_body_lis").click(function () {
        $(".menu_body_lis_ol").slideUp(function () {
            $(this.previousElementSibling.lastElementChild).removeClass("menu_down");
        });
        if (this.lastElementChild.style.display == "none") {
            $(this.lastElementChild).slideDown(function () {
                $(this.previousElementSibling.lastElementChild).addClass("menu_down");
            });
        } else {
            $(this.lastElementChild).slideUp(function () {
                $(this.previousElementSibling.lastElementChild).removeClass("menu_down");
            });
        }
    });
})