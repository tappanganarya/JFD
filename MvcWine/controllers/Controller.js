const Wine = require("../models/Model");
const View = require("../views/View")

class Controller {

    static wine() {
        let wines = Wine.wine();
        View.wine(wines);
    }
    static add(params) {
        Wine.add(params);
    }
    static sell(params) {
        Wine.sell(params);
    }
    static rename(params) {
        Wine.rename(params);
    }
    static findById(params) {
        Wine.findById(params);
    }
    static message(msg) {
        console.log(msg);
    }

}

module.exports = Controller;