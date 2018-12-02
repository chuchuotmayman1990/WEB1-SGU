function createmenu(){
	var s="";
	for(i=0;i<m.length;i++)
	{
		var a='<a href="index.html?'+m[i].mamenu+'&'+1+'" style="color: white"><div align="center">';
		s= s + a + m[i].ten + '</div></a><hr>';	
	}
	//alert(s);
	document.getElementById("createmenu").innerHTML=s;
}

function xuat_sp(temp,t0,t1)
{
	var vitri = (t1-1)*9;
	for(var i=0;i<m.length;i++)
	{
		if(m[i].mamenu == t0)
		{
			var s='<div style="font-size: 22px;margin-top: 14px;margin-bottom: 9px;margin-left: 14px;">' + m[i].ten + '</div>';
		}	
	}
	var lienket="";
	var dem =0;
	for(var i=vitri;i<temp.length;i++){
		s += '<div class="product"><a href="index.html?detail=' + temp[i].masp + '" style="text-decoration:none"><img src="' + temp[i].hinh + '"alt="' + temp[i].tengame +'" id="hinhsp" style=" margin-top:25px"/><div><figcaption style="color: white; ">' + temp[i].tengame + '</figcaption></div><div style="  position: absolute; left: 50%; top: 90%; transform: translate(-50%, -50%);"></a><span style="color:#27CF2D;"><b>'+temp[i].gia+' VNĐ</b></span><br><input type="button" onClick="cong()" value="Mua ngay" class="buy"></div></div>';
		dem++;
		if(dem==9) break;
	}
	var sotrang = Math.ceil(temp.length/9);
	for(i=1;i<=sotrang;i++)
	{
		lienket += '<a href="index.html?'+t0+'&'+i+'" class="number">'+i+'</a>';
	}
	document.getElementById("sanpham").innerHTML=s;
	document.getElementById("sotrang").innerHTML='<div>Trang:'+lienket+'</div>';
}

function xuat_contact()
{
	var s = '<table border="1" width=100% style="text-align:center"><tr><td width="30%">Họ và tên</td><td width="20%">Mã số sinh viên</td><td>Công việc</td></tr>';
	for(var i=0; i<tt.length; i++)
	{
		s += '<tr><td>'+tt[i].hoten+'</td><td>'+tt[i].mssv+'</td><td style="color:#27CF2D;">'+tt[i].congviec+'</td></tr>';
	}
	s += '</table>';
	document.getElementById("sanpham").innerHTML=s;
}

function xuat_support()
{

}

function xuat_chitietsp(vitri)
{
	var s = '<div><img src="'+sp[vitri].hinh+'"/></div><br><div>'+sp[vitri].noidung+'</div>';
	document.getElementById("sanpham").innerHTML=s;
}

function notLogin()
{
	var s="";
	s += `
		<a href="dangki.html" style="float: right; color: white; margin: 5px; margin-top: 136px">Đăng kí</a>
		<a href="dangnhap.html" style="float: right; color: white; margin: 5px; margin-top: 136px">Đăng nhập</a>
		<a href="giohang.html" class="fa fa-cart-plus" style="float: right; color: white; margin: 4px; margin-top: 137px"></a>
		`;
	document.getElementById("member").innerHTML=s;
}

function Logined()
{
	var userID = window.localStorage.getItem ('signinID');
	var username = window.localStorage.getItem('user00' + userID);
	var s="";
	s += `
		<a style="float: right; color: white; margin: 5px; margin-top: 139px;" href="javascript:void(0);">
		<div class="dropdown">Chào <span>`+username+`</span>
			<div class="dropdown-content">
				<p><a href="giohang.html" style="color:white">Xem giỏ hàng <i class="fa fa-cart-plus"></i></a></p>
				<p><a href="javascript:void(0);" onClick="signout()" style="color:white">Đăng xuất <i class="fa fa-sign-out"></i></a></p>`
		if (username == "admin") 
		{ s += `<p><a href="quantri.html" style="color:white">Quản trị <i class="fa fa-address-book-o"></i></a></p>`;}
		   `</div>
		</div>
		</a>`;
	document.getElementById("member").innerHTML=s;
}

function signout()
{
	window.localStorage.removeItem('signinID');
	window.location="index.html";
}

function layurl()
{
	var s = window.location.href;
	var text = s.split("?");
	var t = text[1];
	t = t.split('&');
	if(s.indexOf('contact') != -1)
	{
		xuat_contact();
	}
	else if(s.indexOf('support') != -1)
	{
		xuat_support();
	}
	else if(s.indexOf('detail') != -1)
	{
		var d = text[1].split('=');
		xuat_chitietsp(d[1]);
	}
	else{
		var sl = 0;
		var temp = new Array();
		for(var i=0;i<sp.length;i++)
		{
			var tl = (sp[i].mamenu).indexOf(t[0]);
			if( tl != -1) {
				temp[sl] = sp[i];
				sl++;
			}
		}
		xuat_sp(temp,t[0],t[1]);
	}
}

window.onload = function(){			
	if (window.localStorage.getItem ('signinID')==null)
		notLogin();
	else
		Logined();
	createmenu();
	layurl();
}
