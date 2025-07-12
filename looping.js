// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }


// let temp = '';

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//         temp += 'x';
//     }
//     console.log(temp);
//     temp = '';
// }

// Study case 1

// let num = 10;

// for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " Genap");
//     } else {
//         console.log(i + " Ganjil");
//     }
// }

// study case 2 

// let number = 15
// let factor = 0
// let bf = 0

// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         console.log("Faktor " + number + " adalah " + i);
//         factor++;
//     } else {
//         console.log("Nilai " + i + " Bukan Faktor ");
//         bf++;
//     }
// }
// console.log("Factor = " + factor);
// console.log("Bukan Factor = " + bf);

// study case 3

// let number = 7
// let factor = 0


// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         factor++;
//     }
// }

// if (factor === 2) {
//     console.log(number + " bilangan prima");
// } else {
//     console.log(number + " bukan bilanga prima")
// }

// study case 4

// let number = 5;
// let factor = 1;


// for (let i = number; i >= 1; i--) {
//     factor = factor * i;
// }

// console.log(factor);

let num = 5;
let temp = ''

for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
        temp = temp + 'x';
    }
    console.log(temp);
    temp = ''
}
