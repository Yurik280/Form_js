let btn = document.getElementById("ingresar");
let usr = document.getElementById("usuario");
let clave = document.getElementById("clave");
let form = document.getElementById("formulario");

btn.addEventListener("click", function() {
    if (usr.value == "" || clave.value == "") {
        alert("Es necesario completar los datos");
    }
    else if (usr.value.indexOf("@") == -1) {        
        alert("Falta el arroba en el campo usuario");
    }
    else {
        form.submit();
    }
});
