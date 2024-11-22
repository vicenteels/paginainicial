function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../login/login.html"
    }).catch(() => {
        alert("Erro ao fazer logout")
    })
}

function perfil(){
    window.location.href = "../perfil/perfil-usuario.html"
}

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo - esconde o navbar
        navbar.classList.add('hide');
    } else {
        // Rolando para cima - mostra o navbar
        navbar.classList.remove('hide');
    }

    lastScrollTop = scrollTop;
});

const modal = document.querySelector('.modal-container')

function openModal() {
    modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
}