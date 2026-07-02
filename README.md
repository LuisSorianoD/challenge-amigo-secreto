Challenge Amigo Secreto

Esta aplicación web permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y descubrir quién es el amigo secreto elegido.

---

Arquitectura y Funcionamiento de la Lógica

A continuación se detalla cómo interactúa JavaScript con la interfaz de usuario (DOM) para gestionar los datos del sorteo de forma segura y eficiente:


 1. Inicialización del Listado

javascript

let amigos = [];
Se declara un arreglo (array) vacío de alcance global llamado amigos. Su propósito es almacenar de forma dinámica los nombres de todos los participantes ingresados a lo largo de la ejecución.


2. Función agregarAmigo()
Controla el flujo de captura y validación cuando el usuario añade un nuevo nombre desde la interfaz.

Captura de datos: Mediante document.getElementById("amigo") se accede al campo de entrada HTML. Luego, se extrae su contenido usando .value.trim(), lo que remueve espacios en blanco innecesarios al inicio y al final del texto.

Validaciones Avanzadas:

Campo Vacío: Si el campo está vacío, se dispara un alert() notificando el error al usuario.

Nombres Duplicados: Valida mediante .includes() si el nombre ya fue ingresado previamente para evitar confusiones en el sorteo.

Actualización y Foco: Si pasa las validaciones, el nombre se añade al arreglo usando .push(amigo). Acto seguido, se invoca a actualizarListaAmigos(), se limpia la pantalla de sorteos anteriores, se vacía el input y se le devuelve el foco (.focus()) para permitir al usuario seguir escribiendo sin usar el mouse.

3. Función actualizarListaAmigos()
Se encarga de sincronizar el estado del arreglo amigos con la interfaz gráfica en tiempo real.

Limpieza del contenedor: Primero obtiene el elemento contenedor (#listaAmigos) y vacía su contenido con listaAmigos.innerHTML = "". Esto es crucial para evitar duplicación visual de los nombres previos al renderizar de nuevo.

Renderizado con .forEach(): Recorre el arreglo de nombres elemento por elemento. Por cada iretación:

Crea una nueva etiqueta de lista (document.createElement("li")).

Le asigna el nombre del participante a su propiedad textContent.

Inserta el nuevo nodo <li> dentro del contenedor principal utilizando .appendChild().

4. Función sortearAmigo()
Realiza la lógica matemática del sorteo aleatorio de un participante.

Control de flujo: Verifica si la lista cuenta con la cantidad mínima de participantes. Si hay menos de 2 elementos (amigos.length < 2), detiene la ejecución del script con un return y lanza un aviso, asegurando que el juego tenga sentido competitivo.

Lógica matemática: Utiliza la fórmula:

JavaScript
Math.floor(Math.random() * amigos.length)
Esto genera un índice entero pseudoaleatorio que se encuentra estrictamente dentro de los límites válidos del arreglo.

Despliegue del resultado: Intenta capturar el elemento visual #resultado. Si existe en el HTML, inyecta dinámicamente un nodo <li> estilizado revelando al ganador y oculta la lista de participantes para aumentar el misterio. En caso de que no se encuentre dicho contenedor en el DOM, envía una alerta preventiva.

🚀 Experiencia de Usuario Mejorada (UX)
Soporte para Tecla Enter: El contenedor de entrada se reestructuró bajo la semántica de un <form>, permitiendo que los usuarios de computadoras puedan añadir nombres de forma rápida presionando la tecla Enter (Intro) además de haciendo clic en el botón "Añadir".

Gestión Automática de Limpieza: Al agregar nuevos participantes post-sorteo, la pantalla limpia los resultados anteriores para evitar sobreposición visual.