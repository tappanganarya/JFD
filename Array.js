// let scores = ["A", "B", "C"];


// for (let i = 0; i < scores.length; i++) {
//     console.log(i + 1 + ". " + scores[i]);
// }


// let student = [
//     [1, "Vincent", 3.5],
//     [2, "Udin", 3.1],
//     [3, "Mamang", 2.1]
// ]


// for (let i = 0; i < student.length; i++) {

//     if (student[i][2] >= 3.0) {
//         console.log(`${student[i][0]}, ${student[i][1]}, ${student[i][2]}, LULUS `)
//     } else {
//         console.log(`${student[i][0]}, ${student[i][1]}, ${student[i][2]}, TIDAK LULUS `)

//     }
// }

// for (let i = 0; i < student.length; i++) {

//     let baris = "";

//     for (let j = 0; j < student[i].length; j++) {

//         baris += student[i][j] + " ";
//     }

//     console.log(baris);

// }


// let scores = [10, 40, 50, 50];
// let Result = 0;

// for (let i = 0; i < scores.length; i++) {
//     Result = Result + scores[i];
// }

// let mean = Result / scores.length;

// console.log(`Mean =  ${mean.toFixed(1)}`);


// let str = "makan";
// let array = [];

// for (let i = 0; i < str.length; i++) {
//     array.push(str[i]);
// }

// console.log(array);


// let str = "makan saya";
// let array = [];

// for (let i = 0; i < str.length; i++) {

//     if (str[i] !== " ") {
//         array.push(str[i]);
//     }
// }

// console.log(array);

// let str = "makan saya bosku";
// let array = [];
// let kata = "";

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === " ") {
//         array.push(kata);
//         kata = "";
//     } else {
//         kata = kata + char;
//     }
// }

// if (kata.length > 0) {
//     array.push(kata);
// }

// console.log(array);


// let str = "Swiss Army Dublot";

// let array = [];
// let kata = "";

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === " ") {
//         array.push(kata);
//         kata = "";
//     } else {
//         kata = kata + char;
//     }
// }

// if (kata.length > 0) {
//     array.push(kata);
// }

// console.log(` Saya punya ${array[0]}, ${array[1]} dan ${array[2]} `);
// console.log(`Saya Punya ${watches2.slice(0, -1)}, dan ${watches2[watches2.length - 1]}`);

// let watches1 = ["Swiss Army Dublot"];
// let watches2 = ["A", "B", "C", "D", "E"];

// let result = "Saya punya";

// for (let a = 0; a < watches1.length; a += 1) {
//     let lastIndex = watches1.length - 1;
//     if (a !== lastIndex) {
//         result += watches1[a] + ", ";
//     } else {
//         result += " dan " + watches1[a] + ". ";
//     }
// }

// console.log(result);


function genapAtauGanjil(a) {
    if (a % 2 === 0) {
        return ("Kamu Genap")
    } else {
        return "Kamu Ganjil Besok Saja"
    }
}

console.log(genapAtauGanjil(5));

