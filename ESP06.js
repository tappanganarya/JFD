// const Hello = () => {
//     console.log("Hello");
// }

// Hello();

// const tes = function () {
//     console.log("Hello tes");
// }

// tes();

// function tesmi() {
//     console.log("Hello Tesmi");
// }

// tesmi();

// function tambah(a, b) {
//     return a + b;
// }

// const Tambah = (a, b) => a + b;


// console.log(Tambah(2, 3))
// console.log(tambah(5, 3))

// let number = [1, 2, 3,];

// number.forEach((element, index) => {
//     console.log(`index = ${index}, element = ${element}`);
// });

// items.forEach(item => item.tes());

// let produk = [
//     {
//         nama: "Samsung",
//         harga: 75000
//     },
//     {
//         nama: "Iphone",
//         harga: 70000
//     },
//     {
//         nama: "Asus",
//         harga: 10000
//     },
// ]

// produk.forEach((element) => {
//     console.log(`Nama = ${element.nama} || Harga = ${element.harga}`)
// })

// const angka = [1, 2, 3, 4, 5]

// const angkaGenap = angka.filter((element) => element % 2 === 0);
// console.log(angkaGenap);

// let produk = [
//     {
//         nama: "Samsung",
//         harga: 75000
//     },
//     {
//         nama: "Iphone",
//         harga: 70000
//     },
//     {
//         nama: "Asus",
//         harga: 100000
//     },
// ]

// const produkFilter = produk.filter((element) => element.harga > 80000);
// console.log(produkFilter);


// let produk = [
//     {
//         nama: "Samsung",
//         harga: 75000
//     },
//     {
//         nama: "Iphone",
//         harga: 70000
//     },
//     {
//         nama: "Asus",
//         harga: 100000
//     },
// ]

// const daftarNama = produk.map((element) => element.nama);

// console.log(daftarNama);

// produk.push(["arya"])

// console.log(produk)


// CRUD  (Create , read, Update, Delete)

var students = [
    {
        id: 1,
        name: "Joko",
        major: "IT",
        isGraduated: true
    },
    {
        id: 2,
        name: "Yuni",
        major: "Akuntasi",
        isGraduated: false
    },
]


//Read


function addStudent(name, major) {
    let lastIndex = students.length - 1;
    let id = students[lastIndex].id + 1;
    let isGraduated = false;

    students.push({
        id, name, major, isGraduated
    });

    return students;

}

addStudent("Rasata", "Tni");

// function updateStudent(id, nama) {
//     let temp = []

//     for (let index = 0; index < students.length; index++) {
//         if (students[index].id === id) {
//             students[index].name = nama;
//         }
//         temp.push(students[index]);
//     }
//     students = temp;
// }

// function updateStudent(id, newName) {
//     students = students.map(student => {
//         if (student.id === id) {
//             return { ...student, name: newName };
//         }
//         return student;
//     });
// }

function updateStudent(id, newName, newMajor) {
    students = students.map(students => {
        if (students.id === id) {
            return { ...students, name: newName, major: newMajor };
        }
        return students;
    })
}

updateStudent(3, "Rahman", "Police");

// function deleteStudent(id) {
//     students = students.filter(element => element.id !== id);
// }


function deleteStudent(id) {
    let temp = [];

    for (let index = 0; index < students.length; index++) {
        if (students[index].id !== id) {
            temp.push(students[index]);
        }
    }
    students = temp;
}


deleteStudent(1);

students.forEach((element) => {
    if (element.isGraduated === true) {
        console.log(` [X] ${element.id}. name : ${element.name}, major : ${element.major} `)
    } else {
        console.log(` [ ] ${element.id}. name : ${element.name}, major : ${element.major} `)
    }
});




