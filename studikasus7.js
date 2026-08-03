const Restoran = [
    { nama: "My Kopi O", rating: 4.9, buka: true },
    { nama: "RM Nusantara", rating: 5.0, buka: true },
    { nama: "Ayam Geprek", rating: 4.3, buka: false }
]

function filterRestoranFavorit (Restoran) {
    for (let i = 0; i < Restoran.length; i++) {
    
     if (Restoran[i]. rating >= 4.5 && Restoran[i].buka === true) {
        console.log(Restoran[i].nama);
    }
  }
}

 filterRestoranFavorit(Restoran);    