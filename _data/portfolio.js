const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://api.github.com/users/emhofer/repos";

  /* This returns a promise */
  let response = await EleventyFetch(url, {
    duration: "1h", // save for 1 week
    type: "json", // we’ll parse JSON for you
  });

  const result = response.filter((item) => {
    return item.name !== "emhofer" && item.name !== "Configs";
  });

  return result;
};
