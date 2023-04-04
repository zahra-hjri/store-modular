let usernameElem = document.querySelector("#username-inputBox");
let emailElem = document.querySelector("#email-inputBox");
let passwordElem = document.querySelector("#password-inputBox");
let signupElem = document.querySelector("#signup-btn");

let loginArray = localStorage.getItem("loginArray");
if (loginArray) {
  loginArray = JSON.parse(loginArray);
} else {
  loginArray = [];
}

const checkValue = () => {
  console.log(usernameElem.value);
  loginArray.push(usernameElem.value);
  setLocalStorageLogin(loginArray);
};

let setLocalStorageLogin = (loginArray) => {
  localStorage.setItem("loginArray", JSON.stringify(loginArray));
};

signupElem.addEventListener("click", checkValue);
