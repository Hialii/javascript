const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageArea = document.querySelector("#message");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   
   //verificar se o nome está vazio
   if(nameInput.value === ""){
      alert("Por favor, preencha seu nome") ;
      return;
    }
   // verificar se o email está preenchido e se é valido
   if(emailInput.value === "" || !isEmailValid(emailInput.value)){
      alert("Por favor, preencha seu email") 
      return;
    }

   //verifica se a senha está preenchida 
   if(!validatePassword(passwordInput.value, 8)) {
      alert("Asenha precisa de no mínimo 8 dígitos");
   }

   //verifica se a validação foi selecionada
   if(jobSelect.value === ""){
      alert("Por favor selecione a sa situação");
      return;
   }

   //verificar se a mensagem está preeenchida
   if(messageArea === "") {
      alert("Por favor, preencha uma mensagem");
      return;
   }
   
   //se todos os campos estiverem preenchidos corretamente, envie o form
   form.submit();

});

//função que valida email
function isEmailValid(email) {
   //cria uma regex para validar email
   const emailRegex = new RegExp(
      //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/  
   );

   if(emailRegex.test(email)) {
      return true
   } else {
      return false
   }
}

//função que valida a senha
function validatePassword(password, minDigits) {
   if(password.length >= minDigits) {
      //senha valida
      return true 
   } else {
      //senha inválida 
      return false
   }
}