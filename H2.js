// var r = 2;
// var phi = 3.14;

// let luas = phi * r * r;

// console.log(luas);

// luas permukaan balok

// let panjang = 2;
// let lebar = 2;
// let tinggi = 2;
// let luas = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));

// console.log(luas)


// volume tabung

// const phi = 3.14;
// let r = 4;
// let t = 4;

// let volume = phi * r * r * t;
// console.log(volume)


// masa jenis suatu benda


// let m = 2;
// let v = 2;
// let p = m / v;

// console.log(p);

// console.log(p.toFixed(2));

// let Menu = 'Kopi';
// if (umur >= 17) {
//     console.log("Sudah bisa bikin ktp");
// } else {
//     console.log("Belum bisa bikin ktp");
// }



// switch (Menu) {
//     case "kopi":
//         console.log("Kopi");
//         break;
//     case 'Teh':
//         console.log("Teh");
//         break;
//     default:
//         console.log("Menu Tidak Tersedia");
// }

// let umur = 16;
// let tinggi = 150;

// if (umur < 17) {
//     if (tinggi < 150) {
//         console.log("Tidak Boleh Masuk");
//     } else if (tinggi >= 150) {
//         console.log("Boleh Masuk");
//     }
// } else {
//     console.log("Boleh Masuk Sudah Cukup Umur");
// }

// Cek Apakah Sebuah Bilangan Genap atau Ganjil 

// let a = 7;



// if (a % 2 === 0) {
//     console.log("Bilangan Genap");
// } else {
//     console.log("Bilangan Ganjil");
// }

// let b = a % 2;

// console.log(b);


// let Menu = "Boba";

// switch (Menu) {
//     case "Boba":
//         console.log("You choose " + Menu);
//         break;
//     case "Sweet Tea":
//         console.log("You chosee " + Menu);
//         break;
//     case "Plain Tea":
//         console.log("You chosee " + Menu);
//         break;
//     case "Milik Coffe":
//         console.log("You chosee " + Menu);
//         break;
//     case "Choco Ica":
//         console.log("You chose " + Menu);
//         break;
//     default:
//         console.log("Belum Tersedia");

// }

// let ketik = 80;

// if (ketik > 100) {
//     console.log("Character is Expert");
// } else if (ketik > 70 && ketik < 100) {
//     console.log("Character is Pro")
// } else if (ketik > 50 && ketik < 70) {
//     console.log("Charachter is Normal");
// } else if (ketik > 30 && ketik < 50) {
//     console.log("Character is Basic");
// } else {
//     console.log("Character is Beginner");
// }

// let access = "";
// let level = 5;

// switch (access) {
//     case "Public":
//         if (level < 5) {
//             console.log(access + " Dibawah 5");
//         } else if (level > 5) {
//             console.log(access + " Diatas 5");
//         } else if (level === 5) {
//             console.log(access + " five")
//         }
//         break;
//     case "Protected":
//         if (level < 5) {
//             console.log(access + " Dibawah 5");
//         } else if (level > 5) {
//             console.log(access + " Diatas 5");
//         } else if (level === 5) {
//             console.log(access + " five")
//         }
//         break;
//     case "Private":
//         if (level < 5) {
//             console.log(access + " Dibawah 5");
//         } else if (level > 5) {
//             console.log(access + " Diatas 5");
//         } else if (level === 5) {
//             console.log(access + " five")
//         }
//         break;
//     default:
//         if (access === "") {
//             console.log("Input Access")
//         } else {
//             console.log("Access is not defined");
//         }
// }

let Pembeli = "WNA";
let Stay = 4;
let umur = 27;
let Total = 100.000;
let lokasi = "Barat";
let diskon = 0;
let total_bayar;

switch (Pembeli) {
    case "WNA":
        if (Stay < 3) {
            total_bayar = Total;
        } else if (Stay > 3 && Stay < 5) {
            if (umur <= 21) {
                diskon = 0.10 * Total;
                total_bayar = Total - diskon;
            } else if (umur > 21) {
                diskon = 0.05 * Total;
                total_bayar = Total - diskon;
            }
        } else if (Stay > 5) {
            if (umur < 21) {
                diskon = 0.05 * Total;
                total_bayar = Total - diskon;
            } else if (umur > 21) {
                diskon = 0.025 * Total;
                total_bayar = Total - diskon;
            }
        }
        break;
    case "WNI":
        if (lokasi === "Barat") {
            diskon = 0.10 * Total;
            total_bayar = Total - diskon;
        } else if (lokasi === "Tengah") {
            diskon = 0.15 * Total;
            total_bayar = Total - diskon;
        } else if (lokasi === "Timur") {
            diskon = 0.175 * Total;
            total_bayar = Total - diskon;
        }
        break;

}
console.log("Warga Merupakan Penduduk " + Pembeli + " Lama Tinggal " + Stay +
    " dan umur " + umur + ". Total Pembdsselian : " + Total + " Mendapatkan diskon " + diskon + " sehingga total dibayar adalah " + total_bayar)
