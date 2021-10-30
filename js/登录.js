var denglu = document.getElementById('denglu');
var yzm = document.getElementsByClassName('yanzhenma')[0];
var jinggao = document.getElementsByClassName('jinggao')[0];
// console.log(jinggao);
// 点击登录
touch.on(denglu, 'tap', function() {

    if (!yanzheng()) {
        jinggao.style.opacity = 1;

        setTimeout(function() {
            jinggao.style.opacity = 0;
        }, 2000)
    } else {
        window.location.href = "../首页/index.html"
    }
});
// 点击验证码
touch.on(yzm, 'tap', function() {

    if (!yanzheng()) {
        jinggao.style.opacity = 1;

        setTimeout(function() {
            jinggao.style.opacity = 0;
        }, 2000)
    }
});
// 正则表达式
function yanzheng() {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    var src = document.getElementsByClassName('one')[0].children[0].value;
    return reg.test(src)
}

var che = document.getElementById('che');
var xz = document.getElementsByClassName('xz');

touch.on(che, 'tap', function() {
    if (che.checked) {
        xz[0].classList.add("xuanzhong")
        xz[1].classList.add("xuanzhong")
    } else {
        xz[0].classList.remove("xuanzhong")
        xz[1].classList.remove("xuanzhong")
    }

});

// 点击账号密码登录
var dl_1 = document.getElementsByClassName('denglu_1')[0];
var dl_2 = document.getElementsByClassName('denglu_2')[0];

var box_1 = document.getElementsByClassName('box')[0];
var box_2 = document.getElementsByClassName('three')[0];

touch.on(dl_1, 'tap', function() {
    dl_1.style.display = 'none';
    dl_2.style.display = "block";
    box_1.style.display = 'none';
    box_2.style.display = "block";
});
touch.on(dl_2, 'tap', function() {
    dl_2.style.display = 'none';
    dl_1.style.display = "block";
    box_2.style.display = 'none';
    box_1.style.display = "block";
});