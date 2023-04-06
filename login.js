let usernameSignupElem = document.querySelector("#username-signupBox");
let emailSignupElem = document.querySelector("#email-signupBox");
let passwordSignupElem = document.querySelector("#password-signupBox");
let errUseranameSignup = document.querySelector(".err-useraname-signup");
let errEmailSignup = document.querySelector(".err-email-signup");
let errPassSignup = document.querySelector(".err-pass-signup");
let signupMsg = document.querySelector(".signup-msg");

let signupBtn = document.querySelector("#signup-btn");

let dataUser = localStorage.getItem("dataUser");

usernameSignupElem.addEventListener("keyup", function () {
  if (usernameSignupElem.value.length > 0) {
    errUseranameSignup.style.display = "none";
  }
});
emailSignupElem.addEventListener("keyup", function () {
  var emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  if (emailSignupElem.value.length > 0) {
    errEmailSignup.style.display = "none";
    usernameSignupElem.style.marginBottom = "1rem";
  }
  if (!emailSignupElem.value.match(emailRegEx)) {
    errEmailSignup.style.display = "block";
    errEmailSignup.innerHTML = "please enter current email address";
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

passwordSignupElem.addEventListener("focus", function () {
  if (emailSignupElem.value.length == 0) {
    errEmailSignup.style.display = "block";
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
  }

  let users = localStorage.getItem("users");
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }
  signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // usernameSignupElem.value = "";
    // emailSignupElem.value = "";
    // passwordSignupElem.value = "";
    let newUser = {
      username: usernameSignupElem.value,
      email: emailSignupElem.value,
      password: passwordSignupElem.value,
    };

    // console.log(users);
    const findUser = users.find((user) => {
      return user.email == emailSignupElem.value;
    });
    if (findUser) {
      signupMsg.style.display = "block";
      signupMsg.style.color = "red";
      signupMsg.innerHTML = "This Email has already been registered!!!";
    } else {
      users.push(newUser);
      users = [...users];
      signupMsg.style.display = "block";
      signupMsg.innerHTML = "Sign up was successful ... Please Login :)";
      setLocalStorageUses(users);
    }
  });

  let setLocalStorageUses = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
};
passwordSignupElem.addEventListener("keyup", store);

/*---------------------------------checking-----------------------*/
let loginBtn = document.querySelector("#login-btn");
let loginMsg = document.querySelector(".login-msg");
const check = (e) => {
  e.preventDefault();
  let storedEmail = JSON.parse(localStorage.getItem("users"));
  let emailLoginBox = document.querySelector("#email-loginBox");
  let passwordLoginBox = document.querySelector("#password-loginBox");
  console.log(storedEmail);
  storedEmail.forEach((user) => {
    if (
      emailLoginBox.value == user.email &&
      passwordLoginBox.value == user.password
    ) {
      loginMsg.style.display = "block";
      loginMsg.innerHTML = "You are logged in.";
      location.href = "./products.html";
    } else {
      loginMsg.style.display = "block";
      loginMsg.style.color = "red";
      loginMsg.innerHTML = "Email or Password is wrong";
    }
  });
};

loginBtn.addEventListener("click", check);
