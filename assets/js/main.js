const areaFilmes = document.querySelector(".filmes");
const imagem = document.querySelector(".imagem");

const listaFilmes = ["https://images-na.ssl-images-amazon.com/images/I/61io1vJIWFL.jpg", 
                        "https://br.web.img3.acsta.net/pictures/22/08/09/21/09/3949781.jpg", 
                        "https://br.web.img3.acsta.net/pictures/14/12/11/15/29/051042.jpg", 
                        "https://br.web.img3.acsta.net/pictures/19/02/19/15/31/1517190.jpg", 
                        "https://images-na.ssl-images-amazon.com/images/I/91K-MrUTNOL.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/81y6nIONWCL.jpg" ];

for(var i = 0; i < listaFilmes.length; i++){
    areaFilmes.innerHTML += `<img src="${listaFilmes[i]}">`;
}

function addImagem(){
    let url = imagem.value;
    let formato = url.substr(-3);
    if(url != ""){
        if(formato == "jpg" || formato == "png"){
            if(listaFilmes[listaFilmes.length-1] != url){
                listaFilmes.push(url);
                areaFilmes.innerHTML += `<img src="${listaFilmes[listaFilmes.length-1]}">`;
                imagem.value = "";
            }
        }
    }
}