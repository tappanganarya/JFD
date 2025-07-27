const fs = require("fs");
// const { json } = require("stream/consumers");

class Wine {
    constructor(id, name, year, type, createdAt) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.type = type;
        this.createdAt = createdAt;
    }

    static wine() {
        const wines = JSON.parse(fs.readFileSync("./data.json", "utf8"));

        return wines;
    }

    static add(params) {
        let wines = this.wine();
        const [name, year, typeCode] = params[0].split('/');
        let id = wines[wines.length - 1].id + 1;
        const createdAt = new Date().toISOString().split('T')[0];

        let type;
        if (typeCode === "R") {
            type = "Red";
            wines.push(new Wine(id, name, +year, type, createdAt));
        } else if (typeCode === "W") {
            type = "White";
            wines.push(new Wine(id, name, +year, type, createdAt));
        } else {
            type = "Other";
            wines.push(new Wine(id, name, +year, type, createdAt));
        }

        this.save(wines)
        console.log(`"${name}" has been added!`);
    }

    static sell(params) {
        let wines = this.wine();

        const id = Number(params[0]);
        wines = wines.filter(wine => {
            if (wine.id === id) {
                console.log(`"${wine.name}" has been sold!`);
                return false;
            }
            return true;
        });
        this.save(wines)
    }

    static rename(params) {
        let wines = this.wine();

        const [name, year, typeCode] = params[1].split('/');
        const id = Number(params[0]);

        let type;
        if (typeCode === "R") {
            type = "Red";
        } else if (typeCode === "W") {
            type = "White";
        } else {
            type = "Other";
        }

        let found = false;
        wines = wines.map((wine) => {

            if (wine.id === +id) {
                wine.name = name;
                wine.year = year;
                wine.type = type;
                console.log(`Wine number ${wine.id} has been  rename !`);
                found = true;
            }
            return wine;
        })

        if (!found) {
            console.log(`${id} is not found!`);
        }
        this.save(wines)
    }

    static findById(params) {
        let wines = this.wine();
        const id = Number(params[0]);

        const foundWine = wines.find(wine => wine.id === id);

        if (foundWine) {
            const createdYear = new Date(foundWine.createdAt).getFullYear();
            const umurWine = createdYear - foundWine.year;
            console.log(`${foundWine.name} is ${foundWine.type} Wine with age of ${umurWine} years`);
        } else {
            console.log(`Wine with ID ${id} not found.`);
        }
    }

    static save(wines) {
        const coffeesString = JSON.stringify(wines, null, 2);
        fs.writeFileSync("./data.json", coffeesString);
    }
}


module.exports = Wine;