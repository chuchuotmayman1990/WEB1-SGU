function Menu(mamenu, ten) {
    this.mamenu = mamenu;
    this.ten = ten;
}
var m = new Array();
m[0] = new Menu("HD", "Hành động");
m[1] = new Menu("NV", "Nhập vai");
m[2] = new Menu("GL", "Giả lập");
m[3] = new Menu("VT", "Viễn tưởng");
m[4] = new Menu("ID", "Indie");
m[5] = new Menu("PL", "Phiêu lưu");
m[6] = new Menu("KD", "Kinh dị");
m[7] = new Menu("TT", "Thể thao");
m[8] = new Menu("ST", "Sinh tồn");
m[9] = new Menu("FPS", "FPS");
m[10] = new Menu("TGM", "Thế giới mở");
m[11] = new Menu("CT", "Chiến thuật");
function sanpham(masp,mamenu,tengame,gia,hinh,noidung)
{
	this.masp=masp;
	this.mamenu=mamenu;
	this.tengame=tengame;
	this.gia=gia;
	this.hinh=hinh;
	this.noidung=noidung;
}
var sp = new Array();
sp[0] = new sanpham("0","HD FPS CT","Counter Strike: Global Offense","140.000","./img/content/csgo/csgo-0.jpg","abc");
sp[1] = new sanpham("1","HD ST CT","PLAYERUNKNOWN'S BATTLEGROUNDS","340.000","./img/content/pubg/pubg-0.jpg","df");
sp[2] = new sanpham("2","HD NV TGM","Grand Theft Auto V","380.000","./img/content/gtav/gtav-0.jpg","");
sp[3] = new sanpham("3","NV PL","MONSTER HUNTER: WORLD","739.000","./img/content/mhw/mhw-0.jpg","");
sp[4] = new sanpham("4","NV TGM FPS","Far Cry 5 - Standard Edition","914.000","./img/content/fc5/fc5-0.jpg","");
sp[5] = new sanpham("5","HD NV PL","Shadow of the Tomb Raider","1.291.500","./img/content/sottr/sottr-0.jpg","");
sp[6] = new sanpham("6","HD NV PL TGM","NieR:Automata™","1.250.000","./img/content/nier/nier-0.jpg","");
sp[7] = new sanpham("7","TT CT","Pro Evolution Soccer 2019 - PES2019","1.290.000","./img/content/pes19/pes19-0.jpg","");
sp[8] = new sanpham("8","NV PL TGM","The Witcher 3: Wild Hunt - Game of the Year Edition","369.000","./img/content/tw3/tw3-0.jpg","");
sp[9] = new sanpham("9","VT PL ST TGM ID","No Man's Sky","440.000","./img/content/nms/nms-0.jpg","");
sp[10] = new sanpham("10","ST TGM ID","The Forest","188.000","./img/content/tf/tf-0.jpg","");
sp[11] = new sanpham("11","ST TGM ID","RUST","280.000","./img/content/rust/rust-0.jpg","");
sp[12] = new sanpham("12","CT ID ST","Oxygen Not Included","220.000","./img/content/oni/oni-0.jpg","");
sp[13] = new sanpham("13","GL","Thief Simulator","188.000","./img/content/ts/ts-0.jpg","");
sp[14] = new sanpham("14","GL","Hand Simulator","30.000","./img/content/hs/hs-0.jpg","");
sp[15] = new sanpham("15","HD NV TGM","Yakuza 0","342.000","./img/content/ykz0/ykz0-0.jpg","");
sp[16] = new sanpham("16","NV PL TGM","Fallout 4: Game of the Year Edition","480.000","./img/content/fo4/fo4-0.jpg","");
sp[17] = new sanpham("17","NV PL TGM","The Elder Scrolls V: Skyrim Special Edition","900.000","./img/content/tesv/tesv-0.jpg","");
sp[18] = new sanpham("18","NV PL TGM KD","Dying Light Enhanced Edition","549.000","./img/content/dl/dl-0.jpg","");
sp[19] = new sanpham("19","NV KD","RESIDENT EVIL 7 biohazard / BIOHAZARD 7 resident evil","398.000","./img/content/re7/re7-0.jpg","");
sp[20] = new sanpham("20","TT","NBA 2K19","984.000","./img/content/nba19/nba19-0.jpg","");
sp[21] = new sanpham("21","NV PL TGM","Assassin's Creed® Odyssey","990.000","./img/content/aco/aco-0.jpg","");
sp[22] = new sanpham("22","HD NV","HITMAN™ 2","990.000","./img/content/hm2/hm2-0.jpg","");
sp[23] = new sanpham("23","HD NV FPS","Battlefield V","1.350.000","./img/content/bf5/bf5-0.jpg","");
sp[24] = new sanpham("24","PL NV TGM","Darksiders III","620.000","./img/content/ds3/ds3-0.jpg","");
sp[25] = new sanpham("25","PL NV TGM","Just Cause 4","1.291.500","./img/content/jc4/jc4-0.jpg","");
function View(ma,ten)
{
	this.ma=ma;
	this.ten=ten;
}
var view = new Array();
view[0] = new View("DH", "Đơn hàng");
view[1] = new View("DSSP", "Danh sách sản phẩm");

function Thongtin(hoten,mssv,congviec)
{
	this.hoten=hoten;
	this.mssv=mssv;
	this.congviec=congviec;
}
var tt = new Array();
tt[0] = new Thongtin("Ngô Chí Trung","3117410277","");
tt[1] = new Thongtin("Hà Thiện Tuấn","3117410285","");
tt[2] = new Thongtin("Trần Thanh Toàn","3117410265","");
tt[3] = new Thongtin("Vũ Minh Thế","3117410245","");