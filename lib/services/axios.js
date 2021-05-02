const axios = require("axios");

exports.getWithAxios = async (url) => {
  return await axios
    .get(process.env.SPACEX_API + url)
    .then((res) => ({ ...res.data }))
    .catch((error) => console.log(error));
};
