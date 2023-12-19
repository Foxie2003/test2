function savaJsonToLocalStorage() {
    fetch('./SanPham.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        localStorage.setItem("binhBong", JSON.stringify(data));
    })
    .catch(function (err) {
        console.log(err);
    })
}
var sanPham = JSON.parse(localStorage.getItem("binhBong"));
var quanAo = sanPham.QuanAo;
function readQuanAoData() {
    var hienSP = document.getElementById("hienSP");
    quanAo[0].QuanAo_bo.forEach(sp => {
        console.log(sp.id);
        var anhHienLucDau = [];
        var anhHienLucBam = [];
        for (let index = 0; index < sp.img.length; index++) {
            for (const thuocTinh in sp.img[index]) {
                if (thuocTinh.includes("img")) {
                    if(index == 0) {
                        anhHienLucDau.push(sp.img[index][thuocTinh]);
                    }
                    else {
                        anhHienLucBam.push(sp.img[index][thuocTinh]);
                    }
                }
            }
        }
        console.log(anhHienLucDau);
        console.log(anhHienLucBam);
    });
}