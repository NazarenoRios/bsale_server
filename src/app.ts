//Configuracion del servidor
import "dotenv/config.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import models from "./models"

// //Database
import db from "./db";

// Express Route File Requires
import routes from "./routes";

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Express Routing
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
});