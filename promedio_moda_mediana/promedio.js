const lista1 = [
    100,
    200,
    300,
    500
]


function calcularMediaAritmetica(lista){

    // let sumaLista = 0;


    // Iterar con un ciclo for clasico
    // for(let i = 0; i < lista.length;i++){
    //     sumaLista += lista[i];
    // }

    // Metodo reduce
    // Con este elemento podemos reducir el array a un elemento (podemos sumar sus elementos, multiplicarlos, restarlos, etc), reduce es el metodo de array mas complejo
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){

        return valorAcumulado + nuevoElemento;
    });
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista

}

console.log(calcularMediaAritmetica(lista1));