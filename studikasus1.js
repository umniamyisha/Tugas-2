const Buku = [90000, 60000, 40000, 25000]

function hitungTotalBuku(daftarBuku){
    let total = 0; 

    for (let i = 0; i < daftarBuku.length; i++) {
        total += daftarBuku [i];
    }
    
    if ( total > 150000) {
        let diskon = total * 0.15;
        total = total - diskon;
   
    }
    return total;
}
    console.log ("Total Bayar: Rp" + hitungTotalBuku(Buku));