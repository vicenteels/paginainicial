function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword(){
    togglePasswordErrors();
    toggleButtonsDisable();
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if (!email){
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors(){
    const email = document.getElementById('email').value;
    if (!email){ //verifica se o campo do email esta vazio
        document.getElementById('email-required-error').style.display = 'block'; //se esta vazio mostra mensagem de erro que tem q ter email
    }else{ //se tiver algo escrito não mostra
        document.getElementById('email-required-error').style.display = "none";
    }

    if (validateEmail(email)){ //chama a função de verificar se o email é valido e se receber dela um true não mostra nada
        document.getElementById('email-invalid-error').style.display = "none"; 
    }else{ //senão mostra mensagem de erro dizendo que o email é inválido
        document.getElementById('email-invalid-error').style.display = "block";
    }
}

function togglePasswordErrors(){
    const password = document.getElementById("password").value;
    if(!password){
        document.getElementById("password-riquired-error").style.display = "block";
    }else{
        document.getElementById("password-riquired-error").style.display = "none";
    }
}

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid; //botao entrar fica desabilitado se o email não for valido ou se a senha não for valida
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