document.getElementById('button').addEventListener('click', function () {
    const secuencia = document.getElementById('fulladn').value;
    const parcial = document.getElementById('subadn').value;
    let listado = [];

    const igualdades = (secuencia, parcial) => {
        for (let i = 0; i < secuencia.length; i++) {
            let coincidencias = 0;
            for (let j = 0; j < parcial.length; j++) { // Se corrigió el error en la declaración del bucle
                if (parcial[j] === secuencia[i]) { // Se corrigió el operador de comparación
                    listado.push(parcial[j]); // Se corrigió la sintaxis para agregar elementos a un array
                    coincidencias++;
                }
            }
        }
        console.log("Estas son las coincidencias listado: " + listado); // Se corrigió la sintaxis para imprimir en la consola
        return listado; // Se corrigió el retorno de la función
    }

    const coincidenciasTotales = igualdades(secuencia, parcial);
    const porcentajeCoincidencias = (listado.length / secuencia.length) * 100;
    document.getElementById('result').textContent = `La longitud de las coincidencias de ADN es : ${listado.length}.`;
    document.getElementById('result2').textContent=`El porcentaje de coincidencias es :${porcentajeCoincidencias}%`;
    document.getElementById('result3').textContent= `Los valores que coinciden son : ${listado.join(', ')}`;
    
});

