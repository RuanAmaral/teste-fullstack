import { Router } from "express";
import UserControler from "./controllers/UserControler";
import PokeController from "./controllers/PokeController";
import SessionController from "./controllers/SessionController";

const routes = new Router();

routes.post("/userCreate", UserControler.store);

routes.post("/sessions", SessionController.store);

routes.get("/pokemon", PokeController.index);

routes.post("/pokemon/info", PokeController.show);


export default routes;
