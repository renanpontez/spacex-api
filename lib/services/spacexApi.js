const {
  ROUTE_LAUNCHES_PAST,
  ROUTE_LAUNCHES_UPCOMING,
  ROUTE_LAUNCH_LATEST,
  ROUTE_LAUNCH_NEXT,
} = require("../constants/routes");
const { getWithAxios } = require("./axios");

export const getNextLaunch = () => {
  return getWithAxios(ROUTE_LAUNCH_NEXT);
};

export const getLatestLaunch = () => {
  return getWithAxios(ROUTE_LAUNCH_LATEST);
};

export const getUpcomingLaunches = () => {
  return getWithAxios(ROUTE_LAUNCHES_UPCOMING);
};

export const getPastLaunches = () => {
  return getWithAxios(ROUTE_LAUNCHES_PAST);
};
