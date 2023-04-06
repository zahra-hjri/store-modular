let usernameSignupElem = document.querySelector("#username-signupBox");
let emailSignupElem = document.querySelector("#email-signupBox");
let passwordSignupElem = document.querySelector("#password-signupBox");
let errUseranameSignup = document.querySelector(".err-useraname-signup");
let errEmailSignup = document.querySelector(".err-email-signup");
let errPassSignup = document.querySelector(".err-pass-signup");

let signupBtn = document.querySelector("#signup-btn");

let dataUser = localStorage.getItem("dataUser");
if (dataUser) {
  dataUser = JSON.parse(dataUser);
} else {
  dataUser = [];
}

usernameSignupElem.addEventListener("keyup", function () {
  if (usernameSignupElem.value.length > 0) {
    errUseranameSignup.style.display = "none";
  }
});
emailSignupElem.addEventListener("focus", function () {
  if (usernameSignupElem.value.length == 0) {
    errUseranameSignup.style.display = "block";
    errUseranameSignup.innerHTML = "Please fill in username";
  }
});

passwordSignupElem.addEventListener("focus", function () {
  if (
    usernameSignupElem.value.length == 0 &&
    emailSignupElem.value.length == 0
  ) {
    errUseranameSignup.style.display = "block";
    errEmailSignup.style.display = "block";
    usernameSignupElem.style.marginBottom = "0";
    errUseranameSignup.innerHTML = "Please fill in username";
    errEmailSignup.innerHTML = "Please fill in email";
  }
});

const store = (e) => {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (usernameSignupElem.value.length == 0) {
    errUseranameSignup.style.display = "block";
    errUseranameSignup.innerHTML = "Please fill in username";
  } else if (passwordSignupElem.value.length == 0) {
    errPassSignup.style.display = "block";
    errPassSignup.innerHTML = "Please fill in password";
  } else if (
    usernameSignupElem.value.length == 0 &&
    passwordSignupElem.value.length == 0
  ) {
    errUseranameSignup.style.display = "block";
    errUseranameSignup.innerHTML = "Please fill in username";
    errPassSignup.style.display = "block";
    errPassSignup.innerHTML = "Please fill in password";
  } else if (passwordSignupElem.value.length > 8) {
    errPassSignup.style.display = "block";
    errPassSignup.innerHTML = "Password Max of 8";
  } else if (!passwordSignupElem.value.match(numbers)) {
    errPassSignup.style.display = "block";
    errPassSignup.innerHTML = "please add 1 number to password";
  } else if (!passwordSignupElem.value.match(upperCaseLetters)) {
    errPassSignup.style.display = "block";
    errPassSignup.innerHTML = "please add 1 uppercase letter to password";
  } else if (!passwordSignupElem.value.match(lowerCaseLetters)) {
    errPassSignup.style.display = "block";
    errPassSignup.innerHTML = "please add 1 lovercase letter to password";
  } else {
    errPassSignup.style.display = "none";
    //   localStorage.setItem("password", passwordSignupElem.value);
    //   localStorage.setItem("email", emailSignupElem.value);
    //   alert("Your account has been created");
  }
  if (dataUser.includes(emailSignupElem.value)) {
    console.log("yesss");
  } else {
    dataUser.push(usernameSignupElem.value);
    localStorage.setItem("username", usernameSignupElem.value);
    localStorage.setItem("email", emailSignupElem.value);
  }
  // e.preventDefault();
};

usernameSignupElem.addEventListener("keyup", store);
emailSignupElem.addEventListener("keyup", store);
passwordSignupElem.addEventListener("keyup", store);
signupBtn.addEventListener("click", store);

/*---------------------------------checking-----------------------*/
let loginBtn = document.querySelector("#login-btn");
const check = (e) => {
  var storedEmail = localStorage.getItem("email");
  var storedPw = localStorage.getItem("password");

  let emailLoginBox = document.querySelector("#email-loginBox");
  let passwordLoginBox = document.querySelector("#password-loginBox");

  if (
    emailLoginBox.value == storedEmail &&
    passwordLoginBox.value == storedPw
  ) {
    alert("You are logged in.");
    e.preventDefault();
    location.href = "./index.html";
  } else {
    alert("Error on login");
  }
};
loginBtn.addEventListener("click", check);
