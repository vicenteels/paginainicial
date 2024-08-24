function showLoading(){ //ta funcionando mas não aparece na tela 
    const div = document.createElement("div");
    div.classList.add("loading");

    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);
}

function hideLoading(){
    //alert('hide');
    const loadings = document.getElementsByClassName('loading');
    if (loadings.length){
        loadings[0].remove();
    }
}