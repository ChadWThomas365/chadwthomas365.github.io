const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Original_Logo.png") {
    myImage.setAttribute("src", "images/Original_Logo_Symbol.png");
  } else {
    myImage.setAttribute("src", "images/Original_Logo.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Hello, from Chad W. Thomas, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, from Chad W. Thomas, ${storedName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, from Chad W. Thomas, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
