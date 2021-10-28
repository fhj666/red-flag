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