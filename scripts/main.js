const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/original_logo.png") {
    myImage.setAttribute("src", "images/original_logo_symbol.png");
  } else {
    myImage.setAttribute("src", "images/original_logo.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Elect Chad W. Thomas, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Elect Chad W. Thomas, ${storedName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Elect Chad W. Thomas, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
