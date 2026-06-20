const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Original_Logo.png") {
    myImage.setAttribute("src", "images/Original_Logo_Symbol.png");
  } else {
    myImage.setAttribute("src", "images/Original_Logo.png");
  }
});
