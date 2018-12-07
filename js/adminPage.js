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
	var stt =0;
	var s = `<table border="1" style="border-collapse: collapse; width: 100%; text-align: center;"><tr bgcolor="orange">
		<td style="width:10%">STT</td>
		<td style="width:30%">Ảnh</td>
		<td style="width:25%">Tên thẻ</td>
		<td style="width:20%">Giá(VNĐ)</td></tr>`;
		for(var i=36;i<42;i++)
		{
			s += `<tr><td style="width:10%">`+ stt +`</td>
				<td style="width:30%"><img src="`+ sp[i].hinh +`" width="100%"/></td>
				<td style="width:25%">`+ sp[i].tengame +`</td>
				<td style="width:20%">`+ sp[i].gia +`</td>
				<td style="width:15%"><input type="button" value="sửa">&emsp;<input type="button" onclick="xoasp()" value="xóa"></td></tr>`;
				stt++;
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
			+'<td style="width:3%;height:50px;">STT</td>'
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
	<tr>
		<td>000</td>
		<td>vanhung_nguyen843</td>
		<td>HX1074</td>
		<td>1748000đ</td>
		<td>17:38:42 - 29/11/2018</td>
		<td><select name="status">
						<option value="0" selected>Đã giao
						<option value="1">Đã liên hệ
						<option value="2" >Chưa liên hệ</td>
		<td><input type="button" name="save" value="Lưu"></td></tr>
	<tr>
		<td>001</td>
		<td>phu98_super</td>
		<td>WL2738</td>
		<td>1989000đ</td>
		<td>20:13:59 - 1/12/2018</td>
				<td><select name="status">
						<option value="0" selected>Đã giao
						<option value="1">Đã liên hệ
						<option value="2" >Chưa liên hệ</td>
		<td><input type="button" name="save" value="Lưu"></td></tr>
	<tr>
		<td>002</td>
		<td>trungle9981</td>
		<td>JK9854</td>
		<td>2300000đ</td>
		<td>9:42:17 - 5/12/2018</td>
				<td><select name="status">
						<option value="0">Đã giao
						<option value="1" selected>Đã liên hệ
						<option value="2" >Chưa liên hệ</td>
		<td><input type="button" name="save" value="Lưu"></td></tr>
	<tr>
		<td>003</td>
		<td>vanhiep_bros2k</td>
		<td>QP8722</td>
		<td>3806500đ</td>
		<td>18:11:37 7/12/2018</td>
				<td><select name="status">
						<option value="0">Đã giao
						<option value="1">Đã liên hệ
						<option value="2" selected>Chưa liên hệ</td>
		<td><input type="button" name="save" value="Lưu"></td></tr>		
	</table>`;
	document.getElementById("theloai").innerHTML=a;
	document.getElementById("thongtin").innerHTML=b;
}

function xuat_qlu()
{
	var i=0;
	var s = `<table style="width:100%; text-align:center"><tr style="background-color:orange">
			<td style="width:32%">Tài khoản</td>
			<td style="width:32%">Mật khẩu</td></tr>`;
	while(window.localStorage.getItem('user00'+i)!=null)
	{
		var id = window.localStorage.getItem('user00'+i);
		var pw = window.localStorage.getItem('user00'+i+'password');
		s += `<tr><td>`+id+`</td>
			<td>`+pw+`</td>`;
		if(id!='admin')
		{
			s += `<td style="width:32%" ><input type="button" value="sửa">&emsp;<input type="button" onclick="xoa_qlu(`+i+`)" value="xóa"></td></tr>`;
		}
		i++;
	}
	s+=`</table>`;
	document.getElementById("thongtin").innerHTML=s;
}

function xoa_qlu(vitri)
{
	if(confirm("Bạn có muốn xóa không")==true)
	{
		while(vitri<localStorage.i)
		{
			localStorage.setItem("user00"+vitri,localStorage.getItem("user00"+(vitri+1)));
			localStorage.setItem("user00"+vitri+"password",localStorage.getItem("user00"+(vitri+1)+"password"));
			vitri++;
		}
	    window.localStorage.removeItem("user00" + vitri);
	    window.localStorage.removeItem("user00" + vitri + "password");
	    localStorage.setItem("i", Number(localStorage.getItem("i"))-1);
	    xuat_qlu();
	}
	
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
		else if(t[0]=='QLTK')
		{
			xuat_qlu();
		}
	}
}
window.onload = function(){
	viewproduct();
	layurlad();
}