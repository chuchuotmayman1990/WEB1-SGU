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

function addproduct()
{
	window.open("themsanpham.html","","width=710,height=400,top=300,left=300");
}

function DSSP()
{
	var s = '<div><select id="adtl" onChange="return Item(this)">';
	var a = '<option value="all" selected>Tất cả sản phẩm</option>';
	for(var i=0;i<m.length;i++)
	{
		a += '<option value="' + m[i].mamenu + '">'+ m[i].ten +'</option>';
	}
	a += '<option value="wallet">Steam wallet code</option>';
	s += a + '</select><input type="button" value="Thêm sản phẩm" id="addsp" onclick="addproduct()"></div><br>';
	document.getElementById("theloai").innerHTML=s;
}

function Item(obj)
{
	var b = document.getElementById("adtl").value;
	var item = new Array();
	var sl=0;
	if(b.indexOf('wallet')!=-1)
	{
		xuat_wallet();
	}
	else
	{
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
}

function xuat_wallet()
{
	var s = `<table border="1" style="border-collapse: collapse; width: 100%; text-align: center;"><tr bgcolor="orange">
		<td style="width:10%">MASP</td>
		<td style="width:30%">Ảnh</td>
		<td style="width:25%">Tên thẻ</td>
		<td style="width:20%">Giá(VNĐ)</td></tr>`;
		for(var i=0;i<card.length;i++)
		{
			s += `<tr>
				<td style="width:10%">`+ card[i].masp +`</td>
				<td style="width:30%">`+ card[i].hinh +`</td>
				<td style="width:25%">`+ card[i].ten +`</td>
				<td style="width:20%">`+ card[i].gia +`</td>
				<td style="width:15%"><input type="button" value="sửa">&emsp;<input type="button" onclick="xoasp()" value="xóa"></td></tr>`;
		}
	s+=`</table>`;
	document.getElementById("thongtin").innerHTML=s;
}

function xuat_DSSP(item)
{
	var s="";
	if(item.length==0) document.getElementById("thongtin").innerHTML='<h1>Không có sản phẩm nào.</h1>';
	else{
		s += '<table border="1" style="border-collapse: collapse; width: 100%; text-align: center;"><tr bgcolor="orange">'
			+'<td style="width:3%;height:50px;">MASP</td>'
			+'<td style="width:15%">Ảnh</td>'
			+'<td style="width:15%">Tên Game</td>'
			+'<td style="width:10%">Thể loại</td>'
			+'<td style="width:10%">Giá(VNĐ)</td>'
			+'<td style="width:37%">Nội dung</td></tr>';
		for(var i=0;i<item.length;i++)
		{
			s += '<tr>'
			+'<td style="width:3%">'+i+'</td>'
			+'<td style="width:15%"><img src="'+item[i].hinh+'" width="100%" height="100px"/></td>'
			+'<td style="width:15%">'+item[i].tengame+'</td>'
			+'<td style="width:10%">'+item[i].mamenu+'</td>'
			+'<td style="width:10%">'+item[i].gia+'</td>'
			+'<td style="width:37%">'+item[i].noidung+'</td>'
			+'<td style="width:10%"><input type="button" value="sửa">&emsp;<input type="button" onclick="xoasp()" value="xóa"></td></tr>';
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

function xuat_donhang()
{
	var a = `<p>Từ: <input type="date" name="fday">&emsp;Đến: <input type="date" name="tday">&emsp;<input type="button" name="dsearch" value="Lọc"></p>`;
	var b = `<table width="100%" border="1" style="border-collapse: collapse; text-align:center">
	<tr bgcolor="orange">
		<td>STT</td>
		<td>Khách hàng</td>
		<td>Đơn hàng</td>
		<td>Thành tiền</td>
		<td>Thời gian</td>
		<td>Trạng thái</td>
		<td><input type="button" name="save" value="Lưu"></td></tr>
	</table>`;
	document.getElementById("theloai").innerHTML=a;
	document.getElementById("thongtin").innerHTML=b;
}

function layurlad(){
	var url = window.location.href;
	var text = url.split('?');
	var t = text[1];
	t = t.split('&');
	for(var i=0;i<view.length;i++)
	{
		if(t[0]=='DSSP')
		{
			DSSP();
			Item();
		}
		else if(t[0]=='DH')
		{
			xuat_donhang();
		}
	}
}

window.onload = function(){
	viewproduct();
	layurlad();
}