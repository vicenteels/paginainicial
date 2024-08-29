function keepUser(){
    firebase.auth().onAuthStateChange(user =>{ //usuario vai ser nulo se não tiver logado, se tiver logado vai ter valor
        if (user){
            window.location.href = "../home/home.html";
        }
    })
}

function onChangeEmail(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

    toggleRegisterButtonDisabled();
}

function onChangePassword(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    form.passwordMinLegthError().style.display = password.length >= 6 ? "none" : "block";

    toggleRegisterButtonDisabled();
}

function onChangeConfirmPassword(){
    validatePasswordsMatch();

    toggleRegisterButtonDisabled();
}

function onChangeName(){
    const nome = form.nome().value;
    form.nameRequiredError().style.display = nome ? "none" : "block";

    form.nameMinLegthError().style.display = nome.length >= 3 ? "none" : "block";

    toggleRegisterButtonDisabled();
}

function register(){
    showLoading();
    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading();
        window.location.href = "../home/home.html"
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    })
}

function getErrorMessage(error){
    if (error.code == "auth/email-already-in-use"){
        return "Email já está em uso";
    }
    return error.message;
}

function validatePasswordsMatch(){
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display = 
        password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisabled(){
    form.registerButton().disabled = !isFormValid();
}

function isFormValid(){
    const email = form.email().value;
    if (!email || !validateEmail(email)){
        return false;
    }

    const password = form.password().value;
    if (!password || password.length < 6){
        return false
    }

    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
        return false
    }

    const nome = form.nome().value;
    if (nome.length < 3 || !nome){
        return false;
    }

    return true;
}


const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('senha'),
    confirmPassword: () =>document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLegthError: () => document.getElementById('password-min-length-error'),
    registerButton: () => document.getElementById('register-button'),
    nome: () => document.getElementById('nome'),
    nameMinLegthError: () => document.getElementById("name-min-length-error"),
    nameRequiredError: () => document.getElementById("name-required-error")
}