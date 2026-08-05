const platKendaraan = [3, 5, 1, 8, 9];
const tanggal = [17, 20, 25, 10, 18];

function filterParkirGanjilGenap(platKendaraan, tanggal) {
    for (let i = 0; i < platKendaraan.length; i++) {
    
    if (platKendaraan[i] % 2 === 0 && tanggal[i] % 2 === 0) {
    console.log("Plat " + platKendaraan[i] + " boleh masuk karena tanggal " + tanggal[i] + " sama-sama genap");
}   else if (platKendaraan[i] % 2 !== 0 && tanggal[i] % 2 !== 0) {
    console.log("Plat " + platKendaraan[i] + " boleh masuk karena tanggal " + tanggal[i] + " sama-sama ganjil");
}   else {
    console.log("Plat " + platKendaraan[i] + " tidak boleh masuk karena tanggal " + tanggal[i] + " berbeda");
    }
  }
}

filterParkirGanjilGenap(platKendaraan, tanggal);    