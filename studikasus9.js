const pemain = [
    { nama: "Umnia", skor: 950 },
    { nama: "Jude", skor: 850 },
    { nama: "Tom", skor: 650 },
    { nama: "Louis", skor: 720 },
    { nama: "Steve", skor: 1000 }
];

function prosesLeaderboard (dataPemain){
     for (let i = 0; i < dataPemain.length; i++) {
     
   if (dataPemain[i].skor >= 900){
        console.log(dataPemain[i].nama + ": Gold Tier");
    } else if (dataPemain[i].skor >= 700){
         console.log(dataPemain[i].nama + ": Silver Tier");
    } else {
        console.log(dataPemain[i].nama + ": Bronze Tier")
        
            }
        }
    }
prosesLeaderboard(pemain);