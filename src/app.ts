import express from "express";
import router from "./routes";
import cors from "cors";
import { METHODS } from "http";

function createApp() {
  //Iniciei o server
  const app = express();

  //Função do express que converto todo content para content-type/json
  app.use(express.json());
  app.use("/api", router);

  //const corsOptions = {
  //origin: ["www.Lucas.com.br", "www.UmCliente.com.br"],
  //methods:["GET"]
  //}
  app.use(cors());

  return app;
}

export default createApp;
