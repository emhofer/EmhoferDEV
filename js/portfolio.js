const response = await fetch("https://api.github.com/users/emhofer/repos");
const data = await response.json();
const result = data.filter((item) => {
  return item.name !== "emhofer";
});

const containerCards = document.getElementById("containerCards");

for (let i = 0; i < result.length; i++) {
  const repo = result[i];
  const repoCard = document.createElement("div");
  const repoLink = document.createElement("a");
  const repoIcon = document.createElement("i");
  const languageIcon = document.createElement("i");
  const repoTitle = document.createElement("h1");
  const repoDescription = document.createElement("p");
  const repoLanguage = document.createElement("div");
  repoCard.classList.add("card");
  repoLink.href = repo.html_url;
  repoLink.setAttribute("target", "_blank");
  repoIcon.classList.add("fa-solid", "fa-code");
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
  repoLanguage.classList.add("githubInfo");
  repoTitle.innerHTML = repo.name;
  repoDescription.innerHTML = repo.description;
  repoLanguage.innerHTML = repo.language;
  repoTitle.insertBefore(repoIcon, repoTitle.firstChild);
  repoLink.appendChild(repoCard);
  repoCard.appendChild(repoTitle);
  repoCard.appendChild(repoDescription);
  repoCard.appendChild(repoLanguage);
  repoLanguage.insertBefore(languageIcon, repoLanguage.firstChild);
  containerCards.appendChild(repoLink);
}
