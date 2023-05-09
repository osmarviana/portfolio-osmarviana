const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  // e.preventDefault();

  checkForm();
});

function checkForm() {
  const nameValue = userName.value;
  const emailValue = email.value;
  const telValue = tel.value;
  const messageValue = message.value;

  if (nameValue.length < 3) {
    setErrorFor(userName, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(userName);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (telValue === "") {
    setErrorFor(tel, "O número de telefone é obrigatório.");
  } else if (telValue.length < 11) {
    setErrorFor(tel, "Informe um número de telefone válido.");
  } else {
    setSuccessFor(tel);
  }

  if (messageValue === "") {
    setErrorFor(message, "Você precisa digitar sua mensagem.");
  } else {
    setSuccessFor(message);
  }

  // const formControls = form.querySelectorAll(".form-control");

  // const formIsValid = [...formControls].every((formControl) => {
  //   return formControl.className === "form-control success";
  // });

  // if (formIsValid) {
  //   alert("Formulário enviado com sucesso!");
  // }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
