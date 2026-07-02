1. Inicialización del Listado
JavaScript
let amigos = [];
Se declara un arreglo (array) vacío llamado amigos. Su propósito es almacenar de forma dinámica los nombres de todos los participantes ingresados por el usuario.

2. Función agregarAmigo()
Controla el flujo de captura y validación cuando el usuario añade un nuevo nombre desde la interfaz.

Captura de datos: Mediante document.getElementById("amigo") se accede al campo de entrada HTML. Luego, se extrae su contenido usando .value.trim(), lo que remueve espacios en blanco innecesarios al inicio y al final del texto.

Validación: * Si el campo contiene un texto válido (amigo !== ""), el nombre se añade al arreglo usando .push(amigo). Acto seguido, se invoca a actualizarListaAmigos() para refrescar la interfaz y se limpia el input (amigoInput.value = "").

Si el campo está vacío, se dispara un alert() notificando el error al usuario.

3. Función actualizarListaAmigos()
Se encarga de sincronizar el estado del arreglo amigos con la interfaz gráfica (el DOM).

Limpieza del contenedor: Primero obtiene el elemento contenedor (#listaAmigos) y vacía su contenido con listaAmigos.innerHTML = "". Esto es crucial para evitar duplicación de nombres al renderizar de nuevo.

Renderizado con .forEach(): Recorre el arreglo elemento por elemento. Por cada iteración:

Crea una nueva etiqueta de lista (document.createElement("li")).

Le asigna el nombre del participante a su propiedad textContent.

Inserta el nuevo nodo <li> dentro del contenedor principal utilizando .appendChild().

4. Función sortearAmigo()
Realiza la lógica del sorteo aleatorio de un participante.

Control de flujo: Lo primero que hace es verificar si hay elementos en la lista (amigos.length === 0). Si está vacía, interrumpe la función con un return y muestra un mensaje de advertencia.

Lógica matemática: Utiliza Math.floor(Math.random() * amigos.length) para obtener un índice entero pseudoaleatorio que se encuentre estrictamente dentro de los límites del arreglo.

Despliegue del resultado: Intenta capturar el elemento visual #amigoSorteado. Si el elemento existe en el HTML, modifica su texto para revelar al ganador; en caso de que no se encuentre dicho contenedor en el DOM, envía una alerta preventiva al desarrollador.