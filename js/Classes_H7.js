var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'coverflow',
    slidesPerView: 1,
    centeredSlides: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },

})

var swip = document.getElementsByClassName('swiper-slide-active')[0];
var kw = document.getElementsByClassName('KW');
var nm = document.getElementsByClassName('Nm');
var i_1 = 0;
var k_1 = 0;
var i_2 = 0;
var k_2 = 0;
var i_3 = 0;
var k_3 = 0;
var bool_1 = true;
var bool_2 = true;
var bool_3 = true;
var bool_4 = true;
var bool_5 = true;
var bool_6 = true;


window.onload = function() {
    function lode() {
        // 先获取已加载区域的高度
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        //屏幕的高度
        var clientH = document.documentElement.clientHeight || document.body.clientHeight;

        var top = document.querySelector('.top');
        if (top.offsetTop < scrollT) {
            // console.log(scrollT);
            top.style.top = (scrollT / 100) + 'rem';
        } else if (top.offsetTop > scrollT && top.offsetTop > 667) {
            top.style.top = (scrollT / 100) + 'rem';
        } else {
            top.style.top = 6.67 + 'rem';
        }

        var img_pic1 = document.getElementsByClassName('img_pic1');
        // console.log(image1);
        for (var i = 0; i < img_pic1.length; i++) {
            if (scrollT + 100 >= img_pic1[i].offsetTop && scrollT + 460 <= img_pic1[i].offsetTop + clientH) {
                img_pic1[i].children[1].style.opacity = 1;
                img_pic1[i].children[0].style.opacity = 1;
            } else {
                img_pic1[i].children[1].style.opacity = 0;
                img_pic1[i].children[0].style.opacity = 0;
            }
            // console.log(img_pic1[0].children[1].style.opacity);
        }
        var img_pic2 = document.getElementsByClassName('img_pic2');
        for (var i = 0; i < img_pic2.length; i++) {
            if (scrollT + 360 >= img_pic2[i].offsetTop && scrollT + 400 <= img_pic2[i].offsetTop + clientH) {
                img_pic2[i].children[0].style.opacity = 1;
            } else {
                img_pic2[i].children[0].style.opacity = 0;
            }
            // console.log(image2[0].children[0].children[0].style.opacity);
        }

        // 功率1
        if (scrollT <= 467 || scrollT >= 680 * 2) {
            k_1 = 0;
            bool_2 = true;
            kw[1].children[0].innerHTML = 0;
        } else {
            var bb;
            clearInterval(bb);
            if (scrollT + 150 >= 667 && scrollT <= 500 + clientH && k_1 <= 138) {
                clearInterval(aa);
                if (bool_2) {
                    bb = setInterval(function() {
                        k_1++;
                        kw[1].children[0].innerHTML = k_1;
                        if (k_1 >= 138) {
                            clearInterval(bb);
                        }
                    }, 10)
                    bool_2 = false
                }
            } else {
                clearInterval(bb);
                kw[1].children[0].innerHTML = 138;
            }
        }

        // 扭矩1
        if (scrollT <= 467 || scrollT >= 680 * 2) {
            i_1 = 0;
            bool_1 = true;
            nm[1].children[0].innerHTML = 0;
        } else {
            var aa;
            clearInterval(aa);
            if (scrollT + 150 >= 667 && scrollT <= 500 + clientH && i_1 <= 260) {
                clearInterval(aa);
                if (bool_1) {
                    aa = setInterval(function() {
                        i_1++;
                        nm[1].children[0].innerHTML = i_1;
                        if (i_1 >= 260) {
                            clearInterval(aa);
                        }
                    }, 5)
                    bool_1 = false
                }
            } else {
                clearInterval(aa);
                nm[1].children[0].innerHTML = 260;
            }
        }


        // 功率2
        if (scrollT <= 467 || scrollT >= 680 * 2) {
            k_2 = 0;
            bool_3 = true;
            kw[2].children[0].innerHTML = 0;
        } else {
            var cc;
            clearInterval(cc);
            if (scrollT + 150 >= 667 && scrollT <= 500 + clientH && k_2 <= 150) {
                clearInterval(cc);
                if (bool_3) {
                    cc = setInterval(function() {
                        k_2++;
                        kw[2].children[0].innerHTML = k_2;
                        if (k_2 >= 150) {
                            clearInterval(cc);
                        }
                    }, 10)
                    bool_3 = false
                }
            } else {
                clearInterval(cc);
                kw[2].children[0].innerHTML = 150;
            }
        }

        // 扭矩2
        if (scrollT <= 467 || scrollT >= 680 * 2) {
            i_2 = 0;
            bool_4 = true;
            nm[2].children[0].innerHTML = 0;
        } else {
            var dd;
            clearInterval(dd);
            if (scrollT + 150 >= 667 && scrollT <= 500 + clientH && i_2 <= 250) {
                clearInterval(dd);
                if (bool_4) {
                    dd = setInterval(function() {
                        i_2++;
                        nm[2].children[0].innerHTML = i_2;
                        if (i_2 >= 250) {
                            clearInterval(dd);
                        }
                    }, 5)
                    bool_4 = false
                }
            } else {
                clearInterval(dd);
                nm[2].children[0].innerHTML = 260;
            }
        }



        // 功率3
        if (scrollT <= 467 || scrollT >= 680 * 2) {
            k_3 = 0;
            bool_5 = true;
            kw[3].children[0].innerHTML = 0;
        } else {
            var ee;
            clearInterval(ee);
            if (scrollT + 150 >= 667 && scrollT <= 500 + clientH && k_2 <= 160) {
                clearInterval(ee);
                if (bool_5) {
                    ee = setInterval(function() {
                        k_3++;
                        kw[3].children[0].innerHTML = k_3;
                        if (k_3 >= 160) {
                            clearInterval(ee);
                        }
                    }, 10)
                    bool_5 = false
                }
            } else {
                clearInterval(ee);
                kw[3].children[0].innerHTML = 160;
            }
        }
        // 扭矩3
        if (scrollT <= 467 || scrollT >= 680 * 2) {
            i_3 = 0;
            bool_6 = true;
            nm[3].children[0].innerHTML = 0;

        } else {
            var ff;
            clearInterval(ff);
            if (scrollT + 150 >= 667 && scrollT <= 500 + clientH && i_2 <= 260) {
                clearInterval(ff);
                if (bool_6) {
                    ff = setInterval(function() {
                        i_3++;
                        nm[3].children[0].innerHTML = i_3;
                        if (i_3 >= 260) {
                            clearInterval(ff);
                        }
                    }, 5)
                    bool_6 = false
                }
            } else {
                clearInterval(ff);
                nm[3].children[0].innerHTML = 260;
            }
        }
    }
    lode();
    window.onscroll = lode;
}