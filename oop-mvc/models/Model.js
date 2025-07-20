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
}

module.exports = Coffee;