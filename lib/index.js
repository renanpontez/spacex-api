const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {
  getLatestLaunch,
  getNextLaunch,
  getPastLaunches,
  getUpcomingLaunches,
} = require("./services/spacexApi");

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

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server running at port http://localhost/${server.address().port}`
  );
});
