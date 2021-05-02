import express from "express";
import cors from "cors";
require("dotenv").config();

import {
  getLatestLaunch,
  getNextLaunch,
  getPastLaunches,
  getUpcomingLaunches,
} from "./services/spacexApi";
import * as Utils from "./Utils";

let app = express();

app.get("/", cors(), async (req, res) => {
  const response = {
    next: await getNextLaunch(),
    latest: await getLatestLaunch(),
    upcoming: await getUpcomingLaunches(),
    past: await getPastLaunches(),
  };

  res.send(response);
});

const server = app.listen(3030, () => {
  console.log(
    `server running at port http://localhost/${server.address().port}`
  );
});
