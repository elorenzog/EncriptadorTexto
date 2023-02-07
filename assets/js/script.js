
const letrasNoEncriptadas = ["e", "i", "a", "o", "u"];
const letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];

function encriptador(mensaje, forma) {
    
    mensaje = mensaje.toLowerCase();

    if (forma == 1) {
        
        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
            
            mensaje = mensaje.replaceAll(letrasNoEncriptadas[i], letrasEncriptadas[i]);
        }
    }

    
    else if (forma == 2) {
        
        let mensajeAux = mensaje;

        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
            
            mensaje = mensaje.replaceAll(letrasEncriptadas[i], letrasNoEncriptadas[i]);
        }

        if(mensaje === mensajeAux) {
            alert("Este mensaje no esta encriptado");
            return;
        }
    }

    
    return mensaje;
}

// DOM
const textoEntrada = document.querySelector("#textoEntrada");
const btnEncriptar = document.querySelector("#btnEncriptar");
const textoSalida = document.querySelector("#textoSalida");
const btnCopiar = document.querySelector("#btnCopiar")
const btnDesencriptar = document.querySelector("#btnDesencriptar")
const seccion2 = document.querySelectorAll(".grid-item-2")

const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const muneco = document.querySelector("#muneco");



btnEncriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 1);
            textoEntrada.value = "";
            textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);

btnCopiar.addEventListener("click",
    () => {
        mostrarBranding();
        textoEntrada.value = textoSalida.value; // Copiado automatico
        textoSalida.value = ""; // Se limpia el valor del texto
    }
);

btnDesencriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 2);
            textoEntrada.value = "";
            if (mensaje != undefined)
                textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);



function ocultarBranding() {
    titulo.classList.add("hide")
    parrafo.classList.add("hide")
    muneco.classList.add("hide")
    textoSalida.classList.remove("hide")
    btnCopiar.classList.remove("hide")
}

function mostrarBranding() {
    titulo.classList.remove("hide")
    parrafo.classList.remove("hide")
    muneco.classList.remove("hide")
    textoSalida.classList.add("hide")
    btnCopiar.classList.add("hide")
}