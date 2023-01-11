import { Router } from "express";
import SessionControler from "./controllers/SessionController";

const routes = new Router();

routes.post("/sessionsCreate", SessionControler.store);

routes.get("/sessionsStart", SessionControler.show);

export default routes;
