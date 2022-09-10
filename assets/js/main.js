function adicionarFilme(){
    var filmeFavorito = document.querySelector("#filme").value;

    if(filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito);
    }
    else{
        console.error("Endereço Inválido!");
    }

    document.querySelector("#filme").value = "";
}

function listarFilmesNaTela(filme){
    var elementoFilmeFavorito = `<img src="${filme}">`;
    var elementoListaFilmes = document.querySelector("#listaFilmes");

    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}