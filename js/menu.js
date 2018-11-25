function taomenu() {

    var s = "";
    var j = 0;
    for (i = 0; i < m.length; i++) {
        var a = '<li><a href="sanpham.html?' + m[i].mamenu + '&' + 0 + '">';
        s = s + a + m[i].ten + '</a>';
        var l = '<ul class="downmenu">';
        for (var k = 0; k < mdown.length; k++) {
            if (m[i].mamenu == mdown[k].mamenu) {
                var n = '<li><a href="sanpham.html?' + mdown[k].mamenu_con + '&' + j + '">';
                l = l + n + mdown[k].ten + '</a></li>';
            }
        }
        l = l + '</ul></li>';
        s = s + l;
    }
    document.getElementById("contmenu").innerHTML = s;
}

function xuat() {

}

window.onload = function() {
    taomenu();
}