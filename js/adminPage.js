function viewproduct(){
	var s="";
	var vitri=0;
	for(var i=0;i<view.length;i++)
	{
		var a='<a href="Admin.html?'+view[i].ma+'&'+vitri+'"><div class="choice">';
		s= s + a + view[i].ten + '</div></a>';	
	}
	//alert(s);
	document.getElementById("adchoice").innerHTML=s;
}

function DSSP()
{
	var s = '<div><select id="adtl" onChange="return Item(this)">';
	var a = '<option value="all" selected>Tất cả sản phẩm</option>';
	for(var i=0;i<m.length;i++)
	{
		a += '<option value="' + m[i].mamenu + '">'+ m[i].ten +'</option>';
	}
	s += a + '</select><input type="button" value="Thêm sản phẩm" id="addsp"></div><br>';
	document.getElementById("adchoice").innerHTML=s;
}

function Item(obj)
{
	var b = document.getElementById("adtl").value;
	var item = new Array();
	var sl=0;
	for(var j=0;j<sp.length;j++)
	{
		var c = (sp[j].mamenu).indexOf(b);
		
		if(c!=-1){
			item[sl]=sp[j];
			sl++;
		}
		else if(b.indexOf('all')!=-1)
		{
			item[sl] = sp[j];
			sl++;
		}
	}
	xuat_DSSP(item);
}

function xuat_DSSP(item)
{
	var s="";
	if(item.length==0) document.getElementById("thongtin").innerHTML='<h1>Không có sản phẩm nào.</h1>';
	else{
		s += '<table border="1" style="border-collapse: collapse; width: 100%; text-align: center;"><tr>'
			+'<td style="width:5%;height:50px;">STT</td>'
			+'<td style="width:20%">Ảnh</td>'
			+'<td style="width:25%">Tên Game</td>'
			+'<td style="width:20%">Giá(VNĐ)</td>'
			+'<td style="width:20%">Thể loại</td></tr>';
		for(var i=0;i<item.length;i++)
		{
			s += '<tr>'
			+'<td style="width:5%">'+i+'</td>'
			+'<td style="width:20%"><img src="'+item[i].hinh+'" width="100%" height="100px"/></td>'
			+'<td style="width:25%">'+item[i].tengame+'</td>'
			+'<td style="width:20%">'+item[i].gia+'</td>'
			+'<td style="width:20%">'+item[i].mamenu+'</td>'
			+'<td style="width:10%"><input type="button" value="sửa"><input type="button" onclick="xoasp()" value="xóa"></td></tr>';
		}
		s+='</table>';
		document.getElementById("thongtin").innerHTML=s;
	}
}

function xoasp()
{
	if(confirm("Bạn có chắc muốn xóa sản phẩm này?")==true)
	{
		alert("Đã xóa sản phẩm này.")
	}
}

function layurlad(){
	var url = window.location.href;
	var text = url.split('?');
	var t = text[1];
	t = t.split('&');
	switch(t[0])
	{
		case 'DSSP':{
			DSSP();
			Item();
		}
	}
}

window.onload = function(){
	viewproduct();
	layurlad();
}