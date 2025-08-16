// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre !== "") {
        if (nombresAmigos.includes(nombre)) {
        alert("Ese nombre ya fue incluido en la lista, ingrese otro o utilice una distinción.");
       }  else { 
             nombresAmigos.push(nombre);
            document.getElementById("amigo").value = "";
            mostrarLista();
       }
    } else {
        alert("Por favor, ingrese un nombre.");
    }  
};
function mostrarLista() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    for (const amigo of nombresAmigos) {
     listaNombres.innerHTML += `<li>${amigo}</li>`;
    }
};

function sortearAmigo() {
    if (nombresAmigos == "") {
        alert("La lista de amigos esta vacia, no es posible sortear");
        return;
    } else { if (nombresAmigos.length < 2) {
        alert("Por favor, ingrese como minimo 2 nombres para sortear") 
         }else {
            let numeroLista = Math.floor(Math.random()* nombresAmigos.length);
            let nombreAleatorio = nombresAmigos[numeroLista];
            document.getElementById("resultado").innerHTML = `Tu amigo secreto es ${nombreAleatorio}`;
         }
    }
};