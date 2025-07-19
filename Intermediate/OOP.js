//obejct and oop

let vehicle = {
    name: "Civic",
    Type: "Honda",
    Price: 10000
}

class Vehicle {
    constructor(id, name, type, price, isSold) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.isSold = isSold;
    }
}

//instaciation
// let car = new Vehicle(1, "Civic", "Honda", 100000, true);
// let motorcycle = new Vehicle(2, "Harley", "Davidson", 200000, false);

// console.log(car);
// console.log(motorcycle);

//inheritance
// class Sedan extends Vehicle {
//     constructor(id, name, price, isSold) {
//         super(id, name, "Sedan", price, isSold);
//     }
// }

// class PickUp extends Vehicle {
//     constructor(id, name, price, isSold) {
//         super(id, name, "PickUp", price, isSold);
//     }
// }

// class SUV extends Vehicle {
//     constructor(id, name, price, isSold, pintu) {
//         super(id, name, "SUV", price, isSold);
//         this.pintu = pintu;
//     }
// }

// let civic = new Sedan(1, "Civic Turbo", 100000, true);
// let hino = new PickUp(1, "Hino Pickup", 10000, false);
// let pajero = new SUV(1, "Pajero R", 20000, true, 4);


// console.log(civic);
// console.log(hino);
// console.log(pajero);

class Fruit {
    constructor(id, name, price, stock, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

class Apple extends Fruit {
    constructor(id, name, price, stock) {
        super(id, name, price, stock, "Apple");
    }
}

class Banana extends Fruit {
    constructor(id, name, price, stock) {
        super(id, name, price, stock, "Banana");
    }
}

class Orange extends Fruit {
    constructor(id, name, price, stock) {
        super(id, name, price, stock, "Orange")
    }
}

// Factory Class

class Supermarket {
    constructor(shelves) {
        this.shelves = shelves || [];
    }

    showItems() {
        if (this.shelves.length > 0) {

            this.shelves.forEach(shelf => {
                //Destructuring Object
                const { id, name, price, stock, category } = shelf;
                console.log(`${id}. ${name}, Rp. ${price}`);
                console.log(`Stocks : ${stock}Pcs. Category: ${category}`);
            });
        } else {
            console.log("There is no shelf");
        }
    }

    showInTables() {
        console.table(this.shelves);
    }

    addItems(name, price, stock, category) {
        let id;
        if (this.shelves.length === 0) {
            id = 1;
        } else {
            let lastIndex = this.shelves.length - 1;
            id = this.shelves[lastIndex].id + 1;
        }

        switch (category) {
            case "Apple":
                this.shelves.push(new Apple(id, name, price, stock));
                break;
            case "Orange":
                this.shelves.push(new Orange(id, name, price, stock));
                break;
            case "Banana":
                this.shelves.push(new Orange(id, name, price, stock));
                break;
        }

    }

    deleteItems(id) {
        this.shelves = this.shelves.filter((shelf) => shelf.id !== id);
    }

    editItems(id, name, price, stock) {
        this.shelves = this.shelves.map((shelf) => {
            if (shelf.id === id) {
                shelf.name = name;
                shelf.price = price;
                shelf.stock = stock;
            }
            return shelf;
        })

    }
}


let supermarket = new Supermarket();

supermarket.addItems("Royal Gala", 750000, 10, "Apple");
supermarket.addItems("Pokan", 750000, 10, "Orange");
supermarket.addItems("Cavendish Sunpride", 750000, 10, "Banana");
supermarket.addItems("Queen Elizabeth", 750000, 10, "Apple");

supermarket.deleteItems(2)
supermarket.editItems(1, "Apple Malaysia", 10000, 3)

supermarket.showItems();
// supermarket.showInTables();


