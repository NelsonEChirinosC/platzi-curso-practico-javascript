const lista1 = [
    1,2,3,1,2,3,4,2,2,2,1
];

function calcularModa(lista){

    const listaCount = {};
    
    lista.map(function(elemento){
    
        if(listaCount[elemento]){
    
            listaCount[elemento] += 1;
    
        } else {
            listaCount[elemento] = 1;
        }
    
    });

    // Metodo hecho por el profesor
    // Con Object.entries puedes transformar un objeto en un array que contiene array.
    const listaArray = Object.entries(listaCount).sort((a,b)=>a[1]-b[1]);

    console.log(listaArray)

    const result = listaArray[listaArray.length - 1][0];

    return `Este es la moda: ${result}`

    // Metodo hecho por Nelson
    
    // let countGreater = 0;
    // let result = 0;
    
    // for(let key in listaCount){
    //     // console.log(listaCount[key])
    
    //     if(listaCount[key] > countGreater){
    //         countGreater = listaCount[key]
    //     }
    // }
    
    // for(let key in listaCount){
    //     if(listaCount[key] === countGreater){
    //         result = key
    //     }
    // }

    // return `La moda del array es: ${result}`

}

console.log(calcularModa(lista1));