import { request } from "https://cdn.skypack.dev/@octokit/request";

let result = await request("GET /users/{owner}/repos", {
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
  const repoIcon = document.createElement("i");
  repoIcon.classList.add("fa-solid", "fa-code");
  const languageIcon = document.createElement("i");
  languageIcon.classList.add("fa-solid", "fa-circle");
  let languageColor = "var(--primary-color)";
  switch (repo.language) {
    case "HTML":
      languageColor = "#e34c26";
      break;
    case "CSS":
      languageColor = "#563d7c";
      break;
    case "JavaScript":
      languageColor = "#f1e05a";
      break;
  }
  languageIcon.style.color = languageColor;
  const repoTitle = document.createElement("h1");
  const repoDescription = document.createElement("p");
  const repoLanguage = document.createElement("div");
  repoLanguage.classList.add("githubInfo");
  repoTitle.innerHTML = repo.name;
  repoDescription.innerHTML = repo.description;
  repoLanguage.innerHTML = repo.language;
  repoTitle.insertBefore(repoIcon, repoTitle.firstChild);
  repoCard.appendChild(repoLink);
  repoLink.appendChild(repoTitle);
  repoLink.appendChild(repoDescription);
  repoLink.appendChild(repoLanguage);
  repoLanguage.insertBefore(languageIcon, repoLanguage.firstChild);
  containerCards.appendChild(repoCard);
}
