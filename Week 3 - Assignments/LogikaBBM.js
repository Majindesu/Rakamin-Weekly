/* Logika Penentuan BBM Kendaraan*/

const prompt=require("prompt-sync")({sigint:true});

function logikaBBM(jenisKendaraan) {
    if (jenisKendaraan === "1" || jenisKendaraan === "2") {
        return "BBM subsidi";
    } else if(jenisKendaraan === "3") {
        let ccMobilStr = prompt('Berapa Besar Mesin Mobil (Dalam CC) | Ketikkan 0 apabila tidak memilih opsi mobil | ', '0')
        let ccMobil = parseFloat(ccMobilStr)
        if (ccMobil < 1500) {
            return "PERTAMAX";
        } else {
            return "PERTAMAX turbo";
        }
    } else {
        return "Tidak Terdefinisi"
    }
}

// Contoh penggunaan
let jenisKendaraan = prompt('Masukkan Jenis Kendaraan | 1. Kendaraan Umum (Plat Kuning) | 2. Motor (Roda 2) | 3. Mobil (Roda 4) | ', '1');
const jenisBBM = logikaBBM(jenisKendaraan);
console.log(`Jenis BBM yang digunakan: ${jenisBBM}`);
