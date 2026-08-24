# ¿Qué es mi producto y para qué sirve?

**Task List Server** es el motor detrás de cualquier aplicación de lista de tareas (tipo "to-do list"). Es el componente que guarda, organiza y entrega la información de las tareas para que una app web o móvil pueda mostrarlas, sin que cada aplicación tenga que preocuparse por dónde ni cómo se almacenan los datos.

En palabras simples: es como el "almacén" ordenado donde viven todas tus tareas, listo para que cualquier app converse con él y le pida "dame mis tareas", "agrega esta nueva", "marca esta como hecha" o "borra esta otra". Y ahora, además, ese almacén sabe decir "no" cuando alguien le pide algo que no tiene sentido, protegiendo la información desde la puerta de entrada.

# ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

- **Ver todas las tareas**: el usuario abre su app y ve de un vistazo todo lo que tiene pendiente y lo que ya completó.
- **Ver el detalle de una tarea específica**: útil cuando se quiere revisar la información completa de una sola tarea, por ejemplo al tocarla en la app.
- **Filtrar por tareas completadas o pendientes**: permite a los usuarios enfocarse solo en lo que falta por hacer, o revisar su historial de logros, sin tener que buscar entre todo el listado.
- **Crear una nueva tarea**: cada vez que al usuario se le ocurre algo que necesita hacer, puede agregarlo al instante.
- **Actualizar una tarea**: permite corregir la descripción de una tarea o marcarla como completada cuando el usuario termina de hacerla.
- **Eliminar una tarea**: para cuando una tarea ya no aplica o fue agregada por error, manteniendo la lista limpia y relevante.
- **Validación automática de la información**: si una app intenta crear o actualizar una tarea enviando datos incompletos, vacíos o mal escritos (por ejemplo, sin descripción, o marcando "completada" con algo que no es sí/no), el sistema lo rechaza de inmediato con un mensaje claro, en lugar de guardar información dañada o incoherente.
- **Protección contra solicitudes indebidas**: el servidor solo acepta las formas de comunicación que tienen sentido para esta aplicación (consultar, crear, actualizar, eliminar). Cualquier otro tipo de solicitud es rechazada automáticamente, evitando comportamientos inesperados.
- **Validación de las búsquedas**: si alguien intenta buscar una tarea con un identificador inválido o un filtro que no existe (por ejemplo, un estado distinto a "completada" o "pendiente"), el sistema lo detecta y responde con un mensaje de error entendible, en vez de fallar de forma confusa o devolver resultados incorrectos.

Estas funcionalidades cubren el ciclo de vida completo de una tarea: crearla, consultarla, actualizarla y eliminarla; y las nuevas validaciones garantizan que, en cada uno de esos pasos, la información que entra y sale del sistema sea siempre correcta y confiable, algo esencial en cualquier producto que otras personas o aplicaciones van a usar día a día.

# ¿Qué tecnologías usé y por qué?

- **Node.js**: es el motor que permite que el servidor funcione. Se eligió porque es rápido, muy usado en la industria y cuenta con una enorme comunidad de soporte.
- **Express**: es una herramienta que facilita construir el servidor de forma simple y ordenada, sin tener que escribir todo desde cero. Es uno de los estándares más usados para este tipo de proyectos.
- **Middlewares de Express**: son como "filtros" o "puntos de control" que revisan cada solicitud antes de que llegue a su destino final. Se usaron para verificar que la información enviada sea correcta, que los parámetros de búsqueda tengan sentido, y que solo se acepten los tipos de solicitud permitidos, todo esto de forma centralizada y reutilizable.
- **JSON**: es el formato en el que se envía y recibe la información (por ejemplo, la lista de tareas o los mensajes de error). Es un formato liviano y universal que cualquier aplicación web o móvil puede entender fácilmente.
- **Git y GitHub**: se usaron para guardar el historial de cambios del proyecto y organizar el trabajo en ramas, lo que permite desarrollar nuevas funciones de forma ordenada sin afectar lo que ya funciona.

En conjunto, estas tecnologías permiten ofrecer un producto confiable, rápido de construir y fácil de mantener y hacer crecer en el futuro, con la garantía adicional de que la información que maneja siempre está protegida y validada.

Adjunta el link de tu repositorio y rama en el campo a continuación 📦⬇️

https://github.com/AnderssonProgramming/task-list-server/tree/review-2
