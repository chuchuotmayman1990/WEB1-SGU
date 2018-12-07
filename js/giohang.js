/*Gio hang*/

function xuat_sp()
{
	var i = 0;
	var s=`<table style="text-align:center;" width="100%" border='1'>
			<tr><td style="width:28%">Hình ảnh</td>
				<td style="width:40%">Tên sản phẩm</td>
				<td style="width:15%">Đơn giá</td>
				<td style="width:10%">Số lượng</td>
				<td style="width:12%">Xóa</td></tr>`;
	while(sessionStorage.getItem('sp'+i)!=null)
	{
		var x = sessionStorage.getItem('sp'+i);
		for(var j=0;j<sp.length;j++)
		{
			if(sp[j].masp==x) break;
		}
		s+=`<tr><td style="width:28%"><img src="`+sp[j].hinh+`" width="100%"/></td>
			<td style="width:40%">`+sp[j].tengame+`</td>
			<td style="width:15%">`+sp[j].gia+` VNĐ</td>
			<td style="width:10%"><button style="width:30%" id="giam" onclick="giam(`+i+`)">-</button><input type="text" value="`+Number(sessionStorage.getItem("soluongsp["+i+"]"))+`" id="sl`+i+`" style="text-align:center; width:25%"/><button style="width:30%" id="tang" onclick="tang(`+i+`)">+</button></td>
			<td style="width:12%"><button id="xoa`+i+`" onclick="xoa(`+i+`)"><i class="fa fa-trash" style="font-size: 20px;"></i></button></td></tr>`;
		i++;
	}
//	alert(s);
	s+=`</table>`;
	document.getElementById('spmua').innerHTML=s;
	tongtien();
}

function giam(i)
{
	/*var sl = document.getElementById("sl"+x).value;
	sl = Number(sl)-1;
	if(sl>=1) document.getElementById("sl"+x).value=sl;*/
	sessionStorage.setItem("soluongsp["+i+"]",Number(sessionStorage.getItem("soluongsp["+i+"]"))-1);
	if(Number(sessionStorage.getItem("soluongsp["+i+"]"))<1) sessionStorage.setItem("soluongsp["+i+"]",1);
	document.getElementById("sl"+i).value=sessionStorage.getItem("soluongsp["+i+"]");
	tongtien();
}
function tang(i)
{
	/*var sl = document.getElementById("sl"+x).value;
	sl = parseInt(sl)+1;
	document.getElementById("sl"+x).value=sl;
	document.getElementById("slsp").innerHTML=Number(document.getElementById("slsp"))+1;*/
	sessionStorage.setItem("soluongsp["+i+"]",Number(sessionStorage.getItem("soluongsp["+i+"]"))+1);
	document.getElementById("sl"+i).value=sessionStorage.getItem("soluongsp["+i+"]");
	tongtien();

}
function xoa(i)
{
	if(confirm("Bạn chắc muốn xóa sản phẩm này?")==true)
		{
			while(i <= Number(sessionStorage.getItem("sosp"))){
				sessionStorage.setItem("sp"+i, sessionStorage.getItem("sp"+(i+1)));
				sessionStorage.setItem("soluongsp["+i+"]", sessionStorage.getItem("soluongsp["+(i+1)+"]"));
				i++;
			}
			sessionStorage.removeItem("sp"+Number(sessionStorage.getItem("sosp")));
			sessionStorage.removeItem("soluongsp["+Number(sessionStorage.getItem("sosp"))+"]");
			sessionStorage.setItem("i", Number(sessionStorage.getItem("i"))-1);
			sessionStorage.setItem("sosp", Number(sessionStorage.getItem("sosp"))-1);
			xuat_sp();
			tongtien();
		}
}

function tongtien()
{
	var i = 0;
	var tongtien = 0;
	var slsp = 0;
	while(i<sessionStorage.length)
	{	
		var x = sessionStorage.getItem('sp'+i);
		if(x!=null)
		{
			var g = Number((sp[x].gia).replace(/\./g,''));
			var sl = Number(sessionStorage.getItem("soluongsp["+i+"]"));
			tongtien += g * sl;
			slsp += sl;
		}
		i++;
	}
	document.getElementById("slsp").innerHTML=slsp;
	document.getElementById("tamtinh").innerHTML=tongtien+`đ`;
	document.getElementById("thanhtien").innerHTML=tongtien+`đ`;
}

function xoa_all()
{
	for(var i = sessionStorage.i-1;i>=0;i--)
	{
		sessionStorage.removeItem("sp"+i);
		sessionStorage.removeItem("soluongsp["+i+"]");
	}
	sessionStorage.removeItem("i");
	sessionStorage.removeItem("sosp");
	xuat_sp();
	tongtien();
}

function xacnhan()
{	

	alert("Cảm ơn bạn đã đặt hàng, chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất!")
	//xoa_all();
}

window.onload=function()
{
	xuat_sp();
}
