function Menu(mamenu, ten) {
    this.mamenu = mamenu;
    this.ten = ten;
}

function Menucon(mamenu_con, ten, mamenu) {
    this.mamenu_con = mamenu_con;
    this.ten = ten;
    this.mamenu = mamenu;
}
var m = new Array();
m[0] = new Menu("MC", "Món chính");
m[1] = new Menu("AN", "Món ăn nhanh");
m[2] = new Menu("TM", "Tráng miệng");
m[3] = new Menu("DU", "Đồ uống");
var mdown = new Array();
mdown[0] = new Menucon("NC", "Phở-Bún-Hủ tiếu", "MC");
mdown[1] = new Menucon("CM", "Cơm", "MC");
mdown[2] = new Menucon("CH", "Cháo", "MC");
mdown[3] = new Menucon("XO", "Xôi", "AN");
mdown[4] = new Menucon("BM", "Bánh mặn", "AN");
mdown[5] = new Menucon('MH', 'Món chiên', 'An');
mdown[6] = new Menucon('CE', 'Chè', 'TM');
mdown[7] = new Menucon('KM', 'Kem', 'TM');
mdown[8] = new Menucon("BN", "Bánh ngọt", "TM");
mdown[9] = new Menucon('TR', 'Trà', 'DU');
mdown[10] = new Menucon('ST', 'Sinh tố', 'DU');
mdown[11] = new Menucon('NN', 'Nước ngọt', 'DU');

function sanpham(masp, ten, gia, hinh, mamenu, mamenu_con) {
    this.masp = masp;
    this.ten = ten;
    this.gia = gia;
    this.hinh = hinh;
    this.mamenu = mamenu;
    this.mamenu_con = mamenu_con;
}

var sp = new Array();
sp[0] = new sanpham('NC01', 'Phở Hà Nội', '30.000', './img/food/monchinh/pho.jpg', 'MC', 'NC');
sp[1] = new sanpham('NC02', 'Phở xào chay', '30.000', './img/food/monchinh/pho_xao_chay.jpg', 'MC', 'NC');
sp[2] = new sanpham('NC03', 'Phở xào tôm thịt', '30.000', './img/food/monchinh/pho_xao_tom_thit.jpg', 'MC', 'NC');
sp[3] = new sanpham('NC04', 'Bún bò Huế', '30.000', './img/food/monchinh/bun_bo_hue.jpg', 'MC', 'NC');
sp[4] = new sanpham('NC05', 'Bún cá', '30.000', './img/food/monchinh/bun_ca.jpg', 'MC', 'NC');
sp[5] = new sanpham('NC06', 'Bún hải sản', '30.000', './img/food/monchinh/bun_hai_san.jpg', 'MC', 'NC');
sp[6] = new sanpham('NC07', 'Bún mắm', '30.000', './img/food/monchinh/bun_mam.jpg', 'MC', 'NC');
sp[7] = new sanpham('NC08', 'Bún hải sản', '30.000', './img/food/monchinh/bun_hai_san.jpg', 'MC', 'NC');
sp[8] = new sanpham('NC09', 'Bún sườn chua', '30.000', './img/food/monchinh/bun_suon_chua.jpg', 'MC', 'NC');
sp[14] = new sanpham('CH03', 'Hủ tiếu Nam Vang', '30.000', './img/food/monchinh/hu_tieu_nam_vang.jpg', 'MC', 'NC');
sp[15] = new sanpham('CH03', 'Hủ tiếu cua', '30.000', './img/food/monchinh/hu_tieu_cua.jpg', 'MC', 'NC');
sp[16] = new sanpham('CH03', 'Hủ tiếu Mỹ Tho', '30.000', './img/food/monchinh/hu_tieu_my_tho.jpg', 'MC', 'NC');
sp[9] = new sanpham('CH01', 'Cháo đậu đen', '20.000', './img/food/monchinh/chao_dau_den.jpg', 'MC', 'CH');
sp[10] = new sanpham('CH02', 'Cháo hến', '20.000', './img/food/monchinh/chao_hen.jpg', 'MC', 'CH');
sp[11] = new sanpham('CH03', 'Cháo hàu', '20.000', './img/food/monchinh/chao_hau.jpg', 'MC', 'CH');
sp[12] = new sanpham('CH04', 'Cháo hàu', '20.000', './img/food/monchinh/chao_long.jpg', 'MC', 'CH');
sp[13] = new sanpham('CH03', 'Cháo lươn', '20.000', './img/food/monchinh/chao_luon.jpg', 'MC', 'CH');
sp[17] = new sanpham('CM01', 'Cơm lam gà nướng', '30.000', './img/food/monchinh/com_lam_ga_nuong.jpg', 'MC', 'CM');
sp[18] = new sanpham('CM02', 'Cơm tấm', '30.000', './img/food/monchinh/com_tam.jpg', 'MC', 'CM');
sp[19] = new sanpham('CM03', 'Cơm hến', '30.000', './img/food/monchinh/com_hen.jpg', 'MC', 'CM');