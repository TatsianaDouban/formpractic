let form = document.querySelector("form");
let error = document.querySelector(".error");



form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkTextInput('input[name="username"]','имя');
    checkTextInput('input[name="email"]','почту');
    checkpassword();


    let checkbox = document.querySelector('input[name="agree"]');
    if(!checkbox.checked) {
        error.textContent +=  "не отмечено согласие на обработку данных,";
    }      
});

function checkTextInput(selector, inputName) {
let input = document.querySelector(selector);
if (input.value.length > 0) {
}else{
    error.textContent += `Запoните ${inputName}, `;
}  
}

function checkpassword() {
    let password = document.querySelector(".password");
    let repeadPassword = document.querySelector(".checkpassword");
    if(password.value != repeadPassword.value) {
   
}else{
    error.textContent += "Пароли не совпадают,";
}
}

 







