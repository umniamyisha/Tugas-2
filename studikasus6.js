const jamKerja = [8, 9, 7, 8, 10, 6, 5];

function hitungGajiMingguan(jamKerja) {
    let totalJam = 0;

    for (let i = 0; i < jamKerja.length; i++) {
        totalJam += jamKerja[i];
    }
    if (totalJam > 40) {
        let lembur = totalJam - 40;
        totalGaji = (40 * 50000) + (lembur * 75000);
    } else {
        totalGaji = totalJam * 50000;
    }

    return totalGaji;
}

console.log("Total Gaji Mingguan: Rp " + hitungGajiMingguan(jamKerja));