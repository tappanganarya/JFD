const Coffee = require("../models/Model");
const View = require("../views/View")

class Controller {
    static showCoffees() {
        let coffees = Coffee.getCoffees();
        View.show(coffees);
    }
    static add() {
        console.log("Show Coffees");
    }
    static delete() {
        console.log("Show Coffees");
    }
    static update() {
        console.log("Show Coffees");
    }
    static message(msg) {
        console.log(msg);
    }
}

module.exports = Controller;