window.onload = function() {
    function lode() {
        // 先获取已加载区域的高度
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        //屏幕的高度
        var clientH = document.documentElement.clientHeight || document.body.clientHeight;

        var floor1 = document.getElementsByClassName('floor1');
        for (var i = 0; i < floor1.length; i++) {
            if (scrollT + 260 >= floor1[i].offsetTop && scrollT + 300 <= floor1[i].offsetTop + clientH) {
                floor1[i].children[1].style.opacity = 1;
                floor1[i].children[1].style.opacity = 1;
            } else {
                floor1[i].children[1].style.opacity = 0;
                floor1[i].children[1].style.opacity = 0;
            }

        }
    }
    lode();
    window.onscroll = lode;
}