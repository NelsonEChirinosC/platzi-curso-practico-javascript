const lista1 = [
    300,100,50,600,1500,250,300,560,20000, 350
]


function esPar(numero){
    if(numero%2 === 0){
        return true
    } else {
        return false
    }
}

function calcularMediana(lista){

    lista.sort(function(a,b){
        return a -b    
    });
    console.log(lista)
    
    const mitadLista = parseInt(lista.length/2);
    let mediana;
    
    if(esPar(lista.length)){
    
        const elemento1 = lista[mitadLista]
        const elemento2 = lista[mitadLista -1]
    
        mediana = (elemento1 + elemento2)/2
    
    
    } else {
    
        mediana = lista[mitadLista] 
    
    }

    return mediana
}


console.log(calcularMediana(lista1))