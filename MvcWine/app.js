const command = process.argv[2];
const params = process.argv.slice(3);

const Controller = require("./controllers/Controller");

switch (command) {
    case "help":
        Controller.help();
        break;
    case "wine":
        Controller.wine();
        break;
    case "add":
        Controller.add(params);
        break;
    case "sell":
        Controller.sell(params);
        break;
    case "rename":
        Controller.rename(params);
        break;
    case "findById":
        Controller.findById(params);
        break;
    default:
        Controller.message("Command not found");
        break;
}
