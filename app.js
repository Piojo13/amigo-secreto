// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = []

function agregarAmigo() {
    var nombre = document.getElementById("amigo").value.trim(); //Extrae el nombre añadido
    //Si el nombre no esta repetido, lo añade. Caso contrario, pide ingresar una distincion.
    if (nombre !== "") {
        if (nombresAmigos.includes(nombre)) {
        alert("Ese nombre ya fue incluido en la lista, ingrese otro o utilice una distinción.");
       }  else { 
             nombresAmigos.push(nombre);
            document.getElementById("amigo").value = "";
       }
    } else {
        alert("Por favor, ingrese un nombre.")
    }  
}
function sortearAmigo() {

}