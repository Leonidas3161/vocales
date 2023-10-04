const contarVocales = palabra => {
    const vocales = "áéíóú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};


const cadena = "este texto de acción además de una gran admiración por la gelatina de anís tiene una repercicion en el avión del domínguez que tenia mármol";
const vocales = contarVocales(cadena);
console.log("La cadena '%s' tiene %d vocales con tilde", cadena, vocales);
