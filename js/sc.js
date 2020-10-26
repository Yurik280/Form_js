console.dir(document)
// onclick
// onmouseover
// onmouseout
// onload

function saludar() {
    let popUp = document.querySelector("#modal");
    popUp.style.display = "block";
    popUp.classList.toggle("popUp");
}


function cerrar() {

}

function ontenerEmail() {
    let inputMail = document.querySelector("#correo");
    alert(`Enviaremos las noticias a: ${inputMail.value}`)
    alert("funciona");
    
}

let btnEnviar = document.querySelector("#btn-enviar");
btnEnviar.addEventListener("click", ontenerEmail);

window.addEventListener("load", function() {
    resaltador();
})

function resaltador() {    
    let parrafos = document.querySelectorAll("p");
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].addEventListener("click", function() {
            this.classList.toggle("resaltador");
        })    
    }
}