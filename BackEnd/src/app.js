import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors"

class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://userGeral:geral12345@testefullstack.i179hrq.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
