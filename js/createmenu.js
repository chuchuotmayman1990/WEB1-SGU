function createmenu(){
	var s="";
	var vitri=0;
	for(i=0;i<m.length;i++)
	{
		var a='<a href="index.html?'+m[i].mamenu+'&'+vitri+'" style="color: white"><div align="center">';
		s= s + a + m[i].ten + '</div></a><hr>';	
	}
	//alert(s);
	document.getElementById("createmenu").innerHTML=s;
}

function xuat_sp(temp,t0,t1)
{
	var s="";
	var lienket="";
	var dem =0;
	for(var i=t1;i<temp.length;i++){
		s += '<div class="product"><a href="index.html?' + t0 + '" style="text-decoration:none"><img src="' + temp[i].hinh + '"alt="' + temp[i].tengame +'" id="hinhsp" style=" margin-top:25px"/><div><figcaption style="color: white; ">' + temp[i].tengame + '</figcaption></div><div style="  position: absolute; left: 50%; top: 90%; transform: translate(-50%, -50%);"></a><span style="color:white">'+temp[i].gia+' VNĐ</span><br><input type="button" onClick="cong()" value="Mua ngay" class="buy"></div></div>';
		dem++;
		if(dem==9) break;
	}
	var sotrang = Math.ceil(temp.length/9);
	for(i=1;i<=sotrang;i++)
	{
		var vitri = (i-1)*9;
		lienket += '<a href="index.html?'+t0+'&'+vitri+'" class="number">'+i+'</a>';
	}
	document.getElementById("sanpham").innerHTML=s;
	document.getElementById("sotrang").innerHTML='<div>Trang:'+lienket+'</div>';
}
function xuat_allsp()
{
	var s="";
	var lienket="";
	var dem =0;
	for(var i=0;i<sp.length;i++){
		s += '<div class="product"><a href="index.html?" style="text-decoration:none"><img src="' + sp[i].hinh + '"alt="' + sp[i].tengame +'" id="hinhsp" style=" margin-top:25px"/><div><figcaption style="color: white; ">' + sp[i].tengame + '</figcaption></div><div style="position: absolute; left: 50%; top: 90%; transform: translate(-50%, -50%);"></a><span style="color:white">'+sp[i].gia+' VNĐ</span><br><input type="button" onClick="cong()" value="Mua ngay" class="buy"></div></div>';
		dem++;
		if(dem==9) break;
	}
	var sotrang = Math.ceil(sp.length/9);
	for(i=1;i<=sotrang;i++)
	{
		var vitri = (i-1)*9;
		lienket += '<a href="index.html?&'+vitri+'" class="number">'+i+'</a>';
	}
	document.getElementById("sanpham").innerHTML=s;
	document.getElementById("sotrang").innerHTML='<div>Trang:'+lienket+'</div>';
}
function layurl()
{
	var s = window.location.href;
	var text = s.split("?");
	var t = text[1];
	t = t.split('&');
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

window.onload = function(){			
	layurl();
	createmenu();
	xuat_allsp();
	
}
