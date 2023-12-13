const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}


function checkForm(){
  checkInputUsername();
  checkInputEmail();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("Cadastro com sucesso!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}








// const form = document.getElementById("form");
// const nameInput = document.getElementById("#name")
// const emailInput = document.getElementById("#email")

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   //verificar se o nome está vazio
//   if(nameInput.value ===""){
//     alert("Por favor, preencha o seu nome");
//     return;
//   }

//   //verificar o email se está preenchido e é valido
//   if(emailInput.value === "" || !isEmailValid(emailInput.value)){
//     alert("Por favor, preencha o seu email");
//     return;
//   }

//   //se todos os campos estiverem corretamente preenchidos, envie o form
//   form.submit();

//   //função que valida email
//   function isEmailValid(email){
//     //cria uma regex para validar email
//     const emailRegex = new RegExp(
//       //usuario12@host.com.br
//       /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
//     );

//     if(emailRegex.test(email)){
//       return true;
//     }
//     return false;
//   }
// })