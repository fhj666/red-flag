var data_chexi = ['H5', 'H7', 'HS5', 'HS7', 'E-HS3', 'H9', 'E-HS9']
var data_chexing = [
    ['2020款1.5T旗韵版(17寸轮毅)', '2020款1.5T旗悦版', '2020款1 .8T智联旗享版', '2020款1.8T智联旗韵版', '2020款1 .8T智联旗畅版', '2019款1.8T灵动版', '2019款1.8T智联享动版', '2019款1 8T智联司动版'],
    ['2021款1.8T舒适版', '2021款2.0T精英版', '2021款2.0T旗舰版', '2019款3.0L尊崇版'],
    ['2019款2.0T智联旗领版', '2019款2.0T智联旗悦版', '2019款2.0T智联旗享版', '2019款2.0T智联旗享四驱版', '2019款2.0T智联旗领四驱版'],
    ['2021款3.0T智联旗享四驱版七座版', '2021款3.0T智联旗畅四驱版五座版', '2021款3.0T智联旗悦四驱版', '2021款2.0T智联旗畅版七座版', '2021款2.0T智联旗畅版五座版', '2021款2.0T智联旗享版七座版', '2021款3.0T智联旗享四驱版五座版', '3. 0T智联旗畅四驱版(五座)'],
    ['纯电动两驱智联旗悦版', '纯电动智联旗领四驱版'],
    ['2020款2.0T智联旗畅版', '2020款3.0T智联旗畅版', '2020款3.0T智联旗领四座版', '红旗H9 2020款2.0T智联旗悦版', '2020款2.0T智联旗享版'],
    ['红旗E-HS9 2021款旗领四座版', '红旗E-HS9 2021款旗享六座版', '红旗E-HS9 2021款旗畅六座版', '红旗E-HS9 2021款旗悦七座版']
]
var data_qian = ['172800', '258800', '226800', '459800', '225800', '269800', '729800']
    // 车型
var chexi = document.getElementsByClassName('chexi')[0];
var chexi_yc = document.getElementsByClassName('chexi_yc')[0];
// 车系
var chexing = document.getElementsByClassName('chexing')[0];
var chexing_yc = document.getElementsByClassName('chexing_yc')[0];

var img_ = document.getElementsByClassName('car_img')[0].firstElementChild;

// 价钱
var qian = document.getElementById('qian')
var q_i = 0;

// 创建车系li
tianjia(chexi, chexi_yc, data_chexi);
tianjia(chexing, chexing_yc, data_chexing[0]);
var li_ = chexi_yc.firstElementChild.children;
var lis_ = chexing_yc.firstElementChild.children;

for (var i = 0; i < data_chexi.length; i++) {
    li_[i].index = i;
    touch.on(li_[i], 'tap', function(e) {
        e.cancelBubble = true;
        lic_text(chexi, chexi_yc, li_, this.index);


        img_.src = "../img/0" + this.index + ".png"
        q_i = this.index;
        qian.innerHTML = '车辆金额：' + data_qian[q_i] + '元'


        // 创建车型
        tianjia(chexing, chexing_yc, data_chexing[this.index]);
        chexing.firstElementChild.value = lis_[0].innerHTML
        lis_[0].className = 'xuanzhong'

        for (var i = 0; i < lis_.length; i++) {
            lis_[i].index = i;
            touch.on(lis_[i], 'tap', function(e) {
                e.cancelBubble = true;
                lic_text(chexing, chexing_yc, lis_, this.index);
                qian.innerHTML = '车辆金额：' + (parseInt(data_qian[q_i]) + 17000 * parseInt(this.index)) + '元'

            });

        };
    })
}
// 不写页面刚打开车型展开不能点击
for (var i = 0; i < lis_.length; i++) {
    lis_[i].index = i;
    touch.on(lis_[i], 'tap', function(e) {
        e.cancelBubble = true;
        lic_text(chexing, chexing_yc, lis_, this.index);
        qian.innerHTML = '车辆金额：' + (parseInt(data_qian[q_i]) + 17000 * parseInt(this.index)) + '元'

    });

};

function lic_text(chexi, chexi_yc, li_, index) {
    chexi.firstElementChild.value = li_[index].innerHTML
        // console.log(li_one[index].innerHTML);
    chexi_yc.style.height = '0';
    li_[index].className = 'xuanzhong'

    for (var i = 0; i < li_.length; i++) {
        if (i != index) {
            li_[i].className = ''
        }
    }



}
lic_text(chexi, chexi_yc, li_, 0)
lic_text(chexing, chexing_yc, lis_, 0);



// 封装创建li的方法
function tianjia(doc1, doc2, arr) {
    var li = '';
    for (var i = 0; i < arr.length; i++) {
        li += '<li>' + arr[i] + '</li>'
    }
    doc2.firstElementChild.innerHTML = li;

    // // 点击显示
    touch.on(doc1, 'tap', function(e) {
        e.cancelBubble = true;
        doc2.style.height = 0.4 * arr.length + 0.1 + 'rem';
        if (doc1 == chexi) {
            chexing_yc.style.height = '0rem';
        } else if (doc1 == chexing) {
            chexi_yc.style.height = '0rem';
        }
    });
    // 空白点击隐藏
    touch.on(window, 'tap', function() {
        doc2.style.height = '0rem';
    });

}


// 点击切换金融方案的图片
var img_s = [
    ['21607320204990租赁标准型_550x300.jpg', '21607320169347租赁515尾款型_550x300.jpg'],
    ['11607069927068标准信贷产品_550x300.jpg', '11607069859480尾款信贷产品_550x300.jpg']
];
var bun1 = document.getElementsByClassName('bun1');
var bun2 = document.getElementsByClassName('bun2');
var img_fangan = document.getElementsByClassName('img')[0].firstElementChild;
var i_ = 0,
    j_ = 0;
bun2[0].classList.add('div_xuanzhong');
for (var i = 0; i < bun1.length; i++) {
    bun1[i].index = i;
    touch.on(bun1[i], 'tap', function() {
        bun1[0].classList.remove('div_xuanzhong');
        bun1[1].classList.remove('div_xuanzhong');
        this.classList.add('div_xuanzhong');
        i_ = this.index;



        bun2[1].classList.remove('div_xuanzhong');
        bun2[0].classList.add('div_xuanzhong');
        j_ = bun2[0].index;
        // console.log(img_fangan);
        img_fangan.src = '../img/' + img_s[i_][j_];
        // console.log('../img/' + img_s[i_][j_]);
    });

}

for (var i = 0; i < bun2.length; i++) {
    bun2[i].index = i;
    touch.on(bun2[i], 'tap', function() {
        bun2[0].classList.remove('div_xuanzhong');
        bun2[1].classList.remove('div_xuanzhong');
        this.classList.add('div_xuanzhong');
        j_ = this.index;
        img_fangan.src = '../img/' + img_s[i_][j_];
    });


}

var logo = document.getElementsByClassName('logo_')[0];

// 头部logo
window.onscroll = function() {
    var top = document.documentElement.scrollTop;
    logo.style.top = top + 'px';
    if (top < 100) {
        logo.style.opacity = '1';
    } else {
        logo.style.opacity = '0';
    }
}