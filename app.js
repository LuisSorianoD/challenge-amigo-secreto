// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema

// Crear variable amigos
let amigos = [];

// Función para agregar el amigo secreto utilizando document.getElementById
function agregarAmigo() {
    const amigoInput = document.getElementById("amigo");  // Corregir el uso del ID
    const amigo = amigoInput.value.trim();  // Usar .value en lugar de ariaValueMax

    if (amigo !== "") {
        // Añadir al amigo a la lista
        amigos.push(amigo);  // Añadir la variable amigo (no el array completo)
        
        // Actualizar la lista en la pantalla
        actualizarListaAmigos();

        // Limpiar el cuadro de texto
        amigoInput.value = "";  // Limpiar el valor del input correctamente
    } else {
        // Mostrar una alerta si no se escribe un nombre
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista de amigos que se muestra
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista antes de agregar nuevos elementos
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        // Crear un nuevo elemento de lista
        const listItem = document.createElement("li");

        // Agregar el texto del amigo
        listItem.textContent = amigo;

        // Añadir el elemento a la lista
        listaAmigos.appendChild(listItem);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio para seleccionar un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el amigo sorteado (deberías tener un elemento con id "amigoSorteado")
    const amigoSorteadoElemento = document.getElementById("amigoSorteado");

    if (amigoSorteadoElemento) {
        amigoSorteadoElemento.textContent = "Amigo secreto sorteado: " + amigoSorteado;
    } else {
        alert("No se encontró el elemento donde mostrar el amigo sorteado.");
    }
}
