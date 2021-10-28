// 车型下拉选项
var chexing = document.getElementsByClassName('chexing')[0];
var hide_one = document.getElementsByClassName('hide_one')[0];
var li_one = hide_one.firstElementChild.children;

// 添加省
var sheng = document.getElementsByClassName('sheng')[0];
var hide_two = document.getElementsByClassName('hide_two')[0];
var li_two = hide_two.firstElementChild.children;

// 添加市
var shi = document.getElementsByClassName('shi')[0];
var hide_three = document.getElementsByClassName('hide_three')[0];
var li_three = hide_three.firstElementChild.children;

// 添加经销商 
var jsx = document.getElementsByClassName('jingxiaoshang')[0];
var hide_four = document.getElementsByClassName('hide_four')[0];
var li_four = hide_four.firstElementChild.children;
// console.log(li_one);
// 点击显示
touch.on(chexing, 'tap', function(e) {
    e.cancelBubble = true;
    hide_one.style.height = 0.3 * li_one.length + 0.5 + 'rem';
    yinchang('1')
    jiantou1(chexing)
        // console.log(1);
});
// 点击空白隐藏


touch.on(window, 'tap', function() {
    hide_one.style.height = '0rem';
    // console.log(1);
    jiantou2(chexing)
});
for (var i = 0; i < li_one.length; i++) {
    li_one[i].index = i;
    touch.on(li_one[i], 'tap', function(e) {
        e.cancelBubble = true;
        li_one_text(this.index)
    });

}

function li_one_text(index) {
    chexing.firstElementChild.value = li_one[index].innerHTML
        // console.log(li_one[index].innerHTML);
    hide_one.style.height = '0';
    li_one[index].className = 'xuanzhong'

    for (var i = 0; i < li_one.length; i++) {
        if (i != index) {
            li_one[i].className = ''
        }

    }
}
li_one_text(0)


// 经销商下拉选项
var data_sheng = [
    '安徽省',
    '北京市',
    '福建省',
    '广东省',
    '广西壮族自治区',
    '甘肃省',
    '贵州省',
    '黑龙江省'
]

var data_shi = [
        ['安庆市', '蚌埠市', '滁州市', '池州市', '阜阳市', '合肥市', '淮北市', '黄山市'],
        ['北京市'],
        ['福州市', '龙岩市', '南平市', '宁德市', '莆田市', '泉州市', '三明市', '厦门市'],
        ['潮州市', '东莞市', '佛山市', '广州市', '河源市', '惠州市', '江门市', '揭阳市'],
        ['安庆市', '蚌埠市', '滁州市', '池州市', '阜阳市', '合肥市', '淮北市', '黄山市'],
        ['北京市'],
        ['福州市', '龙岩市', '南平市', '宁德市', '莆田市', '泉州市', '三明市', '厦门市'],
        ['潮州市', '东莞市', '佛山市', '广州市', '河源市', '惠州市', '江门市', '揭阳市']
    ]
    // console.log(data_shi[0]);

var index_sheng, index_shi;


// console.log(li_one);
var src_two = '';
for (var i = 0; i < data_sheng.length; i++) {
    src_two += ' <li data-index="' + i + '">' + data_sheng[i] + '</li>'
}
hide_two.firstElementChild.innerHTML = src_two;

// 点击显示
touch.on(sheng, 'tap', function(e) {
    e.cancelBubble = true;
    hide_two.style.height = 0.3 * li_two.length + 0.5 + 'rem';
    yinchang('2')
    jiantou1(sheng)
        // console.log(1);
});
// 点击空白隐藏
touch.on(window, 'tap', function() {
    hide_two.style.height = '0rem';
    // console.log(1);
    jiantou2(sheng)

});
for (var i = 0; i < li_two.length; i++) {
    li_two[i].index = i;
    touch.on(li_two[i], 'tap', function(e) {

        e.cancelBubble = true;
        li_two_text(this.index)
            // console.log(index_sheng);
    });

}

