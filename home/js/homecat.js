function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = "../login/logincat.html"
    }).catch(() => {
        alert("Erro ao fazer logout")
    })
}