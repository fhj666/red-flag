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

window.onload = function() {
    function lode() {
        // 先获取已加载区域的高度
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        //屏幕的高度
        var clientH = document.documentElement.clientHeight || document.body.clientHeight;

        // 首张图中字的显示
        var one_h1 = document.getElementsByClassName('one_text')[0];
        if (scrollT >= 0 && scrollT <= clientH - 400) {
            one_h1.style.opacity = 1;
        } else {
            one_h1.style.opacity = 0;
        }
        // console.log(image1.offsetTop);
        // if (scrollT + 30 >= image1.offsetTop && scrollT <= image1.offsetTop + clientH) {
        //     h1.style.opacity = 1;
        // }
        // if (scrollT + 200 >= image1.offsetTop + clientH) {
        //     h1.style.opacity = 1;
        // }
        // if (scrollT + 251 >= image1.offsetTop + clientH) {
        //     h1.style.opacity = 0;
        // }
        var image1 = document.getElementsByClassName('image1');
        // console.log(image1);
        for (var i = 0; i < image1.length; i++) {
            if (scrollT + 50 >= image1[i].offsetTop && scrollT + 260 <= image1[i].offsetTop + clientH) {
                image1[i].children[1].style.opacity = 1;

            } else {
                image1[i].children[1].style.opacity = 0;
            }
        }
        var image2 = document.getElementsByClassName('image2');
        for (var i = 0; i < image2.length; i++) {
            if (scrollT + 360 >= image2[i].offsetTop && scrollT + 400 <= image2[i].offsetTop + clientH) {
                image2[i].children[0].children[0].style.opacity = 1;
            } else {
                image2[i].children[0].children[0].style.opacity = 0;
            }
            // console.log(image2[0].children[0].children[0].style.opacity);
        }

        var top = document.querySelector('.top');
        if (top.offsetTop < scrollT) {
            // console.log(scrollT);
            top.style.top = (scrollT / 100) + 'rem';
        } else if (top.offsetTop > scrollT && top.offsetTop > 667) {
            top.style.top = (scrollT / 100) + 'rem';
        } else {
            top.style.top = 6.67 + 'rem';
        }
    }
    lode();
    window.onscroll = lode;
}