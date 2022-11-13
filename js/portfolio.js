import { request } from "https://cdn.skypack.dev/@octokit/request";
import githubToken from "../_ignore/config.js";

const result = await request("GET /repos/{owner}/{repo}", {
  headers: {
    authorization: `token ${githubToken}`,
  },
  owner: "emhofer",
  repo: "Birb",
});

const cardTest = document.getElementById("cardTest");
cardTest.firstElementChild.innerHTML = result.data.name;
cardTest.children.item(1).innerHTML = result.data.description;
cardTest.children.item(2).innerHTML = result.data.language;

console.log(result.data.name);
console.log(cardTest.firstElementChild);
