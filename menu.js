document.addEventListener("DOMContentLoaded", function () {
  setBackground(Backgrounds.LinearGradient);
  let levelsContainerDiv = document.getElementById("levels_container");
  let level1 = document.createElement("div");
  level1.addEventListener("click", () => {
    startLevel(LettersLevel1);
  });
  level1.classList.add("btn-grad");
  level1.textContent = lang.level1;
  levelsContainerDiv.appendChild(level1);

  let level2 = document.createElement("div");
  level2.addEventListener("click", () => {
    startLevel(LettersLevel2);
  });
  level2.classList.add("btn-grad");
  level2.textContent = lang.level2;
  levelsContainerDiv.appendChild(level2);

  let level3 = document.createElement("div");
  level3.addEventListener("click", () => {
    startLevel(LettersLevel3);
  });
  level3.classList.add("btn-grad");
  level3.textContent = lang.level3;
  levelsContainerDiv.appendChild(level3);

  document.getElementById("return-button").addEventListener("click", () => {
    removeLevelElements();
    setLinearBackground(Backgrounds.LinearGradient);
    document.getElementById("return-button").style.display = "none";
    document.getElementById("levels_container").style.display = "block";
  });
});

const startLevel = (levelType) => {
  document.getElementById("return-button").style.display = "block";
  document.getElementById("levels_container").style.display = "none";
  new levelType().start();
};