function li_two_text(index) {
    sheng.firstElementChild.value = li_two[index].innerHTML
        // console.log(li_one[index].innerHTML);
    hide_two.style.height = '0';
    li_two[index].className = 'xuanzhong'
    index_sheng = index;
    for (var i = 0; i < li_two.length; i++) {
        if (i != index) {
            li_two[i].className = ''
        }

    }


    // console.log(li_three);

    var src_three = '';
    for (var i = 0; i < data_shi[index_sheng].length; i++) {
        src_three += ' <li >' + data_shi[index_sheng][i] + '</li>'
    }
    hide_three.firstElementChild.innerHTML = src_three;
    // 点击显示
    touch.on(shi, 'tap', function(e) {
        e.cancelBubble = true;
        hide_three.style.height = 0.3 * li_three.length + 0.5 + 'rem';
        // console.log(1);
        yinchang('3')
        jiantou1(shi)

    });
    // 点击空白隐藏
    touch.on(window, 'tap', function() {
        hide_three.style.height = '0rem';
        jiantou2(shi)

        // console.log(1);
    });
    for (var i = 0; i < li_three.length; i++) {
        li_three[i].index = i;
        touch.on(li_three[i], 'tap', function(e) {
            e.cancelBubble = true;
            li_three_text(this.index)
            console.log(this.index);
        });


    }

    function li_three_text(index) {
        shi.firstElementChild.value = li_three[index].innerHTML

        hide_three.style.height = '0';
        li_three[index].className = 'xuanzhong'
        index_shi = index;
        for (var i = 0; i < li_three.length; i++) {
            if (i != index) {
                li_three[i].className = ''
            }

        }
        // 添加经销商


        hide_four.firstElementChild.innerHTML = '<li >' + data_shi[index_sheng][index_shi] + '红旗汽车经销商</li>';

        // 点击显示
        touch.on(jsx, 'tap', function(e) {
            yinchang('4')
            e.cancelBubble = true;
            hide_four.style.height = 0.3 * li_four.length + 0.5 + 'rem';
            // console.log(1);
            jiantou1(jsx)


        });
        // 点击空白隐藏
        touch.on(window, 'tap', function() {
            hide_four.style.height = '0rem';
            // console.log(1);
            jiantou2(jsx)

        });

        for (var i = 0; i < li_four.length; i++) {
            li_four[i].index = i;
            touch.on(li_four[i], 'tap', function(e) {
                e.cancelBubble = true;
                li_four_text(this.index)
                console.log(this.index);
            });


        }

        function li_four_text(index) {
            jsx.firstElementChild.value = li_four[index].innerHTML
            hide_four.style.height = '0';
            li_four[index].className = 'xuanzhong'
            index_shi = index;
            for (var i = 0; i < li_four.length; i++) {
                if (i != index) {
                    li_li_four[i].className = ''
                }

            }

        }
        li_four_text(0)




    }
    li_three_text(0)




}
li_two_text(0)

// 同意变色
var tongyi = document.getElementById('tongyi');
var checkbox = document.getElementById('checkbox');

touch.on(checkbox, 'tap', function() {
    // checkbox.checked
    if (checkbox.checked) {
        tongyi.style.color = 'rgb(0,92,200)'
    } else {
        tongyi.style.color = 'rgb(248,249,249)'
    }

    console.log(checkbox.checked);

});




function yinchang(i) {
    if (i == 1) {
        // hide_one.style.height = '0rem';
        hide_two.style.height = '0rem';
        hide_three.style.height = '0rem';
        hide_four.style.height = '0rem';
        // jiantou2(chexing)
        jiantou2(sheng)
        jiantou2(shi)
        jiantou2(jsx)
    } else if (i == 2) {
        hide_one.style.height = '0rem';
        // hide_two.style.height = '0rem';
        hide_three.style.height = '0rem';
        hide_four.style.height = '0rem';
        jiantou2(chexing)
            // jiantou2(sheng)
        jiantou2(shi)
        jiantou2(jsx)
    } else if (i == 3) {
        hide_one.style.height = '0rem';
        hide_two.style.height = '0rem';
        // hide_three.style.height = '0rem';
        hide_four.style.height = '0rem';
        jiantou2(chexing)
        jiantou2(sheng)
            // jiantou2(shi)
        jiantou2(jsx)
    } else if (i == 4) {
        hide_one.style.height = '0rem';
        hide_two.style.height = '0rem';
        hide_three.style.height = '0rem';
        // hide_four.style.height = '0rem';
        jiantou2(chexing)
        jiantou2(sheng)
        jiantou2(shi)
            // jiantou2(jsx)
    }

}


function jiantou1(dom) {
    dom.children[1].style.transform = 'rotate(180deg)';
    dom.children[1].style.transition = 'all .5s';

}

function jiantou2(dom) {
    dom.children[1].style.transform = 'rotate(0deg)';
    dom.children[1].style.transition = 'all .5s';

}