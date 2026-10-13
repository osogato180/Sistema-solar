const textos = {
    1: "La contaminación ambiental es la presencia de componentes nocivos (químicos, físicos o biológicos) en el entorno que afectan negativamente a los seres vivos.",
    2: "Las principales fuentes provienen de las emisiones industriales, la quema de combustibles fósiles, el parque automotor y la acumulación masiva de residuos sólidos.",
    3: "Los efectos directos incluyen el deterioro de la calidad del aire y del agua, el incremento de enfermedades respiratorias y la pérdida grave de biodiversidad.",
    4: "Las medidas de mitigación abarcan el reciclaje activo, el fomento de energías renovables limpias y la reducción drástica de plásticos de un solo uso.",
    5: "El desarrollo sostenible busca equilibrar el crecimiento económico y social con la protección y conservación rigurosa de los recursos naturales del planeta."
};

const preguntas = {
    1: "¿Qué tipos de contaminación percibes con mayor frecuencia en tu comunidad?",
    2: "¿Cómo influye el transporte urbano en la emisión de gases contaminantes?",
    3: "¿De qué manera la contaminación del agua impacta directamente en la salud pública?",
    4: "¿Qué acciones prácticas puedes implementar desde casa para reducir residuos?",
    5: "¿Cuál es el rol fundamental de la ciudadanía frente a la crisis climática actual?"
};

const selector = document.querySelector("#pagina");
const sistema = document.querySelector("#sistema");
const estado = document.querySelector("#estado");
const boton = document.querySelector("#pausa");
const marcador = document.querySelector("#marcador");
const contenidoElem = document.querySelector("#contenido");
const preguntaElem = document.querySelector("#pregunta-pensar");

function mostrarPagina() {
    const paginaActual = selector.value;
    contenidoElem.textContent = textos[paginaActual];
    if (preguntaElem) {
        preguntaElem.textContent = preguntas[paginaActual];
    }

    sistema.querySelectorAll("[data-paginas]").forEach(el => {
        const paginas = el.dataset.paginas.split(" ");
        el.setAttribute("visible", paginas.includes(paginaActual));
    });
}

selector.addEventListener("change", mostrarPagina);
sistema.addEventListener("loaded", mostrarPagina);
mostrarPagina();

let enPausa = false;

boton.addEventListener("click", () => {
    enPausa = !enPausa;

    if (enPausa) {
        sistema.pause();
    } else {
        sistema.play();
    }

    boton.textContent = enPausa ? "Continuar animación" : "Pausar animación";
});

marcador.addEventListener("markerFound", () => {
    estado.textContent = "Marcador detectado. Selecciona tu página.";
});

marcador.addEventListener("markerLost", () => {
    estado.textContent = "Vuelve a enfocar el marcador completo.";
});

window.addEventListener("camera-error", () => {
    estado.textContent = "Revisa HTTPS, permisos y disponibilidad de cámara.";
});