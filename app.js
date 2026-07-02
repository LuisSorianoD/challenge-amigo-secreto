// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema
// Crear variable amigos
let amigos = [];

// Función para agregar el amigo secreto
function agregarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigo = amigoInput.value.trim();

    // Validar que no esté vacío
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(amigo)) {
        alert(`"${amigo}" ya está en la lista.`);
        amigoInput.value = "";
        return;
    }

    // Añadir al amigo a la lista
    amigos.push(amigo);
    
    // Actualizar la lista en la pantalla
    actualizarListaAmigos();

    // Limpiar el resultado del sorteo anterior si se añade un nuevo participante
    const resultadoElemento = document.getElementById("resultado");
    if (resultadoElemento) {
        resultadoElemento.innerHTML = "";
    }

    // Limpiar el cuadro de texto y devolver el foco para seguir escribiendo con Enter
    amigoInput.value = "";
    amigoInput.focus();
}

// Función para actualizar la lista de amigos que se muestra en el HTML
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
    // Validar que haya al menos 2 amigos para realizar el sorteo
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos en la lista para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio para seleccionar un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Buscar el contenedor correcto ("resultado")
    const resultadoElemento = document.getElementById("resultado");

    if (resultadoElemento) {
        // Inyectar el ganador en la lista con estilo
        resultadoElemento.innerHTML = `<li><strong>¡El amigo secreto sorteado es: ${amigoSorteado}! 🎉</strong></li>`;
        
        // Limpiar la lista visual de participantes anteriores
        const listaAmigos = document.getElementById("listaAmigos");
        if (listaAmigos) {
            listaAmigos.innerHTML = "";
        }
    } else {
        alert("No se encontró el elemento contenedor con el ID 'resultado'.");
    }
}