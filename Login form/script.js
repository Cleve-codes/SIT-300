const emailInputEl = document.getElementById("email");
const passwordInputEL = document.getElementById("password");
// const loginBtn = document.getElementsByClassName("login-btn");
const form = document.getElementById("form");

const FAKE_USER = {
  email: "example@gmail.com",
  password: "password",
};

// console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(typeof emailInputEl.value);
  // console.log(typeof passwordInputEL.value);

  if (typeof emailInputEl.value === "string" && typeof FAKE_USER.password === "string") {
    // console.log("logged In");
    form.style.display = "none";
  }
});

// console.log(emailInputEl, passwordInputEL)
