const fs = require("fs");

class Coffee {
    constructor(id, name, price, beans, is_available) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.beans = beans;
        this.is_available = is_available;
    }

    static getCoffees() {
        //berfungsi untuk ambil data.json
        const coffees = JSON.parse(fs.readFileSync("./data.json", "utf8"));
        return coffees;
    }

    static add(params) {
        let coffees = this.getCoffees();
        const [name, price, beans] = params;

        let id = coffees[coffees.length - 1].id + 1;
        const is_available = true;

        coffees.push(new Coffee(id, name, +price, beans, is_available));
        this.save(coffees);
    }

    static delete(params) {
        let coffees = this.getCoffees();

        const id = Number(params[0]);
        // this.container = this.container.filter(cookies => cookies.id !== id);
        coffees = coffees.filter(coffee => coffee.id !== id);
        this.save(coffees);

    }

    static update(params) {
        let coffees = this.getCoffees();
        const [id, name, price, beans] = params;
        // const id = Number(idRaw);

        coffees = coffees.map((coffe) => {
            if (coffe.id === +id) {
                coffe.name = name;
                coffe.price = price;
                coffe.beans = beans;
            }
            return coffe;
        })
        this.save(coffees);
    }

    static save(coffees) {
        const coffeesString = JSON.stringify(coffees, null, 2);
        fs.writeFileSync("./data.json", coffeesString);
    }
}

module.exports = Coffee;