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