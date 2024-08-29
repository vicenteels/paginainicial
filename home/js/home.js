function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = "../login/login.html"
    }).catch(() => {
        alert("Erro ao fazer logout")
    })
}