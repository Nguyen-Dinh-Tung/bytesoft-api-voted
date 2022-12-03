import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ConnectDB } from "./src/models/schemas/ConnectDB";
import authRouter from "./src/router/auth.router";


const PORT = 5000;

const app = express();

app.use(cors());

app.set("view engine", "ejs");

app.set("views", "./src/views");

const db = new ConnectDB();
db.connect()
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(bodyParser.json());

app.use(authRouter)



app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
