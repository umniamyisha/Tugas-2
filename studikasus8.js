const pasien = [
    { nama: "umnia", usia: 17 },
    { nama: "tom holland", usia: 60 },
    { nama: "sadie sink", usia: 25 }
];

function kelompokkanAntreanPasien (dataPasien){
    for (let i = 0; i < dataPasien.length; i++) {

    if (dataPasien[i].usia >= 60){
        console.log(dataPasien[i].nama + ": Prioritas Lansia");
    } else {
         console.log(dataPasien[i].nama + ": Antrean Reguler");
        }
    }
}
kelompokkanAntreanPasien(pasien);