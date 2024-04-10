import { Model } from "./model.js";
import { Controller } from "./controller.js";
import { CLIView } from "./cli_view.js";


let model = new Model();
let controller = new Controller(model);
let view = new CLIView(model, controller);

view.render(document.getElementById("main"));