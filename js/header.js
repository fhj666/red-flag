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