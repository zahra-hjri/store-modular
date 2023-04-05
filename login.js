let usernameSignupElem = document.querySelector("#username-signupBox");
let emailSignupElem = document.querySelector("#email-signupBox");
let passwordSignupElem = document.querySelector("#password-signupBox");
let signupBtn = document.querySelector("#signup-btn");

const store = () => {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (usernameSignupElem.value.length == 0) {
    alert("Please fill in username");
  } else if (passwordSignupElem.value.length == 0) {
    alert("Please fill in password");
  } else if (
    usernameSignupElem.value.length == 0 &&
    passwordSignupElem.value.length == 0
  ) {
    alert("Please fill in username and password");
  } else if (passwordSignupElem.value.length > 8) {
    alert("Password Max of 8");
  } else if (!passwordSignupElem.value.match(numbers)) {
    alert("please add 1 number to password");
  } else if (!passwordSignupElem.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter to password");
  } else if (!passwordSignupElem.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter to password");
  } else {
    localStorage.setItem("username", usernameSignupElem.value);
    localStorage.setItem("password", passwordSignupElem.value);
    localStorage.setItem("email", emailSignupElem.value);
    alert("Your account has been created");
  }
};

signupBtn.addEventListener("click", store);

/*---------------------------------checking-----------------------*/
let loginBtn = document.querySelector("#login-btn");
const check = () => {
  var storedEmail = localStorage.getItem("email");
  var storedPw = localStorage.getItem("password");

  let emailLoginBox = document.querySelector("#email-loginBox");
  let passwordLoginBox = document.querySelector("#password-loginBox");

  if (
    emailLoginBox.value == storedEmail &&
    passwordLoginBox.value == storedPw
  ) {
    // alert("You are logged in.");
    location.href = "./index.html";
  } else {
    alert("Error on login");
  }
};
loginBtn.addEventListener("click", check);
