const {
  ROUTE_LAUNCHES_PAST,
  ROUTE_LAUNCHES_UPCOMING,
  ROUTE_LAUNCH_LATEST,
  ROUTE_LAUNCH_NEXT,
} = require("../constants/routes");
const { getWithAxios } = require("./axios");

exports.getNextLaunch = () => {
  return getWithAxios(ROUTE_LAUNCH_NEXT);
};

exports.getLatestLaunch = () => {
  return getWithAxios(ROUTE_LAUNCH_LATEST);
};

exports.getUpcomingLaunches = () => {
  return getWithAxios(ROUTE_LAUNCHES_UPCOMING);
};

exports.getPastLaunches = () => {
  return getWithAxios(ROUTE_LAUNCHES_PAST);
};
