/* Logika Perhitungan Suhu Air*/

const prompt=require("prompt-sync")({sigint:true});

function logikaFaseAir(suhu) {
    if (suhu >= -100 && suhu <= 0) {
        return "beku";
    } else if (suhu >= 1 && suhu <= 100) {
        return "cair";
    } else if (suhu >= 101 && suhu <= 500) {
        return "uap";
    } else {
        return "Tidak Terdefinisi";
    }
}

// penggunaan
let suhuString = prompt('Berapa suhu air (dalam Celsius)', '25');
let suhu = parseInt(suhuString);

const keadaanAir = logikaFaseAir(suhu);

console.log(`Pada suhu ${suhu} derajat, air berada dalam fase ${keadaanAir}`);
