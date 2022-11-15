import { request } from "https://cdn.skypack.dev/@octokit/request";
import githubToken from "../_ignore/config.js";

let result = await request("GET /users/{owner}/repos", {
  headers: {
    authorization: `token ${githubToken}`,
  },
  owner: "emhofer",
});

result = result.data.filter((item) => {
  return item.name !== "emhofer";
});

console.log(result);

const containerCards = document.getElementById("containerCards");

for (let i = 0; i < result.length; i++) {
  const repo = result[i];
  const repoCard = document.createElement("div");
  repoCard.classList.add("card");
  const repoLink = document.createElement("a");
  repoLink.href = repo.html_url;
  repoLink.setAttribute("target", "_blank");
  const repoTitle = document.createElement("h1");
  const repoDescription = document.createElement("p");
  const repoLanguage = document.createElement("div");
  repoLanguage.classList.add("githubInfo");
  repoTitle.innerHTML = repo.name;
  repoDescription.innerHTML = repo.description;
  repoLanguage.innerHTML = repo.language;
  repoCard.appendChild(repoLink);
  repoLink.appendChild(repoTitle);
  repoLink.appendChild(repoDescription);
  repoLink.appendChild(repoLanguage);
  containerCards.appendChild(repoCard);
}

// const cardTest = document.getElementById("cardTest");
// cardTest.firstElementChild.innerHTML = result.data.name;
// cardTest.children.item(1).innerHTML = result.data.description;
// cardTest.children.item(2).innerHTML = result.data.language;
