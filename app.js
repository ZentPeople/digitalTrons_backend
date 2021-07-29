// config
import "./config.js";

// packages
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// import Routers
import baseRoute from "./routers/base.js";
import slotsRoute from "./routers/slots.js";
import usersRoute from "./routers/users.js";

// mongoose connection
import { connectToMongo } from "./modules/mongodb/index.js";

const app = express();

// Default middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());
app.use(helmet());

// Routes
app.use("/slots", slotsRoute);
app.use("/user", usersRoute);
app.use("/", baseRoute);

// start app
(async () => {
  await connectToMongo();
  const listner = await app.listen(process.env.PORT || 3000);
  console.log(`App running in port ${listner.address().port}`);
})();
