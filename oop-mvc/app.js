const command = process.argv[2];
const params = process.argv.slice(3);

const Controller = require("./controllers/Controller");

switch (command) {
    case "show":
        Controller.showCoffees();
        break;
    case "add":
        Controller.add(params);
        break;
    case "delete":
        Controller.delete(params);
        break;
    case "update":
        Controller.update(params);
        break;
    default:
        Controller.message("Command not found");
}