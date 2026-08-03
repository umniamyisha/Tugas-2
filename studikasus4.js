let kalori = [1800, 2200, 2500, 1900, 2100];

function evaluasiAsupanKalori (dataKalori, target){
    for (let i = 0; i < dataKalori.length; i++) {

     if (dataKalori[i] > target) {
            console.log("melebihi target");
        } else if (dataKalori[i] < target) {
            console.log("kurang dari target");
        } else {
            console.log("pas");
        }
    }

}
const target = 2200
evaluasiAsupanKalori(kalori, target);