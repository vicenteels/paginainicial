function validateFields(){
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid; //botao entrar fica desabilitado se o email não for valido ou se a senha não for valida
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if (!email){
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid(){
    const password = document.getElementById("password").value;
    if (!password){
        return false
    }
    return true;
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}