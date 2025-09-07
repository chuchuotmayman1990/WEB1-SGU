function createmenu(){
	var s="";
	for(i=0;i<m.length;i++)
	{
		var a='<a href="index.html?'+m[i].mamenu+'&page=1'+'" style="color: white"><div align="center">';
		s+= a + m[i].ten + '</div></a><hr>';	
	}
	//alert(s);
	document.getElementById("createmenu").innerHTML=s;
}

function xuat_sp(temp,x,y)
{
	var vitri = (y-1)*9;
	for(var i=0;i<m.length;i++)
	{
		if(m[i].mamenu == x)
		{
			var s='<div style="font-size: 22px;margin-top: 14px;margin-bottom: 9px;margin-left: 14px;">' + m[i].ten + '</div>';
			break;
		}
		else
		{
			var s='<div style="font-size: 22px;margin-top: 14px;margin-bottom: 9px;margin-left: 14px;">Hiển thị sản phẩm theo: ' + x + '</div>';
		}
	}
	var lienket="";
	var dem =0;
	if(temp.length==0)
	{
		s += '<h1 style="text-align: center">Không có sản phẩm phù hợp.</h1>';
		document.getElementById("sanpham").innerHTML=s;
	}
	else{
		for(var i=vitri;i<temp.length;i++){
			s += '<div class="product"><a href="index.html?detail=' + temp[i].masp + '" style="text-decoration:none"><img src="' + temp[i].hinh + '"alt="' + temp[i].tengame +'" id="hinhsp"/><div><figcaption style="color: white; ">' + temp[i].tengame + '</figcaption></div>';
			s += '<span style="color:#27CF2D;"><b>'+temp[i].gia+' VNĐ</b></span>';
			s += '<div style="position: absolute; left: 50%; top: 90%; transform: translate(-50%, -50%); display: flex;"></a>';
			s += '<input type="button" onClick="" value="Thêm vào giỏ" class="addToCart">';
			s += '<input type="button" onClick="cong('+temp[i].masp+')" value="Mua ngay" class="buy">';
			s += '</div></div>';
			dem++;
			if(dem==9) break;
		}
	}
	var sotrang = Math.ceil(temp.length/9);
	for(i=1;i<=sotrang;i++)
	{
		lienket += '<a href="index.html?'+x+'&page='+i+'" class="number">'+i+'</a>';
	}
	document.getElementById("sanpham").innerHTML=s;
	document.getElementById("sotrang").innerHTML='<div>Trang:'+lienket+'</div>';
}

function xuat_allsp()
{
	var s = `<div style="font-size: 22px;margin-top: 14px;margin-bottom: 9px;margin-left: 14px;">Game nổi bật trên Steam</div><div style="right:45px; position:absolute; bottom:0px;"><a href="index.html?all&page=1" style="color:white; text-decoration:none"><h2>Xem tất cả sản phẩm ❯❯</h2></a></div>`;
	var dem =0; 
	for(var i=0;i<sp.length;i++){
		s += '<div class="product"><a href="index.html?detail=' + sp[i].masp + '" style="text-decoration:none"><img src="' + sp[i].hinh + '"alt="' + sp[i].tengame +'" id="hinhsp"/><div><figcaption style="color: white; ">' + sp[i].tengame + '</figcaption></div>';
		s += '<span style="color:#27CF2D;"><b>'+sp[i].gia+' VNĐ</b></span>';
		s += '<div style="position: absolute; left: 50%; top: 90%; transform: translate(-50%, -50%); display: flex;"></a>';
		s += '<input type="button" onClick="" value="Thêm vào giỏ" class="addToCart">';
		s += '<input type="button" onClick="cong('+sp[i].masp+')" value="Mua ngay" class="buy">';
		s += '</div></div>';
		dem++;
		if(dem==9) break;
	}
	document.getElementById("sanpham").innerHTML=s;
}

