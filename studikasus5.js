const produk = [
    { nama: "Laptop", stok: 10, aktif: true },
    { nama: "Mouse", stok: 3, aktif: true },
    { nama: "Keyboard", stok: 2, aktif: false }
];

function cekRestockGudang(produk, jumlahStock) {
    for (let i = 0; i < produk.length; i++) {

  if (produk[i].stok < jumlahStock && produk[i].aktif === true) {
            console.log(produk[i].nama + " harus di-restock.");
        } else {
            console.log(produk[i].nama + " tidak perlu di-restock.");
        }
    }
}
cekRestockGudang(produk, 5);