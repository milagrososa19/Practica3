const lista = document.getElementById("lista");
const usuarios = document.getElementById("usuarios");

// Ejercicio  1 y 2: Obtener publicaciones y mostrarlas en español
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(datos => {
        console.log("Publicaciones:", datos);

        const titulos = [
            "Mi primer día de clases",
            "La importancia de la amistad",
            "Cuidemos el medio ambiente",
            "Un día inolvidable",
            "La importancia de estudiar",
            "Mis actividades favoritas",
            "Aprender cosas nuevas",
            "La tecnología en nuestra vida",
            "Compartir con amigos",
            "Mis objetivos para el futuro"
        ];

        const textos = [
            "Hoy fue un día muy especial porque comencé una nueva etapa de aprendizaje.",
            "Los amigos nos acompañan, nos ayudan y hacen que los momentos sean más divertidos.",
            "Debemos cuidar el planeta, reciclar y evitar contaminar nuestro ambiente.",
            "Hay momentos que quedan en nuestra memoria y nos hacen muy felices.",
            "Estudiar nos permite aprender, crecer y tener más oportunidades en el futuro.",
            "Me gusta disfrutar de mi tiempo libre haciendo actividades que me divierten.",
            "Cada día podemos descubrir algo nuevo y desarrollar nuestras habilidades.",
            "La tecnología nos permite comunicarnos y acceder a mucha información.",
            "Compartir momentos con amigos nos ayuda a crear recuerdos muy lindos.",
            "Tener objetivos nos motiva a esforzarnos y trabajar para cumplir nuestros sueños."
        ];

        datos.slice(0, 10).forEach((publicacion, indice) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            tarjeta.innerHTML = `
                <h3>${titulos[indice]}</h3>
                <p>${textos[indice]}</p>
            `;

            lista.appendChild(tarjeta);
        });
    })
    .catch(error => console.log("Error:", error));


// Ejercicio 4: Mostrar los usuarios
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(datos => {
        console.log("Usuarios:", datos);

        datos.forEach(usuario => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            tarjeta.innerHTML = `
                <h3>${usuario.name}</h3>
                <p>Correo electrónico: ${usuario.email}</p>
                <p>Ciudad: ${usuario.address.city}</p>
            `;

            usuarios.appendChild(tarjeta);
        });
    })
    .catch(error => console.log("Error:", error));

// Preguntas Conceptuales
// 1) El cliente es el navegador y el servidor es la API, que envía los datos solicitados.
// 2) Usamos el método GET para pedir publicaciones y POST para crear una nueva.
// 3) Esperaría un código 404 (Not Found) si esa publicación no existe, porque no se encuentra el recurso solicitado.
// 4) Una API permite que dos aplicaciones se comuniquen. JSONPlaceholder sirve para practicar con datos de prueba.
// 5) Porque JavaScript funciona directamente en el navegador y permite mostrar los datos en la página
// 6) Cambiaría la URL de JSONPlaceholder por la dirección de nuestra propia API de FastAPI.