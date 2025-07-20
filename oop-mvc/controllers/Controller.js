const Coffee = require("../models/Model");
const View = require("../views/View")

class Controller {
    static showCoffees() {
        let coffees = Coffee.getCoffees();
        View.show(coffees);
    }
    static add(params) {
        Coffee.add(params);
    }
    static delete(params) {
        Coffee.delete(params);
    }
    static update(params) {
        Coffee.update(params);
    }
    static message(msg) {
        console.log(msg);
    }
}

module.exports = Controller;