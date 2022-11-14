import { request } from "https://cdn.skypack.dev/@octokit/request";
import githubToken from "../_ignore/config.js";

const result = await request("GET /users/{owner}/repos", {
  headers: {
    authorization: `token ${githubToken}`,
  },
  owner: "emhofer",
});

const containerCards = document.getElementById("containerCards");

console.log(result.data[1]);

for (let i = 0; i < result.data.length; i++) {
  const repo = result.data[i];
  const repoCard = document.createElement("div");
  repoCard.classList.add("card");
  const repoTitle = document.createElement("h1");
  const repoDescription = document.createElement("p");
  const repoLanguage = document.createElement("div");
  repoLanguage.classList.add("githubInfo");
  repoTitle.innerHTML = repo.name;
  repoDescription.innerHTML = repo.description;
  repoLanguage.innerHTML = repo.language;
  repoCard.appendChild(repoTitle);
  repoCard.appendChild(repoDescription);
  repoCard.appendChild(repoLanguage);
  containerCards.appendChild(repoCard);
}

// const cardTest = document.getElementById("cardTest");
// cardTest.firstElementChild.innerHTML = result.data.name;
// cardTest.children.item(1).innerHTML = result.data.description;
// cardTest.children.item(2).innerHTML = result.data.language;
