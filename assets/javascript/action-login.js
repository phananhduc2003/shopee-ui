const login = document.querySelector(".js-login");
const register = document.querySelector(".js-register");
const modalContainers = document.querySelectorAll(".js-auth-form");
const modal = document.querySelector(".js-modal");
const actionRegister = document.querySelector(".js-action-Register");
const actionLogin = document.querySelector(".js-action-login");

function showLogin() {
  modal.classList.add("open");
  actionLogin.classList.add("open");
}

function showRegister() {
  modal.classList.add("open");
  actionRegister.classList.add("open");
}

function Hide() {
  modal.classList.remove("open");
  actionLogin.classList.remove("open");
  actionRegister.classList.remove("open");
}

register.addEventListener("click", showRegister);

login.addEventListener("click", showLogin);

modal.addEventListener("click", Hide);

for (const modalContainer of modalContainers) {
  modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
