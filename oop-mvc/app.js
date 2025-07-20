const command = process.argv[2];
const params = process.argv.slice(3);

const Controller = require("./controllers/Controller");

switch (command) {
    case "show":
        Controller.showCoffees();
        break;
    case "add":
        Controller.add();
        break;
    case "delete":
        Controller.delete();
        break;
    case "update":
        Controller.update();
        break;
    default:
        Controller.message("Command not found");
}