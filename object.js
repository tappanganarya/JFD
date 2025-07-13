// let buah = ["durian", 75000, true];


// function larikToObject(larik) {
//     let object = {}

//     object.jenis = larik[0];
//     object.harga = larik[1];
//     object.masak = larik[2];

//     return object;
// }

// console.log(larikToObject(buah));

// let caca = {
//     nama: "caca",
//     berat: 45,
//     tinggi: 155,
//     hobi: ["Nonton", "Makan", "Tidur"],

//     sebutkanHobi() {
//         console.log(`Hobby Caca: `);

//         for (let index = 0; index < this.hobi.length; index++) {
//             console.log(`${index + 1}. ${this.hobi[index]}`);
//         }

//     }
// }

// caca.sebutkanHobi()

// Srray of objects

// let items = [
//     {
//         id: 1,
//         name: "iphone",
//         type: "gadget",
//         price: 65000,
//         isAvailable: true,

//         tes() {
//             if (this.isAvailable === true) {
//                 console.log(` ${this.id}. [X] ${this.name}`)
//             } else {
//                 console.log(` ${this.id}. [ ] ${this.name}`)
//             }

//         }
//     },
//     {
//         id: 2,
//         name: "samsung",
//         type: "gadget",
//         price: 65000,
//         isAvailable: false,

//         tes() {
//             if (this.isAvailable === true) {
//                 console.log(` ${this.id}. [X] ${this.name}`)
//             } else {
//                 console.log(` ${this.id}. [ ] ${this.name}`)
//             }

//         }
//     },
// ]


// console.log(items[0].tes);

// items.forEach(item => item.tes());

let items = [
    {
        id: 1,
        name: "iphone",
        type: "gadget",
        price: 65000,
        isAvailable: true,
    },
    {
        id: 2,
        name: "samsung",
        type: "gadget",
        price: 65000,
        isAvailable: false,
    }
]

function tes() {

    for (let index = 0; index < items.length; index++) {

        if (items[index].isAvailable === true) {
            console.log(` ${items[index].id}. [X] ${items[index].name}`)
        } else {
            console.log(` ${items[index].id}. [ ] ${items[index].name}`)

        }

    }
}

// console.log(tes)

tes(items)

