
const inTexto = document.querySelector(".entrada-texto")
const outTexto = document.querySelector(".salida-texto")
const imgEspera = document.querySelector(".texto-espera")
const borrador = document.querySelector(".borrar")
const copiarbt = document.querySelector(".boton-copiar")


var letra = ["a","e","i","o","u"];
var codigo = ["ai","enter","imes","ober","ufat"];

function btnEncriptar(){
    if (inTexto.value != "") {
        const textoEncriptado = encriptar(inTexto.value);
        outTexto.value = textoEncriptado;
        imgEspera.style.visibility = "hidden";
        borrador.style.visibility = "hidden";
        inTexto.value = "";
        copiarbt.style.visibility = "visible"
    }else{
        outTexto.value = "";
        imgEspera.style.visibility = "visible";
        inTexto.value = "";
        copiarbt.style.visibility = "hidden"
    }
}

function btnDesencriptar(){
    if (inTexto.value != "") {
        const textoDesencriptado = desencriptar(inTexto.value);
        outTexto.value = textoDesencriptado;
        imgEspera.style.visibility = "hidden";
        inTexto.value = "";
        borrador.style.visibility = "hidden";
        copiarbt.style.visibility = "visible"
    } else {
        outTexto.value = "";
        imgEspera.style.visibility = "visible";
        inTexto.value = "";
        copiarbt.style.visibility = "hidden"
    }
}

function btnCopiar(){
    outTexto.select();
    if (outTexto.value != "") {
        navigator.clipboard.writeText(outTexto.value);
        outTexto.value = "";
        imgEspera.style.visibility = "visible";
        copiarbt.style.visibility = "hidden"    
    }
    
}

function aparecer(){
    borrador.style.visibility = "visible";
}

function btnBorrar(){
    inTexto.value = "";
    outTexto.value = "";
    imgEspera.style.visibility = "visible";
    borrador.style.visibility = "hidden";
    copiarbt.style.visibility = "hidden"
}


function encriptar(textoE){
    
    textoE = textoE.toLowerCase();
        
    var palabraFinal = "";

    for (var caracter = 0; caracter < textoE.length; caracter++) {
        var bandera = true;

        for (var condicion = 0; condicion < letra.length; condicion++) {
            
            if (textoE[caracter] == letra[condicion] && bandera) {
                palabraFinal += codigo[condicion];
                bandera = false;
            }   
        }

        if (bandera) {
            palabraFinal += textoE[caracter];
        }             
    
    }
    return palabraFinal;
}

function desencriptar(textoE){
    var palabraFinal = "";

    for (var caracter = 0; caracter < textoE.length; caracter++) {
        var bandera = true;

        for (var condicion = 0; condicion < codigo.length; condicion++) {
            
            if (textoE.substring(caracter, ((codigo[condicion].length)+caracter)) == codigo[condicion]) {
                palabraFinal += letra[condicion];
                caracter += (codigo[condicion].length-1);
                bandera = false;
            }
        }
        if (bandera) {
            palabraFinal += textoE[caracter];
        } 
    }
    return palabraFinal;
}