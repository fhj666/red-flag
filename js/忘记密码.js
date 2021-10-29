function yanzheng(reg, src) {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    var src = document.getElementsByClassName('one')[0].children[0].value;
    return reg.test(src)
}


var button2 = document.getElementsByClassName('button2')[0];
var yzm = document.getElementsByClassName('yanzhenma')[0];
var jinggao = document.getElementsByClassName('jinggao')[0];
// console.log(jinggao);


var jinggao1 = document.getElementsByClassName('jinggao1')[0];
var jinggao2 = document.getElementsByClassName('jinggao2')[0];

var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');


var pattern = /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[0-9]).{8,20}$/;


// 点击登录
touch.on(button2, 'tap', function() {

    if (!yanzheng()) {
        jinggao.style.opacity = 1;
        setTimeout(function() {
            jinggao.style.opacity = 0;
        }, 2000)
    } else if (pass1.value == pass2.value) {
        if (pattern.test(pass1.value)) {
            // 跳转页面
            window.location.href = "../首页/index.html";
        } else {
            jinggao1.style.opacity = 1;
            setTimeout(function() {
                jinggao1.style.opacity = 0;
            }, 2000)
        }
    } else {
        jinggao2.style.opacity = 1;
        setTimeout(function() {
            jinggao2.style.opacity = 0;
        }, 2000)
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



// 验证密码