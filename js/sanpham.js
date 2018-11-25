function xuat_menu(x, t0, t1) {
    var sl = 0;
    var s = "";
    var lienket = "";
    var temp = new Array();
    for (var i = 0; i < sp.length; i++) {
        if (sp[i].mamenu == x) {
            temp[sl] = sp[i];
            sl++;
        }
    }
    var dem = 0;
    for (var i = t1; i < temp.length; i++) {
        s = s + '<div class="product"> <figure> <a href="chitiet.html?' + temp[i].masp + '"> <img src="' + temp[i].hinh + '" alt="' + temp[i].ten + '"></img> <figcaption>' + temp[i].ten + '</figcaption><span>Giá tiền: ' + temp[i].gia + '</span></a> <input type="button" onclick="cong()"  value="Mua ngay" class="buy"></figure></div>'
        dem++;
        if (dem == 8) break;
    }

    var sotrang = Math.ceil(sl / 8);
    var page = 1;
    for (i = 1; i <= sotrang; i++) {

        var vitri = (i - 1) * 8;
        lienket = lienket + '<a href="sanpham.html?' + t0 + '&' + vitri + '" id="pg' + page + '">' + i + '</a>' + ' ';
        page++;

    }

    document.getElementById("sps").innerHTML = s;
    document.getElementById("sotrang").innerHTML = '<div class="number">Trang: ' + lienket + '</div>';
}

function xuat_menu_con(x, t0, t1) {
    var sl = 0;
    var s = "";
    var lienket = "";
    var temp = new Array();
    for (var i = 0; i < sp.length; i++) {
        if (sp[i].mamenu_con == x) {
            temp[sl] = sp[i];
            sl++;
        }
    }
    var dem = 0;
    for (var i = t1; i < temp.length; i++) {
        s = s + '<div class="product"> <figure> <a href="chitiet.html?' + temp[i].masp + '"> <img src="' + temp[i].hinh + '" alt="' + temp[i].ten + '"></img> <figcaption>' + temp[i].ten + '</figcaption><span>Giá tiền: ' + temp[i].gia + '</span></a> <input type="button" onclick="cong()" value="Mua ngay" class="buy"></figure></div>'
        dem++;
        if (dem == 8) break;
    }

    var sotrang = Math.ceil(sl / 8);
    var page = 1;
    for (i = 1; i <= sotrang; i++) {

        var vitri = (i - 1) * 8;
        lienket = lienket + '<a  href="sanpham.html?' + t0 + '&' + vitri + '" id="pg' + page + '" >' + i + '</a>' + ' ';
        page++;

    }
    document.getElementById("sps").innerHTML = s;
    document.getElementById("sotrang").innerHTML = '<div class="number">Trang: ' + lienket + '</div>';
}

function lay() {
    var url = window.location.href;
    var text = url.split('?');
    var t = text[1];
    t = t.split('&');
    switch (t[0]) {
        case 'MC':
            {
                xuat_menu('MC', t[0], t[1]);
                break;
            }
        case 'NC':
            {
                xuat_menu_con('NC', t[0], t[1]);
                break;
            }
        case 'CH':
            {
                xuat_menu_con('CH', t[0], t[1]);
                break;
            }
        case 'CM':
            {
                xuat_menu_con('CM', t[0], t[1]);
                break;
            }
    }

}

function mark() {

    var url = window.location.href;
    var text = url.split('?');
    var t = text[1];
    t = t.split('&');
    var page = (t[1] / 8) + 1;
    document.getElementById("pg" + page).style.backgroundColor = "rgb(241, 164, 101)";
}
window.onload = function() {
    taomenu();
    lay();
    mark();
}