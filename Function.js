let str = "Hello Selamat Pagi";

function hitungKata(str) {
    let jumlah = 0;
    let sedangDalamKata = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && !sedangDalamKata) {
            jumlah++;
            sedangDalamKata = true;
        } else if (str[i] === " ") {
            sedangDalamKata = false;
        }
    }
    return jumlah
}


console.log(hitungKata(str));


// function splitArray(str) {
//     let tempArray = str.split(" ");
//     return tempArray;
// }

// function jumlahKata(kalimat) {
//     let result = splitArray(kalimat);
//     let arrayLength = result.length;
//     return arrayLength;
// }

// console.log(jumlahKata("Hello Selamat Pagi"))
