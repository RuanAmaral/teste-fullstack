import { Router } from "express";
import SessionControler from "./controllers/SessionController";
import PokeController from "./controllers/PokeController";

const routes = new Router();

routes.post("/sessionsCreate", SessionControler.store);

routes.post("/sessionsStart", SessionControler.show);

routes.get("/pokemon", PokeController.index);

routes.post("/pokemon/info", PokeController.show);


export default routes;
