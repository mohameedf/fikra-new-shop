import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import * as express from "express";
const app = express();
import dashv1 from "../route/dash/v1";
import webv1 from "../route/web/v1";
import notFound from "../middlewares/web/notFound";
import userCron from "../cron/user";
import * as cors from "cors";

const port = process.env.PORT || 3000;

createConnection()
  .then(async (connection) => {
    app.use(cors());
    app.use(express.json());
    app.use("/v1", webv1);
    app.use("/dash/v1", dashv1);
    app.use(notFound);

    app.listen(port, () => console.log(`Running on http://localhost:${port}`));
    userCron();
  })
  .catch((error) => console.log(error));
