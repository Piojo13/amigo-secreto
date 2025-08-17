// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];
const MENSAJE_INICIAL = "Digite el nombre de sus amigos";

function mostrarMensaje(texto) {
    document.querySelector("h2").textContent = texto;
};

function mostrarLista() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    for (const amigo of nombresAmigos) {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaNombres.appendChild(li);
    }
};

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre !== "") {
        if (nombresAmigos.includes(nombre)) {
        mostrarMensaje("Ese nombre ya fue incluido en la lista, ingrese otro o utilice una distinción.");
            
       }  else { 
            mostrarMensaje(MENSAJE_INICIAL);
            nombresAmigos.push(nombre);
            document.getElementById("amigo").value = "";
            mostrarLista();
       }
    } else {
        mostrarMensaje("Por favor, ingrese un nombre")
    }  
};

function sorteo() {
    let numeroLista = Math.floor(Math.random()* nombresAmigos.length);
    let nombreAleatorio = nombresAmigos[numeroLista];
    document.getElementById("resultado").innerHTML = `Tu amigo secreto es ${nombreAleatorio}`;
};

function reiniciarLista() {
    nombresAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
};

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        mostrarMensaje("La lista de amigos esta vacia, no es posible sortear");
        return;
    } else { if (nombresAmigos.length < 2) {
        mostrarMensaje("Por favor, ingrese como minimo 2 nombres para sortear") 
         }else {
            mostrarMensaje(MENSAJE_INICIAL)
            sorteo();
            reiniciarLista();
         }
    }
};