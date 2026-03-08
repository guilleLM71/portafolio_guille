const proyectos = [
    {
        titulo: "Sistema de Gestión en Java",
        descripcion: "Sistema backend desarrollado con Java y PostgreSQL"
    },
    {
        titulo: "API REST con Node y TypeScript",
        descripcion: "API desarrollada con Express y TypeORM"
    },
    {
        titulo: "Frontend con Angular",
        descripcion: "Aplicación SPA conectada a servicios REST"
    },
    {
        titulo: "Portafolio Web Personal",
        descripcion: "Sitio web desarrollado con HTML, CSS y JavaScript"
    }
];


const contenedor = document.getElementById("contenedor-proyectos");


function renderizarProyectos() {

    if (!contenedor) return;

    proyectos.forEach(proyecto => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("proyecto-card");

        tarjeta.innerHTML = `
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
        `;

        contenedor.appendChild(tarjeta);
    });

}

function duplicarProyectosParaCarrusel() {
    if (!contenedor) return;

    const tarjetas = Array.from(contenedor.children);
    tarjetas.forEach(card => {
        const clon = card.cloneNode(true);
        contenedor.appendChild(clon);
    });
}


renderizarProyectos();
duplicarProyectosParaCarrusel();


if (contenedor) {
    contenedor.addEventListener("click", function(evento){

        const tarjeta = evento.target.closest(".proyecto-card");

        if(tarjeta){
            alert("Haz hecho clic en un proyecto: " + tarjeta.querySelector("h3").innerText);
        }

    });
}

 