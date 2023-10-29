const emailInputEl = document.getElementById("email");
const passwordInputEL = document.getElementById("password");
// const loginBtn = document.getElementsByClassName("login-btn");
const loginFormEl = document.getElementById("form-login");
const registrationForm = document.getElementById("form-registration")

const FAKE_USER = {
  email: "example@gmail.com",
  password: "password",
};

// console.log(form);

loginFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(typeof emailInputEl.value);
  // console.log(typeof passwordInputEL.value);

  if (typeof emailInputEl.value === "string" && typeof FAKE_USER.password === "string") {
    // console.log("logged In");
    loginFormEl.classList.add('hidden')
    registrationForm.classList.remove('hidden');
  }
});

// console.log(emailInputEl, passwordInputEL)
