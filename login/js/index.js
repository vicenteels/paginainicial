function keepUser(){
    firebase.auth().onAuthStateChange(user =>{ //usuario vai ser nulo se não tiver logado, se tiver logado vai ter valor
        if (user){
            window.location.href = "../home/home.html";
        }
    })
}


function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword(){
    togglePasswordErrors();
    toggleButtonsDisable();
}

function login(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        hideLoading();
        window.location.href = "../home/home.html"
    }).catch(error =>{
        hideLoading();
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error){
    if (error.code == "auth/invalid-credential"){
        return "Email ou senha incorretos. Verifique se está fazendo login no lado correto da aplicação. Você tentou realizar login como: USUÁRIO QUE DESEJA DESCARTAR."
    }
    return error.message;
}

function register(){
    showLoading();
    window.location.href = "../cadastro/cadastroselect.html"
}

function recoverPassword(){ //tem q ser desse jeito, firebase não deixa mais verificar se o usuário está cadastrado ou não
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert('Email enviado, verifique sua caixa de entrada! Se não tiver recebido, o email informado está incorreto.')
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });
}

function isEmailValid(){
    const email = form.email().value;
    if (!email){
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    //operador ternário
    //verifica se o campo do email esta vazio
    //se for verdadeiro, no caso se tiver algo escrito não mostra (segundo bloco do operador ternario)
    //se esta vazio mostra mensagem de erro que tem q ter email
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    //mesma coisa do de cima só que ele vai verificar se o email é valido
    //por isso chamou a função validateEmail()

}

function togglePasswordErrors(){
     const password = form.password().value;
     form.passwordRequiredError().style.display = password ? "none" : "block";
    //mesma coisa do de cima, se o campo password tiver valor ele não mostra o erro
    //se não tiver nada escrito mostra o erro
}

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid; //botao entrar fica desabilitado se o email não for valido ou se a senha não for valida
}

function isPasswordValid(){
    const password = form.password().value;
    if (!password){
        return false
    }
    return true;
}

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    loginButton: () => document.getElementById('login-button'),
    recoverPasswordButton: () => document.getElementById('recover-password-button'),
    passwordRequiredError: () => document.getElementById('password-required-error')
}