function cong(vitri) 
{
	if (window.localStorage.getItem ('signinID')==null)
		alert("Bạn cần phải đăng nhập để mua hàng!");
	else
	{
		alert("Đã thêm vào giỏ hàng.");
		for(var j = 0; j <= Number(sessionStorage.getItem("sosp")); j++)
    	{
        	if(sessionStorage.getItem("sp"+j)==vitri)
        	{
            	sessionStorage.setItem("soluongsp["+j+"]",Number(sessionStorage.getItem("soluongsp["+j+"]"))+1);
            	return;
        	}
        	
    	}
    	if(sessionStorage.i!=null){
	        sessionStorage.setItem("sp"+sessionStorage.i, vitri);
	        sessionStorage.setItem("sosp", sessionStorage.i);
	        sessionStorage.setItem("soluongsp["+sessionStorage.i+"]", 1);
	        sessionStorage.i=Number(sessionStorage.i) +1;
	        
	    }
	    else {
		        sessionStorage.i = 0;
		        sessionStorage.setItem("sp"+sessionStorage.i, vitri);        
		        sessionStorage.setItem("sosp", sessionStorage.i);
		        sessionStorage.setItem("soluongsp["+sessionStorage.i+"]", 1);
		        sessionStorage.i=Number(sessionStorage.i) +1;  
	    }
	}
	window.location = window.location;
	return false;
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

function xuat_feedback()
{
	var s=`
			<h1 align="center">Hộp thư phản hồi / góp ý</h1>
			<div>
			<form id="feedback_f">
			<div>
				<a style="margin-left:10%; margin-top:20px;">Email:</a></br>
				<input type="email" id="feedback_email" style="margin-left:10%; margin-top:10px; color:white; background-color:black;" size=40px;/></br>
				<a style="margin-left:10%; margin-top:10px;">Nội dung:</a></br>
				<textarea style="margin-left:10%; margin-top:10px; width:80%; height:450px; color:white; background-color:black;" placeholder="Nhập nội dung vào đây..."></textarea>
			</div>
			<div align="center" style="margin-top: 15px;"><button style="background-color:black; color:white; margin-right: 10px;" onclick="return email_check()">Gửi</button><input type="reset" value="Nhập lại" style="background-color:black; color:white;"></div>
			</form>
			</div>
			`;
	document.getElementById("sanpham").innerHTML=s;
}

function validateEmail(email) 
{
   	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   	return re.test(String(email).toLowerCase());
}

function email_check()
{
	var e = document.getElementById("feedback_email").value;
		if(e=="")
			alert("Vui lòng nhập vào email.");
		else if (!validateEmail(e))
			alert("Email không hợp lệ, vui lòng nhập lại")
		else 
			alert("Đã gửi phản hồi, chúng tôi sẽ hồi âm cho bạn trong thời gian sớm nhất.");
		return false;
}


function xuat_steamwallet()
{
	var s="";
	for(var i=36;i<42;i++)
	{
		s += '<div class="product"><a href="index.html?wallet' + sp[i].masp + '" style="text-decoration:none"><img src="' + sp[i].hinh + '"alt="' + sp[i].tengame +'" id="hinhsp" style=" margin-top:25px"/><div><figcaption style="color: white; ">' + sp[i].tengame + '</figcaption></div><div style="  position: absolute; left: 50%; top: 90%; transform: translate(-50%, -50%);"></a><span style="color:#27CF2D;"><b>'+sp[i].gia+' VNĐ</b></span><br><input type="button" onClick="cong('+sp[i].masp+')" value="Mua ngay" class="buy"></div></div>';
	}
	document.getElementById("sanpham").innerHTML=s;
}

function xuat_chitietsp(vitri)
{
	var s = '<div style="width:80%; margin-left:10%; margin-top:10px;"><img src="'+sp[vitri].hinh+'" width="100%"/></div><br><div style="margin-left:10%; width:80%">'+sp[vitri].noidung+'</div><br><div style="margin-left:10%"><button style="background-color:red; color: white; border-color: red; border-radius: 4px; width:150px; height:45px;" onClick="return cong('+sp[vitri].masp+')">Mua ngay</button></div><br><div><img style="float:left; width:400px; margin-left:18px" src="'+sp[vitri].minhhoa1+'"/></div><div><img style="float:left; width:400px; margin-left:20px" src="'+sp[vitri].minhhoa2+'"/></div>';
	document.getElementById("sanpham").innerHTML=s;
}


function notLogin()
{
	var s="";
	s += `
		<a href="dangki.html" style="float: right; color: white; margin-right: 10px; margin-top: 136px">Đăng kí</a>
		<a href="dangnhap.html" style="float: right; color: white; margin-right: 10px; margin-top: 136px">Đăng nhập</a>
		<a href="giohang.html" class="fa fa-cart-plus" style="float: right; color: white; margin-right: 27px; margin-top: 139px"></a>
		`;
	document.getElementById("member").innerHTML=s;
}

function Logined()
{
	var userID = window.localStorage.getItem ('signinID');
	var username = window.localStorage.getItem('user00' + userID);
	var i = 0;
	if (window.sessionStorage.i==null)
		var productNum = 0;
	else 
		var productNum = window.sessionStorage.i;
	var s="";
	s += `
		<a style="float: right; color: white; margin: 5px; margin-top: 139px;" href="javascript:void(0);">
		<div class="dropdown">Chào <span>`+username+`</span>
			<div class="dropdown-content">
				<p><a href="giohang.html" style="color:white">Xem giỏ hàng <i class="fa fa-cart-plus"> `+productNum+`</i></a></p>
				<p><a href="javascript:void(0);" onClick="signout()" style="color:white">Đăng xuất <i class="fa fa-sign-out"></i></a></p>`
		if (username == "admin") 
		{ s += `<p><a href="Admin.html" style="color:white">Quản trị <i class="fa fa-address-book-o"></i></a></p>`;}
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

function NormalSearch()
{
	var s = '<input type="search" id="search" placeholder=" Tìm kiếm ..." size="53" />'
			+'<button id="searchbt" onClick="timkiem()"><i class="fa fa-search" style="margin-top: -6px;"></i></button><br>'
			+'<input id="ChagneSearch" type="button" value="Tìm kiếm nâng cao" onClick="AdvancedSearch()" style="margin-left:-270px; margin-top: 10px; border-radius: 5px; cursor: pointer;">';
	document.getElementById("searchdiv").innerHTML = s;
}

function AdvancedSearch()
{
	var s ='<input type="search" id="searchadv" placeholder=" Tìm kiếm nâng cao..." size="53" style="margin-left: 10px;" />'
		+'<button id="searchbt" onclick="timkiemnangcao()" style="margin-left: 10px;"><i class="fa fa-search" style="margin-top: -6px;"></i></button>'
		+'<p style="margin-left: 130px; margin-top: -3px; margin-bottom: 15px; font-size:14px;">Thể loại</p>'
		+'<select id="Kind" style="width: 190px; margin-left: 10px; margin-top: -12px; background-color:black; color: white; padding: 5px; border-radius: 5px; cursor: pointer;">'
			+'<option value="all">Tất cả</option>';
			for (var i=0; i<m.length; i++) {
				s += '<option value="'+ m[i].mamenu +'">' + m[i].ten + '</option>';
			}
	s += '</select>'
		+'<p style="margin-left: 130px; margin-bottom:8px; margin-top:7px; font-size:14px;">Mức giá</p>'
		+'<div class="advance-search-price">'
		+	'<input id="From" type="text" style="width: 70px; margin-left: 10px;" placeholder="Từ"/>';
		+	'<span class="tilde">~</span>';
		+	'<input id="To" type="text" style="width: 70px" placeholder="Đến"/>';
		+	'<input id="ChagneSearch" type="button" value="Quay lại" onclick="NormalSearch()" style="margin-left: 14px; border-radius: 5px; cursor: pointer;" />';
		+'</div>';
	document.getElementById("searchdiv").innerHTML = s;
}

function timkiem()
{
	var a = document.getElementById("search").value;
	var b = a.replace(/ /g,'-');
	location.href='index.html?search='+b+'&page=1';
}

function timkiemnangcao()
{
	var a = document.getElementById("searchadv").value;
	var b = document.getElementById("Kind").value;
	var c = document.getElementById("From").value;
	var d = document.getElementById("To").value;
	var e = a.replace(/ /g,'-');
	location.href='index.html?advsearch='+e+'&'+b+'&'+c+'&'+d+'&page=1';
}


function layurl()
{
	var s = window.location.href;
	var text = s.split("?");	
	var t = text[1].split('&');
	var d = text[1].split('=');
	if(s.indexOf('contact') != -1)
	{
		xuat_contact();
	}
	else if(s.indexOf('wallet') != -1)
	{	
		xuat_steamwallet();
	}
	else if(s.indexOf('feedback') != -1)
	{
		xuat_feedback();
	}
	else if(s.indexOf('detail') != -1)
	{	
		xuat_chitietsp(d[1]);
	}
	else if(d[0]=='search')
	{
		t[0] = t[0].replace(/-/g,' ');
		var a = t[0].split('=');
		var b = a[1].toLowerCase();
		var item = new Array();
		var sl = 0;
		for(var i=0;i<sp.length;i++)
		{
			var s = (sp[i].tengame).toLowerCase();
			if(s.indexOf(b) != -1)
			{
				item[sl] = sp[i];
				sl++;
			}
		}
		for(var i=0;i<card.length;i++)
		{
			var x = (card[i].ten).toLowerCase();
			if(x.indexOf(b) != -1)
			{
				item[sl]=card[i];
				sl++;
			}
		}
		xuat_sp(item,t[0],d[2]);
	}
		else if(d[0]=='advsearch')
	{
		t[0] = t[0].replace(/-/g,' ');
		if (t[2]==''||t[2] < 0) {t[2]= 0;}
		if (t[3]=='') {	t[3] = 9999999;}
		else if (t[3] < 0) t[3] = 0;
		var a = t[0].split('=');
		var b = a[1].toLowerCase();
		var item = new Array();
		var sl = 0;
		for(var i=0;i<sp.length;i++)
		{
			if(t[1]=='all')
			{
				var g = (sp[i].gia).replace(/\./g,'');
				g = Number(g);
				var s = (sp[i].tengame).toLowerCase();
				if( g>=t[2] && g<=t[3] && s.indexOf(b)!=-1)
				{
					item[sl] = sp[i];
					sl++;
				}
			}
			else
			{
				var g = (sp[i].gia).replace(/\./g,'');
				g = Number(g);
				var s = (sp[i].tengame).toLowerCase();
				if( (sp[i].mamenu).indexOf(t[1])!=-1 && g>=t[2] && g<=t[3] && s.indexOf(b)!=-1)
				{
					item[sl] = sp[i];
					sl++;
				}
			}
		}
		var c = t[0]+'&'+t[1]+'&'+t[2]+'&'+t[3];
		xuat_sp(item,c,d[2]);
	}
	else{
		if(t[0]=='all')
		{
			xuat_sp(sp,t[0],d[1]);
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
			xuat_sp(temp,t[0],d[1]);
		}
	}
}


window.onload = function(){
	localStorage.setItem('user000','admin');
	localStorage.setItem('user000password','4tshop321');
	if(localStorage.i==null) localStorage.i=0;	
	if (window.localStorage.getItem ('signinID')==null)
		notLogin();
	else
		Logined();
	NormalSearch();
	xuat_allsp();
	createmenu();
	layurl();
}

















