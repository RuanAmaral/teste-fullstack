import { Router } from "express";
import SessionControler from "./controllers/SessionController";
import PokeController from "./controllers/PokeController";

const routes = new Router();

routes.post("/sessionsCreate", SessionControler.store);

routes.get("/sessionsStart", SessionControler.show);

routes.get("/pokemon", PokeController.index);

routes.get("/pokemon/info", PokeController.show);


export default routes;
