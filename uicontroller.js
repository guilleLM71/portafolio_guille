const botonTema = document.querySelector("#boton-tema");

const UI = {
    cuerpo: document.body,
    cabecera: document.querySelector("header"),

    alternarColor: function() {
        this.cuerpo.classList.toggle("tema-oscuro");
        const esOscuro = this.cuerpo.classList.contains("tema-oscuro");
        if (botonTema) {
            botonTema.textContent = esOscuro ? "LIGHT" : "TEMA";
        }
    },

    irAseccion: function(id) {
        const seccion = document.getElementById(id);
        if (seccion) {
            seccion.scrollIntoView({ behavior: "smooth" });
        }
    }
};

if (botonTema) {
    botonTema.addEventListener("click", () => UI.alternarColor());
}