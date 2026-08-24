# ¿Qué es mi producto y para qué sirve?

**Task List Server** es el motor detrás de cualquier aplicación de lista de tareas (tipo "to-do list"). Es el componente que guarda, organiza y entrega la información de las tareas para que una app web o móvil pueda mostrarlas, sin que cada aplicación tenga que preocuparse por dónde ni cómo se almacenan los datos.

En palabras simples: es como el "almacén" ordenado donde viven todas tus tareas, listo para que cualquier app converse con él y le pida "dame mis tareas", "agrega esta nueva", "marca esta como hecha" o "borra esta otra". Y ahora, además, ese almacén tiene una puerta con cerradura: solo las personas que se identifican correctamente pueden entrar a ver o modificar la información, así que tus tareas están seguras frente a cualquiera que no tenga permiso.

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
- **Inicio de sesión seguro**: cada usuario se identifica con su usuario y contraseña, como al entrar a cualquier app de banco o correo. Las contraseñas nunca se guardan "en texto plano", sino cifradas, para que ni siquiera dentro del propio sistema queden expuestas.
- **Acceso protegido a las tareas**: una vez el usuario inicia sesión, recibe una especie de "pase temporal" (una credencial digital) que debe presentar cada vez que quiera ver, crear, editar o borrar tareas. Sin ese pase, la puerta simplemente no se abre. Esto significa que nadie externo puede espiar, modificar o borrar las tareas de otra persona, aunque sepa la dirección del servicio.

Estas funcionalidades cubren el ciclo de vida completo de una tarea: crearla, consultarla, actualizarla y eliminarla; las validaciones garantizan que la información que entra y sale del sistema sea siempre correcta y confiable; y la capa de autenticación asegura que solo usuarios autorizados puedan acceder a esa información, algo indispensable en cualquier producto que maneje datos personales de sus usuarios día a día.

# ¿Qué tecnologías usé y por qué?

- **Node.js**: es el motor que permite que el servidor funcione. Se eligió porque es rápido, muy usado en la industria y cuenta con una enorme comunidad de soporte.
- **Express**: es una herramienta que facilita construir el servidor de forma simple y ordenada, sin tener que escribir todo desde cero. Es uno de los estándares más usados para este tipo de proyectos.
- **Middlewares de Express**: son como "filtros" o "puntos de control" que revisan cada solicitud antes de que llegue a su destino final. Se usaron para verificar que la información enviada sea correcta, que los parámetros de búsqueda tengan sentido, que solo se acepten los tipos de solicitud permitidos y que quien hace la petición esté debidamente autenticado, todo esto de forma centralizada y reutilizable.
- **JWT (JSON Web Token)**: es la tecnología que genera ese "pase temporal" digital cuando el usuario inicia sesión correctamente. Se eligió porque es un estándar de la industria, ligero de transportar entre aplicaciones, y permite confirmar la identidad del usuario en cada solicitud sin tener que pedirle usuario y contraseña una y otra vez.
- **Cifrado de contraseñas (bcrypt)**: se usa para transformar las contraseñas en un código irreversible antes de guardarlas, de modo que ni siquiera el propio sistema conoce la contraseña real del usuario, solo puede verificar si la que se ingresó coincide.
- **JSON**: es el formato en el que se envía y recibe la información (por ejemplo, la lista de tareas o los mensajes de error). Es un formato liviano y universal que cualquier aplicación web o móvil puede entender fácilmente.
- **Git y GitHub**: se usaron para guardar el historial de cambios del proyecto y organizar el trabajo en ramas, lo que permite desarrollar nuevas funciones de forma ordenada sin afectar lo que ya funciona.

En conjunto, estas tecnologías permiten ofrecer un producto confiable, rápido de construir y fácil de mantener y hacer crecer en el futuro, con la garantía adicional de que la información que maneja siempre está protegida, validada y solo accesible para quien tiene permiso de verla.
