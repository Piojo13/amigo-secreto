// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];
const MENSAJE_INICIAL = "Digite el nombre de sus amigos";
const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;

document.addEventListener("keydown", function(event) {
    
    if (event.key === "Enter") { 
        agregarAmigo();
    }
});

function mostrarMensaje(contenido) {
    document.querySelector("h2").textContent = contenido;
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

function capitalizarPrimeraLetra(nombre) {
    if (!nombre) return "";
    let inicial = nombre.charAt(0).toUpperCase();
    let resto = nombre.slice(1);
    return inicial + resto;
};

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (!nombre   ||  !regex.test(nombre) || nombre.length <= 2) {
        mostrarMensaje("Por favor, ingrese un nombre válido");
    }
    else {
        nombre = capitalizarPrimeraLetra(nombre);
        if (nombresAmigos.includes(nombre)) {
        mostrarMensaje("Ese nombre ya fue incluido en la lista, ingrese otro o utilice una distinción.");            
        } else { 
            mostrarMensaje(MENSAJE_INICIAL);            
            nombresAmigos.push(nombre);
            document.getElementById("amigo").value = "";
            mostrarLista();        
        }
    }  
};

function sorteo() {
    let numeroLista = Math.floor(Math.random()* nombresAmigos.length);
    let nombreAleatorio = nombresAmigos[numeroLista];
    mostrarConSuspenso(nombreAleatorio);
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
            reproducirSonido();
            setTimeout(() => {
                reiniciarLista();
            }, 3000);
        }
    }
};

function lanzarConfeti() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
};

function reproducirSonido() {
    let tambor = document.getElementById("tambor");

    tambor.play();

    setTimeout(() => {
        tambor.pause();
        tambor.currentTime = 0;
    }, 5000);
    setTimeout(() => {
    lanzarConfeti();
    }, 3000);
};

function mostrarConSuspenso(nombreGanador) {
    let texto = document.getElementById("resultado");
    let i = 0;
    let intervalo = setInterval(() => {
        texto.textContent = nombresAmigos[i % nombresAmigos.length];
        i++;
    }, 150);

    setTimeout(() => {
        clearInterval(intervalo);
        texto.textContent = `🎉 ¡El amigo secreto es: ${nombreGanador}! 🎉`;
        lanzarConfeti();
        reproducirSonido();
    }, 3000);
};
