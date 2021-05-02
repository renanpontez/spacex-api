const axios = require("axios");

export const getWithAxios = async (url) => {
  return await axios
    .get(process.env.SPACEX_API + url)
    .then((res) => ({ ...res.data }))
    .catch((error) => console.log(error));
};
